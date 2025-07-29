import { FormEvent } from "react";
import AddTodoForm from "./AddTodoForm";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-2xl">Welcome to Todos App</h1>

      <AddTodoForm />

      <Link href={"/todos"}>go to todos</Link>
    </div>
  );
}
