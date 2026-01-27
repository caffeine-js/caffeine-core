import type { CoreExceptionType } from "../types/core-exception-type";

export abstract class CoreException extends Error {
	protected abstract readonly layer: CoreExceptionType;
	public abstract override readonly name: string;
	public abstract override readonly message: string;
}
