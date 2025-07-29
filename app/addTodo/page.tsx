import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import AddTodoForm from "./AddTodoForm";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">
            Add a New Todo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <AddTodoForm />

          <div className="text-center">
            <Button asChild variant="link">
              <Link href="/todos">Go to Todos</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
