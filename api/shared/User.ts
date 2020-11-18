import { getApiClientPrincipal, IClientPrincipal } from './ApiClientPrincipal';
import CosmosDBClient from './CosmosDBClient';
import { HttpRequest } from '@azure/functions';
import { ErrorRes } from './ErrorRes';

export interface IUser {
  id?: string;
  userId?: string;
  clientPrincipal: IClientPrincipal;
  group?: string;
  groupData?: object;
  coupons?: Array<any>;
}

export class User {
  id;
  userId;
  created: Date;

  constructor(public clientPrincipal: IClientPrincipal) {
    this.id = clientPrincipal.userId;
    this.userId = clientPrincipal.userId;
    this.created = new Date();
  }
}

export async function getUserFromDB(req: HttpRequest, createIfNotExists = false): Promise<any> {
  const clientPrincipal = getApiClientPrincipal(req);

  if (!clientPrincipal) {
    return new ErrorRes(401, 'Unauthenticated');
  }
  const userId = clientPrincipal.userId;
  const usersClient = new CosmosDBClient('users');
  let res = await usersClient.container.item(userId, userId).read<IUser>();

  if (res.statusCode === 404) {
    if (createIfNotExists) {
      res = await usersClient.container.items.create(new User(clientPrincipal));
    } else {
      return new ErrorRes(404, 'Cannot find user');
    }
  }

  if (!res || !res.resource) {
    return new ErrorRes(500, 'Unknown error');
  }

  return res;
}
