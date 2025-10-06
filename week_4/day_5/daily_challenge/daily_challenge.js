const isAnagram = (stringA, stringB) => {
  const cleanStringA = stringA.toLowerCase().replace(/\s/g, '');
  const cleanStringB = stringB.toLowerCase().replace(/\s/g, '');

  if (cleanStringA.length !== cleanStringB.length) {
    return false;
  }

  const sortedStringA = cleanStringA.split('').sort().join('');
  const sortedStringB = cleanStringB.split('').sort().join('');

  return sortedStringA === sortedStringB;
};

console.log(isAnagram("Astronomer", "Moon starer")); // This will show: true
console.log(isAnagram("school master", "The classroom")); // This will show: true
console.log(isAnagram("hello", "world")); // This will show: false