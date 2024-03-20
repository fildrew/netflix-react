import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import MySpinner from "./MySpinner";
import { Link } from "react-router-dom";

const MySingleMovie = (props) => {
        const [movies, setMovies] = useState([]);
        const [isLoaded, setIsLoaded] = useState(false);
        // const [error, setError] = useState(false);

        useEffect(() => {
            setIsLoaded(true);
            fetch("http://www.omdbapi.com/?apikey=b7a71124&s=" + props.film)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Non funziona");
                    }
                })
                .then((data) => {
                    console.log(data);
                    setMovies(data.Search);
                    setIsLoaded(false);
                })
                .catch((error) => console.error("Error fetching movies:", error));
        }, [props.film]);

    return isLoaded ? (
        <div className="d-flex justify-content-center">
            <MySpinner />
        </div>
    ) : (
        movies.splice(0, 6).map((film) => {
            return (
                <Col
                    xs={12}
                    sm={4}
                    md={3}
                    lg={6}
                    xl={2} 
                    className="p-3"
                    key={film.imdbID}
                >
                    <Link
                        to={"/Moviesdetails/" + film.imdbID}
                        key={film.imdbID}
                    >
                        <Image
                            src={film.Poster}
                            width="100%"
                            height="100%"
                            className="scale"
                        />
                    </Link>
                </Col>
            );
        })
    );
};

export default MySingleMovie;


