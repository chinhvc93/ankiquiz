var DOP_C01_Part2 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#101",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses Amazon S3 to store proprietary information. The development team creates buckets for new projects on a daily basis. The security team wants to ensure that all existing and future buckets have encryption, logging, and versioning enabled. Additionally, no buckets should ever be publicly read or write accessible.<br><br>What should a DevOps engineer do to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#101",
            "answers": [
              {
                "choice": "<p>A. Enable AWS CloudTrail and configure automatic remediation using AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable AWS Config rules and configure automatic remediation using AWS Systems Manager documents.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable AWS Trusted Advisor and configure automatic remediation using Amazon CloudWatch Events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable AWS Systems Manager and configure automatic remediation using Systems Manager documents.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 101 discussion",
        "discusstion": [
          {
            "id": 754182,
            "date": "Fri 23 Dec 2022 13:17",
            "username": "Imstack",
            "content": "BBBBBBBBBBBBBB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741578,
            "date": "Sun 11 Dec 2022 10:55",
            "username": "SatenderRathee",
            "content": "B.  Enable AWS Config rules and configure automatic remediation using AWS Systems Manager documents.<br><br>To meet the requirements specified in the question, the DevOps engineer should enable AWS Config rules and use AWS Systems Manager documents to automate the process of ensuring that all existing and future Amazon S3 buckets have encryption, logging, and versioning enabled, and that no buckets are publicly readable or writable. AWS Config rules allow the security team to specify rules for how resources should be configured in their AWS environment, and AWS Systems Manager documents can be used to automate the process of remedying any non-compliant resources.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732321,
            "date": "Thu 01 Dec 2022 07:15",
            "username": "SmileyCloud",
            "content": "B - correct. Anytime there is something regarding compliance and enforcement, your best bet is AWS Config.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#102",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application on one Amazon EC2 instance. Application metadata is stored in Amazon S3 and must be retrieved if the instance is restarted. The instance must restart or relaunch automatically if the instance becomes unresponsive.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#102",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch alarm for the StatusCheckFailed metric. Use the recover action to stop and start the instance. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure AWS OpsWorks, and use the auto healing feature to stop and start the instance. Use a lifecycle event in OpsWorks to pull the metadata from Amazon S3 and update it on the instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use EC2 Auto Recovery to automatically stop and start the instance in case of a failure. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CloudFormation to create an EC2 instance that includes the UserData property for the EC2 resource. Add a command in UserData to retrieve the application metadata from Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 102 discussion",
        "discusstion": [
          {
            "id": 746207,
            "date": "Thu 15 Dec 2022 15:46",
            "username": "saggy4",
            "content": "A and C - S3 event notification are triggered when the objects change in S3.<br>D - Only half of solution. No mention of how the instance will be recovered<br>B - Is the correct option.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 733536,
            "date": "Fri 02 Dec 2022 08:26",
            "username": "nsvijay04b1",
            "content": "Agree with @smileyCloud",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733484,
            "date": "Fri 02 Dec 2022 07:09",
            "username": "quixo",
            "content": "I'll go with B<br><br>A) and C) are wrong because there is no such thing like:<br>\\\"Use a trigger in Amazon S3 to push the metadata to the instance when it is back up and running\\\"<br><br>There is no information about updating or putting a new metadata file to S3, so you can't create an event if nothing happens to the bucket.<br>Also there is no way to push from s3 to ec2 instance, that's not the case<br>D) is incomplete",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732328,
            "date": "Thu 01 Dec 2022 07:26",
            "username": "SmileyCloud",
            "content": "While A and C seem straightforward, it doesn't say who's gonna trigger the S3 event notification. This event happens only if there is a change in S3, not EC2.<br>Looks strange, but B is the correct answer.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729114,
            "date": "Mon 28 Nov 2022 14:12",
            "username": "Maygam",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#103",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A devops team uses AWS CloudFormation to build their infrastructure. The security team is concerned about sensitive parameters, such as passwords, being exposed.<br><br>Which combination of steps will enhance the security of AWS CloudFormation? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#103",
            "answers": [
              {
                "choice": "<p>A. Create a secure string with AWS KMS and choose a KMS encryption key. Reference the ARN of the secure string, and give AWS CloudFormation permission to the KMS key for decryption.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create secrets using the AWS Secrets Manager AWS::SecretsManager::Secret resource type. Reference the secret resource return attributes in resources that need a password, such as an Amazon RDS database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store sensitive static data as secure strings in the AWS Systems Manager Parameter Store. Use dynamic references in the resources that need access to the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store sensitive static data in the AWS Systems Manager Parameter Store as strings. Reference the stored value using types of Systems Manager parameters.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS KMS to encrypt the CloudFormation template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use the CloudFormation NoEcho parameter property to mask the parameter value.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 103 discussion",
        "discusstion": [
          {
            "id": 759353,
            "date": "Wed 28 Dec 2022 05:32",
            "username": "saggy4",
            "content": "BCF -- Correct<br>D is wrong as it is simple string and C is secure string",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 735413,
            "date": "Sun 04 Dec 2022 21:01",
            "username": "USalo",
            "content": "BCF. <br>Why somebody picks \\\"D\\\" instead of \\\"C\\\" ? Csecure strings, Dsimple strings. \\\"C\\\" should be correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 733568,
            "date": "Fri 02 Dec 2022 09:10",
            "username": "nsvijay04b1",
            "content": "Between C & D,Prefer C due to security concerns, C allows dynamic reference which doesn't store/sow password.<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 733486,
            "date": "Fri 02 Dec 2022 07:12",
            "username": "quixo",
            "content": "I'll go with B, C, F<br><br>A) is not the use case<br>D) insecure, you can still see the sensitive value<br>E) encrypting the template do not prevent the echo and it is not effective",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 732331,
            "date": "Thu 01 Dec 2022 07:30",
            "username": "SmileyCloud",
            "content": "BDF makes most sense. KMS is not used for storing secrets. It's either Secrets Manager or Systems Manager.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 729135,
            "date": "Mon 28 Nov 2022 14:20",
            "username": "Maygam",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BDF"
          }
        ]
      },
      {
        "question_id": "#104",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a mission-critical application on AWS that uses automatic scaling. The company wants the deployment lifecycle to meet the following parameters:<br><br>- The application must be deployed one instance at a time to ensure the remaining fleet continues to serve traffic.<br>- The application is CPU intensive and must be closely monitored.<br>- The deployment must automatically roll back if the CPU utilization of the deployment instance exceeds 85%.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#104",
            "answers": [
              {
                "choice": "<p>A. Use AWS CloudFormation to create an AWS Step Functions state machine and Auto Scaling lifecycle hooks to move to one instance at a time into a wait state. Use AWS Systems Manager automation to deploy the update to each instance and move it back into the Auto Scaling group using the heartbeat timeout.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodeDeploy with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Use the CodeDeployDefault.OneAtAtime configuration as a deployment strategy. Configure automatic rollbacks within the deployment group to roll back the deployment if the alarm thresholds are breached.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Elastic Beanstalk for load balancing and AWS Auto Scaling. Configure an alarm tied to the CPU utilization metric. Configure rolling deployments with a fixed batch size of one instance. Enable enhanced health to monitor the status of the deployment and roll back based on the alarm previously created.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Systems Manager to perform a blue/green deployment with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Deploy updates one at a time. Configure automatic rollbacks within the Auto Scaling group to roll back the deployment if the alarm thresholds are breached.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 104 discussion",
        "discusstion": [
          {
            "id": 754189,
            "date": "Fri 23 Dec 2022 13:29",
            "username": "Imstack",
            "content": "this is B answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733487,
            "date": "Fri 02 Dec 2022 07:15",
            "username": "quixo",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/28607-exam-aws-devops-engineer-professional-topic-1-question-176/",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#105",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's legacy application uses IAM user credentials to access resources in the company's AWS Organizations organization. A DevOps engineer must ensure that new IAM users cannot be created unless the employee who creates the IAM user is on an exception list.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#105",
            "answers": [
              {
                "choice": "<p>A. Attach an Organizations SCP with an explicit deny for all iam:CreateAccessKey actions with a condition that excludes StringEquals for aws:username with a value of the exception list.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Attach an Organizations SCP with an explicit deny for all iam:CreateUser actions with a condition that includes StringNotLike for aws:username with a value of the exception list.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a pattern that matches the iam:CreateAccessKey action with an AWS Lambda function target. The function will check the user name and account against an exception list. If the user is not on the exception list, the function will delete the user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a pattern that matches the iam:CreateUser action with an AWS Lambda function target. The function will check the user name and account against an exception list. If the user is not on the exception list, the function will delete the user.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 105 discussion",
        "discusstion": [
          {
            "id": 754191,
            "date": "Fri 23 Dec 2022 13:31",
            "username": "Imstack",
            "content": "BBBBBBBBBBBB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732334,
            "date": "Thu 01 Dec 2022 07:38",
            "username": "SmileyCloud",
            "content": "B. <br>https://asecure.cloud/a/scp_deny_iam_user_creation_w_exception/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#106",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company must collect user consent to a privacy agreement. The company deploys an application in six AWS Regions: two Regions in North America, two Regions in Europe, and two Regions in Asia. The application has a user base of 20 million to 30 million users.<br><br>The company needs to read and write data that is related to each user's response. The company also must ensure that the responses are available in all six Regions.<br><br>Which solution will meet these requirements with the LOWEST latency of reads and writes?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#106",
            "answers": [
              {
                "choice": "<p>A. Implement Amazon DocumentDB (with MongoDB compatibility) in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Implement Amazon DynamoDB global tables in each of the six Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement Amazon ElastiCache for Redis replication groups in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement Amazon Elasticsearch Service (Amazon ES) in each of the six Regions.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 106 discussion",
        "discusstion": [
          {
            "id": 754194,
            "date": "Fri 23 Dec 2022 13:32",
            "username": "Imstack",
            "content": "response B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741614,
            "date": "Sun 11 Dec 2022 11:56",
            "username": "SatenderRathee",
            "content": "the best solution for meeting the requirements with the lowest latency of reads and writes would be to implement Amazon DynamoDB global tables in each of the six Regions. DynamoDB global tables automatically replicate data across multiple Regions, allowing for low-latency reads and writes. Additionally, global tables support multi-master writes, which means that each Region can handle read and write requests for all of the users, improving the scalability of the solution.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734343,
            "date": "Sat 03 Dec 2022 11:36",
            "username": "ET0125",
            "content": "I will go with B<br>https://aws.amazon.com/dynamodb/global-tables/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#107",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is testing a web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company uses a blue/green deployment process with immutable instances when deploying new software.<br><br>During testing, users are being automatically logged out of the application at random times. Testers also report that, when a new version of the application is deployed, all users are logged out. The development team needs a solution to ensure users remain logged in across scaling events and application deployments.<br><br>What is the MOST efficient way to ensure users remain logged in?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#107",
            "answers": [
              {
                "choice": "<p>A. Enable smart sessions on the load balancer and modify the application to check for an existing session.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable session sharing on the load balancer and modify the application to read from the session store.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store user session information in an Amazon S3 bucket and modify the application to read session information from the bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the application to store user session information in an Amazon ElastiCache cluster.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 107 discussion",
        "discusstion": [
          {
            "id": 754195,
            "date": "Fri 23 Dec 2022 13:34",
            "username": "Imstack",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741615,
            "date": "Sun 11 Dec 2022 11:58",
            "username": "SatenderRathee",
            "content": "The most efficient way to ensure users remain logged in is to modify the application to store user session information in an Amazon ElastiCache cluster. Amazon ElastiCache is a fully managed in-memory data store that can be used to store user session information. The in-memory nature of ElastiCache means that it can store and retrieve session data quickly, which is important for maintaining user sessions in a web application. Additionally, ElastiCache clusters can be scaled up or down as needed, making it a good choice for a web application that is running on an Auto Scaling group.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 732341,
            "date": "Thu 01 Dec 2022 07:44",
            "username": "SmileyCloud",
            "content": "D - correct.<br><br>A,B - Smart session and session sharing do not mean anything.<br><br>https://aws.amazon.com/getting-started/hands-on/building-fast-session-caching-with-amazon-elasticache-for-redis/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#108",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is troubleshooting deployments to a new application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. Instances sometimes come online before they are ready, which is leading to increased error rates among users. The current health check configuration gives instances a 60-second grace period and considers instances healthy after two 200 response codes from /index.php, a page that may respond intermittently during the deployment process. The development team wants instances to come online as soon as possible.<br><br>Which strategy would address this issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#108",
            "answers": [
              {
                "choice": "<p>A. Increase the instance grace period from 60 seconds to 180 seconds, and the consecutive health check requirement from 2 to 3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the instance grace period from 60 seconds to 120 seconds, and change the response code requirement from 200 to 204.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the deployment script to create a /health-check.php file when the deployment begins, then modify the health check path to point to that file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the deployment script to create a /health-check.php file when all tasks are complete, then modify the health check path to point to that file.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 108 discussion",
        "discusstion": [
          {
            "id": 733592,
            "date": "Fri 02 Dec 2022 10:08",
            "username": "nsvijay04b1",
            "content": "B wrong-204 - No Content - Specifies the normal response code for the DELETE operation.<br>A wrong -makes problem worse , delays startup and using index.php doesn't help<br>Cwrong-change to right health checkbut not at start of deployment<br>Dcorrect -change to right health checkafter the deployment script finishes",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 733489,
            "date": "Fri 02 Dec 2022 07:16",
            "username": "quixo",
            "content": "D for sure",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#109",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a single-page application that was developed in Angular. A DevOps engineer needs to automate deployments of the application to a website that the company hosts on Amazon S3. The solution must provide version control of the source code and must give developers the ability to perform peer review.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#109",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CodeCommit repository to store the source code. Create an AWS CodePipeline pipeline that has a source of the CodeCommit repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an S3 bucket to act as the source for developers to upload their source code. Create an AWS CodePipeline pipeline that has the S3 bucket as the source.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the CodePipeline pipeline, configure an AWS CodeBuild phase that compiles the source code and produces build artifacts.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the CodePipeline pipeline, configure an AWS CodeDeploy phase that compiles the source code, produces build artifacts, and then deploys the website.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. In the CodePipeline pipeline, configure an AWS AppConfig deploy action that deploys the build artifacts to the S3 website bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. In the CodePipeline pipeline, configure an S3 deploy action that deploys the build artifacts to the S3 website bucket.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 109 discussion",
        "discusstion": [
          {
            "id": 754204,
            "date": "Fri 23 Dec 2022 13:48",
            "username": "Imstack",
            "content": "ACF for sure",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741623,
            "date": "Sun 11 Dec 2022 12:12",
            "username": "SatenderRathee",
            "content": "A, C, and F are the correct steps to meet the requirements.<br><br>To provide version control and peer review, the company can create an AWS CodeCommit repository to store the source code. Then, they can create an AWS CodePipeline pipeline that has the CodeCommit repository as its source.<br><br>In the CodePipeline pipeline, they can configure an AWS CodeBuild phase to compile the source code and produce build artifacts. This will allow the pipeline to build and package the application code.<br><br>Finally, they can configure an S3 deploy action in the CodePipeline pipeline to deploy the build artifacts to the S3 website bucket, which will host the website. This will enable the pipeline to automatically deploy the application to the website hosted on S3.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 733602,
            "date": "Fri 02 Dec 2022 10:22",
            "username": "nsvijay04b1",
            "content": "A - peer review<br>C - Build Angular code<br>F - deploy to S3 bucket",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 733494,
            "date": "Fri 02 Dec 2022 07:21",
            "username": "quixoquixo",
            "content": "I will go with ACDRefer: https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-s3deploy.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 733496,
            "date": "Fri 02 Dec 2022 07:23",
            "username": "quixo",
            "content": "Refer: https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-s3deploy.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732347,
            "date": "Thu 01 Dec 2022 07:57",
            "username": "SmileyCloudquixo",
            "content": "A - You need source repo<br>C - CodeBuild to compile<br>F - CodePipeline to deploy to S3<br><br>E - no need to deploy to AppConfig, S3 is also a target.Look like answer is ACD ?",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 733492,
            "date": "Fri 02 Dec 2022 07:20",
            "username": "quixo",
            "content": "Look like answer is ACD ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731472,
            "date": "Wed 30 Nov 2022 13:47",
            "username": "Maygam",
            "content": "For deployment, i would with Amazon S3 deploy action which is option F",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 727519,
            "date": "Sat 26 Nov 2022 13:57",
            "username": "adozooquixo",
            "content": "Angular is use NPM? need codebuild..i thinkE do not mention about codebuid?",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 733493,
            "date": "Fri 02 Dec 2022 07:21",
            "username": "quixo",
            "content": "E do not mention about codebuid?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#110",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is creating a CI/CD pipeline for an Amazon ECS service. The ECS container instances run behind an Application Load Balancer as the web tier of a three-tier application. An acceptance criterion for a successful deployment is the verification that the web tier can communicate with the database and middleware tiers of the application upon deployment.<br><br>How can this be accomplished in an automated fashion?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#110",
            "answers": [
              {
                "choice": "<p>A. Create a health check endpoint in the web application that tests connectivity to the data and middleware tiers. Use this endpoint as the health check URL for the load balancer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an approval step for the quality assurance team to validate connectivity. Reject changes in the pipeline if there is an issue with connecting to the dependent tiers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon RDS active connection count and an Amazon CloudWatch ELB metric to alarm on a significant change to the number of open connections.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Route 53 health checks to detect issues with the web service and roll back the Cl/CD pipeline if there is an error.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 110 discussion",
        "discusstion": [
          {
            "id": 754207,
            "date": "Fri 23 Dec 2022 13:50",
            "username": "Imstack",
            "content": "AAAAAAAAA",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733605,
            "date": "Fri 02 Dec 2022 10:27",
            "username": "nsvijay04b1",
            "content": "A correct-CodePipeline -> codeDeploy with health check to middleware/DB if failed automatic rollback.<br>B,C wrong<br>Dwrong - is for DR scenarios, weighted routing, a health check is must and cannot rollback",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732348,
            "date": "Thu 01 Dec 2022 07:59",
            "username": "SmileyCloud",
            "content": "A - correct. You need some sort of a health check.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#111",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team manages website deployments using AWS CodeDeploy blue/green deployments. The application is running on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group.<br><br>When deploying a new revision, the team notices the deployment eventually fails, but it takes a long time to fail. After further inspection, the team discovers the AllowTraffic lifecycle event ran for an hour and eventually failed without providing any other information. The team wants to ensure failure notices are delivered more quickly while maintaining application availability even upon failure.<br><br>Which combination of actions should be taken to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#111",
            "answers": [
              {
                "choice": "<p>A. Change the deployment configuration to CodeDeployDefault.AllAtOnce to speed up the deployment process by deploying to all of the instances at the same time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a CodeDeploy trigger for the deployment failure event and make the deployment fail as soon as a single health check failure is detected.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reduce the HealthCheckIntervalSeconds and UnhealthyThresholdCount values within the target group health checks to decrease the amount of time it takes for the application to be considered unhealthy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the appspec.yml file to run a script on the AllowTraffic hook to perform lighter health checks on the application instead of making CodeDeploy wait for the target group health checks to pass.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use the appspec.yml file to run a script on the BeforeAllowTraffic hook to perform health checks on the application and fail the deployment if the health checks performed by the script are not successful.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 111 discussion",
        "discusstion": [
          {
            "id": 754213,
            "date": "Fri 23 Dec 2022 13:56",
            "username": "Imstack",
            "content": "BE !!!!!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741626,
            "date": "Sun 11 Dec 2022 12:19",
            "username": "SatenderRathee",
            "content": "To quickly deliver failure notices while maintaining application availability, the team should:<br><br>Use the appspec.yml file to run a script on the BeforeAllowTraffic hook to perform health checks on the application and fail the deployment if the health checks performed by the script are not successful. (E)<br>Reduce the HealthCheckIntervalSeconds and UnhealthyThresholdCount values within the target group health checks to decrease the amount of time it takes for the application to be considered unhealthy. (C)<br>By performing health checks on the BeforeAllowTraffic hook, the team can quickly determine if the deployment is successful or not, and fail the deployment if the health checks performed by the script are not successful. This will allow the team to receive failure notices more quickly while maintaining application availability.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CE"
          },
          {
            "id": 733626,
            "date": "Fri 02 Dec 2022 11:19",
            "username": "nsvijay04b1",
            "content": "A - disaster<br>C - wrong - already reached AllowTraffic lifecycle event that means it is not taking time in ValidateService event, problem is in health check itself.<br>B/E - correct<br>Between D/E, why E? AllowTraffic - u cannot run scripts, it belongs to codedeploy<br><br>BeforeAllowTraffic =E2=80=93 You can use this deployment lifecycle event to run tasks on instances before they are registered with a load balancer.<br><br>AllowTraffic =E2=80=93 During this deployment lifecycle event, internet traffic is allowed to access instances after a deployment. This event is reserved for the CodeDeploy agent and cannot be used to run scripts.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 733497,
            "date": "Fri 02 Dec 2022 07:24",
            "username": "quixo",
            "content": "BE for sure",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#112",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team manually builds an artifact locally and then places it in an Amazon S3 bucket. The application has a local cache that must be cleared when a deployment occurs. The team executes a command to do this, downloads the artifact from Amazon S3, and unzips the artifact to complete the deployment.<br><br>A DevOps team wants to migrate to a CI/CD process and build in checks to stop and roll back the deployment when a failure occurs. This requires the team to track the progression of the deployment.<br><br>Which combination of actions will accomplish this? (Choose three.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#112",
            "answers": [
              {
                "choice": "<p>A. Allow developers to check the code into a code repository. Using Amazon CloudWatch Events, on every pull into master, trigger an AWS Lambda function to build the artifact and store it in Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a custom script to clear the cache. Specify the script in the Beforelnstall lifecycle hook in the AppSpec file.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create user data for each Amazon EC2 instance that contains the clear cache script. Once deployed, test the application. If it is not successful, deploy it again.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up AWS CodePipeline to deploy the application. Allow developers to check the code into a code repository as a source for the pipeline.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS CodeBuild to build the artifact and place it in Amazon S3. Use AWS CodeDeploy to deploy the artifact to Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use AWS Systems Manager to fetch the artifact from Amazon S3 and deploy it to all the instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 112 discussion",
        "discusstion": [
          {
            "id": 754217,
            "date": "Fri 23 Dec 2022 14:00",
            "username": "Imstack",
            "content": "BDE is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733633,
            "date": "Fri 02 Dec 2022 11:32",
            "username": "nsvijay04b1",
            "content": "BDE - correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BDE"
          },
          {
            "id": 732351,
            "date": "Thu 01 Dec 2022 08:02",
            "username": "SmileyCloud",
            "content": "BDE - correct.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BDE"
          },
          {
            "id": 729994,
            "date": "Tue 29 Nov 2022 06:55",
            "username": "devopsbro",
            "content": "DEB makes sense..",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727982,
            "date": "Sun 27 Nov 2022 08:11",
            "username": "adozoo",
            "content": "AppSpeccan clear cache by bash script",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BDE"
          }
        ]
      },
      {
        "question_id": "#113",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is implementing a well-architected design for its globally accessible API stack. The design needs to ensure both high reliability and fast response times for users located in North America and Europe.<br><br>The API stack contains the following three tiers:<br><br>- Amazon API Gateway<br>- AWS Lambda<br>- Amazon DynamoDB<br><br>Which solution will meet the requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#113",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB table in the same Region as the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using latency-based routing and health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB global table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon Route 53 to point to API Gateway in North America, create a disaster recovery API in Europe, and configure both APIs to forward requests to the Lambda functions in that Region. Retrieve the data from a DynamoDB global table. Deploy a Lambda function to check the North America API health every 5 minutes. In the event of a failure, update Route 53 to point to the disaster recovery API.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon Route 53 to point to API Gateway API in North America using latency-based routing. Configure the API to forward requests to the Lambda function in the Region nearest to the user. Configure the Lambda function to retrieve and updathe data in a DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 113 discussion",
        "discusstion": [
          {
            "id": 754220,
            "date": "Fri 23 Dec 2022 14:02",
            "username": "Imstack",
            "content": "B - correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732353,
            "date": "Thu 01 Dec 2022 08:04",
            "username": "SmileyCloud",
            "content": "B - correct. Anytime there is a multi-region app that is not a DR, look for latency based Rt 53.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727985,
            "date": "Sun 27 Nov 2022 08:15",
            "username": "adozoo",
            "content": "latency-based is nessesary, Lambda function api region abotion ,not edge",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#114",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages an application that stores logs in Amazon CloudWatch Logs. The company wants to archive the logs in Amazon S3. Logs are rarely accessed after 90 days and must be retained for 10 years.<br><br>Which combination of steps should a DevOps engineer take to meet these requirements? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#114",
            "answers": [
              {
                "choice": "<p>A. Configure a CloudWatch Logs subscription filter to use AWS Glue to transfer all logs to an S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a CloudWatch Logs subscription filter to use Amazon Kinesis Data Firehose to stream all logs to an S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a CloudWatch Logs subscription filter to stream all logs to an S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the S3 bucket lifecycle policy to transition logs to S3 Glacier after 90 days and to expire logs after 3,650 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure the S3 bucket lifecycle policy to transition logs to Reduced Redundancy after 90 days and to expire logs after 3,650 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 114 discussion",
        "discusstion": [
          {
            "id": 754222,
            "date": "Fri 23 Dec 2022 14:04",
            "username": "Imstack",
            "content": "BD - correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 733503,
            "date": "Fri 02 Dec 2022 07:33",
            "username": "quixo",
            "content": "BD for sure,<br><br>You can use a subscription filter with Kinesis, Lambda, or Kinesis Data Firehose.<br>Refer: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732354,
            "date": "Thu 01 Dec 2022 08:07",
            "username": "SmileyCloud",
            "content": "BD - correct. You can't subscribe CW logs to S3.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 727984,
            "date": "Sun 27 Nov 2022 08:13",
            "username": "adozoo",
            "content": "Kinesis Data Firehose get logs and send to s3,bucket lifecycle policy change toS3 Glacier",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          }
        ]
      },
      {
        "question_id": "#115",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is building a continuous deployment pipeline for a serverless application that uses AWS Lambda functions. The company wants to reduce the customer impact of an unsuccessful deployment. The company also wants to monitor for issues.<br><br>Which deploy stage configuration will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#115",
            "answers": [
              {
                "choice": "<p>A. Use an AWS Serverless Application Model (AWS SAM) template to define the serverless application. Use AWS CodeDeploy to deploy the Lambda functions with the Canary10Percent15Minutes Deployment Preference Type. Use Amazon CloudWatch alarms to monitor the health of the functions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CloudFormation to publish a new stack update, and include Amazon CloudWatch alarms on all resources. Set up an AWS CodePipeline approval action for a developer to verify and approve the AWS CloudFormation change set.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CloudFormation to publish a new version on every stack update, and include Amazon CloudWatch alarms on all resources. Use the RoutingConfig property of the AWS:: Lambda:: Alias resource to update the traffic routing during the stack update.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeBuild to add sample event payloads for testing to the Lambda functions. Publish a new version of the functions, and include Amazon CloudWatch alarms. Update the production alias to point to the new version. Configure rollbacks to occur when an alarm is in the ALARM state.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 115 discussion",
        "discusstion": [
          {
            "id": 732355,
            "date": "Thu 01 Dec 2022 08:11",
            "username": "SmileyCloud",
            "content": "A - correct. See these links.<br><br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html<br><br>You can even do some testing.<br><br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-generate-event.html",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 754229,
            "date": "Fri 23 Dec 2022 14:08",
            "username": "Imstack",
            "content": "A is the best",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 748238,
            "date": "Sat 17 Dec 2022 18:17",
            "username": "adisabeba",
            "content": "C is the most appropriate configuration for meeting the requirements.<br>In Option C, AWS CloudFormation is used to publish a new version of the stack with every update.<br>This allows the company to roll back to a previous version if there are issues with the new version.<br>Amazon CloudWatch alarms are included on all resources to monitor the health of the application and alert the company if there are any issues.<br>The RoutingConfig property of the AWS::Lambda::Alias resource is used to update the traffic routing during the stack update, which allows the company to gradually roll out the new version and reduce the impact on customers.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727990,
            "date": "Sun 27 Nov 2022 08:21",
            "username": "adozoo",
            "content": "B is crroct ,AWS SAM just way to deploy",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#116",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large enterprise is deploying a web application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon RDS Oracle DB instance and Amazon DynamoDB.  There are separate environments for development, testing, and production.<br><br>What is the MOST secure and flexible way to obtain password credentials during deployment?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#116",
            "answers": [
              {
                "choice": "<p>A. Retrieve an access key from an AWS Systems Manager SecureString parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch the EC2 instances with an EC2 IAM role to access AWS services. Retrieve the database credentials from AWS Secrets Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Retrieve an access key from an AWS Systems Manager plaintext parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch the EC2 instances with an EC2 IAM role to access AWS services. Store the database passwords in an encrypted config file with the application artifacts.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 116 discussion",
        "discusstion": [
          {
            "id": 754232,
            "date": "Fri 23 Dec 2022 14:11",
            "username": "Imstack",
            "content": "B - correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741632,
            "date": "Sun 11 Dec 2022 12:31",
            "username": "SatenderRathee",
            "content": "Option B is the most secure and flexible way to obtain password credentials during deployment because it uses an IAM role to grant permissions to the EC2 instances to access AWS services. The database credentials can be securely stored in AWS Secrets Manager and accessed by the EC2 instances when needed. Using an IAM role eliminates the need to manage access keys, which can be a security risk if they are not properly protected. In addition, using AWS Secrets Manager to store the database credentials allows for easy rotation and management of the credentials.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732357,
            "date": "Thu 01 Dec 2022 08:14",
            "username": "SmileyCloud",
            "content": "B - Correct.<br>You want a role to access AWS service so you don't have to worry about access keys and passwords.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727988,
            "date": "Sun 27 Nov 2022 08:18",
            "username": "adozoo",
            "content": "Role and Secrets or system manager paramater store.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#117",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Development team creates a build project in AWS CodeBuild. The build project invokes automated tests of modules that access AWS services.<br>Which of the following will enable the tests to run the MOST securely?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#117",
            "answers": [
              {
                "choice": "<p>A. Generate credentials for an IAM user with a policy attached to allow the actions on AWS services. Store credentials as encrypted environment variables for the build project. As part of the build script, obtain the credentials to run the integration tests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Have CodeBuild run only the integration tests as a build job on a Jenkins server. Create a role that has a policy attached to allow the actions on AWS services. Generate credentials for an IAM user that is allowed to assume the role. Configure the credentials as secrets in Jenkins, and allow the build job to use them to run the integration tests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a service role in IAM to be assumed by CodeBuild with a policy attached to allow the actions on AWS services. Configure the build project to use the role created.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS managed credentials. Encrypt the credentials with AWS KMS. As part of the build script, decrypt with AWS KMS and use these credentials to run the integration tests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 117 discussion",
        "discusstion": [
          {
            "id": 22621,
            "date": "Mon 20 Sep 2021 02:12",
            "username": "BeastXHyunseoktubadc",
            "content": "I would go CI thinks it's D<br>https://docs.aws.amazon.com/codebuild/latest/userguide/setting-up.htmlI go with C, it should say AWS Secrets Manager, no AWS manage credentials... i think",
            "upvote_count": "1211",
            "selected_answers": ""
          },
          {
            "id": 23230,
            "date": "Tue 21 Sep 2021 14:00",
            "username": "Hyunseoktubadc",
            "content": "I thinks it's D<br>https://docs.aws.amazon.com/codebuild/latest/userguide/setting-up.htmlI go with C, it should say AWS Secrets Manager, no AWS manage credentials... i think",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 26338,
            "date": "Sat 25 Sep 2021 13:25",
            "username": "tubadc",
            "content": "I go with C, it should say AWS Secrets Manager, no AWS manage credentials... i think",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 34653,
            "date": "Sun 03 Oct 2021 11:27",
            "username": "TCAWS",
            "content": "c: CodeBuild requires a service role to access AWS resources being tested/verified<br> https://aws.amazon.com/blogs/devops/access-resources-in-a-vpc-from-aws-codebuild-builds/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 223364,
            "date": "Wed 27 Oct 2021 23:33",
            "username": "jackdryan",
            "content": "I'll go with C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 208324,
            "date": "Wed 27 Oct 2021 06:31",
            "username": "ChauPhan",
            "content": "C.  Best SECURE way is using roles",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 198148,
            "date": "Tue 26 Oct 2021 15:44",
            "username": "kj07",
            "content": "Answer: C.  Using an IAM role is a best practice instead of an IAM user.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 96287,
            "date": "Mon 25 Oct 2021 23:37",
            "username": "un",
            "content": "I will go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 62789,
            "date": "Sat 23 Oct 2021 20:07",
            "username": "Ebi",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 62239,
            "date": "Fri 22 Oct 2021 21:52",
            "username": "yassu",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 59284,
            "date": "Mon 18 Oct 2021 19:34",
            "username": "toshko85",
            "content": "i would go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 56823,
            "date": "Sat 09 Oct 2021 08:53",
            "username": "xaocho",
            "content": "It is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 37444,
            "date": "Tue 05 Oct 2021 23:29",
            "username": "dinhvu",
            "content": "I go with C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 31662,
            "date": "Thu 30 Sep 2021 00:45",
            "username": "ppshein",
            "content": "It should be C, as per AWS documentation, to make secure, better create IAM role instead of IAM user.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 28447,
            "date": "Wed 29 Sep 2021 19:44",
            "username": "jiedee",
            "content": "I would go C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#118",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is researching the least expensive way to implement an image batch processing cluster on AWS. The application cannot run in Docker containers and must run on Amazon EC2. The batch job stores checkpoint data on an NFS and can tolerate interruptions. Configuring the cluster software from a generic EC2 Linux image takes 30 minutes.<br><br>What is the MOST cost-effective solution?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#118",
            "answers": [
              {
                "choice": "<p>A. Use Amazon EFS for checkpoint data. To complete the job, use an EC2 Auto Scaling group and an On-Demand pricing model to provision EC2 instances temporarily.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use GlusterFS on EC2 instances for checkpoint data. To run the batch job, configure EC2 instances manually. When the job completes, shut down the instances manually.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances, and utilize user data to configure the EC2 Linux instance on startup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances. Create a custom AMI for the cluster and use the latest AMI when creating instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 118 discussion",
        "discusstion": [
          {
            "id": 760449,
            "date": "Thu 29 Dec 2022 01:24",
            "username": "strike3test",
            "content": "D sounds reasonable",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 755433,
            "date": "Sun 25 Dec 2022 07:08",
            "username": "Kapello10",
            "content": "D is the correct ans",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 754237,
            "date": "Fri 23 Dec 2022 14:15",
            "username": "Imstack",
            "content": "D - correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#119",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A mobile application running on eight Amazon EC2 instances is relying on a third-party API endpoint. The third-party service has a high failure rate because of limited capacity which is expected to be resolved in a few weeks.<br><br>In the meantime, the mobile application developers have added a retry mechanism and are logging failed API requests. A DevOps engineer must automate the monitoring of application logs and count the specific error messages, if there are more than 10 errors within a 1-minute window the system must issue an alert.<br><br>How can the requirements be met with MINIMAL management overhead?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#119",
            "answers": [
              {
                "choice": "<p>A. Install the Amazon CloudWatch agent on all instances to push the application logs to CloudWatch Logs. Use metric filters to count the error messages every minute, and initiate a CloudWatch alarm if the count exceeds 10 errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the Amazon CloudWatch agent on all instances to push the access logs to CloudWatch Logs. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to count the error messages every minute, and initiate a CloudWatch alarm if the count exceeds 10 errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the Amazon CloudWatch agent on all instances to push the application logs to CloudWatch Logs. Use a metric filter to generate a custom CloudWatch metric that records the number of failures and initiates a CloudWatch alarm if the custom metric reaches 10 errors in a 1-minute period.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy a custom script on all instances to check application logs regularly in a cron job. Count the number of error messages every minute, and push a data point to a custom CloudWatch metric. Initiate a CloudWatch alarm if the custom metric reaches 10 errors in a 1-minute period.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 119 discussion",
        "discusstion": [
          {
            "id": 765380,
            "date": "Wed 04 Jan 2023 09:25",
            "username": "obaf1",
            "content": "Ans:A<br>C is wrong because to create a \\\"custom CloudWatch metric\\\", you need to write your own script or use an application monitoring script. See AWS docs below:<br>https://docs.aws.amazon.com/managedservices/latest/userguide/custom-cloudwatch-events.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 763723,
            "date": "Mon 02 Jan 2023 13:47",
            "username": "ericzaj",
            "content": "Going with C.  C states use of custom metric filter.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 763370,
            "date": "Sun 01 Jan 2023 23:49",
            "username": "obaf1",
            "content": "Ans: A<br>For those choosing C, please, read AWS documentation about \\\"custom CloudWatch metrics\\\". You don't use metric filter to generate \\\"custom CloudWatch metric\\\", instead you use the AWS CLI or an API (see excerpt below):<br>Full link: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html<br>\\\"Publishing custom metrics<br>-------------------------------------------<br>You can publish your own metrics to CloudWatch using the AWS CLI or an API. You can view statistical graphs of your published metrics with the AWS Management Console.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 761242,
            "date": "Thu 29 Dec 2022 17:14",
            "username": "obaf1",
            "content": "Ans is A<br>User Saggy4 is wrong in stating that \\\"A is wrong as you can only use metric filters to get count per occurrence in logs and not count in a particular time frame.\\\"<br>Scroll to 2:08 of the tutorial below:<br>https://www.youtube.com/watch?vI_VjSvSSoF4&ab_channelSREMasterClass<br>(You can specify the time period within which the error count needs to occur by creating an alarm on top of your metric. Please, see the video above eg 10 errors within a minute)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 760450,
            "date": "Thu 29 Dec 2022 01:25",
            "username": "strike3test",
            "content": "This is a confusing question and I am more inclined towards C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 759728,
            "date": "Wed 28 Dec 2022 11:45",
            "username": "obaf1",
            "content": "Ans: A;<br>\\\"C\\\" is wrong because the question is asking for \\\"MINIMAL\\\" effort. You don't need to use \\\" a metric filter to generate a custom CloudWatch metric that records the number of failures\\\" when you have the option in \\\"A\\\" to simply count directly using metrics filter.<br>Here's a link on using metric filter to count:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CountOccurrencesExample.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 759695,
            "date": "Wed 28 Dec 2022 11:10",
            "username": "obaf1",
            "content": "Ans: A;<br>B is wrong because the question is asking for \\\"MINIMAL\\\" effort. You don't need to use \\\" a metric filter to generate a custom CloudWatch metric that records the number of failures\\\" when you have the option in \\\"A\\\" to simply count directly using metrics filter.<br>Here's a link on using metric filter to count:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CountOccurrencesExample.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 759380,
            "date": "Wed 28 Dec 2022 06:18",
            "username": "saggy4",
            "content": "C -- We need to use CloudWatch metric filter to generate count and Cloudwatch alarm for checking number of counts in a minute.<br>A -- is wrong as you can only use metric filters to get count per occurrence in logs and not count in a particular time frame.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 757632,
            "date": "Mon 26 Dec 2022 17:03",
            "username": "tartealacreme",
            "content": "C quite obvious",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 754240,
            "date": "Fri 23 Dec 2022 14:18",
            "username": "Imstack",
            "content": "C is better",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 753791,
            "date": "Fri 23 Dec 2022 02:27",
            "username": "obaf1",
            "content": "Ans: A<br>It's better to use the AWS CloudWatch Metric Filter than a custom script.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#120",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has 20 service teams. Each service team is responsible for its own microservice. Each service team uses a separate AWS account for its microservice and a VPC with the 192.168.0.0/22 CIDR block. The company manages the AWS accounts with AWS Organizations.<br><br>Each service team hosts its microservice on multiple Amazon EC2 instances behind an Application Load Balancer. The microservices communicate with each other across the public Internet. The company's security team has issued a new guideline that all communication between microservices must use HTTPS over private network connections and cannot traverse the public Internet.<br><br>A DevOps engineer must implement a solution that fulfills these obligations and minimizes the number of changes for each service team.<br><br>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#120",
            "answers": [
              {
                "choice": "<p>A. Create a new AWS account in AWS Organizations. Create a VPC in this account and use AWS Resource Access Manager to share the private subnets of this VPC with the organization. Instruct the service teams to launch a new Network Load Balancer (NLB) and EC2 instances that use the shared private subnets. Use the NLB DNS names for communication between microservices.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Use AWS PrivateLink to create VPC endpoints in each AWS account for the NLBs. Create subscriptions to each VPC endpoint in each of the other AWS accounts. Use the VPC endpoint DNS names for communication between microservices.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Create VPC peering connections between each of the microservice VPCs. Update the route tables for each VPC to use the peering links. Use the NLB DNS names for communication between microservices.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new AWS account in AWS Organizations. Create a transit gateway in this account. and use AWS Resource Access Manager to share the transit gateway with the organization. In each of the microservice VPCs, create a transit gateway attachment to the shared transit gateway. Update the route tables of each VPC to use the transit gateway. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Use the NLB DNS names for communication between microservices.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 120 discussion",
        "discusstion": [
          {
            "id": 765372,
            "date": "Wed 04 Jan 2023 09:14",
            "username": "Ace987",
            "content": "Transit Gateway fits better ; Connect Amazon VPCs, AWS accounts, and on-premises networks to a single gateway",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 754244,
            "date": "Fri 23 Dec 2022 14:22",
            "username": "Imstack",
            "content": "B - private link fits well in this situation",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#121",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is adopting AWS CodeDeploy to automate its application deployments for a Java-Apache Tomcat application with an Apache webserver The development team started with a proof of concept, created a deployment group for a developer environment, and performed functional tests within the application After completion, the team will create additional deployment groups for staging and production.<br><br>The current log level is configured within the Apache settings, but the team wants to change this configuration dynamically when the deployment occurs, so that they can set different log level configurations depending on the deployment group without having a different application revision for each group.<br><br>How can these requirements be met with the LEAST management overhead and without requiring different script versions for each deployment group?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#121",
            "answers": [
              {
                "choice": "<p>A. Tag the Amazon EC2 instances depending on the deployment group. Then place a script into the application revision that calls the metadata service and the EC2 API to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference the script as part of the Afterinstall lifecycle hook in the appspec.yml file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a script that uses the CodeDeploy environment variable DEPLOYMENT_GROUP_NAME to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference this script as part of the Beforelnstall lifecycle hook in the appspec.yml file.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a CodeDeploy custom environment variable for each environment Then place a script into the application revision that checks this environment variable to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference this script as part of the ValidateService lifecycle hook in the appspec.yml file.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a script that uses the CodeDeploy environment variable DEPLOYMENT_GROUP_ID to identify which deployment group the instance is part of to configure the log level settings. Reference this script as part of the Install lifecycle hook in the appspec.yml file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 121 discussion",
        "discusstion": [
          {
            "id": 759899,
            "date": "Wed 28 Dec 2022 14:50",
            "username": "saggy4",
            "content": "B is the correct answer here is the link to the docs explaining just that https://aws.amazon.com/blogs/devops/using-codedeploy-environment-variables/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 757618,
            "date": "Mon 26 Dec 2022 16:53",
            "username": "tartealacreme",
            "content": "B the correct one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 754271,
            "date": "Fri 23 Dec 2022 14:58",
            "username": "Imstack",
            "content": "B - Correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#122",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a custom-built application that processes records. All the components run on Amazon EC2 instances that run in an Auto Scaling group. Each record's processing is a multistep sequential action that is compute-intensive. Each step is always completed in 5 minutes or less.<br><br>A limitation of the current system is that if any steps fail, the application has to reprocess the record from the beginning. The company wants to update the architecture so that the application must reprocess only the failed steps.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#122",
            "answers": [
              {
                "choice": "<p>A. Create a web application to write records to Amazon S3. Use S3 Event Notifications to publish to an Amazon Simple Notification Service (Amazon SNS) topic. Use an EC2 instance to poll Amazon SNS and start processing. Save intermediate results to Amazon S3 to pass on to the next step.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform the processing steps by using logic in the application. Convert the application code to run in a container. Use AWS Fargate to manage the container instances. Configure the container to invoke itself to pass the state from one step to the next.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a web application to pass records to an Amazon Kinesis data stream. Decouple the processing by using the Kinesis data stream and AWS Lambda functions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a web application to pass records to AWS Step Functions. Decouple the processing into Step Functions tasks and AWS Lambda functions.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 122 discussion",
        "discusstion": [
          {
            "id": 754274,
            "date": "Fri 23 Dec 2022 15:01",
            "username": "Imstack",
            "content": "D DDDDDDD",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#123",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is designing a multi-Region disaster recovery strategy for an application. The application requires an RPO of 1 hour and requires an RTO of 4 hours. The application is deployed with an AWS CloudFormation template that creates an Application Load Balancer (ALB), Amazon EC2 instances in an Auto Scaling group and an Amazon RDS Multi-AZ DB instance with 20 GB of allocated storage. The AMI of the application instance does not contain data and has been copied to the destination Region.<br><br>Which combination of actions will meet the recovery objectives at the LOWEST cost? (Choose two.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#123",
            "answers": [
              {
                "choice": "<p>A. Launch an RDS DB instance in the failover Region. Use AWS Database Migration Service (AWS DMS) to configure ongoing replication from the source database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Upon failover, update the AWS CloudFormation stack in the failover Region to increase the desired number of instances in the Auto Scaling group. When the stack update is complete, change the DNS records to point to the failover Region's ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Upon failover, launch the AWS CloudFormation template in the failover Region with the DB snapshot ID as an input parameter. When the stack creation is complete, change the DNS records to point to the failover Region's ALB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Backup to take a snapshot of the DB instance every hour and to copy the snapshot to the failover Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an Amazon EventBridge (Amazon CloudWatch Events) event that invokes an AWS Lambda function to copy the RDS automated snapshot to the failover Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 123 discussion",
        "discusstion": [
          {
            "id": 759920,
            "date": "Wed 28 Dec 2022 15:16",
            "username": "saggy4",
            "content": "Answer is C and D. <br>B is wrong because from the question there is just AMI in the disaster region, there is no Autoscaling group for which we can increase the count.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 753083,
            "date": "Thu 22 Dec 2022 09:21",
            "username": "obaf1",
            "content": "Answer: C,D<br>B is wrong because it's an Auto Scaling Group, therefore there's no need to manually increase number of instances in the failover region.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 753056,
            "date": "Thu 22 Dec 2022 08:31",
            "username": "obaf1",
            "content": "Answer: C,D<br>B is wring because it's an Auto Scaling Group and there's no need to manually increase number of instances in the failover region",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#124",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is beginning to move to the AWS Cloud. Internal customers are classified into two groups according to their AWS skills: beginners and experts.<br>The DevOps Engineer needs to build a solution to allow beginners to deploy a restricted set of AWS architecture blueprints expresses as AWS CloudFormation templates. Deployment should only be possible on predetermined Virtual Private Clouds (VPCs). However, expert users should be able to deploy blueprints without constraints. Experts should also be able to access other AWS services, as needed.<br>How can the Engineer implement a solution to meet these requirements with the LEAST amount of overhead?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#124",
            "answers": [
              {
                "choice": "<p>A. Apply constraints to the parameters in the templates, limiting the VPCs available for deployments. Store the templates on Amazon S3. Create an IAM group for beginners and give them access to the templates and CloudFormation. Create a separate group for experts, giving them access to the templates, CloudFormation, and other AWS services.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the templates on Amazon S3. Use AWS Service Catalog to create a portfolio of products based on those templates. Apply template constraints to the products with rules limiting VPCs available for deployments. Create an IAM group for beginners giving them access to the portfolio. Create a separate group for experts giving them access to the templates, CloudFormation, and other AWS services.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the templates on Amazon S3. Use AWS Service Catalog to create a portfolio of products based on those templates. Create an IAM role restricting VPCs available for creation of AWS resources. Apply a launch constraint to the products using this role. Create an IAM group for beginners giving them access to the portfolio. Create a separate group for experts giving them access to the portfolio and other AWS services.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create two templates for each architecture blueprint where only one of them limits the VPC available for deployments. Store the templates in Amazon DynamoDB.  Create an IAM group for beginners giving them access to the constrained templates and CloudFormation. Create a separate group for experts giving them access to the unconstrained templates, CloudFormation, and other AWS services.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 124 discussion",
        "discusstion": [
          {
            "id": 22642,
            "date": "Mon 27 Sep 2021 05:45",
            "username": "BeastX",
            "content": "B is right<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html",
            "upvote_count": "20",
            "selected_answers": ""
          },
          {
            "id": 668147,
            "date": "Tue 13 Sep 2022 16:38",
            "username": "colinquek",
            "content": "C sounds close but upon detailed reading, it seems that the expert grp will end up having the same constraints as the beginners'.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 478550,
            "date": "Mon 15 Nov 2021 09:44",
            "username": "JASnipesRightAnswers",
            "content": "This is C. <br>Without a launch constraint, end users must launch and manage products using their own IAM credentials. To do so, they must have permissions for AWS CloudFormation, AWS services that the products use, and AWS Service Catalog. By using a launch role, you can instead limit the end users' permissions to the minimum they require for that product. For more information about end user permissions, see Identity and Access Management in AWS Service Catalog.<br>https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-launch.htmlIf you apply a launch constraint, then the beginners will try to launch products with VPCs to which they don't have access and it will fail. You won't expect the beginners to have expertise to debug the issues. But in Ans B, you predefine the VPCs.",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 553209,
            "date": "Mon 21 Feb 2022 21:09",
            "username": "RightAnswers",
            "content": "If you apply a launch constraint, then the beginners will try to launch products with VPCs to which they don't have access and it will fail. You won't expect the beginners to have expertise to debug the issues. But in Ans B, you predefine the VPCs.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 223875,
            "date": "Fri 05 Nov 2021 04:15",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 208361,
            "date": "Sun 31 Oct 2021 21:07",
            "username": "ChauPhan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 118174,
            "date": "Fri 29 Oct 2021 18:30",
            "username": "Luobin",
            "content": "B for me",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 96315,
            "date": "Wed 06 Oct 2021 12:39",
            "username": "un",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 65134,
            "date": "Wed 06 Oct 2021 06:15",
            "username": "Ebi",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 62247,
            "date": "Tue 05 Oct 2021 22:38",
            "username": "yassu",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 56844,
            "date": "Mon 04 Oct 2021 15:47",
            "username": "xaocho",
            "content": "It is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 45919,
            "date": "Sat 02 Oct 2021 08:07",
            "username": "Dharshan07",
            "content": "My answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 43803,
            "date": "Fri 01 Oct 2021 08:08",
            "username": "syed5",
            "content": "Yes. B is right.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#125",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An IT team has built an AWS CloudFormation template so others in the company can quickly and reliably deploy and terminate an application. The template creates an Amazon EC2 instance with a user data script to install the application and an Amazon S3 bucket that the application uses to serve static webpages while it is running.<br><br>All resources should be removed when the CloudFormation stack is deleted. However, the team observes that CloudFormation reports an error during stack deletion, and the S3 bucket created by the stack is not deleted.<br><br>How can the team resolve the error in the MOST efficient manner to ensure that all resources are deleted without errors?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#125",
            "answers": [
              {
                "choice": "<p>A. Add a DeletionPolicy attribute to the S3 bucket resource, with the value Delete forcing the bucket to be removed when the stack is deleted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a custom resource with an AWS Lambda function with the DependsOn attribute specifying the S3 bucket, and an IAM role. Write the Lambda function to delete all objects from the bucket when RequestType is Delete.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Identify the resource that was not deleted. From the S3 console, empty the S3 bucket and then delete it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Replace the EC2 and S3 bucket resources with a single AWS OpsWorks Stacks resource. Define a custom recipe for the stack to create and delete the EC2 instance and the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 125 discussion",
        "discusstion": [
          {
            "id": 759936,
            "date": "Wed 28 Dec 2022 15:27",
            "username": "saggy4",
            "content": "The Correct Option is B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 754280,
            "date": "Fri 23 Dec 2022 15:16",
            "username": "Imstack",
            "content": "BBBBBBBBB",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 753027,
            "date": "Thu 22 Dec 2022 07:40",
            "username": "SuriSagar",
            "content": "It's B.  You can create a lambda function to clean up your bucket and invoke your lambda from your CloudFormation stack using a CustomResource.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#126",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer must create a Linux AMI in an automated fashion. The newly created AMI identification must be stored in a location where other build pipelines can access the new identification programmatically.<br><br>What is the MOST cost-effective way to do this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#126",
            "answers": [
              {
                "choice": "<p>A. Build a pipeline in AWS CodePipeline to download and save the latest operating system Open Virtualization Format (OVF) image to an Amazon S3 bucket. Customize the image by using the guestfish utility. Use the virtual machine (VM) import command to convert the OVF to an AMI. Store the AMI identification output as an AWS Systems Manager Parameter Store parameter.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Systems Manager Automation runbook with values instructing how the image should be created. Build a pipeline in AWS CodePipeline to execute the runbook to create the AMI. Store the AMI identification output as a Systems Manager Parameter Store parameter.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Build a pipeline in AWS CodePipeline to take a snapshot of an Amazon EC2 instance running the latest version of the application. Start a new EC2 instance from the snapshot and update the running instance by using an AWS Lambda function. Take a snapshot of the updated instance and convert it to an AMI. Store the AMI identification output in an Amazon DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch an Amazon EC2 instance and install Packer. Configure a Packer build with values defining how the image should be created. Build a Jenkins pipeline to invoke the Packer build to create an AMI. Store the AMI identification output in an Amazon DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 126 discussion",
        "discusstion": [
          {
            "id": 754384,
            "date": "Fri 23 Dec 2022 18:23",
            "username": "reyshah007",
            "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 754333,
            "date": "Fri 23 Dec 2022 16:27",
            "username": "paku",
            "content": "Answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 753037,
            "date": "Thu 22 Dec 2022 07:51",
            "username": "SuriSagar",
            "content": "Answer is B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#127",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A global company with distributed Development teams built a web application using a microservices architecture running on Amazon ECS. Each application service is independent and runs as a service in the ECS cluster. The container build files and source code reside in a private GitHub source code repository.<br>Separate ECS clusters exist for development, testing, and production environments.<br>Developers are required to push features to branches in the GitHub repository and then merge the changes into an environment-specific branch (development, test, or production). This merge needs to trigger an automated pipeline to run a build and a deployment to the appropriate ECS cluster.<br>What should the DevOps Engineer recommend as an automated solution to these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#127",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CloudFormation stack for the ECS cluster and AWS CodePipeline services. Store the container build files in an Amazon S3 bucket. Use a post-commit hook to trigger a CloudFormation stack update that deploys the ECS cluster. Add a task in the ECS cluster to build and push images to Amazon ECR, based on the container build files in S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a separate pipeline in AWS CodePipeline for each environment. Trigger each pipeline based on commits to the corresponding environment branch in GitHub. Add a build stage to launch AWS CodeBuild to create the container image from the build file and push it to Amazon ECR. Then add another stage to update the Amazon ECS task and service definitions in the appropriate cluster for that environment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a pipeline in AWS CodePipeline. Configure it to be triggered by commits to the master branch in GitHub. Add a stage to use the Git commit message to determine which environment the commit should be applied to, then call the create-image Amazon ECR command to build the image, passing it to the container build file. Then add a stage to update the ECS task and service definitions in the appropriate cluster for that environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new repository in AWS CodeCommit. Configure a scheduled project in AWS CodeBuild to synchronize the GitHub repository to the new CodeCommit repository. Create a separate pipeline for each environment triggered by changes to the CodeCommit repository. Add a stage using AWS Lambda to build the container image and push to Amazon ECR. Then add another stage to update the ECS task and service definitions in the appropriate cluster for that environment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 127 discussion",
        "discusstion": [
          {
            "id": 22650,
            "date": "Fri 01 Oct 2021 08:01",
            "username": "BeastXCyrusCheng",
            "content": "B looks right for meSame B<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-cd-pipeline.html",
            "upvote_count": "118",
            "selected_answers": ""
          },
          {
            "id": 23990,
            "date": "Tue 05 Oct 2021 00:09",
            "username": "CyrusCheng",
            "content": "Same B<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-cd-pipeline.html",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 252520,
            "date": "Sun 07 Nov 2021 03:21",
            "username": "gmandala",
            "content": "B for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224003,
            "date": "Mon 01 Nov 2021 06:39",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 208541,
            "date": "Wed 27 Oct 2021 13:52",
            "username": "ChauPhan",
            "content": "B looks fine",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 62250,
            "date": "Tue 19 Oct 2021 23:39",
            "username": "yassu",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 56852,
            "date": "Sat 16 Oct 2021 08:33",
            "username": "xaocho",
            "content": "It is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 37493,
            "date": "Wed 13 Oct 2021 10:53",
            "username": "dinhvu",
            "content": "I go with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 34443,
            "date": "Sat 09 Oct 2021 09:16",
            "username": "un",
            "content": "I will go with B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#128",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is building a multistage pipeline with AWS CodePipeline to build, verify, stage, test, and deploy an application. A manual approval stage is required between the test stage and the deploy stage. The development team uses a custom chat tool with webhook support that requires near-real-time notifications.<br><br>How should the DevOps engineer configure status updates for pipeline activity and approval requests to post to the chat tool?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#128",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Logs subscription that filters on CodePipeline Pipeline Execution State Change. Publish subscription events to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the chat webhook URL to the SNS topic, and complete the subscription validation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function that is invoked by AWS CloudTrail events. When a CodePipeline Pipeline Execution State Change event is detected, send the event details to the chat webhook URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that filters on CodePipeline Pipeline Execution State Change. Publish the events to an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function that sends event details to the chat webhook URL. Subscribe the function to the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the pipeline code to send the event details to the chat webhook URL at the end of each stage. Parameterize the URL so that each pipeline can send to a different URL based on the pipeline environment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 128 discussion",
        "discusstion": [
          {
            "id": 765335,
            "date": "Wed 04 Jan 2023 08:17",
            "username": "Ace987",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 760470,
            "date": "Thu 29 Dec 2022 01:56",
            "username": "strike3test",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 754289,
            "date": "Fri 23 Dec 2022 15:30",
            "username": "Imstack",
            "content": "CCCCCCCC",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 753045,
            "date": "Thu 22 Dec 2022 08:02",
            "username": "SuriSagar",
            "content": "It is C. ",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 750775,
            "date": "Tue 20 Dec 2022 11:59",
            "username": "DerekMinstP",
            "content": "C<br>Best practise",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#129",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security team is concerned that a developer can unintentionally attach an Elastic IP address to an Amazon EC2 instance in production. No developer should be allowed to attach an Elastic IP address to an instance. The security team must be notified if any production server has an Elastic IP address at any time.<br><br>How can this task be automated?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#129",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Athena to query AWS CloudTrail logs to check for any associate-address attempts. Create an AWS Lambda function to disassociate the Elastic IP address from the instance, and alert the security team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Attach an IAM policy to the developers' IAM group to deny associate-address permissions. Create a custom AWS Config rule to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure that all IAM groups associated with developers do not have associate-address permissions. Create a scheduled AWS Lambda function to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team if an instance has an Elastic IP address associated with it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Config rule to check that all production instances have EC2 IAM roles that include deny associate-address permissions. Verify whether there is an Elastic IP address associated with any instance, and alert the security team if an instance has an Elastic IP address associated with it.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 129 discussion",
        "discusstion": [
          {
            "id": 760066,
            "date": "Wed 28 Dec 2022 17:11",
            "username": "saggy4",
            "content": "A - This only checks and remidiates, does not restrict the developers to attach EIP<br>B - Correct<br>C - This is not optimal<br>D - EC2 IAM roles are not responsible for the EIP attachment the roles associated to developers are",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 754304,
            "date": "Fri 23 Dec 2022 15:46",
            "username": "Imstack",
            "content": "B - correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#130",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Control Tower to manage its multi-account AWS environment. The company has historically created AWS accounts by using AWS Control Tower through the AWS Management Console. The company wants to implement an automated solution that will create new AWS accounts by using AWS Control Tower Account Factory.<br><br>A DevOps engineer is testing a new approach in which employees will upload a csv file into an Amazon S3 bucket. The .csv file will contain the information that is necessary to create a new AWS account. An AWS Lambda function will process event notifications from Amazon S3 when new files are created in the S3 bucket. The Lambda function will create the AWS account by using the AWS Service Catalog APIs.<br><br>The DevOps engineer needs to implement a solution to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic when the account creation process ends successfully.<br><br>What should the DevOps engineer do to automate the SNS notification?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#130",
            "answers": [
              {
                "choice": "<p>A. Configure AWS Control Tower to publish to the SNS topic when the automatic drift detection feature identifies that a new account has been added to the service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the AWS Control Tower Account Factory product in AWS Service Catalog to publish to the SNS topic when a new account product is launched with the service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to the AWS Service Catalog ProvisionProduct event and publishes to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to the AWS Control Tower CreateManagedAccount event and publishes to the SNS topic.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 130 discussion",
        "discusstion": [
          {
            "id": 760472,
            "date": "Thu 29 Dec 2022 01:59",
            "username": "strike3test",
            "content": "D is correct<br>https://docs.aws.amazon.com/controltower/latest/userguide/lifecycle-events.html#create-managed-account",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 754305,
            "date": "Fri 23 Dec 2022 15:48",
            "username": "Imstack",
            "content": "D - correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#131",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has microservices running in AWS Lambda that read data from Amazon DynamoDB.  The Lambda code is manually deployed by developers after successful testing. The company now needs the tests and deployments be automated and run in the cloud. Additionally, traffic to the new versions of each microservice should be incrementally shifted over time after deployment.<br><br>What solution meets all the requirements, ensuring the MOST developer velocity?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#131",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CodePipeline configuration and set up a post-commit hook to trigger the pipeline after tests have passed. Use AWS CodeDeploy and create a Canary deployment configuration that specifies the percentage of traffic and interval.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS CodeBuild configuration that triggers when the test code is pushed. Use AWS CloudFormation to trigger an AWS CodePipeline configuration that deploys the new Lambda versions and specifies the traffic shift percentage and interval.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CodePipeline configuration and set up the source code step to trigger when code is pushed. Set up the build step to use AWS CodeBuild to run the tests. Set up an AWS CodeDeploy configuration to deploy, then select the CodeDeployDefault.LambdaLinea10PercentEvery3Minutes option.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS CLI to set up a post-commit hook that uploads the code to an Amazon S3 bucket after tests have passed. Set up an S3 event trigger that runs a Lambda function that deploys the new version. Use an interval in the Lambda function to deploy the code over time at the required percentage.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 131 discussion",
        "discusstion": [
          {
            "id": 765334,
            "date": "Wed 04 Jan 2023 08:09",
            "username": "Ace987",
            "content": "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html#deployment-configuration-lambda",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 754306,
            "date": "Fri 23 Dec 2022 15:51",
            "username": "Imstack",
            "content": "C - correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#132",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer manages an application that has a cross-region failover requirement. The application stores its data in an Amazon Aurora on Amazon RDS database in the primary region with a read replica in the secondary region. The application uses Amazon Route 53 to direct customer traffic to the active region.<br>Which steps should be taken to MINIMIZE downtime if a primary database fails?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#132",
            "answers": [
              {
                "choice": "<p>A. Use Amazon CloudWatch to monitor the status of the RDS instance. In the event of a failure, use a CloudWatch Events rule to send a short message service (SMS) to the Systems Operator using Amazon SNS. Have the Systems Operator redirect traffic to an Amazon S3 static website that displays a downtime message. Promote the RDS read replica to the master. Confirm that the application is working normally, then redirect traffic from the Amazon S3 website to the secondary region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use RDS Event Notification to publish status updates to an Amazon SNS topic. Use an AWS Lambda function subscribed to the topic to monitor database health. In the event of a failure, the Lambda function promotes the read replica, then updates Route 53 to redirect traffic from the primary region to the secondary region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up an Amazon CloudWatch Events rule to periodically invoke an AWS Lambda function that checks the health of the primary database. If a failure is detected, the Lambda function promotes the read replica. Then, update Route 53 to redirect traffic from the primary to the secondary region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up Route 53 to balance traffic between both regions equally. Enable the Aurora multi-master option, then set up a Route 53 health check to analyze the health of the databases. Configure Route 53 to automatically direct all traffic to the secondary region when a primary database fails.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 132 discussion",
        "discusstion": [
          {
            "id": 23997,
            "date": "Wed 29 Sep 2021 03:49",
            "username": "CyrusChengBeastXnetwork_zealbalac",
            "content": "I choose B<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html<br>- Aurora cross region read replicaYou are right, the Aurora multi-master must be configured at the beginning and there is no option to enabled on that for existing db, so D is wrong.<br>RDS notification seems the right approach.B looks right. Multi-master aurora across regions ? Is that supported ? I thought MM aurora works only cross AZ(but may be wrong).Currently, all DB instances in a multi-master cluster must be in the same AWS Region.",
            "upvote_count": "15847",
            "selected_answers": ""
          },
          {
            "id": 24342,
            "date": "Fri 08 Oct 2021 18:32",
            "username": "BeastXnetwork_zealbalac",
            "content": "You are right, the Aurora multi-master must be configured at the beginning and there is no option to enabled on that for existing db, so D is wrong.<br>RDS notification seems the right approach.B looks right. Multi-master aurora across regions ? Is that supported ? I thought MM aurora works only cross AZ(but may be wrong).Currently, all DB instances in a multi-master cluster must be in the same AWS Region.",
            "upvote_count": "847",
            "selected_answers": ""
          },
          {
            "id": 34500,
            "date": "Sun 10 Oct 2021 03:21",
            "username": "network_zealbalac",
            "content": "B looks right. Multi-master aurora across regions ? Is that supported ? I thought MM aurora works only cross AZ(but may be wrong).Currently, all DB instances in a multi-master cluster must be in the same AWS Region.",
            "upvote_count": "47",
            "selected_answers": ""
          },
          {
            "id": 108741,
            "date": "Wed 27 Oct 2021 02:40",
            "username": "balac",
            "content": "Currently, all DB instances in a multi-master cluster must be in the same AWS Region.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 208642,
            "date": "Wed 27 Oct 2021 14:56",
            "username": "ChauPhan",
            "content": "B is fine.<br>AWS and Aurora limitations<br>The following limitations currently apply to the AWS and Aurora features that you can use with multi-master clusters:<br><br>Currently, you can have a maximum of two DB instances in a multi-master cluster.<br><br>Currently, all DB instances in a multi-master cluster must be in the same AWS Region.<br><br>You can't enable cross-Region replicas from multi-master clusters.<br><br>Multi-master clusters are available in the following AWS Regions:<br><br>US East (N. Virginia) Region<br><br>US East (Ohio) Region<br><br>US West (Oregon) Region<br><br>Asia Pacific (Mumbai) Region<br><br>Asia Pacific (Seoul) Region<br><br>Asia Pacific (Tokyo) Region<br><br>Europe (Frankfurt) Region<br><br>Europe (Ireland) Region",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 252537,
            "date": "Fri 05 Nov 2021 22:04",
            "username": "gmandala",
            "content": "B - best option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224024,
            "date": "Wed 27 Oct 2021 20:07",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 108659,
            "date": "Fri 22 Oct 2021 07:08",
            "username": "un",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 101004,
            "date": "Wed 20 Oct 2021 13:17",
            "username": "RajaDevOps",
            "content": "It is B. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html<br><br>all DB instances in a multi-master cluster must be in the same AWS Region.<br><br>You can't enable cross-Region replicas from multi-master clusters.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 63735,
            "date": "Wed 20 Oct 2021 12:26",
            "username": "Ebi",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 62255,
            "date": "Fri 15 Oct 2021 12:09",
            "username": "yassu",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 56868,
            "date": "Mon 11 Oct 2021 21:06",
            "username": "xaocho",
            "content": "It is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 22703,
            "date": "Tue 21 Sep 2021 03:29",
            "username": "BeastX",
            "content": "D makes more sense",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#133",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application on Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones.<br>After a recent application update, users are getting HTTP 502 Bad Gateway errors from the application URL. The DevOps Engineer cannot analyze the problem because Auto Scaling is terminating all EC2 instances shortly after launch for being unhealthy.<br>What steps will allow the DevOps Engineer access to one of the unhealthy instances to troubleshoot the deployed application?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#133",
            "answers": [
              {
                "choice": "<p>A. Create an image from the terminated instance and create a new instance from that image. The Application team can then log into the new instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. As soon as a new instance is created by AutoScaling, put the instance into a Standby state as this will prevent the instance from being terminated.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a lifecycle hook to your Auto Scaling group to move instances in the Terminating state to the Terminating:Wait state.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Edit the Auto Scaling group to enable termination protection as this will protect unhealthy instances from being terminated.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 133 discussion",
        "discusstion": [
          {
            "id": 113294,
            "date": "Sun 10 Oct 2021 02:43",
            "username": "inf",
            "content": "Answer B:<br>A - incorrect - can't clone a terminated instance<br>B - correct - an instance always starts healthy, until an ELB check, custom check, etc says it isn't. There is a period of time between an newly launched, \\\"InService\\\" instance, and its first health check. Seconds, minutes, depending on ASG/ELB.  While InService and Healthy, set to Standby. There's also a period of time between an instance being marked as Unhealthy, and before the ASG goes to terminate it. Set it to standby. When you click Standby and the instance is Unhealthy & InService, the Unhealthy status never changes till released from Standby<br>C - almost correct - question wants to \\\"pause\\\" a single instance, not all instances. Otherwise this also works.<br>D - incorrect - doesn't protect unhealthy instances from terminating - applies to scale-in/out events. Process Suspension would work",
            "upvote_count": "20",
            "selected_answers": ""
          },
          {
            "id": 30709,
            "date": "Wed 22 Sep 2021 11:20",
            "username": "amzngeniusjackyw",
            "content": "B: standby status is used for debug<br>https://aws.amazon.com/blogs/aws/auto-scaling-update-lifecycle-standby-detach/Let's think out of pure theory, answer B says, as soon as the instance is created, that means the instance is never go to InService status, how can we debug a instance never generate any log or data",
            "upvote_count": "114",
            "selected_answers": ""
          },
          {
            "id": 506673,
            "date": "Wed 22 Dec 2021 04:58",
            "username": "jackyw",
            "content": "Let's think out of pure theory, answer B says, as soon as the instance is created, that means the instance is never go to InService status, how can we debug a instance never generate any log or data",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 588023,
            "date": "Tue 19 Apr 2022 09:17",
            "username": "TrainingTraining",
            "content": "Should be C.  In auto-scaling how does one diffentiate the problematic or one instance that is being referred to here? All use the same image thus all will be launched with the same configuration. If one is having problem, the other instances would probably have the same issue.The question just says how the engineer can gain the access to one of the sick instances. It does not mean the other 2 instances are healthy. The auto-scaling will terminate all and new instances are launched at the same time if the health checks are not okay.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 588025,
            "date": "Tue 19 Apr 2022 09:21",
            "username": "Training",
            "content": "The question just says how the engineer can gain the access to one of the sick instances. It does not mean the other 2 instances are healthy. The auto-scaling will terminate all and new instances are launched at the same time if the health checks are not okay.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 544080,
            "date": "Wed 09 Feb 2022 21:27",
            "username": "blueorca",
            "content": "B looks to be the best answer. C will put all instances to terminating:wait state. Plus lifecycle hooks have timeout too.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 539566,
            "date": "Thu 03 Feb 2022 09:42",
            "username": "bobsmith2000",
            "content": "I'll go for C<br>B says \\\"As soon as a NEW instance is created\\\", but we just wait until health check falls and only then pause termination! There's no point to put a new instances in the standby mode immediately.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 413070,
            "date": "Tue 02 Nov 2021 19:56",
            "username": "Tampines",
            "content": "Should be C if need to troubleshoot, because it is after the issue happened. B may not catch the error, it may not happen yet",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 401508,
            "date": "Tue 02 Nov 2021 03:33",
            "username": "AwsSuperTrooper",
            "content": "Answer C. <br><br>My Amazon Elastic Compute Cloud (Amazon EC2) instance was marked as unhealthy and moved to the \\\"Auto Scaling Terminating\\\" state. Then, my Amazon EC2 instance terminated before I could determine the cause of the problem. How can I troubleshoot this?<br><br>Add a lifecycle hook to your AWS Auto Scaling group to move instances in the Terminating state to the Terminating:Wait state. In this state, you can access instances before they're terminated, and then troubleshoot why they were marked as unhealthy.<br>By default, an instance remains in the Terminating:Wait state for 3600 seconds (1 hour).<br><br>See https://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-delay-termination/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 379942,
            "date": "Mon 01 Nov 2021 23:54",
            "username": "kdpeiris",
            "content": "B<br>https://aws.amazon.com/blogs/aws/auto-scaling-update-lifecycle-standby-detach/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 307209,
            "date": "Sun 31 Oct 2021 05:33",
            "username": "rscloud",
            "content": "I=E2=80=99ll go with B<br>Standby state to troubleshoot",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 276680,
            "date": "Tue 26 Oct 2021 14:24",
            "username": "areke",
            "content": "C is the appropriate answer. Lifecycle hooks should be use to put the terminating instance in standby mode so that the instance and its logs can be further investigated.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 252588,
            "date": "Tue 26 Oct 2021 14:21",
            "username": "gmandala",
            "content": "C.  Thanks to the links, I now know the max timeout is 48 hrs!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 234401,
            "date": "Mon 25 Oct 2021 17:20",
            "username": "svjl",
            "content": "c: https://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-delay-termination/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 224087,
            "date": "Sun 24 Oct 2021 17:18",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 221244,
            "date": "Sun 24 Oct 2021 11:11",
            "username": "xlFireman",
            "content": "The question CLEARLY states \\\"What steps will allow the DevOps Engineer access to one of the unhealthy instances to troubleshoot the deployed application?\\\"<br><br>ONE APPLICATION: Therefore B is the correct answer. Anyone who picks C needs to re-read the question",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 219317,
            "date": "Mon 18 Oct 2021 12:15",
            "username": "pek",
            "content": "Health status of an instance in a standby state<br><br>Amazon EC2 Auto Scaling does not perform health checks on instances that are in a standby state. While the instance is in a standby state, its health status reflects the status that it had before you put it on standby. Amazon EC2 Auto Scaling does not perform a health check on the instance until you put it back in service.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 208658,
            "date": "Sun 17 Oct 2021 11:21",
            "username": "ChauPhan",
            "content": "I'll go with B.  C is also right. But I think put them in Terminate:Wait during handling traffic is not proper way. It will affect to running service because the clients will get error during our troubleshooting.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 198943,
            "date": "Tue 12 Oct 2021 20:33",
            "username": "kj07",
            "content": "Answer: C<br>From a DevOps standpoint looks like a better approach to use lifecycle hooks. Even if you have only 60 min you can snapshot the instance and troubleshoot later.<br>You can also receive a notification when an instance enters in terminating state.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#134",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a web and mobile application that uses a serverless architecture powered by AWS Lambda and Amazon API Gateway. The company wants to fully automate the backend Lambda deployment based on code that is pushed to the appropriate environment branch in an AWS CodeCommit repository.<br><br>The deployment must have the following:<br>- Separate environment pipelines for testing and production<br>- Automatic deployment that occurs for test environments only<br><br>Which steps should be taken to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#134",
            "answers": [
              {
                "choice": "<p>A. Configure a new AWS CodePipeline service. Create a CodeCommit repository for each environment. Set up CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create a CodeCommit repository for each environment. Set up each CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Set up each CodePipeline to retrieve the source code from the appropriate branch in the repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS CodeBuild configuration for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Push the Lambda function code to an Amazon S3 bucket. Set up the deployment step to deploy the Lambda functions from the S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 134 discussion",
        "discusstion": [
          {
            "id": 754313,
            "date": "Fri 23 Dec 2022 16:03",
            "username": "Imstack",
            "content": "c correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 754139,
            "date": "Fri 23 Dec 2022 11:54",
            "username": "SuriSagar",
            "content": "The answer is C.  Two codepipelines two branches and manual approval step for production and automated deployment for test.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#135",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a guideline that every Amazon EC2 instance must be launched from an AMI that the company's security team produces. Every month, the security team sends an email message with the latest approved AMIs to all the development teams.<br><br>The development teams use AWS CloudFormation to deploy their applications. When developers launch a new service, they have to search their email for the latest AMIs that the security department sent. A DevOps engineer wants to automate the process that the security team uses to provide the AMI IDs to the development teams.<br><br>What is the MOST scalable solution that meets these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#135",
            "answers": [
              {
                "choice": "<p>A. Direct the security team to use CloudFormation to create new versions of the AMIs and to list the AMI ARNs in an encrypted Amazon S3 object as part of the stack's Outputs section. Instruct the developers to use a cross-stack reference to load the encrypted S3 object and obtain the most recent AMI ARNs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Direct the security team to use a CloudFormation stack to create an AWS CodePipeline pipeline that builds new AMIs and places the latest AMI ARNs in an encrypted Amazon S3 object as part of the pipeline output. Instruct the developers to use a cross-stack reference within their own CloudFormation template to obtain the S3 object location and the most recent AMI ARNs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Direct the security team to use Amazon EC2 Image Builder to create new AMIs and to place the AMI ARNs as parameters in AWS Systems Manager Parameter Store. Instruct the developers to specify a parameter of type SSM in their CloudFormation stack to obtain the most recent AMI ARNs from Parameter Store.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Direct the security team to use Amazon EC2 Image Builder to create new AMIs and to create an Amazon Simple Notification Service (Amazon SNS) topic so that every development team can receive notifications. When the development teams receive a notification, instruct them to write an AWS Lambda function that will update their CloudFormation stack with the most recent AMI ARNs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 135 discussion",
        "discusstion": [
          {
            "id": 760089,
            "date": "Wed 28 Dec 2022 17:33",
            "username": "saggy4",
            "content": "D is wrong as it has too many manual steps and hassles<br>C is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 754316,
            "date": "Fri 23 Dec 2022 16:06",
            "username": "Imstack",
            "content": "c is the answer",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 754147,
            "date": "Fri 23 Dec 2022 12:27",
            "username": "SuriSagar",
            "content": "In the question \\\"When developer launches a new service\\\" A parameter store can be used to dynamically get new AMI ID's<br>Answer is C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#136",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is setting up a container-based architecture. The engineer has decided to use AWS CloudFormation to automatically provision an Amazon ECS cluster and an Amazon EC2 Auto Scaling group to launch the EC2 container instances. After successfully creating the CloudFormation stack, the engineer noticed that, even though the ECS cluster and the EC2 instances were created successfully and the stack finished the creation, the EC2 instances were associating with a different cluster.<br><br>How should the DevOps engineer update the CloudFormation template to resolve this issue?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#136",
            "answers": [
              {
                "choice": "<p>A. Reference the EC2 instances in the AWS::ECS::Cluster resource and reference the ECS cluster in the AWS::ECS::Service resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Reference the ECS cluster in the AWS::AutoScaling::LaunchConfiguration resource of the UserData property.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reference the ECS cluster in the AWS::EC2::Instance resource of the UserData property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Reference the ECS cluster in the AWS::CloudFormation::CustomResource resource to trigger an AWS Lambda function that registers the EC2 instances with the appropriate ECS cluster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 136 discussion",
        "discusstion": [
          {
            "id": 754319,
            "date": "Fri 23 Dec 2022 16:09",
            "username": "Imstack",
            "content": "BBBBBBBB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 754154,
            "date": "Fri 23 Dec 2022 12:37",
            "username": "SuriSagar",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#137",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A web application has been deployed using an AWS Elastic Beanstalk application. The Application Developers are concerned that they are seeing high latency in two different areas of the application:<br>-HTTP client requests to a third-party API<br>-MySQL client library queries to an Amazon RDS database<br>A DevOps Engineer must gather trace data to diagnose the issues.<br>Which steps will gather the trace information with the LEAST amount of changes and performance impacts to the application?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#137",
            "answers": [
              {
                "choice": "<p>A. Add additional logging to the application code. Use the Amazon CloudWatch agent to stream the application logs into Amazon Elasticsearch Service. Query the log data in Amazon ES.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Instrument the application to use the AWS X-Ray SDK. Post trace data to an Amazon Elasticsearch Service cluster. Query the trace data for calls to the HTTP client and the MySQL client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. On the AWS Elastic Beanstalk management page for the application, enable the AWS X-Ray daemon. View the trace data in the X-Ray console.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Instrument the application using the AWS X-Ray SDK. On the AWS Elastic Beanstalk management page for the application, enable the X-Ray daemon. View the trace data in the X-Ray console.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 137 discussion",
        "discusstion": [
          {
            "id": 224188,
            "date": "Fri 05 Nov 2021 13:19",
            "username": "jackdryan",
            "content": "I'll go with D",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 87205,
            "date": "Mon 27 Sep 2021 22:26",
            "username": "RaphaelMlungwana",
            "content": "Answer is C<br><br>To enable the X-Ray daemon in the Elastic Beanstalk console<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-beanstalk.html<br><br>Other Options involve updating the application code.",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 322338,
            "date": "Sun 07 Nov 2021 17:42",
            "username": "aws_Tamilan",
            "content": "ans is c",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 284506,
            "date": "Sun 07 Nov 2021 16:36",
            "username": "jyrajan",
            "content": "D.  C is only part of the answer.<br>https://docs.aws.amazon.com/xray/latest/devguide/xray-usage.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 279997,
            "date": "Sat 06 Nov 2021 09:46",
            "username": "bnagaraja9099",
            "content": "C.  No need to instrument the app. Just changing the properties and HTTP factory classes can track HTTP and SQL<br>https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-postgresql.html<br>https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-httpclient.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 218715,
            "date": "Wed 03 Nov 2021 20:41",
            "username": "xlFireman",
            "content": "As Koniec stated, I am going with D.  You need the full steps to instrument the X-Ray application. C is a gotcha choice if you are unfamiliar with the required steps.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209102,
            "date": "Sat 30 Oct 2021 07:48",
            "username": "ChauPhanChauPhan",
            "content": "Go with DX-Ray provides an SDK that you can use to instrument your application code, and a daemon application that relays debugging information from the SDK to the X-Ray API.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 209104,
            "date": "Sun 31 Oct 2021 03:19",
            "username": "ChauPhan",
            "content": "X-Ray provides an SDK that you can use to instrument your application code, and a daemon application that relays debugging information from the SDK to the X-Ray API.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 189792,
            "date": "Sat 23 Oct 2021 16:46",
            "username": "denmaddog",
            "content": "D is correct as even if you enable X-Ray daemon via EB you still have to instrument your application to use it.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 162621,
            "date": "Tue 19 Oct 2021 19:36",
            "username": "SONLE",
            "content": "C and D are good. But the question is\\\" he LEAST amount of changes and performance impacts to the application?\\\" . So C is the best answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 135962,
            "date": "Sun 17 Oct 2021 03:06",
            "username": "dex007",
            "content": "This is a tricky question but I think that C is correct:<br>https://aws.amazon.com/xray/faqs/<br>Q: What code changes do I need to make to my application to use X-Ray?<br>If you=E2=80=99re using Elastic Beanstalk, you will need to include the language-specific X-Ray libraries in your application code. For applications running on other AWS services, such as EC2 or ECS, you will need to install the X-Ray agent and instrument your application code.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 122985,
            "date": "Thu 07 Oct 2021 00:54",
            "username": "tolik505",
            "content": "D is correct. See @koniec answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 108894,
            "date": "Wed 06 Oct 2021 10:23",
            "username": "un",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 106974,
            "date": "Tue 05 Oct 2021 08:40",
            "username": "koniec",
            "content": "D is correct - you have to instrument app with SDK<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-debugging.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 95312,
            "date": "Mon 04 Oct 2021 13:48",
            "username": "chicagomassageseeker",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 92927,
            "date": "Fri 01 Oct 2021 21:56",
            "username": "carzysj",
            "content": "D is the correct answer. You have to instrument the code with X-RAY SDK",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 91423,
            "date": "Wed 29 Sep 2021 21:30",
            "username": "zzzthibaut",
            "content": "C is the answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 85397,
            "date": "Thu 23 Sep 2021 16:50",
            "username": "leotorasJaxjdJaxjd",
            "content": "C is correct.<br>To enable the X-Ray daemon in the Elastic Beanstalk console<br>Open the Elastic Beanstalk console.<br>Navigate to the management console for your environment.<br>Choose Configuration.<br>Choose Software Settings.<br>For X-Ray daemon, choose Enabled.<br>Choose Apply.Here you have mentioned about enabling steps for xray, but not talking about SDK.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-debugging.html<br><br>Option D is correct!Also, to enable degug and pass the logs to Xray, you need SDK..",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 509670,
            "date": "Sun 26 Dec 2021 16:27",
            "username": "JaxjdJaxjd",
            "content": "Here you have mentioned about enabling steps for xray, but not talking about SDK.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-debugging.html<br><br>Option D is correct!Also, to enable degug and pass the logs to Xray, you need SDK..",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 509672,
            "date": "Sun 26 Dec 2021 16:29",
            "username": "Jaxjd",
            "content": "Also, to enable degug and pass the logs to Xray, you need SDK..",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#138",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that uses electronic health records is running a fleet of Amazon EC2 instances with an Amazon Linux operating system. As part of patient privacy requirements, the company must ensure continuous compliance for patches for operating system and applications running on the EC2 instances.<br><br>How can the deployments of the operating system and application patches be automated using a default and custom repository?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#138",
            "answers": [
              {
                "choice": "<p>A. Use AWS Systems Manager to create a new patch baseline including the custom repository. Run the AWS-RunPatchBaseline document using the run command to verify and install patches.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Direct Connect to integrate the corporate repository and deploy the patches using Amazon CloudWatch scheduled events, then use the CloudWatch dashboard to create reports.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use yum-config-manager to add the custom repository under /etc/yum.repos.d and run yum-config-manager-enable to activate the repository.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Systems Manager to create a new patch baseline including the corporate repository. Run the AWS-AmazonLinuxDefaultPatchBaseline document using the run command to verify and install patches.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 138 discussion",
        "discusstion": [
          {
            "id": 760478,
            "date": "Thu 29 Dec 2022 02:13",
            "username": "strike3test",
            "content": "A is the correct answer<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 760107,
            "date": "Wed 28 Dec 2022 17:48",
            "username": "saggy4",
            "content": "A is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 755856,
            "date": "Sun 25 Dec 2022 18:19",
            "username": "ericzaj",
            "content": "A looks correct.<br>You can use the document AWS-RunPatchBaseline to apply patches for both operating systems and applications. Taken from: https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 754324,
            "date": "Fri 23 Dec 2022 16:13",
            "username": "Imstack",
            "content": "DDDDDDDD",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#139",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Security team requires all Amazon EBS volumes that are attached to an Amazon EC2 instance to have AWS Key Management Service (AWS KMS) encryption enabled. If encryption is not enabled, the company's policy requires the EBS volume to be detached and deleted. A DevOps Engineer must automate the detection and deletion of unencrypted EBS volumes.<br>Which method should the Engineer use to accomplish this with the LEAST operational effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#139",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Events rule that invokes an AWS Lambda function when an EBS volume is created. The Lambda function checks the EBS volume for encryption. If encryption is not enabled and the volume is attached to an instance, the function deletes the volume.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function to describe all EBS volumes in the region and identify volumes that are attached to an EC2 instance without encryption enabled. The function then deletes all non-compliant volumes. The AWS Lambda function is invoked every 5 minutes by an Amazon CloudWatch Events scheduled rule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a rule in AWS Config to check for unencrypted and attached EBS volumes. Subscribe an AWS Lambda function to the Amazon SNS topic that AWS Config sends change notifications to. The Lambda function checks the change notification and deletes any EBS volumes that are non-compliant.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch an EC2 instance with an IAM role that has permissions to describe and delete volumes. Run a script on the EC2 instance every 5 minutes to describe all EBS volumes in all regions and identify volumes that are attached without encryption enabled. The script then deletes those volumes.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 139 discussion",
        "discusstion": [
          {
            "id": 102687,
            "date": "Thu 30 Sep 2021 15:32",
            "username": "madhuz",
            "content": "C AWS Config ->DashBoard->ConfigRules->AddRules->ec2-ebs-encryption-by-default->Remediation action->Publish SNS Notification<br>Lambda->CreateFunction>Designer->AddTrigger->SNS",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 67278,
            "date": "Thu 23 Sep 2021 20:36",
            "username": "yagoto729",
            "content": "Answer: C<br>Check encryption with encrypted-volumes. Read the Lambda function of the rule as a trigger for the Config rule.<br><br>https://docs.aws.amazon.com/ja_jp/config/latest/developerguide/encrypted-volumes.html<br>https://docs.aws.amazon.com/ja_jp/config/latest/developerguide/evaluate-config_develop-rules_examples.html",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 702206,
            "date": "Sun 23 Oct 2022 15:33",
            "username": "RightAnswers",
            "content": "The AWS Config rule \\\"encrypted-volumes\\\"checks if the EBS volumes that are in an attached state are encrypted. If you specify the ID of a KMS key for encryption using the kmsId parameter, the rule checks if the EBS volumes in an attached state are encrypted with that KMS key.<br>The lambda function is to check the SNS notification and delete the volume.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 323552,
            "date": "Wed 03 Nov 2021 10:24",
            "username": "escoriza",
            "content": "C only triggers on configuration changes. what about existing unecrypted volumnes that are already attached to an instance? sure C would delete any previously attached unencrypted volume upon configuration change, but what if no config change is ever made?<br>I find B could fit both scenarios",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224191,
            "date": "Sun 31 Oct 2021 09:15",
            "username": "jackdryan",
            "content": "I'll go with C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 218721,
            "date": "Thu 21 Oct 2021 21:00",
            "username": "xlFireman",
            "content": "C is the correct choice here. Most elegant and simple solution that is automated. Key here is compliance of your configuration, which is the main purpose of AWS Config.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209124,
            "date": "Sat 09 Oct 2021 07:59",
            "username": "ChauPhan",
            "content": "Go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 108962,
            "date": "Wed 06 Oct 2021 04:44",
            "username": "EricZhangDgixChauPhan",
            "content": "Why not A? Invoking lambda directly by CW event which means less operational effort?Because A triggers on CREATING an EBS volume.C triggers on unencrypted and ATTACHED EBS volumes.For A \\\"If encryption is not enabled and the volume is attached to an instance, the function deletes the volume.\\\" It seems not correct.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 207569,
            "date": "Sat 09 Oct 2021 03:09",
            "username": "DgixChauPhan",
            "content": "Because A triggers on CREATING an EBS volume.C triggers on unencrypted and ATTACHED EBS volumes.For A \\\"If encryption is not enabled and the volume is attached to an instance, the function deletes the volume.\\\" It seems not correct.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 209126,
            "date": "Sat 16 Oct 2021 23:31",
            "username": "ChauPhan",
            "content": "For A \\\"If encryption is not enabled and the volume is attached to an instance, the function deletes the volume.\\\" It seems not correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 91427,
            "date": "Sun 26 Sep 2021 13:34",
            "username": "zzzthibaut",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 85399,
            "date": "Sun 26 Sep 2021 03:52",
            "username": "leotoras",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#140",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to implement a CI/CD pipeline for building and testing its mobile apps. A DevOps Engineer has been given the following requirements:<br>-Use AWS CodePipeline to orchestrate the workflow.<br>-Test the application on real devices.<br>-Trigger a notification.<br>-Stage the application binary on a production bucket in a different account.<br>-Make the application binary publicly accessible.<br>Which sequence of actions should the Engineer perform in the pipeline to meet the requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#140",
            "answers": [
              {
                "choice": "<p>A. Use AWS CodeCommit as the code source and AWS CodeDeploy to compile and package the application. Use CodeDeploy to deploy the application binary to an AWS Lambda function for testing. Use a third-party library on AWS Lambda to simulate the device platform. Allow a Lambda role to upload to the production Amazon S3 bucket. Make the binary publicly accessible. Trigger notifications using Amazon SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use GitHub as the code source and AWS Lambda to compile and package the application. Use another Lambda function to run unit tests and deliver the application binary to a development bucket. Use the binary from the development bucket and install the application on a personal device for testing. Deliver the binary to the production bucket after approval. Trigger notifications using Amazon SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon S3 bucket as the code source and AWS CodeBuild to compile and package the application. Use AWS CodeDeploy to deploy the application binary to a device farm for testing. Deliver the binary to the production S3 bucket. Use an S3 bucket policy to allow public read on the production S3 bucket. Trigger notifications using an Amazon CloudWatch Events rule with Amazon SNS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeCommit as the code source and AWS CodeBuild to compile and package the application. Invoke an AWS Lambda function that uploads the application binary to a device farm for testing. Deliver the binary to the production Amazon S3 bucket. Use an S3 bucket policy to allow public read on the production S3 bucket. Trigger notifications by using an Amazon CloudWatch Events rule.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 140 discussion",
        "discusstion": [
          {
            "id": 224193,
            "date": "Tue 26 Oct 2021 17:44",
            "username": "jackdryan",
            "content": "I'll go with D",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 543396,
            "date": "Wed 09 Feb 2022 00:20",
            "username": "blueorca",
            "content": "I choose D.  Altho CodeDeploy can integrate with Device Farm, I don't think you need to send app binary to it?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 209134,
            "date": "Wed 13 Oct 2021 20:50",
            "username": "ChauPhan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 113666,
            "date": "Wed 13 Oct 2021 03:34",
            "username": "chauducjustfmmfriendofpenguin",
            "content": "A -> CodeDeploy is not used for compile<br>B -> Using lambda for compiling is too complex<br>C -> Codedeploy can not deploy to device farm<br>D is correcthttps://aws.amazon.com/blogs/devops/integrating-aws-device-farm-with-ci-cd-pipeline-to-run-cross-browser-selenium-tests/then C is correct!",
            "upvote_count": "412",
            "selected_answers": ""
          },
          {
            "id": 463891,
            "date": "Tue 02 Nov 2021 21:30",
            "username": "justfmmfriendofpenguin",
            "content": "https://aws.amazon.com/blogs/devops/integrating-aws-device-farm-with-ci-cd-pipeline-to-run-cross-browser-selenium-tests/then C is correct!",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 583105,
            "date": "Sat 09 Apr 2022 03:47",
            "username": "friendofpenguin",
            "content": "then C is correct!",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 113291,
            "date": "Sun 10 Oct 2021 23:59",
            "username": "un",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 91430,
            "date": "Sun 26 Sep 2021 17:16",
            "username": "zzzthibaut",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 85400,
            "date": "Wed 22 Sep 2021 23:12",
            "username": "leotoras",
            "content": "D is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 82768,
            "date": "Mon 20 Sep 2021 10:53",
            "username": "solotvun",
            "content": "D is the one",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#141",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is reviewing a system that uses Amazon EC2 instances in an Auto Scaling group. This system uses a configuration management tool that runs locally on each EC2 instance. Because of the volatility of the application load, new instances must be fully functional within 3 minutes of entering a running state. Current setup tasks include:<br>-Installing the configuration management agent `\" 2 minutes<br>-Installing the application framework `\" 15 minutes<br>-Copying configuration data from Amazon S3 `\" 2 minutes<br>-Running the configuration management agent to configure instances `\" 1 minute<br>-Deploying the application code from Amazon S3 `\" 2 minutes<br>How should the Engineer set up the system so it meets the launch time requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#141",
            "answers": [
              {
                "choice": "<p>A. Trigger an AWS Lambda function from an Amazon CloudWatch Events rule when a new EC2 instance launches. Have the function install the configuration management agent and the application framework, pull configuration data from Amazon S3, run the agent to configure the instance, and deploy the application from S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write a bootstrap script to install the configuration management agent, install the application framework, pull configuration data from Amazon S3, run the agent to configure the instance, and deploy the application from S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Build a custom AMI that includes the configuration management agent and application framework. Write a bootstrap script to pull configuration data from Amazon S3, run the agent to configure the instance, and deploy the application from S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Build a custom AMI that includes the configuration management agent, application framework, and configuration data. Write a bootstrap script to run the agent to configure the instance and deploy the application from Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 141 discussion",
        "discusstion": [
          {
            "id": 336610,
            "date": "Tue 21 Sep 2021 14:03",
            "username": "rnc21",
            "content": "answer D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 636111,
            "date": "Sun 24 Jul 2022 17:52",
            "username": "MachanNoob",
            "content": "Reveal answer says B.  But the correct answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 546658,
            "date": "Sun 13 Feb 2022 20:13",
            "username": "blueorca",
            "content": "D is only one met the requirement",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 501253,
            "date": "Tue 14 Dec 2021 10:14",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 446347,
            "date": "Tue 02 Nov 2021 00:12",
            "username": "shammous",
            "content": "D takes exactly 3 minutes.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 421848,
            "date": "Wed 27 Oct 2021 07:10",
            "username": "amehim",
            "content": "D for me Not C because the 4th and 5th steps will not happen at launch time. These steps happen after the instance started running which is within the 3 minutes in the requirement.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 386605,
            "date": "Wed 20 Oct 2021 12:25",
            "username": "D2",
            "content": "Answer D without doubt",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 374010,
            "date": "Mon 11 Oct 2021 20:43",
            "username": "RLai",
            "content": "should be C as it requires getting configuration data from S3",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 368409,
            "date": "Tue 05 Oct 2021 13:43",
            "username": "okida",
            "content": "I'll go to D.  Only D has the total time meets the requirement (3 minutes).",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 356984,
            "date": "Thu 30 Sep 2021 04:00",
            "username": "idforadf",
            "content": "Answer should be D, because two actions (4th and 5th) performed after launching the instance takes 3 minutes exactly.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 356055,
            "date": "Thu 30 Sep 2021 03:36",
            "username": "awsqueen",
            "content": "Absolutely D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 351266,
            "date": "Sun 26 Sep 2021 12:15",
            "username": "tahacanatak",
            "content": "\\\"\\\" what is this sign",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 350671,
            "date": "Thu 23 Sep 2021 13:28",
            "username": "tarq",
            "content": "D seems to be only one to meet <3 min requirement",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 335237,
            "date": "Mon 20 Sep 2021 06:35",
            "username": "wristyquill",
            "content": "It should be C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#142",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The resources for a business-critical, three-tier web application are expressed in a series of AWS CloudFormation templates. The application is using Amazon<br>RDS for data and Amazon ElastiCache for session state. Users have reported degraded performance in the application. A DevOps Engineer notices that the T2 instance type is being used for the application tier and CPU usage is at 100% in Amazon CloudWatch.<br>What process should the Engineer follow to restore operations with the LEAST amount of disruption to the end users?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#142",
            "answers": [
              {
                "choice": "<p>A. Write a new CloudFormation template to include Amazon CloudFront in the environment, launch the stack, and update the Amazon Route 53 A record<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch a new CloudFormation stack for the application tier using the M4 instance type, run acceptance tests against the new stack, and update the Amazon Route 53 A record<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the CloudFormation stack for the application tier using the T2 Unlimited option, run acceptance tests against the new stack, and update the Amazon Route 53 A record<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch a new CloudFormation stack for all tiers of the application in a different region, run acceptance tests against the new stack, and update the Amazon Route 53 A record<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 142 discussion",
        "discusstion": [
          {
            "id": 309290,
            "date": "Wed 22 Sep 2021 11:58",
            "username": "GreenTick",
            "content": "B, blue/green deployment to avoid business disruption, more powerful EC2 instance type defined.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 639371,
            "date": "Fri 29 Jul 2022 21:13",
            "username": "GCPWizard",
            "content": "Ans: B<br>A new CloudFormation stack is needed and then update Route 53 DNS record to avoid business disruption.<br>C: Updating the CloudFormation stack in this scenario will cause downtime and not the right solution.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 616769,
            "date": "Wed 15 Jun 2022 15:07",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 401519,
            "date": "Sun 07 Nov 2021 11:22",
            "username": "AwsSuperTrooper",
            "content": "Answer B. <br>T2 Unlimited is for burst capacity / limited time only.<br><br>Today we are extending the burst model that we pioneered with the T2, giving you the ability to sustain high CPU performance over any desired time frame while still keeping your costs as low as possible.<br>See: https://aws.amazon.com/blogs/aws/new-t2-unlimited-going-beyond-the-burst-with-high-performance/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 396423,
            "date": "Wed 27 Oct 2021 00:22",
            "username": "NNHAN",
            "content": "C is correct. With the least disruption to the end user.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 374761,
            "date": "Fri 22 Oct 2021 00:44",
            "username": "OAS1",
            "content": "Won't option C cause disruption? B should help.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342290,
            "date": "Wed 20 Oct 2021 16:18",
            "username": "RLaiMBJames",
            "content": "Ans should be B.  T2 unlimited is to borrow the whole day cpu credits and it is not really unlimited. So C is not the best one.Agreed. If the problem is that cpu is at 100% with T2, it's time to upgrade the instance size. T2 unlimited will prevent credit exhaustion for some time, but it won't solve the problem that CPU is already maxed out at 100%.<br>I'll go with B. ",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 401245,
            "date": "Sun 31 Oct 2021 21:41",
            "username": "MBJames",
            "content": "Agreed. If the problem is that cpu is at 100% with T2, it's time to upgrade the instance size. T2 unlimited will prevent credit exhaustion for some time, but it won't solve the problem that CPU is already maxed out at 100%.<br>I'll go with B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 324171,
            "date": "Sat 16 Oct 2021 09:35",
            "username": "SK_AWS",
            "content": "B. <br>Could have been C had all it been doing was to enable T2 Unlimited on the existing instance rather than spinning up a new one which causes the unwanted disruption...",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 322556,
            "date": "Mon 11 Oct 2021 12:25",
            "username": "BKhan",
            "content": "Answer is C<br>https://aws.amazon.com/blogs/aws/new-t2-unlimited-going-beyond-the-burst-with-high-performance/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 313280,
            "date": "Sat 25 Sep 2021 02:49",
            "username": "rscloud",
            "content": "C<br>T2 unlimited option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 309928,
            "date": "Thu 23 Sep 2021 12:17",
            "username": "Rajarshi",
            "content": "ans should be C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#144",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A mobile application running on eight Amazon EC2 instances is relying on a third-party API endpoint. The third-party service has a high failure rate because of limited capacity, which is expected to be resolved in a few weeks.<br>In the meantime, the mobile application developers have added a retry mechanism and are logging failed API requests. A DevOps Engineer must automate the monitoring of application logs and count the specific error messages; if there are more than 10 errors within a 1-minute window, the system must issue an alert.<br>How can the requirements be met with MINIMAL management overhead?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#144",
            "answers": [
              {
                "choice": "<p>A. Install the Amazon CloudWatch Logs agent on all instances to push the application logs to CloudWatch Logs. Use metric filters to count the error messages every minute, and trigger a CloudWatch alarm if the count exceeds 10 errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install the Amazon CloudWatch Logs agent on all instances to push the access logs to CloudWatch Logs. Create a CloudWatch Events rule to count the error messages every minute, and trigger a CloudWatch alarm if the count exceeds 10 errors.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install the Amazon CloudWatch Logs agent on all instances to push the application logs to CloudWatch Logs. Use a metric filter to generate a custom CloudWatch metric that records the number of failures and triggers a CloudWatch alarm if the custom metric reaches 10 errors in a 1-minute period.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy a custom script on all instances to check application logs regularly in a cron job. Count the number of error messages every minute, and push a data point to a custom. CloudWatch metric. Trigger a CloudWatch alarm if the custom metric reaches 10 errors in a 1-minute period.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 144 discussion",
        "discusstion": [
          {
            "id": 97461,
            "date": "Tue 28 Sep 2021 20:38",
            "username": "cybe001",
            "content": "Answer is A.  If you want to calculate the metric in EC2 and send it to Cloudwatch then you can use custom metric. For this to work you need to use AWS CLI in EC2 to setup.In this case we just need the metric to calculate the error rate and trigger the alarm",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 374774,
            "date": "Fri 05 Nov 2021 17:08",
            "username": "OAS1GreatFunana",
            "content": "A is wrong. You have to create a metric to trigger an alarm. So, the order of events would be cloudwatch logs metric filter=E2=80=93 Cloudwatch metric - cloudwatch alarm.<br>Answer is C. This legit. Alerts run on metrics.",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 510059,
            "date": "Mon 27 Dec 2021 07:22",
            "username": "GreatFunana",
            "content": "This legit. Alerts run on metrics.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 703810,
            "date": "Tue 25 Oct 2022 13:36",
            "username": "RightAnswers",
            "content": "Ans C<br>In A, the metric filter can count, but can't define a period.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 545786,
            "date": "Sat 12 Feb 2022 12:34",
            "username": "blueorca",
            "content": "C is correct, you can count with metric filter alright, but you need to create a custom metric from it to be able to fire alarms, which also gives you the ability to define data point and evaluation period.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 368433,
            "date": "Tue 02 Nov 2021 20:44",
            "username": "okida",
            "content": "I'll go to C because of \\\"if there are more than 10 errors within a 1-minute window, the system must issue an alert\\\". Opition A just count 10 errors and not define in period 1 minute.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 356989,
            "date": "Tue 02 Nov 2021 18:30",
            "username": "idforadf",
            "content": "This phrase '10 errors in a 1-minute period' is part of only C and D options. So A and B are ruled out.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 322349,
            "date": "Tue 02 Nov 2021 15:01",
            "username": "aws_Tamilan",
            "content": "Ans C : install the Amazon CloudWatch Logs agent on all instances to push the application logs to CloudWatchLogs. Use a metric filter to generate a custom CloudWatch metric that records the number of failures and triggers a CloudWatch alarm if the custom metric reaches 10 errors in a 1-minute period.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 308766,
            "date": "Thu 28 Oct 2021 12:41",
            "username": "Jordanro",
            "content": "Creating metric filter we also assign a metric - this is a part of creation metric filter.<br>C is correct comparing to A, because<br>1) in A during creating metric filter we are not able to define period in minutes<br>Example for creating metric filter: https://aws.amazon.com/blogs/security/how-to-monitor-and-visualize-failed-ssh-access-attempts-to-amazon-ec2-linux-instances/<br>2) in C we define Threshold and Period in minutes for CloudWatch alarm - 10 errors in a 1-minute period.<br>Example for creating Alarm:<br>https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 280238,
            "date": "Mon 18 Oct 2021 13:57",
            "username": "[Removed]",
            "content": "You can use metric filters to count events. A would work, C is nonsense.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CountingLogEventsExample.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 280030,
            "date": "Mon 18 Oct 2021 04:24",
            "username": "bnagaraja9099",
            "content": "C.  Metric filters need to be changed to Cloud watch metrics to trigger alarms",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 227090,
            "date": "Sat 16 Oct 2021 18:25",
            "username": "jonsun",
            "content": "the different betwee A and C is whether the metric filter will generate a new metrics? the answer is yes, so go with C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224197,
            "date": "Sun 10 Oct 2021 14:16",
            "username": "jackdryan",
            "content": "I'll go with A",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 209367,
            "date": "Sat 09 Oct 2021 20:22",
            "username": "ChauPhan",
            "content": "Go with A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 189841,
            "date": "Sat 02 Oct 2021 16:32",
            "username": "denmaddog",
            "content": "metric filter cannot count you need CF Alarm to do that",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 85403,
            "date": "Tue 28 Sep 2021 08:35",
            "username": "leotoras",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 83661,
            "date": "Tue 21 Sep 2021 08:21",
            "username": "solotvun",
            "content": "Answer is C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#146",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses Amazon S3 to store proprietary information. The Development team creates buckets for new projects on a daily basis. The Security team wants to ensure that all existing and future buckets have encryption, logging, and versioning enabled. Additionally, no buckets should ever be publicly read or write accessible.<br>What should a DevOps Engineer do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#146",
            "answers": [
              {
                "choice": "<p>A. Enable AWS CloudTrail and configure automatic remediation using AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable AWS Config rules and configure automatic remediation using AWS Systems Manager documents.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable AWS Trusted Advisor and configure automatic remediation using Amazon CloudWatch Events.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable AWS Systems Manager and configure automatic remediation using Systems Manager documents.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 146 discussion",
        "discusstion": [
          {
            "id": 155288,
            "date": "Fri 01 Oct 2021 23:48",
            "username": "jxp09Smart",
            "content": "B<br><br>https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/<br>https://aws.amazon.com/blogs/aws/aws-config-rules-dynamic-compliance-checking-for-cloud-resources/s3-bucket-server-side-encryption-enabled<br>s3-bucket-versioning-enabled<br>s3-bucket-logging-enabled<br>s3-bucket-public-read-prohibited<br>s3-bucket-public-write-prohibited",
            "upvote_count": "102",
            "selected_answers": ""
          },
          {
            "id": 158201,
            "date": "Thu 14 Oct 2021 01:17",
            "username": "Smart",
            "content": "s3-bucket-server-side-encryption-enabled<br>s3-bucket-versioning-enabled<br>s3-bucket-logging-enabled<br>s3-bucket-public-read-prohibited<br>s3-bucket-public-write-prohibited",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 285562,
            "date": "Wed 03 Nov 2021 03:06",
            "username": "Oscars",
            "content": "B is correct https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 252674,
            "date": "Mon 01 Nov 2021 06:18",
            "username": "gmandala",
            "content": "B for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224200,
            "date": "Mon 25 Oct 2021 12:48",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 209381,
            "date": "Mon 18 Oct 2021 09:10",
            "username": "ChauPhan",
            "content": "B is fine",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#147",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is researching the least-expensive way to implement an image batch processing cluster in AWS. The application cannot run in Docker containers and must run on Amazon EC2. The batch job stores checkpoint data on a Network File System (NFS) and can tolerate interruptions. Configuring the cluster software from a generic EC2 Linux image takes 30 minutes.<br>Which is the MOST cost-effective solution?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#147",
            "answers": [
              {
                "choice": "<p>A. Use Amazon EFS for checkpoint data. To complete the job, use an EC2 Auto Scaling group and an On-Demand pricing model to provision EC2 instances temporarily.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use GlusterFS on EC2 instances for checkpoint data. To run the batch job, configure EC2 instances manually. When the job completes, shut down the instances manually.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances, and use user data to configure the EC2 Linux instance on startup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances. Create a standard cluster AMI and use the latest AMI when creating instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 147 discussion",
        "discusstion": [
          {
            "id": 648674,
            "date": "Fri 19 Aug 2022 03:11",
            "username": "MichaelExam",
            "content": "Since it takes 30 mins to set the generic EC2 Linux image ready, the best solution is using AMI to make it quickly prepared to online.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 362039,
            "date": "Fri 05 Nov 2021 14:32",
            "username": "Wrd123456789lucesarano",
            "content": "D, because by including the cluster software into the image you do not have the 30 mins startup time. Then you can use Spot instances.<br>Otherwise 30 mins of your Spot instances is wasted on installing the cluster software.Good answer.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 553202,
            "date": "Mon 21 Feb 2022 21:01",
            "username": "lucesarano",
            "content": "Good answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 360571,
            "date": "Sun 17 Oct 2021 04:27",
            "username": "MrCarter",
            "content": "Question and answers are badly worded, but the answer is definitely D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 356996,
            "date": "Sun 26 Sep 2021 04:42",
            "username": "idforadflucesarano",
            "content": "Answer should be C.  D tries to mislead you. But standard \\\"cluster\\\" AMI does not sound goodSee answer from Wrd",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 553204,
            "date": "Mon 21 Feb 2022 21:01",
            "username": "lucesarano",
            "content": "See answer from Wrd",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#148",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS CodeDeploy to manage its application deployments. Recently, the Development team decided to use GitHub for version control, and the team is looking for ways to integrate the GitHub repository with CodeDeploy. The team also needs to develop a way to automate deployment whenever there is a new commit on that repository. The team is currently deploying new application revisions by manually indicating the Amazon S3 location.<br>How can the integration be achieved in the MOST efficient way?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#148",
            "answers": [
              {
                "choice": "<p>A. Create a GitHub webhook to replicate the repository to AWS CodeCommit. Create an AWS CodePipeline pipeline that uses CodeCommit as a source provider and AWS CodeDeploy as a deployment provider. Once configured, commit a change to the GitHub repository to start the first deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS CodePipeline pipeline that uses GitHub as a source provider and AWS CodeDeploy as a deployment provider. Connect this new pipeline with the GitHub account and instruct CodePipeline to use webhooks in GitHub to automatically start the pipeline when a change occurs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda function to check periodically if there has been a new commit within the GitHub repository. If a new commit is found, trigger a CreateDeployment API call to AWS CodeDeploy to start a new deployment based on the last commit ID within the deployment group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS CodeDeploy custom deployment configuration to associate the GitHub repository with the deployment group. During the association process, authenticate the deployment group with GitHub to obtain the GitHub security authentication token. Configure the deployment group options to automatically deploy if a new commit is found. Perform a new commit to the GitHub repository to trigger the first deployment.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 148 discussion",
        "discusstion": [
          {
            "id": 158213,
            "date": "Fri 24 Sep 2021 04:57",
            "username": "SmartAKD",
            "content": "B.  Connect your existing GitHub and use Webhooks for change detections.<br><br>I like direct CodeDeploy + GitHub setup. However, Deployment Configuration doesn't deal with GitHub association.You have to specify the github account as well as repository during deployment group association.<br>Answer is D",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 159421,
            "date": "Sat 25 Sep 2021 01:18",
            "username": "AKD",
            "content": "You have to specify the github account as well as repository during deployment group association.<br>Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 163306,
            "date": "Tue 19 Oct 2021 02:59",
            "username": "halfway",
            "content": "The answer is B.  Connect GitHub account and trigger CodePipeline with webhook. If you look a 0:59 of the video in CodeDeployuserguide, it is using GitHub service, which was deprecated in 2018. Now the recommended way for GitHub integration is CodePipeline.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 651040,
            "date": "Wed 24 Aug 2022 02:43",
            "username": "colinquek",
            "content": "Would have chosen B, as it is common CI practice to build then deploy.<br>But it seems that the ques assumes that the app is already build and is committed to GitHub.<br>So CodeDeploy (D) is the way to go for this. As currently CodeDeploy can checkout directly from GitHub via hooks.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 309934,
            "date": "Sat 30 Oct 2021 05:37",
            "username": "Rajarshi",
            "content": "B<br>https://aws.amazon.com/blogs/devops/automatically-deploy-from-github-using-aws-codedeploy/#:~:textFrom%20the%20Deployments%20page%2C%20click,step%20through%20the%20OAuth%20process.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 233391,
            "date": "Fri 29 Oct 2021 08:19",
            "username": "svjl",
            "content": "B due to the automated deployment requirement.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 227550,
            "date": "Sun 24 Oct 2021 17:40",
            "username": "cloudyland",
            "content": "Where I see an issue with D is that no auto deploy option for the deployment group. Webhook for pipeline seems a good choice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224205,
            "date": "Sun 24 Oct 2021 06:36",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209388,
            "date": "Fri 22 Oct 2021 05:15",
            "username": "ChauPhan",
            "content": "Go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 176667,
            "date": "Tue 19 Oct 2021 04:26",
            "username": "hyperme",
            "content": "It is B.  \\\"The team also needs to develop a way to automate deployment whenever there is a new commit on that repository\\\" - https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-partners-github.html#behaviors-deploy-automatically",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 160548,
            "date": "Wed 13 Oct 2021 09:52",
            "username": "mousa1212",
            "content": "B , since D you can do manual deploy, for autmation you need code pipeline so B<br>https://aws.amazon.com/blogs/devops/automatically-deploy-from-github-using-aws-codedeploy/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159604,
            "date": "Tue 12 Oct 2021 12:50",
            "username": "James24",
            "content": "D is right.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155310,
            "date": "Mon 20 Sep 2021 05:04",
            "username": "jxp09",
            "content": "D https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-partners-github.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#149",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer must implement monitoring for a workload running on Amazon EC2 and Amazon RDS MySQL. The monitoring must include:<br>-Application logs and operating system metrics for the Amazon EC2 instances<br>-Database logs and operating system metrics for the Amazon RDS database<br>Which steps should the Engineer take?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#149",
            "answers": [
              {
                "choice": "<p>A. Install an Amazon CloudWatch agent on the EC2 and RDS instances. Configure the agent to send the operating system metrics and application and database logs to CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install an Amazon CloudWatch agent on the EC2 instance, and configure the agent to send the application logs and operating system metrics to CloudWatch. Enable RDS Enhanced Monitoring, and modify the RDS instance to publish database logs to CloudWatch Logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Install an Amazon CloudWatch Logs agent on the EC2 instance and configure it to send application logs to CloudWatch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up scheduled tasks on the EC2 and RDS instances to put operating system metrics and application and database logs into an Amazon S3 bucket. Set up an event on the bucket to invoke an AWS Lambda function to monitor for errors each time an object is put into the bucket.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 149 discussion",
        "discusstion": [
          {
            "id": 368446,
            "date": "Sun 07 Nov 2021 06:54",
            "username": "okida",
            "content": "I'll go to B",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 530114,
            "date": "Sat 22 Jan 2022 23:39",
            "username": "Ram_Param",
            "content": "B<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 322355,
            "date": "Sun 03 Oct 2021 21:17",
            "username": "aws_Tamilanaws_Tamilan",
            "content": "Correct Answer: CInstall an Amazon CloudWatch agent on the EC2 instance, and configure the agent to send the application logs and operating system metrics to CloudWatch. Enable RDS Enhanced Monitoring, and modify the RDS instance to publish database logs to CloudWatch Logs.Typo : Ans is B",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 322356,
            "date": "Sun 10 Oct 2021 14:43",
            "username": "aws_Tamilan",
            "content": "Typo : Ans is B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 309935,
            "date": "Wed 22 Sep 2021 20:21",
            "username": "Rajarshi",
            "content": "ans is B",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#150",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company mandates the creation of capture logs for everything running in its AWS account. The account has multiple VPCs with Amazon EC2 instances,<br>Application Load Balancers, Amazon RDS MySQL databases, and AWS WAF rules configured. The logs must be protected from deletion. A daily visual analysis of log anomalies from the previous day is required.<br>Which combination of actions should a DevOps Engineer take to accomplish this? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#150",
            "answers": [
              {
                "choice": "<p>A. Configure an AWS Lambda function to send all CloudWatch logs to an Amazon S3 bucket. Create a dashboard report in Amazon QuickSight.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure AWS CloudTrail to send all logs to Amazon Inspector. Create a dashboard report in Amazon QuickSight.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon S3 MFA Delete on the logging Amazon S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon S3 object lock legal hold on the logging Amazon S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Configure AWS Artifact to send all logs to the logging Amazon S3 bucket. Create a dashboard report in Amazon QuickSight.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Deploy an Amazon CloudWatch agent to all Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 150 discussion",
        "discusstion": [
          {
            "id": 346527,
            "date": "Sat 30 Oct 2021 20:48",
            "username": "scris",
            "content": "ADF Answer=C2=A1",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#151",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer wants to prevent Developers from pushing updates directly to the company's master branch in AWS CodeCommit. These updates should be approved before they are merged.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#151",
            "answers": [
              {
                "choice": "<p>A. Configure an IAM role for the Developers with access to CodeCommit and an explicit deny for write actions when the reference is the master. Allow Developers to use feature branches and create a pull request when a feature is complete. Allow an approver to use CodeCommit to view the changes and approve the pull requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an IAM role for the Developers to use feature branches and create a pull request when a feature is complete. Allow CodeCommit to test all code in the feature branches, and dynamically modify the IAM role to allow merging the feature branches into the master. Allow an approver to use CodeCommit to view the changes and approve the pull requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure an IAM role for the Developers to use feature branches and create a pull request when a feature is complete. Allow CodeCommit to test all code in the feature branches, and issue a new AWS Security Token Service (STS) token allowing a one-time API call to merge the feature branches into the master. Allow an approver to use CodeCommit to view the changes and approve the pull requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an IAM role for the Developers with access to CodeCommit and attach an access policy to the CodeCommit repository that denies the Developers role access when the reference is master. Allow Developers to use feature branches and create a pull request when a feature is complete. Allow an approver to use CodeCommit to view the changes and approve the pull requests.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 151 discussion",
        "discusstion": [
          {
            "id": 162943,
            "date": "Tue 19 Oct 2021 19:44",
            "username": "halfway",
            "content": "A.  Attach the policy to the IAM role for developers, not to the CodeCommit repository.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 651042,
            "date": "Wed 24 Aug 2022 02:51",
            "username": "colinquek",
            "content": "A<br><br>D is tricky, but if deny access to master, then the developers cannot branch out to do their work.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 544800,
            "date": "Thu 10 Feb 2022 19:54",
            "username": "blueorca",
            "content": "A, BC not locking push to master, D locks the master for access at all",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 252687,
            "date": "Sun 07 Nov 2021 10:45",
            "username": "gmandala",
            "content": "A it is",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224207,
            "date": "Sun 07 Nov 2021 05:22",
            "username": "jackdryan",
            "content": "I'll go with A",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 210977,
            "date": "Sat 06 Nov 2021 12:36",
            "username": "cinnamond3",
            "content": "My answer is A. <br>D : There is no way to attach iam policy to CodeCommit.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209406,
            "date": "Mon 25 Oct 2021 06:32",
            "username": "ChauPhan",
            "content": "I choose A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158231,
            "date": "Mon 04 Oct 2021 20:24",
            "username": "Smart",
            "content": "A (Correct)<br>B - dynamically modify the IAM role<br>C -allowing a one-time API call<br>D - attach an access policy to the CodeCommit repository",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155332,
            "date": "Thu 30 Sep 2021 17:02",
            "username": "jxp09",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155115,
            "date": "Sat 25 Sep 2021 20:56",
            "username": "Augustoosouza",
            "content": "I choose option A. <br><br>https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#152",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to create separate AWS accounts for each of its departments. It needs to automate the following tasks:<br>-Updating the Linux AMIs with new patches periodically and generating a golden image<br>Installing a new version of Chef agents in the golden image, if available<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03760/0009800002.png\" class=\"in-exam-image\"><br>-Enforcing the use of the newly generated golden AMIs in the department's account<br>Which option requires the LEAST management overhead?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#152",
            "answers": [
              {
                "choice": "<p>A. Write a script to launch an Amazon EC2 instance from the previous golden AMI, apply the patch updates, install the new version of the Chef agent, generate a new golden AMI, and then modify the AMI permissions to share only the new image with the departments' accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an AWS Systems Manager Run Command to update the Chef agent first, use Amazon EC2 Systems Manager Automation to generate an updated AMI, and then assume an IAM role to copy the new golden AMI into the departments' accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Systems Manager Automation to update the Linux AMI using the previous image, provide the URL for the script that will update the Chef agent, and then use AWS Organizations to replace the previous golden AMI into the departments' accounts.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Systems Manager Automation to update the Linux AMI from the previous golden image, provide the URL for the script that will update the Chef agent, and then share only the newly generated AMI with the departments' accounts.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 152 discussion",
        "discusstion": [
          {
            "id": 332526,
            "date": "Tue 21 Sep 2021 00:40",
            "username": "rnc21",
            "content": "Correct answer is D",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 617426,
            "date": "Fri 17 Jun 2022 00:43",
            "username": "SHAAHIBHUSHANAWS",
            "content": "D<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-best-practices.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 370050,
            "date": "Thu 21 Oct 2021 20:32",
            "username": "shops4harryPassthatexamdevonqoGreatFunana",
            "content": "why not C, you require AWS Organisation (RAM) to share the AMIAWS Organizations doesn't allow you to share AMI. You can create OU's SCPS, AWS Accounts via this.You can share the AMI with the Organization via CLI but you need ec2 api call to update the AMI policy, not Organizations Api call. Done that few days ago. So D is correct.The language \\\"replace\\\" indicates you are over-writing an API you previously copied.<br><br>You don't copy AMI's to other accounts, you only share them. Once shared you can copy the shared ami, but that is a different topic.<br><br>Along with the other two explanations on this answer, there you go.",
            "upvote_count": "1221",
            "selected_answers": ""
          },
          {
            "id": 374827,
            "date": "Sat 30 Oct 2021 12:08",
            "username": "Passthatexam",
            "content": "AWS Organizations doesn't allow you to share AMI. You can create OU's SCPS, AWS Accounts via this.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 504342,
            "date": "Sat 18 Dec 2021 18:11",
            "username": "devonqo",
            "content": "You can share the AMI with the Organization via CLI but you need ec2 api call to update the AMI policy, not Organizations Api call. Done that few days ago. So D is correct.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 509769,
            "date": "Sun 26 Dec 2021 20:32",
            "username": "GreatFunana",
            "content": "The language \\\"replace\\\" indicates you are over-writing an API you previously copied.<br><br>You don't copy AMI's to other accounts, you only share them. Once shared you can copy the shared ami, but that is a different topic.<br><br>Along with the other two explanations on this answer, there you go.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 363597,
            "date": "Wed 20 Oct 2021 09:01",
            "username": "arpana_03",
            "content": "D is Correct Answer",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#153",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to automatically re-create its infrastructure using AWS CloudFormation as part of the company's quality assurance (QA) pipeline. For each QA run, a new VPC must be created in a single account, resources must be deployed into the VPC, and tests must be run against this new infrastructure. The company policy states that all VPCs must be peered with a central management VPC to allow centralized logging. The company has existing CloudFormation templates to deploy its VPC and associated resources.<br>Which combination of steps will achieve the goal in a way that is automated and repeatable? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#153",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function that is invoked by an Amazon CloudWatch Events rule when a CreateVpcPeeringConnection API call is made. The Lambda function should check the source of the peering request, accepts the request, and update the route tables for the management VPC to allow traffic to go over the peering connection.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the CloudFormation template: -Invoke a custom resource to generate unique VPC CIDR ranges for the VPC and subnets. -Create a peering connection to the management VPC.  -Update route tables to allow traffic to the management VPC. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the CloudFormation template: -Use the Fn::Cidr function to allocate an unused CIDR range for the VPC and subnets. -Create a peering connection to the management VPC.  Update route tables to allow traffic to the management VPC.  <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the CloudFormation template to include a mappings object that includes a list of /16 CIDR ranges for each account where the stack will be deployed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use CloudFormation StackSets to deploy the VPC and associated resources to multiple AWS accounts using a custom resource to allocate unique CIDR ranges. Create peering connections from each VPC to the central management VPC and accept those connections in the management VPC. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 153 discussion",
        "discusstion": [
          {
            "id": 347290,
            "date": "Sat 25 Sep 2021 19:28",
            "username": "JohnnieWalker",
            "content": "AB - https://labrlearning.medium.com/creating-a-cloudformation-custom-resource-f398169b3565",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 357044,
            "date": "Wed 06 Oct 2021 09:40",
            "username": "idforadf",
            "content": "Answer is D and B",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 513364,
            "date": "Thu 30 Dec 2021 13:48",
            "username": "shaiker",
            "content": "A and B are correct<br>C is out fn:Cidr does not scan account for existing vpc cidr ranges.<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 362067,
            "date": "Wed 03 Nov 2021 06:45",
            "username": "Wrd123456789MBJames",
            "content": "I think A,C. <br>The way to peer VPCs is via AWS::EC2::VPCPeeringConnection in Cloudformation:<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html<br><br>Then you need to make sure that the CIDR is unique (The requester VPC and accepter VPC cannot have overlapping CIDR blocks), for which you can use the Fn::Cidr function:https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html<br>There is no need to use a custom resource.<br><br>Now the only way to accept the VPC connection is via the Lambda which is A. I think A,B. <br>Fn::Cidr is a convenient function to split a bigger cidr into multiple subnets, but there is no guarantee that it will return a unique CIDR that is not already in use in the account. Only a lambda will take care of that via ode logic.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 401638,
            "date": "Sat 06 Nov 2021 04:52",
            "username": "MBJames",
            "content": "I think A,B. <br>Fn::Cidr is a convenient function to split a bigger cidr into multiple subnets, but there is no guarantee that it will return a unique CIDR that is not already in use in the account. Only a lambda will take care of that via ode logic.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#154",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has multiple development groups working in a single shared AWS account. The Senior Manager of the groups wants to be alerted via a third-party API call when the creation of resources approaches the service limits for the account.<br>Which solution will accomplish this with the LEAST amount of development effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#154",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Event rule that runs periodically and targets an AWS Lambda function. Within the Lambda function, evaluate the current state of the AWS environment and compare deployed resource values to resource limits on the account. Notify the Senior Manager if the account is approaching a service limit.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an AWS Lambda function that refreshes AWS Trusted Advisor checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Trusted Advisor events and a target Lambda function. In the target Lambda function, notify the Senior Manager.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy an AWS Lambda function that refreshes AWS Personal Health Dashboard checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Personal Health Dashboard events and a target Lambda function. In the target Lambda function, notify the Senior Manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an AWS Config custom rule that runs periodically, checks the AWS service limit status, and streams notifications to an Amazon SNS topic. Deploy an AWS Lambda function that notifies the Senior Manager, and subscribe the Lambda function to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 154 discussion",
        "discusstion": [
          {
            "id": 168946,
            "date": "Sun 26 Sep 2021 08:35",
            "username": "haison8x",
            "content": "B<br>refer this link: https://aws.amazon.com/solutions/implementations/limit-monitor/",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 224213,
            "date": "Fri 01 Oct 2021 07:17",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 252698,
            "date": "Tue 02 Nov 2021 09:18",
            "username": "gmandala",
            "content": "B it is",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209447,
            "date": "Thu 30 Sep 2021 13:55",
            "username": "ChauPhan",
            "content": "B correct. Thanks for the link",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158249,
            "date": "Sun 19 Sep 2021 21:58",
            "username": "Smart",
            "content": "B - Trusted Advisor's Service Limits need to be refreshed periodically by Lambda.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#156",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an EC2<br>Auto Scaling group across multiple Availability Zones. The engineer needs to implement a deployment strategy that:<br>-Launches a second fleet of instances with the same capacity as the original fleet.<br>-Maintains the original fleet unchanged while the second fleet is launched.<br>Transitions traffic to the second fleet when the second fleet is fully deployed.<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03662/0010000003.png\" class=\"in-exam-image\"><br>-Terminates the original fleet automatically 1 hour after transition.<br>Which solution will satisfy these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#156",
            "answers": [
              {
                "choice": "<p>A. Use an AWS CloudFormation template with a retention policy for the ALB set to 1 hour. Update the Amazon Route 53 record to reflect the new ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use two AWS Elastic Beanstalk environments to perform a blue/green deployment from the original environment to the new one. Create an application version lifecycle policy to terminate the original environment in 1 hour.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CodeDeploy with a deployment group configured with a blue/green deployment configuration. Select the option Terminate the original instances in the deployment group with a waiting period of 1 hour.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Elastic Beanstalk with the configuration set to Immutable. Create an .ebextension using the Resources key that sets the deletion policy of the ALB to 1 hour, and deploy the application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 156 discussion",
        "discusstion": [
          {
            "id": 315856,
            "date": "Fri 29 Oct 2021 17:08",
            "username": "1234567J",
            "content": "https://www.examtopics.com/discussions/amazon/view/28034-exam-aws-devops-engineer-professional-topic-2-question-25/<br><br>C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#157",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Docker containers for an application deployment and wants to move its application to AWS. The company currently manages its own clusters on premises to manage the deployment of these containers. It wants to deploy its application to a managed service in AWS and wants the entire flow of the deployment process to be automated. In addition, the company has the following requirements:<br>-Focus first on the development workload.<br>-The environment must be easy to manage.<br>-Deployment should be repeatable and reusable for new environments.<br>-Store the code in a GitHub repository.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#157",
            "answers": [
              {
                "choice": "<p>A. Set up an Amazon ECS environment. Use AWS CodePipeline to create a pipeline that is triggered on a commit to the GitHub repository. Use AWS CodeBuild to create the container images and AWS CodeDeploy to publish the container image to the ECS environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodePipeline that triggers on a commit from the GitHub repository, build the container images with AWS CodeBuild, and publish the container images to Amazon ECR. In the final stage, use AWS CloudFormation to create an Amazon ECS environment that gets the container images from the ECR repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Kubernetes Cluster on Amazon EC2. Use AWS CodePipeline to create a pipeline that is triggered when the code is committed to the repository. Create the container images with a Jenkins server on EC2 and store them in the Docker Hub. Use AWS Lambda from the pipeline to trigger the deployment to the Kubernetes Cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up an Amazon ECS environment. Use AWS CodePipeline to create a pipeline that is triggered on a commit to the GitHub repository. Use AWS CodeBuild to create the container and store it in the Docker Hub. Use an AWS Lambda function to trigger a deployment and pull the new container image from the Docker Hub.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 157 discussion",
        "discusstion": [
          {
            "id": 314213,
            "date": "Mon 20 Sep 2021 02:35",
            "username": "faramawiMBJames",
            "content": "I will go with B<br>A-Incorrect, It mentions \\\"CodeDeploy to publish the container image to the ECS environment\\\", CodeDeploy Should publish container image to ECR<br>C- Incorrect, Using Kuberntes on EC2 and Jenkins server on EC2 violate stated requirementto \\\"deploy its application to a managed service in AWS\\\"<br>D- Incorrect, Code Build should create docker Image not container and the option doesn't offer repeatable deployment implementationCorrect, key reason for B is \\\"Deployment should be repeatable and reusable for new environments.\\\"<br>If we skip ECR (as done in A), we have to rebuild image for every environment which is not best practice and not what was asked. So B is the right option.",
            "upvote_count": "202",
            "selected_answers": ""
          },
          {
            "id": 401652,
            "date": "Thu 21 Oct 2021 21:08",
            "username": "MBJames",
            "content": "Correct, key reason for B is \\\"Deployment should be repeatable and reusable for new environments.\\\"<br>If we skip ECR (as done in A), we have to rebuild image for every environment which is not best practice and not what was asked. So B is the right option.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 668126,
            "date": "Tue 13 Sep 2022 16:16",
            "username": "colinquek",
            "content": "B - cos thats how its supposed to be done.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 653110,
            "date": "Sun 28 Aug 2022 20:51",
            "username": "vagobago",
            "content": "Same explanations, as faramawi",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 652936,
            "date": "Sun 28 Aug 2022 14:48",
            "username": "jexam211",
            "content": "I will go with B. <br><br>A is valid but if we can create repeatable and reusable only the B option create and store image to reuse in other times",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 649532,
            "date": "Sat 20 Aug 2022 21:47",
            "username": "hubekpeter",
            "content": "Guys you can deploy directly to ecs. Why use cloud formation. Ecs cluster should exist prior to the deployment. Therefore I vote for a",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 639412,
            "date": "Sat 30 Jul 2022 02:05",
            "username": "nqthien041292",
            "content": "Vote A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 616940,
            "date": "Wed 15 Jun 2022 22:08",
            "username": "monkalways",
            "content": "Answer is A.  B is wrong, because you don't want to create a new ECS cluster for every new deployment, and the deployment process is still reusable across different ECS cluster.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 546485,
            "date": "Sun 13 Feb 2022 15:10",
            "username": "blueorca",
            "content": "B, when it comes to repeatable, first thing came to mind is CF.  Infrastructure as Code is best practice as well, plus A is wrong on publish image, image is published by CodeBuild.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 512746,
            "date": "Wed 29 Dec 2021 22:11",
            "username": "sg0206",
            "content": "A is incorrect as CodeDeploy is used for deployment not to publish.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 474131,
            "date": "Mon 08 Nov 2021 07:17",
            "username": "JASnipes",
            "content": "Wouldn't using cloudformation defeat the purpose of automating the deployment?<br>I'm still torn between a & b and will most likely go with a<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-deployment.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 378904,
            "date": "Wed 13 Oct 2021 22:49",
            "username": "kdpeiris",
            "content": "I will go with B. <br>Container image should publish to ECR",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 375244,
            "date": "Sun 10 Oct 2021 23:14",
            "username": "FlorinuxFlorinuxGreatFunana",
            "content": "CodeDeploy doesn't deploy on ECS, so B is the answer.Sorry, I was wrong, CD deploys in EC2, Lambda and ECS. but B is still my answer because ofECR.You are right. We are deploying resources you go to store them (new docker images) in ECR. ECS is the live component of the service.",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 379069,
            "date": "Wed 20 Oct 2021 13:26",
            "username": "FlorinuxGreatFunana",
            "content": "Sorry, I was wrong, CD deploys in EC2, Lambda and ECS. but B is still my answer because ofECR.You are right. We are deploying resources you go to store them (new docker images) in ECR. ECS is the live component of the service.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 509787,
            "date": "Sun 26 Dec 2021 20:59",
            "username": "GreatFunana",
            "content": "You are right. We are deploying resources you go to store them (new docker images) in ECR. ECS is the live component of the service.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 328886,
            "date": "Wed 29 Sep 2021 21:31",
            "username": "devopp",
            "content": "Its CodeDeploy(A)or CloudFormation(B). Wording on A is valid but vague, missing a mention of ECR, while wording on B appears valid. For me its B, but maybe CodeDeploy wins over CloudFormation template complexities, given requirement \\\"The environment must be easy to manage.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 321935,
            "date": "Thu 23 Sep 2021 15:12",
            "username": "Jordanro",
            "content": "I will go with A<br>Everything goes via S3 during pipeline",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#158",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has migrated its container-based applications to Amazon EKS and wants to establish automated email notifications. The notifications sent to each email address are for specific activities related to EKS components. The solution will include Amazon SNS topics and an AWS Lambda function to evaluate incoming log events and publish messages to the correct SNS topic.<br>Which logging solution will support these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#158",
            "answers": [
              {
                "choice": "<p>A. Enable Amazon CloudWatch Logs to log the EKS components. Create a CloudWatch subscription filter for each component with Lambda as the subscription feed destination.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable Amazon CloudWatch Logs to log the EKS components. Create CloudWatch Logs Insights queries linked to Amazon CloudWatch Events events that trigger Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable Amazon S3 logging for the EKS components. Configure an Amazon CloudWatch subscription filter for each component with Lambda as the subscription feed destination.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable Amazon S3 logging for the EKS components. Configure S3 PUT Object event notifications with AWS Lambda as the destination.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 158 discussion",
        "discusstion": [
          {
            "id": 158259,
            "date": "Thu 23 Sep 2021 07:02",
            "username": "Smart",
            "content": "A is Correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 163379,
            "date": "Tue 28 Sep 2021 19:21",
            "username": "halfway",
            "content": "A. <br>CloudWatch Subscription Filter",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 546046,
            "date": "Sat 12 Feb 2022 19:53",
            "username": "blueorca",
            "content": "A is the correct answer. It's simple and works while B is convoluted.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 383100,
            "date": "Thu 04 Nov 2021 01:33",
            "username": "Elie777",
            "content": "For those saying B, how do you link Insights queries to CloudWatch events ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 338113,
            "date": "Tue 02 Nov 2021 11:25",
            "username": "twanc",
            "content": "A https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 261936,
            "date": "Mon 01 Nov 2021 00:01",
            "username": "GVGREAT",
            "content": "A is the answer<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 253065,
            "date": "Sat 30 Oct 2021 16:50",
            "username": "gmandalagmandalagmandala",
            "content": "B it meets requirement of 'notifications sent to each email address are for specific activities'. A misses out on specifics for 'events'.Wordings on B is still a bit ambiguous to me. Talking about integration to CW events which doesnt exist. So, not sure. Insights on it's own is not having triggers from what i see in the aws docChanging to A",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 253068,
            "date": "Sat 30 Oct 2021 22:22",
            "username": "gmandalagmandala",
            "content": "Wordings on B is still a bit ambiguous to me. Talking about integration to CW events which doesnt exist. So, not sure. Insights on it's own is not having triggers from what i see in the aws docChanging to A",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 256041,
            "date": "Sun 31 Oct 2021 18:39",
            "username": "gmandala",
            "content": "Changing to A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 227636,
            "date": "Sat 30 Oct 2021 00:29",
            "username": "cloudyland",
            "content": "Go with A.  Subscription filter is designed for piping logs to Lambda and Kinesis. https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224216,
            "date": "Wed 27 Oct 2021 09:55",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 222796,
            "date": "Mon 18 Oct 2021 07:42",
            "username": "mbspark",
            "content": "A. <br><br>While this link is for streaming to ES, it's still relevant for lambda as the destination as well: https://awskrug.github.io/eks-workshop/logging/configurecwl/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 219282,
            "date": "Wed 13 Oct 2021 16:05",
            "username": "xlFiremanxlFireman",
            "content": "B is the answerChange to A. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 221288,
            "date": "Sat 16 Oct 2021 15:46",
            "username": "xlFireman",
            "content": "Change to A. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209466,
            "date": "Fri 01 Oct 2021 23:49",
            "username": "ChauPhanChauPhan",
            "content": "A is correctChange to B",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 209468,
            "date": "Fri 08 Oct 2021 23:21",
            "username": "ChauPhan",
            "content": "Change to B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 155399,
            "date": "Sun 19 Sep 2021 20:44",
            "username": "jxp09hypermedumma",
            "content": "B.  Enable Amazon CloudWatch Logs to log the EKS components. Create CloudWatch Logs Insights queries linked to Amazon CloudWatch Events events that trigger Lambda.There is no such feature to link CloudWatch Logs Insights to Amazon CloudWatch EventsThere are cloudwatch logs insights queries https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html",
            "upvote_count": "221",
            "selected_answers": ""
          },
          {
            "id": 165635,
            "date": "Thu 30 Sep 2021 18:50",
            "username": "hypermedumma",
            "content": "There is no such feature to link CloudWatch Logs Insights to Amazon CloudWatch EventsThere are cloudwatch logs insights queries https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 216240,
            "date": "Tue 12 Oct 2021 14:05",
            "username": "dumma",
            "content": "There are cloudwatch logs insights queries https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#160",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A web application with multiple services runs on Amazon EC2 instances behind an Application Load Balancer. The application stores data in an Amazon RDS<br>Multi-AZ DB instance. The instance health check used by the load balancer returns PASS if at least one service is running on the instance.<br>The company uses AWS CodePipeline with AWS CodeBuild and AWS CodeDeploy steps to deploy code to test and production environments. Recently, a new version was unable to connect to the database server in the test environment. One process was running, so the health checks reported healthy and the application was promoted to production, causing a production outage. The company wants to ensure that test builds are fully functional before a promotion to production.<br>Which changes should a DevOps Engineer make to the test and deployment process? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#160",
            "answers": [
              {
                "choice": "<p>A. Add an automated functional test to the pipeline that ensures solid test cases are performed.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a manual approval action to the CodeDeploy deployment pipeline that requires a Testing Engineer to validate the testing environment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Refactor the health check endpoint the Elastic Load Balancer is checking to better validate actual application functionality.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Refactor the health check endpoint the Elastic Load Balancer is checking to return a text-based status result and configure the load balancer to check for a valid response.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Add a dependency checking step to the existing testing framework to ensure compatibility.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 160 discussion",
        "discusstion": [
          {
            "id": 253074,
            "date": "Sun 24 Oct 2021 14:35",
            "username": "gmandaladevops7GreatFunana",
            "content": "A & C.  Always go for automated option if possible. B unnecessarily introduces manual intervention and manual approval is relevant to CodePipeline, not CodeDeploy. Even if it was mentioned as codepipeline i would still go with automated option than manual.agreedAlways go for the automated option is a recipe for disaster especially when using automation to approve updates without user input. Might as well deploy at 5PM on a Friday while you are at it.<br><br>The answers are BC. ",
            "upvote_count": "1313",
            "selected_answers": ""
          },
          {
            "id": 650141,
            "date": "Mon 22 Aug 2022 09:11",
            "username": "devops7",
            "content": "agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 502683,
            "date": "Thu 16 Dec 2021 06:21",
            "username": "GreatFunana",
            "content": "Always go for the automated option is a recipe for disaster especially when using automation to approve updates without user input. Might as well deploy at 5PM on a Friday while you are at it.<br><br>The answers are BC. ",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 224220,
            "date": "Thu 21 Oct 2021 09:35",
            "username": "jackdryanpeddyua",
            "content": "I'll go with B,CFinally I got you!<br>A as automated functional test would ensure all the functionality is working before code is pushed to production<br>C enhance health checks endpoint to cover actual application functionality would guarantee the application is working",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 377910,
            "date": "Sat 06 Nov 2021 13:04",
            "username": "peddyua",
            "content": "Finally I got you!<br>A as automated functional test would ensure all the functionality is working before code is pushed to production<br>C enhance health checks endpoint to cover actual application functionality would guarantee the application is working",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 619082,
            "date": "Mon 20 Jun 2022 09:33",
            "username": "gr3y_matter",
            "content": "B- Approval must be manual to always be at safe side.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 551471,
            "date": "Sun 20 Feb 2022 02:53",
            "username": "MF2C",
            "content": "AC for me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 431275,
            "date": "Sat 06 Nov 2021 23:42",
            "username": "TonyGe",
            "content": "C for sure.<br>choosing between A and B, B is better: manual approval.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 328894,
            "date": "Sat 06 Nov 2021 06:47",
            "username": "devopp",
            "content": "Its B,C.  While A is definately a good idea (tests that actually work), its not a step that \\\"the DevOps Engineer should take\\\" (the developers/testers should write these tests, no devops).",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 306863,
            "date": "Sun 31 Oct 2021 21:21",
            "username": "faltu1985",
            "content": "I support A, C.  Automation is always preferred over the manual.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 261944,
            "date": "Sat 30 Oct 2021 14:09",
            "username": "GVGREAT",
            "content": "B & C<br>For B, the sentence may be wrong - it has to be - \\\"Add a manual approval action to the CodePipeline before deployment that requires a Testing Engineer to validate the testing environment.\\\"<br>instead of<br>\\\"Add a manual approval action to the CodeDeploy deployment pipeline that requires a Testing Engineer to validate the testing environment.\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 229007,
            "date": "Thu 21 Oct 2021 17:43",
            "username": "SamChan",
            "content": "I vote for A, C<br>B is wrong, since manual approval can be added for CodePipeline but not CodePipeline<br>https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals-action-add.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 211009,
            "date": "Wed 20 Oct 2021 21:25",
            "username": "cinnamond3",
            "content": "B, C<br>A: Making test code is not a respronsbility of Devops engineer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209915,
            "date": "Mon 18 Oct 2021 19:52",
            "username": "sayakan",
            "content": "I=E2=80=99m sure with B.  but not sure A or C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209495,
            "date": "Thu 07 Oct 2021 21:55",
            "username": "ChauPhanChauPhan",
            "content": "I'll go with ACChange to BC, better to have manual interact from Test Engineer to verify than let system automation test. Because if the automated test pass again but in fact still has some issue, the system will be outage again",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 209500,
            "date": "Sun 10 Oct 2021 21:30",
            "username": "ChauPhan",
            "content": "Change to BC, better to have manual interact from Test Engineer to verify than let system automation test. Because if the automated test pass again but in fact still has some issue, the system will be outage again",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 207583,
            "date": "Thu 07 Oct 2021 04:07",
            "username": "Dgix",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 175914,
            "date": "Thu 07 Oct 2021 03:59",
            "username": "rejuvenate",
            "content": "B- manual deploy at least on Prod is a good practice<br>C - refactor health check to be representative also of DB issues",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 167493,
            "date": "Sat 25 Sep 2021 09:47",
            "username": "halfway",
            "content": "I'll go with B&C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 162995,
            "date": "Sat 25 Sep 2021 08:03",
            "username": "ruiliang",
            "content": "B C<br>D:text-based status result<br>E: dependency checking",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#162",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security review has identified that an AWS CodeBuild project is downloading a database population script from an Amazon S3 bucket using an unauthenticated request. The Security team does not allow unauthenticated requests to S3 buckets for this project.<br>How can this issue be corrected in the MOST secure manner?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#162",
            "answers": [
              {
                "choice": "<p>A. Add the bucket name to the AllowedBuckets section of the CodeBuild project settings. Update the build spec to use the AWS CLI to download the database population script.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the S3 bucket settings to enable HTTPS basic authentication and specify a token. Update the build spec to use cURL to pass the token and download the database population script.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Remove unauthenticated access from the S3 bucket with a bucket policy. Modify the service role for the CodeBuild project to include Amazon S3 access. Use the AWS CLI to download the database population script.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Remove unauthenticated access from the S3 bucket with a bucket policy. Use the AWS CLI to download the database population script using an IAM access key and a secret access key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 162 discussion",
        "discusstion": [
          {
            "id": 536509,
            "date": "Sun 30 Jan 2022 23:14",
            "username": "RightAnswers",
            "content": "C looks correct as it uses a service role to access S3. However, why it is required to download the script using AWS CLI?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253080,
            "date": "Fri 05 Nov 2021 11:05",
            "username": "gmandala",
            "content": "Definitely C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224223,
            "date": "Wed 13 Oct 2021 16:59",
            "username": "jackdryan",
            "content": "I'll go with C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 211015,
            "date": "Thu 30 Sep 2021 14:49",
            "username": "cinnamond3",
            "content": "Using Service role is Most secure. D is working but script know what the access key is. so less secure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209543,
            "date": "Tue 28 Sep 2021 16:44",
            "username": "ChauPhan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 207586,
            "date": "Thu 23 Sep 2021 22:53",
            "username": "Dgix",
            "content": "C, of course.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 163390,
            "date": "Thu 23 Sep 2021 16:56",
            "username": "halfway",
            "content": "C. <br>Use service role to access S3 bucket",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 158292,
            "date": "Mon 20 Sep 2021 19:57",
            "username": "Smart",
            "content": "C is correct.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#163",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is deploying an Amazon API Gateway API with an AWS Lambda function providing the backend functionality. The Engineer needs to record the source IP address and response status of every API call.<br>Which combination of actions should the DevOps Engineer take to implement this functionality? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#163",
            "answers": [
              {
                "choice": "<p>A. Configure AWS X-Ray to enable access logging for the API Gateway requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the API Gateway stage to enable access logging and choose a logging format.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new Amazon CloudWatch Logs log group or choose an existing log group to store the logs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Grant API Gateway permission to read and write logs to Amazon CloudWatch through an IAM role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a new Amazon S3 bucket or choose an existing S3 bucket to store the logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Configure API Gateway to stream its log data to Amazon Kinesis.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 163 discussion",
        "discusstion": [
          {
            "id": 158297,
            "date": "Sun 03 Oct 2021 02:31",
            "username": "Smart",
            "content": "BCD is correct. https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html<br><br>F works but then permissions from option D don't apply.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 512415,
            "date": "Wed 29 Dec 2021 17:31",
            "username": "sg0206",
            "content": "Why A is not correct? we can track IP address using x-ray service. right?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342263,
            "date": "Sat 06 Nov 2021 22:28",
            "username": "mo_awsdevopsRightAnswers",
            "content": "why D.  it need not have read permission? Just write should be sufficient?Great question - However the reference by Smart statesthe following:<br>To enable CloudWatch Logs, you must grant API Gateway permission to read and write logs to CloudWatch for your account. The AmazonAPIGatewayPushToCloudWatchLogs managed policy (with an ARN of arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs) has all the required permissions:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"logs:CreateLogGroup\\\",<br>\\\"logs:CreateLogStream\\\",<br>\\\"logs:DescribeLogGroups\\\",<br>\\\"logs:DescribeLogStreams\\\",<br>\\\"logs:PutLogEvents\\\",<br>\\\"logs:GetLogEvents\\\",<br>\\\"logs:FilterLogEvents\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br>}",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 545562,
            "date": "Sat 12 Feb 2022 00:19",
            "username": "RightAnswers",
            "content": "Great question - However the reference by Smart statesthe following:<br>To enable CloudWatch Logs, you must grant API Gateway permission to read and write logs to CloudWatch for your account. The AmazonAPIGatewayPushToCloudWatchLogs managed policy (with an ARN of arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs) has all the required permissions:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"logs:CreateLogGroup\\\",<br>\\\"logs:CreateLogStream\\\",<br>\\\"logs:DescribeLogGroups\\\",<br>\\\"logs:DescribeLogStreams\\\",<br>\\\"logs:PutLogEvents\\\",<br>\\\"logs:GetLogEvents\\\",<br>\\\"logs:FilterLogEvents\\\"<br>],<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br>}",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253088,
            "date": "Thu 04 Nov 2021 09:47",
            "username": "gmandala",
            "content": "BCD for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 238028,
            "date": "Thu 04 Nov 2021 06:03",
            "username": "dnevado",
            "content": "BCD is correct, no need for S3 or kinesis",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224226,
            "date": "Sun 31 Oct 2021 07:46",
            "username": "jackdryan",
            "content": "I'll go with BCD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 219335,
            "date": "Wed 20 Oct 2021 09:08",
            "username": "xlFireman",
            "content": "BCD is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209545,
            "date": "Sun 17 Oct 2021 16:29",
            "username": "ChauPhan",
            "content": "Agree, BCD is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 163391,
            "date": "Sat 16 Oct 2021 20:34",
            "username": "halfway",
            "content": "BCD<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 162253,
            "date": "Sat 09 Oct 2021 17:40",
            "username": "krrish96",
            "content": "BCD IS CORRECT",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155431,
            "date": "Mon 27 Sep 2021 08:58",
            "username": "jxp09xlFireman",
            "content": "BDF https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/Incorrect, Kinesis would overcomplicate things and incur more costs.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 219336,
            "date": "Tue 26 Oct 2021 17:42",
            "username": "xlFireman",
            "content": "Incorrect, Kinesis would overcomplicate things and incur more costs.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#164",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer at a startup cloud-based gaming company has the task of formalizing deployment strategies. The strategies must meet the following requirements:<br>-Use standard Git commands, such as git clone and git push for the code repository.<br>-Management tools should maximize the use of platform solutions where possible.<br>-Deployment packages must be immutable and in the form of Docker images.<br>How can the Engineer meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#164",
            "answers": [
              {
                "choice": "<p>A. Use AWS CodePipeline to trigger a build process when software is pushed to a self-hosted GitHub repository. CodePipeline will use a Jenkins build server to build new Docker images. CodePipeline will deploy into a second target group in Amazon ECS behind an Application Load Balancer. Cutover will be managed by swapping the listener rules on the Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodePipeline to trigger a build process when software is pushed to a private GitHub repository. CodePipeline will use AWS CodeBuild to build new Docker images. CodePipeline will deploy into a second target group in Amazon ECS behind an Application Load Balancer. Cutover will be managed by swapping the listener rules on the Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a Jenkins pipeline to trigger a build process when software is pushed to a private GitHub repository. AWS CodePipeline will use AWS CodeBuild to build new Docker images. CodePipeline will deploy into a second target group in Amazon ECS behind an Application Load Balancer. Cutover will be managed by swapping the listener rules on the Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodePipeline to trigger a build process when software is pushed to an AWS CodeCommit repository. CodePipeline will use an AWS CodeBuild build server to build new Docker images. CodePipeline will deploy into a second target group in a Kubernetes Cluster hosted on Amazon EC2 behind an Application Load Balancer. Cutover will be managed by swapping the listener rules on the Application Load Balancer.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 164 discussion",
        "discusstion": [
          {
            "id": 155454,
            "date": "Sun 26 Sep 2021 03:14",
            "username": "jxp09Smart",
            "content": "I choose BAgreed. Kubernetes on EC2 is whole new headache.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 158309,
            "date": "Tue 28 Sep 2021 03:22",
            "username": "Smart",
            "content": "Agreed. Kubernetes on EC2 is whole new headache.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 155210,
            "date": "Tue 21 Sep 2021 07:45",
            "username": "AugustoosouzaChauPhanvagobagosvjlhyperme",
            "content": "I choose D.  Based on the requirement:<br>anagement tools should maximize the use of platform solutions where possible<br><br>Using Codepipeline with CodeCommit and CodeBuildPlease note that the 1st requirement is \\\"using git command like git push, git clone\\\" so using CodeCommit (answer D) can't be an option.CodeCommit is based on Git technology, so all git command would work. I will got with Dtotally wrong. a server to build a docker image on CodeBuild, CodeCommit, Kubernetes\\\"an AWS CodeBuild build server\\\" in D sounds weird. I choose B. ",
            "upvote_count": "92112",
            "selected_answers": ""
          },
          {
            "id": 209560,
            "date": "Sun 03 Oct 2021 11:01",
            "username": "ChauPhanvagobagosvjl",
            "content": "Please note that the 1st requirement is \\\"using git command like git push, git clone\\\" so using CodeCommit (answer D) can't be an option.CodeCommit is based on Git technology, so all git command would work. I will got with Dtotally wrong. a server to build a docker image on CodeBuild, CodeCommit, Kubernetes",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 653107,
            "date": "Sun 28 Aug 2022 20:49",
            "username": "vagobago",
            "content": "CodeCommit is based on Git technology, so all git command would work. I will got with D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 233236,
            "date": "Thu 14 Oct 2021 00:58",
            "username": "svjl",
            "content": "totally wrong. a server to build a docker image on CodeBuild, CodeCommit, Kubernetes",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 177255,
            "date": "Fri 01 Oct 2021 02:08",
            "username": "hyperme",
            "content": "\\\"an AWS CodeBuild build server\\\" in D sounds weird. I choose B. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 653108,
            "date": "Sun 28 Aug 2022 20:49",
            "username": "vagobago",
            "content": "CodeCommit is based on Git technology, so all git command would work. I will got with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 416938,
            "date": "Sat 06 Nov 2021 10:47",
            "username": "tgv",
            "content": "B<br>with D there's a big management overhead when running k8s on EC2. If it was EKS then it was a different story",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 381820,
            "date": "Wed 03 Nov 2021 20:41",
            "username": "okida",
            "content": "I'll go to B because of \\\"maximize the use of platform solutions where possible\\\". I think D is also ok but It's good with Elastic Kubernetes Service (EKS) instead of deploying Kubernetes in EC2. With B, It's using ECS which managed service of AWS for using docker container and maximum the platform AWS with very easy deploying comparing to Kubernetes.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 368662,
            "date": "Sat 30 Oct 2021 02:27",
            "username": "haris14",
            "content": "I will go with B - ECS would be better than managing own k8s cluster. Gaming company needs lot of containers running and managing k8s is a headache.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 311304,
            "date": "Thu 28 Oct 2021 09:13",
            "username": "Jordanro",
            "content": "I will go with B. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 262334,
            "date": "Wed 27 Oct 2021 07:46",
            "username": "GVGREAT",
            "content": "Code push has to be git commands - can be either GitHub or CodeCommit. But leveraging the AWS solutions will vote for ECS than K8S.<br>Answer will be B - preferably",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253096,
            "date": "Sun 17 Oct 2021 08:04",
            "username": "gmandala",
            "content": "D, maximize managed solutions. All others have overhead of managing repos.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 228311,
            "date": "Thu 07 Oct 2021 04:11",
            "username": "cloudylandsvjl",
            "content": "CodeCommit vs. GitHub, and K8s+EC2 vs. ECS, I prefer to B which seems to maximize AWS solutions.You are right B. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 233231,
            "date": "Sat 09 Oct 2021 17:16",
            "username": "svjl",
            "content": "You are right B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224228,
            "date": "Mon 04 Oct 2021 19:15",
            "username": "jackdryan",
            "content": "I'll go with D",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 209935,
            "date": "Sun 03 Oct 2021 12:00",
            "username": "sayakan",
            "content": "we can use git command like git push on codecommit. I actually use it on dev env",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209557,
            "date": "Sat 02 Oct 2021 18:20",
            "username": "ChauPhancinnamond3",
            "content": "I'll go with B.  Please note that the 1st requirement is \\\"using git command like git push, git clone\\\" so using CodeCommit (answer D) can't be an option.CodeCommit is git based code repository like github. So, you can use git command as well, see below.<br>https://docs.aws.amazon.com/codecommit/latest/userguide/getting-started.html",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 211020,
            "date": "Mon 04 Oct 2021 17:07",
            "username": "cinnamond3",
            "content": "CodeCommit is git based code repository like github. So, you can use git command as well, see below.<br>https://docs.aws.amazon.com/codecommit/latest/userguide/getting-started.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 203654,
            "date": "Fri 01 Oct 2021 19:55",
            "username": "kkonstanfrancisco_guerra",
            "content": "B is not correct since it uses private github repo, i will go with D since its the only option using only AWS solutions.D would be better if it was not k8s on Ec2.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 474512,
            "date": "Mon 08 Nov 2021 22:36",
            "username": "francisco_guerra",
            "content": "D would be better if it was not k8s on Ec2.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#167",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer must ensure all IAM entity configurations across multiple AWS accounts in AWS Organizations are compliant with corporate IAM policies.<br>Which combination of steps will accomplish this? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#167",
            "answers": [
              {
                "choice": "<p>A. Enable AWS Trusted Advisor in Organizations for all accounts to report on noncompliant IAM entities.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure an AWS Config aggregator in the Organizations master account for all accounts.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy AWS Config rules to the master account in Organizations that match corporate IAM policies.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Apply an SCP in Organizations to ensure compliance of IAM entities.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Deploy AWS Config rules to all accounts in Organizations that match the corporate IAM policies.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 167 discussion",
        "discusstion": [
          {
            "id": 224231,
            "date": "Thu 21 Oct 2021 05:54",
            "username": "jackdryan",
            "content": "I'll go with B,E",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 544087,
            "date": "Wed 09 Feb 2022 21:36",
            "username": "blueorca",
            "content": "BE look right to me. SCP will suspend the action at account level. What to enforce if you can't even use it?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 519817,
            "date": "Sun 09 Jan 2022 00:14",
            "username": "RightAnswers",
            "content": "An aggregator is an AWS Config resource type that collects AWS Config configuration and compliance data from the following:<br><br>Multiple accounts and multiple regions.<br><br>Single account and multiple regions.<br><br>An organization in AWS Organizations and all the accounts in that organization which have AWS Config enabled.<br>So, Ans B, E",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 376772,
            "date": "Sat 30 Oct 2021 04:55",
            "username": "okida",
            "content": "I'll go to B, E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 368918,
            "date": "Wed 27 Oct 2021 17:35",
            "username": "JohnnieWalker",
            "content": "Humm. I think C could be right. I think you can create or use a config rule in the master account that will audit all the child/aggregated accounts.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 329446,
            "date": "Tue 26 Oct 2021 23:30",
            "username": "devopp",
            "content": "B,E - think maybe Option D is trying to suggest applying a generic IAM Role across Org hierarchy, as *example* of how to actually implementing their compliance rules (but option is badly worded)...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209785,
            "date": "Sun 17 Oct 2021 17:59",
            "username": "ChauPhan",
            "content": "B.  E is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 175918,
            "date": "Wed 13 Oct 2021 02:19",
            "username": "rejuvenateMBJames",
            "content": "B and E<br>D is wrong as SCP will only restrict rights globally and not IAM complianceagreed, SCP has its place into a corporate policy approach, but it does not feel that it's responding to the question here, which is about IAM compliance. I'd go with B and E",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 401679,
            "date": "Wed 03 Nov 2021 23:00",
            "username": "MBJames",
            "content": "agreed, SCP has its place into a corporate policy approach, but it does not feel that it's responding to the question here, which is about IAM compliance. I'd go with B and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 163414,
            "date": "Thu 07 Oct 2021 10:27",
            "username": "halfway",
            "content": "BE. <br>https://aws.amazon.com/blogs/security/how-to-record-and-govern-your-iam-resource-configurations-using-aws-config/<br>https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 158317,
            "date": "Mon 20 Sep 2021 11:31",
            "username": "Smart",
            "content": "B & E is correct.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#168",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has thousands of Amazon EC2 instances as well as hundreds of virtual machines on-premises. Developers routinely sign in to the console for on- premises systems to perform troubleshooting. The Developers want to sign in to AWS instances to run performance tools, but are unable to due to the lack of a central console logging system. A DevOps Engineer wants to ensure that console access is logged on all systems.<br>Which combination of steps will meet these requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#168",
            "answers": [
              {
                "choice": "<p>A. Attach a role to all AWS instances that contains the appropriate permissions. Create an AWS Systems Manager managed-instance activation. Install and configure Systems Manager Agent on on-premises machines.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable AWS Systems Manager Session Manager logging to an Amazon S3 bucket. Direct Developers to connect to the systems with Session Manager only.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable AWS Systems Manager Session Manager logging to AWS CloudTrail. Direct Developers to continue normal sign-in procedures for on-premises. Use Session Manager for AWS instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install and configure an Amazon CloudWatch Logs agent on all systems. Create an AWS Systems Manager managed-instance activation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set up a Site-to-Site VPN connection between the on-premises and AWS networks. Set up a bastion instance to allow Developers to sign in to the AWS instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 168 discussion",
        "discusstion": [
          {
            "id": 158319,
            "date": "Mon 27 Sep 2021 15:37",
            "username": "Smart",
            "content": "A & B are correct.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 649354,
            "date": "Sat 20 Aug 2022 11:18",
            "username": "devops7",
            "content": "A & B, ec2 log goes to CW -> S3, not cloudtrail.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 362091,
            "date": "Sat 23 Oct 2021 15:52",
            "username": "Wrd123456789",
            "content": "A and B,<br>See: https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html<br>Logging session data using Amazon S3",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 288753,
            "date": "Fri 22 Oct 2021 09:09",
            "username": "jyrajanMBJames",
            "content": "A and C.  The question states that need to log all console access. How can B achieve this without CloudTrail?A and C together are in contradiction. There is no reason to install systems manager agent on-premise (A) if developers are then told to keep logging in using on-prem console (C) instead of session manager.<br>I'd choose A and B. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 401687,
            "date": "Thu 28 Oct 2021 10:39",
            "username": "MBJames",
            "content": "A and C together are in contradiction. There is no reason to install systems manager agent on-premise (A) if developers are then told to keep logging in using on-prem console (C) instead of session manager.<br>I'd choose A and B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253105,
            "date": "Wed 20 Oct 2021 18:28",
            "username": "gmandala",
            "content": "A & B for me",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 224232,
            "date": "Mon 18 Oct 2021 12:00",
            "username": "jackdryan",
            "content": "I'll go with A,B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 211027,
            "date": "Wed 13 Oct 2021 02:10",
            "username": "cinnamond3",
            "content": "A, B. <br>C has some problem. because in a, b install system manager and let them use session manager. but same process with on promise.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209801,
            "date": "Tue 12 Oct 2021 18:20",
            "username": "ChauPhan",
            "content": "For me, it is A and C<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-prerequisites.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178857,
            "date": "Fri 08 Oct 2021 20:54",
            "username": "nqobza",
            "content": "Actually it's A and B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178856,
            "date": "Thu 07 Oct 2021 22:41",
            "username": "nqobza",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 168893,
            "date": "Wed 06 Oct 2021 23:11",
            "username": "skipbaylessfor3",
            "content": "What about D tho",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 162262,
            "date": "Sun 03 Oct 2021 07:12",
            "username": "krrish96",
            "content": "I ll choose A & B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#169",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps team wants to be able to work on the same source code repository. The team has the following requirements for their development workflow and repository access controls:<br>-Only team members can clone the repository and create new branches.<br>-A production-ready code state should be isolated from any untested code changes.<br>-Code changes should be approved by another team member before merging to the production-ready master branch.<br>-All code change approvals must have an audit record.<br>-New team members can quickly modify code.<br>Which combination of actions will these requirements? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#169",
            "answers": [
              {
                "choice": "<p>A. Check out the master branch and develop new features locally on a feature branch to keep the production-ready code isolated. Ask team members to review the changes before committing the changes locally.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS CodeCommit repository and an IAM group with permissions to read/write changes to the repository. Add new team members to this group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CodeCommit repository and an IAM role with permissions to read/write changes to the repository. Attach this IAM role to a single IAM user. Ensure each member of the team uses this IAM user. Provide new team members the credentials to this IAM user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a local feature branch from the master branch for new features. Commit the new code and push the changes to the feature branch in the repository.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a pull request so other team members can review the code changes. Implement any suggestions, pull any additional changes from the master branch, and push to the feature branch again. Merge the master branch with the feature branch.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Create a pull request so other team members can review the code changes. Implement any suggestions, pull any additional changes from the master branch, resolve any conflicts, and push to the feature branch again. Merge the feature branch with the master branch.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 169 discussion",
        "discusstion": [
          {
            "id": 314360,
            "date": "Sat 02 Oct 2021 05:42",
            "username": "yyy",
            "content": "I think BDF",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 362094,
            "date": "Tue 12 Oct 2021 21:33",
            "username": "Wrd123456789",
            "content": "A: No local branches, nobody can look at it only on your computer<br>B: Yes, IAM rights to groups<br>C: No, no rights to individual users<br>D: Yes, push new feature code to the feature branch in the repo so others can look at it<br>E: Almost, but resolving conflicts (see F) must be done before push into master<br>F: Has it all.<br><br>BDF",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 645649,
            "date": "Fri 12 Aug 2022 02:21",
            "username": "MichaelExam",
            "content": "A -Ask team members to review the changes before committing the changes locally. This does not make sense.<br>C- IAM Role can't be attached to IAM user.<br>E- According to the request, Before the Master code merger , should be get another team member approved.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 549672,
            "date": "Thu 17 Feb 2022 20:32",
            "username": "lucesarano",
            "content": "It's BDF. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 546670,
            "date": "Sun 13 Feb 2022 20:36",
            "username": "blueorca",
            "content": "should be BDF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 501191,
            "date": "Tue 14 Dec 2021 08:52",
            "username": "nqthien041292",
            "content": "Vote BDF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDF"
          },
          {
            "id": 387439,
            "date": "Sat 23 Oct 2021 05:42",
            "username": "D2",
            "content": "Answer BDF",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 350774,
            "date": "Sun 10 Oct 2021 00:16",
            "username": "heiheiMBJames",
            "content": "why not B D Ebecause it's the feature branch that gets merged into master, not the other way around",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 401691,
            "date": "Sat 06 Nov 2021 22:15",
            "username": "MBJames",
            "content": "because it's the feature branch that gets merged into master, not the other way around",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 322727,
            "date": "Fri 08 Oct 2021 04:27",
            "username": "lobidrulla",
            "content": "its B,D,F",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 311136,
            "date": "Tue 28 Sep 2021 15:40",
            "username": "Rajarshi",
            "content": "ans -abf",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#170",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a web application that uses an Amazon DynamoDB table in a single AWS Region to store user information. To support an increasingly global user base, the application must run in a secondary Region and allow users to connect to their closest Region and fail over to the secondary Region.<br>Which approach should be used to ensure the deployment meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#170",
            "answers": [
              {
                "choice": "<p>A. Configure DynamoDB streams to copy data between Regions, deploy the web stack in both Regions, and configure Amazon Route 53 to use a geoproximity routing policy with health checks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Convert the DynamoDB table to a global table, deploy the web stack in both Regions, and configure Amazon Route 53 to use a geoproximity routing policy with health checks.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define DynamoDB cross-region backups to copy data to the secondary Region, deploy the web stack in both Regions, and configure Amazon Route 53 to use a latency-based routing policy with health checks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use DynamoDB Accelerator to copy data to the secondary Region, deploy the web stack in both Regions, and configure Amazon Route 53 to use a failover routing policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 170 discussion",
        "discusstion": [
          {
            "id": 158321,
            "date": "Thu 23 Sep 2021 12:16",
            "username": "Smart",
            "content": "B is correct.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 253118,
            "date": "Tue 26 Oct 2021 08:24",
            "username": "gmandala",
            "content": "B for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224466,
            "date": "Fri 22 Oct 2021 12:04",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 209802,
            "date": "Wed 20 Oct 2021 23:47",
            "username": "ChauPhan",
            "content": "B is the right one.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 184111,
            "date": "Mon 18 Oct 2021 20:11",
            "username": "FrankSparrow",
            "content": "B is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178860,
            "date": "Thu 30 Sep 2021 07:52",
            "username": "nqobzasolo18GreatFunana",
            "content": "B looks correct but it misses out additional stepsmiss 2 step:<br>- enable streaming<br>- create table on each regionKeep it high level. Its B.  No need to confuse others with details while accurate, are not mentioned within the question itself.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 298037,
            "date": "Wed 27 Oct 2021 00:26",
            "username": "solo18GreatFunana",
            "content": "miss 2 step:<br>- enable streaming<br>- create table on each regionKeep it high level. Its B.  No need to confuse others with details while accurate, are not mentioned within the question itself.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 510048,
            "date": "Mon 27 Dec 2021 06:55",
            "username": "GreatFunana",
            "content": "Keep it high level. Its B.  No need to confuse others with details while accurate, are not mentioned within the question itself.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#172",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has containerized all of its in-house quality control applications. The company is running Jenkins on Amazon EC2, which requires patching and upgrading. The Compliance Officer has requested a DevOps Engineer begin encrypting build artifacts since they contain company intellectual property.<br>What should the DevOps Engineer do to accomplish this in the MOST maintainable manner?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#172",
            "answers": [
              {
                "choice": "<p>A. Automate patching and upgrading using AWS Systems Manager on EC2 instances and encrypt Amazon EBS volumes by default.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy Jenkins to an Amazon ECS cluster and copy build artifacts to an Amazon S3 bucket with default encryption enabled.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Leverage AWS CodePipeline with a build action and encrypt the artifacts using AWS Secrets Manager.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeBuild with artifact encryption to replace the Jenkins instance running on Amazon EC2.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 172 discussion",
        "discusstion": [
          {
            "id": 209806,
            "date": "Sat 23 Oct 2021 03:40",
            "username": "ChauPhankyozanuro",
            "content": "D. <br>https://docs.aws.amazon.com/codebuild/latest/userguide/security-encryption.html<br>Build artifact encryption - CodeBuild requires access to an AWS KMS CMK in order to encrypt its build output artifacts. By default, CodeBuild uses an AWS Key Management Service CMK for Amazon S3 in your AWS account. If you do not want to use this CMK, you must create and configure a customer-managed CMK. For more information Creating keys.Codebuild cannot replace Jenkins, only Codepipeline can",
            "upvote_count": "81",
            "selected_answers": ""
          },
          {
            "id": 725968,
            "date": "Thu 24 Nov 2022 15:50",
            "username": "kyozanuro",
            "content": "Codebuild cannot replace Jenkins, only Codepipeline can",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 653103,
            "date": "Sun 28 Aug 2022 20:45",
            "username": "vagobago",
            "content": "For me, A is the right option. The question is not only about encryption of artefacts, but also about patching Jenkins EC 2 instance (SSM Manager required)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 650406,
            "date": "Mon 22 Aug 2022 21:11",
            "username": "hubekpeter",
            "content": "Read carefully. All of a company's internal quality control apps have been containerized. - I=E2=80=99m leaning more towards the option b. Jenkins is more similar to code pipeline, it=E2=80=99s a continuous integration/delivery/deployment tool where code deploy is continuous deployment tool only. So d is wrong, with option b, you will remove the os patching, configuration, security etc. overhead.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 329504,
            "date": "Fri 05 Nov 2021 18:15",
            "username": "devopp",
            "content": "D for me,<br>Q wants \\\"most maintainable\\\" which translates to more patching Jenkins, also Jenkins appears currently on EC2, not containerised, whereas CodeDeploy supports ECS.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 253124,
            "date": "Thu 04 Nov 2021 13:12",
            "username": "gmandala",
            "content": "D it is.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 233265,
            "date": "Mon 01 Nov 2021 20:40",
            "username": "svjlsvjl",
            "content": "C is correct-https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html<br>Also, the company has, already, containerized all of its in-house quality control applicationsencrypt on the build (just input the container) action",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 233268,
            "date": "Wed 03 Nov 2021 18:20",
            "username": "svjl",
            "content": "encrypt on the build (just input the container) action",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226744,
            "date": "Thu 28 Oct 2021 09:15",
            "username": "ags12345",
            "content": "I'll go with A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224470,
            "date": "Mon 25 Oct 2021 03:44",
            "username": "jackdryan",
            "content": "I'll go with D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 201832,
            "date": "Fri 15 Oct 2021 15:01",
            "username": "Steve_Dobbs",
            "content": "It's D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 184125,
            "date": "Sun 10 Oct 2021 02:00",
            "username": "FrankSparrow",
            "content": "yea, D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178864,
            "date": "Thu 07 Oct 2021 02:11",
            "username": "nqobza",
            "content": "D is the most maintainable",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 163495,
            "date": "Mon 04 Oct 2021 23:42",
            "username": "halfway",
            "content": "D. <br>CodeBuild do not need manual patch/upgrade, and can encrypt the artifacts",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 156676,
            "date": "Sat 25 Sep 2021 02:47",
            "username": "mail2raal",
            "content": "Answer should be D<br>Because putting jenkins again on ECS cluster should be needing patching or upgrading step. Which can be overcome through Code build AWS managed and also, encryption is possible from Codebuild configuration - https://docs.aws.amazon.com/codebuild/latest/userguide/security-encryption.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 155223,
            "date": "Mon 20 Sep 2021 01:44",
            "username": "Augustoosouza",
            "content": "Answer B. <br>Putting Jenkins on ECS and storing artifacts on S3.<br><br>https://docs.aws.amazon.com/pt_br/codepipeline/latest/userguide/S3-artifact-encryption.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#173",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is setting up a container-based architecture. The Engineer has decided to use AWS CloudFormation to automatically provision an Amazon<br>ECS cluster and an Amazon EC2 Auto Scaling group to launch the EC2 container instances. After successfully creating the CloudFormation stack, the Engineer noticed that, even though the ECS cluster and the EC2 instances were created successfully and the stack finished the creation, the EC2 instances were associating with a different cluster.<br>How should the DevOps Engineer update the CloudFormation template to resolve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#173",
            "answers": [
              {
                "choice": "<p>A. Reference the EC2 instances in the AWS::ECS::Cluster resource and reference the ECS cluster in the AWS::ECS::Service resource.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Reference the ECS cluster in the AWS::AutoScaling::LaunchConfiguration resource of the UserData property.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Reference the ECS cluster in the AWS::EC2::Instance resource of the UserData property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Reference the ECS cluster in the AWS::CloudFormation::CustomResource resource to trigger an AWS Lambda function that registers the EC2 instances with the appropriate ECS cluster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 173 discussion",
        "discusstion": [
          {
            "id": 158335,
            "date": "Sun 19 Sep 2021 23:18",
            "username": "Smart",
            "content": "B is correct",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 706516,
            "date": "Fri 28 Oct 2022 16:04",
            "username": "RightAnswers",
            "content": "Ans B<br>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 592005,
            "date": "Tue 26 Apr 2022 01:36",
            "username": "dishu2511dishu2511",
            "content": "I think it is A:<br>There is a property in AWS::ECS::Service, under which you can state the Cluster name.Please ignore, it is B",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 592008,
            "date": "Tue 26 Apr 2022 01:38",
            "username": "dishu2511",
            "content": "Please ignore, it is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 432655,
            "date": "Sun 07 Nov 2021 13:03",
            "username": "TonyGe",
            "content": "B, configure ecs.config file by using userdata:<br>ContainerInstances:<br>Type: AWS::AutoScaling::LaunchConfiguration<br>Properties:<br>ImageId: !Ref 'ECSAMI'<br>SecurityGroups: [!Ref 'ContainerSecurityGroup']<br>InstanceType: !Ref 'InstanceType'<br>IamInstanceProfile: !Ref 'EC2InstanceProfile'<br>UserData:<br>Fn::Base64: !Sub |<br>#!/bin/bash -xe<br>echo ECS_CLUSTER${ECSCluster} >> /etc/ecs/ecs.config",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 427870,
            "date": "Wed 20 Oct 2021 00:58",
            "username": "mx5",
            "content": "I think the answer is \\\"C\\\"<br>Because the instances will be restarted if UserData is changed in AWS::AutoScaling::LaunchConfiguration resource. \\\"Update requires: Replacement\\\" - please refer to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html#cfn-as-launchconfig-userdata<br><br>Though, if UserData gets updated in AWS::EC2::Instance resource existing instances will not get replaced. \\\"Update requires: Some interruptions\\\" - please refer to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html#cfn-ec2-instance-userdata",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224480,
            "date": "Tue 19 Oct 2021 18:58",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 219795,
            "date": "Fri 24 Sep 2021 21:54",
            "username": "xlFireman",
            "content": "B is the answer, the user data within the Launch Configuration of the Auto-scaling group will register new instances w/ the current cluster as they come online.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#174",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company indexes all of its Amazon CloudWatch Logs on Amazon ES and uses Kibana to view a dashboard for actionable insight. The company wants to restrict user access to Kibana by user.<br>Which actions can a DevOps Engineer take to meet this requirement? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#174",
            "answers": [
              {
                "choice": "<p>A. Create a proxy server with user authentication in an Auto Scaling group, and restrict access of the Amazon ES endpoint to an Auto Scaling group tag.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a proxy server with user authentication and an Elastic IP address, and restrict access of the Amazon ES endpoint to the IP address.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a proxy server with AWS IAM user, and restrict access of the Amazon ES endpoint to the IAM user.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS SSO to offer user name and password protection for Kibana.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use Amazon Cognito to offer user name and password protection for Kibana.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 174 discussion",
        "discusstion": [
          {
            "id": 224491,
            "date": "Tue 19 Oct 2021 00:54",
            "username": "jackdryanRightAnswers",
            "content": "I'll go with B,EYou can authenticate and protect your Amazon OpenSearch Service default installation of OpenSearch Dashboards using Amazon Cognito. Amazon Cognito authentication is optional and available only for domains using OpenSearch or Elasticsearch 5.1 or later. If you don't configure Amazon Cognito authentication, you can still protect Dashboards using an IP-based access policy and a proxy server, HTTP basic authentication, or SAML.",
            "upvote_count": "132",
            "selected_answers": ""
          },
          {
            "id": 517017,
            "date": "Tue 04 Jan 2022 22:55",
            "username": "RightAnswers",
            "content": "You can authenticate and protect your Amazon OpenSearch Service default installation of OpenSearch Dashboards using Amazon Cognito. Amazon Cognito authentication is optional and available only for domains using OpenSearch or Elasticsearch 5.1 or later. If you don't configure Amazon Cognito authentication, you can still protect Dashboards using an IP-based access policy and a proxy server, HTTP basic authentication, or SAML.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 155521,
            "date": "Wed 22 Sep 2021 07:19",
            "username": "jxp09tgvRightAnswers",
            "content": "CE https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html\\\"Create a proxy server with AWS IAM user\\\" doesn't make any senseB, E<br>Dashboards does not natively support IAM users and roles, but OpenSearch Service offers several solutions for controlling access to Dashboards:<br>Enable SAML authentication for Dashboards.<br>Use fine-grained access control with HTTP basic authentication.<br>(Ans E) Configure Configuring Amazon Cognito authentication for OpenSearch Dashboards.<br>(Ans B) For public access domains, configure an IP-based access policy, with or without a proxy server.<br>For VPC access domains, use an open access policy, with or without a proxy server, and security groups to control access. To learn more, see About access policies on VPC domains.",
            "upvote_count": "921",
            "selected_answers": ""
          },
          {
            "id": 418406,
            "date": "Sat 30 Oct 2021 10:38",
            "username": "tgv",
            "content": "\\\"Create a proxy server with AWS IAM user\\\" doesn't make any sense",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 517018,
            "date": "Tue 04 Jan 2022 22:57",
            "username": "RightAnswers",
            "content": "B, E<br>Dashboards does not natively support IAM users and roles, but OpenSearch Service offers several solutions for controlling access to Dashboards:<br>Enable SAML authentication for Dashboards.<br>Use fine-grained access control with HTTP basic authentication.<br>(Ans E) Configure Configuring Amazon Cognito authentication for OpenSearch Dashboards.<br>(Ans B) For public access domains, configure an IP-based access policy, with or without a proxy server.<br>For VPC access domains, use an open access policy, with or without a proxy server, and security groups to control access. To learn more, see About access policies on VPC domains.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 646892,
            "date": "Sun 14 Aug 2022 21:15",
            "username": "hubekpeter",
            "content": "https://aws.amazon.com/blogs/security/how-to-enable-secure-access-to-kibana-using-aws-single-sign-on/ The rest simply doesn=E2=80=99t make sense, basically you=E2=80=99re implementing another filtering layer which is unnecessary. Not to mention that something like iam auth on proxy doesn=E2=80=99t exist etc.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 574837,
            "date": "Fri 25 Mar 2022 07:53",
            "username": "dzenadcu",
            "content": "B & E are correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 401737,
            "date": "Sat 30 Oct 2021 07:31",
            "username": "MBJamesmx5",
            "content": "The correct answers are D and E, for sure.<br>The key point of the question is \\\"by user\\\".<br><br>A, B and C all introduce a reverse-proxy that allow access by tag, by ip address or by a single IAM user (which is not possible with reverse proxy).<br><br>Kibana supports Cognito and SAML-based authentication.<br>For SAML-based, you can use AWS SSO: https://aws.amazon.com/blogs/security/how-to-enable-secure-access-to-kibana-using-aws-single-sign-on/<br>For Cognito, it's right in the docs: https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.htmlD is incorrect because you will have to enable fine-grained access control. You can only enable fine-grained access control on new domains, not existing ones. By extension, this means you can only enable SAML authentication on new domains or existing ones that have fine-grained access control already enabled.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 427880,
            "date": "Sun 31 Oct 2021 12:49",
            "username": "mx5",
            "content": "D is incorrect because you will have to enable fine-grained access control. You can only enable fine-grained access control on new domains, not existing ones. By extension, this means you can only enable SAML authentication on new domains or existing ones that have fine-grained access control already enabled.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 347940,
            "date": "Thu 28 Oct 2021 15:06",
            "username": "JohnnieWalker",
            "content": "This question seems to be missing one more option to choose.<br>Option D is correct to use Cognito, but if you use Cognito there would be no need to have proxies, see the note on the link below: https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html#es-kibana-access<br><br>Note: Using a proxy to access Amazon ES from Kibana<br>This process is only applicable if your domain uses public access and you don't want to use Configuring Amazon Cognito authentication for Kibana. See Controlling access to Kibana.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 288757,
            "date": "Tue 26 Oct 2021 14:04",
            "username": "jyrajan",
            "content": "CE.  Clearly states restrict by User.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 233277,
            "date": "Tue 19 Oct 2021 20:25",
            "username": "svjl",
            "content": "C and E are correct: requirement is \\\" restrict user access to Kibana by user.\\\" By USER. IP is an additional policy to provide access BY Proxy<br>https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html#es-kibana-access",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209815,
            "date": "Thu 14 Oct 2021 16:01",
            "username": "ChauPhanChauPhanChauPhan",
            "content": "C and ESorry, change to BE because<br>Controlling Access to Kibana<br>Kibana does not natively support IAM users and roles, but Amazon ES offers several solutions for controlling access to Kibana:<br><br>Enable SAML authentication for Kibana.<br><br>Use fine-grained access control with HTTP basic authentication.<br><br>Configure Amazon Cognito Authentication for Kibana.<br><br>For public access domains, configure an IP-based access policy, with or without a proxy server.<br><br>For VPC access domains, use an open access policy, with or without a proxy server, and security groups to control access. To learn more, see About Access Policies on VPC Domains.https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html",
            "upvote_count": "182",
            "selected_answers": ""
          },
          {
            "id": 209817,
            "date": "Fri 15 Oct 2021 11:30",
            "username": "ChauPhanChauPhan",
            "content": "Sorry, change to BE because<br>Controlling Access to Kibana<br>Kibana does not natively support IAM users and roles, but Amazon ES offers several solutions for controlling access to Kibana:<br><br>Enable SAML authentication for Kibana.<br><br>Use fine-grained access control with HTTP basic authentication.<br><br>Configure Amazon Cognito Authentication for Kibana.<br><br>For public access domains, configure an IP-based access policy, with or without a proxy server.<br><br>For VPC access domains, use an open access policy, with or without a proxy server, and security groups to control access. To learn more, see About Access Policies on VPC Domains.https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html",
            "upvote_count": "82",
            "selected_answers": ""
          },
          {
            "id": 209818,
            "date": "Sun 17 Oct 2021 11:06",
            "username": "ChauPhan",
            "content": "https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-kibana.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 178817,
            "date": "Mon 11 Oct 2021 15:55",
            "username": "Kitty0403",
            "content": "BE is the solution",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 163502,
            "date": "Mon 11 Oct 2021 00:21",
            "username": "halfway",
            "content": "BE. <br>Proxy with authentication + security group to control access.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 162444,
            "date": "Sat 02 Oct 2021 02:17",
            "username": "getawaycargetawaycarmx5",
            "content": "DE<br><br>From your link, jxp09<br><br>Kibana does not natively support IAM users and roles, but Amazon ES offers several solutions for controlling access to Kibana:<br><br>Public access=09<br>- Configure Amazon Cognito Authentication for Kibana.<br>- Configure an IP-based access policy, with or without a proxy server.<br><br>VPC access=09<br>- Configure Amazon Cognito Authentication for Kibana.<br>- Configure an open access policy, with or without a proxy server, and use security groups to control access. To learn more, see About Access Policies on VPC Domains.BE, sorry, mistypedD is incorrect because you will have to enable fine-grained access control. You can only enable fine-grained access control on new domains, not existing ones. By extension, this means you can only enable SAML authentication on new domains or existing ones that have fine-grained access control already enabled.",
            "upvote_count": "241",
            "selected_answers": ""
          },
          {
            "id": 162445,
            "date": "Sun 03 Oct 2021 18:32",
            "username": "getawaycar",
            "content": "BE, sorry, mistyped",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 427883,
            "date": "Mon 01 Nov 2021 05:04",
            "username": "mx5",
            "content": "D is incorrect because you will have to enable fine-grained access control. You can only enable fine-grained access control on new domains, not existing ones. By extension, this means you can only enable SAML authentication on new domains or existing ones that have fine-grained access control already enabled.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#175",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's DevOps team launches a WorkSpace using Amazon WorkSpaces for each new user. Recently, the Security team said that WorkSpaces for these new users are not consistently being tagged. Company policy requires that all WorkSpaces be tagged with USERNAME automatically upon creation.<br>Which combination of steps should the DevOps Engineer take to address this requirement? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#175",
            "answers": [
              {
                "choice": "<p>A. Add an AWS Lambda function policy allowing cloudtrail.amazonaws.com to use the lambda:InvokeFunction action.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new Amazon CloudWatch Events event pattern rule based on Amazon WorkSpaces with an AWS API Call via CloudTrail event type. Select the CreateWorkspaces operation, and target an AWS Lambda function that will tag the Workspace.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure AWS CloudTrail is enabled in all Regions where WorkSpaces are created.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable custom tagging for Amazon WorkSpaces from the directory details.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create a new Amazon CloudWatch Events scheduled event rule based on Amazon WorkSpaces with an interval of 1 minute. Target an AWS Lambda function that will tag the Workspace.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 175 discussion",
        "discusstion": [
          {
            "id": 163517,
            "date": "Tue 21 Sep 2021 03:58",
            "username": "halfway",
            "content": "BC. <br>CloudTrail is enabled by default. So C seems not necessary, but the wording of D is wrong, tagging is a function that cannot be enabled or disabled. If I have to choose between C and D, I prefer C. ",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 347963,
            "date": "Tue 02 Nov 2021 11:31",
            "username": "JohnnieWalkerjustfmm",
            "content": "AB are the ones that make more sense to me.A.  Add an AWS Lambda function policy allowing cloudtrail.amazonaws.com to use the lambda:InvokeFunction action. (Make sense, we need to give access to cloudtrail to invoke the lambda function - https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)B.  Create a new Amazon CloudWatch Events event pattern rule based on Amazon WorkSpaces with an AWS API Call via CloudTrail event type. Select the CreateWorkspaces operation, and target an AWS Lambda function that will tag the Workspace. (make sense, the lambda function will do the tagging)C.  Ensure AWS CloudTrail is enabled in all Regions where WorkSpaces are created. (I think cloudtrail is enabled by default, so doesn't make sense)D.  Enable custom tagging for Amazon WorkSpaces from the directory details. (I think tags are enabled by default, it doesn't make sense)E.  Create a new Amazon CloudWatch Events scheduled event rule based on Amazon WorkSpaces with an interval of 1 minute. Target an AWS Lambda function that will tag the Workspace. (schedule doesn't make sense)For A, Shouldnt it be cloudwatch invoking Lambda instead of cloudtrail ?",
            "upvote_count": "62",
            "selected_answers": ""
          },
          {
            "id": 464491,
            "date": "Sat 06 Nov 2021 23:48",
            "username": "justfmm",
            "content": "For A, Shouldnt it be cloudwatch invoking Lambda instead of cloudtrail ?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 650405,
            "date": "Mon 22 Aug 2022 21:09",
            "username": "kowalkowal",
            "content": "AB<br>C - wrong - CloudTrail is enabled on your AWS account when you create it. Event history allows you to view, search, and download the past 90 days of activity in your AWS account.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 641300,
            "date": "Tue 02 Aug 2022 16:23",
            "username": "hubekpeter",
            "content": "https://aws.amazon.com/blogs/mt/auto-tag-aws-resources/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 616779,
            "date": "Wed 15 Jun 2022 15:25",
            "username": "nqthien041292",
            "content": "Vote BC",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 586526,
            "date": "Sat 16 Apr 2022 03:17",
            "username": "phuchoang",
            "content": "This Old question, CloudWatch Events replaced by EventBridge.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 502640,
            "date": "Thu 16 Dec 2021 05:55",
            "username": "GreatFunana",
            "content": "B is an obvious choice.<br><br>C would be correct... if CloudTrail wasn't enabled by default like it previously was. This would be more correct at this point if you need to make a cloud config rule that made sure it would STAY enabled.<br><br>B/E is correct, both would address this issue. E is a bit backward in its planning, but it would work to complete the task.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 277426,
            "date": "Sat 30 Oct 2021 09:43",
            "username": "Kaguar",
            "content": "bc. simply put Aws cloud trail can be used to analyze andtrace the APi calls made by the workspaces and lambda used to perform tagging on them.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253188,
            "date": "Sun 24 Oct 2021 08:34",
            "username": "gmandala",
            "content": "B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224494,
            "date": "Sun 17 Oct 2021 00:21",
            "username": "jackdryan",
            "content": "I'll go with B,C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 209823,
            "date": "Sat 16 Oct 2021 12:25",
            "username": "ChauPhan",
            "content": "BC is fine",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 202122,
            "date": "Fri 15 Oct 2021 05:57",
            "username": "gluchy85",
            "content": "Correct is B,C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 201140,
            "date": "Thu 30 Sep 2021 03:26",
            "username": "kj07",
            "content": "Answer BC<br>https://aws.amazon.com/blogs/security/how-to-automatically-tag-amazon-ec2-resources-in-response-to-api-events/<br>You need a CW event and ClouddTrail to be enabled.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178867,
            "date": "Sat 25 Sep 2021 23:33",
            "username": "nqobza",
            "content": "A and B surely",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158362,
            "date": "Sun 19 Sep 2021 23:38",
            "username": "Smart",
            "content": "B > E<br>A - Weird<br>C - CloudTrail is enabled by default.<br>D - Not Needed.<br><br>With select two options, I will go with B & D. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#176",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a mission-critical application on AWS that uses automatic scaling. The company wants the deployment lifecycle to meet the following parameters:<br>* The application must be deployed one instance at a time to ensure the remaining fleet continues to serve traffic.<br>* The application is CPU intensive and must be closely monitored.<br>* The deployment must automatically roll back if the CPU utilization of the deployment instance exceeds 85%.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#176",
            "answers": [
              {
                "choice": "<p>A. Use AWS CloudFormation to create an AWS Step Functions state machine and Auto Scaling lifecycle hooks to move to one instance at a time into a wait state. Use AWS Systems Manager automation to deploy the update to each instance and move it back into the Auto Scaling group using the heartbeat timeout.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CodeDeploy with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Use the CodeDeployDefault.OneAtAtime configuration as a deployment strategy. Configure automatic rollbacks within the deployment group to roll back the deployment if the alarm thresholds are breached.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Elastic Beanstalk for load balancing and AWS Auto Scaling. Configure an alarm tied to the CPU utilization metric. Configure rolling deployments with a fixed batch size of one instance. Enable enhanced health to monitor the status of the deployment and roll back based on the alarm previously created.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Systems Manager to perform a blue/green deployment with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Deploy updates one at a time. Configure automatic rollbacks within the Auto Scaling group to roll back the deployment if the alarm thresholds are breached.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 176 discussion",
        "discusstion": [
          {
            "id": 162439,
            "date": "Fri 08 Oct 2021 03:08",
            "username": "getawaycar",
            "content": "B - https://aws.amazon.com/about-aws/whats-new/2016/09/aws-codedeploy-introduces-deployment-monitoring-with-amazon-cloudwatch-alarms-and-automatic-deployment-rollback/<br><br>Apparently, Beanstalk cannot roll-back when a certain metric is hit (CPU utilization).",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 253191,
            "date": "Sun 31 Oct 2021 10:38",
            "username": "gmandala",
            "content": "B it is",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224499,
            "date": "Tue 26 Oct 2021 19:34",
            "username": "jackdryan",
            "content": "I'll go with B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 209829,
            "date": "Sat 16 Oct 2021 10:48",
            "username": "ChauPhan",
            "content": "Agree with B, EBS can't roll back the deployment based on CPU metrics. It may use health-check instead.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159489,
            "date": "Sun 26 Sep 2021 15:12",
            "username": "vijaiverma",
            "content": "C: rolling deployment and to serv the traffic",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158344,
            "date": "Mon 20 Sep 2021 18:07",
            "username": "Smart",
            "content": "B is correct (https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-create-alarms.html)",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#177",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is architecting a continuous development strategy for a company's software as a service (SaaS) web application running on AWS. For application and security reasons, users subscribing to this application are distributed across multiple Application Load Balancers (ALBs), each of which has a dedicated Auto Scaling group and fleet of Amazon EC2 instances. The application does not require a build stage, and when it is committed to AWS CodeCommit, the application must trigger a simultaneous deployment to all ALBs, Auto Scaling groups, and EC2 fleets.<br>Which architecture will meet these requirements with the LEAST amount of configuration?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#177",
            "answers": [
              {
                "choice": "<p>A. Create a single AWS CodePipeline pipeline that deploys the application in parallel using unique AWS CodeDeploy applications and deployment groups created for each ALB-Auto Scaling group pair.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a single AWS CodePipeline pipeline that deploys the application using a single AWS CodeDeploy application and single deployment group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a single AWS CodePipeline pipeline that deploys the application in parallel using a single AWS CodeDeploy application and unique deployment group for each ALB-Auto Scaling group pair.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS CodePipeline pipeline for each ALB-Auto Scaling group pair that deploys the application using an AWS CodeDeploy application and deployment group created for the same ALB-Auto Scaling group pair.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 177 discussion",
        "discusstion": [
          {
            "id": 163546,
            "date": "Tue 05 Oct 2021 03:10",
            "username": "halfway",
            "content": "C. <br>Ref: https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups.html",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 347986,
            "date": "Sat 23 Oct 2021 01:46",
            "username": "JohnnieWalkerjustfmm",
            "content": "Why not B? The question states \\\"with the LEAST amount of configuration\\\". Shouldn't be ok to just have a single deployment group? Isn't it the LEAST amount of configuration compared to the others that you have to configure multiple groups?i may be wrong but a oodedeploy deployment group seems to be only able to select up to 10 Amazon EC2 Auto Scaling groups to deploy your application revision to.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 464504,
            "date": "Sat 30 Oct 2021 21:38",
            "username": "justfmm",
            "content": "i may be wrong but a oodedeploy deployment group seems to be only able to select up to 10 Amazon EC2 Auto Scaling groups to deploy your application revision to.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 266054,
            "date": "Wed 13 Oct 2021 00:48",
            "username": "solo18bnagaraja9099solo18",
            "content": "Why not A ?Can anyone explain ?C more efficient. You can add multiple deployment groups to the same application. Add parallel action for the same application with each deployment group.As my understand .A. parallelmultiple applications( each application consit of deployment group created for each ALB-Auto Scaling group pair)D.  parallel single application with multiple deployment groups",
            "upvote_count": "122",
            "selected_answers": ""
          },
          {
            "id": 280206,
            "date": "Fri 15 Oct 2021 17:47",
            "username": "bnagaraja9099solo18",
            "content": "C more efficient. You can add multiple deployment groups to the same application. Add parallel action for the same application with each deployment group.As my understand .A. parallelmultiple applications( each application consit of deployment group created for each ALB-Auto Scaling group pair)D.  parallel single application with multiple deployment groups",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 282584,
            "date": "Fri 22 Oct 2021 20:14",
            "username": "solo18",
            "content": "As my understand .A. parallelmultiple applications( each application consit of deployment group created for each ALB-Auto Scaling group pair)D.  parallel single application with multiple deployment groups",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 224502,
            "date": "Tue 12 Oct 2021 05:25",
            "username": "jackdryan",
            "content": "I'll go with C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 209830,
            "date": "Sat 09 Oct 2021 01:32",
            "username": "ChauPhan",
            "content": "C is fine",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158345,
            "date": "Sat 25 Sep 2021 01:51",
            "username": "Smart",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#178",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer needs to back up sensitive Amazon S3 objects that are stored within an S3 bucket with a private bucket policy using the S3 cross-region replication functionality. The objects need to be copied to a target bucket in a different AWS Region and account.<br>Which actions should be performed to enable this replication? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#178",
            "answers": [
              {
                "choice": "<p>A. Create a replication IAM role in the source account.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a replication IAM role in the target account.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add statements to the source bucket policy allowing the replication IAM role to replicate objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add statements to the target bucket policy allowing the replication IAM role to replicate objects.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set AccessControlTranslation.OwnerOverride to true in the replication configuration and add a statement to the target bucket policy allowing the replication IAM role to override object ownership.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Set AccessControlTranslation.Owner to destination in the replication configuration and add a statement to the target bucket policy allowing the replication IAM role to override object ownership.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 178 discussion",
        "discusstion": [
          {
            "id": 158356,
            "date": "Wed 22 Sep 2021 17:11",
            "username": "Smarthaison8x",
            "content": "ADF is correct<br><br>A: \\\"To read objects from the source bucket and replicate them to the destination bucket, Amazon S3 needs permissions to perform these tasks. You grant these permissions by creating an IAM role and specifying the role in your replication configuration.\\\"<br><br>D: \\\"When source and destination buckets aren't owned by the same accounts, the owner of the destination bucket must also add a bucket policy to grant the owner of the source bucket permissions to perform replication actions.\\\"<br><br>F: \\\"When different AWS accounts own the source and destination buckets, you can tell Amazon S3 to change the ownership of the replica to the AWS account that owns the destination bucket. This is called the owner override option. (https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html#repl-ownership-owneroverride-option)https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.htmlthanks! adf",
            "upvote_count": "131",
            "selected_answers": ""
          },
          {
            "id": 173645,
            "date": "Sun 26 Sep 2021 10:38",
            "username": "haison8x",
            "content": "thanks! adf",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 180670,
            "date": "Sun 26 Sep 2021 21:52",
            "username": "ayleeSteve_DobbsSteve_Dobbsrobbyyy",
            "content": "BCF<br>https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/?nc1h_lsBCF, thank you.https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.htmlPlease check point 1 in your link, It says \\\"in the source account\\\", create an AWS IAM customer managed policy that grants an IAM identity (user or role) proper permissions.<br>And check point 4, It says \\\"In the destination\\\" account, modify the bucket policy of the destination bucket to grant the source account permissions for uploading objects.<br>How can you vote for B and C?",
            "upvote_count": "8111",
            "selected_answers": ""
          },
          {
            "id": 201413,
            "date": "Thu 30 Sep 2021 15:32",
            "username": "Steve_DobbsSteve_Dobbs",
            "content": "BCF, thank you.https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 201414,
            "date": "Thu 07 Oct 2021 21:48",
            "username": "Steve_Dobbs",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521220,
            "date": "Tue 11 Jan 2022 02:56",
            "username": "robbyyy",
            "content": "Please check point 1 in your link, It says \\\"in the source account\\\", create an AWS IAM customer managed policy that grants an IAM identity (user or role) proper permissions.<br>And check point 4, It says \\\"In the destination\\\" account, modify the bucket policy of the destination bucket to grant the source account permissions for uploading objects.<br>How can you vote for B and C?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 324601,
            "date": "Thu 04 Nov 2021 21:45",
            "username": "devopsv2",
            "content": "ADF<br>https://medium.com/@dmitry.nefedov/aws-s3-cross-account-bucket-replication-from-a-bucket-with-full-objects-control-2a0109b90d94",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 311513,
            "date": "Mon 01 Nov 2021 14:19",
            "username": "Jordanro",
            "content": "A,D,F<br>follow these steps by link https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/?nc1h_ls<br>steps 1,2 - create IAM policy in the source account (A)<br>step 3In the destination account, set S3 Object Ownership on the destination bucket(F)<br>step 4. modify the bucket policy in the target account(D)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 307553,
            "date": "Wed 27 Oct 2021 12:13",
            "username": "rscloud",
            "content": "I=E2=80=99ll go with ACF<br>In the source account, create an AWS Identity and Access Management (IAM) customer managed policy that grants an IAM identity (user or role) proper permissions. IAM role should be in source account<br>https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/?nc1h_ls",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 292931,
            "date": "Wed 27 Oct 2021 02:11",
            "username": "BigMomma4752",
            "content": "Isthere a reason why ADF is not correct? Thanks",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 278209,
            "date": "Tue 26 Oct 2021 12:31",
            "username": "bnagaraja9099",
            "content": "ADF<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-walkthrough-3.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 266374,
            "date": "Mon 18 Oct 2021 19:13",
            "username": "solo18",
            "content": "ADF is right. Why choose B?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 262381,
            "date": "Sat 16 Oct 2021 11:10",
            "username": "GVGREAT",
            "content": "Answer is ADF<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-walkthrough-2.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html#setting-repl-config-crossacct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 232175,
            "date": "Thu 14 Oct 2021 05:09",
            "username": "jonsun",
            "content": "Should be ACF. <br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-walkthrough-2.html<br>https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-walkthrough-4.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 224723,
            "date": "Mon 11 Oct 2021 18:55",
            "username": "jackdryan",
            "content": "I'll go with B,C,F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209846,
            "date": "Mon 11 Oct 2021 18:07",
            "username": "ChauPhan",
            "content": "B,C,F looks fine",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 207597,
            "date": "Sat 09 Oct 2021 03:36",
            "username": "Dgix",
            "content": "It's BCF. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#181",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's popular global web application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB) using an Auto Scaling group. The company is launching a new feature and expects unpredictable spikes in web traffic. The site currently includes a large amount of media content, and the new feature adds the ability to submit ratings and comments that will be stored in a new Amazon DynamoDB table. A DevOps Engineer is tasked with ensuring the web application can scale with the increased traffic and workload<br>Which combination of steps will accomplish this? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#181",
            "answers": [
              {
                "choice": "<p>A. Configure an Amazon CloudFront distribution to cache the web application's static and dynamic content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the web application's ALB to cache content in Amazon ElastiCache, honoring the HTTP cache headers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Process the new ratings and comments asynchronously using Amazon SQS.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Replace the DynamoDB table with DynamoDB Accelerator to store the ratings and comments to reduce latency.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set up AWS Global Accelerator to cache static content and pass dynamic requests to the web application's ALB endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 181 discussion",
        "discusstion": [
          {
            "id": 158368,
            "date": "Mon 27 Sep 2021 05:35",
            "username": "Smart",
            "content": "Assuming that with new feature launch DynamoDB will have a lot of write traffic, I will choose option A & C",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 163581,
            "date": "Tue 05 Oct 2021 19:46",
            "username": "halfway",
            "content": "AC<br>A -> cache the contents<br>C -> make sure comments will not be lost. Also CloudWatch metric can trigger alarm to scale the ASG if there is no too many messages in SQS",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 649829,
            "date": "Sun 21 Aug 2022 18:55",
            "username": "hubekpeter",
            "content": "C will offload the ec2 instances. D is managed service for dynamo db similar to memcached and redis.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 554031,
            "date": "Tue 22 Feb 2022 22:38",
            "username": "hugo1111",
            "content": "A: I cannot agree that we should not cache the dynamic page. imagine you view a cache post the comments and ratings cannot be updated.<br>B: we cannot config ALB to cache content with ElasticCache<br>C: make sure the comments and ratings can be scaled<br>D: It is something like redis/memcached...caching the comments and ratings in memory, increasing the reading speed. (like the purpose of cloudfront but in db level. we should cache frequency used db records but not the dynamic pages)",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 224518,
            "date": "Fri 05 Nov 2021 10:59",
            "username": "jackdryan",
            "content": "I'll go with A,C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 209890,
            "date": "Wed 27 Oct 2021 21:32",
            "username": "ChauPhan",
            "content": "E.  NO > AWS Global Accelerator is a networking service that sends your user=E2=80=99s traffic through Amazon Web Service=E2=80=99s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested<br>D > No replace<br>B > ALB can't configure to cache into ElasticCache<br><br>So A,C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 207602,
            "date": "Wed 27 Oct 2021 02:02",
            "username": "DgixChauPhanChauPhan",
            "content": "C+E are the only ones that make sense. A doesn't work since CloudFront doesn't cache dynamic content. B & D are essentially gibberish in that they describe nonexistent features.CloudFront can, please refer to<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.htmlE is not relevant<br>AWS Global Accelerator is a networking service that sends your user=E2=80=99s traffic through Amazon Web Service=E2=80=99s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested, Global Accelerator=E2=80=99s automatic routing optimizations will help keep your packet loss, jitter, and latency consistently low.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 209891,
            "date": "Mon 01 Nov 2021 10:04",
            "username": "ChauPhan",
            "content": "CloudFront can, please refer to<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209892,
            "date": "Mon 01 Nov 2021 21:42",
            "username": "ChauPhan",
            "content": "E is not relevant<br>AWS Global Accelerator is a networking service that sends your user=E2=80=99s traffic through Amazon Web Service=E2=80=99s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested, Global Accelerator=E2=80=99s automatic routing optimizations will help keep your packet loss, jitter, and latency consistently low.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 201439,
            "date": "Mon 25 Oct 2021 23:52",
            "username": "kj07",
            "content": "Answer: AC<br>B - not possible<br>D - it is suitable only for read operations<br>E - A is a better option because the app is global",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 184133,
            "date": "Tue 19 Oct 2021 22:39",
            "username": "FrankSparrow",
            "content": "AC is the correct answer - remember the Company's app is global..hence using CloudFront suits the solution",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 165683,
            "date": "Sun 10 Oct 2021 04:38",
            "username": "skipbaylessfor3halfwaynqobza",
            "content": "Could option B also work?No. ElastiCache is a wrapper of memcached or Redis. You'll need to create your own client application to store/retrieve data. ALB cannot do it.We want to cache static content but not the dynamic in most cases. B is the correct answer imo.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 167519,
            "date": "Mon 11 Oct 2021 17:50",
            "username": "halfwaynqobza",
            "content": "No. ElastiCache is a wrapper of memcached or Redis. You'll need to create your own client application to store/retrieve data. ALB cannot do it.We want to cache static content but not the dynamic in most cases. B is the correct answer imo.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 178890,
            "date": "Sat 16 Oct 2021 21:35",
            "username": "nqobza",
            "content": "We want to cache static content but not the dynamic in most cases. B is the correct answer imo.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#183",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application that runs on Amazon EC2 instances behind an Application Load Balancer is deployed using AWS Elastic Beanstalk. During a recent rolling deployment, users experienced application errors even though application health checks were passing on all instances. A log analysis shows that the errors were caused by user requests being processed by two different versions of the application behind the same load balancer. The analysis also shows a recent change made the responses backward incompatible.<br>Which deployment method will address these issues?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#183",
            "answers": [
              {
                "choice": "<p>A. Update Elastic Beanstalk to deploy using the all at once method.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Update Elastic Beanstalk to deploy using the blue/green method.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update Elastic Beanstalk to deploy using the immutable method.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update Elastic Beanstalk to deploy using the rolling with additional batch method.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 183 discussion",
        "discusstion": [
          {
            "id": 172634,
            "date": "Fri 01 Oct 2021 10:47",
            "username": "incorrigble_maverickKitty0403hypermezanhsieh",
            "content": "I think answer should be B as application will then be behind separate load balancer and downtime can be avoided. Once the user is directed to a certain load balancer, as long as his/her session sticks with that LB, the version mismatch issue shouldnt occurAgree with B<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.htmlWith B we depend on DNS servers cache/TTL.<br>> After Elastic Beanstalk completes the swap operation, verify that the new environment responds when you try to connect to the old environment URL. However, do not terminate your old environment until the DNS changes are propagated and your old DNS records expire. DNS servers don't necessarily clear old records from their cache based on the time to live (TTL) you set on your DNS records.<br><br>So depending on clients DNS servers it is possible to receive requests to the old app version for sometime after CNAME swapping.But no matter which load balancer (the old and the new version), it serves a single version of the app, not mixed version of the app.",
            "upvote_count": "13621",
            "selected_answers": ""
          },
          {
            "id": 178734,
            "date": "Sat 02 Oct 2021 15:05",
            "username": "Kitty0403",
            "content": "Agree with B<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 194171,
            "date": "Wed 06 Oct 2021 05:42",
            "username": "hypermezanhsieh",
            "content": "With B we depend on DNS servers cache/TTL.<br>> After Elastic Beanstalk completes the swap operation, verify that the new environment responds when you try to connect to the old environment URL. However, do not terminate your old environment until the DNS changes are propagated and your old DNS records expire. DNS servers don't necessarily clear old records from their cache based on the time to live (TTL) you set on your DNS records.<br><br>So depending on clients DNS servers it is possible to receive requests to the old app version for sometime after CNAME swapping.But no matter which load balancer (the old and the new version), it serves a single version of the app, not mixed version of the app.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 204271,
            "date": "Thu 14 Oct 2021 02:15",
            "username": "zanhsieh",
            "content": "But no matter which load balancer (the old and the new version), it serves a single version of the app, not mixed version of the app.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 618293,
            "date": "Sat 18 Jun 2022 16:35",
            "username": "gr3y_matter",
            "content": "so question is bit confusing. BUT<br>IF IT WANTS BOTH THE VERSION OF APPLICATION - then go with \\\"Blue/Green\\\"<br>IF IT WANTS ONLY THE LATEST VERSION TO BE THERE - then go with \\\"Rolling with additional batches\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 612205,
            "date": "Mon 06 Jun 2022 08:19",
            "username": "nqthien041292",
            "content": "Vote B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 501066,
            "date": "Tue 14 Dec 2021 05:29",
            "username": "GreatFunana",
            "content": "Answer is B: Blue/Green does work with EB now, and minimizes downtime when moved to the new target ELB. <br>A) Wrong: possible traffic downtime.<br>C) New Instances are being built on the SAME ELB, thus a chance of failures can occur with different instances coming on-line (immutable is not immutable)<br>D) Rolling with additional batch: traffic is still be served on the same ELB, no guarantee of minimizing failures.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 401754,
            "date": "Sun 31 Oct 2021 21:07",
            "username": "MBJamesMBJames",
            "content": "it's A because EBS does not have a blue/green method.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br><br>Immutable will have one instance in new ALB running alongside old instances, so the problem of having multiple versions of applications will be present.<br>Same problem with rolling update with additional batch (addresses capacity issues, but still leaves multiple app versions running during deployment).<br><br>The only one that does not allow multiple versions of the app to run at the same time is A. Note that even if you use 2 different environments to do blue/green with EBS, you have to swap DNS which means that for some customers (depending on how long it takes for DNS to update), the problem of calls to different versions of the app at the same time will still be present.<br><br>A is the only solution that does not allow that problem.",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 404132,
            "date": "Wed 03 Nov 2021 02:02",
            "username": "MBJames",
            "content": "Note that even if you use 2 different environments to do blue/green with EBS, you have to swap DNS which means that for some customers (depending on how long it takes for DNS to update), the problem of calls to different versions of the app at the same time will still be present.<br><br>A is the only solution that does not allow that problem.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 387478,
            "date": "Sun 31 Oct 2021 09:47",
            "username": "D2",
            "content": "A makes sense",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 377953,
            "date": "Thu 28 Oct 2021 10:44",
            "username": "peddyua",
            "content": "A 100% it would lead to downtime and rollback issues but there is no requirements for that",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 329781,
            "date": "Tue 26 Oct 2021 23:09",
            "username": "devopp",
            "content": "Oh actually Elastic Beanstalk DOES support BlueGreen, refer https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html So then B is indeed valid.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 329775,
            "date": "Tue 26 Oct 2021 20:20",
            "username": "devopp",
            "content": "Oh, its AllAtOnce or Blue/Green, but Elastic Beanstalk doesnt really 'support' blue/green as a feature, so that leaves A. ",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 329773,
            "date": "Tue 26 Oct 2021 15:43",
            "username": "devopp",
            "content": "Its B, since DNS Swap can be used like a switch betn blue and green...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 290898,
            "date": "Mon 25 Oct 2021 14:13",
            "username": "kyo",
            "content": "I think this answer is B. <br>C can be removed if the link below is true.<br>https://www.quora.com/Whats-the-difference-between-immutable-and-blue-green-deployments-on-AWS-Elastic-Beanstalk",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253241,
            "date": "Sat 23 Oct 2021 00:41",
            "username": "gmandala",
            "content": "Got to be B.  A is a disaster if the deployment is unsuccessful since you are triggering deployment to all (which no one would do in Prod in the first place), and rollback can be a mess.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 233172,
            "date": "Fri 22 Oct 2021 20:31",
            "username": "svjl",
            "content": "B - The old version will be terminated anyways. And A is the default EB option.<br>Explained: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html<br>Traffic-splitting (canaries, blue/green)deployments let you perform canary testing as part of your application deployment. In a traffic-splitting deployment, Elastic Beanstalk launches a full set of new instances just like during an immutable deployment. It then forwards a specified percentage of incoming client traffic to the new application version for a specified evaluation period. If the new instances stay healthy, Elastic Beanstalk forwards all traffic to them and terminates the old ones. If the new instances don't pass health checks, or if you choose to abort the deployment, Elastic Beanstalk moves traffic back to the old instances and terminates the new ones. There's never any service interruption",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 229057,
            "date": "Fri 22 Oct 2021 12:51",
            "username": "cloudyland",
            "content": "I go with B.  Blue/Green is the recommended approach of handling incompatible platform change. A has downtime, C and D don't solve the problem of serving both old and new version at the same time.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environmentmgmt-updates-immutable.html<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 224549,
            "date": "Thu 21 Oct 2021 06:13",
            "username": "jackdryan",
            "content": "I'll go with A",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 211050,
            "date": "Mon 18 Oct 2021 23:58",
            "username": "cinnamond3",
            "content": "A.  but downtime needed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 210033,
            "date": "Fri 15 Oct 2021 23:51",
            "username": "ChauPhan",
            "content": "A is fine, even it is DT.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#184",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps Engineer is tasked with moving a mission-critical business application running in Go to AWS. The Development team running this application is understaffed and requires a solution that allows the team to focus on application development. They also want to enable blue/green deployments and perform A/B testing.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#184",
            "answers": [
              {
                "choice": "<p>A. Deploy the application on an Amazon EC2 instance and create an AMI of this instance. Use this AMI to create an automatic scaling launch configuration that is used in an Auto Scaling group. Use an Elastic Load Balancer to distribute traffic. When changes are made to the application, a new AMI is created and replaces the launch configuration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Lightsail to deploy the application. Store the application in a zipped format in an Amazon S3 bucket. Use this zipped version to deploy new versions of the application to Lightsail. Use Lightsail deployment options to manage the deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CodePipeline with AWS CodeDeploy to deploy the application to a fleet of Amazon EC2 instances. Use an Elastic Load Balancer to distribute the traffic to the EC2 instances. When making changes to the application, upload a new version to CodePipeline and let it deploy the new version.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Elastic Beanstalk to host the application. Store a zipped version of the application in Amazon S3, and use that location to deploy new versions of the application using Elastic Beanstalk to manage the deployment options.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 184 discussion",
        "discusstion": [
          {
            "id": 160826,
            "date": "Tue 21 Sep 2021 05:45",
            "username": "mousa1212",
            "content": "D - beanstalk has blue/green and a/b testing (canary) and it is less overhead than the others",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 514799,
            "date": "Sun 02 Jan 2022 04:10",
            "username": "nqthien041292",
            "content": "Vote D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 253245,
            "date": "Fri 05 Nov 2021 09:38",
            "username": "gmandala",
            "content": "D it is",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224551,
            "date": "Sun 24 Oct 2021 02:03",
            "username": "jackdryan",
            "content": "I'll go with D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 210034,
            "date": "Thu 14 Oct 2021 08:41",
            "username": "ChauPhan",
            "content": "D is the only one fixed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 201449,
            "date": "Sun 10 Oct 2021 13:32",
            "username": "kj07",
            "content": "Answer: D<br>The easiest solution is to use EB. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 184136,
            "date": "Sat 09 Oct 2021 05:59",
            "username": "FrankSparrow",
            "content": "D. .EB supports B/G deployments and allows you to easily deploy your app/code",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178898,
            "date": "Mon 04 Oct 2021 21:21",
            "username": "nqobza",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 178301,
            "date": "Tue 28 Sep 2021 18:34",
            "username": "bp339",
            "content": "D looks more suitable<br>https://aws.amazon.com/quickstart/architecture/blue-green-deployment/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 170700,
            "date": "Fri 24 Sep 2021 08:15",
            "username": "jing8",
            "content": "D for me as well",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 158383,
            "date": "Sun 19 Sep 2021 20:00",
            "username": "Smart",
            "content": "None of them support A/B testing. EBS has new feature - traffic splitting -but that is limited to 10 hrs.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#185",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company is looking for ways to deploy an application on AWS that satisfies the following requirements:<br>-Has a simple and automated application deployment process.<br>-Has minimal deployment costs while ensuring that at least half of the instances are available to receive end-user requests.<br>-If the application fails, an automated healing mechanism will replace the affected instances.<br>Which deployment strategy will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#185",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Elastic Beanstalk environment and configure it to use Auto Scaling and an Elastic Load Balancer. Use rolling deployments with a batch size of 50%.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS OpsWorks stack. Configure the application layer to use rolling deployments as a deployment strategy. Add an Elastic Load Balancing layer. Enable auto healing on the application layer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use the CodeDeployDefault.HalfAtAtime deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use a blue/green deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 185 discussion",
        "discusstion": [
          {
            "id": 401764,
            "date": "Thu 21 Oct 2021 13:29",
            "username": "MBJamesmx5tgv",
            "content": "I'll go for C. <br>EBS does not support percentages in the batch size, so one cannot specify \\\"50%\\\". It can be done with CodeDeploy though.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.htmlEBS does support batch size percentages.<br>For example, to deploy 25 percent of all instances in each batch, specify the following options and values.<br><br>Example .ebextensions/rolling-updates.config<br><br>option_settings:<br>aws:elasticbeanstalk:command:<br>DeploymentPolicy: Rolling<br>BatchSizeType: Percentage<br>BatchSize: 25<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.htmlBeanstalk DOES support percentages in batch size:<br>\\\"Batch size =E2=80=93 The size of the set of instances to deploy in each batch.<br><br>Choose Percentage to configure a percentage of the total number of EC2 instances in the Auto Scaling group (up to 100 percent), or choose Fixed to configure a fixed number of instances (up to the maximum instance count in your environment's Auto Scaling configuration).\\\"<br>Source: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1032",
            "selected_answers": ""
          },
          {
            "id": 428414,
            "date": "Tue 26 Oct 2021 02:37",
            "username": "mx5",
            "content": "EBS does support batch size percentages.<br>For example, to deploy 25 percent of all instances in each batch, specify the following options and values.<br><br>Example .ebextensions/rolling-updates.config<br><br>option_settings:<br>aws:elasticbeanstalk:command:<br>DeploymentPolicy: Rolling<br>BatchSizeType: Percentage<br>BatchSize: 25<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 417259,
            "date": "Mon 25 Oct 2021 18:21",
            "username": "tgv",
            "content": "Beanstalk DOES support percentages in batch size:<br>\\\"Batch size =E2=80=93 The size of the set of instances to deploy in each batch.<br><br>Choose Percentage to configure a percentage of the total number of EC2 instances in the Auto Scaling group (up to 100 percent), or choose Fixed to configure a fixed number of instances (up to the maximum instance count in your environment's Auto Scaling configuration).\\\"<br>Source: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 377957,
            "date": "Tue 05 Oct 2021 07:55",
            "username": "peddyuabobsmith2000",
            "content": "simple automated and half..... it's Elastic Beanstalk with batch size 50%<br>answer is AYou must Ed FULLY automated. EB isn't fully automated",
            "upvote_count": "81",
            "selected_answers": ""
          },
          {
            "id": 544035,
            "date": "Wed 09 Feb 2022 20:11",
            "username": "bobsmith2000",
            "content": "You must Ed FULLY automated. EB isn't fully automated",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 561297,
            "date": "Sat 05 Mar 2022 09:04",
            "username": "[Removed]",
            "content": "easier than option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 544900,
            "date": "Thu 10 Feb 2022 23:21",
            "username": "blueorca",
            "content": "C, 50% nodes available, ASG + health check for self healing, fully automated",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 508966,
            "date": "Sat 25 Dec 2021 06:52",
            "username": "Jaxjd",
            "content": "D - This suits most - easily rollback and support health check<br><br>They have mentioned half of system should be online to handle traffic whereas CodeDeployDefault.HalfAtAtime, this will deploy on half of the instances.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 456307,
            "date": "Sun 07 Nov 2021 14:23",
            "username": "RLai",
            "content": "Ans: A.  On EBS you can se the batchsize to 50 and batchsizetype to percentage when doing rolling deployment",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401603,
            "date": "Mon 18 Oct 2021 22:49",
            "username": "AwsSuperTrooper",
            "content": "Answer A:<br><br>With rolling deployments, Elastic Beanstalk splits the environment's Amazon EC2 instances into batches and deploys the new version of the application to one batch at a time.<br><br>See https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 391166,
            "date": "Wed 13 Oct 2021 02:54",
            "username": "nojis56937nojis56937mx5mx5",
            "content": "For \\\"A\\\" Minimum capacity should be mentioned but not Batch sizeAlso in A no application aware health check statedvalid concern. If no health check URL is configured on the LB, new instances will pass the health check as soon as they can accept a TCP connection.Batch size would work in this case.<br><br>For example, to deploy 50 percent of all instances in each batch, specify the following options and values.<br><br>Example .ebextensions/rolling-updates.config<br><br>option_settings:<br>aws:elasticbeanstalk:command:<br>DeploymentPolicy: Rolling<br>BatchSizeType: Percentage<br>BatchSize: 50<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1111",
            "selected_answers": ""
          },
          {
            "id": 391178,
            "date": "Wed 13 Oct 2021 19:14",
            "username": "nojis56937mx5",
            "content": "Also in A no application aware health check statedvalid concern. If no health check URL is configured on the LB, new instances will pass the health check as soon as they can accept a TCP connection.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 428416,
            "date": "Fri 29 Oct 2021 11:56",
            "username": "mx5",
            "content": "valid concern. If no health check URL is configured on the LB, new instances will pass the health check as soon as they can accept a TCP connection.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428415,
            "date": "Wed 27 Oct 2021 22:37",
            "username": "mx5",
            "content": "Batch size would work in this case.<br><br>For example, to deploy 50 percent of all instances in each batch, specify the following options and values.<br><br>Example .ebextensions/rolling-updates.config<br><br>option_settings:<br>aws:elasticbeanstalk:command:<br>DeploymentPolicy: Rolling<br>BatchSizeType: Percentage<br>BatchSize: 50<br><br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381859,
            "date": "Sun 10 Oct 2021 11:18",
            "username": "okida",
            "content": "I'll go to A<br>D is not suitable for the requirement: Has minimal deployment costs while ensuring that at least half of the instances are available to receive end-user requests.<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 329843,
            "date": "Sun 26 Sep 2021 22:18",
            "username": "devopp",
            "content": "i mean Q says \\\"ensuring half of the instances available\\\"...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 329841,
            "date": "Fri 24 Sep 2021 01:19",
            "username": "devopppeddyuashammousbobsmith2000mx5",
            "content": "Yep its C, since batch size of 50% can only be CodeDeployDefault.HalfAtAtimeCodedeploy is not that simple compared to EBTrue, but option A doesn't mention ELB health check. Option C is less simple but satisfies the 3 requirements.Agreed.<br>- fully automated<br>- cheap<br>- self-healingI am leaning towards C as well.<br>A - nothing has been mentioned about LB health checks configuration. in this case, new instances will be added to the LB without health checks<br>B - is not simple and may not work at all.<br>D - pricing overhead with Blue/Green deployment option",
            "upvote_count": "11111",
            "selected_answers": ""
          },
          {
            "id": 377959,
            "date": "Sat 09 Oct 2021 03:53",
            "username": "peddyuashammous",
            "content": "Codedeploy is not that simple compared to EBTrue, but option A doesn't mention ELB health check. Option C is less simple but satisfies the 3 requirements.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 448329,
            "date": "Thu 04 Nov 2021 12:54",
            "username": "shammous",
            "content": "True, but option A doesn't mention ELB health check. Option C is less simple but satisfies the 3 requirements.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 544036,
            "date": "Wed 09 Feb 2022 20:15",
            "username": "bobsmith2000",
            "content": "Agreed.<br>- fully automated<br>- cheap<br>- self-healing",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428419,
            "date": "Tue 02 Nov 2021 02:51",
            "username": "mx5",
            "content": "I am leaning towards C as well.<br>A - nothing has been mentioned about LB health checks configuration. in this case, new instances will be added to the LB without health checks<br>B - is not simple and may not work at all.<br>D - pricing overhead with Blue/Green deployment option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310206,
            "date": "Thu 23 Sep 2021 00:34",
            "username": "Rajarshi",
            "content": "ans is c",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#186",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is tasked with migrating Docker containers used for a workload to AWS. The solution must allow for changes to be deployed into development and test environments automatically by updating each container and checking it into a container registry. Once the containers are pushed, they must be deployed automatically.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#186",
            "answers": [
              {
                "choice": "<p>A. Store container images in Amazon S3. Run the containers in AWS Elastic Beanstalk using a multicontainer Docker environment. Configure Elastic Beanstalk to redeploy the containers if it detects a new version in Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store container images in AWS Artifact. Use AWS CodePipeline to trigger a deployment if a new container version is created. Use AWS CodeDeploy to deploy new containers to Amazon EKS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store container images in Amazon ECR. Use AWS CodePipeline to trigger a deployment if a new container version is created. Use AWS CodeDeploy to deploy the image to AWS Fargate.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store container images in Docker Hub. Install Docker on an Amazon EC2 instance and use AWS CodePipeline and AWS CodeDeploy to deploy any new containers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 186 discussion",
        "discusstion": [
          {
            "id": 158384,
            "date": "Sat 25 Sep 2021 21:45",
            "username": "Smart",
            "content": "C is correct.",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 669823,
            "date": "Thu 15 Sep 2022 12:50",
            "username": "colinquek",
            "content": "ECR, use ECR",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 653835,
            "date": "Tue 30 Aug 2022 07:18",
            "username": "ablazleon",
            "content": "A.  Store container images in Amazon S3. Run the containers in AWS Elastic Beanstalk using a multicontainer Docker environment. Configure Elastic Beanstalk to redeploy the containers if it detects a new version in Amazon S3. > s3 is not the best practice place to storae the iamgesB.  Store container images in AWS Artifact. Use AWS CodePipeline to trigger a deployment if a new container version is created. Use AWS CodeDeploy to deploy new containers to Amazon EKS. > aws artifact, compliance with isosC.  Store container images in Amazon ECR. Use AWS CodePipeline to trigger a deployment if a new container version is created. Use AWS CodeDeploy to deploy the image to AWS Fargate.D.  Store container images in Docker Hub. Install Docker on an Amazon EC2 instance and use AWS CodePipeline and AWS CodeDeploy to deploy any new containers. > docker hub is not a best practice place",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 312125,
            "date": "Sun 31 Oct 2021 11:11",
            "username": "Jordanro",
            "content": "Chttps://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-ECR.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253246,
            "date": "Sun 31 Oct 2021 01:16",
            "username": "gmandala",
            "content": "C is right",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 224552,
            "date": "Sat 30 Oct 2021 02:07",
            "username": "jackdryan",
            "content": "I'll go with C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 210037,
            "date": "Fri 15 Oct 2021 03:40",
            "username": "ChauPhan",
            "content": "C is only way",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 204039,
            "date": "Tue 12 Oct 2021 16:27",
            "username": "kkonstan",
            "content": "Eyes closed C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 201450,
            "date": "Thu 07 Oct 2021 07:08",
            "username": "kj07",
            "content": "Answer: C is AWS way.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 166269,
            "date": "Sun 03 Oct 2021 19:27",
            "username": "examguru1",
            "content": "The answer is C<br>https://www.infoq.com/articles/aws-codepipeline-deploy-docker/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#187",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Development team wants to deploy an application using AWS CloudFormation stacks, but the Developer IAM role does not currently have the required permissions to provision the resources specified in the CloudFormation template. A DevOps Engineer is tasked with allowing Developers to deploy the stacks while following the principal of least privilege.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#187",
            "answers": [
              {
                "choice": "<p>A. Create an IAM policy that allows Developers to provision the required resources. Attach the policy to the Developer role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM policy that allows full access to CloudFormation. Attach the policy to the Developer role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CloudFormation service role that has the required permissions. Grant the developer IAM role a cloudformation:* action. Use the new service role during stack deployments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS CloudFormation service role that has the required permissions. Grant the developer IAM role the iam:PassRole permission. Use the new service role during stack deployments.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 187 discussion",
        "discusstion": [
          {
            "id": 354881,
            "date": "Sat 25 Sep 2021 01:10",
            "username": "LB",
            "content": "D<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 391197,
            "date": "Tue 05 Oct 2021 21:12",
            "username": "nojis56937GreatFunana",
            "content": "As per provided links iam:PassRole is for person how already has some permissions which of them (already assigned to this person) can be assigned to some object via a role, isn't it? In that case developers have to be granted the permissions before to pass them to the stack by the role. For me the answer should be C. \\\"A DevOps Engineer's responsibility is to enable Developers to deploy stacks while adhering to the principle of least privilege.\\\"<br><br>We are adhering to least privilege. If the CFN role can do the job, then that is good enough for the dev. Answer is D. ",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 509903,
            "date": "Mon 27 Dec 2021 00:32",
            "username": "GreatFunana",
            "content": "\\\"A DevOps Engineer's responsibility is to enable Developers to deploy stacks while adhering to the principle of least privilege.\\\"<br><br>We are adhering to least privilege. If the CFN role can do the job, then that is good enough for the dev. Answer is D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546656,
            "date": "Sun 13 Feb 2022 20:03",
            "username": "blueorca",
            "content": "D assume role is temporary so least privilege",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 519868,
            "date": "Sun 09 Jan 2022 03:38",
            "username": "herohiro",
            "content": "Why is A not right?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 443452,
            "date": "Wed 20 Oct 2021 12:18",
            "username": "jp99999",
            "content": "Let=E2=80=99s not make it too complicated. A would be the best answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 439374,
            "date": "Fri 15 Oct 2021 22:09",
            "username": "Chibuzo1",
            "content": "Read the question very well, The answer is C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 401766,
            "date": "Tue 05 Oct 2021 22:54",
            "username": "MBJames",
            "content": "D is the right way, real-life method of doing it.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 381903,
            "date": "Fri 01 Oct 2021 23:06",
            "username": "okida",
            "content": "I'll go to D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 362145,
            "date": "Sat 25 Sep 2021 17:50",
            "username": "Wrd123456789",
            "content": "Yes D, also see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#190",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer has automated a web service deployment using AWS CodePipeline with the following steps:<br>-An AWS CodeBuild project compiles the deployment artifact and runs unit tests.<br>-An AWS CodeDeploy deployment group deploys the web service to Amazon EC2 instances in the staging environment.<br>A CodeDeploy deployment group deploys the web service to EC2 instances in the production environment.<br><img src=\"https://www.examtopics.com/assets/media/exam-media/03760/0012000003.png\" class=\"in-exam-image\"><br>The quality assurance (QA) team has asked for permission to inspect the build artifact before the deployment to the production environment occurs. The QA team wants to run an internal automated penetration testing tool (invoked using a REST API call) to run some manual tests.<br>Which combination of actions will fulfill this request? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#190",
            "answers": [
              {
                "choice": "<p>A. Insert a manual approval action between the test and deployment actions of the pipeline.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the buildspec.yml file for the compilation stage to require manual approval before completion.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the CodeDeploy deployment group so it requires manual approval to proceed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Update the pipeline to directly trigger the REST API for the automated penetration testing tool.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Update the pipeline to invoke a Lambda function that triggers the REST API for the automated penetration testing tool.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 190 discussion",
        "discusstion": [
          {
            "id": 333714,
            "date": "Fri 15 Oct 2021 02:42",
            "username": "benLLPMBJames",
            "content": "I will go with A,EA and E are correct.<br>B: there is no approval process in CodeBuild<br>C: there is no approval process in CodeDeploy (remember, approvalsCodePipeline)<br>D: CodePipeline does not call rest API endpoint, you need a lambda (so E is correct)",
            "upvote_count": "237",
            "selected_answers": ""
          },
          {
            "id": 401770,
            "date": "Tue 02 Nov 2021 14:27",
            "username": "MBJames",
            "content": "A and E are correct.<br>B: there is no approval process in CodeBuild<br>C: there is no approval process in CodeDeploy (remember, approvalsCodePipeline)<br>D: CodePipeline does not call rest API endpoint, you need a lambda (so E is correct)",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 585184,
            "date": "Wed 13 Apr 2022 14:21",
            "username": "jj22222",
            "content": "I think A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 573045,
            "date": "Tue 22 Mar 2022 16:33",
            "username": "dzenadcu",
            "content": "A: Manual approval to stop the deployment before production.<br>E: To initiate Lambda function to run the test. CodePipeline cannot directly target the custom REST API, this action must go through a Lambda function.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 371580,
            "date": "Sat 30 Oct 2021 18:59",
            "username": "clevvve",
            "content": "B,E is the answer i'LL go with. did not mentione manual approval in the question.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 331333,
            "date": "Tue 28 Sep 2021 05:05",
            "username": "devopp",
            "content": "A B<br>B err best of poor choices, just maybe since manual script stop til QA \\\"inspect the build artifact\\\" ?<br>C nope<br>D,E run against req for \\\"some manual tests\\\" e.g. not pipeline automation ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 329852,
            "date": "Tue 21 Sep 2021 23:02",
            "username": "devopp",
            "content": "Struggling to make any sense of this Q, Only A is plausible given CodePipeline supports manual approval Action... ?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#191",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team manually builds an artifact locally and then places it in an Amazon S3 bucket. The application has a local cache that must be cleared when a deployment occurs. The team executes a command to do this, downloads the artifact from Amazon S3, and unzips the artifact to complete the deployment.<br>A DevOps team wants to migrate to a CI/CD process and build in checks to stop and roll back the deployment when a failure occurs. This requires the team to track the progression of the deployment.<br>Which combination of actions will accomplish this? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#191",
            "answers": [
              {
                "choice": "<p>A. Allow developers to check the code into a code repository. Using Amazon CloudWatch Events, on every pull into master, trigger an AWS Lambda function to build the artifact and store it in Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a custom script to clear the cache. Specify the script in the BeforeInstall lifecycle hook in the AppSpec file.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create user data for each Amazon EC2 instance that contains the clear cache script. Once deployed, test the application. If it is not successful, deploy it again.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up AWS CodePipeline to deploy the application. Allow developers to check the code into a code repository as a source for the pipeline.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS CodeBuild to build the artifact and place it in Amazon S3. Use AWS CodeDeploy to deploy the artifact to Amazon EC2 instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Use AWS Systems Manager to fetch the artifact from Amazon S3 and deploy it to all the instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 191 discussion",
        "discusstion": [
          {
            "id": 310247,
            "date": "Mon 20 Sep 2021 09:20",
            "username": "Rajarshi",
            "content": "ans is BDE",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 325752,
            "date": "Mon 27 Sep 2021 05:55",
            "username": "WhyIronMan",
            "content": "I'll go with B, D, E<br>B.  Create a custom script to clear the cache. Specify the script in the BeforeInstall lifecycle hook in the AppSpec file.D.  Set up AWS CodePipeline to deploy the application. Allow developers to check the code into a code repository as a source for the pipeline.E.  Use AWS CodeBuild to build the artifact and place it in Amazon S3. Use AWS CodeDeploy to deploy the artifact to Amazon EC2 instances.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 669041,
            "date": "Wed 14 Sep 2022 15:14",
            "username": "colinquek",
            "content": "B and E seem quite accepted alr so i wouldnt elaborate.<br>i select C over D becos:<br>1. C - there is a redeployment, no doubt in this instance the word \\\"deploy it again\\\" is not tt accurate. But this the closest indication of any roll back.<br>2. C over D becos CodePipeline is not for Deployment.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCE"
          },
          {
            "id": 651776,
            "date": "Thu 25 Aug 2022 13:37",
            "username": "colinquek",
            "content": "BDE by elimination of the other options",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 546800,
            "date": "Mon 14 Feb 2022 00:43",
            "username": "RightAnswerskyozanuro",
            "content": "Ans C, D, E<br>C - is the only option that tests for failed deployment. It also does clear cache.<br>D- Setup CodePipeline to deploy the application<br>E - CodeBuild to build the artifact and place on S3For C, user data only run one time when ec2 instance first booted.<br>So it cannot a good way to clear the cache (not all deployment need to terminate and launch a new ec2 instance)",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 726418,
            "date": "Fri 25 Nov 2022 06:51",
            "username": "kyozanuro",
            "content": "For C, user data only run one time when ec2 instance first booted.<br>So it cannot a good way to clear the cache (not all deployment need to terminate and launch a new ec2 instance)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 545872,
            "date": "Sat 12 Feb 2022 14:15",
            "username": "blueorca",
            "content": "Use CodePipeline CodeBuild and CodeDeploy, idiomatic",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BDE"
          },
          {
            "id": 429694,
            "date": "Wed 03 Nov 2021 16:09",
            "username": "thisdump",
            "content": "B, D, E 100% true",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 387511,
            "date": "Wed 27 Oct 2021 22:13",
            "username": "D2",
            "content": "Answer BDE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 374927,
            "date": "Tue 26 Oct 2021 19:10",
            "username": "RLai",
            "content": "B, D and E too",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 329891,
            "date": "Fri 08 Oct 2021 10:35",
            "username": "devopp",
            "content": "I think has to beB, D, E as well :@P",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#192",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A law firm is running a web application on AWS. The system manages legal documents uploaded by users, and stores the documents in Amazon S3. Users have complained that file uploads are taking too long and there are timeouts during peak usage. A DevOps engineer found that web servers are managing concurrent uploads and are overloaded.<br>Which actions should be taken to troubleshoot the issue in the MOST cost-effective manner?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#192",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CloudFront distribution in front of the web servers, and modify the application to upload to Amazon S3 using S3 Transfer Acceleration.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the application so the browser uses a signed URL to directly upload to Amazon S3 using multipart uploads.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CloudFront distribution in front of the web servers, and modify the application to store files in Amazon EFS in the Max I/O performance mode.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Place the web servers in an Amazon EC2 Auto Scaling group to include Spot Instances and modify the application to upload to Amazon S3 using multipart uploads.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 192 discussion",
        "discusstion": [
          {
            "id": 325766,
            "date": "Sat 16 Oct 2021 19:33",
            "username": "WhyIronManMBJamesshammousdevonqo",
            "content": "I'll go with A<br><br>Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.htmlA seems correct.<br>For D, remember this is about legal documents. So it's not likely that the firm can accept documents being lost due to spot instances terminating.S3 transfer accelerator is not cost effective. Spot instances and multipart uploads are (Option D). Also, CloudFront would have helped if used directly with S3 to serve static content (reports).It's D. <br>It wouldn't help you to speed up the upload with option A because the servers cannot keep up with the traffic, so you will only make the situation worse, you need more computing power which means more EC2s.",
            "upvote_count": "14121",
            "selected_answers": ""
          },
          {
            "id": 401785,
            "date": "Wed 27 Oct 2021 04:32",
            "username": "MBJames",
            "content": "A seems correct.<br>For D, remember this is about legal documents. So it's not likely that the firm can accept documents being lost due to spot instances terminating.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 448370,
            "date": "Sat 06 Nov 2021 23:29",
            "username": "shammous",
            "content": "S3 transfer accelerator is not cost effective. Spot instances and multipart uploads are (Option D). Also, CloudFront would have helped if used directly with S3 to serve static content (reports).",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 504736,
            "date": "Sun 19 Dec 2021 10:00",
            "username": "devonqo",
            "content": "It's D. <br>It wouldn't help you to speed up the upload with option A because the servers cannot keep up with the traffic, so you will only make the situation worse, you need more computing power which means more EC2s.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310249,
            "date": "Wed 22 Sep 2021 09:20",
            "username": "RajarshiWhyIronMan",
            "content": "ans is BThis is not the use case of signed urls",
            "upvote_count": "71",
            "selected_answers": ""
          },
          {
            "id": 325762,
            "date": "Tue 12 Oct 2021 18:46",
            "username": "WhyIronMan",
            "content": "This is not the use case of signed urls",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 668400,
            "date": "Tue 13 Sep 2022 22:27",
            "username": "kopper2019",
            "content": "For me it is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 543985,
            "date": "Wed 09 Feb 2022 19:03",
            "username": "blueorcablueorca",
            "content": "B to take out the concurrent load pressureAlso presigned URL is just valid for a short amount of time, perfectly secure.",
            "upvote_count": "51",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 543986,
            "date": "Wed 09 Feb 2022 19:03",
            "username": "blueorca",
            "content": "Also presigned URL is just valid for a short amount of time, perfectly secure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 539050,
            "date": "Wed 02 Feb 2022 18:48",
            "username": "bobsmith2000",
            "content": "Signed urls move web server out of the equation. So this is the cheapest option.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 517167,
            "date": "Wed 05 Jan 2022 05:24",
            "username": "SRTSRT",
            "content": "I'll go with B.  Reason being that questions mentions that the uploads are affected due to concurrent request to the web server, meaning that the web server is overwhelmed. Pre-signed URL would make sure that objects are uploaded directly to S3 and hence web server compute would not be exhausted.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 516045,
            "date": "Mon 03 Jan 2022 21:56",
            "username": "RightAnswers",
            "content": "Ans BA.  Uploading documents using CloudFront would be a better option. CloudFront internally uses S3 transfer acceeleration. But when considering cost, CloudFront + S3 Tranfer Acceleration doesn't make sense.B.  Web Servers are eliminated completely. Files are directly uploaded to S3. Pre-signed URLs can be generated for an S3 object, allowing only the owner of the URL to to the S3 object using HTTPS. Not only is this more secure due to the custom nature of the URL, but the available options also allow you to set an expiration on the URL, the default being one hour. This is the most cost effective option.C.  EFS is very expensive compared to S3D.  Spot instances are quite cost effectioption is still more expensive than option B.  There is zero cost of webservers in option B. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 433002,
            "date": "Thu 04 Nov 2021 14:15",
            "username": "TonyGe",
            "content": "This is actually a Solution Architect question.<br>A for sure, S3 transfer acceleration can speed up content transfers to and from Amazon S3.<br>Cloudfront is a globally scaled service and provides high transfer speeds.<br>D is incorrect because multipart uploads is used for large size uploading.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429857,
            "date": "Sun 31 Oct 2021 05:14",
            "username": "PatrickLi",
            "content": "B is the best option.<br>* The problem is the instances are having trouble handling the uploads<br>* Signed URLs can be used to upload the files, bypassing the instances completely while remain secure. https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 413146,
            "date": "Thu 28 Oct 2021 02:57",
            "username": "Texaspider",
            "content": "Is D - \\\" application to upload to Amazon S3 using multipart uploads.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 387514,
            "date": "Tue 26 Oct 2021 09:54",
            "username": "D2",
            "content": "Answer A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 377980,
            "date": "Fri 22 Oct 2021 13:33",
            "username": "peddyua",
            "content": "it's D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 372287,
            "date": "Tue 19 Oct 2021 16:25",
            "username": "sb333",
            "content": "I will go with D.  This answer solves the peak time issues with Auto Scaling, incorporates more affordable instances, and keeps file uploads from having to restart completely if an upload failure occurs.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 321975,
            "date": "Thu 30 Sep 2021 19:15",
            "username": "shady734WhyIronMan",
            "content": "Why not C? Elastic File System would be great with shared access https://aws.amazon.com/efs/That'a is not the use case of EFS. Also the questions asksfor \\\"MOST cost-effective manner\\\" EFS is more expensive than s3",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 325759,
            "date": "Tue 05 Oct 2021 00:33",
            "username": "WhyIronMan",
            "content": "That'a is not the use case of EFS. Also the questions asksfor \\\"MOST cost-effective manner\\\" EFS is more expensive than s3",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 312207,
            "date": "Sat 25 Sep 2021 18:27",
            "username": "JordanroyyypeddyuaWhyIronManJohnnieWalker",
            "content": "It could be A if you have either mobile applications with widespread users or web apps hosted far away from their S3 bucket but you also pay a fee for any data transferred using Amazon S3 Transfer Acceleration. No sense to host system applications far from the S3 basket.<br>B is insecure.<br>I will go with D.  Data Transfer IN To Amazon S3 From the Internet is free, Spot Instances inside ASG during peak good and cost-effective solution.In this case, spot instances are not a good choice. The approach has a problem with SLAquestion doesn't say anything about SLA.  Cost-effective is the keyAlso, if the application is in trouble managing parallel uploads, the multi-part upload will not help here, the problem will persiste.<br>Also, multipart upload is not recommended for small files.I will go with D too.A.  CloudFront and S3 Transfer Acceleration doesnt make sense, the question doesnt say anything about S3 transfer over long distances to use S3 Transfer Acceleration, also CloudFront wont help with the upload problem at all.B.  Signed URL and multipart uploads. Multipart uploads sounds good but not sure about the signed url and it wont help much if the web servers cannot scale.C.  CloudFront and EFS. CloudFront wont help with the upload problem at all and EFS is more expensive.D.  EC2 Auto Scaling group with Spot Instances and multipart uploads. Make sense, auto scaling will help, spot instances are the cheapest option and multipart uploads also helps by uploading parts in parallel to improve throughput. https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
            "upvote_count": "61122",
            "selected_answers": ""
          },
          {
            "id": 317521,
            "date": "Mon 27 Sep 2021 00:29",
            "username": "yyypeddyua",
            "content": "In this case, spot instances are not a good choice. The approach has a problem with SLAquestion doesn't say anything about SLA.  Cost-effective is the key",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 377979,
            "date": "Thu 21 Oct 2021 14:17",
            "username": "peddyua",
            "content": "question doesn't say anything about SLA.  Cost-effective is the key",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 325761,
            "date": "Tue 12 Oct 2021 04:13",
            "username": "WhyIronMan",
            "content": "Also, if the application is in trouble managing parallel uploads, the multi-part upload will not help here, the problem will persiste.<br>Also, multipart upload is not recommended for small files.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 350114,
            "date": "Tue 19 Oct 2021 02:32",
            "username": "JohnnieWalker",
            "content": "I will go with D too.A.  CloudFront and S3 Transfer Acceleration doesnt make sense, the question doesnt say anything about S3 transfer over long distances to use S3 Transfer Acceleration, also CloudFront wont help with the upload problem at all.B.  Signed URL and multipart uploads. Multipart uploads sounds good but not sure about the signed url and it wont help much if the web servers cannot scale.C.  CloudFront and EFS. CloudFront wont help with the upload problem at all and EFS is more expensive.D.  EC2 Auto Scaling group with Spot Instances and multipart uploads. Make sense, auto scaling will help, spot instances are the cheapest option and multipart uploads also helps by uploading parts in parallel to improve throughput. https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 309922,
            "date": "Mon 20 Sep 2021 06:27",
            "username": "rscloud",
            "content": "I=E2=80=99ll go with A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#193",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company is running an application on AWS. The company wants to create a standby disaster recovery solution in an additional Region that keeps the current application code. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an EC2 Auto<br>Scaling group across multiple Availability Zones. The database layer is hosted on an Amazon RDS MySQL Multi-AZ DB instance. Amazon Route 53 DNS records point to the ALB. <br>Which combination of actions will meet these requirements with the LOWEST cost? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#193",
            "answers": [
              {
                "choice": "<p>A. Configure a failover routing policy for the application DNS entry.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a geolocation routing policy for the application DNS entry.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a cross-Region RDS read replica in the new standby Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate the database layer to Amazon DynamoDB and enable global replication to the new standby Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Provision the ALB and Auto Scaling group in the new standby Region and set the desired capacity to match the active Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Provision the ALB and Auto Scaling group in the new standby Region and set the desired capacity to 1.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 193 discussion",
        "discusstion": [
          {
            "id": 589601,
            "date": "Thu 21 Apr 2022 21:39",
            "username": "[Removed]",
            "content": "low cost and works",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 545903,
            "date": "Sat 12 Feb 2022 14:47",
            "username": "blueorcablueorca",
            "content": "ACE is what keep the cost at lowest. Failover routing is for ALB. ACF, typo.",
            "upvote_count": "13",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 545904,
            "date": "Sat 12 Feb 2022 14:47",
            "username": "blueorca",
            "content": "ACF, typo.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 440332,
            "date": "Thu 04 Nov 2021 17:15",
            "username": "donny_sanjay",
            "content": "A,C,F LOW COST",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 429703,
            "date": "Tue 02 Nov 2021 13:19",
            "username": "thisdump",
            "content": "A, C, F",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 413148,
            "date": "Fri 29 Oct 2021 21:45",
            "username": "Texaspider",
            "content": "ACF low cost",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 387520,
            "date": "Fri 29 Oct 2021 17:53",
            "username": "D2",
            "content": "A, C, F",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 379118,
            "date": "Mon 25 Oct 2021 16:49",
            "username": "okida",
            "content": "I=E2=80=99ll go to A, C, F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 374935,
            "date": "Sat 23 Oct 2021 12:25",
            "username": "RLai",
            "content": "I will pick A, C, F",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 366555,
            "date": "Mon 18 Oct 2021 03:39",
            "username": "certmaster007",
            "content": "failover routing doesn't make sense because DB is still read replica.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 329896,
            "date": "Fri 15 Oct 2021 18:01",
            "username": "devopp",
            "content": "A, C, F (for standby)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 325769,
            "date": "Tue 12 Oct 2021 01:49",
            "username": "WhyIronMan",
            "content": "I'll go with A, C, F",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 312903,
            "date": "Wed 06 Oct 2021 04:30",
            "username": "faltu1985",
            "content": "Ans: ACF, We need to keep cost low and need to create standby dr",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 310254,
            "date": "Thu 23 Sep 2021 07:28",
            "username": "Rajarshi",
            "content": "ans: ACF",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 309958,
            "date": "Mon 20 Sep 2021 15:07",
            "username": "rscloudWhyIronMan",
            "content": "ACE looks goodE is more expensive than F, keeping the same number of servers is unnecessary, you can increase the number during the failover",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 325768,
            "date": "Sat 09 Oct 2021 16:50",
            "username": "WhyIronMan",
            "content": "E is more expensive than F, keeping the same number of servers is unnecessary, you can increase the number during the failover",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#194",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps engineer is creating a CI/CD pipeline for an Amazon ECS service. The ECS container instances run behind an Application Load Balancer as the web tier of a three-tier application. An acceptance criterion for a successful deployment is the verification that the web tier can communicate with the database and middleware tiers of the application upon deployment.<br>How can this be accomplished in an automated fashion?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#194",
            "answers": [
              {
                "choice": "<p>A. Create a health check endpoint in the web application that tests connectivity to the data and middleware tiers. Use this endpoint as the health check URL for the load balancer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an approval step for the quality assurance team to validate connectivity. Reject changes in the pipeline if there is an issue with connecting to the dependent tiers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon RDS active connection count and an Amazon CloudWatch ELB metric to alarm on a significant change to the number of open connections.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Route 53 health checks to detect issues with the web service and roll back the CI/CD pipeline if there is an error.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 194 discussion",
        "discusstion": [
          {
            "id": 637047,
            "date": "Tue 26 Jul 2022 03:29",
            "username": "sanjose",
            "content": "why not c?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 387523,
            "date": "Mon 01 Nov 2021 16:00",
            "username": "D2",
            "content": "Answer A",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 377983,
            "date": "Sat 30 Oct 2021 04:06",
            "username": "peddyua",
            "content": "A, the rest is heresy",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 325773,
            "date": "Thu 30 Sep 2021 21:35",
            "username": "WhyIronMan",
            "content": "I'll go with A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 312902,
            "date": "Tue 28 Sep 2021 04:21",
            "username": "faltu1985",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310257,
            "date": "Sat 25 Sep 2021 12:51",
            "username": "Rajarshi",
            "content": "ans: A",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#195",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A DevOps team wants to implement their containerized application using AWS. The deployment must meet the following requirements:<br>-There should be minimal downtime during deployment.<br>-The application must be functionally tested to be considered a success.<br>How can the DevOps team automate this deployment?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#195",
            "answers": [
              {
                "choice": "<p>A. Use AWS Elastic Beanstalk with a multi-Docker container solution stack. Select immutable updates as a deployment strategy. Select enhanced health as a monitoring type in the Elastic Beanstalk environment to ensure health checks are transmitted at deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon ECS cluster and service with an Application Load Balancer and an AWS CodeDeploy blue/green deployment type. Define a production port and a test port in Amazon ECS. Write an AWS Lambda function to test the application, and reference it within the AfterAllowTestTraffic hook in the appspec.yml.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS CloudFormation to provision Amazon EC2 instances behind an Application Load Balancer. Deploy the containers using Amazon ECS. Upon deployment, replicate the configuration in the new EC2 instances, perform testing, and switch traffic from the old Application Load Balancer to the new one using Amazon Route 53.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an Amazon ECS cluster and service along with Amazon EC2 instances and an Application Load Balancer. Select rolling update as a deployment strategy. Add a Docker health check within the task definition to ensure rollback if the health check fails.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 195 discussion",
        "discusstion": [
          {
            "id": 312239,
            "date": "Fri 08 Oct 2021 17:05",
            "username": "Jordanro",
            "content": "it's B<br>From Test listener port, choose the port and protocol of a test listener that serves traffic to the replacement task set in your Amazon ECS service during deployment. You can specify one or more Lambda funtions in the AppSpec file that run during the AfterAllowTestTraffic hook. The functions can run validation tests. If a validation test fails, a deployment rollback is triggered.<br>https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-groups-create-ecs.html",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 608889,
            "date": "Sun 29 May 2022 20:26",
            "username": "GCPWizard",
            "content": "Ans: B<br>check the link: https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-deployment-with-hooks.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 555308,
            "date": "Thu 24 Feb 2022 15:54",
            "username": "miketyz",
            "content": "Ans is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 544063,
            "date": "Wed 09 Feb 2022 21:01",
            "username": "blueorca",
            "content": "Should be B, D didn't mention anything about functional testing.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 445088,
            "date": "Tue 26 Oct 2021 14:47",
            "username": "passtest100",
            "content": "I prefer A=EF=BC=8C which seems more clear and simple.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 444007,
            "date": "Sun 17 Oct 2021 03:01",
            "username": "jp99999",
            "content": "It is referencing to blue/green deployment so the best answer is B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 387524,
            "date": "Sat 16 Oct 2021 06:38",
            "username": "D2",
            "content": "Answer B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 384616,
            "date": "Wed 13 Oct 2021 09:13",
            "username": "lilpurplepanda",
            "content": "B.  https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-deployment-with-hooks.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 329898,
            "date": "Wed 13 Oct 2021 05:18",
            "username": "devopp",
            "content": "B every day of the week, key 'Testing' req met w AfterAllowTestTraffic.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 325783,
            "date": "Sun 10 Oct 2021 22:59",
            "username": "WhyIronMan",
            "content": "I'll go with B<br>C is very very manual",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 312901,
            "date": "Sat 09 Oct 2021 18:27",
            "username": "faltu1985",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310260,
            "date": "Thu 07 Oct 2021 18:52",
            "username": "RajarshiWhyIronMan",
            "content": "ans is DD is wrong,<br><br>Select rolling update as a deployment strategy can cause unexpected downtimes if code is broken<br>also, it does not mention any tests or automated tests",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 325781,
            "date": "Sun 10 Oct 2021 13:53",
            "username": "WhyIronMan",
            "content": "D is wrong,<br><br>Select rolling update as a deployment strategy can cause unexpected downtimes if code is broken<br>also, it does not mention any tests or automated tests",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 309962,
            "date": "Thu 23 Sep 2021 13:53",
            "username": "rscloud",
            "content": "Option B<br>Blue/green, AfterAllowTest Traffic",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#199",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a legacy application running on AWS. The application can only run on one Amazon EC2 instance at a time. Application metadata is stored in<br>Amazon S3 and must be retrieved if the instance is restarted. The instance should be automatically restarted or relaunched if performance degrades.<br>Which solution will satisfy these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#199",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch alarm to monitor the EC2 instance. When the StatusCheckFailed system alarm is triggered, use the recover action to stop and start the instance. Use a trigger in Amazon S3 to push the metadata to the instance when it is back up and running.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the auto healing feature in AWS OpsWorks to stop and start the EC2 instance. Use a lifecycle event in OpsWorks to pull the data from Amazon S3 and update it on the instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the Auto Recovery feature in Amazon EC2 to automatically stop and start the EC2 instance in case of a failure. Use a trigger in Amazon S3 to push the metadata to the instance when it is back up and running.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS CloudFormation to create an EC2 instance that includes the user-data property for the EC2 resource. Add a command in user-data to retrieve the application metadata from Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS DevOps Engineer Professional topic 1 question 199 discussion",
        "discusstion": [
          {
            "id": 325817,
            "date": "Thu 30 Sep 2021 09:10",
            "username": "WhyIronMansg0206",
            "content": "I'll go with B<br><br>A) and C) are wrong because there is no such thing like:<br> \\\"Use a trigger in Amazon S3 to push the metadata to the instance when it is back up and running\\\"<br><br>There is no information about updating or putting a new metadata file to S3, so you can't create an event if nothing happens to the bucket.<br>Also there is no way to push from s3 to ec2 instance, that's not the case<br>D) is incompleteB is the answer and OpsWorks should know number of instances.",
            "upvote_count": "171",
            "selected_answers": ""
          },
          {
            "id": 512799,
            "date": "Wed 29 Dec 2021 23:24",
            "username": "sg0206",
            "content": "B is the answer and OpsWorks should know number of instances.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 668136,
            "date": "Tue 13 Sep 2022 16:26",
            "username": "colinquek",
            "content": "A & C - quite certain there is no S3 trigger?<br>D - there isnt any mention of monitoring of performance, hence how to restart the EC2?<br>Only left w/ B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 545537,
            "date": "Fri 11 Feb 2022 22:46",
            "username": "blueorcasatz_17",
            "content": "D is the right answer, auto recovery and auto healing are both intented for system failure, but the question was saying restart the instance based on performance.<br><br>https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autohealing.html<br>https://aws.amazon.com/blogs/aws/new-auto-recovery-for-amazon-ec2/#:~:textwhen%20the%20hardware%20that%20hosts%20a%20particular%20EC2%20instance%20becomes%20impairedEc2 user-data runs only during boot time. So option B",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 695532,
            "date": "Sat 15 Oct 2022 18:29",
            "username": "satz_17",
            "content": "Ec2 user-data runs only during boot time. So option B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 412735,
            "date": "Fri 05 Nov 2021 13:02",
            "username": "amehim",
            "content": "A & C are wrong since S3 by itself cannot push metadata. A script or Lambda may be required.<br>D is not automatic.<br>This leaves me with B by elimination.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 401804,
            "date": "Tue 02 Nov 2021 20:37",
            "username": "MBJames",
            "content": "D would never work because cloudformation userdata is only execute when the instance is created, not when it is restarted.<br>A/C don't make any sense for S3.<br><br>B is the only decent option left.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 398301,
            "date": "Sat 30 Oct 2021 06:20",
            "username": "NNHAN",
            "content": "The following AWS OpsWorks Stacks event types are supported in CloudWatch Events.<br>Instance state changes: Includes states such as =E2=80=9Crequested=E2=80=9D, =E2=80=9Conline=E2=80=9D, =E2=80=9Cstopped=E2=80=9D. <br>Command execution results: Includes states such as =E2=80=9Csuccessful=E2=80=9D, =E2=80=9Cfailed=E2=80=9D, =E2=80=9Cexpired=E2=80=9D. <br>Deployment results: Includes states such as =E2=80=9Crunning=E2=80=9D, =E2=80=9Csuccessful=E2=80=9D, =E2=80=9Cfailed=E2=80=9D. <br>Alerts: Indicates an OpsWorks Stacks service error was raised.<br><br>How can you detect degrade in OpsWorks?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 330168,
            "date": "Sat 09 Oct 2021 17:39",
            "username": "devopp",
            "content": "B<br>Option D is good but incomplete since doesnt address app degradation,restart...",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 317850,
            "date": "Mon 27 Sep 2021 18:10",
            "username": "yyyWhyIronMan",
            "content": "Ans: C<br>https://aws.amazon.com/blogs/mt/how-to-set-up-aws-opsworks-stacks-auto-healing-notifications-in-amazon-cloudwatch-events/You mention C) but your references are for B)",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 325818,
            "date": "Thu 07 Oct 2021 03:06",
            "username": "WhyIronMan",
            "content": "You mention C) but your references are for B)",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 316334,
            "date": "Sat 25 Sep 2021 23:51",
            "username": "1234567J",
            "content": "ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 310275,
            "date": "Sat 25 Sep 2021 05:46",
            "username": "Rajarshi",
            "content": "ans: B",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      }
    ]
  }