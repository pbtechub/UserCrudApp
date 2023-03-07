import express from 'express';

import { getUser, createUser, foundUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();


router.get('/', getUser)

router.post('/', createUser);

router.get('/:id', foundUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

export default router;