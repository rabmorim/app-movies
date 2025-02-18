import { createContext, useContext, useState } from "react";

//Criação do contexto dos favoritos
export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";


//////////////
////FavoritesProvider()
////Motivo: Método para criação do provedor de estado do favoritos
export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}


//////////////
////useFavoriteContext()
////Motivo: Método para usar o context dos Favoritos
// Hook personalizado( Toda função que começar com Use é um hook)
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);


    //////////////
    ////addFavorite()
    ////Motivo: Método para adicionar um novo favorito escutando o context de favoritos
    function addFavorite(newFavorite) {

        // Verificar se tem item favorito repetido
        // O método some, verifica se tem pelo menos uma ocorrencia desse item no array
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

        //  Nova lista recebe lista anterior
        let newList = [...favorite];

        // Verificar se não tem repetido e adicionar o item na lista
        if (!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }
        // Se for repetido ele sera tirado da lista ( isso é necessário para permitir a retirada de elementos da lista ( 
        // desfavoritar, evitando assim a criação de um novo método para isso))
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)

        return setFavorite(newList);

    }

    return {
        favorite,
        addFavorite
    }
} 
