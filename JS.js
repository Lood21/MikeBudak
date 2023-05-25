let word = [document.getElementById("textP1"),document.getElementById("textP2"),document.getElementById("textP3")];
// animText(document.getElementsByClassName("labelField")[0]);
animateWord(word);
function scrol(n){
    let slides = document.getElementsByClassName("sect");
    slides[n-1].scrollIntoView({behavior: "smooth",block: "center"});
}
function animateWord(word){
    let time=0;
    for(let i=0;i<word.length;i++){
        let text = word[i].dataset.text;
        if(i>0){
            time+=word[i-1].dataset.text.length*20;
        }
        setTimeout(()=>{text.split('').forEach((letter,ind) => {
            setTimeout(()=> word[i].innerText += letter+"",ind*20);
        })},time);
        console.log(time);
    }
}
function animText(word){
    let text = word.dataset.text;
    word.innerText +="";
    text.split('').forEach((letter,ind) => {
        setTimeout(()=> word.innerText += letter+"",ind*40);
    });
}
function animBlock(block){
    let text = block.dataset.text;
    let msg=block.dataset.value;
    block.innerText ="";
    text.split('').forEach((letter,ind) => {
        setTimeout(()=> block.innerText += letter+"",ind*40);
    });
    let time=text.length*40;
    setTimeout(()=>{msg.split('').forEach((letter,ind) => {
        setTimeout(()=> block.innerText += letter+"",ind*40);
    })},time);
}
function showBlock(block,text){
    block.style.display="inline-block";
    block.dataset.value=text;
    animBlock(block);
}
function relText(){
    let labelField=document.getElementsByClassName("labelField");
    let blocks=document.getElementsByClassName("contact");
    for(let i= 0; i<labelField.length;i++){
        if(labelField[i].style.display!=="none"){
            showBlock(blocks[i],labelField[i].dataset.text);
            labelField[i].style.display="none";
        }
    }

}
function nextOne(){
    console.log("next");
    let fields=document.getElementsByClassName("contactInput");
    let labelField=document.getElementsByClassName("labelField");
    let blocks=document.getElementsByClassName("contact");
    for(let i= 0; i<fields.length;i++){
        if(fields[i].style.display!=="none"){
            if(i<2){
                if(fields[i].value.length!==0){
                    showBlock(blocks[i],fields[i].value);
                    fields[i].style.display="none";
                    labelField[i].style.display="none";
                    fields[i+1].style.display="block";
                    console.log(fields[i+1].value.length);
                    if(fields[i+1].value.length===0){
                        labelField[i+1].style.display="block";
                        animText(labelField[i+1]);
                    }
                    if(i===1){
                        document.getElementById("nextBtn").disabled=true;
                        document.getElementById("subBtn").disabled=false;
                    }
                }
            }
            else{
                document.getElementById("nextBtn").disabled=true;
                document.getElementById("subBtn").disabled=false;
            }
        }
    }
}
function prevSec(elem,n){
    console.log("click");
    let fields=document.getElementsByClassName("contactInput");
    let labelField=document.getElementsByClassName("labelField")
    let blocks=document.getElementsByClassName("contact");
    for(let i=0;i<fields.length;i++){
        if(fields[i].style.display!=="none"){
            showBlock(blocks[i],fields[i].value);
            fields[i].style.display="none";
            labelField[i].style.display="none";
            fields[n-1].style.display="block";
            fields[n-1].value=elem.dataset.value;
            document.getElementById("nextBtn").disabled=false;
        }
    }
}