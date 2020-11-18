import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction =
  async (context: Context, req: HttpRequest): Promise<void> => {

    context.res = {
      body: 'Hello World!!!'
    };
  };

export default httpTrigger;
