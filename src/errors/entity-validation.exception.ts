import { CoreException } from "@/models";
import type { CoreExceptionType } from "@/types";

export class InvalidEntityData extends CoreException {
	protected layer: CoreExceptionType = "internal";
	public name: string = "Invalid Entity Data";

	constructor(public message: string = "The entity validation failed.") {
		super(message);
	}
}
