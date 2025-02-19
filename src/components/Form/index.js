import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";
import videosJson from "../../json/videos.json";

function Form() {

    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState('');


    return (
        <section className={styles.container}>
            <h2>Cadastro de Vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required={true}
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required={true}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value='-'>Selecione uma categoria</option>
                        {
                            categories.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

                {errors && (
                    <div className={`${styles.error} ${styles.shake}`}>
                        {errors}
                    </div>
                )}
            </form>
        </section>
    );

    //// onSave()
    ///// Motivo: Função para salvamento do formulario
    function onSave(e) {
        const urlVideo = valideUrl(url);
        //PreventDefault é feito para evitar o comportamento padrão do formulário
        e.preventDefault()
        //Validar a existencia do vídeo
        if (!checkVideo(url)) {
            //Guardar a url e a categoria do novo vídeo
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]))
            //Limpar o formulario
            setUrl('');
            setCategory('');
        } else {
            setErrors(' Erro: Vídeo já cadastrado!')
            setTimeout(() => setErrors(''), 4000);
            setUrl('');
            setCategory('');
            return
        }
        //Validar URL
        if (urlVideo) {
            //Guardar a url e a categoria do novo vídeo
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]))
            //Limpar o formulario
            setUrl('');
            setCategory('');
        } else {
            setErrors(' Erro: URL inválida!')
            setTimeout(() => setErrors(''), 4000);
            setUrl('');
            setCategory('');
            return
        }
        //Validar categoria
        if (!category || category === "-") {
            setErrors('Erro: Escolha uma categoria!');
            setTimeout(() => setErrors(''), 4000);
            return
        }
    }


    //// valideUrl()
    ///// Motivo: Função para validar a url do vídeo
    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;
        if (!regex.test(url) || url.length < 43) {
            setErrors('Erro: URL inválida!')
            setTimeout(() => setErrors(''), 4000);
            return false
        } else {
            return url.substring(32, 43) //Pega o id do vídeo cadastrado
        }
    }

    //// checkVideo()
    ///// Motivo: Função para checar se o vídeo ja está cadastrado
    function checkVideo(url) {
        // Verifica no banco de dados ficticio (videos)
        const verifyVideo = videosJson.some((video) => video.url === url);

        // Verifica no localStorage
        const getVideoLocalStorage = JSON.parse(localStorage.getItem("videos")) || [];
        const verifyLocalStorage = getVideoLocalStorage.some((video) => video.url === url);

        // Retorna true se o vídeo já existir em qualquer um dos dois
        return verifyVideo || verifyLocalStorage;
    }
}

export default Form;