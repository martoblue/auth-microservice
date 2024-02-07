import 'dotenv/config';
import express from 'express';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container from './config/container';
import connectDB from './config/mongo';

const startServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(scopePerRequest(container));

  connectDB();

  app.use(loadControllers('controllers/*.ts', { cwd: __dirname }));

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Error starting server', err);
  process.exit(1);
});
