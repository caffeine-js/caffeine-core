import type { CoreExceptionType } from "../../types/core-exception-type";
import { CoreException } from "../core-exception";

export abstract class DomainException extends CoreException {
	protected readonly layer: CoreExceptionType = "domain";
	public abstract readonly domainName: string;
}
