import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
