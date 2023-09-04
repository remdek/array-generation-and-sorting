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
        const object: Item = {};

        for (const { name, type } of this.fieldNamesAndTypes) {
            if (type === "number") {
                object[name] = getRandomNumber(-1000, 1000);
            } else {
                const numberOfWords: number = getRandomNumber(1, 10)
                const words: string[] = new Array(numberOfWords)
                    .fill(undefined)
                    .map(() => generateRandomWord());

                object[name] = words.join(" ");
            }
        }

        return object;
    }
    public generateObjectsArray(): Item[] {
        return Array.from({ length: this.numberOfObjects }, () => this.generateObject());
    }
}