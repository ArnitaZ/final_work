import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
