import Compile from "typebox/compile";
import { Schema } from "./schema";

export class SchemaManager {
	static build(schema: string): Schema {
		const parsedSchema = JSON.parse(schema);

		return new Schema(parsedSchema);
	}

	static isSchema(schema: unknown): boolean {
		try {
			if (typeof schema === "string") schema = JSON.parse(schema);

			Compile(schema as never);

			return true;
		} catch (_) {
			return false;
		}
	}
}
