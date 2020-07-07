import React from 'react';
import './../styles/Homepage.css';
import Slider from './Slider';
import NewArrivals from './NewArrivals';
import Trending from './Trending';
import Introduction from './Introduction';
import Subscribe from './Subscribe';

class Homepage extends React.Component{
    render() {
        return (
            <div>
                <Slider />

                <Introduction />
                
                <NewArrivals />

                <Subscribe />

                <Trending />
            </div>
        );
    }
}

export default Homepage;
