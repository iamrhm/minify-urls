import * as mongoose from "mongoose";
import { MiniUrlSchema } from "../models/miniUrlModel";
import { Request, Response } from "express";

const MiniUrl = mongoose.model("MiniUrl", MiniUrlSchema);

export class AppController {
	public redirect(req: Request, res: Response) {
		const username = req.params.username;
		const hashedPath = req.params.hashedpath;
		MiniUrl.findOne({ username: username }, (err, miniurl) => {
			if (err) {
				res.send(err);
			}
			let route = miniurl.routes.filter(route => route.path === hashedPath);
			if (route[0].url) res.redirect(route[0].url);
		});
	}
}
