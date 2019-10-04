import { Router } from 'express';

import googleRoutes from './googleRoutes';

const router = Router();

router.use('/google', googleRoutes);

export default router;
