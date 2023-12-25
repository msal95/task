import React from "react";

export default function CreatePost() {
  const [titleInput, setTitleInput] = useState("");

  const [contentInput, setContentInput] = useState("");
  return (
    <div>
      <form onSubmit={handleUpdate}>
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
