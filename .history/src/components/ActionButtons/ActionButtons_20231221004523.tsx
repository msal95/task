"use client";

import { deletePost } from "@/utils/api-calls/apiMethods";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ActionButtons(item: any) {
  console.log(
    "🚀 ~ file: ActionButtons.tsx:21 ~ ActionButtons ~ item:",
    item?.item
  );
  const { id, title, content } = item.item;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(title || "");
  console.log(
    "🚀 ~ file: ActionButtons.tsx:25 ~ ActionButtons ~ titleInput:",
    titleInput
  );
  const [contentInput, setContentInput] = useState(content || "");
  console.log(
    "🚀 ~ file: ActionButtons.tsx:27 ~ ActionButtons ~ contentInput:",
    contentInput
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log("🚀 ~ file: ActionButtons.tsx:9 ~ ActionButtons ~ id:", id);
  const handleDelete = async () => {
    try {
      const response = await deletePost(id?.id);
      console.log(
        "🚀 ~ file: ActionButtons.tsx:12 ~ handleDelete ~ response:",
        response
      );
      if (response?.status === 200) {
        alert(response?.message);
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
      <button onClick={openModal}>
        <FaEdit color="green" size={30} className="my-3" />
      </button>
      <button onClick={handleDelete}>
        <MdDelete color="red" size={30} className="my-3" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <form>
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
      </Modal>
    </div>
  );
}
