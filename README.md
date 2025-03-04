# TFTDD (Type-First Test-Driven Development) Template

A TypeScript project template that emphasizes Type-First Test-Driven Development with AI integration.

## Features

* 🏗️ **Type-First Development**
  * Strong type system with custom type utilities
  * Runtime type validation with Zod
  * Type-safe error handling with Result type
  * Comprehensive type documentation
  * [TypeScript](https://www.typescriptlang.org/)
  * [Zod](https://github.com/colinhacks/zod)

* 🧪 **Test-Driven Development**
  * Jest + ts-jest setup
  * Custom test utilities
  * Type testing support
  * Test patterns and examples
  * [Jest](https://jestjs.io/docs/getting-started#using-typescript)
  * [ts-jest](https://kulshekhar.github.io/ts-jest/docs/)

* 📚 **Documentation**
  * TypeDoc integration
  * Markdown documentation generation
  * Example-driven documentation
  * Comprehensive API docs
  * [TSDoc](https://tsdoc.org/)
  * [TypeDoc](https://typedoc.org/)

* 🤖 **AI Integration**
  * AI-assisted development
  * Type generation helpers
  * Test generation utilities
  * Smart code suggestions
  * [Cline AI Documentation](https://docs.cline.bot/)
  * [Cline GitHub](https://github.com/cline/cline)

* 🔄 **Memory Bank System**
  * Comprehensive project documentation
  * [Cline Memory Bank](https://docs.cline.bot/improving-your-prompting-skills/custom-instructions-library/cline-memory-bank)

* 💻 **VSCode Integration**
  * VSCode Tasks
  * VSCode Debugging
  * VSCode Settings
  * [VSCode Tasks](https://code.visualstudio.com/docs/editor/tasks)
  * [VSCode Debugging](https://code.visualstudio.com/docs/editor/debugging-configuration)
  * [VSCode Settings](https://code.visualstudio.com/docs/editor/settings)

* 📋 **Code Quality**
  * Prettier
  * ESLint
  * [Prettier](https://prettier.io/docs/next/)
  * [ESLint](https://eslint.org/docs/latest/rules/)
  * [TypeScript ESLint](https://typescript-eslint.io/getting-started/)
  * [ESLint Style](https://eslint.style/packages/default)

## Getting Started

1. Clone the template:

   ```bash
   git clone https://github.com/yourusername/tftdd-template.git
   cd tftdd-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the tests:

   ```bash
   npm test
   ```

## Development Workflow

### 1. Define Types First

Start by defining your types before implementation:

```typescript
// Define the type/interface
interface User {
  id: string;
  name: string;
  email: string;
}

// Create a validator (optional)
const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email()
});
```

### 2. Write Tests

Write tests before implementing functionality:

```typescript
describe('User Management', () => {
  it('should create a valid user', () => {
    const result = createUser({
      name: 'John Doe',
      email: 'john@example.com'
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.value.name).toBe('John Doe');
      expect(result.value.email).toBe('john@example.com');
    }
  });
});
```

### 3. Implement Features

Implement the feature to make tests pass:

```typescript
function createUser(input: Omit<User, 'id'>): Result<User> {
  const id = generateUUID();
  const user = { id, ...input };

  try {
    userSchema.parse(user);
    return Result.success(user);
  } catch (error) {
    return Result.failure(error);
  }
}
```

## Project Structure

```
tftdd-template/
├── src/
│   ├── types/          # Type definitions
│   │   └── core/       # Core type system
│   ├── utils/          # Utility functions
│   └── index.ts        # Main entry point
├── tests/
│   ├── types/          # Type tests
│   └── utils/          # Test utilities
├── docs/              # Generated documentation
└── memory-bank/      # Project memory system
```

## Available Scripts

* `npm run build` - Build the project
* `npm test` - Run tests
* `npm run test:watch` - Run tests in watch mode
* `npm run lint` - Lint the code
* `npm run format` - Format the code
* `npm run docs` - Generate documentation
* `npm run validate:types` - Validate TypeScript types
* `npm run ci` - Run all checks (lint, types, tests, docs)

## Memory Bank System

The project includes a Memory Bank system for maintaining comprehensive documentation:

* `projectbrief.md` - Project overview and goals
* `productContext.md` - Product context and requirements
* `systemPatterns.md` - System architecture and patterns
* `techContext.md` - Technical context and decisions
* `activeContext.md` - Active development context
* `progress.md` - Project progress tracking

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License
