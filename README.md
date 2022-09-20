<p align="center">
  <img height="120" src="https://user-images.githubusercontent.com/86180097/187007928-a3906345-c8c7-40b7-bb45-d21d179c1100.png" />
</p>

   <p align="center">
  A JavaScript Library for building custom text editors with ease

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/Scriptor.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/Scriptor.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/Scriptor.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/Scriptor.js.svg?style=social&label=Fork">
  </a>
   </p>

# Scriptor.js

This is a bare bone text editor library, meant to create your OWN text editor & customize it to your own / users needs.

It includes options for creating text editor buttons / values with ease, wrapping selected text, inserting text at last typed or clicked position & more...

> Note: You WILL find bugs & lots of room for improvement! Any PR's to help fix bugs you find **ARE MORE THAN** appreciated. You can find also a list of things needed to be fixed inside of the [to-do](.github/TO-DO.md) list

## Example and usage

You can view the example's of Scriptor.js in use below!

- **HTML Editor**  
  [Source](https://github.com/MarketingPipeline/Scriptor.js/blob/main/demos/html_editor.html),
  [Demo](https://marketingpipeline.github.io/Scriptor.js/demos/html_editor.html) 
  
- **Markdown Editor**  
  [Source](https://github.com/MarketingPipeline/Scriptor.js/blob/main/demos/markdown_editor.html),
  [Demo](https://marketingpipeline.github.io/Scriptor.js/demos/markdown_editor.html)   
  

<br>

<details>

  <summary>How to use <b>Scriptor.js</b></summary>

<br>

Create a text area or another HTML element that can hold a <code>value</code> with the id <code>text-editor</code>

Add some buttons with the attribute <code>data-scriptor-btn</code> to add functionality to your text editor

Example:

```html
<button data-scriptor-btn value="@" wrap="false" htmltags="false" type="button">GitHub Mention</button>
<button data-scriptor-btn value="&#x3C;img src=&#x22;text-editor-btn&#x22;&#x3E;" insert="true" type="button" htmltags="false">Insert Image Of A Dog</button>

<button data-scriptor-btn value="blockquote" htmltags="true" wrap="True" type="button">Blockquote</button>
```

Include this [script](https://github.com/MarketingPipeline/Scriptor.js/blob/main/dist/scriptor.min.js) in your HTML document & you're done, you've created a basic custom text editor!

    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Scriptor.js/dist/scriptor.min.js" defer></script>

### Button Options

<b>To wrap text with a HTML tags etc..</b>

       <button data-scriptor-btn value="h1" wrap="True" type="button">Add a Comment</button>

<b>To wrap text with a non-HTML tags</b>

       <button data-scriptor-btn value="~~" wrap="True" htmltags="false" type="button">Strikethrough</button>

<b>To call a custom function on button click</b>

       <button data-scriptor-btn custom-function="helloWorld()" type="button">Console Log Hello World!</button>
       

<b>To insert a value</b>

> ^ this needs a better definition / term.

Note: if text is **highlighted** value will be added before highlighted text selection, if **NOT** the value will be added to last typing position.

       <button data-scriptor-btn value="@" wrap="false"  type="button">GitHub Mention</button>

<b>To insert a value at last typing or clicked position</b>:

      <button data-scriptor-btn value=":yum: " insert="true" wrap="True" type="button">Add a Comment</button>

Note(s):

- Wrap options etc do not work on insert buttons.
- To insert a HTML value such as a image inside of a <code>value</code> attribute you must **encode** it

</details>

## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Scriptor.js)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/Scriptor.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/badge/License-MIT-0aa8d2?logo=opensourceinitiative&logoColor=fff)

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Scriptor.js/blob/main/LICENSE) file for
details.
