import { DomainException } from "@/models/errors";

export class InvalidDomainDataException extends DomainException {
	public readonly name = "Invalid Domain Data";

	constructor(
		public layerName: string,
		public message: string = `Invalid data provided for the ${layerName} domain.`,
	) {
		super(message);
	}
}
