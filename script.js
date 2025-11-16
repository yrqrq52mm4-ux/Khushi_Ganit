const btn=document.getElementById('musicBtn');
const audio=new Audio('music.mp3');
btn.onclick=()=>{audio.paused?audio.play():audio.pause();};