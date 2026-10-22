import './style.css'
import gsap from 'gsap';
const taskInput=document.querySelector('#text');
const submitButton=document.querySelector('#btn');
const tasklist=document.querySelector('#tasklist');

 
submitButton.addEventListener('click', () => {
  const taskText = taskInput.value;

  if (taskText === '') return;

 
const taskItem = document.createElement('li');

const taskTextSpan = document.createElement('span');
taskTextSpan.textContent = taskText;
taskItem.appendChild(taskTextSpan);

const removeButton = document.createElement('button');
removeButton.textContent = '×';
removeButton.classList.add('remove-btn');

removeButton.addEventListener('click', () => {
  gsap.to(taskItem, {
    opacity: 0,
    x: 20,
    duration: 0.25,
    onComplete: () => taskItem.remove()
  });
});

taskItem.appendChild(removeButton);
tasklist.appendChild(taskItem);

  gsap.from(taskItem, {
    opacity: 0,
    y: 15,
    duration: 0.4,
    ease: 'power2.out'
  });

  taskInput.value = '';
});

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submitButton.click();
  }
});
gsap.from('.todo-app > *', {
  opacity: 0,
  y: 20,
  duration: 0.7,
  stagger: 0.12,
  ease: 'power2.out'
});