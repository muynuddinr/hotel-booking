import Navbar from "../Components/Navbar";
import RoomsList from "./RoomsList";
import Footer from "../Components/Footer";


export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <RoomsList />
      </div>
      <Footer />
    </>

  );
} 