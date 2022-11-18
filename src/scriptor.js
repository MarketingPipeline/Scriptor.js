/**!
 * @license Scriptor.js - A library for building your own custom text editors
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Scriptor.js/
 */

function ScriptorJS(){

const defaultButtonProps = {
  insert: false,
  htmltags: true,
  value: '',
  wrap: false
};

const form = document.getElementById('text-editor');

if (form != null){
// To enable console log debugging - set to true. 
let DEBUG=  true

function DEBUGGER(msg) {
    if (DEBUG === true) {
        console.log(msg)
    }
}
// carot / last type postion
let startPosition = 0;
let currentTextPosition = 0;

form.addEventListener('click', () => (currentTextPosition = form.selectionEnd), false);

form.addEventListener('input', () => {
  currentTextPosition = form.selectionEnd;
});

/// Load any default text area content
window.addEventListener('load', function (e) {
  // This prevents the window from reloading

  let input = form.value;
});

/// Get all Text Editor Button Values

const buttons = document.querySelectorAll('[data-scriptor-btn]');

buttons.forEach((button) => button.addEventListener('click', (e) => handleClick(button, form)));

function handleClick(button, form) {
  form.value = getNewValue(button, form.value);
}

function getNewValue(button, text) {
    // allows custom functions to be called on button clicks.
  if (button.getAttribute("custom-function")) eval(button.getAttribute("custom-function"))
  
  // for each value - check if type is true or false. 
  const [insert, htmltags, wrap] = ['insert', 'htmltags', 'wrap'].map((key) => checkBool(button.getAttribute(key) ?? defaultButtonProps[key]));
  const value = button.getAttribute('value') ?? defaultButtonProps['value'];
  DEBUGGER({scriptor_js_debugger: { insert, value, htmltags, wrap} });

  // Insert Value
  if (insert) return text.substring(0, currentTextPosition) + value + text.substring(currentTextPosition, text.length);

  /// Highlighted Text Options
  if (getSelectionText() === '') {
    // no text was hightlighted - just add the values
    // todo - set carot in between the value added
    if (htmltags) return text.substring(0, currentTextPosition) + wrapText('', value, true) + text.substring(currentTextPosition, text.length);
    if (!wrap) return text + value;
    return (form.value = text + value + value);
  }

  if (getSelectionText() != '') {
    if (wrap) {
      if (htmltags) return text.replace(getSelectionText(), wrapText(getSelectionText(), value));
      // Not wrapping with html tags <>
      return text.replace(getSelectionText(), wrapText(getSelectionText(), value, false));
    } else {
      // replace first HTML tag
      if (getSelectionText().startsWith(value)) return text.replace(value, '');

      // Add to the start of the value
      return form.value.replace(getSelectionText(), value + getSelectionText());
    }
  }
}

/// This will return the highlighted text on screen.

function getSelectionText() {
  if (window.getSelection) return window.getSelection().toString();
  if (document.selection && document.selection.type != 'Control') return document.selection.createRange().text;
  return '';
}

// Wrap Highlighted Text On Button Click
function wrapText(text, wrap, html_tags = true) {
  const string = text.trim();
  DEBUGGER(`${wrap} was called`);
  // if Highlighted Text String Already Contains A Wrap At Start & End - Remove It
  if (string.startsWith(`<${wrap}>`)) {
    DEBUGGER(`Text started with <${wrap}> replacing "<${wrap}>" at start & </${wrap}> at end` );
    return string.replace(RegExp(`^<${wrap}>`), '').replace(RegExp(`</${wrap}>$`), '');
  }
  if (string.startsWith(`${wrap}`) == true) {
    DEBUGGER(`Text started with ${wrap} replacing "${wrap}" at start & ${wrap} at end` );
    return string.replace(RegExp(`^${wrap}`), '').replace(RegExp(`${wrap}$`), '');
  }


  if (html_tags == true) return `<${wrap}>${text}</${wrap}>`;
  return `${wrap}${text}${wrap}`;
}

 function AttributeToLowerCase(text){
   text = text.toString()
   var x = text.toLowerCase()
   let DebugMsg = false
   DEBUGGER(`AttributeToLowerCase Was Called`)
   return x
 }
  
function checkBool(x) {
  return AttributeToLowerCase(x) === 'true' || x === true;
}
}
  
}

ScriptorJS()
