import ActionButtons from "@/components/ActionButtons/ActionButtons";
import { getAllPosts } from "../../utils/api-calls/apiMethods";
import CreatePost from "@/components/CreatePost/CreatePost";

export default async function Home() {
  const data = await getAllPosts();
  return (
    <main className="main-container">
      <CreatePost />

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

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">
                  <ActionButtons item={item} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
