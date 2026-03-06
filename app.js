let userEmail=""

function login(){

const name=document.getElementById("name").value
userEmail=document.getElementById("email").value

fetch("/login",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,email:userEmail})

})

.then(res=>res.json())

.then(data=>{

document.getElementById("dashboard").style.display="block"

document.getElementById("welcome").innerText=
"Welcome "+data.name

})

}

function loadSubjects(){

fetch("/subjects")

.then(res=>res.json())

.then(data=>{

let html="<h3>Select Subject</h3>"

data.forEach(s=>{

html+=`<button onclick="generate('${s}')">${s}</button>`

})

document.getElementById("content").innerHTML=html

})

}

function generate(subject){

fetch("/generate",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({subject})

})

.then(res=>res.json())

.then(data=>{

document.getElementById("content").innerHTML=

`<h3>${data.question}</h3>
<p>${data.explanation}</p>`

})

}

function mockExam(){

fetch("/mock")

.then(res=>res.json())

.then(data=>{

let html="<h3>Mock Exam</h3>"

data.forEach(q=>{

html+=`<p>${q.question}</p>`

})

document.getElementById("content").innerHTML=html

})

}

function viewLeaderboard(){

fetch("/leaderboard")

.then(res=>res.json())

.then(data=>{

let html="<h3>Leaderboard</h3>"

data.forEach(u=>{

html+=`<p>${u.name} : ${u.score}</p>`

})

document.getElementById("content").innerHTML=html

})

}

function voiceTutor(){

const msg = new SpeechSynthesisUtterance(
"Hello. I am your EduNova AI tutor."
)

speechSynthesis.speak(msg)

}
