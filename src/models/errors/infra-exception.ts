import type { CoreExceptionType } from "@/types";
import { CoreException } from "../core-exception";

export abstract class InfraException extends CoreException {
	protected readonly layer: CoreExceptionType = "infra";
}
