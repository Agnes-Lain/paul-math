import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["calculateZone", "answer", "showResult"]


  addition () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 5 ;i++) {
      const a = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      let answer = a + b
      this.calculateZoneTarget.innerHTML +=
        `<li data-calculate-target="showResult">
          ${a} + ${b} = <input type="text" id=${answer} name="response" placeholder="0" data-calculate-target="answer" >
        </li>`
    }
  }

  soustraction () {
    this.calculateZoneTarget.innerHTML=""
    for (let i=0; i < 5 ;i++) {
      const a = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      if (a >= b) {
        let answer = a - b
        this.calculateZoneTarget.innerHTML +=
          `<li data-calculate-target="showResult">
            ${a} - ${b} = <input type="text" id=${answer} name="response" placeholder="0" data-calculate-target="answer" >
          </li>`
      } else {
        let answer = b - a
        this.calculateZoneTarget.innerHTML +=
          `<li data-calculate-target="showResult">
            ${b} - ${a} = <input type="text" id=${answer} name="response" placeholder="0" data-calculate-target="answer" >
          </li>`
      }

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
        answer.parentNode.insertAdjacentHTML('beforeend', "✅")
      } else {
        answer.parentNode.insertAdjacentHTML('beforeend', "❌")
      }
    }
  }
}
