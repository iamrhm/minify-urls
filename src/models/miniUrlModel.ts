import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - phonenumber
 *          - name
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: Enter the email id of the user
 *          phonenumber:
 *            type: string
 *            descrip`tion: Enter the phonenumber of the user
 *          name:
 *            type: string
 *            description: Enter the  name of the user
 *          password:
 *            type: string
 *            description: Enter the  password of the user
 *          gender:
 *            type: string
 *          dateOfBirth:
 *            type: Date
 *          subscriptions:
 *            type: array
 *            items:
 *              type: series_id
 *          following:
 *            type: array
 *            items:
 *              type: artist_id
 *          likes:
 *            type: array
 *            items:
 *              type: media_id
 *          playlist:
 *            type: array
 *            items:
 *              type: media_id
 *          avatar:
 *            type: string
 *          join_date:
 *            type: Date
 *        example:
 *          {
 *            "subscriptions": [],
 *            "following": [],
 *            "likes": [],
 *            "playlist": [],
 *            "_id": "5e6b75efa0e0d0dc8c448a92",
 *            "email": "andysenclave@gmail.com",
 *            "name": "Anindya Mukherjee",
 *            "phonenumber": "+919876543210",
 *             "username": "uniqueusername",
 *            "password": "pass1234",
 *            "join_date": "2020-03-13T12:00:47.478Z",
 *            "__v": 0
 *          }
 */

export const RouteSchema = new Schema({
	path: { type: String, unique: "url already exist" },
	url: { type: String }
});

export const MiniUrlSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: `provide username`
	},
	routes: {
		type: [RouteSchema]
	},
	usageCount: {
		type: Number,
		default: 0,
		max: [100, `Uh Oh!! reached max limit`]
	}
});
