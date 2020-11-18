import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { ErrorRes, returnError } from '../shared/ErrorRes';
import { getUserFromDB } from '../shared/User';

const httpTrigger: AzureFunction =
  async (context: Context, req: HttpRequest): Promise<void> => {
    const userRes = await getUserFromDB(req, true);

    if (userRes instanceof ErrorRes) {
      return returnError(context, userRes);
    }

    const user = userRes.resource;

    context.res = {
      body: user
    };
  };

export default httpTrigger;
