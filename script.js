document.addEventListener('DOMContentLoaded', () => {

    /* =========================================== */
    /* Step 2: JavaScript Form Validation Function */
    /* =========================================== */
    
    const contactForm = document.getElementById('contactForm');
    
    const validateEmail = (email) => {
        // Simple regex for email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = (event) => {
        event.preventDefault(); // Stop default form submission
        
        let isValid = true;
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        // 1. Name validation (Required)
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        // 2. Email validation (Required and Format)
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        }

        // 3. Message validation (Required)
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully! (Validation passed)');
            // event.target.submit(); // Uncomment this line to actually submit the form
            contactForm.reset(); // Clear form after successful "submission"
        }
    };

    // Attach validation function to form submit event
    contactForm.addEventListener('submit', validateForm);


    /* =========================================== */
    /* Step 4: Dynamic To-Do List (DOM Manipulation) */
    /* =========================================== */

    const todoInput = document.getElementById('todoInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to create and add a new task item
    const addTask = () => {
        const taskText = todoInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // 1. Create new DOM elements
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        const deleteButton = document.createElement('button');

        // 2. Set content and attributes
        taskSpan.textContent = taskText;
        deleteButton.textContent = 'Remove';
        deleteButton.className = 'delete-btn';

        // 3. Set up event listener for removal
        deleteButton.addEventListener('click', () => {
            // Remove the parent <li> element
            listItem.remove(); 
        });

        // 4. Append children to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        
        // 5. Append the complete list item to the <ul>
        taskList.appendChild(listItem);

        // 6. Clear the input field
        todoInput.value = '';
    };

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Optional: Add task on Enter key press
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

});
