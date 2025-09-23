function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  // Stop the function from running if a key without a sound is pressed
  if (!audio) return; 
  
  // Rewind the audio to the start to allow for rapid playing
  audio.currentTime = 0; 
  audio.play();
  
  // Add the visual effect class
  key.classList.add('playing');
}

function removeTransition(e) {
  // Skip if it's not a transform transition
  if (e.propertyName !== 'transform') return; 
  
  // 'this' refers to the key that the transition ended on
  this.classList.remove('playing');
}

// Select all keys
const keys = document.querySelectorAll('.key');

// Listen for the 'transitionend' event on each key to remove the visual effect
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listen for a keydown event on the entire page
window.addEventListener('keydown', playSound);