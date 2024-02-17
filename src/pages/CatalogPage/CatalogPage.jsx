import React from 'react';
import FormFilter from '../../components/FormFilter/FormFilter';
import ListCar from '../../components/ListCar/ListCar';
import { StyledCatalogPage } from './StyledCatalogPage.styled';

const CatalogPage = () => {
  return (
    <StyledCatalogPage>
      <FormFilter />
      <ListCar />
    </StyledCatalogPage>
  );
};

export default CatalogPage;
