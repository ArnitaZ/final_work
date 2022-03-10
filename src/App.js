import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="container-fluid d-flex flex-column min-vh-100">
        <Header />

        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
