import Header from "./components/Header";
import Footer from "./components/Footer"
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Banner  image= "home"/>
      <Container>
        <h2>Geografia</h2>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Container>
      <Footer />
    </>

  );
}

export default App;
