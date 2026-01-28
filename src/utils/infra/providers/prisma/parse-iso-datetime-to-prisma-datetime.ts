type IsoDateProperties = {
	createdAt: string;
	updatedAt?: string | undefined | null;
};

type OutputPrismaDateProperties = {
	createdAt: Date;
	updatedAt: Date | undefined | null;
};

export function parseIsoDateTimeToPrismaDateTime<
	ContentType extends IsoDateProperties,
>(
	content: ContentType,
): Omit<ContentType, keyof IsoDateProperties> & OutputPrismaDateProperties {
	const { createdAt, updatedAt, ...properties } = content;

	return {
		...properties,
		createdAt: new Date(createdAt),
		updatedAt: typeof updatedAt === "string" ? new Date(updatedAt) : updatedAt,
	};
}
