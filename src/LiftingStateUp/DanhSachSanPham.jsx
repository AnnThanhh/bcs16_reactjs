import React, { useState } from "react";
import SanPhamChiTiet from "./SanPhamChiTiet";
import SanPham from "./SanPham";
import GioHang from "./GioHang";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./public/img/LiftingStateUP/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./public/img/LiftingStateUP/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./public/img/LiftingStateUP/applephone.jpg",
  },
];

const DanhSachSanPham = () => {
  const [spChiTiet, setSpChitiet] = useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./public/img/LiftingStateUP/vsphone.jpg",
  });

  let [gioHang, setGioHang] = useState([
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700000,
      hinhAnh: "./public/img/LiftingStateUP/vsphone.jpg",
      soLuong: 2,
    },
  ]);
  //state đặt ở đâu thì hàm xử lý setState sẽ nằm trên component đó
  const themGioHang = (sp) => {
    //tạo ra sp số lượng
    const spClick = { ...sp, soLuong: 1 };
    /**
     * th1: sp đã tồn tại => sp.soluong +=1
     * th2: sp chưa tồn tại trong giỏ hàng => thêm mới
     */
    //xử lý setState tại hàm này

    const ktSP = gioHang.find((item) => item.maSP === spClick.maSP);
    if (ktSP) {
      ktSP.soLuong += 1;
    } else {
      gioHang = [...gioHang, spClick];
    }
    //tạo ra 1 giỏ hàng update để cho react hiểu có sự đổi
    let gioHangUpdate = [...gioHang];
    setGioHang(gioHangUpdate);
  };

  const xoaGioHang = (maSPCLick) => {
    //xử lý xóa -> tìm tới id gioHang.filter -> item -> item.id !== maSPClick
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5">Giỏ Hàng</h1>
      <GioHang gioHang={gioHang} xoaGioHang={xoaGioHang} />
      <h1 className="text-center mt-5">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.map((sp) => {
          return (
            <div key={sp.id}>
              <SanPham
                sp={sp}
                handleChange={setSpChitiet}
                handleThemGioHang={themGioHang}
              />
            </div>
          );
        })}
      </div>

      <h1 className="text-center mt-5">Sản phẩm chi tiết</h1>
      <SanPhamChiTiet spChiTiet={spChiTiet} />
    </div>
  );
};

export default DanhSachSanPham;
