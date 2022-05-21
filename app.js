/* Comments

const elementName = document.querySelector("#elementId");
elementName.addEventListener("type", listener);

*/

let count = 0;
const by = 10;

const counterValue = document.querySelector("#counter-value");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

plus.addEventListener("click", plusListner);
minus.addEventListener("dblclick", minusListner);

function plusListner() {
    count = count + by;
    updateCounter()
}

function minusListner() {
    count = count - by;
    updateCounter()
}

function updateCounter() {
    counterValue.innerHTML = count;
};
