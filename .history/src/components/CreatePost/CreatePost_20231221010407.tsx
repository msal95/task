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
      <form>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className="border border-slate-300 p-1 m-1"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          id="content"
          className="border border-slate-300 p-1 m-1"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <button className="border text-white border-slate-300 p-1 m-1">
          Submit
        </button>
      </form>
    </div>
  );
}
