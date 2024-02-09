let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calender = document.getElementById('calender');
const weekdays = ['sunday','monday', 'tuesday', 'wednesday', 'thursday','friday', 'satuday' ];
const newEventModal = document.getElementById('newEvent');
const backDrop = document.getElementById('modalBackDrop');

function load() {
    const dt = new Date();

    if (nav !== 0){
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us',{
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(',')[0]);

    calender.innerHTML = '';

    document.getElementById('monthDisplay').innerText = '$ {dt.tolocalDateString('en-us', {month: 'long'})} $ {year}';

    for(let i = 1; i<= paddingDays + daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if(i > paddingDays){
            daySquare.innerText = 1 + paddingDays;

            daySquare.addEventListener('clicked', () => console.log('clicked'));

        }else{
            daySquare.classList.add('padding');
        }

        calender.appendChild(daySquare);
    }
}

function initButtons(){
    document.getElementById
}
