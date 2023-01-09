var DVA_C01_Part1 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#1",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming website gives users the ability to trade game items with each other on the platform. The platform requires both users' records to be updated and persisted in one transaction. If any update fails, the transaction must roll back.<br>Which AWS solution can provide the transactional capability that is required for this feature?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#1",
            "answers": [
              {
                "choice": "<p>A. Amazon DynamoDB with operations made with the Consistent Read parameter set to true<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon ElastiCache for Memcached with operations made within a transaction block<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon DynamoDB with reads and writes made by using Transact* operations<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Aurora MySQL with operations made within a transaction block<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Amazon Athena with operations made within a transaction block<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 1 discussion",
        "discusstion": [
          {
            "id": 654550,
            "date": "Wed 31 Aug 2022 02:09",
            "username": "nsasomsubSpamuel",
            "content": "I think is C<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.htmlagreed",
            "upvote_count": "92",
            "selected_answers": ""
          },
          {
            "id": 655117,
            "date": "Wed 31 Aug 2022 15:31",
            "username": "Spamuel",
            "content": "agreed",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655489,
            "date": "Wed 31 Aug 2022 23:06",
            "username": "sindra",
            "content": "I think the answer is C,<br>it still like C and D is fit with the answer, but from game perspective usually it recommended to use DynamoDB",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 754766,
            "date": "Sat 24 Dec 2022 09:08",
            "username": "TheAloneShadow",
            "content": "D because Aurora has Automatic fail-over",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 748581,
            "date": "Sun 18 Dec 2022 04:20",
            "username": "mithunkundu1983",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734853,
            "date": "Sun 04 Dec 2022 06:11",
            "username": "nitinitare51",
            "content": "Seems to be option C<br>https://aws.amazon.com/blogs/database/amazon-dynamodb-gaming-use-cases-and-design-patterns/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 730018,
            "date": "Tue 29 Nov 2022 07:31",
            "username": "AWS_Shubham",
            "content": "Answer seems to be D.  Earlier I too thought of C as dynamoDB has transactions api but they take more WCU and RCU. I searched and found a article which suggests that for gamers Aurora MySQL is the preference. Please refer below link: https://aws.amazon.com/blogs/database/level-up-your-games-with-amazon-aurora/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 694916,
            "date": "Fri 14 Oct 2022 18:56",
            "username": "sahil_chachere",
            "content": "The answer is C for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693443,
            "date": "Thu 13 Oct 2022 01:22",
            "username": "zzr2Freddie26",
            "content": "I choise D<br>because DynamoDB Transactions are not supported across regions in global tablesIt's not a requirement to be supported across regions. Global Tables aren't required here. As long as they can get to the one region, DynamoDB Transactions work.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 696456,
            "date": "Sun 16 Oct 2022 21:13",
            "username": "Freddie26",
            "content": "It's not a requirement to be supported across regions. Global Tables aren't required here. As long as they can get to the one region, DynamoDB Transactions work.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 691220,
            "date": "Mon 10 Oct 2022 15:52",
            "username": "scomperleur",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 690152,
            "date": "Sun 09 Oct 2022 14:13",
            "username": "technicalworm",
            "content": "it must be C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 686441,
            "date": "Tue 04 Oct 2022 23:30",
            "username": "bilel500",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 667167,
            "date": "Mon 12 Sep 2022 17:34",
            "username": "JeffreyQ",
            "content": "C looks more correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 664929,
            "date": "Fri 09 Sep 2022 22:31",
            "username": "zads",
            "content": "C and D are both correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#2",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created a Java application that makes HTTP requests directly to AWS services. Application logging shows 5xx HTTP response codes that occur at irregular intervals. The errors are affecting users.<br>How should the developer update the application to improve the application's resiliency?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#2",
            "answers": [
              {
                "choice": "<p>A. Revise the request content in the application code.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS SDK for Java to interact with AWS APIs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Scale out the application so that more instances of the application are running.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add additional logging to the application code.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 2 discussion",
        "discusstion": [
          {
            "id": 678530,
            "date": "Sun 25 Sep 2022 09:31",
            "username": "hariti_crafting",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/http-5xx-errors-s3/<br><br>All AWS SDKs have a built-in retry mechanism with an algorithm that uses exponential backoff. This algorithm implements increasingly longer wait times between retries for consecutive error responses. Most exponential backoff algorithms use jitter (randomized delay) to prevent successive collisions.",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 660298,
            "date": "Mon 05 Sep 2022 17:10",
            "username": "SuperPiski",
            "content": "Very strange question.<br><br>The developer has created a client that communicates with AWS services. This developer's app receives 5xx errors, which has nothing to do with the client (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses). In addition, they are sporadic errors.<br><br>I don't see how scaling the client app can help with this. Of course it will help with resiliency, but if the problem is on the server it would still fail.<br><br>I would go for option B, better to use the AWS SDK to interact with AWS services than implement something custom.<br><br>In a practical way, I'll put logging to the application in order to check why the server is returing such error.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723144,
            "date": "Mon 21 Nov 2022 04:11",
            "username": "blackwhites",
            "content": "very clearly it is answer B<br>https://docs.aws.amazon.com/general/latest/gr/api-retries.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 692678,
            "date": "Wed 12 Oct 2022 07:37",
            "username": "Dip40",
            "content": "So which option should be selected?. In this document correct answer and voted answers are different which is making confusion.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 687443,
            "date": "Thu 06 Oct 2022 06:29",
            "username": "adsdadasdad",
            "content": "How should the developer update the application to improve the application's resiliency?<br>I do agree that using the sdk is correct but i think what they wanted was scaling more instances. This is becuase it directly improves the applications resiliency. I think there needs to be a rework of how the question is asked",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 664932,
            "date": "Fri 09 Sep 2022 22:40",
            "username": "zads",
            "content": "The user has created a CLIENT that is interacting directly with AWS services.AWS services are returning an error sometimes.How will additional copies of a client make AWS services more resilient?<br><br>C is a non-sensical answer.It is much more likely that the Client is sending something wrong that is causing the error, in which case B is a much better answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658782,
            "date": "Sat 03 Sep 2022 21:42",
            "username": "nothankyouspankyouSuperPiski",
            "content": "C.  5xx is resource oversubscription.5xx is any server error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 660296,
            "date": "Mon 05 Sep 2022 17:07",
            "username": "SuperPiski",
            "content": "5xx is any server error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 657480,
            "date": "Fri 02 Sep 2022 15:42",
            "username": "IdrisAWS",
            "content": "Reading the commentsit says B.  Why the percentage of user contribution is showing 100 % C ?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655870,
            "date": "Thu 01 Sep 2022 08:26",
            "username": "habros",
            "content": "B.  Key word: AWS servicesC.  Key word: Irregular intervals<br><br>I'll take B.  AWS SDK for Java",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655537,
            "date": "Thu 01 Sep 2022 00:10",
            "username": "peyto",
            "content": "B.  No way its C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655490,
            "date": "Wed 31 Aug 2022 23:08",
            "username": "sindra",
            "content": "5xx is error of HTTP status codes indicates that the server is aware that it is on error or is incapable of performing the request. The server response usually includes an explanation of the error situation and if it is a temporary or permanent condition.<br><br>I believe scaling the app layer will help to solve the issue",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 655119,
            "date": "Wed 31 Aug 2022 15:32",
            "username": "SpamuelJAMG54",
            "content": "Could this be B?Yes. I think the same",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 655680,
            "date": "Thu 01 Sep 2022 03:52",
            "username": "JAMG54",
            "content": "Yes. I think the same",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#3",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A global company has a mobile app with static data stored in an Amazon S3 bucket in the us-east-1 Region. The company serves the content through an Amazon<br>CloudFront distribution. The company is launching the mobile app in South Africa. The data must reside in the af-south-1 Region. The company does not want to deploy a specific mobile client for South Africa.<br>What should the company do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#3",
            "answers": [
              {
                "choice": "<p>A. Use the CloudFront geographic restriction feature to block access to users in South Africa.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Lambda@Edge function. Associate the Lambda@Edge function as an origin request trigger with the CloudFront distribution to change the S3 origin Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Lambda@Edge function. Associate the Lambda@Edge function as a viewer response trigger with the CloudFront distribution to change the S3 origin Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Include af-south-1 in the alternate domain name (CNAME) of the CloudFront distribution.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 3 discussion",
        "discusstion": [
          {
            "id": 655131,
            "date": "Wed 31 Aug 2022 15:42",
            "username": "Spamuel",
            "content": "This should be option B - Lambda@Ege with a Origin Request Trigger.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 655496,
            "date": "Wed 31 Aug 2022 23:16",
            "username": "sindra",
            "content": "The Answer Should be B here is the reference<br>https://aws.amazon.com/blogs/networking-and-content-delivery/dynamically-route-viewer-requests-to-any-origin-using-lambdaedge/",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 748584,
            "date": "Sun 18 Dec 2022 04:24",
            "username": "mithunkundu1983",
            "content": "Lambda@Ege with a Origin Request Trigger.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 704453,
            "date": "Wed 26 Oct 2022 08:47",
            "username": "Hesham_Eltaher",
            "content": "This should be option B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 695333,
            "date": "Sat 15 Oct 2022 12:13",
            "username": "vasilisledo",
            "content": "answer B, https://www.cloud-exam-prepare.com/?dynamically-route-viewer-requests/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655302,
            "date": "Wed 31 Aug 2022 18:59",
            "username": "JSH90JAMG54JAMG54",
            "content": "This should be B?<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-content-based-S3-origin-request-triggerI think is A. <br>Lambda@Edge needs to be confured at us east 1Yes. It is B.  I was wrong",
            "upvote_count": "221",
            "selected_answers": ""
          },
          {
            "id": 655678,
            "date": "Thu 01 Sep 2022 03:51",
            "username": "JAMG54JAMG54",
            "content": "I think is A. <br>Lambda@Edge needs to be confured at us east 1Yes. It is B.  I was wrong",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 656629,
            "date": "Thu 01 Sep 2022 21:48",
            "username": "JAMG54",
            "content": "Yes. It is B.  I was wrong",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#4",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is testing an AWS Lambda function by using the AWS Serverless Application Model (AWS SAM) local CLI. The application that is implemented by the<br>Lambda function makes several AWS API calls by using the AWS software development kit (SDK). The developer wants to allow the function to make AWS API calls in a test AWS account from the developer's laptop.<br>What should the developer do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#4",
            "answers": [
              {
                "choice": "<p>A. Edit the template.yml file. Add the AWS_ACCESS_KEY_ID property and the AWS_SECRET_ACCESS_KEY property in the Globals section.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a test profile by using the aws configure command with the --profile option. Run AWS SAM by using the sam local invoke command with the -profile option.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Edit the template.yml tile. For the AWS::Serverless::Function resource, set the role to an IAM role in the AWS account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the function by using the sam local invoke command. Override the AWS_ACCESS_KEY_ID parameter and the AWS_SECRET_ACCESS_KEY parameter by specifying the --parameter-overrides option.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 4 discussion",
        "discusstion": [
          {
            "id": 766978,
            "date": "Thu 05 Jan 2023 20:11",
            "username": "Dirisme",
            "content": "Its B saw it in another dump",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 700958,
            "date": "Fri 21 Oct 2022 15:23",
            "username": "cwit63",
            "content": "answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694242,
            "date": "Thu 13 Oct 2022 21:50",
            "username": "ramireze",
            "content": "agree with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 668152,
            "date": "Tue 13 Sep 2022 16:41",
            "username": "Spamuel",
            "content": "Agree on B.  You use the configure command. Alternatively, set up credentials in the credentials file.<br><br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657421,
            "date": "Fri 02 Sep 2022 14:36",
            "username": "sidvic",
            "content": "For me is B \\\"--profile TEXT\tThe specific profile from your credential file that gets AWS credentials.\\\"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655683,
            "date": "Thu 01 Sep 2022 03:55",
            "username": "JAMG54",
            "content": "Maybe B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#5",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer designed an application on an Amazon EC2 instance. The application makes API requests to objects in an Amazon S3 bucket.<br>Which combination of steps will ensure that the application makes the API requests in the MOST secure manner? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#5",
            "answers": [
              {
                "choice": "<p>A. Create an IAM user that has permissions to the S3 bucket. Add the user to an IAM group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role that has permissions to the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add the IAM role to an instance profile. Attach the instance profile to the EC2 instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM role that has permissions to the S3 bucket. Assign the role to an 1AM group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Store the credentials of the IAM user in the environment variables on the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 5 discussion",
        "discusstion": [
          {
            "id": 683373,
            "date": "Fri 30 Sep 2022 10:21",
            "username": "GenePoole",
            "content": "You choice is either User or Role. Creating a role and assigning it to something is preffered over creating a user.<br><br>An IAM role is an IAM identity that you can create in your account that has specific permissions. An IAM role is similar to an IAM user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, a role does not have standard long-term credentials such as a password or access keys associated with it. Instead, when you assume a role, it provides you with temporary security credentials for your role session.<br>A - Create User (Role is better)<br>B - Create Role<br>C - Add role to Resource<br>D - Create role and add to IAM group (Users live in groups)<br>E - Add User to EC2",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 766981,
            "date": "Thu 05 Jan 2023 20:14",
            "username": "Dirisme",
            "content": "Instance role over IAM user ALWAYS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 667191,
            "date": "Mon 12 Sep 2022 18:00",
            "username": "B1112",
            "content": "B and C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 657496,
            "date": "Fri 02 Sep 2022 16:03",
            "username": "IdrisAWS",
            "content": "Role always safe. B&C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 656479,
            "date": "Thu 01 Sep 2022 19:07",
            "username": "thure",
            "content": "Should be B&C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655218,
            "date": "Wed 31 Aug 2022 17:17",
            "username": "Spamuelpond27",
            "content": "Correct!Yes. B&C. ",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 655399,
            "date": "Wed 31 Aug 2022 21:13",
            "username": "pond27",
            "content": "Yes. B&C. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#6",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is configuring an Amazon CloudFront distribution for a new application to provide encryption in transit. The application is running in the eu-west-1<br>Region. The developer creates a new certificate in AWS Certificate Manager (ACM) in eu-west-1, but the certificate is not visible in the CloudFront distribution settings.<br>What should the developer do to fix this problem?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#6",
            "answers": [
              {
                "choice": "<p>A. Create the certificate for the domain in the same Region as the application. Ensure that the alternate domain name (CNAME) in the distribution settings matches the domain name in the certificate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create the certificate in the eu-west-1 Region. Ensure that the alternate domain name (CNAME) in the distribution settings matches the domain name in the certificate.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Recreate the CloudFront distribution in the same Region as the certificate.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Specify the ACM certificate name as the default root object of the CloudFront distribution.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 6 discussion",
        "discusstion": [
          {
            "id": 676534,
            "date": "Thu 22 Sep 2022 21:53",
            "username": "Spamuel",
            "content": "Agreed with PVR that it's a typo. Option B changed to \\\"us-east-1\\\"",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658540,
            "date": "Sat 03 Sep 2022 15:52",
            "username": "JOL86",
            "content": "Part of me thinks there is a typo somewhere. To import an ACM into Cloudfront, the ACM needs to be in the us-east-1 region:<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html#https-requirements-aws-region<br><br>None of these answers make sense at the moment",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 720760,
            "date": "Thu 17 Nov 2022 19:53",
            "username": "Tera_911",
            "content": "It's B (typo --->us -east-1).<br>Explanation: To use an ACM certificate with Amazon CloudFront, you must request or import the certificate in the US East (N. Virginia) region. ACM certificates in this region that are associated with a CloudFront distribution are distributed to all the geographic locations configured for that distribution.<br>Reference: https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html?opt_idundefined",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 720063,
            "date": "Wed 16 Nov 2022 23:30",
            "username": "dark_cherrymon",
            "content": "there's a typo here<br><br>\\\"To use an ACM certificate with CloudFront, you must request or import the certificate in the US East (N. Virginia) region.\\\"- https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 714158,
            "date": "Wed 09 Nov 2022 00:44",
            "username": "cloud_collector",
            "content": "To add an alternate domain name (CNAME) to a CloudFront distribution, you must attach to your distribution a trusted, valid SSL/TLS certificate that covers the alternate domain name. This ensures that only people with access to your domain=E2=80=99s certificate can associate with CloudFront a CNAME related to your domain.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-requirements",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 659965,
            "date": "Mon 05 Sep 2022 11:08",
            "username": "PVRpeyto",
            "content": "Looks like the second option has a typo. If it were changed to us-east-1, then it would be correct answer.correct",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 662901,
            "date": "Wed 07 Sep 2022 23:24",
            "username": "peyto",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 657440,
            "date": "Fri 02 Sep 2022 14:52",
            "username": "sidvicSuperPiski",
            "content": "Very Tricky question for me. I found this https://www.radishlogic.com/aws/cloudfront/how-to-solve-ssl-certificate-not-showing-in-aws-cloudfront/ but in the question already says that the certification in in the same region of cloudfront. I vote for cBut cloudfront is a global service...so no region is needed.",
            "upvote_count": "23",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 660316,
            "date": "Mon 05 Sep 2022 17:33",
            "username": "SuperPiski",
            "content": "But cloudfront is a global service...so no region is needed.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#7",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is building an application that runs behind an Application Load Balancer (ALB). The ALB is configured as the origin for an Amazon CloudFront distribution. Users will log in to the application by using their social media accounts.<br>How can the developer authenticate users?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#7",
            "answers": [
              {
                "choice": "<p>A. Validate the users by inspecting the tokens in an AWS Lambda authorizer on the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the ALB to use Amazon Cognito as one of the authentication providers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure CloudFront to use Amazon Cognito as one of the authentication providers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Validate the users by calling the Amazon Cognito API in an AWS Lambda authorizer on the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 7 discussion",
        "discusstion": [
          {
            "id": 655685,
            "date": "Thu 01 Sep 2022 03:57",
            "username": "JAMG54Merrick",
            "content": "B seems to be correcthttps://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html",
            "upvote_count": "93",
            "selected_answers": ""
          },
          {
            "id": 674789,
            "date": "Wed 21 Sep 2022 06:54",
            "username": "Merrick",
            "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 767010,
            "date": "Thu 05 Jan 2023 20:49",
            "username": "Dirisme",
            "content": "Its B https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728523,
            "date": "Sun 27 Nov 2022 19:51",
            "username": "SBoksh",
            "content": "https://aws.amazon.com/blogs/aws/built-in-authentication-in-alb/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 722643,
            "date": "Sun 20 Nov 2022 14:38",
            "username": "Elliana",
            "content": "B is correct.<br>You cannot directly integrate Cognito User Pools with CloudFront distribution as you have to create a separate Lambda@Edge function to accomplish the authentication via Cognito User Pools.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720068,
            "date": "Wed 16 Nov 2022 23:55",
            "username": "dark_cherrymondark_cherrymon",
            "content": "could be D<br><br>https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-how-to-use-lambdaedge-and-json-web-tokens-to-enhance-web-application-security/<br><br>\\\"In the Outputs section, look for LambdaAtEdgeFunction with the URL for editing the Lambda function, similar to the screenshot below.\\\"oh wait no it's C because lambda at edge is for cloud front but on the question it says lambda@edge is for ALB",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 720069,
            "date": "Wed 16 Nov 2022 23:57",
            "username": "dark_cherrymon",
            "content": "oh wait no it's C because lambda at edge is for cloud front but on the question it says lambda@edge is for ALB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 712693,
            "date": "Mon 07 Nov 2022 00:02",
            "username": "cloud_collector",
            "content": "ALB=E2=80=99s new authentication action provides authentication through social Identity Providers (IdP) like Google, Facebook, and Amazon through Amazon Cognito. It also natively integrates with any OpenID Connect protocol compliant IdP, providing secure authentication and a single sign-on experience across your applications.<br>https://aws.amazon.com/blogs/aws/built-in-authentication-in-alb/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 707554,
            "date": "Sun 30 Oct 2022 01:54",
            "username": "kio222",
            "content": "I think the answer is D<br>https://aws.amazon.com/ko/blogs/security/protect-public-clients-for-amazon-cognito-by-using-an-amazon-cloudfront-proxy/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679406,
            "date": "Mon 26 Sep 2022 06:43",
            "username": "Tera_911adsdadasdad",
            "content": "Why it can't be C?Cloudfront is CDN, You configure the client application (mobile or web client) to use a CloudFront endpoint as a proxy to an Amazon Cognito Regional endpoint. You can configure an Application Load Balancer to securely authenticate users as they access your applications. This enables you to offload the work of authenticating users to your load balancer so that your applications can focus on their business logic.",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 687459,
            "date": "Thu 06 Oct 2022 06:52",
            "username": "adsdadasdad",
            "content": "Cloudfront is CDN, You configure the client application (mobile or web client) to use a CloudFront endpoint as a proxy to an Amazon Cognito Regional endpoint. You can configure an Application Load Balancer to securely authenticate users as they access your applications. This enables you to offload the work of authenticating users to your load balancer so that your applications can focus on their business logic.",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#8",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that analyzes photographs. A developer is preparing the application for deployment to Amazon EC2 instances. The application's image analysis functions require a mix of GPU instances and CPU instances that run on Amazon Linux. The developer needs to add code to the application so that the functions can determine whether they are running on a GPU instance.<br>What should the functions do to obtain this information?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#8",
            "answers": [
              {
                "choice": "<p>A. Call the DescribeInstances API operation and filter on the current instance ID.  Examine the ElasticGpuAssociations property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Evaluate the GPU AVAILABLE environment variable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Call the DescribeElasticGpus API operation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Retrieve the instance type from the instance metadata.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 8 discussion",
        "discusstion": [
          {
            "id": 690907,
            "date": "Mon 10 Oct 2022 10:55",
            "username": "Arnaud92",
            "content": "Answer D : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 676964,
            "date": "Fri 23 Sep 2022 11:37",
            "username": "venimus_vidimus_vicimus",
            "content": "i think is d!",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 676536,
            "date": "Thu 22 Sep 2022 21:56",
            "username": "Spamuel",
            "content": "D - Instance metadata",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 675746,
            "date": "Thu 22 Sep 2022 07:16",
            "username": "JabolJabol",
            "content": "D would be correct but we don't want instance type from metadata, I believe B is correct https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeElasticGpus.htmlOk, I'm wrong. We need instance type https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 675757,
            "date": "Thu 22 Sep 2022 07:41",
            "username": "Jabol",
            "content": "Ok, I'm wrong. We need instance type https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 656512,
            "date": "Thu 01 Sep 2022 19:46",
            "username": "thure",
            "content": "\\\"Amazon Elastic Graphics provides flexible, low-cost, and high performance graphics acceleration for your Windows instances.\\\"<br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655686,
            "date": "Thu 01 Sep 2022 03:58",
            "username": "JAMG54",
            "content": "D since you can obtain metadata info from EC2 instance using 169.254.169.254 ip",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#9",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that uses Amazon Cognito user pools as an identity provider. The company must secure access to user records. The company has set up multi-factor authentication (MFA). The company also wants to send a login activity notification by email every time a user logs in.<br>What is the MOST operationally efficient solution that meets this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#9",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon API Gateway API to invoke the function. Call the API from the client side when login confirmation is received.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon Cognito post authentication Lambda trigger for the function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Create an Amazon CloudWatch Logs log subscription filter to invoke the function based on the login status.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon Cognito to stream all logs to Amazon Kinesis Data Firehose. Create an AWS Lambda function to process the streamed logs and to send the email notification based on the login status of each user.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 9 discussion",
        "discusstion": [
          {
            "id": 655896,
            "date": "Thu 01 Sep 2022 08:55",
            "username": "sindra",
            "content": "agreed with B<br>https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-authentication.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 672979,
            "date": "Mon 19 Sep 2022 08:14",
            "username": "Amdrea",
            "content": "it should be B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657037,
            "date": "Fri 02 Sep 2022 08:06",
            "username": "m_t_kd",
            "content": "Answer is B<br>https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#10",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a three-tier web application on AWS behind an Amazon CloudFront distribution. A developer wants a dashboard to monitor error rates and anomalies of the CloudFront distribution with the shortest possible refresh interval.<br>Which combination of slops should the developer take to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#10",
            "answers": [
              {
                "choice": "<p>A. Activate real-time logs on the CloudFront distribution. Create a stream in Amazon Kinesis Data Streams.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Export the CloudFront logs to an Amazon S3 bucket. Detect anomalies and error rates with Amazon QuickSight.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon Kinesis Data Streams to deliver logs to Amazon OpenSearch Service (Amazon Elasticsearch Service). Create a dashboard in OpenSearch Dashboards (Kibana).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create Amazon CloudWatch alarms based on expected values of selected CloudWatch metrics to detect anomalies and errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Design an Amazon CloudWatch dashboard of the selected CloudFront distribution metrics.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 10 discussion",
        "discusstion": [
          {
            "id": 658559,
            "date": "Sat 03 Sep 2022 16:15",
            "username": "JOL86Musafaynounothankyouspankyou",
            "content": "A and C is correct to me: https://aws.amazon.com/blogs/networking-and-content-delivery/cloudfront-realtime-logs/<br><br>It mentions shortest possible refresh interval so best to use the real-time logsIS Kinesis Data Streams to deliver logs to Amazon OpenSearch Service? NO ofc it is FirehoseIts possible:<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-kinesis",
            "upvote_count": "912",
            "selected_answers": ""
          },
          {
            "id": 674123,
            "date": "Tue 20 Sep 2022 14:14",
            "username": "Musafaynounothankyouspankyou",
            "content": "IS Kinesis Data Streams to deliver logs to Amazon OpenSearch Service? NO ofc it is FirehoseIts possible:<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-kinesis",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 698553,
            "date": "Wed 19 Oct 2022 01:28",
            "username": "nothankyouspankyou",
            "content": "Its possible:<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-kinesis",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 659287,
            "date": "Sun 04 Sep 2022 14:52",
            "username": "datamech001",
            "content": "A and C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 751196,
            "date": "Tue 20 Dec 2022 17:31",
            "username": "Agil09",
            "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/cloudfront-realtime-logs/<br>With real-time logs, you can customize the information collected and where it gets delivered. The real-time logs are integrated with Amazon Kinesis Data Streams to enable delivery of these logs to a generic HTTP endpoint using Amazon Kinesis Data Firehose. Amazon Kinesis Data Firehose can deliver logs to Amazon S3, Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and service providers like Datadog, Datazoom, New Relic, and Splunk. Using these logs, you can create real-time dashboards, set up alerts, and investigate anomalies or respond to operational events quickly.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 679212,
            "date": "Sun 25 Sep 2022 22:34",
            "username": "tfer",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 659136,
            "date": "Sun 04 Sep 2022 11:13",
            "username": "Danbraga",
            "content": "AC seems right",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 658132,
            "date": "Sat 03 Sep 2022 08:39",
            "username": "sidvicDanbragasidvic",
            "content": "DE for me. https://aws.amazon.com/it/blogs/mt/sending-cloudfront-standard-logs-to-cloudwatch-logs-for-analysis/key phrase on this question is \\\"shortest possible refresh interval\\\". That would be ACyou're right",
            "upvote_count": "233",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 662376,
            "date": "Wed 07 Sep 2022 13:01",
            "username": "Danbragasidvic",
            "content": "key phrase on this question is \\\"shortest possible refresh interval\\\". That would be ACyou're right",
            "upvote_count": "33",
            "selected_answers": ""
          },
          {
            "id": 663175,
            "date": "Thu 08 Sep 2022 07:48",
            "username": "sidvic",
            "content": "you're right",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#11",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer creates a customer managed key for multiple AWS users to encrypt data in Amazon S3. The developer configures Amazon Simple Notification<br>Service (Amazon SNS) to publish a message if key deletion is scheduled. The developer needs to preserve any SNS messages that cannot be delivered so that those messages can be reprocessed.<br>Which AWS service or feature should the developer use to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#11",
            "answers": [
              {
                "choice": "<p>A. Amazon Simple Email Service (Amazon SES)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Simple Queue Service (Amazon SQS)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudWatch alarm<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 11 discussion",
        "discusstion": [
          {
            "id": 720074,
            "date": "Thu 17 Nov 2022 00:08",
            "username": "dark_cherrymon",
            "content": "C<br><br>\\\"Amazon SNS stops retrying the delivery and discards the message=E2=80=94unless a dead-letter queue is attached to the subscription. \\\"<br><br>\\\"A dead-letter queue is an Amazon SQS queue \\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 698554,
            "date": "Wed 19 Oct 2022 01:31",
            "username": "nothankyouspankyou",
            "content": "I'd use an SNS Dead Letter Queue...but okay - SQS it is...",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 677827,
            "date": "Sat 24 Sep 2022 14:50",
            "username": "haazybanj",
            "content": "SQS is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 658133,
            "date": "Sat 03 Sep 2022 08:40",
            "username": "sidvic",
            "content": "We needs a SQS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 656079,
            "date": "Thu 01 Sep 2022 11:37",
            "username": "Sirikou_0922adsdadasdad",
            "content": "SQS is right using fan-out and also SQS has the storageMore so that if the request times out, the que will still process that the request has not suceeded and will keep it until it has processed. It garantees consistancy",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 687461,
            "date": "Thu 06 Oct 2022 07:00",
            "username": "adsdadasdad",
            "content": "More so that if the request times out, the que will still process that the request has not suceeded and will keep it until it has processed. It garantees consistancy",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 656057,
            "date": "Thu 01 Sep 2022 11:20",
            "username": "sindra",
            "content": "agreed with C. . Amazon SQS is async messaging bus that suitable with this case",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#12",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to deploy an application to AWS Elastic Beanstalk for a company. The application consists of a single Docker image. The company's automated continuous integration and continuous delivery (CI/CD) process builds the Docker image and pushes the image to a public Docker registry.<br>How should the developer deploy the application to Elastic Beanstalk?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#12",
            "answers": [
              {
                "choice": "<p>A. Create a Dockerfile. Configure Elastic Beanstalk to build the application as a Docker image.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a docker-compose.yml file. Use the Elastic Beanstalk CLI to deploy the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a .zip file that contains the Docker image. Upload the .zip file to Elastic Beanstalk.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Dockerfile. Run the Elastic Beanstalk CLI eb local run command in the same directory.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 12 discussion",
        "discusstion": [
          {
            "id": 656464,
            "date": "Thu 01 Sep 2022 18:55",
            "username": "Vinafec",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/docker.html#single-container-docker.deploy-remote<br><br>Deploy a remote Docker image to Elastic Beanstalk<br><br>After testing your container locally, deploy it to an Elastic Beanstalk environment. Elastic Beanstalk uses the docker-compose.yml file to pull and run your image if you are using Docker Compose. Otherwise, Elastic Beanstalk uses the Dockerrun.aws.json instead.<br><br>Use the EB CLI to create an environment and deploy your image.<br><br>~/remote-docker$ eb create environment-name",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 763400,
            "date": "Mon 02 Jan 2023 01:02",
            "username": "ayoubmk",
            "content": "Since the image is already pushed in the repository, I don't think that we need a dockerfile ;) So I find that B is the best answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 744439,
            "date": "Tue 13 Dec 2022 21:10",
            "username": "smica9ayoubmk",
            "content": "The trick to this is knowing that docker-compose is only for building multi-container environments. For deploying a single container build, you either need to provide a `Dockerrun.aws.json` file that specifies where the already built Docker image is stored, OR build and run from a custom Dockerfile. Since the first option wasn't provided, the only other way to build a single-container environment is option A.  (and providing a .zip file is only for non-dockerized EB configurations)Since the image is already pushed in the repository, I don't think that we need a dockerfile ;) So I find that B is the best answer",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 763399,
            "date": "Mon 02 Jan 2023 01:02",
            "username": "ayoubmk",
            "content": "Since the image is already pushed in the repository, I don't think that we need a dockerfile ;) So I find that B is the best answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727796,
            "date": "Sat 26 Nov 2022 21:14",
            "username": "gpit",
            "content": "The question is about deployment, the code is already build via CI/CD.  So A is the right answer. See https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.DeployApp.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727400,
            "date": "Sat 26 Nov 2022 09:53",
            "username": "Salman786",
            "content": "Keyword is \\\"single container application\\\" so no need of docker-compose.yml which is used for multi-container applications.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 693538,
            "date": "Thu 13 Oct 2022 04:45",
            "username": "kyozanuro",
            "content": "I think the answer is A, as Beanstalk can read Dockerfile directly",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 687466,
            "date": "Thu 06 Oct 2022 07:04",
            "username": "adsdadasdad",
            "content": "None are completeley viable becuause you are using EB as orchestration for containers. This should be offloaded to ecs or to eks. but in this case you would want to use docker-compose as the enviorment for containers. Answer is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 667882,
            "date": "Tue 13 Sep 2022 12:40",
            "username": "Jabol",
            "content": "Image already exists in registry, we should use that image instead of building image again",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 662704,
            "date": "Wed 07 Sep 2022 18:36",
            "username": "Kajihandark_cherrymonCollinsWolf",
            "content": "It is C<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-sourcebundle.htmlbut where's the dockerYeah same thing I thought, According to ACloud Guru, TD and Whizlabs it=E2=80=99s C. ",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 720083,
            "date": "Thu 17 Nov 2022 00:46",
            "username": "dark_cherrymon",
            "content": "but where's the docker",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705953,
            "date": "Fri 28 Oct 2022 00:43",
            "username": "CollinsWolf",
            "content": "Yeah same thing I thought, According to ACloud Guru, TD and Whizlabs it=E2=80=99s C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 659517,
            "date": "Sun 04 Sep 2022 22:29",
            "username": "m_t_kd",
            "content": "It is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656084,
            "date": "Thu 01 Sep 2022 11:42",
            "username": "Sirikou_0922dark_cherrymondark_cherrymon",
            "content": "This is crct<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/docker.htmlso that confirms it's C and not A because<br><br>\\\". If you're deploying a remote Docker image, you don't need to include a Dockerfile. Instead, if you are also using Docker Compose, use a docker-compose.yml file\\\"i mean B not C",
            "upvote_count": "212",
            "selected_answers": ""
          },
          {
            "id": 720084,
            "date": "Thu 17 Nov 2022 00:49",
            "username": "dark_cherrymondark_cherrymon",
            "content": "so that confirms it's C and not A because<br><br>\\\". If you're deploying a remote Docker image, you don't need to include a Dockerfile. Instead, if you are also using Docker Compose, use a docker-compose.yml file\\\"i mean B not C",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 720085,
            "date": "Thu 17 Nov 2022 00:50",
            "username": "dark_cherrymon",
            "content": "i mean B not C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 656076,
            "date": "Thu 01 Sep 2022 11:32",
            "username": "sindra",
            "content": "confirm A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#13",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodeDeploy for all production deployments. A developer has an Amazon Elastic Container Service (Amazon ECS) application that uses the CodeDeployDefault.ECSAIIAtOnce configuration. The developer needs to update the production environment in increments of 10% until the entire production environment is updated.<br>Which CodeDeploy configuration should the developer use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#13",
            "answers": [
              {
                "choice": "<p>A. CodeDeployDefault.ECSCanary10Percent5Minutes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. CodeDeployDefault.ECSLinear10PercentEvery3Minutes<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. CodeDeployDefault.OneAtATime<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. CodeDeployDefault.LambdaCanary10Percent5Minutes<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 13 discussion",
        "discusstion": [
          {
            "id": 694344,
            "date": "Fri 14 Oct 2022 01:20",
            "username": "cloud_collector",
            "content": "CodeDeployDefault.ECSLinear10PercentEvery3Minutes<br>Shifts 10 percent of traffic every three minutes until all traffic is shifted.<br><br>CodeDeployDefault.ECSCanary10Percent5Minutes<br>=09<br>Shifts 10 percent of traffic in the first increment. The remaining 90 percent is deployed five minutes later.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726355,
            "date": "Fri 25 Nov 2022 03:41",
            "username": "G4Exams",
            "content": "clearly B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 683428,
            "date": "Fri 30 Sep 2022 11:15",
            "username": "kundu057",
            "content": "Shifts 10 percent of traffic every three minutes until all traffic is shifted.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 668613,
            "date": "Wed 14 Sep 2022 06:54",
            "username": "Jabol",
            "content": "Only linear option deploys changes in increments. Answer is correct.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657668,
            "date": "Fri 02 Sep 2022 19:40",
            "username": "VivekSolutionArchitect",
            "content": "Yes. Answer is \\\"CodeDeployDefault.ECSLinear10PercentEvery3Minutes\\\".<br>Reference-https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#14",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Elastic Beanstalk to deploy a three-tier application. The application uses an Amazon RDS DB instance as the database tier. The company wants to decouple the DB instance from the Elastic Beanstalk environment.<br>Which combination of steps should a developer lake to meet this requirement? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#14",
            "answers": [
              {
                "choice": "<p>A. Create a new Elastic Beanstalk environment that connects to the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new DB instance from a snapshot of the previous DB instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the Elastic Beanstalk CLI to decouple the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS CLI to decouple the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Modify the current Elastic Beanstalk environment to connect to the DB instance.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 14 discussion",
        "discusstion": [
          {
            "id": 657671,
            "date": "Fri 02 Sep 2022 19:44",
            "username": "VivekSolutionArchitectMerrick",
            "content": "Correct answer A and B. <br>Reference-https://aws.amazon.com/premiumsupport/knowledge-center/decouple-rds-from-beanstalk/I cannot find that creating new DB instance from a snapshot(B) in the reference, which is guiding to connect between new EB and old RDS DB instance",
            "upvote_count": "94",
            "selected_answers": ""
          },
          {
            "id": 676772,
            "date": "Fri 23 Sep 2022 07:10",
            "username": "Merrick",
            "content": "I cannot find that creating new DB instance from a snapshot(B) in the reference, which is guiding to connect between new EB and old RDS DB instance",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 766019,
            "date": "Wed 04 Jan 2023 20:15",
            "username": "ShriniW",
            "content": "Correct Answer is And B since below are the steps for decouple..<br>Create a snapshot of RDS DB (as a<br>safeguard)<br>2. Go to the RDS console and protect<br>the RDS database from deletion<br>3. Create a new Elastic Beanstalk<br>environment, without RDS, point your<br>application to existing RDS<br>4. perform a CNAME swap (blue/green)<br>or Route 53 update, confirm working<br>5. Terminate the old environment (RDS<br>won=E2=80=99t be deleted)<br>6. Delete CloudFormation stack (in<br>DELETE_FAILED state)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 765211,
            "date": "Wed 04 Jan 2023 04:47",
            "username": "efexShriniW",
            "content": "The answer should B-E. <br>We can update the current environment parameter and can connect the new Database. We don't need to create a new environment.actually we create a sanpshot , we create new Beanstalk without RDS and then point new beanstalk to older RDS.Hence Aand B",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 766021,
            "date": "Wed 04 Jan 2023 20:17",
            "username": "ShriniW",
            "content": "actually we create a sanpshot , we create new Beanstalk without RDS and then point new beanstalk to older RDS.Hence Aand B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694280,
            "date": "Thu 13 Oct 2022 22:58",
            "username": "ramireze",
            "content": "the best answer ois A&B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 689514,
            "date": "Sat 08 Oct 2022 18:44",
            "username": "haazybanj",
            "content": "A and Bis the right answer<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/decouple-rds-from-beanstalk/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          }
        ]
      },
      {
        "question_id": "#15",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has point-of-sale devices across thousands of retail shops that synchronize sales transactions with a centralized system. The system includes an<br>Amazon API Gateway API that exposes an AWS Lambda function. The Lambda function processes the transactions and stores the transactions in Amazon RDS for MySQL. The number of transactions increases rapidly during the day and is near zero at night.<br>How can a developer increase the elasticity of the system MOST cost-effectively?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#15",
            "answers": [
              {
                "choice": "<p>A. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale road replicas based on CPU consumption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate from Amazon RDS to Amazon Aurora MySQL. Use an Aurora Auto Scaling policy to scale read replicas based on the number of database connections.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda function. Turn on enhanced fanout for the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Publish transactions to the queue. Set the queue to invoke the Lambda function. Set the reserved concurrency of the Lambda function to be less than the number of database connections.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 15 discussion",
        "discusstion": [
          {
            "id": 656713,
            "date": "Fri 02 Sep 2022 00:59",
            "username": "JAMG54",
            "content": "A and B are for read problem, nor for write.<br>C its not possible because enhanced fanout its for kinesis<br>D is the most probably",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 663752,
            "date": "Thu 08 Sep 2022 17:49",
            "username": "SuperPiski",
            "content": "Read replicas are for read... transactions means that something have to be written.<br>There is no such thing of fanout for lambda.<br>This lead to D.  Because we've limited the number of concurrent lambdas to be lower than the number of connections, the system will run with no problems",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 750533,
            "date": "Tue 20 Dec 2022 06:25",
            "username": "mithunkundu1983",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 749966,
            "date": "Mon 19 Dec 2022 16:13",
            "username": "tieyua",
            "content": "scale from zero at night to thousands of busy shops during the day, is the exactly selling point of Aurora.I vote by the marketing sales pitch.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728566,
            "date": "Sun 27 Nov 2022 21:18",
            "username": "SBoksh",
            "content": "lambda reserved concurrency less than DB conn so when the db connection increases, lamda can scale up to reserved concurrency to provide a consistent rate WCU to RDS<br>https://docs.aws.amazon.com/lambda/latest/operatorguide/reserved-concurrency.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727818,
            "date": "Sat 26 Nov 2022 22:16",
            "username": "gpit",
            "content": "If fix the typo \\\"road replica\\\" to \\\"read replica\\\", \\\"A\\\" definitely is the answer as exemplified by https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html#Aurora.Integrating.AutoScaling.BYB<br><br>More connectivity doesn't mean the DB is busy.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720092,
            "date": "Thu 17 Nov 2022 01:14",
            "username": "dark_cherrymon",
            "content": "i don't get what's with the whole reserved concurrency. i got to D because abc got eliminated. also AB are not cost effective",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 687484,
            "date": "Thu 06 Oct 2022 07:23",
            "username": "adsdadasdad",
            "content": "How can a developer increase the elasticity of the system MOST cost-effectively?<br>sqs is a good choice but it states that the transactions are minimal at night and high through the day. This i believe points to aurora because it scales and uses the word elasticity. in this case sqs is defined not to scale in any matter and only solves the problem of parralel connections.Now the question is would you scale based on cpu or the amount of concurrent lambda requests. Like we saw it states that the number of transactions and not anything to do with CPU or READS but does impact the cpu but is not mentioned. i think this part confuses people and leads people to think to use sqs because it will solve the parralel problem of many requests. I do think its B.  Here is a full explenation of SuperPiski question around writing to scaled instances.https://aws.amazon.com/blogs/database/planning-i-o-in-amazon-aurora/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 675999,
            "date": "Thu 22 Sep 2022 12:53",
            "username": "venimus_vidimus_vicimus",
            "content": "never heard about fanout lambda",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 659999,
            "date": "Mon 05 Sep 2022 11:37",
            "username": "PVRMerrickSuperPiski",
            "content": "The answer is B. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html\\\"Aurora Auto Scaling enables your Aurora DB cluster to handle sudden increases in connectivity or workload. When the connectivity or workload decreases, Aurora Auto Scaling removes unnecessary Aurora Replicas so that you don't pay for unused provisioned DB instances.\\\"Transactions cannot be done with read replicas, should be done in the write instance.",
            "upvote_count": "312",
            "selected_answers": ""
          },
          {
            "id": 676827,
            "date": "Fri 23 Sep 2022 08:32",
            "username": "Merrick",
            "content": "\\\"Aurora Auto Scaling enables your Aurora DB cluster to handle sudden increases in connectivity or workload. When the connectivity or workload decreases, Aurora Auto Scaling removes unnecessary Aurora Replicas so that you don't pay for unused provisioned DB instances.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 663751,
            "date": "Thu 08 Sep 2022 17:47",
            "username": "SuperPiski",
            "content": "Transactions cannot be done with read replicas, should be done in the write instance.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 656739,
            "date": "Fri 02 Sep 2022 01:59",
            "username": "sindra",
            "content": "there is some ambiguity.. if we think that auora can scale to 0, i think the best answer is B. . but to optimize the design i believe its D since SQS cannot do the enhancedfanout by them self",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 656708,
            "date": "Fri 02 Sep 2022 00:22",
            "username": "JAMG54JAMG54",
            "content": "I think its Dhttps://docs.aws.amazon.com/lambda/latest/dg/services-rds.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 656715,
            "date": "Fri 02 Sep 2022 01:01",
            "username": "JAMG54",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/services-rds.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 656238,
            "date": "Thu 01 Sep 2022 14:34",
            "username": "Chhotu_DBA",
            "content": "I think its C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#16",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an AWS Lambda function. The Lambda function needs to access items that are stored in an Amazon DynamoDB table.<br>What is the MOST secure way to configure this access for the Lambda function?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#16",
            "answers": [
              {
                "choice": "<p>A. Create an IAM user that has permissions to access the DynamoDB table. Create an access key for this user. Store the access key ID and secret access key in the Lambda function environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a resource-based policy to the DynamoDB table to allow access from the Lambda function's IAM role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM policy that allows access to the DynamoDB table. Attach this policy to the Lambda function's IAM role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a DynamoDB Accelerator (DAX) cluster. Configure the Lambda function to use the DAX duster to access the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 16 discussion",
        "discusstion": [
          {
            "id": 720093,
            "date": "Thu 17 Nov 2022 01:18",
            "username": "dark_cherrymon",
            "content": "was going for B until i read the comment that dynamo db doesn't support role",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 714166,
            "date": "Wed 09 Nov 2022 01:13",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_lambda-access-dynamodb.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 691227,
            "date": "Mon 10 Oct 2022 16:00",
            "username": "scomperleur",
            "content": "Answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 682635,
            "date": "Thu 29 Sep 2022 13:56",
            "username": "habros",
            "content": "C.  Straightforward",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 662053,
            "date": "Wed 07 Sep 2022 07:48",
            "username": "gary_garyJabolSuperPiski",
            "content": "What is the difference between B and C?Resource-based policy is not supported for DynamoDb - https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html#database_svcshttps://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html<br>- Identity-based policies are attached to an IAM user, group, or role.<br>- Resource-based policies are attached to a resource.<br><br>In this case you are using a role, so identity based policies should be used.",
            "upvote_count": "162",
            "selected_answers": ""
          },
          {
            "id": 668636,
            "date": "Wed 14 Sep 2022 07:45",
            "username": "Jabol",
            "content": "Resource-based policy is not supported for DynamoDb - https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html#database_svcs",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 663757,
            "date": "Thu 08 Sep 2022 17:54",
            "username": "SuperPiski",
            "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html<br>- Identity-based policies are attached to an IAM user, group, or role.<br>- Resource-based policies are attached to a resource.<br><br>In this case you are using a role, so identity based policies should be used.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 658152,
            "date": "Sat 03 Sep 2022 09:07",
            "username": "sidvic",
            "content": "C.  Using Role is the must secure way",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#17",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is implementing user authentication and authorization for a web application that is hosted on an Amazon EC2 instance. The developer needs to ensure that the user credentials are encrypted and secure when they are stored and transmitted.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#17",
            "answers": [
              {
                "choice": "<p>A. Activate web server modules for authentication and authorization on the instance. Use HTTP basic authentication for the user login.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy a custom authentication and authorization API over HTTP. Store the user credentials on Amazon ElastiCache for Redis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Cognito to configure a user pool. Use the Amazon Cognito API to authenticate and authorize the users.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create IAM users. Assign the users to different IAM groups. Use AWS Single Sign-On to authenticate and authorize each user.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 17 discussion",
        "discusstion": [
          {
            "id": 658159,
            "date": "Sat 03 Sep 2022 09:17",
            "username": "sidvic",
            "content": "Use Amazon Cognito is the best Solution. I vote for c",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 764897,
            "date": "Tue 03 Jan 2023 18:15",
            "username": "Pratham111",
            "content": "pretty straight forward, use cognito.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 720095,
            "date": "Thu 17 Nov 2022 01:24",
            "username": "dark_cherrymon",
            "content": "C, just vote C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 684683,
            "date": "Sun 02 Oct 2022 10:12",
            "username": "andregri",
            "content": "To assure in-transit encryption you can't use HTTP.<br>I vote for C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 682640,
            "date": "Thu 29 Sep 2022 13:59",
            "username": "habros",
            "content": "End User side authentication - Cognito<br><br>SSO and IAM are for managing AWS resources. And, doesn=E2=80=99t make sense storing credentials in in-memory storages=E2=80=A6",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#18",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that has multiple offices uses an Amazon DynamoDB table to store employee payroll information. Item attributes consist of employee names, office identifiers, and cumulative daily hours worked The most frequently used query extracts a report of an alphabetical subset of employees for a specific office.<br>Which design of the DynamoDB table primary key will have the MINIMUM performance impact?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#18",
            "answers": [
              {
                "choice": "<p>A. Partition key on the office identifier and sort key on the employee name<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Partition key on the employee name and sort key on the office identifier<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Partition key on the employee name<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Partition key on the office identifier<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 18 discussion",
        "discusstion": [
          {
            "id": 662407,
            "date": "Wed 07 Sep 2022 13:29",
            "username": "quirio1983",
            "content": "It=C2=B4s A",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 684685,
            "date": "Sun 02 Oct 2022 10:16",
            "username": "andregri",
            "content": "B because the partition key must have high caridinality to avoid hot partitions",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 765212,
            "date": "Wed 04 Jan 2023 04:55",
            "username": "efex",
            "content": "The answer should be C.  Because we should find the MINIMUM IMPACT on the primary key. So, we should find the worst case.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 749987,
            "date": "Mon 19 Dec 2022 16:31",
            "username": "tieyuatieyua",
            "content": "Partition by employee is a given, don't second guess.The keyword of this question is \\\"alphabetical subset of employees for a specific office\\\". You query with key condition A-C, filter expression office'xyz'Nevermind, back to A. Key condition is equal only, so has to query by office and sort by name. <br><br>That headquarter partition must be smoking!!!",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 765034,
            "date": "Tue 03 Jan 2023 21:45",
            "username": "tieyua",
            "content": "Nevermind, back to A. Key condition is equal only, so has to query by office and sort by name. <br><br>That headquarter partition must be smoking!!!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720100,
            "date": "Thu 17 Nov 2022 01:36",
            "username": "dark_cherrymon",
            "content": "it's A. <br><br>office is the unique identifier so it's the partion key and it's A.  imagine if this were a movie listing, the movie id would be the partion and the thousands of employees would be sort key. you'll get a hot partion but using employees instead of movie id as partion key makes no sense",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 714171,
            "date": "Wed 09 Nov 2022 01:30",
            "username": "cloud_collector",
            "content": "\\\"extracts a report of an alphabetical subset of employees for a specific office\\\"<br>Partition key on the office identifier<br>Sort key on the employee name",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 711747,
            "date": "Sat 05 Nov 2022 13:39",
            "username": "rakb456",
            "content": "It's A. <br>From https://aws.amazon.com/tw/premiumsupport/knowledge-center/primary-key-dynamodb-table/<br><br>Composite primary key: This is a combination of partition key and sort key. If the table has a composite primary key, then two items might have the same partition key value. However, those items must have different sort key values.<br><br>same partition key value :Office identifier<br>different sort key values: employee name",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 703884,
            "date": "Tue 25 Oct 2022 15:02",
            "username": "tbhtp",
            "content": "It is frankly confusing that the partition key and sort key form a primary key that influences partitioning to some extend. But be careful. In most cases, where 10GB are not exceeded, the sort key does NOT influence partitioning. Hence the partition key only will decide the physical partition which will most likely result in a hot partition.<br><br>This article will help: https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 682644,
            "date": "Thu 29 Sep 2022 14:01",
            "username": "habros",
            "content": "Treating sort key as a composite key, high cardinality, A. <br>Partition key for department, sort key for employee",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 672345,
            "date": "Sun 18 Sep 2022 14:29",
            "username": "Gene_PooleSuperPiskitfertbhtp",
            "content": "B You want to \\\"use a high-cardinality value for your partition key.\\\" https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/Totally agree. I vote for B. <br><br>Partition key must be \\\"as random as possible\\\" (high cardinality value). The more \\\"random\\\" it is, the less propability that a partition becomes \\\"hot\\\" because all read actions goes to that partition.<br><br>So, if you have, lets say, 4 companies and 200 employees, then you have only 4 partitions for companies, but 200 for names.<br><br>\\\"DynamoDB uses the partition key=E2=80=99s value as an input to an internal hash function. The output from the hash function determines the partition in which the item is stored. Each item=E2=80=99s location is determined by the hash value of its partition key.\\\"Should be A, due to https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html<br>\\\"In an Amazon DynamoDB table, the primary key that uniquely identifies each item in the table can be composed not only of a partition key, but also of a sort key.\\\"<br>It acts as kind of a composite key, so you will still have the cardinalityNot entirely true. Mind the 10GB condition. This will help: https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/",
            "upvote_count": "2231",
            "selected_answers": ""
          },
          {
            "id": 682743,
            "date": "Thu 29 Sep 2022 15:47",
            "username": "SuperPiski",
            "content": "Totally agree. I vote for B. <br><br>Partition key must be \\\"as random as possible\\\" (high cardinality value). The more \\\"random\\\" it is, the less propability that a partition becomes \\\"hot\\\" because all read actions goes to that partition.<br><br>So, if you have, lets say, 4 companies and 200 employees, then you have only 4 partitions for companies, but 200 for names.<br><br>\\\"DynamoDB uses the partition key=E2=80=99s value as an input to an internal hash function. The output from the hash function determines the partition in which the item is stored. Each item=E2=80=99s location is determined by the hash value of its partition key.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 679251,
            "date": "Mon 26 Sep 2022 00:18",
            "username": "tfertbhtp",
            "content": "Should be A, due to https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html<br>\\\"In an Amazon DynamoDB table, the primary key that uniquely identifies each item in the table can be composed not only of a partition key, but also of a sort key.\\\"<br>It acts as kind of a composite key, so you will still have the cardinalityNot entirely true. Mind the 10GB condition. This will help: https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 703886,
            "date": "Tue 25 Oct 2022 15:04",
            "username": "tbhtp",
            "content": "Not entirely true. Mind the 10GB condition. This will help: https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 659390,
            "date": "Sun 04 Sep 2022 18:30",
            "username": "mekcoll",
            "content": "why not A?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 659144,
            "date": "Sun 04 Sep 2022 11:28",
            "username": "Danbraga",
            "content": "A.  you need the partition key to be office, since you are extracting a list of employers by office",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 658785,
            "date": "Sat 03 Sep 2022 21:47",
            "username": "ADI2608",
            "content": "Its A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 658176,
            "date": "Sat 03 Sep 2022 09:26",
            "username": "sidvic",
            "content": "It was B ?",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#19",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a microservices application that uses Amazon API Gateway. AWS Lambda, Amazon Simple Queue Service (Amazon SQS), and Amazon<br>DynamoDB.  One of the Lambda functions adds messages to an SQS FIFO queue.<br>When a developer checks the application logs, the developer finds a few duplicated items in a DynamoDB table. The items were inserted by another polling function that processes messages from the queue.<br>What is the MOST likely cause of this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#19",
            "answers": [
              {
                "choice": "<p>A. Write operations on the DynamoDB table are being throttled.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The SQS queue delivered the message to the function more than once.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. API Gateway duplicated the message in the SQS queue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The polling function timeout is greater than the queue visibility timeout.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 19 discussion",
        "discusstion": [
          {
            "id": 658196,
            "date": "Sat 03 Sep 2022 09:45",
            "username": "sidvic",
            "content": "The only plausible solution",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 720106,
            "date": "Thu 17 Nov 2022 01:55",
            "username": "dark_cherrymon",
            "content": "\\\" If you don=E2=80=99t set the visibility timeout correctly, your message may be re-processed\\\"<br><br>https://tomgregory.com/3-surprising-facts-about-aws-sqs-fifo-queues/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 684689,
            "date": "Sun 02 Oct 2022 10:22",
            "username": "andregri",
            "content": "If the function does not delete the message from SQS before the Visibility Timeout expires, another function will process the same message twice.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 675548,
            "date": "Thu 22 Sep 2022 00:12",
            "username": "CollinsWolf",
            "content": "D<br>It is very important to set the visibility timeout to a longer time because if the request does not get processed faster than the timeout, then it becomes visible again in the queue and its picked up by another service and reprocessed. This will result in duplicate processes.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 668778,
            "date": "Wed 14 Sep 2022 10:35",
            "username": "Jabol",
            "content": "\\\"Unlike standard queues, FIFO queues don't introduce duplicate messages. FIFO queues help you avoid sending duplicates to a queue.\\\"<br><br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#20",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team has been using a builder server that is hosted on an Amazon EC2 instance to perform builds and deployments for the last 3 months. The<br>EC2 instance's instance profile uses an IAM role that contains the Administrator Access managed policy. The development team must replace that policy with a policy that provides only the required permissions.<br>What is the FASTEST way to create a custom 1AM policy for the EC2 instance to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#20",
            "answers": [
              {
                "choice": "<p>A. Create a new IAM policy based on services that the build server deployed or updated in the last 3 months.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new IAM policy that includes all actions that AWS CloudTrail recorded for the IAM role in the last 3 months.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new permissions boundary policy that denies all access. Associate the permissions boundaries with the IAM role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new IAM policy by using Amazon Athena to query an Amazon S3 bucket that contains AWS CloudTrail events that the IAM role performed in the last 3 months.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 20 discussion",
        "discusstion": [
          {
            "id": 662466,
            "date": "Wed 07 Sep 2022 14:31",
            "username": "gary_gary",
            "content": "\\\"As an administrator or developer, you might grant permissions to IAM entities (users or roles) beyond what they require. IAM provides several options to help you refine the permissions that you grant. One option is to generate an IAM policy that is based on access activity for an entity. IAM Access Analyzer reviews your AWS CloudTrail logs and generates a policy template that contains the permissions that the entity used in your specified date range. You can use the template to create a policy with fine-grained permissions that grant only the permissions that are required to support your specific use case.\\\"<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_generate-policy.html",
            "upvote_count": "17",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657136,
            "date": "Fri 02 Sep 2022 09:44",
            "username": "JOL86",
            "content": "I'm not sure between A and B. <br>While it doesn't specify, another service (EC2 instance) could be sharing that role and CloudTrail would show actions from that other service using this IAM role as well. <br><br>I am leaning towards A, just because the answer of B is \\\"includes all actions\\\", sounds like there would be more actions than required",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 729204,
            "date": "Mon 28 Nov 2022 15:15",
            "username": "humble_developer",
            "content": "Should be A.  Digging through CloudTrail log to find out all action does not sound fast enough for me. Again, the question mentioned the Intance role that EC2 using is for Admin, and this could includes more than enough action that will be included in the CloudTrail Log. Besides, the answer A bounds only resouces that was actually used from the team.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728558,
            "date": "Sun 27 Nov 2022 21:09",
            "username": "SBoksh",
            "content": "Access analyzer reviews cloudtrail logs and generate a template policy that can be further refined to restrict access",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 714184,
            "date": "Wed 09 Nov 2022 02:04",
            "username": "cloud_collector",
            "content": "The question is asking a way to create a policy with meet the requirement.<br>Using Athena with CloudTrail logs is a powerful way to enhance your analysis of AWS service activity.<br>But in here , no metioned to ask a good analysis tools or way for the logs.<br>https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 689534,
            "date": "Sat 08 Oct 2022 19:15",
            "username": "haazybanj",
            "content": "Correct answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 687004,
            "date": "Wed 05 Oct 2022 17:32",
            "username": "habros",
            "content": "B and D are possible. But fastest is B, as cloud trail can query also",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 670095,
            "date": "Thu 15 Sep 2022 18:06",
            "username": "Harry_01",
            "content": "I think its A.  The role used is for Administrator. The question does not say that only the EC2 instance was performing actions. The real Administrator must also be doing some actions. So taking out what was used by the \\\"IAM ROLE\\\" will give you more information that required. So best is to just look at what all was deployed by the EC2 instance. Which is option A. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 670087,
            "date": "Thu 15 Sep 2022 17:54",
            "username": "Harry_01",
            "content": "I think its A.  The role used is for Administrator. The question does not say that only the EC2 instance was performing actions. The real Administrator must also be doing some actions. So taking out what was used by the \\\"IAM ROLE\\\" will give you more information that required. So best is to just look at what all was deployed by the EC2 instance. Which is option A. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 665856,
            "date": "Sun 11 Sep 2022 08:23",
            "username": "Mahditopg",
            "content": "Athena is the fastest way since you use the query language i dont think going through the entire cloudtrail logs the last 3 months is a fast way lol but you can create a trail and set the s3 bucket as a destination and use sql on the bucket with athena that's the fastest way in my opinion",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 660012,
            "date": "Mon 05 Sep 2022 11:53",
            "username": "PVR",
            "content": "Using Athena to query S3 CloudTrail logs seems very much possible and would be faster too.<br>https://hevodata.com/learn/cloudtrail-data-events/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657415,
            "date": "Fri 02 Sep 2022 14:29",
            "username": "sindram_t_kd",
            "content": "i agreed with BI agree with B as it is asking for FASTEST way.",
            "upvote_count": "63",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657935,
            "date": "Sat 03 Sep 2022 02:47",
            "username": "m_t_kd",
            "content": "I agree with B as it is asking for FASTEST way.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 656720,
            "date": "Fri 02 Sep 2022 01:21",
            "username": "JAMG54",
            "content": "It can be B",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#21",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to write an AWS CloudFormation template on a local machine and deploy a CloudFormation stack to AWS.<br>What must the developer do to complete these tasks?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#21",
            "answers": [
              {
                "choice": "<p>A. Install the AWS CLI. Configure the AWS CLI by using an IAM user name and password.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the AWS CLI. Configure the AWS CLI by using an SSH key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the AWS CLI. Configure the AWS CLI by using an IAM user access key and secret key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install an AWS software development kit (SDK). Configure the SDK by using an X.509 certificate.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 21 discussion",
        "discusstion": [
          {
            "id": 658219,
            "date": "Sat 03 Sep 2022 10:10",
            "username": "sidvic",
            "content": "For Aws CLI Command, we need access keyand secret access key",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 726363,
            "date": "Fri 25 Nov 2022 04:10",
            "username": "G4Exams",
            "content": "It's C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 701060,
            "date": "Fri 21 Oct 2022 18:30",
            "username": "cwit63",
            "content": "C for sure",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#22",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is working on a web application that runs on Amazon Elastic Container Service (Amazon ECS) and uses an Amazon DynamoDB table to store data.<br>The application performs a large number of read requests against a small set of the table data.<br>How can the developer improve the performance of these requests? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#22",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon ElastiCache cluster. Configure the application to cache data in the cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a DynamoDB Accelerator (DAX) cluster. Configure the application to use the DAX cluster for DynamoDB requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the application to make strongly consistent read requests against the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the read capacity of the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Enable DynamoDB adaptive capacity.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 22 discussion",
        "discusstion": [
          {
            "id": 656725,
            "date": "Fri 02 Sep 2022 01:33",
            "username": "JAMG54",
            "content": "A and B",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 689537,
            "date": "Sat 08 Oct 2022 19:20",
            "username": "haazybanj",
            "content": "B and D",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 750543,
            "date": "Tue 20 Dec 2022 06:52",
            "username": "mithunkundu1983",
            "content": "Answer A & B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720122,
            "date": "Thu 17 Nov 2022 02:36",
            "username": "dark_cherrymon",
            "content": "AB because the others don't make sense. E is by default so that does nothing. C and D don't seem relevant",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 714185,
            "date": "Wed 09 Nov 2022 02:05",
            "username": "promartyr",
            "content": "The term is \\\"on-demand\\\" capacity, and not \\\"adaptive\\\" capacity... Hmm...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705804,
            "date": "Thu 27 Oct 2022 19:58",
            "username": "iis",
            "content": "C is the only wrong one.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 682685,
            "date": "Thu 29 Sep 2022 14:37",
            "username": "habros",
            "content": "A&B. <br><br>Strongly consistent is only useful for race conditions - if not mission critical then eventual consitent will do<br>Although increasing Read Capacity units (RCUs) is fastest way to increase performance, but it=E2=80=99s more for large amount of resultset than for quicker retrieval.<br>Adaptive capacity? Unless you meant autoscaling. DynamoDB have provisioned RCU/WCU auto-scaling (same as previous issue on read capacity)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 676221,
            "date": "Thu 22 Sep 2022 15:55",
            "username": "GenePoolepromartyr",
            "content": "A is a cache, B is an in memory acceleration (cache), there seems little point using both at the same time. Either would be an improvement. But B is the one to choose.<br>C - Strongly consistent reads will halve the read capacity, so this is stupid.<br>D - Increase the read capacity makes some sense, but if we are using DAX is it needed ?<br>E - Adaptive capacity is on by default, so unless it had been disabled then it can't be enabled.<br><br>A&B or B&D, probably A&BThe question is not asking for \\\"a combination of things to do\\\". I think it wants us to choose two things we can do, but not necessarily at the same time. So, B and D make sense to me...",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 714188,
            "date": "Wed 09 Nov 2022 02:07",
            "username": "promartyr",
            "content": "The question is not asking for \\\"a combination of things to do\\\". I think it wants us to choose two things we can do, but not necessarily at the same time. So, B and D make sense to me...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 668706,
            "date": "Wed 14 Sep 2022 09:23",
            "username": "vrushanya",
            "content": "B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 660018,
            "date": "Mon 05 Sep 2022 12:00",
            "username": "PVR",
            "content": "A and B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 658013,
            "date": "Sat 03 Sep 2022 05:07",
            "username": "sindraLaXuanLinh",
            "content": "B and E<br>reference for E: https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-dynamodb-adaptive-capacity-is-now-instant/<br><br>Keyword imbalanced workloadthat's not correct, Adaptive Capacity is enabled by default so you don't need and CAN\\\"T enable or disable it<br>https://aws.amazon.com/it/blogs/database/how-amazon-dynamodb-adaptive-capacity-accommodates-uneven-data-access-patterns-or-why-what-you-know-about-dynamodb-might-be-outdated/#:~:textAdaptive%20capacity%20is%20available%20by,any%20new%20Amazon%20CloudWatch%20metrics.",
            "upvote_count": "36",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 665173,
            "date": "Sat 10 Sep 2022 08:53",
            "username": "LaXuanLinh",
            "content": "that's not correct, Adaptive Capacity is enabled by default so you don't need and CAN\\\"T enable or disable it<br>https://aws.amazon.com/it/blogs/database/how-amazon-dynamodb-adaptive-capacity-accommodates-uneven-data-access-patterns-or-why-what-you-know-about-dynamodb-might-be-outdated/#:~:textAdaptive%20capacity%20is%20available%20by,any%20new%20Amazon%20CloudWatch%20metrics.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 657931,
            "date": "Sat 03 Sep 2022 02:39",
            "username": "szhang2004",
            "content": "B and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 655473,
            "date": "Wed 31 Aug 2022 22:36",
            "username": "Danbragaowe87JAMG54",
            "content": "B an EE.  Adaptive capacity is available by default for every DynamoDB table, so you don't need to explicitly enable or disable it<br>https://aws.amazon.com/it/blogs/database/how-amazon-dynamodb-adaptive-capacity-accommodates-uneven-data-access-patterns-or-why-what-you-know-about-dynamodb-might-be-outdated/#:~:textAdaptive%20capacity%20is%20available%20by,any%20new%20Amazon%20CloudWatch%20metrics.How you can enable adaptative capacity? :o",
            "upvote_count": "331",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 657092,
            "date": "Fri 02 Sep 2022 09:11",
            "username": "owe87",
            "content": "E.  Adaptive capacity is available by default for every DynamoDB table, so you don't need to explicitly enable or disable it<br>https://aws.amazon.com/it/blogs/database/how-amazon-dynamodb-adaptive-capacity-accommodates-uneven-data-access-patterns-or-why-what-you-know-about-dynamodb-might-be-outdated/#:~:textAdaptive%20capacity%20is%20available%20by,any%20new%20Amazon%20CloudWatch%20metrics.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 656726,
            "date": "Fri 02 Sep 2022 01:33",
            "username": "JAMG54",
            "content": "How you can enable adaptative capacity? :o",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#23",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to use Amazon DynamoDB to store customer orders. The developer's company requires all customer data to be encrypted at rest with a key that the company generates.<br>What should the developer do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#23",
            "answers": [
              {
                "choice": "<p>A. Create the DynamoDB table with encryption set to None. Code the application to use the key to decrypt the data when the application reads from the table. Code the application to use the key to encrypt the data when the application writes to the table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS customer managed key during creation of the DynamoDB table. Provide the Amazon Resource Name (ARN) of the AWS KMS key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the key by using AWS Key Management Service (AWS KMS). Create the DynamoDB table with default encryption. Include the kms:Encrypt parameter with the Amazon Resource Name (ARN) of the AWS KMS key when using the DynamoDB software development kit (SDK).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the key by using AWS Key Management Service (AWS KMS). Choose an AWS KMS AWS managed key during creation of the DynamoDB table. Provide the AmazonResource Name (ARN) of the AWS KMS key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 23 discussion",
        "discusstion": [
          {
            "id": 657304,
            "date": "Fri 02 Sep 2022 12:33",
            "username": "Vinafec",
            "content": "B<br><br>https://aws.amazon.com/blogs/database/bring-your-own-encryption-keys-to-amazon-dynamodb/",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658018,
            "date": "Sat 03 Sep 2022 05:11",
            "username": "sindra",
            "content": "B , because the company want to create the key by themself and store it to KMS",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 689540,
            "date": "Sat 08 Oct 2022 19:23",
            "username": "haazybanj",
            "content": "It is B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 660019,
            "date": "Mon 05 Sep 2022 12:01",
            "username": "PVR",
            "content": "Company managed key",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656946,
            "date": "Fri 02 Sep 2022 06:36",
            "username": "m_t_kd",
            "content": "It is B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 655895,
            "date": "Thu 01 Sep 2022 08:55",
            "username": "LEHUY",
            "content": "C .",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#24",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a solution to track an account's Amazon S3 buckets over time. The developer has created an AWS Lambda function that will run on a schedule. The function will list the account's S3 buckets and will store the list in an Amazon DynamoDB table. The developer receives a permissions error when the developer runs the function with the AWSLambdaBasicExecutionRole AWS managed policy.<br>Which combination of permissions should the developer use to resolve this error? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#24",
            "answers": [
              {
                "choice": "<p>A. Cross-account IAM role<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Permission for the Lambda function to list buckets in Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Permission for the Lambda function to write in DynamoDB<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Permission for Amazon S3 to invoke the Lambda function<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Permission for DynamoDB to invoke the Lambda function<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 24 discussion",
        "discusstion": [
          {
            "id": 755133,
            "date": "Sat 24 Dec 2022 21:45",
            "username": "braveheart22Pratham111",
            "content": "This question is a little bit confusing from my point of view, please can anyone explain briefly why the correct answers should not be C & E?According to the question, Lambda function only needs to write to the dynamodb table and dynamodb wont need to invoke the function(doesn't make sense). rather, the function needs access to the s3 list.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 764911,
            "date": "Tue 03 Jan 2023 18:53",
            "username": "Pratham111",
            "content": "According to the question, Lambda function only needs to write to the dynamodb table and dynamodb wont need to invoke the function(doesn't make sense). rather, the function needs access to the s3 list.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 750544,
            "date": "Tue 20 Dec 2022 06:54",
            "username": "mithunkundu1983",
            "content": "Answer b & C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 694628,
            "date": "Fri 14 Oct 2022 11:26",
            "username": "ramireze",
            "content": "the correct answer B&C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 658242,
            "date": "Sat 03 Sep 2022 10:38",
            "username": "sidvic",
            "content": "For the Answer it is BC, although the \\\"AWSLambdaBasicExecutionRole\\\" is the permission to write logs to CloudWatch https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 658021,
            "date": "Sat 03 Sep 2022 05:15",
            "username": "sindra",
            "content": "I beleive its B and C. . since the lambda need to read from the s3 (getlist) and write to dynamo DB",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#25",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is adding items to an Amazon DynamoDB table from an AWS Lambda function that is written in Python. A developer needs to implement a solution that inserts records in the DynamoDB table and performs automatic retry when the insert fails.<br>Which solution meets these requirements with MINIMUM code changes?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#25",
            "answers": [
              {
                "choice": "<p>A. Configure the Python code to run the AWS CLI through shell to call the PutItem operation<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call the PutItem operation from Python by using the DynamoDB HTTP API<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Queue the items in AWS Glue, which will put them into the DynamoDB table<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS software development kit (SDK) for Python (boto3) to call the PutItem operation<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 25 discussion",
        "discusstion": [
          {
            "id": 665825,
            "date": "Sun 11 Sep 2022 07:14",
            "username": "LaXuanLinh",
            "content": "The answer is D<br>The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests using Error retries and exponential backoff.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 701062,
            "date": "Fri 21 Oct 2022 18:39",
            "username": "cwit63",
            "content": "It is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693719,
            "date": "Thu 13 Oct 2022 09:54",
            "username": "denbond",
            "content": "D since AWS SDKs implements exponential backoff which will retry the requests until they are successful",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 671902,
            "date": "Sun 18 Sep 2022 03:06",
            "username": "tam2801",
            "content": "Voted D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 658046,
            "date": "Sat 03 Sep 2022 05:57",
            "username": "sindra",
            "content": "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html<br><br>answer should be D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#26",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is writing an AWS Lambda function. The developer wants to log key events that occur during the Lambda function and include a unique identifier to associate the events with a specific function invocation.<br>Which of the following will help the developer accomplish this objective?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#26",
            "answers": [
              {
                "choice": "<p>A. Obtain the request identifier from the Lambda context object. Architect the application to write logs to the console.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Obtain the request identifier from the Lambda event object. Architect the application to write logs to a file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Obtain the request identifier from the Lambda event object. Architect the application to write logs to the console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Obtain the request identifier from the Lambda context object. Architect the application to write logs to a file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 26 discussion",
        "discusstion": [
          {
            "id": 167156,
            "date": "Wed 06 Oct 2021 19:29",
            "username": "rasiram",
            "content": "Answer A<br>When Lambda runs your function, it passes a context object to the handler. This object provides methods and properties that provide information about the invocation, function, and execution environment.<br><br>Context methods<br><br>getRemainingTimeInMillis() =E2=80=93 Returns the number of milliseconds left before the execution times out.<br><br>Context properties<br><br>functionName =E2=80=93 The name of the Lambda function.<br><br>functionVersion =E2=80=93 The version of the function.<br><br>invokedFunctionArn =E2=80=93 The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.<br><br>memoryLimitInMB =E2=80=93 The amount of memory that's allocated for the function.<br><br>awsRequestId =E2=80=93 The identifier of the invocation request.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 245387,
            "date": "Fri 15 Oct 2021 22:43",
            "username": "RicardoDbr00netai_neuroCHRIS12722222",
            "content": "A is the answer<br><br>Each service that integrates with Lambda sends data to your function in JSON as an event. The structure of the event document is different for each event type, and contains data about the resource or request that triggered the function. Lambda runtimes convert the event into an object and pass it to your function.An identifier that can be obtained from the Lambda context object is automatically included in the log message.<br>As in the question developer wants - \\\" to associate the events with a specific function invocation.\\\" We need to obtain another id: var apiRequestIdevent.context['request-id'];It's A: The this identifier is not automatically included in the log message.<br><br>I think you are referring to this post here: https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/<br><br>However, in this case the request-id is only found in the event structure because the blogger re-sends the API-gateway context information ($context.requestId) to the downstream lambda usinga mapping template.Your claim is not correct. Lambda request id is automatically included in the log message. This is exactly what is stated in the link you urself posted.<br><br>C is correct<br><br>https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/",
            "upvote_count": "12331",
            "selected_answers": ""
          },
          {
            "id": 334665,
            "date": "Sat 16 Oct 2021 19:09",
            "username": "br00netai_neuroCHRIS12722222",
            "content": "An identifier that can be obtained from the Lambda context object is automatically included in the log message.<br>As in the question developer wants - \\\" to associate the events with a specific function invocation.\\\" We need to obtain another id: var apiRequestIdevent.context['request-id'];It's A: The this identifier is not automatically included in the log message.<br><br>I think you are referring to this post here: https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/<br><br>However, in this case the request-id is only found in the event structure because the blogger re-sends the API-gateway context information ($context.requestId) to the downstream lambda usinga mapping template.Your claim is not correct. Lambda request id is automatically included in the log message. This is exactly what is stated in the link you urself posted.<br><br>C is correct<br><br>https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/",
            "upvote_count": "331",
            "selected_answers": ""
          },
          {
            "id": 368802,
            "date": "Wed 03 Nov 2021 11:31",
            "username": "ai_neuroCHRIS12722222",
            "content": "It's A: The this identifier is not automatically included in the log message.<br><br>I think you are referring to this post here: https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/<br><br>However, in this case the request-id is only found in the event structure because the blogger re-sends the API-gateway context information ($context.requestId) to the downstream lambda usinga mapping template.Your claim is not correct. Lambda request id is automatically included in the log message. This is exactly what is stated in the link you urself posted.<br><br>C is correct<br><br>https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 534906,
            "date": "Fri 28 Jan 2022 20:15",
            "username": "CHRIS12722222",
            "content": "Your claim is not correct. Lambda request id is automatically included in the log message. This is exactly what is stated in the link you urself posted.<br><br>C is correct<br><br>https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 763443,
            "date": "Mon 02 Jan 2023 02:33",
            "username": "ayoubmk",
            "content": "The simplest way to see logs from your AWS lambda function is in the console so I vote for A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 755953,
            "date": "Sun 25 Dec 2022 20:35",
            "username": "fabriciollf",
            "content": "The correct answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729232,
            "date": "Mon 28 Nov 2022 15:36",
            "username": "humble_developer",
            "content": "Only Context object will give the request identifier, so the question is whether writing to log or console. From development perspective, it must be writing to file for logging, as writing to console is not persistent. Hence, answer is D. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728744,
            "date": "Mon 28 Nov 2022 03:20",
            "username": "SBoksh",
            "content": "context.awsRequestId is the unique ID for Lambda that can be associated with the events<br><br>Other option that says event context id (var apiRequestIdevent.context['request-id']) is the API Gateway event context request ID , that is passed to lambda using mapping template (https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/). It is not mentioned anywhere Lambda is invoked by API gateway.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727896,
            "date": "Sun 27 Nov 2022 03:34",
            "username": "gpit",
            "content": "A. Per the question 1. There must be a list of key events that interest the developer; 2. each of the event invokes a different function. So the functionName fron lambda context is a good candidate for the ID to the event.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724859,
            "date": "Wed 23 Nov 2022 04:27",
            "username": "IvanPetrovichPavlov",
            "content": "needs to log key events into file, since CloudWatch logs will contains too much noise.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 720148,
            "date": "Thu 17 Nov 2022 03:45",
            "username": "dark_cherrymon",
            "content": "C?<br><br>event and context has request id<br><br>the question says it wants to associate lambda with the event, so i would think that event isthe api gateway and not lambda itself<br><br>exports.handlerfunction(event, context) {<br>var apiRequestIdevent.context['request-id'];<br>var lambdaRequestIdcontext.awsRequestId;<br>console.log(\\\"API Gateway Request ID: \\\" + apiRequestId + \\\" Lambda Request ID: \\\" + context.awsRequestId);<br>var logprefix\\\"APIG: \\\" + apiRequestId + \\\" -\\\";<br>console.log(logprefix + \\\"hello world!\\\");<br>...<br>}",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 691303,
            "date": "Mon 10 Oct 2022 17:26",
            "username": "SuperPiski",
            "content": "According to Tutorial Dojo the correct answer is D:<br><br>The option that says: Get the awsRequestId from the context object and log it to the console is incorrect. This won=E2=80=99t be an effective logging solution as the logs with specific events would be difficult to find through the stream of CloudWatch Logs. Also, if the objective is to log to the console, getting the request ID from the context object will no longer be necessary since CloudWatch Logs already does this for you.<br><br>So...the correct one is to log to a file because it is already logger to the console, so there is no need to do that...",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 678795,
            "date": "Sun 25 Sep 2022 15:03",
            "username": "GenePoole",
            "content": "The request identifier is found in the context, logging to console will appear in the log.<br><br>https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 540038,
            "date": "Thu 03 Feb 2022 23:09",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 452990,
            "date": "Sat 06 Nov 2021 02:15",
            "username": "jc966",
            "content": "A<br><br>https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 352610,
            "date": "Sat 30 Oct 2021 19:54",
            "username": "VAG1595",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314846,
            "date": "Sat 16 Oct 2021 18:03",
            "username": "br00netai_neurobr00netdark_cherrymonVeitai_neuro",
            "content": "C is the correct answer<br>An identifier that can be obtained from the Lambda context object is automatically included in the log message.<br>As in the question developer wants - \\\" to associate the events with a specific function invocation.\\\" We need to obtain another id: var apiRequestIdevent.context['request-id'];It's A: The this identifier is not automatically included in the log message.<br><br>I think you are referring to this post here: https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/<br><br>However, in this case the request-id is only found in the event structure because the blogger re-sends the API-gateway context information ($context.requestId) to the downstream lambda usinga mapping template.I will strengthen my argumentation: couple of weeks ago I took the exam and my score was 994/1000ok it's C then, i was thinking C too, suprised it was just the other twothe reality is that \\\"The exam includes 15 unscored questions that do not affect your score.\\\" (https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)<br>So, it possible that you failed 15 of 65 questions and still have 1000/1000congrats to your results, though",
            "upvote_count": "533124",
            "selected_answers": ""
          },
          {
            "id": 368803,
            "date": "Thu 04 Nov 2021 03:36",
            "username": "ai_neuro",
            "content": "It's A: The this identifier is not automatically included in the log message.<br><br>I think you are referring to this post here: https://aws.amazon.com/blogs/compute/techniques-and-tools-for-better-serverless-api-logging-with-amazon-api-gateway-and-aws-lambda/<br><br>However, in this case the request-id is only found in the event structure because the blogger re-sends the API-gateway context information ($context.requestId) to the downstream lambda usinga mapping template.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 348868,
            "date": "Fri 29 Oct 2021 06:10",
            "username": "br00netdark_cherrymonVeitai_neuro",
            "content": "I will strengthen my argumentation: couple of weeks ago I took the exam and my score was 994/1000ok it's C then, i was thinking C too, suprised it was just the other twothe reality is that \\\"The exam includes 15 unscored questions that do not affect your score.\\\" (https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)<br>So, it possible that you failed 15 of 65 questions and still have 1000/1000congrats to your results, though",
            "upvote_count": "3124",
            "selected_answers": ""
          },
          {
            "id": 720143,
            "date": "Thu 17 Nov 2022 03:22",
            "username": "dark_cherrymon",
            "content": "ok it's C then, i was thinking C too, suprised it was just the other two",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 680505,
            "date": "Tue 27 Sep 2022 10:01",
            "username": "Veit",
            "content": "the reality is that \\\"The exam includes 15 unscored questions that do not affect your score.\\\" (https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)<br>So, it possible that you failed 15 of 65 questions and still have 1000/1000",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 368804,
            "date": "Fri 05 Nov 2021 07:17",
            "username": "ai_neuro",
            "content": "congrats to your results, though",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 189649,
            "date": "Thu 14 Oct 2021 19:27",
            "username": "Chinta",
            "content": "Answer is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174951,
            "date": "Tue 12 Oct 2021 04:35",
            "username": "saeidp",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#27",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company experienced partial downtime during the last deployment of a new application. AWS Elastic Beanstalk split the environment's Amazon EC2 instances into batches and deployed a new version one batch at a time after taking them out of service. Therefore, full capacity was not maintained during deployment.<br>The developer plans to release a new version of the application, and is looking for a policy that will maintain full capacity and minimize the impact of the failed deployment.<br>Which deployment policy should the developer use?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#27",
            "answers": [
              {
                "choice": "<p>A. Immutable<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. All at Once<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Rolling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Rolling with an Additional Batch<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 27 discussion",
        "discusstion": [
          {
            "id": 246572,
            "date": "Wed 13 Oct 2021 10:46",
            "username": "RicardoDlostrezolthar_z",
            "content": "A is the answer<br><br>Immutable infrastructure has become a new norm in IT operations.<br><br>Immutable Deployment is one of those approaches, and it simply means: Immutable: the =E2=80=9Cstaging=E2=80=9D environment, once ready to become production, doesn't change. If we need to change something, we then deploy new code on completely new infrastructure.<br><br>The benefits of an immutable infrastructure include more consistency and reliability in your infrastructure and a simpler, more predictable deployment processi will have to disagree with you this time<br>Minimal impact comes with deploying a small percentage on a new batch for testing and not all at once<br>If you have 100 users in immutable they will all have problem (impact) until rollback<br>If you have 10% on a new batch only 1- will have problem till rollback<br>Answer is D for me as this is on a new batchEven with additional batch full capacity is not accomplished and if you want a rollback you need to perform a new deployment, with A if you have an issue the rollback is more easy, Answer is A",
            "upvote_count": "2056",
            "selected_answers": ""
          },
          {
            "id": 254883,
            "date": "Thu 14 Oct 2021 11:50",
            "username": "lostrezolthar_z",
            "content": "i will have to disagree with you this time<br>Minimal impact comes with deploying a small percentage on a new batch for testing and not all at once<br>If you have 100 users in immutable they will all have problem (impact) until rollback<br>If you have 10% on a new batch only 1- will have problem till rollback<br>Answer is D for me as this is on a new batchEven with additional batch full capacity is not accomplished and if you want a rollback you need to perform a new deployment, with A if you have an issue the rollback is more easy, Answer is A",
            "upvote_count": "56",
            "selected_answers": ""
          },
          {
            "id": 256201,
            "date": "Mon 18 Oct 2021 03:11",
            "username": "zolthar_z",
            "content": "Even with additional batch full capacity is not accomplished and if you want a rollback you need to perform a new deployment, with A if you have an issue the rollback is more easy, Answer is A",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 742532,
            "date": "Mon 12 Dec 2022 08:57",
            "username": "akaramox",
            "content": "rolling with additional is slow during rollback",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727899,
            "date": "Sun 27 Nov 2022 03:46",
            "username": "gpit",
            "content": "A.  Rolling with additional batch is slower than Immutable if deploy fails, since the former has to roll back the deployed part, whereas the latter just switches to the old version.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 674242,
            "date": "Tue 20 Sep 2022 16:12",
            "username": "Gene_Poole",
            "content": "B will cause downtime. C will cause a reduced capacity i.e. partial downtime. They need full capacity so these two won't work.<br><br>You can also use immutable updates to deploy new versions of your application, as an alternative to rolling deployments. When you configure Elastic Beanstalk to use immutable updates for application deployments, it replaces all instances in your environment every time you deploy a new version of your application. If an immutable application deployment fails, Elastic Beanstalk reverts the changes immediately by terminating the new Auto Scaling group. This can prevent partial fleet deployments, which can occur when a rolling deployment fails after some batches have already completed. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html<br><br>A is my answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 671903,
            "date": "Sun 18 Sep 2022 03:08",
            "username": "tam2801dmondicii",
            "content": "why not D?The question specifies that it needs to minimize the impact of failed deployment. So Immutable is the better choice between A and D here because obviously you can easily rollback with A while D you have to manually redeploy.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 697690,
            "date": "Mon 17 Oct 2022 22:48",
            "username": "dmondicii",
            "content": "The question specifies that it needs to minimize the impact of failed deployment. So Immutable is the better choice between A and D here because obviously you can easily rollback with A while D you have to manually redeploy.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 574713,
            "date": "Thu 24 Mar 2022 22:59",
            "username": "Awsexam100",
            "content": "it is rolling due to full capacity deployment not used",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540556,
            "date": "Fri 04 Feb 2022 18:34",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 447717,
            "date": "Sun 07 Nov 2021 02:59",
            "username": "Mal_8",
            "content": "Answer A<br>You can quickly roll back if something went wrong.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 425557,
            "date": "Thu 04 Nov 2021 02:13",
            "username": "Suresh108",
            "content": "\\\"minimize the impact of the failed deployment\\\" =\\\"quick rollback\\\"<br>I am going for AAAAA",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 422225,
            "date": "Fri 29 Oct 2021 04:17",
            "username": "AMohanty",
            "content": "It has to be D.  As Rolling with additional batch maintains full capacity.<br>Immutable is wrong as emphasis is on the UP time.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 406964,
            "date": "Thu 28 Oct 2021 13:06",
            "username": "Huy",
            "content": "Answer is D.  A is still have issue with DNS caching.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 354371,
            "date": "Sat 23 Oct 2021 22:22",
            "username": "VAG1595",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 310068,
            "date": "Sat 23 Oct 2021 02:00",
            "username": "AWSGeeeeeeK",
            "content": "i thought it was D but after reading the doc it's A for sure<br>read this : https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 284324,
            "date": "Wed 20 Oct 2021 20:44",
            "username": "kiev",
            "content": "A for me and the reason is simple. the question ask for full capacity and minimal disruption case of failure and that is where immutable comes in as we have full capacity and if rolling fails, will revert back to previous deployment.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 234637,
            "date": "Wed 13 Oct 2021 03:15",
            "username": "jpush",
            "content": "A<br>https://blog.shikisoft.com/which_elastic_beanstalk_deployment_should_you_use/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 216020,
            "date": "Sun 10 Oct 2021 07:21",
            "username": "SamChanBilal1536",
            "content": "D also works, why not D?Minimize the impact of failed deployment",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 235911,
            "date": "Wed 13 Oct 2021 09:26",
            "username": "Bilal1536",
            "content": "Minimize the impact of failed deployment",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 204359,
            "date": "Mon 04 Oct 2021 06:11",
            "username": "BaburTurk",
            "content": "A<br><br>it does not talk about cost",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#28",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in a complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers.<br>Which AWS service should be used to refactor this architecture?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#28",
            "answers": [
              {
                "choice": "<p>A. AWS Lambda<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS X-Ray<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon SQS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon API Gateway<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 28 discussion",
        "discusstion": [
          {
            "id": 23978,
            "date": "Fri 24 Sep 2021 07:17",
            "username": "Dev1",
            "content": "Ans: D",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 46338,
            "date": "Fri 01 Oct 2021 22:06",
            "username": "awscertifiedBach999",
            "content": "D.  Amazon API Gatewayhttps://aws.amazon.com/api-gateway/",
            "upvote_count": "82",
            "selected_answers": ""
          },
          {
            "id": 55310,
            "date": "Tue 05 Oct 2021 22:17",
            "username": "Bach999",
            "content": "https://aws.amazon.com/api-gateway/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 677876,
            "date": "Sat 24 Sep 2022 15:58",
            "username": "haazybanj",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 671905,
            "date": "Sun 18 Sep 2022 03:10",
            "username": "tam2801tam2801",
            "content": "API Gateway > Dkey work: Each consumer may connect to one or more services",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 671906,
            "date": "Sun 18 Sep 2022 03:10",
            "username": "tam2801",
            "content": "key work: Each consumer may connect to one or more services",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 493481,
            "date": "Sat 04 Dec 2021 04:33",
            "username": "hulebadu",
            "content": "D.  Amazon API Gateway",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 351186,
            "date": "Thu 04 Nov 2021 21:23",
            "username": "VAG1595",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 324109,
            "date": "Thu 04 Nov 2021 19:26",
            "username": "wils3",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174545,
            "date": "Mon 01 Nov 2021 16:10",
            "username": "Mallesh21",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 173596,
            "date": "Sun 24 Oct 2021 12:40",
            "username": "saeidp",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 162434,
            "date": "Thu 21 Oct 2021 21:19",
            "username": "tstato",
            "content": "Sorry. This answer refers to a next question 158.<br>In this case D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145145,
            "date": "Sun 17 Oct 2021 21:50",
            "username": "tstatotstato",
            "content": "I believe ans is A: https://d1.awsstatic.com/whitepapers/Building%20Static%20Websites%20on%20AWS.pdfSorry. This answer refers to a next question 158.<br>In this case D is correct.",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 162435,
            "date": "Sat 23 Oct 2021 02:32",
            "username": "tstato",
            "content": "Sorry. This answer refers to a next question 158.<br>In this case D is correct.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 127625,
            "date": "Sun 17 Oct 2021 13:42",
            "username": "Scarback",
            "content": "Resp: D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 119861,
            "date": "Fri 15 Oct 2021 19:42",
            "username": "MannyC",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 91328,
            "date": "Tue 12 Oct 2021 09:28",
            "username": "thanh3d",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67660,
            "date": "Tue 12 Oct 2021 04:37",
            "username": "kinetic1g",
            "content": "D.  Amazon API Gateway",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#30",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Development team decides to adopt a continuous integration/continuous delivery (CI/CD) process using AWS CodePipeline and AWS CodeCommit for a new application. However, management wants a person to review and approve the code before it is deployed to production.<br>How can the Development team add a manual approver to the CI/CD pipeline?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#30",
            "answers": [
              {
                "choice": "<p>A. Use AWS SES to send an email to approvers when their action is required. Develop a simple application that allows approvers to accept or reject a build. Invoke an AWS Lambda function to advance the pipeline when a build is accepted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. If approved, add an approved tag when pushing changes to the CodeCommit repository. CodePipeline will proceed to build and deploy approved commits without interruption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add an approval step to CodeCommit. Commits will not be saved until approved.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an approval action to the pipeline. Configure the approval action to publish to an Amazon SNS topic when approval is required. The pipeline execution will stop and wait for an approval.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 30 discussion",
        "discusstion": [
          {
            "id": 157109,
            "date": "Tue 21 Sep 2021 01:51",
            "username": "WilsonNF",
            "content": "D.  Add an approval action to the pipeline. Configure the approval action to publish to an Amazon SNS topic when approval is required. The pipeline execution will stop and wait for an approval.<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals-action-add.html",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 726371,
            "date": "Fri 25 Nov 2022 04:26",
            "username": "G4Exams",
            "content": "D is the right approach.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 671909,
            "date": "Sun 18 Sep 2022 03:15",
            "username": "tam2801",
            "content": "D D D so easy",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 538082,
            "date": "Tue 01 Feb 2022 18:12",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 438568,
            "date": "Wed 13 Oct 2021 13:21",
            "username": "Juanlufr",
            "content": "Answer D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 243762,
            "date": "Wed 13 Oct 2021 04:17",
            "username": "RicardoD",
            "content": "D is the answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 194234,
            "date": "Sun 10 Oct 2021 08:40",
            "username": "Chinta",
            "content": "D is correct ,need one stage for approval in code pipeline",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 160031,
            "date": "Fri 01 Oct 2021 15:32",
            "username": "requiem",
            "content": "answer: D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 157600,
            "date": "Thu 23 Sep 2021 05:23",
            "username": "saeidp",
            "content": "D is correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#31",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer is migrating an on-premises application to AWS. The application currently takes user uploads and saves them to a local directory on the server. All uploads must be saved and made immediately available to all instances in an Auto Scaling group.<br>Which approach will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#31",
            "answers": [
              {
                "choice": "<p>A. Use Amazon EBS and configure the application AMI to use a snapshot of the same EBS instance on boot.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon S3 and rearchitect the application so all uploads are placed in S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use instance storage and share it between instances launched from the same Amazon Machine Image (AMI).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon EBS and file synchronization software to achieve eventual consistency among the Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 31 discussion",
        "discusstion": [
          {
            "id": 243734,
            "date": "Sat 23 Oct 2021 04:06",
            "username": "RicardoD",
            "content": "B is the answer<br>Best approach is to have everything in S3, so any instance spun into the ASG can have access to the uploaded data",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 423771,
            "date": "Sat 06 Nov 2021 00:10",
            "username": "yaizkazani",
            "content": "EFS is the only true answer !",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 743418,
            "date": "Tue 13 Dec 2022 00:39",
            "username": "fabriciollf",
            "content": "B is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 720171,
            "date": "Thu 17 Nov 2022 04:30",
            "username": "dark_cherrymondark_cherrymon",
            "content": "why do i keep hearing D, it's B ofcourse.i was thinking about D because it has to be stored on local server. but that's how it currently operates, that's not the requirement. the requirement is that it becomes avaliable immidately to everyone and it's not D because file syronization is eventually consistant",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 720174,
            "date": "Thu 17 Nov 2022 04:36",
            "username": "dark_cherrymon",
            "content": "i was thinking about D because it has to be stored on local server. but that's how it currently operates, that's not the requirement. the requirement is that it becomes avaliable immidately to everyone and it's not D because file syronization is eventually consistant",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 706863,
            "date": "Sat 29 Oct 2022 03:12",
            "username": "Obosie",
            "content": "Answer has to be B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658051,
            "date": "Sat 03 Sep 2022 06:15",
            "username": "sindra",
            "content": "it seem it should be EFS or FSx.. but if the option is like given i vote to choose B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 546080,
            "date": "Sat 12 Feb 2022 21:39",
            "username": "netk",
            "content": "Answer: B. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 538035,
            "date": "Tue 01 Feb 2022 17:26",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 503018,
            "date": "Thu 16 Dec 2021 16:39",
            "username": "reve666",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 353049,
            "date": "Mon 01 Nov 2021 02:01",
            "username": "VAG1595",
            "content": "Answer: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 343791,
            "date": "Fri 29 Oct 2021 11:42",
            "username": "Pavan_Nagineni",
            "content": "Better to go with B.  Use Amazon S3 and rearchitect the application so all uploads are placed in S3.<br>Even though you could do EBS attachment to ASG launch config userdata for ec2 instances going to serve , But you need to select the ASG in single AZ where your EBS is located otherwise it will not work since EBS is AZ locked.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 215558,
            "date": "Wed 20 Oct 2021 23:19",
            "username": "weril",
            "content": "for me it should be done by EFS but there is no such a option. In my opinion I will stick with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 194206,
            "date": "Tue 19 Oct 2021 07:14",
            "username": "Chinta",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 160552,
            "date": "Wed 13 Oct 2021 18:37",
            "username": "FHSawswannabealtonhMaicon",
            "content": "Considering \\\"Immediately Available\\\", I would go with A<br>S3 is eventually consistent.for overwrites not putsNot anymore. Since Dec 2020 S3 is now strongly consistent.new uploads will not be available for other instances currently running, only for new ones, so it's B",
            "upvote_count": "1212",
            "selected_answers": ""
          },
          {
            "id": 164896,
            "date": "Thu 14 Oct 2021 16:43",
            "username": "awswannabe",
            "content": "for overwrites not puts",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 575313,
            "date": "Sat 26 Mar 2022 01:42",
            "username": "altonh",
            "content": "Not anymore. Since Dec 2020 S3 is now strongly consistent.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212348,
            "date": "Wed 20 Oct 2021 18:34",
            "username": "Maicon",
            "content": "new uploads will not be available for other instances currently running, only for new ones, so it's B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 160021,
            "date": "Sun 10 Oct 2021 03:44",
            "username": "requiem",
            "content": "answer: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159666,
            "date": "Mon 27 Sep 2021 12:16",
            "username": "jodeepak",
            "content": "Answer B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 157090,
            "date": "Sun 26 Sep 2021 22:27",
            "username": "WilsonNF",
            "content": "B.  Use Amazon S3 and rearchitect the application so all uploads are placed in S3.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#32",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a script to automate the deployment process for a serverless application. The developer wants to use an existing AWS Serverless<br>Application Model (AWS SAM) template for the application.<br>What should the developer use for the project? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#32",
            "answers": [
              {
                "choice": "<p>A. Call aws cloudformation package to create the deployment package. Call aws cloudformation deploy to deploy the package afterward.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call sam package to create the deployment package. Call sam deploy to deploy the package afterward.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Call aws s3 cp to upload the AWS SAM template to Amazon S3. Call aws lambda update-function-code to create the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a ZIP package locally and call aws serverlessrepo create-application to create the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a ZIP package and upload it to Amazon S3. Call aws cloudformation create-stack to create the application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 32 discussion",
        "discusstion": [
          {
            "id": 160677,
            "date": "Mon 04 Oct 2021 23:46",
            "username": "quanlh",
            "content": "A + B is correct",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 159611,
            "date": "Mon 27 Sep 2021 09:48",
            "username": "saeidp",
            "content": "A and B are identical and both are valid",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 765111,
            "date": "Wed 04 Jan 2023 00:33",
            "username": "ayoubmk",
            "content": "By elimination, I don't see any automation in C, D & E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 729091,
            "date": "Mon 28 Nov 2022 13:43",
            "username": "SBoksh",
            "content": "sam package creates .zip and uploads to s3<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-package.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 728201,
            "date": "Sun 27 Nov 2022 13:35",
            "username": "gpit",
            "content": "SAM is just an extension of CloudFormation, operationally it's similar to CF. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 540050,
            "date": "Thu 03 Feb 2022 23:21",
            "username": "JP_PA",
            "content": "ANS: A&B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 429887,
            "date": "Sun 07 Nov 2021 13:52",
            "username": "mariaSoo",
            "content": "according udemy course: we can use A option also for SAM. so it's A, B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 359877,
            "date": "Wed 27 Oct 2021 08:25",
            "username": "eudiego",
            "content": "A and B<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 281987,
            "date": "Sat 16 Oct 2021 18:59",
            "username": "kiev",
            "content": "this question is open to interpretation and i would harbour a guess here that, the question is asking for two ways of deploying a server less application which in fact we could choose the first two easily. A and B for me.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 250009,
            "date": "Fri 15 Oct 2021 16:45",
            "username": "kkdd",
            "content": "A, B \\\"The sam package command is an alias for the aws cloudformation package AWS CLI command. \\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 243392,
            "date": "Thu 14 Oct 2021 09:57",
            "username": "dimeder",
            "content": "Ans: AB<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam-package.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 215517,
            "date": "Wed 13 Oct 2021 19:59",
            "username": "GaryCheng",
            "content": "A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 189690,
            "date": "Wed 13 Oct 2021 00:43",
            "username": "Chinta",
            "content": "Answer should be A and B , we have to use the same sam scripts ,so no need to upload again in s3",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 181372,
            "date": "Tue 12 Oct 2021 14:39",
            "username": "toyajidark_cherrymonCHRIS12722222",
            "content": "I think answer is B and D. <br>Actually, A,B,D,E have same result. But the intention of the question is maybe the SAM is different from Cloudformation. I mean SAM is not the same as Cloudformation.<br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html<br><br>So, A and E is about Cloudformation. B and D is for SAMi started off with b and d as wellI don't think option D deploys sam application. You need to create a change set then use the below code to deploy the change set<br><br>aws cloudformation execute-change-set \\<br>--change-set-name changeset-id-arn<br><br>https://docs.aws.amazon.com/serverlessrepo/latest/devguide/serverlessrepo-consuming-applications.html",
            "upvote_count": "511",
            "selected_answers": ""
          },
          {
            "id": 720181,
            "date": "Thu 17 Nov 2022 04:45",
            "username": "dark_cherrymon",
            "content": "i started off with b and d as well",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 535260,
            "date": "Sat 29 Jan 2022 08:08",
            "username": "CHRIS12722222",
            "content": "I don't think option D deploys sam application. You need to create a change set then use the below code to deploy the change set<br><br>aws cloudformation execute-change-set \\<br>--change-set-name changeset-id-arn<br><br>https://docs.aws.amazon.com/serverlessrepo/latest/devguide/serverlessrepo-consuming-applications.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 160112,
            "date": "Tue 28 Sep 2021 06:24",
            "username": "gurudevg",
            "content": "A and B are correct",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 158641,
            "date": "Thu 23 Sep 2021 00:36",
            "username": "edu_awscertified",
            "content": "Answer is B and E",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#33",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has built a market application that stores pricing data in Amazon DynamoDB with Amazon ElastiCache in front. The prices of items in the market change frequently. Sellers have begun complaining that, after they update the price of an item, the price does not actually change in the product listing.<br>What could be causing this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#33",
            "answers": [
              {
                "choice": "<p>A. The cache is not being invalidated when the price of the item is changed<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. The price of the item is being retrieved using a write-through ElastiCache cluster<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The DynamoDB table was provisioned with insufficient read capacity<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The DynamoDB table was provisioned with insufficient write capacity<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 33 discussion",
        "discusstion": [
          {
            "id": 161811,
            "date": "Fri 08 Oct 2021 15:06",
            "username": "WilsonNF",
            "content": "Correctis \\\"A\\\"",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 245374,
            "date": "Sat 06 Nov 2021 23:53",
            "username": "RicardoD",
            "content": "A is the answer<br><br>Cache is not being invalidated after table write and this causes inconsistency",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 752717,
            "date": "Wed 21 Dec 2022 21:03",
            "username": "speer",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720186,
            "date": "Thu 17 Nov 2022 05:00",
            "username": "dark_cherrymon",
            "content": "A easy",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 540032,
            "date": "Thu 03 Feb 2022 23:05",
            "username": "JP_PA",
            "content": "ANS:A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 195181,
            "date": "Sat 06 Nov 2021 08:48",
            "username": "Chinta",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 188309,
            "date": "Fri 15 Oct 2021 09:41",
            "username": "arpana_03",
            "content": "A is Correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174946,
            "date": "Thu 14 Oct 2021 12:54",
            "username": "saeidp",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174906,
            "date": "Mon 11 Oct 2021 04:42",
            "username": "janvandermerwer",
            "content": "Agree with A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#34",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The developer is creating a web application that collects highly regulated and confidential user data through a POST request. The web application is served through Amazon CloudFront. User names and phone numbers must be encrypted at the edge and must remain encrypted throughout the entire application stack.<br>What is the MOST secure way to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#34",
            "answers": [
              {
                "choice": "<p>A. Enforce Match Viewer with HTTPS Only on CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use only the newest TLS security policy on CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enforce a signed URL on CloudFront on the front end.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use field-level encryption on CloudFront.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 34 discussion",
        "discusstion": [
          {
            "id": 743357,
            "date": "Mon 12 Dec 2022 22:48",
            "username": "fabriciollf",
            "content": "D is the correct one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696059,
            "date": "Sun 16 Oct 2022 09:28",
            "username": "cloud_collector",
            "content": "Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 658429,
            "date": "Sat 03 Sep 2022 14:18",
            "username": "sidvic",
            "content": "I vote for D. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 658024,
            "date": "Sat 03 Sep 2022 05:19",
            "username": "LEHUY",
            "content": "D - Use field-level encryption on CloudFront.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#37",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application uploads photos to an Amazon S3 bucket. Each photo that is uploaded to the S3 bucket must be resized to a thumbnail image by the application.<br>Each thumbnail image is uploaded with a new name in the same S3 bucket.<br>Which AWS service can a developer configure to directly process each single S3 event for each S3 object upload?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#37",
            "answers": [
              {
                "choice": "<p>A. Amazon EC2<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Elastic Container Service (Amazon ECS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Elastic Beanstalk<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS Lambda<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 37 discussion",
        "discusstion": [
          {
            "id": 696055,
            "date": "Sun 16 Oct 2022 09:25",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 658442,
            "date": "Sat 03 Sep 2022 14:24",
            "username": "sidvic",
            "content": "I think Lamba, too",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 658068,
            "date": "Sat 03 Sep 2022 06:34",
            "username": "sindra",
            "content": "D lambda can help with this needs",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#38",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a Docker application on Amazon ECS. The application must scale based on user load in the last 15 seconds.<br>How should a Developer instrument the code so that the requirement can be met?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#38",
            "answers": [
              {
                "choice": "<p>A. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 38 discussion",
        "discusstion": [
          {
            "id": 26102,
            "date": "Tue 21 Sep 2021 08:55",
            "username": "Dev1Alekshar",
            "content": "Ans: B<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metricsfrom the link above :<br>Standard resolution, with data having a one-minute granularity<br>High resolution, with data at a granularity of one second",
            "upvote_count": "1615",
            "selected_answers": ""
          },
          {
            "id": 211320,
            "date": "Sun 31 Oct 2021 12:58",
            "username": "Alekshar",
            "content": "from the link above :<br>Standard resolution, with data having a one-minute granularity<br>High resolution, with data at a granularity of one second",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 723085,
            "date": "Mon 21 Nov 2022 00:44",
            "username": "dark_cherrymon",
            "content": "BBBBBB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 351956,
            "date": "Tue 02 Nov 2021 08:39",
            "username": "VAG1595",
            "content": "Answer: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 317070,
            "date": "Sun 31 Oct 2021 14:18",
            "username": "Aparna_acchulala_Ujin",
            "content": "why 5 seconds is correct and not option of 30 seconds can someone plz tell\\\"The application must scale based on user load in the last 15 seconds\\\".<br>- The app needs to scale based on load in the last 15 secs<br>-If data was published every 30 seconds, this criteria wouldn't be fulfilled as it'dhave to wait for the remaining 15 sec, whereas with 5 secs publishing, data can be received every 5 sec enabling the app to scale at the required timeThanks for deep explaination",
            "upvote_count": "1113",
            "selected_answers": ""
          },
          {
            "id": 317932,
            "date": "Tue 02 Nov 2021 08:02",
            "username": "hulala_Ujin",
            "content": "\\\"The application must scale based on user load in the last 15 seconds\\\".<br>- The app needs to scale based on load in the last 15 secs<br>-If data was published every 30 seconds, this criteria wouldn't be fulfilled as it'dhave to wait for the remaining 15 sec, whereas with 5 secs publishing, data can be received every 5 sec enabling the app to scale at the required timeThanks for deep explaination",
            "upvote_count": "113",
            "selected_answers": ""
          },
          {
            "id": 536834,
            "date": "Mon 31 Jan 2022 11:37",
            "username": "_Ujin",
            "content": "Thanks for deep explaination",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 192336,
            "date": "Tue 26 Oct 2021 10:48",
            "username": "Chinta",
            "content": "B is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 173633,
            "date": "Mon 25 Oct 2021 22:45",
            "username": "saeidp",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 139174,
            "date": "Wed 20 Oct 2021 02:16",
            "username": "wackyGuru",
            "content": "B.  Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 127793,
            "date": "Mon 04 Oct 2021 22:09",
            "username": "Scarback",
            "content": "Resp: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 67694,
            "date": "Fri 01 Oct 2021 12:13",
            "username": "kinetic1g",
            "content": "B.  Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 46624,
            "date": "Wed 22 Sep 2021 14:47",
            "username": "awscertified",
            "content": "B.  Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#39",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Where should the appspec.yml file be placed in order for AWS CodeDeploy to work?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#39",
            "answers": [
              {
                "choice": "<p>A. In the root of the application source code directory structure<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the bin folder along with all the complied code<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In an S3 bucket<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the same folder as the application configuration files<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 39 discussion",
        "discusstion": [
          {
            "id": 657041,
            "date": "Fri 02 Sep 2022 08:14",
            "username": "LEHUY",
            "content": "If your application uses the EC2/On-Premises compute platform, the AppSpec file must be a YAML-formatted file named appspec.yml and it must be placed in the root of the directory structure of an application's source code.",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 696085,
            "date": "Sun 16 Oct 2022 10:07",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html#appspec-reference-server",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#41",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The Lambda function below is being called through an API using Amazon API Gateway. The average execution time for the Lambda function is about 1 second.<br>The pseudocode for the Lambda function is as shown in the exhibit.<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04119/0002100001.png\" class=\"in-exam-image\"><br>What two actions can be taken to improve the performance of this Lambda function without increasing the cost of the solution? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#41",
            "answers": [
              {
                "choice": "<p>A. Package only the modules the Lambda function requires<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon DynamoDB instead of Amazon RDS<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Move the initialization of the variable Amazon RDS connection outside of the handler function<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement custom database connection pooling with the Lambda function<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Implement local caching of Amazon RDS data so Lambda can re-use the cache<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 41 discussion",
        "discusstion": [
          {
            "id": 350122,
            "date": "Sat 09 Oct 2021 22:28",
            "username": "KB68studiousDragonmk115",
            "content": "A, C<br><br>E will increase costCaching doesn't always means extra cost. Lambda Extensions used local temporary memory to do in-memory caching. This could reduce upto 80% invocation of lambda function, thereby reducing costs immensely.But implementing caching manually will require much more code. While there is import for 3th party library, that is not used in the pseudo-code. Limiting lambda size will generally increase the performance. They are pointing it in the docs https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-code so I think it's about it.<br>While ofc, caching in some scenarios will also help, but we don't know what's the use case.",
            "upvote_count": "2721",
            "selected_answers": ""
          },
          {
            "id": 441007,
            "date": "Fri 05 Nov 2021 05:54",
            "username": "studiousDragonmk115",
            "content": "Caching doesn't always means extra cost. Lambda Extensions used local temporary memory to do in-memory caching. This could reduce upto 80% invocation of lambda function, thereby reducing costs immensely.But implementing caching manually will require much more code. While there is import for 3th party library, that is not used in the pseudo-code. Limiting lambda size will generally increase the performance. They are pointing it in the docs https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-code so I think it's about it.<br>While ofc, caching in some scenarios will also help, but we don't know what's the use case.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 543931,
            "date": "Wed 09 Feb 2022 17:47",
            "username": "mk115",
            "content": "But implementing caching manually will require much more code. While there is import for 3th party library, that is not used in the pseudo-code. Limiting lambda size will generally increase the performance. They are pointing it in the docs https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-code so I think it's about it.<br>While ofc, caching in some scenarios will also help, but we don't know what's the use case.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 346648,
            "date": "Mon 20 Sep 2021 17:29",
            "username": "kwch791",
            "content": "ams is CE",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 647709,
            "date": "Tue 16 Aug 2022 16:41",
            "username": "Chhotu_DBA",
            "content": "I thinks its AC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 644832,
            "date": "Wed 10 Aug 2022 08:45",
            "username": "LaXuanLinh",
            "content": "A.  Packaging has nothing to do with performance to RDSB.  Obviously wrongC.  Obviously CORRECTD.  Implement custom connection pool to reuse connection, this is a common practice to improve performance to any databasesE.  This answer is WRONG !!! Guys, read it carefully!! It says caching RDS in Lambda. How are you going to store the entire RDS database in /tmp directory with only 512MB available?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 641408,
            "date": "Tue 02 Aug 2022 20:19",
            "username": "Gomer",
            "content": "\\\"Take advantage of execution environment reuse to improve the performance of a function.Initialize SDK clients and database connections outside of function handler, and cache static assets locally in the /tmp directory. Subsequent invocations processed by same instance of function can reuse these resources. This saves cost by reducing run time.To avoid potential data leaks across invocations, don=E2=80=99t use execution environment to store user data, events, or other information with security implications.\\\"<br>\\\"Objects declared outside of the function's handler method remain initialized, providing additional optimization when the function is invoked again. For example, if your Lambda function establishes a database connection, instead of reestablishing the connection, the original connection is used in subsequent invocations. We recommend adding logic in your code to check if a connection exists before creating a new one.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 590519,
            "date": "Sat 23 Apr 2022 11:52",
            "username": "kitkwok",
            "content": "AC<br>https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html<br>Take advantage of execution environment reuse to improve the performance of your function. Initialize SDK clients and database connections outside of the function handler, and cache static assets",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 585768,
            "date": "Thu 14 Apr 2022 14:58",
            "username": "JoellaLi",
            "content": "C, E<br>\\\"Take advantage of execution environment reuse to improve the performance of your function. Initialize SDK clients and database connections outside of the function handler, and cache static assets locally in the /tmp directory. Subsequent invocations processed by the same instance of your function can reuse these resources. This saves cost by reducing function run time.\\\"<br>Link: https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 574405,
            "date": "Thu 24 Mar 2022 14:50",
            "username": "skb1996",
            "content": "\\\"Lambda can overwhelm the RDS instance with a large number of connection requests.\\\"<br>This downside of lambdas concurrency will burn out your lamdas limits more quickly<br><br>Which makes me use option C. <br>A is not required as the execution time does not look like an issue.<br>E will help in reducing the query frequency and querying time in DB. <br><br>C, E is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 571947,
            "date": "Mon 21 Mar 2022 05:03",
            "username": "idqc",
            "content": "AC are correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 546371,
            "date": "Sun 13 Feb 2022 10:58",
            "username": "netk",
            "content": "I'd go for A & C. <br>The other options are either not feasible or more costly.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 545086,
            "date": "Fri 11 Feb 2022 06:38",
            "username": "JohnPi",
            "content": "I guess AC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 488378,
            "date": "Sat 27 Nov 2021 19:12",
            "username": "QuanTLA",
            "content": "C and the other answer I guess is A because the other one just don't make any sense.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 485856,
            "date": "Wed 24 Nov 2021 11:40",
            "username": "mrun",
            "content": "Local Caching doesn't increase any cost (its nor Redis or any other)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 433879,
            "date": "Wed 03 Nov 2021 07:32",
            "username": "KinleyChristian",
            "content": "A and C. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 430656,
            "date": "Mon 01 Nov 2021 16:41",
            "username": "DAIKI_SAN",
            "content": "ans is A,C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 417713,
            "date": "Thu 28 Oct 2021 01:47",
            "username": "greypig",
            "content": "C,D<br>D will reduce the execution time of lambda",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 411274,
            "date": "Tue 26 Oct 2021 02:03",
            "username": "tarotree2021mk115vanhiep184",
            "content": "Just moving the initialization of the variable Amazon RDS connection outside of the handler function will not improve performance as those are very simple steps.Will because you will create the connection to db only once and then reuse it, instead of establishing new connection per each invocation.<br>https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-codeSo should move bothinitialization of the variable and Amazon RDS connection outside code. CD correct answer.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 543927,
            "date": "Wed 09 Feb 2022 17:44",
            "username": "mk115vanhiep184",
            "content": "Will because you will create the connection to db only once and then reuse it, instead of establishing new connection per each invocation.<br>https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#function-codeSo should move bothinitialization of the variable and Amazon RDS connection outside code. CD correct answer.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 649565,
            "date": "Sun 21 Aug 2022 03:23",
            "username": "vanhiep184",
            "content": "So should move bothinitialization of the variable and Amazon RDS connection outside code. CD correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#42",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Company runs continuous integration/continuous delivery (CI/CD) pipelines for its application on AWS CodePipeline. A Developer must write unit tests and run them as part of the pipelines before staging the artifacts for testing.<br>How should the Developer incorporate unit tests as part of CI/CD pipelines?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#42",
            "answers": [
              {
                "choice": "<p>A. Create a separate CodePipeline pipeline to run unit tests<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the AWS CodeBuild specification to include a phase for running unit tests<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the AWS CodeDeploy agent on an Amazon EC2 instance to run unit tests<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a testing branch in AWS CodeCommit to run unit tests<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 42 discussion",
        "discusstion": [
          {
            "id": 244641,
            "date": "Mon 11 Oct 2021 03:02",
            "username": "RicardoD",
            "content": "B is the answer<br><br>With codebuild repots one can see reports generated by functional or integration tests",
            "upvote_count": "18",
            "selected_answers": ""
          },
          {
            "id": 156514,
            "date": "Sat 25 Sep 2021 00:59",
            "username": "Chintoo",
            "content": "Answer should be B",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 766878,
            "date": "Thu 05 Jan 2023 18:35",
            "username": "ayoubmk",
            "content": "B is the right answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 750416,
            "date": "Tue 20 Dec 2022 03:42",
            "username": "smica9",
            "content": "B should be the correct answer?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 737280,
            "date": "Wed 07 Dec 2022 00:31",
            "username": "tsampaio",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 613640,
            "date": "Thu 09 Jun 2022 07:45",
            "username": "Justu",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 538315,
            "date": "Wed 02 Feb 2022 03:06",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 452372,
            "date": "Sat 23 Oct 2021 18:59",
            "username": "jc966",
            "content": "B<br><br>You can specify the unit tests in either the build or the post_build sequence in the buildspec.yml file.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 438829,
            "date": "Wed 20 Oct 2021 12:14",
            "username": "Juanlufr",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429010,
            "date": "Tue 19 Oct 2021 23:43",
            "username": "santhoshmj",
            "content": "answer D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 194809,
            "date": "Thu 07 Oct 2021 14:56",
            "username": "Chinta",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 160057,
            "date": "Thu 07 Oct 2021 07:36",
            "username": "requiem",
            "content": "answer: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159663,
            "date": "Thu 07 Oct 2021 06:01",
            "username": "jodeepak",
            "content": "Answer B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 157780,
            "date": "Thu 30 Sep 2021 18:19",
            "username": "saeidp",
            "content": "B is the correct answere",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 157137,
            "date": "Sat 25 Sep 2021 20:17",
            "username": "WilsonNF",
            "content": "B.  Update the AWS CodeBuild specification to include a phase for running unit tests<br>New feature of CodeBuild:<br>https://aws.amazon.com/pt/blogs/devops/test-reports-with-aws-codebuild/",
            "upvote_count": "6",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#43",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer has written an application that runs on Amazon EC2 instances and generates a value every minute. The Developer wants to monitor and graph the values generated over time without logging in to the instance each time.<br>Which approach should the Developer use to achieve this goal?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#43",
            "answers": [
              {
                "choice": "<p>A. Use the Amazon CloudWatch metrics reported by default for all EC2 instances. View each value from the CloudWatch console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Develop the application to store each value in a file on Amazon S3 every minute with the timestamp as the name.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Publish each generated value as a custom metric to Amazon CloudWatch using available AWS SDKs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store each value as a variable and add the variable to the list of EC2 metrics that should be reported to the Amazon CloudWatch console.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 43 discussion",
        "discusstion": [
          {
            "id": 194233,
            "date": "Sat 23 Oct 2021 07:09",
            "username": "Chinta",
            "content": "C is correct ,we need custom metrics",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 160030,
            "date": "Wed 13 Oct 2021 04:33",
            "username": "requiem",
            "content": "answer: C",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 739001,
            "date": "Thu 08 Dec 2022 13:08",
            "username": "aws_leo",
            "content": "C is the best answer. Others are wrong<br>- A) by default EC2 instances don't send report to CloudWatch<br>- B) S3 is not for monitoring values<br>- D) Same with A), EC2 instances don't send report to CloudWatch by default",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 538044,
            "date": "Tue 01 Feb 2022 17:34",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 243761,
            "date": "Sun 24 Oct 2021 07:35",
            "username": "RicardoD",
            "content": "C is the answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 159671,
            "date": "Sat 09 Oct 2021 21:47",
            "username": "jodeepak",
            "content": "Answer C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 157596,
            "date": "Wed 06 Oct 2021 18:35",
            "username": "saeidp",
            "content": "C is correct",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 157107,
            "date": "Wed 06 Oct 2021 04:26",
            "username": "WilsonNF",
            "content": "C.  Publish each generated value as a custom metric to Amazon CloudWatch using available AWS SDKs.",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#44",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is trying to get data from an Amazon DynamoDB table called demoman-table. The developer configured the AWS CLI to use a specific IAM user's credentials and executed the following command:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04238/0002400001.png\" class=\"in-exam-image\"><br>The command returned errors and no rows were returned.<br>What is the MOST likely cause of these issues?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#44",
            "answers": [
              {
                "choice": "<p>A. The command is incorrect; it should be rewritten to use put-item with a string argument.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The developer needs to log a ticket with AWS Support to enable access to the demoman-table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon DynamoDB cannot be accessed from the AWS CLI and needs to be called via the REST API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The IAM user needs an associated policy with read access to demoman-table.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 44 discussion",
        "discusstion": [
          {
            "id": 347991,
            "date": "Mon 20 Sep 2021 15:29",
            "username": "faramawi",
            "content": "I'd go with D<br>It has right syntax. it just need the read access permission.<br>References:<br>* https://docs.aws.amazon.com/cli/latest/reference/dynamodb/get-item.html<br>* https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 546285,
            "date": "Sun 13 Feb 2022 08:27",
            "username": "netk",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 540669,
            "date": "Fri 04 Feb 2022 23:16",
            "username": "JP_PA",
            "content": "ANS: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 485265,
            "date": "Tue 23 Nov 2021 18:43",
            "username": "denccc",
            "content": "it's D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 439520,
            "date": "Fri 05 Nov 2021 02:21",
            "username": "Juanlufr",
            "content": "Answer D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 353005,
            "date": "Wed 03 Nov 2021 21:30",
            "username": "VAG1595",
            "content": "Answer: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 348603,
            "date": "Thu 30 Sep 2021 16:46",
            "username": "TroyMcLure",
            "content": "Correct Answer: \\\"D\\\"<br>That's a likely cause when the user executing the CLI command has no read access granted.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#46",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is planning to use an Amazon API Gateway and AWS Lambda to provide a REST API. The developer will have three distinct environments to manage: development, test, and production.<br>How should the application be deployed while minimizing the number of resources to manage?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#46",
            "answers": [
              {
                "choice": "<p>A. Create a separate API Gateway and separate Lambda function for each environment in the same Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Assign a Region for each environment and deploy API Gateway and Lambda to each Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create one API Gateway with multiple stages with one Lambda function with multiple aliases.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create one API Gateway and one Lambda function, and use a REST parameter to identify the environment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 46 discussion",
        "discusstion": [
          {
            "id": 193719,
            "date": "Fri 01 Oct 2021 02:44",
            "username": "JaneJ",
            "content": "C.  Create one API Gateway with multiple stages with one Lambda function with multiple aliases.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 246592,
            "date": "Mon 04 Oct 2021 23:26",
            "username": "RicardoD",
            "content": "C is the answer",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 763299,
            "date": "Sun 01 Jan 2023 19:37",
            "username": "Althani",
            "content": "I dont really understand, why it is supposed to be C.  Multiple stages for the api gateway ok. But a lambda with multiple aliases does not make sense go me. This would be the same lambda just with different names. But for Prod, dev and staging you would need different lambdas with different code, because it does not make any sense to have different stages if the code is the same?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728380,
            "date": "Sun 27 Nov 2022 16:36",
            "username": "gpit",
            "content": "C.  D is doable but is not the easiest way, as you have to if else based on @PathVariable",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 546276,
            "date": "Sun 13 Feb 2022 08:17",
            "username": "netk",
            "content": "Answer: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 540598,
            "date": "Fri 04 Feb 2022 20:14",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 379824,
            "date": "Sun 17 Oct 2021 17:14",
            "username": "faramawi",
            "content": "Answer: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 360888,
            "date": "Sun 10 Oct 2021 08:58",
            "username": "eudiego",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 195295,
            "date": "Sat 02 Oct 2021 14:18",
            "username": "Chinta",
            "content": "C is correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#47",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer is developing an application that manages financial transactions. To improve security, multi-factor authentication (MFA) will be required as part of the login process.<br>What services can the Developer use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#47",
            "answers": [
              {
                "choice": "<p>A. Amazon DynamoDB to store MFA session data, and Amazon SNS to send MFA codes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Cognito with MFA<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Directory Service<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS IAM with MFA enabled<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 47 discussion",
        "discusstion": [
          {
            "id": 511414,
            "date": "Tue 28 Dec 2021 18:54",
            "username": "reve666",
            "content": "Cognito is the answer",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 653437,
            "date": "Mon 29 Aug 2022 12:36",
            "username": "icebox0e",
            "content": "Definitely B, Cognito is for end user and supports MFA",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 646366,
            "date": "Sat 13 Aug 2022 16:46",
            "username": "ALQASSASS",
            "content": "Why are the answers 100% wrong and we must always go back to the discussion, this is the worst thing on the site",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 589533,
            "date": "Thu 21 Apr 2022 19:19",
            "username": "tasbasi",
            "content": "both Cognito and Directory services supports MFA<br>it could both B and C correct<br><br>for directory services (https://aws.amazon.com/blogs/security/how-to-enable-multi-factor-authentication-for-amazon-workspaces-and-amazon-quicksight-by-using-microsoft-ad-and-on-premises-credentials/)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 551369,
            "date": "Sat 19 Feb 2022 23:24",
            "username": "ShrikantMS",
            "content": "conito is the standard",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 528983,
            "date": "Fri 21 Jan 2022 08:21",
            "username": "ranga_reddy",
            "content": "MFA needed for end users not for developer so B is the answer",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 528935,
            "date": "Fri 21 Jan 2022 05:39",
            "username": "vsmaske",
            "content": "Cognito with MFA for Application access",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 518646,
            "date": "Thu 06 Jan 2022 22:53",
            "username": "ej123",
            "content": "Answer is B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#48",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer tested an application locally and then deployed it to AWS Lambda. While testing the application remotely, the Lambda function fails with an access denied message.<br>How can this issue be addressed?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#48",
            "answers": [
              {
                "choice": "<p>A. Update the Lambda function's execution role to include the missing permissions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the Lambda function's resource policy to include the missing permissions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Include an IAM policy document at the root of the deployment package and redeploy the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Redeploy the Lambda function using an account with access to the AdministratorAccess policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 48 discussion",
        "discusstion": [
          {
            "id": 246561,
            "date": "Fri 22 Oct 2021 17:08",
            "username": "RicardoD",
            "content": "A is the answer<br><br>The execution role which should contain the necessary permissions so lambda can perform",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 540552,
            "date": "Fri 04 Feb 2022 18:30",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 439435,
            "date": "Wed 03 Nov 2021 22:16",
            "username": "Juanlufr",
            "content": "Answer A > execution role",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429169,
            "date": "Sun 31 Oct 2021 17:11",
            "username": "EarlBrillantes061816",
            "content": "The answer should be BE.  The application access is the one that cant invoke the lambda",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 406958,
            "date": "Wed 27 Oct 2021 04:55",
            "username": "Huy",
            "content": "It is B.  No permission when running lambda function remotely that means the service invoking lambda is denied.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 195277,
            "date": "Wed 06 Oct 2021 01:47",
            "username": "Chinta",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 193710,
            "date": "Tue 05 Oct 2021 04:15",
            "username": "JaneJ",
            "content": "A.  Update the Lambda function's execution role to include the missing permissions.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#50",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a compute-intensive application that will run on a fleet of Amazon EC2 instances. The application uses attached Amazon EBS disks for storing data. The application will process sensitive information and all the data must be encrypted.<br>What should a Developer do to ensure the data is encrypted on disk without impacting performance?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#50",
            "answers": [
              {
                "choice": "<p>A. Configure the Amazon EC2 instance fleet to use encrypted EBS volumes for storing data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add logic to write all data to an encrypted Amazon S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a custom encryption algorithm to the application that will encrypt and decrypt all data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new Amazon Machine Image (AMI) with an encrypted root volume and store the data to ephemeral disks.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 50 discussion",
        "discusstion": [
          {
            "id": 752643,
            "date": "Wed 21 Dec 2022 19:38",
            "username": "Agil09Agil09",
            "content": "B for sureby mistake i chose b, but the correct answer is A. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 752645,
            "date": "Wed 21 Dec 2022 19:40",
            "username": "Agil09",
            "content": "by mistake i chose b, but the correct answer is A. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 692781,
            "date": "Wed 12 Oct 2022 08:46",
            "username": "Arnaud92",
            "content": "-----> A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 658507,
            "date": "Sat 03 Sep 2022 15:16",
            "username": "sidvic",
            "content": "I think A",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#51",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team consists of 10 team members. Similar to a home directory for each team member, the manager wants to grant access to user-specific folders in an Amazon S3 bucket. For the team member with the username `TeamMemberX`, the snippet of the IAM policy looks like this:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04119/0002600001.png\" class=\"in-exam-image\"><br>Instead of creating distinct policies for each team member, what approach can be used to make this policy snippet generic for all team members?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#51",
            "answers": [
              {
                "choice": "<p>A. Use IAM policy condition<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use IAM policy principal<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use IAM policy variables<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use IAM policy resource<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 51 discussion",
        "discusstion": [
          {
            "id": 373202,
            "date": "Wed 13 Oct 2021 08:51",
            "username": "svichkar",
            "content": "C is correct<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 632140,
            "date": "Sat 16 Jul 2022 14:02",
            "username": "KiDe",
            "content": "C<br>it is variable inside the condition or resource.<br><br>\\\"Condition\\\": {\\\"StringLike\\\": {\\\"s3:prefix\\\": [\\\"${aws:username}/*\\\"]}}<br><br>\\\"Resource\\\": [\\\"arn:aws:s3:::mybucket/${aws:username}/*\\\"]",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 615494,
            "date": "Sun 12 Jun 2022 22:51",
            "username": "mohamedba",
            "content": "Variable->C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 612682,
            "date": "Tue 07 Jun 2022 12:35",
            "username": "Justu",
            "content": "Those are called policy variables, eventhou many thinks them as conditions for policy.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 589548,
            "date": "Thu 21 Apr 2022 19:54",
            "username": "tasbasi",
            "content": "ANSWER =C4=B0S C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 587236,
            "date": "Sun 17 Apr 2022 15:16",
            "username": "Ivanyan",
            "content": "The answer keyword is variable, and not a condition, so C is Correct.<br>{<br><br>\\\"Action\\\": [\\\"s3:ListBucket\\\"],<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Resource\\\": [\\\"arn:aws:s3:::mybucket\\\"],<br>\\\"Condition\\\": {\\\"StringLike\\\": {\\\"s3:prefix\\\": [\\\"${aws:username}/*\\\"]}}<br>}",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 579432,
            "date": "Fri 01 Apr 2022 13:00",
            "username": "eledu1985",
            "content": "I go with A:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Action\\\": [\\\"s3:ListBucket\\\"],<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Resource\\\": [\\\"arn:aws:s3:::mybucket\\\"],<br>\\\"Condition\\\": {\\\"StringLike\\\": {\\\"s3:prefix\\\": [\\\"${aws:username}/*\\\"]}}<br>},<br>{<br>\\\"Action\\\": [<br>\\\"s3:GetObject\\\",<br>\\\"s3:PutObject\\\"<br>],<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Resource\\\": [\\\"arn:aws:s3:::mybucket/${aws:username}/*\\\"]<br>}<br>]<br>}<br><br>In fact it is a condition with a variable...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 503957,
            "date": "Sat 18 Dec 2021 01:32",
            "username": "ksee00",
            "content": "My Answer:C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 488560,
            "date": "Sun 28 Nov 2021 00:03",
            "username": "leliodesouza",
            "content": "Answer: C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 487149,
            "date": "Fri 26 Nov 2021 08:45",
            "username": "FeltedVlasto",
            "content": "Isn't it B?<br>Principal referring to who can access certain data?<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.htmlIt is but it alone would not help you much as you would still need to create a new policy for each user. Also principals are usually (not sure if not always) specified only for resource policies which this is not.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 540338,
            "date": "Fri 04 Feb 2022 10:24",
            "username": "Vlasto",
            "content": "It is but it alone would not help you much as you would still need to create a new policy for each user. Also principals are usually (not sure if not always) specified only for resource policies which this is not.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 449307,
            "date": "Tue 02 Nov 2021 02:21",
            "username": "punitdarira",
            "content": "idk why the answer is shown as a",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 440668,
            "date": "Sat 23 Oct 2021 23:10",
            "username": "widefoot",
            "content": "Correct Answer is C<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html#policy-vars-wheretouse",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 414599,
            "date": "Wed 20 Oct 2021 13:13",
            "username": "awsZap",
            "content": "Anc : C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 387238,
            "date": "Tue 19 Oct 2021 13:06",
            "username": "snssqs",
            "content": "C correct",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 379881,
            "date": "Sat 16 Oct 2021 18:20",
            "username": "KemChhoCloud",
            "content": "C correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 362416,
            "date": "Tue 05 Oct 2021 21:27",
            "username": "marcelodba",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 348736,
            "date": "Fri 01 Oct 2021 20:15",
            "username": "VAG1595",
            "content": "Answer: C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#53",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is storing JSON files in an Amazon S3 bucket. The developer wants to securely share an object with a specific group of people.<br>How can the developer securely provide temporary access to the objects that are stored in the S3 bucket?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#53",
            "answers": [
              {
                "choice": "<p>A. Set object retention on the files. Use the AWS software development kit (SDK) to restore the object before subsequent requests. Provide the bucket's S3 URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the AWS software development kit (SDK) to generate a presigned URL. Provide the presigned URL.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set a bucket policy that restricts access after a period of time. Provide the bucket's S3 URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure static web hosting on the S3 bucket. Provide the bucket's web URL.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 53 discussion",
        "discusstion": [
          {
            "id": 515088,
            "date": "Sun 02 Jan 2022 18:01",
            "username": "denccc",
            "content": "It's B",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 625904,
            "date": "Sat 02 Jul 2022 04:39",
            "username": "KiDe",
            "content": "Ans: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 615470,
            "date": "Sun 12 Jun 2022 21:00",
            "username": "mohamedba",
            "content": "Answer is pre-signed URL, so B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541827,
            "date": "Sun 06 Feb 2022 17:10",
            "username": "JP_PA",
            "content": "ANS: B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 530924,
            "date": "Mon 24 Jan 2022 01:18",
            "username": "dave0808",
            "content": "also B,<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html<br>All objects by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a presigned URL, using their own security credentials, to grant time-limited permission to download the objects.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#54",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A front-end web application is using Amazon Cognito user pools to handle the user authentication flow. A developer is integrating Amazon DynamoDB into the application using the AWS SDK for JavaScript.<br>How would the developer securely call the API without exposing the access or secret keys?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#54",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Run the web application in an Amazon EC2 instance with the instance profile configured.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Hardcore the credentials, use Amazon S3 to host the web application, and enable server-side encryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Cognito user pool JSON Web Tokens (JWITs) to access the DynamoDB APIs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 54 discussion",
        "discusstion": [
          {
            "id": 157425,
            "date": "Tue 21 Sep 2021 07:51",
            "username": "WilsonNF",
            "content": "A.  Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 406857,
            "date": "Fri 29 Oct 2021 01:25",
            "username": "Huy",
            "content": "A.  The two main components of Amazon Cognito are user pools and identity pools. Identity pools provide AWS credentials to grant your users access to other AWS services. To enable users in your user pool to access AWS resources, you can configure an identity pool to exchange user pool tokens for AWS credentials. For more information see Accessing AWS Services Using an Identity Pool After Sign-in and Getting Started with Amazon Cognito Identity Pools (Federated Identities).",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 720629,
            "date": "Thu 17 Nov 2022 17:02",
            "username": "dark_cherrymon",
            "content": "A<br><br>though tough question because you still have to convert your jwt to access tokens or something in order to access dynamoDB.  but B and C are the wrong answer. and A is better than D because you need D is step 1 and A is step 2",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 589441,
            "date": "Thu 21 Apr 2022 15:48",
            "username": "Ivanyan",
            "content": "A.  Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 426139,
            "date": "Sat 30 Oct 2021 22:21",
            "username": "yaizkazaniSayto",
            "content": "I know this is A, but why not B? I mean application run on EC2, EC2 role doesnt expose keys so it's secure so application will have the same permissions as EC2 role provides. Why this is incorrect?It's a frontend means it's static means it will be deployed to s3. EC2 is expensive",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 443971,
            "date": "Tue 02 Nov 2021 15:04",
            "username": "Sayto",
            "content": "It's a frontend means it's static means it will be deployed to s3. EC2 is expensive",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 422362,
            "date": "Fri 29 Oct 2021 16:09",
            "username": "cynthiacytieyuaSayto",
            "content": "D.  The question is \\\"how to call the API\\\" not how to query dynamodb through its sdk. To call the API, simply use cognito as authorizer and use the jwt in the header.Almost believe you, but I think the \\\"API\\\" means DynamoDb low-level API here.Although in real world, nobody would do that in a frontend web applicationNo. The question asks how the SDK will authenticate to access AWS service. The only solution is to use Cognito user pool to exchange the JWT used in the authentication with tmp aws credential",
            "upvote_count": "212",
            "selected_answers": ""
          },
          {
            "id": 761977,
            "date": "Fri 30 Dec 2022 14:15",
            "username": "tieyua",
            "content": "Almost believe you, but I think the \\\"API\\\" means DynamoDb low-level API here.Although in real world, nobody would do that in a frontend web application",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 443972,
            "date": "Sat 06 Nov 2021 16:35",
            "username": "Sayto",
            "content": "No. The question asks how the SDK will authenticate to access AWS service. The only solution is to use Cognito user pool to exchange the JWT used in the authentication with tmp aws credential",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 361835,
            "date": "Wed 27 Oct 2021 20:16",
            "username": "Mitri45",
            "content": "Answer: A<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html<br>With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB.  Identity pools support anonymous guest users, as well as federation through third-party IdPs.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 353059,
            "date": "Sat 23 Oct 2021 15:49",
            "username": "VAG1595",
            "content": "Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 343392,
            "date": "Wed 13 Oct 2021 18:40",
            "username": "TroyMcLure",
            "content": "\\\"D\\\" is the correct answer, according to this link:<br>https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 333341,
            "date": "Tue 12 Oct 2021 03:41",
            "username": "dzhang344",
            "content": "D After a successful authentication, Amazon Cognito returns user pool tokens to your app. You can use the tokens to grant your users access to your own server-side resources or to the Amazon API Gateway. Or you can exchange them for temporary AWS credentials to access other AWS services.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 245343,
            "date": "Tue 05 Oct 2021 14:18",
            "username": "RicardoD",
            "content": "A is the answer<br><br>User pool is for authentication and identity pool is for authorization on resource access",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 195171,
            "date": "Tue 05 Oct 2021 11:02",
            "username": "Chinta",
            "content": "A using amazon cognito identity pool to access dynamodb apis",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 181291,
            "date": "Mon 04 Oct 2021 23:21",
            "username": "toyajiMaicon",
            "content": "Why not D?user pools cannot access AWS resources, you need user pools and identity pool to be able.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 212385,
            "date": "Tue 05 Oct 2021 12:43",
            "username": "Maicon",
            "content": "user pools cannot access AWS resources, you need user pools and identity pool to be able.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 174939,
            "date": "Mon 04 Oct 2021 12:26",
            "username": "saeidp",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 174903,
            "date": "Fri 24 Sep 2021 18:22",
            "username": "janvandermerwer",
            "content": "Agree with A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#55",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Developer wants to use AWS X-Ray to trace a user request end-to-end throughput the software stack. The Developer made the necessary changes in the application, tested it, and found that the application is able to send the traces to AWS X-Ray. However, when the application is deployed to an EC2 instance, the traces are not available.<br>Which of the following could create this situation? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#55",
            "answers": [
              {
                "choice": "<p>A. The traces are reaching X-Ray, but the Developer does not have access to view the records.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The X-Ray daemon is not installed on the EC2 instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. The X-Ray endpoint specified in the application configuration is incorrect.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The instance role does not have \"xray:BatchGetTraces\" and \"xray:GetTraceGraph\" permissions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. The instance role does not have \"xray:PutTraceSegments\" and \"xray:PutTelemetryRecords\" permissions.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 55 discussion",
        "discusstion": [
          {
            "id": 387239,
            "date": "Sat 30 Oct 2021 02:08",
            "username": "snssqs",
            "content": "BE is correct",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 589552,
            "date": "Thu 21 Apr 2022 19:58",
            "username": "tasbasi",
            "content": "xray:PutTraceSegments and xray:PutTelemetry records together with Daemon installed",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 571508,
            "date": "Sun 20 Mar 2022 10:03",
            "username": "HeC1123345HeC1123345",
            "content": "Why its not BD? for PutTraceSegments and PutTelemetryRecords are mainly for update, it stated that it is capable for sending trace.where by for D its mostly for retrieving according the ID.  https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 571510,
            "date": "Sun 20 Mar 2022 10:05",
            "username": "HeC1123345",
            "content": "where by for D its mostly for retrieving according the ID.  https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 535998,
            "date": "Sun 30 Jan 2022 09:01",
            "username": "Yahowmy",
            "content": "BD, The application can send traces but cannot access (get) so D is correct with get operations.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 515083,
            "date": "Sun 02 Jan 2022 17:53",
            "username": "denccc",
            "content": "Would go for BE",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 498840,
            "date": "Fri 10 Dec 2021 17:48",
            "username": "Shubham777ej123",
            "content": "Answer is B and C.  Its mentioned that developer tested that the application is capable of sending traces. Therefore it has the necessary IAM roles. (So E can be discarded)yeah but the developer didnt test it on the EC2 instance itself",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 520647,
            "date": "Mon 10 Jan 2022 05:54",
            "username": "ej123",
            "content": "yeah but the developer didnt test it on the EC2 instance itself",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 491724,
            "date": "Wed 01 Dec 2021 15:32",
            "username": "Horizon7VlastoGoss",
            "content": "I think it is B and D. <br>D because the question says \\\"The traces, are not accessible when the program is deployed to an EC2 instance.\\\"They are not accessible because they were not sent. You do not need a role on EC2 to view the traces. The user needs to have that policy and he has because he was able to see it before.\\\"discovered that it is capable of 'sending traces to AWS X-Ray\\\" and then your quote comes in. So I'm confused too. Hope I'll go with B&E until someone clarifies the other option.",
            "upvote_count": "221",
            "selected_answers": ""
          },
          {
            "id": 540221,
            "date": "Fri 04 Feb 2022 07:09",
            "username": "Vlasto",
            "content": "They are not accessible because they were not sent. You do not need a role on EC2 to view the traces. The user needs to have that policy and he has because he was able to see it before.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 493667,
            "date": "Sat 04 Dec 2021 12:19",
            "username": "Goss",
            "content": "\\\"discovered that it is capable of 'sending traces to AWS X-Ray\\\" and then your quote comes in. So I'm confused too. Hope I'll go with B&E until someone clarifies the other option.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428901,
            "date": "Tue 02 Nov 2021 05:09",
            "username": "mariaSooSayto",
            "content": "BC maybe? why not C?because it work in local",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 442851,
            "date": "Sat 06 Nov 2021 06:10",
            "username": "Sayto",
            "content": "because it work in local",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 379887,
            "date": "Sun 17 Oct 2021 16:04",
            "username": "KemChhoCloud",
            "content": "BE seems good",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 348764,
            "date": "Fri 15 Oct 2021 09:12",
            "username": "VAG1595",
            "content": "Answer: B,E",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 347640,
            "date": "Tue 12 Oct 2021 18:24",
            "username": "sikandareurus",
            "content": "B and E is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 347594,
            "date": "Sun 03 Oct 2021 17:46",
            "username": "Ronak1",
            "content": "BE is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 346665,
            "date": "Thu 23 Sep 2021 13:47",
            "username": "kwch791",
            "content": "Correct ans BE",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#57",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is debugging an AWS Lambda function behind an Amazon API Gateway. Whenever the API Gateway endpoint is called, HTTP status code 200 is returned even though AWS Lambda is recording a 4xx error.<br>What change needs to be made to return a proper error code through the API Gateway?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#57",
            "answers": [
              {
                "choice": "<p>A. Enable CORS in the API Gateway method settings<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a Lambda proxy integration to return HTTP codes and headers<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable API Gateway error pass-through.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Return the value in the header x-Amzn-ErrorType.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 57 discussion",
        "discusstion": [
          {
            "id": 540850,
            "date": "Sat 05 Feb 2022 10:17",
            "username": "amrElHusseiny",
            "content": "i vote B<br><br>With the Lambda proxy integration, Lambda is required to return an output of the following format ...<br>In this output, statusCode is typically 4XX for a client error and 5XX for a server error. API Gateway handles these errors by mapping the Lambda error to an HTTP error response, according to the specified statusCode. For API Gateway to pass the error type (for example, InvalidParameterException), as part of the response to the client, the Lambda function must include a header (for example, \\\"X-Amzn-ErrorType\\\":\\\"InvalidParameterException\\\") in the headers property.",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 513814,
            "date": "Fri 31 Dec 2021 02:49",
            "username": "claudiadlrdduenasnetk",
            "content": "I'll go with \\\"D\\\" - https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.htmlIn this link the correct answer would be \\\"B\\\" since it is talking about the error code not the error typeI think I'd go for B, since this is an standard error (4xx).",
            "upvote_count": "731",
            "selected_answers": ""
          },
          {
            "id": 530839,
            "date": "Sun 23 Jan 2022 22:42",
            "username": "dduenas",
            "content": "In this link the correct answer would be \\\"B\\\" since it is talking about the error code not the error type",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 546115,
            "date": "Sat 12 Feb 2022 22:45",
            "username": "netk",
            "content": "I think I'd go for B, since this is an standard error (4xx).",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718792,
            "date": "Tue 15 Nov 2022 14:53",
            "username": "wps",
            "content": "B correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 690216,
            "date": "Sun 09 Oct 2022 15:27",
            "username": "haazybanj",
            "content": "Answer is B<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 679551,
            "date": "Mon 26 Sep 2022 10:49",
            "username": "warriorYup",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 598546,
            "date": "Sun 08 May 2022 14:33",
            "username": "cloudbusting",
            "content": "This is B https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 531320,
            "date": "Mon 24 Jan 2022 14:26",
            "username": "RmnvccCollinsWolf",
            "content": "\\\"For Lambda custom integrations, you must map errors returned by Lambda in the integration response to standard HTTP error responses for your clients. Otherwise, Lambda errors are returned as 200 OK responses by default and the result is not intuitive for your API users.\\\"<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.htmlThis is for customs and not proxy. They are two different solutions",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 712442,
            "date": "Sun 06 Nov 2022 16:57",
            "username": "CollinsWolf",
            "content": "This is for customs and not proxy. They are two different solutions",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 528133,
            "date": "Thu 20 Jan 2022 05:41",
            "username": "CHRIS12722222",
            "content": "B. <br>https://stackoverflow.com/questions/31329495/is-there-a-way-to-change-the-http-status-codes-returned-by-amazon-api-gateway",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 526044,
            "date": "Mon 17 Jan 2022 20:35",
            "username": "striver",
            "content": "D is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#59",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is using Amazon S3 as the event source that invokes a Lambda function when new objects are created in the bucket. The event source mapping information is stored in the bucket notification configuration. The developer is working with different versions of the Lambda function, and has a constant need to update notification configuration so that Amazon S3 invokes the correct version.<br>What is the MOST efficient and effective way to achieve mapping between the S3 event and Lambda?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#59",
            "answers": [
              {
                "choice": "<p>A. Use a different Lambda trigger.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Lambda environment variables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a Lambda alias.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Lambda tags.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 59 discussion",
        "discusstion": [
          {
            "id": 534803,
            "date": "Fri 28 Jan 2022 16:31",
            "username": "mattia_besharp",
            "content": "You can assign an alias to a specific version and link the S3 trigger to that alias. If you want to change the version of the Lambda triggered by S3, you just need to edit the alias",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 513515,
            "date": "Thu 30 Dec 2021 17:24",
            "username": "claudiadlr",
            "content": "I'll go with \\\"C\\\" - https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html<br>\\\"A Lambda alias is like a pointer to a specific function version. Users can access the function version using the alias Amazon Resource Name (ARN)\\\"",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 712444,
            "date": "Sun 06 Nov 2022 16:59",
            "username": "CollinsWolf",
            "content": "The correct answer is B.  Aliases is to manage versions not configuration like the question stated",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693645,
            "date": "Thu 13 Oct 2022 08:04",
            "username": "Arnaud92",
            "content": "Answer C : https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#using-aliases",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 681570,
            "date": "Wed 28 Sep 2022 12:22",
            "username": "Krishna8686868246CollinsWolf",
            "content": "B is the answer \\\"constant need to update notification configuration\\\"True, the answer is B",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 712447,
            "date": "Sun 06 Nov 2022 17:01",
            "username": "CollinsWolf",
            "content": "True, the answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679553,
            "date": "Mon 26 Sep 2022 10:51",
            "username": "warriorYupanthonyq98",
            "content": "Seems like C but why is this marked as A?So many questions are marked wrong. I almost exclusively go with the community votes for the correct answer. Correct answer is C. ",
            "upvote_count": "14",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 685348,
            "date": "Mon 03 Oct 2022 11:32",
            "username": "anthonyq98",
            "content": "So many questions are marked wrong. I almost exclusively go with the community votes for the correct answer. Correct answer is C. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 637799,
            "date": "Wed 27 Jul 2022 06:50",
            "username": "juaneks",
            "content": "this is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 542721,
            "date": "Mon 07 Feb 2022 23:26",
            "username": "JP_PA",
            "content": "ANS: C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 515574,
            "date": "Mon 03 Jan 2022 10:46",
            "username": "denccc",
            "content": "It's c",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 514483,
            "date": "Sat 01 Jan 2022 12:05",
            "username": "ADI2608",
            "content": "C: to point to different versions, use aliases.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 514106,
            "date": "Fri 31 Dec 2021 15:00",
            "username": "waqas1992",
            "content": "C - Publish the Lambda version and give it an alias. Which will work as a pointer to that specific published version",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#60",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a multi-tier application that uses Amazon API Gateway, AWS Lambda, and Amazon RDS. The company wants to investigate a slow response time to calls that come from the API Gateway API.<br>What is the MOST operationally efficient way for the company to determine which internal call is causing the slow response times?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#60",
            "answers": [
              {
                "choice": "<p>A. Use Amazon CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS X-Ray.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CloudTrail.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use VPC Flow Logs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 60 discussion",
        "discusstion": [
          {
            "id": 658513,
            "date": "Sat 03 Sep 2022 15:25",
            "username": "sidvic",
            "content": "I think B",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 695212,
            "date": "Sat 15 Oct 2022 07:38",
            "username": "cloud_collector",
            "content": "AWS X-Ray is a service that collects data about requests that your application serves, and provides tools that you can use to view, filter, and gain insights into that data to identify issues and opportunities for optimization. For any traced request to your application, you can see detailed information not only about the request and response, but also about calls that your application makes to downstream AWS resources, microservices, databases, and web APIs.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 675629,
            "date": "Thu 22 Sep 2022 02:54",
            "username": "itsmaulanatito",
            "content": "I think it's AWS CloudTrail<br>documentation: https://stackshare.io/stackups/aws-cloudtrail-vs-aws-x-ray",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 668761,
            "date": "Wed 14 Sep 2022 10:18",
            "username": "vrushanya",
            "content": "API calls can be logged in AWS CloudTrail",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#61",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying an application that will store files in an Amazon S3 bucket. The files must be encrypted at rest. The developer wants to automatically replicate the files to an S3 bucket in a different AWS Region for disaster recovery.<br>How can the developer accomplish this task with the LEAST amount of configuration?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#61",
            "answers": [
              {
                "choice": "<p>A. Encrypt the files by using server-side encryption with S3 managed encryption keys (SSE-S3). Enable S3 bucket replication.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Encrypt the files by using server-side encryption (SSE) with an AWS Key Management Service (AWS KMS) customer master key (CMK). Enable S3 bucket replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the s3 sync command to sync the files to the S3 bucket in the other Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an S3 Lifecycle configuration to automatically transfer files to the S3 bucket in the other Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 61 discussion",
        "discusstion": [
          {
            "id": 657533,
            "date": "Fri 02 Sep 2022 16:58",
            "username": "Vinafec",
            "content": "Should be A, since configuration should be minimal",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 697456,
            "date": "Mon 17 Oct 2022 16:00",
            "username": "kratos_1324",
            "content": "i choose A<br> bcos keyword is Least amount of config",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679561,
            "date": "Mon 26 Sep 2022 11:01",
            "username": "warriorYup",
            "content": "By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with customer managed keys stored in AWS KMS.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 677031,
            "date": "Fri 23 Sep 2022 13:02",
            "username": "XAvenger",
            "content": "A. <br>At first I thought it should be \\\"B\\\" due to similar approach with EBS volumes, but after reading the link<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html<br>Important<br>Objects created with server-side encryption using customer-provided (SSE-C) encryption keys are not replicated.<br>looks like the answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 672285,
            "date": "Sun 18 Sep 2022 13:27",
            "username": "Harry_01",
            "content": "It is A.  keyword > Minimal Configuration",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 665912,
            "date": "Sun 11 Sep 2022 09:31",
            "username": "LaXuanLinhMahditopg",
            "content": "I don't know why people vote for A, this guide does not mention S3 managed key at all, only KMS for replication<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-4.htmlHe said least amount of effort and if you use kms you will have to manage the keys plus aws managed keys belong to kms in the first place lol",
            "upvote_count": "33",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 666349,
            "date": "Sun 11 Sep 2022 19:55",
            "username": "Mahditopg",
            "content": "He said least amount of effort and if you use kms you will have to manage the keys plus aws managed keys belong to kms in the first place lol",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 659552,
            "date": "Sun 04 Sep 2022 23:29",
            "username": "m_t_kd",
            "content": "Answer is A, Simplest form",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 658355,
            "date": "Sat 03 Sep 2022 12:46",
            "username": "sindra",
            "content": "I vote for A, since if we use encryption using SSE-KMS we need to add additional configuraiton to replicate/send the KMS to the new bucket policy<br>here is the reference:<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-4.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 656232,
            "date": "Thu 01 Sep 2022 14:26",
            "username": "Fedeoo",
            "content": "Answer is B.  Be mind source and destination may have different private key.<br>To enable replication, you need to create a role which needs permission to decrypt the source and encrypt the destination.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 654811,
            "date": "Wed 31 Aug 2022 08:06",
            "username": "icebox0e",
            "content": "Answer is A",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#62",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A serverless application is using AWS Step Functions to process data and save it to a database. The application needs to validate some data with an external service before saving the data. The application will call the external service from an AWS Lambda function, and the external service will take a few hours to validate the data. The external service will respond to a webhook when the validation is complete.<br>A developer needs to pause the Step Functions workflow and wait for the response from the external service.<br>What should the developer do to meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#62",
            "answers": [
              {
                "choice": "<p>A. Use the .wait ForTaskToken option in the Lambda function task state. Pass the token in the body.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the .waitForTaskToken option in the Lambda function task state. Pass the invocation request.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Call the Lambda function in synchronous mode. Wait for the external service to complete the processing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Call the Lambda function in asynchronous mode. Use the Wait state until the external service completes the processing.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 62 discussion",
        "discusstion": [
          {
            "id": 657383,
            "date": "Fri 02 Sep 2022 13:59",
            "username": "Vinafec",
            "content": "It's A<br><br>https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-example",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 677813,
            "date": "Sat 24 Sep 2022 14:33",
            "username": "david00",
            "content": "A :https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-example",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 672294,
            "date": "Sun 18 Sep 2022 13:33",
            "username": "Harry_01Arnaud92",
            "content": "Just curious to know, wouldn't the Lambda time out? as the question says \\\"the external service will take a few hours\\\" and Lambda cannot wait that long.<br>I was leaning more towards Option D.  Can someone explain what is wrong with option D?The step function is doing the waiting, not the lambda",
            "upvote_count": "32",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693662,
            "date": "Thu 13 Oct 2022 08:26",
            "username": "Arnaud92",
            "content": "The step function is doing the waiting, not the lambda",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 657294,
            "date": "Fri 02 Sep 2022 12:26",
            "username": "Danbraga",
            "content": "i would go for A<br>https://instil.co/blog/step-functions-and-task-tokens/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 656284,
            "date": "Thu 01 Sep 2022 15:24",
            "username": "Spamuel",
            "content": "I think it's B. ..<br><br>https://docs.aws.amazon.com/step-functions/latest/dg/connect-lambda.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655666,
            "date": "Thu 01 Sep 2022 03:33",
            "username": "JAMG54",
            "content": "Maybe B.  Token is get accessed from context object for that reason A is not accurate for me.<br><br>The other ones not seems be the correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#63",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer must use AWS X-Ray to monitor an application that is running on an Amazon EC2 instance. The developer has prepared the application by using the<br>X-Ray SDK.<br>What should the developer do to perform the monitoring?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#63",
            "answers": [
              {
                "choice": "<p>A. Configure the X-Ray SDK sampling rule and target. Activate the X-Ray daemon from the EC2 console or the AWS CLI with the modify-instance-attribute command to set the XRayEnabled flag.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the X-Ray daemon. Assign an IAM role to the EC2 instance with a policy that allows writes to X-Ray.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the X-Ray daemon. Configure it to forward data to Amazon EventBridge (Amazon CloudWatch Events). Grant the EC2 instance permission to write to Event Bridge (CloudWatch Events).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy the X-Ray SDK with the application, and instrument the application code. Use the SDK logger to capture and send the events.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 63 discussion",
        "discusstion": [
          {
            "id": 703435,
            "date": "Tue 25 Oct 2022 02:01",
            "username": "ramireze",
            "content": "option B is themost accurate",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 688107,
            "date": "Thu 06 Oct 2022 23:31",
            "username": "Millerules",
            "content": "I believe B is the right answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 684412,
            "date": "Sat 01 Oct 2022 20:04",
            "username": "haazybanj",
            "content": "Answer seems to be B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 672300,
            "date": "Sun 18 Sep 2022 13:36",
            "username": "Harry_01",
            "content": "Clearly its option B!",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656286,
            "date": "Thu 01 Sep 2022 15:26",
            "username": "Spamuel",
            "content": "I believe the answer is B. <br><br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 655665,
            "date": "Thu 01 Sep 2022 03:32",
            "username": "JAMG54",
            "content": "Its B for me",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#64",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing a full-stack serverless application. Files for the website are stored in an Amazon S3 bucket. AWS Lambda functions that use Amazon<br>API Gateway endpoints return results from an Amazon DynamoDB table.<br>The developer must create a solution that securely provides registration and authentication for the application while minimizing the amount of configuration.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#64",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Cognito user pool and an app client. Configure the app client to use the user pool and provide the hosted web UI provided for sign-up and sign-in.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an Amazon Cognito identity pool. Map the users with IAM roles that are configured to access the S3 bucket that stores the website.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure and launch an Amazon EC2 instance to set up an identity provider with an Amazon Cognito user pool. Configure the user pool to provide the hosted web UI for sign-up and sign-in.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM policy that allows access to the website that is stored in the S3 bucket. Attach the policy to an IAM group. Add IAM users to the group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 64 discussion",
        "discusstion": [
          {
            "id": 759213,
            "date": "Wed 28 Dec 2022 01:45",
            "username": "braveheart22tieyua",
            "content": "I'm inclined toward option BKeywords \\\"provides registration and authentication\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 762056,
            "date": "Fri 30 Dec 2022 16:17",
            "username": "tieyua",
            "content": "Keywords \\\"provides registration and authentication\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 748370,
            "date": "Sat 17 Dec 2022 21:08",
            "username": "sylvergorilla",
            "content": "B meets both requirements. I would say<br>https://docs.aws.amazon.com/cognito/latest/developerguide/iam-roles.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728546,
            "date": "Sun 27 Nov 2022 20:45",
            "username": "gpit",
            "content": "B meets both requirements: \\\"securely provides registration and authentication for the application\\\"\\\"minimizing the amount of configuration\\\".",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 720710,
            "date": "Thu 17 Nov 2022 18:58",
            "username": "dark_cherrymon",
            "content": "i choose A, but none of the answers mentions accessing dynamo db. i'm assuming lambda is accessing dynamo db",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 694328,
            "date": "Fri 14 Oct 2022 00:52",
            "username": "cloud_collector",
            "content": "Amazon Cognito User Pools are used for authentication.<br> Identity Pools are used for User Authorization.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 684020,
            "date": "Sat 01 Oct 2022 07:49",
            "username": "habros",
            "content": "A.  Twist of words when author describes application architecture within the question. For this qn it=E2=80=99s should be in the perspective of client instead of software engineer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679570,
            "date": "Mon 26 Sep 2022 11:16",
            "username": "warriorYup",
            "content": "The question clearly states it needs registration and authentication.<br>Plus the answer B is wrong as it states mapping the IAM users with Identity roles",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 663812,
            "date": "Thu 08 Sep 2022 18:53",
            "username": "BAxiLaXuanLinh",
            "content": "It should be B as we are talking about giving access to S3 and dynamoDB from it.Nope, it's A.  Lambda functions don't need Cognito identity pools to access DynamoDB or S3, it just needs IAM role. The client will access data via the Lambda functions, thus B is wrong.<br>Cognito user pools provide authentication and authorization so it's A. ",
            "upvote_count": "14",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 665933,
            "date": "Sun 11 Sep 2022 09:57",
            "username": "LaXuanLinh",
            "content": "Nope, it's A.  Lambda functions don't need Cognito identity pools to access DynamoDB or S3, it just needs IAM role. The client will access data via the Lambda functions, thus B is wrong.<br>Cognito user pools provide authentication and authorization so it's A. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 661253,
            "date": "Tue 06 Sep 2022 15:11",
            "username": "bhrukum",
            "content": "B is correct, its identity pool for AWS resources",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 656296,
            "date": "Thu 01 Sep 2022 15:31",
            "username": "Spamuel",
            "content": "I believe this is A - User Pools.<br><br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 655664,
            "date": "Thu 01 Sep 2022 03:32",
            "username": "JAMG54",
            "content": "For me its A. <br><br>Option B) Identity pool are used to request permissions to access aws resources not for login.<br><br>Option C) I am using S3 with a serverless application and also only 1 EC2 instance is not enough to serve multiple users.<br><br>D)IAM permissions are more for internal aws accoun users not end users",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#65",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that writes files to an Amazon S3 bucket. Whenever there is a new file, an S3 notification event invokes an AWS Lambda function to process the file. The Lambda function code works as expected. However, when a developer checks the Lambda function logs, the developer finds that multiple invocations occur for every file.<br>What is causing the duplicate entries?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#65",
            "answers": [
              {
                "choice": "<p>A. The S3 bucket name is incorrectly specified in the application and is targeting another S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The Lambda function did not run correctly, and Lambda retried the invocation with a delay.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon S3 is delivering the same event multiple times.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. The application stopped intermittently and then resumed, splitting the logs into multiple smaller files.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 65 discussion",
        "discusstion": [
          {
            "id": 680731,
            "date": "Tue 27 Sep 2022 14:12",
            "username": "AulaitQMtbhtp",
            "content": "I vote B, although I agree that the question clearly states that the code works correctly. It cannot be A, because if the files are being written to the wrong bucket then the lambda wouldn't trigger even once. C assumes an underlying issue with AWS, which although it could happen, it is unlikely. D makes no sense.altough indeed the at least once suggest S3 is possibly triggering multiple times for one event (which supports C) the following troubleshooting is only pointing to the retries (supports B): https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-duplicate-invocations/",
            "upvote_count": "61",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 693040,
            "date": "Wed 12 Oct 2022 14:00",
            "username": "tbhtp",
            "content": "altough indeed the at least once suggest S3 is possibly triggering multiple times for one event (which supports C) the following troubleshooting is only pointing to the retries (supports B): https://aws.amazon.com/premiumsupport/knowledge-center/lambda-function-duplicate-invocations/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728549,
            "date": "Sun 27 Nov 2022 20:53",
            "username": "gpit",
            "content": "B.  because event if code worked correctly for small S3 file, lambda may time out for big S3 file, causing multiple lambda retries. https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 720727,
            "date": "Thu 17 Nov 2022 19:15",
            "username": "dark_cherrymontieyuadark_cherrymon",
            "content": "C because events is at least once<br><br>it's not A because if it was the wrong bucket you wouldn't be able to associate with the objects<br><br>it's not B because it says the lambda works properlyExcellent detailed detective work!Although work properly could mean work properly many times, and log shows \\\"multiple invocations occur for every file\\\" ... Bottom line, it cannot be Amazon's fault, especially not during exam :-)\\\"If the sequence key does match between the events, then the export process is uploading the object once however Amazon S3 generates duplicate events and maps the events with same sequence key resulting in multiple Lambda invocation. This is rare condition which happens due to retry nature of Amazon S3 service and the workaround is to store and compare the sequencer key values to check for duplicates as each event notification is processed.\\\"<br><br>https://stackoverflow.com/questions/56772299/s3-notification-creates-multiple-events",
            "upvote_count": "211",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 762072,
            "date": "Fri 30 Dec 2022 16:38",
            "username": "tieyua",
            "content": "Excellent detailed detective work!Although work properly could mean work properly many times, and log shows \\\"multiple invocations occur for every file\\\" ... Bottom line, it cannot be Amazon's fault, especially not during exam :-)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720737,
            "date": "Thu 17 Nov 2022 19:23",
            "username": "dark_cherrymon",
            "content": "\\\"If the sequence key does match between the events, then the export process is uploading the object once however Amazon S3 generates duplicate events and maps the events with same sequence key resulting in multiple Lambda invocation. This is rare condition which happens due to retry nature of Amazon S3 service and the workaround is to store and compare the sequencer key values to check for duplicates as each event notification is processed.\\\"<br><br>https://stackoverflow.com/questions/56772299/s3-notification-creates-multiple-events",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679896,
            "date": "Mon 26 Sep 2022 17:34",
            "username": "AK34180SuperPiski",
            "content": "Why b is most voted, it clearly states lambda is working as expected.it should be ABut in that case the lambda won't be called at all.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 694038,
            "date": "Thu 13 Oct 2022 17:30",
            "username": "SuperPiski",
            "content": "But in that case the lambda won't be called at all.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679577,
            "date": "Mon 26 Sep 2022 11:26",
            "username": "warriorYup",
            "content": "I too thought its C but as per the doc it doesn't send twice<br>Please have a look here https://stackoverflow.com/a/40196853",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 674157,
            "date": "Tue 20 Sep 2022 14:44",
            "username": "Spamuel",
            "content": "B - The key phrase here is \\\"multiple invocations occur for every file\\\". For it to occur every time, this means that that Lambda is not functioning correctly, which causes it to be re-invoked.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 665819,
            "date": "Sun 11 Sep 2022 06:51",
            "username": "guptasacArnaud92",
            "content": "C<br>In below page, if you refer - \\\"Amazon S3 event notifications are designed to be delivered at least once.\\\"That means possibility is same event notified multiple times.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.htmlTrue but here multiple invocations occur for EVERY file. If it was due to S3 sending the event multiple times, it would only rarely occur. This is more likely to be the lambda function timing out on the firsts invocations for every file, and thus being re-invocated and successfully completing after retrying",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 693681,
            "date": "Thu 13 Oct 2022 09:10",
            "username": "Arnaud92",
            "content": "True but here multiple invocations occur for EVERY file. If it was due to S3 sending the event multiple times, it would only rarely occur. This is more likely to be the lambda function timing out on the firsts invocations for every file, and thus being re-invocated and successfully completing after retrying",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 660154,
            "date": "Mon 05 Sep 2022 14:10",
            "username": "PVRsidvic",
            "content": "Should be Bbut the questions says that \\\"The Lambda function code works as expected\\\". Why should AWS Lambda fail if the question says it is working correctly?",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 660877,
            "date": "Tue 06 Sep 2022 08:30",
            "username": "sidvic",
            "content": "but the questions says that \\\"The Lambda function code works as expected\\\". Why should AWS Lambda fail if the question says it is working correctly?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 659015,
            "date": "Sun 04 Sep 2022 08:53",
            "username": "sidvic",
            "content": "For me the answer is A, as the question says that \\\"the developer finds that multiple invocations occur for every file\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 657588,
            "date": "Fri 02 Sep 2022 18:13",
            "username": "Vinafec",
            "content": "Should be B<br><br>https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656267,
            "date": "Thu 01 Sep 2022 15:06",
            "username": "Spamuel",
            "content": "I believe the answer may be C, as the S3 event notification could be using a standard SQS queue instead of a FIFO queue, which may lead to duplicate events.<br><br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 655653,
            "date": "Thu 01 Sep 2022 03:19",
            "username": "JAMG54",
            "content": "Nothing of them has sense for me. I think it could be that lambda is not having enough time to process data. So ,even the code is working ok, sometimes timeout is reached before execution ends and it would seem like multiple events are delivered.<br><br>Some can explain what and why is the correct answer?",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#66",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to use the AWS CLI on an on-premises development server temporarily to access AWS services while performing maintenance. The developer needs to authenticate to AWS with their identity for several hours.<br>What is the MOST secure way to call AWS CLI commands with the developer's IAM identity?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#66",
            "answers": [
              {
                "choice": "<p>A. Specify the developer's IAM access key ID and secret access key as parameters for each CLI command<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Run the aws configure CLI command. Provide the developer's IAM access key ID and secret access key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Specify the developer's IAM profile as a parameter for each CLI command.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the get-session-token CLI command with the developer's IAM user. Use the returned credentials to call the CLI<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 66 discussion",
        "discusstion": [
          {
            "id": 720857,
            "date": "Thu 17 Nov 2022 21:59",
            "username": "dark_cherrymon",
            "content": "i was going for A, but it seems A and D are the same thing just D is temporary credientials",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 689310,
            "date": "Sat 08 Oct 2022 14:49",
            "username": "habroshabros",
            "content": "https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html<br><br>Added layer of security by ensuring stale keys are not reusedI=E2=80=99ll agree with B if it=E2=80=99s not =E2=80=9Cmost secure=E2=80=9D implementation",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 689312,
            "date": "Sat 08 Oct 2022 14:50",
            "username": "habros",
            "content": "I=E2=80=99ll agree with B if it=E2=80=99s not =E2=80=9Cmost secure=E2=80=9D implementation",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 656270,
            "date": "Thu 01 Sep 2022 15:11",
            "username": "SpamuelSirikou_0922m_t_kd",
            "content": "D is correct as it allows for temporary credentials with a set time duration.<br><br>https://docs.aws.amazon.com/cli/latest/reference/sts/get-session-token.htmlCan u tell me why not B. ?temporary access",
            "upvote_count": "412",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657133,
            "date": "Fri 02 Sep 2022 09:43",
            "username": "Sirikou_0922m_t_kd",
            "content": "Can u tell me why not B. ?temporary access",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 657889,
            "date": "Sat 03 Sep 2022 01:07",
            "username": "m_t_kd",
            "content": "temporary access",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#67",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS Lambda function accesses two Amazon DynamoDB tables. A developer wants to improve the performance of the Lambda function by identifying bottlenecks in the function.<br>How can the developer inspect the timing of the DynamoDB API calls?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#67",
            "answers": [
              {
                "choice": "<p>A. Add DynamoDB as an event source to the Lambda function. View the performance with Amazon CloudWatch metrics<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Place an Application Load Balancer (ALB) in front of the two DynamoDB tables. Inspect the ALB logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Limit Lambda to no more than five concurrent invocations. Monitor from the Lambda console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable AWS X-Ray tracing for the function. View the traces from the X-Ray service.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 67 discussion",
        "discusstion": [
          {
            "id": 514105,
            "date": "Fri 31 Dec 2021 14:59",
            "username": "waqas1992",
            "content": "D - Enable X-ray for Serverless application to view the map and find the traces for each segments",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 720859,
            "date": "Thu 17 Nov 2022 22:03",
            "username": "dark_cherrymon",
            "content": "D easy",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 670537,
            "date": "Fri 16 Sep 2022 08:29",
            "username": "trungducng2910",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 586628,
            "date": "Sat 16 Apr 2022 07:37",
            "username": "SpeedRunner",
            "content": "\\\"You can use AWS X-Ray to visualize the components of your application, identify performance bottlenecks, and troubleshoot requests that resulted in an error.\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 523899,
            "date": "Sat 15 Jan 2022 03:58",
            "username": "josh119891",
            "content": "inside the function + bottle neckX-RAY",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 515573,
            "date": "Mon 03 Jan 2022 10:46",
            "username": "denccc",
            "content": "It's d",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 514482,
            "date": "Sat 01 Jan 2022 12:04",
            "username": "ADI2608",
            "content": "Inside the function means X-Ray.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#68",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer deployed an application to an Amazon EC2 instance. The application needs to know the public IPv4 address of the instance.<br>How can the application find this information?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#68",
            "answers": [
              {
                "choice": "<p>A. Query the instance metadata from http://169.254.169.254/latest/meta-data/.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Query the instance user data from http://169.254.169.254/latest/user-data/.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Query the Amazon Machine Image (AMI) information from http://169.254 169.254/latest/meta-data/ami/.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Check the hosts file of the operating system.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 68 discussion",
        "discusstion": [
          {
            "id": 654167,
            "date": "Tue 30 Aug 2022 17:31",
            "username": "sindra",
            "content": "Confirm a since we can find the attribute in 169.254.169.254/latest/meta-data",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720860,
            "date": "Thu 17 Nov 2022 22:03",
            "username": "dark_cherrymon",
            "content": "it's A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 693830,
            "date": "Thu 13 Oct 2022 13:27",
            "username": "Arnaud92",
            "content": "It's A. <br><br>Instance meta-data : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html<br>In them you will find :<br>=C2=AB network/interfaces/macs/mac/public-ipv4s : The public IP address or Elastic IP addresses associated with the interface. There may be multiple IPv4 addresses on an instance. =C2=BB<br>(from https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-categories.html)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#69",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing an AWS Lambda function to perform a maintenance activity. The developer will use Amazon EventBridge (Amazon CloudWatch Events) to invoke the function on an hourly schedule. The developer wants the function to log information at different levels of detail according to the value of a log level variable. The developer must design the function so that the log level can be set without requiring a change to the function code.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#69",
            "answers": [
              {
                "choice": "<p>A. Add a custom log level parameter for the Lambda function. Set the parameter by using the Lambda console<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set the log level in a Lambda environment variable<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set the log level in the Amazon CloudWatch Logs console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a custom log level parameter for the Lambda function. Set the parameter by using the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 69 discussion",
        "discusstion": [
          {
            "id": 656254,
            "date": "Thu 01 Sep 2022 14:50",
            "username": "Spamuel",
            "content": "B is correct: https://docs.aws.amazon.com/solutions/latest/operations-conductor/appendix-d.html",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 728563,
            "date": "Sun 27 Nov 2022 21:16",
            "username": "gpit",
            "content": "Note: \\\"You define environment variables on the unpublished version of your function. When you publish a version, the environment variables are locked for that version along with other version-specific configuration. \\\" https://docs.amazonaws.cn/en_us/lambda/latest/dg/configuration-envvars.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720862,
            "date": "Thu 17 Nov 2022 22:06",
            "username": "dark_cherrymon",
            "content": "it's B<br><br>\\\"Each Lambda function has a LogLevel environment variable\\\"<br><br>https://docs.aws.amazon.com/solutions/latest/operations-conductor/appendix-d.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717124,
            "date": "Sun 13 Nov 2022 07:45",
            "username": "cloud_collector",
            "content": "You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that is stored in a function's version-specific configuration. The Lambda runtime makes environment variables available to your code and sets additional environment variables that contain information about the function and invocation request.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 698978,
            "date": "Wed 19 Oct 2022 13:48",
            "username": "Norocas",
            "content": "I would say B because you don't need to change the Lambda code",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 693840,
            "date": "Thu 13 Oct 2022 13:40",
            "username": "Arnaud92",
            "content": "I vote B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#70",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is creating a serverless application that uses an AWS Lambda function The developer will use AWS CloudFormation to deploy the application The application will write logs to Amazon CloudWatch Logs. The developer has created a log group in a CloudFormation template for the application to use. The developer needs to modify the CloudFormation template to make the name of the log group available to the application at runtime.<br>Which solution will meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#70",
            "answers": [
              {
                "choice": "<p>A. Use the AWS::Include transform in CloudFormation to provide the log group's name to the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Pass the log group's name to the application in the user data section of the CloudFormation template<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the CloudFormation template's Mappings section to specify the log group's name for the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Pass the log group's Amazon Resource Name (ARN) as an environment variable to the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 70 discussion",
        "discusstion": [
          {
            "id": 688129,
            "date": "Fri 07 Oct 2022 00:20",
            "username": "Millerules",
            "content": "I believe C is the right answer. The Developer needs to modify the CloudFormation template not the Lambda function. Therefore, Mappings can be used to make the log group name available to the application using Fn::FindInMap",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 693602,
            "date": "Thu 13 Oct 2022 06:30",
            "username": "Aiyappa",
            "content": "I vote D - https://stackoverflow.com/questions/65325865/aws-how-to-pass-arn-from-cloud-formation-template-to-aws-lambda-function",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693601,
            "date": "Thu 13 Oct 2022 06:29",
            "username": "Aiyappa",
            "content": "I vote D - https://stackoverflow.com/questions/65325865/aws-how-to-pass-arn-from-cloud-formation-template-to-aws-lambda-function",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 659034,
            "date": "Sun 04 Sep 2022 09:30",
            "username": "sidvicSpamuel",
            "content": "I think DAgreed - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html",
            "upvote_count": "43",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 674167,
            "date": "Tue 20 Sep 2022 14:51",
            "username": "Spamuel",
            "content": "Agreed - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#71",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application on Amazon Elastic Container Service (Amazon ECS). When the company deploys a new version of the application, the company initially needs to expose 10% of live traffic to the new version. After a period of time, the company needs to immediately route all the remaining live traffic to the new version.<br>Which ECS deployment should the company use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#71",
            "answers": [
              {
                "choice": "<p>A. Rolling update<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Blue/green with canary<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Blue/green with all at once<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Blue/green with linear<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 71 discussion",
        "discusstion": [
          {
            "id": 660162,
            "date": "Mon 05 Sep 2022 14:16",
            "username": "PVR",
            "content": "Should be Canary",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656260,
            "date": "Thu 01 Sep 2022 14:57",
            "username": "SpamuelSpamuel",
            "content": "B is correct. Refer to AWS Whitepaper: https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdfCanary =E2=80=93 Traffic is shifted in two increments.<br>=E2=80=A2 Linear =E2=80=93 Traffic is shifted in equal increments.<br>=E2=80=A2 All-at-once =E2=80=93 All traffic is shifted to the updated tasks",
            "upvote_count": "64",
            "selected_answers": ""
          },
          {
            "id": 674172,
            "date": "Tue 20 Sep 2022 14:52",
            "username": "Spamuel",
            "content": "Canary =E2=80=93 Traffic is shifted in two increments.<br>=E2=80=A2 Linear =E2=80=93 Traffic is shifted in equal increments.<br>=E2=80=A2 All-at-once =E2=80=93 All traffic is shifted to the updated tasks",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 707136,
            "date": "Sat 29 Oct 2022 12:50",
            "username": "Rk303",
            "content": "B should be correct<br><br>As questions expectations it has requireds canary deployment which is best fit.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694371,
            "date": "Fri 14 Oct 2022 02:17",
            "username": "cloud_collector",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658366,
            "date": "Sat 03 Sep 2022 13:05",
            "username": "sindraXAvenger",
            "content": "I believe it should be A<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html<br><br>ECS have native capability for rolling updateBut the correct answer is \\\"B\\\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html<br>CodeDeployDefault.ECSCanary10percent5Minutes<br>Shifts 10 percent of tra=EF=AC=83c in the =EF=AC=81rst increment. The remaining 90 percent is deployed =EF=AC=81ve minutes later.<br><br>CodeDeployDefault.ECSCanary10percent15Minutes<br>Shifts 10 percent of tra=EF=AC=83c in the =EF=AC=81rst increment. The remaining 90 percent is deployed 15 minutes later.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 682121,
            "date": "Wed 28 Sep 2022 23:05",
            "username": "XAvenger",
            "content": "But the correct answer is \\\"B\\\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html<br>CodeDeployDefault.ECSCanary10percent5Minutes<br>Shifts 10 percent of tra=EF=AC=83c in the =EF=AC=81rst increment. The remaining 90 percent is deployed =EF=AC=81ve minutes later.<br><br>CodeDeployDefault.ECSCanary10percent15Minutes<br>Shifts 10 percent of tra=EF=AC=83c in the =EF=AC=81rst increment. The remaining 90 percent is deployed 15 minutes later.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#72",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A microservices application is deployed across multiple containers in Amazon Elastic Container Service (Amazon ECS). To improve performance, a developer wants to capture trace information between the microservices and visualize the microservices architecture.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#72",
            "answers": [
              {
                "choice": "<p>A. Build the container from the amazon/aws-xray-daemon base image. Use the AWS X-Ray SDK to instrument the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the Amazon CloudWatch agent on the container image. Use the CloudWatch SDK to publish custom metrics from each of the microservices.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the AWS X-Ray daemon on each of the ECS instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure AWS CloudTrail data events to capture the traffic between the microservices.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 72 discussion",
        "discusstion": [
          {
            "id": 729765,
            "date": "Tue 29 Nov 2022 01:57",
            "username": "humble_developer",
            "content": "A for sure, if you follow the Udemy class, that's call side-car container.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728568,
            "date": "Sun 27 Nov 2022 21:21",
            "username": "gpit",
            "content": "X-ray daemon installed in a separate container along side the deployed ones",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 698215,
            "date": "Tue 18 Oct 2022 14:09",
            "username": "Jason_wu22",
            "content": "agree with A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 679597,
            "date": "Mon 26 Sep 2022 12:00",
            "username": "warriorYup",
            "content": "This question is asked multiple times by just tweaking the way of asking.<br>They will often ask how you install x-ray agent on ECS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 643376,
            "date": "Sat 06 Aug 2022 14:20",
            "username": "tiaanvdrSpamuel",
            "content": "Why does the \\\"correct solution\\\" often differ? Is the correct solution just decided upon by some mod, or is it the official correct solution?I think by a mod, but I don't know for sure. However, no one actually knows the \\\"correct\\\" answer. Only the questions are leaked.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 674175,
            "date": "Tue 20 Sep 2022 14:53",
            "username": "Spamuel",
            "content": "I think by a mod, but I don't know for sure. However, no one actually knows the \\\"correct\\\" answer. Only the questions are leaked.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590764,
            "date": "Sat 23 Apr 2022 20:54",
            "username": "mcdirk",
            "content": "A<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-ecs.html#xray-daemon-ecs-build<br><br>you build the xray container along side the other ecs images deployed via the task definition.<br><br>you then have to configure/ instrument the app to utilize the sdk for the rest",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 558768,
            "date": "Tue 01 Mar 2022 14:59",
            "username": "solayyyydark_cherrymonmcdirk",
            "content": "Is it not C ?i was thinking same, guess it's Acheck it<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-ecs.html#xray-daemon-ecs-build",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 720873,
            "date": "Thu 17 Nov 2022 22:20",
            "username": "dark_cherrymon",
            "content": "i was thinking same, guess it's A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 590765,
            "date": "Sat 23 Apr 2022 20:54",
            "username": "mcdirk",
            "content": "check it<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-ecs.html#xray-daemon-ecs-build",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 541850,
            "date": "Sun 06 Feb 2022 17:33",
            "username": "JP_PA",
            "content": "ANS: A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 539692,
            "date": "Thu 03 Feb 2022 13:29",
            "username": "Vlasto",
            "content": "The images need to have the deamon installed and not the EC2 instances.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 518748,
            "date": "Fri 07 Jan 2022 04:44",
            "username": "msengupta",
            "content": "Answer is A.  Ref: https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-ecs.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 515598,
            "date": "Mon 03 Jan 2022 11:07",
            "username": "[Removed]",
            "content": "A is more appropriate",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 515018,
            "date": "Sun 02 Jan 2022 15:31",
            "username": "denccc",
            "content": "It's A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 511866,
            "date": "Wed 29 Dec 2021 07:35",
            "username": "reve666",
            "content": "Answer is A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#73",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to use AWS CodeDeploy to deploy an application to Amazon Elastic Container Service (Amazon ECS). During the deployment of a new version of the application, the company initially must expose only 10% of live traffic to the new version of the deployed application. Then, after 15 minutes elapse, the company must route all the remaining live traffic to the new version of the deployed application.<br>Which CodeDeploy predefined configuration will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#73",
            "answers": [
              {
                "choice": "<p>A. CodeDeployDefault.ECSCanary10Percent15Minutes<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. CodeDeployDefault.LambdaCanary10Percent5Minutes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. CodeDeployDefault.LambdaCanary10Percent15Minutes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. CodeDeployDefault.ECSLinear10PercentEvery1 Minutes<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 73 discussion",
        "discusstion": [
          {
            "id": 655435,
            "date": "Wed 31 Aug 2022 21:44",
            "username": "Chhotu_DBA",
            "content": "A is correct",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720874,
            "date": "Thu 17 Nov 2022 22:20",
            "username": "dark_cherrymondark_cherrymon",
            "content": "A easyCanary =E2=80=93 Traffic is shifted in two increments.<br>=E2=80=A2 Linear =E2=80=93 Traffic is shifted in equal increments.<br>=E2=80=A2 All-at-once =E2=80=93 All traffic is shifted to the updated tasks",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 720875,
            "date": "Thu 17 Nov 2022 22:22",
            "username": "dark_cherrymon",
            "content": "Canary =E2=80=93 Traffic is shifted in two increments.<br>=E2=80=A2 Linear =E2=80=93 Traffic is shifted in equal increments.<br>=E2=80=A2 All-at-once =E2=80=93 All traffic is shifted to the updated tasks",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 715679,
            "date": "Fri 11 Nov 2022 02:45",
            "username": "gunjan4392",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 656792,
            "date": "Fri 02 Sep 2022 03:23",
            "username": "m_t_kd",
            "content": "Ans A<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#74",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer notices timeouts from the AWS CLI when the developer runs list commands.<br>What should the developer do to avoid these timeouts?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#74",
            "answers": [
              {
                "choice": "<p>A. Use the --page-size parameter to request a smaller number of items.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use shorthand syntax to separate the list by a single space.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the yaml-stream output for faster viewing of large datasets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use quotation marks around strings to enclose data structure.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 74 discussion",
        "discusstion": [
          {
            "id": 720881,
            "date": "Thu 17 Nov 2022 22:31",
            "username": "dark_cherrymon",
            "content": "it's A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 672330,
            "date": "Sun 18 Sep 2022 14:19",
            "username": "robbyboss",
            "content": "A: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-pagination.html#:~:textHow%20to%20use%20the%20%2D%2Dpage%2Dsize%20parameter",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 672329,
            "date": "Sun 18 Sep 2022 14:19",
            "username": "robbyboss",
            "content": "https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-pagination.html#:~:textHow%20to%20use%20the%20%2D%2Dpage%2Dsize%20parameter",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 657052,
            "date": "Fri 02 Sep 2022 08:21",
            "username": "LEHUY",
            "content": "AAAAAAAA",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#75",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has moved a legacy on-premises application to AWS by performing a lift and shift. The application exposes a REST API that can be used to retrieve billing information. The application is running on a single Amazon EC2 instance. The application code cannot support concurrent invocations. Many clients access the API, and the company adds new clients all the time.<br>A developer is concerned that the application might become overwhelmed by too many requests. The developer needs to limit the number of requests to the API for all current and future clients. The developer must not change the API, the application, or the client code.<br>What should the developer do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#75",
            "answers": [
              {
                "choice": "<p>A. Place the API behind an Amazon API Gateway API. Set the server-side throttling limits.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Place the API behind a Network Load Balancer. Set the target group throttling limits.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Place the API behind an Application Load Balancer. Set the target group throttling limits.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Place the API behind an Amazon API Gateway API. Set the per-client throttling limits.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 75 discussion",
        "discusstion": [
          {
            "id": 661554,
            "date": "Tue 06 Sep 2022 20:13",
            "username": "Fay46",
            "content": "cannot be D since adding API key would require client code change",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 672336,
            "date": "Sun 18 Sep 2022 14:22",
            "username": "robbybossSpamuelSpamuel",
            "content": "A since all clients has to be limited same \\\"limit the number of requests to the API for all current and future clients\\\"Agreed. And thinking logically, you want to throttle on server side to reduce potential over-demand concerns. If you throttled per client, you risk there being too many clients.Ignore this, the answer is D.  A is not an option per https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
            "upvote_count": "513",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 674184,
            "date": "Tue 20 Sep 2022 14:59",
            "username": "SpamuelSpamuel",
            "content": "Agreed. And thinking logically, you want to throttle on server side to reduce potential over-demand concerns. If you throttled per client, you risk there being too many clients.Ignore this, the answer is D.  A is not an option per https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 680017,
            "date": "Mon 26 Sep 2022 19:43",
            "username": "Spamuel",
            "content": "Ignore this, the answer is D.  A is not an option per https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 753780,
            "date": "Fri 23 Dec 2022 02:00",
            "username": "fabriciollf",
            "content": "Configuring method-level throttling targets in a usage plan<br>You can set additional throttling targets at the method level in Usage Plans as shown in Create a usage plan. In the API Gateway console, these are set by specifying Resource<resource>, Method<method> in the Configure Method Throttling setting. For example, for the PetStore example, you might specify Resource/pets, MethodGET.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728584,
            "date": "Sun 27 Nov 2022 21:48",
            "username": "gpit",
            "content": "D because the throttling happens in API not the server",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 720884,
            "date": "Thu 17 Nov 2022 22:36",
            "username": "dark_cherrymon",
            "content": "D<br><br>i don't think there is such a thing as server side throttling limit. i intitially went for C, but after reading the question again, it says restrict traffic to api so it's D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693883,
            "date": "Thu 13 Oct 2022 14:28",
            "username": "Arnaud92",
            "content": "D does not require client code change. \\\"You can generate an API key in API Gateway, or import it into API Gateway from an external source\\\". The throttling then takes effect in API Gateway based on the API key of the client.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693054,
            "date": "Wed 12 Oct 2022 14:12",
            "username": "tbhtp",
            "content": "A does not exist. D is correct as already pointed out by other users:<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 690446,
            "date": "Sun 09 Oct 2022 20:20",
            "username": "haazybanj",
            "content": "D is the answer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 686265,
            "date": "Tue 04 Oct 2022 17:00",
            "username": "haazybanj",
            "content": "D is the answer.<br>per-client throttling limits",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 682126,
            "date": "Wed 28 Sep 2022 23:11",
            "username": "XAvengerzhangyu20000",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html<br>you can enable usage plans to set throttles on client request submissions based on specified requests rates and quotas.AWS throttling is not allowed to be changed.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 682798,
            "date": "Thu 29 Sep 2022 17:13",
            "username": "zhangyu20000",
            "content": "AWS throttling is not allowed to be changed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 681016,
            "date": "Tue 27 Sep 2022 19:42",
            "username": "AulaitQM",
            "content": "A would make sense if it actually was an option. Also, the question is confusing us on purpose by using the word \\\"client\\\". New clients according to the question seems to mean new customers, but clients as for D seems to refer to software clients that use your API.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 678066,
            "date": "Sat 24 Sep 2022 19:11",
            "username": "david00",
            "content": "Definitely D: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657892,
            "date": "Sat 03 Sep 2022 01:13",
            "username": "m_t_kd",
            "content": "Correct Answer is D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#76",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company wants to redirect users to a country-specific website when they enter the example.com website. For example, the company wants to redirect United States users to example.com/us/ and wants to redirect French users to example.com/fr/. The web application is using Amazon CloudFront and an<br>Application Load Balancer with an Amazon Elastic Container Service (Amazon ECS) cluster. The application's domain name resolution is configured in an<br>Amazon Route 53 public hosted zone.<br>Which solution will meet these requirements with the LEAST operational effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#76",
            "answers": [
              {
                "choice": "<p>A. Update the routing policy for the application's Route 53 record to specify geolocation routing. Configure listener rules based on a unique alias location to redirect requests to the correct URLs by country.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CloudFront function to inspect the CloudFront-Viewer-Country header and return redirect responses to different URLs based on user location.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. On the ECS web server configuration, use a GeoIP database to look up the requested IP address and redirect requests to the correct URLs by country.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS WAF to determine the country of origin. Create an AWS WAF custom rule with a geographic match condition to redirect traffic from each country to the correct URL.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 76 discussion",
        "discusstion": [
          {
            "id": 656381,
            "date": "Thu 01 Sep 2022 17:00",
            "username": "JOL86",
            "content": "This should be B I think:<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-redirect-url.html<br><br>Route 53/DNS can't redirect urls, only domains from what I can see",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 759246,
            "date": "Wed 28 Dec 2022 02:33",
            "username": "fabriciollf",
            "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html<br>\\\"You can specify geographic locations by continent, by country, or by state in the United States.\\\"<br>Least operational effort is the important part here.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 739174,
            "date": "Thu 08 Dec 2022 15:47",
            "username": "aws_leo",
            "content": "CloudFront Function supports URL redirects or rewrites - You can redirect viewers to other pages based on information in the request, or rewrite all requests from one path to another.<br><br>Ref: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721037,
            "date": "Fri 18 Nov 2022 04:29",
            "username": "dark_cherrymon",
            "content": "still B<br><br>route 53 can redirect to cnames by geolocation but cnames can't include the path like /fn. so i think route 53 is possible, but probably very hard",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720961,
            "date": "Fri 18 Nov 2022 00:39",
            "username": "dark_cherrymon",
            "content": "B i didn't do that much research but thinking about route53 geo routing is giving me a headace so B is simplier",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 689357,
            "date": "Sat 08 Oct 2022 15:39",
            "username": "habros",
            "content": "A is perfect low operational effort for subdomains only<br><br>Hence, B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 678407,
            "date": "Sun 25 Sep 2022 06:25",
            "username": "RUKSHANA",
            "content": "Looks like B<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 678076,
            "date": "Sat 24 Sep 2022 19:19",
            "username": "david00",
            "content": "A&B works, but the \\\"least operational effort\\\" is A, as it needs no code changes",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 674189,
            "date": "Tue 20 Sep 2022 15:02",
            "username": "Spamuel",
            "content": "I'm struggling between A & B here. A is also possible, but I'm not sure which is less operational effort.<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 673919,
            "date": "Tue 20 Sep 2022 10:03",
            "username": "arun00028Burakko",
            "content": "why can't it be A?LEAST operational effort",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 747589,
            "date": "Fri 16 Dec 2022 22:11",
            "username": "Burakko",
            "content": "LEAST operational effort",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 661175,
            "date": "Tue 06 Sep 2022 13:41",
            "username": "owe87",
            "content": "I think should be B<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-redirect-url.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#77",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer deploys an AWS Lambda function that runs each time a new Amazon S3 bucket is created. The Lambda function is supposed to attach an S3<br>Lifecycle policy to each new S3 bucket. The developer discovers that newly created S3 buckets have no S3 Lifecycle policy attached.<br>Which AWS service should the developer use to find a possible error in the Lambda function?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#77",
            "answers": [
              {
                "choice": "<p>A. AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS CloudFormation<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon CloudWatch<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 77 discussion",
        "discusstion": [
          {
            "id": 762220,
            "date": "Fri 30 Dec 2022 19:24",
            "username": "tieyua",
            "content": "If bucket created and no policy attached, it's likely lambda not triggered or no permission to retrieve policy or attach to S3.Shouldn't that be in the CloudTrail log?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720962,
            "date": "Fri 18 Nov 2022 00:41",
            "username": "dark_cherrymon",
            "content": "i voted D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693896,
            "date": "Thu 13 Oct 2022 14:41",
            "username": "Arnaud92",
            "content": "Cloudwatch",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 683399,
            "date": "Fri 30 Sep 2022 10:38",
            "username": "NIFY9977habroshabros",
            "content": "Why can't we use CloudTrail?Cloud trail is maiming staging management, data and insight logs away for audit purposes.<br><br>To monitor resources, cloud watch is the way to goMainly stashing *",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 684036,
            "date": "Sat 01 Oct 2022 08:20",
            "username": "habroshabros",
            "content": "Cloud trail is maiming staging management, data and insight logs away for audit purposes.<br><br>To monitor resources, cloud watch is the way to goMainly stashing *",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 684037,
            "date": "Sat 01 Oct 2022 08:21",
            "username": "habros",
            "content": "Mainly stashing *",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 671253,
            "date": "Sat 17 Sep 2022 06:44",
            "username": "hongy",
            "content": "D<br>Using CloudWatch Logs to find the error messages.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#78",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created a web API that uses Amazon Elastic Container Service (Amazon ECS) and an Application Load Balancer (ALB). An Amazon CloudFront distribution uses the API as an origin for web clients. The application has received millions of requests with a JSON Web Token (JWT) that is not valid in the authorization header. The developer has scaled out the application to handle the unauthenticated requests.<br>What should the developer do to reduce the number of unauthenticated requests to the API?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#78",
            "answers": [
              {
                "choice": "<p>A. Add a request routing rule to the ALB to return a 401 status code if the authorization header is missing.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a container to the ECS task definition to validate JWTs Set the new container as a dependency of the application container.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CloudFront function for the distribution Use the crypto module in the function to validate the JWT.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a custom authorizer for AWS Lambda to the CloudFront distribution to validate the JWT.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 78 discussion",
        "discusstion": [
          {
            "id": 657767,
            "date": "Fri 02 Sep 2022 21:41",
            "username": "Danbraga",
            "content": "C seems right to me<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-validate-token.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 739178,
            "date": "Thu 08 Dec 2022 15:49",
            "username": "aws_leo",
            "content": "You can offload authorization by using CloudFront Function. Find full example code here: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-validate-token.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728855,
            "date": "Mon 28 Nov 2022 08:44",
            "username": "ACZACZ",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html<br><br>The question states the JWT is sent as part of authorization header. In the solution C, it assumes that JWT will be sent as part of query string.The correct answer is D",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 728856,
            "date": "Mon 28 Nov 2022 08:45",
            "username": "ACZ",
            "content": "The correct answer is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 674958,
            "date": "Wed 21 Sep 2022 11:29",
            "username": "princajen",
            "content": "I vote for C!<br>The following example function validates a JSON web token (JWT) in the query string of a request. If the token is valid, the function returns the original, unmodified request to CloudFront. If the token is not valid, the function generates an error response. This function uses the crypto module.<br><br>This function assumes that requests contain a JWT value in a query string parameter named jwt. Also, for this function to work, you must configure CloudFront to cache based on the jwt query string parameter.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-validate-token.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#80",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has created on AWS Lambda function tool uses 15 MB of memory. When the developer runs the code natively on a laptop that has 4 cores, the function runs within 100 ms. When the developer deploys the code as a Lambda function with 128 MB of memory, the first run takes 3 seconds. Subsequent runs take more than 500 ms to finish.<br>The developer needs to improve the performance of the Lambda function so that the function runs consistently in less than 100 ms, excluding the initial startup time.<br>Which solution will meet this requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#80",
            "answers": [
              {
                "choice": "<p>A. Increase the reserved concurrency of the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the provisioned concurrency of the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the memory of the Lambda function.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Repackage the Lambda function as a container. Redeploy the function.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 80 discussion",
        "discusstion": [
          {
            "id": 656604,
            "date": "Thu 01 Sep 2022 21:25",
            "username": "JOL86",
            "content": "I think the answer should be C? It mentions locally using 4 cores, and by increasing memory of a lambda, you can increase CPU.<br><br>Plus provisioned concurrency would only help on a cold start, and it's still taking too long on subsequent runs",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 661201,
            "date": "Tue 06 Sep 2022 14:10",
            "username": "owe87",
            "content": "I think C. <br>provisioned concurrency help the startup time, cold start.<br>But the Question says \\\"excluding the initial startup time\\\".",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 761601,
            "date": "Fri 30 Dec 2022 03:00",
            "username": "thensanity",
            "content": "just increase the memory and you will be good to go",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 743402,
            "date": "Tue 13 Dec 2022 00:12",
            "username": "fabriciollf",
            "content": "C is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728615,
            "date": "Sun 27 Nov 2022 22:31",
            "username": "gpit",
            "content": "As the Provisioned Concurrency is the recommended way to reduce lambda function cold start duration.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721764,
            "date": "Sat 19 Nov 2022 05:54",
            "username": "G4Exams",
            "content": "It is C. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 720981,
            "date": "Fri 18 Nov 2022 01:36",
            "username": "dark_cherrymonhumble_developer",
            "content": "it's C and not B because \\\"excluding the initial startup time\\\"overlooking this one so I go for B. ...should be C instead",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 729816,
            "date": "Tue 29 Nov 2022 02:15",
            "username": "humble_developer",
            "content": "overlooking this one so I go for B. ...should be C instead",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 712448,
            "date": "Sun 06 Nov 2022 17:01",
            "username": "CloudHandsOn",
            "content": "Its C. <br>Increasing memory on the lambda will help with performance, because it's like increasing the CPU of the function. Adding provisioned concurrency will help eliminate the init time, but the question says to ignore that.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 678086,
            "date": "Sat 24 Sep 2022 19:28",
            "username": "david00",
            "content": "C: you need to increase memory allocation for lambda functions to improve performance",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#81",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to use AWS CodeDeploy to deploy an application to AWS Lambda. During the deployment of a new version of the application, the company initially must expose only 10% of live traffic to the new version of the deployed application. Then, every 10 minutes, the company must route another<br>10% of live traffic to the new version of the deployed application until all live traffic is routed to the new version.<br>Which CodeDeploy predefined configuration will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#81",
            "answers": [
              {
                "choice": "<p>A. CodeDeployDefault.OnceAtATime<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. CodeDeployDefault.LambdaCanary10Percent10Minutes<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. CodeDeployDefault.LambdaLinear10PercentEvery10Minutes<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. CodeDeployDefault.ECSLinear10PercentEvery3Minutes<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 81 discussion",
        "discusstion": [
          {
            "id": 721765,
            "date": "Sat 19 Nov 2022 05:55",
            "username": "G4Exams",
            "content": "The answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 696066,
            "date": "Sun 16 Oct 2022 09:50",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 657898,
            "date": "Sat 03 Sep 2022 01:20",
            "username": "m_t_kd",
            "content": "Answer is C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#82",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer wants to use AWS Elastic Beanstalk to test a new version of on application in a test environment.<br>Which deployment method offers the FASTEST deployment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#82",
            "answers": [
              {
                "choice": "<p>A. Immutable<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Rolling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Rolling with additional batch<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. All at once<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 82 discussion",
        "discusstion": [
          {
            "id": 721767,
            "date": "Sat 19 Nov 2022 05:56",
            "username": "G4Exams",
            "content": "All at once is potential downtime is not an issue but it has to be fast. So D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 693751,
            "date": "Thu 13 Oct 2022 10:52",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html#deployments-scenarios",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 684943,
            "date": "Sun 02 Oct 2022 18:33",
            "username": "haazybanj",
            "content": "Correct answer is D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 657899,
            "date": "Sat 03 Sep 2022 01:20",
            "username": "m_t_kd",
            "content": "Answer is D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#83",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer has built an application that inserts data into an Amazon DynamoDB table. The table is configured to use provisioned capacity. The application is deployed on a burstable nano Amazon EC2 Instance. The application logs show that the application has been failing because of a<br>ProvisionedThroughputExceedException error.<br>Which actions should the developer take to resolve this issue? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#83",
            "answers": [
              {
                "choice": "<p>A. Move The application to a larger EC instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the number or read capacity units (RCUs) that are provisioned for the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reduce the frequency of requests to DynamoDB by implement ng exponential backoff.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the frequency of requests to DynamoDB by decreasing the retry delay.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Change the capacity mode of the DynamoDB table from provisioned to on-demand.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 83 discussion",
        "discusstion": [
          {
            "id": 656390,
            "date": "Thu 01 Sep 2022 17:11",
            "username": "JOL86",
            "content": "I'm not sure how increasing the EC2 instance size would help here - seems to be issues with too many writes to DynamoDB.  So I'd go for C and E",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 682139,
            "date": "Wed 28 Sep 2022 23:42",
            "username": "XAvenger",
            "content": "I don't know how people can vote for B and D. <br>B - increases RCU, but the application inserts data, so WCU are needed, > B is wrong<br>D - you application will make more requests per minute, the problem with lack of resources will not disappear, application will have more errors in logs. > D is wrongC.  Exponential algorithm will lead to fewer requests per minute > application will start working properly. C is correctE.  capacity on demand means that your database will get more required WCU automatically. > E is correct",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 720991,
            "date": "Fri 18 Nov 2022 02:00",
            "username": "dark_cherrymon",
            "content": "CE, who voted for A or D lol",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 678093,
            "date": "Sat 24 Sep 2022 19:39",
            "username": "david00",
            "content": "CE: because https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html, not choosing B because it only inceases the RCU (read units), the issue of throughput exceeded could also be with WCU (write units)",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 672369,
            "date": "Sun 18 Sep 2022 15:06",
            "username": "robbyboss",
            "content": "A wont help as the issue is facing DynamoDB not application on EC2B.  is incorrect because we are facing issue with writes, not readsC.  TrueD.  This statement is logicless - increasing request to dynamo results in higher API usage.E.  TRUE",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 661208,
            "date": "Tue 06 Sep 2022 14:25",
            "username": "owe87robbyboss",
            "content": "ProvisionedThroughputExceededException is a DynamoDB exception, for this I exclude A. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html<br><br>The error message says: You exceeded your maximum allowed provisioned throughput for a table or for one or more global secondary indexes. To view performance metrics for provisioned throughput vs. consumed throughput<br>For this i say B<br><br>and<br>Example: Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish.<br><br>for this i say DB is incorrect as the issue is regarding writes not reads. RCU is for read capacity unit.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 672368,
            "date": "Sun 18 Sep 2022 15:03",
            "username": "robbyboss",
            "content": "B is incorrect as the issue is regarding writes not reads. RCU is for read capacity unit.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 657400,
            "date": "Fri 02 Sep 2022 14:14",
            "username": "sidvicXAvenger",
            "content": "From this link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ProvisionedThroughput.Throttling \\\"When DynamoDB throttles a read or write, it returns a ProvisionedThroughputExceededException to the caller. The application can then take appropriate action, such as waiting for a short interval before retrying the request. .....<br> The DynamoDB console displays Amazon CloudWatch metrics for your tables, so you can monitor throttled read requests and write requests. If you encounter excessive throttling, you should consider increasing your table's provisioned throughput settings.\\\"\\\"application that inserts data\\\" DynamoDB needs WCU, not RCU!! B is incorrect.<br>D cannot be correct too because you make requests to Dynamodb more often, it will not resolve the issue.<br>CE - is the correct one",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 682137,
            "date": "Wed 28 Sep 2022 23:37",
            "username": "XAvenger",
            "content": "\\\"application that inserts data\\\" DynamoDB needs WCU, not RCU!! B is incorrect.<br>D cannot be correct too because you make requests to Dynamodb more often, it will not resolve the issue.<br>CE - is the correct one",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#84",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is deploying on application on Amazon EC2 instances that run in Account A.  In certain cases, this application needs to read data from a private<br>Amazon S3 bucket in Account B.  The developer must provide the application access to the S3 bucket without exposing the S3 bucket to anyone else.<br>Which combination of actions should the developer take to meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#84",
            "answers": [
              {
                "choice": "<p>A. Create an IAM role with S3 read permissions in Account B. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update the instance profile IAM role in Account A with S3 read permissions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Make the S3 bucket public with limited access for Account A. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the bucket policy in Account B to grant permissions to the instance profile role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add a trust policy that allows s3:Get* permissions to the IAM rote in Account B. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 84 discussion",
        "discusstion": [
          {
            "id": 656606,
            "date": "Thu 01 Sep 2022 21:28",
            "username": "JOL86",
            "content": "I think it might be B and D. <br><br>For cross account access, you need to set resource policy on the S3 bucket (to give access to the role in account A) as well as the IAM role in Account A having access to the bucket in B:<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic-cross-account.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 753352,
            "date": "Thu 22 Dec 2022 15:07",
            "username": "speer",
            "content": "Refer to links provided in the chats below. Correct answer B&D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 721775,
            "date": "Sat 19 Nov 2022 06:09",
            "username": "G4Exams",
            "content": "It's B&D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 720996,
            "date": "Fri 18 Nov 2022 02:09",
            "username": "dark_cherrymon",
            "content": "what about DE. <br><br>it may not be B because yes ec2 needs access to s3 but the question is how to make the s3 bucket avaliable not whether or not the ec2 has the right to read from s3<br><br>E make s3 bucket avaliable to be used by others<br>Duse that s3 bucket. the instance is refering to the ec2",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 686779,
            "date": "Wed 05 Oct 2022 12:37",
            "username": "haazybanj",
            "content": "B and D is the answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 674210,
            "date": "Tue 20 Sep 2022 15:23",
            "username": "Spamuel",
            "content": "I think B & D<br>https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 661749,
            "date": "Wed 07 Sep 2022 01:56",
            "username": "szhang2004",
            "content": "B and D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 656118,
            "date": "Thu 01 Sep 2022 12:13",
            "username": "Chhotu_DBA",
            "content": "AB correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AB"
          }
        ]
      },
      {
        "question_id": "#85",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer at a company recently created a serverless application to process and show data from business reports. The application's user interface (UI) allows users to select and start processing the flies. The UI displays a message when the result is available to view. The application uses AWS Step Functions with AWS<br>Lambda functions to process the files. The developer used Amazon API Gateway and Lambda functions to create an API to support the UI.<br>The company's UI team reports that the request to process a file s often returning timeout errors because of the size or complexity of the files. The UI team wants the API to provide an immediate response so that the UI can display a message while the files are being processed. The backend process that is invoked by the<br>API needs to send an email message when the report processing is complete.<br>What should the developer do to configure the API to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#85",
            "answers": [
              {
                "choice": "<p>A. Change the API Gateway route to add an X-Amz-Invocation-Type header with a static value of 'Event' in the integration request. Deploy the API Gateway stage to apply the changes.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the configuration of the Lambda function that implements the request to process a file. Configure the maximum age of the event so that the Lambda function will run asynchronously.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the API Gateway timeout value to match the Lambda function timeout value. Deploy the API Gateway stage to apply the changes.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the API Gateway route to add an X-Amz-Target header with a static value of 'Async' in the integration request. Deploy the API Gateway stage to apply the changes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 85 discussion",
        "discusstion": [
          {
            "id": 672397,
            "date": "Sun 18 Sep 2022 15:32",
            "username": "robbyboss",
            "content": "Reference: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integration-async.html",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 715708,
            "date": "Fri 11 Nov 2022 03:35",
            "username": "gunjan4392",
            "content": "AAAAAAAA",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#86",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce application is running behind an Application Load Balancer. A developer observes some unexpected load on the application during non-peak hours. The developer wants to analyze patterns for the client IP addresses that use the application.<br>Which HTTP header should the developer use for this analysis?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#86",
            "answers": [
              {
                "choice": "<p>A. The X-Forwarded-Proto header<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The X-Forwarded-Host header<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The X-Forwarded-For header<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The X-Forwarded-Port header<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 86 discussion",
        "discusstion": [
          {
            "id": 655465,
            "date": "Wed 31 Aug 2022 22:19",
            "username": "Chhotu_DBA",
            "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/x-forwarded-headers.html#x-forwarded-for",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 684959,
            "date": "Sun 02 Oct 2022 19:05",
            "username": "haazybanj",
            "content": "The Correct Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 678101,
            "date": "Sat 24 Sep 2022 20:04",
            "username": "david00",
            "content": "C because: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto<br>XFP does not show you the IP address",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 673020,
            "date": "Mon 19 Sep 2022 09:21",
            "username": "Jabol",
            "content": "X-Forwarded-Proto is for protocol not ip",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 661763,
            "date": "Wed 07 Sep 2022 02:06",
            "username": "szhang2004",
            "content": "should be C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 658158,
            "date": "Sat 03 Sep 2022 09:17",
            "username": "AWSCloud8",
            "content": "The Correct Answer is C. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 657774,
            "date": "Fri 02 Sep 2022 21:54",
            "username": "Danbraga",
            "content": "CCCCCCC",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#87",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer needs to create an application that supports Security Assertion Markup Language (SAML) and authentication with social media providers. It must also allow access to AWS services, such as Amazon DynamoDB. <br>Which AWS service or feature will meet these requirements with the LEAST amount of additional coding?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#87",
            "answers": [
              {
                "choice": "<p>A. AWS AppSync<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Cognito identity pools<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Cognito user pools<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Lambda@Edge<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 87 discussion",
        "discusstion": [
          {
            "id": 662838,
            "date": "Wed 07 Sep 2022 21:42",
            "username": "DanbragaSpamuel",
            "content": "access to aws services, so BBut it also states that it requires \\\"authentication with social media providers.\\\" So wouldn't it also require User Pools (C)?<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pools-identity-pools/",
            "upvote_count": "73",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 674213,
            "date": "Tue 20 Sep 2022 15:31",
            "username": "Spamuel",
            "content": "But it also states that it requires \\\"authentication with social media providers.\\\" So wouldn't it also require User Pools (C)?<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pools-identity-pools/",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 752998,
            "date": "Thu 22 Dec 2022 07:10",
            "username": "by116549",
            "content": "Referring to this resource:<br>https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pools-identity-pools/#:~:textWith%20a%20user%20pool%2C%20your,access%20to%20other%20AWS%20services.<br><br>Leaning to identity pools",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721777,
            "date": "Sat 19 Nov 2022 06:14",
            "username": "G4Exams",
            "content": "Cognito with identity pools is the answer because it's cognito without a doubt in this scenario and user pool is more for scenarios with self created pools of user that register on our own site...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721027,
            "date": "Fri 18 Nov 2022 03:30",
            "username": "dark_cherrymon",
            "content": "it's C, user pools alone can grant resource access<br><br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-scenarios.html#scenario-basic-user-pool<br><br>\\\"After a successful user pool sign-in, your web or mobile app will receive user pool tokens from Amazon Cognito. You can use those tokens to control access to your server-side resources.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 694467,
            "date": "Fri 14 Oct 2022 05:28",
            "username": "cloud_collector",
            "content": "https://medium.com/swlh/amazon-cognito-what-is-the-difference-between-user-pool-and-identity-pool-ff0c71d79ca7",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 678980,
            "date": "Sun 25 Sep 2022 18:05",
            "username": "sat83",
            "content": "https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-identity-pools.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 656855,
            "date": "Fri 02 Sep 2022 04:19",
            "username": "m_t_kd",
            "content": "Ans is B-<br>It is asking access to AWS services such as DynamoDB",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 655466,
            "date": "Wed 31 Aug 2022 22:20",
            "username": "Chhotu_DBA",
            "content": "answer is B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#88",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer is designing a serverless application for an ecommerce website. An Amazon API Gateway API exposes AWS Lambda functions for billing, payment, and user operations. The website features shopping carts for the users. The shopping carts must be stored for extended periods of time and will be retrieved frequently by the front-end application.<br>The load on the application will vary significantly based on the time of day and the promotional sales that are offered on the website. The application must be able to scale automatically to meet these changing demands.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#88",
            "answers": [
              {
                "choice": "<p>A. Store the data objects on an Amazon RDS DB instance. Cache the data objects in memory by using Amazon ElastiCache.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the data objects on Amazon EC2 instances behind an Application Load Balancer. Use session affinity (sticky sessions) for each user's shopping cart.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the data objects in Amazon S3 buckets. Cache the data objects by using Amazon CloudFront with the maximum TTL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the data objects in Amazon DynamoDB tables. Cache the data objects by using DynamoDB Accelerator (DAX).<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 88 discussion",
        "discusstion": [
          {
            "id": 655467,
            "date": "Wed 31 Aug 2022 22:22",
            "username": "Chhotu_DBA",
            "content": "scale automatically to meet these changing demands.means DynamoDB",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 762324,
            "date": "Fri 30 Dec 2022 22:32",
            "username": "tieyua",
            "content": "When in doubt, go dynamo!Bozo trying to sell that sh1t hard because nobody want to touch it with a ten-foot pole in real life.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 743363,
            "date": "Mon 12 Dec 2022 22:56",
            "username": "fabriciollf",
            "content": "\\\"A developer is designing a serverless application for an ecommerce website.\\\"<br>DynamoDB is the best option to keep the servelress design.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729829,
            "date": "Tue 29 Nov 2022 02:33",
            "username": "humble_developer",
            "content": "I go for A as I'm not sure about whether DAX can store session cache of the shopping cart in D.  But I'm sure ElastiCache can cache user session and RDS can be auto-scaled from now",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725539,
            "date": "Thu 24 Nov 2022 04:56",
            "username": "IvanPetrovichPavlov",
            "content": "DAX only be used for \\\"improving frequent reading capacity\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 721779,
            "date": "Sat 19 Nov 2022 06:17",
            "username": "G4Exams",
            "content": "Dynamo DB is the best database solution for these kind of shopping carts etc that need to scale automatically and DAX is for unexpected peaks in read demands.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 686785,
            "date": "Wed 05 Oct 2022 12:53",
            "username": "haazybanj",
            "content": "D is the correct answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 678104,
            "date": "Sat 24 Sep 2022 20:19",
            "username": "david00",
            "content": "D because the app is being built to be \\\"serverless\\\", so this would be dynamodb",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 661771,
            "date": "Wed 07 Sep 2022 02:11",
            "username": "szhang2004",
            "content": "I think Should be D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#90",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application needs to use the IP address of the client in its processing. The application has been moved into AWS and has been placed behind an Application<br>Load Balancer (ALB). However, all the client IP addresses now appear to be the same. The application must maintain the ability to scale horizontally.<br>Based on this scenario, what is the MOST cost-effective solution to this problem?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#90",
            "answers": [
              {
                "choice": "<p>A. Remove the application from the ALB.  Delete the ALB and change Amazon Route 53 to direct traffic to the instance running the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Remove the application from the ALB.  Create a Classic Load Balancer in its place. Direct traffic to the application using the HTTP protocol.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed in the header.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Alter the application code to inspect a custom header. Alter the client code to pass the IP address in the custom header.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 90 discussion",
        "discusstion": [
          {
            "id": 510750,
            "date": "Tue 28 Dec 2021 03:37",
            "username": "IssamTun",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#91",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer received the following error message during an AWS CloudFormation deployment:<br>DELETE_FAILED (The following resource(s) failed to delete: [ASGInstanceRolel2345678].)<br>Which action should the developer take to resolve this error?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#91",
            "answers": [
              {
                "choice": "<p>A. Contact AWS Support to report an issue with the Auto Scaling Groups (ASG) service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a DependsOn attribute to the ASGInstanceRole12345678 resource in the CloudFormation template. Then delete the stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the CloudFormation template to retain the ASGInstanceRolel2345678 resource. Then manually delete the resource after deployment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a force parameter when calling CloudFormation with the role-arn of ASGInstanceRolel2345678.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 91 discussion",
        "discusstion": [
          {
            "id": 686791,
            "date": "Wed 05 Oct 2022 12:56",
            "username": "haazybanj",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 682524,
            "date": "Thu 29 Sep 2022 12:09",
            "username": "XAvenger",
            "content": "It is not mentioned anywhere that deletion failed due to dependency on something. For example CloudFormation cannot delete S3 buckets or ECR repositories if they are not empty. In this case only manual deletion helps. So \\\"B\\\" -> incorrect, C -> correct",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 681382,
            "date": "Wed 28 Sep 2022 06:17",
            "username": "RUKSHANA",
            "content": "https://bobcares.com/blog/delete-an-aws-cloudformation-stack/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 678211,
            "date": "Sat 24 Sep 2022 22:14",
            "username": "david00",
            "content": "C: due to parallel processing you might need to retain some stack resources and delete them manually later :https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-stack-delete-failed/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 674985,
            "date": "Wed 21 Sep 2022 11:57",
            "username": "princajennothankyouspankyou",
            "content": "I vote for B!<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-stack-delete-failed/Do you mean C? The link is great, but it points to C:<br>\\\"Important: To avoid unnecessary charges, you must manually delete the resources that are retained when the stack is deleted.\\\"",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 708106,
            "date": "Mon 31 Oct 2022 01:50",
            "username": "nothankyouspankyou",
            "content": "Do you mean C? The link is great, but it points to C:<br>\\\"Important: To avoid unnecessary charges, you must manually delete the resources that are retained when the stack is deleted.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 673052,
            "date": "Mon 19 Sep 2022 09:57",
            "username": "Jabol",
            "content": "I think the answer is correct. In case of similar error, AWS asked if I want to retain the resource and delete it manually later.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 672409,
            "date": "Sun 18 Sep 2022 15:46",
            "username": "robbybossArnaud92",
            "content": "B:<br>Declare dependencies for resources that must be created or deleted in a specific order (see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html)For the DependsOn attribute to be of any help here, it would need to be attached to another resource (a resource that depends on the ASG, and that needs to be deleted before the ASG). Here the option is to add the DependsOn attribute on the ASG itself, so it wouldn't help. B is not correct",
            "upvote_count": "42",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 693975,
            "date": "Thu 13 Oct 2022 16:25",
            "username": "Arnaud92",
            "content": "For the DependsOn attribute to be of any help here, it would need to be attached to another resource (a resource that depends on the ASG, and that needs to be deleted before the ASG). Here the option is to add the DependsOn attribute on the ASG itself, so it wouldn't help. B is not correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 669042,
            "date": "Wed 14 Sep 2022 15:15",
            "username": "ahmed308",
            "content": "Seems option B is more preferable",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#93",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using continuous integration/continuous delivery (CI/CD) systems. A developer must automate the deployment of an application software package to Amazon EC2 instances and virtual servers that run on premises.<br>Which AWS service should the developer use to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#93",
            "answers": [
              {
                "choice": "<p>A. AWS Cloud9<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS CodeBuild<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. AWS Elastic Beanstalk<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. AWS CodeDeploy<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 93 discussion",
        "discusstion": [
          {
            "id": 514213,
            "date": "Fri 31 Dec 2021 21:15",
            "username": "brightosey",
            "content": "D.  AWS CodeDeploy",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 686794,
            "date": "Wed 05 Oct 2022 12:57",
            "username": "haazybanj",
            "content": "AWS CodeDeploy is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 684965,
            "date": "Sun 02 Oct 2022 19:17",
            "username": "haazybanj",
            "content": "AWS CodeDeploy is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 537370,
            "date": "Mon 31 Jan 2022 20:36",
            "username": "Orffeus",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#94",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company is using AWS CodeBuild to build an application. The buildspec runs the application build and creates a Docker image that contains the application. The company needs to push the Docker image to Amazon Elastic Container Registry (Amazon ECR) only upon the completion of each successful build.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#94",
            "answers": [
              {
                "choice": "<p>A. Change the buildspec by adding a post_build phase that uses the commands block to push the Docker image.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the buildspec by adding a post_build phase that uses the finally block to push the Docker image.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Specify the Docker image in the buildspec's artifacts sequence with an action to push the image.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a batch build to define a build matrix. Use the batch build to push the Docker image.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 94 discussion",
        "discusstion": [
          {
            "id": 731019,
            "date": "Wed 30 Nov 2022 03:17",
            "username": "gpittieyua",
            "content": "B is also good as in finally block you can test CODEBUILD_BUILD_SUCCEEDING to make decision.In programming, finally usually meant for clean up after all else, success or fail",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 762430,
            "date": "Sat 31 Dec 2022 02:57",
            "username": "tieyua",
            "content": "In programming, finally usually meant for clean up after all else, success or fail",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 699228,
            "date": "Wed 19 Oct 2022 19:46",
            "username": "Antonionuma",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 684966,
            "date": "Sun 02 Oct 2022 19:18",
            "username": "haazybanj",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 674630,
            "date": "Wed 21 Sep 2022 02:25",
            "username": "haazybanj",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 661777,
            "date": "Wed 07 Sep 2022 02:20",
            "username": "szhang2004",
            "content": "I think it's A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 657384,
            "date": "Fri 02 Sep 2022 14:02",
            "username": "sidvic",
            "content": "A because \\\"phases/post_build<br>Optional sequence. Represents the commands, if any, that CodeBuild runs after the build. For example, you might use Maven to package the build artifacts into a JAR or WAR file, or you might push a Docker image into Amazon ECR. Then you might send a build notification through Amazon SNS.\\\" https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 656400,
            "date": "Thu 01 Sep 2022 17:31",
            "username": "JOL86",
            "content": "I think it should be A:<br>https://docs.aws.amazon.com/codebuild/latest/userguide/sample-docker.html#sample-docker-files<br><br>In the examples, it's in the commands of post_build",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#95",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon RDS as the backend database for its application. After a recent marketing campaign, a surge of read requests to the database increased the latency of data retrieval from the database.<br>The company has decided to implement a caching layer in front of the database. The cached content must be encrypted and must be highly available.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#95",
            "answers": [
              {
                "choice": "<p>A. Amazon CloudFront<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon ElastiCache for Memcached<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon ElastiCache for Redis in cluster mode<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon DynamoDB Accelerator (DAX)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 95 discussion",
        "discusstion": [
          {
            "id": 674632,
            "date": "Wed 21 Sep 2022 02:26",
            "username": "haazybanj",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 674218,
            "date": "Tue 20 Sep 2022 15:46",
            "username": "Spamuel",
            "content": "C - Redis with Cluster Mode. Memcached is designed for simplicity. Whereas as Redis with Cluster Mode will provide high availability.<br><br>https://aws.amazon.com/blogs/database/work-with-cluster-mode-on-amazon-elasticache-for-redis/#:~:textElastiCache%20for%20Redis%20with%20Cluster%20Mode%20Enabled%20works%20by%20spreading,spread%20across%20multiple%20Redis%20nodes.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 674091,
            "date": "Tue 20 Sep 2022 13:35",
            "username": "colintkn",
            "content": "C should be the answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#96",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that runs on AWS Elastic Beanstalk in a load-balanced environment. The company needs to update the instance types in the environment to a more recent generation of instance types. The company must minimize downtime during the deployment of this configuration change.<br>Which deployment options will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#96",
            "answers": [
              {
                "choice": "<p>A. Disabled<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Rolling based on Health<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Immutable<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. All at once<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Canary<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 96 discussion",
        "discusstion": [
          {
            "id": 658265,
            "date": "Sat 03 Sep 2022 11:10",
            "username": "DanbragaSpamuel",
            "content": "I would go for BC. <br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.htmlAgreed",
            "upvote_count": "61",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 674221,
            "date": "Tue 20 Sep 2022 15:48",
            "username": "Spamuel",
            "content": "Agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721056,
            "date": "Fri 18 Nov 2022 05:18",
            "username": "dark_cherrymon",
            "content": "CE<br><br>\\\"Today's release adds a new policy=E2=80=94Traffic splitting. Traffic-splitting deployments let you perform canary testing as part of your application deployment. \\\"<br><br>beanstalk has canary<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/release-2020-05-18-ts-deploy.html",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 747469,
            "date": "Fri 16 Dec 2022 18:50",
            "username": "awsguru1998",
            "content": "CE now EBS supports Canary (traffic splitting option)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 742698,
            "date": "Mon 12 Dec 2022 12:12",
            "username": "fabriciollftieyua",
            "content": "B and C<br>Acording to this document the besta options to avoid downtime are Roling and Immutable<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.htmlNo such thing as \\\"Rolling based on Health\\\"",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 762431,
            "date": "Sat 31 Dec 2022 03:09",
            "username": "tieyua",
            "content": "No such thing as \\\"Rolling based on Health\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711443,
            "date": "Sat 05 Nov 2022 00:40",
            "username": "cloud_collectorcloud_collector",
            "content": "\\\"must minimize downtime\\\" --- rule outA & D<br>\\\"an application that runs on AWS Elastic Beanstalk\\\" --- rule out Ehttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html#deployments-scenarios",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 711445,
            "date": "Sat 05 Nov 2022 00:41",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html#deployments-scenarios",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704351,
            "date": "Wed 26 Oct 2022 05:18",
            "username": "zzr2adsdadasdad",
            "content": "A failed rollback ends the update process and leaves your environment in an unhealthy state. Unprocessed batches are still running instances with the old configuration, while any batches that completed successfully have the new configuration. To fix an environment after a failed rollback, first resolve the underlying issue that caused the update to fail, and then initiate another environment update.<br><br>An alternative method is to deploy the new version of your application to a different environment and then perform a CNAME swap to redirect traffic with zero downtime. See Blue/Green deployments with Elastic Beanstalk for more information.You chose canary and immutable. I agree with both but your points are incorrect. Immutable environment updates are an alternative to rolling updates. Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely.The first point \\\"A failed rollback ends the update process and leaves your environment in an unhealthy state\\\" is not feasable because it is using auto scaling groups. these will dynamicly scale and remove unhealthy nodes because of updates or health checks. the second point of \\\"An alternative method is to deploy the new version of your application\\\" wont be feasable if you have a LB since immutable is arguably better because it takes care of dns and doing the cut over on the back end and the CNAME swap wont need to happen since you point to the LB and not the auto scaling group. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 705248,
            "date": "Thu 27 Oct 2022 07:14",
            "username": "adsdadasdad",
            "content": "You chose canary and immutable. I agree with both but your points are incorrect. Immutable environment updates are an alternative to rolling updates. Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely.The first point \\\"A failed rollback ends the update process and leaves your environment in an unhealthy state\\\" is not feasable because it is using auto scaling groups. these will dynamicly scale and remove unhealthy nodes because of updates or health checks. the second point of \\\"An alternative method is to deploy the new version of your application\\\" wont be feasable if you have a LB since immutable is arguably better because it takes care of dns and doing the cut over on the back end and the CNAME swap wont need to happen since you point to the LB and not the auto scaling group. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 703008,
            "date": "Mon 24 Oct 2022 14:32",
            "username": "Soroschnothankyouspankyou",
            "content": "As far i know there is no canary Deployment for Beanstalk.True: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 708107,
            "date": "Mon 31 Oct 2022 01:55",
            "username": "nothankyouspankyou",
            "content": "True: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 672430,
            "date": "Sun 18 Sep 2022 16:01",
            "username": "robbyboss",
            "content": "I believe canary is not Out of the box deployment mode of Beanstalk",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 671842,
            "date": "Sun 18 Sep 2022 00:56",
            "username": "CollinsWolf",
            "content": "i think its BC https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 671304,
            "date": "Sat 17 Sep 2022 08:21",
            "username": "hongy",
            "content": "CE would be the right answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 671303,
            "date": "Sat 17 Sep 2022 08:21",
            "username": "hongy",
            "content": "CE would be the right answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 661781,
            "date": "Wed 07 Sep 2022 02:21",
            "username": "szhang2004",
            "content": "I think is BC",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#98",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a report implemented using AWS Step Functions. Amazon CloudWatch shows errors in the Step Functions task state machine. To troubleshoot each task, the state input needs to be included along with the error message in the state output.<br>Which coding practice can preserve both the original input and the error for the state?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#98",
            "answers": [
              {
                "choice": "<p>A. Use ResultPath in a Catch statement to include the error with the original input.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use InputPath in a Catch statement and set the value to null.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use ErrorEquals in a Retry statement to include the error with the original input.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use OutputPath in a Retry statement and set the value to $.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 98 discussion",
        "discusstion": [
          {
            "id": 163299,
            "date": "Tue 28 Sep 2021 04:10",
            "username": "Polu",
            "content": "A - \\\"In some cases, you might want to preserve the original input with the error. Use ResultPath in a Catch to include the error with the original input, instead of replacing it.\\\"",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 245482,
            "date": "Sat 06 Nov 2021 03:46",
            "username": "RicardoD",
            "content": "A is the answer<br><br>The output of a state can be a copy of its input, the result it produces (for example, output from a Task state=E2=80=99s Lambda function), or a combination of its input and result. Use ResultPath to control which combination of these is passed to the state output.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 696052,
            "date": "Sun 16 Oct 2022 09:14",
            "username": "cloud_collector",
            "content": "https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html#input-output-resultpath-catch",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 661786,
            "date": "Wed 07 Sep 2022 02:25",
            "username": "szhang2004",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 653267,
            "date": "Mon 29 Aug 2022 05:51",
            "username": "Hari008",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 195198,
            "date": "Sat 16 Oct 2021 06:04",
            "username": "Chinta",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 174981,
            "date": "Fri 01 Oct 2021 09:32",
            "username": "saeidp",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#100",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an online order website that uses Amazon DynamoDB to store item inventory. A sample of the inventory object is as follows:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04238/0005200001.png\" class=\"in-exam-image\"><br>A developer needs to reduce all inventory prices by 100 as long as the resulting price would not be less than 500.<br>What should the developer do to make this change with the LEAST number of calls to DynamoDB?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#100",
            "answers": [
              {
                "choice": "<p>A. Perform a DynamoDB Query operation with the Id. If the price is > 600, perform an UpdateItem operation to update the price.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform a DynamoDB UpdateItem operation with a condition expression of \"Price > 600\".<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Perform a DynamoDB UpdateItem operation with a condition expression of \"ProductCategory IN ({\"S\": \"Sporting Goods\"}) and Price 600\".<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Perform a DynamoDB UpdateItem operation with a condition expression of \"MIN Price500\".<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Developer Associate topic 1 question 100 discussion",
        "discusstion": [
          {
            "id": 761595,
            "date": "Fri 30 Dec 2022 02:27",
            "username": "thensanity",
            "content": "all - keyword, you do not need to specify which id needs to be updated",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731029,
            "date": "Wed 30 Nov 2022 03:41",
            "username": "gpit",
            "content": "It'd be even better if B is in an index.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 721066,
            "date": "Fri 18 Nov 2022 05:49",
            "username": "dark_cherrymon",
            "content": "it's not A because you don't need to query by ID",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 689408,
            "date": "Sat 08 Oct 2022 16:15",
            "username": "habros",
            "content": "B is answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 686803,
            "date": "Wed 05 Oct 2022 13:07",
            "username": "haazybanj",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 661790,
            "date": "Wed 07 Sep 2022 02:27",
            "username": "szhang2004",
            "content": "should be B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 659432,
            "date": "Sun 04 Sep 2022 19:46",
            "username": "Vinafec",
            "content": "Easy B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 658277,
            "date": "Sat 03 Sep 2022 11:22",
            "username": "Danbraga",
            "content": "I vote for B, acording to this doc:<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      }
    ]
  }