import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./features/Home/home";
import About from "./features/About/About";
import Contact from "./features/Contact/contact";
import Navigation from "./features/Navigation/Navigation";
import LogIn from "./features/LogIn/logIn";
import CreatePost from "./features/CreatePost/CreatePost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
