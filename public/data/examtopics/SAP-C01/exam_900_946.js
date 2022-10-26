var ExamTopic_900_946 = {
    "msg": "Exam Topic 900 - 946",
    "data": [
      {
        "question_id": "900",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has implemented a new security requirement. According to the new requirement, the company must scan all traffic from corporate AWS instances in the company's VPC for violations of the company's security policies. As a result of these scans, the company can block access to and from specific IP addresses.<br>To meet the new requirement, the company deploys a set of Amazon EC2 instances in private subnets to serve as transparent proxies. The company installs approved proxy server software on these EC2 instances. The company modifies the route tables on all subnets to use the corresponding EC2 instances with proxy software as the default route. The company also creates security groups that are compliant with the security policies and assigns these security groups to the EC2 instances.<br>Despite these configurations, the traffic of the EC2 instances in their private subnets is not being properly forwarded to the internet.<br>What should a solutions architect do to resolve this issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "900",
            "answers": [
              {
                "choice": "<p>A.  Disable source/destination checks on the EC2 instances that run the proxy software.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add a rule to the security group that is assigned to the proxy EC2 instances to allow all traffic between instances that have this security group. Assign this security group to all EC2 instances in the VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Change the VPC's DHCP options set. Set the DNS server options to point to the addresses of the proxy EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Assign one additional elastic network interface to each proxy EC2 instance. Ensure that one of these network interfaces has a route to the private subnets. Ensure that the other network interface has a route to the internet.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "901",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The<br>EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br>A solutions architect must configure the application so that itis highly available and fault tolerant.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "901",
            "answers": [
              {
                "choice": "<p>A.  Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALB.  Create an origin group for the two origins. Configure one origin as primary and one origin as secondary.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB.  Set up the failover routing algorithm on the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "902",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File<br>System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same<br>EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.<br>The company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "902",
            "answers": [
              {
                "choice": "<p>A.  Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Store data in Amazon Redshift. Use Amazon Redshift to query data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "903",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is designing a data processing system that will use Amazon EC2 instances. Data that needs to be processed will wait in an Amazon Simple<br>Queue Service (Amazon SQS) queue. At least two data processing instances must run at all times.<br>Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "903",
            "answers": [
              {
                "choice": "<p>A.  Create a Spot Fleet with a target scaling policy that targets the acceptable backlog per instance. Request two On-Demand Instances for minimum capacity. Use Spot Instances for additional capacity.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Purchase two Reserved Instances for the target platform and instance type in the target AWS Region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create On-Demand Capacity Reservations for two instances for the target platform and instance type in the target AWS Region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Auto Scaling group that uses Spot Instance requests. Configure the scaling policy to scale with the size of the SQS queue. Set the minimum value to 2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Provision two Dedicated Hosts. Configure AWS Batch to use Spot Instances to supply additional capacity.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "904",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.<br>Which strategy should a solutions architect recommend to meet this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "904",
            "answers": [
              {
                "choice": "<p>A.  Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "905",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "905",
            "answers": [
              {
                "choice": "<p>A.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon S3 interface endpoint in the networking account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon S3 gateway endpoint in the networking account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "906",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to use a hybrid cloud architecture between an on-premises data center and AWS. The company already has deployed a multi-account structure in AWS Organizations while following the AWS Well-Architected Framework.<br>Due to strict security requirements, connectivity between the data center and AWS must be encrypted in transit. Only a single entry point into AWS is permitted from the data center. The data center must be able to access all the AWS accounts.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "906",
            "answers": [
              {
                "choice": "<p>A.  Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Site-to-Site VPN connection with the data center, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Connect the AWS accounts with VPC peering. Establish an AWS Site-to-Site VPN connection with the data center. Route traffic from the data center to all AWS accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Connect the AWS accounts with VPC peering. Establish an AWS Direct Connect connection to the closest AWS Region. Route traffic from the data center to all AWS accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Direct Connect connection to the closest AWS Region, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "907",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect works for a government agency that has strict disaster recovery requirements. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "907",
            "answers": [
              {
                "choice": "<p>A.  Configure a policy in Amazon Data Lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use Amazon EventBridge (Amazon CloudWatch Events) to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 cross-Region replication to copy the EBS snapshots to the additional Regions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "908",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A retail company has a small ecommerce web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is deployed with the Multi-AZ option turned on.<br>Application usage recently increased exponentially, and users experienced frequent HTTP 503 errors. Users reported the errors, and the company's reputation suffered. The company could not identify a definitive root cause.<br>The company wants to improve its operational readiness and receive alerts before users notice an incident. The company also wants to collect enough information to determine the root cause of any future incident.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "908",
            "answers": [
              {
                "choice": "<p>A.  Turn on Enhanced Monitoring for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Turn on Enhanced Monitoring and Performance Insights for the DB instance. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Turn on log exports to Amazon CloudWatch for the PostgreSQL logs on the DB instance. Analyze the logs by using Amazon Elasticsearch Service (Amazon ES) and Kibana. Create a dashboard in Kibana. Configure alerts that are based on the metrics that are collected.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Turn on Performance Insights for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "909",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to set up a REST API application on AWS. The application team wants to set up a new identity store on AWS. The IT team does not want to maintain any infrastructure or servers for this deployment.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "909",
            "answers": [
              {
                "choice": "<p>A.  Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Create a Lambda function, and configure a Lambda authorizer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Deploy the application in AWS AppSync, and configure AWS Lambda resolvers. Set up an Amazon Cognito user pool, and configure AWS AppSync to use the user pool for authorization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Set up an Amazon Cognito user pool, and configure an Amazon Cognito authorizer.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Deploy the application in Amazon Elastic Kubernetes Service (Amazon EKS) clusters. Set up an Application Load Balancer for the EKS pods. Set up an Amazon Cognito user pool and service pod for authentication.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "910",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Single Sign-On (AWS SSO) to centrally manage permissions and access to multiple AWS accounts in AWS Organizations. A solutions architect needs to provide users with granular access to AWS accounts based on different job functions.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "910",
            "answers": [
              {
                "choice": "<p>A.  Create an IAM group for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign roles to the corresponding groups in all AWS accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a group in AWS SSO for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign groups to AWS accounts with corresponding permission sets.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an IAM role for each job function in all AWS accounts. Create a group in the management account for each job function. In AWS SSO for the management account, create a permission set for each job function.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an IAM role for each job function in the management account. In AWS SSO for the management account, create a permission set for each IAM role.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "911",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br>A solutions architect needs to enforce the new process in the most secure way possible.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "911",
            "answers": [
              {
                "choice": "<p>A.  Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "912",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts its primary API on AWS by using an Amazon API Gateway API and AWS Lambda functions that contain the logic for the API methods. The company's internal applications use the API for core functionality and business logic. The company's customers use the API to access data from their accounts.<br>Several customers also have access to a legacy API that is running on a single standalone Amazon EC2 instance.<br>The company wants to increase the security for these APIs to better prevent denial of service (DoS) attacks, check for vulnerabilities, and guard against common exploits.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "912",
            "answers": [
              {
                "choice": "<p>A.  Use AWS WAF to protect both APIs. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze both APIs. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to protect the legacy API. Configure Amazon GuardDuty to block malicious attempts to access the APIs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "913",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its applications to the AWS Cloud. Each application will reside in its own AWS account after the migration. The applications will be hosted on Amazon EC2 Linux instances that need to be accessed through the shell for administration. The company's administrators want to use the AWS CLI from their laptops to interact with AWS and the EC2 instances.<br>The company is concerned that SSH access keys might be lost or become public. The company wants to avoid using long-term keys.<br>Which combination of steps should a solutions architect recommend to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "913",
            "answers": [
              {
                "choice": "<p>A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials. B Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Systems Manager Session Manager to obtain shell access to the EC2 instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Lambda function to rotate user access keys every 30 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create an AWS Lambda function to rotate SSH keys for the EC2 instances every 30 days.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "914",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect has created a single VPC on AWS. The VPC has one internet gateway and one NAT gateway. The VPC extends across three Availability<br>Zones. Each Availability Zone includes one public subnet and one private subnet. The three private subnets contain Amazon EC2 instances that must be able to connect to the internet.<br>Which solution will increase the network resiliency of this architecture?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "914",
            "answers": [
              {
                "choice": "<p>A.  Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each private subnet to send traffic to the NAT gateway in the subnet's Availability Zone.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each public subnet to send traffic to the NAT gateway in the subnet's Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each private subnet to send traffic to the internet gateway in the subnet's Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each public subnet to send traffic to the internet gateway in the subnet's Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "915",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-<br>Region AWS CloudTrail trail in the AWS account.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "915",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Invoke an AWS Step Functions state machine to remove access.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Use Amazon Pinpoint to notify the security team.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "916",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building dozens of new workloads by using a variety of AWS services. Each workload will belong to a separate business unit. The company needs to minimize costs as each business unit experiments with ways to innovate. The company also needs to maximize scalability for its security team so that the security team can identify and respond to threats as quickly as possible for all the workloads.<br>Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "916",
            "answers": [
              {
                "choice": "<p>A.  Set up a multi-account environment by using AWS Organizations. Organize accounts into the following OUs: Security, Infrastructure, Workloads, and Exception.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Set up a multi-account environment by using AWS Organizations. Organize accounts into the following SCPs: Security, Infrastructure, Workloads, and Exception.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure AWS Trusted Advisor to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP at the root of the organization with a condition that matches the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS Budgets alerts to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP to the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Turn on Amazon GuardDuty in each account. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team to the topic so that the security team can receive alerts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Create a delegated administrator account for Amazon GuardDuty in the organization in AWS Organizations. Create an Amazon Simple Notification Service (Amazon SNS) topic in this account. Subscribe the security team to the topic so that the security team can receive alerts.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "917",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is inked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.<br>Which solution will meet this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "917",
            "answers": [
              {
                "choice": "<p>A.  Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the role by using a trust policy.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "918",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only.<br>The magazine is expecting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch.<br>Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "918",
            "answers": [
              {
                "choice": "<p>A.  Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application tiers in Regions across the world.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers ג€' web, application, and database ג€' are in private subnets.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "919",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site- to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.<br>A solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "919",
            "answers": [
              {
                "choice": "<p>A.  Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a Client VPN endpoint in the main AWS account. Provision a transit gateway that is connected to each AWS account. Configure required routing that allows access to internal applications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a Client VPN endpoint in the main AWS account. Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "920",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's solutions architect is designing a disaster recovery (DR) solution for an application that runs on AWS. The application uses PostgreSQL 11.7 as its database. The company has an RPO of 30 seconds. The solutions architect must design a DR solution with the primary database in the us-east-1 Region and the failover database in the us-west-2 Region.<br>What should the solutions architect do to meet these requirements with minimum application change?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "920",
            "answers": [
              {
                "choice": "<p>A.  Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a read replica in us-west-2. Set the managed RPO for the RDS database to 30 seconds.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a standby replica in an Availability Zone in us-west-2. Set the managed RPO for the RDS database to 30 seconds.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Migrate the database to an Amazon Aurora PostgreSQL global database with the primary Region as us-east-1 and the secondary Region as us-west-2. Set the managed RPO for the Aurora database to 30 seconds.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Migrate the database to Amazon DynamoDB in us-east-1. Set up global tables with replica tables that are created in us-west-2.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "921",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that designs multiplayer online games wants to expand its user base outside of Europe. The company transfers a significant amount of UDP traffic to keep all the live and interactive sessions of the games. The company has plans for rapid expansion and wants to build its architecture to provide an optimized online experience to its users.<br>Which architecture will meet these requirements with the LOWEST latency for users?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "921",
            "answers": [
              {
                "choice": "<p>A.  Set up a Multi-AZ environment in a single AWS Region. Use Amazon CloudFront to cache user sessions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Set up environments in multiple AWS Regions. Create an accelerator in AWS Global Accelerator, and add endpoints from different Regions to it.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up environments in multiple AWS Regions. Use Amazon Route 53, and select latency-based routing.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Set up a Multi-AZ environment in a single AWS Region. Use AWS Lambda@Edge to update sessions closer to the users.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "922",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using a lift-and-shift strategy to migrate applications from several on-premises Windows servers to AWS. The Windows servers will be hosted on<br>Amazon EC2 instances in the us-east-1 Region.<br>The company's security policy allows the installation of migration tools on servers. The migration data must be encrypted in transit and encrypted at rest. The applications are business critical. The company needs to minimize the cutover window and minimize the downtime that results from the migration. The company wants to use Amazon CloudWatch and AWS CloudTrail for monitoring.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "922",
            "answers": [
              {
                "choice": "<p>A.  Use AWS Application Migration Service (CloudEndure Migration) to migrate the Windows servers to AWS. Create a Replication Settings template. Install the AWS Replication Agent on the source servers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS DataSync to migrate the Windows servers to AWS. Install the DataSync agent on the source servers. Configure a blueprint for the target servers. Begin the replication process.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS Server Migration Service (AWS SMS) to migrate the Windows servers to AWS. Install the SMS Connector on the source servers. Replicate the source servers to AWS. Convert the replicated volumes to AMIs to launch EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS Migration Hub to migrate the Windows servers to AWS. Create a project in Migration Hub. Track the progress of server migration by using the built- in dashboard.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "923",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has set up a multi-account AWS environment by using AWS Control Tower. Each AWS account that AWS Control Tower creates has its own VPC.<br>The company is developing an application that will integrate with many microservices. The company has designated a specific account to host the application. The company will deploy the microservices on Amazon EC2 instances and will implement the microservices across multiple AWS accounts.<br>The microservices require a high degree of interconnectivity. The company needs a solution that will give the application the ability to communicate privately with the microservices. The solution also must minimize cost and operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "923",
            "answers": [
              {
                "choice": "<p>A.  Use AWS VPN CloudHub to connect the application VPC to all the other VPCs. Use a virtual private gateway to provide traffic flow between all the VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create VPC peering connections between the application VPC and all the other VPCs. Update the security groups and route tables to allow traffic flow between all the VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a transit gateway in the application account. Attach the application VPC and all the other VPCs to the transit gateway. Create a transit gateway route table to direct traffic between the VPCs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Share the application VPC with the other AWS accounts by using AWS Resource Access Manager (AWS RAM). Deploy the microservices in the shared VPC. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "924",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an image-processing service in the AWS Cloud. Users upload images to an Amazon S3 bucket for processing. When an image is uploaded to the S3 bucket, several microservices that are based on AWS Lambda functions need to perform different processing tasks on the image. Each task's processing must start immediately after an image is uploaded.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "924",
            "answers": [
              {
                "choice": "<p>A.  Configure each microservice to create an S3 event notification with its Lambda function as the destination.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure AWS CloudTrail event logging for Amazon S3. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches PutObject API calls through CloudTrail. Register each microservice's Lambda function as a target for the rule.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern for PutObject events in S3 event notifications. Configure each microservice to register an Amazon Simple Queue Service (Amazon SQS) queue as a target for the rule. Invoke the microservice's Lambda function from the SQS queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an S3 event notification with an Amazon Simple Notification Service (Amazon SNS) topic as the destination. Create an SNS subscription for each microservice's Lambda function.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "925",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses multiple AWS accounts in a single AWS Region. A solutions architect is designing a solution to consolidate logs generated by Elastic Load<br>Balancers (ELBs) in the AppDev, AppTest, and AppProd accounts. The logs should be stored in an existing Amazon S3 bucket named s3-elb-logs in the central<br>AWS account. The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.<br>Which combination of steps should the solutions architect take to build the solution? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "925",
            "answers": [
              {
                "choice": "<p>A.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutBucketLogging action for the central AWS account ID. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject and s3:DeleteObject actions for the AppDev, AppTest, and AppProd account IDs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject action for the AppDev, AppTest, and AppProd account IDs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable access logging for the ELBs. Set the S3 location to the s3-elb-logs bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Enable Amazon S3 default encryption using server-side encryption with S3 managed encryption keys (SSE-S3) for the s3-elb-logs S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "926",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical company is running a REST API on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group behind an Application Load<br>Balancer (ALB). The ALB runs in three public subnets, and the EC2 instances run in three private subnets. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin.<br>Which solution should a solutions architect recommend to enhance the origin security?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "926",
            "answers": [
              {
                "choice": "<p>A.  Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the web ACL with the ALB.  Move the ALB into the three private subnets.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure AWS Shield Advanced. Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "927",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use<br>AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.<br>A review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "927",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type 'Email' that targets the team's mailing list.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a task named 'Email' that forwards the input arguments to the SNS topic.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Add a Catch field to all Task, Map, and Parallel states that have a statement of 'ErrorEquals': [ 'States.ALL' ] and 'Next': 'Email'.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create a task named 'Email' that forwards the input arguments to the SES email address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Add a Catch field to all Task, Map, and Parallel states that have a statement of 'ErrorEquals': [ 'States.Runtime' ] and 'Next': 'Email'.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "928",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed its database on an Amazon RDS for MySQL DB instance in the us-east-1 Region. The company needs to make its data available to customers in Europe. The customers in Europe must have access to the same data as customers in the United States (US) and will not tolerate high application latency or stale data. The customers in Europe and the customers in the US need to write to the database. Both groups of customers need to see updates from the other group in real time.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "928",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance. Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. Add eu-west-1 as a secondary Region to the 06 cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu- west-1.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add a cross-Region replica in eu-west-1 for the RDS for MySQL DB instance. Configure the replica to replicate write queries back to the primary DB instance. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Copy the most recent snapshot from the RDS for MySQL DB instance to eu-west-1. Create a new RDS for MySQL DB instance in eu-west-1 from the snapshot. Configure MySQL logical replication from us-east-1 to eu-west-1. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Convert the RDS for MySQL DB instance to an Amazon Aurora MySQL DB cluster. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "929",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours.<br>The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB. The database table uses provisioned throughput mode with 100,000 RCUs and 80,000 WCUs to match known peak resource consumption.<br>The company wants to reduce its DynamoDB cost and minimize the operational overhead for the IT staff.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "929",
            "answers": [
              {
                "choice": "<p>A.  Reduce the provisioned RCUs and WCUs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Change the DynamoDB table to use on-demand capacity.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable Dynamo DB auto scaling for the table.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "930",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to manage multiple accounts. Due to regulatory requirements, the company wants to restrict specific member accounts to certain AWS Regions, where they are permitted to deploy resources. The resources in the accounts must be tagged, enforced based on a group standard, and centrally managed with minimal configuration.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "930",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  From the AWS Billing and Cost Management console, in the management account, disable Regions for the specific member accounts and apply a tag policy on the root.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Associate the specific member accounts with the root. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Associate the specific member accounts with a new OU. Apply a tag policy and an SCP using conditions to limit Regions.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "931",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A developer reports receiving an Error 403: Access Denied message when they try to download an object from an Amazon S3 bucket. The S3 bucket is accessed using an S3 endpoint inside a VPC, and is encrypted with an AWS KMS key. A solutions architect has verified that the developer is assuming the correct IAM role in the account that allows the object to be downloaded. The S3 bucket policy and the NACL are also valid.<br>Which additional step should the solutions architect take to troubleshoot this issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "931",
            "answers": [
              {
                "choice": "<p>A.  Ensure that blocking all public access has not been enabled in the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Verify that the IAM role has permission to decrypt the referenced KMS key.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Verify that the IAM role has the correct trust relationship configured.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Check that local firewall rules are not preventing access to the S3 endpoint.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "932",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company deploys a new web application. As part of the setup, the company configures AWS WAF to log to Amazon S3 through Amazon Kinesis Data Firehose.<br>The company develops an Amazon Athena query that runs once daily to return AWS WAF log data from the previous 24 hours. The volume of daily logs is constant. However, over time, the same query is taking more time to run.<br>A solutions architect needs to design a solution to prevent the query time from continuing to increase. The solution must minimize operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "932",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Lambda function that consolidates each days AWS WAF logs into one log file.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Reduce the amount of data scanned by configuring AWS WAF to send logs to a different S3 bucket each day.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Update the Kinesis Data Firehose configuration to partition the data in Amazon S3 by date and time. Create external tables for Amazon Redshift. Configure Amazon Redshift Spectrum to query the data source.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Modify the Kinesis Data Firehose configuration and Athena table definition to partition the data by date and time. Change the Athena query to view the relevant partitions.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "933",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages an on-premises JavaScript front-end web application. The application is hosted on two servers secured with a corporate Active Directory.<br>The application calls a set of Java-based microservices on an application server and stores data in a clustered MySQL database. The application is heavily used during the day on weekdays. It is lightly used during the evenings and weekends.<br>Daytime traffic to the application has increased rapidly, and reliability has diminished as a result. The company wants to migrate the application to AWS with a solution that eliminates the need for server maintenance, with an API to securely connect to the microservices.<br>Which combination of actions will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "933",
            "answers": [
              {
                "choice": "<p>A.  Host the web application on Amazon S3. Use Amazon Cognito identity pools (federated identities) with SAML for authentication and authorization.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Host the web application on Amazon EC2 with Auto Scaling. Use Amazon Cognito federation and Login with Amazon for authentication and authorization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an API layer with Amazon API Gateway. Rehost the microservices on AWS Fargate containers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an API layer with Amazon API Gateway. Rehost the microservices on Amazon Elastic Container Service (Amazon ECS) containers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Replatform the database to Amazon RDS for MySQL.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Replatform the database to Amazon Aurora MySQL Serverless.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "934",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200 TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72 hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared the system run continuously. The compute and storage instances are all in the same AWS Region.<br>A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run.<br>Which solution will provide the LARGEST overall cost reduction while meeting these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "934",
            "answers": [
              {
                "choice": "<p>A.  Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "935",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is refactoring its on-premises order-processing platform in the AWS Cloud. The platform includes a web front end that is hosted on a fleet of VMs.<br>RabbitMQ to connect the front end to the backend, and a Kubernetes cluster to run a containerized backend system to process the orders. The company does not want to make any major changes to the application.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "935",
            "answers": [
              {
                "choice": "<p>A.  Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a custom AWS Lambda runtime to mimic the web server environment. Create an Amazon API Gateway API to replace the front-end web servers. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Install Kuhernetes on a fleet of different EC2 instances to host the order-processing backend.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AMI of the web server VM Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up an Amazon Simple Queue Service (Amazon SQS) queue to replace the on-premises messaging queue, Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "936",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br>The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "936",
            "answers": [
              {
                "choice": "<p>A.  Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of '<transit-account-id>/sg-1a2b3c4d'.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "937",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to move an application from on premises to the AWS Cloud. The application uses MySQL servers to store backend data. However, the application does not scale properly. The databases have become unresponsive as the user base has increased.<br>The company needs a solution to make the application highly available with low latency across multiple AWS Regions. The solution must require the least possible operational overhead and development effort.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "937",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon RDS for MySQL DB cluster that includes a cross-Region read replica. Use AWS Database Migration Service (AWS DMS) to migrate existing databases.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Deploy Amazon DynamoDB with global tables. Use AWS Database Migration Service (AWS DMS) to migrate existing databases. Adapt the application to work with DynamoDB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon Aurora global database. Use native MySQL tools to migrate existing databases.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create MySQL servers on Amazon EC2 instances in two Regions. Set up asynchronous software replication across Regions.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "938",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is located in three subnets in a VPC.<br>Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "938",
            "answers": [
              {
                "choice": "<p>A.  Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Host the Lambda functions outside the VPC.  Update the Neptune security group to allow access from the IP ranges of the Lambda functions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Host the Lambda functions outside the VPC.  Create a VPC endpoint for the Neptune database, and have the Lambda functions access Neptune over the VPC endpoint.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create three private subnets in the Neptune VPC.  Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB, and route DynamoDB traffic to the VPC endpoint.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "939",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "939",
            "answers": [
              {
                "choice": "<p>A.  Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Firewall Manner to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "940",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company provides specialized analytics services to customers. The analytics run on Amazon EC2 instances that need to be launched and terminated in response to requests from customers. A solutions architect is creating automation to manage the EC2 instances that handle customer requests. However, when the automation scripts attempt to launch many EC2 instances at the same time, a RequestLimitExceeded error frequently occurs.<br>What should the solutions architect do to handle this error?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "940",
            "answers": [
              {
                "choice": "<p>A.  Implement an exponential backoff strategy so that the API token bucket can refill.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Modify the EC2 instance launch configuration to install diagnostic tools on each instance to troubleshoot the issue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Request an increase for API throttling quotas from the AWS Support Center.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Request an EC2 API quota increase through the Service Quotas console.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "941",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a media metadata extraction pipeline running on AWS. Notifications containing a reference to a file in Amazon S3 are sent to an Amazon Simple<br>Notification Service (Amazon SNS) topic. The pipeline consists of a number of AWS Lambda functions that are subscribed to the SNS topic. The Lambda functions extract the S3 tile and write metadata to an Amazon RDS PostgreSQL DB instance.<br>Users report that updates to the metadata are sometimes slow to appear or are lost. During these times, the CPU utilization on the database is high and the number of failed Lambda invocations increases.<br>Which combination of actions should a solutions architect take to help resolve this issue? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "941",
            "answers": [
              {
                "choice": "<p>A.  Enable message delivery status on the SNS topic. Configure the SNS topic delivery policy to enable retries with exponential backoff.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue and subscribe the queue to the SNS topic. Configure the Lambda functions to consume messages from the SQS queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an RDS proxy for the RDS instance. Update the Lambda functions to connect to the RDS instance using the proxy.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable the RDS Data API for the RDS instance. Update the Lambda functions to connect to the RDS instance using the Data API.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create an Amazon Simple Queue Service (Amazon SQS) standard queue for each Lambda function and subscribe the queues to the SNS topic. Configure the Lambda functions to consume messages from their respective SQS queue.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "942",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has VPC flow logs enabled for its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address<br>198.51.100.2 destined for a private Amazon EC2 instance.<br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br>Which set of steps should the solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "942",
            "answers": [
              {
                "choice": "<p>A.  Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 203.0' and the source address set as 'like 198.51.100.2'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 203.0' and the source address set as 'like 198.51.100.2'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 198.51.100.2' and the source address set as 'like 203.0'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as 'like 198.51.100.2' and the source address set as 'like 203.0'. Run the stats command to filter the sum of bytes transferred by the source address and the destination address.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "943",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning a migration from an on-premises data center to the AWS Cloud. The company plans to use multiple AWS accounts that are managed in an organization in AWS Organizations. The company will create a small number of accounts initially and will add accounts as needed. A solutions architect must design a solution that turns on AWS CloudTrail in all AWS accounts.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "943",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Lambda function that creates a new CloudTrail trail in all AWS accounts in the organization. Invoke the Lambda function daily by using a scheduled action in Amazon EventBridge (Amazon CloudWatch Events).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new CloudTrail trail in the organization's management account. Configure the trail to log all events for all AWS accounts in the organization.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a new CloudTrail trail in all AWS accounts in the organization. Create new trails whenever a new account is created. Define an SCP that prevents deletion or modification of trails. Apply the SCP to the root OU.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Systems Manager Automation runbook that creates a CloudTrail trail in all AWS accounts in the organization. Invoke the automation by using Systems Manager State Manager.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "944",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC. Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.<br>A security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "944",
            "answers": [
              {
                "choice": "<p>A.  Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "945",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has developed a single-page web application in JavaScript. The source code is stored in a single Amazon S3 bucket in the us-east-1 Region. The company serves the web application to a global user base through Amazon CloudFront.<br>The company wants to experiment with two versions of the website without informing application users. Each version of the website will reside in its own S3 bucket. The company wants to determine which version is most successful in marketing a new product.<br>The solution must send application users that are based in Europe to the new website design. The solution must send application users that are based in the<br>United States to the current website design. However, some exceptions exist. The company needs to be able to redirect specific users to the new website design, regardless of the users' location.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "945",
            "answers": [
              {
                "choice": "<p>A.  Configure two CloudFront distributions. Configure a geolocation routing policy in Amazon Route 53 to route traffic to the appropriate CloudFront endpoint based on the location of clients.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure a single CloudFront distribution. Create a behavior with different paths for each version of the site. Configure Lambda@Edge on the default path to generate redirects and send the client to the correct version of the website.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure a single CloudFront distribution. Configure an alternate domain name on the distribution. Configure two behaviors to route users to the different S3 origins based on the domain name that the client uses in the HTTP request.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure a single CloudFront distribution with Lambda@Edge. Use Lambda@Edge to send user requests to different origins based on request attributes.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "946",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an organization in AWS Organizations. The company has enabled trusted access between Organizations and AWS Resource Access Manager<br>(AWS RAM). The organization includes three AWS accounts, one each for shared services, development, and production. The shared services account has a<br>VPC.<br>A solutions architect needs to meet the following requirements:<br>* Configure access between the shared services VPC and the development and production accounts.<br>* Ensure that workloads in each account are deployed to at least three Availability Zones.<br>* Ensure that there is no direct communication between the development and production workloads.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "946",
            "answers": [
              {
                "choice": "<p>A.  In the shared services VPC, create three subnets for three Availability Zones. Create one subnet in each Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the shared services VPC, create six subnets for three Availability Zones. Create two subnets in each Availability Zone.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure network ACLs to prevent connectivity between the subnets in the development account and the production account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure VPC default security group outbound rules to prevent connectivity between the subnets in the development account and the production account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share the same three subnets with the production account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share three other subnets in different Availability Zones with the production account.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      }
    ]
  }