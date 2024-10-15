const {kl_capitalize, kl_snakeToCamel, kl_reverseString, kl_truncate} = require('./index');

console.log(kl_capitalize("hello")); // Output: "Hello"
console.log(kl_snakeToCamel("hello_world_test")); // Output: "helloWorldTest"
console.log(kl_reverseString("hello")); // Output: "olleh"
console.log(kl_truncate("This is a long sentence", 10)); // Output: "This is a..."