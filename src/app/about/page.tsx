import Navbar from "../Components/Navbar";
import AboutContent from "./AboutContent";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AboutContent />
      </div>
      <Footer />
    </>
  );
} 