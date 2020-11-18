import { CosmosClient, Database, Container } from '@azure/cosmos';

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const database = process.env.COSMOS_DATABASE;
const collections = {
  users: process.env.COSMOS_USER_COLLECTION,
  likes: process.env.COSMOS_LIKES_COLLECTION
};

export default class CosmosDBClient {
  client: CosmosClient;
  database: Database;
  container: Container;

  constructor(collection: string) {
    this.client = new CosmosClient({ endpoint, key });

    this.database = this.client.database(database);
    this.container = this.database.container(collections[collection]);
  }
}
