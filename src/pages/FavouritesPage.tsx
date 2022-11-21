import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavouritesPage = () => {
    const {favorites} = useAppSelector(state => state.github)
    
    if (favorites.length === 0) return <p className="text-center">Тут пусто</p>
    
    return (
       <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
           <ul className="list-none">
               {favorites.map((item, i) => (
                   <li key={i}>
                       <a href={item}>{item}</a>
                   </li>
               ))}
           </ul>
       </div>
    );
};

export default FavouritesPage;