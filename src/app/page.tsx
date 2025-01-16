import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <div className="p-5">
        <Hero />
        <Feature />
        <About />
        <Connect />
        
        <Footer />
      </div>
    </div>
  );
}
