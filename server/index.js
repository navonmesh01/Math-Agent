import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import agentRoutes from './routes/agentRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send('Math Agent API is running');
  });

app.use('/api', agentRoutes);

app.listen({port}, () => {
    console.log(`server is running on port ${port}!`);
})