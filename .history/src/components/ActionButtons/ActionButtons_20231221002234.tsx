"use client";

import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ActionButtons(id: { id: string }) {
  const handleDelete = async () => {
    try {
    } catch (error) {
      console.log(
        "🚀 ~ file: ActionButtons.tsx:12 ~ handleDelete ~ error:",
        error
      );
    }
  };
  return (
    <div>
      <button onClick={() => alert("Hello")}>
        <FaEdit color="green" size={30} className="my-3" />
      </button>
      <button onClick={() => alert("Hello")}>
        <MdDelete color="red" size={30} className="my-3" />
      </button>
    </div>
  );
}
