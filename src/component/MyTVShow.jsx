import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const MyTVShow = (props) => {
    return ( 
        <Container fluid className="px-2" data-bs-theme="dark">
            <Row>
            <Col xs={6} className="d-flex gap-5">
            <div xs="auto">
                <h3 style={{ color: "white" }}>TV Shows</h3>
            </div>
            <div>
                <DropdownButton variant="outline-light" id="dropdown-item-button" title="Genres">
                <Dropdown.Item as="button">Horror</Dropdown.Item>
                <Dropdown.Item as="button">Fantasy</Dropdown.Item>
                <Dropdown.Item as="button">Drama</Dropdown.Item>
                </DropdownButton>
            </div>
            </Col>
            <Col xs="auto" className="ms-auto">
            <Button type="button" className="btn btn-outline-secondary rounded-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-text-left"
                    viewBox="0 0 16 16"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                    ></path>
                    </svg>
                </Button>
                <button type="button" className="btn btn-outline-secondary rounded-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid-fill"
                    viewBox="0 0 16 16"
                    >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"></path>
                    </svg>
                </button>
            </Col>
            </Row>
        </Container>
    );
}

export default MyTVShow;