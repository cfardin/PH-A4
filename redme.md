1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
Ans : 
getElementById(id) : Returns a element with the matching Id.
getElementsByClassName(className) : Returns all elements with the matching class name
querySelector(selector) : Returns 1st element matching any CSS selector.
querySelectorAll(selector) : Returns all elements as a NodeList.


2. How do you create and insert a new element into the DOM?

Ans : 
Creating element : 
const newDiv = document.createElement('div');
Inserting Element : 
parent.insertBefore(newDiv, parent.firstChild);
parent.append(newDiv); 


3. What is Event Bubbling? And how does it work?

Ans : 
Event bubbling is when an event triggered on a nested element "bubbles up" through its ancestors in the DOM tree.

- Event starts at the target element (deepest nested).
- Then triggers on its parent.
- Continues up to the document root.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans : 
Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple current or future child elements.

- Better performance (fewer event listeners)
- Works for dynamically added elements.
- Don't need to make multiple addEventListener functions 


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : 
preventDefault():
- Prevents the default browser behavior for an element
- Does NOT stop event propagation (bubbling still occurs)
stopPropagation():
- Prevents the event from bubbling up to parent elements
-Default behavior still occurs
- Does NOT prevent other handle