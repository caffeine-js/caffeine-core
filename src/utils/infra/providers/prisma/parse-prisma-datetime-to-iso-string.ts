type DateTimeProperties = {
	createdAt: Date;
	updatedAt: Date | undefined | null;
};

type OutputDateTimeProperties = {
	createdAt: string;
	updatedAt: string | undefined;
};

export function parsePrismaDateTimeToISOString<
	ContentType extends DateTimeProperties,
>(
	content: ContentType,
): Omit<ContentType, keyof DateTimeProperties> & OutputDateTimeProperties {
	const { createdAt, updatedAt, ...properties } = content;

	return {
		...properties,
		createdAt: createdAt.toISOString(),
		updatedAt: updatedAt?.toISOString(),
	};
}
