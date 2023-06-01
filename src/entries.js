import { createInputArea, toggleElementVisibility, createEntry } from "./components";
import { dayTracker } from "./day";
export {addInputArea, getUserInput, removeInputContainer, deleteEntry, editEntry, getEntries, appendEntry, createEntry};


// _myEntries is an object that uses the date as a key to all the entries for that date
let _myEntries = {};

const addInputArea = () => {

    const input = createInputArea();
    const content = document.querySelector('#content');
    const contentBtn = document.querySelector('#add-content-btn');

    content.insertBefore(input, contentBtn);
    toggleElementVisibility(contentBtn);
}

const getUserInput = () => {

    const input = document.querySelector('#user-input');
    const inputVal = input.value;

    const inputContainer = document.querySelector('#input-container');
    inputContainer.remove();

    toggleElementVisibility(document.querySelector('#add-content-btn'));

    saveEntry(inputVal);
    appendEntry(createEntry(inputVal));
}

const saveEntry = (val) => {
    if(!_myEntries[dayTracker.currentSelectedDay.toDateString()]) {
        _myEntries[dayTracker.currentSelectedDay.toDateString()] = [val];
    }
    else {
        _myEntries[dayTracker.currentSelectedDay.toDateString()].push(val);
    }
}

const removeInputContainer = () => {
    const inputContainer = document.querySelector('#input-container');
    inputContainer.remove();
    toggleElementVisibility(document.querySelector('#add-content-btn'));
}

const appendEntry = (entry) => {

    const content = document.querySelector('#content');
    const contentBtn = document.querySelector('#add-content-btn');

    content.insertBefore(entry, contentBtn);
}


// Need to split into two functions. One removes from _myEntriesObject, the other removes from dom
// Or could use a different event listener to handle both of the above
const deleteEntry = (event) => {

    const seekText = event.currentTarget.parentNode.parentNode.firstChild.textContent;
    const index = _myEntries[dayTracker.currentSelectedDay.toDateString()].indexOf(seekText);

    if(index > -1) {
        _myEntries[dayTracker.currentSelectedDay.toDateString()].splice(index, 1); 
    }

    event.currentTarget.parentNode.parentNode.remove();
}

// Works for replacing entry with new input area, but need to change the submit function so
// that position is remembered upon submission. Currently it appends to the bottom of content area.
// Also need to edit existing entry in _myEntries object.
const editEntry = (event) => {

    const prevText = event.currentTarget.parentNode.parentNode.firstChild.textContent;

    event.currentTarget.parentNode.parentNode.replaceWith(createInputArea(prevText));
}

const getEntries = () => {
    return _myEntries;
}