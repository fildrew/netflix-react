import Col from "react-bootstrap/Col";

const MySingleMovie = (props) => {
    return (
        <Col id="preview" style={{ width: "100px" }}>
            <img style={{ width: "100%", objectFit: "cover" }} src={props.movie.Poster} alt="movie-img" />
        </Col>
    );

}

export default MySingleMovie;