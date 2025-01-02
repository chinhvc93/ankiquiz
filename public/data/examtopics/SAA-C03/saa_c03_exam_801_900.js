var SAA_C03_Exam_801_900 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#801",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company needs to handle highly sensitive data. The company will store the data in an Amazon S3 bucket. The company needs to ensure that the data is encrypted in transit and at rest. The company must manage the encryption keys outside the AWS Cloud.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#801",
          "answers": [
            {
              "choice": "<p>Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management Service (AWS KMS) customer managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management Service (AWS KMS) AWS managed key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Encrypt the data in the S3 bucket with the default server-side encryption (SSE).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Encrypt the data at the company's data center before storing the data in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 801 discussion",
      "discusstion": [
        {
          "id": 1266622,
          "date": "Thu 15 Aug 2024 20:41",
          "username": "Johnoppong101",
          "content": "You get to do it, keep moving...",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1228962,
          "date": "Wed 12 Jun 2024 13:21",
          "username": "Scheldon",
          "content": "AnswerDHence we need to encrypt data not only during the rest but during the transfer as well, we need execute client-side encyprion. SSE will only secure data during rest hence we can eliminate A,B and C.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1184892,
          "date": "Thu 28 Mar 2024 17:47",
          "username": "chasingsummer",
          "content": "Given the requirement to manage encryption keys outside the AWS Cloud, option D is the most suitable solution, despite not directly utilizing AWS's native encryption services like SSE with AWS KMS. Instead, it leverages external encryption mechanisms controlled by the company.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1183228,
          "date": "Tue 26 Mar 2024 11:46",
          "username": "rondelldell",
          "content": "A Key is safe but came from the customer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1175823,
          "date": "Sun 17 Mar 2024 13:39",
          "username": "Mikado211",
          "content": "A, B and C need to have the key stored in AWS cloud.<br>D is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1170567,
          "date": "Sun 10 Mar 2024 20:17",
          "username": "osmk",
          "content": "Client-side encryption =E2=80=93 You encrypt your data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, encryption keys, and related tools.https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1170441,
          "date": "Sun 10 Mar 2024 17:12",
          "username": "giovanna_mag",
          "content": "For me it's D, it's the only one that provides encryption also in transit",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1166769,
          "date": "Tue 05 Mar 2024 22:28",
          "username": "asdfcdsxdfc",
          "content": "A looks correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#802",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run its payment application on AWS. The application receives payment notifications from mobile devices. Payment notifications require a basic validation before they are sent for further processing.<br><br>The backend processing application is long running and requires compute and memory to be adjusted. The company does not want to manage the infrastructure.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#802",
          "answers": [
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Kubernetes Service (Amazon EKS) Anywhere. Create a standalone cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon API Gateway API. Integrate the API with an AWS Step Functions state machine to receive payment notifications from mobile devices. Invoke the state machine to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure an EKS cluster with self-managed nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon EC2 Spot Instances. Configure a Spot Fleet with a default allocation strategy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon API Gateway API. Integrate the API with AWS Lambda to receive payment notifications from mobile devices. Invoke a Lambda function to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon ECS with an AWS Fargate launch type.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 802 discussion",
      "discusstion": [
        {
          "id": 1320187,
          "date": "Sat 30 Nov 2024 13:17",
          "username": "Cpso",
          "content": "D less operation. Butshould have SQS to buffer a job.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1228968,
          "date": "Wed 12 Jun 2024 13:44",
          "username": "Scheldon",
          "content": "AnswerD<br><br>I would go with Lambda function to do basic validation it should not take more then 15min hence Lambda is perfect for that job. Then we have information that backend processing application is long running and we need to make compute and memory adjustment, and everythink need to be automatic as company do not want to manage infrastucture. In that situation Fargate with ECS will be ideal as it can run background application for every paymant separetly we need only adjust amunt of resources in use. More payments more application running, mmore resources in use and oposite,",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1203074,
          "date": "Sat 27 Apr 2024 13:13",
          "username": "sandordini",
          "content": "Lot of grip in this question, but to keep it short:<br>No infra: B, C Out.<br>EKS Anywhere: Onprem + AWS: Not needed.<br>ECS Fargate: Serverless,Least Ops Overhead, SQS fine for the queue, Lambda good for basic validation.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1175818,
          "date": "Sun 17 Mar 2024 13:36",
          "username": "Mikado211",
          "content": "We want to have least overhead and no infrastructure (aka no server).<br>So no infrastructurenot C<br>least overheadECS better than EKSnot B and not A<br><br>Fargate is serverless so D is still valid.<br><br>So the answer is D.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1168672,
          "date": "Fri 08 Mar 2024 10:04",
          "username": "seetpt",
          "content": "D is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1166772,
          "date": "Tue 05 Mar 2024 22:32",
          "username": "asdfcdsxdfc",
          "content": "shouldn't it be D?",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#803",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a user authentication solution for a company. The solution must invoke two-factor authentication for users that log in from inconsistent geographical locations, IP addresses, or devices. The solution must also be able to scale up to accommodate millions of users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#803",
          "answers": [
            {
              "choice": "<p>Configure Amazon Cognito user pools for user authentication. Enable the risk-based adaptive authentication feature with multifactor authentication (MFA).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Cognito identity pools for user authentication. Enable multi-factor authentication (MFA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Identity and Access Management (IAM) users for user authentication. Attach an IAM policy that allows the AllowManageOwnUserMFA action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS IAM Identity Center (AWS Single Sign-On) authentication for user authentication. Configure the permission sets to require multi-factor authentication (MFA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 803 discussion",
      "discusstion": [
        {
          "id": 1300025,
          "date": "Sat 19 Oct 2024 15:42",
          "username": "mk168898",
          "content": "Picked A because cognito user pool > authentication",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1228972,
          "date": "Wed 12 Jun 2024 13:51",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Adaptive authentication<br>Amazon Cognito can review location and device information from your users' sign-in requests and apply an automatic response to secure the user accounts in your user pool against suspicious activity.<br><br>When you activate advanced security, Amazon Cognito assigns a risk score to user activity. You can assign an automatic response to suspicious activity: you can Require MFA, Block sign-in, or just log the activity details and risk score. You can also automatically send email messages that notify your user of the suspicious activity so that they can reset their password or take other self-guided actions.<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170583,
          "date": "Sun 10 Mar 2024 20:38",
          "username": "osmk",
          "content": "With adaptive authentication, you can configure your user pool to require second factor authentication in response to an increased risk level. To add adaptive authentication to your user pool, see Adding advanced security to a user pool.https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170532,
          "date": "Sun 10 Mar 2024 19:23",
          "username": "lenotc",
          "content": "A is correct<br>B is wrong beacause is desing for temporary credentials",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170442,
          "date": "Sun 10 Mar 2024 17:15",
          "username": "giovanna_mag",
          "content": "I belive it's A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1211627,
          "date": "Tue 14 May 2024 21:23",
          "username": "Tatai2015",
          "content": "A<br>https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1168501,
          "date": "Fri 08 Mar 2024 03:15",
          "username": "xBUGx",
          "content": "accommodate millions of users and GEO, IP, etc. I think A",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#804",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon S3 data lake. The company needs a solution that transforms the data from the data lake and loads the data into a data warehouse every day. The data warehouse must have massively parallel processing (MPP) capabilities.<br><br>Data analysts then need to create and train machine learning (ML) models by using SQL commands on the data. The solution must use serverless AWS services wherever possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#804",
          "answers": [
            {
              "choice": "<p>Run a daily Amazon EMR job to transform the data and load the data into Amazon Redshift. Use Amazon Redshift ML to create and train the ML models.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run a daily Amazon EMR job to transform the data and load the data into Amazon Aurora Serverless. Use Amazon Aurora ML to create and train the ML models.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run a daily AWS Glue job to transform the data and load the data into Amazon Redshift Serverless. Use Amazon Redshift ML to create and train the ML models.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run a daily AWS Glue job to transform the data and load the data into Amazon Athena tables. Use Amazon Athena ML to create and train the ML models.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 804 discussion",
      "discusstion": [
        {
          "id": 1175808,
          "date": "Sun 17 Mar 2024 13:23",
          "username": "Mikado211",
          "content": "Data warehouse > Redshift<br>Without additional informations both EMR and Glue Jobs can work.<br>Since the question asks to use serverless as much as possible, Redshift Serverless is a better solution.<br>C",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1188543,
          "date": "Wed 03 Apr 2024 11:07",
          "username": "BatVanyo",
          "content": "Neither A, nor B explicitly say \\\"EMR serverless\\\" which is a new AWS offering, so I exclude these two.<br>MPP goes hand in hand with Redshift, so D is also incorrect.<br><br>This leaves C the only possible serverless option here.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300026,
          "date": "Sat 19 Oct 2024 15:43",
          "username": "mk168898",
          "content": "Data Warehouse > redshift<br>Use AWS Services whereever possible > Redshift serverless",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1183233,
          "date": "Tue 26 Mar 2024 11:59",
          "username": "rondelldell",
          "content": "A<br>Amazon EMR Serverless is a deployment option for Amazon EMR that provides a serverless runtime environment. This simplifies the operation of analytics applications that use the latest open-source frameworks, such as Apache Spark and Apache Hive. With EMR Serverless, you don't have to configure, optimize, secure, or operate clusters to run applications with these frameworks.<br><br>EMR Serverless helps you avoid over- or under-provisioning resources for your data processing jobs. EMR Serverless automatically determines the resources that the application needs, gets these resources to process your jobs, and releases the resources when the jobs finish. For use cases where applications need a response within seconds, such as interactive data analysis, you can pre-initialize the resources that the application needs when you create the application.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1169194,
          "date": "Sat 09 Mar 2024 02:31",
          "username": "1dd",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1169189,
          "date": "Sat 09 Mar 2024 02:16",
          "username": "1dd",
          "content": "EMR works with big data transfer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>MPP --&gt; use Redshift so eliminate B,D<br>As it required Serverless services --&gt; Glue</li><li>A have no serverless<br>C is the answer</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1169192,
          "date": "Sat 09 Mar 2024 02:28",
          "username": "1dd",
          "content": "MPP --> use Redshift so eliminate B,D<br>As it required Serverless services --> Glue<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A have no serverless<br>C is the answer</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1169193,
          "date": "Sat 09 Mar 2024 02:30",
          "username": "1dd",
          "content": "A have no serverless<br>C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1168673,
          "date": "Fri 08 Mar 2024 10:05",
          "username": "seetpt",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166775,
          "date": "Tue 05 Mar 2024 22:40",
          "username": "asdfcdsxdfc",
          "content": "should be C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#805",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs containers in a Kubernetes environment in the company's local data center. The company wants to use Amazon Elastic Kubernetes Service (Amazon EKS) and other AWS managed services. Data must remain locally in the company's data center and cannot be stored in any remote site or cloud to maintain compliance.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#805",
          "answers": [
            {
              "choice": "<p>Deploy AWS Local Zones in the company's data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Snowmobile in the company's data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install an AWS Outposts rack in the company's data center.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Install an AWS Snowball Edge Storage Optimized node in the data center.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 805 discussion",
      "discusstion": [
        {
          "id": 1175803,
          "date": "Sun 17 Mar 2024 13:18",
          "username": "Mikado211",
          "content": "Outpost is a service where AWS has physical servers in your datacenter.<br>C",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166776,
          "date": "Tue 05 Mar 2024 22:42",
          "username": "asdfcdsxdfc",
          "content": "C looks correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332153,
          "date": "Fri 27 Dec 2024 01:14",
          "username": "LeonSauveterre",
          "content": "A - AWS Local Zones provide low-latency access to AWS services by placing AWS infrastructure closer to customers, but the data is still stored in an AWS-managed facility.<br>B - AWS Snowmobile is used for large-scale data migrations to the cloud, not for running workloads or storing data locally.<br>C - AWS Outposts allows you to run AWS services, including Amazon EKS, in your own data center while keeping data locally.<br>D - AWS Snowball Edge is a portable edge computing and data storage device, but it's not suitable for running Kubernetes or AWS-managed services like Amazon EKS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300027,
          "date": "Sat 19 Oct 2024 15:46",
          "username": "mk168898",
          "content": "Data must remain locally in the company's data center > AWS outpost",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1232362,
          "date": "Tue 18 Jun 2024 12:15",
          "username": "JonJon03",
          "content": "EKS on SnowBALL could be an option. EKS on SnowMOBILE isn't as it's used for data transfer mostly.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1229387,
          "date": "Wed 12 Jun 2024 19:38",
          "username": "Scheldon",
          "content": "AnswerC<br><br>AWS OutpostBring AWS cloud to your DataCentre, which we need in described scenario",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1168674,
          "date": "Fri 08 Mar 2024 10:06",
          "username": "seetpt",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#806",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company has workloads that collect and process data. The workloads store the data in on-premises NFS storage. The data store cannot scale fast enough to meet the company's expanding business needs. The company wants to migrate the current data store to AWS.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#806",
          "answers": [
            {
              "choice": "<p>Set up an AWS Storage Gateway Volume Gateway. Use an Amazon S3 Lifecycle policy to transition the data to the appropriate storage class.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Storage Gateway Amazon S3 File Gateway. Use an Amazon S3 Lifecycle policy to transition the data to the appropriate storage class.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Elastic File System (Amazon EFS) Standard-Infrequent Access (Standard-IA) storage class. Activate the infrequent access lifecycle policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA) storage class. Activate the infrequent access lifecycle policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 806 discussion",
      "discusstion": [
        {
          "id": 1180410,
          "date": "Sat 23 Mar 2024 00:31",
          "username": "alawada",
          "content": "This solution meets the requirements most cost-effectively because it enables the company to migrate its on-premises NFS data store to AWS without changing the existing applications or workflows. AWS Storage Gateway is a hybrid cloud storage service that provides seamless and secure integration between on-premises and AWS storage. Amazon S3 File Gateway is a type of AWS Storage Gateway that provides a file interface to Amazon S3, with local caching for low-latency access. By setting up an Amazon S3 File Gateway, the company can store and retrieve files as objects in Amazon S3 using standard file protocols such as NFS.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332158,
          "date": "Fri 27 Dec 2024 01:40",
          "username": "LeonSauveterre",
          "content": "I'm a little confused by option C & D. How does infrequent access have anything to do with this?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1300030,
          "date": "Sat 19 Oct 2024 15:50",
          "username": "mk168898",
          "content": "S3 File Gateway > Best for NFS-like file storage workloads",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1294958,
          "date": "Wed 09 Oct 2024 06:00",
          "username": "hharbiordun85",
          "content": "Answer: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1229413,
          "date": "Wed 12 Jun 2024 20:35",
          "username": "Scheldon",
          "content": "AnswerD<br><br>Taking into consideration that we are talking about social media company probably storing a lot of quite small files i would say it cannot be Option A or B.<br>For example<br>Amazon S3 File Gateway pricing<br>Storage Pricing<br>Storage Pricing Stored and billed as Amazon S3 objects.<br>Request Pricing<br>Data written to AWS storage by your gateway $0.01 per GB=E2=80=A0<br>File storage in S3 Billed as Amazon S3 requests.<br>It can be quite expensive, especially when we will be working on small files.<br>I would go with EFS with OneZone-IA (option D) which should be less expensive taking into consideration that we are paying only for Storage and Data Transfer (per GB).<br>But to be honest we need more information to device which solution will be better.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It say migrating data into cloud, EFS does not satisfy that. You're right, It needs more information to make your choice to be a better answer.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1239000,
          "date": "Sat 29 Jun 2024 05:30",
          "username": "EdricHoang",
          "content": "It say migrating data into cloud, EFS does not satisfy that. You're right, It needs more information to make your choice to be a better answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180404,
          "date": "Sat 23 Mar 2024 00:25",
          "username": "alawada",
          "content": "yeah B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1168677,
          "date": "Fri 08 Mar 2024 10:11",
          "username": "seetpt",
          "content": "I think B too",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166781,
          "date": "Tue 05 Mar 2024 22:48",
          "username": "asdfcdsxdfc",
          "content": "B looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#807",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses high concurrency AWS Lambda functions to process a constantly increasing number of messages in a message queue during marketing events. The Lambda functions use CPU intensive code to process the messages. The company wants to reduce the compute costs and to maintain service latency for its customers.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#807",
          "answers": [
            {
              "choice": "<p>Configure reserved concurrency for the Lambda functions. Decrease the memory allocated to the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure reserved concurrency for the Lambda functions. Increase the memory according to AWS Compute Optimizer recommendations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure provisioned concurrency for the Lambda functions. Decrease the memory allocated to the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure provisioned concurrency for the Lambda functions. Increase the memory according to AWS Compute Optimizer recommendations.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 807 discussion",
      "discusstion": [
        {
          "id": 1232365,
          "date": "Tue 18 Jun 2024 12:23",
          "username": "JonJon03",
          "content": "eserved concurrency =E2=80=94 It guarantees the maximum number of concurrent instances for the function which can be invoked. When a function has being with a reserved concurrency configuration then no other lambda function within the same AWS account and region can use that concurrency. There is no charge for configuring reserved concurrency for a function.<br>Provisioned concurrency =E2=80=94 This concurrency initializes a requested number of execution environments so that they are prepared to respond immediately to your function's invocations. Note that configuring provisioned concurrency incurs charges to your AWS account.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332159,
          "date": "Fri 27 Dec 2024 02:05",
          "username": "LeonSauveterre",
          "content": "Let's think - Should we increase or decrease memory? Know that CPU resources scale proportionally with memory allocation in AWS Lambda, so increasing memory will help reduce the execution time for CPU-intensive tasks. Shorter execution times lower the overall compute cost. Then, A & C are out.<br><br>About option D, it ensures performance and prevents cold starts, yes, but it also incurs additional costs to keep Lambda execution environments pre-warmed, even when not in use. Reserved concurrency is more cost-effective for sustained workloads.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1328670,
          "date": "Wed 18 Dec 2024 20:22",
          "username": "dragossky",
          "content": "Reserved concurrency =E2=80=93 This represents the maximum number of concurrent instances allocated to your function. When a function has reserved concurrency, no other function can use that concurrency. Reserved concurrency is useful for ensuring that your most critical functions always have enough concurrency to handle incoming requests. Configuring reserved concurrency for a function incurs no additional charges.<br><br>Provisioned concurrency =E2=80=93 This is the number of pre-initialized execution environments allocated to your function. These execution environments are ready to respond immediately to incoming function requests. Provisioned concurrency is useful for reducing cold start latencies for functions. Configuring provisioned concurrency incurs additional charges to your AWS account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320078,
          "date": "Sat 30 Nov 2024 06:58",
          "username": "JA2018",
          "content": "Provisioned concurrency:<br>For scenarios with predictable high traffic like marketing events, using provisioned concurrency ensures Lambda functions are always ready to process requests, maintaining low latency.<br><br>Increase memory based on Compute Optimizer recommendations:<br>Since the Lambda functions are CPU intensive, increasing allocated memory based on AWS Compute Optimizer suggestions can often improve performance and reduce costs by allowing the functions to process more data without hitting CPU throttling.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1316804,
          "date": "Sat 23 Nov 2024 22:19",
          "username": "AMEJack",
          "content": "Provioned concurrency will increase cost and we need to maintain latency not to decrease latency. Also, provisioned concurrency cost is very related to memory, so if you use provisioned and increase memory this will affect the cost dramatically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1212430,
          "date": "Thu 16 May 2024 15:35",
          "username": "bujuman",
          "content": "Also Lambda provisioned concurrency incure additionnal Account charges (https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html), it's the best option because it is stated:<br>- The company wants to reduce the compute costs and to maintain service latency for its customers.<br>So maintaining service latency while reducing compute cost is requested.<br>That being said, Lambda optimization is not a trivial task, that's why one should rely on AWS Compute Optimizer recommendations to analyze usage and find the best fit.<br>Please read following for more insights:<br>https://aws.amazon.com/blogs/compute/optimizing-aws-lambda-cost-and-performance-using-aws-compute-optimizer/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1188736,
          "date": "Wed 03 Apr 2024 17:24",
          "username": "JackyCCK",
          "content": "Increase the memory according to AWS Compute Optimizer recommendations --> so we can lower the duration of lambda function to reduce the cost.<br>The ans must be between B & D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180415,
          "date": "Sat 23 Mar 2024 00:37",
          "username": "alawada",
          "content": "Provisioned Concurrency keeps the Lambda functions initialized and ready to process incoming events, reducing the cold start latency associated with spinning up new execution environments.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1170916,
          "date": "Mon 11 Mar 2024 10:29",
          "username": "asdfcdsxdfc",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1170601,
          "date": "Sun 10 Mar 2024 21:11",
          "username": "osmk",
          "content": "When a large number of messages are in the SQS queue, Lambda scales out, adding additional functions to process the messages. The scale out can consume the concurrency quota in the account. To prevent this from happening, you can set reserved concurrency for individual Lambda functions. This ensures that the specified Lambda function can always scale to that much concurrency, but it also cannot exceed this number. https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170598,
          "date": "Sun 10 Mar 2024 21:06",
          "username": "osmk",
          "content": "When a large number of messages are in the SQS queue, Lambda scales out, adding additional functions to process the messages. The scale out can consume the concurrency quota in the account. To prevent this from happening, you can set reserved concurrency for individual Lambda functions. This ensures that the specified Lambda function can always scale to that much concurrency, but it also cannot exceed this number. https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1170336,
          "date": "Sun 10 Mar 2024 14:15",
          "username": "Sivaeas",
          "content": "To reduce compute costs and maintain service latency for customers while using AWS Lambda functions for processing CPU-intensive tasks, you can consider the following strategies:<br><br>Optimize Lambda Function Configuration:<br>Adjust the memory allocation for Lambda functions to better match the CPU requirements of your workload. Higher memory configurations provide more CPU power.<br>Tune the timeout settings to match the expected processing time of your workload. This prevents unnecessary over-provisioning and reduces costs.<br>Fine-tune the concurrency settings to control the number of concurrent executions based on your workload's characteristics.<br>Use Provisioned Concurrency:<br>AWS Lambda's provisioned concurrency feature allows you to preallocate a number of execution environments to handle incoming requests instantly. This can help reduce cold starts and maintain consistent performance, especially during peak events.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1169238,
          "date": "Sat 09 Mar 2024 04:14",
          "username": "1dd",
          "content": "Reserved concurrency its no charges reduce the computation cost, \\\"latency for its customer\\\" then I'll go for A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Reserved concurrency guarantees a minimum number of concurrent executions but doesn't inherently improve cold start times like provisioned concurrency.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1170469,
          "date": "Sun 10 Mar 2024 17:48",
          "username": "lenotc",
          "content": "Reserved concurrency guarantees a minimum number of concurrent executions but doesn't inherently improve cold start times like provisioned concurrency.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#808",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its workloads on Amazon Elastic Container Service (Amazon ECS). The container images that the ECS task definition uses need to be scanned for Common Vulnerabilities and Exposures (CVEs). New container images that are created also need to be scanned.<br><br>Which solution will meet these requirements with the FEWEST changes to the workloads?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#808",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository to store the container images. Specify scan on push filters for the ECR basic scan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the container images in an Amazon S3 bucket. Use Amazon Macie to scan the images. Use an S3 Event Notification to initiate a Macie scan for every event with an s3:ObjectCreated:Put event type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the workloads to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository. Specify scan on push filters for the ECR enhanced scan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the container images in an Amazon S3 bucket that has versioning enabled. Configure an S3 Event Notification for s3:ObjectCreated:* events to invoke an AWS Lambda function. Configure the Lambda function to initiate an Amazon Inspector scan.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 808 discussion",
      "discusstion": [
        {
          "id": 1169239,
          "date": "Mon 09 Sep 2024 03:23",
          "username": "1dd",
          "content": "need less workload changes and CVEs<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1168515,
          "date": "Sun 08 Sep 2024 02:39",
          "username": "xBUGx",
          "content": "FEWEST changes to the workloads and scan CVE is enough. A looks OK.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332166,
          "date": "Fri 27 Dec 2024 02:30",
          "username": "LeonSauveterre",
          "content": "Amazon ECR: Designed for storing container images, integrates seamlessly with Amazon ECS.<br>Scan on Push: Automatically scans images for vulnerabilities (CVEs) when they are uploaded. This is built-in functionality and requires minimal changes to existing workflows.<br>Fewest Changes: Existing ECS workloads can directly pull images from ECR without modification to the workloads themselves.<br><br>B - Amazon Macie focuses on data discovery and classification (such as identifying sensitive data in S3 buckets), not container image vulnerabilities.<br>C - Result-wise OK, but switching from ECS to EKS is unnecessary and involves a steep learning curve and operational overhead.<br>D - Result-wise OK. Amazon Inspector can scan for vulnerabilities, but this is too complex and requires a custom setup, including using S3 and Lambda to trigger scans.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1203091,
          "date": "Sun 27 Oct 2024 14:35",
          "username": "sandordini",
          "content": "Basic scan looks for Common Vulnerabilities and Exposures (CVEs)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#809",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AWS Batch job to run its end-of-day sales process. The company needs a serverless solution that will invoke a third-party reporting application when the AWS Batch job is successful. The reporting application has an HTTP API interface that uses username and password authentication.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#809",
          "answers": [
            {
              "choice": "<p>Configure an Amazon EventBridge rule to match incoming AWS Batch job SUCCEEDED events. Configure the third-party API as an EventBridge API destination with a username and password. Set the API destination as the EventBridge rule target.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EventBridge Scheduler to match incoming AWS Batch job SUCCEEDED events. Configure an AWS Lambda function to invoke the third-party API by using a username and password. Set the Lambda function as the EventBridge rule target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure an HTTP proxy integration on the API Gateway REST API to invoke the third-party API by using a username and password.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure a proxy integration on the API Gateway REST API to an AWS Lambda function. Configure the Lambda function to invoke the third-party API by using a username and password.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 809 discussion",
      "discusstion": [
        {
          "id": 1201587,
          "date": "Wed 24 Apr 2024 21:01",
          "username": "venutadi",
          "content": "https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/<br>Amazon EventBridge enables developers to route events between AWS services, integrated software as a service (SaaS) applications, and your own applications. It can help decouple applications and produce more extensible, maintainable architectures. With the new API destinations feature, EventBridge can now integrate with services outside of AWS using REST API calls.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree.</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202385,
          "date": "Fri 26 Apr 2024 06:51",
          "username": "shintaro0914",
          "content": "I agree.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1203093,
          "date": "Sat 27 Apr 2024 13:44",
          "username": "sandordini",
          "content": "I'm confused. Both A and B seem to be viable. There is no requirement of cost, complexity, or overhead. :S",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1332167,
          "date": "Fri 27 Dec 2024 02:47",
          "username": "LeonSauveterre",
          "content": "A - EventBridge API Destination is specifically designed to send events to HTTP APIs. It supports basic authentication (username and password), which fits the requirement for 3rd-party API authentication.<br>B - OK, but EventBridge Scheduler is unnecessary because EventBridge rules can already match Batch job events. Introducing Lambda functions adds complexity and costs.<br>C - An HTTP proxy integration on API Gateway cannot handle authentication directly. We still need to manage username and password authentication separately.<br>D - OK, but even more complex than option B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1229463,
          "date": "Wed 12 Jun 2024 21:59",
          "username": "Scheldon",
          "content": "AnswerA<br><br>EventBridge Schedule will not work as it will allow us to \\\"do something\\\" per schedule.<br>EventBridge rule will allow us to \\\"do something\\\" when event will occur.<br>I think there is no possibility to publish/send job \\\"SUCCEEDED\\\" to AMAZON API Gateway REST API or that we can do anykind of integration with AMAZON API Gateway, hence I would choose A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1212707,
          "date": "Fri 17 May 2024 07:23",
          "username": "bujuman",
          "content": "Even though option A and B could do the trick and also no statement related to least effort is rquested, EventBridge is dedicated for similar use case.<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html<br>Plus, it can also handle basic authentication<br>https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1205937,
          "date": "Fri 03 May 2024 07:25",
          "username": "Sergiuss95",
          "content": "I think is better to programming a lambda and obtain user and password from Secret Manager... So I think the better solution is B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>EventBridge also store credentials in Secret manager: https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1243305,
          "date": "Sat 06 Jul 2024 11:59",
          "username": "EdricHoang",
          "content": "EventBridge also store credentials in Secret manager: https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1198850,
          "date": "Sat 20 Apr 2024 00:09",
          "username": "Oluwatosin09",
          "content": "Answer should be B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1195171,
          "date": "Sun 14 Apr 2024 02:34",
          "username": "boluwatito",
          "content": "Configure Amazon EventBridge Scheduler to match incoming AWS Batch job SUCCEEDED events.<br>Configure an AWS Lambda function to invoke the third-party API using a username and password.<br>Set the Lambda function as the EventBridge rule target.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1188699,
          "date": "Wed 03 Apr 2024 15:53",
          "username": "AlvinC2024",
          "content": "A. Configure an Amazon EventBridge rule to match incoming AWS Batch job SUCCEEDED events. Configure the third-party API as an EventBridge API destination with a username and password. Set the API destination as the EventBridge rule target.<br><br>This option is the most direct and serverless approach to meeting the requirements. Amazon EventBridge can detect the successful completion of the AWS Batch job and trigger actions based on this event. By configuring the third-party API as an API destination with authentication credentials, EventBridge can directly invoke the third-party reporting application without the need for additional services. This approach minimizes complexity and operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1180446,
          "date": "Sat 23 Mar 2024 01:36",
          "username": "alawada",
          "content": "Create an AWS Lambda function responsible for invoking the third-party reporting application's HTTP API endpoint. The Lambda function will be triggered by the successful completion of the AWS Batch job.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1176989,
          "date": "Tue 19 Mar 2024 05:48",
          "username": "k_k_kkk",
          "content": "AWS Batch sends job status change to EventBridge.<br><br>https://docs.aws.amazon.com/batch/latest/userguide/batch_cwe_events.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1170608,
          "date": "Sun 10 Mar 2024 21:41",
          "username": "osmk",
          "content": "look like B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#810",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects and processes data from a vendor. The vendor stores its data in an Amazon RDS for MySQL database in the vendor's own AWS account. The company's VPC does not have an internet gateway, an AWS Direct Connect connection, or an AWS Site-to-Site VPN connection. The company needs to access the data that is in the vendor database.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#810",
          "answers": [
            {
              "choice": "<p>Instruct the vendor to sign up for the AWS Hosted Connection Direct Connect Program. Use VPC peering to connect the company's VPC and the vendor's VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a client VPN connection between the company's VPC and the vendor's VPC. Use VPC peering to connect the company's VPC and the vendor's VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Instruct the vendor to create a Network Load Balancer (NLB). Place the NLB in front of the Amazon RDS for MySQL database. Use AWS PrivateLink to integrate the company's VPC and the vendor's VPC.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transit Gateway to integrate the company's VPC and the vendor's VPC. Use VPC peering to connect the company's VPC and the vendor's VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 810 discussion",
      "discusstion": [
        {
          "id": 1257120,
          "date": "Mon 29 Jul 2024 00:56",
          "username": "Ucy",
          "content": "Pour yourself a cold beer, when you get to this question, its been a very long run",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1332170,
          "date": "Fri 27 Dec 2024 03:00",
          "username": "LeonSauveterre",
          "content": "PrivateLink: AWS PrivateLink enables secure and private access to resources (like RDS) across accounts and VPCs using interface endpoints. It avoids exposing the database to the internet.<br>NLB: A Network Load Balancer acts as the integration point for PrivateLink. The vendor's NLB will route traffic to the RDS database.<br>VPC Without Internet Gateway: PrivateLink works even if the company's VPC does not have an internet gateway because communication occurs over private AWS infrastructure.<br><br>Option A, B, and D all mention VPC Peering, but it doesn't enable direct access to RDS without additional routing or security configurations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1229471,
          "date": "Wed 12 Jun 2024 22:05",
          "username": "Scheldon",
          "content": "AnswerC<br><br>AWS PrivateLink enables you to connect to some AWS services, services hosted by other AWS accounts (referred to as endpoint services), and supported AWS Marketplace partner services, via private IP addresses in your VPC. The interface endpoints are created directly inside of your VPC, using elastic network interfaces and IP addresses in your VPC's subnets. That means that VPC Security Groups can be used to manage access to the endpoints.<br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1223641,
          "date": "Mon 03 Jun 2024 16:37",
          "username": "Nm55569",
          "content": "https://aws.amazon.com/blogs/database/access-amazon-rds-across-vpcs-using-aws-privatelink-and-network-load-balancer/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1213725,
          "date": "Sun 19 May 2024 12:48",
          "username": "TwinSpark",
          "content": "I think i go for C, because if you exclude Dirct connect, VPN and GW so only C is available. but create an NLB zo do not want provision a transit GW sounds weird to me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1203096,
          "date": "Sat 27 Apr 2024 13:54",
          "username": "sandordini",
          "content": "Private link:<br>Does not require VPC linking: NO Internet Gateway, NO NAT GAteway, No Route table<br>Needs NLB on Service VPC, and ENI on the Customer VPC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1183307,
          "date": "Tue 26 Mar 2024 13:34",
          "username": "rondelldell",
          "content": "D<br>You can peer both intra-Region and inter-Region transit gateways, and route traffic between them, which includes IPv4 and IPv6 traffic. To do this, create a peering attachment on your transit gateway, and specify a transit gateway. The peer transit gateway can be in your account or a different AWS account.<br><br>After you create a peering attachment request, the owner of the peer transit gateway (also referred to as the accepter transit gateway) must accept the request. To route traffic between the transit gateways, add a static route to the transit gateway route table that points to the transit gateway peering attachment.<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1177877,
          "date": "Wed 20 Mar 2024 03:02",
          "username": "xBUGx",
          "content": "D does not involve internet. But TGW is unnecessary.<br>A is more simple and clear.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1170339,
          "date": "Sun 10 Mar 2024 14:21",
          "username": "Sivaeas",
          "content": "AWS PrivateLink:<br>AWS PrivateLink enables you to privately access services hosted on AWS in a highly available and scalable manner. With PrivateLink, you can access the vendor's RDS for MySQL instance securely without exposing it to the public internet.<br>The vendor can create a VPC endpoint for RDS within their own VPC, which acts as an entry point for accessing the RDS instance. This endpoint can then be shared with the company.<br>The company can create a VPC endpoint service in their VPC and accept the endpoint connection request from the vendor. This allows the company's resources to communicate with the RDS instance securely through PrivateLink.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1170274,
          "date": "Sun 10 Mar 2024 12:11",
          "username": "lenotc",
          "content": "C is correct:<br>https://aws.amazon.com/blogs/networking-and-content-delivery/how-to-securely-publish-internet-applications-at-scale-using-application-load-balancer-and-aws-privatelink/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1169270,
          "date": "Sat 09 Mar 2024 05:37",
          "username": "1dd",
          "content": "Plz commit the previous comment,<br>A involve- Direct connect<br>B involve - peering required same region<br>D involve - uses internet gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1169258,
          "date": "Sat 09 Mar 2024 05:16",
          "username": "1dd",
          "content": "No internet gateway XD<br>No Direct connect XC<br>No Peering XB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1166782,
          "date": "Tue 05 Mar 2024 22:55",
          "username": "asdfcdsxdfc",
          "content": "Shouldn't it be D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>VPC peering merges two VPCs and exposes all the services across both VPCs, which is more than less desirable</li><li>YES D<br>transit gateway is like router - u can connect VPCs AND OnPrem. VPCs can be in anuther account or region or org</li><li>I think it required use of internet gateway .</li><li>No, it did not<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1310959,
          "date": "Tue 12 Nov 2024 22:56",
          "username": "Sergantus",
          "content": "VPC peering merges two VPCs and exposes all the services across both VPCs, which is more than less desirable",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1183309,
          "date": "Tue 26 Mar 2024 13:37",
          "username": "rondelldell",
          "content": "YES D<br>transit gateway is like router - u can connect VPCs AND OnPrem. VPCs can be in anuther account or region or org",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1169257,
          "date": "Sat 09 Mar 2024 05:14",
          "username": "1dd",
          "content": "I think it required use of internet gateway .<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, it did not<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1238166,
          "date": "Thu 27 Jun 2024 15:12",
          "username": "Jacky_S",
          "content": "No, it did not<br>https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#811",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to set up Amazon Managed Grafana as its visualization tool. The company wants to visualize data from its Amazon RDS database as one data source. The company needs a secure solution that will not expose the data over the internet.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#811",
          "answers": [
            {
              "choice": "<p>Create an Amazon Managed Grafana workspace without a VPC. Create a public endpoint for the RDS database. Configure the public endpoint as a data source in Amazon Managed Grafana.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Managed Grafana workspace in a VPC. Create a private endpoint for the RDS database. Configure the private endpoint as a data source in Amazon Managed Grafana.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Managed Grafana workspace without a VPCreate an AWS PrivateLink endpoint to establish a connection between Amazon Managed Grafana and Amazon RDS. Set up Amazon RDS as a data source in Amazon Managed Grafana.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Managed Grafana workspace in a VPC. Create a public endpoint for the RDS database. Configure the public endpoint as a data source in Amazon Managed Grafana.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 811 discussion",
      "discusstion": [
        {
          "id": 1205945,
          "date": "Fri 03 May 2024 07:54",
          "username": "Sergiuss95",
          "content": "I think is b. Private endpoint sounds like private vpc endpoint, that is equals to privatelink",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1179113,
          "date": "Thu 21 Mar 2024 11:24",
          "username": "Bazzix",
          "content": "B is correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332175,
          "date": "Fri 27 Dec 2024 03:12",
          "username": "LeonSauveterre",
          "content": "A & D are out, because they're using public endpoints, which causes exposure over the Internet.<br><br>Why C is wrong: If the Grafana workspace is not in a VPC, it cannot use PrivateLink endpoints. PrivateLink endpoints must reside within a VPC. If Grafana is outside the VPC, PrivateLink cannot establish the required secure, private connection.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1319424,
          "date": "Thu 28 Nov 2024 20:29",
          "username": "ARV14",
          "content": "https://docs.aws.amazon.com/grafana/latest/userguide/VPC-endpoints.html ,https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-managed-grafana-connection-data-sources-hosted-virtual-private-cloud/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1310394,
          "date": "Tue 12 Nov 2024 02:13",
          "username": "chest_jd",
          "content": "Choice B or C could be resolved in this way:<br>B. Create an Amazon Managed Grafana workspace in a VPC<br>C. Create an Amazon Managed Grafana workspace without a VPC<br><br>As far as I know we cannot create workspace without VCP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1303804,
          "date": "Mon 28 Oct 2024 04:11",
          "username": "tonybuivannghia",
          "content": "After searching effort, I agree C is correct because AMG workspace can't include in VPC. When you have not configured a private VPC, and Amazon Managed Grafana is connecting to publicly accessible data sources, it connects to some AWS services in the same region via AWS PrivateLink. This includes services such as CloudWatch, Amazon Managed Service for Prometheus and AWS X-Ray. Traffic to those services does not flow via the public Internet.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1256400,
          "date": "Sat 27 Jul 2024 19:50",
          "username": "NSA_Poker",
          "content": "(B or C)?-1Do we create AMG workspace in a VPC OR do we create AMG workspace without a VPC? AMG is NOT created within a VPC; AMG connects to a VPC. \\\"Currently, you can connect one Amazon Managed Grafana workspace to one VPC endpoint in the same region and same account. However, you can use Virtual Private Cloud peering or AWS Transit Gateway to connect the cross-region or cross-account VPCs, then connect the select the VPC endpoint that's in the same account and same region as your Amazon Managed Grafana workspace.\\\" -FAQs<br><br>(C) is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>(B or C)?-2private endpoint OR AWS PrivateLink? The brand-name is more correct.<br><br>(B or C)?-3Configure the private endpoint as a data source OR Set up Amazon RDS as a data source? In the AMG console, after clicking on Data sources, you'll see a list of AWS services (Athena, Redshift etc) NOT network endpoints. After selecting RDS, you can further specify the Region &amp; Resource ID.<br><br>(B) eliminated.<br>(C) is correct.</li><li>You're missing out PrivateLink in option C.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1256401,
          "date": "Sat 27 Jul 2024 19:52",
          "username": "NSA_Poker",
          "content": "(B or C)?-2private endpoint OR AWS PrivateLink? The brand-name is more correct.<br><br>(B or C)?-3Configure the private endpoint as a data source OR Set up Amazon RDS as a data source? In the AMG console, after clicking on Data sources, you'll see a list of AWS services (Athena, Redshift etc) NOT network endpoints. After selecting RDS, you can further specify the Region & Resource ID.<br><br>(B) eliminated.<br>(C) is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're missing out PrivateLink in option C.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1332174,
          "date": "Fri 27 Dec 2024 03:11",
          "username": "LeonSauveterre",
          "content": "You're missing out PrivateLink in option C.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1235647,
          "date": "Sun 23 Jun 2024 01:36",
          "username": "EdricHoang",
          "content": "Its B.<br>C is also a valid choice<br>\\\"Not exposing to the internet\\\" is letting me eliminate C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>(B) \\\"a private endpoint\\\" &amp; (C) \\\"an AWS PrivateLink endpoint\\\" do NOT expose traffic to the internet.<br>(A &amp; D) eliminated. \\\"a public endpoint for the RDS database\\\" would \\\"expose the data over the internet\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1246748,
          "date": "Fri 12 Jul 2024 14:44",
          "username": "NSA_Poker",
          "content": "(B) \\\"a private endpoint\\\" & (C) \\\"an AWS PrivateLink endpoint\\\" do NOT expose traffic to the internet.<br>(A & D) eliminated. \\\"a public endpoint for the RDS database\\\" would \\\"expose the data over the internet\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231832,
          "date": "Mon 17 Jun 2024 10:37",
          "username": "ike001",
          "content": "B as you need to create Managed Grafana workspace with a VPC for private access https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-nac.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>(B) doesn't say 'with a VPC'; it says \\\"..Grafana workspace IN A VPC.\\\"<br>(B) eliminated.<br>(C) is correct.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1258272,
          "date": "Tue 30 Jul 2024 16:23",
          "username": "NSA_Poker",
          "content": "(B) doesn't say 'with a VPC'; it says \\\"..Grafana workspace IN A VPC.\\\"<br>(B) eliminated.<br>(C) is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1223642,
          "date": "Mon 03 Jun 2024 16:40",
          "username": "Nm55569",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-managed-grafana-connection-data-sources-hosted-virtual-private-cloud/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203098,
          "date": "Sat 27 Apr 2024 14:04",
          "username": "sandordini",
          "content": "I guess they mean C, But again, it's strange... IMO B would also work... There is no requirement for the least effort... Pls, correct me if I'm wrong...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1201594,
          "date": "Wed 24 Apr 2024 21:15",
          "username": "venutadi",
          "content": "Once you configure direct connectivity between a Grafana workspace and a VPC, Amazon Managed Grafana creates and manages an elastic network interface (ENI) per subnet to connect to the VPC. This enables the Grafana workspace to connect to data sources within the VPC, such as OpenSearch domains or RDS databases. Additionally, all traffic is now routed through the configured VPC, including alert destination and data source connectivity.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1183359,
          "date": "Tue 26 Mar 2024 14:59",
          "username": "VortexMD",
          "content": "AWS PrivateLink provides private connectivity between virtual private clouds (VPCs), supported AWS services, and your on-premises networks without exposing your traffic to the public internet. Interface VPC endpoints, powered by PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/mt/announcing-private-vpc-data-source-support-for-amazon-managed-grafana/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1183370,
          "date": "Tue 26 Mar 2024 15:11",
          "username": "VortexMD",
          "content": "https://aws.amazon.com/blogs/mt/announcing-private-vpc-data-source-support-for-amazon-managed-grafana/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1171771,
          "date": "Tue 12 Mar 2024 15:44",
          "username": "osmk",
          "content": "cccc ccc",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#812",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a data lake on Amazon S3. The data lake ingests data in Apache Parquet format from various data sources. The company uses multiple transformation steps to prepare the ingested data. The steps include filtering of anomalies, normalizing of data to standard date and time values, and generation of aggregates for analyses.<br><br>The company must store the transformed data in S3 buckets that data analysts access. The company needs a prebuilt solution for data transformation that does not require code. The solution must provide data lineage and data profiling. The company needs to share the data transformation steps with employees throughout the company.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#812",
          "answers": [
            {
              "choice": "<p>Configure an AWS Glue Studio visual canvas to transform the data. Share the transformation steps with employees by using AWS Glue jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EMR Serverless to transform the data. Share the transformation steps with employees by using EMR Serverless jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Glue DataBrew to transform the data. Share the transformation steps with employees by using DataBrew recipes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create Amazon Athena tables for the data. Write Athena SQL queries to transform the data. Share the Athena SQL queries with employees.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 812 discussion",
      "discusstion": [
        {
          "id": 1332181,
          "date": "Fri 27 Dec 2024 03:22",
          "username": "LeonSauveterre",
          "content": "A - AWS Glue doesn't focus on data profiling or provide an easy way for non-technical employees to collaborate on transformation steps.<br>B - You need to code.<br>C - AWS Glue DataBrew is a no-code tool specifically designed for data preparation and transformation.<br>D - Let's say writing SQLs are not coding, still, Athena lacks data lineage, data profiling, and the ability to reuse transformations as recipes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1240451,
          "date": "Tue 02 Jul 2024 00:44",
          "username": "Lingo43",
          "content": "AWS Glue DataBrew: This is a visual data preparation tool that allows you to clean and normalize data without writing code. It has built-in transformations for common tasks like filtering anomalies, normalizing dates, and generating aggregates. It also provides data lineage and profiling capabilities, which are required by the company.<br>DataBrew Recipes: These are reusable workflows that define the data transformation steps. They can be easily shared with other employees, making it simple to collaborate on data preparation tasks.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1228546,
          "date": "Tue 11 Jun 2024 19:04",
          "username": "Scheldon",
          "content": "AnswerC<br><br>AWS Glue DataBrew is a visual data preparation tool that enables users to clean and normalize data without writing any code. Using DataBrew helps reduce the time it takes to prepare data for analytics and machine learning (ML) by up to 80 percent, compared to custom developed data preparation. You can choose from over 250 ready-made transformations to automate data preparation tasks, such as filtering anomalies, converting data to standard formats, and correcting invalid values.<br>https://docs.aws.amazon.com/databrew/latest/dg/what-is.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1214178,
          "date": "Mon 20 May 2024 09:30",
          "username": "Linuslin",
          "content": "C is correct.<br>https://docs.aws.amazon.com/databrew/latest/dg/recipes.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1168681,
          "date": "Fri 08 Mar 2024 10:12",
          "username": "seetpt",
          "content": "Agree with C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166783,
          "date": "Tue 05 Mar 2024 22:58",
          "username": "asdfcdsxdfc",
          "content": "Should be C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#813",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect runs a web application on multiple Amazon EC2 instances that are in individual target groups behind an Application Load Balancer (ALB). Users can reach the application through a public website.<br><br>The solutions architect wants to allow engineers to use a development version of the website to access one specific development EC2 instance to test new features for the application. The solutions architect wants to use an Amazon Route 53 hosted zone to give the engineers access to the development instance. The solution must automatically route to the development instance even if the development instance is replaced.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#813",
          "answers": [
            {
              "choice": "<p>Create an A Record for the development website that has the value set to the ALB. Create a listener rule on the ALB that forwards requests for the development website to the target group that contains the development instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate the development instance with a public IP address. Create an A Record for the development website that has the value set to the public IP address of the development instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an A Record for the development website that has the value set to the ALB. Create a listener rule on the ALB to redirect requests for the development website to the public IP address of the development instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Place all the instances in the same target group. Create an A Record for the development website. Set the value to the ALB. Create a listener rule on the ALB that forwards requests for the development website to the target group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 813 discussion",
      "discusstion": [
        {
          "id": 1175784,
          "date": "Sun 17 Mar 2024 12:59",
          "username": "Mikado211",
          "content": "Both A and C look correct but with the C you pass through the ALB to be redirected to a public IP (so go outside) to come back again through this public IP which is not ideal.<br><br>The answer A is much cleaner and simplier with a dedicated target group and a listener rule pointing it.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B: Directly using a public IP address ties the A Record to a specific instance, which is not ideal since replacing the instance would require manually updating the Route 53 record.<br><br>C: Redirecting to a public IP address of the development instance is similar to option B, and would also require manual updates if the instance changes.</li><li>Public IP is not permanent, so definitely not B and C</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1286673,
          "date": "Fri 20 Sep 2024 07:48",
          "username": "MatAlves",
          "content": "B: Directly using a public IP address ties the A Record to a specific instance, which is not ideal since replacing the instance would require manually updating the Route 53 record.<br><br>C: Redirecting to a public IP address of the development instance is similar to option B, and would also require manual updates if the instance changes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1281645,
          "date": "Tue 10 Sep 2024 17:34",
          "username": "elmyth",
          "content": "Public IP is not permanent, so definitely not B and C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1171049,
          "date": "Mon 11 Mar 2024 14:45",
          "username": "gdf54634",
          "content": "Should be A as it points to the target group for easy replacement etc",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332184,
          "date": "Fri 27 Dec 2024 03:36",
          "username": "LeonSauveterre",
          "content": "B - If the development instance is replaced, the public IP address changes, requiring manual DNS updates in Route 53.<br>C - The ALB listener rule cannot directly redirect traffic based on the instance's public IP address without using a target group.<br>D - Without traffic isolation, you could easily route requests for the development website to production instances. Dangerous and just plain wrong.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>FYI, I copied this after googling.<br>What is a DNS \\\"A record\\\"?<br>The \\\"A\\\" stands for \\\"address\\\" and this is the most fundamental type of DNS record: it indicates the IP address of a given domain. For example, if you pull the DNS records of cloudflare.com, the A record currently returns an IP address of: 104.17.210.9.<br><br>A records only hold IPv4 addresses. If a website has an IPv6 address, it will instead use an \\\"AAAA\\\" record.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332185,
          "date": "Fri 27 Dec 2024 03:38",
          "username": "LeonSauveterre",
          "content": "FYI, I copied this after googling.<br>What is a DNS \\\"A record\\\"?<br>The \\\"A\\\" stands for \\\"address\\\" and this is the most fundamental type of DNS record: it indicates the IP address of a given domain. For example, if you pull the DNS records of cloudflare.com, the A record currently returns an IP address of: 104.17.210.9.<br><br>A records only hold IPv4 addresses. If a website has an IPv6 address, it will instead use an \\\"AAAA\\\" record.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320380,
          "date": "Sat 30 Nov 2024 22:50",
          "username": "Cpso",
          "content": "A.But not totally correct. ALB IP can be change. should use CNAME record.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320087,
          "date": "Sat 30 Nov 2024 07:26",
          "username": "JA2018",
          "content": "By setting the A Record to point to the ALB, you ensure that even if the development instance is replaced, the DNS record will still direct traffic to the correct target group which contains the new development instance, maintaining accessibility for engineers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why we have to rule out the other options:<br>B: Using the public IP address of the development instance directly would break access if the instance is replaced, as the IP address would change.<br>C: Redirecting requests from the ALB to the development instance's public IP is not a good practice as it bypasses the load balancing functionality of the ALB.<br>D: Placing all instances in the same target group would not allow for separate access to the development instance as the load balancer would distribute traffic across all instances, including production ones.</li><li>To conclude, option A provides the necessary flexibility and reliability to access the development instance while utilizing the ALB for load balancing and automatic failover capabilities.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320089,
          "date": "Sat 30 Nov 2024 07:27",
          "username": "JA2018",
          "content": "Why we have to rule out the other options:<br>B: Using the public IP address of the development instance directly would break access if the instance is replaced, as the IP address would change.<br>C: Redirecting requests from the ALB to the development instance's public IP is not a good practice as it bypasses the load balancing functionality of the ALB.<br>D: Placing all instances in the same target group would not allow for separate access to the development instance as the load balancer would distribute traffic across all instances, including production ones.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To conclude, option A provides the necessary flexibility and reliability to access the development instance while utilizing the ALB for load balancing and automatic failover capabilities.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320090,
          "date": "Sat 30 Nov 2024 07:27",
          "username": "JA2018",
          "content": "To conclude, option A provides the necessary flexibility and reliability to access the development instance while utilizing the ALB for load balancing and automatic failover capabilities.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1228550,
          "date": "Tue 11 Jun 2024 19:10",
          "username": "Scheldon",
          "content": "AnswerA,<br><br>With ALB which will point to appopriate dev group we will be able easy to create HA for dev servers.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170917,
          "date": "Mon 11 Mar 2024 10:32",
          "username": "asdfcdsxdfc",
          "content": "I think its A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#814",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a container application on a Kubernetes cluster in the company's data center. The application uses Advanced Message Queuing Protocol (AMQP) to communicate with a message queue. The data center cannot scale fast enough to meet the company's expanding business needs. The company wants to migrate the workloads to AWS.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#814",
          "answers": [
            {
              "choice": "<p>Migrate the container application to Amazon Elastic Container Service (Amazon ECS). Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the container application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon MQ to retrieve the messages.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use highly available Amazon EC2 instances to run the application. Use Amazon MQ to retrieve the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to run the application. Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 814 discussion",
      "discusstion": [
        {
          "id": 1175777,
          "date": "Sun 17 Mar 2024 12:51",
          "username": "Mikado211",
          "content": "This question is a trap because A is definitely the answer for a Least overhead (ECS + SQS) and in a real life scenario could be good in 99% of cases.<br><br>However SQS do not implement AMQP (SQS is only a simple queueing system very basic) so we have to use Amazon MQ.<br><br>In terms of containers EKS will always be a better solution than a manual setup of Docker.<br><br>Good solution would have been ECS+AmazonMQ not given here<br><br>Lambda can work with containers, but since there are limitations like 15 minutes limit we can't really consider it as a good solution.<br><br>So B is the least bad solution.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1228595,
          "date": "Tue 11 Jun 2024 20:23",
          "username": "Scheldon",
          "content": "AnswerB<br><br>For me B is a correct solution. In question AMQP is mentioned and Amazon on his doc page about MQ is providing such information:<br>\\\"Amazon MQ is a managed message broker service that provides compatibility with many popular message brokers. We recommend Amazon MQ for migrating applications from existing message brokers that rely on compatibility with APIs such as JMS or protocols such as AMQP 0-9-1, AMQP 1.0, MQTT, OpenWire, and STOMP.\\\"<br>I cannot be coincidence that documentation is mentioning about AMQP.<br><br>https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203103,
          "date": "Sat 27 Apr 2024 14:24",
          "username": "sandordini",
          "content": "I'd go for A.<br>Although the ideal solution and least modification would require B, with heavy rework the application can be (most likely) adopted to ECS+SQS. As it is an AWS exam, not a vendor-agnostic SA exam, A will be the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1168683,
          "date": "Fri 08 Mar 2024 10:14",
          "username": "seetpt",
          "content": "B because only solution with Kubernetes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166787,
          "date": "Tue 05 Mar 2024 23:00",
          "username": "asdfcdsxdfc",
          "content": "Should be B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#815",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming company hosts its platform on Amazon EC2 instances behind Network Load Balancers (NLBs) across multiple AWS Regions. The NLBs can route requests to targets over the internet. The company wants to improve the customer playing experience by reducing end-to-end load time for its global customer base.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#815",
          "answers": [
            {
              "choice": "<p>Create Application Load Balancers (ALBs) in each Region to replace the existing NLBs. Register the existing EC2 instances as targets for the ALBs in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Route 53 to route equally weighted traffic to the NLBs in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create additional NLBs and EC2 instances in other Regions where the company has large customer bases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a standard accelerator in AWS Global Accelerator. Configure the existing NLBs as target endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 815 discussion",
      "discusstion": [
        {
          "id": 1175765,
          "date": "Sun 17 Mar 2024 12:38",
          "username": "Mikado211",
          "content": "In such situation if you had an ALB you would use Cloudfront<br>Since you have a NLB you use AWS Global Accelerator<br>So D.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1166788,
          "date": "Tue 05 Mar 2024 23:01",
          "username": "asdfcdsxdfc",
          "content": "Should be D",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1228599,
          "date": "Tue 11 Jun 2024 20:27",
          "username": "Scheldon",
          "content": "AnswerD<br><br>Usage of Global Accelerator should help here.<br>\\\"<br>Acceleration for latency-sensitive applications<br>Many applications, especially in areas such as gaming, media, mobile apps, ad-tech, and financials, require very low latency for a great user experience. To improve the user experience, Global Accelerator directs user traffic to the application endpoint that is nearest to the client, which reduces internet latency and jitter. Global Accelerator routes traffic to the closest edge location by using Anycast, and then routes it to the closest regional endpoint over the AWS global network. Global Accelerator quickly reacts to changes in network performance to improve your users' application performance.<br>\\\"<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-benefits-of-migrating.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1168684,
          "date": "Fri 08 Mar 2024 10:15",
          "username": "seetpt",
          "content": "Agree with D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#816",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises application that uses SFTP to collect financial data from multiple vendors. The company is migrating to the AWS Cloud. The company has created an application that uses Amazon S3 APIs to upload files from vendors.<br><br>Some vendors run their systems on legacy applications that do not support S3 APIs. The vendors want to continue to use SFTP-based applications to upload data. The company wants to use managed services for the needs of the vendors that use legacy applications.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#816",
          "answers": [
            {
              "choice": "<p>Create an AWS Database Migration Service (AWS DMS) instance to replicate data from the storage of the vendors that use legacy applications to Amazon S3. Provide the vendors with the credentials to access the AWS DMS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family endpoint for vendors that use legacy applications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon EC2 instance to run an SFTP server. Instruct the vendors that use legacy applications to use the SFTP server to upload data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon S3 File Gateway for vendors that use legacy applications to upload files to an SMB file share.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 816 discussion",
      "discusstion": [
        {
          "id": 1166789,
          "date": "Tue 05 Mar 2024 23:03",
          "username": "asdfcdsxdfc",
          "content": "B is correct",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332231,
          "date": "Fri 27 Dec 2024 06:03",
          "username": "LeonSauveterre",
          "content": "A - DMS is designed for database migrations, not for file-based SFTP uploads.<br>B - AWS Transfer Family is a fully managed service that supports SFTP, FTPS, and FTP protocols.<br>C - OK but significant operational overhead.<br>D - S3 File Gateway supports SMB and NFS, not SFTP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266822,
          "date": "Fri 16 Aug 2024 07:02",
          "username": "Johnoppong101",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1205952,
          "date": "Fri 03 May 2024 08:26",
          "username": "Sergiuss95",
          "content": "Explanation:<br><br>AWS Transfer Family is a fully managed service that allows you to set up SFTP, FTPS, and FTP endpoints for accessing Amazon S3 and Amazon EFS storage.<br>By creating an AWS Transfer Family endpoint, the company can provide vendors with the familiar SFTP interface to upload data directly to Amazon S3 without requiring them to make any changes to their legacy applications.<br>This solution eliminates the need for the company to manage and maintain additional infrastructure such as EC2 instances or file gateways.<br>AWS Transfer Family handles scalability, availability, and security, reducing operational overhead for the company.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1168686,
          "date": "Fri 08 Mar 2024 10:16",
          "username": "seetpt",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#817",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A marketing team wants to build a campaign for an upcoming multi-sport event. The team has news reports from the past five years in PDF format. The team needs a solution to extract insights about the content and the sentiment of the news reports. The solution must use Amazon Textract to process the news reports.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#817",
          "answers": [
            {
              "choice": "<p>Provide the extracted insights to Amazon Athena for analysis. Store the extracted insights and analysis in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the extracted insights in an Amazon DynamoDB table. Use Amazon SageMaker to build a sentiment model.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provide the extracted insights to Amazon Comprehend for analysis. Save the analysis to an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the extracted insights in an Amazon S3 bucket. Use Amazon QuickSight to visualize and analyze the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 817 discussion",
      "discusstion": [
        {
          "id": 1228605,
          "date": "Tue 11 Jun 2024 20:35",
          "username": "Scheldon",
          "content": "AnswerC<br>\\\"<br>Amazon Comprehend uses natural language processing (NLP) to extract insights about the content of documents. It develops insights by recognizing the entities, key phrases, language, sentiments, and other common elements in a document. Use Amazon Comprehend to create new products based on understanding the structure of documents. For example, using Amazon Comprehend you can search social networking feeds for mentions of products or scan an entire document repository for key phrases.<br>\\\"<br>https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202002,
          "date": "Thu 25 Apr 2024 15:11",
          "username": "zinabu",
          "content": "Selected Answer: C<br>amazon comprehend sentiment analysis",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1192645,
          "date": "Wed 10 Apr 2024 05:25",
          "username": "zinabu",
          "content": "Selected Answer: C<br>amazon comprehend sentiment analysis",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1180457,
          "date": "Sat 23 Mar 2024 02:03",
          "username": "alawada",
          "content": "Whenever new PDF files are uploaded to the designated S3 bucket, the Lambda function will be triggered to extract insights using Textract and Comprehend.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1175761,
          "date": "Sun 17 Mar 2024 12:34",
          "username": "Mikado211",
          "content": "When you have words like \\\"sentiment\\\" in a sentence, it's related to Comprehend<br>So C.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1168688,
          "date": "Fri 08 Mar 2024 10:18",
          "username": "seetpt",
          "content": "Maybe C?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166790,
          "date": "Tue 05 Mar 2024 23:07",
          "username": "asdfcdsxdfc",
          "content": "Shouldn't it be C?",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#818",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application runs on Amazon EC2 instances that are in multiple Availability Zones. The application needs to ingest real-time data from third-party applications.<br><br>The company needs a data ingestion solution that places the ingested raw data in an Amazon S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#818",
          "answers": [
            {
              "choice": "<p>Create Amazon Kinesis data streams for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume the Kinesis data streams. Specify the S3 bucket as the destination of the delivery streams.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create database migration tasks in AWS Database Migration Service (AWS DMS). Specify replication instances of the EC2 instances as the source endpoints. Specify the S3 bucket as the target endpoint. Set the migration type to migrate existing data and replicate ongoing changes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create and configure AWS DataSync agents on the EC2 instances. Configure DataSync tasks to transfer data from the EC2 instances to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Direct Connect connection to the application for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume direct PUT operations from the application. Specify the S3 bucket as the destination of the delivery streams.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 818 discussion",
      "discusstion": [
        {
          "id": 1166791,
          "date": "Tue 05 Mar 2024 23:08",
          "username": "asdfcdsxdfc",
          "content": "A is correct",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320100,
          "date": "Sat 30 Nov 2024 07:48",
          "username": "JA2018",
          "content": "Why A?<br><br>Kinesis Data Streams: This is designed for real-time data ingestion, which is exactly what the scenario requires.<br><br>Kinesis Data Firehose: This service can then be used to efficiently deliver the ingested data from Kinesis streams to an S3 bucket, fulfilling the need to store raw data in S3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are incorrect:<br>B. AWS Database Migration Service (DMS):<br>DMS is primarily used for migrating databases, not for real-time data ingestion from third-party applications.<br>C. AWS DataSync:<br>While DataSync can transfer data to S3, it's not optimized for real-time data ingestion and would likely not be the best choice for this scenario.<br>D. AWS Direct Connect:<br>Direct Connect is used for dedicated private network connections between your on-premises network and AWS, not for real-time data ingestion from third-party applications.</li><li>Key points to remember:<br>When dealing with real-time data ingestion, Kinesis Data Streams is generally the preferred solution on AWS.<br>Kinesis Data Firehose can be used to easily stream data from Kinesis to various destinations like S3 buckets.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320101,
          "date": "Sat 30 Nov 2024 07:48",
          "username": "JA2018",
          "content": "Why the other options are incorrect:<br>B. AWS Database Migration Service (DMS):<br>DMS is primarily used for migrating databases, not for real-time data ingestion from third-party applications.<br>C. AWS DataSync:<br>While DataSync can transfer data to S3, it's not optimized for real-time data ingestion and would likely not be the best choice for this scenario.<br>D. AWS Direct Connect:<br>Direct Connect is used for dedicated private network connections between your on-premises network and AWS, not for real-time data ingestion from third-party applications.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Key points to remember:<br>When dealing with real-time data ingestion, Kinesis Data Streams is generally the preferred solution on AWS.<br>Kinesis Data Firehose can be used to easily stream data from Kinesis to various destinations like S3 buckets.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320102,
          "date": "Sat 30 Nov 2024 07:49",
          "username": "JA2018",
          "content": "Key points to remember:<br>When dealing with real-time data ingestion, Kinesis Data Streams is generally the preferred solution on AWS.<br>Kinesis Data Firehose can be used to easily stream data from Kinesis to various destinations like S3 buckets.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1300238,
          "date": "Sun 20 Oct 2024 03:55",
          "username": "mk168898",
          "content": "real time data > amazon kinesis data stream",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1286678,
          "date": "Fri 20 Sep 2024 08:06",
          "username": "MatAlves",
          "content": "- Amazon Kinesis Data Streams: designed for real-time data ingestion.<br>- Kinesis Data Firehose:can consume data from Kinesis Data Streams and automatically deliver it to Amazon S3.<br><br>A is the answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1243110,
          "date": "Sat 06 Jul 2024 03:07",
          "username": "Mayank0502",
          "content": "each ec2 needs to proceed data separately",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1188870,
          "date": "Wed 03 Apr 2024 21:33",
          "username": "xBUGx",
          "content": "A is best solution, but i think the question is saying \\\"The application needs to ingest real-time data from third-party applications.\\\" and the application is run on EC2.<br>so i think we need a solution that works with the application on EC2 for this question?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>DataSync is more suitable for transferring data between on-premises storage systems and AWS, rather than ingesting real-time data. Best solution is A</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1205956,
          "date": "Fri 03 May 2024 08:34",
          "username": "Sergiuss95",
          "content": "DataSync is more suitable for transferring data between on-premises storage systems and AWS, rather than ingesting real-time data. Best solution is A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1168690,
          "date": "Fri 08 Mar 2024 10:19",
          "username": "seetpt",
          "content": "Agree with A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#819",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is receiving data from multiple data sources. The size of the data varies and is expected to increase over time. The current maximum size is 700 KB. The data volume and data size continue to grow as more data sources are added.<br><br>The company decides to use Amazon DynamoDB as the primary database for the application. A solutions architect needs to identify a solution that handles the large data sizes.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#819",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function to filter the data that exceeds DynamoDB item size limits. Store the larger data in an Amazon DocumentDB (with MongoDB compatibility) database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the large data as objects in an Amazon S3 bucket. In a DynamoDB table, create an item that has an attribute that points to the S3 URL of the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Split all incoming large data into a collection of items that have the same partition key. Write the data to a DynamoDB table in a single operation by using the BatchWriteItem API operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that uses gzip compression to compress the large objects as they are written to a DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 819 discussion",
      "discusstion": [
        {
          "id": 1167178,
          "date": "Wed 06 Mar 2024 14:28",
          "username": "Neung983",
          "content": "option B is the most operationally efficient solution for handling large data sizes in Amazon DynamoDB.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1168692,
          "date": "Fri 08 Mar 2024 10:20",
          "username": "seetpt",
          "content": "B is correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332248,
          "date": "Fri 27 Dec 2024 06:46",
          "username": "LeonSauveterre",
          "content": "A - Introducing another database. No need.<br>B - Decoupling the large data storage (S3) from the metadata or smaller structured data (DynamoDB) is an AWS-recommended pattern.<br>C - OK but this is too complicated.<br>D - Compression does not guarantee that the data will always fit within DynamoDB's 400 KB limit.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1228623,
          "date": "Tue 11 Jun 2024 20:56",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Compresion of data in DynamoDB is a good idea especially for text data link from forum, but to do that we do not need AWS Lambda if I'm not wrong.<br>In other head Storing big object on S3 and seving URL to it in DynamoDB is one of best practices mentioned by Amazon. Hence we do not know what kind of data we are storing in DB and how big objects will be in the future option B looks like the best solution.<br>https://aws.amazon.com/blogs/database/large-object-storage-strategies-for-amazon-dynamodb/ <<<< Read Option 2<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-use-s3-too.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1205961,
          "date": "Fri 03 May 2024 08:44",
          "username": "Sergiuss95",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-use-s3-too.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#820",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application relies on hundreds of cron jobs that run between 1 and 20 minutes on different recurring schedules throughout the day.<br><br>The company wants a solution to schedule and run the cron jobs on AWS with minimal refactoring. The solution must support running the cron jobs in response to an event in the future.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#820",
          "answers": [
            {
              "choice": "<p>Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring schedule. Run the cron job tasks as AWS Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a container image for the cron jobs. Use AWS Batch on Amazon Elastic Container Service (Amazon ECS) with a scheduling policy to run the cron jobs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring schedule. Run the cron job tasks on AWS Fargate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a container image for the cron jobs. Create a workflow in AWS Step Functions that uses a Wait state to run the cron jobs at a specified time. Use the RunTask action to run the cron job tasks on AWS Fargate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 820 discussion",
      "discusstion": [
        {
          "id": 1178144,
          "date": "Fri 20 Sep 2024 09:57",
          "username": "Kezuko",
          "content": "Give yourself a pat on the back when you reach this question, its been a long run<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I finally managed to get through the last question, then refreshed the page , and they have added more questions.</li><li>I know right. Where did they get so many questions? It's been a long run but too long now...</li></ul>",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 1179174,
          "date": "Sat 21 Sep 2024 12:00",
          "username": "Drew3000",
          "content": "I finally managed to get through the last question, then refreshed the page , and they have added more questions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I know right. Where did they get so many questions? It's been a long run but too long now...</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1332251,
          "date": "Fri 27 Dec 2024 07:10",
          "username": "LeonSauveterre",
          "content": "I know right. Where did they get so many questions? It's been a long run but too long now...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1214635,
          "date": "Thu 21 Nov 2024 03:13",
          "username": "Linuslin",
          "content": "Lambda has 15 mins limit, so A is out.<br><br>B works, but you have to run highly-available virtual machines or containers waiting for the event to happen.<br><br>C is the best answer in this question, with AWS Fargate allows you to pay for only what you use and free you from provisioning, configuring, and scaling clusters of Amazon EC2 instances.<br><br>https://aws.amazon.com/blogs/containers/migrate-cron-jobs-to-event-driven-architectures-using-amazon-elastic-container-service-and-amazon-eventbridge/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1170868,
          "date": "Wed 11 Sep 2024 07:38",
          "username": "cvoiceip",
          "content": "Ans : Chttps://aws.amazon.com/blogs/containers/migrate-cron-jobs-to-event-driven-architectures-using-amazon-elastic-container-service-and-amazon-eventbridge/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1168694,
          "date": "Sun 08 Sep 2024 09:22",
          "username": "seetpt",
          "content": "C because lambda has 15min time limit.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166797,
          "date": "Thu 05 Sep 2024 22:22",
          "username": "asdfcdsxdfc",
          "content": "its either A or C. C looks correct because lambda works for 15 mins and the question says between 1-20",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#821",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Salesforce. The company needs to load existing data and ongoing data changes from Salesforce to Amazon Redshift for analysis. The company does not want the data to travel over the public internet.<br><br>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#821",
          "answers": [
            {
              "choice": "<p>Establish a VPN connection from the VPC to Salesforce. Use AWS Glue DataBrew to transfer data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Establish an AWS Direct Connect connection from the VPC to Salesforce. Use AWS Glue DataBrew to transfer data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS PrivateLink connection in the VPC to Salesforce. Use Amazon AppFlow to transfer data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC peering connection to Salesforce. Use Amazon AppFlow to transfer data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 821 discussion",
      "discusstion": [
        {
          "id": 1332253,
          "date": "Fri 27 Dec 2024 07:17",
          "username": "LeonSauveterre",
          "content": "A - VPN connection, public internet, no.<br>B - Significant setup effort and cost. Also, DataBrew is not suitable for loading ongoing data changes.<br>C - Amazon AppFlow is a fully managed integration service that natively supports Salesforce and Amazon Redshift.<br>D - VPC peering is for connecting two AWS VPCs. Salesforce is external to AWS, so no.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also, maybe this will help you along the way (things after \\\"&gt;\\\" are their disadvantages):<br><br>1. VPN Connection: For secure, encrypted traffic between on-premises and AWS over the public internet. &gt; Relies on public internet (higher latency)<br><br>2. Direct Connect: For dedicated private network connectivity between on-premises and AWS (like data centers with large workloads). &gt; Higher cost, longer setup time.<br><br>3. PrivateLink: For secure private connectivity to AWS services or third-party services (like Salesforce) within AWS. &gt; Simple setup but limited to services configured with PrivateLink (not general connectivity).<br><br>4. VPC Peering: For direct connectivity between two AWS VPCs (like multi-account or region scenarios). &gt; Does not support transitive connections; not suitable for external services like Salesforce.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332255,
          "date": "Fri 27 Dec 2024 07:21",
          "username": "LeonSauveterre",
          "content": "Also, maybe this will help you along the way (things after \\\">\\\" are their disadvantages):<br><br>1. VPN Connection: For secure, encrypted traffic between on-premises and AWS over the public internet. > Relies on public internet (higher latency)<br><br>2. Direct Connect: For dedicated private network connectivity between on-premises and AWS (like data centers with large workloads). > Higher cost, longer setup time.<br><br>3. PrivateLink: For secure private connectivity to AWS services or third-party services (like Salesforce) within AWS. > Simple setup but limited to services configured with PrivateLink (not general connectivity).<br><br>4. VPC Peering: For direct connectivity between two AWS VPCs (like multi-account or region scenarios). > Does not support transitive connections; not suitable for external services like Salesforce.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1300245,
          "date": "Sun 20 Oct 2024 04:05",
          "username": "mk168898",
          "content": "3rd party SaaS salesforce integration > Use AWS AppFlow<br>So left C and D<br>Not D because VPC Peering need 2 VPC and 3rd party SaaS does not have a VPC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1286681,
          "date": "Fri 20 Sep 2024 08:19",
          "username": "MatAlves",
          "content": "AWS PrivateLink: This service enables private connectivity between VPCs and supported AWS services, effectively keeping data off the public internet. It allows secure communication without exposing your data to the internet.<br><br>Amazon AppFlow: This is a fully managed integration service that simplifies data transfer between SaaS applications (like Salesforce) and AWS services (like Amazon Redshift).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1266833,
          "date": "Fri 16 Aug 2024 07:24",
          "username": "Johnoppong101",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231259,
          "date": "Sun 16 Jun 2024 10:06",
          "username": "KennethNg923",
          "content": "Private link for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1227772,
          "date": "Mon 10 Jun 2024 11:40",
          "username": "Scheldon",
          "content": "AnswerC<br>To connect your own VPC with third-party VPC we need to use ProvateLink.<br><br>AWS PrivateLink is a highly available, scalable technology that you can use to privately connect your VPC to services as if they were in your VPC. You do not need to use an internet gateway, NAT device, public IP address, AWS Direct Connect connection, or AWS Site-to-Site VPN connection to allow communication with the service from your private subnets. Therefore, you control the specific API endpoints, sites, and services that are reachable from your VPC.<br><br>https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1190985,
          "date": "Sun 07 Apr 2024 15:49",
          "username": "Kaula",
          "content": "Should be C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180876,
          "date": "Sat 23 Mar 2024 14:07",
          "username": "Kaula",
          "content": "C<br>https://docs.aws.amazon.com/connect/latest/adminguide/integrate-salesforce-tasks.html<br>https://docs.aws.amazon.com/connect/latest/adminguide/vpc-interface-endpoints.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#822",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its application to AWS. The application runs on Amazon EC2 Linux instances in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon Elastic File System (Amazon EFS) file system that uses EFS Standard-Infrequent Access storage. The application indexes the company's files. The index is stored in an Amazon RDS database.<br><br>The company needs to optimize storage costs with some application and services changes.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#822",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket that uses an Intelligent-Tiering lifecycle policy. Copy all files to the S3 bucket. Update the application to use Amazon S3 API to store and retrieve files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon FSx for Windows File Server file shares. Update the application to use CIFS protocol to store and retrieve files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon FSx for OpenZFS file system shares. Update the application to use the new mount point to store and retrieve files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket that uses S3 Glacier Flexible Retrieval. Copy all files to the S3 bucket. Update the application to use Amazon S3 API to store and retrieve files as standard retrievals.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 822 discussion",
      "discusstion": [
        {
          "id": 1188872,
          "date": "Wed 03 Apr 2024 21:40",
          "username": "xBUGx",
          "content": "i go with A since there is no other better options",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1203121,
          "date": "Sat 27 Apr 2024 14:53",
          "username": "sandordini",
          "content": "B, C, D off.<br>B - Windows<br>C - OpenZFS Costs ~ NFS Costs *3 (optimized mainly for high-performance Data analysis)<br>D - Glacier Standard retrieval: 12 Hrs<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Glacier standard retrieval is 5 hrs and not 12. It is glacier deep archive standard that is 12 hours.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1248767,
          "date": "Tue 16 Jul 2024 10:32",
          "username": "TeamACT",
          "content": "Glacier standard retrieval is 5 hrs and not 12. It is glacier deep archive standard that is 12 hours.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1300248,
          "date": "Sun 20 Oct 2024 04:07",
          "username": "mk168898",
          "content": "Chose A because optimise storage costs > s3 bucket intelligent tiering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1286682,
          "date": "Fri 20 Sep 2024 08:25",
          "username": "MatAlves",
          "content": "Since the company is ok with \\\"some application and services changes\\\", then A is definitely the most cost-effective option.<br><br>D can take up to few hours to complete retrievals.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1266838,
          "date": "Fri 16 Aug 2024 07:36",
          "username": "Johnoppong101",
          "content": "EFS Infrequent access -> milliseconds retrieval time, can`t replace with 12hrs for Glacier.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231260,
          "date": "Sun 16 Jun 2024 10:08",
          "username": "KennethNg923",
          "content": "optimize storage costs with some application and services changes -> Intelligent Tiering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1227807,
          "date": "Mon 10 Jun 2024 12:36",
          "username": "Scheldon",
          "content": "AnswerA<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1182576,
          "date": "Mon 25 Mar 2024 15:44",
          "username": "TruthWS",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1181366,
          "date": "Sun 24 Mar 2024 09:05",
          "username": "Kenneth99",
          "content": "should be A?",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#823",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A robotics company is designing a solution for medical surgery. The robots will use advanced sensors, cameras, and AI algorithms to perceive their environment and to complete surgeries.<br><br>The company needs a public load balancer in the AWS Cloud that will ensure seamless communication with backend services. The load balancer must be capable of routing traffic based on the query strings to different target groups. The traffic must also be encrypted.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#823",
          "answers": [
            {
              "choice": "<p>Use a Network Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use query parameter-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Gateway Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM). Attach the certificate to the load balancer. Use HTTP path-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Application Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use query parameter-based routing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Network Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM). Attach the certificate to the load balancer. Use query parameter-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 823 discussion",
      "discusstion": [
        {
          "id": 1183074,
          "date": "Tue 26 Mar 2024 07:11",
          "username": "TruthWS",
          "content": "Option C - parameter is not a thing NLB can process",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1332261,
          "date": "Fri 27 Dec 2024 07:40",
          "username": "LeonSauveterre",
          "content": "Neither Network Load Balancer nor Gateway Load Balancer supports query parameter-based routing.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300250,
          "date": "Sun 20 Oct 2024 04:09",
          "username": "mk168898",
          "content": "only ALB can route traffic based on query parameter, NLB cannot.<br>So C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1227835,
          "date": "Mon 10 Jun 2024 13:38",
          "username": "Scheldon",
          "content": "AnswerC<br><br>I was thinking that it will be network LB but after checks it occurs that only Application LB is able to redirect/forward traffic based on query string. and for encrypted traffic ACM is needed<br><br>We recommend that you create certificates for your load balancer using AWS Certificate Manager (ACM). ACM supports RSA certificates with 2048, 3072, and 4096-bit key lengths, and all ECDSA certificates. ACM integrates with Elastic Load Balancing so that you can deploy the certificate on your load balancer. For more information, see the AWS Certificate Manager User Guide.<br><br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#rule-condition-types<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180460,
          "date": "Sat 23 Mar 2024 02:21",
          "username": "alawada",
          "content": "Provision an Application Load Balancer (ALB) in the AWS Cloud. ALB is a Layer 7 load balancer that supports advanced routing features, including path-based routing.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#824",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on a single Amazon EC2 instance. The application uses a MySQL database that runs on the same EC2 instance. The company needs a highly available and automatically scalable solution to handle increased traffic.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#824",
          "answers": [
            {
              "choice": "<p>Deploy the application to EC2 instances that run in an Auto Scaling group behind an Application Load Balancer. Create an Amazon Redshift cluster that has multiple MySQL-compatible nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application to EC2 instances that are configured as a target group behind an Application Load Balancer. Create an Amazon RDS for MySQL cluster that has multiple instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application to EC2 instances that run in an Auto Scaling group behind an Application Load Balancer. Create an Amazon Aurora Serverless MySQL cluster for the database layer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application to EC2 instances that are configured as a target group behind an Application Load Balancer. Create an Amazon ElastiCache for Redis cluster that uses the MySQL connector.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 824 discussion",
      "discusstion": [
        {
          "id": 1179027,
          "date": "Thu 21 Mar 2024 08:10",
          "username": "haci",
          "content": "Target groups are just a group of Ec2 instances. Target groups are closely associated with ELB and not ASG. We can just use ELB and Target groups to route requests to EC2 instances. With this setup, there is no autoscaling which means instances cannot be added or removed when your load increases/decreases.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1220709,
          "date": "Wed 29 May 2024 07:19",
          "username": "sheilawu",
          "content": "scalable solution Amazon Aurora Serverless",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332262,
          "date": "Fri 27 Dec 2024 07:44",
          "username": "LeonSauveterre",
          "content": "I don't see how Redshift or ElastiCache relates to the question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1286687,
          "date": "Fri 20 Sep 2024 08:37",
          "username": "MatAlves",
          "content": "Option B:<br>Target Group: it doesn't inherently imply automatic scaling. You would need to manage scaling separately, either manually or through other mechanisms like scheduled actions.<br><br>Option C:<br>Auto Scaling Group: This ensures that the EC2 instances can automatically scale in or out based on traffic and demand.<br><br>\\\"The company needs a highly available and automatically scalable solution\\\" > C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1227889,
          "date": "Mon 10 Jun 2024 15:30",
          "username": "Scheldon",
          "content": "AnswerC<br><br>highly available and automatically scalable solutionAuto Scale for EC2 in front which we will have ALB and Aurora Server less will give us perfect decoupled solution in which we can increase amount of servers per need and in case of server failure AutoScale will run new EC2 instance",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1184744,
          "date": "Thu 28 Mar 2024 13:02",
          "username": "camps",
          "content": "It's C!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1183076,
          "date": "Tue 26 Mar 2024 07:14",
          "username": "TruthWS",
          "content": "Option C - keywords HA, automatically scalable",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180461,
          "date": "Sat 23 Mar 2024 02:24",
          "username": "alawada",
          "content": "C Is what I will go for",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#825",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate data to an Amazon S3 bucket. The data must be encrypted at rest within the S3 bucket. The encryption key must be rotated automatically every year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#825",
          "answers": [
            {
              "choice": "<p>Migrate the data to the S3 bucket. Use server-side encryption with Amazon S3 managed keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Migrate the data to the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket's default encryption behavior to use the customer managed KMS key. Migrate the data to the S3 bucket. Manually rotate the KMS key every year.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use customer key material to encrypt the data. Migrate the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 825 discussion",
      "discusstion": [
        {
          "id": 1330769,
          "date": "Mon 23 Dec 2024 11:11",
          "username": "EllenLiu",
          "content": "https://repost.aws/questions/QUES_1VN01TU-eRSO3LXergA/s3-managed-key-sse-s3-rotation-period",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1289435,
          "date": "Thu 26 Sep 2024 14:33",
          "username": "JoeTromundo",
          "content": "The anwser can't be A. In addition to other justifications written here in the comments, if the data is copied before enabling encryption, this data will not be encrypted.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266844,
          "date": "Fri 16 Aug 2024 07:50",
          "username": "Johnoppong101",
          "content": "B is the Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1257463,
          "date": "Mon 29 Jul 2024 14:22",
          "username": "n999",
          "content": "It's said should be encrypted within S3 not before so A its correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Me: Does SSE-S3 allow custom key rotation scheduling?<br>Gemini: No, SSE-S3 does not allow for custom key rotation scheduling.<br>Gemini: If you require more granular control over key rotation, you should consider using Server-Side Encryption with AWS KMS (SSE-KMS)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1266842,
          "date": "Fri 16 Aug 2024 07:49",
          "username": "Johnoppong101",
          "content": "Me: Does SSE-S3 allow custom key rotation scheduling?<br>Gemini: No, SSE-S3 does not allow for custom key rotation scheduling.<br>Gemini: If you require more granular control over key rotation, you should consider using Server-Side Encryption with AWS KMS (SSE-KMS)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1227919,
          "date": "Mon 10 Jun 2024 16:25",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Looks like key rotation is only possible when KMS is in use. If we will use AWS managed keys Rotation is forced and if we will not provide any specifications regarding rotation time for key, KMS will rotate key every 365days.https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1220710,
          "date": "Wed 29 May 2024 07:20",
          "username": "sheilawu",
          "content": "If you see rotation, SEE-SE is out",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1215384,
          "date": "Wed 22 May 2024 06:03",
          "username": "f07ed8f",
          "content": "SSE-S3 does not rotate the key EVERY YEAR and it is not fit the requirement",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1214766,
          "date": "Tue 21 May 2024 09:02",
          "username": "Linuslin",
          "content": "This question is flawed.<br>SSE-S3 is not SSE-KMS, so it will not automatic rotation every year, only KMS will. (check link below)<br>But the question says \\\"LEAST operational overhead\\\", I think it want us to choose SSE-S3, so I will pick option A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SSE-S3 is the simplest method to use as encryption keys are handled and managed by AWS. But is not what we're saying about \\\"AWS managed key\\\", so it will not automatic rotation every year.<br>https://catalog.us-east-1.prod.workshops.aws/workshops/aad9ff1e-b607-45bc-893f-121ea5224f24/en-US/s3/serverside/sses3<br><br>\\\"AWS managed keys\\\" are \\\"KMS keys\\\" in your account. And will (required) automatic rotation every year.<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt</li><li>there are several pages (not the official aws page) said its 365 days. But, the official page does not mention about the rotation period is 365 days</li><li>SSE-KMS is similar to SSE-S3 but comes with some additional benefits over SSE-S3. And SSE-KMS is \\\"AWS managed key.\\\"<br>So it will (required) automatic rotation every year.<br>https://catalog.us-east-1.prod.workshops.aws/workshops/aad9ff1e-b607-45bc-893f-121ea5224f24/en-US/s3/serverside/ssekms<br><br>Difference between AWS S3 Bucket Encryption SSE-C , SSE-S3, SSE-KMS.<br>https://awstip.com/5-minutes-to-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms-e2fb07b05cb3</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1214767,
          "date": "Tue 21 May 2024 09:03",
          "username": "Linuslin",
          "content": "SSE-S3 is the simplest method to use as encryption keys are handled and managed by AWS. But is not what we're saying about \\\"AWS managed key\\\", so it will not automatic rotation every year.<br>https://catalog.us-east-1.prod.workshops.aws/workshops/aad9ff1e-b607-45bc-893f-121ea5224f24/en-US/s3/serverside/sses3<br><br>\\\"AWS managed keys\\\" are \\\"KMS keys\\\" in your account. And will (required) automatic rotation every year.<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>there are several pages (not the official aws page) said its 365 days. But, the official page does not mention about the rotation period is 365 days</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1256502,
          "date": "Sun 28 Jul 2024 00:11",
          "username": "EdricHoang",
          "content": "there are several pages (not the official aws page) said its 365 days. But, the official page does not mention about the rotation period is 365 days",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1214768,
          "date": "Tue 21 May 2024 09:03",
          "username": "Linuslin",
          "content": "SSE-KMS is similar to SSE-S3 but comes with some additional benefits over SSE-S3. And SSE-KMS is \\\"AWS managed key.\\\"<br>So it will (required) automatic rotation every year.<br>https://catalog.us-east-1.prod.workshops.aws/workshops/aad9ff1e-b607-45bc-893f-121ea5224f24/en-US/s3/serverside/ssekms<br><br>Difference between AWS S3 Bucket Encryption SSE-C , SSE-S3, SSE-KMS.<br>https://awstip.com/5-minutes-to-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms-e2fb07b05cb3",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1213833,
          "date": "Sun 19 May 2024 16:19",
          "username": "TwinSpark",
          "content": "I will go for B.<br>A it's somehow wrong for coupl of reason:<br>1- Encription must be specified before to transfer the data (even if from 1/23 it's automatically for every bucket, so actualy make no sense to specify it)<br>2- SSE-S3 keys are regurarly rotated but aws do not specify when (https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html )<br>IMO if need to be compliance with rotation period better use Costumer managed key as stated from aws support in 01/2024<br>https://repost.aws/questions/QUES_1VN01TU-eRSO3LXergA/s3-managed-key-sse-s3-rotation-period",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1212900,
          "date": "Fri 17 May 2024 15:08",
          "username": "bujuman",
          "content": "Considering the statement \\\"the LEAST operational overhead\\\" we could go for option A due to the following AWS managed keys capabilities<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1203764,
          "date": "Mon 29 Apr 2024 04:16",
          "username": "f04dc74",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1203126,
          "date": "Sat 27 Apr 2024 15:08",
          "username": "sandordini",
          "content": "From May 2022 the scheduled rotation is 1 year (SSE-S3)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1196144,
          "date": "Mon 15 Apr 2024 19:14",
          "username": "3b196fc",
          "content": "A is wrong because you need to set the encryp options before send the data to S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1184745,
          "date": "Thu 28 Mar 2024 13:03",
          "username": "camps",
          "content": "It's B.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182584,
          "date": "Mon 25 Mar 2024 15:58",
          "username": "TruthWS",
          "content": "A is correct because SSE-S3 help decrease the management",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1181112,
          "date": "Sat 23 Mar 2024 20:47",
          "username": "Yushib",
          "content": "B is the right one",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1179031,
          "date": "Thu 21 Mar 2024 08:21",
          "username": "haci",
          "content": "Same with Question #202, I'll go with B but not sure",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#826",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating applications from an on-premises Microsoft Active Directory that the company manages to AWS. The company deploys the applications in multiple AWS accounts. The company uses AWS Organizations to manage the accounts centrally.<br><br>The company's security team needs a single sign-on solution across all the company's AWS accounts. The company must continue to manage users and groups that are in the on-premises Active Directory.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#826",
          "answers": [
            {
              "choice": "<p>Create an Enterprise Edition Active Directory in AWS Directory Service for Microsoft Active Directory. Configure the Active Directory to be the identity source for AWS IAM Identity Center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS IAM Identity Center. Configure a two-way forest trust relationship to connect the company's self-managed Active Directory with IAM Identity Center by using AWS Directory Service for Microsoft Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Directory Service and create a two-way trust relationship with the company's self-managed Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an identity provider (IdP) on Amazon EC2. Link the IdP as an identity source within AWS IAM Identity Center.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 826 discussion",
      "discusstion": [
        {
          "id": 1332265,
          "date": "Fri 27 Dec 2024 07:56",
          "username": "LeonSauveterre",
          "content": "AWS IAM Identity Center (formerly AWS SSO): Provides SSO across multiple AWS accounts in an organization. By configuring a 2-way forest trust relationship between the on-premises AD and MAD, IAM Identity Center can integrate seamlessly with the existing AD to manage authentication and authorization, allowing the company to retain its existing on-premises AD as the primary identity source while extending to AWS.<br><br>A - This creates a separate directory in AWS, requiring migration of users and groups, which fails to continue using the on-premises AD.<br>C - IAM Identity Center is still needed for SSO (single sign-on) functionality.<br>D - OK but so much overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1303991,
          "date": "Mon 28 Oct 2024 14:54",
          "username": "LuongTo",
          "content": "why C is out?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1236608,
          "date": "Mon 24 Jun 2024 22:37",
          "username": "EdricHoang",
          "content": "\\\"continue to manage users and groups that are in the on-premises Active Directory\\\"<br>I go for B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1227923,
          "date": "Mon 10 Jun 2024 16:37",
          "username": "Scheldon",
          "content": "AnswerB<br><br>AWS Directory Service lets you run Microsoft Active Directory (AD) as a managed service. AWS Directory Service for Microsoft Active Directory, also referred to as AWS Managed Microsoft AD, is powered by Windows Server 2019.<br>With AWS Managed Microsoft AD, you can run directory-aware workloads in the AWS Cloud, including Microsoft SharePoint and custom .NET and SQL Server-based applications. You can also configure a trust relationship between AWS Managed Microsoft AD in the AWS Cloud and your existing on-premises Microsoft Active Directory, providing users and groups with access to resources in either domain, using AWS IAM Identity Center.<br><br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180886,
          "date": "Sat 23 Mar 2024 14:29",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_setup_trust.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1179033,
          "date": "Thu 21 Mar 2024 08:26",
          "username": "haci",
          "content": "Same with Q-28",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#827",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to deploy its application on an Amazon Aurora PostgreSQL Serverless v2 cluster. The application will receive large amounts of traffic. The company wants to optimize the storage performance of the cluster as the load on the application increases.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#827",
          "answers": [
            {
              "choice": "<p>Configure the cluster to use the Aurora Standard storage configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the cluster storage type as Provisioned IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the cluster storage type as General Purpose.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the cluster to use the Aurora I/O-Optimized storage configuration.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 827 discussion",
      "discusstion": [
        {
          "id": 1228059,
          "date": "Mon 10 Jun 2024 21:01",
          "username": "Scheldon",
          "content": "AnswerD<br><br>For Aurora we have 2 storage type/options:<br>A - Standard<br>B -- I/O-Optimized<br>hence answers B and C options are incorrect.<br>Because customer inform us that there will be a big amount of traffic for their application I would go with I/O-Optimized. Maybe we are giving more $$ per GB-month but we are not paing for I/O operations/request.<br><br>https://aws.amazon.com/rds/aurora/pricing/<br><br>In general question is not precise and it is hard to say which option will be more beneficial (cost effective)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1300255,
          "date": "Sun 20 Oct 2024 04:23",
          "username": "mk168898",
          "content": "Aurora only have:<br> -> Standard<br> -> I/O-Optimized (need optimise storage thats why i chose this)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1266851,
          "date": "Fri 16 Aug 2024 08:10",
          "username": "Johnoppong101",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1189832,
          "date": "Fri 05 Apr 2024 11:21",
          "username": "joseantoniopolo",
          "content": "Aurora I/O-Optimized =E2=80=93 Improved price performance and predictability for I/O-intensive applications. You pay only for the usage and storage of your DB clusters, with no additional charges for read and write I/O operations.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1186288,
          "date": "Sat 30 Mar 2024 19:49",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1186138,
          "date": "Sat 30 Mar 2024 15:21",
          "username": "JCAWS",
          "content": "D is more suitable",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1184749,
          "date": "Thu 28 Mar 2024 13:09",
          "username": "camps",
          "content": "I would choose D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1182485,
          "date": "Mon 25 Mar 2024 14:18",
          "username": "TruthWS",
          "content": "I think A is true answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1181871,
          "date": "Sun 24 Mar 2024 18:00",
          "username": "xBUGx",
          "content": "https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-i-o-optimized/<br>Aurora I/O-Optimized offers up to 40% cost savings for I/O-intensive applications where I/O charges exceed 25% of the total Aurora database spend.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1180902,
          "date": "Sat 23 Mar 2024 14:38",
          "username": "Kaula",
          "content": "Agree with haci",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1179036,
          "date": "Thu 21 Mar 2024 08:35",
          "username": "haci",
          "content": "The traffic load is not defined well enough to decide which storage type to use.<br><br>General Purpose (SSD) storage suits many workloads, including small to medium-sized databases and it is cost-effective.<br><br>Provisioned IOPS (PIOPS) storage is the highest-performing option available for RDS instances. With Provisioned IOPS storage, you can provision a specific amount of IOPS (input/output operations per second) based on your application's needs. But here we don't know the amount of requests.<br><br>So since the question is asking for cost-effective I'll go with C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#828",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company that runs on AWS has designed its security controls to meet industry standards. The industry standards include the National Institute of Standards and Technology (NIST) and the Payment Card Industry Data Security Standard (PCI DSS).<br><br>The company's third-party auditors need proof that the designed controls have been implemented and are functioning correctly. The company has hundreds of AWS accounts in a single organization in AWS Organizations. The company needs to monitor the current state of the controls across accounts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#828",
          "answers": [
            {
              "choice": "<p>Designate one account as the Amazon Inspector delegated administrator account from the Organizations management account. Integrate Inspector with Organizations to discover and scan resources across all AWS accounts. Enable Inspector industry standards for NIST and PCI DSS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Designate one account as the Amazon GuardDuty delegated administrator account from the Organizations management account. In the designated GuardDuty administrator account, enable GuardDuty to protect all member accounts. Enable GuardDuty industry standards for NIST and PCI DSS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS CloudTrail organization trail in the Organizations management account. Designate one account as the compliance account. Enable CloudTrail security standards for NIST and PCI DSS in the compliance account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Designate one account as the AWS Security Hub delegated administrator account from the Organizations management account. In the designated Security Hub administrator account, enable Security Hub for all member accounts. Enable Security Hub standards for NIST and PCI DSS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 828 discussion",
      "discusstion": [
        {
          "id": 1203128,
          "date": "Sat 27 Apr 2024 15:19",
          "username": "sandordini",
          "content": "Security Hub: assess your AWS environment against security industry standards and best practices.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1300258,
          "date": "Sun 20 Oct 2024 04:25",
          "username": "mk168898",
          "content": "security industry standards > security hub",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1266854,
          "date": "Fri 16 Aug 2024 08:17",
          "username": "Johnoppong101",
          "content": "NIST, PCI DSS Compliance + AWS accounts -> Security Hub",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1180904,
          "date": "Sat 23 Mar 2024 14:44",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#829",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon S3 bucket as its data lake storage platform. The S3 bucket contains a massive amount of data that is accessed randomly by multiple teams and hundreds of applications. The company wants to reduce the S3 storage costs and provide immediate availability for frequently accessed objects.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#829",
          "answers": [
            {
              "choice": "<p>Create an S3 Lifecycle rule to transition objects to the S3 Intelligent-Tiering storage class.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store objects in Amazon S3 Glacier. Use S3 Select to provide applications with access to the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use data from S3 storage class analysis to create S3 Lifecycle rules to automatically transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an AWS Lambda function to transition objects to the S3 Standard storage class when they are accessed by an application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 829 discussion",
      "discusstion": [
        {
          "id": 1300261,
          "date": "Sun 20 Oct 2024 04:28",
          "username": "mk168898",
          "content": "selected A because only option that don't violate the \\\"need immediate access\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1286694,
          "date": "Fri 20 Sep 2024 08:58",
          "username": "MatAlves",
          "content": "\\\"data that is accessed randomly\\\" S3 Intelligent-Tiering storage class.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1228064,
          "date": "Mon 10 Jun 2024 21:11",
          "username": "Scheldon",
          "content": "AnswerA<br><br>The Amazon S3 Intelligent-Tiering storage class automatically stores objects in three access tiers. One tier is optimized for frequent access, one lower-cost tier is optimized for infrequent access, and another very low-cost tier is optimized for rarely accessed data. For a low monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects to the Infrequent Access tier when they haven't been accessed for 30 consecutive days. After 90 days of no access, the objects are moved to the Archive Instant Access tier without performance impact or operational overhead.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1210178,
          "date": "Sun 12 May 2024 10:18",
          "username": "Hkayne",
          "content": "File accessed randomly by multiple teamsintelligent tiering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1180909,
          "date": "Sat 23 Mar 2024 14:50",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-managing.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#830",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 5 TB of datasets. The datasets consist of 1 million user profiles and 10 million connections. The user profiles have connections as many-to-many relationships. The company needs a performance efficient way to find mutual connections up to five levels.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#830",
          "answers": [
            {
              "choice": "<p>Use an Amazon S3 bucket to store the datasets. Use Amazon Athena to perform SQL JOIN queries to find connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Neptune to store the datasets with edges and vertices. Query the data to find connections.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon S3 bucket to store the datasets. Use Amazon QuickSight to visualize connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS to store the datasets with multiple tables. Perform SQL JOIN queries to find connections.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 830 discussion",
      "discusstion": [
        {
          "id": 1180915,
          "date": "Sat 23 Mar 2024 14:59",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/neptune/latest/userguide/notebooks-visualization.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1300263,
          "date": "Sun 20 Oct 2024 04:29",
          "username": "mk168898",
          "content": "everytime i see some social network related qns i immediately look for amazon neptune",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203132,
          "date": "Sat 27 Apr 2024 15:26",
          "username": "sandordini",
          "content": "Neptune: A Graph database stores nodes and relationships instead of tables or documents",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180463,
          "date": "Sat 23 Mar 2024 02:39",
          "username": "alawada",
          "content": "Neptune automatically scales storage and compute resources based on workload demands, ensuring optimal performance even as the dataset grows over time.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#831",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs a secure connection between its on-premises environment and AWS. This connection does not need high bandwidth and will handle a small amount of traffic. The connection should be set up quickly.<br><br>What is the MOST cost-effective method to establish this type of connection?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#831",
          "answers": [
            {
              "choice": "<p>Implement a client VPN.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement AWS Direct Connect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a bastion host on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS Site-to-Site VPN connection.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 831 discussion",
      "discusstion": [
        {
          "id": 1300265,
          "date": "Sun 20 Oct 2024 04:35",
          "username": "mk168898",
          "content": "Not A because for individual conenction not company<br>Not B because overkill, usually for high bandwidth, but qns clearly stated no need for high bandwidth and handle small traffic<br>Not C because bastion host for remote access<br>D because ideal for small amt of traffic",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1223999,
          "date": "Tue 04 Jun 2024 09:49",
          "username": "Scheldon",
          "content": "AnswerD<br><br>AWS site-to-site VPN is the best solution here.<br><br>https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1203901,
          "date": "Mon 29 Apr 2024 09:50",
          "username": "sandordini",
          "content": "You can enable access to your remote (on-prem) network from your VPC by creating an AWS Site-to-Site VPN (Site-to-Site VPN) connection and configuring routing to pass traffic through the connection.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1180917,
          "date": "Sat 23 Mar 2024 15:04",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#832",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises SFTP file transfer solution. The company is migrating to the AWS Cloud to scale the file transfer solution and to optimize costs by using Amazon S3. The company's employees will use their credentials for the on-premises Microsoft Active Directory (AD) to access the new solution. The company wants to keep the current authentication and file access mechanisms.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#832",
          "answers": [
            {
              "choice": "<p>Configure an S3 File Gateway. Create SMB file shares on the file gateway that use the existing Active Directory to authenticate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group with Amazon EC2 instances to run an SFTP solution. Configure the group to scale up at 60% CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family server with SFTP endpoints. Choose the AWS Directory Service option as the identity provider. Use AD Connector to connect the on-premises Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family SFTP endpoint. Configure the endpoint to use the AWS Directory Service option as the identity provider to connect to the existing Active Directory.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 832 discussion",
      "discusstion": [
        {
          "id": 1226769,
          "date": "Sat 08 Jun 2024 16:27",
          "username": "Scheldon",
          "content": "Answer C<br><br>We need Transfer Family SFTP enabled server (with SFTP endpoint). Additiionally AWS Directory Service with AD connector to reach on-premises AD for authentication and authorization.<br>https://docs.aws.amazon.com/transfer/latest/userguide/getting-started.html<br>https://docs.aws.amazon.com/transfer/latest/userguide/create-server-sftp.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1213300,
          "date": "Sat 18 May 2024 14:15",
          "username": "phoenix2023",
          "content": "what is the difference between C and D ???<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AD Connector - when the company already had the Active Directory, you need a connector</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1256078,
          "date": "Sat 27 Jul 2024 08:00",
          "username": "EdricHoang",
          "content": "AD Connector - when the company already had the Active Directory, you need a connector",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1203902,
          "date": "Mon 29 Apr 2024 09:58",
          "username": "sandordini",
          "content": "1. Create one or more AWS Managed Microsoft AD directories using the AWS Directory Service console.<br><br>2. Use the Transfer Family console to create a **server** that uses **AWS Managed Microsoft AD** as its identity provider.<br><br>3. Add access from one or more of your AWS Directory Service groups.<br><br>4. Although not required, we recommend that you test and verify user access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180920,
          "date": "Sat 23 Mar 2024 15:08",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#833",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an event-driven order processing system. Each order requires multiple validation steps after the order is created. An idempotent AWS Lambda function performs each validation step. Each validation step is independent from the other validation steps. Individual validation steps need only a subset of the order event information.<br><br>The company wants to ensure that each validation step Lambda function has access to only the information from the order event that the function requires. The components of the order processing system should be loosely coupled to accommodate future business changes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#833",
          "answers": [
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue for each validation step. Create a new Lambda function to transform the order data to the format that each validation step requires and to publish the messages to the appropriate SQS queues. Subscribe each validation step Lambda function to its corresponding SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the validation step Lambda functions to the SNS topic. Use message body filtering to send only the required data to each subscribed Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge event bus. Create an event rule for each validation step. Configure the input transformer to send only the required data to each target validation step Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a new Lambda function to subscribe to the SQS queue and to transform the order data to the format that each validation step requires. Use the new Lambda function to perform synchronous invocations of the validation step Lambda functions in parallel on separate threads.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 833 discussion",
      "discusstion": [
        {
          "id": 1332305,
          "date": "Fri 27 Dec 2024 09:14",
          "username": "LeonSauveterre",
          "content": "A - Requires a separate Lambda function to preprocess and publish transformed data to multiple queues. Unnecessary.<br>B - SNS filtering operates at the subscription level, not the event transformation level, making it harder to customize data subsets for specific Lambda functions.<br>C - Amazon EventBridge: event-driven systems. Input Transformer: ensures each receives only the required subset of data.<br>D - Synchronous invocation adds tighter coupling between Lambda functions and the validation steps.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1286716,
          "date": "Fri 20 Sep 2024 10:08",
          "username": "MatAlves",
          "content": "SNS and Message Filtering<br>- With SNS, message filtering allows you to control which subscribers receive messages based on attributes. However, the entire message is sent to each subscribed Lambda function; only those that match the filter criteria are processed.<br><br>EventBridge and Input Transformation<br>- EventBridge enables you to define rules that transform or modify events before they reach their targets. This allows you to customize the event payload, ensuring each validation step receives only the relevant information.<br><br>\\\"The company wants to ensure that each validation step Lambda function has access to only the information from the order event that the function requires.\\\"<br><br>Therefore, C is the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1266863,
          "date": "Fri 16 Aug 2024 08:38",
          "username": "Johnoppong101",
          "content": "Event-driven Architecture + Each validation step needs ONLY a subset of the order EVENT created. Best way to transform this order even is EB Transformer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1226892,
          "date": "Sat 08 Jun 2024 21:07",
          "username": "Scheldon",
          "content": "Answer C<br><br>I wasn't sure but looks like EB with Input Transformation will allow for sending data which were choosed per destination<br><br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-input-transformation.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1213839,
          "date": "Sun 19 May 2024 16:37",
          "username": "TwinSpark",
          "content": "not B because SNS cannot make messages manipulation, the option \\\"message body filtering\\\" will make discard or forward the FULL message if there is a matching field:<br>https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html<br>C - eventbus instead can manipulate event:<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html<br>D - Works, but too much operation IMO",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1205569,
          "date": "Thu 02 May 2024 15:22",
          "username": "88f8032",
          "content": "Why can't it be B?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1205301,
          "date": "Thu 02 May 2024 06:58",
          "username": "BBR01",
          "content": "It is D. It is one order event, not \\\"events from many sources\\\"<br>The main lambda parse the info to pieces, then makes synchronous invocations of the validation step Lambda functions on separate threads, and wait them to complete.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1195068,
          "date": "Sat 13 Apr 2024 19:36",
          "username": "waldirlsantos",
          "content": "IMO, C<br><br>\\\"An event bus is a router that receives events and delivers them to zero or more destinations, or targets. Event buses are well-suited for routing events from many sources to many targets, with optional transformation of events prior to delivery to a target.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1183060,
          "date": "Tue 26 Mar 2024 06:49",
          "username": "TruthWS",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180926,
          "date": "Sat 23 Mar 2024 15:17",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#834",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a three-tier application to AWS. The application requires a MySQL database. In the past, the application users reported poor application performance when creating new entries. These performance issues were caused by users generating different real-time reports from the application during working hours.<br><br>Which solution will improve the performance of the application when it is moved to AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#834",
          "answers": [
            {
              "choice": "<p>Import the data into an Amazon DynamoDB table with provisioned capacity. Refactor the application to use DynamoDB for reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create the database on a compute optimized Amazon EC2 instance. Ensure compute resources exceed the on-premises database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Aurora MySQL Multi-AZ DB cluster with multiple read replicas. Configure the application to use the reader endpoint for reports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Aurora MySQL Multi-AZ DB cluster. Configure the application to use the backup instance of the cluster as an endpoint for the reports.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 834 discussion",
      "discusstion": [
        {
          "id": 1188888,
          "date": "Wed 03 Apr 2024 22:18",
          "username": "xBUGx",
          "content": "real-time reports - > read replica",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231263,
          "date": "Sun 16 Jun 2024 10:27",
          "username": "KennethNg923",
          "content": "caused by users generating different real-time reports -> read replica",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1226895,
          "date": "Sat 08 Jun 2024 21:16",
          "username": "Scheldon",
          "content": "Answer C<br><br>Any replica of Amazon Aurora Db will be read-only replica (even backup one). Option C is better then D because we will use multiple replicas which when used will signicially allow to increase performance for creating reports. In the same time no write operation should be affected.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#835",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expanding a secure on-premises network to the AWS Cloud by using an AWS Direct Connect connection. The on-premises network has no direct internet access. An application that runs on the on-premises network needs to use an Amazon S3 bucket.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#835",
          "answers": [
            {
              "choice": "<p>Create a public virtual interface (VIF). Route the AWS traffic over the public VIF.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to the S3 interface endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS traffic over the peering connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 835 discussion",
      "discusstion": [
        {
          "id": 1332312,
          "date": "Fri 27 Dec 2024 09:28",
          "username": "LeonSauveterre",
          "content": "A - Public VIFs route traffic over the public internet, but on-premises network has no direct internet access.<br>B - NAT gateways provide internet access for resources within a VPC, but, again, on-premises network has no direct internet access.<br>C - The traffic stays within AWS and the Direct Connect connection, ensuring security and compliance with the no-internet requirement. Also, this is cost-effective because it avoids the need for additional NAT gateways or public VIFs.<br>D - Peering connections don't even support access to AWS public services like S3.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1330808,
          "date": "Mon 23 Dec 2024 13:31",
          "username": "EllenLiu",
          "content": "public VIF allows on-premises networks to access AWS public services, like S3<br>it eliminates the need for internet access & interface endpoints while being cost-effective<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/privatelink/pricing/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1330809,
          "date": "Mon 23 Dec 2024 13:32",
          "username": "EllenLiu",
          "content": "https://aws.amazon.com/privatelink/pricing/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1317131,
          "date": "Sun 24 Nov 2024 18:15",
          "username": "AMEJack",
          "content": "Option A is the correct answer:<br>1) I need to connect to public services only, thus public VIF will be enough.<br>2) Interface endpoints is charged per hour, not cost effective.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1226901,
          "date": "Sat 08 Jun 2024 21:26",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Amazon S3 interface endpoint seems to be the best and only option as we are forced to use Private IP addressation.<br><br>Interface endpoints for Amazon S3<br>Your network traffic remains on the AWS network.<br>Use private IP addresses from your VPC to access Amazon S3<br>Require endpoint-specific Amazon S3 DNS names<br>Allow access from on premises<br>Allow access from a VPC in another AWS Region by using VPC peering or AWS Transit Gateway<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1215462,
          "date": "Wed 22 May 2024 08:12",
          "username": "0bdf3af",
          "content": "A. https://repost.aws/knowledge-center/s3-bucket-access-direct-connect<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This article says \\\"Use a private IP address over Direct Connect (with an interface VPC endpoint)\\\" - C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1281675,
          "date": "Tue 10 Sep 2024 18:49",
          "username": "elmyth",
          "content": "This article says \\\"Use a private IP address over Direct Connect (with an interface VPC endpoint)\\\" - C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1214808,
          "date": "Tue 21 May 2024 10:10",
          "username": "0bdf3af",
          "content": "A. public VIF is the way you can connect on-premise with S3 via DirectConnect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1195066,
          "date": "Sat 13 Apr 2024 19:26",
          "username": "waldirlsantos",
          "content": "B Need internet<br>A,D doesn't conect to the s3<br>IMO, C is the solution for this question.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1182979,
          "date": "Tue 26 Mar 2024 04:32",
          "username": "TruthWS",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180930,
          "date": "Sat 23 Mar 2024 15:26",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#836",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company serves its website by using an Auto Scaling group of Amazon EC2 instances in a single AWS Region. The website does not require a database.<br><br>The company is expanding, and the company's engineering team deploys the website to a second Region. The company wants to distribute traffic across both Regions to accommodate growth and for disaster recovery purposes. The solution should not serve traffic from a Region in which the website is unhealthy.<br><br>Which policy or resource should the company use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#836",
          "answers": [
            {
              "choice": "<p>An Amazon Route 53 simple routing policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An Amazon Route 53 multivalue answer routing policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An Application Load Balancer in one Region with a target group that specifies the EC2 instance IDs from both Regions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An Application Load Balancer in one Region with a target group that specifies the IP addresses of the EC2 instances from both Regions<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 836 discussion",
      "discusstion": [
        {
          "id": 1195064,
          "date": "Sat 13 Apr 2024 19:21",
          "username": "waldirlsantos",
          "content": "53 with multivalue is the best option for this case<br><br>Multivalue answer routing lets you configure Amazon Route 53 to return multiple values, such as IP addresses for your web servers, in response to DNS queries. You can specify multiple values for almost any record, but multivalue answer routing also lets you check the health of each resource, so Route 53 returns only values for healthy resources. It's not a substitute for a load balancer, but the ability to return multiple health-checkable IP addresses is a way to use DNS to improve availability and load balancing.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1300282,
          "date": "Sun 20 Oct 2024 07:01",
          "username": "mk168898",
          "content": "C and D are wrong because need serve traffic across both region.<br>B seems correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1286724,
          "date": "Fri 20 Sep 2024 10:28",
          "username": "MatAlves",
          "content": "A - Doesn't provide health check<br>C and D - Only work within a single zone.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1205980,
          "date": "Fri 03 May 2024 09:48",
          "username": "Sergiuss95",
          "content": "Yes, is the option b.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182977,
          "date": "Tue 26 Mar 2024 04:31",
          "username": "TruthWS",
          "content": "Option B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1180933,
          "date": "Sat 23 Mar 2024 15:31",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-multivalue.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#837",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its applications on Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS). The EC2 instances run the most recent Amazon Linux release. The applications are experiencing availability issues when the company's employees store and retrieve files that are 25 GB or larger. The company needs a solution that does not require the company to transfer files between EC2 instances. The files must be available across many EC2 instances and across multiple Availability Zones.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#837",
          "answers": [
            {
              "choice": "<p>Migrate all the files to an Amazon S3 bucket. Instruct the employees to access the files from the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Take a snapshot of the existing EBS volume. Mount the snapshot as an EBS volume across the EC2 instances. Instruct the employees to access the files from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Mount an Amazon Elastic File System (Amazon EFS) file system across all the EC2 instances. Instruct the employees to access the files from the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) from the EC2 instances. Configure new EC2 instances from the AMI that use an instance store volume. Instruct the employees to access the files from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 837 discussion",
      "discusstion": [
        {
          "id": 1188889,
          "date": "Wed 03 Apr 2024 22:22",
          "username": "xBUGx",
          "content": "cross many EC2 instances and across multiple Availability ZonesEFS",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300283,
          "date": "Sun 20 Oct 2024 07:03",
          "username": "mk168898",
          "content": "\\\"files must be available across many EC2 instances\\\" means need some sort of shared system<br>immediately i look for EFS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1253267,
          "date": "Mon 22 Jul 2024 22:26",
          "username": "freedafeng",
          "content": "my question is, why not A?<br>I am fine with C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For Option A (S3 bucket): While S3 is great for storing large files, accessing files directly from S3 would require the employees to switch to a different interface, making it inconvenient and not aligned with the requirement to access files from the EC2 instances.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1320281,
          "date": "Sat 30 Nov 2024 16:39",
          "username": "JA2018",
          "content": "For Option A (S3 bucket): While S3 is great for storing large files, accessing files directly from S3 would require the employees to switch to a different interface, making it inconvenient and not aligned with the requirement to access files from the EC2 instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1249943,
          "date": "Wed 17 Jul 2024 21:26",
          "username": "muhammadahmer36",
          "content": "cross many EC2 instances and across multiple Availability ZonesEFS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#838",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a highly sensitive application on Amazon EC2 backed by an Amazon RDS database. Compliance regulations mandate that all personally identifiable information (PII) be encrypted at rest.<br><br>Which solution should a solutions architect recommend to meet this requirement with the LEAST amount of changes to the infrastructure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#838",
          "answers": [
            {
              "choice": "<p>Deploy AWS Certificate Manager to generate certificates. Use the certificates to encrypt the database volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS CloudHSM, generate encryption keys, and use the keys to encrypt database volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure SSL encryption using AWS Key Management Service (AWS KMS) keys to encrypt database volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Elastic Block Store (Amazon EBS) encryption and Amazon RDS encryption with AWS Key Management Service (AWS KMS) keys to encrypt instance and database volumes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 838 discussion",
      "discusstion": [
        {
          "id": 1195192,
          "date": "Sun 14 Apr 2024 03:27",
          "username": "boluwatito",
          "content": "Amazon RDS relies on Amazon EBS volumes for storage.<br>By configuring Amazon EBS encryption, the underlying storage volumes are encrypted.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320283,
          "date": "Sat 30 Nov 2024 16:42",
          "username": "JA2018",
          "content": "- Option D requires the least infrastructure modification as it leverages existing features of EBS and RDS to enable encryption with KMS keys.<br><br>- This is the most straightforward way to meet the compliance requirement without significant changes to the existing setup.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1300284,
          "date": "Sun 20 Oct 2024 07:06",
          "username": "mk168898",
          "content": "SSL/Certificate > encrypt in transit, so A and C are wrong.<br>so i feel the answer is between B and D.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1203912,
          "date": "Mon 29 Apr 2024 10:28",
          "username": "sandordini",
          "content": "Encryption should be KMS, SSL is for transit not at rest...<br>Even though the question never mentioned any EBS volumes whatsoever, I would still go for D....",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1192731,
          "date": "Wed 10 Apr 2024 07:47",
          "username": "zinabu",
          "content": "answer:C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1192730,
          "date": "Wed 10 Apr 2024 07:47",
          "username": "zinabu",
          "content": "answer:C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#839",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an AWS Lambda function in private subnets in a VPC. The subnets have a default route to the internet through an Amazon EC2 NAT instance. The Lambda function processes input data and saves its output as an object to Amazon S3.<br><br>Intermittently, the Lambda function times out while trying to upload the object because of saturated traffic on the NAT instance's network. The company wants to access Amazon S3 without traversing the internet.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#839",
          "answers": [
            {
              "choice": "<p>Replace the EC2 NAT instance with an AWS managed NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the size of the EC2 NAT instance in the VPC to a network optimized instance type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a gateway endpoint for Amazon S3 in the VPUpdate the route tables of the subnets accordingly.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a transit gateway. Place transit gateway attachments in the private subnets where the Lambda function is running.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 839 discussion",
      "discusstion": [
        {
          "id": 1300285,
          "date": "Sun 20 Oct 2024 07:09",
          "username": "mk168898",
          "content": "without internet > gateway endpoints",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1226926,
          "date": "Sat 08 Jun 2024 22:44",
          "username": "Scheldon",
          "content": "Answer C<br><br>\\\"The company wants to access Amazon S3 without traversing the internet.\\\" so we cannot use any NAT like in answer A & B. Transit Gateways is allowing reach Direct Connect or VPN connection from VPC. Hence C need to be a good answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1207245,
          "date": "Mon 06 May 2024 10:02",
          "username": "boubie44",
          "content": "why not D? i don't understand<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Complexity and cost are high and too complicated for scenarios where only S3 access is required.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1236961,
          "date": "Tue 25 Jun 2024 17:23",
          "username": "DanielWuTRT",
          "content": "Complexity and cost are high and too complicated for scenarios where only S3 access is required.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1195062,
          "date": "Sat 13 Apr 2024 19:15",
          "username": "waldirlsantos",
          "content": "The Key words are \\\"Without traversig the internet\\\". So, the awser is C.<br>https://docs.aws.amazon.com/pt_br/vpc/latest/privatelink/gateway-endpoints.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1188719,
          "date": "Wed 03 Apr 2024 16:31",
          "username": "AlvinC2024",
          "content": "By provisioning a gateway endpoint for Amazon S3 in the VPC, you enable the Lambda function running in the private subnets to access S3 directly without needing to go through the NAT instance or traverse the internet. This solution helps alleviate the network congestion issue and reduces latency since the traffic between Lambda and S3 stays within the AWS network. Additionally, updating the route tables of the subnets to route S3 traffic through the gateway endpoint ensures that the Lambda function can seamlessly communicate with S3 without encountering timeouts caused by network saturation on the NAT instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1188188,
          "date": "Tue 02 Apr 2024 19:14",
          "username": "dds69",
          "content": "NAT gateways are highly available and can automatically scale up to meet increased traffic demands.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And uses the internet... So it can be a good solution, but not here, as: Without traversing the internet</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1203915,
          "date": "Mon 29 Apr 2024 10:33",
          "username": "sandordini",
          "content": "And uses the internet... So it can be a good solution, but not here, as: Without traversing the internet",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1187561,
          "date": "Mon 01 Apr 2024 18:31",
          "username": "hpmargathia",
          "content": "A<br>https://aws.amazon.com/about-aws/whats-new/2015/12/introducing-amazon-vpc-nat-gateway-a-managed-nat-service/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#840",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A news company that has reporters all over the world is hosting its broadcast system on AWS. The reporters send live broadcasts to the broadcast system. The reporters use software on their phones to send live streams through the Real Time Messaging Protocol (RTMP).<br><br>A solutions architect must design a solution that gives the reporters the ability to send the highest quality streams. The solution must provide accelerated TCP connections back to the broadcast system.<br><br>What should the solutions architect use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#840",
          "answers": [
            {
              "choice": "<p>Amazon CloudFront<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Global Accelerator<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Client VPN<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon EC2 instances and AWS Elastic IP addresses<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 840 discussion",
      "discusstion": [
        {
          "id": 1186932,
          "date": "Sun 31 Mar 2024 20:03",
          "username": "Mikado211",
          "content": "HTTP(S) -> Cloudfront<br>Other TCP -> AWS Global Accelerator<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So the answer is B :)</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1186933,
          "date": "Sun 31 Mar 2024 20:03",
          "username": "Mikado211",
          "content": "So the answer is B :)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1300286,
          "date": "Sun 20 Oct 2024 07:10",
          "username": "mk168898",
          "content": "I see TCP/UDP related connection > AWS Global accelerator",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1281672,
          "date": "Tue 10 Sep 2024 18:42",
          "username": "elmyth",
          "content": "Looks like the question is very old, but before the right answer was Cloudfront. Now AWS says that \\\"All RTMP workloads should begin migrating to a standard CloudFront Web distribution and use one of several HTTP streaming protocols such as HTTP Live Streaming (HLS), Dynamic Adaptive Streaming over HTTP (DASH), Microsoft Smooth Streaming (MSS), or HTTP Dynamic Streaming (HDS).\\\"https://repost.aws/questions/QUoUZgHZh7SEWlnQUPlBmVNQ/announcement-rtmp-support-discontinuing-on-december-31-2020",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1226928,
          "date": "Sat 08 Jun 2024 22:50",
          "username": "Scheldon",
          "content": "AnswerB<br><br>We can eliminate C and D, A is for Web apps hence B should be ok<br><br>additionally https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203917,
          "date": "Mon 29 Apr 2024 10:35",
          "username": "sandordini",
          "content": "Upload, TCP > AWS Global Accelerator",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1186942,
          "date": "Sun 31 Mar 2024 20:23",
          "username": "Drew3000",
          "content": "Last time I made it to the last question, they added more questions 2 mins later.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>They added 40 more questions today=F0=9F=98=94</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1188892,
          "date": "Wed 03 Apr 2024 22:32",
          "username": "Awsbeginner87",
          "content": "They added 40 more questions today=F0=9F=98=94",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1184930,
          "date": "Thu 28 Mar 2024 19:09",
          "username": "chasingsummer",
          "content": "Can't believe I finally made it to the last question. Good luck to everyone!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182975,
          "date": "Tue 26 Mar 2024 04:29",
          "username": "TruthWS",
          "content": "OptionB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180968,
          "date": "Sat 23 Mar 2024 16:10",
          "username": "Kaula",
          "content": "Where are questions 841-848?<br>I am I missing something?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180967,
          "date": "Sat 23 Mar 2024 16:09",
          "username": "Kaula",
          "content": "B makes sense not A since CloudFront is CDN",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1179098,
          "date": "Thu 21 Mar 2024 11:06",
          "username": "dds69",
          "content": "Global accelerator provides the acceleration for TCP",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#841",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) to run its self-managed database. The company has 350 TB of data spread across all EBS volumes. The company takes daily EBS snapshots and keeps the snapshots for 1 month. The daily change rate is 5% of the EBS volumes.<br><br>Because of new regulations, the company needs to keep the monthly snapshots for 7 years. The company needs to change its backup strategy to comply with the new regulations and to ensure that data is available with minimal administrative effort.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#841",
          "answers": [
            {
              "choice": "<p>Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Copy the monthly snapshot to Amazon S3 Glacier Deep Archive with a 7-year retention period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Continue with the current EBS snapshot policy. Add a new policy to move the monthly snapshot to Amazon EBS Snapshots Archive with a 7-year retention period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Keep the monthly snapshot in the standard tier for 7 years. Use incremental snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the daily snapshot in the EBS snapshot standard tier. Use EBS direct APIs to take snapshots of all the EBS volumes every month. Store the snapshots in an Amazon S3 bucket in the Infrequent Access tier for 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 841 discussion",
      "discusstion": [
        {
          "id": 1223593,
          "date": "Mon 03 Jun 2024 15:16",
          "username": "Scheldon",
          "content": "AnswerB<br>The problem is that we need to choose best solution which is most cost-effective and have minimal administrative effort.<br>Glacier is the best choice for 1st look, but there is one problem with that solution. From what I know there is no easy way to copy from EBS to Glacier and additionally curent strategy is to make incremental snapshots. To copy file from EBS to (s3) Glacier we would need to run linux to which we will mount EBS and we will need copy everything to S3 and then move to glaceir deep archive. And what is more you will have only incremental snapshot. Hence every solution which will say copy/move to S3 is not minimal administrative effort. Not mentionig that you will not have full snapshot<br>https://repost.aws/questions/QUsaCoBAfbR6WMOz6BH3vqHA/move-ebs-to-glacier<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I first thought the same, but NO: \\\"Which solution will meet these requirements MOST cost-effectively?\\\" There is no mention to \\\"operational overhead\\\" or \\\"minimal changes\\\", etc. The question is asking purely \\\"what is cheaper\\\". So, A is the answer.<br><br>\\\"We charge you $0.0125 per GB-month of stored data and $0.03 per GB retrieved. \\\"<br><br>\\\"All Storage / Month $0.0036 per GB<br>S3 Glacier Deep Archive *** - For long-term data archiving that is accessed once or twice in a year and can be restored within 12 hours\\\"</li><li>\\\"to ensure that data is available with minimal administrative effort.\\\" - there are 2 conditions</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1290541,
          "date": "Sat 28 Sep 2024 08:23",
          "username": "MatAlves",
          "content": "I first thought the same, but NO: \\\"Which solution will meet these requirements MOST cost-effectively?\\\" There is no mention to \\\"operational overhead\\\" or \\\"minimal changes\\\", etc. The question is asking purely \\\"what is cheaper\\\". So, A is the answer.<br><br>\\\"We charge you $0.0125 per GB-month of stored data and $0.03 per GB retrieved. \\\"<br><br>\\\"All Storage / Month $0.0036 per GB<br>S3 Glacier Deep Archive *** - For long-term data archiving that is accessed once or twice in a year and can be restored within 12 hours\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"to ensure that data is available with minimal administrative effort.\\\" - there are 2 conditions</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1305073,
          "date": "Wed 30 Oct 2024 17:40",
          "username": "elmyth",
          "content": "\\\"to ensure that data is available with minimal administrative effort.\\\" - there are 2 conditions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1194322,
          "date": "Fri 12 Apr 2024 14:07",
          "username": "rondelldell",
          "content": "How much does EBS snapshots archive cost?<br>Pricing and billing. Archived snapshots are billed at a rate of $0.0125 per GB-month. For example, if you archive a 100 GiB snapshot, you are billed $1.25 (100 GiB * $0.0125) per month.<br><br>What is the cost of Glacier?<br>Even though uploading data to Amazon S3 Glacier is free, there is a pricing method for upload requests, which is $0.03 per 1,000 requests. Transferring data out of S3 Glacier to the same region is free; however, there is a cost for transferring data to a different region.<br>- $0.0036 per GB / Month",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332819,
          "date": "Sat 28 Dec 2024 07:36",
          "username": "LeonSauveterre",
          "content": "A - S3 Glacier Deep Archive is designed for long-term data archiving with a retention period of up to 7 years or more at an extremely low cost (the most cost-effective S3 storage class).<br>B - OK but EBS Snapshots Archive costs more.<br>C - Keep the monthly snapshot in the standard tier for 1 month, OK. For 7 years??? You'll pay so much money for that. The standard EBS snapshot tier is designed for frequent access.<br>D - Storing snapshots directly in Amazon S3 (even in the Infrequent Access tier) is not ideal for EBS snapshots because it doesn't leverage EBS snapshot mechanisms, which are designed for efficient storage and management of EBS backup data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319500,
          "date": "Fri 29 Nov 2024 01:46",
          "username": "ARV14",
          "content": "https://repost.aws/knowledge-center/ebs-copy-snapshot-data-s3-create-volume.>I want to copy an Amazon Elastic Block Store (Amazon EBS) snapshot to my Amazon Simple Storage Service (Amazon S3) bucket. I also want to create Amazon EBS volumes from data that's stored in my S3 bucket.<br><br>Looks like B<br><br>Short description<br>When you create an EBS snapshot, it's automatically stored in an Amazon S3 bucket that AWS manages. You can copy snapshots within the same AWS Region, or from one Region to another. However, you can't copy snapshots to S3 buckets that you manage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1287110,
          "date": "Sat 21 Sep 2024 04:50",
          "username": "MatAlves",
          "content": "If we consider both cost and administrative effort more closely:<br><br>EBS Snapshots Archive may be easier to manage but could incur higher costs over 7 years compared to S3 Glacier.<br>S3 Glacier, despite its complexity for initial transfers, could end up being more cost-effective in the long run, especially for large data volumes.<br>Ultimately, if minimizing costs is a primary concern and the organization can handle the initial complexity of transferring snapshots, using S3 Glacier (Option A) could still be worth considering.<br><br>So, while Option B is easier, if cost is a significant factor, Option A might be the better choice despite the additional administrative effort involved. It's a trade-off that depends on the organization's priorities regarding cost and operational simplicity.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"We charge you $0.0125 per GB-month of stored data and $0.03 per GB retrieved. \\\"<br><br>https://aws.amazon.com/blogs/aws/new-amazon-ebs-snapshots-archive/<br><br>\\\"All Storage / Month $0.0036 per GB<br>S3 Glacier Deep Archive *** - For long-term data archiving that is accessed once or twice in a year and can be restored within 12 hours\\\"<br><br>https://aws.amazon.com/s3/pricing/<br><br>2nd time reviewing this question and, yeah, \\\"A\\\" is the option that better meets the \\\"cost\\\" requirement.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1290538,
          "date": "Sat 28 Sep 2024 08:21",
          "username": "MatAlves",
          "content": "\\\"We charge you $0.0125 per GB-month of stored data and $0.03 per GB retrieved. \\\"<br><br>https://aws.amazon.com/blogs/aws/new-amazon-ebs-snapshots-archive/<br><br>\\\"All Storage / Month $0.0036 per GB<br>S3 Glacier Deep Archive *** - For long-term data archiving that is accessed once or twice in a year and can be restored within 12 hours\\\"<br><br>https://aws.amazon.com/s3/pricing/<br><br>2nd time reviewing this question and, yeah, \\\"A\\\" is the option that better meets the \\\"cost\\\" requirement.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1270946,
          "date": "Thu 22 Aug 2024 23:18",
          "username": "dhewa",
          "content": "Keyword here is cost. S3 Glacier deep archive is significantly cheaper than keeping snapshots in the EBS snapshot standard tier or even the EBS Snapshots Archive.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1270499,
          "date": "Thu 22 Aug 2024 07:16",
          "username": "Abdullah2004",
          "content": "A is correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1266889,
          "date": "Fri 16 Aug 2024 09:21",
          "username": "Johnoppong101",
          "content": "Choose EBS Snapshot Archive when:<br><br>Data is associated with EBS volumes.<br>You need to maintain point-in-time copies of your EBS volumes.  <br>You require faster restore times than S3 Glacier Archive.<br>You need to comply with regulations requiring EBS snapshot retention.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1248544,
          "date": "Mon 15 Jul 2024 21:28",
          "username": "Zahran23",
          "content": "Option (B) is incorrect due to the following:<br>Archiving is recommended for monthly, quarterly, or yearly snapshots. Archiving daily incremental snapshots of a single volume can lead to higher costs when compared to keeping them in the standard tier.<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the company needs to keep the monthly snapshots for 7 years. not daily</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320479,
          "date": "Sun 01 Dec 2024 08:31",
          "username": "Cpso",
          "content": "the company needs to keep the monthly snapshots for 7 years. not daily",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1239645,
          "date": "Sun 30 Jun 2024 15:00",
          "username": "Lin878",
          "content": "I would like to vote \\\"A\\\". we have to focus on the cost as per question.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1232100,
          "date": "Mon 17 Jun 2024 22:06",
          "username": "NSA_Poker",
          "content": "(A) is incorrect. Although S3 Glacier Deep Archive is cheaper, to copy the monthly EBS snapshot to S3 would leave a container filled with incremental snapshots that would need to be first assembled into a full snapshot before it could be available. Amazon EBS Snapshots Archive stores full snapshots ensuring 'that data is available with minimal administrative effort'.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1213918,
          "date": "Sun 19 May 2024 20:17",
          "username": "TwinSpark",
          "content": "looks like an archivesituation for me<br>https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html<br>The option A is actually cheaper, but i do not like the word copy, and as far as i know there is no way, without writing custom code, to automate che move of snapshot to glacier and i think that the purposu of this question is to show that you know that there is the snapshot archive option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1206976,
          "date": "Sun 05 May 2024 19:13",
          "username": "kelmryan1",
          "content": "B , there is not admin effort for bringing it back",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1203989,
          "date": "Mon 29 Apr 2024 13:32",
          "username": "Arnaud92",
          "content": "Daily and Monthly Snapshots: Keeping daily snapshots in the EBS snapshot standard tier for 1 month ensures that recent backups are readily available for quick recovery.<br><br>Incremental Snapshots: Using incremental snapshots reduces storage costs by only capturing and storing the changes made since the last snapshot. This approach minimizes the amount of data transferred and stored, optimizing costs while ensuring that backup data is up to date.<br><br>Minimal Administrative Effort: This solution requires minimal administrative effort as it leverages existing EBS snapshot functionality and does not require manual intervention to move snapshots to other storage classes or manage additional backup policies.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>nope I am wrong B is correct</li><li>When archive a snapshot, the incremental snapshot is converted to a full snapshot.You need to store the full snapshot every month. 12 FULL snapshots for a year. 7 years would be 84 full snapshots (350TB).The cost would be much more than S3 Deep archive<br><br>###<br>When you archive a snapshot, the incremental snapshot is converted to a full snapshot, and it is moved from the standard tier to the Amazon EBS Snapshots Archive tier (archive tier). Full snapshots include all of the blocks that were written to the volume at the time when the snapshot was created.<br>###<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1203990,
          "date": "Mon 29 Apr 2024 13:34",
          "username": "Arnaud92",
          "content": "nope I am wrong B is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When archive a snapshot, the incremental snapshot is converted to a full snapshot.You need to store the full snapshot every month. 12 FULL snapshots for a year. 7 years would be 84 full snapshots (350TB).The cost would be much more than S3 Deep archive<br><br>###<br>When you archive a snapshot, the incremental snapshot is converted to a full snapshot, and it is moved from the standard tier to the Amazon EBS Snapshots Archive tier (archive tier). Full snapshots include all of the blocks that were written to the volume at the time when the snapshot was created.<br>###<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1215470,
          "date": "Wed 22 May 2024 08:38",
          "username": "f07ed8f",
          "content": "When archive a snapshot, the incremental snapshot is converted to a full snapshot.You need to store the full snapshot every month. 12 FULL snapshots for a year. 7 years would be 84 full snapshots (350TB).The cost would be much more than S3 Deep archive<br><br>###<br>When you archive a snapshot, the incremental snapshot is converted to a full snapshot, and it is moved from the standard tier to the Amazon EBS Snapshots Archive tier (archive tier). Full snapshots include all of the blocks that were written to the volume at the time when the snapshot was created.<br>###<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1197883,
          "date": "Thu 18 Apr 2024 12:51",
          "username": "802c4ff",
          "content": "it's not possibile to automate the moving from ebs to ebs archive so i'll go with A, that also cost less",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1194507,
          "date": "Fri 12 Apr 2024 21:26",
          "username": "Tanidanindo",
          "content": "https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1191246,
          "date": "Mon 08 Apr 2024 01:13",
          "username": "Awsbeginner87",
          "content": "By default, when you create a snapshot, it is stored in the Amazon EBS Snapshot Standard tier (standard tier). Snapshots stored in the standard tier are incremental. This means that only the blocks on the volume that have changed after your most recent snapshot are saved.<br><br>Some typical use cases include:<br>Archiving the only snapshot of a volume, such as end-of-project snapshots<br>Archiving full, point-in-time incremental snapshots for compliance reasons.<br>Archiving monthly, quarterly, or yearly incremental snapshots.<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/<br>snapshot-archive.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#842",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on several Amazon EC2 instances that store persistent data on an Amazon Elastic File System (Amazon EFS) file system. The company needs to replicate the data to another AWS Region by using an AWS managed service solution.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#842",
          "answers": [
            {
              "choice": "<p>Use the EFS-to-EFS backup solution to replicate the data to an EFS file system in another Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run a nightly script to copy data from the EFS file system to an Amazon S3 bucket. Enable S3 Cross-Region Replication on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC in another Region. Establish a cross-Region VPC peer. Run a nightly rsync to copy data from the original Region to the new Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup to create a backup plan with a rule that takes a daily backup and replicates it to another Region. Assign the EFS file system resource to the backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 842 discussion",
      "discusstion": [
        {
          "id": 1203967,
          "date": "Mon 29 Apr 2024 12:57",
          "username": "sandordini",
          "content": "NOTA: EFS-to-EFS backup: You must deploy this solution in the same AWS Region as your source Amazon EFS Folesystem<br>Not B, C: Not a managed AWS Solution<br>D: AWS backup will do the job, and is managed service.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1332825,
          "date": "Sat 28 Dec 2024 07:44",
          "username": "LeonSauveterre",
          "content": "While EFS-to-EFS replication (Option A) is great for real-time replication, Option D (AWS Backup) is the more cost-effective choice for long-term retention and administrative simplicity.<br><br>Also, I copied this from somewhere:<br>EFS-to-EFS Replication might not technically be an \\\"AWS Managed Service\\\" in the same sense as services like AWS Backup or Amazon RDS, but it is a solution supported by AWS. The process is automated in the sense that AWS handles the replication between EFS file systems, but it does not provide the same level of managed service (like backup solutions) that abstracts away storage, retention, and backup policy management.<br><br>However, the EFS-to-EFS solution is often classified under the broader umbrella of AWS managed solutions, since it directly integrates with EFS, but AWS Backup may provide a more clear-cut \\\"AWS managed\\\" approach with better control over backup policies and retention.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320532,
          "date": "Sun 01 Dec 2024 12:25",
          "username": "Cpso",
          "content": "A-D : managed solution<br>Cost D<A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1302539,
          "date": "Thu 24 Oct 2024 18:46",
          "username": "Madushanka",
          "content": "Answer D: AWS Backup is a managed service that handles backup operations. If AWS Backup is not available in your region, you can consider using EFS-to-EFS backup",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1300291,
          "date": "Sun 20 Oct 2024 07:22",
          "username": "mk168898",
          "content": "AWS backup is the only managed service so D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1232602,
          "date": "Tue 18 Jun 2024 22:59",
          "username": "EdricHoang",
          "content": "A is oke but it says \\\"'AWS managed service solution\\\"<br>So I go for D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1232116,
          "date": "Mon 17 Jun 2024 22:38",
          "username": "NSA_Poker",
          "content": "(A,B,C) are eliminated. They are NOT managed service solutions.<br>(D) is correct. 'AWS Backup offers a cost-effective, FULLY MANAGED, policy-based service that simplifies data protection at scale.'<br><br>https://aws.amazon.com/getting-started/hands-on/amazon-efs-backup-and-restore-using-aws-backup/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1227962,
          "date": "Mon 10 Jun 2024 17:47",
          "username": "Rahulmaddy",
          "content": "A is cheaper and less complicated to impliment compared to D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1223666,
          "date": "Mon 03 Jun 2024 17:47",
          "username": "Nm55569",
          "content": "Aws backup is not replicating. Efs replication is and it's managed in that you configure it and then it does the replication - no further actions required. It's also cheapest since it's free, you just pay for data transfer and storage<br>https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html<br>https://aws.amazon.com/blogs/aws/new-replication-for-amazon-elastic-file-system-efs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1223623,
          "date": "Mon 03 Jun 2024 16:03",
          "username": "Scheldon",
          "content": "AnswerD<br><br>I think the most cost effective would solution presented in C, but hence in question it's clearly wrote that we should use AWS Managed Services Solution, hence I think we have no other choice then to choose AWS backup (Option D)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/managedservices/latest/userguide/features.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1223624,
          "date": "Mon 03 Jun 2024 16:04",
          "username": "Scheldon",
          "content": "https://docs.aws.amazon.com/managedservices/latest/userguide/features.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1221480,
          "date": "Thu 30 May 2024 11:40",
          "username": "expouser",
          "content": "A: Replication is available in all AWS Regions in which EFS is available. To use replication in a Region that is disabled by default, you must first opt in to the Region. For more information, see Managing AWS Regions in the AWS General Reference Reference Guide. If you later opt out of a Region, Amazon EFS pauses all replication activities for the Region. To resume replication activities for the Region, you need to again opt in to the AWS Region. https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1214784,
          "date": "Tue 21 May 2024 09:36",
          "username": "0bdf3af",
          "content": "A. you can replicate to another Region",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1197807,
          "date": "Thu 18 Apr 2024 11:00",
          "username": "BatVanyo",
          "content": "To me \\\"an AWS managed service solution\\\" automatically translates to AWS Backup.<br>...Can't say if this is cheaper than EFS replication tho.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1188899,
          "date": "Wed 03 Apr 2024 22:38",
          "username": "xBUGx",
          "content": "To replicate data from an Amazon Elastic File System (EFS) file system to another AWS Region, the MOST cost-effective solution would be to use EFS Replication. Here's why:<br><br>EFS Replication:<br>EFS Replication allows you to natively create a copy of your file system in an AWS Region or Availability Zone (AZ) of your choice.<br>It automatically and transparently copies your data from the source file system to the destination, maintaining an RPO (Recovery Point Objective) of 15 minutes for most file systems.<br>This solution is specifically designed for replicating EFS data across Regions, ensuring data resilience and protection.<br>There are no additional costs for using replication failback, and you pay for the usual replication and file system changes as described in Amazon EFS pricing12.<br>EFS Replication is available in all AWS Regions where EFS is available1.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But it is not a managed service</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1192815,
          "date": "Wed 10 Apr 2024 10:07",
          "username": "boluwatito",
          "content": "But it is not a managed service",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#843",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is migrating its on-premises workload to the AWS Cloud. The workload currently consists of a web application and a backend Microsoft SQL database for storage.<br><br>The company expects a high volume of customers during a promotional event. The new infrastructure in the AWS Cloud must be highly available and scalable.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#843",
          "answers": [
            {
              "choice": "<p>Migrate the web application to two Amazon EC2 instances across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS for Microsoft SQL Server with read replicas in both Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web application to an Amazon EC2 instance that runs in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to two EC2 instances across separate AWS Regions with database replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web application to Amazon EC2 instances that run in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS with Multi-AZ deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web application to three Amazon EC2 instances across three Availability Zones behind an Application Load Balancer. Migrate the database to three EC2 instances across three Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 843 discussion",
      "discusstion": [
        {
          "id": 1332827,
          "date": "Sat 28 Dec 2024 07:49",
          "username": "LeonSauveterre",
          "content": "Initially I chose A but then again, \\\"highly available and scalable\\\" should indicate multi az and auto scaling group, so C is the only valid option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1223630,
          "date": "Mon 03 Jun 2024 16:12",
          "username": "Scheldon",
          "content": "AnswerC<br><br>I would de-couple as many elements as possible with appopriate redundancy (HA), hence Auto-Scale in 2 AZ for EC2, Database in Multi-AZ and ALB infront of EC2. It will allow to increase amount of servers in case of need and will prevent from service unavailability in case if something fail ;)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202649,
          "date": "Fri 26 Apr 2024 16:10",
          "username": "zinabu",
          "content": "yes ''C'' but it was better if it says Amazon RDS for Microsoft SQL Multi-AZ. any ways<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree, Options Only C has auto scaling and RDS, and RDS support sql server, so it could only be C</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231274,
          "date": "Sun 16 Jun 2024 10:46",
          "username": "KennethNg923",
          "content": "Agree, Options Only C has auto scaling and RDS, and RDS support sql server, so it could only be C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1192955,
          "date": "Wed 10 Apr 2024 14:10",
          "username": "rondelldell",
          "content": "only c",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1192838,
          "date": "Wed 10 Apr 2024 10:41",
          "username": "[Removed]",
          "content": "HA - option C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1191248,
          "date": "Mon 08 Apr 2024 01:19",
          "username": "Awsbeginner87",
          "content": "Option a",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#844",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises business application that generates hundreds of files each day. These files are stored on an SMB file share and require a low-latency connection to the application servers. A new company policy states all application-generated files must be copied to AWS. There is already a VPN connection to AWS.<br><br>The application development team does not have time to make the necessary code modifications to move the application to AWS.<br><br>Which service should a solutions architect recommend to allow the application to copy files to AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#844",
          "answers": [
            {
              "choice": "<p>Amazon Elastic File System (Amazon EFS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon FSx for Windows File Server<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Snowball<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Storage Gateway<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 844 discussion",
      "discusstion": [
        {
          "id": 1332829,
          "date": "Sat 28 Dec 2024 07:55",
          "username": "LeonSauveterre",
          "content": "D is good to go. AWS Storage Gateway provides seamless integration between on-premises environments and AWS, and specifically, File Gateway can be used to expose an SMB interface that on-premises applications can use.<br><br>For B: While FSx does support SMB, it's optimized for AWS cloud workloads, not necessarily for on-premises systems. If you want an on-premises system to directly interact with an SMB share in AWS, you would typically need a service that integrates with the on-premises network seamlessly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319488,
          "date": "Fri 29 Nov 2024 00:57",
          "username": "ckhemani",
          "content": "Amazon FSx for Windows File Server is not used of transfer data. if it was Amazon Fsx Gateway, then it would have been been correct.<br><br>They are looking solution for copying not moving to which filesystem.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1270953,
          "date": "Thu 22 Aug 2024 23:40",
          "username": "dhewa",
          "content": "B is incorrect in this case because the development team doesn't have time to modify the application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1253289,
          "date": "Mon 22 Jul 2024 23:14",
          "username": "EdricHoang",
          "content": "Amazon FSx for Windows File Server also support SMB and hybrid solution. And, no modification is needed.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1223671,
          "date": "Mon 03 Jun 2024 17:59",
          "username": "Nm55569",
          "content": "Why not \\\"Amazon FSx for Windows File Server\\\"?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>because we require a hybrid solution here</li><li>Amazon FSx for Windows File Server also support hybrid solution</li><li>..I am wondering where it says FSx for Windows File Server also support hybrid solution?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1232025,
          "date": "Mon 17 Jun 2024 18:36",
          "username": "ike001",
          "content": "because we require a hybrid solution here<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon FSx for Windows File Server also support hybrid solution</li><li>..I am wondering where it says FSx for Windows File Server also support hybrid solution?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1253288,
          "date": "Mon 22 Jul 2024 23:14",
          "username": "EdricHoang",
          "content": "Amazon FSx for Windows File Server also support hybrid solution<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>..I am wondering where it says FSx for Windows File Server also support hybrid solution?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1294748,
          "date": "Tue 08 Oct 2024 17:01",
          "username": "XXXXXlNN",
          "content": "..I am wondering where it says FSx for Windows File Server also support hybrid solution?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1223632,
          "date": "Mon 03 Jun 2024 16:15",
          "username": "Scheldon",
          "content": "AnswerD<br><br>StorageGateway<br><br>https://docs.aws.amazon.com/storagegateway/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1195120,
          "date": "Sat 13 Apr 2024 22:14",
          "username": "jcck202020",
          "content": "AWS Storage Gateway provides a set of hybrid cloud storage services that offer on-premises access to virtually unlimited cloud storage. The File Gateway configuration of AWS Storage Gateway supports the SMB protocol (and NFS), enabling on-premises applications to seamlessly store and retrieve files in Amazon S3 using existing file system protocols. It fits perfectly for applications that need to continue operating without modification, while also adhering to the new policy of copying files to AWS.<br>Given these descriptions, Option D (AWS Storage Gateway) is the recommended service. It allows for a smooth integration by maintaining the existing SMB file-sharing capabilities and connects seamlessly to AWS through the VPN, enabling daily file transfers without significant changes to application code or infrastructure.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1191252,
          "date": "Mon 08 Apr 2024 01:22",
          "username": "Awsbeginner87",
          "content": "AWS Storage Gateway service enables hybrid storage between on-premises environments and the AWS Cloud. It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1191037,
          "date": "Sun 07 Apr 2024 17:45",
          "username": "Kaula",
          "content": "https://docs.aws.amazon.com/storagegateway/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#845",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 15 employees. The company stores employee start dates in an Amazon DynamoDB table. The company wants to send an email message to each employee on the day of the employee's work anniversary.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#845",
          "answers": [
            {
              "choice": "<p>Create a script that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a script that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 845 discussion",
      "discusstion": [
        {
          "id": 1231275,
          "date": "Sun 16 Jun 2024 10:50",
          "username": "KennethNg923",
          "content": "Operational efficiency, script need to be run every time, and send email need to use SNS, so it should be C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1223634,
          "date": "Mon 03 Jun 2024 16:19",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Deploying full instance is an overkill. Lambda should be enough + SNS to sent email. And it should be quite cheap",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1198823,
          "date": "Fri 19 Apr 2024 21:45",
          "username": "Mikado211",
          "content": "SNS for sending mails<br>Lambda to scan the database + send the message to the SNS topic.<br><br>Using a script on a EC2 will add maintenance on both the EC2 and the script + cronjobs are not reliable and can be hard to monitor properly.<br><br>SO answer C !",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1198822,
          "date": "Fri 19 Apr 2024 21:45",
          "username": "Mikado211",
          "content": "SNS for sending mails<br>Lambda to scan the database + send the message to the SNS topic.<br><br>Using a script on a EC2 will add maintenance on both the EC2 and the script + cronjobs are not reliable and can be hard to monitor properly.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#846",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is running on Amazon EC2 instances within an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. Based on the application's history, the company anticipates a spike in traffic during a holiday each year. A solutions architect must design a strategy to ensure that the Auto Scaling group proactively increases capacity to minimize any performance impact on application users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#846",
          "answers": [
            {
              "choice": "<p>Create an Amazon CloudWatch alarm to scale up the EC2 instances when CPU utilization exceeds 90%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a recurring scheduled action to scale up the Auto Scaling group before the expected period of peak demand.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the minimum and maximum number of EC2 instances in the Auto Scaling group during the peak demand period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Simple Notification Service (Amazon SNS) notification to send alerts when there are autoscaling:EC2_INSTANCE_LAUNCH events.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 846 discussion",
      "discusstion": [
        {
          "id": 1320537,
          "date": "Sun 01 Dec 2024 12:46",
          "username": "Cpso",
          "content": "objective is to optimize autoscaling but being fix number of ec2: \\\"design a strategy to ensure that the Auto Scaling group proactively increases capacity to minimize any performance impact on application users.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231276,
          "date": "Sun 16 Jun 2024 10:52",
          "username": "KennethNg923",
          "content": "the company anticipates a spike in traffic during a holiday each year -> schedule action",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1223637,
          "date": "Mon 03 Jun 2024 16:24",
          "username": "Scheldon",
          "content": "AnswerB<br><br>https://medium.com/@damadhav/aws-scaling-reactive-vs-proactive-vs-predictive-2701ad6d48c9",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203130,
          "date": "Sat 27 Apr 2024 15:22",
          "username": "7ce90e0",
          "content": "it says proactively",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202101,
          "date": "Thu 25 Apr 2024 17:26",
          "username": "zinabu",
          "content": "it needs a scheduled action for the yearly holiday peak traffic",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1198824,
          "date": "Fri 19 Apr 2024 21:47",
          "username": "Mikado211",
          "content": "Since we know when we will have a peak of activity. A scheduled scaling is a good idea.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1198013,
          "date": "Thu 18 Apr 2024 17:55",
          "username": "zinabu",
          "content": "selected answer: B <br>it needs a scheduled action for the yearly holiday peak traffic",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1197774,
          "date": "Thu 18 Apr 2024 09:33",
          "username": "Hkayne",
          "content": "The answer IS A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#847",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases.<br><br>Which solution meets this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#847",
          "answers": [
            {
              "choice": "<p>Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 847 discussion",
      "discusstion": [
        {
          "id": 1223640,
          "date": "Tue 03 Dec 2024 17:27",
          "username": "Scheldon",
          "content": "AnswerA<br>\\\"In Secrets Manager, you can set up automatic rotation for your secrets.\\\"<br>https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1205862,
          "date": "Sun 03 Nov 2024 02:09",
          "username": "88f8032",
          "content": "A. AWS Secrets Manager",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1195121,
          "date": "Sun 13 Oct 2024 22:17",
          "username": "jcck202020",
          "content": "Option A (Store the password in AWS Secrets Manager and enable automatic rotation on the secret) is the best solution. It meets the requirements with the least operational overhead by leveraging built-in features specifically designed for managing and rotating database credentials securely.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#848",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application on Oracle Database Enterprise Edition. The company needs to migrate the application and the database to AWS. The company can use the Bring Your Own License (BYOL) model while migrating to AWS. The application uses third-party database features that require privileged access.<br><br>A solutions architect must design a solution for the database migration.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#848",
          "answers": [
            {
              "choice": "<p>Migrate the database to Amazon RDS for Oracle by using native tools. Replace the third-party features with AWS Lambda.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS Custom for Oracle by using native tools. Customize the new database settings to support the third-party features.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Customize the new database settings to support the third-party features.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS for PostgreSQL by using AWS Database Migration Service (AWS DMS). Rewrite the application code to remove the dependency on third-party features.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 848 discussion",
      "discusstion": [
        {
          "id": 1223994,
          "date": "Wed 04 Dec 2024 10:15",
          "username": "Scheldon",
          "content": "AnswerB<br><br>BYOL + third-party features/applicationsRDS Custom. Hence customer is using Oracle so we should use RDS customer for Oracle<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html<br>https://aws.amazon.com/blogs/aws/amazon-rds-custom-for-oracle-new-control-capabilities-in-database-environment/<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-custom-oracle.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202104,
          "date": "Fri 25 Oct 2024 17:30",
          "username": "zinabu",
          "content": "Amazon RDS Custom for Oracle by using native tools to support the third-party features.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1197780,
          "date": "Fri 18 Oct 2024 09:41",
          "username": "Hkayne",
          "content": "B IS suitable for this use case : th=C3=A9 use or BYOL and the use or third party features with privileged access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1195122,
          "date": "Sun 13 Oct 2024 22:19",
          "username": "jcck202020",
          "content": "Considering the requirements and the need to use Oracle Database features with privileged access and BYOL, Option B (Migrate the database to Amazon RDS Custom for Oracle by using native tools. Customize the new database settings to support the third-party features) is the most cost-effective and suitable solution. It allows for significant customization needed to accommodate specific third-party features while leveraging existing Oracle licenses.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#849",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large international university has deployed all of its compute services in the AWS Cloud. These services include Amazon EC2, Amazon RDS, and Amazon DynamoDB. The university currently relies on many custom scripts to back up its infrastructure. However, the university wants to centralize management and automate data backups as much as possible by using AWS native options.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#849",
          "answers": [
            {
              "choice": "<p>Use third-party backup software with an AWS Storage Gateway tape gateway virtual tape library.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup to configure and monitor all backups for the services in use.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config to set lifecycle management to take snapshots of all data sources on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager State Manager to manage the configuration and monitoring of backup tasks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 849 discussion",
      "discusstion": [
        {
          "id": 1189555,
          "date": "Fri 04 Oct 2024 23:27",
          "username": "Mikado211",
          "content": "Centralized management of backupsAWS Backup",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1223996,
          "date": "Wed 04 Dec 2024 10:37",
          "username": "Scheldon",
          "content": "AnswerB<br><br>AWS native tool that will support EC2, RDS and DynamoDBAWS Backup<br><br>https://docs.aws.amazon.com/aws-backup/latest/devguide/working-with-supported-services.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1197783,
          "date": "Fri 18 Oct 2024 09:44",
          "username": "Hkayne",
          "content": "Automate backupsAWS Backup",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#850",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build a map of its IT infrastructure to identify and enforce policies on resources that pose security risks. The company's security team must be able to query data in the IT infrastructure map and quickly identify security risks.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#850",
          "answers": [
            {
              "choice": "<p>Use Amazon RDS to store the data. Use SQL to query the data to identify security risks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Neptune to store the data. Use SPARQL to query the data to identify security risks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Redshift to store the data. Use SQL to query the data to identify security risks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon DynamoDB to store the data. Use PartiQL to query the data to identify security risks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 850 discussion",
      "discusstion": [
        {
          "id": 1232135,
          "date": "Mon 17 Jun 2024 23:40",
          "username": "NSA_Poker",
          "content": "Visualize your AWS Infrastructure with Amazon Neptune and AWS Config<br>https://aws.amazon.com/blogs/database/visualize-your-aws-infrastructure-with-amazon-neptune-and-aws-config/<br><br>Using Amazon Neptune for Security Graphs<br>https://aws.amazon.com/neptune/security-graphs-on-aws/#:~:textUsing%20Amazon%20Neptune%20for%20Security%20Graphs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1227936,
          "date": "Mon 10 Jun 2024 17:01",
          "username": "Rahulmaddy",
          "content": "Option B is very tough to impliment for such a simple usecase.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1223997,
          "date": "Tue 04 Jun 2024 09:43",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Neptune is the only Graph database from all options which seems to be most suitable.<br>I'm not sure about SPARQL but hence Neptun is the best option hence SPARQL should be to.<br>https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1195123,
          "date": "Sat 13 Apr 2024 22:20",
          "username": "jcck202020",
          "content": "Option B (Use Amazon Neptune to store the data. Use SPARQL to query the data) is the most suitable choice. Neptune is purpose-built for storing and querying graph data, making it a natural fit for representing and querying the complex relationships inherent in an IT infrastructure map. Additionally, SPARQL is a powerful and efficient query language for graph databases, facilitating quick identification of security risks.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1189475,
          "date": "Thu 04 Apr 2024 19:36",
          "username": "dds69",
          "content": "Using Amazon Neptune with SPARQL, a query language for graph databases, allows the security team to easily query the data in the IT infrastructure map to identify security risks. SPARQL is specifically designed for querying graph data and allows for complex queries to traverse relationships between resources efficiently.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#851",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company wants to provide its globally located developers separate, limited size, managed PostgreSQL databases for development purposes. The databases will be low volume. The developers need the databases only when they are actively working.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#851",
          "answers": [
            {
              "choice": "<p>Give the developers the ability to launch separate Amazon Aurora instances. Set up a process to shut down Aurora instances at the end of the workday and to start Aurora instances at the beginning of the next workday.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Develop an AWS Service Catalog product that enforces size restrictions for launching Amazon Aurora instances. Give the developers access to launch the product when they need a development database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Aurora Serverless cluster. Develop an AWS Service Catalog product to launch databases in the cluster with the default capacity settings. Grant the developers access to the product.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Monitor AWS Trusted Advisor checks for idle Amazon RDS databases. Create a process to terminate identified idle RDS databases.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 851 discussion",
      "discusstion": [
        {
          "id": 1232258,
          "date": "Tue 18 Jun 2024 07:28",
          "username": "NSA_Poker",
          "content": "(A,B,D) eliminated. Aurora instances & Amazon RDS use On-Demand or Reserved INSTANCES. These are more expensive than a serverless solution.<br><br>(C) is correct. Amazon Aurora Serverless automatically starts up, shuts down & scales capacity up or down based on your application's needs; you pay only for capacity consumed.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1204532,
          "date": "Tue 30 Apr 2024 13:18",
          "username": "kelmryan1",
          "content": "Yes but its asking for the most cost effective. B would cause frustration for developers if it was terminated unexpectedly. The answer should be C so developers can easily access when they are needed and auto scales based on demand<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You're correct for the wrong reasons. An instance being 'terminated unexpectedly' &amp; it having 'easily access\\\" are qualities related to high availability &amp; not cost effectiveness.<br>(B) is wrong because it's more $$$.</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1232259,
          "date": "Tue 18 Jun 2024 07:34",
          "username": "NSA_Poker",
          "content": "You're correct for the wrong reasons. An instance being 'terminated unexpectedly' & it having 'easily access\\\" are qualities related to high availability & not cost effectiveness.<br>(B) is wrong because it's more $$$.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1333327,
          "date": "Sun 29 Dec 2024 05:44",
          "username": "LeonSauveterre",
          "content": "A - AuroraOverkill and expensive.<br>B - Just like A.<br>C - Aurora Serverless scales based on usage and can automatically scale down to zero when the database is not in use. This is ideal for a development environment where databases are only needed during active work hours.<br>D - Money is not an issue here I think. The real problem is - there's no guarantee that the database would be automatically available when the developers need it. The need for a manual process to monitor and terminate idle databases introduces operational overhead and the potential for human error.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1300350,
          "date": "Sun 20 Oct 2024 10:26",
          "username": "mk168898",
          "content": "when i see \\\"managed PostgreSQL databases\\\", i immediately look for serverless",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1296456,
          "date": "Sat 12 Oct 2024 12:10",
          "username": "b3b5fdd",
          "content": "I think the answer correct is B as the database should be managed by the developer and Each developer needs a separate DB.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266905,
          "date": "Fri 16 Aug 2024 10:03",
          "username": "Johnoppong101",
          "content": "Requirement: Each developer needs a separate DB. In a cluster, DB is shared among developers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266903,
          "date": "Fri 16 Aug 2024 10:01",
          "username": "Johnoppong101",
          "content": "Guys, listen to the question, each developer -> a separate managed PostgreSQL DB.<br>this is the task. Then Most cost-effective comes. If you get a cheaper thing that does not fulfull the task, you are wrong.<br>Question: Can each developer get a separate DB for himself from the cluster?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1232039,
          "date": "Mon 17 Jun 2024 19:14",
          "username": "ike001",
          "content": "Answer C: We know we require Service Catalog. This option provides workflow no how it works",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1223511,
          "date": "Mon 03 Jun 2024 11:33",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Using Aurora Serverless solution + AWS Service Catalog features seems to be a good idea<br><br>https://aws.amazon.com/rds/aurora/serverless/<br>https://aws.amazon.com/servicecatalog/features/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1215510,
          "date": "Wed 22 May 2024 09:29",
          "username": "f07ed8f",
          "content": "Only option B can have limited size database<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"when creating your Aurora database cluster, specify the desired range of database capacity or use the defaults, and connect your applications.\\\" This way we limit the capacity that we pay for.<br><br>https://aws.amazon.com/rds/aurora/serverless/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1232262,
          "date": "Tue 18 Jun 2024 07:39",
          "username": "NSA_Poker",
          "content": "\\\"when creating your Aurora database cluster, specify the desired range of database capacity or use the defaults, and connect your applications.\\\" This way we limit the capacity that we pay for.<br><br>https://aws.amazon.com/rds/aurora/serverless/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1214159,
          "date": "Mon 20 May 2024 09:05",
          "username": "[Removed]",
          "content": "Aurora Serverlessinicia, encerra e escala a capacidade automaticamente de acordo com as necessidades.<br>AWS Service Catalogcatalogo de servi=C3=A7os que usuarios podem utilizar, dentro das configura=C3=A7=C3=B5es permitidas.<br>https://aws.amazon.com/pt/rds/aurora/serverless/<br>https://aws.amazon.com/pt/servicecatalog/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1206144,
          "date": "Fri 03 May 2024 15:30",
          "username": "Sergiuss95",
          "content": "I thin is c",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1197789,
          "date": "Thu 18 Apr 2024 10:06",
          "username": "Hkayne",
          "content": "With AWS Service Catalog, you can meet your compliance requirements while making sure your customers can quickly deploy the cloud resources they need.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#852",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a web application that serves a content management system. The content management system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and other website assets in the content management system.<br><br>A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content with the least possible lag time.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#852",
          "answers": [
            {
              "choice": "<p>Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2 instance to mount the EFS file system locally. Configure the website hosting application to reference the website assets that are stored in the EFS file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 852 discussion",
      "discusstion": [
        {
          "id": 1300356,
          "date": "Sun 20 Oct 2024 10:33",
          "username": "mk168898",
          "content": "website content must be in sync with all EC2 instances, so use EFS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1232041,
          "date": "Mon 17 Jun 2024 19:17",
          "username": "ike001",
          "content": "B is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1223514,
          "date": "Mon 03 Jun 2024 11:37",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Looks like this is the only reasonable solution from all presented",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204056,
          "date": "Mon 29 Apr 2024 16:05",
          "username": "sandordini",
          "content": "CMS is usually EFS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#853",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company already has added AWS WAF to its architecture.<br><br>What should a solutions architect do next to protect against threats?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#853",
          "answers": [
            {
              "choice": "<p>Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge to filter for GuardDuty findings and to invoke an AWS Lambda function to adjust the AWS WAF rules.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 853 discussion",
      "discusstion": [
        {
          "id": 1189005,
          "date": "Fri 04 Oct 2024 02:49",
          "username": "Awsbeginner87",
          "content": "Malicious or suspicious activity - think of GuardDuty",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1223516,
          "date": "Tue 03 Dec 2024 12:42",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior across your AWS environment.<br>https://aws.amazon.com/guardduty/features/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202111,
          "date": "Fri 25 Oct 2024 17:42",
          "username": "zinabu",
          "content": "Gard duty for automatic treat detection",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1197914,
          "date": "Fri 18 Oct 2024 13:39",
          "username": "Hkayne",
          "content": "Threat detection means guarduty",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#854",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to run a group of Amazon EC2 instances that connect to an Amazon Aurora database. The company has built an AWS CloudFormation template to deploy the EC2 instances and the Aurora DB cluster. The company wants to allow the instances to authenticate to the database in a secure way. The company does not want to maintain static database credentials.<br><br>Which solution meets these requirements with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#854",
          "answers": [
            {
              "choice": "<p>Create a database user with a user name and password. Add parameters for the database user name and password to the CloudFormation template. Pass the parameters to the EC2 instances when the instances are launched.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a database user with a user name and password. Store the user name and password in AWS Systems Manager Parameter Store. Configure the EC2 instances to retrieve the database credentials from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the DB cluster to use IAM database authentication. Create a database user to use with IAM authentication. Associate a role with the EC2 instances to allow applications on the instances to access the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the DB cluster to use IAM database authentication with an IAM user. Create a database user that has a name that matches the IAM user. Associate the IAM user with the EC2 instances to allow applications on the instances to access the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 854 discussion",
      "discusstion": [
        {
          "id": 1197916,
          "date": "Fri 18 Oct 2024 13:43",
          "username": "Hkayne",
          "content": "Using IAM database authentication and associate a role with the EC2 instances is the least operational effort.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1223526,
          "date": "Tue 03 Dec 2024 13:21",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Customer would like to not manage password rotation from my understanding, hence A and B are not the best solution here. I don't think we can associate IAM user with EC2 instance, but we can associate IAM role.<br>In summary C<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#855",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does not want to use the default domain name for the distribution. Instead, the company wants to use a different domain name for the distribution.<br><br>Which solution will deploy the certificate without incurring any additional costs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#855",
          "answers": [
            {
              "choice": "<p>Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 855 discussion",
      "discusstion": [
        {
          "id": 1333331,
          "date": "Sun 29 Dec 2024 06:00",
          "username": "LeonSauveterre",
          "content": "Yes, C. Just memorize that. For CloudFront distributions with custom domain names, ACM public certificates must be requested from us-east-1.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231318,
          "date": "Sun 16 Jun 2024 13:03",
          "username": "KennethNg923",
          "content": "Have to use east-1 region for ACM, and it should be public SSL/TLS for domain, so it should be C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1223535,
          "date": "Mon 03 Jun 2024 12:43",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Per AWS \\\"Public SSL/TLS certificates provisioned through AWS Certificate Manager are free. You pay only for the AWS resources you create to run your application.\\\"<br>https://aws.amazon.com/certificate-manager/pricing/?ncsn&loc3<br><br>But hence AWS is recommending to use US east 1 I think I would go with C<br>Note<br>We recommend that you use ACM to provision, manage, and deploy SSL/TLS certificates on AWS managed resources. You must request an ACM certificate in the US East (N. Virginia) Region.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-procedures.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1204067,
          "date": "Mon 29 Apr 2024 16:31",
          "username": "sandordini",
          "content": "browsers trust public certificates automatically by default > C or D<br>To use an ACM certificate with Amazon CloudFront, you must request or import the certificate in the US East (N. Virginia) region [Nowhere is it stated why is this though...] > C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1197801,
          "date": "Thu 18 Apr 2024 10:41",
          "username": "BatVanyo",
          "content": "The certificate has to be public. The certificate has to be issued in us-east-1: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html<br>\\\"To use an ACM certificate with CloudFront, make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1).\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1196425,
          "date": "Tue 16 Apr 2024 09:04",
          "username": "rondelldell",
          "content": "https://aws.amazon.com/certificate-manager/pricing/<br>AWS Certificate Manager Pricing<br>Public SSL/TLS certificates provisioned through AWS Certificate Manager are free. You pay only for the AWS resources you create to run your application.<br>If you manage AWS Private Certificate Authority (CA) through ACM, refer to the AWS Private CA Pricing page for more details and examples.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1193229,
          "date": "Wed 10 Apr 2024 20:44",
          "username": "boluwatito",
          "content": "It is c",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1193228,
          "date": "Wed 10 Apr 2024 20:44",
          "username": "boluwatito",
          "content": "Should be c, it is a public certificate",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1190079,
          "date": "Fri 05 Apr 2024 22:32",
          "username": "JackyCCK",
          "content": "CloudFront should have a private cert and browser use public cert aiming to achieve non-repudiation. Ans should be A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1188671,
          "date": "Wed 03 Apr 2024 14:59",
          "username": "cloudee",
          "content": "This should be C. Private CA is not free<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not D.evrn option D is public CA</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1189003,
          "date": "Thu 04 Apr 2024 02:45",
          "username": "Awsbeginner87",
          "content": "Why not D.evrn option D is public CA",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#856",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates operations data and stores the data in an Amazon S3 bucket. For the company's annual audit, an external consultant needs to access an annual report that is stored in the S3 bucket. The external consultant needs to access the report for 7 days.<br><br>The company must implement a solution to allow the external consultant access to only the report.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#856",
          "answers": [
            {
              "choice": "<p>Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the new S3 bucket. Share the S3 website URL with the external consultant.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external consultant completes the audit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external consultant. Revoke the access keys after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Generate a presigned URL that has the required access to the location of the report on the S3 bucket. Share the presigned URL with the external consultant.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 856 discussion",
      "discusstion": [
        {
          "id": 1197921,
          "date": "Fri 18 Oct 2024 13:50",
          "username": "Hkayne",
          "content": "Pre-signed URLs are used to provide short-term access to a private object in your S3 bucket. They work by appending an AWS Access Key, expiration time, and Sigv4 signature as query parameters to the S3 object.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1333333,
          "date": "Sun 29 Dec 2024 06:07",
          "username": "LeonSauveterre",
          "content": "A - Yeah, too much trouble.<br>B - Even if you remove access after the 7 days, the bucket would be publicly accessible during the time frame, which could lead to accidental data exposure.<br>C - A little better than A, but you gotta create a new IAM user, provide access keys, and manually revok them after 7 days. I'm not even sure I can remember that a week later...<br>D - No need to manage IAM users or keys. Also, everything you need to do can be done within 10 minutes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1223541,
          "date": "Tue 03 Dec 2024 13:53",
          "username": "Scheldon",
          "content": "AnswerD<br>When using CLI to create presigned URL we can setup 7days (max) for URL expiration from the time of creation.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#857",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to run a high performance computing (HPC) workload on Amazon EC2 Instances. The workload requires low-latency network performance and high network throughput with tightly coupled node-to-node communication.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#857",
          "answers": [
            {
              "choice": "<p>Configure the EC2 instances to be part of a cluster placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch the EC2 instances with Dedicated Instance tenancy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch the EC2 instances as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an On-Demand Capacity Reservation when the EC2 instances are launched.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 857 discussion",
      "discusstion": [
        {
          "id": 1189001,
          "date": "Thu 04 Apr 2024 02:41",
          "username": "Awsbeginner87",
          "content": "Tightly coupled, low-latency,hpc - cluster placement group",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1234568,
          "date": "Fri 21 Jun 2024 18:01",
          "username": "victor78",
          "content": "I THINK IT'S C,D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231320,
          "date": "Sun 16 Jun 2024 13:05",
          "username": "KennethNg923",
          "content": "tightly coupled node-to-node communication -> placement group",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1223543,
          "date": "Mon 03 Jun 2024 12:56",
          "username": "Scheldon",
          "content": "AnswerA<br><br>I was thinking it will be D but after some research I think it will be A<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1214720,
          "date": "Tue 21 May 2024 07:17",
          "username": "Linuslin",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202658,
          "date": "Fri 26 Apr 2024 16:29",
          "username": "zinabu",
          "content": "he key word here is ''tightly coupled node-to-node communication'' which means we need to Configure the EC2 instances in a cluster placement group.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191941,
          "date": "Tue 09 Apr 2024 06:09",
          "username": "Tanidanindo",
          "content": "all points to a cluster placement group",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188745,
          "date": "Wed 03 Apr 2024 17:55",
          "username": "AlvinC2024",
          "content": "The answer should be A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#858",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has primary and secondary data centers that are 500 miles (804.7 km) apart and interconnected with high-speed fiber-optic cable. The company needs a highly available and secure network connection between its data centers and a VPC on AWS for a mission-critical workload. A solutions architect must choose a connection solution that provides maximum resiliency.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#858",
          "answers": [
            {
              "choice": "<p>Two AWS Direct Connect connections from the primary data center terminating at two Direct Connect locations on two separate devices<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on the same device<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Two AWS Direct Connect connections from each of the primary and secondary data centers terminating at two Direct Connect locations on two separate devices<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on two separate devices<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 858 discussion",
      "discusstion": [
        {
          "id": 1223545,
          "date": "Tue 03 Dec 2024 14:00",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Maximum resilient solution will be to have 2 independet connections to AWS from each location (maximum redundancy)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1214933,
          "date": "Thu 21 Nov 2024 15:38",
          "username": "Hkayne",
          "content": "The most resilient is C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1211763,
          "date": "Fri 15 Nov 2024 08:12",
          "username": "Sri4321",
          "content": "Redundant Connections: Having two Direct Connect connections from each data center provides redundancy in case one connection fails.<br>Diverse Direct Connect Locations: Terminating the connections at two different Direct Connect locations further eliminates the risk of a single point of failure due to issues at a specific location.<br>Separate Devices: Using separate devices at each Direct Connect location adds another layer of redundancy, preventing a single device failure from impacting connectivity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#859",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs several Amazon RDS for Oracle On-Demand DB instances that have high utilization. The RDS DB instances run in member accounts that are in an organization in AWS Organizations.<br><br>The company's finance team has access to the organization's management account and member accounts. The finance team wants to find ways to optimize costs by using AWS Trusted Advisor.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#859",
          "answers": [
            {
              "choice": "<p>Use the Trusted Advisor recommendations in the management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Trusted Advisor recommendations in the member accounts where the RDS DB instances are running.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Review the Trusted Advisor checks for Amazon RDS Reserved Instance Optimization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute Optimizer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 859 discussion",
      "discusstion": [
        {
          "id": 1223549,
          "date": "Mon 03 Jun 2024 13:17",
          "username": "Scheldon",
          "content": "AnswerAC<br>We have On-Demand instances of RDS. If DB is used very often then it can occur that using Reserved Instrance can bring some $$ savings.<br><br>It is mentioned in AWS docs :)<br><br>https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#amazon-ec2-reserved-instances-optimization",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1333345,
          "date": "Sun 29 Dec 2024 06:29",
          "username": "LeonSauveterre",
          "content": "B is OK but less efficient than A.<br>D is extremely unlikely because \\\"instances have high utilization\\\".<br>E - The finance team is focused on RDS for Oracle On-Demand DB instances, not compute (EC2) instances, so this check won't be useful for optimizing RDS costs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1287138,
          "date": "Sat 21 Sep 2024 05:58",
          "username": "MatAlves",
          "content": "\\\"On-Demand DB instances that have high utilization\\\"<br><br>High Utilizationno point in checking for Idle instances<br>On-Demandit makes sense to replace On-demand for Reserved instances.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1247145,
          "date": "Sat 13 Jul 2024 08:34",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1234569,
          "date": "Fri 21 Jun 2024 18:02",
          "username": "victor78",
          "content": "I THINK IT'S C,D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1247144,
          "date": "Sat 13 Jul 2024 08:33",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1216658,
          "date": "Thu 23 May 2024 16:50",
          "username": "Tomrr",
          "content": "Instances are running On-Demand, they need to check to see if they can save money by switching the reserved instances from on-demand<br><br>An important part of using AWS involves balancing your Reserved Instance (RI) purchase against your On-Demand Instance usage. This check provides recommendations on which RIs will help reduce the costs incurred from using On-Demand Instances.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1216623,
          "date": "Thu 23 May 2024 15:53",
          "username": "bujuman",
          "content": "Cost Optimization: By providing actionable recommendations, Trusted Advisor assists you in identifying areas of overspending and underutilization, like idle RDS DB instances or underused EBS volumes, leading to significant cost savings.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1215528,
          "date": "Wed 22 May 2024 09:49",
          "username": "f07ed8f",
          "content": "Please check with question 308.It should run in management account and review the Trusted Advisor check for Amazon RDS Idle DB Instances.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I correct myself the answer should be AC as the DB can be switch to on-demand rather than reserved and it would save save the cost.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1218847,
          "date": "Sun 26 May 2024 10:38",
          "username": "f07ed8f",
          "content": "I correct myself the answer should be AC as the DB can be switch to on-demand rather than reserved and it would save save the cost.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1193003,
          "date": "Wed 10 Apr 2024 15:00",
          "username": "rondelldell",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#amazon-rds-reserved-instance-optimization",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1188997,
          "date": "Thu 04 Apr 2024 02:39",
          "username": "Awsbeginner87",
          "content": "Option A,E<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i dont think AWS Compute Optimizer work with RDS</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1189617,
          "date": "Fri 05 Apr 2024 04:18",
          "username": "xBUGx",
          "content": "i dont think AWS Compute Optimizer work with RDS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1188916,
          "date": "Wed 03 Apr 2024 23:28",
          "username": "xBUGx",
          "content": "use Trusted advisor on management account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1188748,
          "date": "Wed 03 Apr 2024 17:59",
          "username": "AlvinC2024",
          "content": "https://docs.aws.amazon.com/awssupport/latest/user/organizational-view.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#860",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating an application. The application will run on Amazon EC2 instances in private subnets across multiple Availability Zones in a VPC. The EC2 instances will frequently access large files that contain confidential information. These files are stored in Amazon S3 buckets for processing. The solutions architect must optimize the network architecture to minimize data transfer costs.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#860",
          "answers": [
            {
              "choice": "<p>Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the gateway endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a single NAT gateway in a public subnet. In the route tables for the private subnets, add a default route that points to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS PrivateLink interface endpoint for Amazon S3 in the VPIn the route tables for the private subnets, add an entry for the interface endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create one NAT gateway for each Availability Zone in public subnets. In each of the route tables for the private subnets, add a default route that points to the NAT gateway in the same Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 860 discussion",
      "discusstion": [
        {
          "id": 1223552,
          "date": "Tue 03 Dec 2024 14:26",
          "username": "Scheldon",
          "content": "AnswerA<br><br>I think only option A have any sense. It is cheap (no cost), it is secure (traffic is not going to public network).<br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1198015,
          "date": "Fri 18 Oct 2024 18:02",
          "username": "Hkayne",
          "content": "Aws gateway will have no cost because the trafic will stay on aws infrastructure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191943,
          "date": "Wed 09 Oct 2024 06:16",
          "username": "Tanidanindo",
          "content": "Gateway endpoint will minimize data transfer costs",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188996,
          "date": "Fri 04 Oct 2024 02:36",
          "username": "Awsbeginner87",
          "content": "A- gateway endpoint for S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188917,
          "date": "Thu 03 Oct 2024 23:30",
          "username": "xBUGx",
          "content": "gateway endpoint for Amazon S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188752,
          "date": "Thu 03 Oct 2024 18:07",
          "username": "AlvinC2024",
          "content": "Gateway endpoint is free https://digitalcloud.training/vpc-interface-endpoint-vs-gateway-endpoint-in-aws/.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#861",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports from a client-facing application, which causes a high volume of write operations. The company is concerned that the amount of traffic might be causing performance issues within the application.<br><br>How should a solutions architect design the architecture on AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#861",
          "answers": [
            {
              "choice": "<p>Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode. Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if necessary.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 861 discussion",
      "discusstion": [
        {
          "id": 1198017,
          "date": "Thu 18 Apr 2024 18:06",
          "username": "Hkayne",
          "content": "A or B. Can't be B because there is high volume of writeno need for Elasticache",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231325,
          "date": "Sun 16 Jun 2024 13:15",
          "username": "KennethNg923",
          "content": "high volume of write operation -> Provisioned IOPS SSD storage",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1222064,
          "date": "Fri 31 May 2024 12:12",
          "username": "Scheldon",
          "content": "Answer A<br>For sure we cannot choose generar purpose IOPS SSD hence I would choos provisioned one. addtionally it is a good idea to monitor performance with CloudWatch and adjust setup(provisioned IOPS) if there will be a need.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204075,
          "date": "Mon 29 Apr 2024 17:00",
          "username": "sandordini",
          "content": "The most effective strategy for coping with that limit is to supplement disk-based databases with in-memory caching (Elasticache for Redis, Write-through strategy) I'd go for B...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why I would not choose #B? While ElastiCache can be used for caching read-heavy workloads, it's not the best choice for a database with high write operations as it is primarily designed for fast reads from a cache.</li><li>If it were changes to existing data, maybe. The scenario specifically says data imports. Going with \\\"A\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1320459,
          "date": "Sun 01 Dec 2024 06:21",
          "username": "JA2018",
          "content": "why I would not choose #B? While ElastiCache can be used for caching read-heavy workloads, it's not the best choice for a database with high write operations as it is primarily designed for fast reads from a cache.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1211186,
          "date": "Tue 14 May 2024 04:45",
          "username": "Mr_Marcus",
          "content": "If it were changes to existing data, maybe. The scenario specifically says data imports. Going with \\\"A\\\".",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1191946,
          "date": "Tue 09 Apr 2024 06:17",
          "username": "Tanidanindo",
          "content": "Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#862",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application in the AWS Cloud that generates sensitive archival data files. The company wants to rearchitect the application's data storage. The company wants to encrypt the data files and to ensure that third parties do not have access to the data before the data is encrypted and sent to AWS. The company has already created an Amazon S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#862",
          "answers": [
            {
              "choice": "<p>Configure the S3 bucket to use client-side encryption with an Amazon S3 managed encryption key. Configure the application to use the S3 bucket to store the archival files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the S3 bucket to use dual-layer server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to use client-side encryption with a key stored in AWS Key Management Service (AWS KMS). Configure the application to store the archival files in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 862 discussion",
      "discusstion": [
        {
          "id": 1190187,
          "date": "Sun 06 Oct 2024 04:11",
          "username": "xBUGx",
          "content": "\\\"ensure that third parties do not have access to the data before the data is encrypted and sent to AWS\\\"",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1215549,
          "date": "Fri 22 Nov 2024 11:07",
          "username": "f07ed8f",
          "content": "\\\"Amazon S3 managed encryption key\\\" (SSE-S3) is a server-side encryption.Therefore it is not a client-side encryption.To encrypt the data before sending to S3, it has to be client-side encryption.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1214935,
          "date": "Thu 21 Nov 2024 15:41",
          "username": "Hkayne",
          "content": "Must encrypt the data on client side before uploading it to S3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#863",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#863",
          "answers": [
            {
              "choice": "<p>Write an AWS Lambda function to create an RDS snapshot every day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the RDS database to have a retention period of 30 days for automated backups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 863 discussion",
      "discusstion": [
        {
          "id": 1198572,
          "date": "Fri 19 Apr 2024 13:38",
          "username": "Hkayne",
          "content": "By default, Amazon RDS creates and saves automated backups of your DB instance securely in Amazon S3 for a user-specified retention period. You can set the backup retention period from 1 to 35 days. The maximum retention period currently available for automated snapshots is 35 days. When automated backups are turned on for your DB Instance, Amazon RDS automatically performs a full, daily snapshot of your data and captures transaction logs.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1235291,
          "date": "Sat 22 Jun 2024 11:23",
          "username": "EdricHoang",
          "content": "Its B<br>\\\"Amazon RDS performs a full daily backup of your data during a backup window that you define when you create the DB instance. You can configure a retention period of up to 35 days for the automated backup.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#864",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage hours when multiple users access and read the data, the monitoring system shows degradation of database performance for the write queries. The company wants to increase the scalability of the application to meet peak usage demands.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#864",
          "answers": [
            {
              "choice": "<p>Create a second Aurora DB cluster. Configure a copy job to replicate the users' data to the new database. Update the application to use the second database to read the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX cluster for read-only queries. Write data directly to the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Aurora read replica in the existing Aurora DB cluster. Update the application to use the replica endpoint for read-only queries and to use the cluster endpoint for write queries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 864 discussion",
      "discusstion": [
        {
          "id": 1301838,
          "date": "Wed 23 Oct 2024 04:46",
          "username": "mk168898",
          "content": "I was thinking between B and C. Saw that DAX is for Dynamo DB which is different from the question Aurora DB.<br>So i picked C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231329,
          "date": "Sun 16 Jun 2024 13:20",
          "username": "KennethNg923",
          "content": "Read Replica for multiple users access and read the data",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1229166,
          "date": "Wed 12 Jun 2024 15:12",
          "username": "ug56c",
          "content": "Answer C, wording is that read queries are slowing down write queries -> we need to optimize for read queries -> we need to add read replicas.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Performance.html#Aurora.Managing.Performance.ReadScaling",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1225905,
          "date": "Fri 07 Jun 2024 06:50",
          "username": "sheilawu",
          "content": "write queries>High performance of read & Write Dynamo, I think DAX is a better solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Dynamo is NoSQL...</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1240810,
          "date": "Tue 02 Jul 2024 15:09",
          "username": "Rhydian25",
          "content": "Dynamo is NoSQL...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1222105,
          "date": "Fri 31 May 2024 13:38",
          "username": "Scheldon",
          "content": "AnswerC<br>A - We can create only RO replica of DB hence this is not possible.<br>D - Redshift is not for a DB from my understanding but more like analitics tools<br>B - Could be a thinkg but there is no point of Read-Only from DAX and write to DB cluster. beside it is hard to say if it would be cost effective as we are paying per hour not R/W requests as it is with replica.<br>Hence I would go with C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#865",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance.<br><br>Which combination of steps should the solutions architect take? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#865",
          "answers": [
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose to ingest the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda with AWS Step Functions to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to ingest the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 instances in an Auto Scaling group to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 865 discussion",
      "discusstion": [
        {
          "id": 1188918,
          "date": "Wed 03 Apr 2024 23:45",
          "username": "xBUGx",
          "content": "Lambda maxed to 15mins<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But through Step Functions it would be possible to divide a long task, lasting more than 15 minutes, into multiple Lambda invocations with a maximum duration of 15 minutes.</li><li>but that will introduce additional overhead.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1289545,
          "date": "Thu 26 Sep 2024 17:11",
          "username": "JoeTromundo",
          "content": "But through Step Functions it would be possible to divide a long task, lasting more than 15 minutes, into multiple Lambda invocations with a maximum duration of 15 minutes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but that will introduce additional overhead.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320460,
          "date": "Sun 01 Dec 2024 06:28",
          "username": "JA2018",
          "content": "but that will introduce additional overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1301839,
          "date": "Wed 23 Oct 2024 04:47",
          "username": "mk168898",
          "content": "Eliminate B because lambda max handle 15minutes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1222114,
          "date": "Fri 31 May 2024 13:51",
          "username": "Scheldon",
          "content": "AnswerAE<br><br>Amazon Kinesis data firehose for data ingesting, and hence output cannot go to EC2, hence Fargate with ECS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1198577,
          "date": "Fri 19 Apr 2024 13:45",
          "username": "Hkayne",
          "content": "A is correct for ingesting data.<br>B or E both choises are serverless but the difference is the lambda maximum execution time is 15 minutes. So the right option is E.<br>A and E",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1188982,
          "date": "Thu 04 Apr 2024 01:57",
          "username": "Awsbeginner87",
          "content": "A-ingesting real-time data<br>E- serverless option ECS+fargate",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1188756,
          "date": "Wed 03 Apr 2024 18:19",
          "username": "AlvinC2024",
          "content": "The maximum run time for lambda is 15 mins.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#866",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on multiple Amazon EC2 instances in a VPC. The application needs to write sensitive data to an Amazon S3 bucket. The data cannot be sent over the public internet.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#866",
          "answers": [
            {
              "choice": "<p>Create a gateway VPC endpoint for Amazon S3. Create a route in the VPC route table to the endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an internal Network Load Balancer that has the S3 bucket as the target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the S3 bucket inside the VPCreate a route in the VPC route table to the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Direct Connect connection between the VPC and an S3 regional endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 866 discussion",
      "discusstion": [
        {
          "id": 1301840,
          "date": "Wed 23 Oct 2024 04:49",
          "username": "mk168898",
          "content": "not allowed to access internet, and need to access S3 > gateway VPC endpoint",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1222119,
          "date": "Fri 31 May 2024 13:56",
          "username": "Scheldon",
          "content": "AnswerA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204144,
          "date": "Mon 29 Apr 2024 19:31",
          "username": "sandordini",
          "content": "no internet, S3 > gateway VPC endpoint",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191947,
          "date": "Tue 09 Apr 2024 06:22",
          "username": "Tanidanindo",
          "content": "VPC endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1189549,
          "date": "Thu 04 Apr 2024 23:16",
          "username": "Mikado211",
          "content": "\\\"data cannot be sent over the public internet.\\\"VPC Endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188981,
          "date": "Thu 04 Apr 2024 01:55",
          "username": "Awsbeginner87",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#867",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its production workload on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS) volumes. A solutions architect needs to analyze the current EBS volume cost and to recommend optimizations. The recommendations need to include estimated monthly saving opportunities.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#867",
          "answers": [
            {
              "choice": "<p>Use Amazon Inspector reporting to generate EBS volume recommendations for optimization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager reporting to determine EBS volume recommendations for optimization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch metrics reporting to determine EBS volume recommendations for optimization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Compute Optimizer to generate EBS volume recommendations for optimization.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 867 discussion",
      "discusstion": [
        {
          "id": 1231332,
          "date": "Sun 16 Jun 2024 13:23",
          "username": "KennethNg923",
          "content": "Since need analyze the current EBS volume cost and to recommend optimizations, so have to use AWS compute optimizer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1222120,
          "date": "Fri 31 May 2024 13:58",
          "username": "Scheldon",
          "content": "AnswerD<br><br>AWS Compute Optimizer helps avoid overprovisioning and underprovisioning four types of AWS resources=E2=80=94Amazon Elastic Compute Cloud (EC2) instance types, Amazon Elastic Block Store (EBS) volumes, Amazon Elastic Container Service (ECS) services on AWS Fargate, and AWS Lambda functions=E2=80=94based on your utilization data.<br>https://aws.amazon.com/compute-optimizer/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1198578,
          "date": "Fri 19 Apr 2024 13:48",
          "username": "Hkayne",
          "content": "Get recommendations to optimize your use of AWS resources",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1188980,
          "date": "Thu 04 Apr 2024 01:55",
          "username": "Awsbeginner87",
          "content": "AWS Compute Optimizer helps avoid overprovisioning and underprovisioning four types of AWS resources=E2=80=94Amazon Elastic Compute Cloud (EC2) instance types, Amazon Elastic Block Store (EBS) volumes, Amazon Elastic Container Service (ECS) services on AWS Fargate, and AWS Lambda functions=E2=80=94based on your utilization data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#868",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets daily. The company wants to identify all S3 buckets that are not versioning-enabled.<br><br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#868",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 868 discussion",
      "discusstion": [
        {
          "id": 1190805,
          "date": "Mon 07 Oct 2024 08:54",
          "username": "joseantoniopolo",
          "content": "https://aws.amazon.com/blogs/aws/s3-storage-lens/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1334686,
          "date": "Tue 31 Dec 2024 08:49",
          "username": "LeonSauveterre",
          "content": "FYI, the missing Option A: Set up an AWS CloudTrail event that has a rule to identify all S3 buckets that are not versioning-enabled across Regions.<br><br>A - CloudTrail is meant for audit logs, not for analyzing bucket configurations directly.<br>B - Storage Lens can provide an overview of all S3 buckets and their versioning status across Regions. Those built-in features that can directly tackle your problems should be your top preferences.<br>C - IAM Access Analyzer is designed for access management, not storage configuration analysis.<br>D - S3 Multi-Region Access Points allow applications to access S3 buckets across Regions using a single global endpoint. So not relevant as well.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204154,
          "date": "Tue 29 Oct 2024 20:45",
          "username": "sandordini",
          "content": "Correct answer: A<br>A: You can use an AWS Config managed rule to identify Amazon S3 buckets that do not have versioning enabled.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Potential Option A could \\\"Use AWS Config rules to identify all S3 buckets that are not versioning-enabled across Regions \\\"</li><li>Question #889 contains all the answers including A, which is cloudtrail and obviously wrong.<br>On the other hand S3 Storage Lens:<br>You can use the Versioning-enabled bucket count metric to see which buckets use S3 Versioning. Then, you can take action in the S3 console to enable S3 Versioning for other buckets. So correct answer: B</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1325977,
          "date": "Fri 13 Dec 2024 03:49",
          "username": "JA2018",
          "content": "Potential Option A could \\\"Use AWS Config rules to identify all S3 buckets that are not versioning-enabled across Regions \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1204643,
          "date": "Wed 30 Oct 2024 18:33",
          "username": "sandordini",
          "content": "Question #889 contains all the answers including A, which is cloudtrail and obviously wrong.<br>On the other hand S3 Storage Lens:<br>You can use the Versioning-enabled bucket count metric to see which buckets use S3 Versioning. Then, you can take action in the S3 console to enable S3 Versioning for other buckets. So correct answer: B",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1188978,
          "date": "Fri 04 Oct 2024 01:46",
          "username": "Awsbeginner87",
          "content": "Where is option A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1188920,
          "date": "Thu 03 Oct 2024 23:50",
          "username": "xBUGx",
          "content": "where is option A?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#869",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to enhance its ecommerce order-processing application that is deployed on AWS. The application must process each order exactly once without affecting the customer experience during unpredictable traffic surges.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#869",
          "answers": [
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Put all the orders in the SQS queue. Configure an AWS Lambda function as the target to process the orders.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Publish all the orders to the SNS standard topic. Configure the application as a notification target.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a flow by using Amazon AppFlow. Send the orders to the flow. Configure an AWS Lambda function as the target to process the orders.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS X-Ray in the application to track the order requests. Configure the application to process the orders by pulling the orders from Amazon CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 869 discussion",
      "discusstion": [
        {
          "id": 1301841,
          "date": "Wed 23 Oct 2024 04:54",
          "username": "mk168898",
          "content": "Must process at least once > SQS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1287149,
          "date": "Sat 21 Sep 2024 06:25",
          "username": "MatAlves",
          "content": "\\\"Standard queues support at-least-once message delivery, and FIFO queues support exactly-once message processing and high-throughput mode.\\\"<br><br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html#sqs-benefits",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231333,
          "date": "Sun 16 Jun 2024 13:27",
          "username": "KennethNg923",
          "content": "must process each order exactly once -> FIFO queue",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1222133,
          "date": "Fri 31 May 2024 14:08",
          "username": "Scheldon",
          "content": "AnswerA<br>SQS with FIFO queue will allow to read every customer order in order in which they came and only once.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1198583,
          "date": "Fri 19 Apr 2024 13:51",
          "username": "Hkayne",
          "content": "FIFO queue is the solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191950,
          "date": "Tue 09 Apr 2024 06:26",
          "username": "Tanidanindo",
          "content": "SQS and FIFO",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191076,
          "date": "Sun 07 Apr 2024 19:17",
          "username": "Kaula",
          "content": "FIFO > SQS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191020,
          "date": "Sun 07 Apr 2024 16:55",
          "username": "Mikado211",
          "content": "The application must process each order exactly onceSQS + FIFO",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#870",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two AWS accounts: Production and Development. The company needs to push code changes in the Development account to the Production account. In the alpha phase, only two senior developers on the development team need access to the Production account. In the beta phase, more developers will need access to perform testing.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#870",
          "answers": [
            {
              "choice": "<p>Create two policy documents by using the AWS Management Console in each account. Assign the policy to developers who need access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role in the Development account. Grant the IAM role access to the Production account. Allow developers to assume the role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role in the Production account. Define a trust policy that specifies the Development account. Allow developers to assume the role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM group in the Production account. Add the group as a principal in a trust policy that specifies the Production account. Add developers to the group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 870 discussion",
      "discusstion": [
        {
          "id": 1334700,
          "date": "Tue 31 Dec 2024 09:40",
          "username": "LeonSauveterre",
          "content": "A - We need secure cross-account access between the Development and Production accounts. Option A did nothing about that.<br>B - This setup violates the AWS best practice for cross-account access, which recommends creating roles in the account being accessed (aka Production env).<br>C - As more developers need access, you can grant permissions in the Development account without modifying the role in Production. Also, access is granted through temporary credentials generated when the role is assumed, reducing the risk of long-term credential exposure.<br>D - Groups cannot establish trust between accounts. It didn't provide any mechanism for Development account users to access the Production account.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To \\\"assume\\\" a role in AWS means that you (a developer) temporarily take on the permissions associated with that role. This is done using the AWS Security Token Service (STS), which generates temporary credentials.<br><br>Brief steps of option C:<br>1. Sets up a trust policy that allows entities from the Development account to assume the role. Attaches permissions for the required resources (in this case, access to specific services).<br>2. Attach an IAM policy to your user or role, allowing you to call \\\"sts:AssumeRole\\\".<br>3. Assume the role by doing this:<br><br>aws sts assume-role \\<br>--role-arn \\\"arn:aws:iam::PRODUCTION_ACCOUNT_ID:role/ROLE_NAME\\\" \\<br>--role-session-name \\\"MySessionName\\\"<br><br>4. Use the temporary credentials to access the resources in the Production account during the session duration.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1334702,
          "date": "Tue 31 Dec 2024 09:44",
          "username": "LeonSauveterre",
          "content": "To \\\"assume\\\" a role in AWS means that you (a developer) temporarily take on the permissions associated with that role. This is done using the AWS Security Token Service (STS), which generates temporary credentials.<br><br>Brief steps of option C:<br>1. Sets up a trust policy that allows entities from the Development account to assume the role. Attaches permissions for the required resources (in this case, access to specific services).<br>2. Attach an IAM policy to your user or role, allowing you to call \\\"sts:AssumeRole\\\".<br>3. Assume the role by doing this:<br><br>aws sts assume-role \\<br>--role-arn \\\"arn:aws:iam::PRODUCTION_ACCOUNT_ID:role/ROLE_NAME\\\" \\<br>--role-session-name \\\"MySessionName\\\"<br><br>4. Use the temporary credentials to access the resources in the Production account during the session duration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1317167,
          "date": "Sun 24 Nov 2024 19:47",
          "username": "AMEJack",
          "content": "It should be C, groups can't be used in trust policy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1243495,
          "date": "Sat 06 Jul 2024 20:42",
          "username": "Mayank0502",
          "content": "answer should be D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1215566,
          "date": "Wed 22 May 2024 10:27",
          "username": "f07ed8f",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1214707,
          "date": "Tue 21 May 2024 06:02",
          "username": "TwinSpark",
          "content": "Weird question, but D is actually the only one that allow you to select which developer got access and when, so will go for D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree, as C will let any developers assume the role without control</li><li>I check here: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html, and yes it should be use IAM role, I correct my choice to C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1231335,
          "date": "Sun 16 Jun 2024 13:30",
          "username": "KennethNg923",
          "content": "Agree, as C will let any developers assume the role without control<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I check here: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html, and yes it should be use IAM role, I correct my choice to C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231337,
          "date": "Sun 16 Jun 2024 13:32",
          "username": "KennethNg923",
          "content": "I check here: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html, and yes it should be use IAM role, I correct my choice to C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1202783,
          "date": "Fri 26 Apr 2024 21:10",
          "username": "03beafc",
          "content": "you can't assign groups as principals, b and c don't specify only the senior devs, a is the only one that works here<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>edit, none of these answers are right....</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202784,
          "date": "Fri 26 Apr 2024 21:11",
          "username": "03beafc",
          "content": "edit, none of these answers are right....",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1198828,
          "date": "Fri 19 Apr 2024 22:15",
          "username": "Mikado211",
          "content": "If you want ALL the developers to assume the role in the production, then C using a trust policy to assume the role in production is perfect BUT<br><br>You could allow users in development account to assume the role in production, but in the end you will maintain potentially a big trust policy depending of the total number of users.<br><br>Here you want only some developers to connect to the production (others will follow without knowing if they all can connect and without knowing the number) so managing a separate group will give you a little more maintenance but will allow you to have different rights between the users.<br><br>I'd say D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1197907,
          "date": "Thu 18 Apr 2024 13:28",
          "username": "802c4ff",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1188922,
          "date": "Wed 03 Apr 2024 23:52",
          "username": "xBUGx",
          "content": "i think D is better",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#871",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to restrict access to the content of its web application. The company needs to protect the content by using authorization techniques that are available on AWS. The company also wants to implement a serverless architecture for authorization and authentication that has low login latency.<br><br>The solution must integrate with the web application and serve web content globally. The application currently has a small user base, but the company expects the application's user base to increase.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#871",
          "answers": [
            {
              "choice": "<p>Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon CloudFront to serve the web application globally.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 871 discussion",
      "discusstion": [
        {
          "id": 1231340,
          "date": "Sun 16 Jun 2024 13:35",
          "username": "KennethNg923",
          "content": "Authen: Cognito<br>Globally: Lambda@Edge + cloudfront",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1198608,
          "date": "Fri 19 Apr 2024 14:38",
          "username": "Hkayne",
          "content": "Serve content globally means the use of Cloudfront",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1194406,
          "date": "Fri 12 Apr 2024 17:39",
          "username": "Danges",
          "content": "Implementaci=C3=B3n a nivel global > AWS Cloud Front",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#872",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team uses multiple AWS accounts for its development, staging, and production environments. Team members have been launching large Amazon EC2 instances that are underutilized. A solutions architect must prevent large instances from being launched in all accounts.<br><br>How can the solutions architect meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#872",
          "answers": [
            {
              "choice": "<p>Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM group access to the role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an organization in AWS Organizations in the management account with the default policy. Create a service control policy (SCP) that denies the launch of large EC2 instances, and apply it to the AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 872 discussion",
      "discusstion": [
        {
          "id": 1198612,
          "date": "Fri 19 Apr 2024 14:44",
          "username": "Hkayne",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1334706,
          "date": "Tue 31 Dec 2024 09:54",
          "username": "LeonSauveterre",
          "content": "A - You would need to update and maintain separate IAM policies in each account, which is too much trouble.<br>B - AWS Resource Access Manager (RAM) is primarily for resource sharing and does not directly restrict resource launches.<br>C - IAM roles are better suited for granting access rather than imposing restrictions. You would also need to create and maintain these roles in every account, even more trouble than option A.<br>D - SCPs are powerful here because they apply at the root account level, meaning that even if a developer has direct IAM permissions to launch large instances, the SCP will override and prevent it.<br><br>Also, there's no need to create or manage multiple IAM policies or roles across accounts. Once the SCP is defined and applied, it enforces the restriction automatically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1261033,
          "date": "Mon 05 Aug 2024 12:50",
          "username": "744fdad",
          "content": "why is it not A? If the goal is only to prevent launch of EC2s<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Updating IAM policies must be done separately in each account, and policies for each user must be maintained, which will cause high operation overhead, so D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1326984,
          "date": "Sun 15 Dec 2024 18:17",
          "username": "78b9037",
          "content": "Updating IAM policies must be done separately in each account, and policies for each user must be maintained, which will cause high operation overhead, so D.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1247175,
          "date": "Sat 13 Jul 2024 09:48",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#873",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated a fleet of hundreds of on-premises virtual machines (VMs) to Amazon EC2 instances. The instances run a diverse fleet of Windows Server versions along with several Linux distributions. The company wants a solution that will automate inventory and updates of the operating systems. The company also needs a summary of common vulnerabilities of each instance for regular monthly reviews.<br><br>What should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#873",
          "answers": [
            {
              "choice": "<p>Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Configure AWS Security Hub to produce monthly reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Deploy Amazon Inspector, and configure monthly reports.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Shield Advanced, and configure monthly reports. Deploy AWS Config to automate patch installations on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up Amazon GuardDuty in the account to monitor all EC2 instances. Deploy AWS Config to automate patch installations on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 873 discussion",
      "discusstion": [
        {
          "id": 1214709,
          "date": "Tue 21 May 2024 06:12",
          "username": "TwinSpark",
          "content": "AWS Security Hub performs security best practice checks, aggregates alerts, and enables automated remediation.<br>Amazon Inspector scan workload for vulnerabilities<br>Guardduty threat detection for malicious activity in all account<br>AWS Shield DDOS<br>Regarding security B and D can be right (maybe D a little too much). For patching B is the only valid option.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1301843,
          "date": "Wed 23 Oct 2024 05:04",
          "username": "mk168898",
          "content": "Inspector is for checking vulnerabilities, so B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231341,
          "date": "Sun 16 Jun 2024 13:37",
          "username": "KennethNg923",
          "content": "Inspector for Common vulnerabilities so it is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204379,
          "date": "Tue 30 Apr 2024 08:59",
          "username": "maxhg",
          "content": "inspector for instances and software vulnerabilities",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1198616,
          "date": "Fri 19 Apr 2024 14:51",
          "username": "Hkayne",
          "content": "AWS Systems Manager Patch Manager to automate the process of installing security-related updates for both the operating system and applications.<br>Amazon Inspector for Automated and continual vulnerability management at scale",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1192052,
          "date": "Tue 09 Apr 2024 08:31",
          "username": "Alagong",
          "content": "Create an Auto Scaling group and an ELB in the DR Region, configuring the DynamoDB table as a global table, and setting up DNS failover to the new ELB. This approach allows for quick failover since the infrastructure is already in place and only DNS needs to be updated to redirect traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191954,
          "date": "Tue 09 Apr 2024 06:31",
          "username": "Tanidanindo",
          "content": "Inspector for vulnerability scanning",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1188971,
          "date": "Thu 04 Apr 2024 01:31",
          "username": "Awsbeginner87",
          "content": "Option b",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#874",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances in an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. The application connects to an Amazon DynamoDB table.<br><br>For disaster recovery (DR) purposes, the company wants to ensure that the application is available from another AWS Region with minimal downtime.<br><br>Which solution will meet these requirements with the LEAST downtime?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#874",
          "answers": [
            {
              "choice": "<p>Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template to create EC2 instances, ELBs, and DynamoDB tables to be launched when necessary. Configure DNS failover to point to the new DR Region's ELB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template to create EC2 instances and an ELB to be launched when necessary. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm with an evaluation period of 10 minutes to invoke an AWS Lambda function that updates Amazon Route 53 to point to the DR Region's ELB.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 874 discussion",
      "discusstion": [
        {
          "id": 1334711,
          "date": "Tue 31 Dec 2024 10:10",
          "username": "LeonSauveterre",
          "content": "A - By creating an Auto Scaling group and ELB in the DR Region upfront, you ensure that the infrastructure is ready to handle traffic immediately in case of a failure in the primary Region. This minimizes downtime during a disaster.<br>B & C - Waiting for the CloudFormation stack to create instances, ELBs, and DynamoDB tables delays recovery.<br>D - CloudWatch alarms and Lambda functions will introduce additional complexity and potential delays due to the evaluation period (> 10 minutes).<br><br>For A, simply create an Auto Scaling group and ELB in the DR Region. Use the same configurations as the primary Region. Just make sure that the AMI used for EC2 instances includes all necessary application code and dependencies.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1301849,
          "date": "Wed 23 Oct 2024 05:23",
          "username": "mk168898",
          "content": "B and C seems to take a while to launch, so it is not minimal down time",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1249478,
          "date": "Wed 17 Jul 2024 11:06",
          "username": "muhammadahmer36",
          "content": "Downtime I would choose Auto scaling + DNS failover rather than use cloud formation create infrastructure in DR region or Auto scaling + Lambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231346,
          "date": "Sun 16 Jun 2024 13:46",
          "username": "KennethNg923",
          "content": "Downtime I would choose Auto scaling + DNS failover rather than use cloud formation create infrastructure in DR region or Auto scaling + Lambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1220833,
          "date": "Wed 29 May 2024 12:56",
          "username": "Scheldon",
          "content": "AnswerA<br>Hence there is no information that solution need to be cost effective and the main requirement is minimal downtime i would go with AUTOSCALING in DR region with 1 ELB and 1 server there but in case of need amount of servers can be increased automatically. Hence at least 1 server and ELB will be waiting and DynamoDB thanks to global table will be active in the same DR region as well, hence we need to inform users, using DNS about new destination, hence DNS failover to the ELB in DR region is the best solution here.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1198618,
          "date": "Fri 19 Apr 2024 14:58",
          "username": "Hkayne",
          "content": "With dynamo global tables, we just need to create an ELB and a ASG in the DR region resources. This resources will be used only if the main region fail over.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1192056,
          "date": "Tue 09 Apr 2024 08:36",
          "username": "Alagong",
          "content": "Create an Auto Scaling group and an ELB in the DR Region, configuring the DynamoDB table as a global table, and setting up DNS failover to the new ELB. This approach allows for quick failover since the infrastructure is already in place and only DNS needs to be updated to redirect traffic.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1191957,
          "date": "Tue 09 Apr 2024 06:34",
          "username": "Tanidanindo",
          "content": "Least downtime. C does not offer minimal downtime",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188968,
          "date": "Thu 04 Apr 2024 01:28",
          "username": "Awsbeginner87",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#875",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on Amazon EC2 instances in a private subnet. The application needs to store and retrieve data in Amazon S3 buckets. According to regulatory requirements, the data must not travel across the public internet.<br><br>What should a solutions architect do to meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#875",
          "answers": [
            {
              "choice": "<p>Deploy a NAT gateway to access the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Storage Gateway to access the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an S3 interface endpoint to access the S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an S3 gateway endpoint to access the S3 buckets.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 875 discussion",
      "discusstion": [
        {
          "id": 1334713,
          "date": "Tue 31 Dec 2024 10:14",
          "username": "LeonSauveterre",
          "content": "About option C - S3 Interface Endpoint<br>1. Creates a private network interface (ENI) in your VPC that connects to Amazon S3.<br>2. Provides granular IAM-based controls at the operation level.<br>3. Typically much more expensive due to the cost associated with the network interface and data processing charges.<br><br>About option D - S3 Gateway Endpoint:<br>1. Creates a route entry in the VPC route table for accessing S3 without crossing the public internet.<br>2. Simpler and more cost-effective for high-volume S3 access, as there are no additional data processing charges or interface costs.<br>3. Doesn't support granular IAM controls per operation, but bucket policies can be used for access control so that's good.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1325992,
          "date": "Fri 13 Dec 2024 04:15",
          "username": "JA2018",
          "content": "Why I opt for Option C?<br><br>#Private Access:<br>It allows direct access to S3 buckets from a private subnet without data traversing the public internet, meeting the regulatory requirement.<br><br>#Cost-Effective:<br>Compared to other options, utilizing an S3 interface endpoint is generally the most cost-efficient way to achieve private access to S3.<br><br>#Summary:<br>When data needs to stay within a private network, use an S3 interface endpoint to access S3 buckets.<br>Always consider the specific regulatory requirements and cost implications when choosing a solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1301850,
          "date": "Wed 23 Oct 2024 05:24",
          "username": "mk168898",
          "content": "no internet and need access to s3 > s3 gateway endpoint",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231347,
          "date": "Sun 16 Jun 2024 13:48",
          "username": "KennethNg923",
          "content": "Gateway endpoint free, so definitely interface end point expensive than it",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1220840,
          "date": "Wed 29 May 2024 13:07",
          "username": "Scheldon",
          "content": "AnswerD<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html<br>taking into consideration that in both cases (s3 Instance Endpoint and S3Gateway endpoint), network traffic remains on the AWS network we need to think about other data which we have. For example application is in AWS cloud hence there is no need for access from on-premises. in that situation S3 Gateway endpoint seems to be better (and it is for free)<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1198619,
          "date": "Fri 19 Apr 2024 15:00",
          "username": "Hkayne",
          "content": "D for sure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1197784,
          "date": "Thu 18 Apr 2024 09:46",
          "username": "BatVanyo",
          "content": "Gateway endpoints are free.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1194056,
          "date": "Fri 12 Apr 2024 02:20",
          "username": "awsshare",
          "content": "Sorry, I think D is the correct option. Gateway endpoint is cheaper than Interface endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1191960,
          "date": "Tue 09 Apr 2024 06:35",
          "username": "Tanidanindo",
          "content": "Gateway endpoint for S3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1191511,
          "date": "Mon 08 Apr 2024 12:32",
          "username": "awsshare",
          "content": "should be C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#876",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on Amazon EC2 instances that run in a single Availability Zone. The application is accessible by using the transport layer of the Open Systems Interconnection (OSI) model. The company needs the application architecture to have high availability.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#876",
          "answers": [
            {
              "choice": "<p>Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer in front of the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load Balancer for HTTP and HTTPS traffic to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple Availability Zones. Configure the Auto Scaling group to run application health checks on the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a stopped state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 876 discussion",
      "discusstion": [
        {
          "id": 1222024,
          "date": "Fri 31 May 2024 10:27",
          "username": "Scheldon",
          "content": "AnswerBD<br>There is no information about the ports numbers and only that means that we need to use NLB, ALB is only for HTTP hence there is no point of using that solution as connection can be done via any port for exampl 4000<br>Autoscaling with instances in multiple AZ is the best solution. it will allow run new EC2 if it fail and in case if whole AZ will go down we will have 2nd one.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1304019,
          "date": "Mon 28 Oct 2024 16:02",
          "username": "LuongTo",
          "content": "C is more comprehensive than B. I voted CD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1301854,
          "date": "Wed 23 Oct 2024 05:31",
          "username": "mk168898",
          "content": "accessible by transport layer means not by application layer means no need ALB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1277091,
          "date": "Tue 03 Sep 2024 03:33",
          "username": "AbhiBK",
          "content": "Answer is A & D -By deploying EC2 instances in multiple Availability Zones (Option A), you ensure that your application remains available even if one Availability Zone experiences an outage. This setup provides redundancy and fault tolerance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1249481,
          "date": "Wed 17 Jul 2024 11:10",
          "username": "muhammadahmer36",
          "content": "as it mention \\\"The application is accessible by using the transport layer\\\" which is TCP, so no more information or reason to use ALB as well, so I will go for B+D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1231348,
          "date": "Sun 16 Jun 2024 13:52",
          "username": "KennethNg923",
          "content": "as it mention \\\"The application is accessible by using the transport layer\\\" which is TCP, so no more information or reason to use ALB as well, so I will go for B+D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1204445,
          "date": "Tue 30 Apr 2024 11:16",
          "username": "sandordini",
          "content": "No word about the HTTP/application layer, only OSI 4 - TCP > B, an NLB should be enough<br>D: for Autoscaling.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1191963,
          "date": "Tue 09 Apr 2024 06:37",
          "username": "Tanidanindo",
          "content": "transport layer means just NLB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1188961,
          "date": "Thu 04 Apr 2024 01:25",
          "username": "Awsbeginner87",
          "content": "B- since network layer operates at layer 4 i.e transport layer<br>D- for hHA<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Edited-Doption for HA</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1188962,
          "date": "Thu 04 Apr 2024 01:25",
          "username": "Awsbeginner87",
          "content": "Edited-Doption for HA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1188927,
          "date": "Thu 04 Apr 2024 00:03",
          "username": "xBUGx",
          "content": "question says the application is running on Transport Layer. i dont think there is need for ALB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#877",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to host its static website. The company wants to add a contact form to the webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message.<br><br>The company expects fewer than 100 site visits each month. The contact form must notify the company by email when a customer fills out the form.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#877",
          "answers": [
            {
              "choice": "<p>Host the dynamic contact form in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to a third-party email provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon API Gateway endpoint that returns the contact form from an AWS Lambda function. Configure another Lambda function on the API Gateway to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Host the website by using AWS Amplify Hosting for static content and dynamic content. Use server-side scripting to build the contact form. Configure Amazon Simple Queue Service (Amazon SQS) to deliver the message to the company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the website from Amazon S3 to Amazon EC2 instances that run Windows Server. Use Internet Information Services (IIS) for Windows Server to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 877 discussion",
      "discusstion": [
        {
          "id": 1301858,
          "date": "Wed 23 Oct 2024 05:53",
          "username": "mk168898",
          "content": "i see need to notify > SNS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231349,
          "date": "Sun 16 Jun 2024 13:54",
          "username": "KennethNg923",
          "content": "as it said \\\"The company expects fewer than 100 site visits each month\\\" and Lambda charge per each time calling it, so i will go for B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1230849,
          "date": "Sat 15 Jun 2024 10:49",
          "username": "EdricHoang",
          "content": "Limitation is 100 submission a month, not frequent -> Lambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1222027,
          "date": "Fri 31 May 2024 10:34",
          "username": "Scheldon",
          "content": "AnswerB<br><br>API gateway + Lambda seems to be the best option expecially when SNS is in use which is specially created to push messaged to the subscribers (company appropraiate team in this situation)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1199171,
          "date": "Sat 20 Apr 2024 15:42",
          "username": "Hkayne",
          "content": "B is the right answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#878",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company creates dedicated AWS accounts in AWS Organizations for its business units. Recently, an important notification was sent to the root user email address of a business unit account instead of the assigned account owner. The company wants to ensure that all future notifications can be sent to different employees based on the notification categories of billing, operations, or security.<br><br>Which solution will meet these requirements MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#878",
          "answers": [
            {
              "choice": "<p>Configure each AWS account to use a single email address that the company manages. Ensure that all account owners can access the email account to receive notifications. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each AWS account to use a different email distribution list for each business unit that the company manages. Configure each distribution list with administrator email addresses that can respond to alerts. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each AWS account root user email address to be the individual company managed email address of one person from each business unit. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure each AWS account root user to use email aliases that go to a centralized mailbox. Configure alternate contacts for each account by using a single business managed email distribution list each for the billing team, the security team, and the operations team.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 878 discussion",
      "discusstion": [
        {
          "id": 1214764,
          "date": "Tue 21 May 2024 09:01",
          "username": "Linuslin",
          "content": "D is correct answer.<br>Configuring each AWS account's root user to use email aliases that go to a centralized mailbox ensures that sensitive notifications are not directly sent to individual email addresses. Instead, they are directed to a centralized mailbox, reducing the risk of unauthorized access to sensitive information. Additionally, configuring alternate contacts for each account using a single business-managed email distribution list for the billing team, the security team, and the operations team ensures that notifications are appropriately routed to the respective teams based on the categories of billing, operations, or security. This approach centralizes control and reduces the likelihood of misconfiguration or unauthorized access to sensitive notifications.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A doesn't provide the same level of security because it relies on a single email address managed by the company, which could be compromised, and it requires all account owners to access this email account, potentially leading to access control issues.<br><br>Option B presents a similar issue as Option A, as it relies on different email distribution lists but still requires administrator email addresses that may be vulnerable to compromise.<br><br>Option C also has security concerns because it associates the root user email address with individual employees, which may not be ideal for security and access control purposes.<br><br>So, Option D is the most secure solution for ensuring that future notifications can be sent to different employees based on the notification categories of billing, operations, or security.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1214765,
          "date": "Tue 21 May 2024 09:01",
          "username": "Linuslin",
          "content": "Option A doesn't provide the same level of security because it relies on a single email address managed by the company, which could be compromised, and it requires all account owners to access this email account, potentially leading to access control issues.<br><br>Option B presents a similar issue as Option A, as it relies on different email distribution lists but still requires administrator email addresses that may be vulnerable to compromise.<br><br>Option C also has security concerns because it associates the root user email address with individual employees, which may not be ideal for security and access control purposes.<br><br>So, Option D is the most secure solution for ensuring that future notifications can be sent to different employees based on the notification categories of billing, operations, or security.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1204156,
          "date": "Mon 29 Apr 2024 19:55",
          "username": "d401c0d",
          "content": "Question mentions the email was sent to a business unit account instead of an account owner. Thus, A mentions all account owners to have access to email account.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1311789,
          "date": "Thu 14 Nov 2024 09:05",
          "username": "bujuman",
          "content": "The most secure way should use \\\"Update the alternate contacts for any AWS account in your organization\\\"<br>https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1308669,
          "date": "Fri 08 Nov 2024 09:02",
          "username": "MrIndia2022",
          "content": "question- option D uses a single distribution list for all business units vs Option B which uses separate, independent distribution lists for each business unit. This involves more segregation of emails and hence is more secure. I am confused between option B and d. Pl help",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1287177,
          "date": "Sat 21 Sep 2024 08:44",
          "username": "MatAlves",
          "content": "Both B and D use Distribution Lists as part of the of the solution:<br>B - \\\"configure each DL with administrator email addresses that can respond to alerts\\\"<br>D - \\\"configure alternate contacts for each account by using single business managed DL each\\\" per team.<br><br>I confess the wording isn't amazing, but between B and D, the latter is the one that properly addresses the issue involving root user email address.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1231980,
          "date": "Mon 17 Jun 2024 16:48",
          "username": "jadeconstancy",
          "content": "correct answer is D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1225925,
          "date": "Fri 07 Jun 2024 08:04",
          "username": "sheilawu",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_update_primary_email.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#879",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an ecommerce application on AWS. Amazon EC2 instances process purchases and store the purchase details in an Amazon Aurora PostgreSQL DB cluster.<br><br>Customers are experiencing application timeouts during times of peak usage. A solutions architect needs to rearchitect the application so that the application can scale to meet peak usage demands.<br><br>Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#879",
          "answers": [
            {
              "choice": "<p>Configure an Auto Scaling group of new EC2 instances to retry the purchases until the processing is complete. Update the applications to connect to the DB cluster by using Amazon RDS Proxy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to use an Amazon ElastiCache cluster in front of the Aurora PostgreSQL DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon AP! Gateway REST API with a usage plan.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 879 discussion",
      "discusstion": [
        {
          "id": 1204502,
          "date": "Tue 30 Apr 2024 12:49",
          "username": "sandordini",
          "content": "A) uses RDS Proxy which is mainly for connection pooling and availability issues. Proxy is for too many connections(, not for performance: read replicas, caching)<br>B is caching which is designed for solving read-issues. (Here we have timeouts, and connection issues.)<br>C: SQS is good method for decoupling.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1202332,
          "date": "Fri 26 Apr 2024 03:38",
          "username": "Abdullah_Cloud",
          "content": "i think it's BC",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1331081,
          "date": "Tue 24 Dec 2024 11:26",
          "username": "EllenLiu",
          "content": "why not choose B? C is wired design.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1320952,
          "date": "Mon 02 Dec 2024 14:01",
          "username": "Cpso",
          "content": "As a developer choose both A&C is wired? while we use SQS solution to buffer request before handle by EC2 fleet.why we need EC2 in front of SQS from A.? what of thier propose.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1298128,
          "date": "Tue 15 Oct 2024 10:34",
          "username": "XXXXXlNN",
          "content": "BC.<br>Not idea why retry helps in this scenario besides it adds more complexity into the current design and also doesn't resolve the avalibility issue...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1296816,
          "date": "Sun 13 Oct 2024 11:03",
          "username": "b3b5fdd",
          "content": "B and C!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1287185,
          "date": "Sat 21 Sep 2024 08:59",
          "username": "MatAlves",
          "content": "A - simply pointless.<br><br>B- You're already using SQS (C), so why using ec2 to \\\"retry the purchase\\\"? They will stay in the queue until the purchase is processed. Otherwise, they will simply return to the queue.<br><br>C - This decouples the application from direct database calls, allowing the processing of purchase requests to scale independently and manage load more effectively.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1266719,
          "date": "Fri 16 Aug 2024 00:07",
          "username": "pujithacg8",
          "content": "when we have SQS in option C why do you have to retry it again<br><br>I think the answer is B and C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1231119,
          "date": "Sat 15 Jun 2024 22:24",
          "username": "EdricHoang",
          "content": "Combine SQS and auto-scaling EC2:<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#880",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an Amazon S3 bucket that is replicated to a bucket in the data collection account.<br><br>The company's senior leadership wants to view a custom dashboard that provides NAT gateway costs each day starting at the beginning of the current month.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#880",
          "answers": [
            {
              "choice": "<p>Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 880 discussion",
      "discusstion": [
        {
          "id": 1301860,
          "date": "Wed 23 Oct 2024 06:04",
          "username": "mk168898",
          "content": "dashboard > quicksight, S3 query > athena",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231353,
          "date": "Sun 16 Jun 2024 14:01",
          "username": "KennethNg923",
          "content": "QuickSight for dashboard and Athena for query each month so it is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204504,
          "date": "Tue 30 Apr 2024 12:54",
          "username": "sandordini",
          "content": "Senior Leadership, custom dashboard, visualization: Quicksight Dashboard<br>S3 query: Athena",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204158,
          "date": "Mon 29 Apr 2024 20:02",
          "username": "d401c0d",
          "content": "B. Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report.<br><br>QuickSight works well with Athena and it can interact S3",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1189540,
          "date": "Thu 04 Apr 2024 22:57",
          "username": "Mikado211",
          "content": "You definitely use Athena to request S3.<br>Both cloudwatch and quicksight can interact with S3.<br>Since we are taking about \\\"The company's senior leadership\\\" I'd tend to use quicksight for a better format.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#881",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a high-traffic static website on Amazon S3 with an Amazon CloudFront distribution that has a default TTL of 0 seconds. The company wants to implement caching to improve performance for the website. However, the company also wants to ensure that stale content is not served for more than a few minutes after a deployment.<br><br>Which combination of caching methods should a solutions architect implement to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#881",
          "answers": [
            {
              "choice": "<p>Set the CloudFront default TTL to 2 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set a default TTL of 2 minutes on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a Cache-Control private directive to the objects in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda@Edge function to add an Expires header to HTTP responses. Configure the function to run on viewer response.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment, create a CloudFront invalidation to clear any changed files from edge caches.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 881 discussion",
      "discusstion": [
        {
          "id": 1287191,
          "date": "Sat 21 Sep 2024 09:15",
          "username": "MatAlves",
          "content": "You simply can't have A and E in the same approach:<br><br>\\\"Default TTL applies only when your origin does not add HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, or Expires to objects.\\\"<br><br>C - Cache-Control private directive specifies that the response is intended for a single user and should not be cached by shared caches - it can still be cached, but only on a client device.<br><br>This combination of steps would provide the best solution for the case.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDefaultTTL<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Setting Cache-Control: private would prevent CloudFront from caching the content entirely, which is not the goal outlined, as it wants to use caching. After some time with updates, the caching performance will degrade for the entire solution as more and more objects get that directive.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1311564,
          "date": "Wed 13 Nov 2024 19:22",
          "username": "Sergantus",
          "content": "Setting Cache-Control: private would prevent CloudFront from caching the content entirely, which is not the goal outlined, as it wants to use caching. After some time with updates, the caching performance will degrade for the entire solution as more and more objects get that directive.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1205565,
          "date": "Thu 02 May 2024 15:16",
          "username": "BBR01",
          "content": "AE.<br>By default, each file automatically expires after 24 hours, but you can change the default behavior in two ways:<br><br>1. To change the cache duration for all files that match the same path pattern, you can change the CloudFront settings for Minimum TTL, Maximum TTL, and Default TTL for a cache behavior.<br><br>2. To change the cache duration for an individual file, you can configure your origin to add a Cache-Control header with the max-age or s-maxage directive, or an Expires header to the file.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html#expiration-individual-objects",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1321120,
          "date": "Mon 02 Dec 2024 23:05",
          "username": "Cpso",
          "content": "browser will always get cache-control value set by S3not cloudfront.<br>cloudfront will use parameter ttl override the cache-control headerfor decision time to cache on cloudfront.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html?utm_sourcechatgpt.com#ExpirationDownloadDist",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1321111,
          "date": "Mon 02 Dec 2024 22:41",
          "username": "Cpso",
          "content": "A - make browser to cache 2 minutes.after 2 minute browser will ask cloudfront<br><br>E: cloudfront would not ask S3 for 24hour . invalidation will clearing this cacheing.<br><br>so A+E is most effective.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1320467,
          "date": "Sun 01 Dec 2024 07:10",
          "username": "JA2018",
          "content": "#A - Set the CloudFront default TTL to 2 minutes: This directly controls how long content is cached at the CloudFront edge locations, allowing for a short caching window to meet the requirement of not serving stale content for more than a few minutes.<br><br>#D - Create a Lambda@Edge function to add an Expires header: By using a Lambda@Edge function triggered on the \\\"viewer response\\\", you can dynamically set an Expires header with a precise expiration time on each request, ensuring fine-grained control over caching behavior.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>#B - Set a default TTL of 2 minutes on the S3 bucket: This would not be as effective as setting the TTL at the CloudFront level as the caching would happen at the origin server (S3) instead of the edge locations, potentially impacting performance.<br><br># C - Add a Cache-Control private directive: This directive would prevent browser caching, which is not the desired outcome in this scenario.<br><br># E - Add a Cache-Control max-age directive of 24 hours with CloudFront invalidation: Setting a large max-age on objects in S3 and invalidating on deployment would not provide the necessary granular control for keeping content fresh within a few minutes.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1320468,
          "date": "Sun 01 Dec 2024 07:10",
          "username": "JA2018",
          "content": "#B - Set a default TTL of 2 minutes on the S3 bucket: This would not be as effective as setting the TTL at the CloudFront level as the caching would happen at the origin server (S3) instead of the edge locations, potentially impacting performance.<br><br># C - Add a Cache-Control private directive: This directive would prevent browser caching, which is not the desired outcome in this scenario.<br><br># E - Add a Cache-Control max-age directive of 24 hours with CloudFront invalidation: Setting a large max-age on objects in S3 and invalidating on deployment would not provide the necessary granular control for keeping content fresh within a few minutes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1258061,
          "date": "Tue 30 Jul 2024 11:23",
          "username": "1ba9aa0",
          "content": "A-C,<br><br>Because A-E is not possible following this link: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDefaultTTL<br>\\\"Default TTL applies only when your origin does not add HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, or Expires to objects.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1244005,
          "date": "Sun 07 Jul 2024 22:48",
          "username": "EdricHoang",
          "content": "If the content still keep client's cache in 24h, its wrong (answer E)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1229236,
          "date": "Wed 12 Jun 2024 16:21",
          "username": "ug56c",
          "content": "If your minimum TTL is greater than 0, CloudFront uses the cache policy's minimum TTL, even if the Cache-Control: no-cache, no-store, and/or private directives are present in the origin headers.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1223706,
          "date": "Mon 03 Jun 2024 18:53",
          "username": "Nm55569",
          "content": "\\\"However, the company also wants to ensure that stale content is not served for more than a few minutes after a deployment.\\\"<br>After a deployment<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly, it was not outlined that the user shouldn't see the stale content, only that it's not served.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1311562,
          "date": "Wed 13 Nov 2024 19:15",
          "username": "Sergantus",
          "content": "Exactly, it was not outlined that the user shouldn't see the stale content, only that it's not served.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1220112,
          "date": "Tue 28 May 2024 11:40",
          "username": "Scheldon",
          "content": "Answer (AC)<br><br>Per table on URL<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html#expiration-individual-objects<br>answer E is incorrect because if we will change cache-control max-age to 24h it will means that customer browser will cache web for 24h and customer want to be sure that it will be not longer then few min.<br>Expires header (answer D) from my understanding can be used only on full folder of web not as lambda function which will reply to customer reqeusts.<br>We are setting Default TTL for CloudFront (answer A) not on S3 (answer B) and it will say CloudFront to cache web for 2min.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Adding Cache-control private (answerC) will work per customer wish but only if we will add them to the objects which are changed very often or if we will set minimum TTL.<br>In the 1 situation User Browser will not store files which we designate to be often changed and mentioned files will be downloaded every time from origin.<br>In the 2 situation, Cloud front will cache web files for min TTL time but customer browser will not store them.<br>Taking all that in to account I would go with AC</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1220113,
          "date": "Tue 28 May 2024 11:41",
          "username": "Scheldon",
          "content": "Adding Cache-control private (answerC) will work per customer wish but only if we will add them to the objects which are changed very often or if we will set minimum TTL.<br>In the 1 situation User Browser will not store files which we designate to be often changed and mentioned files will be downloaded every time from origin.<br>In the 2 situation, Cloud front will cache web files for min TTL time but customer browser will not store them.<br>Taking all that in to account I would go with AC",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1214782,
          "date": "Tue 21 May 2024 09:31",
          "username": "Linuslin",
          "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html#expiration-individual-objects<br><br>https://stackoverflow.com/questions/43343759/confused-with-minimum-maximum-and-default-ttl-in-cloudfront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1207212,
          "date": "Mon 06 May 2024 08:33",
          "username": "02ffe1c",
          "content": "Since it don't want to cache more than a minute, A cannot be an answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>no where in the question did it say 1 minute. You mean more than a few minutes?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1301861,
          "date": "Wed 23 Oct 2024 06:08",
          "username": "mk168898",
          "content": "no where in the question did it say 1 minute. You mean more than a few minutes?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1205867,
          "date": "Fri 03 May 2024 01:32",
          "username": "kelmryan1",
          "content": "Answer is AE , C would only be on the user browser and would not cache to the cloud front and would be useless",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1188930,
          "date": "Thu 04 Apr 2024 00:13",
          "username": "xBUGx",
          "content": "Add a Cache-Control Private Directive to Objects in Amazon S3 (Option C):<br>By setting the Cache-Control header to private for objects in the S3 bucket, you control caching behavior.<br>The private directive indicates that the content is intended for a single user and should not be cached by intermediate proxies or CDNs.<br>This helps prevent stale content from being served to multiple users.<br>Additionally, consider using other Cache-Control directives (e.g., max-age, no-cache, no-store) as needed.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        }
      ]
    },
    {
      "question_id": "#882",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application by using Amazon EC2 instances and AWS Lambda functions. The EC2 instances run in private subnets of a VPC. The Lambda functions need direct network access to the EC2 instances for the application to work.<br><br>The application will run for 1 year. The number of Lambda functions that the application uses will increase during the 1-year period. The company must minimize costs on all application resources.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#882",
          "answers": [
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to the private subnets that contain the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to new public subnets in the same VPC where the EC2 instances run.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan. Connect the Lambda functions to the private subnets that contain the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan. Keep the Lambda functions in the Lambda service VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 882 discussion",
      "discusstion": [
        {
          "id": 1193792,
          "date": "Thu 11 Apr 2024 14:55",
          "username": "Guru4Cloud",
          "content": "Compute Savings Plan: This plan offers significant discounts on Lambda functions compared to on-demand pricing. Since the application will run for a year, a sustained use discount like Compute Savings Plan is ideal.<br>Private Subnets: Lambda functions in private subnets can directly access EC2 instances within the VPC without needing internet access, reducing security risks and potential egress costs.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1301862,
          "date": "Wed 23 Oct 2024 06:10",
          "username": "mk168898",
          "content": "A and B is not because it is talkign about EC2, but the question is asking for Lambda",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1297560,
          "date": "Mon 14 Oct 2024 14:47",
          "username": "jacinml",
          "content": "Compute savings include lamdba and EC2, Ec2 savings only EC2 instances.<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1241402,
          "date": "Wed 03 Jul 2024 14:20",
          "username": "Lin878",
          "content": "I confuse this Question. Instance saving plan is cheaper than compute saving plan.<br>https://aws.amazon.com/savingsplans/compute-pricing/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But composite saving plan discount Automatically applies to Lambda.</li><li>Sorry I mean Compute Savings Plan.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1247532,
          "date": "Sun 14 Jul 2024 00:46",
          "username": "navneet_sh",
          "content": "But composite saving plan discount Automatically applies to Lambda.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry I mean Compute Savings Plan.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1247533,
          "date": "Sun 14 Jul 2024 00:47",
          "username": "navneet_sh",
          "content": "Sorry I mean Compute Savings Plan.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1225915,
          "date": "Fri 07 Jun 2024 07:19",
          "username": "sheilawu",
          "content": "In this question has point out \\\"access EC2 instances\\\" within VPC,> Lambda VPC to an ENI (Elastic network interface) in your account VPC.>No charge.<br>Therefore I stick with A, Not D.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>An EC2 Instance Savings Plan is limited to savings on EC2 instances only. It does not provide cost savings for Lambda functions. Therefore, it is not the best choice given that the number of Lambda functions is expected to increase.</li><li>I am sorry I mean C</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1299608,
          "date": "Fri 18 Oct 2024 11:33",
          "username": "JohnYu",
          "content": "An EC2 Instance Savings Plan is limited to savings on EC2 instances only. It does not provide cost savings for Lambda functions. Therefore, it is not the best choice given that the number of Lambda functions is expected to increase.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1225916,
          "date": "Fri 07 Jun 2024 07:20",
          "username": "sheilawu",
          "content": "I am sorry I mean C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1220174,
          "date": "Tue 28 May 2024 13:18",
          "username": "Scheldon",
          "content": "AnswerD<br><br>https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#883",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a multi-account strategy on AWS by using AWS Control Tower. The company has provided individual AWS accounts to each of its developers. The company wants to implement controls to limit AWS resource costs that the developers incur.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#883",
          "answers": [
            {
              "choice": "<p>Instruct each developer to tag all their resources with a tag that has a key of CostCenter and a value of the developer's name. Use the required-tags AWS Config managed rule to check for the tag. Create an AWS Lambda function to terminate resources that do not have the tag. Configure AWS Cost Explorer to send a daily report to each developer to monitor their spending.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Budgets to establish budgets for each developer account. Set up budget alerts for actual and forecast values to notify developers when they exceed or expect to exceed their assigned budget. Use AWS Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from being launched when the assigned budget is reached.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Cost Explorer to monitor and report on costs for each developer account. Configure Cost Explorer to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect anomalous spending and provide alerts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS Lambda functions in each AWS account to stop running resources at the end of each work day. Configure the Lambda functions to resume the resources at the start of each work day.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 883 discussion",
      "discusstion": [
        {
          "id": 1204613,
          "date": "Tue 30 Apr 2024 16:30",
          "username": "sandordini",
          "content": "My first instinct says B, but Im concerned about the central management abilities of AWS Budgets. It seems that even though it is not planned to be used primarily to control other accounts its still possible:<br>\\\"You can use actions to define an explicit response that you want to take when a budget exceeds its action threshold. You can trigger these alerts on actual or forecasted cost and usage budgets.<br>1. The management account sets the budget and threshold for the member account using budget filters.<br>2. When the budget threshold is breached, a budget action applies a restrictive SCP on the OU.<br><br>So hopefully B :D",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1220158,
          "date": "Tue 28 May 2024 12:55",
          "username": "Scheldon",
          "content": "AnswerB<br><br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html<br>Taking into consideration that AWS Budgets is allowing to will inform you that you exceeded budged and execute actions like for exampleIAM actions to prevent running new resources in cloud, I think this option is a good and resonable move. In case of need budged can be always increased and \\\"chains\\\" disabled.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1287196,
          "date": "Sat 21 Sep 2024 09:24",
          "username": "MatAlves",
          "content": "As beautifully explained in this article:<br><br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1232665,
          "date": "Wed 19 Jun 2024 02:32",
          "username": "NSA_Poker",
          "content": "(A) is eliminated. 'send a daily report to each developer' can be ignored.<br>(C) is eliminated. 'detect anomalous spending' won't stop the spending.<br>(D) is eliminated. 'stop running resources at the end of each work day' won't stop developers from mining bitcoin ($$$) the next day.<br>(B) is correct. 'actions to apply a DenyAll policy..' is the only solution that will 'implement controls to limit AWS resource costs that the developers incur.'<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'd definitely be mining bitcoin the next day...</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1287193,
          "date": "Sat 21 Sep 2024 09:23",
          "username": "MatAlves",
          "content": "I'd definitely be mining bitcoin the next day...",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1215606,
          "date": "Wed 22 May 2024 11:25",
          "username": "f07ed8f",
          "content": "Seem AWS Budgets does not have DenyAll function but only<br><br>Apply a custom Deny IAM policy that restricts the ability for a user, group, or role to provision additional Amazon EC2 resources",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1205572,
          "date": "Thu 02 May 2024 15:29",
          "username": "BBR01",
          "content": "B and D are too aggressive.<br>A - \\\"Instruct each developer\\\", nope, too much operational work.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#884",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a three-tier web application. The architecture consists of an internet-facing Application Load Balancer (ALB) and a web tier that is hosted on Amazon EC2 instances in private subnets. The application tier with the business logic runs on EC2 instances in private subnets. The database tier consists of Microsoft SQL Server that runs on EC2 instances in private subnets. Security is a high priority for the company.<br><br>Which combination of security group configurations should the solutions architect use? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#884",
          "answers": [
            {
              "choice": "<p>Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for the ALB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the security group for the application tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the security group for the application tier to allow inbound HTTPS traffic from the security group for the web tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 884 discussion",
      "discusstion": [
        {
          "id": 1231167,
          "date": "Sun 16 Jun 2024 02:24",
          "username": "EdricHoang",
          "content": "Security group is stateful, just need allow Inbound.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree since security group is stateful so allow inbound is enough</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1231357,
          "date": "Sun 16 Jun 2024 14:09",
          "username": "KennethNg923",
          "content": "Agree since security group is stateful so allow inbound is enough",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1220186,
          "date": "Tue 28 May 2024 13:32",
          "username": "Scheldon",
          "content": "AnswerACE:<br><br>Security Group is protecting instances, it's statefull. by defoult is allowing for outgoing traffic but not incomming.<br>hence we need to allow for inboud traffic. path looks like below<br>ALB >>HTTPS>> WEB tier >>HTTPS>> Application >>SQL traffic>> SQL DB<br>hence we need allow for<br>incoming https traffic on web tier<br>then<br>incomming http on app tier<br>and on the end for<br>incomming sql traffic on DB tier",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1204622,
          "date": "Tue 30 Apr 2024 16:39",
          "username": "sandordini",
          "content": "ALB >>HTTPS>> WEB tier >>HTTPS>> Application >>SQL traffic>> SQL DB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#885",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has released a new version of its production application. The company's workload uses Amazon EC2, AWS Lambda, AWS Fargate, and Amazon SageMaker.<br><br>The company wants to cost optimize the workload now that usage is at a steady state. The company wants to cover the most services with the fewest savings plans.<br><br>Which combination of savings plans will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#885",
          "answers": [
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a SageMaker Savings Plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 885 discussion",
      "discusstion": [
        {
          "id": 1204624,
          "date": "Tue 30 Apr 2024 16:43",
          "username": "sandordini",
          "content": "It's pretty obvious, although it's called: Machine Learning Savings Plans for Amazon SageMaker (C)<br>For the compute workloads we need a compute savings plan, that covers all the 3 compute options we use here (EC2, Lambda and Fargate) (D)",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1301866,
          "date": "Wed 23 Oct 2024 06:20",
          "username": "mk168898",
          "content": "just pick the 2 options that doesn't overlap",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1228528,
          "date": "Tue 11 Jun 2024 18:24",
          "username": "mattyu",
          "content": "no doubt",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1220189,
          "date": "Tue 28 May 2024 13:36",
          "username": "Scheldon",
          "content": "Answer CD<br><br>https://aws.amazon.com/savingsplans/ml-pricing/<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#886",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses a Microsoft SQL Server database. The company's applications are connected to the database. The company wants to migrate to an Amazon Aurora PostgreSQL database with minimal changes to the application code.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#886",
          "answers": [
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 886 discussion",
      "discusstion": [
        {
          "id": 1204629,
          "date": "Tue 30 Apr 2024 16:48",
          "username": "sandordini",
          "content": "B: Babelfish for Aurora PostgreSQL is a new capability for Amazon Aurora PostgreSQL-Compatible Edition that enables Aurora to understand commands from applications written for Microsoft SQL Server.<br>C: Is just obvious: Use Data Migration Tool for the migration, Schema Conversion tool for the Schema conversion.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/rds/aurora/babelfish/</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1212035,
          "date": "Wed 15 May 2024 18:31",
          "username": "pranavsharma1604",
          "content": "https://aws.amazon.com/rds/aurora/babelfish/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231359,
          "date": "Sun 16 Jun 2024 14:13",
          "username": "KennethNg923",
          "content": "DMS + SCT is correct, but \\\" rewrite the SQL queries in the applications.\\\" is wrong so A + E are out.<br>Then only left B + C -> DMS + SCT + Babekfish (for SQL Server)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1220764,
          "date": "Wed 29 May 2024 10:32",
          "username": "Scheldon",
          "content": "AnswerBC<br>DMS will allow for DATABASE migration and use AWS Schema Conversion Tool (AWS SCT) to create some or all of the target tables, indexes, views, triggers, and so on.<br>https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html<br>To minimalize amount of code which need to me changes we need to use babelfish<br>https://aws.amazon.com/rds/aurora/babelfish/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1212036,
          "date": "Wed 15 May 2024 18:32",
          "username": "pranavsharma1604",
          "content": "https://aws.amazon.com/rds/aurora/babelfish/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#887",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to rehost an application to Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) as the attached storage.<br><br>A solutions architect must design a solution to ensure that all newly created Amazon EBS volumes are encrypted by default. The solution must also prevent the creation of unencrypted EBS volumes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#887",
          "answers": [
            {
              "choice": "<p>Configure the EC2 account attributes to always encrypt new EBS volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config. Configure the encrypted-volumes identifier. Apply the default AWS Key Management Service (AWS KMS) key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Systems Manager to create encrypted copies of the EBS volumes. Reconfigure the EC2 instances to use the encrypted volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a customer managed key in AWS Key Management Service (AWS KMS). Configure AWS Migration Hub to use the key when the company migrates workloads.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 887 discussion",
      "discusstion": [
        {
          "id": 1220769,
          "date": "Wed 29 May 2024 10:45",
          "username": "Scheldon",
          "content": "AnswerA<br>The task is to force automatic encryption for every new EBS volume and prevent possibility of creation any unencrypted volume hence:<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#ebs-encryption_key_mgmt<br>To enable encryption by default for a Region<br>Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.<br><br>From the navigation bar, select the Region.<br><br>From the navigation pane, select EC2 Dashboard.<br><br>In the upper-right corner of the page, choose Account Attributes, Data protection and security.<br><br>Choose Manage.<br><br>Select Enable. You keep the AWS managed key with the alias alias/aws/ebs created on your behalf as the default encryption key, or choose a symmetric customer managed encryption key.<br><br>Choose Update EBS encryption.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322755,
          "date": "Fri 06 Dec 2024 14:11",
          "username": "Xandero",
          "content": "https://docs.aws.amazon.com/ebs/latest/userguide/encryption-by-default.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1243727,
          "date": "Sun 07 Jul 2024 08:54",
          "username": "EdricHoang",
          "content": "\\\"The solution must also prevent the creation of unencrypted EBS volumes.\\\"<br>For prevention future actions, I go for AWS config. You can setup Encryption in EC2, but Its manual process, what happen if you add one or more EC2?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1220768,
          "date": "Wed 29 May 2024 10:42",
          "username": "Scheldon",
          "content": "AnswerA<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#ebs-encryption_key_mgmt<br>To enable encryption by default for a Region<br>Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.<br><br>From the navigation bar, select the Region.<br><br>From the navigation pane, select EC2 Dashboard.<br><br>In the upper-right corner of the page, choose Account Attributes, Data protection and security.<br><br>Choose Manage.<br><br>Select Enable. You keep the AWS managed key with the alias alias/aws/ebs created on your behalf as the default encryption key, or choose a symmetric customer managed encryption key.<br><br>Choose Update EBS encryption.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1213810,
          "date": "Sun 19 May 2024 15:34",
          "username": "0bdf3af",
          "content": "A. https://repost.aws/knowledge-center/ebs-automatic-encryption",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1210715,
          "date": "Mon 13 May 2024 07:25",
          "username": "lsomas",
          "content": "As it needs to prevent creation of Unencrypted EBS volume",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1209412,
          "date": "Fri 10 May 2024 16:17",
          "username": "viejito",
          "content": "B es correcto , AWS Config para identificar autom=C3=A1ticamente los vol=C3=BAmenes de EBS no cifrados y aplicar una acci=C3=B3n correctiva.A,C,D : incorrectas , no cumplen con el cifrado autom=C3=A1tico<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>From Google Translate<br><br>B is OK, AWS Config to automatically identify unencrypted EBS volumes and apply corrective action. A,C,D: Incorrect, do not comply with</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1320471,
          "date": "Sun 01 Dec 2024 07:23",
          "username": "JA2018",
          "content": "From Google Translate<br><br>B is OK, AWS Config to automatically identify unencrypted EBS volumes and apply corrective action. A,C,D: Incorrect, do not comply with",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#888",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company wants to collect user clickstream data from the company's website for real-time analysis. The website experiences fluctuating traffic patterns throughout the day. The company needs a scalable solution that can adapt to varying levels of traffic.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#888",
          "answers": [
            {
              "choice": "<p>Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the clickstream data. Use AWS Lambda to process the data in real time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose to capture the clickstream data. Use AWS Glue to process the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to process the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to capture the clickstream data. Use AWS Lambda to process the data in real time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 888 discussion",
      "discusstion": [
        {
          "id": 1301870,
          "date": "Wed 23 Oct 2024 06:27",
          "username": "mk168898",
          "content": "click stream > kinesis data streams",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1287206,
          "date": "Sat 21 Sep 2024 09:50",
          "username": "MatAlves",
          "content": "B - C are outGlue doesn't support real-time data processing.<br>D - Why would you use Kinesis data ANALYTICS to ingest clickstream data instead of Amazon Kinesis DATA STREAM?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231212,
          "date": "Sun 16 Jun 2024 07:31",
          "username": "EdricHoang",
          "content": "This one is very tricky, need to read the context carefully:<br>\\\"The company needs a scalable solution that can adapt to varying levels of traffic\\\" -> Both Firehouse and Stream are scalable. But, Firehose is automatic where Stream is not. However, the question does NOT say it should be automatic and Glue is not support real-time analysis.<br>Thats why go for A.<br>B is very close to.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1220774,
          "date": "Wed 29 May 2024 11:02",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Apache Flink (previously known as Amazon Kinesis Data Analytics) seems to not allowing sent data directly to Lambda...<br>Glue is allowing to integrate data from couple of sources in to one.<br>Hence I think A is correct answer<br>https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html<br>https://aws.amazon.com/kinesis/data-streams/features/?ncsn&loc2",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1218873,
          "date": "Sun 26 May 2024 11:22",
          "username": "f07ed8f",
          "content": "Seem AWS Glue does not support process data in real time. I vote for A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1217330,
          "date": "Fri 24 May 2024 11:08",
          "username": "f07ed8f",
          "content": "Both Kinesis Data Streams and Firehose are scalable but Firehose offers automated scaling.I vote fore B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204640,
          "date": "Tue 30 Apr 2024 17:23",
          "username": "sandordini",
          "content": "I think Apache Flink (previously known as Amazon Kinesis Data Analytics) would also be fine, but as here it wants to combine it with Lambda, I would rather opt for Kinesis Data Streams + Lambda, so A, because of the figure on this page:<br>https://aws.amazon.com/kinesis/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#890",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to optimize its Amazon S3 storage costs for an application that generates many files that cannot be recreated. Each file is approximately 5 MB and is stored in Amazon S3 Standard storage.<br><br>The company must store the files for 4 years before the files can be deleted. The files must be immediately accessible. The files are frequently accessed in the first 30 days of object creation, but they are rarely accessed after the first 30 days.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#890",
          "answers": [
            {
              "choice": "<p>Create an S3 Lifecycle policy to move the files to S3 Glacier Instant Retrieval 30 days after object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Lifecycle policy to move the files to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days after object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after object creation. Delete the files 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after object creation. Move the files to S3 Glacier Flexible Retrieval 4 years after object creation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 890 discussion",
      "discusstion": [
        {
          "id": 1204647,
          "date": "Tue 30 Apr 2024 17:48",
          "username": "sandordini",
          "content": "Although it's not stated what is meant by 'rarely accessed', this scenario would primarily be a candidate for the Glacier Instant Retrieval tier as the storage price would be more than 3 times lower compared to Standard IA. In the specific case of files being more frequently retrieved than quarterly, it can qualify for consideration of Standard IA.<br>Actually, we don't have the required info, so we have to guess what they are thinking.. which is pretty lame, to be honest..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 Glacier Instant Retrieval only retain the file for maximun 90 days, that is why A is not correct answer.<br>So C is right answer.</li><li>No, it isn't. It is just the opposite.<br><br>Objects archived to S3 Glacier Flexible Retrieval have a minimum of 90 days of storage. If an object is deleted, overwritten, or transitioned before 90 days, a pro-rated charge equal to the storage charge for the remaining days will be incurred.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&amp;loc7</li><li>Hell no.<br><br>S3 Glacier Instant Retrieval is designed for long-lived, rarely accessed data that is retained for months or years. Objects that are archived to S3 Glacier Instant Retrieval have a minimum of 90 days of storage</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1229807,
          "date": "Thu 13 Jun 2024 14:53",
          "username": "sheilawu",
          "content": "S3 Glacier Instant Retrieval only retain the file for maximun 90 days, that is why A is not correct answer.<br>So C is right answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, it isn't. It is just the opposite.<br><br>Objects archived to S3 Glacier Flexible Retrieval have a minimum of 90 days of storage. If an object is deleted, overwritten, or transitioned before 90 days, a pro-rated charge equal to the storage charge for the remaining days will be incurred.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&amp;loc7</li><li>Hell no.<br><br>S3 Glacier Instant Retrieval is designed for long-lived, rarely accessed data that is retained for months or years. Objects that are archived to S3 Glacier Instant Retrieval have a minimum of 90 days of storage</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1240836,
          "date": "Tue 02 Jul 2024 16:15",
          "username": "Edwars",
          "content": "No, it isn't. It is just the opposite.<br><br>Objects archived to S3 Glacier Flexible Retrieval have a minimum of 90 days of storage. If an object is deleted, overwritten, or transitioned before 90 days, a pro-rated charge equal to the storage charge for the remaining days will be incurred.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&loc7",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1287215,
          "date": "Sat 21 Sep 2024 09:57",
          "username": "MatAlves",
          "content": "Hell no.<br><br>S3 Glacier Instant Retrieval is designed for long-lived, rarely accessed data that is retained for months or years. Objects that are archived to S3 Glacier Instant Retrieval have a minimum of 90 days of storage",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1287217,
          "date": "Sat 21 Sep 2024 09:59",
          "username": "MatAlves",
          "content": "Instant Retrievalimmediately accessible.<br><br>Coose the S3 Glacier Instant Retrieval storage class when you need milliseconds access to low cost archive data.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&loc7",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1281565,
          "date": "Tue 10 Sep 2024 15:21",
          "username": "scaredSquirrel",
          "content": "Glacier Instant Retrieval is much cheaper, and it is intended for archival storage with very low access patterns",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1257713,
          "date": "Mon 29 Jul 2024 23:47",
          "username": "Ucy",
          "content": "While S3 Glacier Instant Retrieval offers immediate access, it has a minimum storage duration policy,Objects stored in S3 Glacier Instant Retrieval have a minimum storage duration of 90 days.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1245219,
          "date": "Wed 10 Jul 2024 03:16",
          "username": "FrozenCarrot",
          "content": "S3 Glacier Instant Retrieval delivers the fastest access to archive storage, with the same throughput and milliseconds access as the S3 Standard and S3 Standard-IA storage classes.<br> --- https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1243726,
          "date": "Sun 07 Jul 2024 08:41",
          "username": "EdricHoang",
          "content": "cost effective -> OneZone IA<br>\\\"The files must be immediately accessible\\\" -> cannot be Glacier<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Instant Retrievalimmediately accessible.<br><br>Coose the S3 Glacier Instant Retrieval storage class when you need milliseconds access to low cost archive data.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&amp;loc7</li><li>files can not be recreated -&gt; OneZone IA not accepted</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1287216,
          "date": "Sat 21 Sep 2024 09:59",
          "username": "MatAlves",
          "content": "Instant Retrievalimmediately accessible.<br><br>Coose the S3 Glacier Instant Retrieval storage class when you need milliseconds access to low cost archive data.<br><br>https://aws.amazon.com/s3/faqs/?ncsn&loc7",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1266969,
          "date": "Fri 16 Aug 2024 12:29",
          "username": "Johnoppong101",
          "content": "files can not be recreated -> OneZone IA not accepted",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1243525,
          "date": "Sat 06 Jul 2024 21:44",
          "username": "Mayank0502",
          "content": "this option has most durability",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1241437,
          "date": "Wed 03 Jul 2024 15:39",
          "username": "Lin878",
          "content": "\\\"are rarely accessed after the first 30 days\\\" - not often<br>I will go with \\\"C\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235864,
          "date": "Sun 23 Jun 2024 17:11",
          "username": "345645a",
          "content": "https://aws.amazon.com/es/s3/storage-classes/glacier/instant-retrieval/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1225926,
          "date": "Fri 07 Jun 2024 08:08",
          "username": "sheilawu",
          "content": "mmediately accessible >C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1220788,
          "date": "Wed 29 May 2024 11:44",
          "username": "Scheldon",
          "content": "AnswerC<br>We cannot choose B because if that one zone will fail, company will not be able to recreate them.<br>We cannot choose D because we do not have to store files after 4y hence we can delete them (cost savings)<br>We cannot choose A - Glacier is less expensive (0,004 per GB) then S3-Standard - IA but is not allowing for instant access which is one of requirements (there is no information that data access shouldn't be accessibleimmedietly) we have only information that after 30d access to data is less frequently. Hence I think we need to choose S3 Standard - IA (answer C)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1219375,
          "date": "Mon 27 May 2024 09:27",
          "username": "bujuman",
          "content": "Requirements:<br>- frequently accessed for 30 days<br>- lower cost<br><br>Features for S3 Standard-IA:<br>- Infrequently accessed objects<br>- Milliseconds to acces<br><br>According to me, best option for this use case is C<br>NB: Glacier better suits for lower cost, infrequent access.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1212509,
          "date": "Thu 16 May 2024 18:45",
          "username": "th1002",
          "content": "why do we need one zone, glacier instant for 30 days ? or why do we need to move to glacier after 4 years ?<br>I think C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1204935,
          "date": "Wed 01 May 2024 09:51",
          "username": "Karls",
          "content": "B. Create an S3 Lifecycle policy to move the files to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days after object creation. Delete the files 4 years after object creation.<br><br>This option leverages S3 One Zone-IA, which offers a lower cost compared to S3 Standard-IA, while ensuring that files are immediately accessible during the first 30 days of their creation. Then, after this period, the files are moved to S3 One Zone-IA for less frequent access storage, further reducing costs. Finally, the files are deleted after 4 years, meeting the requirement for long-term retention.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#893",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to isolate its workloads by creating an AWS account for each workload. The company needs a solution that centrally manages networking components for the workloads. The solution also must create accounts with automatic security controls (guardrails).<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#893",
          "answers": [
            {
              "choice": "<p>Use AWS Control Tower to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Organizations to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Control Tower to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Organizations to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 893 discussion",
      "discusstion": [
        {
          "id": 1219505,
          "date": "Mon 27 May 2024 13:35",
          "username": "bujuman",
          "content": "Statement:<br>- The solution also must create accounts with automatic security controls (guardrails).<br><br>https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html<br> AWS Control Tower provides a pre-packaged set of guardrails (policies) and blueprints (best-practice configurations) to ensure that the environment complies with security and compliance standards. It's designed to simplify the process of creating and managing a multi-account AWS environment while maintaining security and compliance.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204655,
          "date": "Tue 30 Apr 2024 18:18",
          "username": "sandordini",
          "content": "It's a hard one. I'd go for B<br>Several accounts in an org, with central mgmt > AWS Organization<br>Sharing resources among accounts > AWS RAM<br>AWS Organizations and RAM typically work well together...<br>Happy to be challenged, of course.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Although automatic security control could be a hint for AWS Control Tower<br>(set up and operate your multi-account AWS environment with prescriptive controls)</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204657,
          "date": "Tue 30 Apr 2024 18:21",
          "username": "sandordini",
          "content": "Although automatic security control could be a hint for AWS Control Tower<br>(set up and operate your multi-account AWS environment with prescriptive controls)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1301877,
          "date": "Wed 23 Oct 2024 06:48",
          "username": "mk168898",
          "content": "guard rails > AWS control tower",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1295335,
          "date": "Thu 10 Oct 2024 01:52",
          "username": "XXXXXlNN",
          "content": "A<br>Guardrails >> AWS Control Tower",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1270477,
          "date": "Thu 22 Aug 2024 06:10",
          "username": "dhewa",
          "content": "AWS Control Tower provides built-in guardrails and automates the creation of accounts with security controls.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1249103,
          "date": "Tue 16 Jul 2024 18:52",
          "username": "muhammadahmer36",
          "content": "A. Use AWS Control Tower to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1238776,
          "date": "Fri 28 Jun 2024 17:15",
          "username": "emakid",
          "content": "It leverages AWS Control Tower for automated account deployment and management, along with AWS RAM for centralized networking management, thus minimizing operational overhead while meeting the company's requirements for workload isolation and automatic security controls.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1219457,
          "date": "Mon 27 May 2024 12:46",
          "username": "stalk98",
          "content": "answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1216853,
          "date": "Thu 23 May 2024 19:40",
          "username": "Tomrr",
          "content": "Anser is A, Control Tower has guardrails<br><br>AWS Audit Manager provides an AWS Control Tower Guardrails framework to assist you with your audit preparation.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1216608,
          "date": "Thu 23 May 2024 15:31",
          "username": "Scheldon",
          "content": "Taking into consideration that AWS Control Tower is Orchestrator for AWS Organization which applies guardrails, I think A is a good choose.<br><br>https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204153,
          "date": "Mon 29 Apr 2024 19:43",
          "username": "1223d0e",
          "content": "Please explain why the answer is option A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I prefer B which is free. A may cause fee for sevice used while I am not sure about it.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1210746,
          "date": "Mon 13 May 2024 08:33",
          "username": "jackey_feng",
          "content": "I prefer B which is free. A may cause fee for sevice used while I am not sure about it.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#894",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing. The company wants to minimize the website hosting costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#894",
          "answers": [
            {
              "choice": "<p>Move the website to an Amazon S3 bucket. Configure an Amazon CloudFront distribution for the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Move the website to an Amazon S3 bucket. Configure an Amazon ElastiCache cluster for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the website to AWS Amplify. Configure an ALB to resolve to the Amplify website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the website to AWS Amplify. Configure EC2 instances to cache the website.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 894 discussion",
      "discusstion": [
        {
          "id": 1216611,
          "date": "Thu 23 May 2024 15:38",
          "username": "Scheldon",
          "content": "Answer A<br><br>Based on https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/getting-started-secure-static-website-cloudformation-template.html<br>Amazon CloudFront:<br>Uses the durable storage of Amazon Simple Storage Service (Amazon S3) =E2=80=93 This solution creates an Amazon S3 bucket to host your static website's content. To update your website, just upload your new files to the S3 bucket.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1321592,
          "date": "Wed 04 Dec 2024 00:57",
          "username": "Cpso",
          "content": "A. but questions should specify it is static or dynamic website",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1309914,
          "date": "Mon 11 Nov 2024 10:17",
          "username": "j21kjf0o9ijhj",
          "content": "Why??? Guys, you'll fail the others. Don't troll or believe everything chatgpt says... =F0=9F=98=95<br><br>The question indicates \\\"The website serves static content\\\", why would you use elasticache for it? It may work, but it'll take a helluva effort.<br><br>S3 and CloudFront is straightforward and simple. Not only that, it also works great for static content. It's AWS's cdn. It can also serve dynamic content, but that's out of scope for this question.<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/getting-started-secure-static-website-cloudformation-template.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1301878,
          "date": "Wed 23 Oct 2024 06:50",
          "username": "mk168898",
          "content": "S3 bucket is correct, so it's between A or B.<br>B because cache to handle when traffic increase.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i changed my answer to A because elasticache is only for dynamic content but question only requires static content</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1301879,
          "date": "Wed 23 Oct 2024 06:52",
          "username": "mk168898",
          "content": "i changed my answer to A because elasticache is only for dynamic content but question only requires static content",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1272277,
          "date": "Sun 25 Aug 2024 21:32",
          "username": "Abdullah2004",
          "content": "website serves static content So we need to ElastiCache when traffic increases , no need for cloudfront",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1249105,
          "date": "Tue 16 Jul 2024 18:54",
          "username": "muhammadahmer36",
          "content": "A. Move the website to an Amazon S3 bucket. Configure an Amazon CloudFront distribution for the S3 bucket.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1240686,
          "date": "Tue 02 Jul 2024 12:38",
          "username": "FrozenCarrot",
          "content": "S3 for static contents, and ElastiCache for traffic increasing. No need for cloudfront cuz there is no need for global deliver for the website<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\" customers often complement S3 with an in-memory cache, such as Amazon ElastiCache for Redis, to reduce the S3 retrieval cost and to improve performance.\\\"--https://aws.amazon.com/blogs/storage/turbocharge-amazon-s3-with-amazon-elasticache-for-redis/</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1245212,
          "date": "Wed 10 Jul 2024 02:49",
          "username": "FrozenCarrot",
          "content": "\\\" customers often complement S3 with an in-memory cache, such as Amazon ElastiCache for Redis, to reduce the S3 retrieval cost and to improve performance.\\\"--https://aws.amazon.com/blogs/storage/turbocharge-amazon-s3-with-amazon-elasticache-for-redis/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1204860,
          "date": "Wed 01 May 2024 06:47",
          "username": "trinh_le",
          "content": "static content -> S3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#895",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a shared storage solution for a media application that the company hosts on AWS. The company needs the ability to use SMB clients to access stored data.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#895",
          "answers": [
            {
              "choice": "<p>Create an AWS Storage Gateway Volume Gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Storage Gateway Tape Gateway. Configure tapes to use Amazon S3. Connect the application server to the Tape Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for Windows File Server file system. Connect the application server to the file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 895 discussion",
      "discusstion": [
        {
          "id": 1249107,
          "date": "Tue 16 Jul 2024 18:55",
          "username": "muhammadahmer36",
          "content": "D. Create an Amazon FSx for Windows File Server file system. Connect the application server to the file system.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1216613,
          "date": "Thu 23 May 2024 15:41",
          "username": "Scheldon",
          "content": "Answer D<br><br>https://aws.amazon.com/fsx/windows/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1204861,
          "date": "Wed 01 May 2024 06:49",
          "username": "trinh_le",
          "content": "SMB protocol -> FSx windows",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#896",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing its production application's disaster recovery (DR) strategy. The application is backed by a MySQL database on an Amazon Aurora cluster in the us-east-1 Region. The company has chosen the us-west-1 Region as its DR Region.<br><br>The company's target recovery point objective (RPO) is 5 minutes and the target recovery time objective (RTO) is 20 minutes. The company wants to minimize configuration changes.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#896",
          "answers": [
            {
              "choice": "<p>Create an Aurora read replica in us-west-1 similar in size to the production application's Aurora MySQL cluster writer instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Convert the Aurora cluster to an Aurora global database. Configure managed failover.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Aurora cluster in us-west-1 that has Cross-Region Replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Aurora cluster in us-west-1. Use AWS Database Migration Service (AWS DMS) to sync both clusters.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 896 discussion",
      "discusstion": [
        {
          "id": 1249108,
          "date": "Tue 16 Jul 2024 18:59",
          "username": "muhammadahmer36",
          "content": "B. Convert the Aurora cluster to an Aurora global database. Configure managed failover.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1243549,
          "date": "Sat 06 Jul 2024 22:40",
          "username": "EdricHoang",
          "content": "I go for B. However, C is also a good option except manual failover intervention",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1216617,
          "date": "Thu 23 May 2024 15:46",
          "username": "Scheldon",
          "content": "Answer:B<br><br>https://aws.amazon.com/rds/aurora/global-database/<br><br>Cross-Region disaster recovery<br>If your primary Region suffers a performance degradation or outage, you can promote one of the secondary Regions to take read/write responsibilities. An Aurora cluster can recover in less than 1 minute, even in the event of a complete Regional outage. This provides your application with an effective recovery point objective (RPO) of 1 second and a recovery time objective (RTO) of less than 1 minute, providing a strong foundation for a global business continuity plan.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204664,
          "date": "Tue 30 Apr 2024 18:31",
          "username": "sandordini",
          "content": "Aurora Global Database: allowing a single Amazon Aurora database to span multiple AWS Regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each Region, and provides disaster recovery from Region-wide outages.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#897",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a critical data analysis job each week before the first day of the work week. The job requires at least 1 hour to complete the analysis. The job is stateful and cannot tolerate interruptions. The company needs a solution to run the job on AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#897",
          "answers": [
            {
              "choice": "<p>Create a container for the job. Schedule the job to run as an AWS Fargate task on an Amazon Elastic Container Service (Amazon ECS) cluster by using Amazon EventBridge Scheduler.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the job to run in an AWS Lambda function. Create a scheduled rule in Amazon EventBridge to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group of Amazon EC2 Spot Instances that run Amazon Linux. Configure a crontab entry on the instances to run the analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS DataSync task to run the job. Configure a cron expression to run the task on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 897 discussion",
      "discusstion": [
        {
          "id": 1208745,
          "date": "Thu 09 May 2024 09:46",
          "username": "Hkayne",
          "content": "B is wrong because the job takes 1 hour and the lambda maximum execution time is 15 minutes.<br>C is wrong can't use spot instances because the job can not tolerate interruptions.<br>D iswrong too because DataSync is not designed to lunch jobs.<br>Correct answer is A",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1301882,
          "date": "Wed 23 Oct 2024 07:03",
          "username": "mk168898",
          "content": "B is not because lambda only max 15mins but job requires 1 hour<br>C is not because cannot tolerate interruptions, spot instance might be gone anytime.<br>D datasync doesn't seem correct<br><br>A is most correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1262450,
          "date": "Thu 08 Aug 2024 13:09",
          "username": "744fdad",
          "content": "I know datasync and lambda is event based, there are interruptions. C, doesnt address the scheduling requirement. Has to be A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1249111,
          "date": "Tue 16 Jul 2024 19:04",
          "username": "muhammadahmer36",
          "content": "A. Create a container for the job. Schedule the job to run as an AWS Fargate task on an Amazon Elastic Container Service (Amazon ECS) cluster by using Amazon EventBridge Scheduler.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1216624,
          "date": "Thu 23 May 2024 15:53",
          "username": "Scheldon",
          "content": "Answer: A<br><br>Fargate is compatibilie with ECS and is allowing for log running tasks",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#898",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs workloads in the AWS Cloud. The company wants to centrally collect security data to assess security across the entire company and to improve workload protection.<br><br>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#898",
          "answers": [
            {
              "choice": "<p>Configure a data lake in AWS Lake Formation. Use AWS Glue crawlers to ingest the security data into the data lake.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to collect the security data in .csv format. Upload the data to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a data lake in Amazon Security Lake to collect the security data. Upload the data to an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Database Migration Service (AWS DMS) replication instance to load the security data into an Amazon RDS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 898 discussion",
      "discusstion": [
        {
          "id": 1204667,
          "date": "Tue 30 Apr 2024 18:37",
          "username": "sandordini",
          "content": "A, B, D are senseless +<br>Amazon Security Lake automatically centralizes security data from AWS environments, you can get a more complete understanding of your security data across your entire organization. You can also improve the protection.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1249119,
          "date": "Tue 16 Jul 2024 19:19",
          "username": "muhammadahmer36",
          "content": "C. Configure a data lake in Amazon Security Lake to collect the security data. Upload the data to an Amazon S3 bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1216674,
          "date": "Thu 23 May 2024 17:09",
          "username": "Scheldon",
          "content": "Answer C<br><br>https://aws.amazon.com/security-lake/<br><br>Amazon Security Lake automatically centralizes security data from AWS environments, SaaS providers, on premises, and cloud sources into a purpose-built data lake stored in your account.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#899",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating five on-premises applications to VPCs in the AWS Cloud. Each application is currently deployed in isolated virtual networks on premises and should be deployed similarly in the AWS Cloud. The applications need to reach a shared services VPC. All the applications must be able to communicate with each other.<br><br>If the migration is successful, the company will repeat the migration process for more than 100 applications.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#899",
          "answers": [
            {
              "choice": "<p>Deploy software VPN tunnels between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy VPC peering connections between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC through the peering connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Direct Connect connection between the application VPCs and the shared services VPAdd routes from the application VPCs in their subnets to the shared services VPC and the applications VPCs. Add routes from the shared services VPC subnets to the applications VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a transit gateway with associations between the transit gateway and the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets and the application VPCs to the shared services VPC through the transit gateway.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 899 discussion",
      "discusstion": [
        {
          "id": 1216683,
          "date": "Thu 23 May 2024 17:24",
          "username": "Scheldon",
          "content": "Answer: D<br><br>https://aws.amazon.com/transit-gateway/<br><br>Looks like the best solution would be transit gateway. It will allow for inter-VPC communication for all 5 applications/VPC, reach shared resource/VPC and in the future it will be easy to allow for inter-communication between even 100 VPCs (applications)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1301890,
          "date": "Wed 23 Oct 2024 07:17",
          "username": "mk168898",
          "content": "each application needs to be in their own VPC and can communicate with each other > transit gateway",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1249121,
          "date": "Tue 16 Jul 2024 19:25",
          "username": "muhammadahmer36",
          "content": "D. Deploy a transit gateway with associations between the transit gateway and the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets and the application VPCs to the shared services VPC through the transit gateway.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1238945,
          "date": "Sat 29 Jun 2024 00:16",
          "username": "emakid",
          "content": "AWS Transit Gateway:<br><br>Centralized Connectivity: AWS Transit Gateway provides a hub-and-spoke model for connecting multiple VPCs, simplifying network management by providing a single point of connectivity for all VPCs.<br>Scalability: It is designed to handle many VPCs, making it suitable for scaling beyond the initial five applications to more than 100 applications.<br>Reduced Administrative Overhead: Managing VPC peering connections or VPN tunnels for each pair of VPCs would become complex and difficult to manage at scale. Transit Gateway simplifies this by providing centralized routing and connectivity.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1237139,
          "date": "Wed 26 Jun 2024 02:21",
          "username": "DanielWuTRT",
          "content": "the LEAST administrative overheadtransit gateway",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1216367,
          "date": "Thu 23 May 2024 10:01",
          "username": "0bdf3af",
          "content": "D. https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1208753,
          "date": "Thu 09 May 2024 10:04",
          "username": "Hkayne",
          "content": "Correct answer is B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>not possible, vpc peerings can have up to 125 connections and the request is for 100 apps, meaning 100(100-1)/2 connections...</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1328119,
          "date": "Tue 17 Dec 2024 20:42",
          "username": "dragossky",
          "content": "not possible, vpc peerings can have up to 125 connections and the request is for 100 apps, meaning 100(100-1)/2 connections...",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#900",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its on-premises application in a hybrid environment. The application currently runs on containers on premises.<br><br>The company needs a single container solution that can scale in an on-premises, hybrid, or cloud environment. The company must run new application containers in the AWS Cloud and must use a load balancer for HTTP traffic.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#900",
          "answers": [
            {
              "choice": "<p>Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application containers. Use an Amazon ECS Anywhere external launch type for the on-premises application containers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Application Load Balancer for cloud ECS services.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a Network Load Balancer for cloud ECS services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud application containers and the on-premises application containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application containers. Use Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises application containers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 900 discussion",
      "discusstion": [
        {
          "id": 1217375,
          "date": "Fri 24 May 2024 12:23",
          "username": "Scheldon",
          "content": "Answer: AB<br>We need to load-balance HTTP traffic hence Application Load Balancer is needed. Because Customer want to use container solution we need to use ECS with Fargate which will lunch cloud applications. To run on-premises applications in containers we need to use ECS Anyware.<br><br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon ECS services on AWS Fargate support the Application Load Balancer and Network Load Balancer load balancer types. Application Load Balancers are used to route HTTP/HTTPS (or layer 7) traffic.<br>Serverless (AWS Fargate (Fargate)) in the AWS cloud<br>Fargate is a serverless, pay-as-you-go compute engine. With Fargate you don't need to manage servers, handle capacity planning, or isolate container workloads for security.<br>On-premises virtual machines (VM) or servers<br>Amazon ECS Anywhere provides support for registering an external instance such as an on-premises server or virtual machine (VM), to your Amazon ECS cluster.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1217376,
          "date": "Fri 24 May 2024 12:23",
          "username": "Scheldon",
          "content": "Amazon ECS services on AWS Fargate support the Application Load Balancer and Network Load Balancer load balancer types. Application Load Balancers are used to route HTTP/HTTPS (or layer 7) traffic.<br>Serverless (AWS Fargate (Fargate)) in the AWS cloud<br>Fargate is a serverless, pay-as-you-go compute engine. With Fargate you don't need to manage servers, handle capacity planning, or isolate container workloads for security.<br>On-premises virtual machines (VM) or servers<br>Amazon ECS Anywhere provides support for registering an external instance such as an on-premises server or virtual machine (VM), to your Amazon ECS cluster.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1249126,
          "date": "Tue 16 Jul 2024 19:31",
          "username": "muhammadahmer36",
          "content": "AB.the combination of setting up an ECS cluster with Fargate for the cloud and ECS Anywhere for on-premises, along with using an Application Load Balancer, provides a scalable, hybrid, and cloud-native solution with minimal operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1238947,
          "date": "Sat 29 Jun 2024 00:21",
          "username": "emakid",
          "content": "the combination of setting up an ECS cluster with Fargate for the cloud and ECS Anywhere for on-premises, along with using an Application Load Balancer, provides a scalable, hybrid, and cloud-native solution with minimal operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1231368,
          "date": "Sun 16 Jun 2024 14:41",
          "username": "KennethNg923",
          "content": "Have to use fargate, and since it has on-premises application so it need to use Amazon ECS Anywhere",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1216377,
          "date": "Thu 23 May 2024 10:15",
          "username": "0bdf3af",
          "content": "BD.<br><br>https://aws.amazon.com/blogs/aws/getting-started-with-amazon-ecs-anywhere-now-generally-available/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1208752,
          "date": "Thu 09 May 2024 10:03",
          "username": "Hkayne",
          "content": "AB is the correct answer,must lunch the cluster as external lunch",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    }
  ]
}