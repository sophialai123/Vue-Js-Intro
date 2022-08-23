//Creating Vue Apps
const app = new Vue({
  el: '#app',
  //display the data,
  //data is a function and 
  //return an object
  data: {
    username: 'CoderInTraining',
    newTweet: '',
    tweets: [
      'Started learning to code today. Wish me luck!',
      'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
      'Today I start learning Vue. I got this.'
    ],
    bio: 'Excited future software engineer.'
  }
});