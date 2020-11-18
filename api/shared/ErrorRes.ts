import { Context } from '@azure/functions';

export function returnError(context: Context, errorRes: ErrorRes) {
  context.res = errorRes;
  context.done();
  return;
}

export class ErrorRes {
  status;
  body;
  constructor(code: number, message: string) {
    this.status = code;
    this.body = {
      code,
      message
    };
  }
}
