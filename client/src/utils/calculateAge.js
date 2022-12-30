export const age = (birthYear) => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Calculate the age
  const age = currentYear - birthYear;

  // Return the age
  return age;
};
