import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import MySingleMovie from "./MySingleMovie";
import Col  from "react-bootstrap/Col";

class MyMovieList3 extends Component {
    state = {
        movies: [],
        isLoaded:false,
    }

    componentDidMount() {
        const ApiEndpoint = `http://www.omdbapi.com/?i=tt3896198&apikey=b7a71124&movies&s=$narnia`;

        fetch(ApiEndpoint)
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Something went wrong');
            }
        })
        .then((data) => {
            console.log(data);
            this.setState({
                movies: data.Search || [],
                isLoaded: true,
            });

            console.log("Loading movies successfully")
        })
            .catch((error) => {
                console.log("Error fetching data:",error);
            });
        }

        render() {
            const firstsix=this.state.movies.slice(0.6);
            

            return (
                <Container fluid className="px-5 mt-4">
                    <div>
                        <h2 className="text-white me-4">Chronicles Of Narnia</h2>
                        <Row xs={2} sm={2} lg={3} xl={6}>
                            {firstsix.slice(0,6).map((movie)=> (
                                <Col key={movie.imdbID} className="text-center">
                                    <MySingleMovie key={movie.imdbID} movie={movie}/> 
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container> 
            );
        }

}


export default MyMovieList3;
