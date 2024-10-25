document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventName && eventDate) {
        addEvent(eventName, eventDate);
        document.getElementById('eventForm').reset();
    }
});

function addEvent(name, date) {
    const eventList = document.getElementById('eventList');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${new Date(date).toLocaleDateString()}`;
    eventList.appendChild(listItem);
}
