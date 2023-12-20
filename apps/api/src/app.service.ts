import { Injectable } from '@nestjs/common';
import { createPasswordValidationSchema } from '@repo/validation-schemas';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from NestJS! The cat one';
  }

  validatePassword(password: string): boolean {
    const passwordValidationSchema = createPasswordValidationSchema({
      strongPasswordRegex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      messages: {
        tooShort: 'Password is too short',
        tooLong: 'Password is too long',
        tooWeak: 'Password is too weak',
      },
    });

    const result = passwordValidationSchema.safeParse(password);

    if (result.success === false) {
      console.log(
        password,
        result.error.errors.map((e) => e.message).join('\n'),
      );
    }

    return result.success;
  }
}
