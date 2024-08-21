import { NextResponse } from "next/server";
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
export async function GET(req: any, res: any) {
    console.log(":req", req);
    console.log(":res", res);
    let findItem = products.find((item) => {
        return item.id == +res.params.idProduct;
    });
    return NextResponse.json({
        message: "lấy danh sách 1 sản phẩm thành công!",
        data: findItem,
    });
}
