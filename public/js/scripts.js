console.log('Event Data 1:', eventData1); // Check the event data
console.log('Event Data 2:', eventData2); // Check the event data

function createCircles(eventData, timeline) {
  eventData.forEach((event) => {
    console.log('Processing event:', event); // Check each event being processed

    const container = document.createElement('div');
    container.style.position = 'relative';
    timeline.appendChild(container);

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.dataset.id = event.id;
    circle.addEventListener('click', function() {showModal(event.id);});
    container.appendChild(circle);

    console.log('Circle created:', circle); // Check each circle being created

    const yearLabel = document.createElement('div');
    yearLabel.classList.add('year-label');
    yearLabel.textContent = event.year;
    container.appendChild(yearLabel);
  });
}


function showModal(id) {
  const allEventData = [...eventData1, ...eventData2];
  const event = allEventData.find((event) => event.id === parseInt(id));
  if (event) {
    const modalContainer = document.getElementById('modal-container');
    const modalDescription = document.getElementById('modal-description');
    modalDescription.textContent = event.description;

    // Remove the hidden class to display the modal
    modalContainer.classList.remove('hidden');

    // Start the animation
    modalContainer.style.opacity = '0';
    modalContainer.style.transform = 'scale(0.5)';

    setTimeout(function() {
      modalContainer.style.opacity = '1';
      modalContainer.style.transform = 'scale(1)';
    }, 0);

    // Add a click event listener to close the modal when clicking outside the content
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        closeModal();
      }
    });

    // Set the background image for the modal content
    document.getElementById('modal-content').style.backgroundImage = `url(${event.image})`;
  }
}

function closeModal() {
  const modalContainer = document.getElementById('modal-container');

  // Start the animation
  modalContainer.style.opacity = '0';
  modalContainer.style.transform = 'scale(0.5)';

  setTimeout(function() {
    modalContainer.style.opacity = '0';
    modalContainer.style.transform = 'scale(0)';
    modalContainer.classList.add('hidden');
  }, 2000);
}

function init() {
  const timelineContainers = document.querySelectorAll('.timeline-container .timeline');
  createCircles(eventData1, timelineContainers[0]);
  createCircles(eventData2, timelineContainers[1]);
}

document.addEventListener('DOMContentLoaded', init);


