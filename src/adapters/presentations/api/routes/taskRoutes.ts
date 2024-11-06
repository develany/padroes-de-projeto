import { Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouterAdapter } from "../../../expressRouterAdapter";
import { DateValidatorAdapter } from "../../../dateValidatorAdapter";
import { DbAddTask } from "../../../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../../../dataSources/db/repository/taskMongoRepository";

export default (router: Router): void => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const addTaskController = new AddTaskController(
    dbAddTask,
    dateValidatorAdapter 
  );
  router.post(
    "/tasks",
    expressRouterAdapter(addTaskController)
  );
};
