# TextEditorKit.js
A Javascript Library for building custom text editors with ease


This is a boilerplate / barebone text editor JS library, meant to be a starting for point for developers to use & customize to their needs. 

It includes options for creating text editor buttons with ease, wrapping selected text, inserting text at last typed or clicked position & more... 

> Note: You WILL find bugs! Any PR's to help fix bugs you find **ARE MORE THAN** appreciated. 

<b>To wrap text with a HTML element etc..</b>


       <button class="test" id="btn" value="h1" wrap="True" type="button">Add a Comment</button>


<b>To wrap text with a non-HTML elemenet</b> 

       <button class="test" id="btn" value="~~ " wrap="True" htmltags="false" type="button">Strikethrough</button>


<b>To insert a value before text selection</b>


       <button class="test" id="btn" value="@" wrap="false"  type="button">GitHub Mention</button>



<b>To insert a value at last typing or clicked position</b>:


      <button class="test" id="btn" value=":yum: " insert="true" wrap="True" type="button">Add a Comment</button> 


Note(s):
- Wrap options etc do not work on insert buttons. 
- To insert a HTML value such as a image you must **encode** it

   
   
