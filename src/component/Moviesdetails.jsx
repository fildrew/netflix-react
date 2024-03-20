import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState} from "react";


function Moviedetails() {
    const movieid = useParams();
    console.log(movieid);
    const [movie, setMovie] = useState(null);
    
    const film = () => {
        fetch(`http://www.omdbapi.com/?apikey=b7a71124&s=${movieid.movieid}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            console.log("error");
            }
        })
        .then((data) => {
            setMovie(data);
            console.log(data);
        })
        .catch((error) => console.log("Error fetching movies:", error));
    };
    
    useEffect(() => {
        film();
    }, []);
    
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                {movie === null ? (
                    <Spinner animation="border" variant="danger" />
                ) : (
                    <Col xs={12} md={6}>
                    <Card className="w-100 h-100">
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>{movie.Plot}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>Anno: {movie.Year}</ListGroup.Item>
                        <ListGroup.Item>Tipo: {movie.Type}</ListGroup.Item>
                        <ListGroup.Item>ID: {movie.imdbID}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button className="button" variant="success">
                            <i className="bi bi-play"></i>
                        </Button>
                        <Button className="button" variant="warning">
                            <i className="bi bi-bookmark-star"></i>
                        </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                )}
                </Row>
            </Container>
        </>
    );
}
export default Moviedetails;



