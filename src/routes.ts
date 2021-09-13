import { lazy } from "react";
import { RouteDataItem } from "models/routeData";
const ArtDetails = lazy(() => import("pages/ArtDetails"));
const HomePage = lazy(() => import("pages/Home"));

const routes: RouteDataItem[] = [
  { path: "/art_details-:idx", component: ArtDetails },
  { path: "/", exact: true, component: HomePage }
];

export default routes;
