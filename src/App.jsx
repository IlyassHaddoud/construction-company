import Achivements from "./Components/Achievements";
import Articles from "./Components/Articles";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";
import TrustedClients from "./Components/TrustedClients";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Achivements />
      <TrustedClients />
      <Articles />
      <Help />
      <Reviews />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
