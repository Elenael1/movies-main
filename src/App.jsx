import axios from "axios";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Search from "./pages/Search";
import PopularFilms from "./pages/PopularFilms";
// import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
// import MoviesDetails from "./pages/MoviesDetails";
// import MoviesReview from "./pages/MoviesReview";
import { Suspense, lazy, useEffect } from "react";
import SignUp from "./pages/SignUp";
import RestrictedRoute from "./utils/RestrictedRoute";
import LogIn from "./pages/LogIn";
import PrivateRoute from "./utils/PrivateRoute";
import StartPage from "./pages/StartPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { isLoading } from "./redux/auth/selectors";
import CircularProgress from "@mui/material/CircularProgress";

const MoviesDetails = lazy(
  () => import("./pages/MoviesDetails")
  /*webpackChunkName: "MoviesDetails" */
);
const MoviesReview = lazy(() => import("./pages/MoviesReview"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Actors = lazy(() => import("./pages/Actors"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(isLoading);

  useEffect(() => {
    navigate("/login");
    dispatch(refreshUser());
  }, []);

  return loading ? (
    <CircularProgress
      disableShrink
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    />
  ) : (
    <>
      <Header />
      <Suspense fallback={<h1>ЗАВАНТАЖЕННЯ</h1>}>
        <Routes>
          <Route path="/startpage" element={<StartPage />}></Route>
          <Route
            path="/signup"
            element={
              <RestrictedRoute element={<SignUp />} redirectTo="/startpage" />
            }
          ></Route>
          <Route
            path="/login"
            element={<RestrictedRoute element={<LogIn />} redirectTo="/" />}
          ></Route>
          <Route
            path="/search"
            element={<PrivateRoute element={<Search />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<PopularFilms />} />}
          />
          <Route
            path="/movies/:movieId"
            element={<PrivateRoute element={<MoviesDetails />} />}
          ></Route>
          <Route path="*" element={<PrivateRoute element={<NotFound />} />} />
          <Route
            path="/reviews/:reviewsId"
            element={<PrivateRoute element={<MoviesReview />} />}
          />
          <Route
            path="/actors/:actorsId"
            element={<PrivateRoute element={<Actors />} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
