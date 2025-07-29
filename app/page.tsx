import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Welcome to Todos App
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button asChild>
            <Link href="/todos">See Your Todos</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
