import { init } from "events";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite:  (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    let initalFavorites = window.localStorage.getItem('favorites');
    if (initalFavorites) {
        initalFavorites = JSON.parse(initalFavorites);
    }
    const [userFavorites, setUserFavorites] = useState(initalFavorites?initalFavorites:[]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            const fv = prevUserFavorites.concat(favoriteMeetup);
            window.localStorage.setItem('favorites', JSON.stringify(fv))
            return fv;
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            const fv =prevUserFavorites.filter(meetup => meetup.id !== meetupId);
            window.localStorage.setItem('favorites', JSON.stringify(fv))
            return fv;
        });

    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    )
}

export default FavoritesContext;