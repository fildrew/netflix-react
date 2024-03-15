import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter";
import { Container } from "react-bootstrap";
import MyTVShow from "./component/MyTVShow";
import MyMovieList from "./component/MyMovieList";
function App() {
  return (
    <div className="bg-dark text-white">
      <Container fluid>
        <MyNavbar/>
        <Container fluid>
          <MyTVShow/>
          <MyMovieList/>
          <MyFooter/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
