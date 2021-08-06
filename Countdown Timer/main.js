const daysEl=document.querySelector("#days")
const hoursEl=document.querySelector("#hours")
const minsEl=document.querySelector("#mins")
const secondEl=document.querySelector("#seconds")

const totalDaysAs=document.querySelector("#days-a")
const totalHoursAs=document.querySelector("#hours-a")
const totalMinsAs=document.querySelector("#mins-a")
const totalSecondsAs=document.querySelector("#seconds-a")

const happyBritayA="14  Jul 2022"
const happyBritay="2 Apr 2022"

function sarinRodjendan(){
    const happyBritayDate=new Date(happyBritay)
    const currentDate = new Date()
    const totalSeconds=new Date(happyBritayDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24)
    const hours=Math.floor(totalSeconds/3600)%24
    const mins=Math.floor(totalSeconds/60)%60
    const seconds=Math.floor(totalSeconds)%60
    daysEl.innerHTML=days
    hoursEl.innerHTML=hours
    minsEl.innerHTML=mins
    secondEl.innerHTML=seconds


}
function asjinRodjendan(){
    const happyBritayDateA=new Date(happyBritayA)
    const currentDateA=new Date()
    const totalSecondsA=new Date(happyBritayDateA-currentDateA)/1000

    const daysA=Math.floor(totalSecondsA/3600/24);
    const hoursA=Math.floor(totalSecondsA/3600)%24;
    const minsA=Math.floor(totalSecondsA/60)%60;
    const secondsA=Math.floor(totalSecondsA)%60
    totalDaysAs.innerHTML=daysA
    totalHoursAs.innerHTML=hoursA
    totalMinsAs.innerHTML=minsA
    totalSecondsAs.innerHTML=secondsA
}
asjinRodjendan()
sarinRodjendan()
setInterval(asjinRodjendan,1000)
setInterval( sarinRodjendan,1000)
