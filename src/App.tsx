import Navbar from "@/scenes/navbar";
//if you directly reference a folder with index.tsx you dont have to write 
// it in the path
import Home from "@/scenes/home"; 
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";

function App() {

// const [selectedPage, setSelectedPage] = useState<string>("home");
// its upto you if you want to explicitly define the type

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // this will allow us to remove the scroll when they leave the page
    // otherwise you can have memory leaks and certain bugs
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* we need to pass setSelectedPage as we want to navigate to home page */}
      <Home setSelectedPage = {setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );  
}

export default App;