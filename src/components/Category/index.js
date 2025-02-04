import styles from "./Category.module.css";
import videos from "../../json/videos.json";

function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>

            <section>
                {children}
            </section>
        </section>
    );
}

//////////////
//// Método auxiliar para filtragem de categorias, exportado para app.js
//////
export function filterCategory(id) {
    return videos.filter(video => video.category === categories[id]);
}
//////////////
//// Costante de categorias exportada para uso no app.js. Sendo pega de forma dinâmica
//////
export const categories = [...new Set(videos.map(video => video.category))];


export default Category;