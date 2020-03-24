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

export const UserSchema = new Schema({
	username: {
		type: String,
		required: "Enter your user name",
		unique: "this user name already used"
	},
	email: {
		type: String,
		required: "Enter the email id of the user"
	},
	name: {
		type: String,
		required: "Enter your name"
	},
	password: {
		type: String,
		required: "Enter your password"
	},
	phonenumber: {
		type: String
	}
});
