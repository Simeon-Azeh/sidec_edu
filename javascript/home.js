(() => {
    const $addTodoForm = document.querySelector('#add-todo-form');
    const $newTodoInput = document.querySelector('#new-todo-input');
    const $todos = document.querySelector('#todos');

    const handleTodoEditClick = event => {
      event.stopPropagation();

      const $editButton = event.currentTarget;
      const $todo = $editButton.parentElement.parentElement;
      let $todoTitle = $todo.querySelector('.todo__title');
      let $todoInput = $todo.querySelector('.todo__input');

      if ($todoTitle) {
        $todoInput = document.createElement('input');
        $todoInput.classList.add('input', 'todo__input');
        $todoInput.value = $todoTitle.textContent;

        $todo.removeChild($todoTitle);
        $todo.prepend($todoInput);
      } else {
        $todoTitle = document.createElement('span');
        $todoTitle.classList.add('todo__title');
        const title = $todoInput.value.trim();

        if (title) {
          $todoTitle.textContent = $todoInput.value;
          $todo.removeChild($todoInput);
          $todo.prepend($todoTitle);
        }
      }
    }

    const handleTodoDeleteClick = event => {
      event.stopPropagation();

      const $deleteButton = event.currentTarget;
      const $todo = $deleteButton.parentElement.parentElement;
      $todo.classList.add('todo--delete');

      setTimeout(() => {
        $todos.removeChild($todo);
      }, 300);
    };

    const handleTodoTitleClick = event => {
      const $todo = event.currentTarget;
      $todo.classList.toggle('todo__title--done');
    };

    function createTodo(value) {
      const $todoTitle = document.createElement('span');
      $todoTitle.classList.add('todo__title');
      $todoTitle.textContent = value;
      $todoTitle.addEventListener('click', handleTodoTitleClick);

      const $item = document.createElement('li');
      $item.classList.add('todo');

      const $editButton = document.createElement('button');
      $editButton.classList.add('button', 'todo__button', 'todo__button--edit');
      $editButton.textContent = 'Edit';
      $editButton.addEventListener('click', handleTodoEditClick);

      const $deleteButton = document.createElement('button');
      $deleteButton.classList.add('button', 'todo__button', 'todo__button--delete');
      $deleteButton.textContent = 'Delete';
      $deleteButton.addEventListener('click', handleTodoDeleteClick);

      const $buttonsWrapper = document.createElement('div');
      $buttonsWrapper.classList.add('todo__buttons-wrapper');
      $buttonsWrapper.append($editButton);
      $buttonsWrapper.append($deleteButton);

      $item.appendChild($todoTitle);
      $item.appendChild($buttonsWrapper);

      return $item;
    }

    const handleFormSubmit = event => {
      event.preventDefault();

      const task = $newTodoInput.value.trim();

      if (!task.length) return;

      const $todo = createTodo(task);
      $todos.appendChild($todo);

      $newTodoInput.value = '';
    };

    $addTodoForm.addEventListener('submit', handleFormSubmit);
  })();




  // Function to scroll to the top of the page
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling behavior
      });
  }

  // Show the scroll-to-top button when the user scrolls down
  window.onscroll = function () {
      scrollFunction();
  };

  function scrollFunction() {
      var scrollToTopButton = document.getElementById("scrollToTopButton");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  //button click
  const button = document.querySelector(".button");
  button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
    }, 600);
  });




// Function to show a confirmation dialog
function confirmNavigation() {
const confirmation = window.confirm("You are about to navigate out of our site, there are no nav bars, to return to the site, you would have to go back via browser. Are you sure you want to continue?");

if (confirmation) {
  // If the user confirms, navigate to the desired URL
  window.location.href = "payment.html"; 
}
}

// Function to remove the "animate" class after the animation duration
function removeAnimationClass() {
const button = document.querySelector(".button");
button.classList.remove("animate");
}

// Button click event listener
const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
e.preventDefault();
button.classList.add("animate");
setTimeout(removeAnimationClass, 5000); // Adjust the duration as needed (600ms in this example)
});

// Sample data for illustration purposes
const courseLabels = ['Chemistry', 'Biology', 'Physics', 'ICT'];
const performanceData = [60, 90, 75, 85];

// Get the canvas element and create a chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: courseLabels,
datasets: [{
label: 'Course performance',
data: performanceData,
backgroundColor: 'rgba(152, 53, 255, 0.5)', // Adjust color as needed
borderColor: 'rgba(152, 53, 255, 1)',
borderWidth: 1
}]
},
options: {
scales: {
y: {
  beginAtZero: true,
  max: 100 // Adjust the maximum value of the y-axis as needed
}
}
}
});
