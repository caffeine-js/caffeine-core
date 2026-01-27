import { DomainException } from "../../models/errors/domain-exception";

export class InvalidDomainDataException extends DomainException {
	public readonly name = "Invalid Domain Data";

	constructor(
		public domainName: string,
		public message: string = `Invalid data provided for the ${domainName} domain.`,
	) {
		super(message);
	}
}
