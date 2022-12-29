import Header from "../components/Header";
import About from "../components/About";
import Working from "../components/Working";
import Book from "../components/Bookappointment";
import Testimonials from "../components/Testimonials";
import Latestnews from "../components/Latestnews";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Working />
      <Book />
      <Services />
      <Testimonials />
      <Latestnews />
    </>
  );
}
export default Home;
