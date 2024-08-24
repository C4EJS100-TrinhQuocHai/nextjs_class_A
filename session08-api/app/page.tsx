
import fs from "fs"
import path from "path"

export default function page() {
  const filePath = path.join(process.cwd(), "app/products/product.txt");
  const data = fs.writeFileSync(filePath, "hello world1111!", "utf8");
  // console.log("file được đọc với nội dung:", data);


  return (
    <div>page</div>
  )
}
