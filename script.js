let btn = document.querySelector("#content")
let button = document.querySelector("#content")
let voice = document.querySelector("#voice")


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang="bn-BD"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
     let hours =  day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good Morning Sir")
    }
    else if(hours >= 12 && hours <18){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',() =>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition()
recognition.onresult = (event) =>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerHTML = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () =>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})


function  takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant,created by Md Mahfuz Rahman Nirob sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open codeforces")){
        speak("opening codeforces")
        window.open("https://codeforces.com")
    }
    else if(message.includes("open github")){
        speak("opening github")
        window.open("https://github.com")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/feed/")
    }
    else if(message.includes("open your boss profile")){
        speak("opening my boss linkedin profile")
        window.open("https://www.linkedin.com/in/mdmahfuz307/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open WhatsApp")){
        speak("opening WhatsApp")
        window.open("whatsapp://")
    }
    else if(message.includes("tell me about your boss")){
        speak("Hey, my boss name is Md Mahfuz Rahman Nirob student, of Software Engineering department at Daffodil International University. Now he regularly develop your subject related skills. he love to do problem-solving and optimize code brute force.")
    }
    else{
        speak(`this is what i found i internet regarding ${message}`)
        window.open(`https://google.com/search?q=${message}`)
    }

}