import React, { useState, useEffect, useRef } from "react";
import ConfettiEffect from "./ConfettiEffect";

const ShakeDiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [score, setScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [rollCount, setRollCount] = useState(0);
  const [bestRoll, setBestRoll] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastRollType, setLastRollType] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const shakeContainerRef = useRef(null);

  // Tạo âm thanh bằng Web Audio API
  const playShakeSound = () => {
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        100,
        audioContext.currentTime + 0.1
      );

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Không có âm thanh nếu không hỗ trợ
    }
  };

  const playResultSound = (rollType) => {
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (rollType === "jackpot") {
        // Âm thanh jackpot
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(
          659,
          audioContext.currentTime + 0.1
        );
        oscillator.frequency.setValueAtTime(
          784,
          audioContext.currentTime + 0.2
        );
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.3
        );
        oscillator.stop(audioContext.currentTime + 0.3);
      } else if (rollType === "double") {
        // Âm thanh đôi
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(
          554,
          audioContext.currentTime + 0.1
        );
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.2
        );
        oscillator.stop(audioContext.currentTime + 0.2);
      } else {
        // Âm thanh thường
        oscillator.frequency.setValueAtTime(330, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.1
        );
        oscillator.stop(audioContext.currentTime + 0.1);
      }

      oscillator.start(audioContext.currentTime);
    } catch (error) {
      // Không có âm thanh nếu không hỗ trợ
    }
  };

  // Hàm tạo số ngẫu nhiên từ 1-6
  const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

  // Hiệu ứng lắc xí ngầu
  const shakeDice = () => {
    if (isShaking) return;

    setIsShaking(true);
    setShowResult(false);

    // Phát âm thanh lắc
    playShakeSound();

    // Hiệu ứng rung lắc container
    if (shakeContainerRef.current) {
      shakeContainerRef.current.classList.add("animate-bounce");
    }

    // Tạo hiệu ứng lắc với nhiều lần thay đổi
    let shakeCount = 0;
    const maxShakes = 15;

    const shakeInterval = setInterval(() => {
      setDice1(getRandomDiceValue());
      setDice2(getRandomDiceValue());
      shakeCount++;

      if (shakeCount >= maxShakes) {
        clearInterval(shakeInterval);

        // Kết quả cuối cùng
        setTimeout(() => {
          const finalDice1 = getRandomDiceValue();
          const finalDice2 = getRandomDiceValue();
          const total = finalDice1 + finalDice2;

          setDice1(finalDice1);
          setDice2(finalDice2);
          setScore((prevScore) => prevScore + total);
          setRollCount((prevCount) => prevCount + 1);

          // Cập nhật best roll
          if (total > bestRoll) {
            setBestRoll(total);
          }

          // Xác định loại lần lắc
          let rollType = "";
          if (finalDice1 === finalDice2) {
            rollType = "double";
            if (total === 12) rollType = "jackpot";
          } else if (total === 7) {
            rollType = "lucky";
          } else if (total <= 4) {
            rollType = "low";
          } else if (total >= 10) {
            rollType = "high";
          }

          setLastRollType(rollType);

          // Cập nhật streak
          if (rollType === "double" || rollType === "jackpot") {
            setStreak((prev) => prev + 1);
          } else {
            setStreak(0);
          }

          // Kiểm tra achievements
          checkAchievements(total, rollType, rollCount + 1);

          // Thêm vào lịch sử
          setGameHistory((prevHistory) => [
            ...prevHistory,
            {
              roll: prevHistory.length + 1,
              dice1: finalDice1,
              dice2: finalDice2,
              total: total,
              type: rollType,
              timestamp: new Date().toLocaleTimeString(),
            },
          ]);

          setIsShaking(false);
          setShowResult(true);

          // Phát âm thanh kết quả
          playResultSound(rollType);

          // Hiển thị confetti nếu là jackpot
          if (rollType === "jackpot") {
            setShowConfetti(true);
          }

          // Xóa hiệu ứng rung
          if (shakeContainerRef.current) {
            shakeContainerRef.current.classList.remove("animate-bounce");
          }
        }, 500);
      }
    }, 80);
  };

  // Kiểm tra achievements
  const checkAchievements = (total, rollType, currentRollCount) => {
    const newAchievements = [];

    if (total === 12 && !achievements.includes("jackpot")) {
      newAchievements.push("jackpot");
    }
    if (
      rollType === "double" &&
      streak >= 2 &&
      !achievements.includes("double_streak")
    ) {
      newAchievements.push("double_streak");
    }
    if (currentRollCount === 10 && !achievements.includes("veteran")) {
      newAchievements.push("veteran");
    }
    if (score + total >= 100 && !achievements.includes("century")) {
      newAchievements.push("century");
    }

    if (newAchievements.length > 0) {
      setAchievements((prev) => [...prev, ...newAchievements]);
    }
  };

  // Reset game
  const resetGame = () => {
    setDice1(1);
    setDice2(1);
    setScore(0);
    setGameHistory([]);
    setRollCount(0);
    setBestRoll(0);
    setStreak(0);
    setLastRollType("");
    setShowResult(false);
    setAchievements([]);
    setIsShaking(false);
  };

  // Render mặt xí ngầu
  const renderDiceFace = (value) => {
    const dotConfigs = {
      1: [{ top: "50%", left: "50%" }],
      2: [
        { top: "25%", left: "25%" },
        { top: "75%", left: "75%" },
      ],
      3: [
        { top: "25%", left: "25%" },
        { top: "50%", left: "50%" },
        { top: "75%", left: "75%" },
      ],
      4: [
        { top: "25%", left: "25%" },
        { top: "25%", left: "75%" },
        { top: "75%", left: "25%" },
        { top: "75%", left: "75%" },
      ],
      5: [
        { top: "25%", left: "25%" },
        { top: "25%", left: "75%" },
        { top: "50%", left: "50%" },
        { top: "75%", left: "25%" },
        { top: "75%", left: "75%" },
      ],
      6: [
        { top: "25%", left: "25%" },
        { top: "25%", left: "75%" },
        { top: "50%", left: "25%" },
        { top: "50%", left: "75%" },
        { top: "75%", left: "25%" },
        { top: "75%", left: "75%" },
      ],
    };

    return dotConfigs[value].map((dot, index) => (
      <div
        key={index}
        className="absolute w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: dot.top, left: dot.left }}
      />
    ));
  };

  // Lấy màu sắc theo loại lần lắc
  const getRollTypeColor = (type) => {
    switch (type) {
      case "jackpot":
        return "text-yellow-400";
      case "double":
        return "text-purple-400";
      case "lucky":
        return "text-green-400";
      case "high":
        return "text-blue-400";
      case "low":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  // Lấy text theo loại lần lắc
  const getRollTypeText = (type) => {
    switch (type) {
      case "jackpot":
        return "🎰 JACKPOT!";
      case "double":
        return "🎯 ĐÔI!";
      case "lucky":
        return "🍀 MAY MẮN!";
      case "high":
        return "🔥 CAO!";
      case "low":
        return "❄️ THẤP";
      default:
        return "";
    }
  };

  const averageScore = rollCount > 0 ? (score / rollCount).toFixed(1) : "0.0";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            🎲 Game Lắc Xí Ngầu 🎲
          </h1>
          <p className="text-white/80 text-xl">
            Lắc mạnh để có kết quả tốt nhất!
          </p>
        </div>

        {/* Main Game Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Stats */}
          <div className="space-y-6">
            {/* Thống kê chính */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                📊 Thống Kê
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                  <span className="text-white">Tổng điểm:</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    {score}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                  <span className="text-white">Số lần lắc:</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {rollCount}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl">
                  <span className="text-white">Điểm TB:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {averageScore}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl">
                  <span className="text-white">Lần tốt nhất:</span>
                  <span className="text-2xl font-bold text-pink-400">
                    {bestRoll}
                  </span>
                </div>
                {streak > 0 && (
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl">
                    <span className="text-white">Streak đôi:</span>
                    <span className="text-2xl font-bold text-purple-400">
                      {streak}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  🏆 Thành Tích
                </h3>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-2 bg-yellow-500/20 rounded-lg text-center"
                    >
                      <span className="text-yellow-400 font-bold">
                        {achievement === "jackpot" && "🎰 Jackpot Master"}
                        {achievement === "double_streak" && "🎯 Double Streak"}
                        {achievement === "veteran" && "🎖️ Veteran Player"}
                        {achievement === "century" && "💯 Century Club"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center Panel - Dice Area */}
          <div className="flex flex-col items-center space-y-8">
            {/* Dice Container */}
            <div
              ref={shakeContainerRef}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-center gap-8 mb-6">
                {/* Xí ngầu 1 */}
                <div
                  className={`relative w-28 h-28 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
                    isShaking ? "animate-spin" : "hover:scale-110"
                  }`}
                >
                  {renderDiceFace(dice1)}
                </div>

                {/* Xí ngầu 2 */}
                <div
                  className={`relative w-28 h-28 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
                    isShaking ? "animate-spin" : "hover:scale-110"
                  }`}
                >
                  {renderDiceFace(dice2)}
                </div>
              </div>

              {/* Kết quả */}
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  Tổng: {dice1 + dice2}
                </div>
                {showResult && lastRollType && (
                  <div
                    className={`text-2xl font-bold animate-bounce ${getRollTypeColor(
                      lastRollType
                    )}`}
                  >
                    {getRollTypeText(lastRollType)}
                  </div>
                )}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <button
                onClick={shakeDice}
                disabled={isShaking}
                className={`px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg ${
                  isShaking
                    ? "bg-gray-500 cursor-not-allowed animate-pulse"
                    : "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 hover:scale-105 active:scale-95"
                } text-white`}
              >
                {isShaking ? "🎲 Đang lắc..." : "🎲 LẮC XÍ NGẦU"}
              </button>

              <button
                onClick={resetGame}
                disabled={isShaking}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                🔄 Chơi Lại
              </button>
            </div>
          </div>

          {/* Right Panel - History */}
          <div className="space-y-6">
            {gameHistory.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  📜 Lịch Sử
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {gameHistory
                    .slice(-10)
                    .reverse()
                    .map((entry, index) => (
                      <div
                        key={entry.roll}
                        className={`p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                          entry.type === "jackpot"
                            ? "bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/50"
                            : entry.type === "double"
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
                            : "bg-white/10 hover:bg-white/15"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-400 font-bold">
                              #{entry.roll}
                            </span>
                            <span className="text-white font-mono">
                              🎲 {entry.dice1} + {entry.dice2}
                            </span>
                            {entry.type && (
                              <span
                                className={`text-sm ${getRollTypeColor(
                                  entry.type
                                )}`}
                              >
                                {getRollTypeText(entry.type)}
                              </span>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-bold">
                              = {entry.total}
                            </div>
                            <div className="text-white/60 text-xs">
                              {entry.timestamp}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {gameHistory.length > 10 && (
                  <p className="text-white/60 text-center mt-3 text-sm">
                    Hiển thị 10 lần gần nhất • Tổng: {gameHistory.length} lần
                  </p>
                )}
              </div>
            )}

            {/* Game Rules */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-3 text-center">
                🎯 Luật Chơi
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>
                  🎰 <strong>Jackpot (12 điểm):</strong> Đôi 6
                </p>
                <p>
                  🎯 <strong>Đôi:</strong> 2 xí ngầu cùng số
                </p>
                <p>
                  🍀 <strong>May mắn:</strong> Tổng = 7
                </p>
                <p>
                  🔥 <strong>Cao:</strong> Tổng ≥ 10
                </p>
                <p>
                  ❄️ <strong>Thấp:</strong> Tổng ≤ 4
                </p>
                <p>
                  🏆 <strong>Thành tích:</strong> Mở khóa khi đạt mốc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Effect */}
      <ConfettiEffect
        show={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />
    </div>
  );
};

export default ShakeDiceGame;
