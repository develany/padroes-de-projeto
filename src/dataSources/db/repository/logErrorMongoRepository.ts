import { LogErrorRepository } from "../../../usecases/repository/logErroRepository";
import { MongoManager } from "../../config/mongoManager";

export class LogErrorMongoRepository implements LogErrorRepository {
  async log(stack:string): Promise<void> {
    const errorColection = MongoManager.getInstance().getCollection("errors");
    await errorColection.insertOne({
      stack,
      date: new Date(),
    }); 
  }
}