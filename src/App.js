import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Category, { categories, filterCategory } from "./components/Category";

//////////////
//// Método App principal do aplicativo
//////
function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category key={index} category={category}>
            {filterCategory(index).map(video => (
              <Card id={video.id} key={video.id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;