import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";
function Watch() {
    //Params é o parametro controlado e recebido pelo react-router-dom
    const params = useParams();
    const video = videos.find((video) => { return video.id === params.id });

    if (!video) { return <PageNotFound /> };

    return (
        <>
            <Header />
            <Banner image="assistir" />
            <div className={styles.container}>
                <section className={styles.watch}>
                    <iframe
                        width="854" height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Watch;