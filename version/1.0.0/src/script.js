
function getCaretPosition() {
  if (window.getSelection && window.getSelection().getRangeAt) {
    var range = window.getSelection().getRangeAt(0);
    var selectedObj = window.getSelection();
    var rangeCount = 0;
    var childNodes = selectedObj.anchorNode.parentNode.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i] == selectedObj.anchorNode) {
        break;
      }
      if (childNodes[i].outerHTML)
        rangeCount += childNodes[i].outerHTML.length;
      else if (childNodes[i].nodeType == 3) {
        rangeCount += childNodes[i].textContent.length;
      }
    }
    return range.startOffset + rangeCount;
  }
  return -1;
}
// ID for text editor 
let form = document.getElementById('textarea');
     
// carot / last type postion 
        var startPosition = 0 
        var currePosition = 0

   form.addEventListener("click", function(){
       
        currentTextPosition = form.selectionEnd;
        
    },false);

         // 
        form.addEventListener("input", function (e) {
       // This prevents the window from reloading
       
 
         currentTextPosition = form.selectionEnd;
        
       
    
        let input = form.value;
//form.value = form.value + '\nYour appended stuff';
        var d = document.getElementById('github')
        d.innerHTML = `<github-md>${input}</github-md>`;
       renderMarkdown()
        });


    /// Load any default text area content

    window.addEventListener("load", function (e) {
       // This prevents the window from reloading
       
        let input = form.value;
        var d = document.getElementById('github')
        d.innerHTML = `<github-md>${input}</github-md>`;
       renderMarkdown()
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
  // replace first HTML tag
  text = text.replace(`<${wrap}>`, '');
  // replace the last tag
  var matches = text.match(`</${wrap}>`);
var lastMatch = matches[matches.length-1];
  text = text.replace(`${lastMatch}`, '')
  var Wrapped = `${text}` 

} 
  

  else{
    
    if (string.startsWith(`${substring}`) == true) {
     // replace first HTML tag
  text = text.replace(`<${wrap}>`, '');
  // replace the last tag
  var matches = text.match(`</${wrap}>`);
var lastMatch = matches[matches.length-1];
  text = text.replace(`${lastMatch}`, '')
  var Wrapped = `${text}` 
  }

    
    
  if (html_tags==true){
     var Wrapped = `<${wrap}>${text}</${wrap}>` 
  } else{
      var Wrapped = `${wrap}${text}${wrap}`
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
     
          /// To-do - add at last clicked carrot position
          var AddText = getCaretPosition(form)
          console.log(AddText)
          var startPos = 0;
        var endPos = AddText;
          
          form.value = form.value.substring(0, currentTextPosition) + e.target.getAttribute("value") + form.value.substring(currentTextPosition, form.value.length);

        }
        
        
        
        /// Highlighted Text Options 
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
              
              // Add to the start of the value
               form.value = form.value.replace(getSelectionText(), e.target.getAttribute("value") + getSelectionText());  
            }
  
          }
        });


}


      
