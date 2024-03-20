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
    
    useEffect(() => {
        const film = () => {
            fetch(`http://www.omdbapi.com/?apikey=b7a71124&i=${movieid.movieid}`)
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

        film();
    }, [movieid]);

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
                        <ListGroup.Item>Year: {movie.Year}</ListGroup.Item>
                        <ListGroup.Item>Type: {movie.Type}</ListGroup.Item>
                        <ListGroup.Item>ID: {movie.imdbID}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button className="button" variant="success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                            </svg>
                        </Button>
                        <Button className=" ms-4" variant="warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
                            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                            </svg>
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



