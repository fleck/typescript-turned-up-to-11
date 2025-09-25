import { object, string, number, safeParse } from "valibot";

const userSchema = object({
  name: string(),
  age: number(),
  email: string(),
});

const validData = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

const invalidData = {
  name: "Jane Doe",
  age: "not a number",
  email: "jane@example.com",
};

const validResult = safeParse(userSchema, validData);

if (validResult.success) {
  console.log("✅ Parsing successful:", validResult.output);
  console.log("Type-safe access:", validResult.output.name.toUpperCase());
} else {
  console.log("❌ Parsing failed:", validResult.issues);
}

const invalidResult = safeParse(userSchema, invalidData);
if (invalidResult.success) {
  console.log("✅ Parsing successful:", invalidResult.output);
} else {
  console.log("❌ Parsing failed:");
  invalidResult.issues.forEach((issue) => {
    console.log(
      `  - ${issue.path?.map((p) => p.key).join(".") || "root"}: ${
        issue.message
      }`
    );
  });
}

// Type-safe usage after successful parsing
function processUser(userData: unknown) {
  const result = safeParse(userSchema, userData);

  if (result.success) {
    // TypeScript knows this is the correct type
    console.log(
      `Processing user: ${result.output.name}, age: ${result.output.age}`
    );
    return result.output;
  } else {
    console.log("Invalid user data provided");
    return null;
  }
}

// Test the function
processUser(validData);
processUser(invalidData);
