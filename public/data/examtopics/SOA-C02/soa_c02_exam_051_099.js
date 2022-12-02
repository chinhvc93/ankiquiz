var SOA_C02_Exam_051_099 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#51",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A SysOps administrator is examining the following AWS CloudFormation template:<br><img src='https://www.examtopics.com/assets/media/exam-media/04242/0003100001.jpg'><br>Why will the stack creation fail?<br><br></p>",
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
                "choice": "<p>A.  The Outputs section of the CloudFormation template was omitted.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  The Parameters section of the CloudFormation template was omitted.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  The PrivateDnsName cannot be set from a CloudFormation template.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  The VPC was not specified in the CloudFormation template.</p>",
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
        "question_text": "<p>A new application runs on Amazon EC2 instances and accesses data in an Amazon RDS database instance. When fully deployed in production, the application fails. The database can be queried from a console on a bastion host. When looking at the web server logs, the following error is repeated multiple times:<br>*** Error Establishing a Database Connection<br>Which of the following may be causes of the connectivity problems? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#52",
            "answers": [
              {
                "choice": "<p>A.  The security group for the database does not have the appropriate egress rule from the database to the web server.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  The certificate used by the web server is not trusted by the RDS instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  The security group for the database does not have the appropriate ingress rule from the web server to the database.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  The port used by the application developer does not match the port specified in the RDS configuration.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  The database is still being created and is not available for connectivity.</p>",
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
        "question_text": "<p>A compliance team requires all administrator passwords for Amazon RDS DB instances to be changed at least annually.<br>Which solution meets this requirement in the MOST operationally efficient manner?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#53",
            "answers": [
              {
                "choice": "<p>A.  Store the database credentials in AWS Secrets Manager. Configure automatic rotation for the secret every 365 days.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Store the database credentials as a parameter in the RDS parameter group. Create a database trigger to rotate the password every 365 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Store the database credentials in a private Amazon S3 bucket. Schedule an AWS Lambda function to generate a new set of credentials every 365 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Store the database credentials in AWS Systems Manager Parameter Store as a secure string parameter. Configure automatic rotation for the parameter every 365 days.</p>",
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
        "question_text": "<p>A SysOps administrator is responsible for managing a fleet of Amazon EC2 instances. These EC2 instances upload build artifacts to a third-party service. The third-party service recently implemented a strict IP allow list that requires all build uploads to come from a single IP address.<br>What change should the systems administrator make to the existing build fleet to comply with this new requirement?<br><br></p>",
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
                "choice": "<p>A.  Move all of the EC2 instances behind a NAT gateway and provide the gateway IP address to the service.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Move all of the EC2 instances behind an internet gateway and provide the gateway IP address to the service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Move all of the EC2 instances into a single Availability Zone and provide the Availability Zone IP address to the service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Move all of the EC2 instances to a peered VPC and provide the VPC IP address to the service.</p>",
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
        "question_text": "<p>A company uses an Amazon CloudFront distribution to deliver its website. Traffic logs for the website must be centrally stored, and all data must be encrypted at rest.<br>Which solution will meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon OpenSearch Service (Amazon Elasticsearch Service) domain with internet access and server-side encryption that uses the default AWS managed customer master key (CMK). Configure CloudFront to use the Amazon OpenSearch Service (Amazon Elasticsearch Service) domain as a log destination.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon OpenSearch Service (Amazon Elasticsearch Service) domain with VPC access and server-side encryption that uses AES-256. Configure CloudFront to use the Amazon OpenSearch Service (Amazon Elasticsearch Service) domain as a log destination.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon S3 bucket that is configured with default server-side encryption that uses AES-256. Configure CloudFront to use the S3 bucket as a log destination.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon S3 bucket that is configured with no default encryption. Enable encryption in the CloudFront distribution, and use the S3 bucket as a log destination.</p>",
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
        "question_text": "<p>An organization created an Amazon Elastic File System (Amazon EFS) volume with a file system ID of fs-85ba41fc, and it is actively used by 10 Amazon EC2 hosts. The organization has become concerned that the file system is not encrypted.<br>How can this be resolved?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#56",
            "answers": [
              {
                "choice": "<p>A.  Enable encryption on each host's connection to the Amazon EFS volume. Each connection must be recreated for encryption to take effect.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable encryption on the existing EFS volume by using the AWS Command Line Interface.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable encryption on each host's local drive. Restart each host to encrypt the drive.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable encryption on a newly created volume and copy all data from the original volume. Reconnect each host to the new volume.</p>",
                "correct": true,
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
        "question_text": "<p>A company uses an AWS Service Catalog portfolio to create and manage resources. A SysOps administrator must create a replica of the company's existing AWS infrastructure in a new AWS account.<br>What is the MOST operationally efficient way to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#57",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS CloudFormation template to use the AWS Service Catalog portfolio in the new AWS account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the new AWS account, manually create an AWS Service Catalog portfolio that duplicates the original portfolio.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Run an AWS Lambda function to create a new AWS Service Catalog portfolio based on the output of the DescribePortfolio API operation.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Share the AWS Service Catalog portfolio with the new AWS account. Import the portfolio into the new AWS account.</p>",
                "correct": true,
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
        "question_text": "<p>A SysOps administrator must manage the security of an AWS account. Recently, an IAM user's access key was mistakenly uploaded to a public code repository.<br>The SysOps administrator must identify anything that was changed by using this access key.<br>How should the SysOps administrator meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send all IAM events to an AWS Lambda function for analysis.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Query Amazon EC2 logs by using Amazon CloudWatch Logs Insights for all events initiated with the compromised access key within the suspected timeframe.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Search AWS CloudTrail event history for all events initiated with the compromised access key within the suspected timeframe.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Search VPC Flow Logs for all events initiated with the compromised access key within the suspected timeframe.</p>",
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
        "question_text": "<p>A company runs a retail website on multiple Amazon EC2 instances behind an Application Load Balancer (ALB). The company must secure traffic to the website over an HTTPS connection.<br>Which combination of actions should a SysOps administrator take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#59",
            "answers": [
              {
                "choice": "<p>A.  Attach the certificate to each EC2 instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Attach the certificate to the ALB. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a private certificate in AWS Certificate Manager (ACM).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a public certificate in AWS Certificate Manager (ACM).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Export the certificate, and attach it to the website.</p>",
                "correct": false,
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
        "question_text": "<p>SIMULATION -<br><br>Instructions -<br>If the copy-paste functionality is not working in your environment, refer to the instructions file on the VM desktop and use Ctrl+C, Ctrl+V or Command-C,<br>Command-V.<br>Configure Amazon EventBridge to meet the following requirements.<br>1. Use the us-east-2 Region for all resources.<br>2. Unless specified below, use the default configuration settings.<br>3. Use your own resource naming unless a resource name is specified below.<br>4. Ensure all Amazon EC2 events in the default event bus are replayable for the past 45 days.<br>5. Create a rule named RunFunction to send the exact message {\"name\":\"example\") every 15 minutes to an existing AWS Lambda function named LogEventFunction<br>6. Create a rule named SpotWarning to send a notification to a new standard Amazon SNS topic named TopicEvents whenever an Amazon EC2 Spot Instance is interrupted. Do NOT create any topic subscriptions. The notification must match the following structure:<br>Input path:<br>{`instance`:`detail.instance-id}<br>Input template:<br>`The EC2 Spot Instance &lt;instance&gt; has been interrupted.`<br>Important: Click the Next button to complete this lab and continue to the next lab. Once you click the Next button, you will NOT be able to return to this lab.<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: See explanation below.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#60",
            "answers": []
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
        "question_text": "<p>A company has a stateful, long-running workload on a single xlarge general purpose Amazon EC2 On-Demand Instance Metrics show that the service is always using 80% of its available memory and 40% of its available CPU. A SysOps administrator must reduce the cost of the service without negatively affecting performance.<br>Which change in instance type will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#61",
            "answers": [
              {
                "choice": "<p>A.  Change to one large compute optimized On-Demand Instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Change to one large memory optimized On-Demand Instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Change to one xlarge general purpose Spot Instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Change to two large general purpose On-Demand Instances.</p>",
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
        "question_text": "<p>A company asks a SysOps administrator to ensure that AWS CloudTrail files are not tampered with after they are created. Currently, the company uses AWS<br>Identity and Access Management (IAM) to restrict access to specific trails. The company's security team needs the ability to trace the integrity of each file.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
                "choice": "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function when a new file is delivered. Configure the Lambda function to compute an MD5 hash check on the file and store the result in an Amazon DynamoDB table. The security team can use the values that are stored in DynamoDB to verify the integrity of the delivered files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS Lambda function that is invoked each time a new file is delivered to the CloudTrail bucket. Configure the Lambda function to compute an MD5 hash check on the file and store the result as a tag in an Amazon 53 object. The security team can use the information in the tag to verify the integrity of the delivered files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable the CloudTrail file integrity feature on an Amazon S3 bucket. Create an IAM policy that grants the security team access to the file integrity logs that are stored in the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable the CloudTrail file integrity feature on the trail. The security team can use the digest file that is created by CloudTrail to verify the integrity of the delivered files.</p>",
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
        "question_text": "<p>When the AWS Cloud infrastructure experiences an event that may impact an organization, which AWS service can be used to see which of the organization's resources are affected?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#63",
            "answers": [
              {
                "choice": "<p>A.  AWS Service Health Dashboard</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  AWS Trusted Advisor</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  AWS Personal Health Dashboard</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  AWS Systems Manager</p>",
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
        "question_text": "<p>A company is using an AWS KMS customer master key (CMK) with imported key material. The company references the CMK by its alias in the Java application to encrypt data. The CMK must be rotated every 6 months.<br>What is the process to rotate the key?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#64",
            "answers": [
              {
                "choice": "<p>A.  Enable automatic key rotation for the CMK, and specify a period of 6 months.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new CMK with new imported material, and update the key alias to point to the new CMK.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Delete the current key material, and import new material into the existing CMK.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Import a copy of the existing key material into a new CMK as a backup, and set the rotation schedule for 6 months.</p>",
                "correct": false,
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
        "question_text": "<p>The security team is concerned because the number of AWS Identity and Access Management (IAM) policies being used in the environment is increasing. The team tasked a SysOps administrator to report on the current number of IAM policies in use and the total available IAM policies.<br>Which AWS service should the administrator use to check how current IAM policy usage compares to current service limits?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#65",
            "answers": [
              {
                "choice": "<p>A.  AWS Trusted Advisor</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Amazon Inspector</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  AWS Config</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  AWS Organizations</p>",
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
        "question_text": "<p>A SysOps administrator is trying to set up an Amazon Route 53 domain name to route traffic to a website hosted on Amazon S3. The domain name of the website is www.example.com and the S3 bucket name DOC-EXAMPLE-BUCKET. After the record set is set up in Route 53, the domain name www.anycompany.com does not seem to work, and the static website is not displayed in the browser.<br>Which of the following is a cause of this?<br><br></p>",
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
                "choice": "<p>A.  The S3 bucket must be configured with Amazon CloudFront first.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  The Route 53 record set must have an IAM role that allows access to the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  The Route 53 record set must be in the same region as the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  The S3 bucket name must match the record set name in Route 53.</p>",
                "correct": true,
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
        "question_text": "<p>A SysOps administrator has used AWS CloudFormation to deploy a serverless application into a production VPC. The application consists of an AWS Lambda function, an Amazon DynamoDB table, and an Amazon API Gateway API. The SysOps administrator must delete the AWS CloudFormation stack without deleting the DynamoDB table.<br>Which action should the SysOps administrator take before deleting the AWS CloudFormation stack?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#67",
            "answers": [
              {
                "choice": "<p>A.  Add a Retain deletion policy to the DynamoDB resource in the AWS CloudFormation stack.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add a Snapshot deletion policy to the DynamoDB resource in the AWS CloudFormation stack.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable termination protection on the AWS CloudFormation stack.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Update the application's IAM policy with a Deny statement for the dynamodb:DeleteTable action.</p>",
                "correct": false,
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
        "question_text": "<p>A SysOps administrator is notified that an Amazon EC2 instance has stopped responding. The AWS Management Console indicates that the system checks are failing.<br>What should the administrator do first to resolve this issue?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#68",
            "answers": [
              {
                "choice": "<p>A.  Reboot the EC2 instance so it can be launched on a new host.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Stop and then start the EC2 instance so that it can be launched on a new host.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Terminate the EC2 instance and relaunch it.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  View the AWS CloudTrail log to investigate what changed on the EC2 instance.</p>",
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
        "question_text": "<p>A software development company has multiple developers who work on the same product. Each developer must have their own development environments, and these development environments must be identical. Each development environment consists of Amazon EC2 instances and an Amazon RDS DB instance. The development environments should be created only when necessary, and they must be terminated each night to minimize costs.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
                "choice": "<p>A.  Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly cron job on each development instance to stop all running processes to reduce CPU utilization to nearly zero.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to delete the AWS CloudFormation stacks.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to terminate all EC2 instances and the DB instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to cause AWS CloudFormation to delete all of the development environment resources.</p>",
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
        "question_text": "<p>A company is partnering with an external vendor to provide data processing services. For this integration, the vendor must host the company's data in an Amazon<br>S3 bucket in the vendor's AWS account. The vendor is allowing the company to provide an AWS Key Management Service (AWS KMS) key to encrypt the company's data. The vendor has provided an IAM role Amazon Resources Name (ARN) to the company for this integration.<br>What should a SysOps administrator do to configure this integration?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#70",
            "answers": [
              {
                "choice": "<p>A.  Create a new KMS key. Add the vendor's IAM role ARN to the KMS key policy. Provide the new KMS key ARN to the vendor.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new KMS key. Create a new IAM key. Add the vendor's IAM role ARN to an inline policy that is attached to the IAM user. Provide the new IAM user ARN to the vendor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure encryption using the KMS managed S3 key. Add the vendor's IAM role ARN to the KMS key policy. Provide the KMS managed S3 key ARN to the vendor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure encryption using the KMS managed S3 key. Create an S3 bucket. Add the vendor's IAM role ARN to the S3 bucket policy. Provide the S3 bucket ARN to the vendor.</p>",
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
        "question_text": "<p>A SysOps administrator is using AWS Systems Manager Patch Manager to patch a fleet of Amazon EC2 instances. The SysOps administrator has configured a patch baseline and a maintenance window. The SysOps administrator also has used an instance tag to identify which instances to patch.<br>The SysOps administrator must give Systems Manager the ability to access the EC2 instances.<br>Which additional action must the SysOps administrator perform to meet this requirement?<br><br></p>",
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
                "choice": "<p>A.  Add an inbound rule to the instances' security group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Attach an IAM instance profile with access to Systems Manager to the instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a Systems Manager activation. Then activate the fleet of instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Manually specify the instances to patch instead of using tag-based selection.</p>",
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
        "question_text": "<p>A company hosts its website on Amazon EC2 instances in the us-east-1 Region. The company is preparing to extend its website into the eu-central-1 Region, but the database must remain only in us-east-1. After deployment, the EC2 instances in eu-central-1 are unable to connect to the database in us-east-1.<br>What is the MOST operationally efficient solution that will resolve this connectivity issue?<br><br></p>",
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
                "choice": "<p>A.  Create a VPC peering connection between the two Regions. Add the private IP address range of the instances to the inbound rule of the database security group.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a VPC peering connection between the two Regions. Add the security group of the instances in eu-central-1 to the outbound rule of the database security group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a VPN connection between the two Regions. Add the private IP address range of the instances to the outbound rule of the database security group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a VPN connection between the two Regions. Add the security group of the instances in eu-central-1 to the inbound rule of the database security group.</p>",
                "correct": false,
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
        "question_text": "<p>A company wants to create an automated solution for all accounts managed by AWS Organizations to detect any security groups that use 0.0.0.0/0 as the source address for inbound traffic. The company also wants to automatically remediate any noncompliant security groups by restricting access to a specific CIDR block that corresponds with the company's intranet.<br>Which set of actions should the SysOps administrator take to create a solution?<br><br></p>",
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
                "choice": "<p>A.  Create an AWS Config rule to detect noncompliant security groups. Set up automatic remediation to change the 0.0.0.0/0 source address to the approved CIDR block.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an IAM policy to deny the creation of security groups that have 0.0.0.0/0 as the source address. Attach this IAM policy to every user in the company.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS Lambda function to inspect new and existing security groups. Check for a noncompliant 0.0.0.0/0 source address and change the source address to the approved CIDR block.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a service control policy (SCP) for the organizational unit (OU) to deny the creation of security groups that have the 0.0.0.0/0 source address. Set up automatic remediation to change the 0.0.0.0/0 source address to the approved CIDR block.</p>",
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
        "question_text": "<p>A company requires that all activity in its AWS account be logged using AWS CloudTrail. Additionally, a SysOps administrator must know when CloudTrail log files are modified or deleted.<br>How should the SysOps administrator meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Enable log file integrity validation. Use the AWS CLI to validate the log files.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable log file integrity validation. Use the AWS CloudTrail Processing Library to validate the log files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use CloudTrail Insights to monitor the log files for modifications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use Amazon CloudWatch Logs to monitor the log files for modifications.</p>",
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
        "question_text": "<p>A company is planning to host its stateful web-based applications on AWS. A SysOps administrator is using an Auto Scaling group of Amazon EC2 instances. The web applications will run 24 hours a day, 7 days a week throughout the year. The company must be able to change the instance type within the same instance family later in the year based on the traffic and usage patterns.<br>Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?<br><br></p>",
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
                "choice": "<p>A.  Convertible Reserved Instances</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  On-Demand Instances</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Spot Instances</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Standard Reserved Instances</p>",
                "correct": true,
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
        "question_text": "<p>An application runs on Amazon EC2 instances in an Auto Scaling group. Following the deployment of a new feature on the EC2 instances, some instances were marked as unhealthy and then replaced by the Auto Scaling group. The EC2 instances terminated before a SysOps administrator could determine the cause of the health status changes. To troubleshoot this issue, the SysOps administrator wants to ensure that an AWS Lambda function is invoked in this situation.<br>How should the SysOps administrator meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#76",
            "answers": [
              {
                "choice": "<p>A.  Activate the instance scale-in protection setting for the Auto Scaling group. Invoke the Lambda function through Amazon EventBridge (Amazon CloudWatch Events).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Activate the instance scale-in protection setting for the Auto Scaling group. Invoke the Lambda function through Amazon Route 53.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Add a lifecycle hook to the Auto Scaling group to invoke the Lambda function through Amazon EventBridge (Amazon CloudWatch Events).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add a lifecycle hook to the Auto Scaling group to invoke the Lambda function through Amazon Route 53.</p>",
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
        "question_text": "<p>A company runs an application that hosts critical data for several clients. The company uses AWS CloudTrail to track user activities on various AWS resources. To meet new security requirements, the company needs to protect the CloudTrail log files from being modified, deleted, or forged.<br>Which solution will meet these requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#77",
            "answers": [
              {
                "choice": "<p>A.  Enable CloudTrail log file integrity validation.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use Amazon S3 MFA Delete on the S3 bucket where the CloudTrail log files are stored.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Amazon S3 Versioning to keep all versions of the CloudTrail log files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS Key Management Service (AWS KMS) security keys to secure the CloudTrail log files.</p>",
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
        "question_text": "<p>A global company operates out of five AWS Regions. A SysOps administrator wants to identify all the company's tagged and untagged Amazon EC2 instances.<br>The company requires the output to display the instance ID and tags.<br>What is the MOST operationally efficient way for the SysOps administrator to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#78",
            "answers": [
              {
                "choice": "<p>A.  Create a tag-based resource group in AWS Resource Groups.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Trusted Advisor. Export the EC2 On-Demand Instances check results from Trusted Advisor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Cost Explorer. Choose a service type of EC2-Instances, and group by Resource.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use Tag Editor in AWS Resource Groups. Select all Regions, and choose a resource type of AWS::EC2::Instance.</p>",
                "correct": true,
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
        "question_text": "<p>A company needs to upload gigabytes of files every day. The company need to achieve higher throughput and upload speeds to Amazon S3.<br>Which action should a SysOps administrator take to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#79",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon CloudFront distribution with the GET HTTP method allowed and the S3 bucket as an origin.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon ElastiCache cluster and enable caching for the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up AWS Global Accelerator and configure it with the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable S3 Transfer Acceleration and use the acceleration endpoint when uploading files.</p>",
                "correct": true,
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
        "question_text": "<p>A SysOps administrator maintains the security and compliance of a company's AWS account. To ensure the company's Amazon EC2 instances are following company policy, a SysOps administrator wants to terminate any EC2 instance that do not contain a department tag. Noncompliant resources must be terminated in near-real time.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#80",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Config rule with the required-tags managed rule to identify noncompliant resources. Configure automatic remediation to run the AWS- TerminateEC2Instance automation document to terminate noncompliant resources.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new Amazon EventBridge (Amazon CloudWatch Events) rule to monitor when new EC2 instances are created. Send the event to a Simple Notification Service (Amazon SNS) topic for automatic remediation.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Ensure all users who can create EC2 instances also have the permissions to use the ec2:CreateTags and ec2:DescribeTags actions. Change the instance's shutdown behavior to terminate.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Ensure AWS Systems Manager Compliance is configured to manage the EC2 instances. Call the AWS-StopEC2Instances automation document to stop noncompliant resources.</p>",
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
        "question_text": "<p>A company uploaded its website files to an Amazon S3 bucket that has S3 Versioning enabled. The company uses an Amazon CloudFront distribution with the S3 bucket as the origin. The company recently modified the files, but the object names remained the same. Users report that old content is still appearing on the website.<br>How should a SysOps administrator remediate this issue?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#81",
            "answers": [
              {
                "choice": "<p>A.  Create a CloudFront invalidation, and add the path of the updated files.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a CloudFront signed URL to update each object immediately.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure an S3 origin access identity (OAI) to display only the updated files to users.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Disable S3 Versioning on the S3 bucket so that the updated files can replace the old files.</p>",
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
        "question_text": "<p>A company has two VPC networks named VPC A and VPC B. The VPC A CIDR block is 10.0.0.0/16 and the VPC B CIDR block is 172.31.0.0/16. The company wants to establish a VPC peering connection named pcx-12345 between both VPCs.<br>Which rules should appear in the route table of VPC A after configuration? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#82",
            "answers": [
              {
                "choice": "<p>A.  Destination: 10.0.0.0/16, Target: Local</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Destination: 172.31.0.0/16, Target: Local</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Destination: 10.0.0.0/16, Target: pcx-12345</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Destination: 172.31.0.0/16, Target: pcx-12345</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Destination: 10.0.0.0/16, Target: 172.31.0.0/16</p>",
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
        "question_text": "<p>A company analyzes sales data for its customers. Customers upload files to one of the company's Amazon S3 buckets, and a message is posted to an Amazon<br>Simple Queue Service (Amazon SQS) queue that contains the object Amazon Resource Name (ARN). An application that runs on an Amazon EC2 instance polls the queue and processes the messages. The processing time depends on the size of the file.<br>Customers are reporting delays in the processing of their files. A SysOps administrator decides to configure Amazon EC2 Auto Scaling as the first step. The<br>SysOps administrator creates an Amazon Machine Image (AMI) that is based on the existing EC2 instance. The SysOps administrator also creates a launch template that references the AMI.<br>How should the SysOps administrator configure the Auto Scaling policy to improve the response time?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#83",
            "answers": [
              {
                "choice": "<p>A.  Add several different instance sizes in the launch template. Create an Auto Scaling policy based on the ApproximateNumberOfMessagesVisible metric to select the size of the instance based on the number of messages in the queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Auto Scaling policy based on the ApproximateNumberOfMessagesDelayed metric to scale the number of instances based on the number of messages in the queue that have been delayed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a custom metric based on the ASGAverageCPUUtilization metric and the GroupPendingInstances metric from the Auto Scaling group. Modify the application to calculate the metric and post the metric to Amazon CloudWatch once each minute. Create an Auto Scaling policy based on this metric to scale the number of instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a custom metric based on the ApproximateNumberOfMessagesVisible metric and the number of instances in the InService state in the Auto Scaling group. Modify the application to calculate the metric and post the metric to Amazon CloudWatch once each minute. Create an Auto Scaling policy based on this metric to scale the number of instances.</p>",
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
        "question_text": "<p>A company runs a multi-tier web application with two Amazon EC2 instances in one Availability Zone in the us-east-1 Region. A SysOps administrator must migrate one of the EC2 instances to a new Availability Zone.<br>Which solution will accomplish this?<br><br></p>",
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
                "choice": "<p>A.  Copy the EC2 instance to a different Availability Zone. Terminate the original instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon Machine Image (AMI) from the EC2 instance and launch it in a different Availability Zone. Terminate the original instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Move the EC2 instance to a different Availability Zone using the AWS CLI.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Stop the EC2 instance, modify the Availability Zone, and start the instance.</p>",
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
        "question_text": "<p>A company is expanding its fleet of Amazon EC2 instances before an expected increase of traffic. When a SysOps administrator attempts to add more instances, an InstanceLimitExceeded error is returned.<br>What should the SysOps administrator do to resolve this error?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#85",
            "answers": [
              {
                "choice": "<p>A.  Add an additional CIDR block to the VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Launch the EC2 instances in a different Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Launch new EC2 instances in another VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use Service Quotas to request an EC2 quota increase.</p>",
                "correct": true,
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
        "question_text": "<p>A company wants to prohibit its developers from using a particular family of Amazon EC2 instances. The company uses AWS Organizations and wants to apply the restriction across multiple accounts.<br>What is the MOST operationally efficient way for the company to apply service control policies (SCPs) to meet these requirements?<br><br></p>",
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
                "choice": "<p>A.  Add the accounts to an organizational unit (OU). Apply the SCPs to the OU.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add the accounts to resource groups in AWS Resource Groups. Apply the SCPs to the resource groups.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Apply the SCPs to each developer account</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enroll the accounts with AWS Control Tower. Apply the SCPs to the AWS Control Tower management account.</p>",
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
        "question_text": "<p>An application is running on an Amazon EC2 instance in a VPC with the default DHCP option set. The application connects to an on-premises Microsoft SQL<br>Server database with the DNS name mssql.example.com. The application is unable to resolve the database DNS name.<br>Which solution will fix this problem?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#87",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon Route 53 Resolver inbound endpoint. Add a forwarding rule for the domain example.com. Associate the forwarding rule with the VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon Route 53 Resolver inbound endpoint. Add a system rule for the domain example.com. Associate the system rule with the VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon Route 53 Resolver outbound endpoint. Add a forwarding rule for the domain example.com. Associate the forwarding rule with the VPC. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon Route 53 Resolver outbound endpoint. Add a system rule for the domain example.com. Associate the system rule with the VPC. </p>",
                "correct": false,
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
        "question_text": "<p>A company's application is hosted by an internet provider at app.example.com. The company wants to access the application by using www.company.com, which the company owns and manages with Amazon Route 53.<br>Which Route 53 record should be created to address this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#88",
            "answers": [
              {
                "choice": "<p>A.  A record</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Alias record</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  CNAME record</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Pointer (PTR) record</p>",
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
        "question_text": "<p>A company expanded its web application to serve a worldwide audience. A SysOps administrator has implemented a multi-Region AWS deployment for all production infrastructure. The SysOps administrator must route traffic based on the location of resources.<br>Which Amazon Route 53 routing policy should the SysOps administrator use to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#89",
            "answers": [
              {
                "choice": "<p>A.  Geolocation routing policy</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Geoproximity routing policy</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Latency-based routing policy</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Multivalue answer routing policy</p>",
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
        "question_text": "<p>A SysOps administrator wants to upload a file that is 1 TB in size from on-premises to an Amazon S3 bucket using multipart uploads.<br>What should the SysOps administrator do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#90",
            "answers": [
              {
                "choice": "<p>A.  Upload the file using the S3 console.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use the s3api copy-object command.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use the s3api put-object command.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use the s3 cp command</p>",
                "correct": true,
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
        "question_text": "<p>An application team is working with a SysOps administrator to define Amazon CloudWatch alarms for an application. The application team does not know the application's expected usage or expected growth.<br>Which solution should the SysOps administrator recommend?<br><br></p>",
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
                "choice": "<p>A.  Create CloudWatch alarms that are based on anomaly detection.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create CloudWatch alarms by using a set of composite alarms.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create CloudWatch alarms by using static thresholds.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create CloudWatch alarms that treat missing data as breaching.</p>",
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
        "question_text": "<p>A company runs a stateless application that is hosted on an Amazon EC2 instance. Users are reporting performance issues. A SysOps administrator reviews the<br>Amazon CloudWatch metrics for the application and notices that the instance's CPU utilization frequently reaches 90% during business hours.<br>What is the MOST operationally efficient solution that will improve the application's responsiveness?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#92",
            "answers": [
              {
                "choice": "<p>A.  Configure CloudWatch logging on the EC2 instance. Configure a CloudWatch alarm for CPU utilization to alert the SysOps administrator when CPU utilization goes above 90%.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure an AWS Client VPN connection to allow the application users to connect directly to the EC2 instance private IP address to reduce latency.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Auto Scaling group, and assign it to an Application Load Balancer. Configure a target tracking scaling policy that is based on the average CPU utilization of the Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a CloudWatch alarm that activates when the EC2 instance's CPU utilization goes above 80%. Configure the alarm to invoke an AWS Lambda function that vertically scales the instance.</p>",
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
        "question_text": "<p>An ecommerce company uses an Amazon ElastiCache for Memcached cluster for in-memory caching of popular product queries on the shopping site. When viewing recent Amazon CloudWatch metrics data for the ElastiCache cluster, the SysOps administrator notices a large number of evictions.<br>Which of the following actions will reduce these evictions? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#93",
            "answers": [
              {
                "choice": "<p>A.  Add an additional node to the ElastiCache cluster.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Increase the ElastiCache time to live (TTL).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Increase the individual node size inside the ElastiCache cluster.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Put an Elastic Load Balancer in front of the ElastiCache cluster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use Amazon Simple Queue Service (Amazon SQS) to decouple the ElastiCache cluster.</p>",
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
        "question_text": "<p>A SysOps administrator wants to provide access to AWS services by attaching an IAM policy to multiple IAM users. The SysOps administrator also wants to be able to change the policy and create new versions.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#94",
            "answers": [
              {
                "choice": "<p>A.  Add the users to an IAM service-linked role. Attach the policy to the role.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add the users to an IAM user group. Attach the policy to the group.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS managed policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a customer managed policy.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create an inline policy.</p>",
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
        "question_text": "<p>A company stores critical data in Amazon S3 buckets. A SysOps administrator must build a solution to record all S3 API activity.<br>Which action will meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#95",
            "answers": [
              {
                "choice": "<p>A.  Configure S3 bucket metrics to record object access logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS CloudTrail trail to log data events for all S3 objects.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable S3 server access logging for each S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS IAM Access Analyzer for Amazon S3 to store object access logs.</p>",
                "correct": false,
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
        "question_text": "<p>A company runs an application that uses a MySQL database on an Amazon EC2 instance. The EC2 instance has a General Purpose SSD Amazon Elastic Block<br>Store (Amazon EBS) volume. The company made changes to the application code and now wants to perform load testing to evaluate the impact of the code changes.<br>A SysOps administrator must create a new MySQL instance from a snapshot of the existing production instance. This new instance needs to perform as similarly as possible to the production instance.<br>Which restore option meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#96",
            "answers": [
              {
                "choice": "<p>A.  Use EBS fast snapshot restore to create a new General Purpose SSD EBS volume from the production snapshot.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use EBS fast snapshot restore to create a new Provisioned IOPS SSD EBS volume from the production snapshot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use EBS snapshot restore to create a new General Purpose SSD EBS volume from the production snapshot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use EBS snapshot restore to create a new Provisioned IOPS SSD EBS volume from the production snapshot.</p>",
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