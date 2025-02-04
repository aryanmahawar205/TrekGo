import React from 'react';
import homeBanner from '../images/home-banner.jpg'; // Adjust the path if needed

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Welcome to <span style={{ color: "#007bff" }}>TrekGo</span></h1>
            <p>Find the best travel deals and plan your perfect trip.</p>
            <img src={homeBanner} alt="Travel" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
    );
}

export default Home;