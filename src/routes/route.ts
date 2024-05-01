import express from "express";
import { userRoutes } from "../app/modules/user/user.route";
const MainRouter = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes.router,
  },
];

moduleRoutes.forEach((route) => MainRouter.use(route.path, route.route));

export default MainRouter;
