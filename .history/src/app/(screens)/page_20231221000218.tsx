import Image from "next/image";
import { getAllPosts } from "../../utils/api-calls/apiMethods";

export default async function Home() {
  const data = await getAllPosts();
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  return (
    <main className="main-container">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr className="text-white">
            <th className="px-6 py-3 text-start text-xs font-medium text-white uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-white uppercase">
              Content
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-white uppercase">
              created At
            </th>
            <th className="px-6 py-3 text-start text-xs font-medium text-white uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {data?.data?.map((item) => {
            return (
              <tr
                className="hover:bg-gray-500 dark:hover:bg-gray-700"
                key={item?.id}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">
                  {item?.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">
                  {item?.content}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">
                  {item?.createdAt}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
