const button = document.getElementsByClassName("button")[0];
const toast = document.getElementsByClassName("toast")[0];

button.addEventListener("click",()=>{
    toast.classList.add("up");
    setTimeout(()=>{
        toast.classList.remove("up")
    },2500);
})