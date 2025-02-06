import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
function Watch() {
    return (
        <>
            <Header />
            <Banner image= "assistir" />
            <div className={styles.container}>
                <section className={styles.watch}>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=i2pAc7_wsxbjZ1zn"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Watch;