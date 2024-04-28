import Navbar from "../Component/Fragment/Navbar";
import Carosel from "../Component/Fragment/Carosel";
import Top_saller from "../Component/Fragment/Top_saller";
import Kelebihan from "../Component/Fragment/Kelebihan";
import Product from "../Component/Fragment/Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carosel/>
      <Top_saller/>
      <Kelebihan/>
      <Product/>
    </div>
  );
};

export default Home;
