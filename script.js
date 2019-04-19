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
