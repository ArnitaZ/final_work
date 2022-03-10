import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Articles from "../Pages/Articles";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/regisration" element={<Registration />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
export default Content;
