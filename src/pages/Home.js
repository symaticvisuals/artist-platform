// import Footer from "./Components/Footer";
import Index from "./Hero";
// import AboutUs from "./Hero/AboutUs";
import ContactEmail from "./Hero/ContactEmail";

// import Corousel from "./Hero/Corousel";
import Overview from "./Hero/Overview";
import Corousel from "./Hero/Corousel";
import TeacherSection from "./Hero/TeacherSection";

// import { useState } from "react";

export default function Home() {
  // let [fetchURL, setFetchURL] = useState("");

  return (
    <div>
      <Index />
      {/* <AboutUs /> */}

      {/* <Section /> */}
      <Overview />
      <Corousel />
      <ContactEmail />
      <TeacherSection />
    </div>
  );
}
