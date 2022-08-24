
/* create a new component called tweet that takes in a prop called message and displays it using the supplied template. Much like with a Vue app, all of this information is passed in as an options object. */

const Tweet = Vue.component('tweet', {
  props: ['message'],
  template: '<div class="tweet"><h3>CoderInTraining</h3><p><p>{{message}}</p></div>'
});