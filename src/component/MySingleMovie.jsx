import Col from "react-bootstrap/Col";
import React from "react";

const MySingleMovie = (props) => {
    return (
        <Col id="preview" style={{ width: "250px" }}>
            <img style={{ width: "100%", objectFit: "cover",height:"350px" }} src={props.movie.Poster} alt="movie-img" />
        </Col>
    );

}

export default MySingleMovie;