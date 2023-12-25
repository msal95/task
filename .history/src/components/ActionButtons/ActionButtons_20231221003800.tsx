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

export default function ActionButtons(id: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <p>{(id?.title, id.content)}</p>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
