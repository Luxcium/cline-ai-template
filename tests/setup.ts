/**
 * Jest setup file for the TFTDD project
 */

// Add custom matchers for type testing
expect.extend({
  toBeType(received: unknown, expected: string) {
    const type = typeof received;
    const pass = type === expected;
    return {
      pass,
      message: () =>
        `Expected value to be of type ${expected} but received type ${type}`,
    };
  },
});

// Custom type matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeType(expected: string): R;
    }
  }
}

export { };

