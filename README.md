# digital-time-date-vue
HTML, Vue.js: Digital Clock Including Date: Date()

## HTML

```html
<!DOCTYPE html "Vue.js"><html lang="en">
<head>
  <meta charset="utf-8">
  <title>Digital Clock</title>
  <meta name="description" content="digital clock using Vue.js library.">
  <meta name="author" content="github.com/nick3499">
</head>
<body>
  <div id="app">
    <p class="time">{{ time }}</p>
    <p class="date">{{ date }}</p>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

## Vue

```js
var digitalClock = new Vue({
  el: '#app',
  data: {
    time: '',
    date: ''
  }
})

const day = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const month = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]
const interval = setInterval(update, 1000)
update()
function update() {
  const d = new Date()
  digitalClock.time = `
    ${d.getHours()<=12 ? (String(d.getHours())).padStart(2,'0') : d.getHours()-12}:${(String(d.getMinutes())).padStart(2,'0')}:${(String(d.getSeconds())).padStart(2,'0')}
    ${d.getHours()<=12 ? 'AM' : 'PM'}
  `
  digitalClock.date = `
    ${day[d.getDay()]}, ${month[d.getMonth()]} ${d.getDate()},
    ${(String(d.getFullYear())).padStart(4,'0')}
  `
}
```

 * `var digitalClock = new Vue({` defines a new Vue instance.
 * `el: '#app',` indicates that the Vue instance is bound to the HTML element with the id parameter which contains the `app` value.
 * `data` parameter contains `time` and `date` variables which are passed to the `p` elements in the HTML document.
 * `day` is assigned an array of weekday names.
 * `month` is assigned an array of month names.
 * `interval` which is set to `1000` milliseconds which equals `1` second for the seconds value in the digital clock display in the Web page.
 * `update()` 

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R6R72LISM)
