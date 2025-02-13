import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

function SearchVideoList({ videos }) {

    ///////Variaveis para controle de estado usando useState(Hooks)
    const [searchText, setSearchText] = useState('');
    const foundVideos = filterVideos(videos, searchText);

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar"
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            <VideoList
                videos={foundVideos}
                emptyHeading={`Video sobre "${searchText}" não encontrado`}
            />
        </section>
    );

}
///////////////////
///filterVideos()
///Motivo: Função de filtro de videos pela categoria ou titulo de acordo com o campo input
function filterVideos(videos, searchText) {
    //Transforma a pesquisa em letra minuscula para padronizar e remove os espaços em branco
    const normalizedSearchText = searchText.toLowerCase().trim();

    return videos.filter((video) => {
        // Converte título e categoria para minúsculas e remove os espaços em branco
        const normalizedTitle = video.title.toLowerCase().trim();
        const normalizedCategory = video.category.toLowerCase().trim();

        // Verifica se o texto de pesquisa está contido no título ou na categoria
        return normalizedTitle.includes(normalizedSearchText) ||
            normalizedCategory.includes(normalizedSearchText);
    });
}

export default SearchVideoList;