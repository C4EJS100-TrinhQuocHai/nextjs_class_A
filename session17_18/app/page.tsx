import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'học lập trình nextjs',
  description: 'học nextjs cơ bản, đơn giản, basic',
}
export default function page() {
  return (
    <div>page
      <img width={200} height={200} src="https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" alt="capybara" />
      <Image
        src={"https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg"}
        height={200}
        width={200}
        alt='capybara'>
      </Image>
      <Image
        src={"https://gaubongonline.vn/wp-content/uploads/2024/05/BST-Website-6.png"}
        alt='anh gau bong'
        height={200}
        width={200}
      >
      </Image>
      <Image
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTzflXbSFFhPH9rpOQD3G6FlANLKLCFrO4A&s"}
        height={200}
        width={200}
        alt='cơn mưa mèn mén'
      >
      </Image>
    </div>
  )
}
