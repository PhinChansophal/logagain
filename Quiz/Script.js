// Select elements
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');

// Add click event listener
startBtn.onclick = () => {
    popupInfo.classList.add('active'); // Add active class to show popup
};

// Optional: Close functionality for "exit" button
const exitBtn = document.querySelector('.exit-btn');
exitBtn.onclick = () => {
    popupInfo.classList.remove('active'); // Remove active class to hide popup
};
