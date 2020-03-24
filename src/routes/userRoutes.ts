import * as express from "express";

import { UserController } from "../controllers/userController";

const router: express.Router = express.Router();
const userController: UserController = new UserController();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * path:
 *  /user/:
 *    get:
 *      summary: Get all users
 *      tags: [User]
 *      responses:
 *        "200":
 *          description: List of users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/:
 *    post:
 *      summary: Create new user
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: Created user model
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

router
  .route("/")
  .get(userController.getUsers)
  .post(userController.addNewUser);

/**
 * @swagger
 * path:
 *  /user/{userId}:
 *    get:
 *      summary: Get a user by id
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the user
 *      responses:
 *        "200":
 *          description: A user object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/{userId}:
 *    put:
 *      summary: Update a user
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: Updated user object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/{userId}:
 *    delete:
 *      summary: Delete a user
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the user
 *      responses:
 *        "200":
 *          description: Delete confirmation message
 *          content:
 *            application/json:
 */

router
  .route("/:userId")
  .get(userController.getUserWithID)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
