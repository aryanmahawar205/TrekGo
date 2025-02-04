import React from 'react';
import searchImage from '../images/search-results.jpg'; // Adjust the path if needed

    function Search() {
        return (
            <div>
                <h1>Search Results</h1>
                <img src={searchImage} alt="Search Results" style={{ width: "50%", margin: "20px auto", display: "block" }} />
                <p>List of travel options will be displayed here.</p>
            </div>
        );
    }

export default Search