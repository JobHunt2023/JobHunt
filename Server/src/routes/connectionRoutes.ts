import { Router } from 'express';
import userController from '../controllers/ConnectionController';

const router = Router();

router.get('/:userId/connections', userController.getAllConnections);
router.post('/connections', userController.createConnection);
router.put('/connections/:connectionId/accept', userController.acceptConnection);
router.put('/connections/:connectionId/reject', userController.rejectConnection);
router.get('/:userId/acceptedConnections', userController.getAcceptedConnections);
router.get('/:userId/rejectedConnections', userController.getRejectedConnections);

export default router;
