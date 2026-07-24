import { signupFormSchema } from "./schema/signup";
import { loginSchema } from "./schema/login";

export function validateSignupForm(formData: unknown) {
  const result = signupFormSchema.safeParse(formData);

  if (result.success) {
    return {
      isValid: true,
      errors: {} as Record<string, string>,
    };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  });

  return {
    isValid: false,
    errors,
  };
}

export function validateLoginForm(formData: unknown) {
  const result = loginSchema.safeParse(formData);

  if (result.success) {
    return {
      isValid: true,
      errors: {} as Record<string, string>,
    };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  });

  return {
    isValid: false,
    errors,
  };
}
