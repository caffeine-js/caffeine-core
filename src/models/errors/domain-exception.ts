import type { CoreExceptionType } from "@/types";
import { CoreException } from "../core-exception";

export abstract class DomainException extends CoreException {
	protected readonly layer: CoreExceptionType = "domain";
}
