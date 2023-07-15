import { ReviewController } from './review.controller';
import express from 'express';
const router = express.Router();

router.patch('/:id', ReviewController.updateReview);

export const ReviewRoutes = router;
