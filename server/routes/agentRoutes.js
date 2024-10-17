import express from 'express';
import {calculateController}  from '../controllers/calculateController.js';

const router = express.Router();

router.post('/agent', calculateController);

export default router;