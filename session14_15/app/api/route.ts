// cấu hình các method (GET,POST, PUT, PATCH, DELETE);

import { NextResponse } from "next/server";
let users = [
    {
        id: 1,
        name: "phương hoa",
        address: "HN",
    },
    {
        id: 2,
        name: "hồng vân",
        address: "HCM",
    },
    {
        id: 3,
        name: "xuân pháp",
        address: "hà giang",
    },
];
export async function GET() {
    return NextResponse.json(users);
}
