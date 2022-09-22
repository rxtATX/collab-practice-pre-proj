console.log("Hello world this is morgan from the developer team.");

let $body = document.querySelector(`body`);
let $button = document.createElement('button');

function sayHello() {
  return "Hello";
}

$button.textContent = sayHello();
$body.appendChild($button);
