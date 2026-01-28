import { InfraException } from "@/models/errors/infra-exception";

export class ResourceNotFoundException extends InfraException {
	public name: string = "Resource Not Found Exception";

	constructor(
		public layerName: string,
		public message: string = "The resource was not found.",
	) {
		super(message);
	}
}
