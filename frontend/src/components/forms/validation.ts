export const validation = {
  email: {
    required: 'Email is required.',
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: 'Email format is invalid.',
    },
  },

  password: {
    required: 'Password is required.',
    minLength: {
      value: 8,
      message: 'Password must have at least 8 characters.',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      message: 'Password must contain at least one uppercase and lowercase letter and a number.',
    },
  },
}
