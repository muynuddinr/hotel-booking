import Navbar from "../Components/Navbar";
import ContactContent from "./ContactContent";
import Footer from "../Components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <ContactContent />
      </div>
      <Footer />
    </>
  );
} 