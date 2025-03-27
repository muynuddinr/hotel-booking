import Navbar from "../Components/Navbar";
import ServicesContent from "./ServicesContent";
import Footer from "../Components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <ServicesContent />
      </div>
      <Footer />
    </>
  );
} 