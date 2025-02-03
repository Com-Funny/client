import { NextRouter } from "next/router";

export interface PageProps {
  router: NextRouter;
}

export interface updateModelProps {
  target: string;
  value: string | number | any[];
}
