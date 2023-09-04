import { generateRandomWord } from "@/utils/generate-random-word";
import { getRandomNumber } from "@/utils/get-random-number";

export class FieldGenerator {
    private generateFieldName(): string {
        const numberOfWords: number = getRandomNumber(1, 3) // случайное число от 1 до 3х
        const fieldWords: string[] = Array.from({ length: numberOfWords }, () => generateRandomWord());

        return fieldWords.join("_");
    }

    private generateFieldType(): "number" | "string" {
        return Math.random() < 0.5 ? "number" : "string";
    }

    public generateFieldsAndTypes(): { name: string; type: "number" | "string" }[] {
        const numberOfFields: number = getRandomNumber(3, 5) // случайное число от 3х до 5

        return Array.from({ length: numberOfFields }, () => ({
            name: this.generateFieldName(),
            type: this.generateFieldType(),
        }));
    }
}
