import "./App.css";
import MyNavbar from "./component/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./component/MyFooter";
import MyMovieList from "./component/MyMovieList";
import MyTVShow from "./component/MyTVShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviesdetails from "./component/Moviesdetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MyNavbar />
        </header>

        <main className=" container-fluid text-bg-dark">
          <Routes>
            <Route path="/" element={<MyMovieList/>} />
            <Route path="/TVShow" element={<MyTVShow />} />
            <Route
              path="/Moviesdetails/:movieid"
              element={<Moviesdetails />}
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>

        <footer className=" container-fluid text-bg-dark pt-5">
          <MyFooter />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;