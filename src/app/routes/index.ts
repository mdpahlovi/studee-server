import express from 'express';
import { BookRoutes } from '../modules/books/book.route';
import { ReviewRoutes } from '../modules/reviews/review.route';
import { WishlistRoutes } from '../modules/wishlist/wishlist.route';
import { ReadlistRoutes } from '../modules/readlist/readlist.route';

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
    {
        path: '/wishlist',
        route: WishlistRoutes,
    },
    {
        path: '/readlist',
        route: ReadlistRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
