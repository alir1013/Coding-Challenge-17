//Requirment 2: Tour List Component

import React, { useState, useEffect } from 'react';
import './App.css';

function Gallery() {
    
    //Managing Fetched Data
    const [tours, setTours] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  

    useEffect(() => {

        // Fetching data from the API
        fetch('https://www.course-api.com/react-tours-project')

        //Handling Error Messages and Loading Functions
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error!'); 
                }
                return response.json();
            })
            .then(data => {
                setTours(data);  
                setLoading(false); 
            })
            .catch(error => {
                setError('Could Not Fetch Data');  
                setLoading(false);  
            });
    }, []);  // Empty dependency array

    // Creating Remove Button
    const removeButton = (tourId) => {
        const newTours = tours.filter(tour => tour.id !== tourId);
        setTours(newTours);  
    };

    // Creating Button to Toggle Description
    const toggleButton = (tourId) => {
        setTours(tours.map(tour =>
            tour.id === tourId ? { ...tour, showMore: !tour.showMore } : tour
        ));
    };

    //Loading message
    if (loading) {
        return <div>Loading Page...</div>;
    }

    // Error message 
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Tours Currently Available</h2>
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>
                        <img src={tour.image}/>

                        <p>
                            {tour.showMore ? tour.info : `${tour.name}...`} {/* Description */}
                        </p>

                        <button onClick={() => toggleButton(tour.id)}>
                            {tour.showMore ? 'Show Less' : 'Show More'} {/* Ternary operation to toggle button*/}
                        </button>

                        <p>${tour.price}</p>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeButton(tour.id)}
                        >
                            Not Interested

                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery;













