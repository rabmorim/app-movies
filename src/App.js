import Header from "./components/Header";
import Footer from "./components/Footer"
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/db.json";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Geografia</h2>

        <section className="cards">
          {/* Usando um map para organizar os arquivos do banco de dados de estudo. E falando que para cada video
          (objeto do banco) vai ser construido um card. E usa-se o key, pois em react utilizando map tem o costume de ser usado para evitar erros no console do desenvolvedor. E tem que ser usado com valores unicos para cada elemento*/}
          {
            videos.map(video => <Card id={video.id} key={video.id} />)
          }
        </section>

      </Container>
      <Footer />
    </>

  );
}

export default App;
