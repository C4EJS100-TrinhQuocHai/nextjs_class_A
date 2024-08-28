import React from 'react'
import axios from 'axios'
async function getData() {
    try {
        const res = await axios.get("https://jsonplaceholde111r.typicode.com/users");
        console.log("giá trị res", res);
        return res.data
    } catch (error) {
        return "lỗi trong quá trình lấy dữ liệu."
    }
}
export default async function page() {
    // let a = "hello";
    // console.log(11111, Array.isArray(a));
    const users = await getData();
    return (
        <div>tìm nạp dữ liệu server bằng axios!
            {Array.isArray(users) ? users.map((item: any) => <li>{item.name}</li>) : users}
            {/* {users?.map((item: any) => {
                return <li>{item.name}</li>
            })} */}
        </div>
    )
}
