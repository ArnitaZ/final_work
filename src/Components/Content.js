import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import ArticleC from "../Pages/ArticleC";
import Articles from "../Pages/Articles";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import "../Components/Main.css";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/articleC" element={<ArticleC />} />
      </Routes>
    </div>
  );
}
export default Content;
