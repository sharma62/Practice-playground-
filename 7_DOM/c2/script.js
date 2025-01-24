let heading = document.querySelector("h1")
let btn = document.querySelector("button")
let parent = document.querySelector('.div')
btn.addEventListener('click', () => {
    btn.textContent = "click me again !"
    btn.classList.add("btn")
})

/*
btn.removeEventListener()

In JavaScript, you can remove an event listener using the removeEventListener method. Here's the syntax:

javascript
Copy code
element.removeEventListener(event, handler, options);
Parameters:
event: The type of event (e.g., 'click', 'mouseover', etc.).
handler: The function that was used when adding the event listener. (It must be the same reference.)
options (optional): Should match the options passed when adding the listener (e.g., { capture: true }).
Steps to Remove an Event Listener:
Define the Event Handler Function:

Use a named function instead of an anonymous function because removeEventListener requires the same reference to the handler.
Add the Event Listener:

Attach the event to the element.
Remove the Event Listener:

Use removeEventListener with the same arguments to remove it.
*/


/*
Event listeners ke ek sequence mein ek-dusre ko call karne ke process ko "event propagation" kehte hain. Ye process DOM (Document Object Model) mein event ke flow ko define karta hai, jab ek event trigger hota hai. Event propagation ke teen phases hote hain:

1. Capturing Phase (Event Capturing):
Is phase mein event root element (sabse upar ke element) se start hoke target element (jahan event trigger hua) tak travel karta hai.
Agar aap capture: true ka option use karte ho, to event listener capturing phase mein kaam karega.
Ye phase zyada common nahi hai.
2. Target Phase:
Ye phase tab hota hai jab event directly us element par aata hai jahan event trigger kiya gaya.
Jo event listener directly target element par lagaya gaya hota hai, wo is phase mein execute hota hai.
3. Bubbling Phase (Event Bubbling):
Is phase mein event target element se upar ki taraf (root element ki taraf) propagate hota hai.
By default, zyada tar event listeners is phase mein kaam karte hain.
Example: Event Propagation in Action
html
Copy code
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  // Capturing phase listener
  parent.addEventListener("click", () => console.log("Parent (Capturing)"), true);

  // Target phase listener
  child.addEventListener("click", () => console.log("Child"));

  // Bubbling phase listener
  parent.addEventListener("click", () => console.log("Parent (Bubbling)"));
</script>
Output (Jab Button Click Karoge):
Parent (Capturing) (jab event capturing phase mein hai)
Child (target phase mein)
Parent (Bubbling) (jab event bubble karke upar ja raha hai)
Event Listeners ka Chain ya Manual Trigger:
Kabhi-kabhi ek event listener dusre event listener ko programmatically trigger kar sakta hai, jo ek chain ya loop create kar deta hai. Isko hum event delegation ya manual event triggering kehte hain.

Example:

javascript
Copy code
button.addEventListener("click", () => {
  console.log("Button clicked");
  anotherButton.click(); // Dusre button ka event trigger kar diya
});
Dhyan rakhein: Is tarike ke sequence ko carefully design karna chahiye, kyunki yeh infinite loop ya unintended behavior create kar sakta hai.


*/
