"use client";

import * as React from "react";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Nav />
      </div>
    </header>
  );
}
