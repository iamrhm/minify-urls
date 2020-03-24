import { Request, Response } from "express";

import miniRoutes from "./miniUrlRoutes";
import appRoutes from "./appRoutes";
import userRoutes from "./userRoutes";

export class Routes {
	public routes(app): void {
		app.route("/").get((req: Request, res: Response) => {
			res.status(200).send({
				message: "GET request successfulll!!!!"
			});
		});
		app.use("/api/url", miniRoutes);
		app.use("/api/user", userRoutes);
		app.use("/app", appRoutes);
	}
}
