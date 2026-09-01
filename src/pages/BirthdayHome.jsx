import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reasons from "../components/Reasons";
import Moments from "../components/Moments";
import OurStory from "../components/OurStory";
import FinalBirthday from "../components/FinalBirthday";

function BirthdayHome() {
  return (
    <main className="page-enter min-h-screen overflow-hidden">
    

      <Hero />

      <Reasons />

      <Moments />

      <OurStory />

      <FinalBirthday />
    </main>
  );
}

export default BirthdayHome;
