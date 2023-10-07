import { ValueTransformer } from 'typeorm';

export const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string): '' | Date => date && new Date(parseInt(date, 10)),
    to: (date?: Date): string | undefined => date?.valueOf().toString(),
  },
  bigint: {
    from: (bigInt: string) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
};
