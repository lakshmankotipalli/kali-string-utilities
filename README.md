# About Kali Packages

"Goddess Kali (spelled as Kaali)" represents time and change - symbolizing adaptability and powerful transformations within your development environment. Kali packages are a collection of software packages that are designed to be easily installable, upgradable, and removable with reusable functionality in Javascript.

# kali-string-utilities

Kali String Utilities is a package that includes various useful string manipulation functions, such as Capitalize first letter, convert from snake_case to camelCase and vice versa, Reverse a string, Truncate a string to a specific length with ellipsis. I will add more utilities to this package in future..

## Installation
```bash
npm install kali-string-utilities
```

# Usage
```
const { capitalize, snakeToCamel, reverseString, truncate } = require('string-utilities');

console.log(kl_capitalize("hello")); // Output: "Hello"
console.log(kl_snakeToCamel("hello_world_test")); // Output: "helloWorldTest"
console.log(kl_reverseString("hello")); // Output: "olleh"
console.log(kl_truncate("This is a long sentence", 10)); // Output: "This is a..."

```