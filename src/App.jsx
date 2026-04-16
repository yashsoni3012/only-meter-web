import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
function App() {
  return (
    // <div className="bg-[#141414]">
    <div className="bg-white">
      <Navbar />
      <main className="pt-[70px]">
        <HeroSection />
      </main>
      {/* Add padding top so content not hidden behind fixed navbar */}
    </div>
  );
}

export default App;
