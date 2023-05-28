// import Header from "../component/Header";
import List from "../List/List";
import SetItem from "../State/SetItem";
import Home_Content from "../component/Home-after-content/Home_Content";
import Footer from "../component/Footer";

const Home = () => {

  return (
    <>
      <SetItem>
        {/* <Header /> */}
        <Home_Content />
        <List />
        <Footer />
      </SetItem>
    </>
  );
};

export default Home;
