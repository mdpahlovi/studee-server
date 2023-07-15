import express from 'express';
import { BookRoutes } from '../modules/books/book.route';
import { ReviewRoutes } from '../modules/reviews/review.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/books',
        route: BookRoutes,
    },
    {
        path: '/reviews',
        route: ReviewRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
