import * as express from "express";

import { AppController } from "../controllers/appController";

const router: express.Router = express.Router();
const appController: AppController = new AppController();

/**
 * @swagger
 * tags:
 *   name: App
 *   description: App management
 */

/**
 * @swagger
 * path:
 *  /app/:
 *    get:
 *      summary: redirect user to mapped url
 *      tags: [App]
 *      responses:
 *        "200":
 *          description: Redirect to mapped url
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/App'
 */

router.route("/:username/:hashedpath").get(appController.redirect);

export default router;
