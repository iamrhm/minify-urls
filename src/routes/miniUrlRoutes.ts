import * as express from "express";

import { MiniUrlController } from "../controllers/miniUrlController";

const router: express.Router = express.Router();
const miniurlController: MiniUrlController = new MiniUrlController();

/**
 * @swagger
 * tags:
 *   name: MiniUrl
 *   description: MiniUrl management
 */

/**
 * @swagger
 * path:
 *  /miniurl/:
 *    get:
 *      summary: Get all miniurls
 *      tags: [MiniUrl]
 *      responses:
 *        "200":
 *          description: List of specific user's miniurls
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MiniUrl'
 */

/**
 * @swagger
 * path:
 *  /miniurl/:
 *    post:
 *      summary: Create new miniurl
 *      tags: [MiniUrl]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MiniUrl'
 *      responses:
 *        "200":
 *          description: Created miniurl model
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MiniUrl'
 */

router
	.route("/")
	.get(miniurlController.getMiniUrls)
	.post(miniurlController.addNewMiniUrl);

/**
 * @swagger
 * path:
 *  /miniurl/{miniurlId}:
 *    get:
 *      summary: Get a miniurl by id
 *      tags: [MiniUrl]
 *      parameters:
 *        - in: path
 *          name: miniurlId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the miniurl
 *      responses:
 *        "200":
 *          description: A miniurl object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MiniUrl'
 */

/**
 * @swagger
 * path:
 *  /miniurl/{miniurlId}:
 *    put:
 *      summary: Update a miniurl
 *      tags: [MiniUrl]
 *      parameters:
 *        - in: path
 *          name: miniurlId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the miniurl
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MiniUrl'
 *      responses:
 *        "200":
 *          description: Updated miniurl object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/MiniUrl'
 */

/**
 * @swagger
 * path:
 *  /miniurl/{miniurlId}:
 *    delete:
 *      summary: Delete a miniurl
 *      tags: [MiniUrl]
 *      parameters:
 *        - in: path
 *          name: miniurlId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the miniurl
 *      responses:
 *        "200":
 *          description: Delete confirmation message
 *          content:
 *            application/json:
 */

router
	.route("/:miniurlId")
	.get(miniurlController.getMiniUrlWithID)
	.put(miniurlController.updateMiniUrl)
	.delete(miniurlController.deleteMiniUrl);

export default router;
