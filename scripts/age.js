const setDate = new Date(2008, 10, 8);
function calculateYears() {
    const today = new Date();
    let yearsDiff = today.getFullYear() - setDate.getFullYear();
    if (
        today.getMonth() < setDate.getMonth() || 
        (today.getMonth() === setDate.getMonth() && today.getDate() < setDate.getDate())
    ) {
        yearsDiff--;
    }

    return yearsDiff;
}
function updateCounter() {
    const ageDiv = document.getElementById('age');
    const age = calculateYears();
    ageDiv.innerText = `${age}`;
}
updateCounter();
setInterval(updateCounter, 24 * 60 * 60 * 1000); // 24 hours in milliseconds