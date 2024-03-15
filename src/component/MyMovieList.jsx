import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import MySingleMovie from "./MySingleMovie";

class MyMovieList extends Component {
    state = {
        movies: [],
        isLoaded: true,
        error: false,
    };

    fetchMovies = () => {
    const { query } = this.props;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b7a71124&s=harry%20potter`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Ops Sorry");
            }
        })
        .then((data) => {
            console.log(data);
            this.setState({ movies: data.Search, isLoaded: false });
        })
        .catch((error) => console.error("Error fetching movies:", error));
    };

    componentDidMount() {
        this.fetchMovies();
    }
    render() {
        const { query } = this.props;
        const { loading } = this.state;
        return (
        <Container fluid className="px-5 mt-4">
            <Row>
            <h3 style={{ color: "white" }}>{query}</h3>
            {loading ? (
                <Spinner />
            ) : (
                this.state.movies.slice(0, 6).map((movie, i) => <MySingleMovie key={i} movie={movie} />)
            )}
            </Row>
        </Container>
        );
    }
}



export default MyMovieList;