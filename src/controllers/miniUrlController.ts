import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { MiniUrlSchema, RouteSchema } from "../models/miniUrlModel";
import stringToHash from "../config/hash";

const MiniUrl = mongoose.model("MiniUrl", MiniUrlSchema);
const Route = mongoose.model("Route", RouteSchema);

export class MiniUrlController {
	public getMiniUrls(req: Request, res: Response) {
		MiniUrl.find({}, (err, miniurl) => {
			if (err) {
				res.send(err);
			}
			res.json(miniurl);
		});
	}

	public getMiniUrlWithID(req: Request, res: Response) {
		MiniUrl.findById(req.params.miniurlId, (err, miniurl) => {
			if (err) {
				res.send(err);
			} else {
				res.json(miniurl);
			}
		});
	}

	public addNewMiniUrl(req: Request, res: Response) {
		let newMiniUlr = new MiniUrl(req.body);
		newMiniUlr.save((err, miniurl) => {
			if (err) {
				res.send(err);
			}
			res.json(miniurl);
		});
	}

	public updateMiniUrl(req: Request, res: Response) {
		const { url } = req.body;
		const path = stringToHash(url);
		const newRoute = new Route({ path: path, url: url });
		MiniUrl.findOne({ _id: req.params.miniurlId }, (err, miniurl) => {
			if (err) {
				res.send(err);
			} else {
				miniurl.routes.push(newRoute);
				miniurl.save((err, miniurl) => {
					if (err) {
						res.send(err);
					}
					res.json(miniurl);
				});
			}
		});
	}

	public deleteMiniUrl(req: Request, res: Response) {
		MiniUrl.remove({ _id: req.params.miniurlId }, (err, user) => {
			if (err) {
				res.send(err);
			}
			res.json({ message: "Successfully deleted miniurl!" });
		});
	}
}
