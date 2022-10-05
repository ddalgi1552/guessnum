//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누른다
//만약 유저가 랜덤번호를 맞추면 맞췄습니다
//랜덤번호가<유저번호 down
//랜덤번호가>유저번호 up
//reset버튼을 누르면 게임 리셋
//5번의 기회를 다 쓰면 게임이 끝난다(버튼disabled)
//유저가 1~100범위밖의숫자입력하면 알려주고 기회를 깎지않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지않는다

let randomnum= 0
let startBut= document.getElementById("startBut")
let userInput= document.getElementById("userInput")
let resetBut= document.getElementById("resetBut")
let resultArea= document.getElementById("resultArea")
let chances= 10
let chanceArea= document.getElementById("chance")
let gameOver=false
let history=[]


startBut.addEventListener("click",play)
resetBut.addEventListener("click",reset)



function picRandom(){
  randomnum= Math.floor(Math.random()*100)+1
  //100을 mathfloor에다가 적게되면 0.1에서 0만 남으므로 +1해서 결국 1만 나오게됨..
  console.log(randomnum)
}

function play(){
 let userValue = userInput.value

 if (userValue<1 || userValue>100){
  window.alert("1부터 100까지의 숫자 중에 입력해주세요!")
  return
 }

 if (history.includes(userValue)){
  window.alert("이미 입력한 값입니당")
  return
 }

  chances --
  chanceArea.textContent=`남은기회: ${chances}`
  if(chances<1){
    window.alert("저런, 기회를 모두 썼네요!")
    startBut.disabled=true
    reset()
  }


 if (userValue > randomnum){
  resultArea.textContent="숫자가 큽니다!"
 }else if (userValue < randomnum){
  resultArea.textContent="숫자가 작아요!"
 }else if (userValue == randomnum){
  gameover()=true
 }
 history.push(userValue)

}

function reset(){
  window.location.reload()
}

function gameover(){
  window.alert("축하합니다! 정답입니다")
  window.location.reload()
}
picRandom()