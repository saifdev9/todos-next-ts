"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../_hooks/app";
import { removeTodo } from "../todoSlice";
import Link from "next/link";
import Filter from "../_components/Filter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Todos({ filterValue }: { filterValue: string }) {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  let filteredTodos = todos;

  if (+filterValue === 5)
    filteredTodos = todos.filter((todo) => todo.quantity <= 5);
  else if (+filterValue === 10)
    filteredTodos = todos.filter((todo) => todo.quantity <= 10);

  return (
    <div className="space-y-6">
      <Filter />

      {filteredTodos.length === 0 ? (
        <p className="text-muted-foreground text-center mt-6">
          No todos to show
        </p>
      ) : (
        <div className="space-y-4">
          {filteredTodos.map((todo) => (
            <Card
              key={todo.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <p className="font-medium">{todo.description}</p>
                <Badge variant="secondary">Qty: {todo.quantity}</Badge>
              </div>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center pt-6">
        <p className="text-sm">
          Want to add more?{" "}
          <Link
            href="/addTodo"
            className="text-blue-600 hover:underline font-medium"
          >
            Add Todo
          </Link>
        </p>
      </div>
    </div>
  );
}
