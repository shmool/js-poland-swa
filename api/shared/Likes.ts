import CosmosDBClient from './CosmosDBClient';
import { ErrorRes } from './ErrorRes';

const likesId = process.env.LIKES_ID;

export interface LikesRes {
  likes: number;
}

export async function getLikesFromDB(): Promise<any> {
  const likesClient = new CosmosDBClient('likes');
  const res = await likesClient.container.item(likesId, likesId)
    .read<LikesRes>();

  if (!res || !res.resource) {
    return new ErrorRes(500, 'Unknown error');
  }

  return { likes: res.resource.likes };
}

export async function addLikeInDB(): Promise<any> {
  const likesClient = new CosmosDBClient('likes');
  const res = await likesClient.container.item(likesId, likesId)
    .read<LikesRes>();

  if (!res || !res.resource) {
    return new ErrorRes(500, 'Unknown error');
  }

  const currentLikes = res.resource.likes;
  const likes = currentLikes + 1;

  await likesClient.container.item(likesId, likesId)
    .replace({ ...res.resource, likes });

  return likes;
}
