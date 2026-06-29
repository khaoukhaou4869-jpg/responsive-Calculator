

function add(ch){
    const ecran = document.getElementById('result')
    if (ch === '+/-') {
        ecran.textContent +='-'; 
    } else {
        ecran.textContent += ch;
    }
}
function calculer(){
    const result = document.getElementById('result');
    try{
        result.textContent = eval(result.textContent);
    }catch{
        result.style.border='1px solid red'
        result.style.boxShadow='1px 1px 10px red';
    }
    
}
function suprime(){
    const result = document.getElementById('result');
    result.textContent = '';
    result.style.border='none';1
    result.style.boxShadow='none';
}