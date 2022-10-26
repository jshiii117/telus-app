import express from 'express';

import { getSubscriber, putSubscriber, deleteSubscriber} from '../controllers/subscribers.js';

const router = express.Router();

router.get('/:number', getSubscriber);
router.put('/:number', putSubscriber);
router.delete('/:number', deleteSubscriber);

export default router;