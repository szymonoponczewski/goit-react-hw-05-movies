import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

const Trending = lazy(() => import("../pages/Trending/Trending"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("../components/MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Trending />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
