import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Navigation from "./features/Navigation/Navigation";
import Auth from "./features/auth/Auth";
import CreatePost from "./features/CreatePost/CreatePost";
import ProtectedRoute from "./components/ProtectedRoute";
import Notification from "./components/Notification/Notification";
import PostPage from "./features/Home/components/PostPage";
import Footer from "./features/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Notification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
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
          <Route
            path="/login"
            element={<Navigate to="/auth/signin" replace />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
