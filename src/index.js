import { initMongoDB } from './db/initMongoDB.js';
import { StartServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  StartServer();
};

bootstrap();
