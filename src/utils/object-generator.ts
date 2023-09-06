import { FieldGenerator } from "@/utils/field-generator";
import { generateRandomWord } from "@/utils/generate-random-word";
import { getRandomNumber } from "@/utils/get-random-number";
import type {Item} from "@/types";

export class ObjectGenerator {
    private fieldGenerator: FieldGenerator;
    private readonly numberOfObjects: number;
    private readonly fieldNamesAndTypes: { name: string; type: "number" | "string" }[];

    constructor(fieldGenerator: FieldGenerator, numberOfObjects: number) {
        this.fieldGenerator = fieldGenerator;
        this.numberOfObjects = numberOfObjects;
        this.fieldNamesAndTypes = this.fieldGenerator.generateFieldsAndTypes();
    }

    private generateObject(): Item {
        return this.fieldNamesAndTypes.reduce((object: Item, { name, type }) => {
            object[name] = type === "number" 
                ? getRandomNumber(-1000, 1000) 
                : Array.from({ length: getRandomNumber(1, 10) }, generateRandomWord).join(" ");
            return object;
        }, {});
    }
    public generateObjectsArray(): Item[] {
        return Array.from({ length: this.numberOfObjects }, () => this.generateObject());
    }
}