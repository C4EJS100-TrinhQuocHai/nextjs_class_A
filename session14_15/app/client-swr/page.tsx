"use client"
import useSWR from 'swr'
import axios from 'axios'
// viết hàm đi lấy data
const getData = (url: string) => axios.get(url).then(res => res.data)
export default function page() {
    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        getData
    )
    if (error) return <div>quá trình lấy dữ liệu thất bại</div>
    console.log("giá trị data1111", data);
    if (!data) return <div>đang tải dữ liệu ...</div>
    return (
        <div>fetching data với thư viện swr
            {data.map((item: any) => {
                return <li key={item.id}>{item.name}</li>
            })}
        </div>
    )
}
