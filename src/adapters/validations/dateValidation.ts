import { DateValidator } from "../interfaces/dateValidator";
import { Validation } from "../interfaces/validation";
import { InvalidParamError } from "../presentations/api/errors/invalid-param-error";
import { MissingParamError } from "../presentations/api/errors/missing-param-error";

export class DateValidation implements Validation {
  constructor(
    private readonly field: string,
    private readonly dateValidator: DateValidator
  ) {}
  validate(data: any): Error | void {
    const isValid = this.dateValidator.isValid(data[this.field]);
    if (!isValid) {
      return new InvalidParamError(this.field);
    }
  }
}