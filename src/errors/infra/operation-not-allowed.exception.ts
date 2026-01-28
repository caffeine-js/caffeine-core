import { InfraException } from "@/models/errors/infra-exception";

export class OperationNotAllowedException extends InfraException {
	public name: string = "Operation Not Allowed Exception";

	constructor(
		public layerName: string,
		public message: string = "The operation is not allowed.",
	) {
		super(message);
	}
}
