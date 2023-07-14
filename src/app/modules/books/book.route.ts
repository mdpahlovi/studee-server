import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './book.validation';
import { BookController } from './book.controller';
const router = express.Router();

router.post('/', validateRequest(BookValidation.createBookZodSchema), BookController.createBook);

router.get('/', BookController.getAllBook);

export const BookRoutes = router;
