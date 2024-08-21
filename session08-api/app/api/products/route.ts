import { NextResponse } from "next/server";

/* 
    các phương thức làm việc với API theo chuẩn

    1. GET : lấy về
    2. POST: thêm mới
    3. PUT: cập nhật tất cả
    4. PATCH: sửa 1 phần
    5. DELETE: xóa
    - tên của function là tên của phương thức và viết hoa hết lên.
*/
// data lấy ở đâu.
let products = [
    {
        id: 1,
        name: "iphone5",
        price: 5000,
    },
    {
        id: 2,
        name: "mèn mén",
        price: 4000,
    },
    {
        id: 3,
        name: "ihone15",
        price: 5000,
    },
];

export async function GET() {
    ///
    return NextResponse.json({
        message: "lấy danh sách sản phẩm thành công!",
        data: products,
    });
}
export async function POST(req: any, res: any) {
    // console.log("req", req);
    // console.log("res", res);
    let data = await req.json();
    // console.log(111, data);

    ///
    return NextResponse.json({
        message: "thêm dữ liệu thành công!",
        data: data,
    });
}
