import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter";
import { Container } from "react-bootstrap";
import MyTVShow from "./component/MyTVShow";
import MyMovieList1 from "./component/MyMovieList1";
import MyMovieList2 from "./component/MyMovieList2";
import MyMovieList3 from "./component/MyMovieList3";
function App() {
  return (
    <div className="bg-dark text-white">
      <Container fluid>
        <MyNavbar/>
        <Container fluid>
          <MyTVShow/>
          <MyMovieList1/>
          <MyMovieList2/>
          <MyMovieList3/>
          <MyFooter/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
