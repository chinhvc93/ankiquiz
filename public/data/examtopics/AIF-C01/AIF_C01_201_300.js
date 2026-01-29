var AIF_C01_201_300 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An education company waftion. The application will give users the ability to enter text or provide a picture of a question. The application will respond with a written answer and an explanation of the written answer.<br/><br/>Which model type meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>Computer vision model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Large multi-modal language model</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Diffusion model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Text-to-speech model</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 201 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594754,
          "date": "Mon 04 Aug 2025 16:42",
          "username": "nand2804",
          "content": "The application needs to:<br>Accept text or image input (e.g., a photo of a question)<br>Generate a written answer and explanation<br>This requires a model that can understand multiple input types (text and images) and generate text, which is exactly what a large multi-modal language model (MLLM) is designed for.<br>MLLMs combine:<br>Computer vision (to interpret images, like handwritten or printed questions)<br>Natural language understanding and generation (to comprehend and respond to questions with explanations)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In which stage of the generative AI model lifecycle are tests performed to examine the model's accuracy?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>Deployment</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data selection</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Fine-tuning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Evaluation</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 202 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594758,
          "date": "Mon 04 Aug 2025 16:42",
          "username": "nand2804",
          "content": "The Evaluation stage of the generative AI model lifecycle is where you:<br>Test the model's accuracy<br>Measure performance using relevant metrics (e.g., BLEU, ROUGE, accuracy, F1 score)<br>Assess how well the model performs on task-specific objectives<br>Ensure it meets quality and safety standards before deployment",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which statement correctly describes embeddings in generative AI?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#203",
          "answers": [
            {
              "choice": "<p>Embeddings represent data as high-dimensional vectors that capture semantic relationships.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Embeddings is a technique that searches data to find the most helpful information to answer natural language questions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Embeddings reduce the hardware requirements of a model by using a less precise data type for the weights and activations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Embeddings provide the ability to store and retrieve data for generative AI applications.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 203 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594761,
          "date": "Mon 04 Aug 2025 16:43",
          "username": "nand2804",
          "content": "In generative AI, embeddings are used to:<br>Represent text, images, or other data types as numeric vectors in a high-dimensional space.<br>Capture semantic meaning and relationships, such that similar concepts are close together in vector space.<br>Enable operations like semantic search, similarity comparison, and clustering.<br>For example, the words \"king\" and \"queen\" would have embeddings that are close together, reflecting their semantic similarity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#204",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to add generative AI functionality to its application by integrating a large language model (LLM). The responses from the LLM must be as deterministic and as stable as possible.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#204",
          "answers": [
            {
              "choice": "<p>Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to automatically add \"make your response deterministic\" at the end of the prompt before submitting the prompt to the LLM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to automatically add \"make your response deterministic\" at the beginning of the prompt before submitting the prompt to the LLM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to automatically set the temperature parameter to 1 when submitting the prompt to the LLM.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 204 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594787,
          "date": "Mon 04 Aug 2025 16:49",
          "username": "nand2804",
          "content": "The temperature parameter in large language models (LLMs) controls the randomness of the output:<br>Lower temperature (e.g., 0) → More deterministic and consistent responses<br>Higher temperature (e.g., 1) → More creative, diverse, and less predictable responses<br>Setting the temperature to 0 forces the model to always choose the most likely next word, making outputs as deterministic and stable as possible — exactly what the company requires.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to select a generative AI model to build an application. The application must provide responses to users in real time.<br/><br/>Which model characteristic should the company consider to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>Model complexity</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Innovation speed</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Inference speed</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Training time</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 205 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599730,
          "date": "Tue 19 Aug 2025 10:08",
          "username": "DominikaP",
          "content": "C. Inference speed<br>Inference speed determines how quickly a model can generate outputs after receiving input.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1594791,
          "date": "Mon 04 Aug 2025 16:50",
          "username": "nand2804",
          "content": "To deliver real-time responses in a generative AI application, the key model characteristic is:<br>✅ Inference speed – This is the time it takes the model to generate a response after receiving a prompt.<br>Faster inference speed ensures lower latency, which is essential for real-time user interactions.<br>Especially important in chatbots, customer support, and interactive applications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#207",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company wants to build an ML model to recommend products to customers. The company wants to build the model based on responsible practices.<br/><br/>Which practice should the company apply when collecting data to decrease model bias?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>Use data from only customers who match the demographics of the company's overall customer base.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Collect data from customers who have a past purchase history.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the data is balanced and collected from a diverse group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the data is from a publicly available dataset.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 207 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594798,
          "date": "Mon 04 Aug 2025 16:52",
          "username": "nand2804",
          "content": "To build a responsible ML model and reduce bias, the company should:<br>Collect data from a diverse and representative set of users<br>Ensure the dataset is balanced across key attributes (e.g., age, gender, location, purchase behavior)<br>Avoid overrepresenting any particular group, which can lead to biased recommendations<br>This helps the model make fairer and more inclusive predictions across all customer segments.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an ML model to predict customer churn.<br/><br/>Which evaluation metric will assess the model's performance on a binary classification task such as predicting churn?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#208",
          "answers": [
            {
              "choice": "<p>F1 score</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Mean squared error (MSE)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>R-squared</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Time used to train the model</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 208 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599727,
          "date": "Tue 19 Aug 2025 10:02",
          "username": "DominikaP",
          "content": "A. F1 score<br>The F1 score is highly relevant for binary classification problems like churn prediction because it balances precision (how many predicted churns were correct) and recall (how many actual churns were identified). This balance is critical when you want to accurately identify churn without too many false alarms or missed churn cases.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1594805,
          "date": "Mon 04 Aug 2025 16:54",
          "username": "nand2804",
          "content": "Predicting customer churn is a binary classification task (e.g., churn vs. no churn). The F1 score is a common evaluation metric for such tasks, especially when:<br>There is class imbalance (e.g., far fewer churners than non-churners)<br>You want a balance between precision (how many predicted churns were correct) and recall (how many actual churns were detected)<br>The F1 score combines precision and recall into a single metric:<br>F1score<br>=<br>2<br>×<br>Precision<br>×<br>Recall<br>Precision<br>+<br>Recall<br>F1score=2× <br>Precision+Recall<br>Precision×Recall<br>​",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner is evaluating the performance of an Amazon SageMaker model. The AI practitioner must choose a performance metric. The metric must show the ratio of the number of correctly classified items to the total number of correctly and incorrectly classified items.<br/><br/>Which metric meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#209",
          "answers": [
            {
              "choice": "<p>Accuracy</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Precision</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F1 score</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recall</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 209 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1691226,
          "date": "Mon 08 Dec 2025 14:04",
          "username": "iNai",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1599728,
          "date": "Tue 19 Aug 2025 10:03",
          "username": "DominikaP",
          "content": "A. Accuracy<br>Accuracy is defined as the number of correct predictions (both true positives and true negatives) divided by the total number of predictions (correct and incorrect). It directly reflects the overall correctness of a classification model.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1594811,
          "date": "Mon 04 Aug 2025 16:55",
          "username": "nand2804",
          "content": "Accuracy measures the proportion of correct predictions (both true positives and true negatives) out of all predictions made. It is defined as:<br>Accuracy<br>=<br>Numberofcorrectpredictions<br>Totalnumberofpredictions<br>Accuracy= <br>Totalnumberofpredictions<br>Numberofcorrectpredictions<br>​<br>In other words, accuracy shows the ratio of correctly classified items to the total number of items (both correctly and incorrectly classified), which matches exactly what the question is asking for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#210",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company receives multiple gigabytes of customer data daily. The company uses the data to train an ML model to forecast future product demand. The company needs a solution to perform inferences once each day.<br/><br/>Which inference type meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#210",
          "answers": [
            {
              "choice": "<p>Batch inference</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Asynchronous inference</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Real-time inference</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Serverless inference</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 210 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599729,
          "date": "Tue 19 Aug 2025 10:05",
          "username": "DominikaP",
          "content": "A. Batch inference<br>Batch inference processes data in large batches at scheduled intervals (e.g., once per day), rather than in real-time or on-demand. It is well-suited for use cases where immediate prediction results are not necessary, and when handling large volumes of data at once is more efficient.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1594814,
          "date": "Mon 04 Aug 2025 16:56",
          "username": "nand2804",
          "content": "Batch inference is the best choice when:<br>You process large volumes of data at once<br>Low latency is not required (e.g., once-per-day prediction is acceptable)<br>Inference can be scheduled or triggered at specific intervals<br>In this case, the company receives gigabytes of customer data daily and needs to perform inference once per day, which perfectly matches batch inference.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#211",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a generative AI model for customer segmentation. The model has been deployed in the company's production environment for a long time. The company recently noticed some inconsistency in the model's responses. The company wants to evaluate model bias and drift.<br/><br/>Which AWS service or feature meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#211",
          "answers": [
            {
              "choice": "<p>Amazon SageMaker Model Monitor</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Clarify</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Model Cards</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Feature Store</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 211 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1691231,
          "date": "Mon 08 Dec 2025 14:22",
          "username": "iNai",
          "content": "Bias is Clarify, Drift is Monitor. Should be Clarify for one option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1627985,
          "date": "Mon 24 Nov 2025 03:51",
          "username": "Hacksawz",
          "content": "The best single answer for evaluating both model bias and drift in AWS is:<br>A. Amazon SageMaker Model Monitor<br>Model Monitor is designed for deployed models and can provide automated, ongoing evaluation of both data and model drift. It also integrates with tools to track potential bias, making it the most suitable feature for continuous monitoring in production environments. SageMaker Clarify specializes in bias analysis but is primarily used during model development and audit rather than ongoing production monitoring.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1603904,
          "date": "Fri 29 Aug 2025 07:38",
          "username": "459470f",
          "content": "Model Monitor is for ongoing monitoring, Clarify is used more during development",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1598343,
          "date": "Fri 15 Aug 2025 16:45",
          "username": "himadri_az",
          "content": "A IS A CORRCT ANSWER",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1597402,
          "date": "Tue 12 Aug 2025 19:23",
          "username": "e4bc18e",
          "content": "Sagemaker model monitor literally monitors models for drift over time. Clarify helps deal with bias on the data being used for models so it is A.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1595803,
          "date": "Thu 07 Aug 2025 21:44",
          "username": "numark",
          "content": "This service monitors deployed models for data drift, model quality, and performance degradation over time. While it’s excellent for detecting drift in input data or model outputs, it doesn’t specifically focus on evaluating bias in model predictions, which is a key requirement here.Clarify is designed to detect and measure bias in ML models (e.g., bias across demographic groups in customer segmentation) and explain model predictions. It also supports drift analysis by comparing model behavior over time, making it ideal for evaluating both bias and drift in the context of inconsistent responses.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1594817,
          "date": "Mon 04 Aug 2025 16:57",
          "username": "nand2804",
          "content": "Amazon SageMaker Model Monitor is designed to:<br>Continuously monitor models in production<br>Detect data drift, model drift, and prediction quality issues over time<br>Alert you to inconsistencies between training data and real-world data<br>Help maintain model accuracy and fairness in production<br>Since the company is experiencing inconsistent responses from a long-deployed model, this is a classic use case for detecting drift and ensuring model stability.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has signed up for Amazon Bedrock access to build applications. The company wants to restrict employee access to specific models available on Amazon Bedrock.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>Use AWS Identity and Access Management (IAM) policies to restrict model access.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Security Token Service (AWS STS) to generate temporary credentials for model use.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Identity and Access Management (IAM) service roles to restrict model subscription.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to monitor model access.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 212 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594825,
          "date": "Mon 04 Aug 2025 16:59",
          "username": "nand2804",
          "content": "To control access to specific foundation models (FMs) in Amazon Bedrock, the correct and supported approach is to use:<br>✅ AWS Identity and Access Management (IAM) policies, which allow you to:<br>Grant or deny access to specific models (e.g., Anthropic Claude, AI21, Meta Llama)<br>Control who can invoke models, manage custom models, or access Bedrock resources<br>Implement fine-grained permissions for users, roles, or groups within the organization",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which ML technique uses training data that is labeled with the correct output values?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>Supervised learning</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Unsupervised learning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Reinforcement learning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transfer learning</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 213 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594827,
          "date": "Mon 04 Aug 2025 17:00",
          "username": "nand2804",
          "content": "Supervised learning is a machine learning technique that:<br>Uses labeled training data, meaning each input example is paired with the correct output.<br>The model learns to map inputs to outputs by minimizing the error between predicted and actual values.<br>Examples:<br>Classifying emails as spam or not spam<br>Predicting house prices based on features like size and location",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which large language model (LLM) parameter controls the number of possible next words or tokens considered at each step of the text generation process?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#214",
          "answers": [
            {
              "choice": "<p>Maximum tokens</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Top K</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Temperature</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Batch size</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 214 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594832,
          "date": "Mon 04 Aug 2025 17:14",
          "username": "nand2804",
          "content": "Top K is a decoding parameter used during text generation by large language models (LLMs) that:<br>Limits the number of candidate next tokens to the top K most likely options at each step.<br>From this shortlist, the model samples one token, introducing controlled randomness.<br>Helps balance between coherence and diversity in output.<br>For example, if Top K = 50, the model will only consider the 50 most probable next tokens and randomly choose one based on their probabilities.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is making a chatbot. The chatbot uses Amazon Lex and Amazon OpenSearch Service. The chatbot uses the company's private data to answer questions. The company needs to convert the data into a vector representation before storing the data in a database.<br/><br/>Which type of foundation model (FM) meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#215",
          "answers": [
            {
              "choice": "<p>Text completion model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Instruction following model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Text embeddings model</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Image generation model</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 215 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594834,
          "date": "Mon 04 Aug 2025 17:17",
          "username": "nand2804",
          "content": "To convert text data into a vector representation (a necessary step for enabling semantic search or retrieval in systems like Amazon OpenSearch), the correct type of foundation model to use is a:<br>✅ Text embeddings model<br>This type of model:<br>Converts textual input into dense numerical vectors (embeddings)<br>Preserves semantic meaning, enabling similarity comparisons and relevant search<br>Is typically used in retrieval-augmented generation (RAG) and search applications",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#216",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use a large language model (LLM) to generate product descriptions. The company wants to give the model example descriptions that follow a format.<br/><br/>Which prompt engineering technique will generate descriptions that match the format?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>Zero-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Chain-of-thought prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>One-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Few-shot prompting</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 216 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594835,
          "date": "Mon 04 Aug 2025 17:22",
          "username": "nand2804",
          "content": "Few-shot prompting is a prompt engineering technique where:<br>You provide the LLM with a few examples of the task (e.g., formatted product descriptions)<br>The model uses these examples to learn the pattern or structure and generate outputs that match the desired format<br>This is ideal when:<br>You want consistent formatting<br>You have a small number of representative examples",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#217",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bank is fine-tuning a large language model (LLM) on Amazon Bedrock to assist customers with questions about their loans. The bank wants to ensure that the model does not reveal any private customer data.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#217",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Guardrails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the Top-K parameter of the LLM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 217 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594839,
          "date": "Mon 04 Aug 2025 17:30",
          "username": "nand2804",
          "content": "When fine-tuning a large language model (LLM) with customer data, it is essential to ensure data privacy and compliance with regulations (like GDPR or HIPAA). The most effective and direct solution to prevent the model from learning or exposing sensitive customer information is to:<br>✅ Remove personally identifiable information (PII) from the dataset before fine-tuning.<br>This helps:<br>Prevent the model from memorizing or leaking private data<br>Reduce privacy and compliance risks<br>Follow best practices for data minimization",
          "upvote_count": "5",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1706143,
          "date": "Mon 12 Jan 2026 15:44",
          "username": "Sesh_14",
          "content": "Explanation:<br>The most reliable way to ensure that an LLM does not reveal private customer data is to prevent that data from ever being learned by the model.<br>Why B is correct:<br>If PII is included in fine-tuning data, the model can memorize and later reproduce it<br>Removing or anonymizing PII before fine-tuning is a best practice for privacy, compliance, and risk reduction<br>This approach is preventive, not reactive, and works regardless of how the model is later prompted",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1699417,
          "date": "Sun 14 Dec 2025 21:08",
          "username": "ticoY_2025",
          "content": "Amazon Bedrock Guardrails are specifically designed to prevent sensitive or disallowed content from being generated or returned by an LLM, including private customer data and PII.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1627986,
          "date": "Mon 24 Nov 2025 03:57",
          "username": "Hacksawz",
          "content": "The correct answer is:<br>B. Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.<br>Removing PII before fine-tuning ensures that the model never learns or has access to sensitive customer data, fully protecting privacy and compliance. Guardrails (A) help filter outputs but cannot prevent private data from being encoded in the model during fine-tuning. Adjusting model parameters (C) and encrypting data in S3 (D) protect data at rest or impact inference, but neither addresses the foundational risk: training on sensitive information itself.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1627624,
          "date": "Sat 22 Nov 2025 10:59",
          "username": "samplunk",
          "content": "When fine-tuning an LLM, any information in the training data can be memorized by the model.<br>To prevent the model from revealing private customer information, the most important step is to sanitize the dataset by removing PII before fine-tuning.<br>A. Amazon Bedrock Guardrails – helps control model outputs after deployment but does not prevent the model from memorizing PII during fine-tuning. Works on outputs, not training data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1612777,
          "date": "Sat 27 Sep 2025 00:17",
          "username": "rstrstrst",
          "content": "The answer is A, the model still needs access to the customer data to be able to answer questions. You cannot remove it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1605629,
          "date": "Tue 02 Sep 2025 19:21",
          "username": "allasiki",
          "content": "A. Use Amazon Bedrock Guardrails.<br>Guardrails in Bedrock let you enforce policies on what the model can output, including blocking personally identifiable information (PII) or other sensitive content. This directly addresses the requirement to ensure the model does not reveal private customer data.<br>B. Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.<br>This is a good data hygiene practice, but the question specifically emphasizes ensuring the model does not reveal private data. Even if PII is removed, the model might still generate unsafe or unintended outputs without guardrails.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1604003,
          "date": "Fri 29 Aug 2025 09:28",
          "username": "7ebc5c4",
          "content": "I believe guardrails are better placed to do that",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#218",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A grocery store wants to create a chatbot to help customers find products in the store. The chatbot must check the inventory in real time and provide the product location in the store.<br/><br/>Which prompt engineering technique should the store use to build the chatbot?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#218",
          "answers": [
            {
              "choice": "<p>Zero-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Few-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Least-to-most prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Reasoning and acting (ReAct) prompting</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 218 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594840,
          "date": "Mon 04 Aug 2025 17:33",
          "username": "nand2804",
          "content": "eAct prompting (Reasoning and Acting) is a prompt engineering technique that:<br>Combines step-by-step reasoning (e.g., analyzing a customer's request)<br>With actions, such as calling external tools or APIs, like inventory systems or product databases<br>Is ideal for use cases requiring real-time interaction with external data sources<br>In this case, the chatbot must:<br>Interpret the user’s query (reasoning)<br>Query the real-time inventory system (acting)<br>Respond with location details<br>This makes ReAct prompting the most suitable approach.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#219",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a third-party model on Amazon Bedrock to analyze confidential documents. The company is concerned about data privacy.<br/><br/>Which statement describes how Amazon Bedrock protects data privacy?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>User inputs and model outputs are anonymized and shared with third-party model providers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>User inputs and model outputs are not shared with any third-party model providers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>User inputs are kept confidential, but model outputs are shared with third-party model providers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>User inputs and model outputs are redacted before the inputs and outputs are shared with third-party model providers.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 219 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594842,
          "date": "Mon 04 Aug 2025 17:37",
          "username": "nand2804",
          "content": "When you use Amazon Bedrock, your data privacy is protected as follows:<br>Inputs (your prompts or documents) and outputs (model-generated content)<br>Are not shared with the third-party model providers (e.g., Anthropic, Cohere, Meta, etc.)<br>Are not used to train or fine-tune the base models unless you explicitly choose to do so<br>This aligns with Amazon Bedrock’s security-first design, where data remains within your AWS account and is handled securely during inference.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An animation company wants to provide subtitles for its content.<br/><br/>Which AWS service meets this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#220",
          "answers": [
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Polly</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Transcribe</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Translate</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 220 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594844,
          "date": "Mon 04 Aug 2025 17:38",
          "username": "nand2804",
          "content": "Amazon Transcribe is an AWS service that:<br>Converts speech to text<br>Is ideal for generating subtitles or captions from audio or video content<br>Supports multiple languages and formats",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company wants to group customers based on their purchase history and preferences to personalize the user experience of the company's application.<br/><br/>Which ML technique should the company use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>Classification</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Clustering</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Regression</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Content generation</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 221 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599721,
          "date": "Tue 19 Aug 2025 09:42",
          "username": "DominikaP",
          "content": "Clustering algorithms, such as K-means, DBSCAN, and others, are widely used for customer segmentation. These unsupervised learning methods group customers into clusters based on similarities in their data (e.g., purchase behavior, preferences). This enables personalized marketing and user experience customization.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1594858,
          "date": "Mon 04 Aug 2025 18:25",
          "username": "nand2804",
          "content": "Clustering is an unsupervised machine learning technique used to:<br>Group similar items (in this case, customers) based on their features (e.g., purchase history, preferences)<br>Find patterns or segments within data without using labeled outputs<br>This technique is ideal for personalization use cases like:<br>Customer segmentation<br>Targeted marketing<br>Product recommendations",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to control employee access to publicly available foundation models (FMs).<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#222",
          "answers": [
            {
              "choice": "<p>Analyze cost and usage reports in AWS Cost Explorer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Download AWS security and compliance documents from AWS Artifact.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon SageMaker JumpStart to restrict discoverable FMs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Build a hybrid search solution by using Amazon OpenSearch Service.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 222 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594859,
          "date": "Mon 04 Aug 2025 18:26",
          "username": "nand2804",
          "content": "Amazon SageMaker JumpStart provides access to a variety of pre-trained foundation models (FMs). To control employee access to these models, you can:<br>Restrict discoverable models through permissions and configuration settings in SageMaker JumpStart<br>Use AWS Identity and Access Management (IAM) to control which models users can see or use",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has set up a translation tool to help its customer service team handle issues from customers around the world. The company wants to evaluate the performance of the translation tool. The company sets up a parallel data process that compares the responses from the tool to responses from actual humans. Both sets of responses are generated on the same set of documents.<br/><br/>Which strategy should the company use to evaluate the translation tool?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#223",
          "answers": [
            {
              "choice": "<p>Use the Bilingual Evaluation Understudy (BLEU) score to estimate the absolute translation quality of the two methods.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Bilingual Evaluation Understudy (BLEU) score to estimate the relative translation quality of the two methods.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the BERTScore to estimate the absolute translation quality of the two methods.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the BERTScore to estimate the relative translation quality of the two methods.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 223 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594860,
          "date": "Mon 04 Aug 2025 18:28",
          "username": "nand2804",
          "content": "The BLEU score (Bilingual Evaluation Understudy) is a widely used automatic metric for evaluating the quality of machine translation output by comparing it to human reference translations.<br>BLEU is best suited for comparing relative performance between two or more translation methods (e.g., human vs. machine).<br>It evaluates n-gram overlap between machine-generated and human-generated text.<br>While it does not capture meaning deeply (like semantic similarity), it is commonly used due to its simplicity and effectiveness for benchmarking.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner wants to generate more diverse and more creative outputs from a large language model (LLM).<br/><br/>How should the AI practitioner adjust the inference parameter?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#224",
          "answers": [
            {
              "choice": "<p>Increase the temperature value.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Decrease the Top K value.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the response length.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decrease the prompt length.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 224 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599724,
          "date": "Tue 19 Aug 2025 09:52",
          "username": "DominikaP",
          "content": "A. Increase the temperature value.<br>The temperature parameter controls the randomness in token selection during text generation. Increasing the temperature value makes the model more likely to pick less probable words, resulting in more creative and varied responses. Conversely, a lower temperature makes the output more deterministic and focused, but less diverse.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1594862,
          "date": "Mon 04 Aug 2025 18:28",
          "username": "nand2804",
          "content": "In large language models (LLMs), the temperature parameter controls the randomness of the output:<br>Higher temperature (&gt;1) → more diverse and creative responses, but potentially less accurate.<br>Lower temperature (~0–0.3) → more deterministic and focused outputs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#225",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed custom computer vision models. The company needs a user-friendly interface for data labeling to minimize model mistakes on new real-world data.<br/><br/>Which AWS service, feature, or tool meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#225",
          "answers": [
            {
              "choice": "<p>Amazon SageMaker Ground Truth</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Canvas</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock playground</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock Agents</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 225 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594863,
          "date": "Mon 04 Aug 2025 18:33",
          "username": "nand2804",
          "content": "Amazon SageMaker Ground Truth is designed specifically for:<br>Data labeling at scale (including for computer vision tasks like image classification, object detection, etc.)<br>Providing a user-friendly interface for annotators.<br>Supporting human-in-the-loop workflows.<br>Reducing labeling costs using active learning and automated labeling",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#226",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is integrating AI into its employee recruitment and hiring solution. The company wants to mitigate bias risks and ensure responsible AI practices while prioritizing equitable hiring decisions.<br/><br/>Which core dimensions of responsible AI should the company consider? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#226",
          "answers": [
            {
              "choice": "<p>Fairness</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Tolerance</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Flexibility</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Open source</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transparency</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 226 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599719,
          "date": "Tue 19 Aug 2025 09:32",
          "username": "DominikaP",
          "content": "A. Fairness<br>Fairness is critical in AI-driven recruitment to ensure AI systems do not perpetuate or amplify biases that could unfairly disadvantage certain groups of candidates. It involves auditing for bias, promoting equitable treatment, and applying fairness metrics to guarantee just decision-making.<br>E. Transparency<br>Transparency is essential so that candidates and stakeholders understand how AI systems are making decisions. This includes clear communication about AI involvement in hiring processes and explainability of how decisions are derived, which builds trust and accountability.<br>The other options—Tolerance, Flexibility, and Open source—are not typically considered core dimensions of responsible AI in recruitment with respect to bias mitigation and equitable practices.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AE"
        },
        {
          "id": 1594864,
          "date": "Mon 04 Aug 2025 18:34",
          "username": "nand2804",
          "content": "✅ Fairness<br>Ensures the model does not discriminate based on gender, race, age, or other protected attributes.<br>Critical in hiring to provide equitable opportunities to all candidates.<br>✅ Transparency<br>Involves understanding how decisions are made by the AI system.<br>Helps organizations and applicants trust the process and makes it easier to identify and correct issues.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:AE"
        }
      ]
    },
    {
      "question_id": "#227",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company has deployed an ML model to predict customer churn. The model has been running in production for 1 week. The company wants to evaluate how accurately the model predicts churn compared to actual customer behavior.<br/><br/>Which metric meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#227",
          "answers": [
            {
              "choice": "<p>Root mean squared error (RMSE)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Return on investment (ROI)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F1 score</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Bilingual Evaluation Understudy (BLEU) score</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 227 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599720,
          "date": "Tue 19 Aug 2025 09:39",
          "username": "DominikaP",
          "content": "The F1 score is the harmonic mean of precision and recall. It is particularly valuable when dealing with imbalanced datasets, such as customer churn prediction, where the number of customers who churn might be much smaller than those who do not churn.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1594865,
          "date": "Mon 04 Aug 2025 18:37",
          "username": "nand2804",
          "content": "The F1 score is the most appropriate metric when evaluating a binary classification model like churn prediction, especially when there's an imbalance between the churn and non-churn classes.<br>✅ Why F1 Score?<br>Combines precision and recall into one score.<br>Useful when false positives and false negatives carry different costs (common in churn scenarios).<br>Helps measure how well the model is predicting both actual churners and non-churners.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#228",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a generative AI application that uses a pre-trained foundation model (FM) on Amazon Bedrock. The company wants the FM to include more context by using company information.<br/><br/>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#228",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Knowledge Bases.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Choose a different FM on Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Agents.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a custom model on Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 228 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594866,
          "date": "Mon 04 Aug 2025 18:38",
          "username": "nand2804",
          "content": "Amazon Bedrock Knowledge Bases is the most cost-effective way to add company-specific context to a pre-trained foundation model without retraining or fine-tuning the model.<br>✅ Why it's best:<br>It uses retrieval-augmented generation (RAG) to retrieve relevant company data from connected data sources (e.g., S3) at inference time.<br>No need for expensive and time-consuming fine-tuning.<br>Supports real-time contextual responses using external data, ideal for many enterprise use cases.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#229",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company is using Amazon SageMaker to develop AI models.<br/><br/>Select the correct SageMaker feature or resource from the following list for each step in the AI model lifecycle workflow. Each SageMaker feature or resource should be selected one time or not at all.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image19.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image20.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#229",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 229 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1604006,
          "date": "Fri 29 Aug 2025 09:50",
          "username": "7ebc5c4",
          "content": "Sagemaker Model Registry and Clarify",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1594867,
          "date": "Mon 04 Aug 2025 18:39",
          "username": "nand2804",
          "content": "Managing different versions of the model: SageMaker Model Registry<br>Using the current model to make predictions: SageMaker Serverless Inference",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#230",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A food service company wants to collect a dataset to predict customer food preferences. The company wants to ensure that the food preferences of all demographics are included in the data.<br/><br/>Which dataset characteristic does this scenario present?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#230",
          "answers": [
            {
              "choice": "<p>Accuracy</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Diversity</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recency bias</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Reliability</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 230 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1594869,
          "date": "Mon 04 Aug 2025 18:47",
          "username": "nand2804",
          "content": "Diversity refers to ensuring that the dataset represents a wide range of groups or characteristics, such as different demographics, preferences, ages, cultures, etc.<br>In this case, the company wants to include food preferences from all demographics, which is a textbook example of ensuring data diversity.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#231",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create a chatbot that answers questions about human resources policies. The company is using a large language model (LLM) and has a large digital documentation base.<br/><br/>Which technique should the company use to optimize the generated responses?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#231",
          "answers": [
            {
              "choice": "<p>Use Retrieval Augmented Generation (RAG).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use few-shot prompting.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the temperature to 1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decrease the token size.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 231 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1599718,
          "date": "Tue 19 Aug 2025 09:30",
          "username": "DominikaP",
          "content": "RAG optimizes chatbot responses by first retrieving the most relevant information from an external knowledge base based on the user query.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1594871,
          "date": "Mon 04 Aug 2025 18:48",
          "username": "nand2804",
          "content": "Retrieval Augmented Generation (RAG) is a technique that enhances a large language model (LLM) by retrieving relevant documents or passages from a knowledge base (such as HR policy documents) at inference time, and then using that retrieved content to generate more accurate, context-aware responses.<br>This is ideal when:<br>You have a large documentation base, and<br>You want responses to be grounded in factual, internal data (like HR policies).",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#232",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An education company is building a chatbot whose target audience is teenagers. The company is training a custom large language model (LLM). The company wants the chatbot to speak in the target audience's language style by using creative spelling and shortened words.<br/><br/>Which metric will assess the LLM's performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#232",
          "answers": [
            {
              "choice": "<p>F1 score</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>BERTScore</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recall-Oriented Understudy for Gisting Evaluation (ROUGE)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Bilingual Evaluation Understudy (BLEU) score</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 232 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1601627,
          "date": "Sat 23 Aug 2025 06:25",
          "username": "AZD98",
          "content": "B. BERTScore",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1599971,
          "date": "Wed 20 Aug 2025 02:36",
          "username": "rmnveeveik",
          "content": "BERTScore uses semantic similarity instead of exact matches.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1597835,
          "date": "Wed 13 Aug 2025 22:35",
          "username": "4cb8bd5",
          "content": "B. BERTScore<br>Uses pretrained contextual embeddings (like BERT) to compare the semantic similarity between generated and reference texts.<br>More tolerant to variations in wording (e.g., spelling or paraphrasing) because it focuses on meaning, not exact word matches.<br>Good choice when you're dealing with creative language, such as the stylized way teenagers write.<br>B. Because it:<br>Evaluates semantic similarity, not just surface overlap.<br>Is robust to creative or non-standard language.<br>Fits the use case of capturing teenagers’ creative spelling and slang.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1595807,
          "date": "Thu 07 Aug 2025 22:00",
          "username": "numark",
          "content": "BLEU evaluates translation quality by comparing n-gram overlap between machine-generated and reference translations. It’s designed for translation tasks and prioritizes exact matches, which doesn’t align with assessing creative, stylistic text generation for a teenage audience.BERTScore measures the semantic similarity between generated text and reference text using contextual embeddings from a model like BERT. It’s well-suited for evaluating generative tasks, as it captures how well the LLM’s responses match the target style (e.g., teenage language with creative spelling and shortened words) by comparing them to reference responses. In an AWS context, BERTScore can be used with Amazon Bedrock’s evaluation capabilities to assess the chatbot’s output.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1594872,
          "date": "Mon 04 Aug 2025 18:49",
          "username": "nand2804",
          "content": "The BLEU score is a commonly used metric for evaluating the quality of text generation in natural language processing, particularly when comparing machine-generated text to human-written reference outputs. It's especially useful when you want to assess how well a language model mimics a specific style or vocabulary — like teen language with creative spelling and abbreviations.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#233",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer service team is developing an application to analyze customer feedback and automatically classify the feedback into different categories. The categories include product quality, customer service, and delivery experience.<br/><br/>Which A1 concept does this scenario present?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#233",
          "answers": [
            {
              "choice": "<p>Computer vision</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Natural language processing (NLP)</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recommendation systems</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Fraud detection</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 233 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1699530,
          "date": "Mon 15 Dec 2025 13:09",
          "username": "itsjunukim",
          "content": "A1 is typo",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1599717,
          "date": "Tue 19 Aug 2025 09:24",
          "username": "DominikaP",
          "content": "The scenario of developing an application to analyze customer feedback and automatically classify it into categories like product quality, customer service, and delivery experience is an example of the AI concept called Natural Language Processing (NLP).<br>NLP involves the ability of machines to understand, interpret, and classify human language, especially in text form such as customer feedback. This allows the application to process the feedback text and categorize it correctly based on the content.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1597239,
          "date": "Tue 12 Aug 2025 07:53",
          "username": "DominikaP",
          "content": "Is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1594873,
          "date": "Mon 04 Aug 2025 18:51",
          "username": "nand2804",
          "content": "This scenario involves analyzing and classifying text-based customer feedback into categories like product quality, customer service, and delivery experience. This is a classic use case for Natural Language Processing (NLP) — a branch of AI focused on understanding, interpreting, and generating human language.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#234",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company must ensure that its generative AI-powered chatbot provides factual responses for regulatory compliance.<br/><br/>Which solution prevents the underlying foundation model (FM) from hallucinating?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#234",
          "answers": [
            {
              "choice": "<p>Use AWS Config to query compliance metadata by using natural language.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Fraud Detector to detect potentially fraudulent online activities.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Audit Manager to prepare IT audit and compliance reports.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 234 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1616714,
          "date": "Sun 12 Oct 2025 15:39",
          "username": "rhuanca",
          "content": "Amazon Bedrock Guardrails sounds best option, audit do not iteract with generative AI model",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1613488,
          "date": "Mon 29 Sep 2025 13:30",
          "username": "99bee24",
          "content": "Automated Reasoning checks in Amazon Bedrock Guardrails is the first and only generative AI safeguard that helps prevent factual errors from hallucinations using logically accurate and verifiable reasoning that explains why responses are correct.<br>https://aws.amazon.com/blogs/aws/prevent-factual-errors-from-llm-hallucinations-with-mathematically-sound-automated-reasoning-checks-preview/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#235",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company wants to develop a solution that uses generative AI to create content for product advertisements, including sample images and slogans.<br/><br/>Select the correct model type from the following list for each action. Each model type should be selected one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image21.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image22.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#235",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 235 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#236",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has created multiple ML models. The company needs a solution for storing, managing, and versioning the models.<br/><br/>Which AWS service or feature meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#236",
          "answers": [
            {
              "choice": "<p>AWS Audit Manager</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Model Monitor</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Model Registry</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Canvas</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 236 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1625762,
          "date": "Fri 14 Nov 2025 19:23",
          "username": "Webcatman",
          "content": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#238",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an ML application. The application must automatically group similar customers and products based on their characteristics. Which ML strategy should the company use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#238",
          "answers": [
            {
              "choice": "<p>Unsupervised learning</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Supervised learning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Reinforcement learning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Semi-supervised learning</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 238 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1626908,
          "date": "Wed 19 Nov 2025 17:25",
          "username": "gonzales",
          "content": "The application must:<br> • Automatically group similar customers and products<br> • Based on characteristics<br> • With no labels provided<br>This is exactly what unsupervised learning is used for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#239",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A news agency publishes articles in English. The agency wants to make articles available in other languages.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#239",
          "answers": [
            {
              "choice": "<p>Add Amazon Transcribe to the company’s website.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Translate real-time translation feature.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add Amazon Personalize to the company’s website.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Textract real-time document processing feature.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 239 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1626909,
          "date": "Wed 19 Nov 2025 17:26",
          "username": "gonzales",
          "content": "The company wants to:<br> • Take English text<br> • Produce other languages<br> • Make articles available for multilingual readers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#240",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bank is building a chatbot to answer customer questions about opening a bank account. The chatbot will use public bank documents to generate responses. The company will use Amazon Bedrock and prompt engineering to improve the chatbot’s responses.<br/><br/>Which prompt engineering technique meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#240",
          "answers": [
            {
              "choice": "<p>Complexity-based prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Zero-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Few-shot prompting</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Directional stimulus prompting</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 240 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1706162,
          "date": "Mon 12 Jan 2026 17:19",
          "username": "Sesh_14",
          "content": "Explanation:<br>The chatbot must answer questions using public bank documents and the company plans to use prompt engineering (not model retraining) with Amazon Bedrock.<br>This aligns with directional stimulus prompting, which provides explicit guidance or context (such as documents, policies, or instructions) directly in the prompt to steer the model’s response.<br>Why D is correct:<br>Injects external context (bank documents) into the prompt<br>Guides the model to generate grounded, accurate answers<br>Commonly used for document-based Q&amp;A chatbots in Bedrock",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1703350,
          "date": "Fri 02 Jan 2026 23:46",
          "username": "AlexD332",
          "content": "✅ D. Directional stimulus prompting<br>Why:<br>The chatbot will generate answers based on public bank documents that are provided as input (stimulus) to guide the model’s responses.<br>Directional stimulus prompting works by supplying external reference content (documents, excerpts, guidelines) in the prompt to steer the model toward accurate, grounded answers.<br>This aligns well with Amazon Bedrock use cases where prompts include retrieved document content.<br>Why the others are less suitable:<br>A. Complexity-based prompting → focuses on breaking down complex reasoning<br>B. Zero-shot prompting → no examples or document guidance<br>C. Few-shot prompting → uses examples, not source documents",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1703029,
          "date": "Thu 01 Jan 2026 12:17",
          "username": "Suchetana",
          "content": "Directional stimulus prompting guides the foundation model to produce outputs aligned with business context. It's particularly effective for aligning responses with public documents and improving coherence. From Bedrock Prompt Engineering Techniques documentation:<br>Explanation:<br>Directional stimulus prompting guides the foundation model to produce outputs aligned with business context. It's particularly effective for aligning responses with public documents and improving coherence. From Bedrock Prompt Engineering Techniques documentation:<br>\"Directional stimulus prompting provides structured prompts to steer the model output towards desired formats or behaviors using specific linguistic cues.\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1699418,
          "date": "Sun 14 Dec 2025 21:18",
          "username": "ticoY_2025",
          "content": "Few-shot prompting improves responses by:<br>-Providing the model with a small number of example Q&amp;A pairs<br>-Demonstrating the desired tone, structure, and accuracy<br>- Helping the model better align responses with domain-specific content (like banking procedures)<br>Why the other options are incorrect:<br>A. Complexity-based prompting -Used to decompose complex reasoning tasks, not customer Q&amp;A.<br>B. Zero-shot prompting -Provides no examples; less effective for refining style and accuracy.<br>D. Directional stimulus prompting -Focuses on steering output style or direction, not grounding answers with examples.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1696468,
          "date": "Tue 09 Dec 2025 14:24",
          "username": "iNai",
          "content": "A is correct, because we had public bank documents",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#241",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to fine-tune an ML model that is hosted on Amazon Bedrock. The company wants to use its own sensitive data that is stored in private databases in a VPC. The data needs to stay within the company’s private network.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#241",
          "answers": [
            {
              "choice": "<p>Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource policy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS PrivateLink to connect the VPC and Amazon Bedrock.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Key Management Service (AWS KMS) keys to encrypt the data.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 241 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#242",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A documentary filmmaker wants to reach more viewers. The filmmaker wants to automatically add subtitles and voice-overs in multiple languages to their films.<br/><br/>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#242",
          "answers": [
            {
              "choice": "<p>Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Textract and Amazon Translate to generate subtitles in other languages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Polly to generate voice-overs in other languages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Translate to generate voice-overs in other languages.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Textract to generate voice-overs in other languages.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 242 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1698479,
          "date": "Wed 10 Dec 2025 06:46",
          "username": "iNai",
          "content": "A, C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1627157,
          "date": "Thu 20 Nov 2025 16:45",
          "username": "gonzales",
          "content": "1. Amazon Transcribe converts spoken audio from the film into text (transcriptions).<br>2. Amazon Translate translates those subtitles into any target language.<br>Amazon Polly, which generates spoken audio in many voices and languages.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AC"
        },
        {
          "id": 1617050,
          "date": "Mon 13 Oct 2025 23:37",
          "username": "254b44f",
          "content": "Transcribe is used to generate text. Translate is used for translation. Amazon Polly is for txt to speech",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:AC"
        }
      ]
    },
    {
      "question_id": "#243",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create a chatbot to answer employee questions about company policies. Company policies are updated frequently. The chatbot must reflect the changes in near real time. The company wants to choose a large language model (LLM).<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#243",
          "answers": [
            {
              "choice": "<p>Fine-tune an LLM on the company policy text by using Amazon SageMaker.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Select a foundation model (FM) from Amazon Bedrock to build an application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge Bases.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Q Business to build a custom Q App.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 243 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627158,
          "date": "Thu 20 Nov 2025 16:52",
          "username": "gonzales",
          "content": "RAG allows the model to pull updated information at query time, not during training. Amazon Bedrock Knowledge Bases automatically sync your documents.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#244",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using supervised learning to train an AI model on a small labeled dataset that is specific to a target task.<br/><br/>Which step of the foundation model (FM) lifecycle does this describe?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#244",
          "answers": [
            {
              "choice": "<p>Fine-tuning</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Data selection</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Pre-training</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Evaluation</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 244 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627159,
          "date": "Thu 20 Nov 2025 16:55",
          "username": "gonzales",
          "content": "• The company is using supervised learning<br>• They have a small labeled dataset<br>• The dataset is specific to a target task<br>Train an FM on a small, task-specific, labeled dataset -&gt; Fine-Tuning<br>Pre-training -&gt; Massive unlabeled datasets",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#245",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company is developing an AI application to help the company approve or deny personal loans. The application must follow the principles of responsible AI.<br/><br/>Select the correct responsible AI principle from the following list for each action. Select each responsible AI principle one time or not at all.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image23.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image24.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#245",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 245 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627163,
          "date": "Thu 20 Nov 2025 17:11",
          "username": "gonzales",
          "content": "1. Encrypt the application data, and isolate the application on a private network.<br>Privacy and security<br>2. Evaluate how different population groups will be impacted.<br>Fairness<br>Test the application with unexpected data to ensure the application will work in unique situations.<br>Robustness<br>Evaluating impacts on different groups means you’re checking:<br> • Bias<br> • Disparate impact<br> • Fair treatment<br>This is Fairness, not explainability.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#246",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is introducing a new feature for its application. The feature will refine the style of output messages. The company will fine-tune a large language model (LLM) on Amazon Bedrock to implement the feature.<br/><br/>Which type of data does the company need to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#246",
          "answers": [
            {
              "choice": "<p>Samples of only input messages</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Samples of only output messages</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Samples of pairs of input and output messages</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Separate samples of input and output messages</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 246 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627165,
          "date": "Thu 20 Nov 2025 17:17",
          "username": "gonzales",
          "content": "Fine-tuning a large language model (LLM) for style refinement requires supervised learning.<br>Supervised fine-tuning ALWAYS requires:<br>✔ Input → Output pairs<br>D. Separate samples of input and output messages<br>Still wrong — the model cannot learn the mapping between them without pairs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#251",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A design company is using a foundation model (FM) on Amazon Bedrock to generate images for various projects. The company wants to have control over how detailed or abstract each generated image appears<br/><br/>Which model parameter should the company modify?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#251",
          "answers": [
            {
              "choice": "<p>Model checkpoint</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Batch size</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generation step</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Token length</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 251 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627176,
          "date": "Thu 20 Nov 2025 17:44",
          "username": "gonzales",
          "content": "For image-generating foundation models (like Stable Diffusion-based models on Amazon Bedrock), the level of detail or abstraction in the generated image is primarily controlled by:<br>✔ Number of inference steps (generation steps)<br> • More steps → More detailed, sharper, more precise images<br> • Fewer steps → More abstract, less detailed, more impressionistic images<br>This directly matches the requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1616180,
          "date": "Fri 10 Oct 2025 03:31",
          "username": "Nagapriya_s",
          "content": "Why Generation Step Controls Image Detail<br>In the context of image generation using foundation models, the generation step parameter typically controls:<br>The number of iterations or refinement passes the model performs during image creation<br>How detailed, realistic, or abstract the final image appears<br>Fewer steps may result in more abstract or rough images, while more steps allow the model to add finer details and polish the output.<br>❌ Why the Other Options Don’t Fit:<br>A. Model checkpoint: Refers to a saved state of the model during training—not a parameter for controlling image detail.<br>B. Batch size: Affects training efficiency and memory usage—not the quality or abstraction of generated images.<br>D. Token length: Relevant for text generation, not image generation.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#252",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company has offices in different countries worldwide. The company requires that all API calls between generative AI applications and foundation models (FM) must not travel across the public internet.<br/><br/>Which AWS service should the company use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#252",
          "answers": [
            {
              "choice": "<p>AWS PrivateLink</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Q</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon CloudFront</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS CloudTrail</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 252 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627177,
          "date": "Thu 20 Nov 2025 17:46",
          "username": "gonzales",
          "content": "AWS PrivateLink provides:<br> • Private connectivity between your VPC and AWS services (including Amazon Bedrock)<br> • Traffic stays inside the AWS network backbone<br> • No exposure to the public internet<br> • Supports cross-region and multi-account setups",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1613250,
          "date": "Sun 28 Sep 2025 20:35",
          "username": "odisor",
          "content": "AWS PrivateLink remain AWS Services connections private without using Public internet",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#253",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company’s products and receive details on users’ orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses.<br/><br/>Which AWS feature or resource meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#253",
          "answers": [
            {
              "choice": "<p>Amazon Bedrock Guardrails</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock Agents</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock inference APIs</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock custom models</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 253 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627178,
          "date": "Thu 20 Nov 2025 17:48",
          "username": "gonzales",
          "content": "Guardrails can:<br> • Filter toxic, harmful, or unsafe content<br> • Enforce topic restrictions<br> • Enforce word/phrase blocking<br> • Apply to both inputs and outputs<br> • Work with any Bedrock model<br> • Provide consistent safety across the application",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1616183,
          "date": "Fri 10 Oct 2025 03:35",
          "username": "Nagapriya_s",
          "content": "Guardrails protect harmful content",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1614072,
          "date": "Wed 01 Oct 2025 15:13",
          "username": "Desco1",
          "content": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1613251,
          "date": "Sun 28 Sep 2025 20:37",
          "username": "odisor",
          "content": "Amazon Bedrock Guardrails are specifically designed to help filter and block harmful, unsafe, or unwanted content in:<br>. User input prompts<br>. Model-generated responses",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#254",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to learn about generative AI applications in an experimental environment.<br/><br/>Which solution will meet this requirement MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#254",
          "answers": [
            {
              "choice": "<p>Amazon Q Developer</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker JumpStart</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock PartyRock</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Q Business</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 254 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627182,
          "date": "Thu 20 Nov 2025 18:01",
          "username": "gonzales",
          "content": "PartyRock is designed specifically for learning and experimenting with generative AI",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1616338,
          "date": "Fri 10 Oct 2025 23:15",
          "username": "sbobetfan",
          "content": "GenAI applications usually points to BedRock. “PartyRock is a space where you can build AI-generated apps in a playground powered by Amazon Bedrock. It’s a fast and fun way to learn about generative AI.”",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1616184,
          "date": "Fri 10 Oct 2025 03:37",
          "username": "Nagapriya_s",
          "content": "Amazon Bedrock PartyRock is a free, no-code playground designed specifically for experimenting with generative AI applications. It allows users to:<br>Build and test AI apps without writing code<br>Explore use cases like text generation, summarization, and image creation<br>Learn how foundation models work in a hands-on, interactive way<br>It’s ideal for companies or individuals who want to experiment and learn without incurring infrastructure or licensing costs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#255",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to collect a large dataset to train an AI assistant in a specific content area.<br/><br/>Which dataset will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#255",
          "answers": [
            {
              "choice": "<p>Diverse conversations that use relevant terminology</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Time series data of general purpose historical sales</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Sentiment analysis of news articles</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Unique product IDs and corresponding user IDs</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 255 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627183,
          "date": "Thu 20 Nov 2025 18:04",
          "username": "gonzales",
          "content": "The company wants to train an AI assistant in a specific content area.<br>Therefore, the best dataset is:<br>Conversation-style data<br>Using domain-specific vocabulary<br>With many examples and variations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1613360,
          "date": "Mon 29 Sep 2025 02:01",
          "username": "rstrstrst",
          "content": "Diverse conversations that use relevant terminology provides the necessary structure (conversations) and the necessary content (relevant terminology) to train a dialogue-focused model in a specialized domain.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#256",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company is developing a generative AI application for loan approval decisions. The company needs the application output to be responsible and fair.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#256",
          "answers": [
            {
              "choice": "<p>Review the training data to check for biases. Include data from all demographics in the training data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a deep learning model with many hidden layers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the model’s decision-making process a secret to protect proprietary algorithms.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Continuously monitor the model’s performance on a static test dataset</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 256 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627184,
          "date": "Thu 20 Nov 2025 18:07",
          "username": "gonzales",
          "content": "Bias in training data → biased model outputs.<br>Fixing the data is the foundation of fairness.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#257",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>Select the correct AWS service or tool from the following list for each use case. Select each AWS service or tool one time or not at all.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image25.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image26.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#257",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 257 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627185,
          "date": "Thu 20 Nov 2025 18:12",
          "username": "gonzales",
          "content": "✔ Amazon SageMaker Ground Truth<br>Why?<br>Ground Truth provides human-in-the-loop data labeling, review, and feedback pipelines.<br>It is used to incorporate human feedback during training or retraining.<br>✔ Amazon Bedrock Guardrails<br>Why?<br>Bedrock Guardrails lets you create safety filters for:<br> • Harmful inputs<br> • Harmful outputs<br> • PII blocking<br> • Topic restrictions<br> • Custom rules for responsible AI<br>This is the AWS service specifically designed for AI safety controls.<br>✔ Amazon SageMaker Clarify<br>Why?<br>Clarify is used to detect:<br> • Bias in training data<br> • Bias in model predictions<br> • Feature importance (explainability)<br>It is the AWS tool designed for bias detection.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#258",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner who has minimal ML knowledge wants to predict employee attrition without writing code.<br/><br/>Which Amazon SageMaker feature meets this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#258",
          "answers": [
            {
              "choice": "<p>SageMaker Canvas</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>SageMaker Clarify</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>SageMaker Model Monitor</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>SageMaker Data Wrangler</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 258 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627186,
          "date": "Thu 20 Nov 2025 18:16",
          "username": "gonzales",
          "content": "SageMaker Canvas is a no-code machine learning tool that allows users with minimal ML experience<br>Predicting employee attrition is a classic tabular prediction problem, which Canvas supports perfectly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1616339,
          "date": "Fri 10 Oct 2025 23:20",
          "username": "sbobetfan",
          "content": "I’ve said this before: SageMaker Canvas is literally advertised as “No-code Machine Learning”.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1613257,
          "date": "Sun 28 Sep 2025 20:47",
          "username": "odisor",
          "content": "Amazon SageMaker Canvas is a no-code machine learning tool that allows business analysts and AI practitioners with minimal ML knowledge to build ML models and generate predictions using a drag-and-drop interface.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#259",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AI to improve its services. The company needs to ensure that the AI system is fair and explainable. The company wants to require training for members of the AI system development team.<br/><br/>Which training will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#259",
          "answers": [
            {
              "choice": "<p>Training on advanced coding skills</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Training on data privacy and encryption protocols</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Training on bias awareness and responsible AI</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Training on advanced ML algorithms</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 259 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627187,
          "date": "Thu 20 Nov 2025 18:19",
          "username": "gonzales",
          "content": "The company needs the AI system to be:<br> • Fair → no biased outcomes<br> • Explainable → transparent and understandable decisions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#261",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to identify groups for its customers based on the customers’ demographics and buying patterns.<br/><br/>Which algorithm should the company use to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#261",
          "answers": [
            {
              "choice": "<p>K-nearest neighbors (k-NN)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>K-means</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Decision tree</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Support vector machine</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 261 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627414,
          "date": "Fri 21 Nov 2025 17:43",
          "username": "gonzales",
          "content": "K-means clustering<br>It groups customers into segments based on similarity.<br>Without predefined labels",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1613499,
          "date": "Mon 29 Sep 2025 14:11",
          "username": "99bee24",
          "content": "• A. K-nearest neighbors (k-NN)<br>Supervised classification algorithm. Needs labeled data to classify new data points.<br>❌ Not suitable for pure grouping/clustering.<br> • B. K-means<br>Classic unsupervised clustering algorithm. It automatically groups data points (customers) into clusters based on similarity of features (like demographics, buying patterns).<br>✅ Perfect fit<br> • C. Decision tree<br>Supervised learning, used for classification or regression. Needs labeled training data.<br>❌ Not suitable.<br> • D. Support vector machine (SVM)<br>Primarily a supervised algorithm for classification or regression.<br>❌ Not suitable.<br>✅ Correct answer: B. K-means",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#262",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is working on a large language model (LLM) and noticed that the LLM’s outputs are not as diverse as expected.<br/><br/>Which parameter should the company adjust?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#262",
          "answers": [
            {
              "choice": "<p>Temperature</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Batch size</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Learning rate</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Optimizer type</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 262 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627415,
          "date": "Fri 21 Nov 2025 17:45",
          "username": "gonzales",
          "content": "Temperature controls the randomness or creativity of a language model’s output.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1613500,
          "date": "Mon 29 Sep 2025 14:13",
          "username": "99bee24",
          "content": "• A. Temperature<br>✔️ This controls the randomness of the model’s output during text generation.<br> • Higher temperature (e.g., 0.8–1.0) → more randomness and diversity.<br> • Lower temperature (e.g., 0.2–0.5) → more deterministic, conservative output.<br>→ Directly affects diversity.<br> • B. Batch size<br>Affects training efficiency and stability, not creativity of generated text.<br>❌ Irrelevant.<br> • C. Learning rate<br>Controls how fast the model updates weights during training. It’s about model convergence, not generation randomness.<br>❌ Not related.<br> • D. Optimizer type<br>Chooses the algorithm (e.g., Adam, SGD) for weight updates. Doesn’t control output diversity at inference.<br>❌ Not relevant.<br>✅ Correct answer: A. Temperature",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#263",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Nova Canvas model to generate images. The model generates images successfully.<br/><br/>The company needs to prevent the model from including specific items in the generated images.<br/><br/>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#263",
          "answers": [
            {
              "choice": "<p>Use a higher temperature value.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a more detailed prompt.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a negative prompt.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use another foundation model (FM).</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 263 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627416,
          "date": "Fri 21 Nov 2025 17:48",
          "username": "gonzales",
          "content": "Image models such as Amazon Nova Canvas, Stable Diffusion, and others support negative prompts, which allow you to explicitly specify what the model should NOT include in the generated image.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#264",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company uses ML techniques to build applications.<br/><br/>Select the correct ML technique from the following list for each task. Select each ML technique one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image27.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image28.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#264",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 264 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627418,
          "date": "Fri 21 Nov 2025 17:51",
          "username": "gonzales",
          "content": "This is a yes/no decision → two possible outcomes. -&gt; Binary classification<br>This is predicting a numeric value (a quantity). -&gt; Regression<br>There are multiple possible car models (more than two categories). -&gt; Multiclass classification",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#265",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to label training datasets by using human feedback to fine-tune a foundation model (FM). The company does not want to develop labeling applications or manage a labeling workforce.<br/><br/>Which AWS service or feature meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#265",
          "answers": [
            {
              "choice": "<p>Amazon SageMaker Data Wrangler</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Ground Truth Plus</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Transcribe</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Macie</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 265 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1699556,
          "date": "Mon 15 Dec 2025 14:46",
          "username": "ticoY_2025",
          "content": "B. Amazon SageMaker Ground Truth Plus is a fully managed data labeling service.<br>Why the other options are incorrect<br>A. Amazon SageMaker Data Wrangler<br>Used for data preparation and transformation, not human labeling.<br>C. Amazon Transcribe<br>Converts speech to text; it does not provide human labeling or model fine-tuning support.<br>D. Amazon Macie<br>Identifies and classifies sensitive data (PII) in S3; unrelated to dataset labeling.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1627421,
          "date": "Fri 21 Nov 2025 17:54",
          "username": "gonzales",
          "content": "SageMaker Ground Truth Plus is a fully managed data labeling service where:<br> • AWS manages the labeling workforce for you<br> • AWS provides and maintains the labeling UI / applications<br> • No need to build your own labeling tool<br> • No need to hire or manage annotators<br> • Supports human feedback datasets for fine-tuning foundation models<br>This exactly matches the requirement:<br>“The company does NOT want to develop labeling applications or manage a labeling workforce.”<br>Ground Truth Plus is specifically designed for this use case.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#266",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online media streaming company wants to give its customers the ability to perform natural language-based image search and filtering. The company needs a vector database that can help with similarity searches and nearest neighbor queries.<br/><br/>Which AWS service meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#266",
          "answers": [
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Personalize</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Polly</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon OpenSearch Service</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 266 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627422,
          "date": "Fri 21 Nov 2025 17:57",
          "username": "gonzales",
          "content": "Amazon OpenSearch Service supports Built-in vector database",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1613517,
          "date": "Mon 29 Sep 2025 15:34",
          "username": "99bee24",
          "content": "• A. Amazon Comprehend<br>→ Natural language processing (entity detection, sentiment, key phrases).<br>❌ Not a vector database.<br> • B. Amazon Personalize<br>→ Builds recommendation systems (like product recommendations).<br>❌ Not meant for vector similarity queries.<br> • C. Amazon Polly<br>→ Text-to-speech service.<br>❌ Not related.<br> • D. Amazon OpenSearch Service<br>→ Search and analytics engine with support for k-NN (k-nearest neighbor) vector search and similarity queries. Can index and query vector embeddings for images and natural language search.<br>✅ Exactly what’s needed<br>✅ Correct answer: D. Amazon OpenSearch Service",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1612858,
          "date": "Sat 27 Sep 2025 08:47",
          "username": "akash_it",
          "content": "D is the correct answer , for sure. personalize is a recommendation system , doesn't facilitate search or vector database",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#267",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company is building an AI solution by using Amazon SageMaker AI. The company wants to use SageMaker AI features to facilitate application development.<br/><br/>Select the correct SageMaker AI feature from the following list for each use case. Select each feature one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image29.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image30.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#267",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 267 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1699558,
          "date": "Mon 15 Dec 2025 14:59",
          "username": "ticoY_2025",
          "content": "Determine the most suitable model to use for a business case<br>- Model Cards<br>Prepare data through a low-code or no-code interface<br>- Data Wrangler<br>Identify biases or imbalances in the data<br>- Clarify",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#268",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a generative AI tool. The company will use internal documents to customize a foundation model (FM).<br/><br/>Which approach will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#268",
          "answers": [
            {
              "choice": "<p>Classification</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Continued pre-training</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Distillation</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Regression</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 268 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627423,
          "date": "Fri 21 Nov 2025 18:08",
          "username": "gonzales",
          "content": "A company is building a generative AI tool. The company will use internal documents to customize a foundation model (FM).<br>Which approach will meet this requirement?<br>A. Classification<br>B. Continued pre-training<br>C. Distillation<br>D. Regression",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#269",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is monitoring a predictive model by using Amazon SageMaker Model Monitor. The company notices data drift beyond a defined threshold. The company wants to mitigate a potentially adverse impact on the predictive model.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#269",
          "answers": [
            {
              "choice": "<p>Restart the SageMaker AI endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the monitoring sensitivity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Re-train the model with fresh data.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up experiments tracking.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 269 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1628828,
          "date": "Fri 28 Nov 2025 05:46",
          "username": "AWS_SkillBuilder",
          "content": "it means the input data no longer resembles the data the model was originally trained on. The correct mitigation is to retrain the model using updated and representative data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#270",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company uses a generative AI model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers.<br/><br/>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#270",
          "answers": [
            {
              "choice": "<p>Use a rule-based system instead of an ML model.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Apply explainable AI techniques to show customers which factors influenced the model’s decision.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Develop an interactive UI for customers and provide clear technical explanations about the system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the accuracy of the model to reduce the need for transparency.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 270 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627425,
          "date": "Fri 21 Nov 2025 18:16",
          "username": "gonzales",
          "content": "The company wants to make the decision-making process transparent.<br>This is exactly what Explainable AI (XAI) is for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1617761,
          "date": "Fri 17 Oct 2025 12:59",
          "username": "SorenBendixen",
          "content": "The correct answer is B. Apply explainable AI techniques to show customers which factors influenced the model's decision.<br>Explainable AI (XAI) directly addresses the transparency requirement by:<br>• Identifying which input factors (income, credit history, debt-to-income ratio) most influenced the credit limit decision<br>• Providing feature importance scores or explanations<br>• Showing customers why they received a specific credit limit<br>• Meeting regulatory requirements for financial decision transparency (like FCRA adverse action notices)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#271",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#271",
          "answers": [
            {
              "choice": "<p>Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Build a new model. Monitor model drift by using Amazon SageMaker Feature Store.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Build a new model. Monitor model drift by using Amazon SageMaker JumpStart.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 271 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627426,
          "date": "Fri 21 Nov 2025 18:18",
          "username": "gonzales",
          "content": "✔ SageMaker Model Monitor<br> • Automatically monitors model drift, data quality, concept drift, and bias drift<br> • Can send notifications (CloudWatch, SNS) when drift crosses a threshold<br> • Works on live endpoint traffic<br> • Exactly what is needed to detect and alert on degradation<br>✔ Retrain the model<br> • If drift is detected, retraining on new data restores model quality<br> • Prevents future degradation<br>This combination is what AWS recommends for production ML lifecycle.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1614954,
          "date": "Sat 04 Oct 2025 21:47",
          "username": "99bee24",
          "content": "lol of course b",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#272",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which option is an example of unsupervised learning?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#272",
          "answers": [
            {
              "choice": "<p>A model that groups customers based on their purchase history</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A model that classifies images as dogs or cats</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A model that predicts a house’s price based on various features</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A model that learns to play chess by using trial and error</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 272 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627427,
          "date": "Fri 21 Nov 2025 18:21",
          "username": "gonzales",
          "content": "Unsupervised learning is used when:<br> • There are no labels<br> • The goal is to find structure in the data<br> • The algorithm discovers patterns or groups on its own<br>Grouping customers by purchase history is a classic clustering problem, which is unsupervised learning.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#273",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is evaluating several large language models (LLMs) for a text summarization task. The company needs to select a metric to evaluate the quality of the summaries that the LLMs generate.<br/><br/>Which metric will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#273",
          "answers": [
            {
              "choice": "<p>Recall</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Area under the ROC curve (AUC)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recall-Oriented Understudy for Gisting Evaluation (ROUGE)</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Mean squared error (MSE)</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 273 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627428,
          "date": "Fri 21 Nov 2025 18:23",
          "username": "gonzales",
          "content": "ROUGE is the standard evaluation metric for text summarization quality.<br>It measures how much the generated summary overlaps with a human-written reference summary.<br>ROUGE checks:<br> • ROUGE-1 → unigram overlap<br> • ROUGE-2 → bigram overlap<br> • ROUGE-L → longest common subsequence<br>This makes it ideal for comparing:<br> • LLM-generated summaries<br> • Human gold-standard summaries<br> • Different model configurations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#274",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research group wants to test different generative AI models to create research papers. The research group has defined a prompt and needs a method to assess the models’ output. The research group wants to use a team of scientists to perform the output assessments.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#274",
          "answers": [
            {
              "choice": "<p>Use automatic evaluation on Amazon Personalize.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use content moderation on Amazon Rekognition.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use model evaluation on Amazon Bedrock.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use sentiment analysis on Amazon Comprehend.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 274 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1703357,
          "date": "Sat 03 Jan 2026 01:52",
          "username": "AlexD332",
          "content": "Amazon Bedrock model evaluation supports human evaluation workflows, allowing subject-matter experts to review and score model outputs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#275",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>An ecommerce company is developing a generative AI solution to create personalized product recommendations for its application users. The company wants to track how effectively the AI solution increases product sales and user engagement in the application.<br/><br/>Select the correct business metric from the following list for each business goal. Each business metric should be selected one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image31.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image32.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#275",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 275 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627429,
          "date": "Fri 21 Nov 2025 18:29",
          "username": "gonzales",
          "content": "✅ 1. Measure how engaging the product recommendations are to users<br>✔ Click-through rate (CTR)<br>CTR tells you how often users click on recommended items — the strongest measure of engagement with recommendations.<br>⸻<br>✅ 2. Determine the effect of the AI solution on the total value of user purchases<br>✔ Average order value (AOV)<br>AOV measures how much users spend per purchase, which directly evaluates the model’s impact on revenue and total purchase value.<br>⸻<br>✅ 3. Assess the AI solution’s ability to encourage users to return to the platform<br>✔ Retention rate<br>Retention rate measures how many users come back after using the product — perfect for evaluating long-term engagement.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#276",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner wants to evaluate ML models. The AI practitioner wants to provide explanations of model predictions to customers and stakeholders.<br/><br/>Which AWS service or feature will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#276",
          "answers": [
            {
              "choice": "<p>Amazon QuickSight</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Trusted Advisor</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Clarify</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 276 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#277",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Sentiment analysis is a subset of which broader field of AI?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#277",
          "answers": [
            {
              "choice": "<p>Computer vision</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Robotics</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Natural language processing (NLP)</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Time series forecasting</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 277 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627430,
          "date": "Fri 21 Nov 2025 18:31",
          "username": "gonzales",
          "content": "Sentiment analysis involves determining whether text expresses:<br> • Positive sentiment<br> • Negative sentiment<br> • Neutral sentiment<br>This requires understanding language, so it is part of NLP, the field of AI focused on processing and interpreting human language.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#278",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to set up private access to Amazon Bedrock APIs from the company’s AWS account. The company also wants to protect its data from internet exposure. Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#278",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudFront to restrict access to the company’s private content.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue to set up data encryption across the company’s data catalog.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lake Formation to manage centralized data governance and cross-account data sharing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS PrivateLink to configure a private connection between the company’s VPC and Amazon Bedrock.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 278 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627431,
          "date": "Fri 21 Nov 2025 18:32",
          "username": "gonzales",
          "content": "AWS PrivateLink allows your VPC to privately access AWS services without sending traffic over the public internet.<br>For Amazon Bedrock, PrivateLink provides:<br> • Private API access<br> • No public internet exposure<br> • Enforced traffic control through VPC endpoints<br> • Reduced attack surface<br> • Better security posture for sensitive data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#279",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company receives a large amount of unstructured user feedback in text format. The company wants to analyze the sentiment of the user feedback. Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#279",
          "answers": [
            {
              "choice": "<p>Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a recommendation engine algorithm to detect user sentiment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a time series algorithm to predict user sentiment based on past feedback.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 279 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627432,
          "date": "Fri 21 Nov 2025 18:34",
          "username": "gonzales",
          "content": "The company has:<br> • Unstructured text data<br> • A need to determine sentiment (positive, negative, neutral)<br>This is a classic natural language processing (NLP) task, and modern LLMs excel at:<br> • Understanding free-form text<br> • Identifying sentiment<br> • Handling nuance, sarcasm, mixed sentiment, etc.<br>LLMs are widely used for high-quality sentiment analysis.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1614040,
          "date": "Wed 01 Oct 2025 12:59",
          "username": "Desco1",
          "content": "https://docs.aws.amazon.com/comprehend/latest/dg/tutorial-reviews.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#280",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company wants to improve multiple ML models.<br/><br/>Select the correct technique from the following list of use cases. Each technique should be selected one time or not at all.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image33.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image34.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#280",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 280 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627434,
          "date": "Fri 21 Nov 2025 18:39",
          "username": "gonzales",
          "content": "✅ 1. Enhancing the capabilities of an LLM by using external sources<br>✔ Retrieval Augmented Generation (RAG)<br>Why?<br>RAG enhances an LLM without retraining by pulling in external knowledge (documents, databases, vector stores).<br>It is the only option that explicitly adds external sources.<br>⸻<br>✅ 2. Querying a model to generalize and make predictions on unseen tasks<br>✔ Zero-shot learning<br>Why?<br>Zero-shot means the model can handle tasks it was never trained on, using generalization.<br>This matches “unseen tasks.”<br>⸻<br>✅ 3. Querying a model with a limited amount of data for new tasks<br>✔ Few-shot learning<br>Why?<br>Few-shot uses a small number of examples within the prompt to teach the model a new task.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#281",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create an AI solution to generate images and descriptions for a product catalog. The company needs to select a foundation model (FM) for this solution.<br/><br/>The company must consider the output types of each FM.<br/><br/>Which FM characteristic is the company evaluating?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#281",
          "answers": [
            {
              "choice": "<p>Latency</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Model size</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Model customization</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modality</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 281 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1617552,
          "date": "Thu 16 Oct 2025 11:06",
          "username": "rhuanca",
          "content": "When a company is choosing a foundation model (FM) for an AI solution, it must consider what type of content or output the model can generate.That type of output is known as the model’s modality.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#282",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use an ML model to analyze customer reviews on social media. The model must determine if each review has a neutral, positive, or negative sentiment.<br/><br/>Which model evaluation strategy will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#282",
          "answers": [
            {
              "choice": "<p>Open-ended generation</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Text summarization</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Machine translation</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Classification</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 282 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627600,
          "date": "Sat 22 Nov 2025 08:53",
          "username": "gonzales",
          "content": "The problem is:<br> • Input: customer review text<br> • Output: neutral, positive, or negative<br>This is a sentiment analysis task.<br>Sentiment analysis is a type of multiclass classification, because the model must assign each text to one of several predefined categories.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#283",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>Select the correct AI term from the following list for each statement. Each AI term should be selected one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image35.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image36.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#283",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 283 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627603,
          "date": "Sat 22 Nov 2025 09:05",
          "username": "gonzales",
          "content": "Artificial Intelligence (AI) is the broad field focused on simulating human intelligence—problem solving, reasoning, planning, perception.<br>Machine Learning (ML) is a subset of AI that uses data-driven algorithms to make predictions or decisions without explicit programming.<br>Deep Learning is a subset of ML that uses multi-layer neural networks for tasks like image recognition, NLP, and pattern learning.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#284",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which option is an example of unsupervised learning?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#284",
          "answers": [
            {
              "choice": "<p>Clustering data points into groups based on their similarity</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Training a model to recognize images of animals</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Predicting the price of a house based on the house’s features</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generating human-like text based on a given prompt</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 284 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1628934,
          "date": "Fri 28 Nov 2025 16:42",
          "username": "AWS_SkillBuilder",
          "content": "Clustering data point is Unsupervised learning",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1627605,
          "date": "Sat 22 Nov 2025 09:09",
          "username": "gonzales",
          "content": "Unsupervised learning is used when:<br> • There are no labels<br> • The goal is to discover patterns or structure in the data<br> • The algorithm groups or organizes data on its own<br>Clustering (e.g., K-means) is the classic example of unsupervised learning.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#285",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online learning company with large volumes of education materials wants to use enterprise search.<br/><br/>Which AWS service meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#285",
          "answers": [
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Textract</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Kendra</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Personalize</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 285 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627606,
          "date": "Sat 22 Nov 2025 09:10",
          "username": "gonzales",
          "content": "Amazon Kendra is AWS’s fully managed enterprise search service.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#286",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates video content. The company wants to use generative AI to generate new creative content and to reduce video creation time.<br/><br/>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#286",
          "answers": [
            {
              "choice": "<p>Use the Amazon Titan Image Generator model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Nova Canvas model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Nova Reel model on Amazon Bedrock to generate videos.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Nova Pro model on Amazon Bedrock to generate videos.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 286 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627607,
          "date": "Sat 22 Nov 2025 09:21",
          "username": "gonzales",
          "content": "Amazon Nova Reel is specifically designed for video generation.<br>It supports:<br> • Direct AI-generated videos<br> • High-quality motion generation<br> • Creative video content creation<br> • Minimal operational overhead (no stitching or image sequencing required)<br>This makes it the MOST operationally efficient solution.<br>&gt;&gt; Nova Pro is a text and multimodal LLM, not a video generation model.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1623978,
          "date": "Fri 07 Nov 2025 15:24",
          "username": "ac79e0f",
          "content": "Why C? Amazon Nova Reel <br>It's a state-of-the-art video generation model. Using Amazon Nova Reel, you can produce short videos through text prompts and images, control visual style and pacing, and generate professional-quality video content for marketing, advertising, and entertainment.<br>Ref: https://aws.amazon.com/blogs/aws/introducing-amazon-nova-frontier-intelligence-and-industry-leading-price-performance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#287",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is training ML models on datasets. The datasets contain some classes that have more examples than other classes. The company wants to measure how well the model balances detecting and labeling the classes.<br/><br/>Which metric should the company use?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#287",
          "answers": [
            {
              "choice": "<p>Accuracy</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recall</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Precision</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F1 score</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 287 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627608,
          "date": "Sat 22 Nov 2025 09:24",
          "username": "gonzales",
          "content": "When the dataset is imbalanced (some classes have many more examples than others), metrics like accuracy become misleading.<br>The company wants a metric that measures how well the model:<br> • Detects each class (recall)<br> • Correctly labels each class (precision)<br>The F1 score is the harmonic mean of precision and recall.<br>This makes it the best metric for imbalanced classification problems.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#288",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is analyzing financial transaction records. The company categorizes the records as either personal or business. The company inserts the categories into the transaction records.<br/><br/>Which data preparation step does this describe?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#288",
          "answers": [
            {
              "choice": "<p>Data encoding</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data labeling</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Data normalization</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data balancing</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 288 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627610,
          "date": "Sat 22 Nov 2025 09:28",
          "username": "gonzales",
          "content": "The company is:<br> • Assigning categories (“personal” or “business”)<br> • Adding those labels to the transaction records<br>This is exactly what data labeling means—adding class labels or annotations to raw data so it can be used for supervised machine learning.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#289",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to extract key insights from large policy documents to increase employee efficiency.<br/><br/>Which generative AI strategy meets this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#289",
          "answers": [
            {
              "choice": "<p>Regression</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Clustering</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Summarization</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Classification</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 289 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627611,
          "date": "Sat 22 Nov 2025 09:30",
          "username": "gonzales",
          "content": "The company wants to:<br> • Extract key insights<br> • From large policy documents<br> • To help employees understand content faster<br>This is exactly what text summarization is used for.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#292",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to assess internet quality in remote areas of the world. The company needs to collect internet speed data and store the data in Amazon RDS. The company will analyze internet speed variation throughout each day. The company wants to create an AI model to predict potential internet disruptions.<br/><br/>Which type of data should the company collect for this task?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#292",
          "answers": [
            {
              "choice": "<p>Tabular data</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Text data</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Time series data</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Audio data</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 292 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627614,
          "date": "Sat 22 Nov 2025 09:55",
          "username": "gonzales",
          "content": "The company wants to:<br> • Collect internet speed measurements<br> • Track variation throughout each day<br> • Predict future disruptions<br>This is exactly what time series data is:<br> • Measurements over time<br> • Ordered chronologically<br> • Used for forecasting disruptions, anomalies, or trends<br>Internet speed sampled every minute/hour/day forms a time series.<br>&gt;&gt; Could store speed + timestamp in a table, but the analytical type required is time series.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#293",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build an ML model to detect abnormal patterns in sensor data. The company does not have labeled data for training.<br/><br/>Which ML method will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#293",
          "answers": [
            {
              "choice": "<p>Linear regression</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Classification</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Decision tree</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Autoencoders</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 293 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627615,
          "date": "Sat 22 Nov 2025 10:00",
          "username": "gonzales",
          "content": "The company wants to:<br> • Detect abnormal patterns (anomalies)<br> • In sensor data<br> • With no labeled data<br>This is a classic unsupervised anomaly detection problem.<br>Autoencoders are a neural-network-based unsupervised learning method commonly used for:<br> • Detecting anomalies<br> • Finding unusual patterns<br> • Handling unlabeled sensor data<br> • Learning normal behavior and flagging deviations<br>They work by:<br> 1. Learning to reconstruct normal data<br> 2. Producing high reconstruction error when input is abnormal",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:D"
        },
        {
          "id": 1617079,
          "date": "Tue 14 Oct 2025 01:59",
          "username": "Alabi",
          "content": "Autoencoders are ideal for this:<br>They learn to reconstruct normal data patterns.<br>When an input is abnormal, the reconstruction error is high — signaling an anomaly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#294",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Bedrock to implement a generative AI assistant on a website. The AI assistant helps customers with product recommendations and purchasing decisions.<br/><br/>The company wants to measure the direct impact of the AI assistant on sales performance.<br/><br/>Which metric will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#294",
          "answers": [
            {
              "choice": "<p>The conversion rate of customers who purchase products after AI assistant interactions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The number of customer interactions with the AI assistant</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Sentiment analysis scores from customer feedback after AI assistant interactions</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Natural language understanding accuracy rates</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 294 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1618176,
          "date": "Sun 19 Oct 2025 18:03",
          "username": "SnaxAttax",
          "content": "\"The company wants to measure the direct impact of the AI assistant on sales performance.\" <br>Focus on the word \"sales\". Sales = $$$, so A is the most obvious answer here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#295",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which AWS service or feature stores embeddings in a vector database for use with foundation models (FMs) and Retrieval Augmented Generation (RAG)?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#295",
          "answers": [
            {
              "choice": "<p>Amazon SageMaker Ground Truth</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon OpenSearch Service</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Transcribe</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Textract</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 295 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627617,
          "date": "Sat 22 Nov 2025 10:12",
          "username": "gonzales",
          "content": "openseach supports embeddings (multi dimensional vectors)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1617082,
          "date": "Tue 14 Oct 2025 02:04",
          "username": "Alabi",
          "content": "Correct answer: B. Amazon OpenSearch Service",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#296",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which scenario represents a practical use case for generative AI?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#296",
          "answers": [
            {
              "choice": "<p>Using an ML model to forecast product demand</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Employing a chatbot to provide human-like responses to customer queries in real time</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Using an analytics dashboard to track website traffic and user behavior</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implementing a rule-based recommendation engine to suggest products to customers</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 296 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627618,
          "date": "Sat 22 Nov 2025 10:13",
          "username": "gonzales",
          "content": "Generative AI excels at producing new content, such as:<br> • Human-like text<br> • Conversations<br> • Images<br> • Code<br> • Audio<br> • Summaries<br>A chatbot generating natural, conversational responses is a classic, practical generative AI use case.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#297",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Bedrock for a generative AI solution. The solution must integrate a service with vector database storage and vector search capabilities.<br/><br/>Which AWS service will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#297",
          "answers": [
            {
              "choice": "<p>Amazon DynamoDB</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon OpenSearch Service</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon ElastiCache</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Redshift</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 297 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627619,
          "date": "Sat 22 Nov 2025 10:31",
          "username": "gonzales",
          "content": "For a generative AI solution using vector embeddings, the company needs:<br> • Vector database storage<br> • k-nearest neighbor (k-NN) search<br> • Similarity search<br> • Embedding search for RAG workflows<br>Amazon OpenSearch Service provides all of these:<br>✔ Native vector search<br>✔ k-NN and ANN (HNSW, IVF) indexing<br>✔ Scalable vector storage<br>✔ Integration with RAG architectures and Amazon Bedrock",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1617084,
          "date": "Tue 14 Oct 2025 02:06",
          "username": "Alabi",
          "content": "Correct answer: B. Amazon OpenSearch Service",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#298",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media streaming platform wants to provide movie recommendations to users based on the users’ account history.<br/><br/>Which AWS service meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#298",
          "answers": [
            {
              "choice": "<p>Amazon Polly</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Transcribe</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Personalize</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 298 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627620,
          "date": "Sat 22 Nov 2025 10:32",
          "username": "gonzales",
          "content": "Amazon Personalize is AWS’s fully managed service for building real-time personalized recommendations.<br>It learns from:<br> • User history<br> • Browsing behavior<br> • Ratings<br> • Clicks<br> • Viewing patterns",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#299",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed an ML model to approve or reject loan applications. The model’s decision-making process must be transparent and explainable to comply with regulatory requirements. The company must document the decision-making process for audit purposes.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#299",
          "answers": [
            {
              "choice": "<p>Amazon Textract</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon SageMaker Model Card</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Cloud Formation</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Comprehend</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 299 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627621,
          "date": "Sat 22 Nov 2025 10:34",
          "username": "gonzales",
          "content": "SageMaker Model Cards are specifically designed for:<br> • Documenting how a model was built<br> • Recording intended use cases<br> • Describing model behavior and limitations<br> • Capturing explainability and fairness considerations<br> • Storing evaluation metrics<br> • Supporting regulatory and audit requirements<br>This is exactly what the company needs for a loan approval model, which is a highly regulated use case requiring transparency and documentation for audits.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#300",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company is building a generative AI application and is reviewing foundation models (FMs). The company needs to consider multiple FM characteristics.<br/><br/>Select the correct FM characteristic from the following list for each definition. Each FM characteristic should be selected one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image39.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image40.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#300",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 300 discussion - ExamTopics",
      "discusstion": []
    }
  ]
}