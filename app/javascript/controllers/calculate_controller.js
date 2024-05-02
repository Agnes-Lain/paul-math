import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["calculateZone", "answer", "showResult"]


  addition () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 10 ;i++) {
      let element = math(100, 10, "+")
      this.calculateZoneTarget.innerHTML += element
    }
  }

  soustraction () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 10 ;i++) {
      let element = math(100, 10, "-")
      this.calculateZoneTarget.innerHTML += element
    }
  }

  multiplication () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 10 ;i++) {
      let element = math(10, 10, "*")
      this.calculateZoneTarget.innerHTML += element
    }
  }

  division () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 10 ;i++) {
      let element = math(10, 10, "/")
      this.calculateZoneTarget.innerHTML += element
    }
  }

  mixed () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 10 ;i++) {
      let element = math(10, 10, "mixed")
      this.calculateZoneTarget.innerHTML += element
    }
  }

  checkAnswer() {
    const answers = this.answerTargets
    for (let answer of answers) {
      let result = parseInt(answer.id);
      // console.log(result);
      let ans = parseInt(answer.value)
      // console.log(ans)
      if (result === ans){
        answer.parentNode.insertAdjacentHTML('beforeend', " ✅")
      } else {
        answer.parentNode.insertAdjacentHTML('beforeend', " ❌")
      }
    }
  }
}

function math(num_max, quantity, formula) {
    let a = Math.floor(Math.random() * num_max);
    let b = Math.floor(Math.random() * num_max);
    let answer = 0
    const formula_arr = ["+", "-", "*", "/"];
    if (formula === "mixed") { formula = formula_arr[Math.floor(Math.random() * formula_arr.length)]};
    switch(formula) {
      case '+':
        answer = a + b
        break
      case '-':
        if (a >= b) {
          answer = a - b
        } else {
          answer = b - a
          a = b
          b = a - answer
        }
        break
      case '*':
        answer = a * b
        break
      case "/":
        answer = a;
        a = answer * b;
        break
      default:
        console.log("missing formula")
    }
    return  `<li data-calculate-target="showResult"> ${a} ${formula} ${b} =  <input type="text" id=${answer} name="response" data-calculate-target="answer" ></li>`
  }
