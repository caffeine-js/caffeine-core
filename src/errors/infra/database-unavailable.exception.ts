import { InfraException } from "@/models/errors/infra-exception";

export class DatabaseUnavailableException extends InfraException {
	public name: string = "Database Unavailable Exception";

	constructor(
		public layerName: string,
		public message: string = "The database is currently unavailable.",
	) {
		super(message);
	}
}
