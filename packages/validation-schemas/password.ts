import { z } from "zod";

type PasswordValidationSchemaErrorOptions = {
  strongPasswordRegex: RegExp;
  messages: {
    tooShort: string;
    tooLong: string;
    tooWeak: string;
  };
};

export const createPasswordValidationSchema = (options: PasswordValidationSchemaErrorOptions) => {
  return z
    .string({ required_error: options.messages.tooShort, invalid_type_error: options.messages.tooShort })
    .min(8, { message: options.messages.tooShort })
    .max(100, { message: options.messages.tooLong })
    .regex(options.strongPasswordRegex, { message: options.messages.tooWeak });
};
