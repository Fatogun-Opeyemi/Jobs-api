import express from 'express';

const router = express.Router()
import { getAllRequests, getSingleRequest, postRequest, deleteRequest, editRequest } from '../controllers/controller.js';

// routing
router.route('/').get(getAllRequests).post(postRequest)
router.route('/:id').get(getSingleRequest).put(editRequest).delete(deleteRequest)

router.get('/about', (req, res) => {
    res.send({ message: 'About path' })
})
    
export default router;