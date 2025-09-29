// Step 1: Create a class named Video
class Video {
  // The constructor is a special method for creating and initializing an object
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // Step 2: Create a method called watch()
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Step 3: Instantiate a new Video instance and call the watch() method
let video1 = new Video('JavaScript ES6 Tutorial', 'CodeMaster', 900);
video1.watch();

// Step 4: Instantiate a second Video instance with different values
let video2 = new Video('Learning CSS Grid', 'DesignGal', 1200);
video2.watch();


// --- BONUS ---

// Step 5: Use an array to store data for five Video instances
const videoData = [
  { title: 'Intro to React', uploader: 'ReactFan', time: 1800 },
  { title: 'Node.js for Beginners', uploader: 'ServerSideDev', time: 2400 },
  { title: 'HTML Basics', uploader: 'WebNewbie', time: 600 },
  { title: 'Advanced JavaScript', uploader: 'JSGuru', time: 3600 },
  { title: 'Python in 10 minutes', uploader: 'PyGuy', time: 600 }
];

// Step 6: Loop through the array to instantiate those instances
console.log('\n--- Bonus Videos ---');
videoData.forEach(data => {
  let newVideo = new Video(data.title, data.uploader, data.time);
  newVideo.watch();
});