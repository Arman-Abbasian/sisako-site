let counter=1;
const changeFoto=(x)=>{
    x=document.getElementById('slider1').childElementCount
    console.log(x,counter)

        if(counter===x){
            console.log("yeees")
            counter=1;
            // document.getElementById(1).classList.remove('hidden');
            // document.getElementById(1).classList.add('block');
        }else if(counter===1){
            console.log("yeeeek");
            counter++;
        }else if(counter===2){
            console.log("dooooo");
            counter++;
        }else if(counter===3){
            console.log("seeeeeeee");
            counter++;
        }

}
setInterval(changeFoto, 3000);