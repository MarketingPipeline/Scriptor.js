# To-Do

- [ ] Add Old Function For Wrapping Elements + Make Improvements For Matches. 

```javascript
// Wrap Highlighted Text On Button Click
function wrapText(text, wrap, html_tags=true){
  
  const string = text.trim();
const substring = wrap;
console.log(substring)
  // if Highlighted Text String Already Contains A Wrap At Start & End - Remove It
if (string.startsWith(`<${substring}>`) == true ){ 
  console.log(wrap)
  if (string.length >= substring.length ){
  // replace first HTML tag
  text = text.replace(`<${wrap}>`, '');
  // replace the last tag
  var matches = text.match(`</${wrap}>`);
if (matches !=null){
  var lastMatch = matches[matches.length-1];
  text = text.replace(`${lastMatch}`, '')
}
  var Wrapped = `${text}` 
  }
} 
  

  else{
    
    if (string.startsWith(`${substring}`) == true ){ 
      console.log("fdxsxs")
      
      if (string.length >= substring.length ){
  // replace first HTML tag
  text = text.replace(`${wrap}`, '');
  // replace the last tag
      
      /*
          var replace = `</${wrap}>`;
var re = new RegExp(replace,"g");
  var matches = text.match(re);
 for (const i in matches){
   console.log(i)
 }
var lastMatch = matches.slice(-1)[0]
  text = text.replace(`${lastMatch}`, '')
  var Wrapped = `${text}` 
  
  */
      
      
  var matches = text.match(`${wrap}`);
   
       
var lastMatch = matches[matches.length-1];
  text = text.replace(`${lastMatch}`, '')
    
       
  var Wrapped = `${text}` 
  }
  
  
} else {

  
  if (html_tags==true){
     var Wrapped = `<${wrap}>${text}</${wrap}>` 
  } else{
    console.log(html_tags)
      var Wrapped = `${wrap}${text}${wrap}`
  }
       }        
        
        
}
  return Wrapped
}

```

- [ ] Fix Carot Position Points / Make Improvements

- [ ] Add tests for match replacements, inserts etc. 
