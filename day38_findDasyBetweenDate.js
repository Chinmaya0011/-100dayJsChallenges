function findDays(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let between = Math.abs(d2 - d1);
    return between / (24 * 60 * 60 * 1000);
}
console.log(findDays("1999-01-23", "2024-05-04"));
