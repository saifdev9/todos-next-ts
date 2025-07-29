"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
