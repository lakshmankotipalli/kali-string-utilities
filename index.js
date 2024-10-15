// Capitalize the first letter of the string
function kl_capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Converts the snake_case to camelCase
function kl_snakeToCamel(str) {
  return str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}

// Reverses a string
function kl_reverseString(str) {
  return str.split('').reverse().join('');
}

// Truncate a string to a specific length
function kl_truncate(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

// Exporting the functions for using them in other projects
module.exports = {
  kl_capitalize,
  kl_reverseString,
  kl_snakeToCamel,
  kl_truncate
};