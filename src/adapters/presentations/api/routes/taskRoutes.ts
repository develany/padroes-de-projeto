import { Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouterAdapter } from "../../../expressRouterAdapter";

export default (router: Router): void => {
  const addTaskController = new AddTaskController();
  router.post(
    "/tasks",
    expressRouterAdapter(addTaskController)
  );
};
