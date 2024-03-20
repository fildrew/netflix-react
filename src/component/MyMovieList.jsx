import React from "react";
import MySingleMovie from "./MySingleMovie";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyMovieList() {
    return (
        <>
        <Container fluid>
            <Row className="justify-content-center">
            <h3 className="mt-2 mb-2">Harry Potter</h3>
            <MySingleMovie film="harry potter" className="mt-5" />
            <h3 className="mt-2 mb-2">Batman</h3>
            <MySingleMovie film="Batman" className="mt-5" />
            <h3 className="mt-2 mb-2">Lord of the Rings</h3>
            <MySingleMovie film="Chronicles of Narnia" className="mt-5" />
            </Row>
        </Container>
        </>
    );
}
export default MyMovieList;