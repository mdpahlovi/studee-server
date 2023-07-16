import express from 'express';
import { WishlistController } from './wishlist.controller';
const router = express.Router();

router.post('/', WishlistController.createWishlist);

router.get('/:email', WishlistController.getAllWishlist);

export const WishlistRoutes = router;
