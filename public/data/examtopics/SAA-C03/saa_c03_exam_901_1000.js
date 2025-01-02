var SAA_C03_Exam_901_1000 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#901",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its workloads to AWS. The company has sensitive and critical data in on-premises relational databases that run on SQL Server instances.<br><br>The company wants to use the AWS Cloud to increase security and reduce operational overhead for the databases.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#901",
          "answers": [
            {
              "choice": "<p>Migrate the databases to Amazon EC2 instances. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the data to an Amazon S3 bucket. Use Amazon Macie to ensure data security.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the databases to an Amazon DynamoDB table. Use Amazon CloudWatch Logs to ensure data security.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 901 discussion",
      "discusstion": [
        {
          "id": 1204850,
          "date": "Wed 01 May 2024 06:18",
          "username": "trinh_le",
          "content": "Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1310436,
          "date": "Tue 12 Nov 2024 06:17",
          "username": "mk168898",
          "content": "looking to migrate SQL server isntance.<br><br>D is wrong because dynamoDB is noSQL",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1249072,
          "date": "Tue 16 Jul 2024 18:09",
          "username": "muhammadahmer36",
          "content": "B. Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1247740,
          "date": "Sun 14 Jul 2024 12:47",
          "username": "Seb888",
          "content": "B. Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.<br><br>This option provides the best balance between increased security, reduced operational overhead, and maintaining the relational database functionalities that the company needs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#902",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an application to AWS. The company wants to increase the application's current availability. The company wants to use AWS WAF in the application's architecture.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#902",
          "answers": [
            {
              "choice": "<p>Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the target. Connect a WAF to the ALB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a cluster placement group that contains multiple Amazon EC2 instances that hosts the application. Configure an Application Load Balancer and set the EC2 instances as the targets. Connect a WAF to the placement group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create two Amazon EC2 instances that host the application across two Availability Zones. Configure the EC2 instances as the targets of an Application Load Balancer (ALB). Connect a WAF to the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the target. Connect a WAF to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 902 discussion",
      "discusstion": [
        {
          "id": 1230042,
          "date": "Thu 13 Jun 2024 20:35",
          "username": "Scheldon",
          "content": "AnswerA<br><br>WAF > ALB > AutoScalingGroup(MultiAZ EC2 Instances)<br>Looks good",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204854,
          "date": "Wed 01 May 2024 06:23",
          "username": "trinh_le",
          "content": "Not D because AWS WAF cannot be directly connected to an Auto Scaling Group, it should be associated with the ALB which managing the incoming web traffic",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1310438,
          "date": "Tue 12 Nov 2024 06:20",
          "username": "mk168898",
          "content": "WAF manage incoming traffic should be at ALB, because auto scaling group is behind ALB then it defeats purpose of WAF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1249073,
          "date": "Tue 16 Jul 2024 18:12",
          "username": "muhammadahmer36",
          "content": "A. Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the target. Connect a WAF to the ALB.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204911,
          "date": "Wed 01 May 2024 09:11",
          "username": "sandordini",
          "content": "A: EC2 - MultiAZ > ALB > WAF",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#903",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages a data lake in an Amazon S3 bucket that numerous applications access. The S3 bucket contains a unique prefix for each application. The company wants to restrict each application to its specific prefix and to have granular control of the objects under each prefix.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#903",
          "answers": [
            {
              "choice": "<p>Create dedicated S3 access points and access point policies for each application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replicate the objects in the S3 bucket to new S3 buckets for each application. Create replication rules by prefix.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replicate the objects in the S3 bucket to new S3 buckets for each application. Create dedicated S3 access points for each application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 903 discussion",
      "discusstion": [
        {
          "id": 1225886,
          "date": "Fri 07 Jun 2024 05:03",
          "username": "anirudhsharma",
          "content": "Answer A<br>By creating separate access points for each application, you can enforce access controls specific to their respective prefixes while minimizing administrative complexity. This approach provides a clean separation of permissions and reduces the risk of misconfigurations.<br><br>Options B, C, and D are not as efficient or straightforward:<br><br>Option B (S3 Batch Operations) involves setting ACL permissions for each object individually, which can be cumbersome and time-consuming.<br>Option C (replicating objects to new S3 buckets) introduces additional buckets and replication rules, increasing management overhead.<br>Option D (replicating objects and creating dedicated S3 access points) adds unnecessary complexity by combining replication and access point creation.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1318234,
          "date": "Tue 26 Nov 2024 19:02",
          "username": "AMEJack",
          "content": "\\\"unique prefix for each application\\\" hence access points. Also, ACL is not recommended by AWS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1249081,
          "date": "Tue 16 Jul 2024 18:20",
          "username": "muhammadahmer36",
          "content": "A. Create dedicated S3 access points and access point policies for each application.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1238952,
          "date": "Sat 29 Jun 2024 00:42",
          "username": "emakid",
          "content": "Explanation:<br><br>S3 Access Points: These provide a way to manage access to shared data sets in Amazon S3. Each access point has a unique hostname and a policy that is specific to the use case, allowing for granular control over access to data.<br><br>Access Point Policies: These policies can be tailored to restrict access to specific prefixes within an S3 bucket, ensuring that each application only has access to its designated prefix.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1217721,
          "date": "Fri 24 May 2024 20:34",
          "username": "Scheldon",
          "content": "Answer B<br><br>Taking into consideration that we have \\\"numerous applications\\\" (10,100,1000?) and we need meet requirements with the LEAST operational overhead I would go into authomatization of operations hence Batch Operations seems to be good choice.<br><br>https://aws.amazon.com/blogs/storage/updating-amazon-s3-object-acls-at-scale-with-s3-batch-operations/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>However, answer B need to set ACL for each OBJECT inside each S3... and the Batch operation has to be executed where there another new object added to the S3.I am not sure the answer too : )</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1218897,
          "date": "Sun 26 May 2024 11:52",
          "username": "f07ed8f",
          "content": "However, answer B need to set ACL for each OBJECT inside each S3... and the Batch operation has to be executed where there another new object added to the S3.I am not sure the answer too : )",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1216902,
          "date": "Thu 23 May 2024 20:07",
          "username": "Tomrr",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-policies.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204855,
          "date": "Wed 01 May 2024 06:28",
          "username": "trinh_le",
          "content": "Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I have 2 questions: Is a bacth process there to set ACL permissions. Secondly, they are asking with least operational overhead. Isnt A CORRECT?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1212131,
          "date": "Wed 15 May 2024 22:52",
          "username": "aditianand",
          "content": "I have 2 questions: Is a bacth process there to set ACL permissions. Secondly, they are asking with least operational overhead. Isnt A CORRECT?",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#904",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that customers use to upload images to an Amazon S3 bucket. Each night, the company launches an Amazon EC2 Spot Fleet that processes all the images that the company received that day. The processing for each image takes 2 minutes and requires 512 MB of memory.<br><br>A solutions architect needs to change the application to process the images when the images are uploaded.<br><br>Which change will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#904",
          "answers": [
            {
              "choice": "<p>Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to process the images.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an EC2 Reserved Instance to read the messages from the queue and to process the images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure a container instance in Amazon Elastic Container Service (Amazon ECS) to subscribe to the topic and to process the images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure an AWS Elastic Beanstalk application to subscribe to the topic and to process the images.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 904 discussion",
      "discusstion": [
        {
          "id": 1235519,
          "date": "Sat 22 Jun 2024 19:01",
          "username": "aesopx39078",
          "content": "Congratulations! Once again, You made it!",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 1217744,
          "date": "Fri 24 May 2024 21:03",
          "username": "Scheldon",
          "content": "Answer A<br><br>I would go with Lambda and SQS.<br>when using SQS we will be sure that all images will be processed and hence to process we need 2 min and 512 MB of memory (Lambda is allowing upto 15 min and upto10K MB) Lambda should be perfect scalable solution which will allow for almost in real time image processing.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and it is cost effective ;)</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1217746,
          "date": "Fri 24 May 2024 21:03",
          "username": "Scheldon",
          "content": "and it is cost effective ;)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1266720,
          "date": "Fri 16 Aug 2024 00:09",
          "username": "kevindu",
          "content": "Is there anyone who has recently passed the exam who can tell me approximately how many of the original questions are in the actual exam?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1249083,
          "date": "Tue 16 Jul 2024 18:25",
          "username": "muhammadahmer36",
          "content": "A. Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to process the images.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237143,
          "date": "Wed 26 Jun 2024 02:46",
          "username": "DanielWuTRT",
          "content": "We made it to the last one! Good luck!",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1233435,
          "date": "Thu 20 Jun 2024 05:15",
          "username": "NSA_Poker",
          "content": "(B) is eliminated. Reserved instances are more expensive than Spot Fleet.<br>(C) is eliminated. Container instance more expensive than Lambda. SQS needed NOT SNS.<br>(D) is eliminated. Elastic Beanstalk is more expensive than Spot Fleet. SQS needed NOT SNS.<br>(A) is correct. It's the most cost effective service & the scope of its capabilities are within the requirements.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204856,
          "date": "Wed 01 May 2024 06:33",
          "username": "trinh_le",
          "content": "less than 5 minutes -> use lambda",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#905",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to improve the availability and performance of its hybrid application. The application consists of a stateful TCP-based workload hosted on Amazon EC2 instances in different AWS Regions and a stateless UDP-based workload hosted on premises.<br><br>Which combination of actions should a solutions architect take to improve availability and performance? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#905",
          "answers": [
            {
              "choice": "<p>Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the load balancers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure two Application Load Balancers in each Region. The first will route to the EC2 endpoints, and the second will route to the on-premises endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network Load Balancer in each Region that routes to the on-premises endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure an Application Load Balancer in each Region that routes to the on-premises endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 905 discussion",
      "discusstion": [
        {
          "id": 1260563,
          "date": "Sun 04 Aug 2024 10:20",
          "username": "Ricksaurus",
          "content": "TCP >> NLB<br>non-http>> accelerator.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1264259,
          "date": "Sun 11 Aug 2024 20:19",
          "username": "muhammadahmer36",
          "content": "TCP >> NLB<br>non-http >> accelerator",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1260014,
          "date": "Fri 02 Aug 2024 21:57",
          "username": "swati1508",
          "content": "AD<br>-TCP use NLB<br>FOR non-http use accelerator.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#906",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a self-managed Microsoft SQL Server on Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS). Daily snapshots are taken of the EBS volumes.<br><br>Recently, all the company's EBS snapshots were accidentally deleted while running a snapshot cleaning script that deletes all expired EBS snapshots. A solutions architect needs to update the architecture to prevent data loss without retaining EBS snapshots indefinitely.<br><br>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#906",
          "answers": [
            {
              "choice": "<p>Change the IAM policy of the user to deny EBS snapshot deletion.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the EBS snapshots to another AWS Region after completing the snapshots daily.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a 7-day EBS snapshot retention rule in Recycle Bin and apply the rule for all snapshots.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Copy EBS snapshots to Amazon S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 906 discussion",
      "discusstion": [
        {
          "id": 1270466,
          "date": "Thu 22 Aug 2024 04:57",
          "username": "dhewa",
          "content": "Provides a safety net against accidental deletions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1266918,
          "date": "Fri 16 Aug 2024 10:29",
          "username": "progounick",
          "content": "C. Snapshot can be recovered if accidently deleted",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1263563,
          "date": "Sat 10 Aug 2024 17:18",
          "username": "pujithacg8",
          "content": "C, AWS Recycle Bin allows you to recover resources like EBS snapshots that were accidentally deleted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1260887,
          "date": "Mon 05 Aug 2024 03:53",
          "username": "AnasAWS",
          "content": "7 Days retention period will protect snapshots from being accedently perminantly deleted.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260564,
          "date": "Sun 04 Aug 2024 10:23",
          "username": "Ricksaurus",
          "content": "Snapshot can be recovered if accidently deleted",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260517,
          "date": "Sun 04 Aug 2024 05:49",
          "username": "example_",
          "content": "https://aws.amazon.com/blogs/aws/new-recycle-bin-for-ebs-snapshots/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#907",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use an AWS CloudFormation stack for its application in a test environment. The company stores the CloudFormation template in an Amazon S3 bucket that blocks public access. The company wants to grant CloudFormation access to the template in the S3 bucket based on specific user requests to create the test environment. The solution must follow security best practices.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#907",
          "answers": [
            {
              "choice": "<p>Create a gateway VPC endpoint for Amazon S3. Configure the CloudFormation stack to use the S3 object URL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon API Gateway REST API that has the S3 bucket as the target. Configure the CloudFormation stack to use the API Gateway URL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a presigned URL for the template object. Configure the CloudFormation stack to use the presigned URL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Allow public access to the template object in the S3 bucket. Block the public access after the test environment is created.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 907 discussion",
      "discusstion": [
        {
          "id": 1326105,
          "date": "Fri 13 Dec 2024 12:48",
          "username": "robotgeek",
          "content": "The question states \\\"specific user requests\\\" meaning a shared URL does not meet the requirement. BUT with gateway VPC endpoint you can specify custom policies as in the following link<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263566,
          "date": "Sat 10 Aug 2024 17:23",
          "username": "pujithacg8",
          "content": "C, A presigned URL grants temporary access to an S3 object without making it publicly accessible.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1260892,
          "date": "Mon 05 Aug 2024 04:03",
          "username": "AnasAWS",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thank you for posting this.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1281496,
          "date": "Tue 10 Sep 2024 13:26",
          "username": "blehbleh",
          "content": "Thank you for posting this.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260821,
          "date": "Sun 04 Aug 2024 23:28",
          "username": "flaviobrf",
          "content": "For me C is the right answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#908",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications that run in an organization in AWS Organizations. The company outsources operational support of the applications. The company needs to provide access for the external support engineers without compromising security.<br><br>The external support engineers need access to the AWS Management Console. The external support engineers also need operating system access to the company's fleet ofAmazon EC2 instances that run Amazon Linux in private subnets.<br><br>Which solution will meet these requirements MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#908",
          "answers": [
            {
              "choice": "<p>Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance profile with the necessary policy to connect to Systems Manager. Use AWS IAM Identity Center to provide the external support engineers console access. Use Systems Manager Session Manager to assign the required permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance profile with the necessary policy to connect to Systems Manager. Use Systems Manager Session Manager to provide local IAM user credentials in each AWS account to the external support engineers for console access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Confirm that all instances have a security group that allows SSH access only from the external support engineers' source IP address ranges. Provide local IAM user credentials in each AWS account to the external support engineers for console access. Provide each external support engineer an SSH key pair to log in to the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a bastion host in a public subnet. Set up the bastion host security group to allow access from only the external engineers' IP address ranges. Ensure that all instances have a security group that allows SSH access from the bastion host. Provide each external support engineer an SSH key pair to log in to the application instances. Provide local account IAM user credentials to the engineers for console access.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 908 discussion",
      "discusstion": [
        {
          "id": 1331145,
          "date": "Tue 24 Dec 2024 15:15",
          "username": "EllenLiu",
          "content": "B: I believe the Session Manager may not have the capability to provide IAM user credentials. If it were to do so, it could potentially lead to security concerns.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1318959,
          "date": "Thu 28 Nov 2024 00:38",
          "username": "Cpso",
          "content": "A or B. Exam not tell if they have IDP and no. of outsource.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1315204,
          "date": "Wed 20 Nov 2024 12:02",
          "username": "Changwha",
          "content": "A: This solution minimizes the attack surface by eliminating the need for SSH access, avoids bastion hosts, and provides secure, auditable, and federated access to AWS resources.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1262201,
          "date": "Wed 07 Aug 2024 21:00",
          "username": "swati1508",
          "content": "A use MSM",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1261082,
          "date": "Mon 05 Aug 2024 15:54",
          "username": "officedepotadmin",
          "content": "Systems Manager Session Manager allows secure, auditable, and controlled access to your EC2 instances without needing to open SSH ports or manage SSH keys, reducing the attack surface.<br>Local IAM user credentials are less secure and harder to manage at scale compared to using IAM Identity Center.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#909",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon RDS for PostgreSQL to run its applications in the us-east-1 Region. The company also uses machine learning (ML) models to forecast annual revenue based on near real-time reports. The reports are generated by using the same RDS for PostgreSQL database. The database performance slows during business hours. The company needs to improve database performance.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#909",
          "answers": [
            {
              "choice": "<p>Create a cross-Region read replica. Configure the reports to be generated from the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Activate Multi-AZ DB instance deployment for RDS for PostgreSQL. Configure the reports to be generated from the standby database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Data Migration Service (AWS DMS) to logically replicate data to a new database. Configure the reports to be generated from the new database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica in us-east-1. Configure the reports to be generated from the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 909 discussion",
      "discusstion": [
        {
          "id": 1267654,
          "date": "Sat 17 Aug 2024 13:14",
          "username": "[Removed]",
          "content": "D. Create a read replica in us-east-1. Configure the reports to be generated from the read replica.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264744,
          "date": "Mon 12 Aug 2024 19:43",
          "username": "muhammadahmer36",
          "content": "Read replicas are typically less expensive than setting up a cross-Region replica or activating Multi-AZ deployments. You only pay for the additional read replica, without the overhead costs associated with cross-Region data transfer or maintaining a synchronous standby in Multi-AZ setups.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1261083,
          "date": "Mon 05 Aug 2024 15:57",
          "username": "officedepotadmin",
          "content": "Read replicas are typically less expensive than setting up a cross-Region replica or activating Multi-AZ deployments. You only pay for the additional read replica, without the overhead costs associated with cross-Region data transfer or maintaining a synchronous standby in Multi-AZ setups.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#910",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its multi-tier, public web application in the AWS Cloud. The web application runs on Amazon EC2 instances, and its database runs on Amazon RDS. The company is anticipating a large increase in sales during an upcoming holiday weekend. A solutions architect needs to build a solution to analyze the performance of the web application with a granularity of no more than 2 minutes.<br><br>What should the solutions architect do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#910",
          "answers": [
            {
              "choice": "<p>Send Amazon CloudWatch logs to Amazon Redshift. Use Amazon QuickS ght to perform further analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform further analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to fetch EC2 logs from Amazon CloudWatch Logs. Use Amazon CloudWatch metrics to perform further analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Send EC2 logs to Amazon S3. Use Amazon Redshift to fetch logs from the S3 bucket to process raw data for further analysis with Amazon QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 910 discussion",
      "discusstion": [
        {
          "id": 1267658,
          "date": "Sat 17 Aug 2024 13:18",
          "username": "[Removed]",
          "content": "B. Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform further analysis.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264747,
          "date": "Mon 12 Aug 2024 19:51",
          "username": "muhammadahmer36",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1261084,
          "date": "Mon 05 Aug 2024 16:01",
          "username": "officedepotadmin",
          "content": "Enabling detailed monitoring on EC2 instances provides metrics at a 1-minute granularity, which is well within the required 2-minute granularity for performance analysis.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1260813,
          "date": "Sun 04 Aug 2024 23:17",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#911",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application that stores and shares photos. Users upload the photos to an Amazon S3 bucket. Every day, users upload approximately 150 photos. The company wants to design a solution that creates a thumbnail of each new photo and stores the thumbnail in a second S3 bucket.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#911",
          "answers": [
            {
              "choice": "<p>Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a long-running Amazon EMR cluster. Configure the script to generate thumbnails for the photos that do not have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a memory-optimized Amazon EC2 instance that is always on. Configure the script to generate thumbnails for the photos that do not have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 event notification to invoke an AWS Lambda function each time a user uploads a new photo to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to the second S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure S3 Storage Lens to invoke an AWS Lambda function each time a user uploads a new photo to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to a second S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 911 discussion",
      "discusstion": [
        {
          "id": 1267660,
          "date": "Sat 17 Aug 2024 13:21",
          "username": "[Removed]",
          "content": "C. Configure an S3 event notification to invoke an AWS Lambda function each time a user uploads a new photo to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to the second S3 bucket.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1262202,
          "date": "Wed 07 Aug 2024 21:06",
          "username": "swati1508",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260814,
          "date": "Sun 04 Aug 2024 23:18",
          "username": "komorebi",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#912",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has stored millions of objects across multiple prefixes in an Amazon S3 bucket by using the Amazon S3 Glacier Deep Archive storage class. The company needs to delete all data older than 3 years except for a subset of data that must be retained. The company has identified the data that must be retained and wants to implement a serverless solution.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#912",
          "answers": [
            {
              "choice": "<p>Use S3 Inventory to list all objects. Use the AWS CLI to create a script that runs on an Amazon EC2 instance that deletes objects from the inventory list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Batch to delete objects older than 3 years except for the data that must be retained.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an AWS Glue crawler to query objects older than 3 years. Save the manifest file of old objects. Create a script to delete objects in the manifest.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable S3 Inventory. Create an AWS Lambda function to filter and delete objects. Invoke the Lambda function with S3 Batch Operations to delete objects by using the inventory reports.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 912 discussion",
      "discusstion": [
        {
          "id": 1290871,
          "date": "Sun 29 Sep 2024 02:05",
          "username": "agbor_tambe",
          "content": "yes D is the right answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1267661,
          "date": "Sat 17 Aug 2024 13:23",
          "username": "[Removed]",
          "content": "D sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264750,
          "date": "Mon 12 Aug 2024 19:56",
          "username": "muhammadahmer36",
          "content": "Enable S3 Inventory. Create an AWS Lambda function to filter and delete objects. Invoke the Lambda function with S3 Batch Operations to delete objects by using the inventory reports.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262203,
          "date": "Wed 07 Aug 2024 21:07",
          "username": "swati1508",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#914",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a non-production application that is composed of multiple microservices for each of the company's business units. A single development team maintains all the microservices.<br><br>The current architecture uses a static web frontend and a Java-based backend that contains the application logic. The architecture also uses a MySQL database that the company hosts on an Amazon EC2 instance.<br><br>The company needs to ensure that the application is secure and available globally.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#914",
          "answers": [
            {
              "choice": "<p>Use Amazon CloudFront and AWS Amplify to host the static web frontend. Refactor the microservices to use AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL database to an Amazon EC2 Reserved Instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL database to Amazon RDS for MySQL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that are in a target group behind a Network Load Balancer. Migrate the MySQL database to Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that are in a target group behind an Application Load Balancer. Migrate the MySQL database to an Amazon EC2 Reserved Instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 914 discussion",
      "discusstion": [
        {
          "id": 1269081,
          "date": "Tue 20 Aug 2024 07:20",
          "username": "[Removed]",
          "content": "B sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264753,
          "date": "Mon 12 Aug 2024 20:03",
          "username": "muhammadahmer36",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262227,
          "date": "Wed 07 Aug 2024 23:00",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262205,
          "date": "Wed 07 Aug 2024 21:11",
          "username": "swati1508",
          "content": "Answer is D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is correct sorry</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1262206,
          "date": "Wed 07 Aug 2024 21:12",
          "username": "swati1508",
          "content": "B is correct sorry",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#915",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video game company is deploying a new gaming application to its global users. The company requires a solution that will provide near real-time reviews and rankings of the players.<br><br>A solutions architect must design a solution to provide fast access to the data. The solution must also ensure the data persists on disks in the event that the company restarts the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#915",
          "answers": [
            {
              "choice": "<p>Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Store the player data in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Amazon EC2 instances in multiple AWS Regions. Store the player data on the EC2 instances. Configure Amazon Route 53 with geolocation records to direct users to the closest EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon ElastiCache for Redis duster. Store the player data in the ElastiCache cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon ElastiCache for Memcached duster. Store the player data in the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 915 discussion",
      "discusstion": [
        {
          "id": 1296547,
          "date": "Sat 12 Oct 2024 15:52",
          "username": "Bwhizzy",
          "content": "REDIS<br>- Multi AZ with Auto-Failover<br>- Read Replicas to scale reads and<br>have high availability<br>- Data Durability using AOF<br>persistence<br>- Backup and restore features<br>- Supports Sets and Sorted Sets",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1267673,
          "date": "Sat 17 Aug 2024 13:36",
          "username": "[Removed]",
          "content": "C sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1262092,
          "date": "Wed 07 Aug 2024 14:18",
          "username": "officedepotadmin",
          "content": "Amazon ElastiCache for Redis provides in-memory caching which ensures low latency and high throughput, perfect for near real-time access to player reviews and rankings.<br><br>Redis supports data persistence by snapshotting data to disk (RDB snapshots) and appending changes to a log (AOF), ensuring that the data is not lost even if the application restarts.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#916",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing an application on AWS that processes sensitive data. The application stores and processes financial data for multiple customers.<br><br>To meet compliance requirements, the data for each customer must be encrypted separately at rest by using a secure, centralized key management solution. The company wants to use AWS Key Management Service (AWS KMS) to implement encryption.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#916",
          "answers": [
            {
              "choice": "<p>Generate a unique encryption key for each customer. Store the keys in an Amazon S3 bucket. Enable server-side encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a hardware security appliance in the AWS environment that securely stores customer-provided encryption keys. Integrate the security appliance with AWS KMS to encrypt the sensitive data in the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a single AWS KMS key to encrypt all sensitive data across the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate AWS KMS keys for each customer's data that have granular access control and logging enabled.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 916 discussion",
      "discusstion": [
        {
          "id": 1262094,
          "date": "Wed 07 Aug 2024 14:22",
          "username": "officedepotadmin",
          "content": "While enabling server-side encryption in S3 can manage encryption, it does not offer the same level of control and auditing as AWS KMS. Managing individual keys manually in S3 would also increase operational overhead.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1279733,
          "date": "Fri 06 Sep 2024 19:59",
          "username": "Jeyaluxshan",
          "content": "D is with less management overhead",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1270431,
          "date": "Thu 22 Aug 2024 02:22",
          "username": "dhewa",
          "content": "D is more secure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1267676,
          "date": "Sat 17 Aug 2024 13:40",
          "username": "[Removed]",
          "content": "D sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1267311,
          "date": "Fri 16 Aug 2024 21:02",
          "username": "progounick",
          "content": "it is obvious that D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264755,
          "date": "Mon 12 Aug 2024 20:07",
          "username": "muhammadahmer36",
          "content": "hile enabling server-side encryption in S3 can manage encryption, it does not offer the same level of control and auditing as AWS KMS. Managing individual keys manually in S3 would also increase operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263602,
          "date": "Sat 10 Aug 2024 20:46",
          "username": "nebajp",
          "content": "D is the correct Answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#917",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to design a resilient web application to process customer orders. The web application must automatically handle increases in web traffic and application usage without affecting the customer experience or losing customer orders.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#917",
          "answers": [
            {
              "choice": "<p>Use a NAT gateway to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive, process, and store processed customer orders. Use an AWS Lambda function to capture and store unprocessed orders.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Network Load Balancer (NLB) to manage web traffic. Use an Application Load Balancer to receive customer orders from the NLUse Amazon Redshift with a Multi-AZ deployment to store unprocessed and processed customer orders.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Gateway Load Balancer (GWLB) to manage web traffic. Use Amazon Elastic Container Service (Amazon ECS) to receive and process customer orders. Use the GWLB to capture and store unprocessed orders. Use Amazon DynamoDB to store processed customer orders.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Application Load Balancer to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive and process customer orders. Use Amazon Simple Queue Service (Amazon SQS) to store unprocessed orders. Use Amazon RDS with a Multi-AZ deployment to store processed customer orders.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 917 discussion",
      "discusstion": [
        {
          "id": 1318964,
          "date": "Thu 28 Nov 2024 01:13",
          "username": "Cpso",
          "content": "D is right. But explaining is unclear. should have 2 group of ec2. one for accept order to queue. another to process and store to DB.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1267677,
          "date": "Sat 17 Aug 2024 13:45",
          "username": "[Removed]",
          "content": "D sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263577,
          "date": "Sat 10 Aug 2024 18:14",
          "username": "pujithacg8",
          "content": "D is perfect",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1262228,
          "date": "Wed 07 Aug 2024 23:01",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262208,
          "date": "Wed 07 Aug 2024 21:20",
          "username": "swati1508",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#918",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS DataSync to migrate millions of files from an on-premises system to AWS. The files are 10 KB in size on average.<br><br>The company wants to use Amazon S3 for file storage. For the first year after the migration, the files will be accessed once or twice and must be immediately available. After 1 year, the files must be archived for at least 7 years.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#918",
          "answers": [
            {
              "choice": "<p>Use an archive tool to group the files into large objects. Use DataSync to migrate the objects. Store the objects in S3 Glacier Instant Retrieval for the first year. Use a lifecycle configuration to transition the files to S3 Glacier Deep Archive after 1 year with a retention period of 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an archive tool to group the files into large objects. Use DataSync to copy the objects to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Glacier Instant Retrieval after 1 year with a retention period of 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the destination storage class for the files as S3 Glacier Instant Retrieval. Use a lifecycle policy to transition the files to S3 Glacier Flexible Retrieval after 1 year with a retention period of 7 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a DataSync task to transfer the files to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Deep Archive after 1 year with a retention period of 7 years.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 918 discussion",
      "discusstion": [
        {
          "id": 1270435,
          "date": "Thu 22 Aug 2024 02:40",
          "username": "dhewa",
          "content": "D simplifies the process by directly using S3 Standard-IA and then transitioning to S3 Glacier Deep Archive, which aligns well with access patterns and cost requirements. Option A sounds right but using an archive tool to group files into large objects adds complexity and operational overhead. This step isn't necessary if you can directly manage the files with S3 lifecycle policies.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331164,
          "date": "Tue 24 Dec 2024 16:15",
          "username": "EllenLiu",
          "content": "S3 Glacier Instant Retrieval is more expensive than S3 Standard-IA for the first year when immediate availability is required.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry, choose D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1331165,
          "date": "Tue 24 Dec 2024 16:16",
          "username": "EllenLiu",
          "content": "sorry, choose D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1326603,
          "date": "Sat 14 Dec 2024 21:31",
          "username": "dragossky",
          "content": "For sure A, has amazing retrieval - Store the objects in S3 Glacier Instant Retrieval",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1326119,
          "date": "Fri 13 Dec 2024 13:46",
          "username": "jfedotov",
          "content": "D is correct.<br>A is not correct, because Amazon S3 Glacier Instant Retrieval min object size is 128KB, in question 10KB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319409,
          "date": "Thu 28 Nov 2024 19:30",
          "username": "AMEJack",
          "content": "There is no need to use archive tool to migrate small files, DataSync is enough.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1289781,
          "date": "Fri 27 Sep 2024 03:11",
          "username": "Ez1tap",
          "content": "correct answer is A you need 2 separate lifecycle policy",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1283071,
          "date": "Fri 13 Sep 2024 10:20",
          "username": "Abhiiinav",
          "content": "answer is D. Storing the objects in S3 Glacier Instant Retrieval for the first year is more expensive than S3 Standard-IA for data that is accessed infrequently.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong, it says 1-2 times in the first year and Amazon states that s3 glacier isn't at retrieval can save up to 68% compared to s3 infrequent access.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1295017,
          "date": "Wed 09 Oct 2024 09:24",
          "username": "blehbleh",
          "content": "Wrong, it says 1-2 times in the first year and Amazon states that s3 glacier isn't at retrieval can save up to 68% compared to s3 infrequent access.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1281524,
          "date": "Tue 10 Sep 2024 14:22",
          "username": "blehbleh",
          "content": "Its A, took some research but A is correct Per Amazon S# glacier page: \\\"Amazon S3 Glacier Instant Retrieval is an archive storage class that delivers the lowest-cost storage for long-lived data that is rarely accessed and requires retrieval in milliseconds. With S3 Glacier Instant Retrieval, you can save up to 68% on storage costs compared to using the S3 Standard-Infrequent Access (S3 Standard-IA) storage class, when your data is accessed once per quarter.\\\" After the one year move it to Deep archive.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1274453,
          "date": "Thu 29 Aug 2024 12:37",
          "username": "Abdullah2004",
          "content": "D is most cost effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1274414,
          "date": "Thu 29 Aug 2024 10:24",
          "username": "progounick",
          "content": "ChatGPT agrees with me and selected A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My intance of chatgpt says it is D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322259,
          "date": "Thu 05 Dec 2024 08:19",
          "username": "youkarthik",
          "content": "My intance of chatgpt says it is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1270434,
          "date": "Thu 22 Aug 2024 02:37",
          "username": "dhewa",
          "content": "D simplifies the process by directly using S3 Standard-IA and then transitioning to S3 Glacier Deep Archive, which aligns well with access patterns and cost requirements. Option A sounds right but using an archive tool to group files into large objects adds complexity and operational overhead. This step isn't necessary if you can directly manage the files with S3 lifecycle policies.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1269083,
          "date": "Tue 20 Aug 2024 07:25",
          "username": "[Removed]",
          "content": "A looks good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1264759,
          "date": "Mon 12 Aug 2024 20:23",
          "username": "muhammadahmer36",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263680,
          "date": "Sun 11 Aug 2024 02:49",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1263603,
          "date": "Sat 10 Aug 2024 20:50",
          "username": "nebajp",
          "content": "Correct Answer is A<br>Glacier Deep Archive - For long term achieving<br>Glacier Instant Retrieval- Availability for once or twice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#919",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently performed a lift and shift migration of its on-premises Oracle database workload to run on an Amazon EC2 memory optimized Linux instance. The EC2 Linux instance uses a 1 TB Provisioned IOPS SSD (io1) EBS volume with 64,000 IOPS.<br><br>The database storage performance after the migration is slower than the performance of the on-premises database.<br><br>Which solution will improve storage performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#919",
          "answers": [
            {
              "choice": "<p>Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical Volume Management (LVM) stripe.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the EC2 Linux instance to a storage optimized instance type. Do not change the Provisioned IOPS SSD (io1) EBS volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 919 discussion",
      "discusstion": [
        {
          "id": 1330812,
          "date": "Mon 23 Dec 2024 13:57",
          "username": "JA2018",
          "content": "why I would choose Option B:<br><br>- Issue:<br>The problem is that the current IOPS (Input/Output Operations Per Second) provisioned on the EBS volume are not sufficient to meet the database workload demands, leading to slower performance compared to the on-premises setup.<br><br>- Solution:<br>Since the bottleneck is clearly identified as inadequate IOPS, the most effective solution is to simply increase the provisioned IOPS on the existing EBS volume, allowing for faster data read/write operations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1300288,
          "date": "Sun 20 Oct 2024 07:15",
          "username": "jingen11",
          "content": "A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1279061,
          "date": "Thu 05 Sep 2024 18:36",
          "username": "elmyth",
          "content": "Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263578,
          "date": "Sat 10 Aug 2024 18:28",
          "username": "pujithacg8",
          "content": "A is correct, The maximum provisioned IOPS for io1 is 64000 and hence you can achieve higher aggregate performance by adding more io1 volumes",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#920",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating from a monolithic architecture for a web application that is hosted on Amazon EC2 to a serverless microservices architecture. The company wants to use AWS services that support an event-driven, loosely coupled architecture. The company wants to use the publish/subscribe (pub/sub) pattern.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#920",
          "answers": [
            {
              "choice": "<p>Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure one or more subscribers to read events from the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway WebSocket API to write to a data stream in Amazon Kinesis Data Streams with enhanced fan-out. Configure one or more subscribers to receive events from the data stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon API Gateway HTTP API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 920 discussion",
      "discusstion": [
        {
          "id": 1334030,
          "date": "Mon 30 Dec 2024 11:14",
          "username": "Denise123",
          "content": "While the Amazon API Gateway HTTP API (Option D) can be more cost-effective for simple APIs with low data transfer and minimal feature requirements, the Amazon API Gateway REST API (Option B) may still be more cost-effective in many real-world scenarios, especially for more complex web applications with additional requirements.<br><br>The choice between Options B and D should be based on a careful evaluation of your specific requirements, existing infrastructure, and potential cost savings or trade-offs involved.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1326777,
          "date": "Sun 15 Dec 2024 11:07",
          "username": "78b9037",
          "content": "HTTP API is cheaper. The difference in pricing is steep. REST APIs will run you USD $3.50 per one million requests plus charges for data transferred out. By contrast, HTTP APIs cost a mere $1.00 per request for the first million requests and then $0.90 per million requests after that.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1300290,
          "date": "Sun 20 Oct 2024 07:21",
          "username": "jingen11",
          "content": "Question ask for cheapest.<br>Http api offers everything the requirements asked for. i.e Lambda function for serverless, event driven. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1283455,
          "date": "Sat 14 Sep 2024 04:51",
          "username": "fis_examtopic",
          "content": "HTTP APIs with Lambda. I'm go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1273413,
          "date": "Tue 27 Aug 2024 13:55",
          "username": "progounick",
          "content": "rest is cheaper than http<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Quite the opposite: \\\"REST APIs support more features than HTTP APIs, while HTTP APIs are designed with minimal features so that they can be offered at a lower price.\\\"</li><li>The Amazon API Gateway HTTP API is a more recent addition to API Gateway and is designed to be a more cost-effective option for simple APIs. However, it has fewer features and capabilities compared to the REST API.<br>Here's a comparison of the costs between the two API Gateway options:<br>-REST API: $3.50 per million API calls received, plus data transfer costs.<br>-HTTP API: $0.90 per million API calls received, plus data transfer costs.<br>As you can see, the HTTP API is cheaper in terms of the API call pricing. However, the REST API may still be more cost-effective in certain scenarios. I am not sure what is needed in this question though.</li><li>based on this answer should be D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1278831,
          "date": "Thu 05 Sep 2024 12:06",
          "username": "Noveo",
          "content": "Quite the opposite: \\\"REST APIs support more features than HTTP APIs, while HTTP APIs are designed with minimal features so that they can be offered at a lower price.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The Amazon API Gateway HTTP API is a more recent addition to API Gateway and is designed to be a more cost-effective option for simple APIs. However, it has fewer features and capabilities compared to the REST API.<br>Here's a comparison of the costs between the two API Gateway options:<br>-REST API: $3.50 per million API calls received, plus data transfer costs.<br>-HTTP API: $0.90 per million API calls received, plus data transfer costs.<br>As you can see, the HTTP API is cheaper in terms of the API call pricing. However, the REST API may still be more cost-effective in certain scenarios. I am not sure what is needed in this question though.</li><li>based on this answer should be D</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1334033,
          "date": "Mon 30 Dec 2024 11:17",
          "username": "Denise123",
          "content": "The Amazon API Gateway HTTP API is a more recent addition to API Gateway and is designed to be a more cost-effective option for simple APIs. However, it has fewer features and capabilities compared to the REST API.<br>Here's a comparison of the costs between the two API Gateway options:<br>-REST API: $3.50 per million API calls received, plus data transfer costs.<br>-HTTP API: $0.90 per million API calls received, plus data transfer costs.<br>As you can see, the HTTP API is cheaper in terms of the API call pricing. However, the REST API may still be more cost-effective in certain scenarios. I am not sure what is needed in this question though.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1310474,
          "date": "Tue 12 Nov 2024 08:41",
          "username": "mk168898",
          "content": "based on this answer should be D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1270442,
          "date": "Thu 22 Aug 2024 02:57",
          "username": "dhewa",
          "content": "An HTTP API instead might not be necessary for this use case.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264766,
          "date": "Mon 12 Aug 2024 20:40",
          "username": "muhammadahmer36",
          "content": "D is the right answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263579,
          "date": "Sat 10 Aug 2024 18:32",
          "username": "pujithacg8",
          "content": "B or D, Will go with B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why B, not D?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1264762,
          "date": "Mon 12 Aug 2024 20:36",
          "username": "muhammadahmer36",
          "content": "Why B, not D?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#921",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated a monolithic application to an Amazon EC2 instance and Amazon RDS. The application has tightly coupled modules. The existing design of the application gives the application the ability to run on only a single EC2 instance.<br><br>The company has noticed high CPU utilization on the EC2 instance during peak usage times. The high CPU utilization corresponds to degraded performance on Amazon RDS for read requests. The company wants to reduce the high CPU utilization and improve read request performance.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#921",
          "answers": [
            {
              "choice": "<p>Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1. Configure an RDS read replica for read requests.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1. Add an RDS read replica and redirect all read/write traffic to the replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group with a minimum size of 1 and maximum size of 2. Resize the RDS DB instance to an instance type that has more CPU capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1. Resize the RDS DB instance to an instance type that has more CPU capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 921 discussion",
      "discusstion": [
        {
          "id": 1270409,
          "date": "Thu 22 Aug 2024 00:38",
          "username": "dhewa",
          "content": "This approach addresses both the high CPU utilization on the EC2 instance and the degraded read performance on the RDS instance effectively.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1267694,
          "date": "Sat 17 Aug 2024 14:13",
          "username": "[Removed]",
          "content": "A sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263156,
          "date": "Fri 09 Aug 2024 18:56",
          "username": "Abbas_Abi_AWS",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263073,
          "date": "Fri 09 Aug 2024 16:16",
          "username": "ltetti",
          "content": "Option B incorrectly suggests redirecting all read/write traffic to the replica. RDS read replicas are designed to handle read operations only, not write operations. Writes must still be handled by the primary DB instance",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#922",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to grant a team of developers access to the company's AWS resources. The company must maintain a high level of security for the resources.<br><br>The company requires an access control solution that will prevent unauthorized access to the sensitive data.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#922",
          "answers": [
            {
              "choice": "<p>Share the IAM user credentials for each development team member with the rest of the team to simplify access management and to streamline development workflows.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define IAM roles that have fine-grained permissions based on the principle of least privilege. Assign an IAM role to each developer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM access keys to grant programmatic access to AWS resources. Allow only developers to interact with AWS resources through API calls by using the access keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Cognito user pool. Grant developers access to AWS resources by using the user pool.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 922 discussion",
      "discusstion": [
        {
          "id": 1331639,
          "date": "Wed 25 Dec 2024 17:39",
          "username": "KennethYY",
          "content": "A is wrong, common sense not security<br>B is wrong, role cannot assign to user/group<br>D is wrong,is designed for authentication and access control for web or mobile app users, not for internal developers accessing AWS resources.<br>so remain C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331325,
          "date": "Wed 25 Dec 2024 03:48",
          "username": "EllenLiu",
          "content": "AWS Cognito is designed for authentication and access control for web or mobile app users, not for internal developers accessing AWS resources.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331324,
          "date": "Wed 25 Dec 2024 03:48",
          "username": "EllenLiu",
          "content": "AWS Cognito is designed for authentication and access control for web or mobile app users, not for internal developers accessing AWS resources.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, go with B.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331326,
          "date": "Wed 25 Dec 2024 03:57",
          "username": "EllenLiu",
          "content": "Sorry, go with B.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319058,
          "date": "Thu 28 Nov 2024 07:47",
          "username": "Cpso",
          "content": "good practice should B. but map role to Identity center federated to corporate IDP.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1296570,
          "date": "Sat 12 Oct 2024 17:08",
          "username": "Bwhizzy",
          "content": "B is the right answer. IAM Role",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1267698,
          "date": "Sat 17 Aug 2024 14:16",
          "username": "[Removed]",
          "content": "B sounds right",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1265402,
          "date": "Wed 14 Aug 2024 00:10",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1265272,
          "date": "Tue 13 Aug 2024 19:41",
          "username": "muhammadahmer36",
          "content": "Create an AWS Cognito user pool. Grant developers access to AWS resources by using the user pool.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>cognito for app user auth, qns asking for access to AWS resource. your answer is wrong</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1310489,
          "date": "Tue 12 Nov 2024 09:21",
          "username": "mk168898",
          "content": "cognito for app user auth, qns asking for access to AWS resource. your answer is wrong",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#923",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a monolithic web application on an Amazon EC2 instance. Application users have recently reported poor performance at specific times. Analysis of Amazon CloudWatch metrics shows that CPU utilization is 100% during the periods of poor performance.<br><br>The company wants to resolve this performance issue and improve application availability.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#923",
          "answers": [
            {
              "choice": "<p>Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale vertically.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Machine Image (AMI) from the web server. Reference the AMI in a new launch template.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group and an Application Load Balancer to scale vertically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale horizontally.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group and an Application Load Balancer to scale horizontally.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 923 discussion",
      "discusstion": [
        {
          "id": 1331338,
          "date": "Wed 25 Dec 2024 04:44",
          "username": "EllenLiu",
          "content": "it's truly difficult to answer as per the description.<br>there are two requirement:<br>1. resolve performance issue > A: use compute optimizer to scale vertically, it can provides an immediate fix for high CPU utilization<br>2. improve availability > B + D, B is the prerequisite for D , I prefer autoscaling if must choose only one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1331272,
          "date": "Wed 25 Dec 2024 00:30",
          "username": "Anyio",
          "content": "The correct answers are A,E.<br><br>Option A: Correct. Using AWS Compute Optimizer to obtain a recommendation for an instance type to scale vertically is an effective first step. This service analyzes your specific application workload patterns and recommends an appropriate EC2 instance type that provides better performance for the given CPU load. This approach allows you to choose a more powerful instance that can handle peak loads more effectively without immediately shifting to a horizontal scaling architecture.<br><br>Option B: Incorrect by itself. Creating an AMI and a launch template is useful in setting up an Auto Scaling group or new instances but does not address the issue of CPU utilization or availability on its own. This process would be part of preparing for scaling but doesn't directly answer the requirement of resolving performance issues by itself.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1326130,
          "date": "Fri 13 Dec 2024 14:22",
          "username": "jfedotov",
          "content": "horizontal scaling is a cost-effective solution",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1320794,
          "date": "Mon 02 Dec 2024 06:34",
          "username": "JA2018",
          "content": "What about options D & E?<br><br># 1 Scaling horizontally is the most cost-effective solution for handling fluctuating traffic, especially when the bottleneck is CPU utilization reaching 100% during peak times. This allows adding more instances to handle the increased load instead of upgrading to a larger instance (vertical scaling) which might be unnecessary during non-peak periods.<br><br># 2 Auto Scaling group and Application Load Balancer: These are essential components for horizontal scaling, where the Auto Scaling group automatically adjusts the number of instances based on demand, and the Application Load Balancer distributes traffic evenly across available instances.<br><br>#3 AWS Compute Optimizer: This service can analyze your application usage and recommend the most cost-effective instance type for your specific needs, including suggesting options for horizontal scaling.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1304686,
          "date": "Tue 29 Oct 2024 21:14",
          "username": "Abdullah2004",
          "content": "Due to monolithic application we can't scale horizontal, the scale will be vertical<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you can, you'll get for ex. 2 instances with the monolithic app, I see no issues here.</li><li>I mean the instance</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1326127,
          "date": "Fri 13 Dec 2024 14:17",
          "username": "jfedotov",
          "content": "you can, you'll get for ex. 2 instances with the monolithic app, I see no issues here.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1304687,
          "date": "Tue 29 Oct 2024 21:16",
          "username": "Abdullah2004",
          "content": "I mean the instance",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1297101,
          "date": "Sun 13 Oct 2024 22:05",
          "username": "XXXXXlNN",
          "content": "BE makes more sense to me. Vertical scaling increases cost continuously even when the instance is in low demand. for a long run, the cost would be higher than just scale horizontally. The questions says the 'poor performance at specific times', so we just need to scale up at specific times. <br><br>Additionally, in order to scale up, we do need AMI and a launch template. Thus, a combination of B & E should be the correct answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1296571,
          "date": "Sat 12 Oct 2024 17:12",
          "username": "Bwhizzy",
          "content": "The answer is A and E. A for adding more CPU (Vertical scaling ) and E for adding more Servers (Horizontal scaling)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1284073,
          "date": "Sun 15 Sep 2024 13:10",
          "username": "rpmaws",
          "content": "AWS Compute Optimizer analyzes your current EC2 instance usage and recommends the most cost-effective instance type. In this case, the current instance may not have enough CPU capacity, so scaling vertically (upgrading to a larger instance type) could provide immediate relief from the 100% CPU utilization.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1271387,
          "date": "Fri 23 Aug 2024 18:52",
          "username": "[Removed]",
          "content": "AE would be the right answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1269086,
          "date": "Tue 20 Aug 2024 07:31",
          "username": "[Removed]",
          "content": "BE looks good",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1261300,
          "date": "Tue 06 Aug 2024 02:28",
          "username": "komorebi",
          "content": "Answer is BE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1261260,
          "date": "Tue 06 Aug 2024 01:08",
          "username": "flaviobrf",
          "content": "BE is the right choice",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#924",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs all its business applications in the AWS Cloud. The company uses AWS Organizations to manage multiple AWS accounts.<br><br>A solutions architect needs to review all permissions that are granted to IAM users to determine which IAM users have more permissions than required.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#924",
          "answers": [
            {
              "choice": "<p>Use Network Access Analyzer to review all access permissions in the company's AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudWatch alarm that activates when an IAM user creates or modifies resources in an AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Identity and Access Management (IAM) Access Analyzer to review all the company's resources and accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Inspector to find vulnerabilities in existing IAM policies.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 924 discussion",
      "discusstion": [
        {
          "id": 1265280,
          "date": "Tue 13 Aug 2024 19:58",
          "username": "muhammadahmer36",
          "content": "https://aws.amazon.com/iam/access-analyzer/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1262211,
          "date": "Wed 07 Aug 2024 21:59",
          "username": "swati1508",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260815,
          "date": "Sun 04 Aug 2024 23:18",
          "username": "komorebi",
          "content": "Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#925",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to implement a new data retention policy for regulatory compliance. As part of this policy, sensitive documents that are stored in an Amazon S3 bucket must be protected from deletion or modification for a fixed period of time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#925",
          "answers": [
            {
              "choice": "<p>Activate S3 Object Lock on the required objects and enable governance mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Activate S3 Object Lock on the required objects and enable compliance mode.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable versioning on the S3 bucket. Set a lifecycle policy to delete the objects after a specified period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 Lifecycle policy to transition objects to S3 Glacier Flexible Retrieval for the retention duration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 925 discussion",
      "discusstion": [
        {
          "id": 1320795,
          "date": "Mon 02 Dec 2024 06:39",
          "username": "JA2018",
          "content": "S3 Object Lock:<br>- This feature allows you to lock objects in an S3 bucket, preventing them from being deleted or modified for a specified retention period.<br><br>Compliance mode:<br>- When enabled, S3 Object Lock in compliance mode provides the most stringent protection, ensuring that once an object is locked, even the account root user cannot delete or modify it, making it ideal for regulatory compliance scenarios where data must be preserved for a fixed period",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1318242,
          "date": "Tue 26 Nov 2024 19:15",
          "username": "SmartGil2024",
          "content": "The question says :: ''for a fixed period of time.\\\", why not C ? Because the items can be deleted after this fix period of time./ with compliance mode - no one can delete, it is true, but we need to also pay attention to the fixed period of time.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While versioning helps maintain historical data, a lifecycle policy alone cannot guarantee that sensitive documents will not be deleted prematurely, as it can be modified or deleted.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320796,
          "date": "Mon 02 Dec 2024 06:40",
          "username": "JA2018",
          "content": "While versioning helps maintain historical data, a lifecycle policy alone cannot guarantee that sensitive documents will not be deleted prematurely, as it can be modified or deleted.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1267708,
          "date": "Sat 17 Aug 2024 14:24",
          "username": "[Removed]",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262229,
          "date": "Wed 07 Aug 2024 23:02",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262212,
          "date": "Wed 07 Aug 2024 22:00",
          "username": "swati1508",
          "content": "B compliance mode - no one can delete<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Except god. lol</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1274614,
          "date": "Thu 29 Aug 2024 18:08",
          "username": "ccceb01",
          "content": "Except god. lol",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#926",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its customer-facing web application on containers. The workload uses Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. The web application is resource intensive.<br><br>The web application needs to be available 24 hours a day, 7 days a week for customers. The company expects the application to experience short bursts of high traffic. The workload must be highly available.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#926",
          "answers": [
            {
              "choice": "<p>Configure an ECS capacity provider with Fargate. Conduct load testing by using a third-party tool. Rightsize the Fargate tasks in Amazon CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an ECS capacity provider with Fargate for steady state and Fargate Spot for burst traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an ECS capacity provider with Fargate Spot for steady state and Fargate for burst traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an ECS capacity provider with Fargate. Use AWS Compute Optimizer to rightsize the Fargate task.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 926 discussion",
      "discusstion": [
        {
          "id": 1332223,
          "date": "Fri 27 Dec 2024 05:31",
          "username": "Liongeek",
          "content": "It's D.<br><br>Compute Optimizer supports recommendations for Fargate Tasks<br>https://aws.amazon.com/about-aws/whats-new/2022/12/aws-compute-optimizer-amazon-ecs-services-aws-fargate/<br><br>Option B and C recommend Spot, but that's not an option since the the question asks for 24x7 availability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331963,
          "date": "Thu 26 Dec 2024 16:00",
          "username": "thiahthura",
          "content": "D is right answer. Company desire is 24 * 7. So I think spot should be.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331346,
          "date": "Wed 25 Dec 2024 05:52",
          "username": "EllenLiu",
          "content": "available for 24 * 7, spot is out as it can be interrupted any time.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320973,
          "date": "Mon 02 Dec 2024 14:48",
          "username": "rosanna",
          "content": "spots might be interrupted and the questions says it has to be available 24/7, rightsizing addresses the cost optimization point but the spot is so risk so I'll go for D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1289810,
          "date": "Fri 27 Sep 2024 06:42",
          "username": "spoved",
          "content": "https://aws.amazon.com/blogs/aws-cloud-financial-management/how-to-take-advantage-of-rightsizing-recommendation-preferences-in-compute-optimizer/<br>be available 24 hours a day, 7 days a week<br>must be highly available<br>> D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1270412,
          "date": "Thu 22 Aug 2024 00:49",
          "username": "dhewa",
          "content": "This combination leverages the cost benefits of Fargate Spot for burst traffic while ensuring steady performance with regular Fargate instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1263584,
          "date": "Sat 10 Aug 2024 18:52",
          "username": "pujithacg8",
          "content": "B is the right answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1262213,
          "date": "Wed 07 Aug 2024 22:02",
          "username": "swati1508",
          "content": "B- for short work use spot",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1261274,
          "date": "Tue 06 Aug 2024 01:26",
          "username": "flaviobrf",
          "content": "B is the right choice, the application must be available 24/7",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#927",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application in the AWS Cloud. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route 53 for the DNS.<br><br>The company needs a managed solution with proactive engagement to detect against DDoS attacks.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#927",
          "answers": [
            {
              "choice": "<p>Enable AWS Config. Configure an AWS Config managed rule that detects DDoS attacks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable AWS WAF on the ALCreate an AWS WAF web ACL with rules to detect and prevent DDoS attacks. Associate the web ACL with the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the ALB access logs in an Amazon S3 bucket. Configure Amazon GuardDuty to detect and take automated preventative actions for DDoS attacks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Subscribe to AWS Shield Advanced. Configure hosted zones in Route 53. Add ALB resources as protected resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 927 discussion",
      "discusstion": [
        {
          "id": 1319431,
          "date": "Thu 28 Nov 2024 20:52",
          "username": "AMEJack",
          "content": "Shield Advanced signals a DDoS detection and starts analyzing the traffic for an attack signature. If a signature is found, it is first tested on past traffic to reduce the risk of false positive, then if it's safe to use it, a corresponding WAF rule is placed in the previously created rule group. After a certain time, when the attack is stopped, the rule is automatically removed from the rule group. When successful, this process takes several minutes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1270418,
          "date": "Thu 22 Aug 2024 01:13",
          "username": "dhewa",
          "content": "Tip: DDoSShield, SQL injectionWAF",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262230,
          "date": "Wed 07 Aug 2024 23:03",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262215,
          "date": "Wed 07 Aug 2024 22:03",
          "username": "swati1508",
          "content": "D for DDOS shield advance",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#928",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a video streaming web application in a VPC. The company uses a Network Load Balancer (NLB) to handle TCP traffic for real-time data processing. There have been unauthorized attempts to access the application.<br><br>The company wants to improve application security with minimal architectural change to prevent unauthorized attempts to access the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#928",
          "answers": [
            {
              "choice": "<p>Implement a series of AWS WAF rules directly on the NLB to filter out unauthorized traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate the NLB with a security group to allow only trusted IP addresses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a second NLB in parallel with the existing NLB configured with a strict IP address allow list.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized access attempts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 928 discussion",
      "discusstion": [
        {
          "id": 1334065,
          "date": "Mon 30 Dec 2024 12:24",
          "username": "Denise123",
          "content": "Tricky one. About option A > AWS WAF does not support Network Load Balancers (NLBs) directly. NLBs operate at the transport layer (Layer 4), while AWS WAF is designed to work with Application Load Balancers (ALBs) at the application layer (Layer 7).....Given that the requirement is to improve application security for a Network Load Balancer with minimal architectural changes, the most appropriate solution would be Option B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331351,
          "date": "Wed 25 Dec 2024 06:11",
          "username": "EllenLiu",
          "content": "shield is only for DDos attacks protection",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331340,
          "date": "Wed 25 Dec 2024 05:03",
          "username": "Anyio",
          "content": "The correct answer is D. Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized access attempts.<br><br>Explanation:<br><br>Option D: Correct. AWS Shield Advanced is designed to protect against DDoS attacks, which can be a source of unauthorized access attempts. It provides enhanced protection features for applications behind a Network Load Balancer, offering additional security measures without requiring significant architectural changes. By leveraging AWS Shield Advanced, the company can gain comprehensive DDoS protection tailored for use with their existing NLB setup.<br><br>Option B: Incorrect. NLBs do not support security groups which are applicable to instances, not to the NLB itself. In addition, recreating the NLB to deal with unauthorized access attempts does not align with the requirement for minimal architectural change.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1326954,
          "date": "Sun 15 Dec 2024 17:11",
          "username": "dragossky",
          "content": "Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized access attempts.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319729,
          "date": "Fri 29 Nov 2024 14:18",
          "username": "ckhemani",
          "content": "Real-time data processing normally use RTP Protocol which uses a range of ports to deliver audio and video streams. It doesn't specifically says HTTPS so i assume, it can't use WAF to control the traffic since it operates in HTTP/HTTPS Level only.<br><br>Not designed for real-time:<br>HTTP is primarily designed for request-response communication, which involves sending a request and then waiting for a full response, making it less efficient for continuous data streams needed in real-time applications",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1317840,
          "date": "Tue 26 Nov 2024 01:31",
          "username": "ttttttttttttttttttttttt",
          "content": "Why is it not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Waf supports ALB layer7, not nlb</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319991,
          "date": "Sat 30 Nov 2024 02:32",
          "username": "ARV14",
          "content": "Waf supports ALB layer7, not nlb",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1312154,
          "date": "Thu 14 Nov 2024 17:20",
          "username": "Sergantus",
          "content": "The answer should be D. It makes no sense to pick B for a public app in cases of DDoS, SGs wouldn't help with that. It's like, the closer the questions end, the more trolls left.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1310494,
          "date": "Tue 12 Nov 2024 09:42",
          "username": "mk168898",
          "content": "I don't think B is correct. if you only allow selected IPs to access then this company cannot host their video streaming service to the public.<br><br>D should be the correct answer. AWS shield advanced if I rmb correctly prevent unauthorised attempts",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1279757,
          "date": "Fri 06 Sep 2024 20:46",
          "username": "Jeyaluxshan",
          "content": "Network Load Balancers (NLB) now supports security groups, enabling you to filter the traffic that your NLB accepts and forwards to your application. Using security groups, you can configure rules to help ensure that your NLB only accepts traffic from trusted IP addresses, and centrally enforce access control policies. This improves your application's security posture and simplifies operations",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1277189,
          "date": "Tue 03 Sep 2024 06:20",
          "username": "AbhiBK",
          "content": "Answer is D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1269088,
          "date": "Tue 20 Aug 2024 07:34",
          "username": "[Removed]",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1260816,
          "date": "Sun 04 Aug 2024 23:20",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1260577,
          "date": "Sun 04 Aug 2024 11:07",
          "username": "example_",
          "content": "https://aws.amazon.com/about-aws/whats-new/2023/08/network-load-balancer-supports-security-groups/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#929",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A healthcare company is developing an AWS Lambda function that publishes notifications to an encrypted Amazon Simple Notification Service (Amazon SNS) topic. The notifications contain protected health information (PHI).<br><br>The SNS topic uses AWS Key Management Service (AWS KMS) customer managed keys for encryption. The company must ensure that the application has the necessary permissions to publish messages securely to the SNS topic.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#929",
          "answers": [
            {
              "choice": "<p>Create a resource policy for the SNS topic that allows the Lambda function to publish messages to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of customer managed keys.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a resource policy for the encryption key that the SNS topic uses that has the necessary AWS KMS permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic by using API Gateway resource policies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Lambda execution role that has the necessary IAM permissions to use a customer managed key in AWS KMS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 929 discussion",
      "discusstion": [
        {
          "id": 1264205,
          "date": "Sun 11 Aug 2024 17:25",
          "username": "Abbas_Abi_AWS",
          "content": "A C F is corrcet",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1331392,
          "date": "Wed 25 Dec 2024 07:30",
          "username": "EllenLiu",
          "content": "I don't understand why lambda needs KMS to encrypt message.<br>In this scenario, the Lambda function does not need direct permissions to use the KMS key because the encryption and decryption are fully managed by Amazon SNS as part of the SSE-KMS feature.<br>SNS is the only service lambda will talk to, The Lambda interacts with SNS using HTTPS and does not directly deal with the encrypted data or the KMS key. so Lambda only needs the permission to publish messages to the SNS topic.<br>I would like to choose F only if #F answer can be updated as below:<br>F. Configure a Lambda execution role that has the necessary IAM permissions to publish to the SNS topic.<br>A: Create a resource policy for the SNS topic > grants lambda the ability to publish messages to the topic<br>C: The KMS key resource policy must allow SNS to use the key for encryption and decryption.<br>F: Configure the Lambda Execution Role > SNS permissions to publish to the topic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1320799,
          "date": "Mon 02 Dec 2024 06:52",
          "username": "JA2018",
          "content": "#A: This is essential because the resource policy on the SNS topic will define which entities (like the Lambda function) are allowed to publish messages to it.<br><br>#D: By specifying the Lambda function's ARN in the SNS topic policy, you clearly grant access only to that specific Lambda function.<br><br>#F: Since the SNS topic uses a customer-managed KMS key, the Lambda execution role must have the necessary permissions to use that key for encryption/decryption when publishing messages.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are not correct:<br><br>#B: The question already states that the SNS topic is using customer-managed KMS keys, so there's no need to switch to server-side encryption with AWS managed keys.<br><br>#C: While technically you could create a resource policy on the encryption key itself, it's not the most secure approach as it would grant access to the key itself, not just the ability to use it for SNS encryption.<br><br>#E: Introducing an API Gateway layer is unnecessary complexity for this scenario, as you can directly control access to the SNS topic using the Lambda execution role and its permissions.</li><li>Key takeaway:<br><br>- To ensure the Lambda function can securely publish messages to an encrypted SNS topic, you need to properly configure the SNS topic resource policy to allow the Lambda function access and make sure the Lambda execution role has the necessary KMS permissions to use the customer-managed encryption key.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 1320800,
          "date": "Mon 02 Dec 2024 06:53",
          "username": "JA2018",
          "content": "Why the other options are not correct:<br><br>#B: The question already states that the SNS topic is using customer-managed KMS keys, so there's no need to switch to server-side encryption with AWS managed keys.<br><br>#C: While technically you could create a resource policy on the encryption key itself, it's not the most secure approach as it would grant access to the key itself, not just the ability to use it for SNS encryption.<br><br>#E: Introducing an API Gateway layer is unnecessary complexity for this scenario, as you can directly control access to the SNS topic using the Lambda execution role and its permissions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Key takeaway:<br><br>- To ensure the Lambda function can securely publish messages to an encrypted SNS topic, you need to properly configure the SNS topic resource policy to allow the Lambda function access and make sure the Lambda execution role has the necessary KMS permissions to use the customer-managed encryption key.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320801,
          "date": "Mon 02 Dec 2024 06:53",
          "username": "JA2018",
          "content": "Key takeaway:<br><br>- To ensure the Lambda function can securely publish messages to an encrypted SNS topic, you need to properly configure the SNS topic resource policy to allow the Lambda function access and make sure the Lambda execution role has the necessary KMS permissions to use the customer-managed encryption key.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1305022,
          "date": "Wed 30 Oct 2024 15:02",
          "username": "elmyth",
          "content": "D is correct too and =D0=A1 is not clear, but seems like it is about KMS policy and adding permissions for sns service which has to be added in case of CMK ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1290880,
          "date": "Sun 29 Sep 2024 02:31",
          "username": "agbor_tambe",
          "content": "my answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is like a part of A, so it makes no sense to pick both, it should be A C F.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 1312166,
          "date": "Thu 14 Nov 2024 17:39",
          "username": "Sergantus",
          "content": "D is like a part of A, so it makes no sense to pick both, it should be A C F.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1274420,
          "date": "Thu 29 Aug 2024 10:41",
          "username": "progounick",
          "content": "ChatGPT agrees with me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 1260817,
          "date": "Sun 04 Aug 2024 23:21",
          "username": "komorebi",
          "content": "Answer is ADF",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADF"
        }
      ]
    },
    {
      "question_id": "#930",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an employee web portal. Employees log in to the portal to view payroll details. The company is developing a new system to give employees the ability to upload scanned documents for reimbursement. The company runs a program to extract text-based data from the documents and attach the extracted information to each employee's reimbursement IDs for processing.<br><br>The employee web portal requires 100% uptime. The document extract program runs infrequently throughout the day on an on-demand basis. The company wants to build a scalable and cost-effective new system that will require minimal changes to the existing web portal. The company does not want to make any code changes.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#930",
          "answers": [
            {
              "choice": "<p>Run Amazon EC2 On-Demand Instances in an Auto Scaling group for the web portal. Use an AWS Lambda function to run the document extract program. Invoke the Lambda function when an employee uploads a new reimbursement document.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run Amazon EC2 Spot Instances in an Auto Scaling group for the web portal. Run the document extract program on EC2 Spot Instances. Start document extract program instances when an employee uploads a new reimbursement document.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Savings Plan to run the web portal and the document extract program. Run the web portal and the document extract program in an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket to host the web portal. Use Amazon API Gateway and an AWS Lambda function for the existing functionalities. Use the Lambda function to run the document extract program. Invoke the Lambda function when the API that is associated with a new document upload is called.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 930 discussion",
      "discusstion": [
        {
          "id": 1319739,
          "date": "Fri 29 Nov 2024 14:49",
          "username": "ckhemani",
          "content": "Answer: A<br>This solution offers the most scalable and cost-effective approach with minimal changes to the existing web portal and no code modifications.<br><br>Why Not Other Options?:<br><br>Option B (Spot Instances): Spot Instances are not suitable for workloads requiring 100% uptime, as they can be terminated by AWS with short notice.<br><br>Option C (Savings Plan): A Savings Plan could reduce costs but does not address the requirement for running the document extraction program efficiently or without code changes.<br><br>Option D (S3 with API Gateway and Lambda): This would require significant changes to the existing web portal setup, including moving the portal to S3 and reconfiguring its architecture, which contradicts the requirement of minimal implementation effort and no code change.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1297103,
          "date": "Sun 13 Oct 2024 22:13",
          "username": "XXXXXlNN",
          "content": "D makes more sense if the company asks to redesign the whole thing to achieve better operational management, performance, cost effective, etc. However, it requires us to provide solution with MINIMUM change... thus A it is I guess.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1289719,
          "date": "Thu 26 Sep 2024 22:56",
          "username": "JoeTromundo",
          "content": "\\\"The company does not want to make any code changes.\\\"<br>Option D requires a complete re-architecture of the web portal to be hosted on Amazon S3 and API Gateway, which involves significant changes to the existing system. This does not align with the requirement of minimal changes to the current setup.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1284429,
          "date": "Mon 16 Sep 2024 04:32",
          "username": "rpmaws",
          "content": "because they don't want any change in code so A is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1274424,
          "date": "Thu 29 Aug 2024 10:45",
          "username": "progounick",
          "content": "A ChatGPT agrees with me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1273425,
          "date": "Tue 27 Aug 2024 14:41",
          "username": "progounick",
          "content": "I think D is better choice. Even though A makes sense too, D seems the correct one",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1273008,
          "date": "Mon 26 Aug 2024 21:20",
          "username": "RealPro111",
          "content": "Least effort, webportal is simply an interface: D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1267751,
          "date": "Sat 17 Aug 2024 17:00",
          "username": "[Removed]",
          "content": "A sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1265261,
          "date": "Tue 13 Aug 2024 19:23",
          "username": "744fdad",
          "content": "i think D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1262231,
          "date": "Wed 07 Aug 2024 23:04",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1262216,
          "date": "Wed 07 Aug 2024 22:10",
          "username": "swati1508",
          "content": "I thinks it's D",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#931",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company has a multi-account AWS environment in the us-east-1 Region. The company has an Amazon Simple Notification Service (Amazon SNS) topic in a production account that publishes performance metrics. The company has an AWS Lambda function in an administrator account to process and analyze log data.<br><br>The Lambda function that is in the administrator account must be invoked by messages from the SNS topic that is in the production account when significant metrics are reported.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#931",
          "answers": [
            {
              "choice": "<p>Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator account to buffer messages from the SNS topic that is in the production account. Configure the SQS queue to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EventBridge rule in the production account to capture the SNS topic notifications. Configure the EventBridge rule to forward notifications to the Lambda function that is in the administrator account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon Athena to analyze the metrics from the administrator account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 931 discussion",
      "discusstion": [
        {
          "id": 1331563,
          "date": "Wed 25 Dec 2024 14:59",
          "username": "Anyio",
          "content": "The Correct answer is A,C.<br><br>Using the Amazon SNS console, add a cross-account AWS Lambda subscription to an Amazon SNS topic.<br><br>the Lambda function resource policy allows SNS to invoke the function.<br>the SNS topic access policy allows Lambda to subscribe to the topic.<br>Note: The SNS topic resides in account A and the Lambda function resides in account B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1331558,
          "date": "Wed 25 Dec 2024 14:46",
          "username": "Anyio",
          "content": "The correct answers are A,B.<br><br>Explanation:<br><br>Option A: Correct. Creating an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function is necessary for SNS to have permission to trigger Lambda. This policy ensures that the Lambda function can be invoked by a service principal from the SNS service.<br><br>Option B: Correct. Using an Amazon Simple Queue Service (Amazon SQS) queue as an intermediary buffer allows for decoupling the SNS topic from the Lambda function, providing more reliability and handling burst traffic effectively. In this setup, the SNS topic can publish to the SQS queue, and the queue can then trigger the Lambda function to process the messages.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry this is the wrong answer (or second best answer) :). The Correct answer is A,C.<br>Using the Amazon SNS console, add a cross-account AWS Lambda subscription to an Amazon SNS topic.<br><br>the Lambda function resource policy allows SNS to invoke the function.<br>the SNS topic access policy allows Lambda to subscribe to the topic.<br>Note: The SNS topic resides in account A and the Lambda function resides in account B.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1331561,
          "date": "Wed 25 Dec 2024 14:58",
          "username": "Anyio",
          "content": "Sorry this is the wrong answer (or second best answer) :). The Correct answer is A,C.<br>Using the Amazon SNS console, add a cross-account AWS Lambda subscription to an Amazon SNS topic.<br><br>the Lambda function resource policy allows SNS to invoke the function.<br>the SNS topic access policy allows Lambda to subscribe to the topic.<br>Note: The SNS topic resides in account A and the Lambda function resides in account B.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1331411,
          "date": "Wed 25 Dec 2024 08:18",
          "username": "EllenLiu",
          "content": "A: resource-policy for Lambda: should grant SNS to access lambda permission<br>C: resource-policy for SNS: should specify who can subscribe SNS topic",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1320802,
          "date": "Mon 02 Dec 2024 06:59",
          "username": "JA2018",
          "content": "#A: This is the most direct way to allow the SNS topic in the production account to trigger the Lambda function in the administrator account. By creating an IAM policy on the Lambda function that grants SNS permission to invoke it, you establish the necessary access control.<br><br>#D: Using an EventBridge rule in the production account allows you to filter and route the SNS notifications specifically to the Lambda function in the administrator account, providing greater control and flexibility over the event delivery .",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1290882,
          "date": "Sun 29 Sep 2024 02:35",
          "username": "agbor_tambe",
          "content": "most reasonable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1288170,
          "date": "Mon 23 Sep 2024 16:58",
          "username": "mooondooo",
          "content": "Probably A and C<br><br>https://repost.aws/knowledge-center/sns-with-crossaccount-lambda-subscription",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1273466,
          "date": "Tue 27 Aug 2024 15:47",
          "username": "progounick",
          "content": "A and C seem to be the best answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1270375,
          "date": "Wed 21 Aug 2024 22:10",
          "username": "dhewa",
          "content": "No need to complicate stuff, AWS services already exist only permissions are missing. A&C will set up the necessary permissions and subscriptions for cross-account invocation of the Lambda function by the SNS topic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1269598,
          "date": "Tue 20 Aug 2024 18:34",
          "username": "523db89",
          "content": "A,C correct - While using SQS could be a solution for buffering messages, it introduces additional complexity",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1269152,
          "date": "Tue 20 Aug 2024 08:16",
          "username": "jamesukae",
          "content": "For me AB is contradict , why we invoke lambda function by both SNS and SQS?<br><br>I think BE is correct answer because question also need solution to analyze data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1264301,
          "date": "Sun 11 Aug 2024 23:14",
          "username": "siheom",
          "content": "VOTE A,B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1263585,
          "date": "Sat 10 Aug 2024 18:52",
          "username": "nebajp",
          "content": "correct answer is AD<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>- #A: This is the most direct way to allow the SNS topic in the production account to trigger the Lambda function in the administrator account. By creating an IAM policy on the Lambda function that grants SNS permission to invoke it, you establish the necessary access control [A, D].<br>- #D: Using an EventBridge rule in the production account allows you to filter and route the SNS notifications specifically to the Lambda function in the administrator account, providing greater control and flexibility over the event delivery [D].</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1320803,
          "date": "Mon 02 Dec 2024 06:59",
          "username": "JA2018",
          "content": "- #A: This is the most direct way to allow the SNS topic in the production account to trigger the Lambda function in the administrator account. By creating an IAM policy on the Lambda function that grants SNS permission to invoke it, you establish the necessary access control [A, D].<br>- #D: Using an EventBridge rule in the production account allows you to filter and route the SNS notifications specifically to the Lambda function in the administrator account, providing greater control and flexibility over the event delivery [D].",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#932",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application from an on-premises location to Amazon Elastic Kubernetes Service (Amazon EKS). The company must use a custom subnet for pods that are in the company's VPC to comply with requirements. The company also needs to ensure that the pods can communicate securely within the pods' VPC.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#932",
          "answers": [
            {
              "choice": "<p>Configure AWS Transit Gateway to directly manage custom subnet configurations for the pods in Amazon EKS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Direct Connect connection from the company's on-premises IP address ranges to the EKS pods.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon VPC CNI plugin for Kubernetes. Define custom subnets in the VPC cluster for the pods to use.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement a Kubernetes network policy that has pod anti-affinity rules to restrict pod placement to specific nodes that are within custom subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 932 discussion",
      "discusstion": [
        {
          "id": 1262921,
          "date": "Fri 09 Aug 2024 13:27",
          "username": "officedepotadmin",
          "content": "The Amazon VPC Container Network Interface (CNI) plugin is the default network plugin for Amazon EKS. It allows Kubernetes pods to receive IP addresses from a VPC's subnet and enables pods to communicate securely within the VPC as if they were native VPC resources.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1288173,
          "date": "Mon 23 Sep 2024 17:09",
          "username": "mooondooo",
          "content": "Probably C<br><br>https://repost.aws/knowledge-center/eks-custom-subnet-for-pod",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1270380,
          "date": "Wed 21 Aug 2024 22:20",
          "username": "dhewa",
          "content": "C all the way.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#933",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an ecommerce application that stores all data in a single Amazon RDS for MySQL DB instance that is fully managed by AWS. The company needs to mitigate the risk of a single point of failure.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#933",
          "answers": [
            {
              "choice": "<p>Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during the next maintenance window.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the current database to a new Amazon DynamoDB Multi-AZ deployment. Use AWS Database Migration Service (AWS DMS) with a heterogeneous migration strategy to migrate the current RDS DB instance to DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new RDS DB instance in a Multi-AZ deployment. Manually restore the data from the existing RDS DB instance from the most recent snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the DB instance in an Amazon EC2 Auto Scaling group with a minimum group size of three. Use Amazon Route 53 simple routing to distribute requests to all DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 933 discussion",
      "discusstion": [
        {
          "id": 1315203,
          "date": "Wed 20 Nov 2024 12:00",
          "username": "Changwha",
          "content": "A: This solution provides automated failover and high availability with minimal implementation effort.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260981,
          "date": "Mon 05 Aug 2024 10:44",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260830,
          "date": "Mon 05 Aug 2024 00:23",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#934",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple Microsoft Windows SMB file servers and Linux NFS file servers for file sharing in an on-premises environment. As part of the company's AWS migration plan, the company wants to consolidate the file servers in the AWS Cloud.<br><br>The company needs a managed AWS storage service that supports both NFS and SMB access. The solution must be able to share between protocols. The solution must have redundancy at the Availability Zone level.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#934",
          "answers": [
            {
              "choice": "<p>Use Amazon FSx for NetApp ONTAP for storage. Configure multi-protocol access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create two Amazon EC2 instances. Use one EC2 instance for Windows SMB file server access and one EC2 instance for Linux NFS file server access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon FSx for NetApp ONTAP for SMB access. Use Amazon FSx for Lustre for NFS access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 storage. Access Amazon S3 through an Amazon S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 934 discussion",
      "discusstion": [
        {
          "id": 1279794,
          "date": "Fri 06 Sep 2024 22:20",
          "username": "Jeyaluxshan",
          "content": "Amazon FSx for NetApp ONTAP uses Single-AZ and Multi-AZ deployment types. You can choose from four options: Single-AZ 1, Single-AZ 2, Multi-AZ 1, and Multi-AZ 2",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1274637,
          "date": "Thu 29 Aug 2024 19:01",
          "username": "ccceb01",
          "content": "https://aws.amazon.com/fsx/netapp-ontap/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260982,
          "date": "Mon 05 Aug 2024 10:45",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260832,
          "date": "Mon 05 Aug 2024 00:37",
          "username": "example_",
          "content": "https://aws.amazon.com/blogs/storage/enabling-multiprotocol-workloads-with-amazon-fsx-for-netapp-ontap/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#935",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company needs to upgrade a critical web application. The application currently runs on a single Amazon EC2 instance that the company hosts in a public subnet. The EC2 instance runs a MySQL database. The application's DNS records are published in an Amazon Route 53 zone.<br><br>A solutions architect must reconfigure the application to be scalable and highly available. The solutions architect must also reduce MySQL read latency.<br><br>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#935",
          "answers": [
            {
              "choice": "<p>Launch a second EC2 instance in a second AWS Region. Use a Route 53 failover routing policy to redirect the traffic to the second EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create and configure an Auto Scaling group to launch private EC2 instances in multiple Availability Zones. Add the instances to a target group behind a new Application Load Balancer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon Aurora MySQL cluster. Create the primary DB instance and reader DB instance in separate Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create and configure an Auto Scaling group to launch private EC2 instances in multiple AWS Regions. Add the instances to a target group behind a new Application Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon Aurora MySQL cluster with cross-Region read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 935 discussion",
      "discusstion": [
        {
          "id": 1273497,
          "date": "Tue 27 Aug 2024 16:27",
          "username": "progounick",
          "content": "It is obvious",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1270387,
          "date": "Wed 21 Aug 2024 22:54",
          "username": "dhewa",
          "content": "These simple options will help you achieve a robust, scalable, and highly available architecture for your web application",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1269093,
          "date": "Tue 20 Aug 2024 07:40",
          "username": "[Removed]",
          "content": "B and C for high availability and scalability",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1263595,
          "date": "Sat 10 Aug 2024 19:40",
          "username": "nebajp",
          "content": "correct Answer is B& C as it talks about high availability and scalability<br>and rest of the options are for Disaster Recovery.<br>Right answer is B & C.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1263594,
          "date": "Sat 10 Aug 2024 19:39",
          "username": "nebajp",
          "content": "correct Answer is B& C as it talks about high availability and scalability<br>and rest of the options are for Disaster Recovery.<br>Right answer is B & C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260833,
          "date": "Mon 05 Aug 2024 00:44",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1260203,
          "date": "Sat 03 Aug 2024 11:39",
          "username": "komorebi",
          "content": "Answer is DE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1260186,
          "date": "Sat 03 Aug 2024 10:53",
          "username": "JunsK1e",
          "content": "B is correct and C,D is incorrect since the auto scaling is working within Region not Multi region. E incorrect also because the question is asking a high availability C is the best answer that E.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#936",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs thousands of AWS Lambda functions. The company needs a solution to securely store sensitive information that all the Lambda functions use. The solution must also manage the automatic rotation of the sensitive information.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#936",
          "answers": [
            {
              "choice": "<p>Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive information<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda layer that retrieves sensitive information<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store sensitive information in AWS Secrets Manager<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store sensitive information in AWS Systems Manager Parameter Store<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda consumer with dedicated throughput to retrieve sensitive information and create environmental variables<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 936 discussion",
      "discusstion": [
        {
          "id": 1269504,
          "date": "Tue 20 Aug 2024 15:21",
          "username": "[Removed]",
          "content": "C. Store sensitive information in AWS Secrets Manager.<br><br>AWS Secrets Manager securely stores sensitive information and provides automatic rotation of secrets, reducing the need for manual management.<br>B. Create a Lambda layer that retrieves sensitive information.<br><br>Using a Lambda layer allows multiple Lambda functions to access the sensitive information stored in Secrets Manager without needing to duplicate retrieval logic in each function. This approach centralizes the retrieval process and reduces operational complexity.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>chatgpt answer is now C and D</li><li>AWS public documentation and other professional forums instead, kindly!</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1282143,
          "date": "Wed 11 Sep 2024 15:30",
          "username": "awisaw",
          "content": "chatgpt answer is now C and D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS public documentation and other professional forums instead, kindly!</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1300372,
          "date": "Sun 20 Oct 2024 10:58",
          "username": "sOI852POL",
          "content": "AWS public documentation and other professional forums instead, kindly!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1263590,
          "date": "Sat 10 Aug 2024 19:29",
          "username": "pujithacg8",
          "content": "D doesn't provide automatic rotation<br><br>Answer will be B and C",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1290885,
          "date": "Sun 29 Sep 2024 02:43",
          "username": "agbor_tambe",
          "content": "BC is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1274427,
          "date": "Thu 29 Aug 2024 10:52",
          "username": "progounick",
          "content": "B,C ChatGPT agrees with me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1260984,
          "date": "Mon 05 Aug 2024 10:45",
          "username": "komorebi",
          "content": "Answer is CD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1260836,
          "date": "Mon 05 Aug 2024 00:56",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html<br><br>https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/using-aws-secrets-manager-and-lambda-function-to-store-rotate-and-secure-keys/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#937",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an internal application that runs on Amazon EC2 instances in an Auto Scaling group. The EC2 instances are compute optimized and use Amazon Elastic Block Store (Amazon EBS) volumes.<br><br>The company wants to identify cost optimizations across the EC2 instances, the Auto Scaling group, and the EBS volumes.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#937",
          "answers": [
            {
              "choice": "<p>Create a new AWS Cost and Usage Report. Search the report for cost recommendations for the EC2 instances the Auto Scaling group, and the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create new Amazon CloudWatch billing alerts. Check the alert statuses for cost recommendations for the EC2 instances, the Auto Scaling group, and the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Compute Optimizer for cost recommendations for the EC2 instances, the Auto Scaling group and the EBS volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Compute Optimizer for cost recommendations for the EC2 instances. Create a new AWS Cost and Usage Report. Search the report for cost recommendations for the Auto Scaling group and the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 937 discussion",
      "discusstion": [
        {
          "id": 1269514,
          "date": "Tue 20 Aug 2024 15:29",
          "username": "[Removed]",
          "content": "C looks right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260985,
          "date": "Mon 05 Aug 2024 10:46",
          "username": "komorebi",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260840,
          "date": "Mon 05 Aug 2024 01:09",
          "username": "example_",
          "content": "https://aws.amazon.com/compute-optimizer/<br>https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#938",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a media store across multiple Amazon EC2 instances distributed across multiple Availability Zones in a single VPC. The company wants a high-performing solution to share data between all the EC2 instances, and prefers to keep the data within the VPC only.<br><br>What should a solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#938",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket and call the service APIs from each instance's application<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket and configure all instances to access it as a mounted volume<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Elastic Block Store (Amazon EBS) volume and mount it across all instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Elastic File System (Amazon EFS) file system and mount it across all instances<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 938 discussion",
      "discusstion": [
        {
          "id": 1265404,
          "date": "Wed 14 Aug 2024 00:12",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1265305,
          "date": "Tue 13 Aug 2024 21:06",
          "username": "muhammadahmer36",
          "content": "D is the right answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#939",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing, the company added a read replica to accommodate extra read-only queries from the company's reporting tool. The read replica CPU usage was 60% and the primary instance CPU usage was 60%.<br><br>After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The primary instance still has a constant 60% CPU usage. The company wants to rightsize the database and still provide enough performance for future growth.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#939",
          "answers": [
            {
              "choice": "<p>Delete the read replica Do not make changes to the primary instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Resize the read replica to a smaller instance size Do not make changes to the primary instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Resize the read replica to a larger instance size Resize the primary instance to a smaller instance size<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete the read replica Resize the primary instance to a larger instance<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 939 discussion",
      "discusstion": [
        {
          "id": 1326769,
          "date": "Sun 15 Dec 2024 10:38",
          "username": "Ghoneam",
          "content": "D. Delete the read replica Resize the primary instance to a larger instance<br>because<br>no need for read replica after year end<br>still provide enough performance for future growth.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1295493,
          "date": "Thu 10 Oct 2024 10:42",
          "username": "Oghare",
          "content": "Answer is B<br>Since the read replica is now underutilized with only 25% CPU usage, it can be resized to a smaller instance to save costs while still handling the reduced read queries. No changes to the primary instance are needed, as it is consistently running at 60% CPU usage, which is manageable, and the read replica will still offload read queries in the future.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1275204,
          "date": "Fri 30 Aug 2024 19:45",
          "username": "Abdullah2004",
          "content": "No clear explanation here and everyone agreed with default answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1269516,
          "date": "Tue 20 Aug 2024 15:34",
          "username": "[Removed]",
          "content": "B looks good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1265406,
          "date": "Wed 14 Aug 2024 00:12",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1265306,
          "date": "Tue 13 Aug 2024 21:08",
          "username": "muhammadahmer36",
          "content": "Resize the read replica to a smaller instance size Do not make changes to the primary instance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#940",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its databases to Amazon RDS for PostgreSQL. The company is migrating its applications to Amazon EC2 instances. The company wants to optimize costs for long-running workloads.<br><br>Which solution will meet this requirement MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#940",
          "answers": [
            {
              "choice": "<p>Use On-Demand Instances for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year Compute Savings Plan with the No Upfront option for the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Reserved Instances for a 1 year term with the No Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the No Upfront option for the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Reserved Instances for a 1 year term with the Partial Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the Partial Upfront option for the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase Reserved Instances for a 3 year term with the All Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 3 year EC2 Instance Savings Plan with the All Upfront option for the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 940 discussion",
      "discusstion": [
        {
          "id": 1265896,
          "date": "Wed 14 Aug 2024 19:43",
          "username": "744fdad",
          "content": "the longer the reservation the more the savings too for reserved",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1265308,
          "date": "Tue 13 Aug 2024 21:12",
          "username": "muhammadahmer36",
          "content": "D is right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263598,
          "date": "Sat 10 Aug 2024 20:16",
          "username": "nebajp",
          "content": "Correct Answer - D,<br>All upfront is cheaper than partial and no upfront.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263215,
          "date": "Fri 09 Aug 2024 22:07",
          "username": "swati1508",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1259771,
          "date": "Fri 02 Aug 2024 09:31",
          "username": "JunsK1e",
          "content": "letter D is the correct, It gives you big discount if you purchase with all upfront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#941",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company must ensure that Kubernetes service accounts in the EKS cluster have secure and granular access to specific AWS resources by using IAM roles for service accounts (IRSA).<br><br>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#941",
          "answers": [
            {
              "choice": "<p>Create an IAM policy that defines the required permissions Attach the policy directly to the IAM role of the EKS nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement network policies within the EKS cluster to prevent Kubernetes service accounts from accessing specific AWS services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account. Ensure a one-to-one mapping between IAM roles and Kubernetes roles.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts with the Amazon ResourceName (ARN) of the IAM role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC) identity provider.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 941 discussion",
      "discusstion": [
        {
          "id": 1289849,
          "date": "Fri 27 Sep 2024 09:17",
          "username": "spoved",
          "content": "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html<br>https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html<br>https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html<br>> DE",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1288183,
          "date": "Mon 23 Sep 2024 17:42",
          "username": "mooondooo",
          "content": "probably D andE<br><br>https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1267772,
          "date": "Sat 17 Aug 2024 18:33",
          "username": "[Removed]",
          "content": "chatgpt: D. Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts with the Amazon Resource Name (ARN) of the IAM role:<br><br>Granular Access Control: By defining an IAM role with the necessary permissions and annotating the Kubernetes service accounts with the ARN of this IAM role, you can achieve fine-grained access control for specific AWS resources. This allows each service account to have only the permissions it needs.<br>E. Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC) identity provider:<br><br>IRSA Integration: To enable IRSA, your EKS cluster must be associated with an OpenID Connect (OIDC) identity provider. This trust relationship allows Kubernetes service accounts to assume IAM roles, enabling secure and granular access to AWS resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1266534,
          "date": "Thu 15 Aug 2024 17:38",
          "username": "744fdad",
          "content": "my educated guess C, E",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#942",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company regularly uploads confidential data to Amazon S3 buckets for analysis.<br><br>The company's security policies mandate that the objects must be encrypted at rest. The company must automatically rotate the encryption key every year. The company must be able to track key rotation by using AWS CloudTrail. The company also must minimize costs for the encryption key.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#942",
          "answers": [
            {
              "choice": "<p>Use server-side encryption with customer-provided keys (SSE-C)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use server-side encryption with Amazon S3 managed keys (SSE-S3)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use server-side encryption with AWS KMS keys (SSE-KMS)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use server-side encryption with customer managed AWS KMS keys<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 942 discussion",
      "discusstion": [
        {
          "id": 1263597,
          "date": "Sat 10 Aug 2024 20:07",
          "username": "nebajp",
          "content": "SSE keys provided usage fee application and there is no monthly charges, hence its a correct option.<br>D is highly cost option with monthly and usage fee. which is incorrect.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331721,
          "date": "Wed 25 Dec 2024 23:29",
          "username": "Anyio",
          "content": "Option C: Incorrect. Though server-side encryption with AWS KMS keys (SSE-KMS) would allow AWS to manage keys and enable logging via AWS CloudTrail, this option uses AWS-managed keys instead of customer-managed keys, limiting control over key rotations. Additionally, there can be more costs involved in using AWS-managed KMS keys compared to the customer managing their own.<br><br>Option D: Correct. Using server-side encryption with customer-managed AWS KMS keys allows the company to have full control over the encryption keys, including managing and ensuring automatic rotation every year. Moreover, AWS CloudTrail can be employed to log events associated with AWS KMS, enabling the tracking of when keys are rotated. This option balances cost-effectiveness with the operational requirements specified, as it provides the necessary control without unnecessary expenses from more specialized AWS services.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320944,
          "date": "Mon 02 Dec 2024 13:41",
          "username": "JA2018",
          "content": "I will choose Option D for the following reasons:<br><br>#1 Automatic key rotation: AWS KMS allows you to set up automatic key rotation for customer managed keys, which fulfills the requirement to rotate encryption keys yearly.<br><br># 2 CloudTrail tracking: All KMS key operations are logged in CloudTrail, enabling you to track key rotation activity.<br><br>#3 Lowest cost: While using customer-provided keys (SSE-C) might seem cost-effective at first glance, managing your own keys adds complexity and can be more expensive in the long run.<br><br>#$ Compliance with security policies: Using customer managed KMS keys ensures that the company has full control over the encryption keys, meeting the stringent security requirements",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1299694,
          "date": "Fri 18 Oct 2024 15:28",
          "username": "XXXXXlNN",
          "content": "D<br>auto-rotation feature > customer managed key",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1290895,
          "date": "Sun 29 Sep 2024 03:12",
          "username": "XXXXXlNN",
          "content": "D. customer needs to see the logs from Cloudtrail!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Even with AWS KMS keys, rotation is logged on ctrail. Answer is D.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#:~:textMonitoring%20key%20rotation,key%20was%20rotated.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1300326,
          "date": "Sun 20 Oct 2024 09:28",
          "username": "sOI852POL",
          "content": "Even with AWS KMS keys, rotation is logged on ctrail. Answer is D.<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#:~:textMonitoring%20key%20rotation,key%20was%20rotated.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1282136,
          "date": "Wed 11 Sep 2024 15:23",
          "username": "sOI852POL",
          "content": "Answer is C.<br>There is no monthly fee for AWS managed keys<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1276473,
          "date": "Mon 02 Sep 2024 08:17",
          "username": "elmyth",
          "content": "Customer managed key: Monthly fee (pro-rated hourly) + Per-use fee + rotation and cloudtrail<br>AWS managed key: No monthly fee + Per-use fee (some AWS services pay this fee for you)+ rotation and cloudtrail",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1269813,
          "date": "Wed 21 Aug 2024 05:53",
          "username": "dhewa",
          "content": "D gives you control, allows you to customise for example rotation policies to suit your compliance needs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263679,
          "date": "Sun 11 Aug 2024 02:49",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#943",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated several applications to AWS in the past 3 months. The company wants to know the breakdown of costs for each of these applications. The company wants to receive a regular report that includes this information.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#943",
          "answers": [
            {
              "choice": "<p>Use AWS Budgets to download data for the past 3 months into a .csv file. Look up the desired information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation tags. Use Cost Explorerto get the desired information.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and Cost Management console todownload bills for the past 3 months. Look up the desired information.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 943 discussion",
      "discusstion": [
        {
          "id": 1291346,
          "date": "Mon 30 Sep 2024 02:28",
          "username": "spoved",
          "content": "- Organizing and tracking costs using AWS cost allocation tags<br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html<br>- Cost Explorer uses the same dataset that is used to generate the AWS Cost and Usage Reports and the detailed billing reports. For a comprehensive review of the data, you can download it into a comma-separated value (CSV) file.<br>https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1283937,
          "date": "Sun 15 Sep 2024 08:37",
          "username": "rpmaws",
          "content": "cost explorer allows cost analysis of up to 13 months.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1274682,
          "date": "Thu 29 Aug 2024 20:32",
          "username": "ccceb01",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1267781,
          "date": "Sat 17 Aug 2024 18:50",
          "username": "[Removed]",
          "content": "c looks good",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#944",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is preparing to deploy a web application on AWS to ensure continuous service for customers. The architecture includes a web application that the company hosts on Amazon EC2 instances, a relational database in Amazon RDS, and static assets that the company stores in Amazon S3.<br><br>The company wants to design a robust and resilient architecture for the application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#944",
          "answers": [
            {
              "choice": "<p>Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in the same Availability Zone. Use Amazon S3 with versioning enabled to store static assets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy a Multi-AZ RDS DB instance. Use Amazon CloudFront to distribute static assets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in a second Availability Zone for cross-AZ redundancy. Serve static assets directly from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to serve the web application. Use Amazon Aurora Serverless v2 for the database. Store static assets in Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 944 discussion",
      "discusstion": [
        {
          "id": 1310998,
          "date": "Wed 13 Nov 2024 01:00",
          "username": "mk168898",
          "content": "keyword is multi-AZ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1280506,
          "date": "Sun 08 Sep 2024 19:47",
          "username": "Jeyaluxshan",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1267783,
          "date": "Sat 17 Aug 2024 19:00",
          "username": "[Removed]",
          "content": "B is the answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264049,
          "date": "Sun 11 Aug 2024 13:14",
          "username": "pujithacg8",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#945",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs several internal applications in multiple AWS accounts. The company uses AWS Organizations to manage its AWS accounts.<br><br>A security appliance in the company's networking account must inspect interactions between applications across AWS accounts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#945",
          "answers": [
            {
              "choice": "<p>Deploy a Network Load Balancer (NLB) in the networking account to send traffic to the security appliance. Configure the application accounts to send traffic to the NLB by using an interface VPC endpoint in the application accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Application Load Balancer (ALB) in the application accounts to send traffic directly to the security appliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a Gateway Load Balancer (GWLB) in the networking account to send traffic to the security appliance. Configure the application accounts to send traffic to the GWLB by using an interface GWLB endpoint in the application accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an interface VPC endpoint in the application accounts to send traffic directly to the security appliance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 945 discussion",
      "discusstion": [
        {
          "id": 1331471,
          "date": "Wed 25 Dec 2024 10:13",
          "username": "EllenLiu",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1310999,
          "date": "Wed 13 Nov 2024 01:01",
          "username": "mk168898",
          "content": "security appliance, inspect interaction > GWLB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1267787,
          "date": "Sat 17 Aug 2024 19:08",
          "username": "[Removed]",
          "content": "C sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1263218,
          "date": "Fri 09 Aug 2024 22:25",
          "username": "swati1508",
          "content": "Inspect traffic for that use GWLB OPTION C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1260986,
          "date": "Mon 05 Aug 2024 10:46",
          "username": "komorebi",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260856,
          "date": "Mon 05 Aug 2024 02:38",
          "username": "example_",
          "content": "https://docs.aws.amazon.com/vpc/latest/privatelink/create-gateway-load-balancer-endpoint-service.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#946",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its production workload on an Amazon Aurora MySQL DB cluster that includes six Aurora Replicas. The company wants near-real-time reporting queries from one of its departments to be automatically distributed across three of the Aurora Replicas. Those three replicas have a different compute and memory specification from the rest of the DB cluster.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#946",
          "answers": [
            {
              "choice": "<p>Create and use a custom endpoint for the workload<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a three-node cluster clone and use the reader endpoint<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use any of the instance endpoints for the selected three nodes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the reader endpoint to automatically distribute the read-only workload<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 946 discussion",
      "discusstion": [
        {
          "id": 1267794,
          "date": "Sat 17 Aug 2024 19:24",
          "username": "[Removed]",
          "content": "Custom Endpoints:<br><br>Custom endpoints in Amazon Aurora allow you to group specific replicas together and route traffic only to those replicas. This is particularly useful when you have replicas with different compute and memory specifications and want to direct specific workloads, such as reporting queries, to those replicas.<br>By creating a custom endpoint, you can include the three specific Aurora Replicas that have the required compute and memory configurations, ensuring that your near-real-time reporting queries are automatically distributed among these replicas.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320948,
          "date": "Mon 02 Dec 2024 13:51",
          "username": "JA2018",
          "content": "This is why I choose Option A:<br><br>Using a Custom endpoint: This allows you to specify a specific set of Aurora replicas be used for the reporting queries, enabling you to target the three replicas with different compute and memory specifications while distributing the workload across them.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are not ideal:<br><br>- #B. Create a three-node cluster clone and use the reader endpoint: While you can create a separate cluster, using the \\\"reader endpoint\\\" would distribute queries across all replicas in that cluster, not just the three you want to target with different specs.<br>- #C. Use any of the instance endpoints for the selected three nodes: This approach would require manual connection management to each specific replica, not providing automatic load balancing across the chosen three nodes.<br>- #D. Use the reader endpoint to automatically distribute the read-only workload: The standard \\\"reader endpoint\\\" distributes reads across all Aurora replicas in the cluster, not just the selected three with specific configurations.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320949,
          "date": "Mon 02 Dec 2024 13:51",
          "username": "JA2018",
          "content": "Why the other options are not ideal:<br><br>- #B. Create a three-node cluster clone and use the reader endpoint: While you can create a separate cluster, using the \\\"reader endpoint\\\" would distribute queries across all replicas in that cluster, not just the three you want to target with different specs.<br>- #C. Use any of the instance endpoints for the selected three nodes: This approach would require manual connection management to each specific replica, not providing automatic load balancing across the chosen three nodes.<br>- #D. Use the reader endpoint to automatically distribute the read-only workload: The standard \\\"reader endpoint\\\" distributes reads across all Aurora replicas in the cluster, not just the selected three with specific configurations.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#947",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Node js function on a server in its on-premises data center. The data center stores data in a PostgreSQL database. The company stores the credentials in a connection string in an environment variable on the server. The company wants to migrate its application to AWS and to replace the Node.js application server with AWS Lambda. The company also wants to migrate to Amazon RDS for PostgreSQL and to ensure that the database credentials are securely managed.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#947",
          "answers": [
            {
              "choice": "<p>Store the database credentials as a parameter in AWS Systems Manager Parameter Store Configure Parameter Store to automatically rotate the secrets every 30 days. Update the Lambda function to retrieve the credentials from the parameter.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the database credentials as a secret in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials every 30 days. Update the Lambda function to retrieve the credentials from the secret.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the database credentials as an encrypted Lambda environment variable. Write a custom Lambda function to rotate the credentials. Schedule the Lambda function to run every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the database credentials as a key in AWS Key Management Service (AWS KMS). Configure automatic rotation for the key. Update the Lambda function to retneve the credentials from the KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 947 discussion",
      "discusstion": [
        {
          "id": 1267902,
          "date": "Sun 18 Aug 2024 03:29",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1267795,
          "date": "Sat 17 Aug 2024 19:27",
          "username": "[Removed]",
          "content": "Secrets Manager:<br><br>AWS Secrets Manager is specifically designed to store and manage sensitive information like database credentials. It provides built-in functionality for securely storing, retrieving, and automatically rotating credentials.<br>Automatic Rotation:<br><br>Secrets Manager can be configured to automatically rotate the database credentials at regular intervals (e.g., every 30 days). This reduces operational overhead by eliminating the need for manual credential rotation or custom rotation logic.<br>Integration with Lambda:<br><br>Lambda functions can easily retrieve credentials stored in Secrets Manager by calling the Secrets Manager API, which simplifies the application code and enhances security.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#948",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to replicate existing and ongoing data changes from an on-premises Oracle database to Amazon RDS for Oracle. The amount of data to replicate varies throughout each day. The company wants to use AWS Database Migration Service (AWS DMS) for data replication. The solution must allocate only the capacity that the replication instance requires.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#948",
          "answers": [
            {
              "choice": "<p>Configure the AWS DMS replication instance with a Multi-AZ deployment to provision instances across multiple Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS DMS Serverless replication task to analyze and replicate the data while provisioning the required capacity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 Auto Scaling to scale the size of the AWS DMS replication instance up or down based on the amount of data toreplicate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision AWS DMS replication capacity by using Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type to analyze and replicate the data while provisioning the required capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 948 discussion",
      "discusstion": [
        {
          "id": 1268049,
          "date": "Sun 18 Aug 2024 14:16",
          "username": "[Removed]",
          "content": "B. Create an AWS DMS Serverless replication task to analyze and replicate the data while provisioning the required capacity.<br><br>Explanation:<br>AWS DMS Serverless is designed to automatically allocate and manage the necessary compute and memory resources based on the demand of the data replication workload. It scales capacity up or down according to the data replication requirements without manual intervention.<br>This approach ensures that the replication task uses only the required capacity at any given time, optimizing costs and resources, especially given that the amount of data to replicate varies throughout the day.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1260191,
          "date": "Sat 03 Aug 2024 11:06",
          "username": "JunsK1e",
          "content": "Correct answer is B since the question need to allocate only the capacity that the replication instance requires",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331486,
          "date": "Wed 25 Dec 2024 10:50",
          "username": "EllenLiu",
          "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Serverless.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264058,
          "date": "Sun 11 Aug 2024 13:25",
          "username": "pujithacg8",
          "content": "correct answer could be \\\"B\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1260204,
          "date": "Sat 03 Aug 2024 11:41",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#949",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a multi-tier web application. The application's internal service components are deployed on Amazon EC2 instances. The internal service components need to access third-party software as a service (SaaS) APIs that are hosted on AWS.<br><br>The company needs to provide secure and private connectivity from the application's internal services to the third-party SaaS application. The company needs to ensure that there is minimal public internet exposure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#949",
          "answers": [
            {
              "choice": "<p>Implement an AWS Site-to-Site VPN to establish a secure connection with the third-party SaaS provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Transit Gateway to manage and route traffic between the application's VPC and the third-party SaaS provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS PrivateLink to allow only outbound traffic from the VPC without enabling the third-party SaaS provider to establish.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS PrivateLink to create a private connection between the application's VPC and the third-party SaaS provider.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 949 discussion",
      "discusstion": [
        {
          "id": 1291350,
          "date": "Mon 30 Sep 2024 03:32",
          "username": "spoved",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/integrate-third-party-services/architecture-1.html<br>It is limited to only TCP traffic and unidirectional communication. The third-party workloads cannot initiate communication back to your account.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1285312,
          "date": "Tue 17 Sep 2024 17:04",
          "username": "56ce46c",
          "content": "I think C is corret<br>2. Restrict Inbound Traffic via Security Groups:<br>To prevent the third-party SaaS provider from establishing inbound connections to your VPC, use Security Groups attached to the VPC Endpoint Interface.<br><br>Outbound Traffic Allowed: Ensure that your security groups allow outbound traffic to the SaaS provider's IP ranges or endpoints.<br>Restrict Inbound Traffic: You should block all inbound traffic on the VPC Endpoint Interface by configuring the security group rules. For example:<br>Inbound Rules: Block all traffic (or leave it empty).<br>Outbound Rules: Allow outbound connections to the IP addresses or ports specified by the SaaS provider.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1260205,
          "date": "Sat 03 Aug 2024 11:42",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1260192,
          "date": "Sat 03 Aug 2024 11:07",
          "username": "JunsK1e",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#950",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to connect a company's corporate network to its VPC to allow on-premises access to its AWS resources. The solution must provide encryption of all traffic between the corporate network and the VPC at the network layer and the session layer. The solution also must provide security controls to prevent unrestricted access between AWS and the on-premises systems.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#950",
          "answers": [
            {
              "choice": "<p>Configure AWS Direct Connect to connect to the VPC. Configure the VPC route tables to allow and deny traffic between AWS and on premises as required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy to allow access to the AWS Management Console only from a defined set of corporate IP addresses. Restrict user access based on job responsibility by using an IAM policy and roles.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Site-to-Site VPN to connect to the VPConfigure route table entries to direct traffic from on premises to the VPConfigure instance security groups and network ACLs to allow only required traffic from on premises.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Transit Gateway to connect to the VPC. Configure route table entries to direct traffic from on premises to the VPC. Configure instance security groups and network ACLs to allow only required traffic from on premises.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 950 discussion",
      "discusstion": [
        {
          "id": 1263350,
          "date": "Sat 10 Aug 2024 09:01",
          "username": "Abbas_Abi_AWS",
          "content": "AWS Direct Connect does not provide encryption by itself; it is often used in conjunction with VPN for encrypted traffic. Direct Connect primarily offers a dedicated connection and does not inherently satisfy the encryption requirement.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332645,
          "date": "Fri 27 Dec 2024 23:01",
          "username": "Anyio",
          "content": "The correct answer is C. Configure AWS Site-to-Site VPN to connect to the VPC. Configure route table entries to direct traffic from on premises to the VPC. Configure instance security groups and network ACLs to allow only required traffic from on premises.<br><br>Explanation:<br><br>Option C: Correct. AWS Site-to-Site VPN offers encrypted network connections over the internet, providing encryption of all traffic at the network layer (IPsec) between the on-premises network and the VPC. Moreover, by using route tables, security groups, and network ACLs, you can carefully control the flow of traffic and restrict access, thereby meeting the requirement of preventing unrestricted access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1295134,
          "date": "Wed 09 Oct 2024 14:10",
          "username": "blehbleh",
          "content": "This is C, but not for all the reasons everyone is posting. D, also encrypts traffic and works at the network layer and also has security controls to prevent unrestricted access between AWS and on-premises systems.<br><br>So, if you thought D like I did initially you were very close. The reason it is C, is because C works at both the network and session layer while doing all the other requirements as well. Where as D only works at the network layer.<br><br>Happy studying!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1268051,
          "date": "Sun 18 Aug 2024 14:28",
          "username": "[Removed]",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260206,
          "date": "Sat 03 Aug 2024 11:42",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1260193,
          "date": "Sat 03 Aug 2024 11:10",
          "username": "JunsK1e",
          "content": "C is correct question needs to access between on prem and AWS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#951",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a custom application with embedded credentials that retrieves information from a database in an Amazon RDS for MySQL DB cluster. The company needs to make the application more secure with minimal programming effort. The company has created credentials on the RDS for MySQL database for the application user.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#951",
          "answers": [
            {
              "choice": "<p>Store the credentials in AWS Key Management Service (AWS KMS). Create keys in AWS KMS. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the credentials in encrypted local storage. Configure the application to load the database credentials from the local storage. Set up a credentials rotation schedule by creating a cron job.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule by creating an AWS Lambda function for Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule in the RDS for MySQL database by using Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 951 discussion",
      "discusstion": [
        {
          "id": 1268054,
          "date": "Sun 18 Aug 2024 14:32",
          "username": "[Removed]",
          "content": "C<br>Explanation:<br>AWS Secrets Manager is designed specifically for managing and automatically rotating credentials, including database credentials, API keys, and other secrets. It provides a secure and centralized place to store credentials and allows applications to retrieve them securely without hardcoding them in the application.<br>Secrets Manager also offers built-in support for automatic rotation of credentials using Lambda functions, which reduces the manual effort needed for rotation and enhances security.<br>This approach requires minimal programming effort because the application only needs to be configured to retrieve the credentials from Secrets Manager instead of being embedded within the application code.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332644,
          "date": "Fri 27 Dec 2024 23:00",
          "username": "Anyio",
          "content": "The correct answer is C. Store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule by creating an AWS Lambda function for Secrets Manager.<br><br>Explanation:<br><br>Option C: Correct. AWS Secrets Manager is designed to securely store, manage, and retrieve database credentials. It supports automatic credentials rotation for Amazon RDS databases with minimal programming effort. Secrets Manager can automatically rotate the Amazon RDS database credentials using a built-in Lambda function, providing an integrated and secure solution for handling credentials.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1290742,
          "date": "Sat 28 Sep 2024 20:10",
          "username": "Omshanti",
          "content": "AWS Secret manager securely stores data base user id and passwords",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1260987,
          "date": "Mon 05 Aug 2024 10:47",
          "username": "komorebi",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#952",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing data and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data must be encrypted at rest and replicated to a different AWS Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#952",
          "answers": [
            {
              "choice": "<p>Create a new S3 bucket that uses server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon Athena to query the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new S3 bucket that uses server-side encryption with Amazon S3 managed keys (SSE-S3). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon RDS to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with Amazon S3 managed keys (SSE-S3). Use Amazon Athena to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure S3 Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 952 discussion",
      "discusstion": [
        {
          "id": 1332091,
          "date": "Thu 26 Dec 2024 20:21",
          "username": "Anyio",
          "content": "The correct answer is C.<br><br>Explanation:<br><br>Option A: Incorrect. Although using AWS KMS multi-Region keys (SSE-KMS) and Amazon Athena to query the data meet the security and SQL querying requirements, creating a new S3 bucket and handling data migration increases operational overhead unnecessarily if the data already exists.<br><br>Option C: Correct. Configuring Cross-Region Replication (CRR) on the existing S3 bucket makes efficient use of existing infrastructure and leverages server-side encryption with Amazon S3 managed keys (SSE-S3) to ensure data encryption at rest with lower operational complexity and costs compared to using KMS keys. Using Amazon Athena allows querying the data directly in S3, offering serverless and flexible SQL querying capabilities with minimal setup and operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320953,
          "date": "Mon 02 Dec 2024 14:06",
          "username": "JA2018",
          "content": "I will chose Option C for the following reasons:<br><br>#1: Least operational overhead: Choosing \\\"SSE-S3\\\" over \\\"SSE-KMS\\\" minimizes operational overhead as it automatically manages encryption keys within S3, eliminating the need for additional KMS key management.<br><br>#2: Existing S3 bucket: Reusing the existing bucket avoids the extra step of creating a new one and migrating data.<br><br>#3: Athena for querying: Athena is a serverless solution ideal for querying large datasets stored in S3, aligning with the requirement for a serverless architecture.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For Option A: While using KMS multi-region keys provides more control, it adds extra management complexity compared to SSE-S3.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320954,
          "date": "Mon 02 Dec 2024 14:07",
          "username": "JA2018",
          "content": "For Option A: While using KMS multi-region keys provides more control, it adds extra management complexity compared to SSE-S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1275299,
          "date": "Sat 31 Aug 2024 01:17",
          "username": "Abdullah2004",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1269710,
          "date": "Tue 20 Aug 2024 23:49",
          "username": "dhewa",
          "content": "A wins because it gives us encryption with AWS KMS multi-Region keys",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260207,
          "date": "Sat 03 Aug 2024 11:43",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260194,
          "date": "Sat 03 Aug 2024 11:13",
          "username": "JunsK1e",
          "content": "C is correct because it needs to replicate to different AWS region",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#953",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that has thousands of users. The application uses 8-10 user-uploaded images to generate AI images. Users can download the generated AI images once every 6 hours. The company also has a premium user option that gives users the ability to download the generated AI images anytime.<br><br>The company uses the user-uploaded images to run AI model training twice a year. The company needs a storage solution to store the images.<br><br>Which storage solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#953",
          "answers": [
            {
              "choice": "<p>Move uploaded images to Amazon S3 Glacier Deep Archive. Move premium user-generated AI images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Move uploaded images to Amazon S3 Glacier Deep Archive Move all generated AI images to S3 Glacier Flexible Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move premium user-generated AI images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move all generated AI images to S3 Glacier Flexible Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 953 discussion",
      "discusstion": [
        {
          "id": 1267805,
          "date": "Sat 17 Aug 2024 19:59",
          "username": "officedepotadmin",
          "content": "S3 One Zone-IA is a cost-effective storage option for images that are accessed infrequently but are still needed for AI model training twice a year. One Zone-IA stores data in a single Availability Zone, making it less expensive but still highly available within that zone. Premium users need frequent access to their AI-generated images so S3.Non-premium users access their AI-generated images less frequently (once every 6 hours) so S3 Standard-IA",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1269712,
          "date": "Tue 20 Aug 2024 23:58",
          "username": "dhewa",
          "content": "The company uses the user-uploaded images to run AI model training twice a year. So for this Deep Archive will be ncessary.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320961,
          "date": "Mon 02 Dec 2024 14:12",
          "username": "JA2018",
          "content": "But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319621,
          "date": "Fri 29 Nov 2024 09:31",
          "username": "Cpso",
          "content": "I choose A. But it not best answer. for standard-ia you get data immediately but pay for request which not make sense for requirement.The best fit ofnon-premium user is Glacier Fleixble standard(1-5hour)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320960,
          "date": "Mon 02 Dec 2024 14:12",
          "username": "JA2018",
          "content": "But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1297093,
          "date": "Sun 13 Oct 2024 21:39",
          "username": "Oghare",
          "content": "this isA<br>S3 Glacier Deep Archive is the most cost-effective storage for long-term infrequently accessed data, ideal for the user-uploaded images used twice a year for AI training.<br>S3 Standard for premium user-generated AI images ensures fast access, which is needed for frequent downloads.<br>S3 Standard-IA for non-premium user-generated AI images is cost-effective for less frequent access, as it charges lower for storage but slightly more for retrieval, which fits the 6-hour download frequency.<br>Not C because, although S3 One Zone-IA is a lower-cost option as well it provides less durability because it stores data in only one Availability Zone. While it is cost-effective, it increases the risk of data loss for critical AI training data.<br><br>B and D is out<br>S3 Glacier Flexible Retrieval for all generated AI images would likely introduce unacceptable retrieval delays for premium users, as they require immediate access to download images<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1320958,
          "date": "Mon 02 Dec 2024 14:12",
          "username": "JA2018",
          "content": "But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1295156,
          "date": "Wed 09 Oct 2024 14:50",
          "username": "blehbleh",
          "content": "This is A. We care about cost effectiveness. In regards to images being used twice a year \\\"For images accessed only twice a year, S3 Glacier Deep Archive would be the more cost-effective option compared to S3 One Zone Infrequent Access, as it is designed for extremely infrequent access and offers the lowest storage cost within AWS S3 storage classes; while S3 One Zone Infrequent Access is cheaper than standard Infrequent Access, it still might be slightly more expensive for data accessed as rarely as twice a year.\\\" In regards to premium users keep them standard. Non premium users can be in the infrequent since they have 6 hrs.<br><br>Cost Effective!<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320957,
          "date": "Mon 02 Dec 2024 14:12",
          "username": "JA2018",
          "content": "But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1292772,
          "date": "Thu 03 Oct 2024 13:50",
          "username": "kbgsgsgs",
          "content": "S3 Glacier Deep Archive does not meet the 6-hour download requirement because it takes time to access data. User can download even if you are not a premium user<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it says \\\"Users can download the generated AI images once every 6 hours.\\\" The upload images are used for training only 2 times a year which meets the s3 glacier deep dive. The standard users are put in infrequent access and premium users are put in standard. I don't understand how people are messing this up.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1295558,
          "date": "Thu 10 Oct 2024 13:38",
          "username": "blehbleh",
          "content": "it says \\\"Users can download the generated AI images once every 6 hours.\\\" The upload images are used for training only 2 times a year which meets the s3 glacier deep dive. The standard users are put in infrequent access and premium users are put in standard. I don't understand how people are messing this up.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1268056,
          "date": "Sun 18 Aug 2024 14:44",
          "username": "[Removed]",
          "content": "B is correct<br><br>Explanation:<br>S3 Glacier Deep Archive is the most cost-effective storage option for data that is rarely accessed. Since the user-uploaded images are only used twice a year for AI model training, storing them in Glacier Deep Archive is ideal for minimizing costs. The longer retrieval time (up to 12 hours) is acceptable given the infrequent access.<br><br>S3 Glacier Flexible Retrieval is suitable for storing the generated AI images because it balances cost and retrieval time. Regular users can download images every 6 hours, which Glacier Flexible Retrieval can accommodate with its flexible retrieval options (ranging from minutes to hours). This solution also works for premium users, who might need more frequent access. While S3 Standard or Standard-IA could be used, Glacier Flexible Retrieval offers significant cost savings while still meeting the access requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B is using Glacier Flexible Retrieval.<br><br>Storing all generated AI images in Glacier Flexible Retrieval is also not cost-effective as the premium users require faster access to their images.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1320962,
          "date": "Mon 02 Dec 2024 14:13",
          "username": "JA2018",
          "content": "Option B is using Glacier Flexible Retrieval.<br><br>Storing all generated AI images in Glacier Flexible Retrieval is also not cost-effective as the premium users require faster access to their images.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1264080,
          "date": "Sun 11 Aug 2024 13:46",
          "username": "pujithacg8",
          "content": "A is correct as Glacier deep archive provides the lowest-cost storage class.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1320956,
          "date": "Mon 02 Dec 2024 14:12",
          "username": "JA2018",
          "content": "But moving uploaded images to Glacier Deep Archive is not ideal as it has a very high retrieval cost and long retrieval time, which is not suitable for the occasional access needed for AI model training.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#954",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing machine learning (ML) models on AWS. The company is developing the ML models as independent microservices. The microservices fetch approximately 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the ML models through an asynchronous API. Users can send a request or a batch of requests.<br><br>The company provides the ML models to hundreds of users. The usage patterns for the models are irregular. Some models are not used for days or weeks. Other models receive batches of thousands of requests at a time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#954",
          "answers": [
            {
              "choice": "<p>Direct the requests from the API to a Network Load Balancer (NLB). Deploy the ML models as AWS Lambda functions that the NLB will invoke. Use auto scaling to scale the Lambda functions based on the traffic that the NLB receives.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API to an Application Load Balancer (ALB). Deploy the ML models as Amazon Elastic Container Service (Amazon ECS) services that the ALB will invoke. Use auto scaling to scale the ECS cluster instances based on the traffic that the ALB receives.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the ML models as AWS Lambda functions that SQS events will invoke. Use auto scaling to increase the number of vCPUs for the Lambda functions based on the size of the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the ML models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Use auto scaling for Amazon ECS to scale both the cluster capacity and number of the services based on the size of the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 954 discussion",
      "discusstion": [
        {
          "id": 1268057,
          "date": "Sun 18 Aug 2024 14:49",
          "username": "[Removed]",
          "content": "D is the answer:<br>SQS Queue: Directing API requests to SQS decouples the API from ML processing, efficiently handles high traffic, and ensures reliable request processing without overloading the ML models.<br><br>Amazon ECS Services: Running ML models on ECS provides effective management of containerized applications, ideal for handling ML workloads.<br><br>Auto Scaling: ECS auto scales based on SQS queue size, adjusting container and cluster capacity to match demand, ensuring efficient handling of varying workloads.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1327170,
          "date": "Mon 16 Dec 2024 06:42",
          "username": "RamanAgarwal",
          "content": "Since AWS Lambda supports 1GB of memory and can be scaled seamlessly, the ans should be C. Question says a lot of APIs are not used frequently so keeping them in ECS will result in higher costs. Also these are async operations means the response is not time bound hence we can wait for lambda to startup and scale up based on the size of the SQS queue.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1292774,
          "date": "Thu 03 Oct 2024 13:55",
          "username": "kbgsgsgs",
          "content": "Why should I use SQS in option D? Wouldn't ALB be enough?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's talking about accessing models through an asynchronous API, so decoupling is needed (SQS)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1312368,
          "date": "Fri 15 Nov 2024 03:11",
          "username": "Sergantus",
          "content": "It's talking about accessing models through an asynchronous API, so decoupling is needed (SQS)",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#955",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The application stores data in an Amazon Aurora MySQL DB cluster.<br><br>The company needs to create a disaster recovery (DR) solution. The acceptable recovery time for the DR solution is up to 30 minutes. The DR solution does not need to support customer usage when the primary infrastructure is healthy.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#955",
          "answers": [
            {
              "choice": "<p>Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group. Set the desired capacity and maximum capacity of the Auto Scaling group to a minimum value. Convert the Aurora MySQL DB cluster to an Aurora global database. Configure Amazon Route 53 for an active-passive failover with ALB endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Convert the Aurora MySQL DB cluster to an Aurora global database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR infrastructure in a second AWS Region with an ALB. Update the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora MySQL DB cluster in the second Region Restore the data from the backup.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Back up the infrastructure configuration by using AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to zero. Use Amazon Route 53 to configure active-passive failover. Convert the Aurora MySQL DB cluster to an Aurora global database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 955 discussion",
      "discusstion": [
        {
          "id": 1269825,
          "date": "Wed 21 Aug 2024 06:47",
          "username": "chwieobjom",
          "content": "RTO 30 minute, warm standby.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1291360,
          "date": "Mon 30 Sep 2024 04:41",
          "username": "spoved",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html<br>The DR solution does not need to support customer usage when the primary infrastructure is healthy. -> Pilot Light<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Backup and restore RTO is up to hours</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1299823,
          "date": "Sat 19 Oct 2024 00:48",
          "username": "jingen11",
          "content": "Backup and restore RTO is up to hours",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1332650,
          "date": "Fri 27 Dec 2024 23:14",
          "username": "Anyio",
          "content": "The correct answer is A.<br><br>Explanation:<br><br>Option A: Correct. This solution sets up disaster recovery infrastructure in a secondary region with minimal running costs by keeping the Auto Scaling group's desired and maximum capacity low. By converting the Aurora MySQL DB cluster to an Aurora global database, the company can provide rapid cross-region replication and promote the standby database to primary if needed, minimizing downtime. Configuring active-passive failover using Route 53 ensures the DR system is only activated when necessary, aligning with the requirement of not supporting customer usage when the primary infrastructure is healthy.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332623,
          "date": "Fri 27 Dec 2024 22:09",
          "username": "Liongeek",
          "content": "RTO 30 min has to be warm standby.<br>AWS Backup DOES NOT back up configuration, it backs up DATA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1331495,
          "date": "Wed 25 Dec 2024 11:09",
          "username": "EllenLiu",
          "content": "pilot light, set auto scaling group desired capacity to 0",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1323748,
          "date": "Sun 08 Dec 2024 20:55",
          "username": "Penjerla",
          "content": "Restoring Database from AWS back up could take from a few min to several hours. So not D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320968,
          "date": "Mon 02 Dec 2024 14:24",
          "username": "JA2018",
          "content": "I will choose Option A for the following options:<br><br>#1 - Active-passive failover: This aligns with the requirement of a DR solution that doesn't need to support customer usage during normal operations, meaning the secondary region only activates when a primary failure occurs.<br><br># 2 - Minimal Auto Scaling group capacity: Setting the desired and maximum capacity to a minimum value ensures minimal cost when the DR infrastructure is not actively used.<br><br># 3 - Aurora Global Database: Converting the Aurora cluster to a global database allows for fast failover to the secondary region, meeting the 30-minute recovery time objective.<br><br>#4 - Separate AWS Region: Deploying the DR infrastructure in a different region provides geographic redundancy, crucial for disaster recovery.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1308169,
          "date": "Wed 06 Nov 2024 22:48",
          "username": "Atdotcom",
          "content": "D is pilot-light because desired min capacity 0 so ressources are live , services idle, RTO 10s.Ressources are provisionned and scale after even.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1300080,
          "date": "Sat 19 Oct 2024 18:27",
          "username": "elmyth",
          "content": "It can be A, if minimum value0.<br>It Can be D, if this approach is implemented before the disaster.<br>And \\\"Set the Auto Scaling group desired capacity to zero\\\" means that it supposed to be done before the disaster.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#956",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its data processing application to the AWS Cloud. The application processes several short-lived batch jobs that cannot be disrupted. Data is generated after each batch job is completed. The data is accessed for 30 days and retained for 2 years.<br><br>The company wants to keep the cost of running the application in the AWS Cloud as low as possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#956",
          "answers": [
            {
              "choice": "<p>Migrate the data processing application to Amazon EC2 Spot Instances. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Instant. Retrieval after 30 days. Set an expiration to delete the data after 2 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the data processing application to Amazon EC2 On-Demand Instances. Store the data in Amazon S3 Glacier Instant Retrieval. Move the data to S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon EC2 Spot Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Flexible Retrieval after 30 days. Set an expiration to delete the data after 2 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 956 discussion",
      "discusstion": [
        {
          "id": 1263688,
          "date": "Sun 11 Aug 2024 03:06",
          "username": "nebajp",
          "content": "D is the correct answer<br>for 30 days - use Amazon S3 standard<br>2 years Retaining - Glacier Deep Archive<br>Can not be Disrupted - On-Demand Instances",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1332651,
          "date": "Fri 27 Dec 2024 23:16",
          "username": "Anyio",
          "content": "The correct answer is D. Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.<br><br>Explanation:<br><br>Option D: Correct. Since the batch jobs cannot be disrupted, using Amazon EC2 On-Demand Instances ensures the application runs without interruption. Initially storing data in Amazon S3 Standard allows for access during the 30-day period post-processing. Moving the data to Amazon S3 Glacier Deep Archive after 30 days optimizes storage costs for long-term retention of up to 2 years, the lowest cost for infrequent access. Setting an expiration ensures the data is deleted after 2 years, controlling costs and data lifecycle management.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331509,
          "date": "Wed 25 Dec 2024 11:26",
          "username": "EllenLiu",
          "content": "I am always confused about the choice between s3 standard and s3 glacier instant...<br>short period of storage + frequently retrieve > s3 standard<br>long period of storage + infrequently retrieve > s3 glacier instant<br>s3 standard: $0.023 per GB for storage / $0.0004 get, selectper 1000 request<br>s3 glacier instant: $0.004 per GB for storage /$0.01 get, selectper 1000 request<br>https://aws.amazon.com/s3/pricing/?ncsn&loc4",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1291401,
          "date": "Mon 30 Sep 2024 06:42",
          "username": "spoved",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-glacier-instant-retrieval-storage-class/<br>- The easiest way to store data in S3 Glacier Instant Retrieval is to use the S3 PUT API to upload data directly, or use S3 Lifecycle to transition data from the S3 Standard and S3 Standard-IA storage classes.<br>- The company wants to keep the cost of running the application in the AWS Cloud as low as possible<br>> B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1269529,
          "date": "Tue 20 Aug 2024 15:58",
          "username": "[Removed]",
          "content": "D looks right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264100,
          "date": "Sun 11 Aug 2024 13:59",
          "username": "pujithacg8",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1261788,
          "date": "Tue 06 Aug 2024 20:13",
          "username": "flaviobrf",
          "content": "I understand that D is the right anwser",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1261073,
          "date": "Mon 05 Aug 2024 15:00",
          "username": "siheom",
          "content": "I VOTE C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you voted wrong</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1267812,
          "date": "Sat 17 Aug 2024 20:25",
          "username": "officedepotadmin",
          "content": "you voted wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1260853,
          "date": "Mon 05 Aug 2024 02:30",
          "username": "SR0312",
          "content": "Job cannot be disrupted - On demand",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#957",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to design a hybrid network architecture. The company's workloads are currently stored in the AWS Cloud and in on-premises data centers. The workloads require single-digit latencies to communicate. The company uses an AWS Transit Gateway transit gateway to connect multiple VPCs.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#957",
          "answers": [
            {
              "choice": "<p>Establish an AWS Site-to-Site VPN connection to each VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Associate an AWS Direct Connect gateway with the transit gateway that is attached to the VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct Connect gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 957 discussion",
      "discusstion": [
        {
          "id": 1268170,
          "date": "Sun 18 Aug 2024 19:15",
          "username": "[Removed]",
          "content": "BD sounds right",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1333295,
          "date": "Sun 29 Dec 2024 03:57",
          "username": "MSAM16",
          "content": "BD is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1299827,
          "date": "Sat 19 Oct 2024 01:04",
          "username": "jingen11",
          "content": "Question asked about cheapest. D is not cheap<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Single-digit latency is required</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1312382,
          "date": "Fri 15 Nov 2024 03:32",
          "username": "Sergantus",
          "content": "Single-digit latency is required",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1265904,
          "date": "Wed 14 Aug 2024 19:58",
          "username": "muhammadahmer36",
          "content": "BD is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#958",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global ecommerce company runs its critical workloads on AWS. The workloads use an Amazon RDS for PostgreSQL DB instance that is configured for a Multi-AZ deployment.<br><br>Customers have reported application timeouts when the company undergoes database failovers. The company needs a resilient solution to reduce failover time.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#958",
          "answers": [
            {
              "choice": "<p>Create an Amazon RDS Proxy. Assign the proxy to the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica for the DB instance. Move the read traffic to the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Performance Insights. Monitor the CPU load to identify the timeouts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 958 discussion",
      "discusstion": [
        {
          "id": 1268225,
          "date": "Sun 18 Aug 2024 23:59",
          "username": "aragon_saa",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1268172,
          "date": "Sun 18 Aug 2024 19:29",
          "username": "[Removed]",
          "content": "A. Create an Amazon RDS Proxy. Assign the proxy to the DB instance.<br><br>Explanation:<br>Amazon RDS Proxy:<br><br>RDS Proxy is designed to manage connections to the database more efficiently. It can reduce the impact of failovers on the application by maintaining connections and transparently rerouting them to the standby instance during a failover event.<br>By using RDS Proxy, the failover time is reduced because the proxy minimizes the disruption that occurs when the database fails over, thus reducing application timeouts.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#959",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple Amazon RDS DB instances that run in a development AWS account. All the instances have tags to identify them as development resources. The company needs the development DB instances to run on a schedule only during business hours.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#959",
          "answers": [
            {
              "choice": "<p>Create an Amazon CloudWatch alarm to identify RDS instances that need to be stopped. Create an AWS Lambda function to start and stop the RDS instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Trusted Advisor report to identify RDS instances to be started and stopped. Create an AWS Lambda function to start and stop the RDS instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Systems Manager State Manager associations to start and stop the RDS instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge rule that invokes AWS Lambda functions to start and stop the RDS instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 959 discussion",
      "discusstion": [
        {
          "id": 1332630,
          "date": "Fri 27 Dec 2024 22:31",
          "username": "Liongeek",
          "content": "Setting State Manager with AWS managed Documents (StartEC2Instance, StopEC2Instance, StartRDSInstance and StopRDSInstance) it's easier and faster than creating your own Lambda functions and event bridge rules.<br><br>Letter C is the answ.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1312691,
          "date": "Fri 15 Nov 2024 16:31",
          "username": "bujuman",
          "content": "AWS Systems Manager State Manage has limitations regarding MSQL and the Db engine is not mentioned.<br>Check the this link to confirm D option : https://aws.amazon.com/blogs/database/save-costs-by-automating-the-start-and-stop-of-amazon-rds-instances-with-aws-lambda-and-amazon-eventbridge/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It should be c as requirement is least operational overhead. Creating 4 lambda functions, event bridge rule, deploying through cloud formation works but adds operational overhead</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320419,
          "date": "Sun 01 Dec 2024 03:26",
          "username": "ARV14",
          "content": "It should be c as requirement is least operational overhead. Creating 4 lambda functions, event bridge rule, deploying through cloud formation works but adds operational overhead",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1300781,
          "date": "Mon 21 Oct 2024 08:27",
          "username": "KaZimirovich",
          "content": "While AWS Systems Manager State Manager can be used to manage configuration states of AWS resources, it is generally more complex to set up for straightforward use cases like schedule-based starting and stopping of RDS instances compared to using a direct scheduling method through EventBridge.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1299830,
          "date": "Sat 19 Oct 2024 01:11",
          "username": "jingen11",
          "content": "Start, restart, or stop managed nodes and Amazon Relational Database Service (Amazon RDS) instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294490,
          "date": "Tue 08 Oct 2024 00:47",
          "username": "hharbiordun85",
          "content": "D. Amazon EventBridge allows you to create rules based on a schedule (using cron expressions) to automate tasks. You can set up rules to start the RDS instances at the beginning of business hours and stop them at the end of business hours.<br>By using AWS Lambda in conjunction with EventBridge, you can create functions that handle",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1291704,
          "date": "Tue 01 Oct 2024 02:35",
          "username": "siheom",
          "content": "VOTE D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1277324,
          "date": "Tue 03 Sep 2024 08:12",
          "username": "AbhiBK",
          "content": "To meet the requirement of running Amazon RDS DB instances only during business hours with the least operational overhead, the best solution would be:<br><br>D. Create an Amazon EventBridge rule that invokes AWS Lambda functions to start and stop the RDS instances. This approach allows you to automate the scheduling of start and stop actions using EventBridge rules, which can trigger Lambda functions based on a cron expression. This setup is straightforward and requires minimal ongoing management<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C, which involves using AWS Systems Manager State Manager to start and stop the RDS instances, is indeed a viable solution. It allows you to automate the process of keeping your RDS instances in a desired state, such as starting and stopping them on a schedule12.<br><br>However, the reason Option D (using Amazon EventBridge with AWS Lambda) might be preferred for this scenario is due to its simplicity and flexibility. EventBridge rules can be easily configured with cron expressions to trigger Lambda functions, which can start and stop the RDS instances. This setup typically involves fewer steps and less configuration compared to setting up State Manager associations and IAM roles3.<br><br>Both options are valid, but Option D generally offers a more straightforward approach with potentially lower operational overhead</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1277325,
          "date": "Tue 03 Sep 2024 08:14",
          "username": "AbhiBK",
          "content": "Option C, which involves using AWS Systems Manager State Manager to start and stop the RDS instances, is indeed a viable solution. It allows you to automate the process of keeping your RDS instances in a desired state, such as starting and stopping them on a schedule12.<br><br>However, the reason Option D (using Amazon EventBridge with AWS Lambda) might be preferred for this scenario is due to its simplicity and flexibility. EventBridge rules can be easily configured with cron expressions to trigger Lambda functions, which can start and stop the RDS instances. This setup typically involves fewer steps and less configuration compared to setting up State Manager associations and IAM roles3.<br><br>Both options are valid, but Option D generally offers a more straightforward approach with potentially lower operational overhead",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1269805,
          "date": "Wed 21 Aug 2024 05:16",
          "username": "dhewa",
          "content": "AWS Systems Manager State Manager allows you to automate the process of starting and stopping RDS instances based on a defined schedule.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1264147,
          "date": "Sun 11 Aug 2024 14:45",
          "username": "komorebi",
          "content": "Answer is D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1263704,
          "date": "Sun 11 Aug 2024 04:23",
          "username": "nebajp",
          "content": "Correct Answer us C - it allows you to define and automatically enforce desired configurations for EC2 and RDS.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#960",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A consumer survey company has gathered data for several years from a specific geographic region. The company stores this data in an Amazon S3 bucket in an AWS Region.<br><br>The company has started to share this data with a marketing firm in a new geographic region. The company has granted the firm's AWS account access to the S3 bucket. The company wants to minimize the data transfer costs when the marketing firm requests data from the S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#960",
          "answers": [
            {
              "choice": "<p>Configure the Requester Pays feature on the company's S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure S3 Cross-Region Replication (CRR) from the company's S3 bucket to one of the marketing firm's S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Resource Access Manager to share the S3 bucket with the marketing firm AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the company's S3 bucket to use S3 Intelligent-Tiering Sync the S3 bucket to one of the marketing firm's S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 960 discussion",
      "discusstion": [
        {
          "id": 1332143,
          "date": "Thu 26 Dec 2024 23:42",
          "username": "Anyio",
          "content": "The correct answer is B. Configure S3 Cross-Region Replication (CRR) from the company's S3 bucket to one of the marketing firm's S3 buckets.<br><br>Explanation:<br><br>Option A: Incorrect. The Requester Pays feature can help distribute the cost of data requests by billing the requestor, but it does not reduce the overall data transfer costs. It only shifts who pays for the data transfer, not the amount.<br><br>Option B: Correct. S3 Cross-Region Replication (CRR) replicates the data to a bucket in the marketing firm's region. This allows the marketing firm to access the data from a local region, minimizing cross-region data transfer charges each time data is accessed.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1320425,
          "date": "Sun 01 Dec 2024 03:44",
          "username": "ARV14",
          "content": "This is the same question as question 88. One difference is \\\"it's data transfer costs\\\" in question 88. Here it is \\\"minimize the data transfer costs\\\". A or B can be correct based on whether they are asking for reducing data transfer costs for survey company or both of them.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1319580,
          "date": "Fri 29 Nov 2024 07:44",
          "username": "AMEJack",
          "content": "Sorry that was for the next question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1295129,
          "date": "Wed 09 Oct 2024 13:57",
          "username": "martinadurcakova1",
          "content": "A. Configure the Requester Pays feature on the company's S3 bucket.<br><br>Explanation:<br><br>A. Configuring the Requester Pays feature on the company's S3 bucket is the most appropriate solution. With Requester Pays, the marketing firm's AWS account will be responsible for the data transfer costs when accessing the data in the S3 bucket, minimizing the data transfer costs for the consumer survey company.<br><br>B. Configuring S3 Cross-Region Replication (CRR) from the company's S3 bucket to one of the marketing firm's S3 buckets would not be the most cost-effective solution, as the company would still be responsible for the data transfer costs.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1288266,
          "date": "Mon 23 Sep 2024 20:02",
          "username": "MatAlves",
          "content": "The Requester Pays feature allows the bucket owner to offload the data transfer costs to the requester. When this feature is enabled, the marketing firm would pay for the data transfer when they access the data in the survey company's S3 bucket, which effectively minimizes costs for the survey company.<br><br>This means that the most cost-effective solution for the survey company, given that the marketing firm is accessing the data, is \\\"A\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1271963,
          "date": "Sun 25 Aug 2024 03:24",
          "username": "certifications_2024",
          "content": "Answer B seems to be more logic, the question didn't mention which account will pay<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>question ask for method to reduce cost in survey company, so A will do it</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1275700,
          "date": "Sat 31 Aug 2024 19:38",
          "username": "Abdullah2004",
          "content": "question ask for method to reduce cost in survey company, so A will do it",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1268181,
          "date": "Sun 18 Aug 2024 19:47",
          "username": "[Removed]",
          "content": "A sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1264575,
          "date": "Mon 12 Aug 2024 11:26",
          "username": "JunsK1e",
          "content": "Letter A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1264115,
          "date": "Sun 11 Aug 2024 14:15",
          "username": "pujithacg8",
          "content": "A is the correct answer<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#961",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS to host its public ecommerce website. The website uses an AWS Global Accelerator accelerator for traffic from the internet. The Global Accelerator accelerator forwards the traffic to an Application Load Balancer (ALB) that is the entry point for an Auto Scaling group.<br><br>The company recently identified a DDoS attack on the website. The company needs a solution to mitigate future attacks.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#961",
          "answers": [
            {
              "choice": "<p>Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by using rate-based rules<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a VPC network ACL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 961 discussion",
      "discusstion": [
        {
          "id": 1268771,
          "date": "Mon 19 Aug 2024 16:26",
          "username": "[Removed]",
          "content": "C as AWS WAF cannot be used directly on global accelerator<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it can be used, but to block HTTP/HTTPS requests.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1327561,
          "date": "Mon 16 Dec 2024 19:05",
          "username": "dragossky",
          "content": "it can be used, but to block HTTP/HTTPS requests.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1283692,
          "date": "Sat 14 Sep 2024 17:28",
          "username": "rpmaws",
          "content": "WAF can be applied on ALB, API gateway or cloud front.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1280230,
          "date": "Sun 08 Sep 2024 09:05",
          "username": "sOI852POL",
          "content": "Answer is C.<br>Note: AWS Global Accelerator itself doesn't support AWS WAF.<br><br>https://repost.aws/knowledge-center/globalaccelerator-aws-waf-filter-layer7-traffic",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1269676,
          "date": "Tue 20 Aug 2024 22:38",
          "username": "dhewa",
          "content": "Configuring the WAF directly on the Global Accelerator ensures that malicious traffic is blocked before it reaches the Application Load Balancer, providing an additional layer of protection.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1268137,
          "date": "Sun 18 Aug 2024 17:38",
          "username": "officedepotadmin",
          "content": "Global Accelerator can be integrated with AWS WAF to provide protection at the edge, meaning malicious traffic can be blocked before it reaches your Application Load Balancer (ALB) or other resources in your AWS environment.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1267733,
          "date": "Sat 17 Aug 2024 15:55",
          "username": "AWS_Debu",
          "content": "Answer is A<br><br>AWS Global Accelerator (GA) can be used with AWS Web Application Firewall (WAF) to protect applications from web exploits and DDoS attacks:<br>Block HTTP method and header attacks<br>GA, WAF, and the Application Load Balancer can block access to Layer 7 HTTP method and headers. WAF uses web access control list (web ACL) rules with the load balancer to evaluate incoming traffic and only forward requests that comply with the rules to the endpoint.<br>Detect and mitigate web application layer request floods<br>GA can protect web applications running on Application Load Balancer, and when used with WAF, it can also detect and mitigate web application layer request floods.<br>Prevent DDoS attacks",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1264149,
          "date": "Sun 11 Aug 2024 14:46",
          "username": "komorebi",
          "content": "Answer is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263712,
          "date": "Sun 11 Aug 2024 04:40",
          "username": "nebajp",
          "content": "Correct answer C.<br>Global Accelerator does not work with WAF as it is suitable for TCP/UDP where as WAF is integrates with Application Load Balancer which is on Layer 7 on OSI model, suitable for Web app (Http/Https)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#962",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon DynamoDB table to store data that the company receives from devices. The DynamoDB table supports a customer-facing website to display recent activity on customer devices. The company configured the table with provisioned throughput for writes and reads.<br><br>The company wants to calculate performance metrics for customer device data on a daily basis. The solution must have minimal effect on the table's provisioned read and write capacity.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#962",
          "answers": [
            {
              "choice": "<p>Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance metrics on a recurring schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a recurring schedule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Redshift COPY command to calculate performance metrics on a recurring schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics on a recurring schedule.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 962 discussion",
      "discusstion": [
        {
          "id": 1332660,
          "date": "Fri 27 Dec 2024 23:28",
          "username": "Anyio",
          "content": "The correct answer is B. Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a recurring schedule.<br><br>Explanation:<br><br>Option B: Correct. AWS Glue offers an efficient method to extract, transform, and load (ETL) data from DynamoDB to Amazon S3, without affecting the table's provisioned throughput as significantly. Once data is in S3, it can be further processed or queried using AWS Glue or other analytics services, without impacting DynamoDB's immediate R/W provisioning.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1322471,
          "date": "Thu 05 Dec 2024 18:52",
          "username": "rockyykrish",
          "content": "Explanation:<br>Amazon Athena with DynamoDB Connector:<br><br>Athena is a serverless interactive query service that allows you to run SQL queries directly on data in various storage systems, including DynamoDB, through the Athena DynamoDB connector.<br>This setup minimizes the impact on the provisioned read and write capacity of the DynamoDB table because the connector reads data efficiently without directly querying the table.<br>Performance Metrics Calculation:<br><br>Athena provides SQL capabilities to compute performance metrics on the data fetched via the DynamoDB connector.<br>The queries can be scheduled using Amazon EventBridge or other automation tools to run daily.<br>Minimal Operational Overhead:<br><br>Athena requires no infrastructure to manage, making it a low-maintenance solution.<br>It is cost-effective since you pay only for the queries you run.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1307264,
          "date": "Tue 05 Nov 2024 09:52",
          "username": "tonybuivannghia",
          "content": "I think A is correct. We can query the data from DynamoDB by Amazon Athena DynamoDB connector directly, not via S3 Bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/athena/latest/ug/connectors-dynamodb.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1307265,
          "date": "Tue 05 Nov 2024 09:52",
          "username": "tonybuivannghia",
          "content": "https://docs.aws.amazon.com/athena/latest/ug/connectors-dynamodb.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1291411,
          "date": "Mon 30 Sep 2024 07:27",
          "username": "spoved",
          "content": "https://aws.amazon.com/blogs/big-data/accelerate-amazon-dynamodb-data-access-in-aws-glue-jobs-using-the-new-aws-glue-dynamodb-elt-connector/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1289743,
          "date": "Fri 27 Sep 2024 01:07",
          "username": "JoeTromundo",
          "content": "The DynamoDB export connector allows you to export data from DynamoDB to other storage solutions like Amazon S3 without consuming the table's provisioned read capacity, ensuring minimal impact on the performance of the table.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1282934,
          "date": "Fri 13 Sep 2024 04:31",
          "username": "Bogey",
          "content": "B.<br>Instead, the new AWS Glue DynamoDB export connector reads DynamoDB data from the snapshot, which is exported from DynamoDB tables. This approach has following benefits:<br><br>It doesn't consume read capacity units of the source DynamoDB tables",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1281994,
          "date": "Wed 11 Sep 2024 08:34",
          "username": "toyaji",
          "content": "DynamoDB export connector literally \\\"exports\\\" table snapshot to s3 as dynamoDB-json object, then process on it. So it does not affect on read / write capacity on dynamoDB itself.<br>But Athena query directly on dynamoDB so affects on read / write capacity",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1277333,
          "date": "Tue 03 Sep 2024 08:39",
          "username": "AbhiBK",
          "content": "To calculate performance metrics for customer device data on a daily basis with minimal effect on the table's provisioned read and write capacity, the best solution would be:<br><br>A. Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance metrics on a recurring schedule. This approach allows you to run SQL queries directly on the data stored in DynamoDB without impacting the provisioned throughput, as Athena queries are serverless and do not consume DynamoDB read or write capacity1.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1273550,
          "date": "Tue 27 Aug 2024 18:01",
          "username": "RealPro111",
          "content": "The right answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1272319,
          "date": "Mon 26 Aug 2024 00:50",
          "username": "siheom",
          "content": "VOTE B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1270531,
          "date": "Thu 22 Aug 2024 08:15",
          "username": "ksdpmx",
          "content": "why is B wrong.. Glue DynamoDB export connector will read data from PITR instead of DynamoDB directly..",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1269678,
          "date": "Tue 20 Aug 2024 22:45",
          "username": "dhewa",
          "content": "I go with A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#963",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing the cloud architecture for a new stateless application that will be deployed on AWS. The solutions architect created an Amazon Machine Image (AMI) and launch template for the application.<br><br>Based on the number of jobs that need to be processed, the processing must run in parallel while adding and removing application Amazon EC2 instances as needed. The application must be loosely coupled. The job items must be durably stored.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#963",
          "answers": [
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on CPU usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on network usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of items in the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of messages published to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 963 discussion",
      "discusstion": [
        {
          "id": 1269679,
          "date": "Tue 20 Aug 2024 22:48",
          "username": "dhewa",
          "content": "Answer is C: SQS is your first cue then scaling based on the number of requests",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1269602,
          "date": "Tue 20 Aug 2024 18:40",
          "username": "[Removed]",
          "content": "\\\"Based on the number of jobs that need to be processed\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#964",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global ecommerce company uses a monolithic architecture. The company needs a solution to manage the increasing volume of product data. The solution must be scalable and have a modular service architecture. The company needs to maintain its structured database schemas. The company also needs a storage solution to store product data and product images.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#964",
          "answers": [
            {
              "choice": "<p>Use an Amazon EC2 instance in an Auto Scaling group to deploy a containerized application. Use an Application Load Balancer to distribute web traffic. Use an Amazon RDS DB instance to store product data and product images.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda functions to manage the existing monolithic application. Use Amazon DynamoDB to store product data and product images. Use Amazon Simple Notification Service (Amazon SNS) for event-driven communication between the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) with an Amazon EC2 deployment to deploy a containerized application. Use an Amazon Aurora cluster to store the product data. Use AWS Step Functions to manage workflows. Store the product images in Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate to deploy a containerized application. Use Amazon RDS with a Multi-AZ deployment to store the product data. Store the product images in an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 964 discussion",
      "discusstion": [
        {
          "id": 1335104,
          "date": "Wed 01 Jan 2025 04:00",
          "username": "trinh_le",
          "content": "Keyword scalable. So must use serverless like lambda or fargate (B or D)<br>Keyword modular > ECS > D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1295145,
          "date": "Wed 09 Oct 2024 14:33",
          "username": "martinadurcakova1",
          "content": "D is right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1269681,
          "date": "Tue 20 Aug 2024 22:52",
          "username": "dhewa",
          "content": "D gives us a server-less solution which is what we want.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1268780,
          "date": "Mon 19 Aug 2024 16:42",
          "username": "[Removed]",
          "content": "D sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#966",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to create an Amazon EMR cluster that multiple teams will use. The company wants to ensure that each team's big data workloads can access only the AWS services that each team needs to interact with. The company does not want the workloads to have access to Instance Metadata Service Version 2 (IMDSv2) on the cluster's underlying EC2 instances.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#966",
          "answers": [
            {
              "choice": "<p>Configure interface VPC endpoints for each AWS service that the teams need. Use the required interface VPC endpoints to submit the big data workloads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the runtime roles to submit the big data workloads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an EC2 IAM instance profile that has the required permissions for each team. Use the instance profile to submit the big data workloads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an EMR security configuration that has the EnableApplicationScopedIAMRole option set to false. Use the security configuration to submit the big data workloads.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 966 discussion",
      "discusstion": [
        {
          "id": 1331529,
          "date": "Wed 25 Dec 2024 12:34",
          "username": "EllenLiu",
          "content": "runtime role is used to resolve the issue that there is only union permissions for all jobs and queries we can use. just like it mentions, for ec2, IMDSv2 is mandatory, however we can use runtime role to access instance metadata on ec2 avoid using IMDSv2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1295147,
          "date": "Wed 09 Oct 2024 14:34",
          "username": "martinadurcakova1",
          "content": "B. Creating EMR runtime roles and configuring the cluster to use them is the correct solution. EMR runtime roles allow you to grant specific permissions to the big data workloads, ensuring that each team's workloads can only access the required AWS services. Additionally, the runtime roles can be configured to disable access to IMDSv2, meeting the requirement.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1269684,
          "date": "Tue 20 Aug 2024 23:01",
          "username": "dhewa",
          "content": "This approach avoids the need for workloads to access the Instance Metadata Service (IMDSv2) on the underlying EC2 instances, as the permissions are managed through the runtime roles.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1268784,
          "date": "Mon 19 Aug 2024 16:49",
          "username": "[Removed]",
          "content": "Explanation:<br>EMR Runtime Roles: By creating EMR runtime roles, you can assign specific IAM roles to individual EMR jobs or steps. Each role can have fine-grained permissions, allowing you to restrict access to only the AWS services each team needs. This provides a highly controlled environment where each team's workload operates under the principle of least privilege.<br><br>IMDSv2 Access: When using runtime roles, you do not rely on the EC2 instance profile for service access, thereby minimizing the need for the workloads to access the Instance Metadata Service. This can help in reducing the risk of unauthorized access to IMDSv2.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#968",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company uses an on-premises search application to collect streaming data from various producers. The application provides real-time updates to search and visualization features.<br><br>The company is planning to migrate to AWS and wants to use an AWS native solution.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#968",
          "answers": [
            {
              "choice": "<p>Use Amazon EC2 instances to ingest and process the data streams to Amazon S3 buckets tor storage. Use Amazon Athena to search the data. Use Amazon Managed Grafana to create visualizations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EMR to ingest and process the data streams to Amazon Redshift for storage. Use Amazon Redshift Spectrum to search the data. Use Amazon QuickSight to create visualizations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) to ingest and process the data streams to Amazon DynamoDB for storage. Use Amazon CloudWatch to create graphical dashboards to search and visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Data Streams to ingest and process the data streams to Amazon OpenSearch Service. Use OpenSearch Service to search the data. Use Amazon QuickSight to create visualizations.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 968 discussion",
      "discusstion": [
        {
          "id": 1260158,
          "date": "Sat 03 Aug 2024 08:01",
          "username": "Gbemi",
          "content": "Answer is D<br>using Amazon Kinesis Data Streams, Amazon OpenSearch Service, and Amazon QuickSight provides a comprehensive and AWS-native solution that meets the requirements of real-time data ingestion, search, and visualization",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1269687,
          "date": "Tue 20 Aug 2024 23:13",
          "username": "dhewa",
          "content": "Keyword \\\"streaming\\\" hence Amazon Kinesis Data Streams as it is designed for real-time data ingestion and processing, making it ideal for collecting streaming data from various producers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1268786,
          "date": "Mon 19 Aug 2024 16:56",
          "username": "[Removed]",
          "content": "D sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#969",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company currently runs an on-premises application that usesASP.NET on Linux machines. The application is resource-intensive and serves customers directly.<br><br>The company wants to modernize the application to .NET. The company wants to run the application on containers and to scale based on Amazon CloudWatch metrics. The company also wants to reduce the time spent on operational maintenance activities.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#969",
          "answers": [
            {
              "choice": "<p>Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 969 discussion",
      "discusstion": [
        {
          "id": 1289747,
          "date": "Fri 27 Sep 2024 01:33",
          "username": "JoeTromundo",
          "content": "Meets all requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1269701,
          "date": "Tue 20 Aug 2024 23:28",
          "username": "dhewa",
          "content": "A gives us a serverless solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1268788,
          "date": "Mon 19 Aug 2024 16:58",
          "username": "[Removed]",
          "content": "AWS App2Container: This service helps you easily containerize existing applications, such as your ASP.NET application, reducing the complexity of the containerization process.<br><br>Amazon ECS on AWS Fargate: Fargate is a serverless compute engine for containers that eliminates the need to manage the underlying EC2 instances, significantly reducing operational overhead. You only need to focus on your containerized application, while AWS handles the infrastructure.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#970",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new internal web application in the AWS Cloud. The new application must securely retrieve and store multiple employee usernames and passwords from an AWS managed service.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#970",
          "answers": [
            {
              "choice": "<p>Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve usernames and passwords from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 970 discussion",
      "discusstion": [
        {
          "id": 1291425,
          "date": "Mon 30 Sep 2024 08:30",
          "username": "spoved",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_BatchGetSecretValue.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1289751,
          "date": "Fri 27 Sep 2024 01:36",
          "username": "JoeTromundo",
          "content": "Option D is similar to option B, but option B unnecessarily introduces AWS Batch into the solution. AWS Batch is designed for executing batch jobs and is not required for the use case of retrieving secrets in a web application. This adds complexity and overhead without benefit.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1282806,
          "date": "Thu 12 Sep 2024 21:02",
          "username": "viejito",
          "content": "respuesta correcta D : La opci=C3=B3n D proporciona una soluci=C3=B3n adecuada y segura para gestionar y recuperar secretos, con un enfoque en la menor sobrecarga operativa posible al utilizar AWS Secrets Manager junto con la API correcta y la integraci=C3=B3n con AWS CloudFormation.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#971",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that is in the ap-northeast-1 Region has a fleet of thousands of AWS Outposts servers. The company has deployed the servers at remote locations around the world. All the servers regularly download new software versions that consist of 100 files. There is significant latency before all servers run the new software versions.<br><br>The company must reduce the deployment latency for new software versions.<br><br>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#971",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution in ap-northeast-1 that includes a CachingDisabled cache policy. Configure the S3 bucket as the origin. Download the software by using signed URLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket in ap-northeast-1. Create a second S3 bucket in the us-east-1 Region. Configure replication between the buckets. Set up an Amazon CloudFront distribution that uses ap-northeast-1 as the primary origin and us-east-1 as the secondary origin. Download the software by using signed URLs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket in ap-northeast-1. Configure Amazon S3 Transfer Acceleration. Download the software by using the S3 Transfer Acceleration endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution. Configure the S3 bucket as the origin. Download the software by using signed URLs.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 971 discussion",
      "discusstion": [
        {
          "id": 1287440,
          "date": "Sat 21 Sep 2024 21:07",
          "username": "ashishs174",
          "content": "Option C is correct.<br>Option D brings additional overhead in terms of setting up, so opted out.<br><br>Also from google :If you want to download software quickly from a large distance, you should generally use S3 Transfer Acceleration to download from your S3 bucket, as it leverages Amazon's global edge network to significantly speed up long-distance data transfers, making it ideal for large file downloads across continents; while CloudFront is better suited for delivering smaller content like website assets to users globally, where faster response times and caching are critical",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1289752,
          "date": "Fri 27 Sep 2024 01:43",
          "username": "JoeTromundo",
          "content": "By setting up a CloudFront distribution with the S3 bucket as the origin, the software versions can be cached at edge locations close to the remote AWS Outposts servers. This reduces the latency of downloading new software versions because the servers can access the content from the nearest CloudFront edge location instead of downloading it directly from the S3 bucket in the ap-northeast-1 Region.<br>About option C: S3 Transfer Acceleration optimizes the upload and download of files to S3 by routing through optimized network paths. However, it is primarily designed to improve performance when transferring data over long distances to S3 (uploads). It does not provide the same level of global caching and latency reduction as CloudFront for large-scale distribution.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331125,
          "date": "Tue 24 Dec 2024 14:25",
          "username": "deacon967",
          "content": "C : all other options use CloudFront. CloudFront is a CDN, not needed for software download.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1327181,
          "date": "Mon 16 Dec 2024 07:06",
          "username": "RamanAgarwal",
          "content": "Should use S3 Transfer acceleration to avoid CF setup overhead. It will help with improving download speed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1326327,
          "date": "Sat 14 Dec 2024 03:46",
          "username": "JA2018",
          "content": "What about A?<br><br>1. Minimized operational overhead:<br>This option provides the least operational overhead because it only requires setting up a single S3 bucket and a CloudFront distribution in the same region (ap-northeast-1), with a simple configuration to disable caching on the CloudFront distribution, ensuring fresh software updates are always delivered to Outposts servers.<br><br>2. Reduced latency:<br>By using a CloudFront distribution with a CachingDisabled policy, the software updates will be delivered from the closest edge location to each Outpost server, significantly reducing latency due to geographical proximity.<br><br>3. Signed URLs for security:<br>Using signed URLs ensures that only authorized users can access the software updates, enhancing security.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1269021,
          "date": "Tue 20 Aug 2024 05:08",
          "username": "dhewa",
          "content": "This approach leverages the global presence of CloudFront to minimize latency and simplifies the deployment process, reducing operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1268793,
          "date": "Mon 19 Aug 2024 17:11",
          "username": "[Removed]",
          "content": "S3 Transfer Acceleration speeds up uploads and downloads to S3 over long distances but does not provide the global caching benefits that CloudFront offers. CloudFront is more suitable for reducing latency when distributing content globally.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264208,
          "date": "Sun 11 Aug 2024 17:34",
          "username": "nebajp",
          "content": "Correct answer is C<br>Because for new software version we do not use Cloudfront,",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1263237,
          "date": "Fri 09 Aug 2024 23:52",
          "username": "pelrock",
          "content": "The question asks for the solution with the least operational overhead. Option D has minimal setup and maintenance requirements, as CloudFront is a managed service that handles caching and distribution across the globe, reducing latency without requiring additional configurations or services.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#972",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company currently runs an on-premises stock trading application by using Microsoft Windows Server. The company wants to migrate the application to the AWS Cloud.<br><br>The company needs to design a highly available solution that provides low-latency access to block storage across multiple Availability Zones.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#972",
          "answers": [
            {
              "choice": "<p>Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon FSx for Windows File Server as shared storage between the two cluster nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3) volumes as storage attached to the EC2 instances. Set up application-level replication to sync data from one EBS volume in one Availability Zone to another EBS volume in the second Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use an Amazon FSx for NetApp ONTAP Multi-AZ file system to access the data by using Internet Small Computer Systems Interface (iSCSI) protocol.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS SSD (io2) volumes as storage attached to the EC2 instances. Set up Amazon EBS level replication to sync data from one io2 volume in one Availability Zone to another io2 volume in the second Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 972 discussion",
      "discusstion": [
        {
          "id": 1332144,
          "date": "Fri 27 Dec 2024 00:20",
          "username": "Anyio",
          "content": "The correct answer is C.<br><br>Explanation:<br><br>Option C: Correct. Amazon FSx for NetApp ONTAP provides a managed file storage solution that supports iSCSI protocol for block storage access, enabling low-latency, highly available access to shared storage across multiple Availability Zones. This solution requires less implementation effort because Amazon FSx manages the complex underlying multi-AZ configuration and data replication automatically.<br><br>Option A: Incorrect. While Amazon FSx for Windows File Server provides a managed shared storage solution, it is primarily used for SMB-based file shares rather than block storage needs like those typically demanded by stock trading applications. Also, it might introduce additional latency for block-level access.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331175,
          "date": "Tue 24 Dec 2024 17:08",
          "username": "EllenLiu",
          "content": "block storage > FSx for NetApp ONTAP not only provides iSCSI(for block) support, but also offers comprehensive protocol support including SMB and NFS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320450,
          "date": "Sun 01 Dec 2024 05:44",
          "username": "ARV14",
          "content": "Fsx windows file server does not provide block storage,also Ontap provides very low latency and provides various compatible storage including block",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1320381,
          "date": "Sat 30 Nov 2024 22:52",
          "username": "rosanna",
          "content": "block means EBS, and I've searched but I don't see Fsx supporting shared block storage, not that I know of, and thinking about if it did exist, I would cost more than a replica- both operationally and money wise. And mostly we don't need complex methods so I'd go for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319240,
          "date": "Thu 28 Nov 2024 14:02",
          "username": "ckhemani",
          "content": "Answer A. Although they are looking for Block storage which is EBS but EBS can't be shared across two availabilty zones<br>.<br>Multi-Attach feature: While you can use the \\\"Multi-Attach\\\" feature to attach a single EBS volume to multiple instances within the same Availability Zone, this does not allow sharing across different Availability Zones.<br><br>Configuring NETAPP is not least operational.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1300338,
          "date": "Sun 20 Oct 2024 10:06",
          "username": "Bwhizzy",
          "content": "Answer is A.<br>Amazon FSx for Windows File Server provides fully managed shared storage designed for Windows workloads. It offers seamless integration with Windows applications and supports Windows Server Failover Clustering (WSFC), making it the ideal choice for clustering applications.<br>High availability is provided as the cluster spans multiple Availability Zones, ensuring that the application continues to function in case of an AZ failure.<br>Low-latency access to shared block storage is achievable with FSx, and it reduces the complexity compared to setting up replication between multiple Amazon EBS volumes.<br>Least implementation effort: You don't need to manage block-level replication or create complex replication setups between AZs, as FSx for Windows File Server handles this automatically. It simplifies storage management and offers native Windows support.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1295132,
          "date": "Wed 09 Oct 2024 14:05",
          "username": "martinadurcakova1",
          "content": "Using Amazon FSx for Windows File Server would not be the best solution, as the company requires block storage, not file storage.<br>D. Deploying the application on EC2 instances and using Amazon EBS Provisioned IOPS SSD (io2) volumes with EBS-level replication is the solution with the least implementation effort for the following reasons:<br><br>EBS volumes provide the required block storage for the application.<br>Using EBS-level replication to sync data between Availability Zones is a built-in feature, requiring less implementation effort compared to setting up custom replication mechanisms.<br>Provisioned IOPS SSD (io2) volumes ensure the low-latency access to the block storage required by the application.<br>By using Amazon EBS Provisioned IOPS SSD (io2) volumes with EBS-level replication, the company can meet the requirements for high availability and low-latency access to block storage with the least implementation effort.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1291441,
          "date": "Mon 30 Sep 2024 08:58",
          "username": "spoved",
          "content": "block storage -> B or D<br>io1, io2 support EBS Multi-Attach -> D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1291168,
          "date": "Sun 29 Sep 2024 16:00",
          "username": "HappyG",
          "content": "Key word in the question is block storage which eliminates A as a possibility. FSx for NetApp ONTAP provides low-latency block storage, multi-AZ high availability, and requires the least implementation effort because it is a fully managed service with built-in replication and failover capabilities. This makes it the most suitable and cost-effective option for the company's needs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon FSx for NetApp ONTAP also provides shared block storage over the iSCSI and NVMe-over-TCP protocols. Seems to be a complete match there.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294393,
          "date": "Mon 07 Oct 2024 18:45",
          "username": "trongod05",
          "content": "Amazon FSx for NetApp ONTAP also provides shared block storage over the iSCSI and NVMe-over-TCP protocols. Seems to be a complete match there.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1289755,
          "date": "Fri 27 Sep 2024 01:53",
          "username": "JoeTromundo",
          "content": "For those who are choosing option other than A: what part of \\\"with the LEAST implementation effort\\\" do you not understand?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The part where it calls for block storage.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1291166,
          "date": "Sun 29 Sep 2024 15:59",
          "username": "HappyG",
          "content": "The part where it calls for block storage.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1287443,
          "date": "Sat 21 Sep 2024 21:25",
          "username": "ashishs174",
          "content": "Answer is B<br>EFS is not Block Storage, EBS is.( Thus, A and C are out)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1283735,
          "date": "Sat 14 Sep 2024 19:48",
          "username": "rpmaws",
          "content": "due to this line in question \\\"low-latency access to block storage\\\" C looks appropriate.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1281887,
          "date": "Wed 11 Sep 2024 05:37",
          "username": "toyaji",
          "content": "A - Windows cluster across two availability zones satisfies highly available condition and FSx satisfies storage access from multiple ec2 especially for Windows server.<br>B - \\\"Set up application-level replication to sync data\\\" not for LEAST effort condition<br>C, D - \\\"in standby mode\\\" need to be activated manually so its not highly available",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1277344,
          "date": "Tue 03 Sep 2024 09:05",
          "username": "elmyth",
          "content": "Block storage<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changed for C, bc application-level replication is more difficult to implement.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1277346,
          "date": "Tue 03 Sep 2024 09:11",
          "username": "elmyth",
          "content": "Changed for C, bc application-level replication is more difficult to implement.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1269024,
          "date": "Tue 20 Aug 2024 05:12",
          "username": "dhewa",
          "content": "WindowsFSX",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#973",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a web application with an internet-facing Application Load Balancer (ALB).<br><br>The company needs the ALB to receive HTTPS web traffic from the public internet. The ALB must send only HTTPS traffic to the web application servers hosted on the Amazon EC2 instances on port 443. The ALB must perform a health check of the web application servers over HTTPS on port 8443.<br><br>Which combination of configurations of the security group that is associated with the ALB will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#973",
          "answers": [
            {
              "choice": "<p>Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Allow all outbound traffic to 0.0.0.0/0 for port 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allow HTTPS outbound traffic to the web application instances for port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Allow HTTPS inbound traffic from the web application instances for port 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allow HTTPS outbound traffic to the web application instances for the health check on port 8443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Allow HTTPS inbound traffic from the web application instances for the health check on port 8443.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 973 discussion",
      "discusstion": [
        {
          "id": 1291469,
          "date": "Mon 30 Sep 2024 10:02",
          "username": "spoved",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-update-security-groups.html<br>The following rules are recommended for an internet-facing load balancer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1289762,
          "date": "Fri 27 Sep 2024 02:08",
          "username": "JoeTromundo",
          "content": "This question is poorly worded: assuming that, by default in security groups, all OUTBOUND connections are ALLOWE and all INBOUND connections are DENIED, options C and E would not even need to be configured. What would be needed is to create a security group for the EC2 instances allowing INBOUND connections from the ALB security group to the EC2 instances security group on ports 443 and 8443.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1269031,
          "date": "Tue 20 Aug 2024 05:24",
          "username": "dhewa",
          "content": "A. This allows the ALB to receive HTTPS traffic from the public internet.<br>C. This ensures that the ALB can send HTTPS traffic to the web application servers.<br>E. This allows the ALB to perform health checks on the web application servers over HTTPS on port 8443.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1269030,
          "date": "Tue 20 Aug 2024 05:23",
          "username": "dhewa",
          "content": "A. This allows the ALB to receive HTTPS traffic from the public internet.<br>C. This ensures that the ALB can send HTTPS traffic to the web application servers.<br>E. This allows the ALB to perform health checks on the web application servers over HTTPS on port 8443.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 1268963,
          "date": "Tue 20 Aug 2024 01:06",
          "username": "aragon_saa",
          "content": "Answer is ACE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1268803,
          "date": "Mon 19 Aug 2024 17:31",
          "username": "[Removed]",
          "content": "A. Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443.<br><br>This allows the ALB to receive HTTPS traffic from the public internet on port 443.<br>C. Allow HTTPS outbound traffic to the web application instances for port 443.<br><br>This allows the ALB to forward HTTPS traffic to the web application servers on port 443.<br>E. Allow HTTPS outbound traffic to the web application instances for the health check on port 8443.<br><br>This allows the ALB to perform health checks on the web application servers over HTTPS on port 8443.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#974",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on AWS. The application gives users the ability to upload photos and store the photos in an Amazon S3 bucket. The company wants to use Amazon CloudFront and a custom domain name to upload the photo files to the S3 bucket in the eu-west-1 Region.<br><br>Which solution will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#974",
          "answers": [
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the certificate in CloudFront.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Certificate Manager (ACM) to create a public certificate in eu-west-1. Use the certificate in CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon S3 to allow uploads from CloudFront. Configure S3 Transfer Acceleration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon S3 to allow uploads from CloudFront. Configure an Amazon S3 website endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 974 discussion",
      "discusstion": [
        {
          "id": 1289765,
          "date": "Fri 27 Sep 2024 02:13",
          "username": "JoeTromundo",
          "content": "Amazon CloudFront requires an SSL/TLS certificate to use HTTPS with a custom domain name. This certificate MUST be provisioned in the us-east-1 Region, regardless of where your content is hosted. This is because CloudFront only supports certificates in the us-east-1 Region for use with custom domain names.<br>Origin Access Control (OAC) is a feature that allows you to securely upload content to an S3 bucket using CloudFront. It provides fine-grained access control and ensures that only CloudFront can upload files to the S3 bucket, preventing direct access. Configuring S3 to allow uploads from CloudFront using OAC ensures that only CloudFront can interact with the S3 bucket, adding an extra layer of security.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1261662,
          "date": "Tue 06 Aug 2024 14:26",
          "username": "George1990",
          "content": "Correct is BD",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1289134,
          "date": "Wed 25 Sep 2024 20:37",
          "username": "TicDcNess",
          "content": "AWS Region for AWS Certificate Manager<br><br>To use a certificate in AWS Certificate Manager (ACM) to require HTTPS between viewers and CloudFront, make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1283894,
          "date": "Sun 15 Sep 2024 05:40",
          "username": "rpmaws",
          "content": "cloud front require all SSL certificate to be in us-east region regardless the origin location of the site server.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1269620,
          "date": "Tue 20 Aug 2024 19:33",
          "username": "[Removed]",
          "content": "AD looks correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1269034,
          "date": "Tue 20 Aug 2024 05:30",
          "username": "dhewa",
          "content": "A. Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the certificate in CloudFront: CloudFront requires the certificate to be in the us-east-1 Region for custom domain names.<br>D. Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC): This ensures secure uploads from CloudFront to the S3 bucket.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1268807,
          "date": "Mon 19 Aug 2024 17:37",
          "username": "[Removed]",
          "content": "A. Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the certificate in CloudFront.<br><br>CloudFront requires that the SSL/TLS certificate for the custom domain be created in the us-east-1 Region (N. Virginia). Even if your S3 bucket is in another region, the certificate must be in us-east-1 because CloudFront is a global service and this region is where CloudFront looks for certificates.<br>D. Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC).<br><br>Configuring S3 to allow uploads from CloudFront using Origin Access Control (OAC) ensures that only CloudFront can interact with your S3 bucket, improving security by preventing direct access to the bucket from the public internet.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1260208,
          "date": "Sat 03 Aug 2024 11:44",
          "username": "komorebi",
          "content": "Answer is AD",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1260200,
          "date": "Sat 03 Aug 2024 11:33",
          "username": "JunsK1e",
          "content": "BD correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#975",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather forecasting company collects temperature readings from various sensors on a continuous basis. An existing data ingestion process collects the readings and aggregates the readings into larger Apache Parquet files. Then the process encrypts the files by using client-side encryption with KMS managed keys (CSE-KMS). Finally, the process writes the files to an Amazon S3 bucket with separate prefixes for each calendar day.<br><br>The company wants to run occasional SQL queries on the data to take sample moving averages for a specific calendar day.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#975",
          "answers": [
            {
              "choice": "<p>Configure Amazon Athena to read the encrypted files. Run SQL queries on the data directly in Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 Select to run SQL queries on the data directly in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Redshift to read the encrypted files. Use Redshift Spectrum and Redshift query editor v2 to run SQL queries on the data directly in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EMR Serverless to read the encrypted files. Use Apache SparkSQL to run SQL queries on the data directly in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 975 discussion",
      "discusstion": [
        {
          "id": 1331537,
          "date": "Wed 25 Dec 2024 13:37",
          "username": "EllenLiu",
          "content": "it is a simple SQL just in S3, believe it is a use case of Athena which supports client-side decryption",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319886,
          "date": "Fri 29 Nov 2024 20:30",
          "username": "Cpso",
          "content": "Key: CSE-KMS<br><br>A,B,C not support decrypted by CSE-KMS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1295360,
          "date": "Thu 10 Oct 2024 03:51",
          "username": "Ronanh",
          "content": "A. Athena would be overkill and more expensive for simple queries on specific files.<br>C. Amazon Redshift with Redshift Spectrum would be significantly more complex and costly to set up and maintain for occasional queries.<br>D. EMR Serverless with Apache SparkSQL would also be more complex and likely more expensive for this use case.<br>S3 Select provides the right balance of functionality and cost-effectiveness for the described scenario, making it the most suitable choice<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 Select is deprecated, right answer is A, clue word is \\\"occasional\\\", otherwise it would be Redshift.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1303329,
          "date": "Sat 26 Oct 2024 18:21",
          "username": "elmyth",
          "content": "S3 Select is deprecated, right answer is A, clue word is \\\"occasional\\\", otherwise it would be Redshift.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1269035,
          "date": "Tue 20 Aug 2024 05:36",
          "username": "dhewa",
          "content": "A is my choice.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1268809,
          "date": "Mon 19 Aug 2024 17:42",
          "username": "[Removed]",
          "content": "A sounds right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1263226,
          "date": "Fri 09 Aug 2024 23:11",
          "username": "swati1508",
          "content": "Athena for sql",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#976",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a new application on AWS. The company will run the application on multiple Amazon EC2 instances across multiple Availability Zones within multiple AWS Regions. The application will be available through the internet. Users will access the application from around the world.<br><br>The company wants to ensure that each user who accesses the application is sent to the EC2 instances that are closest to the user's location.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#976",
          "answers": [
            {
              "choice": "<p>Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 976 discussion",
      "discusstion": [
        {
          "id": 1264245,
          "date": "Sun 11 Aug 2024 19:14",
          "username": "nebajp",
          "content": "Correct answer is A<br>Geo location is based on users location<br>GeoProximity is based on the AWS services used by users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The main purpose of geolocation policy is to enforce regional restrictions, provide language-specific content, or balance load across regional endpoints. It doesn't return 'closest'  records but only relevant (location) records.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1312719,
          "date": "Fri 15 Nov 2024 17:46",
          "username": "Sergantus",
          "content": "The main purpose of geolocation policy is to enforce regional restrictions, provide language-specific content, or balance load across regional endpoints. It doesn't return 'closest'  records but only relevant (location) records.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1269038,
          "date": "Tue 20 Aug 2024 05:44",
          "username": "dhewa",
          "content": "Keyword closest.<br><br>Amazon Route 53 Geoproximity Routing: This routing policy directs traffic based on the geographic location of your users and your resources, ensuring that users are routed to the closest EC2 instances.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331152,
          "date": "Tue 24 Dec 2024 15:34",
          "username": "deacon967",
          "content": "You can argue geolocation vs geoproximity all day but why would one use a NLB for an internet based app? The is the perfect use case for an ALB.<br>A is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1327008,
          "date": "Sun 15 Dec 2024 19:20",
          "username": "dragossky",
          "content": "Which AWS Route 53 routing policy should be used to route traffic based on users' location?<br>Geoproximity routing<br>Geoproximity routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1305592,
          "date": "Thu 31 Oct 2024 22:28",
          "username": "8621a7c",
          "content": "Go with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1299050,
          "date": "Thu 17 Oct 2024 05:07",
          "username": "b3b5fdd",
          "content": "Correct answer is B!",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1297689,
          "date": "Mon 14 Oct 2024 16:38",
          "username": "Bwhizzy",
          "content": "The answer is A. routing traffic to the user region. Also, it can't be B. It says using a Network Load Balancer. you can't use a network load balancer for internet traffic<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>TCP UDP traffic?</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1311157,
          "date": "Wed 13 Nov 2024 08:46",
          "username": "mk168898",
          "content": "TCP UDP traffic?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1293287,
          "date": "Sat 05 Oct 2024 01:16",
          "username": "kbgsgsgs",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1291163,
          "date": "Sun 29 Sep 2024 15:56",
          "username": "blehbleh",
          "content": "It is B:<br><br>Geolocation:<br>Primarily focuses on the user's location, allowing you to serve different content based on their geographic region.<br><br>Geoproximity:<br>Considers both the user's location and the location of your resources, dynamically choosing the closest option based on network latency.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1268811,
          "date": "Mon 19 Aug 2024 17:49",
          "username": "[Removed]",
          "content": "Geolocation Routing Policy - Routes traffic based on the geographic location of the users.<br>Geoproximity Routing Policy - Routes traffic based on the geographic proximity of the user to AWS resources.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1264305,
          "date": "Sun 11 Aug 2024 23:41",
          "username": "komorebi",
          "content": "Answer is B",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#977",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company plans to launch a new application on AWS to handle sensitive financial transactions. The company will deploy the application on Amazon EC2 instances. The company will use Amazon RDS for MySQL as the database. The company's security policies mandate that data must be encrypted at rest and in transit.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#977",
          "answers": [
            {
              "choice": "<p>Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure IPsec tunnels for encryption in transit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement third-party application-level data encryption before storing data in Amazon RDS for MySQL. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure a VPN connection to enable private connectivity to encrypt data in transit.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 977 discussion",
      "discusstion": [
        {
          "id": 1289768,
          "date": "Fri 27 Sep 2024 02:23",
          "username": "JoeTromundo",
          "content": "Amazon RDS for MySQL supports encryption at rest using AWS Key Management Service (KMS) managed keys. This encryption is easy to enable during the creation of the RDS instance and requires minimal configuration. AWS KMS provides a fully managed solution for managing encryption keys, and using KMS managed keys reduces operational overhead related to key management and rotation.<br>Encryption in transit ensures that data transmitted between the application and the RDS database is secure. AWS Certificate Manager (ACM) can be used to provide SSL/TLS certificates, which are required to encrypt data in transit. ACM simplifies the management of SSL/TLS certificates by handling certificate renewal and deployment, reducing operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1269039,
          "date": "Tue 20 Aug 2024 05:46",
          "username": "dhewa",
          "content": "A is my choice anyday.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1268863,
          "date": "Mon 19 Aug 2024 19:42",
          "username": "[Removed]",
          "content": "A is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#978",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its on-premises Oracle database to an Amazon RDS for Oracle database. The company needs to retain data for 90 days to meet regulatory requirements. The company must also be able to restore the database to a specific point in time for up to 14 days.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#978",
          "answers": [
            {
              "choice": "<p>Create Amazon RDS automated backups. Set the retention period to 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon RDS manual snapshot every day. Delete manual snapshots that are older than 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Amazon Aurora Clone feature for Oracle to create a point-in-time restore. Delete clones that are older than 90 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup plan that has a retention period of 90 days by using AWS Backup for Amazon RDS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 978 discussion",
      "discusstion": [
        {
          "id": 1264256,
          "date": "Sun 11 Aug 2024 20:04",
          "username": "nebajp",
          "content": "Correct Answer is D - Its fulfilling the requirement of point in time.<br>Automated Backup - Default retention period is 0-35 Days - so option A is wrong.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1291484,
          "date": "Mon 30 Sep 2024 10:34",
          "username": "spoved",
          "content": "https://aws.amazon.com/getting-started/hands-on/amazon-rds-backup-restore-using-aws-backup/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1289771,
          "date": "Fri 27 Sep 2024 02:27",
          "username": "JoeTromundo",
          "content": "A: Amazon RDS automated backups support a maximum retention period of 35 days. This option does not meet the requirement to retain backups for 90 days.<br>B: This approach requires manual snapshot management, including scheduling snapshots and deleting old ones. This increases operational overhead and is prone to human error.<br>C: This option is not applicable as Aurora Clone is a feature specific to Amazon Aurora and not available for Amazon RDS for Oracle. Additionally, it would require manual management of clones, increasing complexity.<br>D: AWS Backup supports point-in-time recovery for Amazon RDS, enabling you to restore the database to any specific point within the defined retention period, up to 35 days. For the requirement of 14 days, AWS Backup easily supports this capability.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1268864,
          "date": "Mon 19 Aug 2024 19:43",
          "username": "[Removed]",
          "content": "D is right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1264164,
          "date": "Sun 11 Aug 2024 15:04",
          "username": "pujithacg8",
          "content": "Answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#979",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new application that uses a relational database to store user data and application configurations. The company expects the application to have steady user growth. The company expects the database usage to be variable and read-heavy, with occasional writes.<br><br>The company wants to cost-optimize the database solution. The company wants to use an AWS managed database solution that will provide the necessary performance.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#979",
          "answers": [
            {
              "choice": "<p>Deploy the database on Amazon RDS. Use Provisioned IOPS SSD storage to ensure consistent performance for read and write operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the database on Amazon Aurora Serverless to automatically scale the database capacity based on actual usage to accommodate the workload.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the database on Amazon DynamoDB. Use on-demand capacity mode to automatically scale throughput to accommodate the workload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the database on Amazon RDS. Use magnetic storage and use read replicas to accommodate the workload.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 979 discussion",
      "discusstion": [
        {
          "id": 1319745,
          "date": "Fri 29 Nov 2024 15:01",
          "username": "AMEJack",
          "content": "Option D is out: Aurora data is stored in the cluster volume, which is a single, virtual volume that uses solid state drives (SSDs).<br>So option B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1269629,
          "date": "Tue 20 Aug 2024 19:54",
          "username": "[Removed]",
          "content": "B looks good",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1269042,
          "date": "Tue 20 Aug 2024 05:57",
          "username": "dhewa",
          "content": "B is my choice.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#980",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its application on several Amazon EC2 instances inside a VPC. The company creates a dedicated Amazon S3 bucket for each customer to store their relevant information in Amazon S3.<br><br>The company wants to ensure that the application running on EC2 instances can securely access only the S3 buckets that belong to the company's AWS account.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#980",
          "answers": [
            {
              "choice": "<p>Create a gateway endpoint for Amazon S3 that is attached to the VPC. Update the IAM instance profile policy to provide access to only the specific buckets that the application needs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a NAT gateway in a public subnet with a security group that allows access to only Amazon S3. Update the route tables to use the NAT Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance profile policy with a Deny action and the following condition key:<img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image12.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a NAT Gateway in a public subnet. Update route tables to use the NAT Gateway. Assign bucket policies for all buckets with a Deny action and the following condition key:<img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image13.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 980 discussion",
      "discusstion": [
        {
          "id": 1335090,
          "date": "Wed 01 Jan 2025 02:11",
          "username": "trinh_le",
          "content": "A. Allows option fits to minimum permission policy<br>C. Deny action is complexity and hard to debug",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1334290,
          "date": "Mon 30 Dec 2024 18:38",
          "username": "Denise123",
          "content": "The requirement in the question is to ensure that the EC2 instances can securely access only the S3 buckets that belong to (are owned by) the company's AWS account.<br><br>In that context, using the \\\"StringNotEquals\\\": {\\\"S3ResourceAccount\\\":[\\\"CompanyAWSAcctNumber\\\"]} condition key in the IAM instance profile policy is a valid approach.<br><br>This condition key restricts access to S3 buckets that are not owned by the specified AWS account number (the company's account). By setting a Deny with this condition, it effectively allows access only to the S3 buckets owned by the company's AWS account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1334285,
          "date": "Mon 30 Dec 2024 18:33",
          "username": "Denise123",
          "content": "By choosing Option A, the company can leverage the simplicity and security of VPC Gateway Endpoints for Amazon S3, combined with IAM instance profile policies to grant selective access to the required S3 buckets. This solution provides the necessary isolation and access control with minimal operational overhead, making it the most efficient and scalable approach.<br>Option C and other options have limitations or introduce additional operational overhead Option C (Creating a Gateway Endpoint and using a Deny policy with S3ResourceAccount condition) is not a valid approach. The S3ResourceAccount condition key is used to restrict access based on the AWS account that owns the S3 bucket, not the AWS account that is accessing the bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ignore. After re-reading the question carefully, Option C is actually a valid solution.<br>The right answer is C and I wrote exactly that in my answer myself lol.In the question it says \\\"BELONGS TO\\\" (which I failed to read correctly)<br><br>The requirement in the question is to ensure that the EC2 instances can securely access only the S3 buckets that belong to (are owned by) the company's AWS account.<br><br>In that context, using the \\\"StringNotEquals\\\": {\\\"S3ResourceAccount\\\":[\\\"CompanyAWSAcctNumber\\\"]} condition key in the IAM instance profile policy is a valid approach.<br><br>This condition key restricts access to S3 buckets that are not owned by the specified AWS account number (the company's account). By setting a Deny with this condition, it effectively allows access only to the S3 buckets owned by the company's AWS account.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1334289,
          "date": "Mon 30 Dec 2024 18:38",
          "username": "Denise123",
          "content": "Ignore. After re-reading the question carefully, Option C is actually a valid solution.<br>The right answer is C and I wrote exactly that in my answer myself lol.In the question it says \\\"BELONGS TO\\\" (which I failed to read correctly)<br><br>The requirement in the question is to ensure that the EC2 instances can securely access only the S3 buckets that belong to (are owned by) the company's AWS account.<br><br>In that context, using the \\\"StringNotEquals\\\": {\\\"S3ResourceAccount\\\":[\\\"CompanyAWSAcctNumber\\\"]} condition key in the IAM instance profile policy is a valid approach.<br><br>This condition key restricts access to S3 buckets that are not owned by the specified AWS account number (the company's account). By setting a Deny with this condition, it effectively allows access only to the S3 buckets owned by the company's AWS account.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1331570,
          "date": "Wed 25 Dec 2024 15:14",
          "username": "EllenLiu",
          "content": "answer C cannot restrict ec2 from accessing s3 from other accounts.<br>Only by providing access to specific buckets in IAM policy on EC2 are we able to achieve this.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319748,
          "date": "Fri 29 Nov 2024 15:06",
          "username": "AMEJack",
          "content": "Option C will deny the other S3 buckets but will not Allow access to the specified Buckets, thus we should have Allow rules.<br>Option A will allow the specified Buckets and implicit Deny the other buckets.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You will keep updating the policy with new s3 buckets as user base grows? Operational overhead?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320463,
          "date": "Sun 01 Dec 2024 06:51",
          "username": "ARV14",
          "content": "You will keep updating the policy with new s3 buckets as user base grows? Operational overhead?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319135,
          "date": "Thu 28 Nov 2024 10:13",
          "username": "youkarthik",
          "content": "A as per gen AIs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1297692,
          "date": "Mon 14 Oct 2024 16:47",
          "username": "Bwhizzy",
          "content": "Answer is C. Just specify only the company AWS account number, rather than listing all the Buckets",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1297079,
          "date": "Sun 13 Oct 2024 20:53",
          "username": "XXXXXlNN",
          "content": "Vote A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1291709,
          "date": "Tue 01 Oct 2024 02:43",
          "username": "siheom",
          "content": "VOTE A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1284873,
          "date": "Mon 16 Sep 2024 19:06",
          "username": "viejito",
          "content": "la respuesta correcta es la A :Los buckets son servicios globales.( o sea no est=C3=A1n en una VPC ni Subnet ), entonces no hace falta que est=C3=A9n en una subred publica o privada ; los Nat Gateway son para redes publicas o privadas .Entonces ah=C3=AD descarta B,C y D .Cuando quieres conectar un recurso de Global Service se usa Endpoint Gateway por eso la respuesta es A .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1281961,
          "date": "Wed 11 Sep 2024 07:13",
          "username": "toyaji",
          "content": "B, C is not secure way because NAT gateway is for internet-facing outbound.<br>A is not correct because company will create dedicated bucket for each customers it means number of buckets will increase dynamically. so you cant list all on profile.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#981",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a cloud-based application on AWS that will handle sensitive customer data. The application uses Amazon RDS for the database, Amazon S3 for object storage, and S3 Event Notifications that invoke AWS Lambda for serverless processing.<br><br>The company uses AWS IAM Identity Center to manage user credentials. The development, testing, and operations teams need secure access to Amazon RDS and Amazon S3 while ensuring the confidentiality of sensitive customer data. The solution must comply with the principle of least privilege.<br><br>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#981",
          "answers": [
            {
              "choice": "<p>Use IAM roles with least privilege to grant all the teams access. Assign IAM roles to each team with customized IAM policies defining specific permission for Amazon RDS and S3 object access based on team responsibilities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable IAM Identity Center with an Identity Center directory. Create and configure permission sets with granular access to Amazon RDS and Amazon S3. Assign all the teams to groups that have specific access with the permission sets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual IAM users for each member in all the teams with role-based permissions. Assign the IAM roles with predefined policies for RDS and S3 access to each user based on user needs. Implement IAM Access Analyzer for periodic credential evaluation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Organizations to create separate accounts for each team. Implement cross-account IAM roles with least privilege. Grant specific permission for RDS and S3 access based on team roles and responsibilities.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 981 discussion",
      "discusstion": [
        {
          "id": 1266722,
          "date": "Fri 16 Aug 2024 00:12",
          "username": "kevindu",
          "content": "Is there anyone who has recently passed the exam who can tell me approximately how many of the original questions are in the actual exam?",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1269019,
          "date": "Tue 20 Aug 2024 05:04",
          "username": "dhewa",
          "content": "IAM Identity Center: This service simplifies user management by centralizing credentials and access control.<br>Permission Sets: You can create granular permission sets that align with the principle of least privilege, ensuring that each team has only the access they need.<br>Group Assignments: By assigning teams to groups with specific permission sets, you streamline access management and reduce the complexity of individual user permissions.<br>This approach minimizes operational overhead while maintaining secure and compliant access to sensitive customer data",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1289778,
          "date": "Fri 27 Sep 2024 02:52",
          "username": "JoeTromundo",
          "content": "Option A is goo but not the best, which is option B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266773,
          "date": "Fri 16 Aug 2024 03:28",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#982",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon S3 bucket that contains sensitive data files. The company has an application that runs on virtual machines in an on-premises data center. The company currently uses AWS IAM Identity Center.<br><br>The application requires temporary access to files in the S3 bucket. The company wants to grant the application secure access to the files in the S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#982",
          "answers": [
            {
              "choice": "<p>Create an S3 bucket policy that permits access to the bucket from the public IP address range of the company's on-premises data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an IAM user that has access to the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user and policy that grants access to the bucket. Store the access key and secret key for the IAM user in AWS Secrets Manager. Configure the application to retrieve the access key and secret key at startup.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 982 discussion",
      "discusstion": [
        {
          "id": 1297768,
          "date": "Mon 14 Oct 2024 19:52",
          "username": "Bwhizzy",
          "content": "Answer is B.<br>AM Roles Anywhere allows on-premises servers and applications to obtain temporary AWS credentials and access AWS resources securely. This solution allows your on-premises virtual machines to use IAM roles without needing long-term credentials (like access keys). The virtual machines can assume roles and access the S3 bucket temporarily and securely.<br><br>Since the company is already using AWS IAM Identity Center, using IAM Roles Anywhere allows the company to leverage its existing Identity Center setup while following AWS best practices for security. This approach ensures the application can securely retrieve credentials without embedding static credentials into the application.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1292133,
          "date": "Wed 02 Oct 2024 00:29",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#983",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its core network services, including directory services and DNS, in its on-premises data center. The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and consistent access to these network services.<br><br>What should a solutions architect implement to meet these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#983",
          "answers": [
            {
              "choice": "<p>Create a DX connection in each new account. Route the network traffic to the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPN connection between each new account and the DX VPRoute the network traffic to the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on-premises servers.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 983 discussion",
      "discusstion": [
        {
          "id": 1292134,
          "date": "Wed 02 Oct 2024 00:29",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1326335,
          "date": "Sat 14 Dec 2024 04:34",
          "username": "JA2018",
          "content": "I will choose Option D for the following reasons:<br><br>#Least operational overhead:<br>- Using a Transit Gateway centralizes network management, eliminating the need to create separate DX connections or VPNs for each new account, significantly reducing operational overhead.<br><br>#Scalability:<br>- With a Transit Gateway, you can easily add new accounts to the network without modifying existing configurations, making it ideal for scenarios with frequent account creation.<br><br>#Cost-effective:<br>- While creating a dedicated DX connection for each account might seem quick, it can become expensive, especially when dealing with a large number of accounts.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#984",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its main public web application in one AWS Region across multiple Availability Zones. The application uses an Amazon EC2 Auto Scaling group and an Application Load Balancer (ALB).<br><br>A web development team needs a cost-optimized compute solution to improve the company's ability to serve dynamic content globally to millions of customers.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#984",
          "answers": [
            {
              "choice": "<p>Create an Amazon CloudFront distribution. Configure the existing ALB as the origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Route 53 to serve traffic to the ALB and EC2 instances based on the geographic location of each customer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket with public read access enabled. Migrate the web application to the S3 bucket. Configure the S3 bucket for website hosting.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Direct Connect to directly serve content from the web application to the location of each customer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 984 discussion",
      "discusstion": [
        {
          "id": 1293435,
          "date": "Sat 05 Oct 2024 12:19",
          "username": "aragon_saa",
          "content": "Answer is A",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320987,
          "date": "Mon 02 Dec 2024 15:47",
          "username": "JA2018",
          "content": "CloudFront:<br>is a content delivery network (CDN) service from AWS, designed to distribute content globally at high speeds by caching content in edge locations close to users. This is the most cost-effective way to serve dynamic content globally, which is exactly what the scenario requires.<br>ALB as the origin:<br>By setting the existing ALB as the origin for CloudFront, the CDN will fetch content from the web application running on the EC2 instances behind the ALB, effectively caching and delivering content from geographically closer locations to users",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1320077,
          "date": "Sat 30 Nov 2024 06:48",
          "username": "Cpso",
          "content": "'A. But I'm curious why the exam usually uses CloudFront for dynamic content. It doesn't seem reasonable.' ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1318287,
          "date": "Tue 26 Nov 2024 21:15",
          "username": "ttttttttttttttttttttttt",
          "content": "Cloudfrontglobal",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#985",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores user data in AWS. The data is used continuously with peak usage during business hours. Access patterns vary, with some data not being used for months at a time. A solutions architect must choose a cost-effective solution that maintains the highest level of durability while maintaining high availability.<br><br>Which storage solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#985",
          "answers": [
            {
              "choice": "<p>Amazon S3 Standard<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon S3 Intelligent-Tiering<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon S3 Glacier Deep Archive<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 985 discussion",
      "discusstion": [
        {
          "id": 1319754,
          "date": "Fri 29 Nov 2024 15:25",
          "username": "AMEJack",
          "content": "Vary then intelligent tier",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1301956,
          "date": "Wed 23 Oct 2024 10:22",
          "username": "Rayan999",
          "content": "B of course. finally i reached here",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1293239,
          "date": "Fri 04 Oct 2024 20:45",
          "username": "viejito",
          "content": "Respuesta correcta B . Los patrones de acceso var=C3=ADanNivel inteligente de Amazon S3 .",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#986",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is testing an application that runs on an Amazon EC2 Linux instance. A single 500 GB Amazon Elastic Block Store (Amazon EBS) General Purpose SSO (gp2) volume is attached to the EC2 instance.<br><br>The company will deploy the application on multiple EC2 instances in an Auto Scaling group. All instances require access to the data that is stored in the EBS volume. The company needs a highly available and resilient solution that does not introduce significant changes to the application's code.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#986",
          "answers": [
            {
              "choice": "<p>Provision an EC2 instance that uses NFS server software. Attach a single 500 GB gp2 EBS volume to the instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon FSx for Windows File Server file system. Configure the file system as an SMB file store within a single Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an EC2 instance with two 250 GB Provisioned IOPS SSD EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon Elastic File System (Amazon EFS) file system. Configure the file system to use General Purpose performance mode.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 986 discussion",
      "discusstion": [
        {
          "id": 1320988,
          "date": "Mon 02 Dec 2024 15:51",
          "username": "JA2018",
          "content": "3 reasons why I will choose Option D:<br><br>#1 - Highly Available and Scalable: EFS is a managed file system designed for high availability and can automatically scale to accommodate the needs of multiple EC2 instances in an Auto Scaling group, which perfectly aligns with the company's requirement.<br><br># 2 - No code changes: Since EFS is a network file system, the application doesn't need significant code changes to access the data stored on it, as it can mount the file system like a local disk.<br><br>#3 - General Purpose performance mode: This mode provides a balance between cost and performance, suitable for most application workloads.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1293434,
          "date": "Sat 05 Oct 2024 12:19",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1293433,
          "date": "Sat 05 Oct 2024 12:18",
          "username": "aragon_saa",
          "content": "Answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#987",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently launched a new application for its customers. The application runs on multiple Amazon EC2 instances across two Availability Zones. End users use TCP to communicate with the application.<br><br>The application must be highly available and must automatically scale as the number of users increases.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#987",
          "answers": [
            {
              "choice": "<p>Add a Network Load Balancer in front of the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group for the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Application Load Balancer in front of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Manually add more EC2 instances for the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a Gateway Load Balancer in front of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 987 discussion",
      "discusstion": [
        {
          "id": 1292096,
          "date": "Tue 01 Oct 2024 21:52",
          "username": "blehbleh",
          "content": "This is A and B. TCP best option is NLB. I know tons of you want to use chat GPT and it's going to tell you application load balancer, then ask chatgpt if an application load balancer really is the best option for TCP and it will be like \\\"aw dang dawg, its not, you're right\\\". Then it will switch to A and B. Because chatgpt doesn't know everything. It's a great tool but you still need to research because it doesn't have all the answers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are wrong! The question says, what will be the most cost effective way. ALB is much cheaper than the NLB. Thus, the best way to use NLB is when your application requires TCP and UDP connection. In this scenario, the users only communicate using TCP,which the ALB supports including variety of protocols such as, HTTP, HTTPS &amp; SSL.<br><br>Additionally, ALB's service uptime is up to 99.995%, which falls to the requirement of this question that application must be highly available... and that nullifies your logic!<br><br>Correct answer is C</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1302358,
          "date": "Thu 24 Oct 2024 09:59",
          "username": "classic_manda",
          "content": "You are wrong! The question says, what will be the most cost effective way. ALB is much cheaper than the NLB. Thus, the best way to use NLB is when your application requires TCP and UDP connection. In this scenario, the users only communicate using TCP,which the ALB supports including variety of protocols such as, HTTP, HTTPS & SSL.<br><br>Additionally, ALB's service uptime is up to 99.995%, which falls to the requirement of this question that application must be highly available... and that nullifies your logic!<br><br>Correct answer is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1327158,
          "date": "Mon 16 Dec 2024 05:22",
          "username": "Ghoneam",
          "content": "ALB for TCP",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1303596,
          "date": "Sun 27 Oct 2024 14:31",
          "username": "siheom",
          "content": "VOTE BC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1302359,
          "date": "Thu 24 Oct 2024 09:59",
          "username": "classic_manda",
          "content": "ALB is much cheaper than the NLB. Thus, the best way to use NLB is when your application requires TCP and UDP connection. In this scenario, the users only communicate using TCP, which the ALB supports including variety of protocols such as, HTTP, HTTPS & SSL. Additionally, ALB's service uptime is up to 99.995%, which falls to the requirement of this question that application must be highly available.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer is B and C</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1302360,
          "date": "Thu 24 Oct 2024 10:00",
          "username": "classic_manda",
          "content": "Answer is B and C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1292085,
          "date": "Tue 01 Oct 2024 21:20",
          "username": "1a0d459",
          "content": "TCP - NLB",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#988",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing the architecture for a new mobile app that uses the AWS Cloud. The company uses organizational units (OUs) in AWS Organizations to manage its accounts. The company wants to tag Amazon EC2 instances with data sensitivity by using values of sensitive and nonsensitive. IAM identities must not be able to delete a tag or create instances without a tag.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#988",
          "answers": [
            {
              "choice": "<p>In Organizations, create a new tag policy that specifies the data sensitivity tag key and the required values. Enforce the tag values for the EC2 instances. Attach the tag policy to the appropriate OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In Organizations, create a new service control policy (SCP) that specifies the data sensitivity tag key and the required tag values. Enforce the tag values for the EC2 instances. Attach the SCP to the appropriate OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a tag policy to deny running instances when a tag key is not specified. Create another tag policy that prevents identities from deleting tags. Attach the tag policies to the appropriate OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service control policy (SCP) to deny creating instances when a tag key is not specified. Create another SCP that prevents identities from deleting tags. Attach the SCPs to the appropriate OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the specified values. Configure an AWS Lambda function to delete the resource if a noncompliant resource is found.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 988 discussion",
      "discusstion": [
        {
          "id": 1302086,
          "date": "Wed 23 Oct 2024 17:06",
          "username": "Rayan999",
          "content": "Ofcourse A and D. B is little bit close to the answer but its not",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1300208,
          "date": "Sun 20 Oct 2024 01:18",
          "username": "jingen11",
          "content": "A: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html<br>D: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1294185,
          "date": "Mon 07 Oct 2024 11:43",
          "username": "viejito",
          "content": "Respuesta A D .",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#989",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs database workloads on AWS that are the backend for the company's customer portals. The company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL.<br><br>The company needs to implement a 30-day backup retention policy. The company currently has both automated RDS backups and manual RDS backups. The company wants to maintain both types of existing RDS backups that are less than 30 days old.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#989",
          "answers": [
            {
              "choice": "<p>Configure the RDS backup retention policy to 30 days for automated backups by using AWS Backup. Manually delete manual backups that are older than 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days. Configure the RDS backup retention policy to 30 days for automated backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the RDS backup retention policy to 30 days for automated backups. Manually delete manual backups that are older than 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days automatically by using AWS CloudFormation. Configure the RDS backup retention policy to 30 days for automated backups.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 989 discussion",
      "discusstion": [
        {
          "id": 1292098,
          "date": "Tue 01 Oct 2024 21:56",
          "username": "blehbleh",
          "content": "This is C, you are looking for the most cost effective solution. Again if any of you use ChatGPT it will say A because it makes the most sense for automation and less management. But it is not the most cost effective. AWS Backup costs extra money. So A, is not correct. It is C.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree!<br>Additionally we can configure RDS backup easily for a built-in 30 days retention, which meets the requirement and less cost than using AWS backup service</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1297044,
          "date": "Sun 13 Oct 2024 19:48",
          "username": "XXXXXlNN",
          "content": "Agree!<br>Additionally we can configure RDS backup easily for a built-in 30 days retention, which meets the requirement and less cost than using AWS backup service",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1291990,
          "date": "Tue 01 Oct 2024 16:12",
          "username": "jacinml",
          "content": "D makes more sense, since AWS CF will keep last 30 days from now on.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1291639,
          "date": "Mon 30 Sep 2024 20:13",
          "username": "viejito",
          "content": ".respuesta correcta A-D : Para cumplir con los requisitos de etiquetado de instancias de Amazon EC2 con sensibilidad de datos y garantizar que las identidades de IAM no puedan eliminar una etiqueta o crear instancias sin una etiqueta, la combinaci=C3=B3n de pasos m=C3=A1s adecuada es:<br><br>A. En Organizaciones, cree una nueva pol=C3=ADtica de etiqueta que especifique la clave de etiqueta de sensibilidad de datos y los valores requeridos. Aplica los valores de etiqueta para las instancias de EC2. Adjunte la pol=C3=ADtica de etiquetas a la OU apropiada.<br><br>D. Cree una pol=C3=ADtica de control de servicio (SCP) para denegar la creaci=C3=B3n de instancias cuando no se especifica una clave de etiqueta. Crea otro SCP que evite que las identidades eliminen las etiquetas. Adjunte los SCP a la OU apropiada.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#990",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate a legacy application to AWS. The application currently uses NFS to communicate to an on-premises storage solution to store application data. The application cannot be modified to use any other communication protocols other than NFS for this purpose.<br><br>Which storage solution should a solutions architect recommend for use after the migration?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#990",
          "answers": [
            {
              "choice": "<p>AWS DataSync<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic Block Store (Amazon EBS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic File System (Amazon EFS)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon EMR File System (Amazon EMRFS)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 990 discussion",
      "discusstion": [
        {
          "id": 1319325,
          "date": "Thu 28 Nov 2024 16:51",
          "username": "78b9037",
          "content": "Amazon EFS is the only one which provides a fully managed NFS file system",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1293431,
          "date": "Sat 05 Oct 2024 12:17",
          "username": "aragon_saa",
          "content": "Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#991",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region.<br><br>Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was lost with no way to replay the events. A solutions architect must prevent this problem from happening again and needs a solution with the least operational overhead.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#991",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket for processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda function to process each item concurrently.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the application to poll for new messages for processing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to query the table for new data for processing. Use TTL to remove data that has been processed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 991 discussion",
      "discusstion": [
        {
          "id": 1298387,
          "date": "Tue 15 Oct 2024 20:15",
          "username": "Bwhizzy",
          "content": "The correct Answer is C. Amazon SQS is a fully managed message queuing service that allows you to decouple and scale applications by buffering the incoming data. This would ensure that data is stored in a reliable, scalable queue until the web application is ready to process it.<br>SQS provides high availability and fault tolerance, and guarantees that no data will be lost, as the messages remain in the queue until they are processed.<br>The web application can poll the SQS queue for new messages and process them at its own pace, preventing the application from being overwhelmed by large volumes of tracker data.<br>Operational overhead is minimal because SQS is a fully managed service. The application only needs to poll the queue for messages, and there is no need to manage infrastructure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294869,
          "date": "Tue 08 Oct 2024 23:22",
          "username": "hharbiordun85",
          "content": "Answer: C<br>Amazon SQS provides a reliable and scalable way to decouple the components of the application. By using a queue, the incoming tracker data can be buffered, ensuring that if the web application is overwhelmed with data, the messages will still be retained in the queue until they can be processed.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#992",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS cluster will serve as a backend for a desktop client that is deployed on premises. The desktop client requires direct connectivity to the RDS cluster.<br><br>The company must give the development team the ability to connect to the cluster by using the client when the team is in the office.<br><br>Which solution provides the required connectivity MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#992",
          "answers": [
            {
              "choice": "<p>Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS security groups to allow the company's office IP ranges to access the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a cluster user for each developer. Use RDS security groups to allow the users to access the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 992 discussion",
      "discusstion": [
        {
          "id": 1298398,
          "date": "Tue 15 Oct 2024 20:37",
          "username": "Bwhizzy",
          "content": "The Correct Answer is B.<br>Explanation:<br>VPC and Private Subnets: By placing the RDS cluster in private subnets, you ensure that the RDS cluster is not publicly accessible from the internet. This significantly improves security as the database is only accessible through secure channels, not directly from the public internet.<br><br>AWS Site-to-Site VPN: Using a Site-to-Site VPN establishes a secure, encrypted connection between the on-premises office and the AWS environment. This provides secure access to the RDS cluster without exposing it to the internet, ensuring that the developers can only access the cluster when connected to the office network.<br><br>Customer Gateway: The customer gateway is configured in the company's office to handle the VPN connection, providing secure connectivity for the desktop client to the RDS cluster when the development team is in the office.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1295292,
          "date": "Wed 09 Oct 2024 23:32",
          "username": "blehbleh",
          "content": "This is B site to site von adds additional security. We are going for more secure.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1293324,
          "date": "Sat 05 Oct 2024 05:51",
          "username": "kbgsgsgs",
          "content": "The goal is to limit the team to only being in the office to be in the RDS cluster, so wouldn't checking IP ranges based on the office network rather than bringing up the internet be better suited to what you really need?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But if they are in private subnets, how do they connect? Can't over public internet. And there's no connection between their office and the VPC. Needs more info I think.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294415,
          "date": "Mon 07 Oct 2024 19:35",
          "username": "trongod05",
          "content": "But if they are in private subnets, how do they connect? Can't over public internet. And there's no connection between their office and the VPC. Needs more info I think.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#993",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating an application that will handle batch processing of large amounts of data. The input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing, the application will transfer the data over the network between multiple Amazon EC2 instances.<br><br>What should the solutions architect do to reduce the overall data transfer costs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#993",
          "answers": [
            {
              "choice": "<p>Place all the EC2 instances in an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Place all the EC2 instances in the same AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Place all the EC2 instances in the same Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Place all the EC2 instances in private subnets in multiple Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 993 discussion",
      "discusstion": [
        {
          "id": 1319280,
          "date": "Thu 28 Nov 2024 15:08",
          "username": "ckhemani",
          "content": "K. After research it seems C make sense since it is saying data transfer between EC2 and data transfter between two EC2 in AZ is free but not between AZ's.<br><br>No cost within AZ: Data transfer between EC2 instances in the same AZ is free.<br>Cross-AZ charges: If you transfer data between instances in different Availability Zones, you will be charged for the inter-zone data transfer.<br>Region-based pricing: While data transfer within an AZ is free, data transfer across different regions may also incur charges",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1319274,
          "date": "Thu 28 Nov 2024 15:04",
          "username": "ckhemani",
          "content": "S3 is repliacted only to 3 AZ's and you can't define AZ while creating the Bucket. If this Question would have said about Directory which is One Zone express where you can define the AZ then it makes sense to select option C.<br><br>Option B makes sense to configure EC2 in same region since EC2/S3 transferdata between same region is free too.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1318676,
          "date": "Wed 27 Nov 2024 14:24",
          "username": "78b9037",
          "content": "Two reasons:<br>1. EC2 instances in the same AZ can communicate with each other at no cost.<br>2. Data transfer between EC2 instances and S3 within the same AZ is free<br>https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1299970,
          "date": "Sat 19 Oct 2024 11:37",
          "username": "sOI852POL",
          "content": "C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294201,
          "date": "Mon 07 Oct 2024 12:26",
          "username": "viejito",
          "content": "Respuesta correcta C : ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1293429,
          "date": "Sat 05 Oct 2024 12:16",
          "username": "aragon_saa",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#994",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days.<br><br>What should a solutions architect do to meet this requirement with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#994",
          "answers": [
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 994 discussion",
      "discusstion": [
        {
          "id": 1294203,
          "date": "Mon 07 Oct 2024 12:31",
          "username": "viejito",
          "content": "respuesta correcta A . Credenciales , rotaci=C3=B3n autom=C3=A1tica AWS Secrets Manager .",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1293428,
          "date": "Sat 05 Oct 2024 12:16",
          "username": "aragon_saa",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#995",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A streaming media company is rebuilding its infrastructure to accommodate increasing demand for video content that users consume daily.<br><br>The company needs to process terabyte-sized videos to block some content in the videos. Video processing can take up to 20 minutes.<br><br>The company needs a solution that will scale with demand and remain cost-effective.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#995",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda functions to process videos. Store video metadata in Amazon DynamoDB. Store video content in Amazon S3 Intelligent-Tiering.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) and AWS Fargate to implement microservices to process videos. Store video metadata in Amazon Aurora. Store video content in Amazon S3 Intelligent-Tiering.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) to process videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue Service (Amazon SQS) for queuing and to decouple processing tasks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a containerized video processing application on Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2. Store video metadata in Amazon RDS in a single Availability Zone. Store video content in Amazon S3 Glacier Deep Archive.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 995 discussion",
      "discusstion": [
        {
          "id": 1293326,
          "date": "Sat 05 Oct 2024 05:59",
          "username": "kbgsgsgs",
          "content": "S3 Intelligent-Tiering is cost-effective for storing large amounts of video content, and since Lambda doesn't work, shouldn't we consider serverless?",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331827,
          "date": "Thu 26 Dec 2024 08:34",
          "username": "EllenLiu",
          "content": "it is a tough question.<br>terabyte-sized videos are difficult to process. we need to split the videos into chucks either with fargate or EC2.<br>seems DB is essential in this scenario as I have no idea how to get the videos out from s3 without metadata which should be stored into DB. So I prefer B. SQS is used for peak clipping during burst periods.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>this the whole work flow for a ideal solution:<br>1.Upload: Users upload videos to CloudFront with origin S3.<br>2.Trigger: S3 sends an event notification to SQS.<br>3.EC2 instances poll the SQS queue and download and process Video files from S3<br>4.The processed video is uploaded to another S3 bucket, metadata is saved into Aurora</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331831,
          "date": "Thu 26 Dec 2024 08:50",
          "username": "EllenLiu",
          "content": "this the whole work flow for a ideal solution:<br>1.Upload: Users upload videos to CloudFront with origin S3.<br>2.Trigger: S3 sends an event notification to SQS.<br>3.EC2 instances poll the SQS queue and download and process Video files from S3<br>4.The processed video is uploaded to another S3 bucket, metadata is saved into Aurora",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1318684,
          "date": "Wed 27 Nov 2024 14:40",
          "username": "78b9037",
          "content": "B and C are both possible but i decided for B because:<br>- Fargate provides serverless containers that scale automatically<br>- No infrastructure management is required<br>- Aurora provides high availability for metadata<br>- S3 Intelligent-Tiering optimizes storage costs automatically<br>- It is not tile limited like Lambda<br>On the other hand C requires more management overhead it is less cost-effective than containerized solutions, and need to manage EC2 instances manually",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1297067,
          "date": "Sun 13 Oct 2024 20:17",
          "username": "XXXXXlNN",
          "content": "This is a tough one I would say. I wish B and C can combine. but I vote for B.<br><br>For B, it is more cost efficiency focus rather than decoupling the whole process for improving overall reliability.<br>For C, the use of SQS is perferct solution for the downside of option B. But EC2 comes in picture which increases the cost and operational complexity.<br><br>How to pick then? lets go back to the question and see what it focuses -cost or operational compllexity and stability?It looks like it leans more on focusing scalibility and cost-efficiency. In that case, I would go for B because fargate provides cost-efficiency and store just metadata in DB and the rest data in S3 also provides a lower cost and improves its performance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Additionally, C also introduced ALB service in the picture, that increases the cost as well.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1297069,
          "date": "Sun 13 Oct 2024 20:26",
          "username": "XXXXXlNN",
          "content": "Additionally, C also introduced ALB service in the picture, that increases the cost as well.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1295291,
          "date": "Wed 09 Oct 2024 23:31",
          "username": "blehbleh",
          "content": "C makes the most sense out of the options and given requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294880,
          "date": "Tue 08 Oct 2024 23:53",
          "username": "hharbiordun85",
          "content": "Answer: C<br>The question did not mention the application need to be containerized , i will choose C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1292104,
          "date": "Tue 01 Oct 2024 22:16",
          "username": "blehbleh",
          "content": "I personally think C, I could be wrong.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#996",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an on-premises application on a Kubernetes cluster. The company recently added millions of new customers. The company's existing on-premises infrastructure is unable to handle the large number of new customers. The company needs to migrate the on-premises application to the AWS Cloud.<br><br>The company will migrate to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company does not want to manage the underlying compute infrastructure for the new architecture on AWS.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#996",
          "answers": [
            {
              "choice": "<p>Use a self-managed node to supply compute capacity. Deploy the application to the new EKS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use managed node groups to supply compute capacity. Deploy the application to the new EKS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Fargate to supply compute capacity. Create a Fargate profile. Use the Fargate profile to deploy the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use managed node groups with Karpenter to supply compute capacity. Deploy the application to the new EKS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 996 discussion",
      "discusstion": [
        {
          "id": 1304059,
          "date": "Mon 28 Oct 2024 18:07",
          "username": "elmyth",
          "content": "Fargate",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1303837,
          "date": "Mon 28 Oct 2024 07:27",
          "username": "Razvan_C",
          "content": "\\\"The company does not want to manage the underlying compute infrastructure for the new architecture on AWS\\\" > Serverless > Fargate",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1291662,
          "date": "Mon 30 Sep 2024 21:24",
          "username": "viejito",
          "content": "Respuesta correcta CAWS Fargatemenor sobrecarga operativa. A, B y D tienen gesti=C3=B3n de infraestructura.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1291661,
          "date": "Mon 30 Sep 2024 21:22",
          "username": "viejito",
          "content": "Respuesta correcta CAWS Fargatemenor sobrecarga operativa . A , B y C tienen gesti=C3=B3n de infraestructura .",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#997",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is launching a new application that requires a structured database to store user profiles, application settings, and transactional data. The database must be scalable with application traffic and must offer backups.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#997",
          "answers": [
            {
              "choice": "<p>Deploy a self-managed database on Amazon EC2 instances by using open source software. Use Spot Instances for cost optimization. Configure automated backups to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS. Use on-demand capacity mode for the database with General Purpose SSD storage. Configure automatic backups with a retention period of 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Aurora Serverless for the database. Use serverless capacity scaling. Configure automated backups to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a self-managed NoSQL database on Amazon EC2 instances. Use Reserved Instances for cost optimization. Configure automated backups directly to Amazon S3 Glacier Flexible Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 997 discussion",
      "discusstion": [
        {
          "id": 1293426,
          "date": "Sat 05 Oct 2024 12:15",
          "username": "aragon_saa",
          "content": "Answer is C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#998",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its legacy web application on AWS. The web application server runs on an Amazon EC2 instance in the public subnet of a VPC. The web application server collects images from customers and stores the image files in a locally attached Amazon Elastic Block Store (Amazon EBS) volume. The image files are uploaded every night to an Amazon S3 bucket for backup.<br><br>A solutions architect discovers that the image files are being uploaded to Amazon S3 through the public endpoint. The solutions architect needs to ensure that traffic to Amazon S3 does not use the public endpoint.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#998",
          "answers": [
            {
              "choice": "<p>Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the VPC. Configure the subnet route table to use the gateway VPC endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket through private IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the web application to upload by using the Amazon S3 access point.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2 instance and Amazon S3 to provide a dedicated network path.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 998 discussion",
      "discusstion": [
        {
          "id": 1326341,
          "date": "Sat 14 Dec 2024 05:21",
          "username": "JA2018",
          "content": "I will choose Option C for the following reasons:<br><br>Private access:<br>S3 access points allow you to create a private endpoint within your VPC that can be used to access the S3 bucket without going through the public endpoint.<br>Security best practice:<br>Using an S3 access point is considered a secure way to manage access to your S3 buckets from within your VPC.<br>Configuration simplicity:<br>You only need to configure the web application to use the S3 access point, making it a relatively straightforward implementation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1294227,
          "date": "Mon 07 Oct 2024 13:34",
          "username": "aragon_saa",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#999",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a prototype of an ecommerce website on AWS. The website consists of an Application Load Balancer, an Auto Scaling group of Amazon EC2 instances for web servers, and an Amazon RDS for MySQL DB instance that runs with the Single-AZ configuration.<br><br>The website is slow to respond during searches of the product catalog. The product catalog is a group of tables in the MySQL database that the company does not update frequently. A solutions architect has determined that the CPU utilization on the DB instance is high when product catalog searches occur.<br><br>What should the solutions architect recommend to improve the performance of the website during searches of the product catalog?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#999",
          "answers": [
            {
              "choice": "<p>Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load the product catalog tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy loading to populate the cache.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances when database response is slow.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle the product catalog queries that are sent to the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 999 discussion",
      "discusstion": [
        {
          "id": 1292137,
          "date": "Wed 02 Oct 2024 00:34",
          "username": "aragon_saa",
          "content": "Answer is B",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#1000",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company currently stores 5 TB of data in on-premises block storage systems. The company's current storage solution provides limited space for additional data. The company runs applications on premises that must be able to retrieve frequently accessed data with low latency. The company requires a cloud-based storage solution.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1000",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 File Gateway. Integrate S3 File Gateway with the on-premises applications to store and directly retrieve files by using the SMB file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Storage Gateway Volume Gateway with cached volumes as iSCSI targets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Storage Gateway Volume Gateway with stored volumes as iSCSI targets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Storage Gateway Tape Gateway. Integrate Tape Gateway with the on-premises applications to store virtual tapes in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 1000 discussion",
      "discusstion": [
        {
          "id": 1299941,
          "date": "Sat 19 Oct 2024 10:19",
          "username": "sOI852POL",
          "content": "Question says, \\\"Apps must be able to retrieve frequently accessed data with low latency\\\" so we go with cached volumes.<br>We'd have chosen the stored volumes if question was about low-latency access to the entire dataset.<br>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331841,
          "date": "Thu 26 Dec 2024 09:42",
          "username": "EllenLiu",
          "content": "choose store volume mode",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1298941,
          "date": "Wed 16 Oct 2024 22:33",
          "username": "8621a7c",
          "content": "Block storage use volume gateway, low latency use store volumes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1291668,
          "date": "Mon 30 Sep 2024 21:54",
          "username": "viejito",
          "content": "Respuesta correcta B . Baja latenciaElastic Cache . A , C y D no cumplen un acceso con baja latencia ( descartados ) .",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    }
  ]
}