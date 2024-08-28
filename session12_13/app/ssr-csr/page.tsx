"use client";
import React, { useEffect, useState } from 'react'
// async 
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = res.json();
    return data;
}
export default function page() {
    const [post, setPost] = useState([]);
    const [flag, setFlag] = useState<boolean>(false);
    useEffect(() => {
        // đi goi API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
            .catch(err => {
                console.log("lỗi", err);
            })
    }, [flag])
    // if (flag) {
    //     // đi gọi API
    //     let data = await getData()
    //     setFlag(false)
    //     setPost(data)
    // }
    const handleClick = () => {
        setFlag(!flag)
    }
    // const posts = await getData();
    return (
        <div>Danh sách bài viết với refresh!
            <button onClick={handleClick}>refresh</button>
            {post.map((item: any) => {
                return <li>{item.title}</li>
            })}
        </div>
    )
}
