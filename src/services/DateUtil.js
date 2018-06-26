import moment from 'moment';

const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
}

export const dateFromTimestamp = (dt) => {
    return moment(dt * 1000);
};

export const weekDayStrFromTimestamp = (dt) => {
    const date = new Date(dt * 1000); //From seconds to milliseconds
    const dayAsNumber = date.getDay();
    return days[dayAsNumber];
}

