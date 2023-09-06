import { getRandomNumber } from "@/utils/get-random-number";
import { generateRandomWord } from "@/utils/generate-random-word";


export class FieldGenerator {
    private generateFieldName(): string {
        return Array.from({ length: getRandomNumber(1, 3) }, generateRandomWord).join("_");
    }

    private generateFieldType(): "number" | "string" {
        return Math.random() < 0.5 ? "number" : "string";
    }

    public generateFieldsAndTypes(): { name: string; type: "number" | "string" }[] {
        return Array.from({ length: getRandomNumber(3, 5) }, () => ({
            name: this.generateFieldName(),
            type: this.generateFieldType(),
        }));
    }
}
