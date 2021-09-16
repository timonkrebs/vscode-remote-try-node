import { z, ZodTypeAny, ZodObject, ZodNumber, ZodAny, ZodString, ZodDefault, ZodArray } from "zod"

export class ZodFixtures {
    createFixture<T extends ZodTypeAny>(zodRef: T): z.infer<typeof zodRef> {
        const fixture: any = {}
        if (zodRef instanceof ZodObject) {
            for (const key in zodRef.shape) {
                const value = zodRef.shape[key];
                if (value instanceof ZodObject) {
                    fixture[key] = this.createFixture(value.shape)
                } else if (value instanceof ZodNumber) {
                    fixture[key] = 1;
                } else if (value instanceof ZodAny) {
                    fixture[key] = null;
                } else if (value instanceof ZodString) {
                    fixture[key] = "test";
                } else if (value instanceof ZodDefault) {
                    fixture[key] = "true";
                } else if (value instanceof ZodArray) {
                    fixture[key] = [12, 13];
                }

            }
        }
        return fixture;
    }
}