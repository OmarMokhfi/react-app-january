import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      {/* We can add a component that should be rendered in all pages before setting the routes */}
      {/* STEP 2: Adding Routes */}
      <Routes>
        {/* Static Route */}
        <Route path="/" element={<HomePage />}></Route>
        {/* Dynamic Route */}
        <Route path="/posts/:slug" element={<PostPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
