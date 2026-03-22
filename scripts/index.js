// This will run on index.html when it is opened
favPet = getCookie("favoritePet");

// Basic error handling; will throw the user back to pet select if they haven't selected a pet yet
if (favPet == "") {
    window.alert("Please select a favorite pet on the setup page!");
    window.location.href="cIndex.html";
} else{
    console.log(document.getElementById('mood-image5').src = `images/MoodImages/happy${favPet}.png`);
    document.getElementById('mood-image1').src = `images/MoodImages/${favPet}/sad${favPet}.png`;
    document.getElementById('mood-image2').src = `images/MoodImages/${favPet}/grumpy${favPet}.png`;
    document.getElementById('mood-image3').src = `images/MoodImages/${favPet}/neutral${favPet}.png`;
    document.getElementById('mood-image4').src = `images/MoodImages/${favPet}/content${favPet}.png`;
    document.getElementById('mood-image5').src = `images/MoodImages/${favPet}/happy${favPet}.png`;

}

const submit = document.getElementById('submitBtn')
const changePet = document.getElementById('changePetBtn')

changePet.addEventListener("click", function() {
    window.location.href = "cIndex.html";
})
console.log(submit)

const pictureButtons = document.querySelectorAll('input[name="imageSelect"]');

pictureButtons.forEach(btn => {
    console.log(btn);
    btn.addEventListener('change', () => {
        submit.classList.remove('disabled');
    })
})

submit.addEventListener("click", function() {
    const selected = document.querySelector('input[name="imageSelect"]:checked');

    if (!selected) {
        alert('Please select a option');
        return;
    }

    console.log("Selected:", selected.value);

    handleSelection(selected.value);

})

function handleSelection(value) {
    // `value` is an integer from 1 to 5


    // TODO: Logic to save your mood as a cookie, then redirect to the right page (/1, /2, ... /5)
    // Don't worry about the redirection part too much, that'll be very easy to do once we get
    // this deployed. The most important part here is to save a cookie.

    // REMEMBER: What we want is a history of moods. Save the date (can just be the day
    // of the month), the time (hour is good enough), and the mood (1-5) as a single entry
    // in like an array or list or something.

    const today = new Date();
    const moodToday = {
        day: today.getDate(),
        mood: value,
    };

    let history = getCookie("moodHistory");

    // Boilerplate code to have chart data for presentation
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [
            {day : 1, mood: 5},
            {day : 2, mood: 4},
            {day : 3, mood: 3},
            {day : 4, mood: 2},
            {day : 5, mood: 2},
            {day : 6, mood: 3},
            {day : 7, mood: 1},
            {day : 8, mood: 4},
            {day : 9, mood: 1},
            {day : 10, mood: 1},
            {day : 11, mood: 5},
            {day : 12, mood: 4},
            {day : 13, mood: 2},
            {day : 14, mood: 3},
            {day : 15, mood: 1},
            {day : 16, mood: 3},
            {day : 17, mood: 5},
            {day : 18, mood: 1},
            {day : 19, mood: 5},
            {day : 20, mood: 3},
            {day : 21, mood: 4},
            ];
    }

    history.push(moodToday);

    setCookie("moodHistory", JSON.stringify(history), 30);

    console.log("Mood history:", history);

    if (value == 1 || value == 2) {
        window.location.href = "sadness.html";
    } else if (value == 3) {
        window.location.href = "meh.html";
    } else if (value == 4 || value == 5) {
        window.location.href = "happy.html";
    }
}

