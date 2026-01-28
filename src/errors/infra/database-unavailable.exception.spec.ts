import { describe, expect, it } from "vitest";
import { DatabaseUnavailableException } from "./database-unavailable.exception";

describe("Database Unavailable Exception", () => {
	it("should create an instance with default message", () => {
		const exception = new DatabaseUnavailableException("MySQL");
		expect(exception).toBeInstanceOf(Error);
		expect(exception.name).toBe("Database Unavailable Exception");
		expect(exception.message).toBe("The database is currently unavailable.");
		expect(exception.layerName).toBe("MySQL");
	});

	it("should create an instance with custom message", () => {
		const exception = new DatabaseUnavailableException(
			"MySQL",
			"Connection timeout",
		);
		expect(exception.message).toBe("Connection timeout");
	});
});
