import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { ErrorRes } from '../shared/ErrorRes';
import CosmosDBClient from '../shared/CosmosDBClient';
import { getUserFromDB } from '../shared/User';
import { addLikeInDB } from '../shared/Likes';

const httpTrigger: AzureFunction =
  async (context: Context, req: HttpRequest): Promise<void> => {
    const likes = await addLikeInDB();

    const userRes = await getUserFromDB(req, true);

    let userLikes;
    if (!(userRes instanceof ErrorRes)) {
      const user = userRes.resource;
      userLikes = user.likes + 1;

      const usersClient = new CosmosDBClient('users');
      await usersClient.container.item(user.userId, user.userId)
        .replace({ ...user, likes: userLikes });
    }

    context.res = {
      body: {
        likes,
        userLikes
      }
    };
  };

export default httpTrigger;
