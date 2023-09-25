function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;//86 400 000 milliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
}

nextDay(2020, 3, 24)