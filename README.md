  1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : The difference between getElementById, getElementByclassName is here :

***getElementById means  : Returns a single element by its unique ID
***getElementByClassName means : Returns an HTMLCollection of elements by class name.

The difference between querySelector ans querySelectorAll :
*** querySelector   : The first element found that matches the CSS selector. 
    querySelectorAll:  A static, ordered list (NodeList) of all elements that match the CSS selector. 


2. How do you create and insert a new element into the DOM?

Ans : To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.A new element is creating using document.createElement() , content can be added using properties like textContent or innerHTML, and finally we insert it into the DOM with methods like appendChild() or append().


3. What is Event Bubbling and how does it work?

Ans:
Event Bubbling means that when an event occurs on an element (for example a click), the event is first triggered on that element itself, then on its parent element, then on the grandparent, and so on. Step by step it moves upward through the DOM tree until it reaches the document.

The working process of Event Bubbling:

**When an event occurs on an element (e.g., a button), it is first triggered on that element.

**Then the event moves upward to that element’s parent.

After that, it continues to the parent’s parent → then higher ancestors → and finally reaches the document.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to a parent element. The event uses bubbling to propagate up the DOM, and the parent can handle events that happen on its children.

Why it is useful:

Efficiency – You don’t need to attach separate listeners to every child element.

Handles dynamic elements – Even if new child elements are added later (e.g., via JavaScript), the parent’s event listener can still catch their events.

Cleaner code – Reduces duplication and makes code easier to maintain.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:

preventDefault() and stopPropagation() are two methods used in JavaScript to control events.

 **preventDefault() – Stops the default action of an element (for example, prevents a link from reloading the page).

 **stopPropagation() – Stops the event from bubbling up to parent elements or capturing, preventing it from reaching other elements.