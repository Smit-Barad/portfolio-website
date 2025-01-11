function showContent(sectionId) {
    // Get all content sections
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}



// Navigation buttons effect Start here UI/UX


// Select all buttons with the class 'nav-button'
const buttons = document.querySelectorAll('.nav-button');

// Loop through all the buttons and add the event listeners
buttons.forEach(button => {
    button.addEventListener('mousemove', function(event) {
        const buttonRect = button.getBoundingClientRect();

        // Calculate the cursor's position relative to the button
        const offsetX = (event.clientX - buttonRect.left) / buttonRect.width;
        const offsetY = (event.clientY - buttonRect.top) / buttonRect.height;

        // Apply transform to move the button's content based on cursor movement
        button.style.transform = `scale(1.1) translate(${offsetX * 10 - 5}px, ${offsetY * 10 - 5}px)`;
    });

    // Reset button position when the cursor leaves
    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1.08)'; // Reset position when cursor leaves
    });
});




// Navigation buttons effect End here UI/UX










function showMoreText() {
    const moreText = document.querySelector("#about .more-text");
    const button = document.querySelector("#about .read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block"; // Show the extended text
        button.innerText = "Show Less"; // Change button text
    } else {
        moreText.style.display = "none"; // Hide the extended text
        button.innerText = "Read More"; // Reset button text
    }
}






// Select the button element
const button = document.querySelector('.read-more-btn');

// Split the button text into individual letters
const buttonText = button.innerText.split('').map(letter => `<span>${letter}</span>`).join('');
button.innerHTML = buttonText; // Replace the button text with span-wrapped letters

const buttonLetters = button.querySelectorAll('span');

// Track the mouse position and animate letters based on proximity
document.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;

    buttonLetters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2;
        const letterY = rect.top + rect.height / 2;

        // Calculate distance between the cursor and the letter
        const deltaX = mouseX - letterX;
        const deltaY = mouseY - letterY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        // Adjust movement and color based on distance
        const maxMovement = 10; // Max letter movement in px
        const movementX = (deltaX / distance) * maxMovement;
        const movementY = (deltaY / distance) * maxMovement;

        // Apply the transformation to the letter
        letter.style.transform = `translate(${movementX}px, ${movementY}px)`;

        // Optional: Change the letter color based on proximity
        const maxColorChange = 150; // Max RGB change
        const colorIntensity = Math.max(0, maxColorChange - distance / 2);
        letter.style.color = `rgb(255, ${255 - colorIntensity}, ${255 - colorIntensity})`;
    });
});

// Reset the transformation when the mouse leaves the window
button.addEventListener('mouseleave', () => {
    buttonLetters.forEach((letter) => {
        letter.style.transform = 'translate(0, 0)';
        letter.style.color = ''; // Reset to original color
    });
});








// Function to set the progress of a skill
function setProgress(skill, percentage) {
    // Get the progress bar by skill name (HTML, CSS, Java, etc.)
    const progressBar = document.querySelector(`#${skill} .progress-fill`);
    
    // Ensure the percentage is within bounds (0-100%)
    const progressValue = Math.min(100, Math.max(0, percentage));

    // Set the width of the progress bar
    progressBar.style.width = progressValue + '%';
    progressBar.textContent = progressValue + '%';  // Show percentage inside the bar
}

// Function to initialize all progress bars
function initializeProgressBars() {
    setProgress('html', 90);
    setProgress('css', 85);
    setProgress('java', 80);
    setProgress('python', 75);
    setProgress('communication', 95);
    setProgress('teamwork', 90);
    setProgress('leadership', 85);
    setProgress('problemSolving', 80);
}

// Call the function to initialize progress bars when the page loads
window.onload = initializeProgressBars;










