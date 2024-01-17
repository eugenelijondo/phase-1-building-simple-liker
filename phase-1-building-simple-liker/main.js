// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// main.js

document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const errorModal = document.getElementById('error-modal');
  const heartIcon = document.getElementById('heart-icon');

  // Add click event listener to the heart icon
  heartIcon.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Handle success response
        heartIcon.classList.add('full-heart', 'activated-heart');
      })
      .catch(() => {
        // Handle error response
        errorModal.classList.remove('hidden');
        // Display server error message in the modal

        // Use setTimeout to hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });

  // Add click event listener to handle unliking (if needed)
  // ...
});

// mimicServerCall function provided
function mimicServerCall() {
  const randomSuccess = Math.random() < 0.5; // Simulate success/failure randomly
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomSuccess) {
        resolve({ status: 'success' });
      } else {
        reject({ status: 'error', message: 'Server error message here' });
      }
    }, 1000);
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
