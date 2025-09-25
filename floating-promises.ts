/**
 * simulate a function that saves a user to a database, but it's throwing an error!
 * @param userData
 */
async function saveUser(userData: { name: string; email: string }) {
  throw new Error("Failed to save user");
}

async function handleFormSubmit(userData: { name: string; email: string }) {
  try {
    // Add an await here to fix the issue!
    saveUser(userData);
    console.log("👋 Form successfully submitted, or has it?");
  } catch (error) {
    console.error("Gracefully handled the error 🦋");
  }
}

handleFormSubmit({ name: "John Doe", email: "john.doe@example.com" });

process.on("unhandledRejection", (reason) => {
  console.error("🚨 Unhandled Promise Rejection:", reason);
});
