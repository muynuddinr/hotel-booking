import Navbar from "../Components/Navbar";
import BookingsList from "./BookingsList";
import Footer from "../Components/Footer";

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <BookingsList />
      </div>
      <Footer />
    </>
  );
} 