var SAA_C03_Exam_001_100 = {
"msg": "Quiz Questions",
"data": [
    {
    "question_id": "#1",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.<br>The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#1",
        "answers": [
            {
            "choice": "<p>A.  Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#2",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.<br>What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#2",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon Athena directly with Amazon S3 to run the queries as needed.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#3",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#3",
        "answers": [
            {
            "choice": "<p>A.  Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#4",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.<br>Which solution will provide private network connectivity to Amazon S3?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#4",
        "answers": [
            {
            "choice": "<p>A.  Create a gateway VPC endpoint to the S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an instance profile on Amazon EC2 to allow S3 access.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon API Gateway API with a private link to access the S3 endpoint.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#5",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.<br>What should a solutions architect propose to ensure users see all of their documents at once?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#5",
        "answers": [
            {
            "choice": "<p>A.  Copy the data so both EBS volumes contain all the documents</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure the Application Load Balancer to direct a user to the server with the documents</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#6",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.<br>Which solution will meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#7",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#7",
        "answers": [
            {
            "choice": "<p>A.  Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB.  Configure the consumer applications to read from DynamoDB to process the messages.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#8",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.<br>How should a solutions architect design the architecture to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#8",
        "answers": [
            {
            "choice": "<p>A.  Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#9",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.<br>The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.<br>Which solution will meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon FSx for Windows File Server file system to extend the company's storage space.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#10",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#10",
        "answers": [
            {
            "choice": "<p>A.  Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use an API Gateway authorizer to block any requests while the application processes an order.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#11",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.<br>What should a solutions architect do to accomplish this goal?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#11",
        "answers": [
            {
            "choice": "<p>A.  Use AWS Secrets Manager. Turn on automatic rotation.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use AWS Systems Manager Parameter Store. Turn on automatic rotation.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#12",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#12",
        "answers": [
            {
            "choice": "<p>A.  Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#13",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#13",
        "answers": [
            {
            "choice": "<p>A.  Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB.  Use the RDS API to rotate the secrets.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#14",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.<br>The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#14",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon Redshift with a single node for leader and compute functionality.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon ElastiCache for Memcached with EC2 Spot Instances.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#15",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#15",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC. </p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC. </p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC. </p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#16",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#16",
        "answers": [
            {
            "choice": "<p>A.  Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#17",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.<br>What should the solutions architect do to meet this requirement?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#17",
        "answers": [
            {
            "choice": "<p>A.  Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#18",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.<br>A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: AB</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#18",
        "answers": [
            {
            "choice": "<p>A.  Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#19",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.<br>A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
            "choice": "<p>A.  Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy a Gateway Load Balancer in the inspection VPC.  Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#20",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.<br>A solutions architect needs to minimize the time that is required to clone the production data into the test environment.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#20",
        "answers": [
            {
            "choice": "<p>A.  Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#21",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#21",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB. </p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#22",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.<br>Which storage option meets these requirements?<br><br></p>",
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
            "choice": "<p>A.  S3 Standard</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  S3 Intelligent-Tiering</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  S3 Standard-Infrequent Access (S3 Standard-IA)</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  S3 One Zone-Infrequent Access (S3 One Zone-IA)</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#23",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.<br>Which storage solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
            "choice": "<p>A.  Configure S3 Intelligent-Tiering to automatically migrate objects.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#24",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.<br>How should the solutions architect generate the information with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#24",
        "answers": [
            {
            "choice": "<p>A.  Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#25",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.<br>During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.<br>Which solution will meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#26",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.<br>What should a solutions architect do to accomplish this goal?<br><br></p>",
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
            "choice": "<p>A.  Turn on AWS Config with the appropriate rules.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Turn on AWS Trusted Advisor with the appropriate checks.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Turn on Amazon Inspector with the appropriate assessment template.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#27",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.<br>Which solution will meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#28",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#28",
        "answers": [
            {
            "choice": "<p>A.  Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#29",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.<br>The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#29",
        "answers": [
            {
            "choice": "<p>A.  Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB.  Create an Amazon CloudFront distribution that uses the latency record as an origin.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB.  Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#30",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#30",
        "answers": [
            {
            "choice": "<p>A.  Stop the DB instance when tests are completed. Restart the DB instance when required.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#31",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.<br>What should a solutions architect do to accomplish this?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#31",
        "answers": [
            {
            "choice": "<p>A.  Use AWS Config rules to define and detect resources that are not properly tagged.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#32",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.<br>Which method is the MOST cost-effective for hosting the website?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#32",
        "answers": [
            {
            "choice": "<p>A.  Containerize the website and host it in AWS Fargate.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon S3 bucket and host the website there.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy a web server on an Amazon EC2 instance to host the website.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#33",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.<br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#33",
        "answers": [
            {
            "choice": "<p>A.  Store the transactions data into Amazon DynamoDB.  Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB.  Other applications can consume the transactions data off the Kinesis data stream.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB.  Other applications can consume transaction files stored in Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#34",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#34",
        "answers": [
            {
            "choice": "<p>A.  Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#35",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#35",
        "answers": [
            {
            "choice": "<p>A.  Enable Amazon GuardDuty on the account.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Enable Amazon Inspector on the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Enable AWS Shield and assign Amazon Route 53 to it.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Enable AWS Shield Advanced and assign the ELB to it.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#36",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#36",
        "answers": [
            {
            "choice": "<p>A.  Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#37",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#37",
        "answers": [
            {
            "choice": "<p>A.  Use the EC2 serial console to directly access the terminal interface of each instance for administration.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#38",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#38",
        "answers": [
            {
            "choice": "<p>A.  Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#39",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.<br>The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.<br>Which solution addresses this performance issue?<br><br></p>",
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
            "choice": "<p>A.  Change the storage type to Provisioned IOPS SSD. </p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Change the DB instance to a memory optimized instance class.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Change the DB instance to a burstable performance instance class.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#40",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.<br>The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#40",
        "answers": [
            {
            "choice": "<p>A.  Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#41",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#41",
        "answers": [
            {
            "choice": "<p>A.  Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#42",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges.<br>What is the MOST cost-effective way for the company to avoid Regional data transfer charges?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#42",
        "answers": [
            {
            "choice": "<p>A.  Launch the NAT gateway in each Availability Zone.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Replace the NAT gateway with a NAT instance.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy a gateway VPC endpoint for Amazon S3.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Provision an EC2 Dedicated Host to run the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#43",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#43",
        "answers": [
            {
            "choice": "<p>A.  Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#44",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: AB</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#44",
        "answers": [
            {
            "choice": "<p>A.  Enable versioning on the S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Enable MFA Delete on the S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a bucket policy on the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Enable default encryption on the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Create a lifecycle policy for the objects in the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#45",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a data ingestion workflow that consists of the following:<br>• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries<br>• An AWS Lambda function to process the data and record metadata<br>The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.<br>Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: BE</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#45",
        "answers": [
            {
            "choice": "<p>A.  Deploy the Lambda function in multiple Availability Zones.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Increase the CPU and memory that are allocated to the Lambda function.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Increase provisioned throughput for the Lambda function.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#46",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.<br>Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.<br>What should a solutions architect do to meet these requirements with the LEAST development effort?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#46",
        "answers": [
            {
            "choice": "<p>A.  Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#47",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.<br>What should the company do to guarantee the EC2 capacity?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#47",
        "answers": [
            {
            "choice": "<p>A.  Purchase Reserved Instances that specify the Region needed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an On-Demand Capacity Reservation that specifies the Region needed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Purchase Reserved Instances that specify the Region and three Availability Zones needed.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#48",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#48",
        "answers": [
            {
            "choice": "<p>A.  Move the catalog to Amazon ElastiCache for Redis.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy a larger EC2 instance with a larger instance store.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#49",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#49",
        "answers": [
            {
            "choice": "<p>A.  Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#50",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#50",
        "answers": [
            {
            "choice": "<p>A.  Create an AWS Lambda function to apply the patch to all EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#51",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: BD</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#51",
        "answers": [
            {
            "choice": "<p>A.  Configure the application to send the data to Amazon Kinesis Data Firehose.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#52",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#52",
        "answers": [
            {
            "choice": "<p>A.  Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#53",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#53",
        "answers": [
            {
            "choice": "<p>A.  Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#54",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#54",
        "answers": [
            {
            "choice": "<p>A.  Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#55",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#55",
        "answers": [
            {
            "choice": "<p>A.  Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#56",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#56",
        "answers": [
            {
            "choice": "<p>A.  Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#57",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#58",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#58",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon EC2 instances, and install Docker on the instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#59",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.<br>What should a solutions architect do to transmit and process the clickstream data?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#59",
        "answers": [
            {
            "choice": "<p>A.  Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#60",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.<br>What should a solutions architect do to meet this requirement?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#60",
        "answers": [
            {
            "choice": "<p>A.  Update the ALB's network ACL to accept only HTTPS traffic.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a rule that replaces the HTTP in the URL with HTTPS.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#61",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#61",
        "answers": [
            {
            "choice": "<p>A.  Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#62",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#62",
        "answers": [
            {
            "choice": "<p>A.  Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB.  Use the managed renewal feature to automatically rotate the certificate.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA.  Apply the certificate to the ALB.  Use the managed renewal feature to automatically rotate the certificate.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB.  Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#63",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.<br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#63",
        "answers": [
            {
            "choice": "<p>A.  Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB. </p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#64",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day.<br>The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#64",
        "answers": [
            {
            "choice": "<p>A.  Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#65",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#65",
        "answers": [
            {
            "choice": "<p>A.  Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#66",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.<br>Which storage solution is MOST cost-effective?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#66",
        "answers": [
            {
            "choice": "<p>A.  Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#67",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.<br>What should a solutions architect do to ensure messages are being processed once only?<br><br></p>",
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
            "choice": "<p>A.  Use the CreateQueue API call to create a new queue.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use the AddPermission API call to add appropriate permissions.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use the ReceiveMessage API call to set an appropriate wait time.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use the ChangeMessageVisibility API call to increase the visibility timeout.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#68",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.<br>What should the solutions architect do to meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#69",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.<br>Which solution will meet these requirements with the LEAST operational effort?<br><br></p>",
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
            "choice": "<p>A.  Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#70",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.<br>The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#70",
        "answers": [
            {
            "choice": "<p>A.  Enable HTTP health checks on the NLB, supplying the URL of the company's application.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB.  Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#71",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.<br>What should the solutions architect recommend to meet these requirements?<br><br></p>",
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
            "choice": "<p>A.  Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB. </p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#72",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.<br>How can the solutions architect meet this requirement?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#72",
        "answers": [
            {
            "choice": "<p>A.  Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#73",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: CD</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#73",
        "answers": [
            {
            "choice": "<p>A.  Replace the current security group of the bastion host with one that only allows inbound access from the application instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#74",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.<br>How should security groups be configured in this situation? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: AC</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#74",
        "answers": [
            {
            "choice": "<p>A.  Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#75",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.<br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#75",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#76",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.<br>Which solution offers the MOST reliable data transfer?<br><br></p>",
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
            "choice": "<p>A.  AWS DataSync over public internet</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  AWS DataSync over AWS Direct Connect</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  AWS Database Migration Service (AWS DMS) over public internet</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  AWS Database Migration Service (AWS DMS) over AWS Direct Connect</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#77",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#77",
        "answers": [
            {
            "choice": "<p>A.  Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#78",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#78",
        "answers": [
            {
            "choice": "<p>A.  Use DynamoDB point-in-time recovery to back up the table continuously.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use AWS Backup to create backup schedules and retention policies for the table.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#79",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.<br>What should a solutions architect recommend?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#79",
        "answers": [
            {
            "choice": "<p>A.  Create a DynamoDB table in on-demand capacity mode.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a DynamoDB table with a global secondary index.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a DynamoDB table with provisioned capacity and auto scaling.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#80",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.<br>What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#80",
        "answers": [
            {
            "choice": "<p>A.  Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#81",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.<br>Which design should the solutions architect use?<br><br></p>",
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
            "choice": "<p>A.  Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#82",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.<br>What should a solutions architect recommend to meet this requirement?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#82",
        "answers": [
            {
            "choice": "<p>A.  Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#83",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.<br>What should the solutions architect recommend?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#83",
        "answers": [
            {
            "choice": "<p>A.  Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Move the website to Amazon S3. Use Cross-Region Replication between Regions.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon CloudFront with a custom origin pointing to the on-premises servers.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#84",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.<br>The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.<br>Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#84",
        "answers": [
            {
            "choice": "<p>A.  Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#85",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored.<br>What should a solutions architect do to meet this requirement?<br><br></p>",
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
            "choice": "<p>A.  Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#86",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#86",
        "answers": [
            {
            "choice": "<p>A.  Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#87",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.<br>A solutions architect needs to design a solution that stores customer data that is created during database upgrades.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#87",
        "answers": [
            {
            "choice": "<p>A.  Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#88",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#88",
        "answers": [
            {
            "choice": "<p>A.  Configure the Requester Pays feature on the company's S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#89",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.<br>What should a solutions architect do to secure the audit documents?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#89",
        "answers": [
            {
            "choice": "<p>A.  Enable the versioning and MFA Delete features on the S3 bucket.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#90",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.<br>The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.<br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#90",
        "answers": [
            {
            "choice": "<p>A.  Modify the DB instance to be a Multi-AZ deployment.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a read replica of the database. Configure the script to query only the read replica.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Instruct the development team to manually export the entries in the database at the end of each day.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon ElastiCache to cache the common queries that the script runs against the database.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#91",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet.<br>Which solution will meet these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: A</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#91",
        "answers": [
            {
            "choice": "<p>A.  Configure an S3 gateway endpoint.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an S3 bucket in a private subnet.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an S3 bucket in the same AWS Region as the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure a NAT gateway in the same subnet as the EC2 instances.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#92",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.<br>Which combination of steps should a solutions architect take to accomplish this? (Choose two.)<br><br></p>",
    "mark": 1,
    "is_partially_correct": true,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: AC</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#92",
        "answers": [
            {
            "choice": "<p>A.  Configure a VPC gateway endpoint for Amazon S3 within the VPC. </p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create a bucket policy to make the objects in the S3 bucket public.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create a bucket policy that limits access to only the application tier running in the VPC. </p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>E.  Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#93",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.<br>The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.<br>A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: B</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#93",
        "answers": [
            {
            "choice": "<p>A.  Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#94",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis.<br>Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.<br>Which solution meets these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#94",
        "answers": [
            {
            "choice": "<p>A.  Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB. </p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB. </p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#95",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.<br>What should the solutions architect recommend?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#95",
        "answers": [
            {
            "choice": "<p>A.  Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#96",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:<br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image1.png\"><br>What is the effect of this policy?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#96",
        "answers": [
            {
            "choice": "<p>A.  Users can terminate an EC2 instance in any AWS Region except us-east-1.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#97",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.<br>Which solution will satisfy these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#97",
        "answers": [
            {
            "choice": "<p>A.  Configure Amazon EFS storage and set the Active Directory domain for authentication.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#98",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.<br>Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.<br>What should the solutions architect do to resolve this issue with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#98",
        "answers": [
            {
            "choice": "<p>A.  Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.</p>",
            "correct": false,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#99",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.<br>Which solution meets these requirements?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: D</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#99",
        "answers": [
            {
            "choice": "<p>A.  Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.</p>",
            "correct": true,
            "feedback": ""
            }
        ]
        }
    ],
    "topic_name": ""
    },
    {
    "question_id": "#100",
    "topic_id": 1,
    "course_id": 1,
    "case_study_id": null,
    "lab_id": 0,
    "question_text": "<p>A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
    "mark": 1,
    "is_partially_correct": false,
    "question_type": "1",
    "difficulty_level": "0",
    "general_feedback": "<p>Correct Answer: C</p>",
    "is_active": true,
    "answer_list": [
        {
        "question_answer_id": 1,
        "question_id": "#100",
        "answers": [
            {
            "choice": "<p>A.  Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>B.  Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.</p>",
            "correct": false,
            "feedback": ""
            },
            {
            "choice": "<p>C.  Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.</p>",
            "correct": true,
            "feedback": ""
            },
            {
            "choice": "<p>D.  Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.</p>",
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