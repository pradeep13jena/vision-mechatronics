import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function App() {
  const location = useLocation(); // Extracting location properly

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer (Only visible if not on home page) */}
      {location.pathname !== "/" && <Footer />}

      {/* Sidebar (Hidden on large screens) */}
      <Sidebar />
    </div>
  );
}
