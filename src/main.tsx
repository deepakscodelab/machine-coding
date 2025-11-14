import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const App = React.lazy(() => import("./App"));
const Pagination = React.lazy(() => import("./components/Pagination"));
const TodoList = React.lazy(() => import("./components/TodoList"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
