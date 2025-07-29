"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ModeToggle } from "./_components/ModeToggle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <Provider store={store}>{children}</Provider>
    </div>
  );
}
