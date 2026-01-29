var AIF_C01_301_400 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#303",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a new generative AI chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks.<br/><br/>What can the company do to secure the chatbot with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#303",
          "answers": [
            {
              "choice": "<p>Fine-tune the FM to avoid harmful responses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Bedrock Guardrails content filters and denied topics.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Change the FM to a more secure FM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use chain-of-thought prompting to produce secure responses.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 303 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627627,
          "date": "Sat 22 Nov 2025 11:05",
          "username": "gonzales",
          "content": "Amazon Bedrock Guardrails provides built-in protection against:<br> • Prompt injection attacks<br> • Jailbreak prompts<br> • Harmful or restricted topics<br> • Unsafe user queries<br> • Unsafe model outputs<br>You can configure guardrails without retraining, without modifying the model, and without changing your application logic.<br>This makes it the fastest and easiest way to secure a Bedrock-based chatbot.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#304",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What does inference refer to in the context of AI?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#304",
          "answers": [
            {
              "choice": "<p>The process of creating new AI algorithms</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The use of a trained model to make predictions or decisions on unseen data</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The process of combining multiple AI models into one model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The method of collecting training data for AI systems</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 304 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627628,
          "date": "Sat 22 Nov 2025 11:06",
          "username": "gonzales",
          "content": "Inference is what happens after a model is trained.<br>During inference, the model:<br> • Takes new, unseen input<br> • Applies what it learned during training<br> • Produces predictions, classifications, or decisions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#305",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build an AI assistant to provide responses to user queries. The AI assistant must evaluate specific data sources, query external APIs, generate response options, and compare and prioritize response options.<br/><br/>Which Amazon Bedrock feature or resource will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#305",
          "answers": [
            {
              "choice": "<p>Prompt Management</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Response streaming</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Knowledge Bases</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Agents</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 305 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627629,
          "date": "Sat 22 Nov 2025 11:08",
          "username": "gonzales",
          "content": "Amazon Bedrock Agents are designed exactly for workflows where an AI assistant must:<br> • Look up specific data sources<br> • Query external APIs<br> • Perform multi-step reasoning<br> • Generate response options<br> • Evaluate and prioritize the best option<br> • Execute actions and return structured results",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#307",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a generative AI application on AWS. The application will help improve reading comprehension for students. The application must give students the ability to add illustrations to stories.<br/><br/>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#307",
          "answers": [
            {
              "choice": "<p>Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Polly to create an audiobook based on story texts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Rekognition to analyze image contents and detect text attributes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a standard prompt template. Use Amazon Q Business to illustrate stories.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 307 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1707093,
          "date": "Fri 16 Jan 2026 04:50",
          "username": "Bala1602",
          "content": "stable diffusion is for illustrations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        },
        {
          "id": 1627632,
          "date": "Sat 22 Nov 2025 11:15",
          "username": "gonzales",
          "content": "The application must:<br> • Improve reading comprehension<br> • Allow students to add illustrations to stories<br> • Use a generative AI model<br>Stable Diffusion 3.5 Large on Amazon Bedrock is specifically designed for:<br> • Text-to-image generation<br> • Creating high-quality illustrations<br> • Producing visuals from story descriptions",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#308",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company wants to analyze patient data. The data was gathered over the previous year to detect patterns in disease outbreaks. The company needs to create a trend analysis report for each month to present to public health officials. The company must provide insights into patient data from the most recent month of the current year.<br/><br/>Which inference method will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#308",
          "answers": [
            {
              "choice": "<p>Real-time inference</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Batch transform</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Serverless inference</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Asynchronous inference</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 308 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627633,
          "date": "Sat 22 Nov 2025 11:21",
          "username": "gonzales",
          "content": "The company needs to:<br> • Analyze large amounts of patient data<br> • Produce monthly trend reports<br> • Use past data (1 year) + current month<br> • Perform inference periodically, not in real time<br> • Do this cost-effectively<br>This matches batch inference",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1616938,
          "date": "Mon 13 Oct 2025 14:46",
          "username": "Alabi",
          "content": "The scenario describes analyzing large amounts of historical patient data (collected over the past year) to generate monthly trend reports — not real-time predictions.<br>This is a periodic, offline, and large-scale analysis task — exactly what Batch Transform in Amazon SageMaker is designed for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1612384,
          "date": "Thu 25 Sep 2025 18:04",
          "username": "ef42f94",
          "content": "С can be but it not most cost-effectively. So, I prefer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#309",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>Select and order the steps from the following list to correctly describe the ML lifecycle for a new custom model. Select each step one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image41.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image42.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#309",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 309 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627634,
          "date": "Sat 22 Nov 2025 11:25",
          "username": "gonzales",
          "content": "Define the business objective<br>Process the data<br>After defining the objective, you must:<br> • Collect data<br> • Clean data<br> • Transform and prepare data for training<br>This is the data engineering stage.<br>Develop and train the model<br>Deploy the model",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#310",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company acquires International Organization for Standardization (ISO) accreditation to manage AI risks and to use AI responsibly.<br/><br/>What does this accreditation reflect about the company?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#310",
          "answers": [
            {
              "choice": "<p>All members of the company are ISO certified.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All AI systems that the company uses are ISO certified.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All AI application team members are ISO certified.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The company’s development framework is ISO certified.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 310 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627635,
          "date": "Sat 22 Nov 2025 11:28",
          "username": "gonzales",
          "content": "ISO accreditation does not certify:<br> • individual employees<br> • specific AI systems<br> • team members<br>Instead, ISO certifications validate that the organization’s processes, governance, and development framework meet internationally recognized standards.<br>For AI, this typically means:<br> • The company follows responsible AI practices<br> • It has risk management controls in place<br> • It documents and monitors AI development properly<br> • Its overall AI development lifecycle aligns with ISO standards (e.g., ISO/IEC 42001 for AI management systems)<br>So the accreditation applies to the framework and processes, not people or specific ML models.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#311",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>Select the correct prompt engineering technique from the following list for each description. Select each prompt engineering technique one time or not at all.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image43.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image44.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#311",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 311 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627687,
          "date": "Sat 22 Nov 2025 16:21",
          "username": "gonzales",
          "content": "Few-shot prompting gives the model a few examples (2–5 typically) to teach it the pattern before asking it to answer.<br>Chain-of-thought prompting explicitly instructs the model to show its reasoning steps or explain how it reached the answer.<br>Zero-shot prompting gives no examples, relying only on the instruction.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#312",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an ML model to predict heart disease risk. The model uses patient data, such as age, cholesterol, blood pressure, smoking status, and exercise habits. The dataset includes a target value that indicates whether a patient has heart disease.<br/><br/>Which ML technique will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#312",
          "answers": [
            {
              "choice": "<p>Unsupervised learning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Supervised learning</p>",
              "correct": true,
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
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 312 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627689,
          "date": "Sat 22 Nov 2025 16:24",
          "username": "gonzales",
          "content": "The scenario includes:<br> • Input features: age, cholesterol, blood pressure, smoking status, exercise habits<br> • A target label: whether the patient has heart disease (yes/no)<br>When a dataset contains both features and a labeled outcome, the appropriate ML technique is supervised learning.<br>This is a classification problem because the model predicts a categorical label (heart disease vs. no heart disease).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1616939,
          "date": "Mon 13 Oct 2025 14:50",
          "username": "Alabi",
          "content": "The question states that the dataset includes a target value (whether or not a patient has heart disease).<br>This means the model has labeled data — each input (age, cholesterol, blood pressure, etc.) has a known output (heart disease: yes or no).<br>That’s the key characteristic of supervised learning.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#313",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company periodically updates its product database by manually uploading digital product guides. The product guides contain text and images. The company wants to automate this task by using generative AI.<br/><br/>Select and order the steps from the following list to automate the database update task by using generative AI. Select each step one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image45.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image46.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#313",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 313 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627693,
          "date": "Sat 22 Nov 2025 16:34",
          "username": "gonzales",
          "content": "This is always the first step—get the raw data into AWS so it can be processed.<br>After the files are in S3, the Nova multimodal model can extract structured information.<br>Once the model has processed and structured the content, the final step is writing it to the database.<br>1. Upload product guide files (text + images) to S3<br> 2. Feed them into a Nova multimodal model<br> 3. Extract usable structured data<br> 4. Insert into the product database",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#314",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has guidelines for data storage and deletion.<br/><br/>Which data governance strategy does this describe?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#314",
          "answers": [
            {
              "choice": "<p>Data de-identification</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data quality standards</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data retention</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Log storage</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 314 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1628861,
          "date": "Fri 28 Nov 2025 06:46",
          "username": "AMRIT475",
          "content": "Data Retention for data storage and deletion",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#315",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to apply numerical transformations to a set of images to transpose and rotate the images.<br/><br/>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#315",
          "answers": [
            {
              "choice": "<p>Create a deep neural network by using the images as input.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to perform the transformations.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Bedrock large language model (LLM) with a high temperature.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue Data Quality to make corrections to each image.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 315 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627697,
          "date": "Sat 22 Nov 2025 16:39",
          "username": "gonzales",
          "content": "Why Lambda is the MOST operationally efficient:<br> • No servers to manage<br> • Cheap and fast<br> • Ideal for lightweight image manipulation<br> • Can use Python libraries like Pillow or OpenCV<br> • Automatically scales",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1616940,
          "date": "Mon 13 Oct 2025 14:57",
          "username": "Alabi",
          "content": "The company only needs to apply simple numerical transformations — like transposing and rotating images — which are basic computational tasks, not machine learning or AI problems.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#316",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner is writing software code. The AI practitioner wants to quickly develop a test case and create documentation for the code.<br/><br/>Which solution will meet these requirements with the LEAST effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#316",
          "answers": [
            {
              "choice": "<p>Upload the code to an online coding assistant.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Develop an application to use foundation models (FMs).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Q Developer in an integrated development environment (IDE).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Research and write test cases. Then, create test cases and add documentation.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 316 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627698,
          "date": "Sat 22 Nov 2025 16:41",
          "username": "gonzales",
          "content": "Amazon Q Developer is designed exactly for this:<br> • It integrates into IDEs like VS Code and JetBrains.<br> • It can:<br> • Generate unit tests automatically<br> • Explain code<br> • Create documentation<br> • Fix bugs<br> • Refactor code<br> • Answer coding questions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#317",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a generative AI application to automatically generate product descriptions for an ecommerce website. The product descriptions must consist of paragraphs of text that are consistent in style and tone. The application must generate thousands of unique descriptions each day.<br/><br/>Which type of generative model will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#317",
          "answers": [
            {
              "choice": "<p>A variational autoencoder (VAE) model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A transformer-based model</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A diffusion model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A generative adversarial network (GAN) model</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 317 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627699,
          "date": "Sat 22 Nov 2025 16:47",
          "username": "gonzales",
          "content": "The task is to generate:<br> • Paragraphs of text<br> • With a consistent style and tone<br> • At large scale (thousands per day)<br>This is exactly what transformer-based models (like GPT, Llama, Claude, Titan, Nova Pro/Lite, etc.) are designed to do.<br>Transformers excel at:<br> • Natural language generation<br> • Long-form content<br> • Maintaining coherence, tone, and structure<br> • High-throughput text generation<br>They are the industry standard for generative text applications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1616963,
          "date": "Mon 13 Oct 2025 15:00",
          "username": "Alabi",
          "content": "This describes a system that needs to generate paragraphs of text that are consistent in style and tone — exactly what transformer-based models (like GPT, BERT, or T5) are designed for.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1612385,
          "date": "Thu 25 Sep 2025 18:30",
          "username": "ef42f94",
          "content": "Diffusion model is used for image generation, not for text. Transformer-based models can maintain style and tone and scale to generate thousands of unique descriptions per day",
          "upvote_count": "3",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#319",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to develop an interpretable ML model to assess the risk of loan applications.<br/><br/>Which type of ML model or algorithm will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#319",
          "answers": [
            {
              "choice": "<p>Deep learning model</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Logistic regression model</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>K-means algorithm</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Random cut forest algorithm</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 319 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627701,
          "date": "Sat 22 Nov 2025 16:57",
          "username": "gonzales",
          "content": "The company needs an interpretable model for loan risk assessment, which is a regulated domain that requires:<br> • Transparency<br> • Explainability<br> • Clear reasoning<br> • Ability to show how each feature (income, credit score, debt ratio, etc.) affects the prediction<br>Logistic regression is one of the most interpretable ML models because:<br> • Each feature has a clear, understandable weight<br> • You can explain exactly how inputs influence the prediction<br> • It produces probabilities (e.g., risk score = 0.78)<br> • Regulators accept it due to transparency and simplicity<br>This makes it the best fit when interpretability is required.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#320",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores customer personally identifiable information (PII) data. The company must store the PII data within the company's AWS Region.<br/><br/>Which aspect of governance does this describe?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#320",
          "answers": [
            {
              "choice": "<p>Data mining</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data residency</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Pre-training bias</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Geolocation routing</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 320 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627703,
          "date": "Sat 22 Nov 2025 16:58",
          "username": "gonzales",
          "content": "Data residency refers to the requirement that data must be stored within a specific geographic location or region, often due to:<br> • Privacy laws<br> • Regulatory compliance<br> • Internal company policy<br>The company’s requirement that PII must stay inside its AWS Region is exactly a data residency requirement.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#321",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to implement a generative AI solution to improve its marketing operations. The company wants to increase its revenue in the next 6 months.<br/><br/>Which approach will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#321",
          "answers": [
            {
              "choice": "<p>Immediately start training a custom FM by using the company's existing data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Conduct stakeholder interviews to refine use cases and set measurable goals.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a prebuilt AI assistant solution and measure its impact on customer satisfaction.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Analyze industry AI implementations and replicate the most successful features.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 321 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1699287,
          "date": "Sun 14 Dec 2025 07:15",
          "username": "iNai",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1627705,
          "date": "Sat 22 Nov 2025 16:59",
          "username": "gonzales",
          "content": "The company wants to:<br> • Implement generative AI<br> • Improve marketing operations<br> • Increase revenue in the next 6 months<br> • Choose an approach that is practical and actionable<br>Before adopting any AI solution, the MOST important first step is to:<br>✔ Understand the business needs<br>✔ Clarify the objectives<br>✔ Align stakeholders<br>✔ Define measurable success metrics (KPIs)<br>This ensures the AI solution actually supports revenue goals within the required timeframe.<br>This aligns with best practices in:<br> • Responsible AI<br> • AI project planning<br> • AWS generative AI design principles",
          "upvote_count": "4",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#322",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company wants to create a model to improve disease diagnostics by analyzing patient voices. The company has recorded hundreds of patient voices for this project.<br/><br/>The company is currently filtering voice recordings according to duration and language.<br/><br/>Which phase of the ML lifecycle describes the current project phase?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#322",
          "answers": [
            {
              "choice": "<p>Data collection</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data preprocessing</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Feature engineering</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Model training</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 322 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627707,
          "date": "Sat 22 Nov 2025 17:04",
          "username": "gonzales",
          "content": "Data preprocessing includes:<br> • Cleaning data<br> • Normalizing data<br> • Filtering unwanted samples<br> • Removing noise or invalid entries<br> • Selecting usable data based on criteria<br>This is exactly what the company is doing with the audio files.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer:B"
        }
      ]
    },
    {
      "question_id": "#323",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Bedrock to build an AI assistant. The AI assistant helps customers find relevant products by making suggestions. However, the AI assistant's responses are often generic and irrelevant. The company wants to use prompt engineering to improve the AI assistant's responses.<br/><br/>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#323",
          "answers": [
            {
              "choice": "<p>Use few-shot prompting to add domain-specific context and explicit instructions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use chain-of-thought prompting with hidden reasoning steps to ignore explicit domain instructions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the AI assistant's conversational style to use more formal language and include technical product specifications.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use zero-shot prompting to augment retrieval from a product database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 323 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627709,
          "date": "Sat 22 Nov 2025 17:07",
          "username": "gonzales",
          "content": "✔ Few-shot prompting solves this by:<br> • Providing domain-specific examples (e.g., “Given this user inquiry, suggest relevant products.”)<br> • Teaching the model the pattern of correct responses<br> • Anchoring the assistant to specific context (e.g., product category, features, user intent)<br>Few-shot prompting is the most effective prompt-engineering technique for improving quality, relevance, and domain alignment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#324",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a website for users to make travel reservations. The company wants an AI solution to help create consistent branding for hotels on the website.<br/><br/>The AI solution needs to generate hotel descriptions for the website in a consistent writing style.<br/><br/>Which AWS service will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#324",
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
              "choice": "<p>Amazon Rekognition</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Bedrock</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 324 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1627710,
          "date": "Sat 22 Nov 2025 17:09",
          "username": "gonzales",
          "content": "This requires a text generation foundation model (FM), which is exactly what Amazon Bedrock provides.<br>With Bedrock, you can use models like:<br> • Amazon Nova Pro<br> • Anthropic Claude<br> • Meta Llama<br> • Amazon Titan Text<br>These models can generate:<br> • Marketing descriptions<br> • Consistent branded content<br> • Large-scale text output<br>Perfect for a travel website writing hotel descriptions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:D"
        }
      ]
    },
    {
      "question_id": "#325",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a pre-trained large language model (LLM). The LLM must perform multiple tasks that require specific domain knowledge. The LLM does not have information about several technical topics in the domain. The company has unlabeled data that the company can use to fine-tune the model.<br/><br/>Which fine-tuning method will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#325",
          "answers": [
            {
              "choice": "<p>Full training</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Supervised fine-tuning</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Continued pre-training</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Retrieval Augmented Generation (RAG)</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 325 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1699288,
          "date": "Sun 14 Dec 2025 07:33",
          "username": "iNai",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        },
        {
          "id": 1629108,
          "date": "Sat 29 Nov 2025 19:41",
          "username": "AWS_SkillBuilder",
          "content": "Continued pre-training is used when:<br>You want to expand the model’s knowledge base.<br>You want the model to learn from unlabeled text.<br>You need to adapt the LLM to a specific technical or industry domain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:C"
        }
      ]
    },
    {
      "question_id": "#326",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to classify images of different objects based on custom features extracted from a dataset.<br/><br/>Which solution will meet this requirement with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#326",
          "answers": [
            {
              "choice": "<p>Use traditional ML algorithms with custom features extracted from the dataset.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a pre-trained deep learning model. Fine-tune the model on the dataset.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a generative adversarial network (GAN) model to classify the images.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a support vector machine (SVM) with manually engineered features for classification.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 326 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#327",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to customize Amazon Bedrock foundation models (FMs) to improve an application's performance. The company must prepare a training dataset for text-to-text model fine-tuning.<br/><br/>Which dataset format should the company use to train the models?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#327",
          "answers": [
            {
              "choice": "<p>A JSON file with labeled data</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A CSV file with unlabeled data</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A CSV file with tabular data</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A text file with unlabeled data</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 327 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#328",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>HOTSPOT<br/> -<br/><br/>A company wants to build generative AI applications by using Amazon Bedrock. The company wants to minimize development effort.<br/><br/>Select and order the model development techniques from the following list from the LEAST development effort to the MOST development effort. Each model development technique should be selected one time.<br/><br/><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image47.png\"/></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: <img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image48.png\"/></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#328",
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 328 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1702482,
          "date": "Mon 29 Dec 2025 18:06",
          "username": "ticoY_2025",
          "content": "Explanation<br>Prompt – Least effort<br>Uses existing foundation models as-is. No data preparation or training required—just prompt engineering.<br>RAG (Retrieval-Augmented Generation)<br>Requires setting up a data source (e.g., vector database, embeddings) but does not retrain the model.<br>Fine-tuning<br>Requires labeled datasets and a training job to adapt the model to specific tasks or styles.<br>Continued pre-training – Most effort<br>Involves training the model further on large, domain-specific corpora. This is the most resource- and effort-intensive approach.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1629109,
          "date": "Sat 29 Nov 2025 19:56",
          "username": "AWS_SkillBuilder",
          "content": "1. Prompt 2. RAG  3. Fine-tuning 4. Continued pre-training",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#329",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An airline company wants to use a generative AI model to convert a flight booking system from one coding language into another coding language. The company must select a model for this task.<br/><br/>Which criteria should the company use to select the correct generative AI model for this task?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#329",
          "answers": [
            {
              "choice": "<p>Syntax, semantic understanding, and code optimization capabilities</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Code generation speed and error handling capabilities</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ability to generate creative content</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Model size and resource requirements</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 329 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#330",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner is using Amazon Bedrock Prompt Management to create a reusable prompt. The prompt must be able to interact with external services by calling an external API.<br/><br/>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#330",
          "answers": [
            {
              "choice": "<p>Use special tokens.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a tools configuration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use prompt variables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a stop sequence.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 330 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#331",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon Q Business for its data. The company needs to ensure the security and privacy of the data.<br/><br/>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#331",
          "answers": [
            {
              "choice": "<p>Enable AWS Key Management Service (AWS KMS) keys for the Amazon Q Business Enterprise index.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up cross-account access to the Amazon Q index.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Inspector for authentication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allow public access to the Amazon Q index.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Identity and Access Management (IAM) for authentication.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 331 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1629110,
          "date": "Sat 29 Nov 2025 20:09",
          "username": "AWS_SkillBuilder",
          "content": "1. Data Protection (Encryption) &gt; Enable AWS KMS keys<br>2. Access Control (Authentication &amp; Authorization) &gt; Configure IAM for authentication",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:AE"
        }
      ]
    },
    {
      "question_id": "#332",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Comprehend to analyze customer feedback. A customer has several unique trained models. The company uses Comprehend to assign each model an endpoint. The company wants to automate a report on each endpoint that is not used for more than 15 days.<br/><br/>Which service will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#332",
          "answers": [
            {
              "choice": "<p>AWS Trusted Advisor</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon CloudWatch</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS CloudTrail</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Config</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 332 discussion - ExamTopics",
      "discusstion": [
        {
          "id": 1703368,
          "date": "Sat 03 Jan 2026 04:30",
          "username": "AlexD332",
          "content": "CloudWatch can:<br>Track endpoint activity over time<br>Identify endpoints with no usage for more than 15 days<br>Automate reports or trigger alerts using metrics, alarms, and EventBridge",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:B"
        },
        {
          "id": 1699292,
          "date": "Sun 14 Dec 2025 07:56",
          "username": "iNai",
          "content": "I think A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer:A"
        }
      ]
    },
    {
      "question_id": "#333",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to use a generative AI model to provide real-time service quotes to users.<br/><br/>Which criteria should the company use to select the correct model for this use case?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#333",
          "answers": [
            {
              "choice": "<p>Model size</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Training data quality</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>General-purpose use and high-powered GPU availability</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Model latency and optimized inference speed</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 333 discussion - ExamTopics",
      "discusstion": []
    },
    {
      "question_id": "#334",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AI practitioner must fine-tune an open source large language model (LLM) for text categorization. The dataset is already prepared.<br/><br/>Which solution will meet these requirements with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#334",
          "answers": [
            {
              "choice": "<p>Create a custom model training job in PartyRock on Amazon Bedrock.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker JumpStart to create a training job.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a custom script to run an Amazon SageMaker AI model training job.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Jupyter notebook on an Amazon EC2 instance. Use the notebook to train the model.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified AI Practitioner AIF-C01 topic 1 question 334 discussion - ExamTopics",
      "discusstion": []
    }
  ]
}