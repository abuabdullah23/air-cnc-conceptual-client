import React from 'react';
import Container from '../../../components/Container/Container';
import Categories from '../../../components/Categories/Categories';
import Rooms from '../../../components/Rooms/Rooms';

const Home = () => {
    return (
        <Container>
            <Categories />
            <Rooms />
        </Container>
    );
};

export default Home;