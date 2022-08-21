/// TODO's  //////////  -

// carrot position 

////// set caret position inside wrapped element - example <element>CARET HERE</element> 

////// set after for inserted elements  - example 
// @Octocat CARET HERE

/// Ignore Attribute Values In Spellcheck API / Textarea


// fix replacement of last match of wrapped element on highlighted text selection

// add styling options 'text-style' < attribute. 


////// END OF TO DO //////////



// ID for text editor 

let form = document.getElementById('textarea');
 
if (form != null){
      
// carot / last type postion 
        var startPosition = 0 
        var currentTextPosition = 0

   form.addEventListener("click", function(){
       
        currentTextPosition = form.selectionEnd;
        
    },false);

         // 
        form.addEventListener("input", function (e) {
       // This prevents the window from reloading
       
 
         currentTextPosition = form.selectionEnd;
        
       
    
        let input = form.value;
//form.value = form.value + '\nYour appended stuff';
   
        });


    /// Load any default text area content

    window.addEventListener("load", function (e) {
       // This prevents the window from reloading
       
        let input = form.value;
   
        });



/// This will return the highlighted text on screen. 

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}



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



/// Get all Text Editor Button Values 

var elements = document.getElementsByClassName("test");

for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function (e) {
        
        
        // Insert Value 
        if (e.target.getAttribute("insert")){
     
       /// insert at last carrot
          form.value = form.value.substring(0, currentTextPosition) + e.target.getAttribute("value") + form.value.substring(currentTextPosition, form.value.length);

        }
        
        
        
        /// Highlighted Text Options 
        
        if (getSelectionText() ==""){
     
          if (!e.target.getAttribute("insert")){
            // no text was hightlighted - just add the values 
           // todo - set carot in between the value added 
            if (e.target.getAttribute("htmltags") == "false"){
              
                    if (e.target.getAttribute("wrap") == "false"){
         form.value = form.value +  e.target.getAttribute("value")
                    } else{
                      // wrap element
                       form.value = form.value +  e.target.getAttribute("value") +  e.target.getAttribute("value")
                      
                      
                    }
                      
                      
          } else { 
  
             /// insert at last carrot
          form.value = form.value.substring(0, currentTextPosition) +   wrapText("", e.target.getAttribute("value"), true)  + form.value.substring(currentTextPosition, form.value.length);

            
          }
            
        }
        }
        
        
          if (getSelectionText() != ""){
            var Wrap = e.target.getAttribute("wrap")
            if (Wrap =="True"){
              
              if (e.target.getAttribute("htmltags") == "false"){
            
              
  
                // Not wrapping with html tags <>
                  form.value = form.value.replace(getSelectionText(), wrapText(getSelectionText(), e.target.getAttribute("value"), false));
              }else {

                            // Wrapping with html tags <>
                form.value = form.value.replace(getSelectionText(), wrapText(getSelectionText(), e.target.getAttribute("value")));  }
           
         
                     
            } else{
                               
              
              if (getSelectionText().startsWith(e.target.getAttribute("value")) == true ){ 
                
  // replace first HTML tag
  form.value = form.value.replace(e.target.getAttribute("value"), "");
     

 

}  else {
              // Add to the start of the value
               form.value = form.value.replace(getSelectionText(), e.target.getAttribute("value") + getSelectionText()); 

         }
    }
              
          }
        });


}


      
}

     form.addEventListener("input", function (e) {
       // This prevents the window from reloading
       
 
         currentTextPosition = form.selectionEnd;
        
       
    
        let input = form.value;
//form.value = form.value + '\nYour appended stuff';
        var d = document.getElementById('github')
        d.innerHTML = `<github-md>${input}</github-md>`;
       
       
     })
