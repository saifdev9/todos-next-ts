import Todos from "./Todos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page({
  searchParams,
}: {
  searchParams: { quantity: string };
}) {
  const filterValue = searchParams.quantity || "all";

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">
            Welcome to Todos App
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Todos filterValue={filterValue} />
        </CardContent>
      </Card>
    </div>
  );
}
