# Scriptor.js
A Javascript Library for building custom text editors with ease


This is a barebone text editor JS library, meant to create your OWN text editor & customize it to your own / users needs. 

It includes options for creating text editor buttons / values with ease, wrapping selected text, inserting text at last typed or clicked position & more... 

> Note: You WILL find bugs & lots of room for improvement! Any PR's to help fix bugs you find **ARE MORE THAN** appreciated. 

## Example & Usage

You can view the example's of Scriptor.js in use below! 




<br>

<details>

  <summary>How to use <b>Scriptor.js</b></summary>

<br>

Create a textarea or another HTML element that can hold a <code>value</code> with the id <code>text-editor</code>

Add some buttons like so to add functionalinatiy to your text editor 


```html
  <button class="test" id="btn" value="@" wrap="true"  htmltags="false" type="button">GitHub Mention</button>
   <button class="test" id="btn" value="&#x3C;img src=&#x22;test&#x22;&#x3E;" insert="true"  type="button" htmltags="false">Insert Image Of A Dog</button>

<button class="test" id="btn" value="blockquote" wrap="True" type="button">Blockquote</button>
```


Include the script in your HTML document & you're done, you've created a basic custom text editor! 




### Options


<b>To wrap text with a HTML tags etc..</b>


       <button class="test" id="btn" value="h1" wrap="True" type="button">Add a Comment</button>


<b>To wrap text with a non-HTML tags</b> 

       <button class="test" id="btn" value="~~ " wrap="True" htmltags="false" type="button">Strikethrough</button>


<b>To insert a value</b>


> ^ this needs a better definition / term. 

Note: if text is **highlighted** value will be added before highlighted text selection, if **NOT** the value will be added to last typing position. 

       <button class="test" id="btn" value="@" wrap="false"  type="button">GitHub Mention</button>



<b>To insert a value at last typing or clicked position</b>:


      <button class="test" id="btn" value=":yum: " insert="true" wrap="True" type="button">Add a Comment</button> 


Note(s):
- Wrap options etc do not work on insert buttons. 
- To insert a HTML value such as a image inside of a <code>value</code> attribute you must **encode** it

</details>

   
