import { Router } from 'express';
import tribute from './tribute';

const app = Router();

app.get('/tribute-page', tribute);

export default app;
