import React from 'react';
    import itineraryImage from '../images/itinerary-planner.jpg'; // Adjust the path if needed

    function Itinerary() {
        return (
            <div>
                <h1>Plan Your Trip</h1>
                <img src={itineraryImage} alt="Itinerary Planner" style={{ maxWidth: "400px", margin: "20px auto", display: "block" }} />
                <p>Your saved itinerary will be displayed here.</p>
            </div>
        );
    }

export default Itinerary