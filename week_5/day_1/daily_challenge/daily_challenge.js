//challenge 1
const makeAllCaps = (wordsArray)=> {
    return new Promise ((resolve,reject)=>
    {
        if (wordsArray.every(word => typeof word === 'string'))
        {
            const upperCaseWords = wordsArray.map(word => word.toUpperCase());
            resolve(upperCaseWords);
        } else {
            reject('Not all items in the array are strings!');
        }
    })
}

const sortWords = (upperCaseWordsArray)=> {
    return new Promise ((resolve,reject)=>
    {
        if (upperCaseWordsArray.length > 4){
            const sortedWords = upperCaseWordsArray.sort();
            resolve(sortedWords);
        }else{
            reject('Array length is less than 5!'); 

        } 
    })
}
makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
  .then((result) => sortWords(result)) // The result from makeAllCaps is passed here
  .then((finalResult) => console.log(finalResult)) // The result from sortWords is passed here
  .catch((error) => console.log(error)); // This will run if any promise fails
//the output will be: [ 'APPLE', 'BANANA', 'KIWI', 'MELON', 'PEAR' ]


makeAllCaps(['apple', 'pear', 'banana', 4])
  .then((result) => sortWords(result))
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.log(error));  
//the output will be: Not all items in the array are strings!


makeAllCaps(['apple', 'pear', 'banana'])
  .then((result) => sortWords(result))
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.log(error));
 //the output will be: Array length is less than 5! 