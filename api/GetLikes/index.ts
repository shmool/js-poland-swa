import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import CosmosDBClient from '../shared/CosmosDBClient';
import { getLikesFromDB } from '../shared/Likes';
import { getUserFromDB } from '../shared/User';
import { ErrorRes } from '../shared/ErrorRes';

const httpTrigger: AzureFunction =
  async (context: Context, req: HttpRequest): Promise<void> => {
    const likesClient = new CosmosDBClient('likes');
    const likesRes = await getLikesFromDB();
    likesRes.headers = req.headers;


    const userRes = await getUserFromDB(req);
    if (!(userRes instanceof ErrorRes)) {
      likesRes.userLikes = userRes.resource.likes;
    } else {
      likesRes.error = userRes;
    }

    context.res = {
      body: likesRes
    };
  };

export default httpTrigger;
