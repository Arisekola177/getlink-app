import Criteria from "./Components/Criteria";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Homebanner from "./Components/Homebanner";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Partner from "./Components/Partner";
import Privacy from "./Components/Privacy";
import Reward from "./Components/Reward";
import Rules from "./Components/Rules";
import Timeline from "./Components/Timeline";


function App() {
  return (
    <div className="bg-secColor">
         <Navbar />
         <Homebanner />
         <Introduction />
         <Rules/>
         <Criteria/>
         <FAQ />
         <Timeline />
         <Reward />
         <Partner />
         <Privacy />
         <Footer />
    </div>
  );
}

export default App;
