function kebabToCamel (kebabString) {
    var kebabSplit = kebabString.split("-")
    var newStringCamel = "" 
   
    for (i = 0; i < kebabSplit.length; i++) {
      let firstLetter = kebabSplit[i].substr(0,1).toUpperCase()
      let restOfWord = kebabSplit[i].substr(1).toLowerCase()
       
      newStringCamel += (firstLetter + restOfWord)
    }
     // let firstLetter = newStringCamel.substr(0,1).toLowerCase()
     // let restOfWord = newStringCamel.substr(1)
     var camelCaseWord = newStringCamel.substr(0,1).toLowerCase() + newStringCamel.substr(1)
     
     
     // return (firstLetter + restOfWord) 
   return camelCaseWord
    
   }
   console.log(kebabToCamel("heLLO-WORLD"))
   
       //loop over kebabstring
       // - if the char dash, don't use it AND the following char would be capitalized
       // - if char [1] is cap, change to lowercase
       // -otherwise, copy the lowercased to camelstring
       

}