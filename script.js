//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  addItem();
}

// Function to add a list item
function addItem() {
  const li = document.createElement("li");
  li.textContent = "Item " + count;
  list.appendChild(li);
  count++;
}

// Infinite scroll logic
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items when bottom is reached
    addItem();
    addItem();
  }
});

