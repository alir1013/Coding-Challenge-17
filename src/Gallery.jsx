//Requirment 2: Tour List Compnent

import React, {useState, useEffect} from `react`;

function Gallery(){
    const [tours,setTours]= useState([]);  //Managing fetched tour data

    useEffect(() => {
         
        //Fetching API
        fetch(`https://course-api.com/react-tours-project`), {mode: `no-cors`}

            .then((response) => response.json())
            .then((data) => setTours(data));

    }, []);

    return (
        <div>
            <h2>Tours Available Currently:</h2>
            <ul>
               {/*Rendering a list of tours */}
                {tours.map ((tour) => (
                    <li key= {tour.id}>
                        {tour.name}: ${tour.price}
                    </li>
                ))}
            </ul>
        </div>
    );

    }

export default Gallery;
