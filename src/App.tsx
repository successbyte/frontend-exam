import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import MainLayout from "./layout/MainLayout";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
