var DVA_C01_Part3 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#201",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying an application on Amazon EC2 instances that run in Account A.  The application needs to read data from an existing Amazon Kinesis data stream in Account B. <br><br>Which actions should the developer take to provide the application with access to the stream? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#201",
            "answers": [
              {
                "choice": "<p>A. Update the instance profile role in Account A with stream read permissions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role with stream read permissions in Account B. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a trust policy to the instance profile role and IAM role in Account B to allow the instance profile role to assume the IAM role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a trust policy to the instance profile role and IAM role in Account B to allow reads from the stream.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add a resource-based policy in Account B to allow read access from the instance profile role.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 201 discussion",
        "discusstion": [
          {
            "id": 761267,
            "date": "Thu 29 Dec 2022 17:42",
            "username": "Mark1000",
            "content": "In my opinion B and C too<br><br>Role in B Account to allow read from Kinesis and in trust policy AssumeRole for Account A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732693,
            "date": "Thu 01 Dec 2022 15:08",
            "username": "SoMaL69",
            "content": "In my opinion it should be B and C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 726582,
            "date": "Fri 25 Nov 2022 10:40",
            "username": "k1kavi1hamimelonk1kavi1",
            "content": "https://aws.amazon.com/blogs/architecture/field-notes-how-to-enable-cross-account-access-for-amazon-kinesis-data-streams-using-kinesis-client-library-2-x/After reading this article, it seems BC is the right answer.Yes. B & C looks correct",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 734075,
            "date": "Fri 02 Dec 2022 22:41",
            "username": "hamimelonk1kavi1",
            "content": "After reading this article, it seems BC is the right answer.Yes. B & C looks correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 734883,
            "date": "Sun 04 Dec 2022 07:40",
            "username": "k1kavi1",
            "content": "Yes. B & C looks correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726478,
            "date": "Fri 25 Nov 2022 08:51",
            "username": "michaldavidKapello10",
            "content": "To me this should be A and E?AE is the correct answer",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 754867,
            "date": "Sat 24 Dec 2022 13:53",
            "username": "Kapello10",
            "content": "AE is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#202",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is working on an AWS Lambda function that accesses Amazon DynamoDB.  The Lambda function must retrieve an item and update some of its attributes, or create the item if it does not exist. The Lambda function has access to the primary key.<br><br>Which IAM permissions should the developer request for the Lambda function to achieve this functionality?</p>",
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
                "choice": "<p>A. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. <br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 202 discussion",
        "discusstion": [
          {
            "id": 726589,
            "date": "Fri 25 Nov 2022 10:43",
            "username": "k1kavi1k1kavi1",
            "content": "Agreedhttps://www.examtopics.com/discussions/amazon/view/28500-exam-aws-certified-developer-associate-topic-1-question-216/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731687,
            "date": "Wed 30 Nov 2022 16:38",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28500-exam-aws-certified-developer-associate-topic-1-question-216/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726481,
            "date": "Fri 25 Nov 2022 08:56",
            "username": "michaldavid",
            "content": "Agree with D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#203",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CloudFormation templates to deploy AWS resources. The company needs to update one of its AWS CloudFormation stacks.<br><br>What can the company do to find out how the changes will impact the resources that are running?</p>",
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
                "choice": "<p>A. Investigate the change sets.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Investigate the stack policies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Investigate the Metadata section.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Investigate the Resources section.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 203 discussion",
        "discusstion": [
          {
            "id": 726594,
            "date": "Fri 25 Nov 2022 10:45",
            "username": "k1kavi1k1kavi1",
            "content": "I agreehttps://www.examtopics.com/discussions/amazon/view/68895-exam-aws-certified-developer-associate-topic-1-question-368/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 731692,
            "date": "Wed 30 Nov 2022 16:40",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/68895-exam-aws-certified-developer-associate-topic-1-question-368/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726482,
            "date": "Fri 25 Nov 2022 08:57",
            "username": "michaldavid",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725987,
            "date": "Thu 24 Nov 2022 16:12",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#204",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building an application integrating an Amazon API Gateway with an AWS Lambda function. When calling the API. the developer receives the following error:<br><br>Wed Nov 08 01:13:00 UTC 2017 : Method completed with status: 502<br><br>What should the developer do to resolve the error?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#204",
            "answers": [
              {
                "choice": "<p>A. Change the HTTP endpoint of the API to an HTTPS endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the format of the payload sent to the API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the format of the Lambda function response to the API call.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the authorization header in the API call to access the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 204 discussion",
        "discusstion": [
          {
            "id": 730247,
            "date": "Tue 29 Nov 2022 11:39",
            "username": "michaldavid",
            "content": "ccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726598,
            "date": "Fri 25 Nov 2022 10:47",
            "username": "k1kavi1k1kavi1",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/https://www.examtopics.com/discussions/amazon/view/51563-exam-aws-certified-developer-associate-topic-1-question-342/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731694,
            "date": "Wed 30 Nov 2022 16:42",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/51563-exam-aws-certified-developer-associate-topic-1-question-342/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#205",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company=E2=80=99s social media application stores image files in an Amazon S3 bucket. All the images are stored in S3 Standard storage. Users access images frequently during the first week after images are uploaded. Users rarely access images that were uploaded more than 1 week ago.<br><br>The company needs a solution to reduce the application=E2=80=99s storage cost. Users must be able to access all images in the same amount of time, regardless of when the images were uploaded.<br><br>Which solution will meet these requirements with the LEAST amount of effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#205",
            "answers": [
              {
                "choice": "<p>A. Modify the application to use S3 Intelligent-Tiering for all the images.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the application to use S3 One Zone-Infrequent Access (S3 One Zone-IA) for all the images.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Deep Archive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an S3 Lifecycle policy to move images that were uploaded more than 1 week ago to S3 Glacier Flexible Retrieval.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 205 discussion",
        "discusstion": [
          {
            "id": 764193,
            "date": "Tue 03 Jan 2023 03:52",
            "username": "braveheart22",
            "content": "AAAAA is the correct option.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 761286,
            "date": "Thu 29 Dec 2022 18:03",
            "username": "Mark1000",
            "content": "It seems be B option, same \\\"time to recover files\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 754908,
            "date": "Sat 24 Dec 2022 14:44",
            "username": "fabriciollf",
            "content": "https://aws.amazon.com/s3/storage-classes/intelligent-tiering/<br><br>Amazon S3 Intelligent-Tiering is the only cloud storage class that delivers automatic storage cost savings when data access patterns change, without performance impact or operational overhead.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 736393,
            "date": "Tue 06 Dec 2022 00:40",
            "username": "rrrrrrrrrr1rrrrrrrrrr1",
            "content": "Could be A tooCan't be C or D.  fastest glacier retrieveal is 5 mins",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 736394,
            "date": "Tue 06 Dec 2022 00:41",
            "username": "rrrrrrrrrr1",
            "content": "Can't be C or D.  fastest glacier retrieveal is 5 mins",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732696,
            "date": "Thu 01 Dec 2022 15:13",
            "username": "SoMaL69",
            "content": "One Zone-IA provide similar access speed as standard",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730250,
            "date": "Tue 29 Nov 2022 11:41",
            "username": "michaldavid",
            "content": "This can't be D as glacier flexi retrieval isn't as quick as standard AI. Hence why B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726615,
            "date": "Fri 25 Nov 2022 10:55",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/s3/storage-classes/glacier/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 725997,
            "date": "Thu 24 Nov 2022 16:20",
            "username": "kapil206001",
            "content": "B<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-infreq-data-access",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#206",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team is designing a mobile app that requires multi-factor authentication.<br><br>Which steps should be taken to achieve this? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#206",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Cognito to create a user pool and create users in the user pool.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Send multi-factor authentication text codes to users with the Amazon SNS Publish API call in the app code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable multi-factor authentication for the Amazon Cognito user pool.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS IAM to create IAM users.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Enable multi-factor authentication for the users created in AWS IAM.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 206 discussion",
        "discusstion": [
          {
            "id": 726619,
            "date": "Fri 25 Nov 2022 10:57",
            "username": "k1kavi1k1kavi1",
            "content": "I Agreehttps://www.examtopics.com/discussions/amazon/view/28349-exam-aws-certified-developer-associate-topic-1-question-296/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 731698,
            "date": "Wed 30 Nov 2022 16:46",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28349-exam-aws-certified-developer-associate-topic-1-question-296/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726515,
            "date": "Fri 25 Nov 2022 09:30",
            "username": "michaldavid",
            "content": "Correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#207",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodePipeline pipelines to deploy development Amazon EC2 instances for multiple teams. All the pipelines are using the same AWS CloudFormation template to deploy the EC2 instances and create dedicated CloudFormation stacks for each team. Each pipeline passes a parameter that is named TeamName to the CloudFormation stack to tag resources with the appropriate team=E2=80=99s name.<br><br>The company discovers that each team's usage of EC2 instances is not consistent with the type of EC2 instances that the teams are deploying. The company needs to allow the teams to deploy different types of EC2 instances.<br><br>Which solution will meet this requirement with the LEAST change to the pipelines?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#207",
            "answers": [
              {
                "choice": "<p>A. For each team, use a dedicated CloudFormation template that includes different types of EC2 instances. Update CodePipeline to use the dedicated template for each team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. For each team, use a dedicated CloudFormation template that includes an InstanceType parameter and a value that is specific to the team's requirement. Update CodePipeline to use the dedicated template for each team<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the CloudFormation template by creating an InstanceType parameter. Update CodePipeline to pass the InstanceType parameter value that is specific to the team's requirement.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the CloudFormation template by adding a map for the instance types to the Mappings section. Create a list of all the teams. Configure the required instance type for each team in the map.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 207 discussion",
        "discusstion": [
          {
            "id": 757904,
            "date": "Mon 26 Dec 2022 23:41",
            "username": "fabriciollf",
            "content": "D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 754893,
            "date": "Sat 24 Dec 2022 14:23",
            "username": "Kapello10",
            "content": "D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 736399,
            "date": "Tue 06 Dec 2022 00:45",
            "username": "rrrrrrrrrr1",
            "content": "its D ofcoures it d",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732713,
            "date": "Thu 01 Dec 2022 15:30",
            "username": "SoMaL69",
            "content": "Agreed with D.  It is about least changes to pipeline, not to the template",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728956,
            "date": "Mon 28 Nov 2022 11:05",
            "username": "JohnStanley",
            "content": "\\\"LEAST change to the pipeline\\\" , so using a mapping section within cloudformation template seems best",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726637,
            "date": "Fri 25 Nov 2022 11:13",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726522,
            "date": "Fri 25 Nov 2022 09:35",
            "username": "michaldavid",
            "content": "C agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726023,
            "date": "Thu 24 Nov 2022 16:48",
            "username": "saysamsuf",
            "content": "C because of this: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#208",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an application for a company. The application needs to read the file doc txt that is placed in the root folder of an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The company=E2=80=99s security team requires the principle of least privilege to be applied to the application=E2=80=99s IAM policy.<br><br>Which IAM policy statement will meet these security requirements?</p>",
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
                "choice": "<p>A. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 208 discussion",
        "discusstion": [
          {
            "id": 726640,
            "date": "Fri 25 Nov 2022 11:16",
            "username": "k1kavi1",
            "content": "A provides least privilege",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726606,
            "date": "Fri 25 Nov 2022 10:50",
            "username": "michaldavid",
            "content": "I'd go with A on this one",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#209",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has migrated an application to Amazon EC2 instances. Automatic scaling is working well for the application user interface. However, the process to deliver shipping requests to the company's warehouse staff is encountering issues. Duplicate shipping requests are arriving, and some requests are lost or arrive out of order.<br><br>The company must avoid duplicate shipping requests and must process the requests in the order that the requests arrive. Requests are never more than 250 KB in size and take 5-10 minutes to process. A developer needs to rearchitect the application to improve the reliability of the delivery and processing of the requests.<br><br>What should the developer do to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#209",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Kinesis Data Firehose delivery stream to process the requests. Create an Amazon Kinesis data stream. Modify the application to write the requests to the Kinesis data stream.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function to process the requests. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the Lambda function to the SNS topic. Modify the application to write the requests to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Set the SQS queue as an event source for the Lambda function. Modify the application to write the requests to the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function to process the requests. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the SQS queue as an event source for the Lambda function. Modify the application to write the requests to the SQS queue.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 209 discussion",
        "discusstion": [
          {
            "id": 747650,
            "date": "Fri 16 Dec 2022 23:21",
            "username": "Nosal",
            "content": "D is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726644,
            "date": "Fri 25 Nov 2022 11:20",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-message-order.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726623,
            "date": "Fri 25 Nov 2022 10:59",
            "username": "michaldavid",
            "content": "We need SQS FIFO for this",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#210",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team of developers must migrate an application running inside an AWS Elastic Beanstalk environment from a Classic Load Balancer to an Application Load Balancer.<br><br>Which steps should be taken to accomplish the task using the AWS Management Console?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#210",
            "answers": [
              {
                "choice": "<p>A. 1. Update the application code in the existing deployment.2. Select a new load balancer type before running the deployment3. Deploy the new version of the application code to the environment<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. 1. Create a new environment with the same configurations except for the load balancer type.2. Deploy the same application version as used in the original environment.3. Run the swap-environment-cnames action<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. 1. Clone the existing environment, changing the associated load balancer type.2. Deploy the same application version as used in the original environment.3. Run the swap-environment-cnames action<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. 1. Edit the environment definitions in the existing deployment.2. Change the associated load balancer type according to the requirements.3. Rebuild the environment with the new load balancer type.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 210 discussion",
        "discusstion": [
          {
            "id": 732723,
            "date": "Thu 01 Dec 2022 15:39",
            "username": "SoMaL69",
            "content": "https://repost.aws/questions/QUEemsrTM_TPG3r_HdoG08EQ/how-to-remove-or-change-a-load-balancer-type-with-elastic-beanstalk",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726650,
            "date": "Fri 25 Nov 2022 11:25",
            "username": "k1kavi1k1kavi1",
            "content": "Will need to create a new application to change the ELB typehttps://www.examtopics.com/discussions/amazon/view/6571-exam-aws-certified-developer-associate-topic-1-question-200/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731705,
            "date": "Wed 30 Nov 2022 16:54",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/6571-exam-aws-certified-developer-associate-topic-1-question-200/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#211",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>What does an Amazon SQS delay queue accomplish?</p>",
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
                "choice": "<p>A. Messages are hidden for a configurable amount of time when they are first added to the queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Messages are hidden for a configurable amount of time after they are consumed from the queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The consumer can poll the queue for a configurable amount of time before retrieving a message.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Messages cannot be deleted for a configurable amount of time after they are consumed from the queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 211 discussion",
        "discusstion": [
          {
            "id": 726725,
            "date": "Fri 25 Nov 2022 13:21",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.htmlhttps://www.examtopics.com/discussions/amazon/view/10222-exam-aws-certified-developer-associate-topic-1-question-121/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 731707,
            "date": "Wed 30 Nov 2022 16:55",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/10222-exam-aws-certified-developer-associate-topic-1-question-121/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#212",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores the photographs in an Amazon S3 bucket. The company wants to resize the photographs automatically after writing the photographs to the S3 bucket. The company creates an AWS Lambda function to resize the photographs.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Configure S3 Event Notifications to invoke the Lambda function<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an S3 Lifecycle rule to invoke the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure S3 Select on a schedule to invoke the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure S3 Storage Lens to invoke the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 212 discussion",
        "discusstion": [
          {
            "id": 762747,
            "date": "Sat 31 Dec 2022 18:35",
            "username": "by116549",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html<br>You can use Lambda to process event notifications from Amazon Simple Storage Service. Amazon S3 can send an event to a Lambda function when an object is created or deleted. You configure notification settings on a bucket, and grant Amazon S3 permission to invoke a function on the function's resource-based permissions policy.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726734,
            "date": "Fri 25 Nov 2022 13:27",
            "username": "michaldavid",
            "content": "Defo A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726726,
            "date": "Fri 25 Nov 2022 13:22",
            "username": "k1kavi1",
            "content": "Choosing A based on events",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726166,
            "date": "Thu 24 Nov 2022 21:15",
            "username": "saysamsuf",
            "content": "I will go with A based on event",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#213",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is automating a new application deployment with AWS Serverless Application Model (AWS SAM). The new application has one AWS Lambda function and one Amazon S3 bucket. The Lambda function must access the S3 bucket to only read objects.<br><br>How should the developer configure AWS SAM to grant the necessary read privilege to the S3 bucket?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#213",
            "answers": [
              {
                "choice": "<p>A. Reference a second Lambda authorizer function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a custom S3 bucket policy to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Simple Queue Service (SQS) topic for only S3 object reads Reference the topic in the template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the S3ReadPolicy template to the Lambda function's execution role.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 213 discussion",
        "discusstion": [
          {
            "id": 726747,
            "date": "Fri 25 Nov 2022 13:36",
            "username": "michaldavid",
            "content": "Lambda execution role is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726729,
            "date": "Fri 25 Nov 2022 13:25",
            "username": "k1kavi1k1kavi1k1kavi1",
            "content": "Agreedhttps://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-template-list.html#s3-read-policyhttps://www.examtopics.com/discussions/amazon/view/69365-exam-aws-certified-developer-associate-topic-1-question-391/",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726733,
            "date": "Fri 25 Nov 2022 13:26",
            "username": "k1kavi1k1kavi1",
            "content": "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-template-list.html#s3-read-policyhttps://www.examtopics.com/discussions/amazon/view/69365-exam-aws-certified-developer-associate-topic-1-question-391/",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 731710,
            "date": "Wed 30 Nov 2022 16:58",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/69365-exam-aws-certified-developer-associate-topic-1-question-391/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#214",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a web application that writes to an Amazon DynamoDB table. Application users frequently observe and report errors. The development team examines Amazon CloudWatch logs and frequently sees the following error:<br><br>400 Bad Request ProvisionedThroughputExceededException<br><br>What is the cause of this error?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#214",
            "answers": [
              {
                "choice": "<p>A. The application does not have the required permissions for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The item that the application is placing on the table exceeds the item size limit.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The development team has not allocated enough space for the table and its indexes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The development team has not allocated enough write capacity units (WCU) for the table and Its indexes.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 214 discussion",
        "discusstion": [
          {
            "id": 726755,
            "date": "Fri 25 Nov 2022 13:40",
            "username": "michaldavid",
            "content": "D seems correct<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726740,
            "date": "Fri 25 Nov 2022 13:31",
            "username": "k1kavi1",
            "content": "I agree",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#215",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's developer is building a static website to be deployed in Amazon S3 for a production environment. The website integrates with an Amazon Aurora PostgreSQL database by using an AWS Lambda function. The website that is deployed to production will use a Lambda alias that points to a specific version of the Lambda function.<br><br>The company must rotate the database credentials every 2 weeks. Lambda functions that the company deployed previously must be able to use the most recent credentials.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#215",
            "answers": [
              {
                "choice": "<p>A. Store the database credentials in AWS Secrets Manager. Turn on rotation. Write code in the Lambda function to retrieve the credentials from Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Include the database credentials as part of the Lambda function code. Update the credentials periodically and deploy the new Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Lambda environment variables. Update the environment variables when new credentials are available.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the database credentials in AWS Systems Manager Parameter Store Turn on rotation. Write code in the Lambda function to retrieve the credentials from Systems Manager Parameter Store.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 215 discussion",
        "discusstion": [
          {
            "id": 762789,
            "date": "Sat 31 Dec 2022 18:54",
            "username": "by116549",
            "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html<br>To implement password rotation lifecycles, use AWS Secrets Manager. You can rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle using Secrets Manager. For more information, see What is AWS Secrets Manager? in the AWS Secrets Manager User Guide.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 760637,
            "date": "Thu 29 Dec 2022 07:09",
            "username": "Karthickdata",
            "content": "Ans is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 754236,
            "date": "Fri 23 Dec 2022 14:14",
            "username": "speer",
            "content": "As explained by Michal David.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726756,
            "date": "Fri 25 Nov 2022 13:43",
            "username": "michaldavid",
            "content": "Parameter Store doesn't provide automatic rotation",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726749,
            "date": "Fri 25 Nov 2022 13:36",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726037,
            "date": "Thu 24 Nov 2022 17:24",
            "username": "kapil206001",
            "content": "A<br>To implement password rotation lifecycles, use AWS Secrets Manager. You can rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle using Secrets Manager<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#216",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application reads data from an Amazon DynamoDB table. Several times a day, for a period of 15 seconds, me application receives multiple ProvisionedThroughputExceeded errors.<br><br>How should this exception be handled?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#216",
            "answers": [
              {
                "choice": "<p>A. Create a new global secondary index for the table to help with the additional requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Retry the failed read requests with exponential backoff.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Immediately retry the failed read requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the DynamoDB \"UpdateItem\" API to increase the provisioned throughput capacity of the table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 216 discussion",
        "discusstion": [
          {
            "id": 764280,
            "date": "Tue 03 Jan 2023 08:08",
            "username": "braveheart22",
            "content": "Pls, can anyone explain why D is not the best option???",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726844,
            "date": "Fri 25 Nov 2022 15:28",
            "username": "michaldavid",
            "content": "B seems right to me",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726751,
            "date": "Fri 25 Nov 2022 13:37",
            "username": "k1kavi1k1kavi1",
            "content": "Agreedhttps://www.examtopics.com/discussions/amazon/view/5389-exam-aws-certified-developer-associate-topic-1-question-16/",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731713,
            "date": "Wed 30 Nov 2022 17:02",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/5389-exam-aws-certified-developer-associate-topic-1-question-16/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726042,
            "date": "Thu 24 Nov 2022 17:27",
            "username": "kapil206001",
            "content": "B<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#217",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its web application to AWS and leverage auto scaling to handle peak workloads. The solutions architect determined that the best metric for an auto scaling event is the number of concurrent users.<br><br>Based on this information, what should the developer use to auto scale based on concurrent users?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#217",
            "answers": [
              {
                "choice": "<p>A. An Amazon SNS topic to be invoked when a concurrent user threshold is met<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. An Amazon Cloudwatch NetworkIn metric<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon CloudFront to leverage AWS edge locations<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. A custom Amazon CloudWatch metric for concurrent users<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 217 discussion",
        "discusstion": [
          {
            "id": 726846,
            "date": "Fri 25 Nov 2022 15:31",
            "username": "michaldavid",
            "content": "Agree with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726754,
            "date": "Fri 25 Nov 2022 13:40",
            "username": "k1kavi1k1kavi1",
            "content": "Agreedhttps://www.examtopics.com/discussions/amazon/view/4289-exam-aws-certified-developer-associate-topic-1-question-26/",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731716,
            "date": "Wed 30 Nov 2022 17:04",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4289-exam-aws-certified-developer-associate-topic-1-question-26/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#218",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is managing a NoSQL database on-premises to host a critical component of an application, which is starting to have scaling issues. The company wants to migrate the application to Amazon DynamoDB with the following considerations:<br><br>- Optimize frequent queries<br>- Reduce read latencies<br>- Plan for frequent queries on certain key attributes of the table<br><br>Which solution would help achieve these objectives?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#218",
            "answers": [
              {
                "choice": "<p>A. Create global secondary indexes on keys that are frequently queried. Add the necessary attributes into the indexes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create local secondary indexes on keys that are frequently queried. DynamoDB will fetch needed attributes from the table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create DynamoDB global tables to speed up query responses. Use a scan to fetch data from the table<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Auto Scaling policy for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 218 discussion",
        "discusstion": [
          {
            "id": 726757,
            "date": "Fri 25 Nov 2022 13:47",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/29304-exam-aws-certified-developer-associate-topic-1-question-277/",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 743369,
            "date": "Mon 12 Dec 2022 23:05",
            "username": "fabriciollf",
            "content": "A is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734098,
            "date": "Fri 02 Dec 2022 23:33",
            "username": "hamimelon",
            "content": "A. <br><br>\\\"Global secondary index=E2=80=94An index with a partition key and a sort key that can be different from those on the base table. A global secondary index is considered \\\"global\\\" because queries on the index can span all of the data in the base table, across all partitions.<br><br>Local secondary index=E2=80=94An index that has the same partition key as the base table, but a different sort key. A local secondary index is \\\"local\\\" in the sense that every partition of a local secondary index is scoped to a base table partition that has the same partition key value. \\\"<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 731642,
            "date": "Wed 30 Nov 2022 16:03",
            "username": "SoMaL69",
            "content": "aaaaaa",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#219",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is storing sensitive data generated by an application in Amazon S3. The developer wants to encrypt the data at rest A company policy requires an audit trail of when the AWS Key Management Service (AWS KMS) key was used and by whom.<br><br>Which encryption option will meet these requirements?</p>",
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
                "choice": "<p>A. Server-side encryption with Amazon S3 managed keys (SSE-S3)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Server-side encryption with AWS KMS managed keys (SSE-KMS)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Server-side encryption with customer-provided keys (SSE-C)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Server-side encryption with self-managed keys<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 219 discussion",
        "discusstion": [
          {
            "id": 726853,
            "date": "Fri 25 Nov 2022 15:37",
            "username": "michaldavid",
            "content": "B is correct as KMS allows auditing",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726759,
            "date": "Fri 25 Nov 2022 13:50",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28801-exam-aws-certified-developer-associate-topic-1-question-217/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#220",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS Lambda function that Is running in a test environment is not working property. However, there is no error associated with the Lambda function in the Amazon CloudWatch logs for the account. The Lambda function's permissions do not include a resource-based policy. The Lambda function's execution role has properly configured trust relationships and has no permissions policies attached.<br><br>Which action should a developer take to allow logs for the Lambda function to appear in CloudWatch?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#220",
            "answers": [
              {
                "choice": "<p>A. Attach the AWSLambda8asicExecutionRole managed policy to the Lambda function's execution role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set the AWSLambdaBasicExecutionRole managed policy as the Lambda function's resource-based policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Attach the CloudWatchLambdaInsightsExecutionRolePolicy managed policy to the Lambda function's execution role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set the CloudWatchLambdaInsightsExecutionRolePolicy managed policy as the Lambda function's resource-based policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 220 discussion",
        "discusstion": [
          {
            "id": 726855,
            "date": "Fri 25 Nov 2022 15:41",
            "username": "michaldavid",
            "content": "A - AWSLambdaBasicExecutionRole grants permissions to upload logs to CloudWatch",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726762,
            "date": "Fri 25 Nov 2022 13:55",
            "username": "k1kavi1",
            "content": "I agree",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726056,
            "date": "Thu 24 Nov 2022 17:48",
            "username": "kapil206001",
            "content": "Sorry my bad , its A<br>AWSLambdaBasicExecutionRole grants permissions to upload logs to CloudWatch.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726050,
            "date": "Thu 24 Nov 2022 17:37",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#221",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's website runs on an Amazon EC2 instance and uses Auto Scaling to scale the environment during peak times. Website users across the world are experiencing high latency due to static content on the EC2 instance, even during non-peak hours.<br><br>Which combination of steps will resolve the latency issue? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#221",
            "answers": [
              {
                "choice": "<p>A. Double the Auto Scaling group's maximum number of servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Host the application code on AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Scale vertically by resizing the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon CloudFront distribution to cache the static content.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the application=E2=80=99s static content in Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 221 discussion",
        "discusstion": [
          {
            "id": 726883,
            "date": "Fri 25 Nov 2022 16:21",
            "username": "michaldavid",
            "content": "Agree with provided answers",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 726765,
            "date": "Fri 25 Nov 2022 13:58",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28047-exam-aws-certified-developer-associate-topic-1-question-218/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: DE"
          }
        ]
      },
      {
        "question_id": "#222",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application is experiencing performance issues based on increased demand. This increased demand is on read-only historical records pulled from an Amazon RDS-hosted database with custom views and queries. A developer must improve performance without changing the database structure.<br><br>Which approach will improve performance and MINIMIZE management overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#222",
            "answers": [
              {
                "choice": "<p>A. Deploy Amazon DynamoDB, move all the data, and point to DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy Amazon ElastiCache for Red is and cache the data for the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy Memcached on Amazon EC2 and cache the data for the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy Amazon DynamoDB Accelerator (DAX) on Amazon RDS to improve cache performance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 222 discussion",
        "discusstion": [
          {
            "id": 726887,
            "date": "Fri 25 Nov 2022 16:25",
            "username": "michaldavid",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726769,
            "date": "Fri 25 Nov 2022 14:01",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28851-exam-aws-certified-developer-associate-topic-1-question-265/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726391,
            "date": "Fri 25 Nov 2022 05:54",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/28851-exam-aws-certified-developer-associate-topic-1-question-265/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#223",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to deploy an application on AWS behind an Elastic Load Balancer. The application uses an HTTP/HTTPS listener and must access the client IP addresses.<br><br>Which load-balancing solution meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#223",
            "answers": [
              {
                "choice": "<p>A. Use an Application Load Balancer and the X-Forwarded-For headers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a Network Load Balancer (NLB). Enable proxy protocol support on the NLB and the target application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Application Load Balancer. Register the targets by the instance ID. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a Network Load Balancer and the X-Forwarded-For headers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 223 discussion",
        "discusstion": [
          {
            "id": 726771,
            "date": "Fri 25 Nov 2022 14:02",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/69344-exam-aws-certified-developer-associate-topic-1-question-376/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726393,
            "date": "Fri 25 Nov 2022 06:04",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/69344-exam-aws-certified-developer-associate-topic-1-question-376/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#224",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been configured to process these records.<br><br>In which order will these records be processed?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#224",
            "answers": [
              {
                "choice": "<p>A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first-in, first-out) method.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The developer can select FIFO (first-in, first-out), LIFO (last-in, first-out), random, or request specific record using the getRecords API.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 224 discussion",
        "discusstion": [
          {
            "id": 726774,
            "date": "Fri 25 Nov 2022 14:05",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/5413-exam-aws-certified-developer-associate-topic-1-question-43/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726699,
            "date": "Fri 25 Nov 2022 12:43",
            "username": "AKRAMPO",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726395,
            "date": "Fri 25 Nov 2022 06:07",
            "username": "kapil206001",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/5413-exam-aws-certified-developer-associate-topic-1-question-43/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#225",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using an AWS CodeCommit repository to store source code for an application. The developer is using an AWS CodePipeline pipeline to deploy the application. The pipeline does not start automatically and must be started manually when a deployment is needed.<br><br>The developer needs to configure the pipeline to start automatically.<br><br>Which solution meets this requirement with the LEAST delay?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#225",
            "answers": [
              {
                "choice": "<p>A. Create a webhook in the CodeCommit repository to directly call the CodePipeline API to start the pipeline.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to start the pipeline upon the detection of changes in the CodeCommit repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the pipeline to poll the CodeCommit repository for changes and to start automatically when changes are detected.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a CodeCommit trigger for an Amazon Simple Notification Service (Amazon SNS) topic. Configure the SNS topic to post to the CodePipeline API to start the pipeline.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 225 discussion",
        "discusstion": [
          {
            "id": 726892,
            "date": "Fri 25 Nov 2022 16:32",
            "username": "michaldavid",
            "content": "Should be B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726780,
            "date": "Fri 25 Nov 2022 14:09",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/devops/adding-custom-logic-to-aws-codepipeline-with-aws-lambda-and-amazon-cloudwatch-events/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726401,
            "date": "Fri 25 Nov 2022 06:23",
            "username": "kapil206001",
            "content": "B<br>Use event based fr least delay .<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/update-change-detection.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#226",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an IAM policy document that grants administrator access to AWS Key Management Service (AWS KMS) for a federated user. The federated IAM role name is FederatedIAMRole. The user name is KeyAdmin.<br><br>How should the developer set the principal in the KMS key policy to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#226",
            "answers": [
              {
                "choice": "<p>A. =E2=80=9CPrincipal=E2=80=9D: { =E2=80=9CAWS=E2=80=9D: =E2=80=9Carn:aws:sts::123456789012:role/FederatedIAMRole/KeyAdmin=E2=80=9D }<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. =E2=80=9CPrincipal=E2=80=9D: { =E2=80=9CAWS=E2=80=9D: =E2=80=9Carn:aws:sts::123456789012:user/FederatedIAMRole/KeyAdmin=E2=80=9D }<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. =E2=80=9CPrincipal=E2=80=9D: { =E2=80=9CAWS=E2=80=9D: =E2=80=9Carn:aws:sts::123456789012:user/KeyAdmin=E2=80=9D }<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. =E2=80=9CPrincipal=E2=80=9D: { =E2=80=9CAWS=E2=80=9D: =E2=80=9Carn:aws:sts::123456789012:assumed-role/FederatedIAMRole/KeyAdmin=E2=80=9D }<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 226 discussion",
        "discusstion": [
          {
            "id": 753787,
            "date": "Fri 23 Dec 2022 02:21",
            "username": "fabriciollf",
            "content": "\\\"Principal\\\": { \\\"AWS\\\": \\\"arn:aws:sts::AWS-account-ID:assumed-role/role-name/role-session-name\\\" }",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 752255,
            "date": "Wed 21 Dec 2022 13:05",
            "username": "HieuTT",
            "content": "\\\"Principal\\\": { \\\"AWS\\\": \\\"arn:aws:sts::AWS-account-ID:federated-user/user-name\\\" }",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728497,
            "date": "Sun 27 Nov 2022 18:53",
            "username": "lrom",
            "content": "I think D, this is federated user as denoted by prefix \\\"arn:aws:sts:\\\" present in all choice.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726905,
            "date": "Fri 25 Nov 2022 16:45",
            "username": "michaldavid",
            "content": "I believe it's C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726785,
            "date": "Fri 25 Nov 2022 14:15",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#227",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a multi-node Windows legacy application that runs on premises. The application uses a network shared folder as a centralized configuration repository to store configuration files in .xml format. The company is migrating the application to Amazon EC2 instances. As part of the migration to AWS, a developer must identify a solution that provides high availability for the repository.<br><br>Which solution will meet this requirement MOST cost-effectively?</p>",
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
                "choice": "<p>A. Mount an Amazon Elastic Block Store (Amazon EBS) volume onto one of the EC2 instances. Deploy a file system on the EBS volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy a micro EC2 instance with an instance store volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon S3 bucket to host the repository. Migrate the existing .xml files to the S3 bucket. Update the application code to use the AWS SDK to read and write configuration files from Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon S3 bucket to host the repository. Migrate the existing xml files to the S3 bucket. Mount the S3 bucket to the EC2 instances as a local volume. Update the application code to read and write configuration files from the disk.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 227 discussion",
        "discusstion": [
          {
            "id": 744676,
            "date": "Wed 14 Dec 2022 04:07",
            "username": "xicomynorxicomynor",
            "content": "I go with C.  Even though S3 can be mounted, it might be less cost effective depending on the API operations that the tool you use to mount the bucket will perform. But with C, if you only perform controlled GET and PUT API calls as this questions states then API option will be more cost effective.*SDK option will be more cost effective",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 744678,
            "date": "Wed 14 Dec 2022 04:08",
            "username": "xicomynor",
            "content": "*SDK option will be more cost effective",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733169,
            "date": "Thu 01 Dec 2022 23:44",
            "username": "SBoksh",
            "content": "Ok going with D then, was unsure about local volume but looks like it is ok. https://bluexp.netapp.com/blog/amazon-s3-as-a-file-system",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732748,
            "date": "Thu 01 Dec 2022 16:12",
            "username": "SoMaL69",
            "content": "I would go with D. <br>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731219,
            "date": "Wed 30 Nov 2022 09:10",
            "username": "SBoksh",
            "content": "Although It is possible to mount to S3, but I don't think it is wise to mount as local volume<br>local volumes are subject to the availability of the underlying node and are not suitable for all applications (https://kubernetes.io/docs/concepts/storage/volumes/)<br>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 730563,
            "date": "Tue 29 Nov 2022 16:34",
            "username": "michaldavid",
            "content": "You can definitely mount S3. I do it on daily basis. I believe the answer is D. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729902,
            "date": "Tue 29 Nov 2022 05:31",
            "username": "RyanDDDRyanDDD",
            "content": "C<br>You can mount S3 bucket as local volume.type - You can't mount S3",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 729903,
            "date": "Tue 29 Nov 2022 05:32",
            "username": "RyanDDD",
            "content": "type - You can't mount S3",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726791,
            "date": "Fri 25 Nov 2022 14:22",
            "username": "k1kavi1k1kavi1",
            "content": "C or DChoosing D<br>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 731732,
            "date": "Wed 30 Nov 2022 17:22",
            "username": "k1kavi1",
            "content": "Choosing D<br>https://aws.amazon.com/blogs/storage/mounting-amazon-s3-to-an-amazon-ec2-instance-using-a-private-connection-to-s3-file-gateway/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#228",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed an application on AWS Elastic Beanstalk. The company has configured the Auto Scaling group that is associated with the Elastic Beanstalk environment to have five Amazon EC2 instances. If the capacity is fewer than four EC2 instances during the deployment, application performance degrades. The company is using the all-at-once deployment policy.<br><br>What is the MOST cost-effective way to solve the deployment issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#228",
            "answers": [
              {
                "choice": "<p>A. Change the Auto Scaling group to six desired instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the deployment policy to traffic splitting. Specify an evaluation time of 1 hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the deployment policy to rolling with additional batch. Specify a batch size of 1.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the deployment policy to rolling. Specify a batch size of 2.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 228 discussion",
        "discusstion": [
          {
            "id": 747715,
            "date": "Sat 17 Dec 2022 02:52",
            "username": "Nosal",
            "content": "I'll go for C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735551,
            "date": "Mon 05 Dec 2022 01:47",
            "username": "hamimelon",
            "content": "Why not B? You don't even need to add additional batches.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 726794,
            "date": "Fri 25 Nov 2022 14:26",
            "username": "k1kavi1k1kavi1by116549",
            "content": "Going with COr is it B because of cost effectiveness ?Hi, if that were the case will traffic splitting not more expensive?<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br>Traffic-splitting deployments let you perform canary testing as part of your application deployment. In a traffic-splitting deployment, Elastic Beanstalk launches a full set of new instances just like during an immutable deployment. It then forwards a specified percentage of incoming client traffic to the new application version for a specified evaluation period. If the new instances stay healthy, Elastic Beanstalk forwards all traffic to them and terminates the old ones. If the new instances don't pass health checks, or if you choose to abort the deployment, Elastic Beanstalk moves traffic back to the old instances and terminates the new ones. There's never any service interruption.",
            "upvote_count": "211",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734221,
            "date": "Sat 03 Dec 2022 06:29",
            "username": "k1kavi1by116549",
            "content": "Or is it B because of cost effectiveness ?Hi, if that were the case will traffic splitting not more expensive?<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br>Traffic-splitting deployments let you perform canary testing as part of your application deployment. In a traffic-splitting deployment, Elastic Beanstalk launches a full set of new instances just like during an immutable deployment. It then forwards a specified percentage of incoming client traffic to the new application version for a specified evaluation period. If the new instances stay healthy, Elastic Beanstalk forwards all traffic to them and terminates the old ones. If the new instances don't pass health checks, or if you choose to abort the deployment, Elastic Beanstalk moves traffic back to the old instances and terminates the new ones. There's never any service interruption.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 762920,
            "date": "Sat 31 Dec 2022 21:11",
            "username": "by116549",
            "content": "Hi, if that were the case will traffic splitting not more expensive?<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br>Traffic-splitting deployments let you perform canary testing as part of your application deployment. In a traffic-splitting deployment, Elastic Beanstalk launches a full set of new instances just like during an immutable deployment. It then forwards a specified percentage of incoming client traffic to the new application version for a specified evaluation period. If the new instances stay healthy, Elastic Beanstalk forwards all traffic to them and terminates the old ones. If the new instances don't pass health checks, or if you choose to abort the deployment, Elastic Beanstalk moves traffic back to the old instances and terminates the new ones. There's never any service interruption.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#229",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer at a company needs to create a small application that makes the same API call once each day at a designated time. The company does not have infrastructure in the AWS Cloud yet, but the company wants to implement this functionality on AWS.<br><br>Which solution meets these requirements in the MOST operationally efficient manner?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#229",
            "answers": [
              {
                "choice": "<p>A. Use a Kubernetes cron job that runs on Amazon Elastic Kubernetes Service (Amazon EKS).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon Linux crontab scheduled job that runs on Amazon EC2.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an AWS Lambda function that is invoked by an Amazon EventBridge (Amazon CloudWatch Events) scheduled event.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Batch job that is submitted to an AWS Batch job queue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 229 discussion",
        "discusstion": [
          {
            "id": 726919,
            "date": "Fri 25 Nov 2022 16:58",
            "username": "michaldavid",
            "content": "Agree with C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726797,
            "date": "Fri 25 Nov 2022 14:30",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#230",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that generates large binary data outside of AWS. The company must encrypt the data before uploading the data to an Amazon S3 bucket.<br><br>Which solution will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#230",
            "answers": [
              {
                "choice": "<p>A. Use the AWS Key Management Service (AWS KMS) encrypt command in the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure server-side encryption on the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS Encryption SDK to perform client-side encryption of the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Specify the x-amz-server-side-encryption header when uploading the data to the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 230 discussion",
        "discusstion": [
          {
            "id": 726925,
            "date": "Fri 25 Nov 2022 17:01",
            "username": "michaldavid",
            "content": "I meant client side sorry",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 726921,
            "date": "Fri 25 Nov 2022 17:01",
            "username": "michaldavid",
            "content": "Server side encryption",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726798,
            "date": "Fri 25 Nov 2022 14:32",
            "username": "k1kavi1k1kavi1",
            "content": "client-side encryptionhttps://www.examtopics.com/discussions/amazon/view/53840-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726800,
            "date": "Fri 25 Nov 2022 14:34",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/53840-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#231",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer accesses AWS CodeCommit over SSH. The SSH keys configured to access AWS CodeCommit are tied to a user with the following permissions:<br><br><img src=\"https://img.examtopics.com/aws-certified-developer-associate/image17.png\"><br><br>The Developer needs to create/delete branches.<br><br>Which specific IAM permissions need to be added, based on the principle of least privilege?</p>",
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
                "choice": "<p>A. =E2=80=9Ccodecommit:CreateBranch=E2=80=9D=E2=80=9Ccodecommit:DeleteBranch=E2=80=9D<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. =E2=80=9Ccodecommit:Put*=E2=80=9D<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. =E2=80=9Ccodecommit:Update*=E2=80=9D<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. =E2=80=9Ccodecommit:*=E2=80=9D<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 231 discussion",
        "discusstion": [
          {
            "id": 732757,
            "date": "Thu 01 Dec 2022 16:18",
            "username": "SoMaL69",
            "content": "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-branches",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727281,
            "date": "Sat 26 Nov 2022 06:39",
            "username": "michaldavid",
            "content": "https://www.examtopics.com/discussions/amazon/view/4364-exam-aws-certified-developer-associate-topic-1-question-190/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726857,
            "date": "Fri 25 Nov 2022 15:43",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4364-exam-aws-certified-developer-associate-topic-1-question-190/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726472,
            "date": "Fri 25 Nov 2022 08:46",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/4364-exam-aws-certified-developer-associate-topic-1-question-190/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#232",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Where should an Elastic Beanstalk configuration file named healthcheckurl.config be placed in the application source bundle?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#232",
            "answers": [
              {
                "choice": "<p>A. In the root of the application<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the bin folder<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In healthcheckurl.config.ebextension under root<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the .ebextensions folder<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 232 discussion",
        "discusstion": [
          {
            "id": 727282,
            "date": "Sat 26 Nov 2022 06:40",
            "username": "michaldavid",
            "content": "https://www.examtopics.com/discussions/amazon/view/5406-exam-aws-certified-developer-associate-topic-1-question-35/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726859,
            "date": "Fri 25 Nov 2022 15:44",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/5406-exam-aws-certified-developer-associate-topic-1-question-35/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726477,
            "date": "Fri 25 Nov 2022 08:50",
            "username": "kapil206001",
            "content": "D<br>https://www.examtopics.com/discussions/amazon/view/5406-exam-aws-certified-developer-associate-topic-1-question-35/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#233",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a web application that allows users to sign in. The application will run on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances will run in an Auto Scaling group across multiple Availability Zones.<br><br>How can the developer ensure that users stay signed in when the Auto Scaling group is scaled down?</p>",
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
                "choice": "<p>A. Enable sticky sessions on the ALB target group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon DynamoDB table. Configure the application to use the DynamoDB table to store session state such as login status.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS Multi-Attach to attach the volume to all instances in the Auto Scaling group. Configure the application to use the volume to store session state such as login status.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable deregistration delay on the ALB target group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 233 discussion",
        "discusstion": [
          {
            "id": 745217,
            "date": "Wed 14 Dec 2022 16:33",
            "username": "fswklotto1",
            "content": "Vote for A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 742732,
            "date": "Mon 12 Dec 2022 12:52",
            "username": "fabriciollf",
            "content": "B.  EBS is not a good fit for session storage.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734296,
            "date": "Sat 03 Dec 2022 09:43",
            "username": "SBoksh",
            "content": "B, not sticky session, EBS is not for session storage",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731743,
            "date": "Wed 30 Nov 2022 17:32",
            "username": "k1kavi1k1kavi1",
            "content": "Choosing AWhen the Auto Scaling group is scaled down, sticky sessions wont work. B looks correct",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734886,
            "date": "Sun 04 Dec 2022 07:44",
            "username": "k1kavi1",
            "content": "When the Auto Scaling group is scaled down, sticky sessions wont work. B looks correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731675,
            "date": "Wed 30 Nov 2022 16:25",
            "username": "SoMaL69",
            "content": "I would stick with B. <br>Auto Scaling group is scaled down",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731087,
            "date": "Wed 30 Nov 2022 05:26",
            "username": "ubuntu1234",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/4249-exam-aws-certified-developer-associate-topic-1-question-130/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727283,
            "date": "Sat 26 Nov 2022 06:43",
            "username": "michaldavid",
            "content": "Sticky session is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726483,
            "date": "Fri 25 Nov 2022 08:58",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#234",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is troubleshooting a new AWS Lambda function. The function should run automatically each time a new object is uploaded to an Amazon S3 bucket. The function is supposed to read the object, make modifications, and overwrite the object with the new version. The developer finds that all calls failed within the function code.<br><br>Which of the following are possible reasons for this failure? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#234",
            "answers": [
              {
                "choice": "<p>A. The function resource policy does not allow access from Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The function execution role does not allow access from Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The function execution role does not allow access to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The S3 bucket policy does not allow access from the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. The S3 bucket policy does not allow access to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 234 discussion",
        "discusstion": [
          {
            "id": 763120,
            "date": "Sun 01 Jan 2023 10:15",
            "username": "by116549",
            "content": "Looks to be C and D:<br>https://repost.aws/knowledge-center/lambda-execution-role-s3-bucket<br><br>To give your Lambda function access to an Amazon S3 bucket in the same AWS account, do the following:<br>1.Create an AWS Identity and Access Management (IAM) role for the Lambda function that also grants access to the S3 bucket.<br>2.Configure the IAM role as the Lambda function's execution role.<br>3.Verify that the S3 bucket policy doesn't explicitly deny access to your Lambda function or its execution role.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731750,
            "date": "Wed 30 Nov 2022 17:35",
            "username": "k1kavi1",
            "content": "Choosing C&D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 727284,
            "date": "Sat 26 Nov 2022 06:48",
            "username": "michaldavid",
            "content": "Shouldn't this be C and D?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          }
        ]
      },
      {
        "question_id": "#235",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application is processing clickstream data using Amazon Kinesis. The clickstream data feed into Kinesis experiences periodic spikes. The PutRecords API call occasionally fails and the logs show that the failed call returns the response shown below:<br><br><img src=\"https://img.examtopics.com/aws-certified-developer-associate/image18.png\"><br><br>Which techniques will help mitigate this exception? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#235",
            "answers": [
              {
                "choice": "<p>A. Implement retries with exponential backoff.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a PutRecord API instead of PutRecords.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reduce the frequency and/or size of the requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon SNS instead of Kinesis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Reduce the number of KCL consumers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 235 discussion",
        "discusstion": [
          {
            "id": 727286,
            "date": "Sat 26 Nov 2022 06:50",
            "username": "michaldavid",
            "content": "https://www.examtopics.com/discussions/amazon/view/69142-exam-aws-certified-developer-associate-topic-1-question-370/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 726869,
            "date": "Fri 25 Nov 2022 15:58",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/69142-exam-aws-certified-developer-associate-topic-1-question-370/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 726498,
            "date": "Fri 25 Nov 2022 09:18",
            "username": "kapil206001",
            "content": "https://www.examtopics.com/discussions/amazon/view/69142-exam-aws-certified-developer-associate-topic-1-question-370/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#236",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Two containerized microservices are hosted on Amazon EC2 ECS. The first microservice reads an Amazon RDS Aurora database instance, and the second microservice reads an Amazon DynamoDB table.<br><br>How can each microservice be granted the minimum privileges?</p>",
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
                "choice": "<p>A. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in ECS agent configuration file. Run the first microservice with an IAM role for ECS tasks with read-only access for the Aurora database. Run the second microservice with an IAM role for ECS tasks with read-only access to DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set ECS_ENABLE_TASK_IAM_ROLE to false on EC2 instance boot in the ECS agent configuration file. Grant the instance profile role read-only access to the Aurora database and DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent configuration file. Run the first microservice with an IAM role for ECS tasks with read-only access for the Aurora database. Run the second microservice with an IAM role for ECS tasks with read-only access to DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set ECS_ENABLE_TASK_IAM_ROLE to true on EC2 instance boot in the ECS agent configuration file. Grant the instance profile role read-only access to the Aurora database and DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 236 discussion",
        "discusstion": [
          {
            "id": 727291,
            "date": "Sat 26 Nov 2022 06:54",
            "username": "michaldavid",
            "content": "Agree with C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726882,
            "date": "Fri 25 Nov 2022 16:21",
            "username": "k1kavi1k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/29085-exam-aws-certified-developer-associate-topic-1-question-291/https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 732219,
            "date": "Thu 01 Dec 2022 04:48",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 726501,
            "date": "Fri 25 Nov 2022 09:22",
            "username": "kapil206001",
            "content": "https://www.examtopics.com/discussions/amazon/view/29085-exam-aws-certified-developer-associate-topic-1-question-291/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#237",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a new serverless application for a company. Several other developers must collaborate on the code for this application, and the company expects frequent changes to the code. The developer needs to deploy the code from source control to AWS Lambda with the fewest number of manual steps.<br><br>Which strategy for the build and deployment should the developer use to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#237",
            "answers": [
              {
                "choice": "<p>A. Build the code locally, and then upload the code into the source control system. When a release is needed, run AWS CodePipeline to extract the uploaded build and deploy the resources.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS Serverless Application Model (AWS SAM) CLI to build and deploy the application from the developer's local machine with the latest version checked out locally.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CodeBuild and AWS CodePipeline to invoke builds and corresponding deployments when configured source controlled branches have pull requests merged into them<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the Lambda console to upload a .zip file of the application that is created by the AWS Serverless Application Model (AWS SAM) CLI build command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 237 discussion",
        "discusstion": [
          {
            "id": 743410,
            "date": "Tue 13 Dec 2022 00:22",
            "username": "fabriciollf",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734116,
            "date": "Sat 03 Dec 2022 00:35",
            "username": "hamimelon",
            "content": "C is automated. Also, in A, it says \\\"upload\\\", I don't know if it means pushing the code or literally upload it manually.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727292,
            "date": "Sat 26 Nov 2022 06:57",
            "username": "michaldavid",
            "content": "Torn between A and C but leaning towards C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726886,
            "date": "Fri 25 Nov 2022 16:24",
            "username": "k1kavi1",
            "content": "C - fewest number of manual steps",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#238",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using an AWS CodePipeline pipeline to provide continuous integration and continuous delivery (CI/CD) support for a Java application. The developer needs to update the pipeline to support the introduction of a new application dependency .jar file. The pipeline must start a build when a new version of the .jar file becomes available.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#238",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon S3 bucket to store the dependency .jar file. Publish the dependency .jar file to the S3 bucket. Use an Amazon Simple Notification Service (Amazon SNS) notification to start a CodePipeline pipeline build.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency jar file to the repository. Use an ECR source action to start a CodePipeline pipeline build.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Elastic Container Registry (Amazon ECR) private repository. Publish the dependency .jar file to the repository. Use an Amazon Simple Notification Service (Amazon SNS) notification to start a CodePipeline pipeline build.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS CodeArtifact repository. Publish the dependency .jar file to the repository. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to start a CodePipeline pipeline build.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 238 discussion",
        "discusstion": [
          {
            "id": 732221,
            "date": "Thu 01 Dec 2022 04:52",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727296,
            "date": "Sat 26 Nov 2022 07:00",
            "username": "michaldavid",
            "content": "This is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726514,
            "date": "Fri 25 Nov 2022 09:30",
            "username": "kapil206001",
            "content": "D<br>https://docs.aws.amazon.com/codeartifact/latest/ug/working-with-service-events.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#239",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing a serverless application that requires an AWS Lambda function to be invoked every 10 minutes.<br><br>What is an automated and serverless way to invoke the function?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#239",
            "answers": [
              {
                "choice": "<p>A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an environment variable named PERIOD for the Lambda function. Set the value to 600.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs on a regular schedule to invoke the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Simple Notification Service (Amazon SNS) topic that has a subscription to the Lambda function with a 600-second timer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 239 discussion",
        "discusstion": [
          {
            "id": 732222,
            "date": "Thu 01 Dec 2022 04:56",
            "username": "k1kavi1",
            "content": "I agree",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727297,
            "date": "Sat 26 Nov 2022 07:02",
            "username": "michaldavid",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726518,
            "date": "Fri 25 Nov 2022 09:32",
            "username": "kapil206001",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/10854-exam-aws-certified-developer-associate-topic-1-question-128/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#240",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating legacy internal applications to AWS. Leadership wants to rewrite the internal employee directory to use native AWS services A developer needs to create a solution for storing employee contact details and high-resolution photos for use with the new application.<br><br>Which solution will enable the search and retrieval of each employee's individual details and high-resolution photos using AWS APIs?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#240",
            "answers": [
              {
                "choice": "<p>A. Encode each employee s contact information and photos using Base64 Store the information in an Amazon DynamoDB table using a sort key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store each employee's contact information in an Amazon DynamoDB table along with the object keys for the photos stored in Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Cognito user pools to implement the employee directory in a fully managed software-as-a-service (SaaS) method.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store employee contact information in an Amazon RDS DB instance with the photos stored in Amazon Elastic File System (Amazon EFS).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 240 discussion",
        "discusstion": [
          {
            "id": 732225,
            "date": "Thu 01 Dec 2022 04:58",
            "username": "k1kavi1",
            "content": "Going with B",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731667,
            "date": "Wed 30 Nov 2022 16:19",
            "username": "fswklotto1",
            "content": "Agree with C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727300,
            "date": "Sat 26 Nov 2022 07:05",
            "username": "michaldavid",
            "content": "Agree with B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#241",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has three different environments: Development. QA, and Production. The company wants to deploy its code first in the Development environment, then QA, and then Production.<br><br>Which AWS service can be used to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#241",
            "answers": [
              {
                "choice": "<p>A. Use AWS CodeCommit to create multiple repositories to deploy the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodeBuild to create, configure, and deploy multiple build application projects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeDeploy to create multiple deployment groups.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 241 discussion",
        "discusstion": [
          {
            "id": 727304,
            "date": "Sat 26 Nov 2022 07:10",
            "username": "michaldavid",
            "content": "Correct answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726897,
            "date": "Fri 25 Nov 2022 16:36",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4357-exam-aws-certified-developer-associate-topic-1-question-155/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#242",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a template that uses AWS CloudFormation to deploy an application. The application is serverless and uses Amazon API Gateway. Amazon DynamoDB, and AWS Lambda.<br><br>Which AWS service or tool should the developer use to define serverless resources in YAML?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#242",
            "answers": [
              {
                "choice": "<p>A. CloudFormation serverless intrinsic functions<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Elastic Beanstalk<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Serverless Application Model (AWS SAM)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Cloud Development Kit (AWS CDK)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 242 discussion",
        "discusstion": [
          {
            "id": 727306,
            "date": "Sat 26 Nov 2022 07:11",
            "username": "michaldavid",
            "content": "C agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726898,
            "date": "Fri 25 Nov 2022 16:39",
            "username": "k1kavi1Oleg_gol",
            "content": "https://www.examtopics.com/discussions/amazon/view/8790-exam-aws-certified-developer-associate-topic-1-question-177/but in topic 242 - D",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 732789,
            "date": "Thu 01 Dec 2022 16:54",
            "username": "Oleg_gol",
            "content": "but in topic 242 - D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726537,
            "date": "Fri 25 Nov 2022 09:56",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/lambda/latest/dg/lambda-application-fundamentals.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#243",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application adds a processing date to each transaction that it receives. The application writes each transaction to an Amazon DynamoDB table by using the PutItem operation. Each transaction has a unique ID (transactionID). Sometimes the application receives transactions more than once.<br><br>A developer notices that duplicate transactions in DynamoDB have the latest processing date instead of the date when the transaction was first received. Duplicate records happen infrequently, and most of the transactions are unique.<br><br>What is the MOST cost-effective solution that the developer can implement to ensure that PutItem does not update an existing record?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#243",
            "answers": [
              {
                "choice": "<p>A. Call the GetItem operation first to confirm that the record does not exist. Then call PutItem.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable the TTL attribute on the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a conditional put by using the attribute_exists(transactionID) condition expression.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement a conditional put by using the attribute_not_exists(transactionID) condition expression.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 243 discussion",
        "discusstion": [
          {
            "id": 763320,
            "date": "Sun 01 Jan 2023 20:25",
            "username": "by116549",
            "content": "Seems like D as we do not want the entry to be overwritten:<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html<br><br>The PutItem operation overwrites an item with the same key (if it exists). If you want to avoid this, use a condition expression. This allows the write to proceed only if the item in question does not already have the same key.aws dynamodb put-item \\<br>--table-name ProductCatalog \\<br>--item file://item.json \\<br>--condition-expression \\\"attribute_not_exists(Id)\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727309,
            "date": "Sat 26 Nov 2022 07:14",
            "username": "michaldavid",
            "content": "This should be D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726900,
            "date": "Fri 25 Nov 2022 16:42",
            "username": "k1kavi1",
            "content": "Choosing D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#244",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a static, client-side rendered website that is powered by ReactJS. The code has no server-side generated components and does not need to run any programming languages on the server. However, the code serves static HTML, CSS, and JavaScript to the client on each request. The developer=E2=80=99s solution to host the website must maximize performance and cost-effectiveness.<br><br>Which combination of AWS services or resources should the developer use to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#244",
            "answers": [
              {
                "choice": "<p>A. Application Load Balancer and Amazon EC2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon API Gateway and AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon CloudFront and Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudFront and AWS Elastic Beanstalk<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 244 discussion",
        "discusstion": [
          {
            "id": 748491,
            "date": "Sun 18 Dec 2022 00:08",
            "username": "Nosal",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727311,
            "date": "Sat 26 Nov 2022 07:17",
            "username": "michaldavid",
            "content": "Easy C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726902,
            "date": "Fri 25 Nov 2022 16:43",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726554,
            "date": "Fri 25 Nov 2022 10:12",
            "username": "kapil206001",
            "content": "C<br>https://aws.amazon.com/blogs/compute/building-server-side-rendering-for-react-in-aws-lambda/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#245",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has written an application that runs on Amazon EC2 instances. The developer is adding functionality for the application to write objects to an Amazon S3 bucket.<br><br>Which policy must the developer modify to allow the instances to write these objects?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#245",
            "answers": [
              {
                "choice": "<p>A. The IAM policy that is attached to the EC2 instance profile role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The session policy that is applied to the EC2 instance role session.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The AWS Key Management Service (AWS KMS) key policy that is attached to the EC2 instance profile role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The Amazon VPC endpoint policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 245 discussion",
        "discusstion": [
          {
            "id": 727312,
            "date": "Sat 26 Nov 2022 07:18",
            "username": "michaldavid",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726904,
            "date": "Fri 25 Nov 2022 16:45",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#246",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer uses the Amazon S3 ListObjectsV2 API call to retrieve and list object keys from an S3 bucket. The list can contain thousands of keys, and the retrieval often returns more than the max-keys maximum value. The code must handle any number of returned results.<br><br>How can the developer modify the code to handle any number of returns?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#246",
            "answers": [
              {
                "choice": "<p>A. Set max-keys in the ListObjectsV2 API call to the expected number of returned objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set max-keys in the ListObjectsV2 API call to -1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run an S3 Select query to retrieve and list object keys from the bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. When applicable, repeat the ListObjectsV2 API call by using NextContinuationToken.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 246 discussion",
        "discusstion": [
          {
            "id": 732244,
            "date": "Thu 01 Dec 2022 05:34",
            "username": "k1kavi1",
            "content": "Choosing D - code must handle any number of returned results",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731683,
            "date": "Wed 30 Nov 2022 16:33",
            "username": "fswklotto1",
            "content": "Vote for D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728854,
            "date": "Mon 28 Nov 2022 08:40",
            "username": "lrom",
            "content": "It asks to \\\"to handle any number of returns\\\" , I think is D:<br>NextContinuationToken is sent when isTruncated is true, which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this NextContinuationToken.<br>https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727313,
            "date": "Sat 26 Nov 2022 07:20",
            "username": "michaldavid",
            "content": "max-keys sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726668,
            "date": "Fri 25 Nov 2022 11:39",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#247",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application that runs on Amazon EC2 instances in an Auto Scaling group The application data is stored in an Amazon DynamoDB table and records are constantly updated by all instances. An instance sometimes retrieves old data. The developer wants to correct this by making sure the reads are strongly consistent.<br><br>How can the developer accomplish this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#247",
            "answers": [
              {
                "choice": "<p>A. Set ConsistentRead to true when calling GetItem.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new DynamoDB Accelerator (DAX) table<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set Consistency to strong when calling UpdateTable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the GetShardIterator command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 247 discussion",
        "discusstion": [
          {
            "id": 763327,
            "date": "Sun 01 Jan 2023 20:48",
            "username": "by116549",
            "content": "Cannot be C as this refers to writing to the DB no reading from the DB<br><br>Cannot be D as this refers to Kinesis streams shards and there is no mention of Kinesis in the question:<br>A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.<br><br>DAX has nothing to do with making reads strong consistent<br><br>Left with A:<br>-\tConsistentRead<br>o\tDetermines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.<br>o\tStrongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with ConsistentRead set to true, you will receive a ValidationException.<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727314,
            "date": "Sat 26 Nov 2022 07:23",
            "username": "michaldavid",
            "content": "This is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726913,
            "date": "Fri 25 Nov 2022 16:53",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28854-exam-aws-certified-developer-associate-topic-1-question-270/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726674,
            "date": "Fri 25 Nov 2022 11:45",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/28854-exam-aws-certified-developer-associate-topic-1-question-270/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#248",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team sets up a project's file directory structure in AWS CodeCommit. The team plans to use AWS CodeBuild and AWS CodeDeploy. The team creates the necessary configuration files for CodeBuild and CodeDeploy. The team wants to name and place these files according to service defaults.<br><br>Where should the team place the CodeBuild and CodeDeploy files?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#248",
            "answers": [
              {
                "choice": "<p>A. A directory named \"aws\" under the route source directory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. A directory named \"deploy\" under the root source directory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. A directory named \"scripts\" under the root source directory<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The root of the source directory<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 248 discussion",
        "discusstion": [
          {
            "id": 727319,
            "date": "Sat 26 Nov 2022 07:26",
            "username": "michaldavid",
            "content": "appspec.yml and it must be placed in the root of the directory structure of an application's source code",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727315,
            "date": "Sat 26 Nov 2022 07:24",
            "username": "michaldavid",
            "content": "Going with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726915,
            "date": "Fri 25 Nov 2022 16:55",
            "username": "k1kavi1",
            "content": "Should be root of the source directory",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#249",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company must ensure that documents that are uploaded by users are securely stored in Amazon S3. The documents must be encrypted at rest in Amazon S3. The company wants to avoid client-side encryption and does not want to manage the security infrastructure. In addition, the company wants control over the keys that are used for encryption at rest.<br><br>Which solution for encryption keys should a developer use to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#249",
            "answers": [
              {
                "choice": "<p>A. Amazon S3 managed keys<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Application-level encryption with customer-provided encryption keys that are stored in an on-premises hardware security module (HSM)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Key Management Service (AWS KMS) customer managed keys<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. IAM access keys<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 249 discussion",
        "discusstion": [
          {
            "id": 727320,
            "date": "Sat 26 Nov 2022 07:27",
            "username": "michaldavid",
            "content": "Easy C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726918,
            "date": "Fri 25 Nov 2022 16:57",
            "username": "k1kavi1",
            "content": "C.  AWS Key Management Service (AWS KMS) customer managed keys",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726679,
            "date": "Fri 25 Nov 2022 11:57",
            "username": "kapil206001",
            "content": "C<br>AWS KMS with CMK",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#250",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In a move toward using microservices, a company's management team has asked all development teams to build their services so that API requests depend only on that service's data store. One team is building a Payments service which has its own database; the service needs data that originates in the Accounts database. Both are using Amazon DynamoDB. <br><br>What approach will result in the simplest, decoupled, and reliable method to get near-real time updates from the Accounts database?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#250",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Kinesis Data Firehose to deliver all changes from the Accounts database to the Payments database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 250 discussion",
        "discusstion": [
          {
            "id": 727321,
            "date": "Sat 26 Nov 2022 07:29",
            "username": "michaldavid",
            "content": "Agree with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726920,
            "date": "Fri 25 Nov 2022 17:00",
            "username": "k1kavi1",
            "content": "D.  Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 726680,
            "date": "Fri 25 Nov 2022 11:58",
            "username": "kapil206001",
            "content": "D<br>https://www.examtopics.com/discussions/amazon/view/10855-exam-aws-certified-developer-associate-topic-1-question-131/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#251",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software engineer developed an AWS Lambda function in Node.js to do some CPU-intensive data processing. With the default settings, the Lambda function takes about 5 minutes to complete.<br><br>Which approach should a developer take to increase the speed of completion?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#251",
            "answers": [
              {
                "choice": "<p>A. Instead of using Node.js. rewrite the Lambda function using Python.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Instead of packaging the libraries in the ZIP file with the function, move them to a Lambda layer and use the layer with the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Allocate the maximum available CPU units to the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the available memory to the function.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 251 discussion",
        "discusstion": [
          {
            "id": 734710,
            "date": "Sat 03 Dec 2022 22:48",
            "username": "DrCloud",
            "content": "Memory and computing power:<br>Memory is the principal lever available to Lambda developers for controlling the performance of a function.<br><br>The amount of memory also determines the amount of virtual CPU available to a function. Adding more memory proportionally increases the amount of CPU, increasing the overall computational power available. If a function is CPU-, network- or memory-bound, then changing the memory setting can dramatically improve its performance.<br><br>https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727331,
            "date": "Sat 26 Nov 2022 07:40",
            "username": "michaldavid",
            "content": "More CPU comes with increasing memory within Lambda function so D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726924,
            "date": "Fri 25 Nov 2022 17:01",
            "username": "k1kavi1",
            "content": "D.  Increase the available memory to the function.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726712,
            "date": "Fri 25 Nov 2022 13:08",
            "username": "kapil206001",
            "content": "D<br>https://www.examtopics.com/discussions/amazon/view/28322-exam-aws-certified-developer-associate-topic-1-question-231/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#252",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer must build a mobile application that allows users to read and write data from an Amazon DynamoDB table to store user state for each unique user. The solution needs to limit data access to allow users access only to their own data.<br><br>Which solution below is the most secure?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#252",
            "answers": [
              {
                "choice": "<p>A. Embed AWS access credentials into the application and create DynamoDB queries that limit user access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Cognito identity pools to assign unique identifiers and provide user access.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the DynamoDB table to allow public read and writes, then add client-side filtering.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a web portal for users to create an account on AWS Directory Service.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 252 discussion",
        "discusstion": [
          {
            "id": 734716,
            "date": "Sat 03 Dec 2022 22:57",
            "username": "DrCloud",
            "content": "Ask: \\\"most\\\" secure<br>https://aws.amazon.com/blogs/mobile/building-fine-grained-authorization-using-amazon-cognito-user-pools-groups/<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html#scenario-basic-user-pool",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727334,
            "date": "Sat 26 Nov 2022 07:43",
            "username": "michaldavid",
            "content": "This is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726927,
            "date": "Fri 25 Nov 2022 17:03",
            "username": "k1kavi1",
            "content": "B.  Use Amazon Cognito identity pools to assign unique identifiers and provide user access.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726715,
            "date": "Fri 25 Nov 2022 13:12",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/51566-exam-aws-certified-developer-associate-topic-1-question-344/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#253",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is developing an application that uses signed requests (Signature Version 4) to call other AWS services. The developer has created a canonical request, has created the string to sign, and has calculated signing information.<br><br>Which methods could the developer use to complete a signed request? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#253",
            "answers": [
              {
                "choice": "<p>A. Add the signature to an HTTP header that is named Authorization<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add the signature to a session cookie<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add the signature to an HTTP header that is named Authentication<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add the signature to a query string parameter that is named X-Amz-Signature<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add the signature to an HTTP header that is named WWW-Authenticate<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 253 discussion",
        "discusstion": [
          {
            "id": 727336,
            "date": "Sat 26 Nov 2022 07:45",
            "username": "michaldavid",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 726929,
            "date": "Fri 25 Nov 2022 17:06",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 726718,
            "date": "Fri 25 Nov 2022 13:15",
            "username": "kapil206001",
            "content": "A&D<br>https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#254",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an Amazon S3 bucket containing premier content that it intends to make available to only paid subscribers of its website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors.<br><br>How can the company limit the ability to download a premier content file in the S3 bucket to paid subscribers only?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#254",
            "answers": [
              {
                "choice": "<p>A. Apply a bucket policy that allows anonymous users to download the content from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a bucket policy that requires multi-factor authentication for requests to access the S3 bucket objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable server-side encryption on the S3 bucket for data protection against the non-paying website visitors.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 254 discussion",
        "discusstion": [
          {
            "id": 727337,
            "date": "Sat 26 Nov 2022 07:46",
            "username": "michaldavid",
            "content": "Easy B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726930,
            "date": "Fri 25 Nov 2022 17:08",
            "username": "k1kavi1",
            "content": "B.  Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726719,
            "date": "Fri 25 Nov 2022 13:16",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/10570-exam-aws-certified-developer-associate-topic-2-question-24/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#255",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application under development is required to store hundreds of video files. The data must be encrypted within the application prior to storage, with a unique key for each video file.<br><br>How should the Developer code the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#255",
            "answers": [
              {
                "choice": "<p>A. Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Upload the data to an S3 bucket using server side-encryption with an AWS KMS key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 255 discussion",
        "discusstion": [
          {
            "id": 727339,
            "date": "Sat 26 Nov 2022 07:48",
            "username": "michaldavid",
            "content": "C agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726932,
            "date": "Fri 25 Nov 2022 17:09",
            "username": "k1kavi1",
            "content": "C.  Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726721,
            "date": "Fri 25 Nov 2022 13:18",
            "username": "kapil206001",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/2634-exam-aws-certified-developer-associate-2018-topic-1-question/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#256",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An organization is storing large files in Amazon S3, and is writing a web application to display meta-data about the files to end-users. Based on the metadata a user selects an object to download. The organization needs a mechanism to index the files and provide single-digit millisecond latency retrieval for the metadata.<br><br>What AWS service should be used to accomplish this?</p>",
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
                "choice": "<p>A. Amazon DynamoDB<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon EC2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon RDS<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 256 discussion",
        "discusstion": [
          {
            "id": 727340,
            "date": "Sat 26 Nov 2022 07:50",
            "username": "michaldavid",
            "content": "KEY - single-digit millisecond latency retrieval",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727253,
            "date": "Sat 26 Nov 2022 05:20",
            "username": "k1kavi1",
            "content": "A.  Amazon DynamoDB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726730,
            "date": "Fri 25 Nov 2022 13:25",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/7227-exam-aws-certified-developer-associate-topic-1-question-113/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#257",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an application in AWS Lambda. To simplify testing and deployments, the developer needs the database connection string to be easily changed without modifying the Lambda code.<br><br>How can this requirement be met?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#257",
            "answers": [
              {
                "choice": "<p>A. Store the connection string as a secret in AWS Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the connection string in an IAM user account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the connection string in AWS KMS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the connection string as a Lambda layer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 257 discussion",
        "discusstion": [
          {
            "id": 727341,
            "date": "Sat 26 Nov 2022 07:52",
            "username": "michaldavid",
            "content": "You can use secret manager to store the variable",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727254,
            "date": "Sat 26 Nov 2022 05:24",
            "username": "k1kavi1",
            "content": "A.  Store the connection string as a secret in AWS Secrets Manager.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726735,
            "date": "Fri 25 Nov 2022 13:27",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/28268-exam-aws-certified-developer-associate-topic-1-question-248/",
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
        "question_text": "<p>A company has an AWS Lambda function that reads messages from an Amazon Simple Queue Service (Amazon SQS) queue by using the Amazon SQS API. The Lambda function is not processing all the messages successfully because of random failures of a third-party dependency. A developer needs to improve the reliability of the Lambda function so that the Lambda function will process each message successfully despite the failures of the third-party dependency.<br><br>Which solution will meet this requirement with the LEAST effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#258",
            "answers": [
              {
                "choice": "<p>A. Move the call to the third-party dependency into an exception handling block. Write the message back to the SQS queue if a failure in the third-party dependency is caught in the exception handler.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the code in the Lambda function to remove calls to the SQS SDK ReceiveMessage function. Configure the Lambda function to use the SQS queue as an event source. Set the maxReceiveCount value on the SQS queue's redrive policy to at least 5.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a second SQS queue to use as a dead-letter queue. Configure a redrive policy on the original SQS queue to send failed messages to the dead-letter queue. Modify the Lambda function to read messages from both queues.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a second SQS queue to use as a dead-letter queue. Move the call to the third-party dependency into an exception handling block. Write the message to the dead-letter queue if a failure in the third-party dependency is caught in the exception handler.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 258 discussion",
        "discusstion": [
          {
            "id": 763822,
            "date": "Mon 02 Jan 2023 16:53",
            "username": "by116549",
            "content": "Does C not look to be correct based on this resource:<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 757297,
            "date": "Mon 26 Dec 2022 10:19",
            "username": "almadeedo",
            "content": "Choosing B (even if it tolerates just a maximum number of failures equal to the selected maxReceiveCount value).<br>As regarding A, it seems strage the wording \\\"write back to the SQS queue\\\", even if this appears to be the only solution guarantiing the succesfull processing of \\\"each\\\" message (by the way, with this solution we can incurr in infinite loops for structural errors).<br>As regarding D, I was wondering how an immediate move to the DLQ after a single failure will encrease resiliency without using it as a source of the process (following this approach we will have just traces of all the failures in the DLQ but no increased resiliency).<br>As regarding C we're increasing resiliency to just two tries if we don't modify maxReceiveCount.<br><br>Can anybody argument on my above reasonings?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734165,
            "date": "Sat 03 Dec 2022 03:24",
            "username": "ubuntu1234",
            "content": "Changing to D, as we need to create a second SQS queue and link it to the original SQS queue to configure DLQ.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731080,
            "date": "Wed 30 Nov 2022 05:18",
            "username": "ubuntu1234",
            "content": "B. <br>https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html<br>If your function returns an error, or can't be invoked because it's at maximum concurrency, processing might succeed with additional attempts. To give messages a better chance to be processed before sending them to the dead-letter queue, set the maxReceiveCount on the source queue's redrive policy to at least 5.(C and D needs to create the DLQ in the same source queue, instead of creating a second queue, which makes them wrong choice)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727343,
            "date": "Sat 26 Nov 2022 07:55",
            "username": "michaldavid",
            "content": "Defo not A and B.  D makes more sense than C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727255,
            "date": "Sat 26 Nov 2022 05:27",
            "username": "k1kavi1",
            "content": "Use dead letter queue with exception handling",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#259",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building a new application that uses an Amazon DynamoDB table. The specification states that all items that are older than 48 hours must be removed.<br><br>Which solution will meet this requirement?</p>",
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
                "choice": "<p>A. Create a new attribute that has the Number data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new attribute that has the String data type. Add a local secondary index (LSI) for this attribute, and enable TTL with an expiration of 48 hours. In the application code, set the value of this attribute to the current timestamp for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new attribute that has the Number data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new attribute that has the String data type. Enable TTL on the DynamoDB table for this attribute. In the application code, set the value of this attribute to the current timestamp plus 48 hours for each new item that is being inserted.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 259 discussion",
        "discusstion": [
          {
            "id": 727346,
            "date": "Sat 26 Nov 2022 07:59",
            "username": "michaldavid",
            "content": "Going with C on this one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727256,
            "date": "Sat 26 Nov 2022 05:28",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726745,
            "date": "Fri 25 Nov 2022 13:35",
            "username": "kapil206001",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/69346-exam-aws-certified-developer-associate-topic-1-question-395/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#260",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing a web application in which new users will use their email addresses to create accounts. Millions of users are expected to sign up. The application will store attributes for each user.<br><br>Which AWS service or feature should the developer implement to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#260",
            "answers": [
              {
                "choice": "<p>A. Amazon Cognito user pools<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Mobile Hub User File Storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS AppSync<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Mobile Hub Cloud Logic<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 260 discussion",
        "discusstion": [
          {
            "id": 727348,
            "date": "Sat 26 Nov 2022 08:00",
            "username": "michaldavid",
            "content": "Cognito 100%",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727257,
            "date": "Sat 26 Nov 2022 05:30",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726750,
            "date": "Fri 25 Nov 2022 13:36",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/10491-exam-aws-certified-developer-associate-topic-1-question-102/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#261",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a software-as-a-service (SaaS) application in its on-premises data center. The application architecture uses a frontend Apache web server to support many customer-specific websites. The Apache web server routes traffic to a different set of servers based on the domain name that is specified in the host header of the initial request.<br><br>The company decides to move its architecture to AWS. A developer is moving the customer-specific backend servers onto Amazon EC2 instances. The developer must configure the EC2 instances in Auto Scaling groups for each customer and must register the instances in different target groups. The developer needs to replace the frontend Apache web server with an Elastic Load Balancing (ELB) load balancer. The developer also must forward queries for specific domain names to the appropriate target groups.<br><br>Which configuration on AWS will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#261",
            "answers": [
              {
                "choice": "<p>A. Use a Network Load Balancer and host-based routing to respective backend target groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a Network Load Balancer and path-based routing to respective backend target groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Application Load Balancer and host-based routing to respective backend target groups.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an Application Load Balancer and path-based routing to respective backend target groups.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 261 discussion",
        "discusstion": [
          {
            "id": 734749,
            "date": "Sun 04 Dec 2022 00:44",
            "username": "DrCloud",
            "content": "Given:<br>- routes traffic to a different set of servers based on the \\\"domain name\\\"<br>- must forward queries for specific \\\"domain names\\\"<br><br>Host-Based Routing:<br>You can create Application Load Balancer rules that route incoming traffic based on the \\\"domain name\\\" specified in the Host header. Requests to \\\"api.example.com\\\" can be sent to one target group, requests to \\\"mobile.example.com\\\" to another, and all others (by way of a default rule) can be sent to a third.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731803,
            "date": "Wed 30 Nov 2022 18:28",
            "username": "fswklotto1",
            "content": "Vote for C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727357,
            "date": "Sat 26 Nov 2022 08:16",
            "username": "michaldavid",
            "content": "This is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727258,
            "date": "Sat 26 Nov 2022 05:35",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/aws/new-host-based-routing-support-for-aws-application-load-balancers/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726807,
            "date": "Fri 25 Nov 2022 14:42",
            "username": "kapil206001",
            "content": "D<br>https://aws.amazon.com/premiumsupport/knowledge-center/elb-achieve-path-based-routing-alb/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#262",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS Lambda function that runs hourly, reads log files that are stored in Amazon S3, and forwards alerts to Amazon Simple Notification Service (Amazon SNS) topics based on content. A developer wants to add a custom metric to the Lambda function to track the number of alerts of each type for each run. The developer needs to log this information in Amazon CloudWatch in a metric that is named Lambda/AlertCounts.<br><br>How should the developer modify the Lambda function to meet this requirement with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#262",
            "answers": [
              {
                "choice": "<p>A. Add a print statement to standard out for each alert and the number of occurrences.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a call to the PutMetricData API operation. Pass an array for alerts and the number of occurrences in the Values and Counts fields with a namespace of =E2=80=9CLambda/AlertCounts=E2=80=9D. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a call to the PutMetricAlarm API operation. Pass an array of alerts in the metrics member with the namespace of =E2=80=9CLambda/AlertCounts=E2=80=9D. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a call to the PutDashboard API operation. Pass an array of alerts in the metrics member with the namespace of =E2=80=9CLambda/AlertCounts=E2=80=9D. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 262 discussion",
        "discusstion": [
          {
            "id": 734995,
            "date": "Sun 04 Dec 2022 11:32",
            "username": "SBokshSBoksh",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.htmlSorry I meant B",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734997,
            "date": "Sun 04 Dec 2022 11:32",
            "username": "SBoksh",
            "content": "Sorry I meant B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734759,
            "date": "Sun 04 Dec 2022 01:02",
            "username": "DrCloud",
            "content": "PutMetricData: Publishes \\\"metric data points\\\" to Amazon CloudWatch. CloudWatch associates the \\\"data points\\\" with the specified metric. > Ask: track \\\"number of alerts\\\"<br><br>PutMetricAlarm: Creates or updates an \\\"alarm\\\" and associates it with the specified metric, metric math expression, or anomaly detection model.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734146,
            "date": "Sat 03 Dec 2022 02:03",
            "username": "hamimelon",
            "content": "B.  Based on the links posted by other folks, both B and C sounds reasonable. But the question specifically said \\\"track the number of alerts of each type for each run\\\", so I go with B. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727359,
            "date": "Sat 26 Nov 2022 08:19",
            "username": "michaldavid",
            "content": "Going with C on this one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727259,
            "date": "Sat 26 Nov 2022 05:41",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726816,
            "date": "Fri 25 Nov 2022 14:53",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#263",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company deploys a photo-processing application to an Amazon EC2 instance The application needs to process each photo in less than 5 seconds. If processing takes longer than 5 seconds, the company's development team must receive a notification.<br><br>How can a developer implement the required time measurement and notification with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#263",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a CloudWatch alarm that is based on a static threshold of 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Each time a photo is processed, publish the processing time to the queue. Create an application to consume from the queue and to determine whether any values are more than 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon CloudWatch custom metric. Each time a photo is processed, publish the processing time as a metric value. Create a CloudWatch alarm that enters ALARM state if the average of values is greater than 5 seconds. Notify the development team by sending an Amazon Simple Email Service (Amazon SES) message.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Kinesis data stream. Each time a photo is processed, publish the processing time to the data stream. Create an Amazon CloudWatch alarm that enters ALARM state if any values are more than 5 seconds. Notify the development team by using an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 263 discussion",
        "discusstion": [
          {
            "id": 765096,
            "date": "Tue 03 Jan 2023 23:04",
            "username": "braveheart22",
            "content": "AAAA is the way.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727361,
            "date": "Sat 26 Nov 2022 08:20",
            "username": "michaldavid",
            "content": "AAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727260,
            "date": "Sat 26 Nov 2022 05:44",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#264",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is troubleshooting an Amazon API Gateway API. Clients are receiving HTTP 400 response errors when the clients try to access an endpoint of the API.<br><br>How can the developer determine the cause of these errors?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#264",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Kinesis Data Firehose delivery stream to receive API call logs from API Gateway. Configure Amazon CloudWatch Logs as the delivery stream=E2=80=99s destination.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Turn on AWS CloudTrail Insights and create a trail. Specify the Amazon Resource Name (ARN) of the trail for the stage of the API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Turn on AWS X-Ray for the API stage. Create an Amazon CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Turn on execution logging and access logging in Amazon CloudWatch Logs for the API stage Create a CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 264 discussion",
        "discusstion": [
          {
            "id": 734763,
            "date": "Sun 04 Dec 2022 01:29",
            "username": "DrCloud",
            "content": "Ask: error > \\\"cause\\\" for \\\"access an endpoint of the API\\\".<br>To help debug issues related to request execution or \\\"client access\\\" to your API, you can enable Amazon CloudWatch Logs to log API calls.<br>There are two types of API logging in CloudWatch: execution logging and access logging.<br><br>X-Ray is \\\"not needed\\\" here. Reason: we don't need \\\"end-to-end\\\" or \\\"travel-though\\\" (Ref: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html )",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 733627,
            "date": "Fri 02 Dec 2022 11:19",
            "username": "SoMaL69",
            "content": "Error code 400 means bad request.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html<br>The logged data includes errors or execution traces (such as request or response parameter values or payloads).",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732541,
            "date": "Thu 01 Dec 2022 12:37",
            "username": "SBoksh",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727362,
            "date": "Sat 26 Nov 2022 08:22",
            "username": "michaldavid",
            "content": "C for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727263,
            "date": "Sat 26 Nov 2022 05:48",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#265",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting an Amazon API Gateway REST API that calls a single AWS Lambda function. The function is infrequently invoked by multiple clients at the same time. The code performance is optimal, but the company wants to optimize the startup time of the function.<br><br>What can a developer do to optimize the initialization of the function?</p>",
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
                "choice": "<p>A. Enable API Gateway caching for the REST API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure provisioned concurrency for the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Lambda proxy integration for the REST API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure AWS Global Accelerator for the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 265 discussion",
        "discusstion": [
          {
            "id": 734768,
            "date": "Sun 04 Dec 2022 01:58",
            "username": "DrCloud",
            "content": "Reducing cold starts with Provisioned Concurrency<br>If you need predictable function start times for your workload, Provisioned Concurrency is the recommended solution to ensure the lowest possible latency. This feature keeps your functions initialized and warm, ready to respond in double-digit milliseconds at the scale you provision. Unlike on-demand Lambda functions, this means that all setup activities happen ahead of invocation, including running the initialization code.<br><br>https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727363,
            "date": "Sat 26 Nov 2022 08:24",
            "username": "michaldavid",
            "content": "Keep your Lambda function warm",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727266,
            "date": "Sat 26 Nov 2022 05:53",
            "username": "k1kavi1",
            "content": "B.  Configure provisioned concurrency for the Lambda function.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726824,
            "date": "Fri 25 Nov 2022 15:04",
            "username": "kapil206001",
            "content": "B<br>https://www.simform.com/blog/lambda-cold-starts/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#266",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer wants to expand an application to run in multiple AWS Regions. The developer wants to copy Amazon Machine Images (AMIs) with the latest changes and create a new application slack in the destination Region. According to company requirements, all AMIs must be encrypted in all Regions. However, not all the AMIs that the company uses are encrypted.<br><br>How can the developer expand the application to run in the destination Region while meeting the encryption requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#266",
            "answers": [
              {
                "choice": "<p>A. Create a new AMIs, and specify encryption parameters. Copy the encrypted AMIs to the destination Region. Delete the unencrypted AMIs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Key Management Service (AWS KMS) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Certificate Manager (ACM) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Copy the unencrypted AMIs to the destination Region. Enable encryption by default in the destination Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 266 discussion",
        "discusstion": [
          {
            "id": 727365,
            "date": "Sat 26 Nov 2022 08:26",
            "username": "michaldavid",
            "content": "Agree with B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727270,
            "date": "Sat 26 Nov 2022 06:04",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#267",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages a microservices application on Amazon EC2 instances. A developer has integrated the AWS X-Ray SDK with the application. The developer also has an IAM role that is associated with the EC2 instances. The role includes the AWSXRayDaemonWriteAccess managed IAM policy.<br><br>When the developer queries the X-Ray traces by using the GetServiceGraph API operation, no errors and no trace data are returned.<br><br>What could be the reason that no X-Ray trace data is being returned? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#267",
            "answers": [
              {
                "choice": "<p>A. The X-Ray daemon is not installed on each EC2 instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The GetServiceGraph API operation is providing a StartTime value and an EndTime value that are older than 30 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. X-Ray trace data is not available for querying for 30 minutes after it is captured.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The developer=E2=80=99s IAM policy contains the AWSXRayReadOnlyAccess managed policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. The GetServiceGraph API operation does not include an EndTime value.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 267 discussion",
        "discusstion": [
          {
            "id": 734781,
            "date": "Sun 04 Dec 2022 02:30",
            "username": "DrCloud",
            "content": "Given: \\\"SDK\\\"<br>Reason for \\\"A\\\":<br>The AWS X-Ray daemon is a software application that listens for traffic on UDP port 2000, gathers raw segment data, and relays it to the AWS X-Ray API. The daemon works in conjunction with the AWS X-Ray SDKs and must be running so that data sent by the SDKs can reach the X-Ray service.\\\"<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html<br><br>Reason for \\\"B\\\":<br>Q: How far back can I query the trace data? How long does X-Ray store trace data for?<br>X-Ray stores trace data for the last 30 days. This enables you to query trace data going back 30 days.<br>https://aws.amazon.com/xray/faqs/<br><br>Why \\\"C\\\" is \\\"not correct\\\":<br>Q: How long does it take for trace data to be available in X-Ray?<br>Trace data sent to X-Ray is generally available for retrieval and filtering within \\\"30 seconds\\\" of it being received by the service.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 732277,
            "date": "Thu 01 Dec 2022 06:20",
            "username": "k1kavi1",
            "content": "Going with A&B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 727367,
            "date": "Sat 26 Nov 2022 08:31",
            "username": "michaldavid",
            "content": "Defo A but then I'm unsure about the second answer. Any suggestions?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726877,
            "date": "Fri 25 Nov 2022 16:09",
            "username": "kapil206001",
            "content": "AB<br>https://www.amazonaws.cn/en/xray/faqs/",
            "upvote_count": "3",
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
        "question_text": "<p>A developer is trying to determine which IAM user is calling several AWS APIs from an application.<br><br>Which service would provide this information?</p>",
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
                "choice": "<p>A. AWS Config<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS CloudTrail<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon CloudWatch<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon VPC Flow Logs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 268 discussion",
        "discusstion": [
          {
            "id": 732278,
            "date": "Thu 01 Dec 2022 06:22",
            "username": "k1kavi1",
            "content": "B.  AWS CloudTrail",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727368,
            "date": "Sat 26 Nov 2022 08:33",
            "username": "michaldavid",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#269",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a cloud solution to analyze customer demographic data. The data includes personally identifiable information (PII) such as full names, street addresses, and financial records.<br><br>A developer is configuring a source Amazon DynamoDB table with a DynamoDB stream. The developer is writing an AWS Lambda function that will ingest the demographic data from the DynamoDB stream. perform analytics, and write results to a separate DynamoDB table. The application must log important AWS API workflow events for monitoring purposes, but the application must expose the PII.<br><br>Which combination of actions should the developer take to log the LARGEST amount of AWS API operational information without exposing the PII? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#269",
            "answers": [
              {
                "choice": "<p>A. Configure the DynamoDB stream to record KEYS_ONLY events.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the DynamoDB stream to record NEW_IMAGE events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Log the received event. Fetch the items from the source DynamoDB table. Log the response metadata from the API. Process and record the result in the separate DynamoDB table. Log the response metadata from the API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Log the received event. Fetch the items from the source DynamoDB table. Log the response from the API. Process and record the result in the separate DynamoDB table. Log the response metadata from the API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Fetch the items from the source DynamoDB table. Process the data and log workflow events without referring to the PII. Record the result in the separate DynamoDB table.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 269 discussion",
        "discusstion": [
          {
            "id": 735534,
            "date": "Mon 05 Dec 2022 01:11",
            "username": "SBoksh",
            "content": "Don't log any event anywhere without filtering PII",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 734156,
            "date": "Sat 03 Dec 2022 02:21",
            "username": "hamimelon",
            "content": "I think it's A&E. <br><br>\\\"KEYS_ONLY =E2=80=94 Only the key attributes of the modified item.\\\" You don't need to retrieve PII info this way.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 732282,
            "date": "Thu 01 Dec 2022 06:26",
            "username": "k1kavi1",
            "content": "Choosing C&E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          }
        ]
      },
      {
        "question_id": "#270",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CloudFormation to deploy a two-tier application. The application will use Amazon RDS as its backend database. The company wants a solution that will randomly generate the database password during deployment. The solution also must automatically rotate the database password without requiring changes to the application.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#270",
            "answers": [
              {
                "choice": "<p>A. Use an AWS Lambda function as a CloudFormation custom resource to generate and rotate the password.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an AWS Systems Manager Parameter Store resource with the SecureString data type to generate and rotate the password.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a cron daemon on the application=E2=80=99s host to generate and relate the password.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Secrets Manager resource to generate and rotate the password.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 270 discussion",
        "discusstion": [
          {
            "id": 734794,
            "date": "Sun 04 Dec 2022 03:04",
            "username": "DrCloud",
            "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_RDSsecret.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731447,
            "date": "Wed 30 Nov 2022 13:23",
            "username": "Rag_Lk",
            "content": "D is good",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727372,
            "date": "Sat 26 Nov 2022 08:36",
            "username": "michaldavid",
            "content": "Easy D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727274,
            "date": "Sat 26 Nov 2022 06:19",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/cloudformation.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#271",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a serverless microservice for an existing application that uses AWS Lambda functions and Amazon API Gateway. The microservice needs to automate an on-premises identity provider (IdP) that supports the OpenID Connect (OIDC) standard.<br><br>What should the company do to implement the API authorization mechanism with the LEAST operational overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#271",
            "answers": [
              {
                "choice": "<p>A. Use an API Gateway HTTP API to invoke the Lambda functions. Set the JSON Web Token (JWT) issuer as the public OIDC endpoint of the on-premises IdP.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an API Gateway HTTP API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the identity pool and the on-premises IdP. Set the identity pool as the JSON Web Token (JWT) issuer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an API Gateway REST API to invoke the Lambda functions. Configure the JSON Web Token (JWT) issuer to link to the on-premises IdP over the public internet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an API Gateway REST API to invoke the Lambda functions. Create an Amazon Cognito identity pool. Create a federation between the identity pool and the on-premises IdP. Set Amazon Cognito as the authorizer.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 271 discussion",
        "discusstion": [
          {
            "id": 727374,
            "date": "Sat 26 Nov 2022 08:38",
            "username": "michaldavid",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727278,
            "date": "Sat 26 Nov 2022 06:25",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#272",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A website allows users to upload photos to Amazon S3. An S3 event invokes an AWS Lambda function that uses the Amazon Rekognition DetectLabels operation to detect real-world objects within a photo. The website needs to store this data in a search index to allow users to quickly locate all photos associated with a label.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#272",
            "answers": [
              {
                "choice": "<p>A. Store username and label values as S3 object tags. Retrieve and index the objects based on the tag by calling the describe-tags API with the username and label value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store username and label values as S3 object metadata keys. Include the \"x-amz-meta-\" prefix for each key. Search by metadata to find all the objects that share the username and label value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB table. Create a global secondary index with the username as the partition key and the label as the sort key. Call the QueryItem API on the index to find all the objects that share the username and label value<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Insert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index. Define the username as the partition key. Define the label as the sort key. Call the QueryItem API on the index to find all the objects that share the username and label value.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 272 discussion",
        "discusstion": [
          {
            "id": 745599,
            "date": "Thu 15 Dec 2022 02:29",
            "username": "BelloMio",
            "content": "How can it be C if the QueryItem API does not exist.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734164,
            "date": "Sat 03 Dec 2022 03:21",
            "username": "ubuntu1234fe2fe2",
            "content": "B. <br>Technically C seems correct, but if you search for QueryItem API for DynamoDB, you find nothing, only Query API, is found, so eventually going for B , by the process of elimination for C and D.  Please correct me if you find something on QueryItem API documentation?<br>https://awscli.amazonaws.com/v2/documentation/api/latest/reference/dynamodb/query.htmlit is not possible to search S3 objects by their metadata. So, option B is not correct.\\\"\\\"\\\" With Amazon S3=E2=80=99s native search capabilities, users are limited only to searching the name of the object. Most people however, want to search by many things in addition to the name of the object. Specifically, they would like to be able to search against metadata they store with the object. Currently, this is not possible without some kind of outside system or custom code. In addition to search, many cloud customers are interested in the ability to use multiple storage providers.\\\"\\\"\\\"<br><br>https://storageswiss.com/2017/07/18/search-an-amazon-s3-bucket-scality/",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 760400,
            "date": "Wed 28 Dec 2022 23:47",
            "username": "fe2",
            "content": "it is not possible to search S3 objects by their metadata. So, option B is not correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 760401,
            "date": "Wed 28 Dec 2022 23:48",
            "username": "fe2",
            "content": "\\\"\\\"\\\" With Amazon S3=E2=80=99s native search capabilities, users are limited only to searching the name of the object. Most people however, want to search by many things in addition to the name of the object. Specifically, they would like to be able to search against metadata they store with the object. Currently, this is not possible without some kind of outside system or custom code. In addition to search, many cloud customers are interested in the ability to use multiple storage providers.\\\"\\\"\\\"<br><br>https://storageswiss.com/2017/07/18/search-an-amazon-s3-bucket-scality/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732285,
            "date": "Thu 01 Dec 2022 06:35",
            "username": "k1kavi1hamimelonby116549",
            "content": "AgreedWhat's the diff between C and D?With C it is creating the secondary global index with \\\"username\\\" as the partition key and the \\\"label\\\" as the the sort key.<br><br>In D it states \\\"D. \tInsert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index.\\\" I think you need to create the table first and then the GSI..... Please correct me if I am wrong.",
            "upvote_count": "321",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735621,
            "date": "Mon 05 Dec 2022 03:59",
            "username": "hamimelonby116549",
            "content": "What's the diff between C and D?With C it is creating the secondary global index with \\\"username\\\" as the partition key and the \\\"label\\\" as the the sort key.<br><br>In D it states \\\"D. \tInsert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index.\\\" I think you need to create the table first and then the GSI..... Please correct me if I am wrong.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 764254,
            "date": "Tue 03 Jan 2023 07:11",
            "username": "by116549",
            "content": "With C it is creating the secondary global index with \\\"username\\\" as the partition key and the \\\"label\\\" as the the sort key.<br><br>In D it states \\\"D. \tInsert an item for each S3 key, label, and user combination into an Amazon DynamoDB global secondary index.\\\" I think you need to create the table first and then the GSI..... Please correct me if I am wrong.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#273",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has an application that makes batch requests directly to Amazon DynamoDB by using the BatchGetltem low-level API operation. The responses frequently return values in the UnprocessedKeys element.<br><br>Which actions should the developer take to increase the resiliency of the application when the batch response includes values in UnprocessedKeys? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#273",
            "answers": [
              {
                "choice": "<p>A. Retry the batch operation immediately.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Retry the batch operation with exponential backoff and randomized delay.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the application to use an AWS software development kit (AWS SDK) to make the requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the provisioned read capacity of the DynamoDB tables that the operation accesses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Increase the provisioned write capacity of the DynamoDB tables that the operation accesses.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 273 discussion",
        "discusstion": [
          {
            "id": 765163,
            "date": "Wed 04 Jan 2023 03:09",
            "username": "braveheart22",
            "content": "This question is a tricky one for sure, looking at the question again and deeply, I'm inclined towards B & C as the best answers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 765162,
            "date": "Wed 04 Jan 2023 03:00",
            "username": "braveheart22",
            "content": "fe2 I like your explanation and I agree with you that C & D are the best options. Yes, B is correct as well but since by default AWS SDK automatically retries the batch operation with exponential backoff and randomized delay, so I think there would be no need to pick B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 760410,
            "date": "Thu 29 Dec 2022 00:04",
            "username": "fe2",
            "content": "The question says \\\"frequenty\\\". That means it is not something that you can solve by trying exponential backoff.<br>Of course, if you use AWS SDK that would make your app mroe resilient. Since by default AWS SDK is using exponential backoff.<br>But, for addressing the main issue, you should increase the provisioned read capacity. (because you are getting this error frequently)<br>I would say CD is correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 752892,
            "date": "Thu 22 Dec 2022 01:16",
            "username": "fabriciollf",
            "content": "B,C<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html<br>ProvisionedThroughputExceededException<br>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 745666,
            "date": "Thu 15 Dec 2022 04:21",
            "username": "xicomynor",
            "content": "Choosing BC as they're more related to application resiliency. ProvisionedThroughputExceededException is just one of the possible reasons. Docs state that error will happen if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. So in General, B & C will help for sure.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 737932,
            "date": "Wed 07 Dec 2022 14:55",
            "username": "ubuntu1234",
            "content": "BC. <br>all three B, C & D optionsseems to be correct , as they address the problem, but question is asking to increase the \\\"application resiliency \\\" , so B & C affect the application resiliency more, whereas D do not increase the application resiliency directly( its kind of more related to DynamoDBand less related to application).",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 734157,
            "date": "Sat 03 Dec 2022 02:35",
            "username": "hamimelon",
            "content": "BD.  https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727465,
            "date": "Sat 26 Nov 2022 12:33",
            "username": "michaldavid",
            "content": "I think D is right but not sure about the second answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 727279,
            "date": "Sat 26 Nov 2022 06:30",
            "username": "k1kavi1",
            "content": "Choosing B & D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          }
        ]
      },
      {
        "question_id": "#274",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identifies the need for centralized storage of application-level logs.<br><br>Which AWS service can be used to securely store these logs?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#274",
            "answers": [
              {
                "choice": "<p>A. Amazon EC2 VPC Flow Logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon CloudWatch Logs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon CloudSearch<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 274 discussion",
        "discusstion": [
          {
            "id": 727467,
            "date": "Sat 26 Nov 2022 12:34",
            "username": "michaldavid",
            "content": "I'm going with CW",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727280,
            "date": "Sat 26 Nov 2022 06:32",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/10501-exam-aws-certified-developer-associate-topic-1-question-114/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#275",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company deploys a local news website on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to implement authentication for viewers through well-known social identity providers (IdPs). The company=E2=80=99s development team must use AWS native services in the solution.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#275",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon Cognito user pools with social IdPs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure OpenID Connect (OIDC)-compliant IdP endpoints<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda authorizer as a target in the ALB target group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an ALB listener to add a rule for authentication<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use Lambda@Edge to authorize viewer requests in the ALB<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 275 discussion",
        "discusstion": [
          {
            "id": 760411,
            "date": "Thu 29 Dec 2022 00:10",
            "username": "fe2",
            "content": "you can use cognito user pools together with ALB. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 745668,
            "date": "Thu 15 Dec 2022 04:38",
            "username": "xicomynor",
            "content": "A&D.  https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.htmlThis article explains in the section \\\"Configure user authentication<br>\\\" how a rule needs to be created for the listener for both \\\"authenticate-cognito\\\" and \\\"authenticate-oidc\\\". Because questions states to use aws native services cognito is more suitable as it already handles well-known social identity providers.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 745602,
            "date": "Thu 15 Dec 2022 02:40",
            "username": "BelloMio",
            "content": "I think it's B and D. <br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733651,
            "date": "Fri 02 Dec 2022 11:47",
            "username": "SoMaL69",
            "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html<br>The following use cases are supported:<br><br>Authenticate users through an identity provider (IdP) that is OpenID Connect (OIDC) compliant.<br><br>Authenticate users through social IdPs, such as Amazon, Facebook, or Google, through the user pools supported by Amazon Cognito.<br><br>Authenticate users through corporate identities, using SAML, LDAP, or Microsoft AD, through the user pools supported by Amazon Cognito.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 732514,
            "date": "Thu 01 Dec 2022 11:53",
            "username": "Oleg_gol",
            "content": "You can configure an Application Load Balancer to securely authenticate users as they access your applications. This enables you to offload the work of authenticating users to your load balancer so that your applications can focus on their business logic.<br><br>The following use cases are supported:<br><br>Authenticate users through an identity provider (IdP) that is OpenID Connect (OIDC) compliant.<br><br>Authenticate users through social IdPs, such as Amazon, Facebook, or Google, through the user pools supported by Amazon Cognito.<br><br>Authenticate users through corporate identities, using SAML, LDAP, or Microsoft AD, through the user pools supported by Amazon Cognito.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 732311,
            "date": "Thu 01 Dec 2022 07:03",
            "username": "k1kavi1",
            "content": "Going with A&D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 728950,
            "date": "Mon 28 Nov 2022 10:55",
            "username": "lromOleg_gol",
            "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.htmlAB https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html))",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 732515,
            "date": "Thu 01 Dec 2022 11:53",
            "username": "Oleg_gol",
            "content": "AB https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html))",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727471,
            "date": "Sat 26 Nov 2022 12:37",
            "username": "michaldavid",
            "content": "A is defo right but not sure about C",
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
        "question_text": "<p>A company designs a mobile app to run on AWS. The app will run on Amazon EC2 instances behind an Application Load Balancer. The instances will run in an Amazon EC2 Auto Scaling group. The app must securely access data that the company stores in Amazon DynamoDB. <br><br>Which solution is MOST secure?</p>",
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
                "choice": "<p>A. Create an Amazon Cognito user pool for the mobile app users. Attach an IAM policy that has the required DynamoDB permissions to the user pool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda authorizer with the required DynamoDB permissions. Attach the Lambda authorizer to the Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM user for each mobile user. Attach an IAM policy that provides the required DynamoDB permissions to each IAM user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM role. Attach a policy with the required DynamoDB permissions to the role. Configure the EC2 Auto Scaling launch template to attach the role to all EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 276 discussion",
        "discusstion": [
          {
            "id": 734258,
            "date": "Sat 03 Dec 2022 08:22",
            "username": "k1kavi1",
            "content": "Going with D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727472,
            "date": "Sat 26 Nov 2022 12:38",
            "username": "michaldavid",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#277",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An open-source map application gathers data from several geolocation APIs. The application's source code repository is public and can be used by anyone, but the geolocation APIs must not be directly accessible.<br><br>A developer must implement a solution to prevent the credentials that are used to access the APIs from becoming public. The solution also must ensure that the application still functions properly.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#277",
            "answers": [
              {
                "choice": "<p>A. Store the credentials in AWS Secrets Manager. Retrieve the credentials by using the GetSecretValue API operation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the credentials in AWS Key Management Service (AWS KMS). Retrieve the credentials by using the GetPublicKey API operation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the credentials in AWS Security Token Service (AWS STS). Retrieve the credentials by using the GetCallerldentity API operation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the credentials in AWS Systems Manager Parameter Store. Retrieve the credentials by using the GetParameter API operation.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 277 discussion",
        "discusstion": [
          {
            "id": 743424,
            "date": "Tue 13 Dec 2022 00:48",
            "username": "fabriciollf",
            "content": "D is more cost effective",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732359,
            "date": "Thu 01 Dec 2022 08:23",
            "username": "Oleg_gol",
            "content": "MOST cost-effectively D<br>Secrets Manager: It is paid. The storage cost is $0.40 per secret per month and API interactions cost is $0.05 per 10,000 API calls.<br><br>Parameter Store: For Standard parameters, No additional charge for storage and standard throughput. For higher throughput, API interactions cost is $0.05 per 10,000 API calls.<br>For Advanced parameters, storage cost is $0.05 per advanced parameter per month and API interactions cost is $0.05 per 10,000 API calls.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732327,
            "date": "Thu 01 Dec 2022 07:26",
            "username": "k1kavi1",
            "content": "AWS Systems Manager Parameter Store looks most cost effective<br>https://aws.amazon.com/systems-manager/pricing/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728959,
            "date": "Mon 28 Nov 2022 11:10",
            "username": "lromxicomynor",
            "content": "Secret Manager for credentialsIt's less cost effective",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 745674,
            "date": "Thu 15 Dec 2022 04:42",
            "username": "xicomynor",
            "content": "It's less cost effective",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#278",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is working on a serverless application that needs to process any changes to an Amazon DynamoDB table with an AWS Lambda function.<br><br>How should the developer configure the Lambda function to detect changes to the DynamoDB table?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#278",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Kinesis data stream, and attach it to the DynamoDB table. Create a trigger to connect the data stream to the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function on a regular schedule. Connect to the DynamoDB table from the Lambda function to detect changes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable DynamoDB Streams on the table. Create a trigger to connect the DynamoDB stream to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Kinesis Data Firehose delivery stream, and attach it to the DynamoDB table. Configure the delivery stream destination as the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 278 discussion",
        "discusstion": [
          {
            "id": 732336,
            "date": "Thu 01 Dec 2022 07:39",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727475,
            "date": "Sat 26 Nov 2022 12:41",
            "username": "michaldavid",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726933,
            "date": "Fri 25 Nov 2022 17:12",
            "username": "kapil206001",
            "content": "C<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#279",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon OpenSearch Service to implement an audit monitoring system. A developer needs to create an AWS CloudFormation custom resource that is associated with an AWS Lambda function to configure the OpenSearch Service domain. The Lambda function must access the OpenSearch Service domain by using OpenSearch Service internal master user credentials.<br><br>What is the MOST secure way to pass these credentials to the Lambda function?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#279",
            "answers": [
              {
                "choice": "<p>A. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Set the NoEcho attribute to true.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and to create a parameter in AWS Systems Manager Parameter Store. Set the NoEcho attribute to true. Create an IAM role that has the ssm GetParameter permission. Assign the role to the Lambda function. Store the parameter name as the Lambda function's environment variable. Resolve the parameter's value at runtime<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Encrypt the parameter's value by using the AWS Key Management Service (AWS KMS) encrypt command.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use CloudFormation to create an AWS Secrets Manager secret. Use a CloudFormation dynamic reference to retrieve the secret's value for the OpenSearch Service domain's MasterUserOptions. Create an IAM role that has the secretsmanager:GetSecretValue permission. Assign the role to the Lambda function. Store the secret's name as the Lambda function's environment variable. Resolve the secret's value at runtime.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 279 discussion",
        "discusstion": [
          {
            "id": 732429,
            "date": "Thu 01 Dec 2022 10:04",
            "username": "k1kavi1",
            "content": "Choosing D : Most secure way -AWS Secrets Manager secret",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#280",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a two-tier application that consists of a frontend application and an Amazon RDS for MySQL database. The frontend application retrieves data from the database. The data consists of postal codes and their associated geographic coordinates The application performs many more database reads than writes. The application retrieves each postal code from the database thousands of times each day.<br><br>A developer must improve the performance of the application to decrease latency.<br><br>Which change should the developer make to the application to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#280",
            "answers": [
              {
                "choice": "<p>A. Modify the application to use a lazy loading caching strategy with a small TTL value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the application to use a write-behind caching strategy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the application to use a write-through caching strategy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the application to use a lazy loading caching strategy with a large TTL value.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 280 discussion",
        "discusstion": [
          {
            "id": 760871,
            "date": "Thu 29 Dec 2022 11:20",
            "username": "fe2",
            "content": "It is for sure D. <br>Write-through is better for data that is changing often. But here it is not the case. The app is doing READS a lot, and few WRITES.<br>That means LAZY LOADING is better.<br>When it comes to TTL, postcode and geolocation is not something that changes frequently. So, you can go for larger TTL. It saves cost, cache is not invalidated too often, and you will not need to update cache very often. Also, your requests will be very fast, since it will directly read from cache.<br>Shortly, the answer is D. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 751571,
            "date": "Tue 20 Dec 2022 22:55",
            "username": "Nosal",
            "content": "Go with C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 745684,
            "date": "Thu 15 Dec 2022 05:01",
            "username": "xicomynor",
            "content": "I chose C. <br>The reason is that with write-through caching strategy, data will always be available at cache, so there will be less latency. One of the disadvantages of using write-through is related to situations when you cache data that will never be read (Cache churn), but this questions states that \\\"The application retrieves each postal code from the database thousands of times each day\\\", so most of the data cached will be read.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735624,
            "date": "Mon 05 Dec 2022 04:08",
            "username": "hamimelon",
            "content": "Why not C? It says each postcode will be accessed thousands of times a day. Also, the content won't change very often, because the coordinates of a zipcode is unlikely to change.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727318,
            "date": "Sat 26 Nov 2022 07:25",
            "username": "k1kavi1",
            "content": "Cache evicts data with small TTL value. So choosing large TTL value.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#281",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building an application that supports multiple languages. The directory structure and file names for all versions of the website are identical. When a user views the website, the preferred language is added as a query string parameter. The following is an example of the URL: http://d111111abcdef2.doudfront.net/main.html?languagede.<br><br>The query string is passed to Amazon CloudFront. No matter which language the developer selects, the English page is returned. If the developer accesses the website directly and bypasses CloudFront. the page works as expected<br><br>What should the developer do so that the content of the page matches the language that the developer selects?</p>",
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
                "choice": "<p>A. Create a new CloudFront origin request policy. Set the query string option to All. Update the CloudFront distribution to use the new cache policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new CloudFront cache policy. Set the minimum and maximum TTL to 1 hour. Update the CloudFront distribution to use the new cache policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new CloudFront cache policy. Set the query string option to None. Update the CloudFront distribution to use the new cache policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new CloudFront cache policy. Set the query string option to Whitelist, and include the language string. Update the CloudFront distribution to use the new cache policy.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 281 discussion",
        "discusstion": [
          {
            "id": 735626,
            "date": "Mon 05 Dec 2022 04:12",
            "username": "hamimelonhamimelonokog",
            "content": "I think both A and D work.Changed my mind. It should be DPlease explain to me how the answer is D and not C",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 735627,
            "date": "Mon 05 Dec 2022 04:14",
            "username": "hamimelonokog",
            "content": "Changed my mind. It should be DPlease explain to me how the answer is D and not C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 737274,
            "date": "Wed 07 Dec 2022 00:15",
            "username": "okog",
            "content": "Please explain to me how the answer is D and not C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728975,
            "date": "Mon 28 Nov 2022 11:33",
            "username": "lrom",
            "content": "I think D to improve cache hit: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesQueryStringWhiteList",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727322,
            "date": "Sat 26 Nov 2022 07:31",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727264,
            "date": "Sat 26 Nov 2022 05:50",
            "username": "kapil206001",
            "content": "A<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#282",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team uses AWS CodeDeploy to deploy software changes to Amazon EC2 instances. The deployments begin to fail. The team traces the problem to a specific EC2 instance. The CodeDeploy agent's log file contains the following error message:<br><br>InvalidSignatureException Signature expired: |time| is now earlier than |time|<br><br>What is the underlying cause of this issue?</p>",
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
                "choice": "<p>A. The development team signed the CodeDeploy revision after the team created the deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The development team signed the CodeDeploy revision with a key that was not valid.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The deployment did not finish within the specified time frame.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The date setting or the time setting on the EC2 instance is not correct.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 282 discussion",
        "discusstion": [
          {
            "id": 727502,
            "date": "Sat 26 Nov 2022 13:13",
            "username": "michaldavid",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727325,
            "date": "Sat 26 Nov 2022 07:34",
            "username": "k1kavi1",
            "content": "https://docs.amazonaws.cn/en_us/codedeploy/latest/userguide/troubleshooting-ec2-instances.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727265,
            "date": "Sat 26 Nov 2022 05:53",
            "username": "kapil206001",
            "content": "D<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-ec2-instances.html#troubleshooting-instance-time-failures",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#283",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS Elastic Beanstalk application needs to be deployed in multiple regions and requires a different Amazon Machine Image (AMI) in each region.<br><br>Which AWS CloudFormation template key can be used to specify the correct AMI for each region?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#283",
            "answers": [
              {
                "choice": "<p>A. Parameters<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Outputs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Mappings<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Resources<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 283 discussion",
        "discusstion": [
          {
            "id": 727503,
            "date": "Sat 26 Nov 2022 13:14",
            "username": "michaldavid",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727327,
            "date": "Sat 26 Nov 2022 07:35",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/10293-exam-aws-certified-developer-associate-topic-1-question-140/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727267,
            "date": "Sat 26 Nov 2022 05:55",
            "username": "kapil206001",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/10293-exam-aws-certified-developer-associate-topic-1-question-140/",
            "upvote_count": "1",
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
        "question_text": "<p>A Development team wants to instrument their code to provide more detailed information to AWS X-Ray than simple outgoing and incoming requests. This will generate large amounts of data, so the Development team wants to implement indexing so they can filter the data.<br><br>What should the Development team do to achieve this?</p>",
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
                "choice": "<p>A. Add annotations to the segment document and the code<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add metadata to the segment document and the code<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the necessary X-Ray environment variables<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install required plugins for the appropriate AWS SDK<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 284 discussion",
        "discusstion": [
          {
            "id": 764865,
            "date": "Tue 03 Jan 2023 17:24",
            "username": "by116549",
            "content": "Seems like A:<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-annotations<br><br>When you instrument your application, the X-Ray SDK records information about incoming and outgoing requests, the AWS resources used, and the application itself. You can add other information to the segment document as annotations and metadata. Annotations and metadata are aggregated at the trace level, and can be added to any segment or subsegment.<br><br>Annotations are simple key-value pairs that are indexed for use with filter expressions. Use annotations to record data that you want to use to group traces in the console, or when calling the GetTraceSummaries API.<br><br>X-Ray indexes up to 50 annotations per trace.<br><br>Metadata are key-value pairs with values of any type, including objects and lists, but that are not indexed. Use metadata to record data you want to store in the trace but don't need to use for searching traces.<br><br>You can view annotations and metadata in the segment or subsegment details in the X-Ray console.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727329,
            "date": "Sat 26 Nov 2022 07:37",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4626-exam-aws-certified-developer-associate-topic-1-question-199/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727268,
            "date": "Sat 26 Nov 2022 05:56",
            "username": "kapil206001",
            "content": "A<br>https://www.examtopics.com/discussions/amazon/view/4626-exam-aws-certified-developer-associate-topic-1-question-199/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#285",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team uses AWS CodeBuild for build and test activities in a PHP application. The build process requires the team to download and install three PHP packages from the internet. The install section of the buildspec.yml file includes commands to download and install these three packages. The team wants to reduce build time.<br><br>Which solution will reduce build time the MOST?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#285",
            "answers": [
              {
                "choice": "<p>A. Download the package files from the internet. Upload the package files into an Amazon S3 bucket. Change the buildspec's install section to use the S3 bucket as the download location.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define a VPC endpoint for CodeBuild. Install the package files on an Amazon EC2 instance in the VPC.  Change the buildspec's install section to use the EC2 instance as the download location.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run the build on Jenkins by using the Jenkins plugin for CodeBuild. Pre-install the packages on the Jenkins server once. Remove the install commands from the buildspec.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a custom CodeBuild image with the package files already downloaded and installed. Alter the CodeBuild project to use the custom image. Remove the install commands from the buildspec.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 285 discussion",
        "discusstion": [
          {
            "id": 761207,
            "date": "Thu 29 Dec 2022 16:41",
            "username": "fe2",
            "content": "I would say D.  Since it says \\\"reduce build time the MOST\\\". Option A, you need to download the packages from S3, but in option D, all the dependencies are already present inside the custom build image.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 745619,
            "date": "Thu 15 Dec 2022 02:58",
            "username": "BelloMio",
            "content": "D https://aws.amazon.com/blogs/devops/extending-aws-codebuild-with-custom-build-environments/<br>The doc mentions \\\"To begin, we=E2=80=99ll clone codebuild-images from GitHub.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727523,
            "date": "Sat 26 Nov 2022 14:03",
            "username": "michaldavid",
            "content": "I believe A is correct. There's no such think as CodeBuild image. It would have to be a docker image",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727332,
            "date": "Sat 26 Nov 2022 07:41",
            "username": "k1kavi1",
            "content": "https://aws.amazon.com/blogs/devops/extending-aws-codebuild-with-custom-build-environments/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#286",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application uses an Amazon CloudFront distribution to deliver static content from Amazon S3 buckets that are set up in multiple AWS Regions around the world. A developer receives reports of problems with latency when cached content is updated.<br><br>The developer plans to address this problem by redirecting requests on cache misses to the S3 bucket in the Region that is nearest to the user's country. The developer configures the distribution to cache based on the CloudFront-Viewer-Country request header.<br><br>What should the developer do next to redirect requests on cache misses?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#286",
            "answers": [
              {
                "choice": "<p>A. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront function with the distribution's origin request event.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the Lambda@Edge function with the distribution's origin request event.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Lambda@Edge function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the Lambda@Edge function with the distribution's viewer request event.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a CloudFront function to redirect requests based on the value of the CloudFront-Viewer-Country header. Associate the CloudFront function with the distribution's viewer request event.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 286 discussion",
        "discusstion": [
          {
            "id": 765016,
            "date": "Tue 03 Jan 2023 21:21",
            "username": "by116549",
            "content": "also found this thread too:<br>https://stackoverflow.com/questions/48633610/how-do-i-get-cloudfront-viewer-country-to-appear-in-response-headers",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741070,
            "date": "Sat 10 Dec 2022 16:31",
            "username": "bindukas",
            "content": "B.  As explained in response to hamimelon comment",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734168,
            "date": "Sat 03 Dec 2022 03:34",
            "username": "hamimelonbindukasbindukasfe2",
            "content": "D.  I was debating between A & D because I am not familiar with view/origin request. This link helped. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudfront-trigger-events.htmlShouldn't it be A then? Since we only want to execute runction on cache misses, so on origin request?So it appears cloudfront function does not support origin request:<br>\\\"Similar to Lambda@Edge, CloudFront Functions runs your code in response to events generated by CloudFront. More specifically, CloudFront Functions can be triggered after CloudFront receives a request from a viewer (viewer request) and before CloudFront forwards the response to the viewer (viewer response).<br><br>Lambda@Edge can also be triggered before CloudFront forwards the request to the origin (origin request) and after CloudFront receives the response from the origin (origin response). You can use CloudFront Functions and Lambda@Edge together, depending on whether you need to manipulate content before, or after, being cached.\\\"<br>In this case it makes more sense to me to use Lambda@Edge, so I choose B answer. Otherwise it will always trigger function without checking cache firstvery good explanation",
            "upvote_count": "1131",
            "selected_answers": ""
          },
          {
            "id": 741064,
            "date": "Sat 10 Dec 2022 16:21",
            "username": "bindukasbindukasfe2",
            "content": "Shouldn't it be A then? Since we only want to execute runction on cache misses, so on origin request?So it appears cloudfront function does not support origin request:<br>\\\"Similar to Lambda@Edge, CloudFront Functions runs your code in response to events generated by CloudFront. More specifically, CloudFront Functions can be triggered after CloudFront receives a request from a viewer (viewer request) and before CloudFront forwards the response to the viewer (viewer response).<br><br>Lambda@Edge can also be triggered before CloudFront forwards the request to the origin (origin request) and after CloudFront receives the response from the origin (origin response). You can use CloudFront Functions and Lambda@Edge together, depending on whether you need to manipulate content before, or after, being cached.\\\"<br>In this case it makes more sense to me to use Lambda@Edge, so I choose B answer. Otherwise it will always trigger function without checking cache firstvery good explanation",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 741068,
            "date": "Sat 10 Dec 2022 16:29",
            "username": "bindukasfe2",
            "content": "So it appears cloudfront function does not support origin request:<br>\\\"Similar to Lambda@Edge, CloudFront Functions runs your code in response to events generated by CloudFront. More specifically, CloudFront Functions can be triggered after CloudFront receives a request from a viewer (viewer request) and before CloudFront forwards the response to the viewer (viewer response).<br><br>Lambda@Edge can also be triggered before CloudFront forwards the request to the origin (origin request) and after CloudFront receives the response from the origin (origin response). You can use CloudFront Functions and Lambda@Edge together, depending on whether you need to manipulate content before, or after, being cached.\\\"<br>In this case it makes more sense to me to use Lambda@Edge, so I choose B answer. Otherwise it will always trigger function without checking cache firstvery good explanation",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 761230,
            "date": "Thu 29 Dec 2022 17:06",
            "username": "fe2",
            "content": "very good explanation",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729011,
            "date": "Mon 28 Nov 2022 12:11",
            "username": "lrom",
            "content": "https://aws.amazon.com/it/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727494,
            "date": "Sat 26 Nov 2022 13:03",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#287",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A social media application stores millions of video clips in Amazon S3 and serves them to users across the world. The traffic to the application varies, but access often increases suddenly to more than 10,000 PUT requests and GET requests each second. As the application has grown in popularity, users report poor quality of video streaming.<br><br>Which solution will provide the LARGEST improvement in performance?</p>",
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
                "choice": "<p>A. Create an Amazon Route 53 geolocation routing policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Duplicate content in multiple AWS Regions by using S3 Cross Region-Replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use S3 Intelligent-Tiering to move data based on access patterns.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon CloudFront distribution with Amazon S3 as an origin.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 287 discussion",
        "discusstion": [
          {
            "id": 727525,
            "date": "Sat 26 Nov 2022 14:06",
            "username": "michaldavid",
            "content": "Correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727495,
            "date": "Sat 26 Nov 2022 13:05",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#288",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a Java application that will store sensitive data in an Amazon DynamoDB table. The data must be encrypted at all times.<br><br>How can the developer meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#288",
            "answers": [
              {
                "choice": "<p>A. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) AWS owned key for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable encryption at rest by using an AWS Key Management Service (AWS KMS) customer managed key for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement client-side encryption in the application code by using the DynamoDB Encryption Client.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an HTTPS connection to encrypt data in transit.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 288 discussion",
        "discusstion": [
          {
            "id": 743374,
            "date": "Mon 12 Dec 2022 23:12",
            "username": "fabriciollf",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 736869,
            "date": "Tue 06 Dec 2022 14:49",
            "username": "DrCloud",
            "content": "Client-side and server-side encryption:<br>\\\"DynamoDB Encryption Client\\\" supports client-side encryption, where you encrypt your table data before you send it to DynamoDB.  However, DynamoDB provides a server-side encryption at rest feature that transparently encrypts your table when it is persisted to disk and decrypts it when you access the table.<br><br>https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/client-server-side.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731789,
            "date": "Wed 30 Nov 2022 18:21",
            "username": "SoMaL69",
            "content": "https://docs.aws.amazon.com/kms/latest/developerguide/services-dynamodb.html<br>In addition to encryption at rest, which is a server-side encryption feature, AWS provides the Amazon DynamoDB Encryption Client. This client-side encryption library enables you to protect your table data before submitting it to DynamoDB.  With server-side encryption, TLS encrypts your data in transit over an HTTPS connection.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729028,
            "date": "Mon 28 Nov 2022 12:27",
            "username": "lrom",
            "content": "With server-side encryption, TLS encrypts your data in transit over an HTTPS connection. Your data is decrypted at the DynamoDB endpoint, and then re-encrypted before being stored in DynamoDB.  Client-side encryption provides end-to-end protection for your data from its source through storage in DynamoDB and back to you.<br>https://docs.aws.amazon.com/kms/latest/developerguide/services-dynamodb.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727526,
            "date": "Sat 26 Nov 2022 14:07",
            "username": "michaldavid",
            "content": "I'm going for B as the data needs to be encrypted at all times",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727499,
            "date": "Sat 26 Nov 2022 13:10",
            "username": "k1kavi1",
            "content": "Choosing A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727295,
            "date": "Sat 26 Nov 2022 07:00",
            "username": "kapil206001",
            "content": "C<br>DynomoDB encryts at rest by default using AWS owned key.<br>FOr transit , use client side encryption using DynamoDB encryption client",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#289",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Elastic Beanstalk to manage web applications that are running on Amazon EC2 instances. A developer needs to make configuration changes. The developer must deploy the changes to new instances only.<br><br>Which types of deployment can the developer use to meet this requirement? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#289",
            "answers": [
              {
                "choice": "<p>A. All at once<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Immutable<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Rolling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Blue/green<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Rolling with additional batch<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 289 discussion",
        "discusstion": [
          {
            "id": 736905,
            "date": "Tue 06 Dec 2022 15:39",
            "username": "DrCloud",
            "content": "@Irom: Here we go friend ....<br>Immutable deployments perform an immutable update to > launch a full set of \\\"new instances\\\" running the \\\"new version\\\" of the application in a \\\"separate Auto Scaling group\\\"\\\", alongside the instances running the old version.<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 729046,
            "date": "Mon 28 Nov 2022 12:45",
            "username": "lrom",
            "content": "What does \\\"Developer should deploy changes to new instances only\\\" mean?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727500,
            "date": "Sat 26 Nov 2022 13:12",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          }
        ]
      },
      {
        "question_id": "#290",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created a REST API using Amazon API Gateway. The developer wants to log who and how each caller accesses the API. The developer also wants to control how long the logs are kept.<br><br>What should the developer do to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#290",
            "answers": [
              {
                "choice": "<p>A. Enable API Gateway execution logging. Delete old logs using API Gateway retention settings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable API Gateway access logs. Use Amazon CloudWatch retention settings to delete old logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable detailed Amazon CloudWatch metrics. Delete old logs with a recurring AWS Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create and use API Gateway usage plans. Delete old logs with a recurring AWS Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 290 discussion",
        "discusstion": [
          {
            "id": 727504,
            "date": "Sat 26 Nov 2022 13:16",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/28807-exam-aws-certified-developer-associate-topic-1-question-321/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727285,
            "date": "Sat 26 Nov 2022 06:49",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/28807-exam-aws-certified-developer-associate-topic-1-question-321/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#291",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer has been asked to make changes to the source code of an AWS Lambda function. The function is managed using an AWS CloudFormation template. The template is configured to load the source code from an Amazon S3 bucket. The Developer manually created a .ZIP file deployment package containing the changes and put the file into the correct location on Amazon S3. When the function is invoked, the code changes have not been applied.<br><br>What step is required to update the function with the changes?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#291",
            "answers": [
              {
                "choice": "<p>A. Delete the .ZIP file on S3, and re-upload by using a different object key name.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure that the function source code is base64-encoded before uploading the deployment package to S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 291 discussion",
        "discusstion": [
          {
            "id": 727941,
            "date": "Sun 27 Nov 2022 06:58",
            "username": "michaldavid",
            "content": "BBBBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727505,
            "date": "Sat 26 Nov 2022 13:22",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/4258-exam-aws-certified-developer-associate-topic-1-question-141/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727375,
            "date": "Sat 26 Nov 2022 08:42",
            "username": "kapil206001",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/4258-exam-aws-certified-developer-associate-topic-1-question-141/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#292",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying Amazon Cognito as part of a new application. The Amazon Cognito user pool domain's hosted UI must match the application's deployed domain. DNS records must be updated appropriately.<br><br>What should the developer do to meet these requirements?</p>",
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
                "choice": "<p>A. Configure the application's domain DNS setting to use the predefined domain.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the prefix of the Amazon Cognito domain, amazoncognito.com, in the user pool app integration. Configure the application's domain DNS setting to use this new prefix.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Certificate Manager (ACM) certificate in the us-east-1 Region. Configure the user pool's app integration domain name with the custom domain. Configure the application's domain DNS setting with the supplied alias target.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Certificate Manager (ACM) certificate in the us-east-1 Region. Configure the user pool's domain app client settings with the custom domain. Configure the application's domain DNS setting with the supplied alias target.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 292 discussion",
        "discusstion": [
          {
            "id": 732468,
            "date": "Thu 01 Dec 2022 10:55",
            "username": "k1kavi1",
            "content": "Choosing C",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731436,
            "date": "Wed 30 Nov 2022 13:12",
            "username": "ubuntu1234",
            "content": "C<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html<br>(check the New Console tab to see theuser pool's app integration custom domain name)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 727945,
            "date": "Sun 27 Nov 2022 07:04",
            "username": "michaldavid",
            "content": "looks like D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727377,
            "date": "Sat 26 Nov 2022 08:47",
            "username": "kapil206001",
            "content": "D<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#293",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A government agency deploys a REST application on AWS. The agency integrates the application with AWS Lambda. The agency accesses the application through Amazon API Gateway. The agency has the following policies:<br><br>- Number versions to manage the deployment of all Lambda functions to production<br>- Create a PROD alias to point to each function<br>- Reference the PROD aliases in the production stages of API Gateway<br><br>One Lambda function contains the environment variables that are used to externalize connection parameters. The PROD alias points to version 10 of the Lambda function. A developer needs to update the connection parameters and ensure that the updated Lambda function is available on production.<br><br>Which solution will meet these requirements?</p>",
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
                "choice": "<p>A. Update the environment variable values on version 10 of the Lambda function. Do not change the PROD alias.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the environment variable values on version 10 of the Lambda function. Save the changes to create version 11. Update the PROD alias so that it points to version 11.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the environment variable values on the SLATEST version. Do not change the PROD alias<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the environment variable values on the SLATEST version. Publish SLATEST to create version 11 of the Lambda function. Update the PROD alias so that it points to version 11.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 293 discussion",
        "discusstion": [
          {
            "id": 745712,
            "date": "Thu 15 Dec 2022 06:17",
            "username": "xicomynor",
            "content": "https://aws.amazon.com/es/premiumsupport/knowledge-center/lambda-version-environment-variables/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732471,
            "date": "Thu 01 Dec 2022 10:59",
            "username": "k1kavi1",
            "content": "Choosing D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727381,
            "date": "Sat 26 Nov 2022 08:53",
            "username": "kapil206001",
            "content": "D<br>https://aws.amazon.com/premiumsupport/knowledge-center/lambda-alias-new-function-version/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#294",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's developer is creating an application that uses Amazon API Gateway. The company wants to ensure that only users in the Sales department can use the application. The users authenticate to the application by using federated credentials from a third-party identity provider (ldP) through Amazon Cognito. The developer has set up an attribute mapping to map an attribute that is named Department and to pass the attribute to a custom AWS Lambda authorizer.<br><br>To test the access limitation, the developer sets their department to Engineering in the IdP and attempts to log in to the application. The developer is denied access. The developer then updates their department to Sales in the IdP and attempts to log in. Again, the developer is denied access. The developer checks the logs and discovers that access is being denied because the developer's access token has a department value of Engineering.<br><br>Which of the following is a possible reason that the developer=E2=80=99s department is still being reported as Engineering instead of Sales?</p>",
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
                "choice": "<p>A. Authorization caching is enabled in the custom Lambda authorizer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Authorization caching is enabled on the Amazon Cognito user pool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The IAM role for the custom Lambda authorizer does not have a Department tag.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The IAM role for the Amazon Cognito user pool does not have a Department tag.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 294 discussion",
        "discusstion": [
          {
            "id": 765342,
            "date": "Wed 04 Jan 2023 08:31",
            "username": "by116549",
            "content": "Being the question states this: \\\"The developer has set up an attribute mapping to map an attribute that is named Department and to pass the attribute to a custom AWS Lambda authorizer\\\"<br><br>It rules out C and D leaving A or B. <br><br>Seems A when checking this resource:<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/configure-api-gateway-lambda-authorization-with-console.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 734930,
            "date": "Sun 04 Dec 2022 09:03",
            "username": "k1kavi1",
            "content": "Going with A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729106,
            "date": "Mon 28 Nov 2022 14:02",
            "username": "lrom",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/configure-api-gateway-lambda-authorization-with-console.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727948,
            "date": "Sun 27 Nov 2022 07:13",
            "username": "michaldavid",
            "content": "Difficult one. I guess either A or B. .",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#295",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating an AWS Lambda function to process streaming data from an Amazon Kinesis data stream. When the Lambda function parses the data and encounters a malformed record from the stream, the Lambda function exits with an error.<br><br>The developer is observing duplicate records downstream from the function. When the developer uses a different client to examine the Kinesis data stream output, no duplicate records are visible in the stream.<br><br>What is the reason for the duplicate records?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#295",
            "answers": [
              {
                "choice": "<p>A. The Lambda function did not advance the Kinesis data stream pointer to the next record after the error.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The Lambda event source used asynchronous invocation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The Lambda function did not keep up with the amount of data that was coming from the Kinesis data stream.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 295 discussion",
        "discusstion": [
          {
            "id": 727951,
            "date": "Sun 27 Nov 2022 07:17",
            "username": "michaldavid",
            "content": "CCCCCCCCC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727512,
            "date": "Sat 26 Nov 2022 13:43",
            "username": "k1kavi1",
            "content": "https://www.examtopics.com/discussions/amazon/view/10533-exam-aws-certified-developer-associate-topic-1-question-147/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#296",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is testing a new file storage application that uses an Amazon CloudFront distribution to serve content from an Amazon S3 bucket. The distribution accesses the S3 bucket by using an origin access identity (OAI). The S3 bucket's permissions explicitly deny access to all other users.<br><br>The application prompts users to authenticate on a login page and then uses signed cookies to allow users to access their personal storage directories. The developer has configured the distribution to use its default cache behavior with restricted viewer access and has set the origin to point to the S3 bucket. However, when the developer tries to navigate to the login page, the developer receives a 403 Forbidden error.<br><br>The developer needs to implement a solution to allow unauthenticated access to the login page. The solution also must keep all private content secure.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#296",
            "answers": [
              {
                "choice": "<p>A. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second cache behavior to the path of the login page, and make viewer access unrestricted. Keep the default cache behavior=E2=80=99s settings unchanged.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a second cache behavior to the distribution with the same origin as the default cache behavior. Set the path pattern for the second cache behavior to *, and make viewer access restricted. Change the default cache behavior's path pattern to the path of the login page, and make viewer access unrestricted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a second origin as a failover origin to the default cache behavior. Point the failover origin to the S3 bucket. Set the path pattern for the primary origin to * and make viewer access restricted. Set the path pattern for the failover origin to the path of the login page, and make viewer access unrestricted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a bucket policy to the S3 bucket to allow read access. Set the resource on the policy to the Amazon Resource Name (ARN) of the login page object in the S3 bucket. Add a CloudFront function to the default cache behavior to redirect unauthorized requests to the login page=E2=80=99s S3 URI.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 296 discussion",
        "discusstion": [
          {
            "id": 765348,
            "date": "Wed 04 Jan 2023 08:43",
            "username": "by116549",
            "content": "The question states \\\"The developer has configured the distribution to use its default cache behaviour with restricted viewer access and has set the origin to point to the S3 bucket\\\"<br><br>This rules out C and D. <br><br>Checking this resource:<br>https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CacheBehavior.html<br>\\\"The path pattern for the default cache behavior is * and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.\\\"<br><br>Seems A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 745721,
            "date": "Thu 15 Dec 2022 06:39",
            "username": "xicomynor",
            "content": "A.  A and B is almost the same but default cache behavior's path cannot be changed. https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CacheBehavior.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 743965,
            "date": "Tue 13 Dec 2022 13:04",
            "username": "mrbig00xicomynor",
            "content": "The correct solution is option B.  Adding a second cache behavior to the distribution with the same origin as the default cache behavior and setting the path pattern to * will allow access to all files in the S3 bucket. Changing the default cache behavior's path pattern to the path of the login page and making viewer access unrestricted will allow unauthenticated users to access the login page, while keeping all other private content secure.A and B is almost the same, except that default cache behavior's path cannot be changed. So the second cache behavior needs to be the login path and make it unrestricted and then leave the default as it is.<br>So my answer is A",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 745720,
            "date": "Thu 15 Dec 2022 06:38",
            "username": "xicomynor",
            "content": "A and B is almost the same, except that default cache behavior's path cannot be changed. So the second cache behavior needs to be the login path and make it unrestricted and then leave the default as it is.<br>So my answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727954,
            "date": "Sun 27 Nov 2022 07:21",
            "username": "michaldavid",
            "content": "I think this is A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727514,
            "date": "Sat 26 Nov 2022 13:48",
            "username": "k1kavi1xicomynor",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.htmlQuestion is not about high availability. Both resources are \\\"available\\\" but not for unauthorized users.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 745753,
            "date": "Thu 15 Dec 2022 06:41",
            "username": "xicomynor",
            "content": "Question is not about high availability. Both resources are \\\"available\\\" but not for unauthorized users.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#297",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company must encrypt sensitive data that the company will store in Amazon S3. A developer must retain total control over the company's AWS Key Management Service (AWS KMS) key and the company=E2=80=99s data keys. The company currently uses an on-premises hardware security module (HSM) solution. The company wants to move its key management onto AWS.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#297",
            "answers": [
              {
                "choice": "<p>A. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use AWS CloudHSM to generate the KMS key and data keys to use with AWS KMS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement server-side encryption with customer-provided encryption keys (SSE-C). Use AWS CloudHSM to generate the KMS key and manage the data keys that the company will use to read and write objects to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use AWS CloudHSM to generate the KMS key and manage the data keys that the company will use to read and write objects to Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement server-side encryption with AWS KMS managed keys (SSE-KMS). Use the AWS KMS custom key store feature to manage the data keys. Then read or write objects to Amazon S3 as normal.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 297 discussion",
        "discusstion": [
          {
            "id": 765358,
            "date": "Wed 04 Jan 2023 08:57",
            "username": "by116549",
            "content": "Question states \\\"retain total control over the company's AWS Key Management Service (AWS KMS) key and the company=E2=80=99s data keys\\\"<br><br>This rules out A and C. <br><br>Checking this resource \\\"generated by AWS KMS, generated within an AWS CloudHSM cluster or external key manager (through the custom key store), or import your own key material\\\" :https://aws.amazon.com/kms/faqs/<br><br>If total control is required then D seems the best fit",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 744557,
            "date": "Wed 14 Dec 2022 00:46",
            "username": "fabriciollf",
            "content": "The correct answer is D. <br><br>Please see the AWS FAQ for CloudHSM: https://docs.aws.amazon.com/cloudhsm/latest/userguide/best-practices.html<br><br>Q: Can other AWS services use CloudHSM to store and manage keys?<br><br>AWS services integrate with AWS Key Management Service, which in turn is integrated with AWS CloudHSM through the KMS custom key store feature. If you want to use the server-side encryption offered by many AWS services (such as EBS, S3, or Amazon RDS), you can do so by configuring a custom key store in AWS KMS.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 743968,
            "date": "Tue 13 Dec 2022 13:06",
            "username": "mrbig00",
            "content": "The correct solution is option A.  Implementing server-side encryption with AWS KMS managed keys (SSE-KMS) will allow the company to encrypt sensitive data stored in Amazon S3 using keys that are managed by AWS KMS. Using AWS CloudHSM to generate the KMS key and data keys to use with AWS KMS will allow the developer to retain total control over the keys. This solution will meet the company's requirement of retaining control over their keys and encrypting their sensitive data in Amazon S3.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732792,
            "date": "Thu 01 Dec 2022 16:56",
            "username": "fswklotto1",
            "content": "Vote for D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732483,
            "date": "Thu 01 Dec 2022 11:10",
            "username": "k1kavi1",
            "content": "Choosing B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#298",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying a company's application to Amazon EC2 instances. The application generates gigabytes of data files each day. The files are rarely accessed, but the files must be available to the application=E2=80=99s users within minutes of a request during the first year of storage. The company must retain the files for 7 years.<br><br>How can the developer implement the application to meet these requirements MOST cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#298",
            "answers": [
              {
                "choice": "<p>A. Store the files in an Amazon S3 bucket Use the S3 Glacier Instant Retrieval storage class. Create an S3 Lifecycle policy to transition the files to the S3 Glacier Deep Archive storage class after 1 year.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the files in an Amazon S3 bucket. Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition the files to the S3 Glacier Flexible Retrieval storage class after 1 year.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the files on an Amazon Elastic Block Store (Amazon EBS) volume. Use Amazon Data Lifecycle Manager (Amazon DLM) to create snapshots of the EBS volumes and to store those snapshots in Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the files on an Amazon Elastic File System (Amazon EFS) mount. Configure EFS lifecycle management to transition the files to the EFS Standard-Infrequent Access (Standard-IA) storage class after 1 year.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 298 discussion",
        "discusstion": [
          {
            "id": 743970,
            "date": "Tue 13 Dec 2022 13:07",
            "username": "mrbig00",
            "content": "The correct solution is option A.  Storing the files in an Amazon S3 bucket and using the S3 Glacier Instant Retrieval storage class will allow the application=E2=80=99s users to quickly access the files within minutes of a request. Creating an S3 Lifecycle policy to transition the files to the S3 Glacier Deep Archive storage class after 1 year will reduce storage costs and allow the company to retain the files for 7 years. This solution will meet the requirements and be the most cost-effective.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 741144,
            "date": "Sat 10 Dec 2022 18:34",
            "username": "DrCloud",
            "content": "Amazon S3 Glacier Instant Retrieval is an archive storage class that delivers the lowest-cost storage for long-lived data that is rarely accessed and requires retrieval in milliseconds. With S3 Glacier Instant Retrieval, you can save up to 68% on storage costs compared to using the S3 Standard-Infrequent Access (S3 Standard-IA) storage class, when your data is accessed once per quarter.<br><br>https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727958,
            "date": "Sun 27 Nov 2022 07:29",
            "username": "michaldavid",
            "content": "AAAAAAAA",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727520,
            "date": "Sat 26 Nov 2022 13:57",
            "username": "k1kavi1",
            "content": "Agreed",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#299",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application receives authenticated user data in the form of a JSON Web Token (JWT) from an Amazon Cognito user pool. A developer is setting up an Amazon API Gateway API to handle requests from the application and is using the token to verify the user=E2=80=99s identity.<br><br>Which of the following must the developer validate before the user data can be trusted?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#299",
            "answers": [
              {
                "choice": "<p>A. The token=E2=80=99s nonce<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The key ID in the token=E2=80=99s header<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The token's signature<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The token's issuer claim<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 299 discussion",
        "discusstion": [
          {
            "id": 727959,
            "date": "Sun 27 Nov 2022 07:30",
            "username": "michaldavid",
            "content": "Agree with C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727522,
            "date": "Sat 26 Nov 2022 14:01",
            "username": "k1kavi1",
            "content": "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html#amazon-cognito-user-pools-using-tokens-step-2",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#300",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A new mobile app uses Amazon Cognito web identity federation. Immediately after a user logs in, the following error occurs:<br><br>AccessDenied -- Not authorized to perform sts:AssumeRoleWithWebIdentity<br><br>A developer determines that the Amazon Cognito configuration appears to be correct.<br><br>Which of the following could be the cause of the error?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#300",
            "answers": [
              {
                "choice": "<p>A. The app=E2=80=99s developer incorrectly defined the authenticated principal role access policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The app could not confirm the user in the user pool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The app could not properly authenticate the user with the identity provider.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The app=E2=80=99s developer incorrectly defined the authenticated principal role trust policy.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 300 discussion",
        "discusstion": [
          {
            "id": 752286,
            "date": "Wed 21 Dec 2022 13:36",
            "username": "Morgist",
            "content": "choose D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 744987,
            "date": "Wed 14 Dec 2022 11:55",
            "username": "fabriciollf",
            "content": "D<br>https://aws.amazon.com/pt/premiumsupport/knowledge-center/eks-load-balancer-webidentityerr/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727524,
            "date": "Sat 26 Nov 2022 14:06",
            "username": "k1kavi1",
            "content": "https://stackoverflow.com/questions/37814997/accessdenied-not-authorized-to-perform-stsassumerolewithwebidentity",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726218,
            "date": "Thu 24 Nov 2022 22:16",
            "username": "IvanPetrovichPavlov",
            "content": "needs a trust policy to define authenticated role",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      }
    ]
  }