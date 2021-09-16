import { generateMock } from "@anatine/zod-mock";
import { DeepPartial, HeroContact } from "./types/hero-contact";
import { z, ZodTypeAny, ZodAny, ZodBoolean, ZodDefault, ZodNumber, ZodObject, ZodRawShape, ZodString, ZodArray } from "zod";
import { heroContactSchema } from "./zod/hero-contact";


const mockData: DeepPartial<HeroContact> = generateMock(heroContactSchema);
const mockData2: DeepPartial<HeroContact> = createFixture(heroContactSchema);


console.log(mockData2)
console.log(mockData);

