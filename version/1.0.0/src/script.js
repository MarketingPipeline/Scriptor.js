 let form = document.getElementById('textarea');

        form.addEventListener("input", function (e) {
       // This prevents the window from reloading
       
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


function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


function wrapText(text, wrap){
  var Wrapped = `<${wrap}>${text}</${wrap}>`
  return Wrapped
}
 let btn = document.getElementById('btn');


var elements = document.getElementsByClassName("test");

for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function (e) {
           
          if (getSelectionText() != ""){
            var Wrap = e.target.getAttribute("wrap")
            if (Wrap =="True"){
                    form.value = form.value.replace(getSelectionText(), wrapText(getSelectionText(), e.target.getAttribute("value")));  
            } else{
              
              
               form.value = form.value.replace(getSelectionText(), e.target.getAttribute("value") + getSelectionText());  
            }
  
          }
        });


}


      
