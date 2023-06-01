import { nextDay, previousDay } from "./day";
import { getUserInput, removeInputContainer, deleteEntry, editEntry } from "./entries";

export {createInputArea, createEntry, createDayHeader, createContentArea, createDayNavigation, toggleElementVisibility};
// import { addInputArea } from "./entries";

const createInputArea = (val = '') => {

    // Creating an area for input, which includes a container, an input area, and a button with icon
    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('id', 'input-container');

    const input = document.createElement('input');
    input.setAttribute('id', 'user-input');
    input.value = val;

    const inputSubmitButton = document.createElement('button');
    inputSubmitButton.setAttribute('id', 'input-submit-btn');
    inputSubmitButton.addEventListener('click', getUserInput);

    const inputSubmitIcon = document.createElement('icon');
    inputSubmitIcon.classList.add('material-icons');
    inputSubmitIcon.textContent = 'check_circle';
    inputSubmitIcon.style.color = '#4caf50';

    const inputCancelButton = document.createElement('button');
    inputCancelButton.setAttribute('id', 'input-cancel-btn');
    inputCancelButton.addEventListener('click', removeInputContainer);

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

    return inputContainer;
}

const createEntry = (val = '') => {

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const entry = document.createElement('p');
    entry.classList.add('task');
    entry.textContent = val;

    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');    

    const editEntryButton = document.createElement('button');
    editEntryButton.classList.add('edit-entry-btn');
    editEntryButton.classList.add('hidden');
    editEntryButton.addEventListener('click', editEntry);
    
    const editEntryIcon = document.createElement('icon');
    editEntryIcon.classList.add('material-icons');
    editEntryIcon.textContent = 'edit';
    editEntryButton.append(editEntryIcon);

    const deleteEntryButton = document.createElement('button');
    deleteEntryButton.classList.add('delete-entry-btn');
    deleteEntryButton.classList.add('hidden');
    deleteEntryButton.addEventListener('click', deleteEntry);

    const deleteEntryIcon = document.createElement('icon');
    deleteEntryIcon.classList.add('material-icons');
    deleteEntryIcon.textContent = 'delete';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    deleteEntryButton.append(deleteEntryIcon);
    btnContainer.append(editEntryButton, deleteEntryButton);
    taskWrapper.append(entry);
    taskContainer.append(taskWrapper, btnContainer);

    return taskContainer;
}

const createDayHeader = (d) => {
    // Current date and days of week array
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthsOfYear = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    
    // Roundabout way of calculating the current week of the year
    const year = new Date(d.getFullYear(), 0, 1);
    const days = Math.floor((d - year) / (24 * 60 * 60 * 1000));
    const week = Math.ceil((d.getDay() + 1 + days) / 7);

    // Building header components
    const dayWrapper = document.createElement('div');
    dayWrapper.setAttribute('id', 'day-wrapper');

    const today = document.createElement('div');
    today.classList.add('today');

    const todayDate = document.createElement('span');
    todayDate.classList.add('date');
    todayDate.textContent = `${d.getDate()}`

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');

    const currentDayOfWeek = document.createElement('span');
    currentDayOfWeek.classList.add('dayofweek');
    currentDayOfWeek.textContent = `${daysOfWeek[d.getDay()]}`

    const month = document.createElement('span');
    month.classList.add('month');
    month.textContent = `${monthsOfYear[d.getMonth()]}`;

    const weekNumber = document.createElement('span');
    weekNumber.classList.add('weeknumber');
    weekNumber.textContent = `W${week}`; 

    const calendarIcon = document.createElement('i');
    calendarIcon.classList.add('material-icons');
    calendarIcon.textContent = 'calendar_month';

    // Combining header Components 
    dateContainer.append(currentDayOfWeek, month, weekNumber);
    today.append(todayDate, dateContainer);
    dayWrapper.append(today, calendarIcon);
    
    return dayWrapper;
}

const createContentArea = () => {
   
    // Building content area
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const addContentButton = document.createElement('button');
    addContentButton.setAttribute('id', 'add-content-btn');

    const addContentIcon = document.createElement('i');
    addContentIcon.classList.add('material-icons');
    addContentIcon.textContent = 'add';

    // Combining content area
    addContentButton.append(addContentIcon);
    content.append(addContentButton);

    return content;
}

const createDayNavigation = () => {

    // Building day to day navigation
    const dayNav = document.createElement('div');
    dayNav.setAttribute('id', 'day-nav');

    const previousDayIcon = document.createElement('i');
    previousDayIcon.classList.add('material-icons');
    previousDayIcon.textContent = 'arrow_back';

    const previousDayButton = document.createElement('button');
    previousDayButton.setAttribute('id', "prev-day-btn");
    previousDayButton.addEventListener('click', previousDay);

    const nextDayIcon = document.createElement('i');
    nextDayIcon.classList.add('material-icons');
    nextDayIcon.textContent = 'arrow_forward';

    const nextDayButton = document.createElement('button');
    nextDayButton.setAttribute('id', 'next-day-btn');
    nextDayButton.addEventListener('click', nextDay);

    // Combining day-nav elements
    previousDayButton.append(previousDayIcon);
    nextDayButton.append(nextDayIcon);
    dayNav.append(previousDayButton, nextDayButton);

    return dayNav;
}

const toggleElementVisibility = (ele) => {
    ele.classList.contains("hidden") ? ele.classList.remove('hidden') : ele.classList.add('hidden');
}
