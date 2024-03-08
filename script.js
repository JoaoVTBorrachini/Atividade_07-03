let btn= document.getElementById("sendButton");
btn.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("sendBtnTxt").style.display="none"
    document.getElementById("loadingGif").style.display="block"
    setTimeout(() => {
        document.getElementById("sendBtnTxt").style.display="block"
        document.getElementById("loadingGif").style.display="none"
    }, 1500);
    
})





