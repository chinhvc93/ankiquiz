var DOP_C01_Part2 = 
{
  "msg": "The questions for AWS DevOps Engineer Professional were last updated at Feb. 1, 2023.",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store proprietary information. The development team creates buckets for new projects on a daily basis. The security team wants to ensure that all existing and future buckets have encryption, logging, and versioning enabled. Additionally, no buckets should ever be publicly read or write accessible.<br><br>What should a DevOps engineer do to meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 784927,
          "date": "Mon 23 Jan 2023 04:16",
          "username": "Bulti",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
      "question_text": "<p>A company runs an application on one Amazon EC2 instance. Application metadata is stored in Amazon S3 and must be retrieved if the instance is restarted. The instance must restart or relaunch automatically if the instance becomes unresponsive.<br><br>Which solution will meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 785994,
          "date": "Tue 24 Jan 2023 01:04",
          "username": "Bulti",
          "content": "B is correct because A and C are technically incorrect and D is incomplete in terms of meeting the requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777784,
          "date": "Mon 16 Jan 2023 15:36",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/47002-exam-aws-devops-engineer-professional-topic-1-question-199/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 733484,
          "date": "Fri 02 Dec 2022 07:09",
          "username": "quixo",
          "content": "I'll go with B<br><br>A) and C) are wrong because there is no such thing like:<br>\\\"Use a trigger in Amazon S3 to push the metadata to the instance when it is back up and running\\\"<br><br>There is no information about updating or putting a new metadata file to S3, so you can't create an event if nothing happens to the bucket.<br>Also there is no way to push from s3 to ec2 instance, that's not the case<br>D) is incomplete",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732328,
          "date": "Thu 01 Dec 2022 07:26",
          "username": "SmileyCloud",
          "content": "While A and C seem straightforward, it doesn't say who's gonna trigger the S3 event notification. This event happens only if there is a change in S3, not EC2. <br>Looks strange, but B is the correct answer.",
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
      "question_text": "<p>A devops team uses AWS CloudFormation to build their infrastructure. The security team is concerned about sensitive parameters, such as passwords, being exposed.<br><br>Which combination of steps will enhance the security of AWS CloudFormation? (Choose three.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 785999,
          "date": "Tue 24 Jan 2023 01:13",
          "username": "Bulti",
          "content": "The main thing to understand here is either Secrets Manager or SSM parameter store should be used to encrypt sensitive information. Usually for passwords or cert keysuse Secrets Manager so that you can rotate the password or cert keyperiodicallyand for all other static sensitive data that doesn't need to change periodically use SSM parameter store.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
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
          "content": "BCF. <br>Why somebody picks \\\"D\\\" instead of \\\"C\\\" ? C = secure strings, D = simple strings. \\\"C\\\" should be correct",
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
      "question_text": "<p>A company has a mission-critical application on AWS that uses automatic scaling. The company wants the deployment lifecycle to meet the following parameters:<br><br>• The application must be deployed one instance at a time to ensure the remaining fleet continues to serve traffic.<br>• The application is CPU intensive and must be closely monitored.<br>• The deployment must automatically roll back if the CPU utilization of the deployment instance exceeds 85%.<br><br>Which solution will meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786030,
          "date": "Tue 24 Jan 2023 02:21",
          "username": "Bulti",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
      "question_text": "<p>A company's legacy application uses IAM user credentials to access resources in the company's AWS Organizations organization. A DevOps engineer must ensure that new IAM users cannot be created unless the employee who creates the IAM user is on an exception list.<br><br>Which solution will meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786035,
          "date": "Tue 24 Jan 2023 02:24",
          "username": "Bulti",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
          "content": "B.  <br>https://asecure.cloud/a/scp_deny_iam_user_creation_w_exception/",
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
      "question_text": "<p>A company must collect user consent to a privacy agreement. The company deploys an application in six AWS Regions: two Regions in North America, two Regions in Europe, and two Regions in Asia. The application has a user base of 20 million to 30 million users.<br><br>The company needs to read and write data that is related to each user's response. The company also must ensure that the responses are available in all six Regions.<br><br>Which solution will meet these requirements with the LOWEST latency of reads and writes?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786037,
          "date": "Tue 24 Jan 2023 02:25",
          "username": "Bulti",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
      "question_text": "<p>A company is testing a web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company uses a blue/green deployment process with immutable instances when deploying new software.<br><br>During testing, users are being automatically logged out of the application at random times. Testers also report that, when a new version of the application is deployed, all users are logged out. The development team needs a solution to ensure users remain logged in across scaling events and application deployments.<br><br>What is the MOST efficient way to ensure users remain logged in?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786040,
          "date": "Tue 24 Jan 2023 02:28",
          "username": "Bulti",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
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
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732341,
          "date": "Thu 01 Dec 2022 07:44",
          "username": "SmileyCloud",
          "content": "D - correct. <br><br>A,B - Smart session and session sharing do not mean anything.<br><br>https://aws.amazon.com/getting-started/hands-on/building-fast-session-caching-with-amazon-elasticache-for-redis/",
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
      "question_text": "<p>A DevOps engineer is troubleshooting deployments to a new application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. Instances sometimes come online before they are ready, which is leading to increased error rates among users. The current health check configuration gives instances a 60-second grace period and considers instances healthy after two 200 response codes from /index.php, a page that may respond intermittently during the deployment process. The development team wants instances to come online as soon as possible.<br><br>Which strategy would address this issue?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786045,
          "date": "Tue 24 Jan 2023 02:33",
          "username": "Bulti",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733592,
          "date": "Fri 02 Dec 2022 10:08",
          "username": "nsvijay04b1",
          "content": "B wrong-204 - No Content - Specifies the normal response code for the DELETE operation.<br>A wrong -makes problem worse , delays startup and using index.php doesn't help<br>Cwrong-change to right health checkbut not at start of deployment <br>Dcorrect -change to right health checkafter the deployment script finishes",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733489,
          "date": "Fri 02 Dec 2022 07:16",
          "username": "quixo",
          "content": "D for sure",
          "upvote_count": "3",
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
      "question_text": "<p>A company has a single-page application that was developed in Angular. A DevOps engineer needs to automate deployments of the application to a website that the company hosts on Amazon S3. The solution must provide version control of the source code and must give developers the ability to perform peer review.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786047,
          "date": "Tue 24 Jan 2023 02:36",
          "username": "Bulti",
          "content": "ACF is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 772919,
          "date": "Wed 11 Jan 2023 23:00",
          "username": "saeidp",
          "content": "S3 is a target for Codepipeline",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
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
      "question_text": "<p>A DevOps engineer is creating a CI/CD pipeline for an Amazon ECS service. The ECS container instances run behind an Application Load Balancer as the web tier of a three-tier application. An acceptance criterion for a successful deployment is the verification that the web tier can communicate with the database and middleware tiers of the application upon deployment.<br><br>How can this be accomplished in an automated fashion?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786050,
          "date": "Tue 24 Jan 2023 02:38",
          "username": "Bulti",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 754207,
          "date": "Fri 23 Dec 2022 13:50",
          "username": "Imstack",
          "content": "AAAAAAAAA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 733605,
          "date": "Fri 02 Dec 2022 10:27",
          "username": "nsvijay04b1",
          "content": "A correct-CodePipeline -> codeDeploy with health check to middleware/DB if failed automatic rollback.<br>B,C wrong<br>Dwrong - is for DR scenarios, weighted routing, a health check is must and cannot rollback",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732348,
          "date": "Thu 01 Dec 2022 07:59",
          "username": "SmileyCloud",
          "content": "A - correct. You need some sort of a health check.",
          "upvote_count": "3",
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
      "question_text": "<p>A development team manages website deployments using AWS CodeDeploy blue/green deployments. The application is running on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group.<br><br>When deploying a new revision, the team notices the deployment eventually fails, but it takes a long time to fail. After further inspection, the team discovers the AllowTraffic lifecycle event ran for an hour and eventually failed without providing any other information. The team wants to ensure failure notices are delivered more quickly while maintaining application availability even upon failure.<br><br>Which combination of actions should be taken to meet these requirements? (Choose two.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786051,
          "date": "Tue 24 Jan 2023 02:48",
          "username": "Bulti",
          "content": "B and E is correct. B because of the useof CodeDeploy trigger- You can create a trigger that publishes an Amazon Simple Notification Service (Amazon SNS) topic for a AWS CodeDeploy deployment or instance event. Then, when that event occurs, all subscribers to the associated topic receive notifications through the endpoint specified in the topic, such as an SMS message or email message. Amazon SNS offers multiple methods for subscribing to topics. E over D because you need to execute a script before you allow traffic and moreover we cannot intercept and write any custom script in the AfterAllowTraffic event since its reserved for CodeDeploy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 778020,
          "date": "Mon 16 Jan 2023 18:38",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/53194-exam-aws-devops-engineer-professional-topic-1-question-534/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
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
          "content": "A - disaster <br>C - wrong - already reached AllowTraffic lifecycle event that means it is not taking time in ValidateService event, problem is in health check itself.<br>B/E - correct<br>Between D/E, why E? AllowTraffic - u cannot run scripts, it belongs to codedeploy<br><br>BeforeAllowTraffic – You can use this deployment lifecycle event to run tasks on instances before they are registered with a load balancer.<br><br>AllowTraffic – During this deployment lifecycle event, internet traffic is allowed to access instances after a deployment. This event is reserved for the CodeDeploy agent and cannot be used to run scripts.",
          "upvote_count": "3",
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
      "question_text": "<p>A development team manually builds an artifact locally and then places it in an Amazon S3 bucket. The application has a local cache that must be cleared when a deployment occurs. The team executes a command to do this, downloads the artifact from Amazon S3, and unzips the artifact to complete the deployment.<br><br>A DevOps team wants to migrate to a CI/CD process and build in checks to stop and roll back the deployment when a failure occurs. This requires the team to track the progression of the deployment.<br><br>Which combination of actions will accomplish this? (Choose three.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786053,
          "date": "Tue 24 Jan 2023 02:52",
          "username": "Bulti",
          "content": "BDE are correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
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
      "question_text": "<p>A company is implementing a well-architected design for its globally accessible API stack. The design needs to ensure both high reliability and fast response times for users located in North America and Europe.<br><br>The API stack contains the following three tiers:<br><br>• Amazon API Gateway<br>• AWS Lambda<br>• Amazon DynamoDB<br><br>Which solution will meet the requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786055,
          "date": "Tue 24 Jan 2023 02:56",
          "username": "Bulti",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754220,
          "date": "Fri 23 Dec 2022 14:02",
          "username": "Imstack",
          "content": "B - correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732353,
          "date": "Thu 01 Dec 2022 08:04",
          "username": "SmileyCloud",
          "content": "B - correct. Anytime there is a multi-region app that is not a DR, look for latency based Rt 53.",
          "upvote_count": "2",
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
      "question_text": "<p>A company manages an application that stores logs in Amazon CloudWatch Logs. The company wants to archive the logs in Amazon S3. Logs are rarely accessed after 90 days and must be retained for 10 years.<br><br>Which combination of steps should a DevOps engineer take to meet these requirements? (Choose two.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786057,
          "date": "Tue 24 Jan 2023 02:58",
          "username": "Bulti",
          "content": "BD is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
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
      "question_text": "<p>A DevOps engineer is building a continuous deployment pipeline for a serverless application that uses AWS Lambda functions. The company wants to reduce the customer impact of an unsuccessful deployment. The company also wants to monitor for issues.<br><br>Which deploy stage configuration will meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 732355,
          "date": "Thu 01 Dec 2022 08:11",
          "username": "SmileyCloud",
          "content": "A - correct. See these links. <br><br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html<br><br>You can even do some testing. <br><br>https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-generate-event.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 786098,
          "date": "Tue 24 Jan 2023 03:55",
          "username": "Bulti",
          "content": "A seems right but not sure if CodeDeploy deploysSAM application. It can deploy Lambda direclty satisfying all the requirements. However it is still the best answer.",
          "upvote_count": "1",
          "selected_answers": ""
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
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 727990,
          "date": "Sun 27 Nov 2022 08:21",
          "username": "adozooapcloud",
          "content": "B is crroct ,AWS SAM just way to deployWrong<br>https://aws.amazon.com/blogs/compute/introducing-aws-sam-pipelines-automatically-generate-deployment-pipelines-for-serverless-applications/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 769978,
          "date": "Mon 09 Jan 2023 03:06",
          "username": "apcloud",
          "content": "Wrong<br>https://aws.amazon.com/blogs/compute/introducing-aws-sam-pipelines-automatically-generate-deployment-pipelines-for-serverless-applications/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#116",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large enterprise is deploying a web application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon RDS Oracle DB instance and Amazon DynamoDB.  There are separate environments for development, testing, and production.<br><br>What is the MOST secure and flexible way to obtain password credentials during deployment?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786104,
          "date": "Tue 24 Jan 2023 03:59",
          "username": "Bulti",
          "content": "B is correct way to handle DB credentials inside an application.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
          "content": "B - Correct. <br>You want a role to access AWS service so you don't have to worry about access keys and passwords.",
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
      "question_text": "<p>A company wants to use a grid system for proprietary enterprise in-memory data store on top of AWS. The system can run in multiple server nodes in any Linux-based distribution. The system must be able to reconfigure the entire cluster every time a node is added or removed. When adding or removing nodes, an /etc/cluster/nodes.config file must be updated listing the IP addresses of the current node member of that cluster.<br><br>The company wants to automate the task of adding new nodes to a cluster.<br><br>What can a DevOps engineer do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#117",
          "answers": [
            {
              "choice": "<p>A. Use AWS OpsWorks Stacks to layer the server nodes of that cluster. Create a Chief recipe that populates the content of the /etc/cluster/nodes.config file and restarts the service by using the current members of the layers. Assign that recipe to the Configure lifecycle event.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Put the file nodes.config in version control. Create an AWS CodeDeploy deployment configuration and deployment group based on an Amazon EC2 tag value for the cluster nodes. When adding a new node to the cluster, update the file with all tagged instances, and make a commit in version control. Deploy the new file and restart the services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket and upload a version of the /etc/cluster/nodes.config file. Create a crontab script that will poll for that S3 file and download it frequently. Use a process manager, such as Monit or systemd, to restart the cluster services when it detects that the new file was modified. When adding a node to the cluster, edit the file’s most recent members. Upload the new file to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a user data script that lists all members of the current security group of the cluster and automatically updates the /etc/cluster/nodes.config file whenever a new instance is added to the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 786118,
          "date": "Tue 24 Jan 2023 04:06",
          "username": "Bulti",
          "content": "A is correct. OpsWork is the right DevOps tool. Not B because using CodeDeploy here to reconfigure the cluster when new nodes are added doesn't make sense. It's not a deployment function. It is an Infrastructure provisioning function.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760448,
          "date": "Thu 29 Dec 2022 01:23",
          "username": "strike3test",
          "content": "question discussed at below link with A as possible answer<br>https://www.examtopics.com/discussions/amazon/view/3418-exam-aws-devops-engineer-professional-topic-1-question-4/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 759372,
          "date": "Wed 28 Dec 2022 06:06",
          "username": "saggy4",
          "content": "OPSWork's Configure Lifecycle event runs on all the nodes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#118",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is researching the least expensive way to implement an image batch processing cluster on AWS. The application cannot run in Docker containers and must run on Amazon EC2. The batch job stores checkpoint data on an NFS and can tolerate interruptions. Configuring the cluster software from a generic EC2 Linux image takes 30 minutes.<br><br>What is the MOST cost-effective solution?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786125,
          "date": "Tue 24 Jan 2023 04:10",
          "username": "Bulti",
          "content": "D is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
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
      "question_text": "<p>A mobile application running on eight Amazon EC2 instances is relying on a third-party API endpoint. The third-party service has a high failure rate because of limited capacity which is expected to be resolved in a few weeks.<br><br>In the meantime, the mobile application developers have added a retry mechanism and are logging failed API requests. A DevOps engineer must automate the monitoring of application logs and count the specific error messages, if there are more than 10 errors within a 1-minute window the system must issue an alert.<br><br>How can the requirements be met with MINIMAL management overhead?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 786141,
          "date": "Tue 24 Jan 2023 04:30",
          "username": "Bulti",
          "content": "A is the right answer. You can generate a custom metric from a metric filter. You can generate only a standard metric from the CloudWatch metric filter. Custom metric can be generated only via CLI.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781191,
          "date": "Thu 19 Jan 2023 14:58",
          "username": "Dimidrol",
          "content": "C is answer, you could test this solution from aws console. When you create metrics filter it will create new metric for you",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779965,
          "date": "Wed 18 Jan 2023 13:02",
          "username": "bartekb3d",
          "content": "correct answer C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 779957,
          "date": "Wed 18 Jan 2023 12:55",
          "username": "bartekb3d",
          "content": "there is no need to create custom metric",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
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
          "content": "Ans: A<br>For those choosing C, please, read AWS documentation about \\\"custom CloudWatch metrics\\\". You don't use metric filter to generate \\\"custom CloudWatch metric\\\", instead you use the AWS CLI or an API (see excerpt below):<br>Full link: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html <br>\\\"Publishing custom metrics<br>-------------------------------------------<br>You can publish your own metrics to CloudWatch using the AWS CLI or an API. You can view statistical graphs of your published metrics with the AWS Management Console.\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 761242,
          "date": "Thu 29 Dec 2022 17:14",
          "username": "obaf1",
          "content": "Ans is A<br>User Saggy4 is wrong in stating that \\\"A is wrong as you can only use metric filters to get count per occurrence in logs and not count in a particular time frame.\\\"<br>Scroll to 2:08 of the tutorial below:<br>https://www.youtube.com/watch?v=I_VjSvSSoF4&ab_channel=SREMasterClass<br>(You can specify the time period within which the error count needs to occur by creating an alarm on top of your metric. Please, see the video above eg 10 errors within a minute)",
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
          "content": "Ans: A; <br>B is wrong because the question is asking for \\\"MINIMAL\\\" effort. You don't need to use \\\" a metric filter to generate a custom CloudWatch metric that records the number of failures\\\" when you have the option in \\\"A\\\" to simply count directly using metrics filter.<br>Here's a link on using metric filter to count:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CountOccurrencesExample.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759380,
          "date": "Wed 28 Dec 2022 06:18",
          "username": "saggy4",
          "content": "C -- We need to use CloudWatch metric filter to generate count and Cloudwatch alarm for checking number of counts in a minute.<br>A -- is wrong as you can only use metric filters to get count per occurrence in logs and not count in a particular time frame.",
          "upvote_count": "3",
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
      "question_text": "<p>A company has 20 service teams. Each service team is responsible for its own microservice. Each service team uses a separate AWS account for its microservice and a VPC with the 192.168.0.0/22 CIDR block. The company manages the AWS accounts with AWS Organizations.<br><br>Each service team hosts its microservice on multiple Amazon EC2 instances behind an Application Load Balancer. The microservices communicate with each other across the public Internet. The company's security team has issued a new guideline that all communication between microservices must use HTTPS over private network connections and cannot traverse the public Internet.<br><br>A DevOps engineer must implement a solution that fulfills these obligations and minimizes the number of changes for each service team.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
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
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Create VPC peering connections between each of the microservice VPCs. Update the route tables for each VPC to use the peering links. Use the NLB DNS names for communication between microservices.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS account in AWS Organizations. Create a transit gateway in this account. and use AWS Resource Access Manager to share the transit gateway with the organization. In each of the microservice VPCs, create a transit gateway attachment to the shared transit gateway. Update the route tables of each VPC to use the transit gateway. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Use the NLB DNS names for communication between microservices.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 786148,
          "date": "Tue 24 Jan 2023 04:52",
          "username": "Bulti",
          "content": "https://aws.amazon.com/blogs/networking-and-content-delivery/connecting-networks-with-overlapping-ip-ranges/Private link is the best option because Transit Gateway doesn't support overlapping CIDR ranges.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 773937,
          "date": "Thu 12 Jan 2023 23:39",
          "username": "saeidp",
          "content": "I'll go with B.  TGW cannot be used for vpc with overlapping ips. The same for vpc peering",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 767588,
          "date": "Fri 06 Jan 2023 12:52",
          "username": "USalo",
          "content": "B.  the link https://aws.amazon.com/blogs/networking-and-content-delivery/connecting-networks-with-overlapping-ip-ranges/ describes NAT + Private Links and Transit Gateways. In the article it is mentioned that TGW can be used when CIDR ranges don't overlap. So the possible solution is \\\"B\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 765372,
          "date": "Wed 04 Jan 2023 09:14",
          "username": "Ace987USalo",
          "content": "Transit Gateway fits better ; Connect Amazon VPCs, AWS accounts, and on-premises networks to a single gatewayIf I am not mistaken Transit Gateway cannot have VPCs with overlapping IP addresses. So \\\"D\\\" is incorrect.<br>\\\"B\\\" will definitely work",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 767582,
          "date": "Fri 06 Jan 2023 12:49",
          "username": "USalo",
          "content": "If I am not mistaken Transit Gateway cannot have VPCs with overlapping IP addresses. So \\\"D\\\" is incorrect.<br>\\\"B\\\" will definitely work",
          "upvote_count": "2",
          "selected_answers": ""
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
      "question_text": "<p>A company is adopting AWS CodeDeploy to automate its application deployments for a Java-Apache Tomcat application with an Apache webserver The development team started with a proof of concept, created a deployment group for a developer environment, and performed functional tests within the application After completion, the team will create additional deployment groups for staging and production.<br><br>The current log level is configured within the Apache settings, but the team wants to change this configuration dynamically when the deployment occurs, so that they can set different log level configurations depending on the deployment group without having a different application revision for each group.<br><br>How can these requirements be met with the LEAST management overhead and without requiring different script versions for each deployment group?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787096,
          "date": "Wed 25 Jan 2023 01:00",
          "username": "Bulti",
          "content": "https://aws.amazon.com/blogs/devops/using-codedeploy-environment-variables/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759899,
          "date": "Wed 28 Dec 2022 14:50",
          "username": "saggy4",
          "content": "B is the correct answer here is the link to the docs explaining just that https://aws.amazon.com/blogs/devops/using-codedeploy-environment-variables/",
          "upvote_count": "3",
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
      "question_text": "<p>A company is running a custom-built application that processes records. All the components run on Amazon EC2 instances that run in an Auto Scaling group. Each record's processing is a multistep sequential action that is compute-intensive. Each step is always completed in 5 minutes or less.<br><br>A limitation of the current system is that if any steps fail, the application has to reprocess the record from the beginning. The company wants to update the architecture so that the application must reprocess only the failed steps.<br><br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787097,
          "date": "Wed 25 Jan 2023 01:03",
          "username": "Bulti",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 754274,
          "date": "Fri 23 Dec 2022 15:01",
          "username": "Imstack",
          "content": "D DDDDDDD",
          "upvote_count": "4",
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
      "question_text": "<p>A DevOps engineer is designing a multi-Region disaster recovery strategy for an application. The application requires an RPO of 1 hour and requires an RTO of 4 hours. The application is deployed with an AWS CloudFormation template that creates an Application Load Balancer (ALB), Amazon EC2 instances in an Auto Scaling group and an Amazon RDS Multi-AZ DB instance with 20 GB of allocated storage. The AMI of the application instance does not contain data and has been copied to the destination Region.<br><br>Which combination of actions will meet the recovery objectives at the LOWEST cost? (Choose two.)<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787102,
          "date": "Wed 25 Jan 2023 01:14",
          "username": "Bulti",
          "content": "C and D is correct. The same CloudFormation template should run upon failover to provision the same resources as in the primary with the exception that the DB storage is restored from the AWS backup taken every hour using the DB Snapshot ID. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759920,
          "date": "Wed 28 Dec 2022 15:16",
          "username": "saggy4",
          "content": "Answer is C and D. <br>B is wrong because from the question there is just AMI in the disaster region, there is no Autoscaling group for which we can increase the count.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 753083,
          "date": "Thu 22 Dec 2022 09:21",
          "username": "obaf1",
          "content": "Answer: C,D<br>B is wrong because it's an Auto Scaling Group, therefore there's no need to manually increase number of instances in the failover region.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 753056,
          "date": "Thu 22 Dec 2022 08:31",
          "username": "obaf1",
          "content": "Answer: C,D<br>B is wring because it's an Auto Scaling Group and there's no need to manually increase number of instances in the failover region",
          "upvote_count": "3",
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
      "question_text": "<p>A company runs a three-tier web application in its production environment, which is built on a single AWS CloudFormation template made up of Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. Data is stored in an Amazon RDS Multi-AZ DB instance with read replicas. Amazon Route 53 manages the application's public DNS record.<br><br>A DevOps engineer must create a workflow to mitigate a failed software deployment by rolling back changes in the production environment when a software cutover occurs for new application software.<br><br>What steps should the engineer perform to meet these requirements with the LEAST amount of downtime?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#124",
          "answers": [
            {
              "choice": "<p>A. Use CloudFormation to deploy an additional staging environment and configure the Route 53 DNS with weighted records. During cutover change the Route 53 A record weights to achieve an even traffic distribution between the two environments. Validate the traffic in the new environment and immediately terminate the old environment if tests are successful.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a single AWS Elastic Beanstalk environment to deploy the staging and production environments. Update the environment by uploading the ZIP file with the new application code. Swap the Elastic Beanstalk environment CNAME.  Validate the traffic in the new environment and immediately terminate the old environment if tests are successful.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a single AWS Elastic Beanstalk environment and an AWS OpsWorks environment to deploy the staging and production environments. Update the environment by uploading the ZIP file with the new application code into the Elastic Beanstalk environment deployed with the OpsWorks stack. Validate the traffic in the new environment and immediately terminate the old environment if tests are successful.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudFormation to deploy an additional staging environment, and configure the Route 53 DNS with weighted records. During cutover, increase the weight distribution to have more traffic directed to the new staging environment as workloads are successfully validated. Keep the old production environment in place until the new staging environment handles all traffic.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 787137,
          "date": "Wed 25 Jan 2023 02:13",
          "username": "Bulti",
          "content": "D is correct because as mentioned in the question there isalready a CloudFormation template to provision the resourcesso why switch to EB.  But I have to admit that this question is tricky. The answer could be B as well.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 785043,
          "date": "Mon 23 Jan 2023 07:37",
          "username": "kopper2019",
          "content": "Option A - use A record, which is used with IP addresses<br>Option C - OpsWorks - not needed<br>Option B - with EB you use CNAME to swap between TWO environments<br>Option D - fits well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778146,
          "date": "Mon 16 Jan 2023 20:22",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/8099-exam-aws-devops-engineer-professional-topic-1-question-94/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 761372,
          "date": "Thu 29 Dec 2022 19:41",
          "username": "Kapello10",
          "content": "B is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 759931,
          "date": "Wed 28 Dec 2022 15:25",
          "username": "saggy4",
          "content": "D is correct<br>Elastic Beanstalk will be a much of a hassle as we will need to move the existing system in EC2 hence B and C are wrong<br>Between A and D, A tries deletes the older env immediately and does not change the R53 entries",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#125",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IT team has built an AWS CloudFormation template so others in the company can quickly and reliably deploy and terminate an application. The template creates an Amazon EC2 instance with a user data script to install the application and an Amazon S3 bucket that the application uses to serve static webpages while it is running.<br><br>All resources should be removed when the CloudFormation stack is deleted. However, the team observes that CloudFormation reports an error during stack deletion, and the S3 bucket created by the stack is not deleted.<br><br>How can the team resolve the error in the MOST efficient manner to ensure that all resources are deleted without errors?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787138,
          "date": "Wed 25 Jan 2023 02:15",
          "username": "Bulti",
          "content": "B is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
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
      "question_text": "<p>A DevOps engineer must create a Linux AMI in an automated fashion. The newly created AMI identification must be stored in a location where other build pipelines can access the new identification programmatically.<br><br>What is the MOST cost-effective way to do this?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787142,
          "date": "Wed 25 Jan 2023 02:19",
          "username": "Bulti",
          "content": "B is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754384,
          "date": "Fri 23 Dec 2022 18:23",
          "username": "reyshah007",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754333,
          "date": "Fri 23 Dec 2022 16:27",
          "username": "paku",
          "content": "Answer is B",
          "upvote_count": "2",
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
      "question_text": "<p>An application running on a set of Amazon EC2 instances in an Auto Scaling group requires a configuration file to operate. The instances are created and maintained with AWS CloudFormation. A DevOps engineer wants the instances to have the latest configuration file when launched, and wants changes to the configuration file to be reflected on all the instances with a minimal delay when the CloudFormation template is updated. Company policy requires that application configuration files be maintained along with AWS infrastructure configuration files in source control.<br><br>Which solution will accomplish this?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#127",
          "answers": [
            {
              "choice": "<p>A. In the CloudFormation template, add an AWS Config rule. Place the configuration file content in the rule's InputParameters property, and set the Scope property to the EC2 Auto Scaling group. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the CloudFormation template, add an EC2 launch template resource. Place the configuration file content in the launch template. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the CloudFormation template add an EC2 launch template resource. Place the configuration file content in the launch template. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the CloudFormation template, add CloudFormation init metadata. Place the configuration file content in the metadata. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 787166,
          "date": "Wed 25 Jan 2023 02:45",
          "username": "Bulti",
          "content": "D is the right answer. Need a MetaData with Cloudformation:init and a cfn-init command in userdata to retrieve the content (script) that needs to be executed on the EC2 instance. cfn-signal and wait can be used to have EC2 signal Cloudformation that the instance has been successfully configured.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760062,
          "date": "Wed 28 Dec 2022 17:03",
          "username": "saggy4",
          "content": "D seems to be the correct answer more details here<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 758755,
          "date": "Tue 27 Dec 2022 17:02",
          "username": "SuriSagar",
          "content": "Answer is D",
          "upvote_count": "1",
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
      "question_text": "<p>A DevOps engineer is building a multistage pipeline with AWS CodePipeline to build, verify, stage, test, and deploy an application. A manual approval stage is required between the test stage and the deploy stage. The development team uses a custom chat tool with webhook support that requires near-real-time notifications.<br><br>How should the DevOps engineer configure status updates for pipeline activity and approval requests to post to the chat tool?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787168,
          "date": "Wed 25 Jan 2023 02:47",
          "username": "Bulti",
          "content": "C is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
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
      "question_text": "<p>A security team is concerned that a developer can unintentionally attach an Elastic IP address to an Amazon EC2 instance in production. No developer should be allowed to attach an Elastic IP address to an instance. The security team must be notified if any production server has an Elastic IP address at any time.<br><br>How can this task be automated?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787175,
          "date": "Wed 25 Jan 2023 02:53",
          "username": "Bulti",
          "content": "B is correct. Config rule to check if EIP is associated with the EC2 instance and have have a IAM policy on the IAM group to ensure that no developer belonging to that IAM group is allowed to attach EIP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 760066,
          "date": "Wed 28 Dec 2022 17:11",
          "username": "saggy4",
          "content": "A - This only checks and remidiates, does not restrict the developers to attach EIP<br>B - Correct<br>C - This is not optimal<br>D - EC2 IAM roles are not responsible for the EIP attachment the roles associated to developers are",
          "upvote_count": "2",
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
      "question_text": "<p>A company uses AWS Control Tower to manage its multi-account AWS environment. The company has historically created AWS accounts by using AWS Control Tower through the AWS Management Console. The company wants to implement an automated solution that will create new AWS accounts by using AWS Control Tower Account Factory.<br><br>A DevOps engineer is testing a new approach in which employees will upload a csv file into an Amazon S3 bucket. The .csv file will contain the information that is necessary to create a new AWS account. An AWS Lambda function will process event notifications from Amazon S3 when new files are created in the S3 bucket. The Lambda function will create the AWS account by using the AWS Service Catalog APIs.<br><br>The DevOps engineer needs to implement a solution to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic when the account creation process ends successfully.<br><br>What should the DevOps engineer do to automate the SNS notification?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787182,
          "date": "Wed 25 Jan 2023 02:56",
          "username": "Bulti",
          "content": "D is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
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
      "question_text": "<p>A company has microservices running in AWS Lambda that read data from Amazon DynamoDB.  The Lambda code is manually deployed by developers after successful testing. The company now needs the tests and deployments be automated and run in the cloud. Additionally, traffic to the new versions of each microservice should be incrementally shifted over time after deployment.<br><br>What solution meets all the requirements, ensuring the MOST developer velocity?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787184,
          "date": "Wed 25 Jan 2023 02:58",
          "username": "Bulti",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
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
      "question_text": "<p>A development team wants to use AWS CloudFormation stacks to deploy an application. However, the developer IAM role does not have the required permissions to provision the resources that are specified in the AWS CloudFormation template. A DevOps engineer needs to implement a solution that allows the developers to deploy the stacks. The solution must follow the principle of least privilege.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#132",
          "answers": [
            {
              "choice": "<p>A. Create an IAM policy that allows the developers to provision the required resources. Attach the policy to the developer IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy that allows full access to AWS CloudFormation. Attach the policy to the developer IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CloudFormation service role that has the required permissions. Grant the developer IAM role a cloudforrnation:* action. Use the new service role during stack deployments.<br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787197,
          "date": "Wed 25 Jan 2023 03:13",
          "username": "Bulti",
          "content": "D is correct. As an IAM user you need to have the IAM policy that allow you to pass the service role you are assigning to CloudFormation to execute the template to create/ update stack.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760078,
          "date": "Wed 28 Dec 2022 17:24",
          "username": "saggy4",
          "content": "D is the correct option<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#133",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A developer is maintaining a fleet of 50 Amazon EC2 Linux servers. The servers are part of an Amazon EC2 Auto Scaling group, and also use Elastic Load Balancing for load balancing.<br><br>Occasionally, some application servers are being terminated after failing ELB HTTP health checks. The developer would like to perform a root cause analysis on the issue, but before being able to access application logs, the server is terminated.<br><br>How can log collection be automated?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. Use Auto Scaling lifecycle hooks to put instances in a Pending:Wait state. Create an Amazon CloudWatch alarm for EC2 Instance Terminate Successful and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an AWS Config rule for EC2 instance-terminate Lifecycle Action and trigger a step function that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon CloudWatch subscription filter for EC2 Instance Terminate Successful and trigger a CloudWatch agent that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon EventBridge rule for EC2 Instance-terminate Lifecycle Action and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 787199,
          "date": "Wed 25 Jan 2023 03:17",
          "username": "Bulti",
          "content": "D is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778191,
          "date": "Mon 16 Jan 2023 21:05",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/8042-exam-aws-devops-engineer-professional-topic-1-question-55/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 760636,
          "date": "Thu 29 Dec 2022 07:08",
          "username": "saggy4",
          "content": "A -- Pending Wait state is when the instance is created<br>B -- AWS Config has no such rule<br>C -- You cannot trigger a Cloudwatch agent<br>D -- Correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#134",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a web and mobile application that uses a serverless architecture powered by AWS Lambda and Amazon API Gateway. The company wants to fully automate the backend Lambda deployment based on code that is pushed to the appropriate environment branch in an AWS CodeCommit repository.<br><br>The deployment must have the following:<br>• Separate environment pipelines for testing and production<br>• Automatic deployment that occurs for test environments only<br><br>Which steps should be taken to meet these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787203,
          "date": "Wed 25 Jan 2023 03:21",
          "username": "Bulti",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778340,
          "date": "Mon 16 Jan 2023 23:18",
          "username": "saeidp",
          "content": "I'll go with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 754313,
          "date": "Fri 23 Dec 2022 16:03",
          "username": "Imstack",
          "content": "c correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754139,
          "date": "Fri 23 Dec 2022 11:54",
          "username": "SuriSagar",
          "content": "The answer is C.  Two codepipelines two branches and manual approval step for production and automated deployment for test.",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a guideline that every Amazon EC2 instance must be launched from an AMI that the company's security team produces. Every month, the security team sends an email message with the latest approved AMIs to all the development teams.<br><br>The development teams use AWS CloudFormation to deploy their applications. When developers launch a new service, they have to search their email for the latest AMIs that the security department sent. A DevOps engineer wants to automate the process that the security team uses to provide the AMI IDs to the development teams.<br><br>What is the MOST scalable solution that meets these requirements?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 754147,
          "date": "Fri 23 Dec 2022 12:27",
          "username": "SuriSagar",
          "content": "In the question \\\"When developer launches a new service\\\" A parameter store can be used to dynamically get new AMI ID's <br>Answer is C",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 754316,
          "date": "Fri 23 Dec 2022 16:06",
          "username": "Imstack",
          "content": "c is the answer",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 787954,
          "date": "Wed 25 Jan 2023 18:32",
          "username": "TravisHk",
          "content": "C is the correct answer with this one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787206,
          "date": "Wed 25 Jan 2023 03:24",
          "username": "Bulti",
          "content": "C is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 760089,
          "date": "Wed 28 Dec 2022 17:33",
          "username": "saggy4",
          "content": "D is wrong as it has too many manual steps and hassles<br>C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#136",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is setting up a container-based architecture. The engineer has decided to use AWS CloudFormation to automatically provision an Amazon ECS cluster and an Amazon EC2 Auto Scaling group to launch the EC2 container instances. After successfully creating the CloudFormation stack, the engineer noticed that, even though the ECS cluster and the EC2 instances were created successfully and the stack finished the creation, the EC2 instances were associating with a different cluster.<br><br>How should the DevOps engineer update the CloudFormation template to resolve this issue?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 787224,
          "date": "Wed 25 Jan 2023 03:53",
          "username": "Bulti",
          "content": "I think the answer is D.  I didn't see a way to update either LaunchConfiguration or ECS cluster section of the ECS template using EC2 with the new EC2 instance IDs. The only way is to automate that registration via a Lambda function.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 777622,
          "date": "Mon 16 Jan 2023 13:12",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/28605-exam-aws-devops-engineer-professional-topic-1-question-173/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 775125,
          "date": "Sat 14 Jan 2023 07:04",
          "username": "WinslowSe7en",
          "content": "C is sufficient",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754319,
          "date": "Fri 23 Dec 2022 16:09",
          "username": "Imstack",
          "content": "BBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 754154,
          "date": "Fri 23 Dec 2022 12:37",
          "username": "SuriSagar",
          "content": "B is the answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to use AWS Systems Manager documents to bootstrap physical laptops for developers. The bootstrap code is stored in GitHub. A DevOps engineer has already created a Systems Manager activation, installed the Systems Manager agent with the registration code, and installed an activation ID on all the laptops.<br><br>Which set of steps should be taken next?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. Configure the Systems Manager document to use the AWS-RunShellScript command to copy the files from GitHub to Amazon S3, then use the aws-downloadContent plugin with a sourceType of S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the Systems Manager document to use the aws-configurePackage plugin with an install action and point to the Git repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Systems Manager document to use the aws-downloadContent plugin with a sourceType of GitHub and sourcelnfo with the repository details.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the Systems Manager document to use the aws:softwarelnventory plugin and run the script from the Git repository.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 788316,
          "date": "Thu 26 Jan 2023 03:54",
          "username": "Bulti",
          "content": "Answer is C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760648,
          "date": "Thu 29 Dec 2022 07:21",
          "username": "saggy4",
          "content": "C is correct as long as the GitHub is not of Enterprise version",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760476,
          "date": "Thu 29 Dec 2022 02:10",
          "username": "strike3test",
          "content": "This is discussed here as well with C as answer<br>https://www.examtopics.com/discussions/amazon/view/47928-exam-aws-devops-engineer-professional-topic-1-question-238/",
          "upvote_count": "2",
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
      "question_text": "<p>A company that uses electronic health records is running a fleet of Amazon EC2 instances with an Amazon Linux operating system. As part of patient privacy requirements, the company must ensure continuous compliance for patches for operating system and applications running on the EC2 instances.<br><br>How can the deployments of the operating system and application patches be automated using a default and custom repository?<br><br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 789279,
          "date": "Fri 27 Jan 2023 03:42",
          "username": "Bulti",
          "content": "Answer is A.  The AWS_RunPatchBaseline command executes the default patch ( could be a custom patch that overrides the AWS default patch as the new default) for all OS and application layers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 784355,
          "date": "Sun 22 Jan 2023 14:51",
          "username": "Goksori",
          "content": "D is correct<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-patch-baselines.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778282,
          "date": "Mon 16 Jan 2023 22:17",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/8525-exam-aws-devops-engineer-professional-topic-1-question-120/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 760478,
          "date": "Thu 29 Dec 2022 02:13",
          "username": "strike3test",
          "content": "A is the correct answer<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 760107,
          "date": "Wed 28 Dec 2022 17:48",
          "username": "saggy4",
          "content": "A is the correct answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 755856,
          "date": "Sun 25 Dec 2022 18:19",
          "username": "ericzaj",
          "content": "A looks correct.<br>You can use the document AWS-RunPatchBaseline to apply patches for both operating systems and applications. Taken from: https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html",
          "upvote_count": "4",
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
      "question_text": "<p>A web application has been deployed using an AWS Elastic Beanstalk application. The application developers are concerned that they are seeing high latency in two different areas of the application:<br><br>• HTTP client requests to a third-party API<br>• MySQL client library queries to an Amazon RDS database<br><br>A DevOps engineer must gather trace data to diagnose the issues.<br><br>Which steps will gather the trace information with the LEAST amount of changes and performance impacts to the application?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#139",
          "answers": [
            {
              "choice": "<p>A. Add additional logging to the application code. Use the Amazon CloudWatch agent to stream the application logs into Amazon OpenSearch Service. Query the log data in OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Instrument the application to use the AWS X-Ray SDK. Post trace data to an Amazon OpenSearch Service cluster. Query the trace data for calls to the HTTP client and the MySQL client.<br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 759164,
          "date": "Wed 28 Dec 2022 00:43",
          "username": "SuriSagar",
          "content": "It's D.  https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-debugging.html",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 760111,
          "date": "Wed 28 Dec 2022 17:51",
          "username": "saggy4",
          "content": "It is D.  https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-configuration-debugging.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 789282,
          "date": "Fri 27 Jan 2023 03:49",
          "username": "Bulti",
          "content": "Answer is D.  Both X-Ray Deamon and X-Ray SDK is needed.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 788720,
          "date": "Thu 26 Jan 2023 13:45",
          "username": "ericzajericzaj",
          "content": "Question asks for least amount of changes. In the Beanstalk console it is one click to turn on X-Ray Daemon.Looking over the docs shared here, instrumentation in the code is needed. D, is better.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 788723,
          "date": "Thu 26 Jan 2023 13:49",
          "username": "ericzaj",
          "content": "Looking over the docs shared here, instrumentation in the code is needed. D, is better.",
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
      "question_text": "<p>A company requires its internal business teams to launch resources through pre-approved AWS CloudFormation templates only. The security team requires automated monitoring when resources drift from their expected state.<br><br>Which strategy should be used to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#140",
          "answers": [
            {
              "choice": "<p>A. Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use CloudFormation drift detection to detect when resources have drifted from their expected state.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use AWS Config rules to detect when resources have drifted from their expected state.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a launch constraint. Use AWS Config rules to detect when resources have drifted from their expected state.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a template constraint. Use Amazon EventBridge notifications to detect when resources have drifted from their expected state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 789295,
          "date": "Fri 27 Jan 2023 04:30",
          "username": "Bulti",
          "content": "Answer is C as we are supposed to use only approved Cloudformation templates and AWS Config is to be used for Drift detection. D is incorrect because EventBridge Notfication cannot detect drift, it is EventBridge rules that can look for certain events to detect drift.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778290,
          "date": "Mon 16 Jan 2023 22:22",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/48163-exam-aws-devops-engineer-professional-topic-1-question-239/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757049,
          "date": "Mon 26 Dec 2022 05:23",
          "username": "HTTPSHTTPS",
          "content": "The correct strategy to meet these requirements is C.  Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a launch constraint. Use AWS Config rules to detect when resources have drifted from their expected state.<br><br>AWS Service Catalog allows you to create and manage catalogs of IT services that are approved for use on AWS. You can use Service Catalog to create a centralized catalog of CloudFormation templates that have been pre-approved for use within your organization. By enforcing the use of a launch constraint, you can ensure that users can only launch resources through the approved CloudFormation templates.AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. You can use Config rules to automatically check the configuration of your resources against predetermined conditions, and receive notifications when resource configurations drift from their expected state. By using Config rules to detect drift, you can ensure that your resources remain in their expected state.<br><br>Option A is incorrect because it involves using CloudFormation drift detection rather than Config rules to detect drift. Option D is incorrect because it involves using Amazon EventBridge notifications rather than Config rules to detect drift. Option B is incorrect because it doesn't involve enforcing the use of a launch constraint in AWS Service Catalog.",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757050,
          "date": "Mon 26 Dec 2022 05:24",
          "username": "HTTPS",
          "content": "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. You can use Config rules to automatically check the configuration of your resources against predetermined conditions, and receive notifications when resource configurations drift from their expected state. By using Config rules to detect drift, you can ensure that your resources remain in their expected state.<br><br>Option A is incorrect because it involves using CloudFormation drift detection rather than Config rules to detect drift. Option D is incorrect because it involves using Amazon EventBridge notifications rather than Config rules to detect drift. Option B is incorrect because it doesn't involve enforcing the use of a launch constraint in AWS Service Catalog.",
          "upvote_count": "1",
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
      "question_text": "<p>A space exploration company receives telemetry data from multiple satellites. Small packets of data are received through Amazon API Gateway and are placed directly into an Amazon Simple Queue Service (Amazon SOS) standard queue. A custom application is subscribed to the queue and transforms the data into a standard format.<br><br>Because of inconsistencies in the data that the satellites produce, the application is occasionally unable to transform the data. In these cases, the messages remain in the SQS queue. A DevOps engineer must develop a solution that retains the failed messages and makes them available to scientists for review and future processing.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#141",
          "answers": [
            {
              "choice": "<p>A. Configure AWS Lambda to poll the SOS queue and invoke a Lambda function to check whether the queue messages are valid. If validation fails, send a copy of the data that is not valid to an Amazon S3 bucket so that the scientists can review and correct the data. When the data is corrected, amend the message in the SOS queue by using a replay Lambda function with the corrected data<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the SQS standard queue to an SQS FIFO queue. Configure AWS Lambda to poll the SQS queue every 10 minutes by using an Amazon EventBridge schedule. Invoke the Lambda function to identify any messages with a SentTimestamp value that is older than 5 minutes, push the data to the same location as the application's output location, and remove the messages from the queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SOS dead-letter queue. Modify the existing queue by including a redrive policy that sets the Maximum Receives setting to 1 and sets the dead-letter queue ARN to the ARN of the newly created queue. Instruct the scientists to use the dead-letter queue to review the data that is not valid. Reprocess this data at a later time.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure API Gateway to send messages to different SOS virtual queues that are named for each of the satellites. Update the application to use a new virtual queue for any data that it cannot transform, and send the message to the new virtual queue. Instruct the scientists to use the virtual queue to review the data that is not valid. Reprocess this data at a later time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 789298,
          "date": "Fri 27 Jan 2023 04:36",
          "username": "Bulti",
          "content": "C is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777065,
          "date": "Sun 15 Jan 2023 21:59",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/92779-exam-aws-devops-engineer-professional-topic-1-question-141/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757584,
          "date": "Mon 26 Dec 2022 16:19",
          "username": "tartealacreme",
          "content": "C for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757046,
          "date": "Mon 26 Dec 2022 05:19",
          "username": "HTTPSHTTPSHTTPS",
          "content": "The correct solution to meet these requirements is C.  Create an SQS dead-letter queue. Modify the existing queue by including a redrive policy that sets the Maximum Receives setting to 1 and sets the dead-letter queue ARN to the ARN of the newly created queue. Instruct the scientists to use the dead-letter queue to review the data that is not valid. Reprocess this data at a later time.A dead-letter queue is a queue that other Amazon SQS queues can target for messages that can't be processed. A message is sent to a dead-letter queue when the maximum number of receives of the message from the source queue has been reached without the message being deleted. By configuring the existing queue with a redrive policy and setting the Maximum Receives setting to 1, you can ensure that any messages that the application is unable to transform will be sent to the dead-letter queue after one failed attempt. The scientists can then review the data in the dead-letter queue and reprocess it at a later time.Option A is incorrect because it doesn't involve creating a dead-letter queue. Option B is incorrect because it involves deleting messages from the queue after a certain time has passed, rather than retaining them for later review and reprocessing. Option D is incorrect because it involves sending messages to different virtual queues based on the satellite that produced the data, rather than retaining them in a dead-letter queue for later review and reprocessing.",
          "upvote_count": "311",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 757047,
          "date": "Mon 26 Dec 2022 05:20",
          "username": "HTTPSHTTPS",
          "content": "A dead-letter queue is a queue that other Amazon SQS queues can target for messages that can't be processed. A message is sent to a dead-letter queue when the maximum number of receives of the message from the source queue has been reached without the message being deleted. By configuring the existing queue with a redrive policy and setting the Maximum Receives setting to 1, you can ensure that any messages that the application is unable to transform will be sent to the dead-letter queue after one failed attempt. The scientists can then review the data in the dead-letter queue and reprocess it at a later time.Option A is incorrect because it doesn't involve creating a dead-letter queue. Option B is incorrect because it involves deleting messages from the queue after a certain time has passed, rather than retaining them for later review and reprocessing. Option D is incorrect because it involves sending messages to different virtual queues based on the satellite that produced the data, rather than retaining them in a dead-letter queue for later review and reprocessing.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 757048,
          "date": "Mon 26 Dec 2022 05:21",
          "username": "HTTPS",
          "content": "Option A is incorrect because it doesn't involve creating a dead-letter queue. Option B is incorrect because it involves deleting messages from the queue after a certain time has passed, rather than retaining them for later review and reprocessing. Option D is incorrect because it involves sending messages to different virtual queues based on the satellite that produced the data, rather than retaining them in a dead-letter queue for later review and reprocessing.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755864,
          "date": "Sun 25 Dec 2022 18:29",
          "username": "ericzaj",
          "content": "Going with C on this. This seems like a good use case for a DLQ. The redrive policy with Maximum Receives of 1 will put a failed message into DLQ for investigation and retry after the Lambda code is updated to handle the new data.",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs applications in AWS accounts that are in an organization in AWS Organizations. The applications use Amazon EC2 instances and Amazon S3.<br><br>The company wants to detect potentially compromised EC2 instances, suspicious network activity, and unusual API activity in its existing AWS accounts and in any AWS accounts that the company creates in the future. When the company detects one of these events, the company wants to use an existing Amazon Simple Notification Service (Amazon SNS) topic to send a notification to its operational support team for investigation and remediation.<br><br>Which solution will meet these requirements in accordance with AWS best practices?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#142",
          "answers": [
            {
              "choice": "<p>A. In the organization's management account, configure an AWS account as the Amazon GuardDuty administrator account. In the GuardDuty administrator account, add the company's existing AWS accounts to GuardDuty as members. In the GuardDuty administrator account, create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the organization's management account, configure Amazon GuardDuty to add newly created AWS accounts by invitation and to send invitations to the existing AWS accounts. Create an AWS CloudFormation stack set that accepts the GuardDuty invitation and creates an Amazon EventBridge (Amazon CloudWatch Events) rule. Configure the rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic. Configure the CloudFormation stack set to deploy into all AWS accounts in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the organization's management account, create an AWS CloudTrail organization trail. Activate the organization trail in all AWS accounts in the organization. Create an SCP that enables VPC Flow Logs in each account in the organization Configure AWS Security Hub for the organization. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the organization's management account, configure an AWS account as the AWS CloudTrail administrator account. In the CloudTrail administrator account, create a CloudTrail organization trail. Add the company's existing AWS accounts to the organization trail. Create an SCP that enables VPC Flow Logs in each account in the organization. Configure AWS Security Hub for the organization. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 789303,
          "date": "Fri 27 Jan 2023 04:46",
          "username": "Bulti",
          "content": "Answer is A.  You don't need to accept a GuardDuty invitation if the member GuardDuty accounts are within the same AWS Org.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779361,
          "date": "Tue 17 Jan 2023 23:04",
          "username": "saeidp",
          "content": "I'll go with A<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779224,
          "date": "Tue 17 Jan 2023 19:48",
          "username": "Dimidrol",
          "content": "A sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776891,
          "date": "Sun 15 Jan 2023 18:49",
          "username": "romidan",
          "content": "A seems correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company wants to use AWS Elastic Beanstalk to host its online sales website running on Java. Since this will be the production website the CTO has the following requirements for the deployment strategy:<br>• Zero downtime. While the deployment is ongoing the current Amazon EC2 instances in service should remain in service. No deployment or any other action should be performed on the EC2 instances because they serve production traffic.<br>• A new fleet of instances should be provisioned for deploying the new application version.<br>• Once the new application version is deployed successfully in the new fleet of instances, the new instances should be placed in service and the old ones should be removed.<br>• The rollback should be as easy as possible. If the new fleet of instances fails to deploy the new application version, they should be terminated and the current instances should continue serving traffic as normal.<br>• The resources within the environment (EC2 Auto Scaling group, Elastic Load Balancing, Elastic Beanstalk DNS CNAME) should remain the same and no DNS change should be made.<br><br>Which deployment strategy will meet the requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. Use rolling deployments with a fixed amount of one instance at a time and set the healthy threshold to OK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use rolling deployments with additional batch with a fixed amount of one instance at a time and set the healthy threshold to OK.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch a new environment and deploy the new application version there, then perform a CNAME swap between environments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use immutable environment updates to meet all the necessary requirements.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 789311,
          "date": "Fri 27 Jan 2023 05:02",
          "username": "Bulti",
          "content": "Answer is D. Given the constraints C is not the right choice. Only D will meet the needs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 786698,
          "date": "Tue 24 Jan 2023 17:31",
          "username": "ericzaj",
          "content": "With all these requirements in aggregate there is no \\\"right\\\" solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777061,
          "date": "Sun 15 Jan 2023 21:50",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/8523-exam-aws-devops-engineer-professional-topic-1-question-118/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776893,
          "date": "Sun 15 Jan 2023 18:49",
          "username": "romidan",
          "content": "D seems correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776702,
          "date": "Sun 15 Jan 2023 16:09",
          "username": "bartekb3d",
          "content": "immutableupdates",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 775197,
          "date": "Sat 14 Jan 2023 09:39",
          "username": "devops7",
          "content": "no rolling. So, eliminate A & B<br>no C (CNAME swap) because Elastic beanstalk DNS CNAME should remain the same<br>D: immutable beanstalk meets all requirements",
          "upvote_count": "3",
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
      "question_text": "<p>A company has AWS accounts that are members of the same organization in AWS Organizations. According to the company's security policy, IAM customer managed policies must be scoped to specific actions and must not include wildcard actions on wildcard resources.<br><br>If an IAM customer managed policy is created or modified in any of the company's AWS accounts to grant wildcard actions on resources that also specify wildcards, the policy must be detached from any IAM user, role, or group that the policy is attached to Individual AWS account administrators must not be able to prevent the removal of the policies.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#144",
          "answers": [
            {
              "choice": "<p>A. Configure automatic remediation to run the AWSConfigRemediation-DetachIAMPolicy AWS Systems Manager Automation runbook.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure automatic remediation to invoke a custom AWS Lambda function to detach the IAM policy from the affected resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure automatic remediation to use AWS Systems Manager Run Command to detach the IAM policy from the affected resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS Config by using an AWS CloudFormation stack set that is created in a central account. Configure automatic deployment for the stack set, and specify the organization as the target. Configure the iam-policy-no-statements-with-full-access AWS Config managed rule in the central account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Turn on AWS Config for the organization. Create a new AWS account. Configure the account as a delegated administrator account for AWS Config. Configure the iam-policy-no-statements-with-full-access AWS Config managed rule in the delegated administrator account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790177,
          "date": "Sat 28 Jan 2023 03:08",
          "username": "Bulti",
          "content": "A&D, System Manager Automation to remediate and use of StackSets to apply the config rules across all accounts and regions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788200,
          "date": "Thu 26 Jan 2023 00:19",
          "username": "ericzaj",
          "content": "Was reading through the Config FAQs today. Config is deployed centrally in a AWS Organization with a StackSet.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 779406,
          "date": "Wed 18 Jan 2023 01:00",
          "username": "saeidpsaeidp",
          "content": "I'll go with A and Dhttps://aws.amazon.com/blogs/mt/managing-aws-organizations-accounts-using-aws-config-and-aws-cloudformation-stacksets/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 779407,
          "date": "Wed 18 Jan 2023 01:01",
          "username": "saeidp",
          "content": "https://aws.amazon.com/blogs/mt/managing-aws-organizations-accounts-using-aws-config-and-aws-cloudformation-stacksets/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779231,
          "date": "Tue 17 Jan 2023 19:53",
          "username": "Dimidrol",
          "content": "AE for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 776890,
          "date": "Sun 15 Jan 2023 18:48",
          "username": "romidan",
          "content": "A, E seems corrrect",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#145",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application team has three environments for their application: development, pre-production, and production. The team recently adopted AWS CodePipeline. However, the team has had several deployments of misconfigured or nonfunctional development code into the production environment, resulting in user disruption and downtime. The DevOps engineer must review the pipeline and add steps to identify problems with the application before it is deployed.<br><br>What should the engineer do to identify functional issues during the deployment process? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#145",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Inspector to add a test action to the pipeline. Use the Amazon Inspector Runtime Behavior Analysis Inspector rules package to check that the deployed code complies with company security standards before deploying it to production.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Using AWS CodeBuild to add a test action to the pipeline to replicate common user activities and ensure that the results are as expected before progressing to production deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CodeDeploy action in the pipeline with a deployment configuration that automatically deploys the application code to a limited number of instances. The action then pauses the deployment so that the QA team can review the application functionality. When the review is complete, CodeDeploy resumes and deploys the application to the remaining production Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. After the deployment process is complete, run a testing activity on an Amazon EC2 instance in a different region that accesses the application to simulate user behavior. If unexpected results occur the testing activity sends a warning to an Amazon SNS topic. Subscribe to the topic to get updates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an AWS CodeDeploy action in the pipeline to deploy the latest version of the development code to pre-production Add a manual approval action in the pipeline so that the QA team can test and confirm the expected functionality. After the manual approval action, add a second CodeDeploy action that deploys the approved code to the production environment.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790179,
          "date": "Sat 28 Jan 2023 03:10",
          "username": "Bulti",
          "content": "B and E are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779408,
          "date": "Wed 18 Jan 2023 01:04",
          "username": "saeidp",
          "content": "B E are correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 776901,
          "date": "Sun 15 Jan 2023 18:56",
          "username": "romidan",
          "content": "B, E are seems correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774873,
          "date": "Fri 13 Jan 2023 22:27",
          "username": "Dimidrol",
          "content": "B E for me",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#146",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS CodeDeploy to automate software deployment. The deployment must meet these requirements:<br><br>• A number of instances must be available to serve traffic during the deployment. Traffic must be balanced across those instances, and the instances must automatically heal in the event of failure.<br>• A new fleet of instances must be launched for deploying a new revision automatically, with no manual provisioning.<br>• Traffic must be rerouted to the new environment to half of the new instances at a time. The deployment should succeed if traffic is rerouted to at least half of the instances; otherwise, it should fail.<br>• Before routing traffic to the new fleet of instances, the temporary files generated during the deployment process must be deleted.<br>• At the end of a successful deployment, the original instances in the deployment group must be deleted immediately to reduce costs.<br><br>How can a DevOps engineer meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#146",
          "answers": [
            {
              "choice": "<p>A. Use an Application Load Balancer and an in-place deployment. Associate the Auto Scaling group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault.OneAtAtime as the deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the AllowTraffic hook within appspec.yml to delete the temporary files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Application Load Balancer and a blue/green deployment. Associate the Auto Scaling group and Application Load Balancer target group with the deployment group. Use the Automatically copy Auto scaling group option, create a custom deployment configuration with minimum healthy hosts defined as 50%, and assign the configuration to the deployment group. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BeforeBlockTraffic hook within appspec.yml to delete the temporary files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Application Load Balancer and a blue/green deployment. Associate the Auto Scaling group and the Application Load Balancer target group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault.HalfAtAtime as the deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BeforeAllowTraffic hook within appspec.yml to delete the temporary files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Application Load Balancer and an in-place deployment. Associate the Auto Scaling group and Application Load Balancer target group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault AllatOnce as a deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BlockTraffic hook within appspec.yml to delete the temporary files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790192,
          "date": "Sat 28 Jan 2023 03:31",
          "username": "Bulti",
          "content": "C is correct. CodeDeployDefault.HalfAtAtime and BeforeAllowTraffic which is associated with the green instance where the cleanup is required just before the traffic is directed to these instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 777040,
          "date": "Sun 15 Jan 2023 21:28",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/5505-exam-aws-devops-engineer-professional-topic-1-question-70/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776907,
          "date": "Sun 15 Jan 2023 19:10",
          "username": "romidan",
          "content": "C seems correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775199,
          "date": "Sat 14 Jan 2023 09:43",
          "username": "devops7",
          "content": "C because of HaltAtATime",
          "upvote_count": "2",
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
      "question_text": "<p>The security team depends on AWS CloudTrail to detect sensitive security issues in the company's AWS account The DevOps engineer needs a solution to auto-remediate CloudTrail being turned off in an AWS account.<br><br>What solution ensures the LEAST amount of downtime for the CloudTrail log deliveries?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#147",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CloudTrail StopLogging event. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on the ARN of the resource in which StopLogging was called. Add the Lambda function ARN as a target to the EventBridge (CloudWatch Events) rule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the AWS-managed CloudTrail-enabled AWS Config rule, set with a periodic interval of 1 hour. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for AWS Config rules compliance change. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on the ARN of the resource in which StopLogging was called. Add the Lambda function ARN as a target to the EventBridge (CloudWatch Events) rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for a scheduled event every 5 minutes. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on a CloudTrail trail in the AWS account. Add the Lambda function ARN as a target to the EventBridge (CloudWatch Events) rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch a t2.nano instance with a script running every 5 minutes that uses the AWS SDK to query CloudTrail in the current account. If the CloudTrail trail is disabled, have the script re-enable the trail.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790207,
          "date": "Sat 28 Jan 2023 03:54",
          "username": "Bulti",
          "content": "Answer is A- B although is a detective mechansim, not sure why CloudWatch logs is used to look for Config events. Also periodic trigger type of 1 hour is not as good as an average delay of 15 minutes in receiving cloudTrail logs into CloudWatch. Also C and D are not detective mechansims.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 777036,
          "date": "Sun 15 Jan 2023 21:27",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/6898-exam-aws-devops-engineer-professional-topic-1-question-65/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776927,
          "date": "Sun 15 Jan 2023 19:33",
          "username": "romidanromidan",
          "content": "B seems correct<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-re-enable-aws-cloudtrail-by-using-a-custom-remediation-rule-in-aws-config.htmlChaning from B to A as This will ensure least downtime. B may create about an hour downtime and that can not be the correct answer.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 776936,
          "date": "Sun 15 Jan 2023 19:42",
          "username": "romidan",
          "content": "Chaning from B to A as This will ensure least downtime. B may create about an hour downtime and that can not be the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774874,
          "date": "Fri 13 Jan 2023 22:28",
          "username": "Dimidrol",
          "content": "A for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps team supports many accounts across an organization in AWS Organizations. The DevOps team has decided to use AWS Coring across the organization to implement centralized automatic remediation of Amazon S3 buckets that have public ACLs. Individual accounts must not be able to modify the remediation strategy.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#148",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config conformance pack that contains a rule that checks for S3 buckets that have public ACLs. Configure the conformance pack to use an AWS Systems Manager Automation runbook to block public access to the S3 buckets. Deploy the conformance pack across the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Config rules that detect S3 buckets that have public ACLs. Configure a remediation action that uses AWS Lambda to block public access to the S3 buckets. Use AWS CloudFormation StackSets to deploy the rules across the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Config rules that detect S3 buckets that have public ACLs. Configure a remediation action that uses an AWS Systems Manager Automation runbook to block public access to the S3 buckets. Use AWS CloudFormation StackSets to deploy the rules across the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Config conformance pack that contains a rule that checks for 53 buckets that have public ACLs. Configure the conformance pack to use an AWS Lambda function to block public access to the S3 buckets. Deploy the conformance pack across the organization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790221,
          "date": "Sat 28 Jan 2023 04:12",
          "username": "Bulti",
          "content": "A is the right answer based on the blog below. A is correct and not D because remediation action on a config rule is possible only using System Manager Automation runbook. You can trigger Lambda only if you use CloudWatchEvents to detect Config Rule Compliance Change event.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776952,
          "date": "Sun 15 Jan 2023 19:55",
          "username": "romidan",
          "content": "A seems correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776745,
          "date": "Sun 15 Jan 2023 16:34",
          "username": "bartekb3d",
          "content": "why not D ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776063,
          "date": "Sun 15 Jan 2023 01:28",
          "username": "Blueocean",
          "content": "Option A<br>https://aws.amazon.com/blogs/mt/deploying-conformance-packs-across-an-organization-with-automatic-remediation/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774875,
          "date": "Fri 13 Jan 2023 22:30",
          "username": "Dimidrol",
          "content": "A for me. Conformance packs are more suitable for organization",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is working on a data archival project that requires the migration of on-premises data to an Amazon S3 bucket. The DevOps engineer develops a script that incrementally archives on-premises data that is older than 1 month to Amazon S3. Data that is transferred to Amazon S3 is deleted from the on-premises location. The script uses the S3 PutObject operation.<br><br>During a code review, the DevOps engineer notices that the script does not verify whether the data was successfully copied to Amazon S3. The DevOps engineer must update the script to ensure that data is not corrupted during transmission. The script must use MD5 checksums to verify data integrity before the on-premises data is deleted.<br><br>Which solutions for the script will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#149",
          "answers": [
            {
              "choice": "<p>A. Check the returned response for the Versionld. Compare the returned VersionId against the MD5 checksum.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Include the MD5 checksum within the Content-MD5 parameter. Check the operation call's return status to find out if an error was returned.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Include the checksum digest within the tagging parameter as a URL query parameter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Check the returned response for the ETag. Compare the returned ETag against the MD5 checksum.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Include the checksum digest within the Metadata parameter as a name-value pair. After upload, use the S3 HeadObject operation to retrieve metadata from the object.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790226,
          "date": "Sat 28 Jan 2023 04:24",
          "username": "Bulti",
          "content": "B,D is correct. MD5 checksum and ETag to verify the checksum passed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774870,
          "date": "Fri 13 Jan 2023 22:25",
          "username": "Dimidrol",
          "content": "B D for me.https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#150",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS CodeCommit for source code control. Developers apply their changes to various feature branches and create pull requests to move those changes to the main branch when the changes are ready for production.<br><br>The developers should not be able to push changes directly to the main branch. The company applied the AWSCodeCommitPowerUser managed policy to the developers' IAM role, and now these developers can push changes to the main branch directly on every repository in the AWS account.<br><br>What should the company do to restrict the developers' ability to push changes to the main branch directly?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#150",
          "answers": [
            {
              "choice": "<p>A. Create an additional policy to include a Deny rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the main branch.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Remove the IAM policy, and add an AWSCodeCommitReadOnly managed policy. Add an Allow rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the IAM policy. Include a Deny rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an additional policy to include an Allow rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the feature branches.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790590,
          "date": "Sat 28 Jan 2023 13:31",
          "username": "kowalkowal",
          "content": "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html - Other developers can still pull from the branch, make their own branches, and create pull requests, but they cannot push or merge changes to that branch. You can configure this access by creating a conditional policy that uses a context key for one or more branches in IAM.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-edit.html - AWS managed policies cannot be edited",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790231,
          "date": "Sat 28 Jan 2023 04:31",
          "username": "Bulti",
          "content": "A is the right answer. We need to add a new policy that denies action to push to the repository 's main branch. C is incorrect because you cannot modify a managed IAM policy.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 780582,
          "date": "Thu 19 Jan 2023 01:25",
          "username": "saeidpDimidrol",
          "content": "A for me. Managed policy can not be modifiedYou are right. A is answer.",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 781222,
          "date": "Thu 19 Jan 2023 15:27",
          "username": "Dimidrol",
          "content": "You are right. A is answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774879,
          "date": "Fri 13 Jan 2023 22:34",
          "username": "Dimidrol",
          "content": "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 774878,
          "date": "Fri 13 Jan 2023 22:32",
          "username": "DimidrolUSaloDimidrol",
          "content": "C for meYou cannot modify MANAGED aws policy. You can only add additional one that forbids. So \\\"A\\\" is correct.https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html",
          "upvote_count": "221",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784712,
          "date": "Sun 22 Jan 2023 22:33",
          "username": "USalo",
          "content": "You cannot modify MANAGED aws policy. You can only add additional one that forbids. So \\\"A\\\" is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 774881,
          "date": "Fri 13 Jan 2023 22:34",
          "username": "Dimidrol",
          "content": "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html",
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
      "question_text": "<p>A company uses a single AWS account to test applications on Amazon EC2 instances. The company has turned on AWS Config in the AWS account and has activated the restricted-ssh AWS Config managed rule.<br><br>The company needs an automated monitoring solution that will provide a customized notification in real time if any security group in the account is not compliant with the restricted-ssh rule. The customized notification must contain the name and ID of the noncompliant security group.<br><br>A DevOps engineer creates an Amazon Simple Notification Service (Amazon SNS) topic in the account and subscribes the appropriate personnel to the topic.<br><br>What should the DevOps engineer do next to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that matches an AWS Config evaluation result of NON_COMPLIANT for the restricted-ssh rule. Configure an input transformer for the EventBridge (CloudWatch Events) rule. Configure the EventBridge (CloudWatch Events) rule to publish a notification to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Config to send all evaluation results for the restricted-ssh rule to the SNS topic. Configure a filter policy on the SNS topic to send only notifications that contain the text of NON_COMPLIANT in the notification to subscribers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that matches an AWS Config evaluation result of NON_COMPLIANT for the restricted-ssh rule. Configure the EventBridge (CloudWatch Events) rule to invoke AWS Systems Manager Run Command on the SNS topic to customize a notification and to publish the notification to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that matches all AWS Config evaluation results of NON_COMPLIANT. Configure an input transformer for the restricted-ssh rule. Configure the EventBridge (CloudWatch Events) rule to publish a notification to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790641,
          "date": "Sat 28 Jan 2023 15:01",
          "username": "Bulti",
          "content": "A is correct as this is the most efficient way to deliver customized NON_COMPLIANT evaluation results to the subscriber. B is another roundabout way of doing the same but the way it describes is not enough. It will require more complex filtering logic on not just NON_COMPLIANT text but also other attributes of the message since all config change events occurring across all resources are sent to the SNS Topic and filtering only the ones for a specific config rule involves much more than just searching for NON_COMPLIANT text. https://stackoverflow.com/questions/64146609/how-to-configure-aws-config-to-send-compliance-change-notification-to-sns-topic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783754,
          "date": "Sat 21 Jan 2023 22:49",
          "username": "Christina666",
          "content": "Short description<br>Use an EventBridge rule with a custom event pattern and an input transformer to match an AWS Config evaluation rule output as NON_COMPLIANT. Then, route the response to an Amazon Simple Notification Service (Amazon SNS) topic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 777135,
          "date": "Sun 15 Jan 2023 23:38",
          "username": "a866325272",
          "content": "I go with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776989,
          "date": "Sun 15 Jan 2023 20:31",
          "username": "Oleg_gol",
          "content": "i agree",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 774889,
          "date": "Fri 13 Jan 2023 22:47",
          "username": "Dimidrol",
          "content": "A for me.https://aws.amazon.com/ru/premiumsupport/knowledge-center/config-resource-non-compliant/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#152",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The company has configured AWS Single Sign-On (AWS SSO) to centrally manage access to the AWS accounts in the organization. A DevOps engineer needs to ensure that all users sign in by using multi-factor authentication (MFA). Users must be allowed to manage their own MFA devices. Users also must be prompted for MFA every time they sign in.<br><br>What should the DevOps engineer do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#152",
          "answers": [
            {
              "choice": "<p>A. In AWS SSO, configure always-on MFBlock user sign-in when a user does not yet have a registered MFA device.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In AWS SSO, configure always-on MFA.  Require a user to register an MFA device at sign-in when the user does not yet have a registered MFA device.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In AWS SSO, configure context-aware MFA.  Update the trust policy of all permission sets to include the aws:MultiFactorAuthPresent condition on the sts:AssumeRole action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In AWS SSO, configure context-aware MFA.  Block user sign-in when a user does not yet have a registered MFA device.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790664,
          "date": "Sat 28 Jan 2023 15:35",
          "username": "Bulti",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 787505,
          "date": "Wed 25 Jan 2023 11:31",
          "username": "DerekKey",
          "content": "B: On the Configure multi-factor authentication page, under If a user does not yet have a registered MFA device choose one of the following choices:<br>Require them to register an MFA device at sign in",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 774891,
          "date": "Fri 13 Jan 2023 22:50",
          "username": "Dimidrol",
          "content": "B for me. https://docs.aws.amazon.com/singlesignon/latest/userguide/mfa-enable-how-to.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#153",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer needs to apply a core set of security controls to an existing set of AWS accounts. The accounts are in an organization in AWS Organizations. Individual teams will administer individual accounts by using the AdministratorAccess AWS managed policy. For all accounts, AWS CloudTrail and AWS Config must be turned on in all available AWS Regions. Individual account administrators must not be able to edit or delete any of the baseline resources. However, individual account administrators must be able to edit or delete their own CloudTrail trails and AWS Config rules.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#153",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using CloudFormation StackSets. Set the stack policy to deny Update Delete actions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable AWS Control Tower. Enroll the existing accounts in AWS Control Tower. Grant the individual account administrators access to CloudTrail and AWS Config.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Designate an AWS Config management account. Create AWS Config recorders in all accounts by using AWS CloudFormation StackSets. Deploy AWS Config rules to the organization by using the AWS Config management account. Create a CloudTrail organization trail in the organization's management account. Deny modification or deletion of the AWS Config recorders by using an SCP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS CloudFormation template that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using CloudFormation StackSets. Create an SCP that prevents updates or deletions to CloudTrail resources or AWS Config resources unless the principal is an administrator of the organization's management account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790684,
          "date": "Sat 28 Jan 2023 15:59",
          "username": "Bulti",
          "content": "The answer is D.  It's more efficient to use SCP than stack policies to deny permissions to update or delete resources that are provisioned using CloudFormation StackSets. A is also possible but create more overhead and is not a best practice.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783768,
          "date": "Sat 21 Jan 2023 22:55",
          "username": "Christina666",
          "content": "I chose D because only D mentioned the individual admin account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 781667,
          "date": "Thu 19 Jan 2023 23:38",
          "username": "saeidpsaeidpsaeidp",
          "content": "C for meStacksets enables aws config in all accounts<br>Organizational Trail add trail to all acounts and can not be deleted by accounts<br>SCP prevents deleting aws configSCP doesn't apply to management account",
          "upvote_count": "222",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 783781,
          "date": "Sat 21 Jan 2023 23:19",
          "username": "saeidpsaeidp",
          "content": "Stacksets enables aws config in all accounts<br>Organizational Trail add trail to all acounts and can not be deleted by accounts<br>SCP prevents deleting aws configSCP doesn't apply to management account",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 788313,
          "date": "Thu 26 Jan 2023 03:51",
          "username": "saeidp",
          "content": "SCP doesn't apply to management account",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781633,
          "date": "Thu 19 Jan 2023 22:37",
          "username": "Fatoch",
          "content": "I think it is D for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781629,
          "date": "Thu 19 Jan 2023 22:35",
          "username": "Fatoch",
          "content": "is it not A? Because you attach rule restriction of deny or delete",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781226,
          "date": "Thu 19 Jan 2023 15:31",
          "username": "Dimidrol",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778022,
          "date": "Mon 16 Jan 2023 18:39",
          "username": "Fatoch",
          "content": "So is it B? For me B too",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776276,
          "date": "Sun 15 Jan 2023 09:36",
          "username": "devops7",
          "content": "Also, C is missing the deny \\\"edit or delete their own CloudTrail trails\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 775207,
          "date": "Sat 14 Jan 2023 09:57",
          "username": "devops7",
          "content": "B sounds wrong. I don't think Control Tower can \\\"Grant the individual account administrators access to CloudTrail and AWS Config\\\"<br>C is too complicated and not operationally efficient way<br>So, between A & D<br>I pick D because it sounds like a complete solution and is operationally efficient.",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company has chosen AWS to host its new platform. The company's DevOps team has started building an AWS Control Tower landing zone. The DevOps team has set the identity store within AWS Single Sign-On (AWS SSO) to external identity provider (IdP) and has configured SAML 2 0.<br><br>The DevOps team wants a robust permission model that applies the principle of least privilege. The model must allow the team to build and manage only the team's own resources.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#154",
          "answers": [
            {
              "choice": "<p>A. Create IAM policies that include the required permissions. Include the aws PrincipalTag condition key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create permission sets. Attach an inline policy that includes the required permissions and uses the aws:PrincipalTag condition key to scope the permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a group in the IdP. Place users in the group. Assign the group to accounts and the permission sets in AWS SSO.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a group in the IdP. Place users in the group. Assign the group to OUs and IAM policies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable attributes for access control in AWS SSO. Apply tags to users. Map the tags as key-value pairs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable attributes for access control in AWS SSO. Map attributes from the IdP as key-value pairs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790713,
          "date": "Sat 28 Jan 2023 16:19",
          "username": "BultiBulti",
          "content": "B, C and F seems correct. Using the principalTag in the Permission Set inline policy a logged in user belonging to a specific AD group in the IDP can be permitted access to perform operations on certain resources if their group matches the group used in the PrincipleTag. Basically you are narrowing the scope of privileges assigned via Permission policies conditionally based on whether the logged in user belongs to a specific AD Group in IDP. The mapping of the AD group to the request attributes can be done using SSO attributes where we can pass other attributes like the SAML token as well.https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 794793,
          "date": "Wed 01 Feb 2023 02:27",
          "username": "Bulti",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781702,
          "date": "Fri 20 Jan 2023 00:56",
          "username": "saeidp",
          "content": "B C F for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 779378,
          "date": "Tue 17 Jan 2023 23:39",
          "username": "Dimidrol",
          "content": "B C F for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        }
      ]
    },
    {
      "question_id": "#155",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is using AWS CodePipeline and AWS CodeBuild to create a CI/CD pipeline for a serverless application that is based on the AWS Serverless Application Model (AWS SAM). The source, build and test steps have been completed. The DevOps engineer has also created two pipeline deployment stages that use AWS CloudFormation as the action provider. One stage uses the \"Create or replace a change set\" action mode. The other stage uses the \"Execute a change set\" action mode.<br><br>The DevOps engineer needs to pass some parameters to a CloudFormation stack during the deployment without changing the code and pipeline structure.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. Set the –parameter-overrides option in the sam deploy command when the CodeBuild stage is invoked.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add all parameters in AWS Systems Manager Parameter Store. Use dynamic references to specify template values in Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the deployment stage where the \"Create or replace a change set\" action mode resides, apply the JSON object in the ParameterOverrides property.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the deployment stage where the \"Execute a change set\" action mode resides, apply the JSON object in the ParameterOverrides property.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793417,
          "date": "Mon 30 Jan 2023 23:38",
          "username": "ozlaoliu",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stackinstances-override.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 790734,
          "date": "Sat 28 Jan 2023 16:36",
          "username": "Bulti",
          "content": "The answer is C.  Cloudformation is used as a deployment provider and therefore Parameter override should happen in the Deploy action. Since this is a new CodePipeline, you will need to perform Parameter override in \\\"Create or replace change set\\\" and not in \\\"Execute Change Set\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787607,
          "date": "Wed 25 Jan 2023 13:33",
          "username": "DerekKey",
          "content": "A: --parameter-overrides<br>A string that contains AWS CloudFormation parameter overrides encoded as key-value pairs. Use the same format as the AWS Command Line Interface (AWS CLI). For example, ParameterKey=ParameterValue InstanceType=t1.micro.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 781719,
          "date": "Fri 20 Jan 2023 01:22",
          "username": "saeidpsaeidp",
          "content": "Create stage creates the changeset and execute changeset gets the change from the creating stageSorry I meant C",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 781733,
          "date": "Fri 20 Jan 2023 01:37",
          "username": "saeidp",
          "content": "Sorry I meant C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776758,
          "date": "Sun 15 Jan 2023 16:47",
          "username": "Oleg_gol",
          "content": "--parameter-overrides\tA string that contains AWS CloudFormation parameter overrides encoded as key-value pairs. Use the same format as the AWS Command Line Interface (AWS CLI).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#156",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team uses AWS CodeCommit, AWS CodePipeline, and AWS CodeBuild to develop and deploy an application. Changes to the code are submitted by pull requests. The development team reviews and merges the pull requests, and then the pipeline builds and tests the application.<br><br>Over time, the number of pull requests has increased. The pipeline is frequently blocked because of failing tests. To prevent this blockage, the development team wants to run the unit and integration tests on each pull request before it is merged.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create a CodeBuild project to run the unit and integration tests. Create a CodeCommit approval rule template. Configure the template to require the successful invocation of the CodeBuild project. Attach the approval rule to the project's CodeCommit repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to match pullRequestCreated events from CodeCommit. Create a CodeBuild project to run the unit and integration tests. Configure the CodeBuild project as a target of the EventBridge (CloudWatch Events) rule that includes a custom event payload with the CodeCommit repository and branch information from the event.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to match pullRequestCreated events from CodeCommit. Modify the existing CodePipeline pipeline to not run the deploy steps if the build is started from a pull request. Configure the EventBridge (CloudWatch Events) rule to run the pipeline with a custom payload that contains the CodeCommit repository and branch information from the event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CodeBuild project to run the unit and integration tests. Create a CodeCommit notification rule that matches when a pull request is created or updated. Configure the notification rule to invoke the CodeBuild project.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790738,
          "date": "Sat 28 Jan 2023 16:38",
          "username": "Bulti",
          "content": "B is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 781872,
          "date": "Fri 20 Jan 2023 05:25",
          "username": "saeidp",
          "content": "B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 779263,
          "date": "Tue 17 Jan 2023 20:31",
          "username": "Dimidrol",
          "content": "B sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776738,
          "date": "Sun 15 Jan 2023 16:31",
          "username": "Oleg_gol",
          "content": "B or С",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: Б"
        }
      ]
    },
    {
      "question_id": "#157",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is using AWS CodeDeploy across a fleet of Amazon EC2 Instances in an EC2 Auto Scaling group. The associated CodeDeploy deployment group, which is integrated with EC2 Auto Scaling, is configured to perform in-place deployments with CodeDeplcyDefault.OneAtATime. During an ongoing new deployment, the engineer discovers that although the overall deployment finished successfully, two out of five instances have the previous application revision deployed. The other three instances have the newest application revision.<br><br>What is likely causing this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. The two affected instances failed to fetch the new deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. A failed AfterInstall lifecycle event hook caused the CodeDeploy agent to roll back to the previous version on the affected instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The CodeDeploy agent was not installed in two affected instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. EC2 Auto Scaling launched two new instances while the new deployment had not yet finished, causing the previous version to be deployed on the affected instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790744,
          "date": "Sat 28 Jan 2023 16:40",
          "username": "Bulti",
          "content": "D is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787635,
          "date": "Wed 25 Jan 2023 13:51",
          "username": "DerekKey",
          "content": "D: Scale-out events during a deployment<br>If an Amazon EC2 Auto Scaling scale-out event occurs while a deployment is underway, the new instances will be updated with the application revision that was most recently deployed, not the application revision that is currently being deployed. If the deployment succeeds, the old instances and the newly scaled-out instances will be hosting different application revisions. To bring those instances up to date, CodeDeploy automatically starts a follow-on deployment (immediately after the first) to update any outdated instances. If you'd like to change this default behavior so that outdated EC2 instances are left at the older revision, see Automatic updates to outdated instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 780749,
          "date": "Thu 19 Jan 2023 06:34",
          "username": "devops7",
          "content": "D for sure. It is a very common SysOps exam question",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 779275,
          "date": "Tue 17 Jan 2023 20:36",
          "username": "Dimidrol",
          "content": "D sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776725,
          "date": "Sun 15 Jan 2023 16:19",
          "username": "Oleg_gol",
          "content": "https://www.examtopics.com/discussions/amazon/view/8098-exam-aws-devops-engineer-professional-topic-1-question-93/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#158",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS CodePipeline pipelines to automate releases of its application. A typical pipeline consists of three stages: build, test, and deployment. The company has been using a separate AWS CodeBuild project to run scripts for each stage. However, the company now wants to use AWS CodeDeploy to handle the deployment stage of the pipelines.<br><br>The company has packaged the application as an RPM package and must deploy the application to a fleet of Amazon EC2 instances. The EC2 instances are in an EC2 Auto Scaling group and are launched from a common AMI.<br><br>Which combination of steps should a DevOps engineer perform to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Create a new version of the common AMI with the CodeDeploy agent installed. Update the IAM role of the EC2 instances to allow access to CodeDeploy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new version of the common AMI with the CodeDeploy agent installed. Create an AppSpec file that contains application deployment scripts and grants access to CodeDeploy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an application in CodeDeploy. Configure an in-place deployment type. Specify the Auto Scaling group as the deployment target. Add a step to the CodePipeline pipeline to use EC2 Image Builder to create a new AMI. Configure CodeDeploy to deploy the newly created AMI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an application in CodeDeploy. Configure an in-place deployment type. Specify the Auto Scaling group as the deployment target. Update the CodePipeline pipeline to use the CodeDeploy action to deploy the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an application in CodeDeploy. Configure an in-place deployment type. Specify the EC2 instances that are launched from the common AMI as the deployment target. Update the CodePipeline pipeline to use the CodeDeploy action to deploy the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790782,
          "date": "Sat 28 Jan 2023 17:07",
          "username": "Bulti",
          "content": "A and D are correct.B is incorrect because we cannot create an IAM role within the script. Its too late, the code is already running on the EC2 instance by now and it requires the Instance role to grant necessary permission to EC2 to access the artifacts in S3 for deploying them on EC2 instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 788729,
          "date": "Thu 26 Jan 2023 13:53",
          "username": "wzh5831",
          "content": "A and D for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 781906,
          "date": "Fri 20 Jan 2023 06:35",
          "username": "saeidp",
          "content": "A and D for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#159",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an organization in AWS Organizations to manage multiple AWS accounts. The company's development team wants to use AWS Lambda functions to meet resiliency requirements and is rewriting all applications to work with Lambda functions that are deployed in a VPC.  The development team is using Amazon Elastic File System (Amazon EFS) as shared storage in Account A in the organization.<br><br>The company wants to continue to use Amazon EFS with Lambda. Company policy requires all serverless projects to be deployed in Account B. <br><br>A DevOps engineer needs to reconfigure an existing EFS file system to allow Lambda functions to access the data through an existing EFS access point.<br><br>Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. Update the EFS file system policy to provide Account B with access to mount and write to the EFS file system in Account A. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create SCPs to set permission guardrails with fine-grained control for Amazon EFS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new EFS file system in Account B.  Use AWS Database Migration Service (AWS DMS) to keep data from Account A and Account B synchronized.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Lambda execution roles with permission to access the VPC and the EFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a VPC peering connection to connect Account A to Account B.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure the Lambda functions in Account B to assume an existing IAM role in Account A. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793447,
          "date": "Tue 31 Jan 2023 00:28",
          "username": "ozlaoliu",
          "content": "Vote for AEF<br>https://aws.amazon.com/premiumsupport/knowledge-center/access-efs-across-accounts/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790833,
          "date": "Sat 28 Jan 2023 17:57",
          "username": "Bulti",
          "content": "https://aws.amazon.com/blogs/storage/mount-amazon-efs-file-systems-cross-account-from-amazon-eks/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 790831,
          "date": "Sat 28 Jan 2023 17:57",
          "username": "Bulti",
          "content": "AEF are the right answers. <br>1. Need to update the file system policy on EFS to allow mounting the file system intoAccount B.  <br>## File System Policy<br>$ cat file-system-policy.json<br>{<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": [<br>\\\"elasticfilesystem:ClientMount\\\",<br>\\\"elasticfilesystem:ClientWrite\\\"<br>],<br>\\\"Principal\\\": {<br>\\\"AWS\\\": \\\"arn:aws:iam::<aws-account-id-A>:root\\\" # Replace with AWS account ID of EKS cluster<br>}<br>} <br>]<br>}<br>2. Need VPC peering between Account A and Account B as the pre-requisite<br>3. Need to assume cross-account IAM role to describe the mounts so that a specific mount can be chosen.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 781909,
          "date": "Fri 20 Jan 2023 06:47",
          "username": "saeidpsaeidp",
          "content": "A D F for meADE<br>VPC peering is needed",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 781915,
          "date": "Fri 20 Jan 2023 07:01",
          "username": "saeidp",
          "content": "ADE<br>VPC peering is needed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779280,
          "date": "Tue 17 Jan 2023 20:39",
          "username": "DimidrolDimidrol",
          "content": "A D Ffor mehttps://aws.amazon.com/ru/blogs/storage/mount-amazon-efs-file-systems-cross-account-from-amazon-eks/",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 779282,
          "date": "Tue 17 Jan 2023 20:41",
          "username": "Dimidrol",
          "content": "https://aws.amazon.com/ru/blogs/storage/mount-amazon-efs-file-systems-cross-account-from-amazon-eks/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 776696,
          "date": "Sun 15 Jan 2023 16:05",
          "username": "Oleg_gol",
          "content": "i think ADF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ADF"
        }
      ]
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The organization includes workload accounts that contain enterprise applications. The company centrally manages users from an operations account. No users can be created in the workload accounts. The company recently added an operations team and must provide the operations team members with administrator access to each workload account.<br><br>Which combination of actions will provide this access? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#160",
          "answers": [
            {
              "choice": "<p>A. Create a SysAdmin role in the operations account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the workload accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a SysAdmin role in each workload account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the operations account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Cognito identity pool in the operations account. Attach the SysAdmin role as an authenticated role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the operations account, create an IAM user for each operations team member.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the operations account, create an IAM user group that is named SysAdmins. Add an IAM policy that allows the sts:AssumeRole action for the SysAdmin role in each workload account. Add all operations team members to the group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an Amazon Cognito user pool in the operations account. Create an Amazon Cognito user for each operations team member.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790844,
          "date": "Sat 28 Jan 2023 18:08",
          "username": "BultiBulti",
          "content": "I think the answer is B, E, F.  <br>B and E are correct for sure. Now between C and E, I am not sure what C really means. Does it mean create IAM user for each operations team member and add them to the IAM Group? I dont' think so because the question reads \\\"all users are centrally managed in the operations account\\\". It indicates that AWS SSO is configured and Cognito User Pool is setup as the Identity Provider. Once the user logs in using AWS SSO and authenticates against the Cognito user pool, they can be mapped to the IAM group that has required permissions to assume an SysAsdmin role containing the AdmnistratorAccess permissions in the workload accounts.I meant between C and F*",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 790845,
          "date": "Sat 28 Jan 2023 18:09",
          "username": "Bulti",
          "content": "I meant between C and F*",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783780,
          "date": "Sat 21 Jan 2023 23:18",
          "username": "Christina666",
          "content": "I chose BCE.  <br>1. Create an assume role for operation team to access workload team, <br>2. then add operation team members to a group, attach this assume role",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 781919,
          "date": "Fri 20 Jan 2023 07:16",
          "username": "saeidp",
          "content": "BDE for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 776670,
          "date": "Sun 15 Jan 2023 15:34",
          "username": "Oleg_goldevops7Dimidroldevops7",
          "content": "BDE https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.htmlI am unsure of the answer yet, but I am 90% sure that it is not BDE because there are 3 pairs.<br>AB, DE, CF.  The answer should be one from each pair. So, DE together is wrong.Why bde is wrong. We used such approach before migrating to ssoAs I said before, \\\"I am unsure.\\\" However, based on all previous AWS question patterns; for example, questions 9, 12, 13 & etc. The answers are 3 pairs and pick one from each pair. You could be right and BDE is the answer but I have not seen this kind of AWS answer pattern before.",
          "upvote_count": "1111",
          "selected_answers": "Selected Answer: BDE"
        },
        {
          "id": 779656,
          "date": "Wed 18 Jan 2023 07:57",
          "username": "devops7Dimidroldevops7",
          "content": "I am unsure of the answer yet, but I am 90% sure that it is not BDE because there are 3 pairs.<br>AB, DE, CF.  The answer should be one from each pair. So, DE together is wrong.Why bde is wrong. We used such approach before migrating to ssoAs I said before, \\\"I am unsure.\\\" However, based on all previous AWS question patterns; for example, questions 9, 12, 13 & etc. The answers are 3 pairs and pick one from each pair. You could be right and BDE is the answer but I have not seen this kind of AWS answer pattern before.",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 781232,
          "date": "Thu 19 Jan 2023 15:39",
          "username": "Dimidroldevops7",
          "content": "Why bde is wrong. We used such approach before migrating to ssoAs I said before, \\\"I am unsure.\\\" However, based on all previous AWS question patterns; for example, questions 9, 12, 13 & etc. The answers are 3 pairs and pick one from each pair. You could be right and BDE is the answer but I have not seen this kind of AWS answer pattern before.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 781673,
          "date": "Thu 19 Jan 2023 23:44",
          "username": "devops7",
          "content": "As I said before, \\\"I am unsure.\\\" However, based on all previous AWS question patterns; for example, questions 9, 12, 13 & etc. The answers are 3 pairs and pick one from each pair. You could be right and BDE is the answer but I have not seen this kind of AWS answer pattern before.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's DevOps engineer manages an organization in AWS Organizations. The organization includes many accounts. The company needs all AWS CloudFormation stacks in production accounts to have termination protection enabled. Non-production accounts do not need termination protection.<br><br>The company has designated a centralized account for AWS Config aggregation and has configured all accounts to support the use of CloudFormation and AWS Config. The company also has grouped all production accounts into an OU.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#161",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule to detect stacks that do not have termination protection enabled. Add a remediation action to the rule to enable termination protection. Deploy the rule across the organization by using the PutOrganizationConfigRule API operation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFormation template that deploys an AWS Config rule to detect stacks that do not have termination protection enabled. Add a remediation action to the rule to enable termination protection. Deploy the template to the OU of the production accounts by using CloudFormation StackSets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP that denies cloudformation:DeleteStack actions. Apply the SCP to the OU of the production accounts by using CloudFormation StackSets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFormation stack policy that denies Update:Delete actions. Apply the policy to the OU of the production accounts by using CloudFormation StackSets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790856,
          "date": "Sat 28 Jan 2023 18:26",
          "username": "BultiBulti",
          "content": "C is the right answer. B is incorrect because there for no Config rule StackSets that can detect Termination Protection.A could have been a potential choice considering we can create custom Config rules using Lambda even if AWS config rule is not available for CF termiation protection. However it states calling the PutOrganizationConfigRule API across the entire organization but we don't want Termination protection in the Non-Prod accounts. So I will still go with C. ",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 792733,
          "date": "Mon 30 Jan 2023 13:35",
          "username": "Bulti",
          "content": "A could have been a potential choice considering we can create custom Config rules using Lambda even if AWS config rule is not available for CF termiation protection. However it states calling the PutOrganizationConfigRule API across the entire organization but we don't want Termination protection in the Non-Prod accounts. So I will still go with C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 788304,
          "date": "Thu 26 Jan 2023 03:30",
          "username": "Goksorisaeidp",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.htmlaws config rule?",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 789136,
          "date": "Thu 26 Jan 2023 23:09",
          "username": "saeidp",
          "content": "aws config rule?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 781961,
          "date": "Fri 20 Jan 2023 08:26",
          "username": "saeidp",
          "content": "It seems there are no config rules for cloudformation terminate protection<br>Then C is the best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 781936,
          "date": "Fri 20 Jan 2023 07:44",
          "username": "saeidpsaeidp",
          "content": "I'll go with BIt seems there are no config rules for cloudformation terminate protection<br>Then C is the best",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 781960,
          "date": "Fri 20 Jan 2023 08:26",
          "username": "saeidp",
          "content": "It seems there are no config rules for cloudformation terminate protection<br>Then C is the best",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776651,
          "date": "Sun 15 Jan 2023 15:12",
          "username": "Oleg_gol",
          "content": "i vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#162",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an application in a production VPC in a single AWS account. The application is popular and is experiencing heavy usage. The company's security team wants to add additional security, such as AWS WAF, to the application deployment. However, the application's product manager is concerned about cost and does not want to approve the change unless the security team can prove that additional security is necessary.<br><br>The security team believes that some of the application's demand might come from users that have IP addresses that are on a deny list. The security team provides the deny list to a DevOps engineer. If any of the IP addresses on the deny list access the application, the security team wants to receive automated notification in near real time so that the security team can document that the application needs additional security. The DevOps engineer creates a VPC flow log for the production VPC. <br><br>Which set of additional steps should the DevOps engineer take to meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#162",
          "answers": [
            {
              "choice": "<p>A. Create a log group in Amazon CloudWatch Logs. Configure the VPC flow log to capture accepted traffic and to send the data to the log group. Create an Amazon CloudWatch metric filter for IP addresses on the deny list. Create a CloudWatch alarm with the metric filter as input. Set the period to 5 minutes and the datapoints to alarm to 1. Use an Amazon Simple Notification Service (Amazon SNS) topic to send alarm notices to the security team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 bucket for log files. Configure the VPC flow log to capture all traffic and to send the data to the S3 bucket. Configure Amazon Athena to return all log files in the S3 bucket for IP addresses on the deny list. Configure Amazon QuickSight to accept data from Athena and to publish the data as a dashboard that the security team can access. Create a threshold alert of 1 for successful access. Configure the alert to automatically notify the security team as frequently as possible when the alert threshold is met.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket for log files. Configure the VPC flow log to capture accepted traffic and to send the data to the S3 bucket. Configure an Amazon OpenSearch Service duster and domain for the log files. Create an AWS Lambda function to retrieve the logs from the S3 bucket, format the logs, and load the logs into the OpenSearch Service cluster. Schedule the Lambda function to run every 5 minutes. Configure an alert and condition in OpenSearch Service to send alerts to the security team through an Amazon Simple Notification Service (Amazon SNS) topic when access from the IP addresses on the deny list is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a log group in Amazon CloudWatch Logs. Create an Amazon S3 bucket to hold query results. Configure the VPC flow log to capture all traffic and to send the data to the log group. Deploy an Amazon Athena CloudWatch connector in AWS Lambda. Connect the connector to the log group. Configure Athena to periodically query for all accepted traffic from the IP addresses on the deny list and to store the results in the S3 bucket. Configure an S3 event notification to automatically notify the security team through an Amazon Simple Notification Service (Amazon SNS) topic when new objects are added to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790863,
          "date": "Sat 28 Jan 2023 18:32",
          "username": "Bulti",
          "content": "A is the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783783,
          "date": "Sat 21 Jan 2023 23:23",
          "username": "Christina666",
          "content": "most cost-effectively, so I choose A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 783146,
          "date": "Sat 21 Jan 2023 10:46",
          "username": "saeidp",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779291,
          "date": "Tue 17 Jan 2023 20:53",
          "username": "Dimidrol",
          "content": "A sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776632,
          "date": "Sun 15 Jan 2023 14:52",
          "username": "Oleg_gol",
          "content": "i think A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#163",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a serverless web application that is hosted on AWS. The application consists of Amazon S3. Amazon API Gateway, several AWS Lambda functions, and an Amazon RDS for MySQL database. The company is using AWS CodeCommit to store the source code. The source code is a combination of AWS Serverless Application Model (AWS SAM) templates and Python code.<br><br>A security audit and penetration test reveal that user names and passwords for authentication to the database are hardcoded within CodeCommit repositories. A DevOps engineer must implement a solution to automatically detect and prevent hardcoded secrets.<br><br>What is the MOST secure solution that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#163",
          "answers": [
            {
              "choice": "<p>A. Enable Amazon CodeGuru Profiler. Decorate the handler function with @with_lambda_profiler(). Manually review the recommendation report. Write the secret to AWS Systems Manager Parameter Store as a secure string. Update the SAM templates and the Python code to pull the secret from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate the CodeCommit repository with Amazon CodeGuru Reviewer. Manually check the code review for any recommendations. Choose the option to protect the secret. Update the SAM templates and the Python code to pull the secret from AWS Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon CodeGuru Profiler. Decorate the handler function with @with lambda profiler(). Manually review the recommendation report. Choose the option to protect the secret. Update the SAM templates and the Python code to pull the secret from AWS Secrets Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate the CodeCommit repository with Amazon CodeGuru Reviewer. Manually check the code review for any recommendations. Write the secret to AWS Systems Manager Parameter Store as a string. Update the SAM templates and the Python code to pull the secret from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790874,
          "date": "Sat 28 Jan 2023 18:42",
          "username": "Bulti",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 783788,
          "date": "Sat 21 Jan 2023 23:28",
          "username": "saeidp",
          "content": "B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776610,
          "date": "Sun 15 Jan 2023 14:38",
          "username": "Oleg_gol",
          "content": "B- https://aws.amazon.com/ru/blogs/aws/codeguru-reviewer-secrets-detector-identify-hardcoded-secrets/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#164",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that monitors user activity on the company's website and mobile apps. The application uses Amazon ElastiCache for Redis as a write-through cache and uses an Amazon RDS for PostgreSQL database for longer storage. When the application receives a request to record a user's action, the application writes to the Redis cluster and the database at the same time. Internal recommendation applications consume the data to produce content recommendations for each user.<br><br>During peak periods, the recommendation applications cannot generate recommendations for users because of stale and missing data. The Redis cache is configured with cluster mode turned off, and the database is configured with a single read replica.<br><br>The company wants to ensure that the recommendation applications can generate content recommendations during peak periods. A DevOps engineer already has created a new ElastiCache for Redis cluster with cluster mode enabled.<br><br>What should the DevOps engineer do next to meet the company's requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#164",
          "answers": [
            {
              "choice": "<p>A. Create a target tracking auto scaling policy for the Redis cluster's ElastiCachePrimaryEngineCPUUtilization metric. Configure the auto scaling policy to increase and decrease shards to the Redis cluster. Update the recommendation applications to use the clusters configuration endpoint to access Redis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a target tracking auto scaling policy for the Redis cluster's ElastiCachePrimaryEngineCPUUtilization metric. Configure the auto scaling policy to increase and decrease shards to the Redis cluster. Update the recommendation applications to use the cluster's read replica endpoint to access Redis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a scheduled auto scaling policy for the Redis cluster's ElastiCachePrimaryEngineCPUUtilization metric. Configure the auto scaling policy to add read replicas to the Redis cluster. Update the recommendation applications to use the clusters configuration endpoint to access Redis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a scheduled auto scaling policy for the Redis cluster's ElastiCachePrimaryEngineCPUUtilization metric. Configure the auto scaling policy to add read replicas to the Redis cluster. Update the recommendation applications to use the database's read replica endpoint instead of Redis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791608,
          "date": "Sun 29 Jan 2023 13:07",
          "username": "ZekUSalo",
          "content": "I think the answer is B from link: https://aws.amazon.com/ru/about-aws/whats-new/2019/06/amazon-elasticache-launches-reader-endpoint-for-redis/. \\\"You can now use a single reader endpoint to connect to your Redis read replicas\\\"In the same link:<br>\\\"Reader endpoints work with ElastiCache for Redis clusters with cluster-mode disabled.\\\" But it the question it was clearly mentioned that new Redis cluster was created with cluster mode ENABLED. <br>Also please read another URL:<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Endpoints.html<br><br>Redis (cluster mode disabled) clusters, use the Primary Endpoint for all write operations. Use the Reader Endpoint to evenly split incoming connections to the endpoint between all read replicas. <br><br>Redis (cluster mode enabled) clusters, use the cluster's Configuration Endpoint for all operations that support cluster mode enabled commands. <br><br>The answer should be \\\"A\\\"",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 792730,
          "date": "Mon 30 Jan 2023 13:28",
          "username": "USalo",
          "content": "In the same link:<br>\\\"Reader endpoints work with ElastiCache for Redis clusters with cluster-mode disabled.\\\" But it the question it was clearly mentioned that new Redis cluster was created with cluster mode ENABLED. <br>Also please read another URL:<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Endpoints.html<br><br>Redis (cluster mode disabled) clusters, use the Primary Endpoint for all write operations. Use the Reader Endpoint to evenly split incoming connections to the endpoint between all read replicas. <br><br>Redis (cluster mode enabled) clusters, use the cluster's Configuration Endpoint for all operations that support cluster mode enabled commands. <br><br>The answer should be \\\"A\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 790917,
          "date": "Sat 28 Jan 2023 19:12",
          "username": "Bulti",
          "content": "A is the right answer. use Cluster configuration endpoint and when target tracking scaling policy is used with a predefined metric of ElastiCachePrimaryEngineCPUUtilization it scale out the shards and not the replicas.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 784074,
          "date": "Sun 22 Jan 2023 09:21",
          "username": "saeidpsaeidp",
          "content": "A for me<br>cluster mode is enabled.<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Endpoints.html<br>answere B is good for cluster mode disabledBy the way cluster mode disabled only uses one shard",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 792076,
          "date": "Sun 29 Jan 2023 22:25",
          "username": "saeidp",
          "content": "By the way cluster mode disabled only uses one shard",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783789,
          "date": "Sat 21 Jan 2023 23:31",
          "username": "Christina666",
          "content": "read replicas endpoint for traffic",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 780889,
          "date": "Thu 19 Jan 2023 09:21",
          "username": "devops7",
          "content": "I agree the answer is either A or B but I don't see \\\"cluster's read replica\\\" in the question. So, I select A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779365,
          "date": "Tue 17 Jan 2023 23:08",
          "username": "Dimidrol",
          "content": "I think between A and B.  Choose B because no need to write.https://aws.amazon.com/ru/about-aws/whats-new/2019/06/amazon-elasticache-launches-reader-endpoint-for-redis/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#165",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores purchase history in an Amazon DynamoDB table. The company needs other workloads that run on AWS to react to data changes in the table.<br><br>The company has enabled a DynamoDB stream on the table. Three existing AWS Lambda functions have an event source mapping configured for the DynamoDB stream. The company's application developers plan to add other applications that will need to react to changes in the table. A DevOps engineer must design an architecture that will give the additional consumers this functionality.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#165",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge event bus. Create a new Lambda function that uses the existing DynamoDB stream as an event source. Configure the new Lambda function to post those events to the event bus. Update the original Lambda functions to react to events in the event bus. As other applications need the events, configure the applications to use the event bus as an event source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SOS) queue. Create a new Lambda function that uses the existing DynamoDB stream as an event source. Configure the new Lambda function to post those events to the SOS queue. Update the original Lambda functions to react to entries in the SOS queue. As other applications need the events, configure the applications to use the SOS queue as an event source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Kinesis data stream. Create a new Lambda function that uses the existing DynamoDB stream as an event source. Configure the new Lambda function to post those events to the Kinesis data stream. Update the original Lambda functions to subscribe to records in the Kinesis data stream. As other applications need the events, configure the applications to use the Kinesis data stream as an event source.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the DynamoDB table to use on-demand capacity mode. Increase the memory of the Lambda functions. Configure the Lambda functions to use provisioned concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790940,
          "date": "Sat 28 Jan 2023 19:38",
          "username": "Bulti",
          "content": "C is a better option than A because it's more operationality efficient. Option B is wrong because EventBrige Bus doesn't have a persistent store whereas KDS does. So there won't be a loss of data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784095,
          "date": "Sun 22 Jan 2023 09:57",
          "username": "saeidpsaeidp",
          "content": "You don't need lambda to send data from streams to kinesis stream. It can be done automatically<br>I go with BOnly drawback with B is if an aplication process the event data then it will be deleted from the Queue",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 784103,
          "date": "Sun 22 Jan 2023 10:09",
          "username": "saeidp",
          "content": "Only drawback with B is if an aplication process the event data then it will be deleted from the Queue",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779301,
          "date": "Tue 17 Jan 2023 21:07",
          "username": "Dimidrol",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776572,
          "date": "Sun 15 Jan 2023 14:12",
          "username": "Oleg_gol",
          "content": "agree C<br>https://aws.amazon.com/ru/blogs/database/dynamodb-streams-use-cases-and-design-patterns/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#166",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company has several thousand Amazon EC2 instances in an AWS account. The company is using Slack and a shared email inbox for team communications and important updates. A DevOps engineer needs to send all AWS-scheduled EC2 maintenance notifications to the Slack channel and the shared inbox. The solution must include the instances' Name and Owner tags.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#166",
          "answers": [
            {
              "choice": "<p>A. Integrate AWS Trusted Advisor with AWS Config. Configure a custom AWS Config rule to invoke an AWS Lambda function to publish notifications to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe a Slack channel endpoint and the shared inbox to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge to monitor for AWS Health events. Configure the maintenance events to target an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to send notifications to the Slack channel and the shared inbox.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that sends EC2 maintenance notifications to the Slack channel and the shared inbox. Monitor EC2 health events by using Amazon CloudWatch metrics. Configure a CloudWatch alarm that invokes the Lambda function when a maintenance notification is received.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Support integration with AWS CloudTrail. Create a CloudTrail lookup event to invoke an AWS Lambda function to pass EC2 maintenance notifications to Amazon Simple Notification Service (Amazon SNS). Configure Amazon SNS to target the Slack channel and the shared inbox.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 784733,
          "date": "Sun 22 Jan 2023 23:12",
          "username": "saeidp",
          "content": "B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776552,
          "date": "Sun 15 Jan 2023 13:48",
          "username": "Oleg_gol",
          "content": "B<br>https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#167",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Database Migration Service (AWS DMS) to replicate data from a source database in a data center to a target Amazon Aurora PostgreSQL database. The company has created a DMS replication task with change data capture (CDC).<br><br>The replication instance sometimes gets interrupted and affects critical functionality. The company must improve the replication instance's resiliency and receive notifications about interruptions.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#167",
          "answers": [
            {
              "choice": "<p>A. Copy data from the source database to Amazon S3 by using AWS DataSync. Configure AWS Lambda functions to copy the data to the target database. Configure Amazon CloudWatch alarms to monitor the Lambda functions for errors and throttles. Use an Amazon Simple Notification Service (Amazon SNS) topic for email notification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create Amazon CloudWatch alarms to monitor DMS replication task metrics and host metrics. Use an Amazon Simple Notification Service (Amazon SNS) topic for email notification and to invoke an AWS Lambda function to configure a standby DMS replication instance in a different AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Amazon CloudWatch alarms to monitor DMS replication task metrics and host metrics. Use an Amazon Simple Notification Service (Amazon SNS) topic for email notification. After receiving the notification, configure a new DMS replication task in the same AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DMS replication instance by tuming on Multi-AZ support. Create Amazon CloudWatch alarms to monitor DMS replication task metrics and host metrics. Use an Amazon Simple Notification Service (Amazon SNS) topic for email notification.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790945,
          "date": "Sat 28 Jan 2023 19:41",
          "username": "Bulti",
          "content": "D is correct. The keyword is \\\"to make the DMS replication instance resilient\\\". This should ring Multi-AZ.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 787399,
          "date": "Wed 25 Jan 2023 09:26",
          "username": "DerekKey",
          "content": "C - doesn't make sense - you don't have to create new task you can restart exisrting task if you have storage<br>D - If you use AWS DMS for ongoing replication purposes, choosing a Multi-AZ instance can improve your availability should a storage issue occur. When using a single AZ or Multi-AZ replication instance during a FULL LOAD and a failover or host replacement occurs, the full load task is expected to fail. You can restart the task from the point of failure for the remaining tables that didn't complete, or are in an error state.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 784739,
          "date": "Sun 22 Jan 2023 23:26",
          "username": "saeidp",
          "content": "I go with D.  Question is asking about least operational overhead. By the way multi-AZ allows continuous data replication by enabling redundant replication instances<br>https://aws.amazon.com/dms/features/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776548,
          "date": "Sun 15 Jan 2023 13:44",
          "username": "Oleg_gol",
          "content": "i vote c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#168",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an application on AWS Elastic Beanstalk by using an all-at-once deployment method. The deployment failed recently because of an application misconfiguration and resulted in significant downtime.<br><br>To prevent such downtime in the future, a DevOps engineer needs to revise the deployment method while maintaining the application performance. The DevOps engineer must ensure that application versions are consistently configured across all instances without creating new environments.<br><br>Which deployment solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#168",
          "answers": [
            {
              "choice": "<p>A. Switch to a rolling deployment strategy for future application updates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Switch to a rolling deployment with additional batch strategy for future application updates.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Switch to an immutable deployment strategy for future application updates.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Switch to a blue/green deployment strategy for future application updates.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 793619,
          "date": "Tue 31 Jan 2023 05:08",
          "username": "ozlaoliu",
          "content": "Immutable deployment is the best option to meet the requirements of maintaining the performance and consistent versions and you don't need to create new environments for the immutable deployment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 790949,
          "date": "Sat 28 Jan 2023 19:45",
          "username": "Bulti",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 787384,
          "date": "Wed 25 Jan 2023 09:08",
          "username": "DerekKey",
          "content": "My choice<br>Immutable - will add additionall auto scaling for new instances still keeping old instances serving requests - roll back is simle, new auto scaling gets decomissioned<br>A & B - requires manual redeploy = app performance & downtime + will have a mix of old and new versions<br>D - requires new environment",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785412,
          "date": "Mon 23 Jan 2023 15:05",
          "username": "ericzaj",
          "content": "This is one of the most poorly worded question. Agreed, what is meant by environment in this. I would have to choose C here given the \\\"versions are consistently configured across all instances\\\" requirement.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 784757,
          "date": "Sun 22 Jan 2023 23:54",
          "username": "saeidp",
          "content": "What are new environments? beanstalk environments or new instances?<br>How to maintain the application performance with rolling deployment?<br>If environment means instance, then A is correct otherwise C is the best answer to maintain performance",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779302,
          "date": "Tue 17 Jan 2023 21:12",
          "username": "Dimidrol",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778808,
          "date": "Tue 17 Jan 2023 11:58",
          "username": "Boubou480",
          "content": "Only A do not create new environment.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776531,
          "date": "Sun 15 Jan 2023 13:26",
          "username": "Oleg_goldevops7",
          "content": "B-without creating new environmentsBut B is \\\"with additional batch.\\\" It is creating new environments",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 777464,
          "date": "Mon 16 Jan 2023 09:38",
          "username": "devops7",
          "content": "But B is \\\"with additional batch.\\\" It is creating new environments",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 776223,
          "date": "Sun 15 Jan 2023 08:10",
          "username": "devops7",
          "content": "A is the only option without creating new environments",
          "upvote_count": "2",
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
      "question_text": "<p>A company requires that its internally facing web application be highly available. The architecture is made up of one Amazon EC2 web server instance and one NAT instance that provides outbound internet access for updates and accessing public data.<br><br>Which combination of architecture adjustments should the company implement to achieve high availability? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#169",
          "answers": [
            {
              "choice": "<p>A. Add the NAT instance to an EC2 Auto Scaling group that spans multiple Availability Zones. Update the route tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create additional EC2 instances spanning multiple Availability Zones. Add an Application Load Balancer to split the load between them.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Application Load Balancer in front of the EC2 instance. Configure Amazon Cloud Watch alarms to recover the EC2 instance upon host failure.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replace the NAT instance with a NAT gateway in each Availability Zone. Update the route tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replace the NAT instance with a NAT gateway that spans multiple Availability Zones. Update the route tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 790954,
          "date": "Sat 28 Jan 2023 19:48",
          "username": "Bulti",
          "content": "B and D due to the need to select a combination of choices.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 784807,
          "date": "Mon 23 Jan 2023 00:59",
          "username": "saeidp",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 774559,
          "date": "Fri 13 Jan 2023 15:06",
          "username": "Oleg_gol",
          "content": "BD<br>https://www.examtopics.com/discussions/amazon/view/47652-exam-aws-devops-engineer-professional-topic-1-question-215/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#170",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on Amazon EC2 instances. A DevOps engineer needs to aggregate the application logs to a central system for the company's application team to search. A critical error message periodically appears in the log files. The DevOps engineer needs to notify the application team by email when these error messages occur.<br><br>Which solution will meet these requirements in the MOST operationally efficient manner?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#170",
          "answers": [
            {
              "choice": "<p>A. Configure the unified Amazon CloudWatch agent on the EC2 instances to publish the application logs files to a CloudWatch log group. Configure a metric filter on the CloudWatch log group to detect the critical errors and to create a custom metric. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure a CloudWatch alarm to use the custom metric to notify the SNS topic. Subscribe the application team's email address to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Amazon Kinesis agent on the EC2 instances. Configure the Kinesis agent with the location of the log files. Stream the logs to a Kinesis Data Firehose delivery stream with an Amazon CloudWatch metrics stream as a destination. Configure an AWS Lambda function to detect the error message and to create a custom metric. Associate the Lambda function with the stream. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure a CloudWatch alarm to use the custom metric to notify the SNS topic. Subscribe the application team's email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the AWS X-Ray daemon on the EC2 instances. Instrument the application with the AWS Distro for OpenTelemetry (ADOT). Configure the ADOT collector with the location of the custom log files and the name of an Amazon CloudWatch log group. Use the CloudWatch embedded metric format to generate a custom metric that is based on the error message. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure a CloudWatch alarm to use the custom metric to notify the SNS topic. Subscribe the application team's email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the unified Amazon CloudWatch agent on the EC2 instances to publish the application logs files to a CloudWatch log group. Create an Amazon OpenSearch Service domain. Subscribe the CloudWatch log group to the OpenSearch Service domain. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure an OpenSearch Service alert monitor to notify the SNS topic. Subscribe the application team's email address to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791056,
          "date": "Sat 28 Jan 2023 21:21",
          "username": "Bulti",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 783797,
          "date": "Sat 21 Jan 2023 23:45",
          "username": "Christina666",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 779343,
          "date": "Tue 17 Jan 2023 22:28",
          "username": "Dimidrol",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776513,
          "date": "Sun 15 Jan 2023 13:12",
          "username": "Oleg_gol",
          "content": "I vote A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#171",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a new Amazon API Gateway API that retrieves the cost of items for the company's online store. An AWS Lambda function supports the API and retrieves the data from an Amazon DynamoDB table. The API's latency increases during times of peak usage each day. However, the latency of the DynamoDB table reads is constant throughout the day.<br><br>A DevOps engineer configures DynamoDB Accelerator (DAX) for the DynamoDB table, and the API latency decreases throughout the day. The DevOps engineer then configures Lambda provisioned concurrency with a limit of two concurrent invocations. This change reduces the latency during normal usage. However, the company is still experiencing higher latency during times of peak usage than during times of normal usage.<br><br>Which set of additional steps should the DevOps engineer take to produce the LARGEST decrease in API latency?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#171",
          "answers": [
            {
              "choice": "<p>A. Increase the read capacity of the DynamoDB table. Use AWS Application Auto Scaling to manage provisioned concurrency for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable caching in API Gateway. Stop using provisioned concurrency for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Delete the DAX cluster for the DynamoDB table. Use AWS Application Auto Scaling to manage provisioned concurrency for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable caching in API Gateway. Use AWS Application Auto Scaling to manage provisioned concurrency for the Lambda function<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791080,
          "date": "Sat 28 Jan 2023 21:49",
          "username": "Bulti",
          "content": "D is correct. Need to use both autoscaling of provisioned concurrency and API Gteway caching as just having provisioned concurrency of 2 and DAX did not help during peak load.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 785928,
          "date": "Mon 23 Jan 2023 23:41",
          "username": "saeidp",
          "content": "D for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 783802,
          "date": "Sat 21 Jan 2023 23:51",
          "username": "Christina666",
          "content": "D for me as well",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776501,
          "date": "Sun 15 Jan 2023 13:06",
          "username": "Oleg_golOleg_gol",
          "content": "В <br>https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.htmlD ))) (Russian keyboardВ=D)",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 776504,
          "date": "Sun 15 Jan 2023 13:07",
          "username": "Oleg_gol",
          "content": "D ))) (Russian keyboardВ=D)",
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
      "question_text": "<p>A DevOps engineer has implemented a Cl/CD pipeline to deploy an AWS CloudFormation template that provisions a web application. The web application consists of an Application Load Balancer (ALB), a target group, a launch template that uses an Amazon Linux 2 AMI, an Auto Scaling group of Amazon EC2 instances, a security group, and an Amazon RDS for MySOL database. The launch template includes user data that specifies a script to install and start the application.<br><br>The initial deployment of the application was successful. The DevOps engineer made changes to update the version of the application with the user data. The CI/CD pipeline has deployed a new version of the template. However, the health checks on the ALB are now failing. The health checks have marked all targets as unhealthy.<br><br>During investigation, the DevOps engineer notices that the CloudFormation stack has a status of UPDATE_COMPLETE.  However, when the DevOps engineer connects to one of the EC2 instances and checks /var/log/messages, the DevOps engineer notices that the Apache web server failed to start successfully because of a configuration error.<br><br>How can the DevOps engineer ensure that the CloudFormation deployment will fail if the user data fails to successfully finish running?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#172",
          "answers": [
            {
              "choice": "<p>A. Use the cfn-signal helper script to signal success or failure to CloudFormation. Use the WaitOnResourceSignals update policy within the CloudFormation template. Set an appropriate timeout for the update policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm for the UnhealthyHostCount metric. Include an appropriate alarm threshold for the target group. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a lifecycle hook on the Auto Scaling group by using the AWS::AutoScaling::LifecycleHook resource. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation. Set an appropriate timeout on the lifecycle hook.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Amazon CloudWatch agent to stream the cloud-init logs. Create a subscription filter that includes an AWS Lambda function with an appropriate invocation timeout. Configure the Lambda function to use the SignalResource API operation to signal success or failure to CloudFormation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791082,
          "date": "Sat 28 Jan 2023 21:53",
          "username": "Bulti",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 785935,
          "date": "Mon 23 Jan 2023 23:56",
          "username": "saeidp",
          "content": "A for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 785791,
          "date": "Mon 23 Jan 2023 21:06",
          "username": "DerekKey",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-signal.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 776496,
          "date": "Sun 15 Jan 2023 12:56",
          "username": "Oleg_gol",
          "content": "I agree A https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#173",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a data ingestion application that runs across multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to monitor the application and consolidate access to the application. Currently, the company is running the application on Amazon EC2 instances from several Auto Scaling groups. The EC2 instances have no access to the internet because the data is sensitive. Engineers have deployed the necessary VPC endpoints. The EC2 instances run a custom AMI that is built specifically for the application.<br><br>To maintain and troubleshoot the application, system administrators need the ability to log in to the EC2 instances. This access must be automated and controlled centrally. The company's security team must receive a notification whenever the instances are accessed.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#173",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send notifications to the security team whenever a user logs in to an EC2 instance. Use EC2 Instance Connect to log in to the instances. Deploy Auto Scaling groups by using AWS CloudFormation. Use the cfn-init helper script to deploy appropriate VPC routes for external access. Rebuild the custom AMI so that the custom AMI includes AWS Systems Manager Agent.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a NAT gateway and a bastion host that has internet access. Create a security group that allows incoming traffic on all the EC2 instances from the bastion host. Install AWS Systems Manager Agent on all the EC2 instances. Use Auto Scaling group lifecycle hooks for monitoring and auditing access. Use Systems Manager Session Manager to log in to the instances. Send logs to a log group in Amazon CloudWatch Logs. Export data to Amazon 83 for auditing. Send notifications to the security team by using S3 event notifications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use EC2 Image Builder to rebuild the custom AMI. Include the most recent version of AWS Systems Manager Agent in the image. Configure the Auto Scaling group to attach the AmazonSSMManagedlnstanceCore role to all the EC2 instances. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Automation to build Systems Manager Agent into the custom AMI. Configure AWS Config to attach an SCP to the root organization account to allow the EC2 instances to connect to Systems Manager. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791096,
          "date": "Sat 28 Jan 2023 22:06",
          "username": "Bulti",
          "content": "Answer is C.  D is incorrect because AWS Config cannot configure resources but only can define rules that the resources should comply with. Therefore the answer is C.  Even if AmazonSSMManagedlnstanceCore is a managed policy and not an IAMrole I will go with C because this policy is to be attached to an IAM role for EC2 to access System Manager.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 786000,
          "date": "Tue 24 Jan 2023 01:17",
          "username": "saeidp",
          "content": "C for me<br>D seems wrong: AWS Config to attach an SCP to the root organization is wrong you don't need aws config to apply SCP to root or ou's<br>SCP allow, doesn't provide the necessary permissions for EC2 to access SSM. SCP is designed to limit accounts to access resources otherwise by default root enables accessing for all accounts",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785493,
          "date": "Mon 23 Jan 2023 15:52",
          "username": "ericzaj",
          "content": "D seems misleading. Can't find documentation of using AWS Config to attach an SCP.<br>\\\"Configure AWS Config to attach an SCP to the root organization account\\\". Wouldn't you do this in AWS Organizations?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 785254,
          "date": "Mon 23 Jan 2023 12:02",
          "username": "DerekKey",
          "content": "AmazonSSMManagedlnstanceCore is the IAM policy, not a role - C is wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 779351,
          "date": "Tue 17 Jan 2023 22:37",
          "username": "Dimidrol",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776487,
          "date": "Sun 15 Jan 2023 12:48",
          "username": "Oleg_gol",
          "content": "I agree",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#174",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>During the next CodePipeline run, the pipeline exits with a FAILED state during the build stage. The DevOps engineer verifies that the correct Systems Manager parameter path is in place for the environment variable values that were changed. The DevOps engineer also validates that the environment variable type is Parameter.<br><br>Why did the pipeline fail?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#174",
          "answers": [
            {
              "choice": "<p>A. The CodePipeline IAM service role does not have the required IAM permissions to use Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The CodePipeline IAM service role does not have the required IAM permissions to use the aws/ssm KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The CodeBuild IAM service role does not have the required IAM permissions to use Parameter Store.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The CodeBuild IAM service role does not have the required IAM permissions to use the aws/ssm KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791365,
          "date": "Sun 29 Jan 2023 04:35",
          "username": "Bulti",
          "content": "Answer is C.  It has to be permission of the IAM Service Role of CodeBuild. It cannot be AWS/SSM Key because System Manager is supposed to decrypt secured string on behalf of the caller of System Manager to retrieve the value from the Parameter Store.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778855,
          "date": "Tue 17 Jan 2023 12:47",
          "username": "Boubou480",
          "content": "CodePipeline uses CodeBuild to run the build stage, so the CodeBuild IAM service role is responsible for interacting with the services and resources specified in the build stage. If the role does not have the required IAM permissions to use Parameter Store, the pipeline will fail during the build stage when the CodeBuild service attempts to access the parameter values specified in the environment variables.<br>It's a good practice to check the IAM permissions for the roles that CodePipeline, CodeBuild and CodeDeploy uses and make sure they have the correct permissions to access the services and resources that are being used in the pipeline.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776483,
          "date": "Sun 15 Jan 2023 12:33",
          "username": "Oleg_gol",
          "content": "i vote C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#175",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts. The company uses AWS Single Sign-On (AWS SSO) that is integrated with AWS Toolkit for Microsoft Azure DevOps. The attributes for access control feature is enabled in AWS SSO.<br><br>The attribute mapping list contains two entries. The department key is mapped to ${path:enterprise.department}. The costCenter key is mapped to ${path:enterprise.costCenter}.<br><br>All existing Amazon EC2 instances have a department tag that corresponds to three company departments (d1, d2, d3). A DevOps engineer must create policies based on the matching attributes. The policies must minimize administrative effort and must grant each Azure AD user access to only the EC2 instances that are tagged with the user's respective department name.<br><br>Which condition key should the DevOps engineer include in the custom permissions policies to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#175",
          "answers": [
            {
              "choice": "<p>A. <img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image2.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. <img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image3.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. <img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image4.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. <img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image5.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791372,
          "date": "Sun 29 Jan 2023 04:49",
          "username": "Bulti",
          "content": "C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 774496,
          "date": "Fri 13 Jan 2023 13:58",
          "username": "Oleg_golBlueocean",
          "content": "i thinkAgree with Option C as per this link<br>https://aws.amazon.com/blogs/security/simplify-granting-access-to-your-aws-resources-by-using-tags-on-aws-iam-users-and-roles/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 776112,
          "date": "Sun 15 Jan 2023 03:11",
          "username": "Blueocean",
          "content": "Agree with Option C as per this link<br>https://aws.amazon.com/blogs/security/simplify-granting-access-to-your-aws-resources-by-using-tags-on-aws-iam-users-and-roles/",
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
      "question_text": "<p>A company deploys updates to its Amazon API Gateway API several times a week by using an AWS CodePipeline pipeline. As part of the update process, the company exports the JavaScript SDK for the API from the API Gateway console and uploads the SDK to an Amazon S3 bucket.<br><br>The company has configured an Amazon CloudFront distribution that uses the S3 bucket as an origin. Web clients then download the SDK by using the CloudFront distribution's endpoint. A DevOps engineer needs to implement a solution to make the new SDK available automatically during new API deployments.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#176",
          "answers": [
            {
              "choice": "<p>A. Create a CodePipeline action immediately after the deployment stage of the API. Configure the action to invoke an AWS Lambda function. Configure the Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and create a CloudFront invalidation for the SDK path.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CodePipeline action immediately after the deployment stage of the API. Configure the action to use the CodePipeline integration with API Gateway to export the SDK to Amazon S3. Create another action that uses the CodePipeline integration with Amazon S3 to invalidate the cache for the SDK path.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to UpdateStage events from aws.apigateway. Configure the rule to invoke an AWS Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and call the CloudFront API to create an invalidation for the SDK path.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to CreateDeployment events from aws.apigateway. Configure the rule to invoke an AWS Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and call the S3 API to invalidate the cache for the SDK path.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791708,
          "date": "Sun 29 Jan 2023 15:21",
          "username": "Bulti",
          "content": "Although A will meet the requirements, C will as well. So why would I select A over C? Only because all required steps are carried as part of the CodePipeline workflow. With C, the Pipeline execution completes without knowing whether or not the Lambda function invoked via CloudWatch event rule is going to successfully complete or not.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 787025,
          "date": "Tue 24 Jan 2023 23:17",
          "username": "saeidp",
          "content": "I go with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 778859,
          "date": "Tue 17 Jan 2023 12:52",
          "username": "Boubou480",
          "content": "This solution would allow the company to automate the process of updating the SDK and making it available to web clients.<br>By adding a CodePipeline action immediately after the deployment stage of the API, the Lambda function will be invoked automatically each time the API is updated.<br>The Lambda function should be able to download the new SDK from API Gateway, upload it to the S3 bucket and also create a CloudFront invalidation for the SDK path so that the latest version of the SDK is available for the web clients.<br>This is the most straight forward solution and it will meet the requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#177",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a single AWS account that runs hundreds of Amazon EC2 instances in a single AWS Region. New EC2 instances are launched and terminated each hour in the account. The account also includes existing EC2 instances that have been running for longer than a week.<br><br>The company's security policy requires all running EC2 instances to use an EC2 instance profile. If an EC2 instance does not have an instance profile attached, the EC2 instance must use a default instance profile that has no IAM permissions assigned.<br><br>A DevOps engineer reviews the account and discovers EC2 instances that are running without an instance profile. During the review, the DevOps engineer also observes that new EC2 instances are being launched without an instance profile.<br><br>Which solution will ensure that an instance profile is attached to all existing and future EC2 instances in the Region?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#177",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to EC2 RunInstances API calls. Configure the rule to invoke an AWS Lambda function to attach the default instance profile to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the ec2-instance-profile-attached AWS Config managed rule with a trigger type of configuration changes. Configure an automatic remediation action that invokes an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that reacts to EC2 Startlnstances API calls. Configure the rule to invoke an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the iam-role-managed-policy-check AWS Config managed rule with a trigger type of configuration changes. Configure an automatic remediation action that invokes an AWS Lambda function to attach the default instance profile to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791733,
          "date": "Sun 29 Jan 2023 15:43",
          "username": "Bulti",
          "content": "B is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 778879,
          "date": "Tue 17 Jan 2023 13:07",
          "username": "Boubou480",
          "content": "The most secure solution is B.  Associate the CodeCommit repository with Amazon CodeGuru Reviewer. Manually check the code review for any recommendations. Choose the option to protect the secret. Update the SAM templates and the Python code to pull the secret from AWS Secrets Manager.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 776107,
          "date": "Sun 15 Jan 2023 03:05",
          "username": "Blueocean",
          "content": "I think should be Option B as per this linkhttps://docs.aws.amazon.com/config/latest/developerguide/ec2-instance-profile-attached.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company has a single AWS account where active development occurs. The company's security team has implemented Amazon GuardDuty, AWS Config, and AWS CloudTrail within the account. The security team wants to receive notifications in near real time for only high-severity findings from GuardDuty. The security team uses an Amazon Simple Notification Service (Amazon SNS) topic for notifications from other security tools in the account.<br><br>How can a DevOps engineer meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#178",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that detects GuardDuty findings. Use an input transformer to detect high-severity event patterns. Configure the rule to publish a message to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule that detects noncompliance with the guardduty-non-archived-findings AWS Config managed rule for high-severity GuardDuty findings. Configure the EventBridge (CloudWatch Events) rule to publish a message to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches GuardDuty ListFindings API calls with a high severity level. Configure the rule to publish a message to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches GuardOuty findings that have a high severity level within the event. Configure the rule to publish a message to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 791747,
          "date": "Sun 29 Jan 2023 16:00",
          "username": "\t\t\t\tBulti\t\t\t",
          "content": "D is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 778882,
          "date": "Tue 17 Jan 2023 13:09",
          "username": "\t\t\t\tBoubou480\t\t\t",
          "content": "This solution will meet the requirements because it uses EventBridge to match only high-severity GuardDuty findings, and it publishes a message to the SNS topic for near real-time notifications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 774425,
          "date": "Fri 13 Jan 2023 13:10",
          "username": "\t\t\t\tOleg_gol\t\t\t",
          "content": "D<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#179",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a VPC that consists of a public subnet and a private subnet. The company has an application that runs on Amazon EC2 instances that are in the private subnet. An Application Load Balancer is in the public subnet and distributes traffic to the EC2 instances.<br><br>The company has enabled Amazon GuardDuty for the account. The company’s DevOps team has a list of external IP ranges that is updated each day. The list is stored in an Amazon S3 bucket in the account. A DevOps engineer needs to configure GuardDuty to create a GuardDuty finding when traffic to the application originates from an IP range in the external IP range list.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#179",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge rule that runs daily and invokes an AWS Lambda function. Configure the Lambda function to retrieve the most recent list of external IP ranges from the S3 bucket. For each IP range in the list, configure the Lambda function to create a GuardDuty finding filter on the publicIp filter attribute.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a threat list in GuardDuty. Set the source as the list of external IP ranges in the S3 bucket. Create an Amazon EventBridge rule that runs daily and invokes an AWS Lambda function. Configure the Lambda function to refresh the threat list in GuardDuty to match the list of external IP ranges in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a trusted IP list in GuardDuty. Set the source as the list of external IP ranges in the S3 bucket. Create an Amazon EventBridge rule that runs daily and invokes an AWS Lambda function. Configure the Lambda function to refresh the trusted IP list in GuardDuty to match the list of external IP ranges in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge rule that runs daily and invokes an AWS Lambda function. Configure the Lambda function to retrieve the most recent list of external IP ranges from the S3 bucket. For each IP range in the list, configure the Lambda function to create a GuardDuty finding filter on the localIp filter attribute.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 821263,
          "date": "Sat 25 Feb 2023 08:31",
          "username": "\t\t\t\tMark1000\t\t\t\t\t\t\tSHoKMaSTeR\t\t\t",
          "content": "It is definitely the B<br><br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.htmlAgree. From the link: \\\"For Location, specify the location of the list - this is the S3 bucket where you store your trusted IP list or threat list and the file that contains your list\\\"",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 822352,
          "date": "Sun 26 Feb 2023 13:24",
          "username": "\t\t\t\tSHoKMaSTeR\t\t\t",
          "content": "Agree. From the link: \\\"For Location, specify the location of the list - this is the S3 bucket where you store your trusted IP list or threat list and the file that contains your list\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820831,
          "date": "Fri 24 Feb 2023 19:45",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "B is the right answer because configuring a threat list will automatically create a finding<br>not A because creates only filter not a finding<br>not C because we want to block the list not trust it<br>not D because creates only filter not finding",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820461,
          "date": "Fri 24 Feb 2023 13:30",
          "username": "\t\t\t\tEurusTech\t\t\t",
          "content": "C is the right answer https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_upload-lists.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 820316,
          "date": "Fri 24 Feb 2023 10:56",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "Correct answere is A<br>https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#180",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon API Gateway API and an AWS Lambda function to host a microservice. The microservice accesses pricing data in an Amazon DynamoDB table for the company’s online store.<br><br>Interest in the online store has increased. As a result, latency issues and throttling on the DynamoDB table are occurring when a specific query runs. Some internal services access the DynamoDB table directly. No caching is enabled for the current solution.<br><br>A DevOps engineer notices that repeat requests to the API are taking the same amount of time as unique requests. The DevOps engineer must reduce the latency for the repeat requests to the API and must reduce the throttling on the DynamoDB table.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#180",
          "answers": [
            {
              "choice": "<p>A. Enable caching for API Gateway stages. Use DynamoDB Accelerator (DAX) for the DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable caching tor API Gateway stages. Use Amazon ElastiCache for Memcached caching for the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use provisioned concurrency for the Lambda function. Use DynamoDB Accelerator (DAX) for the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use provisioned concurrency for the Lambda function. Increase the RCUs for the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 822653,
          "date": "Sun 26 Feb 2023 17:09",
          "username": "\t\t\t\tkiiw\t\t\t",
          "content": "DAX is recomended against memcached",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820852,
          "date": "Fri 24 Feb 2023 20:09",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "API GATEWAY CACHE/DAX combo good for caching/repeat requests and db throttling issue",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 820299,
          "date": "Fri 24 Feb 2023 10:36",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "dynamodb DAX and api gateway caching",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819274,
          "date": "Thu 23 Feb 2023 15:13",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "Answer is A . Enable caching for API Gateway stages. Use DynamoDB Accelerator (DAX) for the DynamoDB table. Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for Amazon DynamoDB that delivers up to a 10 times performance improvement—from milliseconds to microseconds—even at millions of requests per second",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 819271,
          "date": "Thu 23 Feb 2023 15:11",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "Answer is A . Enable caching for API Gateway stages. Use DynamoDB Accelerator (DAX) for the DynamoDB table. Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for Amazon DynamoDB that delivers up to a 10 times performance improvement—from milliseconds to microseconds—even at millions of requests per second",
          "upvote_count": "2",
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
      "question_text": "<p>A production account has a requirement that any Amazon EC2 instance that has been logged in to manually must be terminated within 24 hours. All applications in the production account are using Auto Scaling groups with the Amazon CloudWatch Logs agent configured.<br><br>How can this process be automated?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#181",
          "answers": [
            {
              "choice": "<p>A. Create a CloudWatch Logs subscription to an AWS Step Functions application. Configure an AWS Lambda function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create an Amazon EventBridge rule to invoke a second Lambda function once a day that will terminate all instances with this tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm that will be invoked by the login event. Send the notification to an Amazon Simple Notification Service (Amazon SNS) topic that the operations team is subscribed to, and have them terminate the EC2 instance within 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch alarm that will be invoked by the login event. Configure the alarm to send to an Amazon Simple Queue Service (Amazon SQS) queue. Use a group of worker instances to process messages from the queue, which then schedules an Amazon EvantBridge rule to be invoked.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudWatch Logs subscription in an AWS Lambda function. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create an Amazon EventBridge rule to invoke a daily Lambda function that terminates all instances with this tag.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820861,
          "date": "Fri 24 Feb 2023 20:20",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "voting D<br>A - also, does not say how the lambda knows the event to mark the ec2 instance <br>B -manual, not automated<br>C - too complex<br>D - will do the job",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820300,
          "date": "Fri 24 Feb 2023 10:38",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "I'll go with D<br>CloudWatch Logs subscription with step functions is not possible",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#182",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating Docker repositories to Amazon Elastic Container Registry (Amazon ECR) in an existing AWS account. A DevOps engineer needs to automate the management of images that are uploaded to the repositories. The solution must limit the number of image versions. As a first step, the DevOps engineer creates a private repository in Amazon ECR for each repository that the company will migrate.<br><br>What should the DevOps engineer do next to meet the requirements in the MOST operationally efficient manner?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#182",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to scan the images in each repository for the number of versions present. Configure the Lambda function to delete older versions of images if the number of images is greater than the desired number of images. Schedule the Lambda function to run automatically at regular intervals,<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a repository policy that assesses the number of images and deletes older versions if the number of images is greater than the desired number of images. Apply the repository policy to each private repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Step Functions state machine Express Workflow to scan the images in each repository for the number of versions present. Configure the Express Workflow to delete older versions of images if the number of images is greater than the desired number of images. Configure the state machine to run every time an image is pushed to a repository.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Push an image into each private repository. In each private repository, create a lifecycle policy preview to delete older versions of images if the number of images is greater than the desired number of images. Test the lifecycle policy and validate the impact. Apply the lifecycle policy to manage the images.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820865,
          "date": "Fri 24 Feb 2023 20:31",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "D<br>ECR lifecycle policies are meant for this",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820505,
          "date": "Fri 24 Feb 2023 14:28",
          "username": "\t\t\t\tandy_sds\t\t\t",
          "content": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 820303,
          "date": "Fri 24 Feb 2023 10:39",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "D is the correct answere<br>https://docs.aws.amazon.com/AmazonECR/latest/userguide/lifecycle_policy_examples.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#183",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer has created an AWS CloudFormation template. The template includes the following snippet:<br><br><img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image6.png\"><br><br>When the template is launched, CloudFormation performs a rollback and reports the following error message: Received 0 SUCCESS signal(s) cut of 1.<br><br>Which combination of steps should the DevOps engineer take to resolve this error? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#183",
          "answers": [
            {
              "choice": "<p>A. Update the UserData attribute to use the cfn-signal helper script.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the AutoScalingGroup resource with a DependsOn LaunchConfig.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the LaunchConfig resource type to AWS::EC2::LaunchTemplate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the CreationPolicy ResourceSignal Timeout.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Remove the CreationPolicy attribute. Create new WaitHandle and WaitCondition resources.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820880,
          "date": "Fri 24 Feb 2023 20:51",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "By increasing the Timeout, AWS CloudFormation will wait longer for the ResourceSignal, giving the resource more time to become available and signaling that it is ready. This can help prevent the stack creation from failing due to a premature timeout.<br>PT5M -> 5 minutes<br>also add, cfn-signal with exit code etc. in userdata<br>/opt/aws/bin/cfn-signal -e $? --stack <stack name> --resource <resource name>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 820515,
          "date": "Fri 24 Feb 2023 14:42",
          "username": "\t\t\t\tandy_sds\t\t\t",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-failed-signal/?nc1=h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 820308,
          "date": "Fri 24 Feb 2023 10:44",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "https://aws.amazon.com/blogs/devops/use-a-creationpolicy-to-wait-for-on-instance-configurations/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#184",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a multi-tenant application on Amazon EC2 instances behind an Application Load Balancer. The instances run Windows Server and are in an Auto Scaling group. The application uses a license file on the instances that can be updated on the instances without customer disruption. When a new customer purchases access to the application, the company's licensing team adds a new license key to a file in an Amazon S3 bucket. After the license file is updated, the operations team manually updates the EC2 instances.<br><br>A DevOps engineer needs to automate the EC2 instance file update process. The automated process must decrease the time for EC2 instances to get the updated license file and must notify the operations team about success or failure of the update process.<br><br>The DevOps engineer creates a resource group in AWS Resource Groups. The resource group uses a tag that the Auto Sealing group applies to the EC2 instances.<br><br>What should the DevOps engineer do next to meet the requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#184",
          "answers": [
            {
              "choice": "<p>A. Create an S3 event notification to invoke an AWS Lambda function when the license file is updated in the S3 bucket. Configure the Lambda function to invoke AWS Systems Manager Run Command to run the AWS-RunRemoteScript document to download the updated license file. Specify the command from Lambda to run on the application's resource group with 50% concurrency. Configure Amazon Simple Email Service (Amazon SES) notifications for event notifications of SUCCESS and FAILED to send email notifications to the operations team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 event notification to invoke an AWS Lambda function when the license file is updated in the S3 bucket. Configure the Lambda function to invoke AWS Systems Manager Run Command to run the AWS-RunPowerShellScript document to download the updated license file. Specify the command from Lambda to run on the application's resource group with 50% concurrency. Configure an Amazon Simple Notification Service (Amazon SNS) topic to send event notifications of SUCCESS and FAILED.  Subscribe the email addresses of the operations team members to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge scheduled rule that runs each hour to invoke an AWS Lambda function. Configure the Lambda function to invoke AWS Systems Manager Run Command to run the AWS-RunPowerShellScript document to download the updated license file. Specify the command from Lambda to run on the application's resource group with 50% concurrency. Configure an Amazon Simple Notification Service (Amazon SNS) topic to send event notifications of SUCCESS and FAILED.  Subscribe the email addresses of the operations team members to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge scheduled rule that runs each hour to invoke an AWS Lambda function. Configure the Lambda function to invoke AWS Systems Manager Run Command to run the AWS-RunRemoteScript document to download the updated license file. Specify the command from Lambda to run on the application's resource group with 50% concurrency. Configure Amazon Simple Email Service (Amazon SES) notifications for event notifications of SUCCESS and FAILED to send email notifications to the operations team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 822368,
          "date": "Sun 26 Feb 2023 13:46",
          "username": "\t\t\t\tSHoKMaSTeR\t\t\t",
          "content": "RunPowerShellScript exists (I couldn't image it). In addition, SNS is better than SES, it does not mention that the notification has to be sent by e-mail.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820899,
          "date": "Fri 24 Feb 2023 21:06",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "not A,D - runremotescript is for linux<br>not C - too slow<br>B - quick",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 820320,
          "date": "Fri 24 Feb 2023 11:02",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B is good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 819283,
          "date": "Thu 23 Feb 2023 15:21",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "windows=powershell",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#185",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. A DevOps engineer wants to deploy a new AWS Lambda function to all accounts in the organization by using AWS CloudFormation StackSets. The DevOps engineer uses a delegated administrator account to deploy the stack sets to the member accounts. The stack operation keeps failing, and the stack instance status is OUTDATED. <br><br>Which actions should the DevOps engineer take to remediate this error? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#185",
          "answers": [
            {
              "choice": "<p>A. Ensure that the AWS Region is the same for the stack sets and the target resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure that the delegated administrator account has a trust relationship with the target account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure that the resources in the stacks do not have termination protection enabled by default.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that the CloudFormation template is creating unique global resources.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy the stack sets from the management account and not from the delegated administrator account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 821315,
          "date": "Sat 25 Feb 2023 09:40",
          "username": "\t\t\t\tMark1000\t\t\t",
          "content": "AB<br><br>The only resource to deploy is a lambda, it is not a global resource, D is discarded, C has no impact, E the account has to be the delegate.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 821115,
          "date": "Sat 25 Feb 2023 03:19",
          "username": "\t\t\t\tandy_sds\t\t\t",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-troubleshooting.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 820911,
          "date": "Fri 24 Feb 2023 21:24",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A - StackSets cannot create or update stack instances in regions that do not exist in the stack set.<br>B-the delegated administrator account must be authorized to perform actions in the target account.<br>NOT C - enabling termination protection on the resources in the stack should not affect the stack instance status.<br>NOT D - creating unique global resources should not affect the stack instance status; if you create a non-unique global resource, it would result in stack creation failure not instance status of outdated.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 820322,
          "date": "Fri 24 Feb 2023 11:03",
          "username": "\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t",
          "content": "B and D are the best answeresGlobal resources like s3 bucket name must be insured that are given unique name regardless of region or accountA is wrong. You can have your stack sets defined in a different region but deploy stacks in other regions",
          "upvote_count": "312",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 820324,
          "date": "Fri 24 Feb 2023 11:04",
          "username": "\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t",
          "content": "Global resources like s3 bucket name must be insured that are given unique name regardless of region or accountA is wrong. You can have your stack sets defined in a different region but deploy stacks in other regions",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 821989,
          "date": "Sun 26 Feb 2023 02:49",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A is wrong. You can have your stack sets defined in a different region but deploy stacks in other regions",
          "upvote_count": "2",
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
      "question_text": "<p>A large company has acquired a small company. The large company has an organization in AWS Organizations. The large company needs to integrate the small company’s single AWS account into the organization with minimal impact to the applications that are deployed in the small company's account.<br><br>The large company has deployed AWS Control Tower in its organization and wants to enroll the small company’s account in AWS Control Tower. The large company’s AWS Control Tower configuration includes a security OU, a sandbox OU, and a new destination OU that is set up for the small company's migration. Each company is using AWS Config as part of its account management strategy.<br><br>Which combination of steps should a DevOps engineer take lo meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#186",
          "answers": [
            {
              "choice": "<p>A. Create a landing zone in the security OU of the large company's AWS Control Tower landing zone. Provide the account's email address, the account owners first and last name, and the name of the landing zone created in the security OU to complete the AWS Control Tower Account Factory enrollment request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create and apply SCPs in the destination OU to restrict the types of resources that can be created in the small company’s account. Assess the impact of the applied SCPs on the small company's account. Delete existing SCPs in the small company’s account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config conformance pack that contains the policies that are currently applied to the large company's account. Use AWS Config to assess the impact that enrollment in AWS Control Tower will have on the small company's account. Delete the configuration recorder and delivery channels from the AWS Config settings of the small company's account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enroll the OU of the small company's account in the large company’s AWS Control Tower environment. Specify the destination OU in the large company's AWS Control Tower landing zone as the receiving OU in the request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWSControlTowerExecution role in the small company's account. Provide the account's email address, the account owner's first and last name, and the destination OU to complete the AWS Control Tower Account Factory enrollment request.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 822826,
          "date": "Sun 26 Feb 2023 19:32",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Agree, BE<br>E -per saeidp aws link, \\\"you must add this role to each account before you enroll it.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 822019,
          "date": "Sun 26 Feb 2023 03:43",
          "username": "\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t",
          "content": "Trusted access is necessary. AWSControlTowerExecution role conducts activities required to manage the small account.<br>Place the account into the OU and Apply all the SCPs that are applied in the current OUhttps://docs.aws.amazon.com/controltower/latest/userguide/enroll-account.html",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 822031,
          "date": "Sun 26 Feb 2023 04:00",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/enroll-account.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 820931,
          "date": "Fri 24 Feb 2023 21:44",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A -company needs to enroll first<br>B -small fish needs to comply with big fish <br>C - not required for enrollment<br>D - there is no OU to enroll<br>E - This role is used for automated operations in AWS Control Tower, such as creating new accounts and setting up guardrails.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#187",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software-as-a-service (SaaS) company is using AWS Elastic Beanstalk to deploy its primary .NET application. The Elastic Beanstalk environment is configured to use Amazon EC2 Auto Scaling and Elastic Load Balancing (ELB) for its underlying Amazon EC2 instances.<br><br>The company is experiencing incidents in which EC2 instances are marked unhealthy and are terminated by Auto Scaling groups after a failed ELB health check. The company's DevOps team must build a solution that will notify the operations team whenever an Auto Scaling group terminates EC2 instances for any existing client environments.<br><br>What should the DevOps team do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#187",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the email addresses of all operations team members to the SNS topic. Apply a notification configuration for the autoscaling:EC2_INSTANCE_LAUNCH notification type to all the existing Auto Scaling groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add an AWS Lambda function trigger to the SQS queue. Apply a notification configuration for the autoscaling:EC2_INSTANCE_LAUNCH notification type to all the existing Auto Scaling groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the email addresses of all operations team members to the SNS topic. Apply a notification configuration for the autoscaling:EC2_INSTANCE_TERMINATE notification type to all the existing Auto Scaling groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add an AWS Lambda function trigger to the SQS queue. Apply a notification configuration for the autoscaling:EC2_INSTANCE_TERMINATE notification type to all the existing Auto Scaling groups.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 820938,
          "date": "Fri 24 Feb 2023 21:58",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "not A - why launch, need terminate notice<br>not B -same as above<br>C -does the job<br>not D - convoluted",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 820326,
          "date": "Fri 24 Feb 2023 11:06",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "C probably<br>EC2_INSTANCE_TERMINATE plus SNS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a web application in an AWS Region. For disaster recovery purposes, a second region is being used as a standby. Disaster recovery requirements state that session data must be replicated between regions in near-real time and 1% of requests should route to the secondary region to continuously verify system functionality. Additionally, if there is a disruption in service in the main region, traffic should be automatically routed to the secondary region, and the secondary region must be able to scale up to handle all traffic.<br><br>How should a DevOps engineer meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#188",
          "answers": [
            {
              "choice": "<p>A. In both regions, deploy the application on AWS Elastic Beanstalk and use Amazon DynamoDB global tables for session data. Use an Amazon Route 53 weighted routing policy with health checks to distribute the traffic across the regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In both regions, launch the application in Auto Scaling groups and use DynamoDB for session data. Use a Route 53 failover routing policy with health checks to distribute the traffic across the regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In both regions, deploy the application in AWS Lambda, exposed by Amazon API Gateway, and use Amazon RDS PostgreSQL with cross-region replication for session data. Deploy the web application with client-side logic to call the API Gateway directly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In both regions, launch the application in Auto Scaling groups and use DynamoDB global tables for session data. Enable an Amazon CloudFront weighted distribution across regions. Point the Amazon Route 53 DNS record at the CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827030,
          "date": "Thu 02 Mar 2023 16:09",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "revising my pick, A seems right<br>not B because it is either/or failover policy i.e. no 1 percent traffic<br>not C as this is a web app<br>not D, as this is just two regions and cloudfront may not be needed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826482,
          "date": "Thu 02 Mar 2023 04:56",
          "username": "\t\t\t\tSS2023\t\t\t",
          "content": "only choice with route53 weighted routing policy that is needed to route 1% traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826398,
          "date": "Thu 02 Mar 2023 03:28",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "A is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826369,
          "date": "Thu 02 Mar 2023 02:58",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A is better than the others. Dynamodb global must be used",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826071,
          "date": "Wed 01 Mar 2023 17:33",
          "username": "\t\t\t\tdangal97\t\t\t",
          "content": "In both regions, launch the application in Auto Scaling groups and use DynamoDB for session data. Use a Route 53 failover routing policy with health checks to distribute the traffic across the regions.<br><br>This solution meets all the requirements mentioned in the question. The use of Auto Scaling groups and DynamoDB allows the application to scale up and down in response to changes in traffic, and DynamoDB's cross-region replication provides near-real-time replication of session data. The use of a Route 53 failover routing policy ensures that traffic is routed to the secondary region in case of a disruption in service in the main region. The 1% traffic routing requirement can be achieved by configuring Route 53's traffic flow policies to direct a portion of traffic to the secondary region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826001,
          "date": "Wed 01 Mar 2023 16:09",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option D is the correct answer because it uses DynamoDB global tables for near-real-time replication of session data, CloudFront for a weighted distribution of traffic across regions, and Route 53 for DNS resolution with health checks to automatically route traffic to the secondary region in case of a disruption. This option also meets the requirement to continuously verify system functionality by routing 1% of requests to the secondary region.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#189",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing an Amazon Elastic Container Service (Amazon ECS) cluster to run its workload. The company architecture will run multiple ECS services on the cluster. The architecture includes an Application Load Balancer on the front end and uses multiple target groups to route traffic.<br><br>A DevOps engineer must collect application and access logs. The DevOps engineer then needs to send the logs to an Amazon S3 bucket for near-real-time analysis.<br><br>Which combination of steps must the DevOps engineer take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#189",
          "answers": [
            {
              "choice": "<p>A. Download the Amazon CloudWatch Logs container instance from AWS. Configure this instance as a task. Update the application service definitions to include the logging task<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Amazon CloudWatch Logs agent on the ECS instances. Change the logging driver in the ECS task definition to awslogs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon EventBridge to schedule an AWS Lambda function that will run every 60 seconds and will run the Amazon CloudWatch Logs create-export-task command. Then point the output to the logging S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Activate access logging on the ALB.  Then point the ALB directly to the logging S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Activate access logging on the target groups that the ECS services use. Then send the logs directly to the logging S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an Amazon Kinesis Data Firehose delivery stream that has a destination of the logging S3 bucket. Then create an Amazon CloudWatch Logs subscription filter for Kinesis Data Firehose.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826381,
          "date": "Thu 02 Mar 2023 03:07",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "It seems B D F",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 826072,
          "date": "Wed 01 Mar 2023 17:35",
          "username": "\t\t\t\tdangal97\t\t\t",
          "content": "I will go with B,E and F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 826010,
          "date": "Wed 01 Mar 2023 16:18",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "BEF<br>A - not necessary when using cloudwatch logs agent<br>B - correct, logs will be captured<br>C - not efficient<br>D - does not capture ECS logs, only ALB<br>E - correct, captures access logs<br>F - correct, firehose to s3 is good.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        }
      ]
    },
    {
      "question_id": "#190",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a static website hosted on an Amazon S3 bucket. The website is deployed using AWS CloudFormation. The Cloud Formation template defines an S3 bucket and a custom resource that copies content into the bucket from a source location.<br><br>The company has decided that it needs to move the website to a new location, so the existing CloudFormation stack must be deleted and re-created. However, CloudFormation reports that the stack could not be deleted cleanly.<br><br>What is the MOST likely cause and how can the DevOps engineer mitigate this problem for this and future versions of the website?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#190",
          "answers": [
            {
              "choice": "<p>A. Deletion has failed because the S3 bucket has an active website configuration. Modify the CloudFormation template to remove the WebsiteConfiguration property from the S3 bucket resource<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deletion has failed because the S3 bucket is not empty. Modify the custom resource's AWS Lambda function code to recursively empty the bucket when RequestType is Delete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deletion has failed because the custom resource does not define a deletion policy. Add a DeletionPolicy property to the custom resource definition with a value of RemoveOnDeletion.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deletion has failed because the S3 bucket is not empty. Modify the S3 bucket resource in the CloudFormation template to add a DeletionPolicy property with a value of Empty.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826405,
          "date": "Thu 02 Mar 2023 03:32",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "Agree with B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826387,
          "date": "Thu 02 Mar 2023 03:11",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B is correct. Custom resource",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826106,
          "date": "Wed 01 Mar 2023 18:10",
          "username": "\t\t\t\tMark1000\t\t\t",
          "content": "B is the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826076,
          "date": "Wed 01 Mar 2023 17:38",
          "username": "\t\t\t\tdangal97\t\t\t",
          "content": "I will go with B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826023,
          "date": "Wed 01 Mar 2023 16:27",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A - not necessary <br>B - not a recommended approach<br>C - not applicable<br>D - correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#191",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is reviewing its IAM policies. One policy written by the DevOps engineer has been flagged as too permissive. The policy is used by an AWS Lambda function that issues a stop command to Amazon EC2 instances tagged with Environment: NonProduction over the weekend. The current policy is:<br><br><img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image7.png\"><br><br>What changes should the engineer make to achieve a policy of least permission? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#191",
          "answers": [
            {
              "choice": "<p>A. Add the following conditional expression:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change “Resource”: “*” to “Resource”: “arn:aws:ec2:*:*:instance/*”<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add the following conditional expression:<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add the following conditional expression:<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Change “Action”: “ec2:*” to “Action”: “ec2:StopInstances”<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Add the following conditional expression:<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826507,
          "date": "Thu 02 Mar 2023 05:58",
          "username": "\t\t\t\tawsgeek\t\t\t",
          "content": "DEF<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_ec2-start-stop-tags.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826484,
          "date": "Thu 02 Mar 2023 05:11",
          "username": "\t\t\t\tSS2023\t\t\t",
          "content": "DEF looks good to me.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 826433,
          "date": "Thu 02 Mar 2023 03:52",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "I select DEF",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826392,
          "date": "Thu 02 Mar 2023 03:20",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "I go with B E F",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 826213,
          "date": "Wed 01 Mar 2023 20:28",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "ABC does not meet requirement",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 825918,
          "date": "Wed 01 Mar 2023 14:57",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "BDF is my answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BDF"
        }
      ]
    },
    {
      "question_id": "#192",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company updated the AWS CloudFormation template for a critical business application. The stack update process failed due to an error in the updated template, and AWS CloudFormation automatically began the stack rollback process. Later, a DevOps engineer discovered that the application was still unavailable and that the stack was in the UPDATE_ROLLBACK_FAILED state.<br><br>Which combination of actions should the DevOps engineer perform so that the stack rollback can complete successfully? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#192",
          "answers": [
            {
              "choice": "<p>A. Attach the AWSCIoudFormationFullAccess IAM policy to the AWS CloudFormation role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Automatically recover the stack resources by using AWS CloudFormation drift detection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Issue a ContinueUpdateRollback command from the AWS CloudFormation console or the AWS CLI.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Manually adjust the resources to match the expectations of the stack.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the existing AWS CloudFormation stack by using the original template.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826435,
          "date": "Thu 02 Mar 2023 03:56",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "agree with CD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826394,
          "date": "Thu 02 Mar 2023 03:23",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "I go with C and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 826104,
          "date": "Wed 01 Mar 2023 18:09",
          "username": "\t\t\t\tMark1000\t\t\t",
          "content": "CD<br><br>https://aws.amazon.com/es/premiumsupport/knowledge-center/cloudformation-update-rollback-failed/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826030,
          "date": "Wed 01 Mar 2023 16:32",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A - not necessary<br>B - not a suitable approach<br>C - correct<br>D - correct<br>E - does not address the issue",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#193",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is creating an AWS CloudFormation template to deploy a web service. The web service will run on Amazon EC2 instances in a private subnet behind an Application Load Balancer (ALB). The DevOps engineer must ensure that the service can accept requests from clients that have IPv6 addresses.<br><br>What should the DevOps engineer do with the CloudFormation template so that IPv6 clients can access the web service?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#193",
          "answers": [
            {
              "choice": "<p>A. Add an IPv6 CIDR block to the VPC and the private subnet for the EC2 instances. Create route table entries for the IPv6 network, use EC2 instance types that support IPv6, and assign IPv6 addresses to each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Assign each EC2 instance an IPv6 Elastic IP address. Create a target group and add the EC2 instances as targets. Create a listener on port 443 of the ALB, and associate the target group with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the ALB with a Network Load Balancer (NLB). Add an IPv6 CIDR block to the VPC and subnets for the NLB, and assign the NLB an IPv6 Elastic IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an IPv6 CIDR block to the VPC and subnets for the ALB.  Create a listener on port 443, and specify the dualstack IP address type on the ALB.  Create a target group and add the EC2 instances as targets. Associate the target group with the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826442,
          "date": "Thu 02 Mar 2023 04:02",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "D is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826401,
          "date": "Thu 02 Mar 2023 03:29",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 826235,
          "date": "Wed 01 Mar 2023 21:02",
          "username": "\t\t\t\tMark1000\t\t\t",
          "content": "D<br><br>Dualstack IP",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826035,
          "date": "Wed 01 Mar 2023 16:37",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A - unnecessary<br>B - unnecessary as ALB is doing the routing<br>C - unnecessary<br>D - meets requirement",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 825925,
          "date": "Wed 01 Mar 2023 15:01",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "D is my answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#194",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated its container-based applications to Amazon EKS and want to establish automated email notifications. The notifications sent to each email address are for specific activities related to EKS components. The solution will include Amazon SNS topics and an AWS Lambda function to evaluate incoming log events and publish messages to the correct SNS topic.<br><br>Which logging solution will support these requirements?<br><br></p>",
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
              "choice": "<p>A. Enable Amazon CloudWatch Logs to log the EKS components. Create a CloudWatch subscription filter for each component with Lambda as the subscription feed destination.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable Amazon CloudWatch Logs to log the EKS components. Create CloudWatch Logs Insights queries linked to Amazon EventBridge events that invoke Lambda.<br></p>",
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
      "topic_name": "",
      "discusstion": [
        {
          "id": 826449,
          "date": "Thu 02 Mar 2023 04:10",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "A is right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826037,
          "date": "Wed 01 Mar 2023 16:43",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A - meets requirement<br>B - inefficient<br>C - lambda subscription unnecessary in this case<br>D - may not meet the requirement",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#195",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that users access over the internet. The web application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are in an Auto Scaling group. The ALB is associated with a security group that allows traffic from the internet. The web application has a local cache on each EC2 instance.<br><br>During a recent security incident requests overloaded the web application and caused an outage for the company's customers. In response to the incident, the company added Amazon CloudFront in front of the web application. All customers now access the web application through CloudFront.<br><br>A DevOps engineer must implement a solution that routes all requests through CloudFront. The solution also must give the company the ability to block requests based on the content of the requests, such as header or body information.<br><br>Which combination of steps should the DevOps engineer take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#195",
          "answers": [
            {
              "choice": "<p>A. Create an AWS WAF web ACL. Associate the web ACL with the CloudFront distribution. Create rules for each type of traffic that the company wants to block.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create new ALB listener rules on the existing listeners. Configure the new rules to allow or reject incoming traffic based on whether the host header matches the CloudFront fully qualified domain name (FQDN).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS PrivateLink endpoint service for the ALB Configure the endpoint service to allow requests from CloudFront. Update the web application origin in CloudFront to use the newly created endpoint service's DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a CloudFront origin access identity (OAI) for the web application. Update the web application origin in CloudFront to use the OAI Update the ALB rules to check for the OAI and return an HTTP 403 error if the OAI header is not present.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Firewall Manager security policy. Attach the security policy to the CloudFront distribution. Use the security policy to attach AWS WAF rule groups for each type of traffic that the company wants to block.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 827057,
          "date": "Thu 02 Mar 2023 16:46",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "agree, revising my pick to AB.  ALB can do the content based routing better here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826407,
          "date": "Thu 02 Mar 2023 03:35",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A and B for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826073,
          "date": "Wed 01 Mar 2023 17:35",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Both options A and E provide ways to block requests based on the content of the requests",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#196",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to scan code changes for security issues before deployment and must prevent noncompliant code from being deployed. The company uses an AWS CodePipeline pipeline that starts when code changes occur. The code changes occur many times each day.<br><br>The company's security team supports a third-party application for code scans and has provided command-line integration steps to submit code scans. The code scan step requires a user name and password.<br><br>Which solution will meet these requirements in the MOST secure way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#196",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS CodeBuild project. Configure the user name and password in an environment variable. Use the user name and password to run the command-line integration steps. Update the CodePipeline pipeline to include a new scan stage. In the new scan stage, include a test action that uses the newly created CodeBuild project.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS CodeBuild project. Store the user name and password as a secret in AWS Secrets Manager Read the secret from Secrets Manager. Use the user name and password to run the command-line integration steps. Update the CodePipeline pipeline to include a new scan stage. In the new scan stage, include a test action that uses the newly created CodeBuild project.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS CodeBuild project. Store the user name and password as a string in AWS Systems Manager Parameter Store. Read the string from Parameter Store. Use the user name and password to run the command-line integration steps. Update the CodePipeline pipeline to include a new scan stage. In the new scan stage, include a test action that uses the newly created CodeBuild project.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the user name and password in an encrypted JSON file to an Amazon S3 bucket that has a specific policy to allow only administrators to read the file. Create a new AWS CodeBuild project. Use the user name and password from the file in Amazon S3 to run the command-line integration steps. Update the CodePipeline pipeline to include a new scan stage. In the new scan stage, include a test action that uses the newly created CodeBuild project.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826462,
          "date": "Thu 02 Mar 2023 04:18",
          "username": "\t\t\t\tcatboy\t\t\t",
          "content": "agree with B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 826411,
          "date": "Thu 02 Mar 2023 03:39",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B is correct \\\"Secret manager\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826077,
          "date": "Wed 01 Mar 2023 17:39",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "B is most secure way",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#197",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS CloudFormation to manage an application that runs on Amazon EC2 Instances. The instances are in an Amazon EC2 Auto Scaling group. The company wants to treat its infrastructure as immutable.<br><br>A DevOps engineer must implement a solution to replace two EC2 instances at a time whenever operating system configuration updates are needed or when new Amazon Machine. Images (AMIs) are needed. A minimum of four EC2 instances must be running whenever an update is in progress.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#197",
          "answers": [
            {
              "choice": "<p>A. Modify the CloudFormation template to include an UpdatePolicy attribute for the Auto Scaling group. Include the AutoScalingRollingUpdate policy with MinInstancesInService of 4 and MaxBatchSize of 2. Whenever a software update is needed, alter either or both of the ImageId and UserData of the AWS::EC2::LaunchTemplate and update the stack.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set the Auto Scaling group’s minimum capacity to 4. Create an AWS CodeDeploy deployment group that has an in-place deployment type. Select Amazon EC2 Auto Scaling group for the environment configuration. Whenever a new revision is available, create a new CodeDeploy deployment that has a deployment configuration of CodeDeployDefault HalfAtATime.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the Auto Scaling group's minimum capacity to 4. Create an AWS CodeDeploy deployment group that has a blue/green deployment type. Select Amazon EC2 Auto Scaling group for the environment configuration. Whenever a new revision is available, create a new CodeDeploy deployment that has a deployment configuration of CodeDeployDefault HalfAtATime.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the CloudFormation template to include a StackPolicy. Designate an AutoScalingReplacingUpdate policy to control the update. Specify MinInstancesInService of 4 and MaxBatchSize of 2. Whenever a software update is needed, alter either or both of the ImageId and UserData of the AWS::EC2::LaunchTemplate and update the stack.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826438,
          "date": "Thu 02 Mar 2023 03:59",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A is the best",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826084,
          "date": "Wed 01 Mar 2023 17:45",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option B is incorrect because it suggests using AWS CodeDeploy to perform an in-place deployment type, which is not appropriate for replacing EC2 instances in batches.<br><br>Option C is incorrect because it suggests using AWS CodeDeploy to perform a blue/green deployment type, which is not appropriate for replacing EC2 instances in batches.<br><br>Option D is incorrect because it suggests using a StackPolicy to control the update, which is not appropriate for this use case.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 826082,
          "date": "Wed 01 Mar 2023 17:44",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A is the correct solution. It involves modifying the CloudFormation template to include an UpdatePolicy attribute for the Auto Scaling group with the AutoScalingRollingUpdate policy. This policy allows for rolling updates that replace instances in batches of a specified size, which in this case is two instances at a time. The MinInstancesInService attribute ensures that a minimum of four instances are running whenever an update is in progress. To update the software, either the ImageId or UserData of the AWS::EC2::LaunchTemplate is altered and the stack is updated.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#198",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video-sharing company stores its videos in Amazon S3. The company has observed a sudden increase in video access requests, but the company does not know which videos are most popular. The company needs to identify the general access pattern for the video files. This pattern includes the number of users who access a certain file on a given day, as well as the number of pull requests for certain files.<br><br>How can the company meet these requirements with the LEAST amount of effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#198",
          "answers": [
            {
              "choice": "<p>A. Activate S3 server access logging. Import the access logs into an Amazon Aurora database. Use an Aurora SQL query to analyze the access patterns.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate S3 server access logging. Use Amazon Athena to create an external table with the log files. Use Athena to create a SQL query to analyze the access patterns.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invoke an AWS Lambda function for every S3 object access event. Configure the Lambda function to write the file access information, such as user, S3 bucket, and file key, to an Amazon Aurora database. Use an Aurora SQL query to analyze the access patterns.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Record an Amazon CloudWatch Logs log message for every S3 object access event. Configure a CloudWatch Logs log stream to write the file access information such as user. S3 bucket, and file key, to an Amazon Kinesis Data Analytics for SQL application. Perform a sliding window analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826440,
          "date": "Thu 02 Mar 2023 04:01",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826089,
          "date": "Wed 01 Mar 2023 17:50",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A involves importing S3 server access logs into an Amazon Aurora database, which requires more effort than using Amazon Athena. Additionally, Aurora is a more complex and expensive option than Athena for this use case.<br><br>Option C involves invoking an AWS Lambda function for every S3 object access event and storing the file access information in an Amazon Aurora database. This option requires more setup and ongoing management than using Amazon Athena, which is a simpler and more cost-effective solution.<br><br>Option D involves recording a CloudWatch Logs log message for every S3 object access event and sending the log stream to an Amazon Kinesis Data Analytics for SQL application. This option requires additional setup and configuration, which makes it less straightforward and more time-consuming than using Amazon Athena. Additionally, using Kinesis Data Analytics for SQL may be overkill for this use case, as it is primarily designed for real-time streaming data analysis, which is not a requirement for the current scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826088,
          "date": "Wed 01 Mar 2023 17:48",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Activating S3 server access logging and using Amazon Athena to create an external table with the log files is the easiest and most cost-effective way to analyze access patterns. This option requires minimal setup and allows for quick analysis of the access patterns with SQL queries. Additionally, Amazon Athena scales automatically to match the query load, so there is no need for additional infrastructure provisioning or management.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#199",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is working on a project that is hosted on Amazon Linux and has failed a security review. The DevOps manager has been asked to review the company buildspec.yaml file for an AWS CodeBuild project and provide recommendations. The buildspec.yaml file is configured as follows:<br><br><img src=\"https://img.examtopics.com/aws-devops-engineer-professional/image12.png\"><br><br>What changes should be recommended to comply with AWS security best practices? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#199",
          "answers": [
            {
              "choice": "<p>A. Add a post-build command to remove the temporary files from the container before termination to ensure they cannot be seen by other CodeBuild users.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the CodeBuild project role with the necessary permissions and then remove the AWS credentials from the environment variable.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the DB_PASSWORD as a SecureString value in AWS Systems Manager Parameter Store and then remove the DB_PASSWORD from the environment variables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the environment variables to the ‘db-deploy-bucket’ Amazon S3 bucket add a prebuild stage to download, then export the variables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Systems Manager run command versus scp and ssh commands directly to the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Scramble the environment variables using XOR followed by Base64, add a section to install, and then run XOR and Base64 to the build phase.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826219,
          "date": "Wed 01 Mar 2023 20:38",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A: Remove temporary files post-build.<br>Option B: Remove AWS credentials from environment.<br>Option C: Store DB_PASSWORD in Parameter Store.<br>Option D: Move environment variables to S3. ok, ABC options above will meet requirement.<br>Option E: Using SSM run command is good for securing instances not directly related to this process.<br>Option F: Scramble environment variables is adding complexity.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 826445,
          "date": "Thu 02 Mar 2023 04:05",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A B C are the correct ones",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ABC"
        }
      ]
    },
    {
      "question_id": "#200",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer at a company is supporting an AWS environment in which all users use AWS IAM identity Center (AWS Single Sign-On). The company wants to immediately disable credentials of any new IAM user and wants the security team to receive a notification.<br><br>Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#200",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge rule that reacts to an IAM CreateUser API call in AWS CloudTrail.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon EventBridge rule that reacts to an IAM GetLoginProfile API call in AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that is a target of the EventBridge rule. Configure the Lambda function to disable any access keys and delete the login profiles that are associated with the IAM user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that is a target of the EventBridge rule. Configure the Lambda function to delete the login profiles that are associated with the IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Simple Notification Service (Amazon SNS) topic that is a target of the EventBridge rule. Subscribe the security team’s group email address to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an Amazon Simple Queue Service (Amazon SQS) queue that is a target of the Lambda function. Subscribe the security team's group email address to the queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826451,
          "date": "Thu 02 Mar 2023 04:10",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A C E are the correct ones",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 826102,
          "date": "Wed 01 Mar 2023 18:08",
          "username": "\t\t\t\tdangal97\t\t\t",
          "content": "I will go with A,C&E",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 826092,
          "date": "Wed 01 Mar 2023 17:53",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "ACE meets requirement",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is receiving reports that its order history page is experiencing delays in reflecting the processing status of orders. The order processing system consists of an AWS Lambda function that uses reserved concurrency. The Lambda function processes order messages from an Amazon Simple Queue Service (Amazon SQS) queue and inserts processed orders into an Amazon DynamoDB table. The DynamoDB table has auto scaling enabled for read and write capacity.<br><br>Which actions should a DevOps engineer take to resolve this delay? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. Check the ApproximateAgeOfOldestMessage metric for the SQS queue. Increase the Lambda function concurrency limit.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Check the ApproximateAgeOfOldestMessage metric for the SQS queue. Configure a redrive policy on the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Check the NumberOfMessagesSent metric for the SQS queue. Increase the SQS queue visibility timeout.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Check the WriteThrottleEvents metric for the DynamoDB table. Increase the maximum write capacity units (WCUs) for the table's scaling policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Check the Throttles metric for the Lambda function. Increase the Lambda function timeout.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826459,
          "date": "Thu 02 Mar 2023 04:15",
          "username": "\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t",
          "content": "A and D are the correct answers.maximum write capacity and read capacity are adjustable in dynabodb auto scaling",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 826461,
          "date": "Thu 02 Mar 2023 04:17",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "maximum write capacity and read capacity are adjustable in dynabodb auto scaling",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826193,
          "date": "Wed 01 Mar 2023 19:58",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "Ad is answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 826094,
          "date": "Wed 01 Mar 2023 17:58",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "AD will help resolve the issue",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on current-generation Amazon EC2 instances in a VPC.  The EC2 instances run Amazon Linux and are launched in an Amazon EC2 Auto Scaling group. The application retrieves data from an Amazon S3 bucket, processes the data, and uploads the processed data to a different S3 bucket.<br><br>Recently, the application's performance worsened. A manual investigation identified that outbound network bandwidth utilization was too high for the type of EC2 instance. The company updated the EC2 instances to a larger EC2 instance size.<br><br>The company's DevOps team needs to receive notification from an Amazon CloudWatch alarm if the application attempts to use more outbound network bandwidth than is available to the EC2 instances.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Configure EC2 detailed monitoring for the EC2 instances. Create an AWS Lambda function to create a CloudWatch alarm for the bw_out_allowance_exceeded CloudWatch metric for each EC2 instance Configure the alarm to notify the DevOps team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the unified CloudWatch agent on the EC2 instances to export the bw_out_allowance_exceeded metric to CloudWatch metrics. Create a CloudWatch composite alarm to monitor all bw_out_allowance_exceeded metrics. Configure the alarm to notify the DevOps team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure VPC flow logging to Amazon CloudWatch Logs for the EC2 instances. Create a CloudWatch Logs metric filter to match events in which bandwidth allowance is exceeded. Create a CloudWatch composite alarm to monitor all bw_out_allowance_exceeded metrics. Configure the alarm to notify the DevOps team.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the unified CloudWatch agent on the EC2 instances to export the bw_out_allowance_exceeded metric to CloudWatch metrics. Create an AWS Lambda function to create a CloudWatch alarm for the bw_out_allowance_exceeded CloudWatch metric for each EC2 instance. Configure the alarm to notify the DevOps team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826467,
          "date": "Thu 02 Mar 2023 04:24",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "Yes, B is the answer<br>https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-ec2-instance-level-network-performance-metrics-uncover-new-insights/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826150,
          "date": "Wed 01 Mar 2023 19:14",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "voting for B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Application Load Balancers (ALBs) as part of its application architecture. The company has ALBs in AWS accounts that are part of an organization in AWS Organizations. The company has configured AWS Config in all AWS accounts in the organization.<br><br>The company needs to apply an AWS WAF web ACL with a common set of rules to all ALBs, including any ALBs that are created in the future. Administrators of each AWS account must be able to define their own AWS WAF rules that are in addition to the common rules that the company’s security team provides for all the accounts.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Configure AWS Firewall Manager for the organization. In the Firewall Manager administrator account, create an AWS WAF policy. Turn on automatic remediation and define the web ACL. Configure the policy scope to apply to all ALBs in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Resource Access Manager (AWS RAM) from the organization's management account to enable resource sharing in the organization. Create the web ACL. Configure a resource share of the web ACL for the organization. Associate the shared web ACL with all the ALBs in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up the ALB_WAF_ENABLED AWS Config managed rule with automatic remediation. Configure the rule to create the web ACL and to attach the web ACL to all ALBs in an AWS account. Create an AWS Config conformance pack that contains the rule. Deploy the conformance pack to all AWS accounts in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Firewall Manager for the organization. In the Firewall Manager administrator account, create an AWS WAF policy that defines the web ACL. Set up the ALB_WAF_ENABLED AWS Config managed rule with automatic remediation. Configure the rule to attach the web ACL to all ALBs in an AWS account. Deploy the rule to all AWS accounts in the organization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826806,
          "date": "Thu 02 Mar 2023 13:03",
          "username": "\t\t\t\tSS2023\t\t\t",
          "content": "I like A based on the link saeidp posted",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826480,
          "date": "Thu 02 Mar 2023 04:52",
          "username": "\t\t\t\tsaeidp\t\t\t\t\t\t\tsaeidp\t\t\t",
          "content": "A for me<br>AWS config is only used for detecting the new resources<br>https://aws.amazon.com/blogs/security/using-aws-firewall-manager-and-waf-to-protect-your-web-applications-with-master-rules-and-application-specific-rules/By the way WAF acl are not part of shareables from RAM<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "22",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826481,
          "date": "Thu 02 Mar 2023 04:52",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "By the way WAF acl are not part of shareables from RAM<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 826157,
          "date": "Wed 01 Mar 2023 19:22",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A is incorrect because AWS Firewall Manager is not necessary to achieve the goal. Option B is the better solution because it uses AWS RAM to share the web ACL across all accounts. Option C is incorrect because it applies only to AWS Config and does not provide a solution for deploying the web ACL. Option D is incorrect because it also involves AWS Firewall Manager, which is not necessary to achieve the goal.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#204",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company publishes application logs to an Amazon CloudWatch Logs log group in the us-east-1 Region. The company needs to export the logs from us-east-1 to the us-west-2 Region on a weekly basis. The logs must be encrypted in both Regions.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create an Amazon S3 bucket in us-west-2. Configure server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for the S3 bucket. Create and schedule an AWS Lambda function to run weekly to export the CloudWatch logs from the last week to the S3 bucket in us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 bucket in us-west-2. Configure server-side encryption with AWS KMS keys (SSE-KMS) for the S3 bucket. Create and schedule an AWS Lambda function to run weekly to export the CloudWatch logs from the last week to the S3 bucket in us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket in us-east-1. Create an S3 bucket in us-west-2. Configure server-side encryption with Amazon S3 managed encryption keys (SSE-S3) and turn on versioning for both S3 buckets. Create and schedule an AWS Lambda function to run weekly to export the CloudWatch logs from the last week to the S3 bucket in us-east-1. Configure a replication rule on the S3 bucket in us-east-1 to replicate the logs to the S3 bucket in us-west-2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket in us-east-1. Create an S3 bucket in us-west-2. Configure server-side encryption with AWS KMS keys (SSE-KMS) and turn on versioning for both S3 buckets. Create and schedule an AWS Lambda function to run weekly to export the CloudWatch logs from the last week to the S3 bucket in us-east-1. Configure a replication rule on the S3 bucket in us-east-1 to replicate the logs to the S3 bucket in us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826846,
          "date": "Thu 02 Mar 2023 13:16",
          "username": "\t\t\t\tSS2023\t\t\t",
          "content": "I think it is C or D based on the requirements of logs being encrypted in both regions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 826483,
          "date": "Thu 02 Mar 2023 05:04",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "I go with C<br>You must have the logs encrypted in both side",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826167,
          "date": "Wed 01 Mar 2023 19:29",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A also works but uses SSE-S3 instead of Option B AWS KMS keys which offers more better, granular control. Option C and D are not as efficient as they involve replicating logs from the S3 bucket in us-east-1 to the S3 bucket in us-west-2, which increases costs and complexity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application on Amazon EC2 instances. The company uses a series of AWS CloudFormation stacks to define the application resources. A developer performs updates by building and testing the application on a laptop and then uploading the build output and CloudFormation stack templates to Amazon S3. The developer’s peers review the changes before the developer performs the CloudFormation stack update and installs a new version of the application onto the EC2 instances.<br><br>The deployment process is prone to errors and is time-consuming when the developer updates each EC2 instance with the new application. The company wants to automate as much of the application deployment process as possible while retaining a final manual approval step before the modification of the application or resources.<br><br>The company already has moved the source code for the application and the CloudFormation templates to AWS CodeCommit. The company also has created an AWS CodeBuild project to build and test the application.<br><br>Which combination of steps will meet the company's requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>A. Create an application group and a deployment group in AWS CodeDeploy. Install the CodeDeploy agent on the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an application revision and a deployment group in AWS CodeDeploy. Create an environment in CodeDeploy. Register the EC2 instances to the CodeDeploy environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CodePipeline to invoke the CodeBuild job, run the CloudFormation update, and pause for a manual approval step. After approval, start the AWS CodeDeploy deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CodePipeline to invoke the CodeBuild job, create CloudFormation change sets for each of the application stacks, and pause for a manual approval step. After approval, run the CloudFormation change sets and start the AWS CodeDeploy deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS CodePipeline to invoke the CodeBuild job, create CloudFormation change sets for each of the application stacks, and pause for a manual approval step. After approval, start the AWS CodeDeploy deployment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826490,
          "date": "Thu 02 Mar 2023 05:22",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "Maybe A and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 826487,
          "date": "Thu 02 Mar 2023 05:18",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "It is a strange question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826178,
          "date": "Wed 01 Mar 2023 19:44",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "A.  Incorrect - CodeDeploy is not needed and installing the agent on each EC2 instance is not an efficient approach.B.  Correct - Creates an application revision and a deployment group in AWS CodeDeploy, creates an environment in CodeDeploy, registers the EC2 instances to the CodeDeploy environment.C.  Incorrect - This approach does not use AWS CodeDeploy, which is necessary for the final manual approval step.D.  Correct - Creates a CloudFormation change set for each application stack, pauses for a manual approval step, and runs the CloudFormation change sets and starts the AWS CodeDeploy deployment.E.  Incorrect - Similar to D, but starts the AWS CodeDeploy deployment before running the CloudFormation change sets, which is not necessary.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#206",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The engineer must restrict which AWS Regions can be used, and ensure an alert is sent as soon as possible if any activity outside the governance policy takes place. The controls should be automatically enabled on any new Region outside the United States (US).<br><br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Organizations SCP that denies access to all non-global services in non-US Regions. Attach the policy to the root of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs and enable it for all Regions. Use a CloudWatch Logs metric filter to send an alert on any service activity in non-US Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Lambda function that checks for AWS service activity and deploy it to all Regions. Write an Amazon EventBridge rule that runs the Lambda function every hour, sending an alert if activity is found in a non-US Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions and send alerts if any activity is found.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Write an SCP using the aws:RequestedRegion condition key limiting access to US Regions. Apply the policy to all users, groups and roles.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826882,
          "date": "Thu 02 Mar 2023 13:29",
          "username": "\t\t\t\tSS2023\t\t\t",
          "content": "I agree with AB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826492,
          "date": "Thu 02 Mar 2023 05:26",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A and B for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826190,
          "date": "Wed 01 Mar 2023 19:56",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A: Restricts non-US regions.<br>Option B: Sends alerts for non-US activity.<br>Option C: Doesn't restrict region usage.<br>Option D: Doesn't restrict region usage.<br>Option E: Only restricts US regions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 826172,
          "date": "Wed 01 Mar 2023 19:35",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "Ab is answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#207",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company grants external users access to its AWS account by creating an IAM user for each external user. A DevOps engineer must implement a solution to revoke access from IAM users that have not accessed the account in 90 days.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Turn on AWS Config in the AWS account. Deploy the lam-user-unused-credentials-check AWS Config managed rule Configure the rule to run periodically Configure AWS. Config automatic remediation to run the AWSConfigRemediation-RevokeUnusedlAMUserCredentials AWS Systems Manager Automation runbook.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Identity and Access Management Access Analyzer to create an analyzer in the AWS account. Create an Amazon EventBridge rule to match IAM Access Analyzer events for IAM users that were last accessed more than 90 days ago. Configure the rule to run the AWSConfigRemediation-DetachlAMPolicy AWS Systems Manager Automation runbook to detach any policies that are attached to the IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS Trusted Advisor in the AWS account. Use the AWS Developer Support plan to access the AWS Support API. Configure an Amazon EventBridge scheduled rule to use the Support API’s Trusted Advisor IAM Access Key Rotation check to discover IAM credentials that have not been accessed for more than 90 days. Configure another EventBridge rule to use the Trusted Advisor Check Item Refresh Status event type and to run the AWSConfigRemediation-RevokeUnusedlAMUserCredentials AWS Systems Manager Automation runbook.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS Security Hub in the AWS account. Configure a Security Hub rule that determines when an IAM user was last accessed. Configure an Amazon EventBridge rule to match the Security Hub rule and to run the AWSConfigRemediation-RevokeUnusedlAMUserCredentials AWS Systems Manager Automation runbook.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826496,
          "date": "Thu 02 Mar 2023 05:31",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "A seems correct<br>https://docs.aws.amazon.com/config/latest/developerguide/iam-user-unused-credentials-check.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826196,
          "date": "Wed 01 Mar 2023 20:03",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A:correct, Revokes unused IAM credentials.<br>Option B:does not revoke, Detaches policies for inactive IAM users.<br>Option C: does not revoke, Uses Trusted Advisor to discover inactive IAM credentials.<br>Option D: does not revoke, Determines last IAM access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 826175,
          "date": "Wed 01 Mar 2023 19:38",
          "username": "\t\t\t\tds50421\t\t\t",
          "content": "B is answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has provided an externally hosted third-party vendor product with access to the company's AWS account. The vendor product performs various AWS actions in the AWS account and requires various IAM permissions. The company granted the access by creating an IAM user, associating IAM policies and inserting the IAM user credentials into the vendor product.<br><br>A security review reveals that the vendor’s access is overly permissive. The company wants to apply the principle of least privilege and wants to continue giving the vendor permissions to perform only the actions that the vendor has performed in the last 6 months.<br><br>Which solution will meet these requirements with the LEAST effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#208",
          "answers": [
            {
              "choice": "<p>A. Use AWS Identity and Access Management Access Analyzer to generate a new IAM policy based on the IAM user’s AWS CloudTrail history. Replace the IAM user policy with the newly generated policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Identity and Access Management Access Analyzer to generate a new IAM policy based on the IAM user’s AWS CloudTrail history. Attach the newly generated policy as a permissions boundary to the IAM user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Identity and Access Management Access Analyzer to discover the last accessed information for the IAM user and to create a new IAM policy that allows only the services and actions that the last accessed review identified. Replace the IAM user policy with the newly generated policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Identity and Access Management Access Analyzer to discover the last accessed information for the IAM user and to create a new IAM policy that allows only the services and actions that the last accessed review identified. Attach the newly generated policy as a permissions boundary to the IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 826498,
          "date": "Thu 02 Mar 2023 05:35",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B makes more sense than others",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 826497,
          "date": "Thu 02 Mar 2023 05:35",
          "username": "\t\t\t\tsaeidp\t\t\t",
          "content": "B makes more sense than others",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 826201,
          "date": "Wed 01 Mar 2023 20:08",
          "username": "\t\t\t\tCloudFloater\t\t\t",
          "content": "Option A: Policy based on CloudTrail history.<br>Option B: Policy boundary based on CloudTrail.<br>Option C: Policy based on last access.<br>Option D: Policy boundary based on last access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    }
  ]
}