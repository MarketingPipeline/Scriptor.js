# TextEditorKit.js
A Javascript Library for building custom text editors with ease


This is a barebone text editor JS library, meant to be a starting for point for developers to use & customize to their needs. 

It includes options for creating text editor buttons with ease, wrapping selected text, inserting text at last typed or clicked position & more... 



To wrap text with a HTML element etc..


       <button class="test" id="btn" value="h1" wrap="True" type="button">Add a Comment</button>


To wrap text with a non-HTML elemenet 

       <button class="test" id="btn" value="~~ " wrap="True" htmltags="false" type="button">Strikethrough</button>


To insert a value before text selection


       <button class="test" id="btn" value="@" wrap="false"  type="button">GitHub Mention</button>



To insert a img etc..


Note: Wrap options etc do not work on insert buttons. 

      <button class="test" id="btn" value=":yum: " insert="true" wrap="True" type="button">Add a Comment</button> 
   
   
