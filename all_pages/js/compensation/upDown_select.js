const options = document.getElementById("range");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const values = ["per day","per week","per month","per year"]

up.addEventListener("click",()=>{
  let index = values.indexOf(options.value);
  if(index>0){
    options.value = values[index-1];
  }
})
down.addEventListener("click",()=>{
     let index = values.indexOf(options.value);
  if(index<values.length-1){
    options.value = values[index+1];
  }
})
