import React from 'react'
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products")
    return await res.json();
}
export default async function page() {
    const products = await getData();
    let students = [
        {
            id: 1,
            age: 15
        },
        {
            id: 2,
            age: 20
        }, {
            id: 3,
            age: 24
        }, {
            id: 4,
            age: 31
        }
    ]
    let result = students.filter((item: any) => {
        return item.age >= 20 && item.age <= 20
    });
    console.log("giá trị sau khi lọc", result);

    return (
        <div>bài tập 7.
            <select name="" id="">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <span>----> </span>
            <select name="" id="">
                <option value="100">100</option>
                <option value="120">120</option>
                <option value="130">130</option>
            </select>
            <button>lọc</button>
            {
                products.map((item: any) => {
                    return (
                        <div>
                            <p>tên sản phẩm:{item.title} </p>
                            <p>giá sản phẩm:{item.price} </p>
                            <p>**********</p>
                        </div>
                    )
                })
            }
        </div>
        /* 
            các bước làm:
                B1: tạo trên giao diện select- option 
                B2: tạo 2 state để lấy giá trị khi người dùng chọn 2 ô select
                B3: đi lấy tất cả sản phẩm từ API
                B4: filter lọc những sản phẩm thỏa mãn giá 
                B5: render
        */
    )
}

// lọc ra những đối tượng có tuổi 20 đến 30
