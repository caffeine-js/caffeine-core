import { InfraException } from "@/models/errors/infra-exception";

export class ConflictException extends InfraException {
	public name: string = "Conflict Exception";

	constructor(
		public layerName: string,
		public message: string = "A conflict occurred in the database.",
	) {
		super(message);
	}
}
