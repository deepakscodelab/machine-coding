import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const App = React.lazy(() => import("./App"));
const Pagination = React.lazy(() => import("./components/Pagination"));
const TodoList = React.lazy(() => import("./components/TodoList"));
const ProgressBar = React.lazy(() => import("./components/Progressbar"));
const TabForm = React.lazy(() => import("./components/TabForm"));
const Autocomplete = React.lazy(() => import("./components/Autocomplete"));
const Accordion = React.lazy(() => import("./components/Accordion"));
const Stopwatch = React.lazy(() => import("./components/Stopwatch"));
const ImageCarousel = React.lazy(() => import("./components/ImageCarousel"));
const FileExplorer = React.lazy(() => import("./components/FileExplorer"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/progressbar" element={<ProgressBar />} />
          <Route path="/tabform" element={<TabForm />} />
          <Route path="/autocomplete" element={<Autocomplete />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/carousel" element={<ImageCarousel />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
