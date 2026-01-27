import slugify from "slugify";

export function slug(target: string): string {
	return slugify(target, {
		lower: true,
		trim: true,
	});
}
