const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];

const questionEl = document.getElementById("question");
  const optionEl = document.getElementById("options");
  const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");
nextEl.textContent = 'Next->';

//next functionality
nextEl.addEventListener('click',()=>{
    questionNoIncrease();
});
    let score=0;
    let questNo = 0;
    function questionNoIncrease(){
        questNo++;
        
        if(questNo>=quesJSON.length){
            scoreEl.textContent = `Score: ${score}`;
            questionEl.textContent = 'Quiz Completed!!';
            optionEl.textContent = '';
            nextEl.remove();
            return;
        }
        ans();
    }
   
    function shuffle(arr){
        for(let i=0;i<arr.length;i++){
            let j = Math.floor(Math.random()*(arr.length));
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        return arr;
    }
    function ans(){
        const{correctAnswer, options, question}=quesJSON[questNo];
        questionEl.textContent = question; 
        optionEl.textContent='';
        const shuffledOptions = shuffle(options);
        shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);
        scoreEl.textContent = `Score:${score}`;

    btn.addEventListener("click", () => {
        if(btn.textContent === correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }
        questionNoIncrease();
    
        });
    });
    //initial call
    
}
ans();