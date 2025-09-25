// @ts-check

const r = { is: "is a string" };

r.as.toUpperCase();

/**
 * @param {string} data
 */
const toUpperCaseArray = (data) => {
  return data.toUpperCase().split(" ");
};
