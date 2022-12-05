var SAA_C03_Exam_101_200 = {
    "msg": "Quiz Questions",
    "data": [
        {
        "question_id": "#101",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.<br>What should the solutions architect do to enable Internet access for the private subnets?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#101",
            "answers": [
                {
                "choice": "<p>A.  Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#102",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.<br>Which combination of steps should a solutions architect take to automate this task? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#102",
            "answers": [
                {
                "choice": "<p>A.  Launch the EC2 instance into the same Availability Zone as the EFS file system.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Install an AWS DataSync agent in the on-premises data center.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Manually use an operating system copy command to push the data to the EC2 instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#103",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.<br>What should the solutions architect do to prevent AWS Glue from reprocessing old data?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#103",
            "answers": [
                {
                "choice": "<p>A.  Edit the job to use job bookmarks.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Edit the job to delete data after the data is processed.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Edit the job by setting the NumberOfWorkers field to 1.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use a FindMatches machine learning (ML) transform.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#104",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website.<br>Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#104",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Shield Advanced to stop the DDoS attack.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure Amazon GuardDuty to automatically block the attackers.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure the website to use Amazon CloudFront for both static and dynamic content.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#105",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.<br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#105",
            "answers": [
                {
                "choice": "<p>A.  Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#106",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.<br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#106",
            "answers": [
                {
                "choice": "<p>A.  Server-side encryption with customer-provided keys (SSE-C)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Server-side encryption with Amazon S3 managed keys (SSE-S3)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#107",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.<br>Which action meets these requirements for storing and retrieving location data?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#107",
            "answers": [
                {
                "choice": "<p>A.  Use Amazon Athena with Amazon S3.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon API Gateway with AWS Lambda.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon QuickSight with Amazon Redshift.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon API Gateway with Amazon Kinesis Data Analytics.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#108",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.<br>Which design should a solutions architect recommend?<br><br></p>",
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
                "choice": "<p>A.  Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#109",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10 delete the objects.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#109",
            "answers": [
                {
                "choice": "<p>A.  Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#110",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website.<br>The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads.<br>Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#110",
            "answers": [
                {
                "choice": "<p>A.  Configure the application to upload images to S3 Glacier.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure the web server to upload the original images to Amazon S3.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#111",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.<br>Which architecture offers the HIGHEST availability?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#111",
            "answers": [
                {
                "choice": "<p>A.  Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#112",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#112",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#113",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible.<br>The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#113",
            "answers": [
                {
                "choice": "<p>A.  Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#114",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata.<br>The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.<br>Which solution meats these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#114",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB. </p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#115",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access.<br>A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.<br>Which change to the network architecture should a solutions architect recommend to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#115",
            "answers": [
                {
                "choice": "<p>A.  Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Remove the internet gateway from the VPC.  Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#116",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants anew solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security.<br>Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#116",
            "answers": [
                {
                "choice": "<p>A.  Configure Amazon CloudFront in front of the website to use HTTPS functionality.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create and deploy an AWS Lambda function to manage and serve the website content.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#117",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.<br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
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
                "choice": "<p>A.  Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#118",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.<br>Which storage solution meets these requirements MOST cost-effectively?<br><br></p>",
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
                "choice": "<p>A.  Amazon Elastic Block Store (Amazon EBS)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Amazon Elastic File System (Amazon EFS)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Amazon OpenSearch Service (Amazon Elasticsearch Service)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon S3</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#119",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.<br>Which solution will meet these requirements with the LEAST amount of administrative effort?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#119",
            "answers": [
                {
                "choice": "<p>A.  Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Set up AWS Shield in bath Regions. Associate Regional web ACLs with an API stage.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#120",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.<br>Which solution can the company use to route traffic to all the EC2 instances?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#121",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.<br>What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#121",
            "answers": [
                {
                "choice": "<p>A.  Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore encrypted snapshot to an existing DB instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#122",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.<br>What should a solutions architect do to reduce the operational burden?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#122",
            "answers": [
                {
                "choice": "<p>A.  Use multi-factor authentication (MFA) to protect the encryption keys.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use AWS Key Management Service (AWS KMS) to protect the encryption keys.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#123",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination.<br>There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.<br>What should a solutions architect do to increase the application's performance?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#123",
            "answers": [
                {
                "choice": "<p>A.  Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#124",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.<br>What should the solutions architect recommend?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#124",
            "answers": [
                {
                "choice": "<p>A.  Implement EC2 Spot Instances.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Purchase EC2 Reserved Instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Implement EC2 On-Demand Instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Implement the processing on AWS Lambda.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#125",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available.<br>Which combination of configuration options will meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#125",
            "answers": [
                {
                "choice": "<p>A.  Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.D.  Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#126",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.<br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#127",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore.<br>Which set of services should a solutions architect recommend to meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#128",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#128",
            "answers": [
                {
                "choice": "<p>A.  Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#129",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure.<br>Which combination of actions should the solutions architect take to accomplish this? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#129",
            "answers": [
                {
                "choice": "<p>A.  Migrate the PostgreSQL database to Amazon Aurora.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Migrate the web application to be hosted on Amazon EC2 instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Set up an Amazon CloudFront distribution for the web application content.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Set up Amazon ElastiCache between the web application and the PostgreSQL database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#130",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application runs on Amazon EC2 instances across multiple Availability Zonas. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.<br>What should a solutions architect do to maintain the desired performance across all instances in the group?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#130",
            "answers": [
                {
                "choice": "<p>A.  Use a simple scaling policy to dynamically scale the Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use a target tracking policy to dynamically scale the Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use an AWS Lambda function ta update the desired Auto Scaling group capacity.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use scheduled scaling actions to scale up and scale down the Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#131",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#131",
            "answers": [
                {
                "choice": "<p>A.  Write individual policies for each S3 bucket to grant read permission for only CloudFront access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#132",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.<br>Which combination should a solutions architect recommend to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#132",
            "answers": [
                {
                "choice": "<p>A.  Amazon CloudFront and Amazon S3</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  AWS Lambda and Amazon DynamoDB</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Application Load Balancer with Amazon EC2 Auto Scaling</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon Route 53 with internal Application Load Balancers</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#133",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#133",
            "answers": [
                {
                "choice": "<p>A.  Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#134",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
                "choice": "<p>A.  Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#135",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC.<br>Which solution will mast these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#135",
            "answers": [
                {
                "choice": "<p>A.  Create a VPC peering connection between the company's VPC and the provider's VPC.  Update the route table to connect to the target service.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Ask the provider to create a virtual private gateway in its VPC.  Use AWS PrivateLink to connect to the target service.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target service.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#136",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database.<br>Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#136",
            "answers": [
                {
                "choice": "<p>A.  Create an ongoing replication task.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a database backup of the on-premises database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an AWS Database Migration Service (AWS DMS) replication server.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#137",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#137",
            "answers": [
                {
                "choice": "<p>A.  Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#138",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone.<br>The company needs to redesign its architecture to provide the highest availability with the least operational overhead.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#138",
            "answers": [
                {
                "choice": "<p>A.  Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#139",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket.<br>The reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.<br>What should a solutions architect do to meet these requirements with the LEAST operational overhead?<br><br></p>",
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
                "choice": "<p>A.  Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#140",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture.<br>The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year.<br>Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#140",
            "answers": [
                {
                "choice": "<p>A.  Use Spot Instances for the data ingestion layer</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use On-Demand Instances for the data ingestion layer</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Purchase a 1-year Compute Savings Plan for the front end and API layer.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Purchase 1-year All Upfront Reserved instances for the data ingestion layer.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#141",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.<br>How should a solutions architect design the application to ensure the LEAST amount of latency for all users?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#141",
            "answers": [
                {
                "choice": "<p>A.  Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB. </p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#142",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#142",
            "answers": [
                {
                "choice": "<p>A.  Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#143",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.<br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#144",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are spiking when monthly reports run.<br>What is the MOST cost-effective solution?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#144",
            "answers": [
                {
                "choice": "<p>A.  Migrate the monthly reporting to Amazon Redshift.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Migrate the monthly reporting to an Aurora Replica.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Migrate the Aurora database to a larger instance class.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Increase the Provisioned IOPS on the Aurora instance.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#145",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#145",
            "answers": [
                {
                "choice": "<p>A.  Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#146",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends.<br>The company wants to minimize its EC2 costs without affecting the availability of the application.<br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Use Spot Instances for the entire workload.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#147",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.<br>Which storage option meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#147",
            "answers": [
                {
                "choice": "<p>A.  Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#148",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a data ingestion workflow that includes the following components:<br>An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries<br>An AWS Lambda function that processes and stores the data<br>The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.<br>What should a solutions architect do to ensure that all notifications are eventually processed?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#148",
            "answers": [
                {
                "choice": "<p>A.  Configure the Lambda function for deployment across multiple Availability Zones.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#149",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.<br>How should a solutions architect accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#149",
            "answers": [
                {
                "choice": "<p>A.  Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#150",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.<br>What should the solutions architect do to meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create Amazon CloudWatch composite alarms where possible.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#151",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet.<br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#151",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#152",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#153",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.<br>Which action should the company take to meet these requirements MOST cost-effectively?<br><br></p>",
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
                "choice": "<p>A.  Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#154",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.<br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Use S3 Object Lock in governance mode with a legal hold of 1 year.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use S3 Object Lock in compliance mode with a retention period of 365 days.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#155",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#155",
            "answers": [
                {
                "choice": "<p>A.  Use AWS DataSync to connect the S3 buckets to the web application.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Deploy AWS Global Accelerator to connect the S3 buckets to the web application.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#156",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).<br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#156",
            "answers": [
                {
                "choice": "<p>A.  Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#157",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#157",
            "answers": [
                {
                "choice": "<p>A.  Take a manual snapshot of the DB cluster.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a lifecycle policy for the automated backups.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure automated backup retention for 5 years.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure an Amazon CloudWatch Logs export for the DB cluster.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use AWS Backup to take the backups and to keep the backups for 5 years.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#158",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.<br><br>Which service will improve the performance of both the real-time and on-demand streaming?<br><br></p>",
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
                "choice": "<p>A.  Amazon CloudFront</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  AWS Global Accelerator</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Amazon Route 53</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon S3 Transfer Acceleration</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#159",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.<br><br>Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#159",
            "answers": [
                {
                "choice": "<p>A.  Create a usage plan with an API key that is shared with genuine users only.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#160",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#160",
            "answers": [
                {
                "choice": "<p>A.  Amazon OpenSearch Service (Amazon Elasticsearch Service)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Amazon S3 Glacier</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Amazon S3 Standard</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon RDS for PostgreSQL</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#161",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#161",
            "answers": [
                {
                "choice": "<p>A.  Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#162",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.<br><br>The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.<br><br>Which combination of AWS services meets these requirements?<br><br></p>",
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
                "choice": "<p>A.  Amazon FSx for Lustre integrated with Amazon S3</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Amazon FSx for Windows File Server integrated with Amazon S3</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#163",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#163",
            "answers": [
                {
                "choice": "<p>A.  Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#164",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.<br><br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#164",
            "answers": [
                {
                "choice": "<p>A.  Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#165",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.<br><br>How should the solutions architect comply with these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#165",
            "answers": [
                {
                "choice": "<p>A.  Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#166",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.<br><br>Which action should the solutions architect take to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#166",
            "answers": [
                {
                "choice": "<p>A.  Generate presigned URLs for the files.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use cross-Region replication to all Regions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use the geoproximity feature of Amazon Route 53.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon CloudFront with the S3 bucket as its origin.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#167",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
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
                "choice": "<p>A.  Use Spot Instances exclusively to handle the maximum capacity required.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Reserved Instances exclusively to handle the maximum capacity required.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#168",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.<br><br>What should a solutions architect do to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#168",
            "answers": [
                {
                "choice": "<p>A.  Create an ACL to provide access to the services or actions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a security group to allow accounts and attach it to user groups.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create cross-account roles in each account to deny access to the services or actions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create a service control policy in the root organizational unit to deny access to the services or actions.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#169",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#169",
            "answers": [
                {
                "choice": "<p>A.  Add an Amazon Inspector agent to the ALB. </p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure Amazon Macie to prevent attacks.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Enable AWS Shield Advanced to prevent attacks.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure Amazon GuardDuty to monitor the ALB. </p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#170",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.<br><br>Which configuration will meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#170",
            "answers": [
                {
                "choice": "<p>A.  Configure the security group for the EC2 instances.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure the security group on the Application Load Balancer.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure AWS WAF on the Application Load Balancer in a VPC. </p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure the network ACL for the subnet that contains the EC2 instances.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#171",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.<br><br>What should the solutions architect do to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#171",
            "answers": [
                {
                "choice": "<p>A.  Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#172",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications.<br><br>Which action should the solutions architect take?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#172",
            "answers": [
                {
                "choice": "<p>A.  Configure a CloudFront signed URL.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure a CloudFront signed cookie.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure a CloudFront field-level encryption profile.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#173",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.<br><br>The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
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
                "choice": "<p>A.  Deploy an AWS Global Accelerator accelerator in front of the web servers.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Deploy an Amazon CloudFront web distribution in front of the S3 bucket.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Deploy an Amazon ElastiCache for Redis instance in front of the web servers.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#174",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.<br><br>Which architecture should the solutions architect choose that provides high availability?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#174",
            "answers": [
                {
                "choice": "<p>A.  Create an Auto Scaling group that uses three instances across each of two Regions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Modify the Auto Scaling group to use three instances across each of two Availability Zones.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Auto Scaling template that can be used to quickly create more instances in another Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#175",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.<br><br>A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#175",
            "answers": [
                {
                "choice": "<p>A.  Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#176",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.<br><br>What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?<br><br></p>",
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
                "choice": "<p>A.  Use a VPC endpoint for DynamoDB. </p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use a NAT gateway in a public subnet.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use a NAT instance in a private subnet.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use the internet gateway attached to the VPC. </p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#177",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.<br><br>What should a solutions architect recommend to meet this requirement?<br><br></p>",
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
                "choice": "<p>A.  Use Amazon ElastiCache for Redis.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon DynamoDB Accelerator (DAX).</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Replicate data by using DynamoDB global tables.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon ElastiCache for Memcached with Auto Discovery enabled.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#178",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#178",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#179",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#179",
            "answers": [
                {
                "choice": "<p>A.  Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#180",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.<br><br>Which combination of solutions provides the MOST protection? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#180",
            "answers": [
                {
                "choice": "<p>A.  Use AWS WAF to protect the NLB. </p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use AWS Shield Advanced with the NLB. </p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use AWS WAF to protect Amazon API Gateway.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon GuardDuty with AWS Shield Standard</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use AWS Shield Standard with Amazon API Gateway.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#181",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.<br><br>The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).<br><br>What should a solutions architect recommend for communication between the microservices?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#181",
            "answers": [
                {
                "choice": "<p>A.  Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#182",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#182",
            "answers": [
                {
                "choice": "<p>A.  Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#183",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#183",
            "answers": [
                {
                "choice": "<p>A.  Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#184",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.<br><br>A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#184",
            "answers": [
                {
                "choice": "<p>A.  Configure the Lambda function to run in the VPC with the appropriate security group.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#185",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.<br><br>How can a solutions architect ensure that the application has permission to access Amazon S3?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#185",
            "answers": [
                {
                "choice": "<p>A.  Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#186",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone:<br><br>What should a solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#186",
            "answers": [
                {
                "choice": "<p>A.  Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#187",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible.<br><br>Which solutions meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#187",
            "answers": [
                {
                "choice": "<p>A.  Create an Amazon RDS DB instance in Multi-AZ mode.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#188",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#188",
            "answers": [
                {
                "choice": "<p>A.  Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Launch Amazon EC2 instances in a private subnet in a VPC.  Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB.  Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#189",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year.<br><br>Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#189",
            "answers": [
                {
                "choice": "<p>A.  Store the documents in Amazon S3. Use S3 Object Lock in governance mode.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#190",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#191",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#191",
            "answers": [
                {
                "choice": "<p>A.  Create a read replica. Move reporting queries to the read replica.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Migrate the ordering application to Amazon DynamoDB with on-demand capacity.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Schedule the reporting queries for non-peak hours.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#192",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud.<br><br>A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#192",
            "answers": [
                {
                "choice": "<p>A.  Write the document information to an Amazon EC2 instance that runs a MySQL database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#193",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#193",
            "answers": [
                {
                "choice": "<p>A.  Add Amazon RDS read replicas.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon ElastiCache for Redis.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon Route 53 DNS caching</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon ElastiCache for Memcached.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#194",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#194",
            "answers": [
                {
                "choice": "<p>A.  Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#195",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#195",
            "answers": [
                {
                "choice": "<p>A.  Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#196",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#196",
            "answers": [
                {
                "choice": "<p>A.  Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#197",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available.<br><br>Which combination of actions should the company take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#197",
            "answers": [
                {
                "choice": "<p>A.  Refactor the application as serverless with AWS Lambda functions running .NET Core.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>E.  Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#198",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#198",
            "answers": [
                {
                "choice": "<p>A.  Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#199",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#199",
            "answers": [
                {
                "choice": "<p>A.  Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#200",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#200",
            "answers": [
                {
                "choice": "<p>A.  Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#201",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#202",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
                "choice": "<p>A.  Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#203",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database.<br><br>As the company expands, customers report that their meeting invitations are taking longer to arrive.<br><br>What should a solutions architect recommend to resolve this issue?<br><br></p>",
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
                "choice": "<p>A.  Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.</p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#204",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS.<br><br>The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#205",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents.<br><br>The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#206",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
            {
            "question_answer_id": 1,
            "question_id": "#206",
            "answers": [
                {
                "choice": "<p>A.  Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#207",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices.<br><br>The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests.<br><br>What should a solutions architect do to address this issue without impacting existing users?<br><br></p>",
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
                "choice": "<p>A.  Add throttling on the API Gateway with server-side throttling limits.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB. </p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Create a secondary index in DynamoDB for the table with the user requests.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. </p>",
                "correct": true,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#208",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket.<br><br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        },
        {
        "question_id": "#209",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed.<br><br>What should the solutions architect do to ensure that the architecture supports distributed session data management?<br><br></p>",
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
                "choice": "<p>A.  Use Amazon ElastiCache to manage and store session data.</p>",
                "correct": true,
                "feedback": ""
                },
                {
                "choice": "<p>B.  Use session affinity (sticky sessions) of the ALB to manage session data.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>C.  Use Session Manager from AWS Systems Manager to manage the session.</p>",
                "correct": false,
                "feedback": ""
                },
                {
                "choice": "<p>D.  Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.</p>",
                "correct": false,
                "feedback": ""
                }
            ]
            }
        ],
        "topic_name": ""
        }
    ]
}