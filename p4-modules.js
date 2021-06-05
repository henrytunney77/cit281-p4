const dataModule =require('./p4-data');
// follow up?

function getQuestions(){
    return ['Q1','Q2','Q3'];
}

function getAnswers(){
    return ['A1','A2','A3'];
}

function getQuestionsAnswers(){
    return[{question:'Q1',answer:'A1'},{question:'Q2',answer:'A2'},{question:'Q3',answer:'A3'}
];}

function getQuestion(number= ""){
    let arr=[{question:'Q1',number:1,error:''},{question:'Q2',number:2,error:''},{question:'Q3',number:3,error:''}];
    return arr[number];
}

function getAnswer(number= ""){
    let arr=[{answer:'A1',number:1,error:''},{answer:'A2',number:2,error:''},{answer:'A3',number:3,error:''}];
    return arr[number];
}

function getQuestionAnswer(number= ""){
    let arr=[{question:'Q1',answer:'A1',number:1,error:''},{question:'Q2',answer:'A2',number:2,error:''},{question:'Q3',answer:'A3',number:3,error:''}];
    return arr[number]; 
}


/*****************************
  Module function testing
******************************/


function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }



  module.exports = {
    getQuestions,
  };
  module.exports = {
    getAnswers,
  };
  module.exports = {
    getQuestions,
  };
  module.exports = {
    getAnswers,
  };
  module.exports = {
    getQuestions,
  };
  module.exports = {
    getQuestionAnswer,
  };