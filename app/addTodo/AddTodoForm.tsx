"use client";

import React from "react";
import { useAppDispatch } from "../_hooks/app";
import { addTodo } from "../todoSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddTodoForm() {
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const { quantity, description } = Object.fromEntries(fd.entries());

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Enter description"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          min={1}
          defaultValue={1}
          placeholder="Enter quantity"
        />
      </div>

      <Button type="submit" className="mt-4">
        Add Todo
      </Button>
    </form>
  );
}
