import Router from 'express'
import userController from './user.controller.js'
import PostController from "./PostController.js";
const router = new Router()

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.getAllPosts)
router.get('/posts/:id', PostController.getOnePost)
router.put('/posts', PostController.updatePost)
router.delete('/posts/:id', PostController.deletePost)

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router