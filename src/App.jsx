import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/contact";
import Navigation from "./features/Navigation/Navigation";
import Login from "./features/Login/Login";
import CreatePost from "./features/CreatePost/CreatePost";
import ProtectedRoute from "./components/ProtectedRoute";
import Notification from "./components/Notification/Notification";
import PostPage from "./features/Home/components/PostPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Notification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route
            path="/create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
