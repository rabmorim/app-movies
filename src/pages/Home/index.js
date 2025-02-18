import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Carousel from "../../components/Carousel";

//////////////
//// Página Home da aplicação
//////
function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category key={index} category={category}>
            <Carousel>
              {filterCategory(index).map(video => (
                <Card id={video.id} key={video.id} page="home" />
              ))}
            </Carousel>

          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;