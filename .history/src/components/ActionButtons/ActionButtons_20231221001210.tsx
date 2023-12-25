"use client";

import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ActionButtons() {
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
