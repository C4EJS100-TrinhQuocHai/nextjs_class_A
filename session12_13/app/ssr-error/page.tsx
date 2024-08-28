import { json } from 'node:stream/consumers';
import React from 'react'

// tạo function lấy data từ API
async function getUser() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url ")
    // const data= res.json()
    // return data
    try {
        const res = await fetch("https://1111jsonplaceholder.typicode.com/nonexistent-url ")
        const data = res.json()
        return data
    } catch (error: any) {
        console.log("lỗi111111222", error);
        return "đường dẫn sai1122221!";
    }
}
export default async function page() {
    const data = await getUser();
    return (
        <div>Xử lý lỗi với SSR : {data} </div>
    )
}
