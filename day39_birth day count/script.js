function DateOfBirth() {
    let selectedDate = new Date(document.getElementById("date").value);
    let todayDate = new Date();
    
    // Calculate age in years
    let ageInYears = todayDate.getFullYear() - selectedDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (todayDate.getMonth() < selectedDate.getMonth() || 
        (todayDate.getMonth() === selectedDate.getMonth() && 
         todayDate.getDate() < selectedDate.getDate())) {
        ageInYears--;
    }

    // Calculate time durations
    let calculateDate = Math.abs(todayDate - selectedDate);
    let totalSeconds = Math.round(calculateDate / 1000);
    let totalMinutes = Math.round(totalSeconds / 60);
    let totalHours = Math.round(totalMinutes / 60);
    let totalDays = Math.round(totalHours / 24);
    let totalWeeks = Math.round(totalDays / 7);
    let totalMonths = Math.round(totalDays / 30);

    // Display time durations
    document.getElementById("totalSeconds").innerText = totalSeconds;
    document.getElementById("totalMinutes").innerText = totalMinutes;
    document.getElementById("totalHours").innerText = totalHours;
    document.getElementById("totalDays").innerText = totalDays;
    document.getElementById("totalWeeks").innerText = totalWeeks;
    document.getElementById("totalMonths").innerText = totalMonths;
    document.getElementById("totalYears").innerText = ageInYears;

    // Calculate next birthday
    let nextBirthday = new Date(todayDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    if (nextBirthday < todayDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    // Calculate remaining months and days to the next birthday
    let remainingMonths = nextBirthday.getMonth() - todayDate.getMonth();
    let remainingDays = nextBirthday.getDate() - todayDate.getDate();

    // Adjust remaining months and days for negative values
    if (remainingDays < 0) {
        remainingMonths--;
        remainingDays += 30; // Assuming a month has 30 days for simplicity
    }
    if (remainingMonths < 0) {
        remainingMonths += 12; // 12 months in a year
    }

    // Display next birthday countdown
    document.getElementById("nextBirthday").innerText = `Next Birthday: ${remainingMonths} months, ${remainingDays} days`;
}

setInterval(()=>{
    DateOfBirth();
},1000)
