import Image from "next/image";
import { getAllPosts } from "../../utils/api-calls/apiMethods";

export default async function Home() {
  const data = await getAllPosts();
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  return (
    <main className="main-container">
      <h3>Hello World</h3>
    </main>
  );
}
