import React from "react";

const SanPhamChiTiet = (props) => {
  const { spChiTiet } = props;
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden md:max-w-4xl mt-10">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={spChiTiet.hinhAnh}
            alt="VinSmart Live"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {spChiTiet.tenSP}
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Màn hình:</span>
              <span>{spChiTiet.manHinh}</span>
            </div>
            <div className="flex justify-between">
              <span>Hệ điều hành:</span>
              <span>{spChiTiet.heDieuHanh}</span>
            </div>
            <div className="flex justify-between">
              <span>Camera trước:</span>
              <span>{spChiTiet.cameraTruoc}</span>
            </div>
            <div className="flex justify-between">
              <span>Camera sau:</span>
              <span>{spChiTiet.cameraSau}</span>
            </div>
            <div className="flex justify-between">
              <span>RAM:</span>
              <span>{spChiTiet.ram}</span>
            </div>
            <div className="flex justify-between">
              <span>ROM:</span>
              <span>{spChiTiet.rom}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanPhamChiTiet;
