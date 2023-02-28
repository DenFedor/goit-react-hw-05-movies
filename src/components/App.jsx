import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';
import { lazy } from 'react';
import { PAGE_NAMES } from 'router/paths';
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("components/moviedetails/MovieDetails"));
const Cast = lazy(() => import("./cast/Cast"));
const Reviews = lazy(() => import("./reviews/Reviews"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={PAGE_NAMES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.movies} element={<Movies />} />
          <Route path={PAGE_NAMES.movie} element={<MovieDetails />}>
            <Route path={PAGE_NAMES.cast} element={<Cast />} />
            <Route path={PAGE_NAMES.reviews} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
