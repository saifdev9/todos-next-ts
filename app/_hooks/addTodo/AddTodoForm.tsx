"use client";

import React from "react";
import { useAppDispatch } from "../_hooks/app";
import { addTodo } from "../todoSlice";

export default function AddTodoForm() {
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const { quantity, description } = Object.fromEntries(fd.entries());

    console.log(quantity, description);

    if (!description) return;

    dispatch(
      addTodo({
        quantity,
        description,
        id: Date.now(),
      })
    );

    (e.target as HTMLFormElement).reset();
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="">Description</label>
        <input
          className="w-[20%]"
          placeholder="enter Desc"
          type="text"
          name="description"
        />
        <label htmlFor="">quantity</label>
        <input
          className="w-[20%]"
          placeholder="enter qty"
          defaultValue={1}
          type="number"
          name="quantity"
        />
      </div>

      <button>add todo</button>
    </form>
  );
}
