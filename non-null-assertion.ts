const logUserEmailInUppercaseBad = (user: { name: string; email?: string }) => {
  // if (!user.email) {
  //   console.log(`User ${user.name} has no email`);
  //   return;
  // }

  console.log(user.email!.toUpperCase());
};

logUserEmailInUppercaseBad({ name: "John without an email" });
