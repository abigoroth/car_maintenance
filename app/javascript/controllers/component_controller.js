import * as Vue from "vue"
const point = "#point"
const element = document.querySelector(point)
if (element !== null) {
  const app = Vue.createApp({
    data() {
      return { count: 1 }
    },
    created() {
      console.log("count is: "+ this.count) // => "count is: 1"
    }
  })
  const vm = app.mount(point)
}



const cars = "#cars"
const carElement = document.querySelector(cars)
if (carElement !== null) {
  const app = Vue.createApp({
    data() {
      return { count: 1 }
    },
    created() {
      console.log("count is: "+ this.count) // => "count is: 1"
    },
    methods: {
      displaynumbers(event) {
        alert('sss')
     }
    }
  })
  const vm = app.mount(cars)
}