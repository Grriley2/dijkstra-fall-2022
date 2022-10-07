// Convert kebab case works to camel casing. 
// The first word within the output should be capitalized only if it is the first letter of a word and dashes should be removed.

// change-this-word gets converted into changeThisWord
// day-moth-year gets converted into dayMonthYear
// ALL-CAPS gets converted into allCaps

var testString = "hello-world"
function kebabToCamel (kebabString) {
   let array = [];
  let camelString = array.push(kebabString)
   for (let i=0; i<=kebabString.length; i++) {
     if (kebabString[i] === "-" )
       kebabString.substr(i) && kebabString.toUpperCase(i++)
                                                                          
   }
 console.log(kebabString)
  console.log(camelString)
 
   return camelString;
  
}
   console.log(kebabToCamel(testString))

}