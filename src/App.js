import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Signup from "./Pages/Signup";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes /> */}
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
