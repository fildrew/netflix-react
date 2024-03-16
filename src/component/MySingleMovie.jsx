import Col from "react-bootstrap/Col";
import React from "react";

const MySingleMovie = (props) => {
    return (
        <Col id="preview" style={{ width: "100px" }}>
            <img style={{ width: "100%", objectFit: "cover" }} src={props.movie.Poster} alt="movie-img" />
        </Col>
    );

}

export default MySingleMovie;