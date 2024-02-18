import React, { useEffect, useState } from 'react';
import { StyledFavoritesPage } from './StyledFavoritesPage.styled';
import { requestCar } from '../../services/api';
import CardCar from '../../components/CardCar/CardCar';

const FavoritesPage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const fetchFavoriteCars = async () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const favoriteCarsData = await Promise.all(
        favorites.map(id => requestCar(id))
      );
      setFavoriteCars(favoriteCarsData);
    };

    fetchFavoriteCars();
  }, []);

  const removeFavorite = id => {
    const updatedFavorites = favoriteCars.filter(car => car.id !== id);
    setFavoriteCars(updatedFavorites);
    localStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites.map(car => car.id))
    );
  };

  return (
    <StyledFavoritesPage>
      {favoriteCars.length ? (
        <ul className="gallery">
          {favoriteCars.map(car => (
            <CardCar
              key={car.id}
              car={car}
              isFavorite={() => true}
              toggleFavorite={() => removeFavorite(car.id)}
            />
          ))}
        </ul>
      ) : (
        <h2 className="text">You did not yet choose your favorites</h2>
      )}
    </StyledFavoritesPage>
  );
};

export default FavoritesPage;
