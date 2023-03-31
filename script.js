let act = document.getElementById("text")

act.addEventListener("click", () =>{
    let penguin = document.getElementById("penguin")
    let message = document.getElementById("message")
    penguin.classList.remove("off")
    penguin.classList.add("appear")
    setTimeout(()=>{
        penguin.classList.remove("appear")
        penguin.classList.add("float")
    }, 10000)
    
    act.classList.add("off")
})




