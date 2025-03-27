import Navbar from "../../Components/Navbar";
import RoomDetail from "./RoomDetail";
import Footer from "../../Components/Footer";

// Use the built-in Next.js types
export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <RoomDetail id={params.id} />
      </div>
      <Footer />
    </>
  );
} 