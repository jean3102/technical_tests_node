import express from 'express';
import { config } from '../dotenv.js';
import itemRouter from './router.js';
const app = express();

app.use(express.json());
config(); //call environment variables

//Routers
app.use('/', itemRouter);

app.listen(process.env.PORT ?? 3000, () => {
	console.log(`server is running in port: ${process.env.PORT}`);
});
