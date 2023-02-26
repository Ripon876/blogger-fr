import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import RequireAuth from "./auth/RequireAuth";
import NotRequireAuth from "./auth/NotRequireAuth";
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import LoginPage from "./pages/Login";
import BlogsPage from "./pages/Blogs";
import AddBlogPage from "./pages/AddBlog";
import ChatPage from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth />}>
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/addblog" element={<AddBlogPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
        <Route element={<NotRequireAuth />}>
          <Route path="/signup" element={<Singup />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
