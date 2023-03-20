import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <main className="pt-[72px]">
      <Outlet />
    </main>
  );
};
