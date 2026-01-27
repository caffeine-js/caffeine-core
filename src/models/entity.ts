import type { IEntity } from "../types/entity.interface";
import { EntityDTO } from "../dtos/entity.dto";
import { InvalidEntityData } from "../errors/entity-validation.exception";
import { Schema } from "./schema";

export abstract class Entity implements IEntity {
	public readonly id: string;
	public readonly createdAt: Date;
	public updatedAt?: Date;

	protected constructor({ createdAt, id, updatedAt }: EntityDTO) {
		this.id = id;
		this.createdAt = new Date(createdAt);
		this.updatedAt = updatedAt ? new Date(updatedAt) : undefined;
	}

	protected static prepare(data: EntityDTO): EntityDTO {
		const isAValidEntity = new Schema(EntityDTO).match(data);

		if (!isAValidEntity)
			throw new InvalidEntityData("Cannot build the target entity.");

		return data;
	}
}
