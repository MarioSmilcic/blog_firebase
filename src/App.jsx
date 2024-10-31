import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Home/home";
import About from "./features/About/About";
import Contact from "./features/Contact/contact";
import Navigation from "./features/Navigation/Navigation";
import Login from "./features/Login/Login";
import CreatePost from "./features/CreatePost/CreatePost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

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
