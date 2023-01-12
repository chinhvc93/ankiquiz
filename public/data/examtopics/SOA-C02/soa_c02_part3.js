var SOA_C02_Part3 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's web application is available through an Amazon CloudFront distribution and directly through an internet-facing Application Load Balancer (ALB). A SysOps administrator must make the application accessible only through the CloudFront distribution and not directly through the ALB.  The SysOps administrator must make this change without changing the application code.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. Modify the ALB type to internal. Set the distribution's origin to the internal ALB domain name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Lambda@Edge function. Configure the function to compare a custom header value in the request with a stored password and to forward the request to the origin in case of a match. Associate the function with the distribution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the ALB with a new internal ALB.  Set the distribution's origin to the internal ALB domain name. Add a custom HTTP header to the origin settings for the distribution. In the ALB listener, add a rule to forward requests that contain the matching custom header and the header's value. Add a default rule to return a fixed response code of 403.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a custom HTTP header to the origin settings for the distribution. In the ALB listener, add a rule to forward requests that contain the matching custom header and the header's value. Add a default rule to return a fixed response code of 403.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 201 discussion",
      "discusstion": [
        {
          "id": 758399,
          "date": "Tue 27 Dec 2022 12:15",
          "username": "Arnaud92",
          "content": "D<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/restrict-access-to-load-balancer.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752939,
          "date": "Thu 22 Dec 2022 04:02",
          "username": "MrMLB",
          "content": "D<br><br>To make the application accessible only through the CloudFront distribution and not directly through the Application Load Balancer (ALB), you can add a custom HTTP header to the origin settings for the CloudFront distribution. You can then create a rule in the ALB listener to forward requests that contain the matching custom header and its value to the origin. You can also add a default rule to the ALB listener to return a fixed response code of 403 for requests that do not contain the matching custom header. This will allow you to redirect all requests to the CloudFront distribution and block direct access to the application through the ALB. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745967,
          "date": "Thu 15 Dec 2022 11:58",
          "username": "vijayabeznika",
          "content": "A,but may need to remove public IP of ALB from DNS.A seems correct.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 748401,
          "date": "Sat 17 Dec 2022 21:42",
          "username": "beznika",
          "content": "A seems correct.",
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
      "question_text": "<p>A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Service Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Service Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 202 discussion",
      "discusstion": [
        {
          "id": 739235,
          "date": "Thu 08 Dec 2022 16:45",
          "username": "CloudHandsOn",
          "content": "Setting up the Alarms, then sending emails via SNS should do the job",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 738559,
          "date": "Thu 08 Dec 2022 03:49",
          "username": "goatbernard",
          "content": "it should be SNS instead of SQS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement a managed file system to host Windows file shares for users on premises. Resources in the AWS Cloud also need access to the data on these file shares. A SysOps administrator needs to present the user file shares on premises and make the user file shares available on AWS with minimum latency.<br><br>What should the SysOps administrator do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#203",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an AWS Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DataSync to automate data transfers between the existing file servers and AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Amazon FSx File Gateway.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 203 discussion",
      "discusstion": [
        {
          "id": 762470,
          "date": "Sat 31 Dec 2022 05:05",
          "username": "skiwili",
          "content": "Ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 748403,
          "date": "Sat 17 Dec 2022 21:44",
          "username": "beznika",
          "content": "D should do.",
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
      "question_text": "<p>A company is hosting applications on Amazon EC2 instances. The company is hosting a database on an Amazon RDS for PostgreSQL DB instance. The company requires all connections to the DB instance to be encrypted.<br><br>What should a SysOps administrator do to meet this requirement?</p>",
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
              "choice": "<p>A. Allow SSL connections to the database by using an inbound security group rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Encrypt the database by using an AWS Key Management Service (AWS KMS) encryption key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enforce SSL connections to the database by using a custom parameter group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Patch the database with SSL/TLS by using a custom PostgreSQL extension.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 204 discussion",
      "discusstion": [
        {
          "id": 752514,
          "date": "Wed 21 Dec 2022 16:39",
          "username": "zolthar_z",
          "content": "yeap, C is the answer: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 740116,
          "date": "Fri 09 Dec 2022 13:57",
          "username": "beznika",
          "content": "C looks ok https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Concepts.General.SSL.html",
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
      "question_text": "<p>A company recently purchased Savings Plans. The company wants to receive email notification when the company's utilization drops below 90% for a given day.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#205",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch alarm to monitor the Savings Plan check in AWS Trusted Advisor. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification when the utilization drops below 90% for a given day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch alarm to monitor the SavingsPlansUtilization metric under the AWS/SavingsPlans namespace in CloudWatch. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification when the utilization drops below 90% for a given day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Savings Plans alert to monitor the daily utilization of the Savings Plans. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification when the utilization drops below 90% for a given day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Budgets to create a Savings Plans budget to track the daily utilization of the Savings Plans. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification when the utilization drops below 90% for a given day.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 205 discussion",
      "discusstion": [
        {
          "id": 764165,
          "date": "Tue 03 Jan 2023 01:55",
          "username": "yeacuzyeacuz",
          "content": "The answer is definitely D, not C. Here is the documentation on how to create a daily Savings Plan budget with SNS notification:<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.htmlThe answer is definitely D, not C. Here is the documentation on how to create a daily Savings Plan budget with SNS notification:<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764166,
          "date": "Tue 03 Jan 2023 01:55",
          "username": "yeacuz",
          "content": "The answer is definitely D, not C. Here is the documentation on how to create a daily Savings Plan budget with SNS notification:<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758423,
          "date": "Tue 27 Dec 2022 12:47",
          "username": "Arnaud92hoez",
          "content": "D<br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-sns-policy.htmlAnswer is D Savings Plan Budget notification<br>https://www.awsinformation.com/2022/09/26/set-up-notifications-for-low-savings-plan-utilization/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 759052,
          "date": "Tue 27 Dec 2022 21:43",
          "username": "hoez",
          "content": "Answer is D Savings Plan Budget notification<br>https://www.awsinformation.com/2022/09/26/set-up-notifications-for-low-savings-plan-utilization/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743718,
          "date": "Tue 13 Dec 2022 08:44",
          "username": "michaldavidyeacuz",
          "content": "ccccccccThe answer is definitely D, not C. Here is the documentation on how to create a daily Savings Plan budget with SNS notification:<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764164,
          "date": "Tue 03 Jan 2023 01:54",
          "username": "yeacuz",
          "content": "The answer is definitely D, not C. Here is the documentation on how to create a daily Savings Plan budget with SNS notification:<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses an Amazon Simple Queue Service (Amazon SQS) standard queue with its application. The application sends messages to the queue with unique message bodies. The company decides to switch to an SQS FIFO queue.<br><br>What must the company do to migrate to an SQS FIFO queue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. Create a new SQS FIFO queue. Turn on content-based deduplication on the new FIFO queue. Update the application to include a message group ID in the messages.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new SQS FIFO queue. Update the application to include the DelaySeconds parameter in the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the queue type from SQS standard to SQS FIFO. Turn off content-based deduplication on the queue. Update the application to include a message group ID in the messages.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the queue type from SQS standard to SQS FIFO. Update the application to send messages with identical message bodies and to include the DelaySeconds parameter in the messages.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 206 discussion",
      "discusstion": [
        {
          "id": 765466,
          "date": "Wed 04 Jan 2023 11:07",
          "username": "nlw",
          "content": "FIFO queues don't support per-message delays, only per-queue delays. If your application sets the same value of the DelaySeconds parameter on each message, you must modify your application to remove the per-message delay and set DelaySeconds on the entire queue instead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 743949,
          "date": "Tue 13 Dec 2022 12:53",
          "username": "michaldavid",
          "content": "I think A as well",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741875,
          "date": "Sun 11 Dec 2022 17:09",
          "username": "beznika",
          "content": "I think it's A.  https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.html",
          "upvote_count": "2",
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
      "question_text": "<p>A company's SysOps administrator must ensure that all Amazon EC2 Windows instances that are launched in an AWS account have a third-party agent installed. The third-party agent has an .msi package. The company uses AWS Systems Manager for patching, and the Windows instances are tagged appropriately. The third-party agent requires periodic updates as new versions are released. The SysOps administrator must deploy these updates automatically.<br><br>Which combination of steps will meet these requirements with the LEAST operational effort? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Create a Systems Manager Distributor package for the third-party agent.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Make sure that Systems Manager Inventory is configured. If Systems Manager Inventory is not configured, set up a new inventory for instances that is based on the appropriate tag value for Windows.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Systems Manager State Manager association to run the AWS-RunRemoteScript document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows with a schedule of 1 day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Systems Manager State Manager association to run the AWS-ConfigureAWSPackage document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows with a schedule of 1 day.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a Systems Manager OpsItem with the tag value for Windows. Attach the Systems Manager Distributor package to the OpsItem. Create a maintenance window that is specific to the package deployment. Configure the maintenance window to cover 24 hours a day.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 207 discussion",
      "discusstion": [
        {
          "id": 762477,
          "date": "Sat 31 Dec 2022 05:18",
          "username": "skiwili",
          "content": "AD for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 752622,
          "date": "Wed 21 Dec 2022 18:52",
          "username": "zolthar_z",
          "content": "A and D https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs hundreds of Amazon EC2 instances in a single AWS Region. Each EC2 instance has two attached 1 GiB General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volumes. A critical workload is using all the available IOPS capacity on the EBS volumes.<br><br>According to company policy, the company cannot change instance types or EBS volume types without completing lengthy acceptance tests to validate that the company's applications will function properly. A SysOps administrator needs to increase the I/O performance of the EBS volumes as quickly as possible.<br><br>Which action should the SysOps administrator take to meet these requirements?</p>",
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
              "choice": "<p>A. Increase the size of the 1 GiB EBS volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add two additional elastic network interfaces on each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on Transfer Acceleration on the EBS volumes in the Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add all the EC2 instances to a cluster placement group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 208 discussion",
      "discusstion": [
        {
          "id": 769607,
          "date": "Sun 08 Jan 2023 16:53",
          "username": "Fatoch",
          "content": "For me C is correct. Performance should be quick",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 762480,
          "date": "Sat 31 Dec 2022 05:21",
          "username": "skiwili",
          "content": "A would be the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 752623,
          "date": "Wed 21 Dec 2022 18:54",
          "username": "zolthar_z",
          "content": "Answer is A, more capacitymore IOPS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 749483,
          "date": "Mon 19 Dec 2022 06:16",
          "username": "michaldavid",
          "content": "I stand corrected this is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 748417,
          "date": "Sat 17 Dec 2022 22:02",
          "username": "beznika",
          "content": "I think A is correct. C is for S3 and D doesn't make any sense. Moving instances to placement groups would require acceptance tests. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/requesting-ebs-volume-modifications.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 747493,
          "date": "Fri 16 Dec 2022 19:23",
          "username": "tt79",
          "content": "Transfer acceleration is used for uploading data to S3.<br>D is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 743953,
          "date": "Tue 13 Dec 2022 12:56",
          "username": "michaldavid",
          "content": "This is C to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to deploy a new workload on AWS. The company must encrypt all data at rest and must rotate the encryption keys once each year. The workload uses an Amazon RDS for MySQL Multi-AZ database for data storage.<br><br>Which configuration approach will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#209",
          "answers": [
            {
              "choice": "<p>A. Enable Transparent Data Encryption (TDE) in the MySQL configuration file. Manually rotate the key every 12 months.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable RDS encryption on the database at creation time by using the AWS managed key for Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Enable RDS encryption on the database at creation time by using the KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Enable encryption on the Amazon Elastic Block Store (Amazon EBS) volumes that are attached to the RDS DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 209 discussion",
      "discusstion": [
        {
          "id": 762921,
          "date": "Sat 31 Dec 2022 21:19",
          "username": "CodePoet",
          "content": "Obviously C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 743954,
          "date": "Tue 13 Dec 2022 12:57",
          "username": "michaldavid",
          "content": "Agree with C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing backups in an Amazon S3 bucket. The backups must not be deleted for at least 3 months after the backups are created.<br><br>What should a SysOps administrator do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>A. Configure an IAM policy that denies the s3:DeleteObject action for all users. Three months after an object is written, remove the policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable S3 Object Lock on a new S3 bucket in compliance mode. Place all backups in the new S3 bucket with a retention period of 3 months.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable S3 Versioning on the existing S3 bucket. Configure S3 Lifecycle rules to protect the backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable S3 Object Lock on a new S3 bucket in governance mode. Place all backups in the new S3 bucket with a retention period of 3 months.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 212 discussion",
      "discusstion": [
        {
          "id": 764630,
          "date": "Tue 03 Jan 2023 13:36",
          "username": "zolthar_z",
          "content": "Answer is B, governance mode allows some users to delete/modify the data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator needs to track the costs of data transfer between AWS Regions. The SysOps administrator must implement a solution to send alerts to an email distribution list when transfer costs reach 75% of a specific threshold.<br><br>What should the SysOps administrator do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Cost and Usage Report. Analyze the results in Amazon Athena. Configure an alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when costs reach 75% of the threshold. Subscribe the email distribution list to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudWatch billing alarm to detect when costs reach 75% of the threshold. Configure the alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the email distribution list to the topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Budgets to create a cost budget for data transfer costs. Set an alert at 75% of the budgeted amount. Configure the budget to send a notification to the email distribution list when costs reach 75% of the threshold.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a VPC flow log. Set up a subscription filter to an AWS Lambda function to analyze data transfer. Configure the Lambda function to send a notification to the email distribution list when costs reach 75% of the threshold.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 213 discussion",
      "discusstion": [
        {
          "id": 764706,
          "date": "Tue 03 Jan 2023 14:55",
          "username": "zolthar_z",
          "content": "Ans is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to archive all audit logs for 10 years. The company must protect the logs from any future edits.<br><br>Which solution will meet these requirements?</p>",
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
              "choice": "<p>A. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Configure AWS Key Management Service (AWS KMS) encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the data in an Amazon S3 Glacier vault. Configure a vault lock policy for write-once, read-many (WORM) access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the data in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Configure server-side encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the data in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Configure multi-factor authentication (MFA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 214 discussion",
      "discusstion": [
        {
          "id": 764707,
          "date": "Tue 03 Jan 2023 14:56",
          "username": "zolthar_z",
          "content": "Ans is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's AWS Lambda function is experiencing performance issues. The Lambda function performs many CPU-intensive operations. The Lambda function is not running fast enough and is creating bottlenecks in the system.<br><br>What should a SysOps administrator do to resolve this issue?</p>",
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
              "choice": "<p>A. In the CPU launch options for the Lambda function, activate hyperthreading.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn off the AWS managed encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the amount of memory for the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Load the required code into a custom layer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 215 discussion",
      "discusstion": [
        {
          "id": 764709,
          "date": "Tue 03 Jan 2023 14:59",
          "username": "zolthar_z",
          "content": "Ans is C: https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 764705,
          "date": "Tue 03 Jan 2023 14:54",
          "username": "ashu27",
          "content": "you can improve performance by increasing the memory allocation, even if the function doesn't use all of the memory.",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts a web application on an Amazon EC2 instance. The web server logs are published to Amazon CloudWatch Logs. The log events have the same structure and include the HTTP response codes that are associated with the user requests. The company needs to monitor the number of times that the web server returns an HTTP 404 response.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>A. Create a CloudWatch Logs metric filter that counts the number of times that the web server returns an HTTP 404 response.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudWatch Logs subscription filter that counts the number of times that the web server returns an HTTP 404 response.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a script that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 216 discussion",
      "discusstion": [
        {
          "id": 764712,
          "date": "Tue 03 Jan 2023 15:01",
          "username": "zolthar_z",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 764708,
          "date": "Tue 03 Jan 2023 14:57",
          "username": "ashu27",
          "content": "Metric Filter",
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
      "question_text": "<p>A company is attempting to manage its costs in the AWS Cloud. A SysOps administrator needs specific company-defined tags that are assigned to resources to appear on the billing report.<br><br>What should the SysOps administrator do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#217",
          "answers": [
            {
              "choice": "<p>A. Activate the tags as AWS generated cost allocation tags.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Activate the tags as user-defined cost allocation tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new cost category. Select the account billing dimension.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS Cost and Usage Report. Include the resource IDs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 217 discussion",
      "discusstion": [
        {
          "id": 764714,
          "date": "Tue 03 Jan 2023 15:02",
          "username": "zolthar_z",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 764710,
          "date": "Tue 03 Jan 2023 14:59",
          "username": "ashu27",
          "content": "User-defined tags are tags that you define, create, and apply to resources. After you have created and applied the user-defined tags, you can activate by using the Billing and Cost Management console for cost allocation tracking.",
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
      "question_text": "<p>A company is expanding globally and needs to back up data on Amazon Elastic Block Store (Amazon EBS) volumes to a different AWS Region. Most of the EBS volumes that store the data are encrypted, but some of the EBS volumes are unencrypted. The company needs the backup data from all the EBS volumes to be encrypted.<br><br>Which solution will meet these requirements with the LEAST management overhead?</p>",
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
              "choice": "<p>A. Configure a lifecycle policy in Amazon Data Lifecycle Manager (Amazon DLM) to create the EBS volume snapshots with cross-Region backups enabled. Encrypt the snapshot copies by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a point-in-time snapshot of the EBS volumes. When the snapshot status is COMPLETED, copy the snapshots to another Region and set the Encrypted parameter to False.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a point-in-time snapshot of the EBS volumes. Copy the snapshots to an Amazon S3 bucket that uses server-side encryption. Turn on S3 Cross-Region Replication on the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Schedule an AWS Lambda function with the Python runtime. Configure the Lambda function to create the EBS volume snapshots, encrypt the unencrypted snapshots, and copy the snapshots to another Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 218 discussion",
      "discusstion": [
        {
          "id": 764715,
          "date": "Tue 03 Jan 2023 15:04",
          "username": "zolthar_z",
          "content": "Ans is A",
          "upvote_count": "1",
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
      "question_text": "<p>A SysOps administrator creates an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that uses AWS Fargate. The cluster is deployed successfully. The SysOps administrator needs to manage the cluster by using the kubectl command line tool.<br><br>Which of the following must be configured on the SysOps administrator's machine so that kubectl can communicate with the cluster API server?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>A. The kubeconfig file<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. The kube-proxy Amazon EKS add-on<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The Fargate profile<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The eks-connector.yaml file<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 219 discussion",
      "discusstion": [
        {
          "id": 765142,
          "date": "Wed 04 Jan 2023 02:05",
          "username": "yeacuz",
          "content": "Answer is A as detailed in this link - https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-endpoint-failed/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 764717,
          "date": "Tue 03 Jan 2023 15:07",
          "username": "zolthar_z",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to collect data from an application to use for analytics. For the first 90 days, the data will be infrequently accessed but must remain highly available. During this time, the company's analytics team requires access to the data in milliseconds. However, after 90 days, the company must retain the data for the long term at a lower cost. The retrieval time after 90 days must be less than 5 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
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
              "choice": "<p>A. Store the data in S3 Standard-Infrequent Access (S3 Standard-IA) for the first 90 days. Set up an S3 Lifecycle rule to move the data to S3 Glacier Flexible Retrieval after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the data in S3 One Zone-Infrequent Access (S3 One Zone-IA) for the first 90 days. Set up an S3 Lifecycle rule to move the data to S3 Glacier Deep Archive after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the data in S3 Standard for the first 90 days. Set up an S3 Lifecycle rule to move the data to S3 Glacier Flexible Retrieval after 90 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the data in S3 Standard for the first 90 days. Set up an S3 Lifecycle rule to move the data to S3 Glacier Deep Archive after 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 220 discussion",
      "discusstion": [
        {
          "id": 764720,
          "date": "Tue 03 Jan 2023 15:09",
          "username": "zolthar_z",
          "content": "Ans is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application currently uses an IAM role that allows all access to all AWS services. A SysOps administrator must ensure that the company's IAM policies allow only the permissions that the application requires.<br><br>How can the SysOps administrator create a policy to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>A. Turn on AWS CloudTrail. Generate a policy by using AWS Security Hub.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on Amazon EventBridge (Amazon CloudWatch Events). Generate a policy by using AWS Identity and Access Management Access Analyzer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS CLI to run the get-generated-policy command in AWS Identity and Access Management Access Analyzer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS CloudTrail. Generate a policy by using AWS Identity and Access Management Access Analyzer.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 221 discussion",
      "discusstion": [
        {
          "id": 764723,
          "date": "Tue 03 Jan 2023 15:12",
          "username": "zolthar_z",
          "content": "Ans is D, https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html#what-is-access-analyzer-policy-generation",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a third-party unit testing solution that is delivered as an Amazon EC2 Amazon Machine Image (AMI). All system configuration data is stored in Amazon DynamoDB.  The testing results are stored in Amazon S3.<br><br>A minimum of three EC2 instances are required to operate the product. The company's testing team wants to use an additional three EC2 instances when the Spot Instance prices are at a certain threshold. A SysOps administrator must implement a highly available solution that provides this functionality.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
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
              "choice": "<p>A. Define an Amazon EC2 Auto Scaling group by using a launch configuration. Use the provided AMI in the launch configuration. Configure three On-Demand Instances and three Spot Instances. Configure a maximum Spot Instance price in the launch configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Define an Amazon EC2 Auto Scaling group by using a launch template. Use the provided AMI in the launch template. Configure three On-Demand Instances and three Spot instances. Configure a maximum Spot Instance price in the launch template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Define two Amazon EC2 Auto Scaling groups by using launch configurations. Use the provided AMI in the launch configurations. Configure three On-Demand Instances for one Auto Scaling group. Configure three Spot Instances for the other Auto Scaling group. Configure a maximum Spot Instance price in the launch configuration for the Auto Scaling group that has Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Define two Amazon EC2 Auto Scaling groups by using launch templates. Use the provides AMI in the launch templates. Configure three On-Demand Instances for one Auto Scaling group. Configure three Spot Instances for the other Auto Scaling group. Configure a maximum Spot Instance price in the launch template for the Auto Scaling group that has Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 222 discussion",
      "discusstion": [
        {
          "id": 764728,
          "date": "Tue 03 Jan 2023 15:17",
          "username": "zolthar_z",
          "content": "Ans is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A SysOps administrator creates an AWS CloudFormation template to define an application stack that can be deployed in multiple AWS Regions. The SysOps administrator also creates an Amazon CloudWatch dashboard by using the AWS Management Console. Each deployment of the application requires its own CloudWatch dashboard.<br><br>How can the SysOps administrator automate the creation of the CloudWatch dashboard each time the application is deployed?</p>",
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
              "choice": "<p>A. Create a script by using the AWS CLI to run the aws cloudformation put-dashboard command with the name of the dashboard. Run the command each time a new CloudFormation stack is created.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the existing CloudWatch dashboard as JSON. Update the CloudFormation template to define an AWS::CloudWatch::Dashboard resource. Include the exported JSON in the resource's DashboardBody property.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the CloudFormation template to define an AWS::CloudWatch::Dashboard resource. Use the Intrinsic Ref function to reference the ID of the existing CloudWatch dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the CloudFormation template to define an AWS::CloudWatch::Dashboard resource. Specify the name of the existing dashboard in the DashboardName property.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 223 discussion",
      "discusstion": [
        {
          "id": 764733,
          "date": "Tue 03 Jan 2023 15:20",
          "username": "zolthar_z",
          "content": "Ans is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company updates its security policy to clarify cloud hosting arrangements for regulated workloads. Workloads that are identified as sensitive must run on hardware that is not shared with other customers or with other AWS accounts within the company.<br><br>Which solution will ensure compliance with this policy?</p>",
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
              "choice": "<p>A. Deploy workloads only to Dedicated Hosts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy workloads only to Dedicated Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy workloads only to Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place all instances in a dedicated placement group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified SysOps Administrator - Associate topic 1 question 224 discussion",
      "discusstion": [
        {
          "id": 764734,
          "date": "Tue 03 Jan 2023 15:21",
          "username": "zolthar_z",
          "content": "Ans is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    }
  ]
}
