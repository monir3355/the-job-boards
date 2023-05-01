import React, { createContext, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-471px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
