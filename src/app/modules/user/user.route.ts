import express from 'express'
import { userController } from './user.controller'
const router = express.Router()



router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.post(
  '/create-user',
  userController.createUser
)
router.patch(
  '/update-user/:id',
  userController.updateUser
)

export const userRoutes = {
  router
}
