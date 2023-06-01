import { createDayHeader, createContentArea, createDayNavigation, createEntry} from "./components";
import { getEntries, appendEntry} from "./entries";
export {buildDay, previousDay, nextDay, dayTracker};

const dayTracker = {
    currentSelectedDay: new Date()
}

const domCache = {
    body: document.querySelector('body')
}

const buildDay = () => {
    // Summoning components
    const header = createDayHeader(dayTracker.currentSelectedDay);
    const content = createContentArea();
    const dayNav = createDayNavigation();

    // Caching components which won't change
    domCache.content = content;
    domCache.nav = dayNav;

    // Appending components to body
    domCache.body.append(header,content,dayNav);
}

const nextDay = () => {
    dayTracker.currentSelectedDay.setDate(dayTracker.currentSelectedDay.getDate() + 1);
    updateDay();
}

const previousDay = () => {
    dayTracker.currentSelectedDay.setDate(dayTracker.currentSelectedDay.getDate() - 1);
    updateDay();
}

const updateDay = () => {
    removeDayHeader();
    const newDayHeader =  createDayHeader(dayTracker.currentSelectedDay);
    domCache.body.insertBefore(newDayHeader, domCache.content);

    clearDayContent();
    loadDayContent();
}

const loadDayContent = () => {

    const currentEntries = getEntries();
    const entryArr = currentEntries[dayTracker.currentSelectedDay.toDateString()];

    if(entryArr) {
        for(let i = 0; i < entryArr.length; i++) {
            appendEntry(createEntry(entryArr[i]));
        }
    }  
}

const clearDayContent = () => {
    while(domCache.content.firstChild) {
        if(domCache.content.firstChild == domCache.content.lastChild) {
            break;
        }
        else {
            domCache.content.firstChild.remove();
        }
    }
}

const removeDayHeader = () => {
    const dayWrapper = document.querySelector('#day-wrapper');
    dayWrapper.remove();
}
