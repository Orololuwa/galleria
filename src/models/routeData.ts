import { FC } from "react";

export interface RouteDataItem {
  path: string;
  exact?: boolean;
  component: FC;
}
