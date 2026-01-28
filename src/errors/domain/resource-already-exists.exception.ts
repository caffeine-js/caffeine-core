import { DomainException } from "@/models/errors";

export class ResourceAlreadyExistsException extends DomainException {
	public readonly name = "Resource Already Exists";

	constructor(
		public layerName: string,
		public message: string = `Resource already exists in the ${layerName} domain.`,
	) {
		super(message);
	}
}
