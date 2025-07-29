import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

type LinkButtonType = { href: string; children: string };

export default function LinkButton({ href, children }: LinkButtonType) {
  return (
    <Button asChild variant="link">
      <Link href={href}>{children}</Link>
    </Button>
  );
}
