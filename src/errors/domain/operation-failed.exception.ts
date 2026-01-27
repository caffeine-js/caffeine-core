import { DomainException } from "@/models/errors";

export class OperationFailedException extends DomainException {
	public readonly name = "Operation Failed";

	constructor(
		public domainName: string,
		public message: string = `Operation failed in the ${domainName} domain.`,
	) {
		super(message);
	}
}
