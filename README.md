
# Terminal Like Portfolio  
This **Portfolio** is designed like a UNIX terminal as a way to showcase my skills with web related languages

## How it works

As weird as a Terminal on website can be, I will try to explain how made my Portfolio with detail.

### The Terminal
It's made out of 3 part :
 - initial prompt which contain ```"helpCmdList"``` 
 - the inputbox with `oninput` and `onkeydown` events 
 - the suggestion < div > which show suggestions based on input
 
 When in the terminal, each time the user press a key, it triggers a javascript function called `handleKeyDown(event)` where `event` is the key pressed
```javascript
function  handleKeyDown(n) {
	var  e,
		s  =  document.getElementById("suggestions"),
		i  =  s.getElementsByTagName("div");
	"ArrowUp"  ===  n.key
		? (n.preventDefault(),
			0  <  currentSuggestionIndex  &&  currentSuggestionIndex--)
		:  "ArrowDown"  ===  n.key
		? (n.preventDefault(),
			currentSuggestionIndex  <  i.length  -  1  &&  currentSuggestionIndex++)
		:  "Enter"  ===  n.key  &&
			((n  =  document.getElementById("cmd")),
			(e  =  i[currentSuggestionIndex]) && (n.value  =  e.textContent),
			(s.innerHTML  =  ""),
			n.classList.remove("command-entered"));
	for (let  n  =  0; n  <  i.length; n++) {
		var  l  =  i[n];
		n  ===  currentSuggestionIndex
		?  l.classList.add("selected")
		:  l.classList.remove("selected");
	}
}
```
Keyboard Event Handling:
   - The code checks the value of `n.key`, which represents the key that was pressed during the keyboard event.
   - If `n.key` is "ArrowUp":
     - Prevents the default behavior of the keyboard event (e.g., preventing the cursor from moving).
     - Decrements the value of `currentSuggestionIndex` by 1 if it's greater than 0.
   - If `n.key` is "ArrowDown":
     - Prevents the default behavior of the keyboard event.
     - Increments the value of `currentSuggestionIndex` by 1 if it's less than the total number of suggestions minus 1 (`i.length - 1`).
   - If `n.key` is "Enter":
     - Gets a reference to an HTML element with the ID "cmd" and assigns it to the variable `n`.
     - Retrieves the suggestion element at the current index (`currentSuggestionIndex`) and assigns it to the variable `e`.
     - Sets the value of the "cmd" input field (`n.value`) to the text content of the selected suggestion (`e.textContent`).
     - Clears the content of the "suggestions" element (`s.innerHTML = ""`).
     - Removes the "command-entered" class from the "cmd" element (`n.classList.remove("command-entered")` to indicate input matche a command).

Loop through Suggestions:
   - The code then enters a loop that iterates through all the suggestion elements stored in the `i` collection.
   - For each suggestion element `l`:
     - If the index `n` is equal to `currentSuggestionIndex`, it adds the "selected" class to the suggestion element to highlight it.
     - Otherwise, it removes the "selected" class from the suggestion element to deselect it.
 
 ### The Rest is basically `style` I picked up here and there...

I hope you enjoyed this little explanation since we were only interested in the terminal, you can review the code on your computer since I pull request are activated.

## Liscence

	MIT License

	Copyright (c) [year] [fullname]

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.