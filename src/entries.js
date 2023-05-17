// One thing I would like to do in the next day or two is use an object to cache the DOM elements
// needed to reduce the redundancy of querySelector usage across the below functions

const createInputArea = () => {
    
    // Getting parent of input (content), and content's last child (addContentButton)
    const content = document.querySelector('#content');
    const contentButton = document.querySelector('#addContentButton');

    // Creating an area for input, which includes a container, an input area, and a button with icon
    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('id', 'input-container');

    const input = document.createElement('input');
    input.setAttribute('id', 'user-input');

    const inputSubmitButton = document.createElement('button');
    inputSubmitButton.setAttribute('id', 'input-submit-btn');

    const inputSubmitIcon = document.createElement('icon');
    inputSubmitIcon.classList.add('material-icons');
    inputSubmitIcon.textContent = 'check_circle';
    inputSubmitIcon.style.color = '#4caf50';

    const inputCancelButton = document.createElement('button');
    inputCancelButton.setAttribute('id', 'input-cancel-btn');

    const inputCancelIcon = document.createElement('icon');
    inputCancelIcon.classList.add('material-icons');
    inputCancelIcon.textContent = 'cancel'
    inputCancelIcon.style.color = '#f44336';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');


    // Constructing components
    inputSubmitButton.append(inputSubmitIcon);
    inputCancelButton.append(inputCancelIcon);
    btnContainer.append(inputSubmitButton, inputCancelButton)
    inputContainer.append(input, btnContainer);

    // ADD EVENT LISTENERS HERE
    inputSubmitButton.addEventListener('click', getUserInput);
    inputCancelButton.addEventListener('click', removeInputContainer);

    // Appending components and hiding button until input submission;
    content.insertBefore(inputContainer, contentButton);
    toggleElementVisibility('#addContentButton');
}   

const toggleElementVisibility = (element) => {
    const ele = document.querySelector(`${element}`);

    if (ele.classList.contains('hidden')) {
        ele.classList.remove('hidden');
    }
    else {
        ele.classList.add('hidden');
    }
}

const removeElement = (element) => {
    const ele = document.querySelector(`${element}`);
    ele.remove();
}

const removeInputContainer = () => {
    const inputContainer = document.querySelector('#input-container');
    inputContainer.remove();
    toggleElementVisibility('#addContentButton');
}

const getUserInput = () => {
    const input = document.querySelector('#user-input');
    const inputVal = input.value;
    //console.log(inputVal);
    removeElement('#input-container');
    toggleElementVisibility('#addContentButton');
    createEntry(inputVal);
}

const createEntry = (val) => {
    const entry = document.createElement('span');
    entry.classList.add('task');
    entry.textContent = val;

    appendEntry(entry);
}

const appendEntry = (entry) => {
    const content = document.querySelector('#content');
    const addContentButton = document.querySelector('#addContentButton');

    content.insertBefore(entry, addContentButton);
}

export {createInputArea};