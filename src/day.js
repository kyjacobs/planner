let dayTracker = {
    currentSelectedDay: new Date()
}

const clearDay = () => {
    const body = document.querySelector('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

const buildDay = (d = dayTracker.currentSelectedDay) => {

    const body = document.querySelector('body');

    // Current date and days of week array
    // const d = dayTracker.currentSelectedDay;
    // d.setDate(d.getDate() + dayNum);
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
    body.append(dayWrapper);

    // Building content area
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const addContentButton = document.createElement('i');
    addContentButton.classList.add('material-icons');
    addContentButton.textContent = 'add';

    // Combining content area
    content.append(addContentButton);
    body.append(content);

    // Building day to day navigation
    const dayNav = document.createElement('div');
    dayNav.setAttribute('id', 'day-nav');

    const previousDayIcon = document.createElement('i');
    previousDayIcon.classList.add('material-icons');
    previousDayIcon.textContent = 'arrow_back';

    const previousDayButton = document.createElement('button');
    previousDayButton.setAttribute('id', previousDayButton);
    previousDayButton.addEventListener('click', previousDay);

    const nextDayIcon = document.createElement('i');
    nextDayIcon.classList.add('material-icons');
    nextDayIcon.textContent = 'arrow_forward';

    const nextDayButton = document.createElement('button');
    nextDayButton.setAttribute('id', nextDayButton);
    nextDayButton.addEventListener('click', nextDay);

    // Combining day-nav elements
    previousDayButton.append(previousDayIcon);
    nextDayButton.append(nextDayIcon);
    dayNav.append(previousDayButton, nextDayButton);
    body.append(dayNav);

}

const nextDay = () => {
    clearDay();
    dayTracker.currentSelectedDay.setDate(dayTracker.currentSelectedDay.getDate() + 1);
    buildDay();
}

const previousDay = () => {
    clearDay();
    dayTracker.currentSelectedDay.setDate(dayTracker.currentSelectedDay.getDate() - 1);
    buildDay();
}

export {buildDay}