import Image from "next/image";
import { getAllPosts } from "../../utils/api-calls/apiMethods";

export default async function Home() {
  const data = await getAllPosts();
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  return (
    <main className="main-container">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
<tr>
          {
            data?.data?.map((item)=>{
              return(
            <td>{item?.title}</td>
            <td>{item?.content}</td>
            <td>{item?.createdAt}</td>
              )
            })
          }
          </tr>
          
        </tbody>
      </table>
    </main>
  );
}
