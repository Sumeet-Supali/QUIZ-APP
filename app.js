
const questions_list =[
    {
    'que' : "json stands for?",
    'a' : "javascript object notation",
    'b' : "javaquerry object",
    'c' : "java standard object notation",
    'd' : "jquerry notation",
    'correct' : "a",
    },

    {
    'que' : "css stands for?",
    'a' : "cascading style sheet",
    'b' : "cadcading sheet style",
    'c' : "sheet cadcading style",
    'd' : "cascading object",
    'correct' : "a",
    },

    {
    'que' : "html stands for?",
    'a' : "hypertext markup language",
    'b' : "hyperquerry object",
    'c' : "hyper text machine learning",
    'd' : "handling text language",
    'correct' : "a",
    },


]

let index = 0;
let right = 0;
let wrong = 0;
let total = questions_list.length;
//alert(total);
const options = document.querySelectorAll('.options')
const main_question = document.getElementById('main_question')
const load_questions = ()=>{
    if(index === total){
        return endquiz()
    }
    
    const data = questions_list[index]
   
    main_question.innerText = ` ${index+1}) ${data.que}`;
   
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

load_questions()



submitquiz  = () =>{
    const data = questions_list[index]
    const ans = getans()
    console.log(ans);
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    load_questions()
    reset();
}

const getans=()=>{
    let ans;
    options.forEach(
        (i)=>{
            if(i.checked){
                ans = i.value;
            }
        }
    )
    return ans;
}

const reset = ()=>{
    options.forEach(
        (i)=>{
            i.checked = false;
        }
    )
}

const endquiz=()=>{
    const fill = document.getElementById('box')
    if(right<2){
        fill.innerHTML=`
        <h1>End of the quiz</h1>
        <h2>${right}/${total} are correct</h2>
        <h1>failed</h1>
        `
    }else{
        fill.innerHTML=`
        <h1>End of the quiz</h1>
        <h2 >${right}/${total} are correct</h2>
        <h1>pass</h1>
        `
    }
}





