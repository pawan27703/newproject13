setInterval(updateClock, 1000);

function updateClock() {
    const now = new Date();
    const timezone = document.getElementById("timezone").value;

    let options = {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
        timeZone: timezone === "local" ? undefined : timezone
    };
    let timeString = new Intl.DateTimeFormat('en-US', options).format(now);

    
    document.getElementById("time").textContent = timeString;

    
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone === "local" ? undefined : timezone };
    const dateString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById("date").textContent = dateString;

    
    updateGreeting(now);


    updateBackgroundColor(now);
}


function updateGreeting(now) {
    const hour = now.getHours();
    let greetingText = "Hello!";
    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }
    document.getElementById("greeting").textContent = greetingText;
}


function updateBackgroundColor(now) {
    const hour = now.getHours();
    if (hour < 6 || hour >= 18) {
        document.body.style.backgroundColor = "#1e1e30";  
    } else if (hour < 12) {
        document.body.style.backgroundColor = "#87ceeb";  
    } else {
        document.body.style.backgroundColor = "#ffd700";  
    }
}

// Time zone selection event listener
document.getElementById("timezone").addEventListener("change", updateClock);

// Initialize the clock on load
updateClock();