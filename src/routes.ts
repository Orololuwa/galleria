import { lazy } from "react";
import { RouteDataItem } from "models/routeData";
import ArtDetails from "pages/ArtDetails";
const HomePage = lazy(() => import("pages/Home"));

const routes: RouteDataItem[] = [
  { path: "/art-:idx", component: ArtDetails },
  { path: "/", exact: true, component: HomePage }
];

export default routes;
