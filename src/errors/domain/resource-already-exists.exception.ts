import { DomainException } from "../../models/errors/domain-exception";

export class ResourceAlreadyExistsException extends DomainException {
	public readonly name = "Resource Already Exists";

	constructor(
		public domainName: string,
		public message: string = `Resource already exists in the ${domainName} domain.`,
	) {
		super(message);
	}
}
