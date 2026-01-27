import { CoreException } from "../models/core-exception";
import type { CoreExceptionType } from "../types/core-exception-type";

export class InvalidObjectValueException extends CoreException {
	protected layer: CoreExceptionType = "internal";
	public readonly name = "Invalid Object Value";

	constructor(
		public objectValueName: string,
		public message: string = `Invalid value provided for the ${objectValueName} object value.`,
	) {
		super(message);
	}
}
