import React, { useEffect, useState } from 'react';
import { requestCar } from '../../services/api';
import Loader from 'components/Loader/Loader';
import { StyledListCard } from './StyledListCar.styled';
import Modal from '../Modal/Modal';
import CardCar from '../CardCar/CardCar';

const ListCar = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchInitialCars = async () => {
      setIsLoading(true);
      try {
        const initialCars = await requestCar(1);
        setCars(initialCars);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchInitialCars();
  }, []);

  const openModal = car => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const isFavorite = id => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(id);
  };

  const toggleFavorite = id => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favorite => favorite !== id)
      : [...favorites, id];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setCars(prevCars =>
      prevCars.map(car =>
        car.id === id ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );
  };

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const nextPageCars = await requestCar(page + 1);
      setCars(prevCars => [...prevCars, ...nextPageCars]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledListCard>
      <ul className="gallery">
        {cars.map(car => (
          <CardCar
            key={car.id}
            car={car}
            openModal={openModal}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
      <button className="load-more" onClick={loadMore}>
        Load more
      </button>

      {isLoading && <Loader />}
      {error && <p>Oops Error</p>}

      {selectedCar && <Modal car={selectedCar} onClose={closeModal} />}
    </StyledListCard>
  );
};

export default ListCar;
