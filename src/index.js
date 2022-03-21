document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.querySelector('#create-task-form').addEventListener("submit", function(event) {
  event.preventDefault();

  let li = document.createElement('li')
  let val = document.querySelector('#new-task-description').value
  li.textContent = val
  document.querySelector('#tasks').append(li)
});

