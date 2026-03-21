// This will run on index.html when it is opened

// Carousel
const carousel = new bootstrap.Carousel('#myCarousel')


console.log("Hello World!");

const submit = document.getElementById('submitBtn')
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

    handleSelection(selected.value + 0);

})

function handleSelection(value) {
    // `value` is an integer from 1 to 5


    // TODO: Logic to save your mood as a cookie, then redirect to the right page (/1, /2, ... /5)
    // Don't worry about the redirection part too much, that'll be very easy to do once we get
    // this deployed. The most important part here is to save a cookie.

    // REMEMBER: What we want is a history of moods. Save the date (can just be the day
    // of the month), the time (hour is good enough), and the mood (1-5) as a single entry
    // in like an array or list or something.

    setCookie("moodDay" + new Date().getDate(), value, 30);
    getCookie("moodDay" + new Date().getDate());
}