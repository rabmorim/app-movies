/* <h2>Geografia</h2>
        <section className="cards">
           Usando um map para organizar os arquivos do banco de dados de estudo. E falando que para cada video
          (objeto do banco) vai ser construido um card. E usa-se o key,
          pois em react utilizando map tem o costume de ser usado para evitar erros no console do desenvolvedor.
           E tem que ser usado com valores unicos para cada elemento
          {
            videos.map(video => <Card id={video.id} key={video.id} />)
          }
        </section> */


// Olá, no container é muito simples e mais "amistoso" colocar flex + grid!

// flex: 1 0 auto;
// padding: 40px;
// display: grid;

// se ajusta automaticamente com ou sem conteúdo! Páginas novas ou já com conteúdo, sempre com o mesmo comportamento!