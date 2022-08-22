# INTRODUCTION TO VUE
## Adding Vue
You can import Vue by adding a` <script>` tag inside the `<head>` of your project’s HTML file:

```
script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
```
---

## Creating Vue Apps
Vue makes it easy to make a new app by exporting a class called Vue. Much like any other JavaScript class, we create instances of this class using the new keyword. Each of these Vue instances is a fully-functioning Vue app. Let’s look at an example:

```
// app.js
const app = new Vue({});
```

By invoking the Vue class constructor with the new keyword, we create a new instance of the Vue class which we name app. The Vue constructor can set many properties on our Vue app when it is called. However, unlike many constructors, the Vue class does not take each of these properties as separate arguments. Rather, it only takes one argument.

Vue apps require a lot of information — information that will differ greatly from app to app. To accommodate this, the Vue constructor doesn’t attempt to take in each piece of information as its own parameter. This would require developers to keep careful track of which order arguments were expected in, making it difficult to add properties or make changes.

Instead, the Vue constructor takes in only one object, called the options object. Each piece of information the Vue app needs to function is added to the options object as a key-value pair. This means that developers can easily update or add information in the Vue app by just looking for the correct key in the options object.

![](option-object-diagram.png);
---

## el
We do this by adding a key-value pair to the Vue app’s options object. We add a key called `el`, standing for HTML element, with a value of a CSS selector as a string that will target an element in our HTML and give it access to our Vue app’s functionality.

```
// app.js
const app = new Vue({
  el: '#app'
});
```

In the above example, we wanted an HTML element with an ID of app to gain access to our Vue app’s functionality. We added an el key to the options object and made the value '#app', a CSS selector that will target an element with an ID, #, of app.

We then import this JavaScript file into our HTML file so that our Vue app can find the specified HTML element and turn it into a Vue app.


```
<!-- index.html -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <!-- Vue App HTML Code -->
  </div>
</body>

```

Note: We must import our Vue app code after the `<script>` that loads Vue.js. Otherwise, we would not yet have access to the Vue library in app.js, making it impossible to create a Vue app. This is also why we add defer to both elements — to ensure Vue has fully loaded when we go to make our Vue app.

---
## Data
An essential feature of all front-end frameworks is rendering and updating dynamic data. Information like the number of likes on a social media post may change at any second. Front-end frameworks must make it easy to display these types of dynamic data and automatically update them for users as soon as they change.

To display dynamic information we need:

 - A place to store the data we will be displaying

 - A syntax for displaying that information


All of our dynamic data will need to be specified in our options object at a property called data.

```
const app = new Vue({
  el: '#app',
  data: {
    username: 'Michael'
  }
});
```

In this example, we added the data property to our options object. Apps need to display many pieces of dynamic data. To accommodate this, the value of .data is an object as well. Every piece of data will be added to the .data object as a key-value pair. In this case, we only added one piece of data called username with a value of 'Michael'