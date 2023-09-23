import "./App.css";
import Header from "./componants/header";
import Main from "./componants/main";
import Services from "./componants/services";
import Experience from "./componants/experience";
import Portfolio from "./componants/portfolio";
import Testimonials from "./componants/testimonials";
import Footer from "./componants/footer";
function App() {
  return (
    <div id="container">
      <Header />
      <Main />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
