const fastify = require ("fastify")();
const p4Module = require ("./p4-module")

  //Listen
  const listenIP = "localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
  });


  //Question
  fastify.get("/cit/question", (request,reply) =>{
        question ={
    "error": "",
    "statusCode": 200,
    "questions": [
        "Q1",
        "Q2",
        "Q3"
    ]
}
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(question);
    });

    //answer
  fastify.get("/cit/answer", (request,reply) =>{
    answers ={
        "error": "",
        "statusCode": 200,
        "answers": [
            "A1",
            "A2",
            "A3"
        ]
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(answers);
});

//Questionanswer
fastify.get("/cit/questionanswer", (request,reply) =>{
    questionanswer ={
        "error": "",
        "statusCode": 200,
        "questions_answers": [
            {
                "question": "Q1",
                "answer": "A1"
            },
            {
                "question": "Q2",
                "answer": "A2"
            },
            {
                "question": "Q3",
                "answer": "A3"
            }
        ]
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(questionanswer);
});

//Question/:q 1
fastify.get("/cit/question/:number", (request,reply) =>{
    questionA ={
        "error": "",
        "statusCode": 200,
        "question": "Q1",
        "number": 1
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(questionA);
});

//Question/:q 2
fastify.get("/cit/question/:number", (request,reply) =>{
    questionB ={
        "error": "",
        "statusCode": 200,
        "question": "Q2",
        "number": 2
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(questionB);
});


//Question/:q 3
fastify.get("/cit/question/:number", (request,reply) =>{
    questionC ={
        "error": "",
        "statusCode": 200,
        "question": "Q3",
        "number": 3
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(questionC);
});


//:answer 1
fastify.get("/cit/answer/:number", (request,reply) =>{
    answerA ={
        "error": "",
        "statusCode": 200,
        "answer": "A1",
        "number": 1
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(answerA);
});

//answer 2
fastify.get("/cit/answer/:number", (request,reply) =>{
    answerB ={
        "error": "",
        "statusCode": 200,
        "answer": "A2",
        "number": 2
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(answerB);
});


//answer 3
fastify.get("/cit/answer/:number", (request,reply) =>{
    answerC ={
        "error": "",
        "statusCode": 200,
        "answer": "A3",
        "number": 3
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(answerC);
});


//Questionanswer 1
fastify.get("/cit/questionanswer/:number", (request,reply) =>{
    qA1 ={
        "error": "",
        "statusCode": 200,
        "question": "Q1",
        "answer": "A1",
        "number": 1
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(qA1);
});

//Questionanswer 2
fastify.get("/cit/questionanswer/:number", (request,reply) =>{
    qA1 ={
        "error": "",
        "statusCode": 200,
        "question": "Q2",
        "answer": "A2",
        "number": 2
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(qA2);
});

//Questionanswer 3
fastify.get("/cit/questionanswer/:number", (request,reply) =>{
    qA1 ={
        "error": "",
        "statusCode": 200,
        "question": "Q3",
        "answer": "A3",
        "number": 3
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(qA3);
});

fastify.get("", (request,reply) =>{
    {
        "error": "Route not found",
        "statusCode": 404
    }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send("");
});