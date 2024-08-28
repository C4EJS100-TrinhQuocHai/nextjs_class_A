import React from 'react'
async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
export default async function page(props: any) {
    console.log("1111", props);
    const { params } = props
    const posts = await getPost(params.id)
    return (
        <div>Chi tiết bài viết!
            <p>{posts.title}</p>
        </div>

    )
}
