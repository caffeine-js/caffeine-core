import type { CoreExceptionType } from "@/types";

export abstract class CoreException extends Error {
	protected abstract readonly layer: CoreExceptionType;
	public abstract override readonly name: string;
	public abstract override readonly message: string;
	public abstract readonly layerName: string;
}
