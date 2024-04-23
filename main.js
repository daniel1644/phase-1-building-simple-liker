// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Select all the like buttons
const likeButtons = document.querySelectorAll('.like-glyph');


// Add an event listener to each like button
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the heart between empty and full
    button.textContent = button.textContent === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;

    // Increment the number of likes
    const likeCountSpan = button.parentElement.previousElementSibling;
    const likeCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = likeCount + 1;

    // Simulate a server call to record the like
    mimicServerCall()
      .then(() => {
        console.log('Pretend remote server notified of action!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});



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
