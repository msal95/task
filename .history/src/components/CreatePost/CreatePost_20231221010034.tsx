import { createPost } from "@/utils/api-calls/apiMethods";
import React, { useState } from "react";

export default function CreatePost() {
  const [titleInput, setTitleInput] = useState("");

  const [contentInput, setContentInput] = useState("");

  const handleSubmit = async () => {
    const data = {
      title: titleInput,
      content: contentInput,
    };
    try {
      const response = await createPost(data);
      console.log(
        "🚀 ~ file: ActionButtons.tsx:12 ~ handleDelete ~ response:",
        response
      );
      if (response?.status === 200) {
        alert(response?.data?.message);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: ActionButtons.tsx:12 ~ handleDelete ~ error:",
        error
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-slate-300 p-1 m-1"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="text"
          name="content"
          id="content"
          className="border border-slate-300 p-1 m-1"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          className="border border-slate-300 p-1 m-1"
        />
      </form>
    </div>
  );
}
