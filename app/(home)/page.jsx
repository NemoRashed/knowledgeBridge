import Hero from "@/components/hero";
import About from "@/components/about";
import Courses from "@/components/courses";

import ContactUs from "@/components/contactus";
import Blog from "@/components/blog";
import Testimonail from "@/components/testimonail";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Blog />
      <Testimonail />
      <ContactUs />
    </div>
  );
}
