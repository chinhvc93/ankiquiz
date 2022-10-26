var ExamTopic_800_899 = {
  "msg": "Exam Topic 700 - 799",
  "data": [
    {
      "question_id": "800",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has used infrastructure as code (IaC) to provision a set of two Amazon EC2 instances. The instances have remained the same for several years.<br>The company's business has grown rapidly in the past few months. In response the company's operations team has implemented an Auto Scaling group to manage the sudden increases in traffic. Company policy requires a monthly installation of security updates on all operating systems that are running.<br>The most recent security update required a reboot. As a result, the Auto Scaling group terminated the instances and replaced them with new, unpatched instances.<br>Which combination of steps should a solutions architect recommend to avoid a recurrence of this issue? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "800",
          "answers": [
            {
              "choice": "<p>A.  Modify the Auto Scaling group by setting the Update policy to target the oldest launch configuration for replacement.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a new Auto Scaling group before the next patch maintenance. During the maintenance window, patch both groups and reboot the instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an Elastic Load Balancer in front of the Auto Scaling group. Configure monitoring to ensure that target group health checks return healthy after the Auto Scaling group replaces the terminated instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create automation scripts to patch an AMI, update the launch configuration, and invoke an Auto Scaling instance refresh.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create an Elastic Load Balancer in front of the Auto Scaling group. Configure termination protection on the instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "801",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company in North America plans to release a new online web application to its customers on AWS. The company will launch the application in the us-east-1 Region on Amazon EC2 instances. The application must be highly available and must dynamically scale to meet user traffic. The company also wants to implement a disaster recovery environment for the application in the us-west-1 Region by using active-passive failover.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "801",
          "answers": [
            {
              "choice": "<p>A.  Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC.  Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC.  Place the Auto Scaling group behind the ALB.  Set up the same configuration in the us-west-1 VPC.  Create an Amazon Route 53 hosted zone. Create separate records for each ALB.  Enable health checks to ensure high availability between Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in that VPC.  Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in the us-east-1 VPC.  Place the Auto Scaling group behind the ALB.  Set up the same configuration in the us-west-1 VPC.  Create an Amazon Route 53 hosted zone. Create separate records for each ALB.  Enable health checks and configure a failover routing policy for each record.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones in both VPCs. Create an Auto Scaling group that deploys the EC2 instances across the multiple Availability Zones in both VPCs. Place the Auto Scaling group behind the ALB.  Create an Amazon Route 53 hosted zone. Create a record for the ALB. </p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "802",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's site reliability engineer is performing a review of Amazon FSx for Windows File Server deployments within an account that the company acquired.<br>Company policy states that all Amazon FSx file systems must be configured to be highly available across Availability Zones.<br>During the review, the site reliability engineer discovers that one of the Amazon FSx file systems used a deployment type of Single-AZ 2. A solutions architect needs to minimize downtime while aligning this Amazon FSx file system with company policy.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "802",
          "answers": [
            {
              "choice": "<p>A.  Reconfigure the deployment type to Multi-AZ for this Amazon FSx file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a new Amazon FSx file system with a deployment type of Multi-AZ. Use AWS DataSync to transfer data to the new Amazon FSx file system. Point users to the new location.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a second Amazon FSx file system with a deployment type of Single-AZ 2. Use AWS DataSync to keep the data in sync. Switch users to the second Amazon FSx file system in the event of failure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use the AWS Management Console to take a backup of the Amazon FSx file system. Create a new Amazon FSx file system with a deployment type of Multi- AZ. Restore the backup to the new Amazon FSx file system. Point users to the new location.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "803",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is analyzing costs of a multi-application environment. The environment is deployed across multiple Availability Zones in a single<br>AWS Region. After a recent acquisition, the company manages two organizations in AWS Organizations. The company has created multiple service provider applications as AWS PrivateLink-powered VPC endpoint services in one organization. The company has created multiple service consumer applications in the other organization.<br>Data transfer charges are much higher than the company expected, and the solutions architect needs to reduce the costs. The solutions architect must recommend guidelines for developers to follow when they deploy services. These guidelines must minimize data transfer charges for the whole environment.<br>Which guidelines meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "803",
          "answers": [
            {
              "choice": "<p>A.  Use AWS Resource Access Manager to share the subnets that host the service provider applications with other accounts in the organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Place the service provider applications and the service consumer applications in AWS accounts in the same organization.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Turn off cross-zone load balancing for the Network Load Balancer in all service provider application deployments.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Ensure that service consumer compute resources use the Availability Zone-specific endpoint service by using the endpoint's local DNS name.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a Savings Plan that provides adequate coverage for the organization's planned inter-Availability Zone data transfer usage.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "804",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role.<br>The IT support workers no longer want to maintain both their Active Directory and IAM user accounts. They want to be able to access the console by using their existing Active Directory credentials. The solutions architect is using AWS Single Sign-On (AWS SSO) to implement this functionality.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "804",
          "answers": [
            {
              "choice": "<p>A.  Create an organization in AWS Organizations. Turn on the AWS SSO feature in Organizations Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS SSO and set the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an organization in AWS Organizations. Turn on the AWS SSO feature in Organizations Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure AWS SSO and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure a directory in AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) with a two-way trust to the company's on-premises Active Directory. Configure AWS SSO and select the AWS Managed Microsoft AD directory as the identity source. Create permission sets and map them to the existing groups within the AWS Managed Microsoft AD directory.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Configure AWS SSO and select the AD Connector as the identity source. Create permission sets and map them to the existing groups within the company's Active Directory.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "805",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company created a game leaderboard by using a Multi-AZ deployment of an Amazon RDS database. The number of users is growing, and the queries to get individual player rankings are getting slower over time. The company expects a surge in users for an upcoming version and wants to optimize the design for scalability and performance.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "805",
          "answers": [
            {
              "choice": "<p>A.  Migrate the database to Amazon DynamoDB.  Store the leaderboard data in two different tables. Use Apache HiveQL JOIN statements to build the leaderboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Keep the leaderboard data in the RDS DB instance. Provision a Multi-AZ deployment of an Amazon ElastiCache for Redis cluster.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Stream the leaderboard data by using Amazon Kinesis Data Firehose with an Amazon S3 bucket as the destination. Query the S3 bucket by using Amazon Athena for the leaderboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Add a read-only replica to the RDS DB instance. Add an RDS Proxy database proxy.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "806",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a software-as-a-service (SaaS) application on AWS. The application consists of AWS Lambda functions and an Amazon RDS for MySQL Multi-<br>AZ database. During market events, the application has a much higher workload than normal. Users notice slow response times during the peak periods because of many database connections. The company needs to improve the scalable performance and availability of the database.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "806",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon CloudWatch alarm action that triggers a Lambda function to add an Amazon RDS for MySQL read replica when resource utilization hits a threshold.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Migrate the database to Amazon Aurora, and add a read replica. Add a database connection pool outside of the Lambda handler function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Migrate the database to Amazon Aurora, and add a read replica. Use Amazon Route 53 weighted records.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Migrate the database to Amazon Aurora, and add an Aurora Replica. Configure Amazon RDS Proxy to manage database connection pools.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "807",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "807",
          "answers": [
            {
              "choice": "<p>A.  Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an Amazon FSx for Windows File Server Multi-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a new S3 bucket. Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share on the volume gateway, and automate copies of this data to an S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "808",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts. The company recently had a security audit that revealed many unencrypted Amazon Elastic Block Store (Amazon EBS) volumes attached to Amazon EC2 instances.<br>A solutions architect must encrypt the unencrypted volumes and ensure that unencrypted volumes will be detected automatically in the future. Additionally, the company wants a solution that can centrally manage multiple AWS accounts with a focus on compliance and security.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "808",
          "answers": [
            {
              "choice": "<p>A.  Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the strongly recommended guardrails. Join all accounts to the organization. Categorize the AWS accounts into OUs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use the AWS CLI to list all the unencrypted volumes in all the AWS accounts. Run a script to encrypt all the unencrypted volumes in place.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a snapshot of each unencrypted volume. Create a new encrypted volume from the unencrypted snapshot. Detach the existing volume, and replace it with the encrypted volume.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the mandatory guardrails. Join all accounts to the organization. Categorize the AWS accounts into OUs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Turn on AWS CloudTrail. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule to detect and automatically encrypt unencrypted volumes.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "809",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new application that needs to run on five Amazon EC2 instances in a single AWS Region. The application requires high-throughput, low-latency network connections between all of the EC2 instances where the application will run. There is no requirement for the application to be fault tolerant.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "809",
          "answers": [
            {
              "choice": "<p>A.  Launch five new EC2 instances into a cluster placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Launch five new EC2 instances into an Auto Scaling group in the same Availability Zone. Attach an extra elastic network interface to each EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Launch five new EC2 instances into a partition placement group. Ensure that the EC2 instance type supports enhanced networking.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Launch five new EC2 instances into a spread placement group. Attach an extra elastic network interface to each EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "810",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company is hosting a high-traffic news website on AWS. The website's front end is based solely on HTML and JavaScript. The company loads all dynamic content by using dynamic asynchronous JavaScript requests to a dedicated backend infrastructure.<br>The front end runs on four Amazon EC2 instances as web servers. The dynamic backend runs in containers on an Amazon Elastic Container Service (Amazon<br>ECS) cluster that uses an Auto Scaling group of EC2 instances. The ECS tasks are behind an Application Load Balancer (ALB).<br>Which solutions should a solutions architect recommend to optimize costs? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "810",
          "answers": [
            {
              "choice": "<p>A.  Migrate the front end of the website to an Amazon S3 bucket Deploy an Amazon CloudFront distribution. Set the S3 bucket as the distribution's origin.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an Amazon CloudFront distribution. Configure the distribution to use the ALB endpoint as the origin.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Migrate the front-end services to the ECS cluster. Increase the minimum number of nodes in the Auto Scaling group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Turn on Auto Scaling for the front-end EC2 instances. Configure a new listener rule on the ALB to serve the front end.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Migrate the backend of the website to an Amazon S3 bucket. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the distribution's origin.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "811",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application on AWS. The application sends logs to an Amazon Elasticsearch Service (Amazon ES) cluster for analysis. All data must be stored within a VPC.<br>Some of the company's developers work from home. Other developers work from three different company office locations. The developers need to access<br>Amazon ES to analyze and visualize logs directly from their local development machines.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "811",
          "answers": [
            {
              "choice": "<p>A.  Configure and set up an AWS Client VPN endpoint. Associate the Client VPN endpoint with a subnet in the VPC.  Configure a Client VPN self-service portal. Instruct the developers to connect by using the client for Client VPN.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a transit gateway, and connect it to the VPC.  Create an AWS Site-to-Site VPN. Create an attachment to the transit gateway. Instruct the developers to connect by using an OpenVPN client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a transit gateway, and connect it to the VPC.  Order an AWS Direct Connect connection. Set up a public VIF on the Direct Connect connection. Associate the public VIF with the transit gateway. Instruct the developers to connect to the Direct Connect connection</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create and configure a bastion host in a public subnet of the VPC.  Configure the bastion host security group to allow SSH access from the company CIDR ranges. Instruct the developers to connect by using SSH.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "812",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has created an OU in AWS Organizations for each of its engineering teams. Each OU owns multiple AWS accounts. The organization has hundreds of<br>AWS accounts.<br>A solutions architect must design a solution so that each OU can view a breakdown of usage costs across its AWS accounts.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "812",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS Cost and Usage Report (CUR) for each OU by using AWS Resource Access Manager. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Cost and Usage Report (CUR) in each AWS Organizations member account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS Cost and Usage Report (CUR) by using AWS Systems Manager. Allow each team to visualize the CUR through Systems Manager OpsCenter dashboards.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "813",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company in the United States (US) has acquired a company in Europe. Both companies use the AWS Cloud. The US company has built a new application with a microservices architecture. The US company is hosting the application across five VPCs in the us-east-2 Region. The application must be able to access resources in one VPC in the eu-west-1 Region. However, the application must not be able to access any other VPCs.<br>The VPCs in both Regions have no overlapping CIDR ranges. All Accounts are already consolidated in one organization in AWS Organizations.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "813",
          "answers": [
            {
              "choice": "<p>A.  Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables for each subnet so that the traffic is routed through the regional transit gateway. Peer the two transit gateways.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "814",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A United Kingdom (UK) company recently completed a successful proof of concept in Amazon WorkSpaces. The company also has a large office in the United<br>States (US). Staff members from each office regularly travel between the two locations and need access to a corporate WorkSpace without any reconfiguration of their WorkSpaces client.<br>The company has purchased a domain by using Amazon Route 53 for the connection alias. The company will use a Windows profile and document management solution.<br>A solutions architect needs to design the full solution. The solution must use a configuration of WorkSpaces in two AWS Regions and must provide Regional resiliency.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "814",
          "answers": [
            {
              "choice": "<p>A.  Create a connection alias in a UK Region and a US Region. Associate the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a geolocation routing policy. Distribute the connection string to the WorkSpaces users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a connection alias in a UK Region. Associated the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a weighted routing policy, with the UK Region set to 1 and a US Region set to 255. Distribute the connection string for the UK Region to the WorkSpaces users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a connection alias in a UK Region and a US Region. Associate the connection aliases with a directory in each Region. Configure the DNS service for the domain in the connection alias. Configure a geolocation routing policy. Distribute the connection string to the WorkSpaces users.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a connection alias in a US Region. Associated the connection alias with a directory in the UK Region. Configure the DNS service for the domain in the connection alias. Configure a multivalue answer routing policy. Distribute the connection string for the US Region to the WorkSpaces users.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "815",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a serverless multi-tenant content management system on AWS. The architecture contains a web-based front end that interacts with an Amazon<br>API Gateway API that uses a custom AWS Lambda authorizer. The authorizer authenticates a user to its tenant ID and encodes the information in a JSON Web<br>Token (JWT) token. After authentication, each API call through API Gateway targets a Lambda function that interacts with a single Amazon DynamoDB table to fulfill requests.<br>To comply with security standards, the company needs a stronger isolation between tenants. The company will have hundreds of customers within the first year.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "815",
          "answers": [
            {
              "choice": "<p>A.  Create a DynamoDB table for each tenant by using the tenant ID in the table name. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access only to the DynamoDB table for the tenant.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Add tenant ID information to the partition key of the DynamoDB table. Create a service that uses the JWT token to retrieve the appropriate Lambda execution role that is tenant-specific. Attach IAM policies to the execution role to allow access to items in the table only when the key matches the tenant ID. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a separate AWS account for each tenant of the application. Use dedicated infrastructure for each tenant. Ensure that no cross-account network connectivity exists.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Add tenant ID as a sort key in every DynamoDB table. Add logic to each Lambda function to use the tenant ID that comes from the JWT token as the sort key in every operation on the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "816",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a custom database in the AWS Cloud. The database uses Amazon EC2 for compute and uses Amazon Elastic Block Store (Amazon EBS) for storage. The database runs on the latest generation of EC2 instances and uses a General Purpose SSD (gp2) EBS volume for data.<br>The current data volume has the following characteristics:<br>✑ The volume is 512 GB in size.<br>✑ The volume never goes above 256 GB utilization.<br>✑ The volume consistently uses around 1,500 IOPS.<br>A solutions architect needs to conduct an analysis of the current database storage layer and make a recommendation about ways to reduce cost.<br>Which solution will provide the MOST cost savings without impacting the performance of the database?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "816",
          "answers": [
            {
              "choice": "<p>A.  Convert the data volume to the Cloud HDD (sc1) type. Leave the volume as 512 GB.  Set the volume IOPS to 1,500.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Convert the data volume to the Provisioned IOPS SSD (io2) type. Resize the volume to 256 GB.  Set the volume IOPS to 1,500.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Convert the data volume to the Provisioned IOPS SSD (io2) Block Express type. Leave the volume as 512 GB.  Set the volume IOPS to 1,500.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Convert the data volume to the General Purpose SSD (gp3) type. Resize the volume to 256 GB.  Set the volume IOPS to 1,500.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "817",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is hosting an ecommerce website on AWS across multiple AWS Regions. The company wants the website to be operational at all times for online purchases. The website stores data in an Amazon RDS for MySQL DB instance.<br>Which solution will provide the HIGHEST availability for the database?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "817",
          "answers": [
            {
              "choice": "<p>A.  Configure automated backups on Amazon RDS. In the case of disruption, promote an automated backup to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure global tables and read replicas on Amazon RDS. Activate the cross-Region scope. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure global tables and automated backups on Amazon RDS. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region and read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance. Create a replacement read replica that has the promoted DB instance as its source.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "818",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon S3 to back up its on-premises file storage solution. The company's on-premises file storage solution supports NFS, and the company wants its new solution to support NFS. The company wants to archive the backup files after 5 days. If the company needs archived files for disaster recovery, the company is willing to wait a few days for the retrieval of those files.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: E</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "818",
          "answers": [
            {
              "choice": "<p>A.  Deploy an AWS Storage Gateway files gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the file to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an AWS Storage Gateway volume gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the volume gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy an AWS Storage Gateway tape gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "819",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video processing company wants to build a machine learning (ML) model by using 600 TB of compressed data that is stored as thousands of files in the company's on-premises network attached storage system. The company does not have the necessary compute resources on premises for ML experiments and wants to use AWS.<br>The company needs to complete the data transfer to AWS within 3 weeks. The data transfer will be a one-time transfer. The data must be encrypted in transit. The measured upload speed of the company's internet connection is 100 Mbps, and multiple departments share the connection.<br>Which solution will meet these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "819",
          "answers": [
            {
              "choice": "<p>A.  Order several AWS Snowball Edge Storage Optimized devices by using the AWS Management Console. Configure the devices with a destination S3 bucket. Copy the data to the devices. Ship the devices back to AWS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a VPN connection between the on-premises network storage and the nearest AWS Region. Transfer the data over the VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy an AWS Storage Gateway file gateway on premises. Configure the file gateway with a destination S3 bucket. Copy the data to the file gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "820",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has several AWS accounts. A development team is building an automation framework for cloud governance and remediation processes. The automation framework uses AWS Lambda functions in a centralized account. A solutions architect must implement a least privilege permissions policy that allows the Lambda functions to run in each of the company's AWS accounts.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "820",
          "answers": [
            {
              "choice": "<p>A.  In the centralized account, create an IAM role that has the Lambda service as a trusted entity. Add an inline policy to assume the roles of the other AWS accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  In the other AWS accounts, create an IAM role that has minimal permissions. Add the centralized account's Lambda IAM role as a trusted entity.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  In the centralized account, create an IAM role that has roles of the other accounts as trusted entities. Provide minimal permissions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  In the other AWS accounts, create an IAM role that has permissions to assume the role of the centralized account. Add the Lambda service as a trusted entity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  In the other AWS accounts, create an IAM role that has minimal permissions. Add the Lambda service as a trusted entity.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "821",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A hedge fund company is developing a new web application to handle trades. Traders around the world will use the application. The application will handle hundreds of thousands of transactions, especially during overlapping work hours between Europe and the United States.<br>According to the company's disaster recovery plan, the data that is generated must be replicated to a second AWS Region. Each transaction item will be less than<br>100 KB in size. The company wants to simplify the CI/CD pipeline as much as possible.<br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "821",
          "answers": [
            {
              "choice": "<p>A.  Deploy the application in multiple Regions. Use Amazon Route 53 latency-based routing to route users to the nearest deployment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Provision an Amazon Aurora global database to persist data. Use Amazon ElastiCache to improve response time.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Provision an Amazon CloudFront domain with the website as an origin. Restrict access to geographies where the usage is expected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Provision an Amazon DynamoDB global table. Use DynamoDB Accelerator (DAX) to improve response time.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Provision an Amazon Aurora multi-master cluster to persist data. Use Amazon ElastiCache to improve response time.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "822",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating some of its applications to AWS. The company wants to migrate and modernize the applications quickly after it finalizes networking and security strategies. The company has set up an AWS Direct Connection connection in a central network account.<br>The company expects to have hundreds of AWS accounts and VPCs in the near future. The corporate network must be able to access the resources on AWS seamlessly and also must be able to communicate with all the VPCs. The company also wants to route its cloud resources to the internet through its on-premises data center.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "822",
          "answers": [
            {
              "choice": "<p>A.  Create a Direct Connect gateway in the central account. In each of the accounts, create an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a Direct Connect gateway and a transit gateway in the central network account. Attach the transit gateway to the Direct Connect gateway by using a transit VIF. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Provision an internet gateway. Attach the internet gateway to subnets. Allow internet traffic through the gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Share the transit gateway with other accounts. Attach VPCs to the transit gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Provision VPC peering as necessary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Provision only private subnets. Open the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "823",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a software-as-a-service (SaaS) solution on AWS. The company has deployed an Amazon API Gateway REST API with AWS Lambda integration in multiple AWS Regions and in the same production account.<br>The company offers tiered pricing that gives customers the ability to pay for the capacity to make a certain number of API calls per second. The premium tier offers up to 3,000 calls per second, and customers are identified by a unique API key. Several premium tier customers in various Regions report that they receive error responses of 429 Too Many Requests from multiple API methods during peak usage hours. Logs indicate that the Lambda function is never invoked.<br>What could be the cause of the error messages for these customers?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "823",
          "answers": [
            {
              "choice": "<p>A.  The Lambda function reached its concurrency limit.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The Lambda function its Region limit for concurrency.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  The company reached its API Gateway account limit for calls per second.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  The company reached its API Gateway default per-method limit for calls per second.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "824",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLS are defined in a JSON document. All DNS records are managed by Amazon Route 53.<br>A solutions architect must implement a redirect service that accepts HTTP and HTTPS requests.<br>Which combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "824",
          "answers": [
            {
              "choice": "<p>A.  Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Application Load Balancer that includes HTTP and HTTPS listeners.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Create an SSL certificate by using AWS Certificate Manager (ACM). Include the domains as Subject Alternative Names.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "825",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company asks a solution architect to optimize the cost of a solution. The solution handles requests from multiple customers. The solution includes a multi-tier architecture that uses Amazon API Gateway, AWS Lambda, AWS Fargate, Amazon Simple Queue Service (Amazon SQS), and Amazon EC2.<br>In the current setup, requests go through API Gateway to Lambda and either start a container in Fargate or push a message to an SQS queue. An EC2 Fleet provides EC2 instances that serve as workers for the SQS queue. The EC2 Fleet scales based on the number of items in the SQS queue.<br>Which combination of steps should the solutions architect recommend to reduce cost the MOST? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "825",
          "answers": [
            {
              "choice": "<p>A.  Determine the minimum number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Examine the last 6 months of compute utilization across the services. Use this information to determine the needed compute for the solution. Commit to a Savings Plan for this amount.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Determine the average number of EC2 instances that are needed during a day. Reserve this number of instances in a 3-year plan with payment all upfront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Remove the SQS queue from the solution and from the solution infrastructure.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Change the solution so that it runs as a container instead of on EC2 instances. Configure Lambda to start up the solution in Fargate by using environment variables to give the solution the message.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Change the Lambda function so that it posts the message directly to the EC2 instances through an Application Load Balancer.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "826",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a messaging application that is based on a microservices architecture. A separate team develops each microservice by using Amazon<br>Elastic Container Service (Amazon ECS). The teams deploy the microservices multiple times daily by using AWS CloudFormation and AWS CodePipeline.<br>The application recently grew in size and complexity. Each service operates correctly on its own during development, but each service produces error messages when it has to interact with other services in production. A solutions architect must improve the application's availability.<br>Which solution will meet these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "826",
          "answers": [
            {
              "choice": "<p>A.  Add an extra stage to CodePipeline for each service. Use the extra stage to deploy each service to a test environment. Test each service after deployment to make sure that no error messages occur.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Add an AWS::CodeDeployBlueGreen Transform section and Hook section to the template to enable blue/green deployments by using AWS CodeDeploy in CloudFormation. Configure the template to perform ECS blue/green deployments in production.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Add an extra stage to CodePipeline for each service. Use the extra stage to deploy each service to a test environment. Write integration tests for each service. Run the tests automatically after deployment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use an ECS DeploymentConfiguration parameter in the template to configure AWS CodeDeploy to perform a rolling update of the service. Use a CircuitBreaker property to roll back the deployment if any error occurs during deployment.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "827",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting.<br>The company's existing architecture includes the following:<br>✑ A VPC with private and public subnets, and a NAT gateway<br>✑ Site-to-Site VPN for connectivity with the on-premises environment<br>✑ EC2 security groups with direct SSH access from the on-premises environment<br>The company needs to increase security controls around SSH access and provide auditing of commands run by the engineers.<br>Which strategy should a solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "827",
          "answers": [
            {
              "choice": "<p>A.  Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an IAM role with the AmazonSSMManagedInstanceCore managed policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin for their devices and remotely access the instances by using the start-session API call from Systems Manager.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "828",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating mobile banking applications to run on Amazon EC2 instances in a VPC. Backend service applications run in an on-premises data center.<br>The data center has an AWS Direct Connect connection into AWS. The applications that run in the VPC need to resolve DNS requests to an on-premises Active<br>Directory domain that runs in the data center.<br>Which solution will meet these requirements with the LEAST administrative overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "828",
          "answers": [
            {
              "choice": "<p>A.  Provision a set of EC2 instances across two Availability Zones in the VPC as caching DNS servers to resolve DNS queries from the application servers within the VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Provision an Amazon Route 53 private hosted zone. Configure NS records that point to on-premises DNS servers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create DNS endpoints by using Amazon Route 53 Resolver Add conditional forwarding rules to resolve DNS namespaces between the on-premises data center and the VPC. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Provision a new Active Directory domain controller in the VPC with a bidirectional trust between this new domain and the on-premises Active Directory domain.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "829",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The service will then overlay text on the uploaded images, which will then be published on the company website.<br>Which design should a solutions architect implement?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "829",
          "answers": [
            {
              "choice": "<p>A.  Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "830",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new security policy. The policy requires the company to log any event that retrieves data from Amazon S3 buckets. The company must save these audit logs in a dedicated S3 bucket.<br>The company created the audit logs S3 bucket in an AWS account that is designated for centralized logging. The S3 bucket has a bucket policy that allows write- only cross-account access.<br>A solutions architect must ensure that all S3 object-level access is being logged for current S3 buckets and future S3 buckets.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "830",
          "answers": [
            {
              "choice": "<p>A.  Enable server access logging for all current S3 buckets. Use the audit logs S3 bucket as a destination for audit logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Enable replication between all current S3 buckets and the audit logs S3 bucket. Enable S3 Versioning in the audit logs S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure S3 Event Notifications for all current S3 buckets to invoke an AWS Lambda function every time objects are accessed. Store Lambda logs in the audit logs S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable AWS CloudTrail, and use the audit logs S3 bucket to store logs. Enable data event logging for S3 event sources, current S3 buckets, and future S3 buckets.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "831",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB).<br>The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB. Static content is cached. Amazon Route 53 is used to host all public zones.<br>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB. The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.<br>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.<br>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "831",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon S3 bucket. Configure the S3 bucket to host a static webpage. Upload the custom error pages to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Target FailedHealthChecks is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Modify the existing Amazon Route 53 records by adding health checks. Configure a fallback target if the health check fails. Modify DNS records to point to a publicly accessible webpage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Elb.InternalError is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a public accessible web server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Add a custom error response by configuring a CloudFront custom error page. Modify DNS records to point to a publicly accessible web page.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "832",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company runs workloads in VPCs that are deployed across hundreds of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connectivity to the internet from the private subnets.<br>A solutions architect is working on a hub-and-spoke design. All private subnets in the spoke VPCs must route traffic to the internet through an egress VPC. The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account.<br>Which set of additional steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "832",
          "answers": [
            {
              "choice": "<p>A.  Create peering connections between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a transit gateway, and share it with the existing AWS accounts. Attach existing VPCs to the transit gateway. Configure the required routing to allow access to the internet.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a transit gateway in every account. Attach the NAT gateway to the transit gateways. Configure the required routing to allow access to the internet.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS PrivateLink connection between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "833",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company sells its software-as-a-service (SaaS) platform for application compliance to large global banks. The SaaS platform runs on AWS and uses multiple AWS accounts that are managed in an organization in AWS Organizations. The SaaS platform uses many AWS resources globally.<br>For regulatory compliance, all API calls to AWS resources must be audited, tracked for changes, and stored in a durable and secure data store.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "833",
          "answers": [
            {
              "choice": "<p>A.  Create a new AWS CloudTrail trail. Use an existing Amazon S3 bucket in the organization's management account to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a new AWS CloudTrail trail in each member account of the organization. Create new Amazon S3 buckets to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 buckets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket with versioning turned on to store the logs. Deploy the trail for all accounts in the organization. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket to store the logs. Configure Amazon Simple Notification Service (Amazon SNS) to send log-file delivery notifications to an external management system that will track the logs. Enable MFA delete and encryption on the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "834",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company runs a business-critical web service on an Amazon Elastic Container Service (Amazon ECS) cluster that runs on Amazon EC2 instances. The web service receives POST requests from end users and writes data to a MySQL database that runs on a separate EC2 instance. The company needs to ensure that data loss does not occur.<br>The current code deployment process includes manual updates of the ECS service. During a recent deployment, end users encountered intermittent 502 Bad<br>Gateway errors in response to valid web requests.<br>The company wants to implement a reliable solution to prevent this issue from recurring. The company also wants to automate code deployments. The solution must be highly available and must optimize cost-effectiveness.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "834",
          "answers": [
            {
              "choice": "<p>A.  Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a blue/green deployment with validation testing to update the ECS service.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses Provisioned IOPS SSD (io2) storage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure an Amazon Simple Queue Service (Amazon SQS) queue as an event source to receive the POST requests from the web service. Configure an AWS Lambda function to poll the queue. Write the data to the database.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Run the web service on an ECS cluster that has a Fargate launch type. Use AWS CodePipeline and AWS CodeDeploy to perform a canary deployment to update the ECS service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Configure an Amazon Simple Queue Service (Amazon SQS) queue. Install the SQS agent on the containers that run in the ECS cluster to poll the queue. Write the data to the database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Migrate the MySQL database to run on an Amazon RDS for MySQL Multi-AZ DB instance that uses General Purpose SSD (gp3) storage.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "835",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts as part of an organization created with AWS Organizations. Each account has a VPC in the us-east-2 Region and is used for either production or development workloads. Amazon EC2 instances across production accounts need to communicate with each other, and EC2 instances across development accounts need to communicate with each other, but production and development instances should not be able to communicate with each other.<br>To facilitate connectivity, the company created a common network account. The company used AWS Transit Gateway to create a transit gateway in the us-east-2<br>Region in the network account and shared the transit gateway with the entire organization by using AWS Resource Access Manager. Network administrators then attached VPCs in each account to the transit gateway, after which the EC2 instances were able to communicate across accounts. However, production and development accounts were also able to communicate with one another.<br>Which set of steps should a solutions architect take to ensure production traffic and development traffic are completely isolated?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "835",
          "answers": [
            {
              "choice": "<p>A.  Modify the security groups assigned to development EC2 instances to block traffic from production EC2 instances. Modify the security groups assigned to production EC2 instances to block traffic from development EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a tag on each VPC attachment with a value of either production or development, according to the type of account being attached. Using the Network Manager feature of AWS Transit Gateway, create policies that restrict traffic between VPCs based on the value of this tag.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create separate route tables for production and development traffic. Delete each account's association and route propagation to the default AWS Transit Gateway route table. Attach development VPCs to the development AWS Transit Gateway route table and production VPCs to the production route table, and enable automatic route propagation on each attachment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a tag on each VPC attachment with a value of either production or development, according to the type of account being attached. Modify the AWS Transit Gateway routing table to route production tagged attachments to one another and development tagged attachments to one another.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "836",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon EMR cluster to run its big data jobs. The cluster's jobs are invoked by AWS Step Functions Express Workflows that consume various Amazon Simple Queue Service (Amazon SQS) queues. The workload of this solution is variable and unpredictable. Amazon CloudWatch metrics show that the cluster's peak utilization is only 25% at times and that the cluster sits idle the rest of the time.<br>A solutions architect must optimize the costs of the cluster without negatively impacting the time it takes to run the various jobs.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "836",
          "answers": [
            {
              "choice": "<p>A.  Modify the EMR cluster by turning on automatic scaling of the core nodes and task nodes with a custom policy that is based on cluster utilization. Purchase Reserved Instance capacity to cover the master node.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Modify the EMR cluster to use an instance fleet of Dedicated On-Demand Instances for the master node and core nodes, and to use Spot Instances for the task nodes. Define target capacity for each node type to cover the load.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Purchase Reserved Instances for the master node and core nodes. Terminate all existing task nodes in the EMR cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Modify the EMR cluster to use capacity-optimized Spot Instances and a diversified task fleet. Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "837",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to establish a connection from its on-premises data center to AWS. The company needs to connect all of its VPCs that are located in different<br>AWS Regions with transitive routing capabilities between VPC networks. The company also must reduce network outbound traffic costs, increase bandwidth throughput, and provide a consistent network experience for end users.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "837",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC.  Create VPC peering connections that initiate from the central VPC to all other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Direct Connect connection between the on-premises data center and AWS. Provision a transit VIF, and connect it to a Direct Connect gateway. Connect the Direct Connect gateway to all the other VPCs by using a transit gateway in each Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC.  Use a transit gateway with dynamic routing. Connect the transit gateway to all other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS Direct Connect connection between the on-premises data center and AWS. Establish an AWS Site-to-Site VPN connection between all VPCs in each Region. Create VPC peering connections that initiate from the central VPC to all other VPCs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "838",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company uses Amazon DynamoDB to store metadata for its catalog of movies that are available to stream. Each media item contains user-facing content that includes a description of the media, a list of searchable tags, and other similar data. In addition, media items include a list of Amazon S3 key names that relate to movie files. The company stores these movie files in a single S3 bucket that has versioning enabled. The company uses Amazon CloudFront to serve these movie files.<br>The company has 100,000 media items, and each media item can have many different S3 objects that represent different encodings of the same media. S3 objects that belong to the same media item are grouped together under the same key prefix, which is a random unique ID.<br>Because of an expiring contract with a media provider, the company must remove 2,000 media items. The company must completely delete all DynamoDB keys and movie files on Amazon S3 that are related to these media items within 36 hours. The company must ensure that the content cannot be recovered.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "838",
          "answers": [
            {
              "choice": "<p>A.  Configure the DynamoDB table with a TTL field. Create and invoke an AWS Lambda function to perform a conditional update. Set the TTL field to the time of the contract's expiration on every affected media item.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure an S3 Lifecycle object expiration rule that is based on the contract's expiration date.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Write a script to perform a conditional delete on all the affected DynamoDB records.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Temporarily suspend versioning on the S3 bucket. Create and invoke an AWS Lambda function that deletes affected objects. Reactivate versioning when the operation is complete.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Write a script to delete objects from Amazon S3. Specify in each request a NoncurrentVersionExpiration property with a NoncurrentDays attribute set to 0.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "839",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is importing a VM from an on-premises environment by using the Amazon EC2 VM Import feature of AWS Import/Export. The solutions architect has created an AMI and has provisioned an Amazon EC2 instance that is based on that AMI. The EC2 instance runs inside a public subnet in a VPC and has a public IP address assigned.<br>The EC2 instance does not appear as a managed instance in the AWS Systems Manager console.<br>Which combination of steps should the solutions architect take to troubleshoot this issue? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "839",
          "answers": [
            {
              "choice": "<p>A.  Verify that Systems Manager Agent is installed on the instance and is running</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Verify that the instance is assigned an appropriate IAM role for Systems Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Verify the existence of a VPC endpoint on the VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Verify that the AWS Application Discovery Agent is configured.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Verify the correct configuration of service-linked roles for Systems Manager.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "840",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.<br>The company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag.<br>The company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "840",
          "answers": [
            {
              "choice": "<p>A.  Configure scan on push on the repository. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SQS queue. Use the Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "841",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application consists of microservices that run on a fleet of Amazon EC2 instances in multiple<br>Availability Zones behind an Application Load Balancer. The company recently added a new REST API that was implemented in Amazon API Gateway. Some of the older microservices that run on EC2 instances need to call this new API.<br>The company does not want the API to be accessible from the public internet and does not want proprietary data to traverse the public internet.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "841",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS Site-to-Site VPN connection between the VPC and the API Gateway. Use API Gateway to generate a unique API key for each microservice. Configure the API methods to require the key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an interface VPC endpoint for API Gateway, and set an endpoint policy to only allow access to the specific API. Add a resource policy to API Gateway to only allow access from the VPC endpoint. Change the API Gateway endpoint type to private.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Modify the API Gateway to use IAM authentication Update the IAM policy for the IAM role that is assigned to the EC2 instances to allow access to the API Gateway Move the API Gateway into a new VPC.  Deploy a transit gateway and connect the VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an accelerator in AWS Global Accelerator, and connect the accelerator to the API Gateway. Update the route table for all VPC subnets with a route to the created Global Accelerator endpoint IP address. Add an API key for each service to use for authentication.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "842",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A mobile gaming company is expanding into the global market. The company's game servers run in the us-east-1 Region. The game's client application uses UDP to communicate with the game servers and needs to be able to connect to a set of static IP addresses.<br>The company wants its game to be accessible on multiple continents. The company also wants the game to maintain its network performance and global availability.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "842",
          "answers": [
            {
              "choice": "<p>A.  Provision an Application Load Balancer (ALB) in front of the game servers. Create an Amazon CloudFront distribution that has no geographical restrictions. Set the ALB as the origin. Perform DNS lookups for the cloudfront.net domain name. Use the resulting IP addresses in the game's client application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Provision game servers in each AWS Region. Provision an Application Load Balancer in front of the game servers. Create an Amazon Route 53 latency-based routing policy for the game's client application to use with DNS lookups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Provision game servers in each AWS Region. Provision a Network Load Balancer (NLB) in front of the game servers. Create an accelerator in AWS Global Accelerator, and configure endpoint groups in each Region. Associate the NLBs with the corresponding Regional endpoint groups. Point the game client's application to the Global Accelerator endpoints.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Provision game servers in each AWS Region. Provision a Network Load Balancer (NLB) in front of the game servers. Create an Amazon CloudFront distribution that has no geographical restrictions. Set the NLB as the origin. Perform DNS lookups for the cloudfront.net domain name. Use the resulting IP addresses in the game's client application.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "843",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company's AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company's AWS accounts.<br>The company's security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "843",
          "answers": [
            {
              "choice": "<p>A.  Configure AWS Single Sign-On (AWS SSO) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross- domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure AWS Single Sign-On (AWS SSO) by using AWS SSO as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using AWS SSO permission sets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use a SAML 2.0 identity provider. Provision IAM users that are mapped to the federated users. Grant access that corresponds to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM users.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use an OpenID Connect (OIDC) identity provider. Provision IAM roles that grant access to the AWS account for the federated users that correspond to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM roles.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "844",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a third-party firewall appliance solution from AWS Marketplace to monitor and protect traffic that leaves the company's AWS environments. The company wants to deploy this appliance into a shared services VPC and route all outbound internet-bound traffic through the appliances.<br>A solutions architect needs to recommend a deployment method that prioritizes reliability and minimizes failover time between firewall appliances within a single<br>AWS Region. The company has set up routing from the shared services VPC to other VPCs.<br>Which steps should the solutions architect recommend to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "844",
          "answers": [
            {
              "choice": "<p>A.  Deploy two firewall appliances into the shared services VPC, each in a separate Availability Zone.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a new Network Load Balancer in the shared services VPC.  Create a new target group, and attach it to the new Network Load Balancer. Add each of the firewall appliance instances to the target group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new Gateway Load Balancer in the shared services VPC.  Create a new target group, and attach it to the new Gateway Load Balancer. Add each of the firewall appliance instances to the target group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a VPC interface endpoint. Add a route to the route table in the shared services VPC.  Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Deploy two firewall appliances into the shared services VPC, each in the same Availability Zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Create a VPC Gateway Load Balancer endpoint. Add a route to the route table in the shared services VPC.  Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "845",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a legacy monolithic application that is critical to the company's business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company's application team receives a directive from the legal department to back up the data from the instance's encrypted Amazon<br>Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket. The application team does not have the administrative SSH key pair for the instance. The application must continue to serve the users.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "845",
          "answers": [
            {
              "choice": "<p>A.  Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an image of the instance. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "846",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A greeting card company recently advertised that customers could send cards to their favorite celebrities through the company's platform. Since the advertisement was published, the platform has received constant traffic from 10,000 unique users each second.<br>The platform runs on m5.xlarge Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Auto Scaling group and use a custom<br>AMI that is based on Amazon Linux. The platform uses a highly available Amazon Aurora MySQL DB cluster that uses primary and reader endpoints. The platform also uses an Amazon ElastiCache for Redis cluster that uses its cluster endpoint.<br>The platform generates a new process for each customer and holds open database connections to MySQL for the duration of each customer's session. However, resource usage for the platform is low.<br>Many customers are reporting errors when they connect to the platform. Logs show that connections to the Aurora database are failing. Amazon CloudWatch metrics show that the CPU load is low across the platform and that connections to the platform are successful through the ALB.<br>Which solution will remediate the errors MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "846",
          "answers": [
            {
              "choice": "<p>A.  Set up an Amazon CloudFront distribution. Set the ALB as the origin. Move all customer traffic to the CloudFront distribution endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use Amazon RDS Proxy. Reconfigure the database connections to use the proxy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Increase the number of reader nodes in the Aurora MySQL cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Increase the number of nodes in the ElastiCache for Redis cluster.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "847",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.<br>When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.<br>What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "847",
          "answers": [
            {
              "choice": "<p>A.  Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group's launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group's launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "848",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a distributed in-memory database on a fleet of Amazon EC2 instances. The fleet consists of a primary node and eight worker nodes. The primary node is responsible for monitoring cluster health, accepting user requests, distributing user requests to worker nodes, and sending an aggregate response back to a client. Worker nodes communicate with each other to replicate data partitions.<br>The company requires the lowest possible networking latency to achieve maximum performance.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "848",
          "answers": [
            {
              "choice": "<p>A.  Launch memory optimized EC2 instances in a partition placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Launch compute optimized EC2 instances in a partition placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Launch memory optimized EC2 instances in a cluster placement group</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Launch compute optimized EC2 instances in a spread placement group.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "849",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB.<br>Users who access the app from Australia have experienced uploads that take long periods of time. Sometimes the files fail to completely upload for these users. A solutions architect must improve the app's performance for these uploads.<br>Which solutions will meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "849",
          "answers": [
            {
              "choice": "<p>A.  Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure an S3 bucket in each Region to receive the uploads. Use S3 Cross-Region Replication to copy the files to the distribution S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Set up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure the app to break the video files into chunks. Use a multipart upload to transfer files to Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Modify the app to add random prefixes to the files before uploading.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "850",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application to the AWS Cloud. The application runs in an on-premises data center and writes thousands of images into a mounted NFS file system each night. After the company migrates the application, the company will host the application on an Amazon EC2 instance with a mounted Amazon<br>Elastic File System (Amazon EFS) file system.<br>The company has established an AWS Direct Connect connection to AWS. Before the migration cutover, a solutions architect must build a process that will replicate the newly created on-premises images to the EFS file system.<br>What is the MOST operationally efficient way to replicate the images?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "850",
          "answers": [
            {
              "choice": "<p>A.  Configure a periodic process to run the aws s3 sync command from the on-premises file system to Amazon S3. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file gateway file system on the on-premises server. Configure a process to periodically copy the images to the mount point.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an S3 bucket by using public VIF.  Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF.  Configure a DataSync scheduled task to send the images to the EFS file system every 24 hours.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "851",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has more than 10,000 sensors that send data to an on-premises Apache Kafka server by using the Message Queuing Telemetry Transport (MQTT) protocol. The on-premises Kafka server transforms the data and then stores the results as objects in an Amazon S3 bucket.<br>Recently, the Kafka server crashed. The company lost sensor data while the server was being restored. A solutions architect must create a new design on AWS that is highly available and scalable to prevent a similar occurrence.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "851",
          "answers": [
            {
              "choice": "<p>A.  Launch two Amazon EC2 instances to host the Kafka server in an active/standby configuration across two Availability Zones. Create a domain name in Amazon Route 53. Create a Route 53 failover policy. Route the sensors to send the data to the domain name.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Migrate the on-premises Kafka server to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create a Network Load Balancer (NLB) that points to the Amazon MSK broker. Enable NLB health checks. Route the sensors to send the data to the NLB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy AWS IoT Core, and connect it to an Amazon Kinesis Data Firehose delivery stream. Use an AWS Lambda function to handle data transformation. Route the sensors to send the data to AWS IoT Core.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy AWS IoT Core, and launch an Amazon EC2 instance to host the Kafka server. Configure AWS IoT Core to send the data to the EC2 instance. Route the sensors to send the data to AWS IoT Core.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "852",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to implement a client-side encryption mechanism for objects that will be stored in a new Amazon S3 bucket. The solutions architect created a CMK that is stored in AWS Key Management Service (AWS KMS) for this purpose.<br>The solutions architect created the following IAM policy and attached it to an IAM role:<br><img src='https://www.examtopics.com/assets/media/exam-media/04241/0056200001.png' ><br>During tests, the solutions architect was able to successfully get existing test objects in the S3 bucket. However, attempts to upload a new object resulted in an error message. The error message stated that the action was forbidden.<br>Which action must the solutions architect add to the IAM policy to meet all the requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "852",
          "answers": [
            {
              "choice": "<p>A.  kms:GenerateDataKey</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  kms:GetKeyPolicy</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  kms:GetPublicKey</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  kms:Sign</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "853",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company needs to provide a series of data files to another company, which is its business partner. These files are saved in an Amazon S3 bucket under<br>Account A, which belongs to the retail company. The business partner company wants one of its IAM users, User_DataProcessor, to access the files from its own<br>AWS account (Account B).<br>Which combination of steps must the companies take so that User_DataProcessor can access the S3 bucket successfully? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "853",
          "answers": [
            {
              "choice": "<p>A.  Turn on the cross-origin resource sharing (CORS) feature for the S3 bucket in Account A. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  InAccountA, set the S3 bucket policy to the following: </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  InAccount A, set the S3 bucket policy to the following: </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  InAccount B, set the permissions of User_DataProcessor to the following: </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  InAccount B, set the permissions of User_DataProcessor to the following: </p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "854",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.<br>The company's infrastructure team has a dedicated infrastructure account that has a VPC. The infrastructure team must use this account to manage the network.<br>Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets.<br>Which combination of actions should the solutions architect perform to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "854",
          "answers": [
            {
              "choice": "<p>A.  Create a transit gateway in the infrastructure account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Enable resource sharing from the AWS Organizations management account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "855",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a web application. The company is hosting the application on a group of Amazon EC2 instances behind an Application Load Balancer.<br>The company wants to improve the security posture of the application and plans to use AWS WAF web ACLs. The solution must not adversely affect legitimate traffic to the application.<br>How should a solutions architect configure the web ACLs to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "855",
          "answers": [
            {
              "choice": "<p>A.  Set the action of the web ACL rules to Count. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Count to Block.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use only rate-based rules in the web ACLs, and set the throttle limit as high as possible. Temporarily block all requests that exceed the limit. Define nested rules to narrow the scope of the rate tracking.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Set the action of the web ACL rules to Block. Use only AWS managed rule groups in the web ACLs. Evaluate the rule groups by using Amazon CloudWatch metrics with AWS WAF sampled requests or AWS WAF logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use only custom rule groups in the web ACLs, and set the action to Allow. Enable AWS WAF logging. Analyze the requests for false positives. Modify the rules to avoid any false positive. Over time, change the action of the web ACL rules from Allow to Block.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "856",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company recently migrated a large ecommerce website to AWS. The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The DevOps team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue.<br>The software engineers have decided to use AWS CodePipeline to manage their build and deployment process.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "856",
          "answers": [
            {
              "choice": "<p>A.  Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "857",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to deploy an application on a fleet of Amazon EC2 Instances. The EC2 instances run in private subnets in an Auto Scaling group. The application is expected to generate logs at a rate of 100 MB each second on each of the EC2 instances.<br>The logs must be stored in an Amazon S3 bucket so that an Amazon EMR cluster can consume them for further processing. The logs must be quickly accessible for the first 90 days and should be retrievable within 48 hours thereafter.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "857",
          "answers": [
            {
              "choice": "<p>A.  Set up an S3 copy job to write logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT instance within the private subnets to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Set up an S3 batch operation to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT gateway with the private subnets to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3. Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "858",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online retail company hosts its stateful web-based application and MySQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture.<br>Which solution should provide the HIGHEST level of reliability?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "858",
          "answers": [
            {
              "choice": "<p>A.  Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer Store sessions in Amazon Neptune.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "859",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization that has many AWS accounts in AWS Organizations. A solutions architect must improve how the company manages common security group rules for the AWS accounts in the organization.<br>The company has a common set of IP CIDR ranges in an allow list in each AWS account to allow access to and from the company's on-premises network.<br>Developers within each account are responsible for adding new IP CIDR ranges to their security groups. The security team has its own AWS account. Currently, the security team notifies the owners of the other AWS accounts when changes are made to the allow list.<br>The solutions architect must design a solution that distributes the common set of CIDR ranges across all accounts.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "859",
          "answers": [
            {
              "choice": "<p>A.  Set up an Amazon Simple Notification Service (Amazon SNS) topic in the security team's AWS account. Deploy an AWS Lambda function in each AWS account. Configure the Lambda function to run every time an SNS topic receives a message. Configure the Lambda function to take an IP address as input and add it to a list of security groups in the account. Instruct the security team to distribute changes by publishing messages to its SNS topic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create new customer-managed prefix lists in each AWS account within the organization. Populate the prefix lists in each account with all internal CIDR ranges. Notify the owner of each AWS account to allow the new customer-managed prefix list IDs in their accounts in their security groups. Instruct the security team to share updates with each AWS account owner.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new customer-managed prefix list in the security team's AWS account. Populate the customer-managed prefix list with all internal CIDR ranges. Share the customer-managed prefix list with the organization by using AWS Resource Access Manager. Notify the owner of each AWS account to allow the new customer-managed prefix list ID in their security groups.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an IAM role in each account in the organization. Grant permissions to update security groups. Deploy an AWS Lambda function in the security team's AWS account. Configure the Lambda function to take a list of internal IP addresses as input, assume a role in each organization account, and add the list of IP addresses to the security groups in each account.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "860",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's lease of a colocated storage facility will expire in 90 days. The company wants to move to AWS to avoid signing a contract extension. The company's environment consists of 200 virtual machines and a NAS with 40 TB of data. Most of the data is archival, yet instant access is required when data is requested.<br>Leadership wants to ensure minimal downtime during the migration. Each virtual machine has a number of customized configurations. The company's existing 1<br>Gbps network connection is mostly idle, especially after business hours.<br>Which combination of steps should the company take to migrate to AWS while minimizing downtime and operational impact? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "860",
          "answers": [
            {
              "choice": "<p>A.  Use new Amazon EC2 instances and reinstall all application code.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use AWS SMS to migrate the virtual machines.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use AWS Storage Gateway to migrate the data to cloud-native storage.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use AWS Snowball to migrate the data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Use AWS SMS to copy the infrequently accessed data from the NAS.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "861",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application. Once a month, the application creates a compressed file that contains every object within an Amazon S3 bucket. The total size of the objects before compression is 1 TB.<br>The application runs by using a scheduled cron job on an Amazon EC2 instance that has a 5 TB Amazon Elastic Block Store (Amazon EBS) volume attached. The application downloads all the files from the source S3 bucket to the EBS volume, compresses the file, and uploads the file to a target S3 bucket. Every invocation of the application takes 2 hours from start to finish.<br>Which combination of actions should a solutions architect take to OPTIMIZE costs for this application? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "861",
          "answers": [
            {
              "choice": "<p>A.  Migrate the application to run an AWS Lambda function. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the Lambda function to run once each month.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure the application to download the source files by using streams. Direct the streams into a compression library. Direct the output of the compression library into a target object in Amazon S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure the application to download the source files from Amazon S3 and save the files to local storage. Compress the files and upload them to Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure the application to run as a container in AWS Fargate. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule the task to run once each month.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Provision an Amazon Elastic File System (Amazon EFS) file system. Attach the file system to the AWS Lambda function.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "862",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A digital marketing company has multiple AWS accounts that belong to various teams. The creative team uses an Amazon S3 bucket in its AWS account to securely store images and media files that are used as content for the company's marketing campaigns. The creative team wants to share the S3 bucket with the strategy team so that the strategy team can view the objects.<br>A solutions architect has created an IAM role that is named strategy_reviewer in the Strategy account. The solutions architect also has set up a custom AWS Key<br>Management Service (AWS KMS) key in the Creative account and has associated the key with the S3 bucket. However, when users from the Strategy account assume the IAM role and try to access objects in the S3 bucket, they receive an Access Denied error.<br>The solutions architect must ensure that users in the Strategy account can access the S3 bucket. The solution must provide these users with only the minimum permissions that they need.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "862",
          "answers": [
            {
              "choice": "<p>A.  Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to the account ID of the Strategy account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Update the strategy_reviewer IAM role to grant full permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Update the custom KMS key policy in the Creative account to grant decrypt permissions to the strategy_reviewer IAM role.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a bucket policy that includes read permissions for the S3 bucket. Set the principal of the bucket policy to an anonymous user.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Update the custom KMS key policy in the Creative account to grant encrypt permissions to the strategy_reviewer IAM role.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Update the strategy_reviewer IAM role to grant read permissions for the S3 bucket and to grant decrypt permissions for the custom KMS key.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "863",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running several large workloads on Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) volumes attached to it. Once each day, an AWS Lambda function invokes the creation of EBS volume snapshots. These snapshots accumulate until an administrator manually purges them.<br>The company must maintain backups for a minimum of 30 days. A solutions architect needs to reduce the costs of this process.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "863",
          "answers": [
            {
              "choice": "<p>A.  Search AWS Marketplace. Find a third-party solution to deploy to automatically manage the EBS volume backups.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a second Lambda function to move the EBS snapshots that are older than 30 days to Amazon S3 Glacier Deep Archive.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Set an Amazon S3 Lifecycle policy on the $3 bucket that contains the snapshots. Create a rule with an expiration action to delete EBS snapshots that are older than 30 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Migrate the backup functionality to Amazon Data Lifecycle Manager (Amazon DLM). Create a lifecycle policy for the daily backup of the EBS volumes. Set the retention period for the EBS snapshots to 30 days.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "864",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a serverless application in a single AWS Region. The application accesses external URLs and extracts metadata from those sites. The company uses an Amazon Simple Notification Service (Amazon SNS) topic to publish URLs to an Amazon Simple Queue Service (Amazon SQS) queue. An AWS Lambda function uses the queue as an event source and processes the URLs from the queue. Results are saved to an Amazon S3 bucket.<br>The company wants to process each URL in other Regions to compare possible differences in site localization. URLs must be published from the existing Region.<br>Results must be written to the existing S3 bucket in the current Region.<br>Which combination of changes will produce multi-Region deployment that meets these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "864",
          "answers": [
            {
              "choice": "<p>A.  Deploy the SQS queue with the Lambda function to other Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Subscribe the SNS topic in each Region to the SQS queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Subscribe the SQS queue in each Region to the SNS topic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure the SQS queue to publish URLs to SNS topics in each Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Deploy the SNS topic and the Lambda function to other Regions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "865",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage more than 1,000 AWS accounts. The company has created a new developer organization. There are 540 developer member accounts that must be moved to the new developer organization. All accounts are set up with all the required information so that each account can be operated as a standalone account.<br>Which combination of steps should a solutions architect take to move all of the developer accounts to the new developer organization? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "865",
          "answers": [
            {
              "choice": "<p>A.  Call the MoveAccount operation in the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  From the management account, remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  From each developer account, remove the account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Call the InviteAccountToOrganization operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Have each developer sign in to their account and confirm to join the new developer organization.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "866",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics company has an Amazon Redshift cluster that consists of several reserved nodes. The cluster is experiencing unexpected bursts of usage because a team of employees is compiling a deep audit analysis report. The queries to generate the report are complex read queries and are CPU intensive.<br>Business requirements dictate that the cluster must be able to service read and write queries at all times. A solutions architect must devise a solution that accommodates the bursts of usage.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "866",
          "answers": [
            {
              "choice": "<p>A.  Provision an Amazon EMR cluster. Offload the complex data processing tasks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using a classic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using an elastic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Turn on the Concurrency Scaling feature for the Amazon Redshift cluster.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "867",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company is using three AWS accounts for each of its 10 development teams. The company has developed an AWS CloudFormation standard VPC template that includes three NAT gateways. The template is added to each account for each team. The company is concerned that network costs will increase each time a new development team is added. A solutions architect must maintain the reliability of the company's solutions and minimize operational complexity.<br>What should the solutions architect do to reduce the network costs while meeting these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "867",
          "answers": [
            {
              "choice": "<p>A.  Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a transit gateway to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a VPC peering connection to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Remove two NAT gateways from the standard VPC template. Rely on the NAT gateway SLA to cover reliability for the remaining NAT gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a single VPC with three NAT gateways in a shared services account. Configure a Site-to-Site VPN connection from each account to the shared services account. Remove all NAT gateways from the standard VPC template.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "868",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a sequel for a popular online game. A large number of users from all over the world will play the game within the first week after launch.<br>Currently, the game consists of the following components deployed in a single AWS Region:<br>✑ Amazon S3 bucket that stores game assets<br>✑ Amazon DynamoDB table that stores player scores<br>A solutions architect needs to design a multi-Region solution that will reduce latency, improve reliability, and require the least effort to implement.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "868",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Cross-Region Replication. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB table in a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create another S3 bucket in a new Region, and configure S3 Cross-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create another S3 bucket in the sine Region, and configure S3 Same-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "869",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a solution to connect a company's on-premises network with all the company's current and future VPCs on AWS. The company is running VPCs in five different AWS Regions and has at least 15 VPCs in each Region.<br>The company's AWS usage is constantly increasing and will continue to grow. Additionally, all the VPCs throughout all five Regions must be able to communicate with each other.<br>The solution must maximize scalability and ease of management.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "869",
          "answers": [
            {
              "choice": "<p>A.  Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and the transit gateway in the Region that is closest to the on-premises network. Peer all the transit gateways with each other. Connect all the VPCs to the transit gateway in their Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Set up VPC peering between all the VPCs for VPC-to-VPC communication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Set up a transit gateway in each Region. Establish a redundant AWS Site-to-Site VPN connection between the on-premises firewalls and each transit gateway. Route traffic between the different Regions through the company's on-premises firewalls. Connect all the VPCs to the transit gateway in their Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS CloudFormation template for a redundant AWS Site-to-Site VPN tunnel to the on-premises network. Deploy the CloudFormation template for each VPC.  Route traffic between the different Regions through the company's on-premises firewalls.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "870",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large company is migrating its on-premises applications to the AWS Cloud. All the company's AWS accounts belong to an organization in AWS Organizations.<br>Each application is deployed into its own VPC in separate AWS accounts.<br>The company decides to start the migration process by migrating the front-end web services while keeping the databases on premises. The databases are configured with local domain names that are specific to the on-premises environment. The local domain names must be resolvable from the migrated web services.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "870",
          "answers": [
            {
              "choice": "<p>A.  Create a shared services VPC in a new AWS account. Deploy Amazon Route 53 outbound resolvers. For relevant on-premises domains, use the outbound resolver settings to create forwarding rules that point to the on-premises DNS servers. Share these rules with the other AWS accounts by using AWS Resource Access Manager.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy Multi-AZ Amazon Route 53 outbound resolvers in each VPC.  Create forwarding rules that point to on-premises DNS servers in local outbound resolvers for each VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a shared services VPC in a new AWS account. Deploy Amazon EC2 instances that act conditional forwarders inside the shared services VPC.  Change the DHCP options set in each VPC to point to these forwarders as DNS servers. Create forwarding rules for relevant on-premises domains in these forwarders.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a shared services VPC in a new AWS account. Deploy Amazon Route 53 inbound resolvers. For relevant on-premises domains, create forwarding rules that point to on-premises DNS servers. Share these rules with other AWS accounts by using AWS Resource Access Manager.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "871",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The organization consists of a large number of AWS accounts that belong to separate business units. The company requires all Amazon EC2 instances to be provisioned with custom, hardened AMIs. The company wants a solution that provides each AWS account access to the AMIs.<br>Which solution will meet these requirements with the MOST operational efficiency?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "871",
          "answers": [
            {
              "choice": "<p>A.  Create the AMIs with EC2 Image Builder. Create an AWS CodePipeline pipeline to share the AMIs across all AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy Jenkins on an EC2 instance. Create jobs to create and share the AMIs across all AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create and share the AMIs with EC2 Image Builder. Use AWS Service Catalog to configure a product that provides access to the AMIs across all AWS accounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create the AMIs with EC2 Image Builder. Create an AWS Lambda function to share the AMIs across all AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "872",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy an API to AWS. The company plans to run the API on AWS Fargate behind a load balancer. The API requires the use of header- based routing and must be accessible from on-premises networks through an AWS Direct Connect connection and a private VIF.<br>The company needs to add the client IP addresses that connect to the API to an allow list in AWS. The company also needs to add the IP addresses of the API to the allow list. The company's security team will allow /27 CIDR ranges to be added to the allow list. The solution must minimize complexity and operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "872",
          "answers": [
            {
              "choice": "<p>A.  Create a new Network Load Balancer (NLB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the new security group to the Fargate tasks. Provide the security team with the NLB's IP addresses for the allow list.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create two new /27 subnets. Create a new Application Load Balancer (ALB) that extends across the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB, Provide the security team with the new subnet IP ranges for the allow list.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create two new /27 subnets. Create a new Network Load Balancer (NLB) that extends across the new subnets. Create a new Application Load Balancer (ALB) within the new subnets. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB.  Add the ALB's IP addresses as targets behind the NLB.  Provide the security team with the NLB's IP addresses for the allow list.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a new Application Load Balancer (ALB) in the same subnets as the Fargate task deployments. Create a security group that includes only the client IP addresses that need access to the API. Attach the security group to the ALB.  Provide the security team with the ALB's IP addresses for the allow list.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "873",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs: VPC A and VPC B. The company uses a solution in VPC A in the ca-central-1 Region to expose services that are deployed on Amazon<br>EC2 instances. The services read objects that are stored in an Amazon S3 bucket in ca-central-1. The S3 bucket must not be publicly accessible, and the EC2 instances must use a gateway VPC endpoint. A rule in the S3 bucket policy allows only traffic that comes from the VPC A endpoint.<br>The company recently created another application. The application is hosted on EC2 instances that are deployed in VPC B in the us-east-1 Region in the same<br>AWS account. The application needs to access objects that are stored in the S3 bucket in ca-central-1.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "873",
          "answers": [
            {
              "choice": "<p>A.  Create a cross-Region VPC peering connection between the two VPCs. Add a route in the route table of VPC B to use the peering connection to access the S3 gateway VPC endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a gateway VPC endpoint in VPC B in us-east-1. Add a route in the route table of VPC B to use the S3 gateway VPC endpoint to access Amazon S3. Update the S3 bucket policy to accept connection from this gateway VPC endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a third VPC (VPC C) in ca-central-1. Create a cross-Region VPC peering connection between VPC C and VPC B in us-east-1. Use AWS PrivateLink with a Network Load Balancer (NLB) to expose the services in VPC A in ca-central-1. Use the interface VPC endpoint created with PrivateLink in VPC C to call the services.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a virtual private gateway, and attach it to VPC A in ca-central-1. Create an IPsec VPN connection between the EC2 instances in us-east-1 and the virtual private gateway. Grant the EC2 instances in us-east-1 direct access to the S3 bucket by adding a route to use the VPN connection to access Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "874",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large industrial company has two AWS accounts. One account is for production, and one account is for development. The company manages the production account under its corporate organization in AWS Organizations. The development account is an isolated environment that developers use for testing.<br>The company stores all the application configuration information in an Amazon S3 bucket in the production account. All developers in the development account are members of a single IAM group. A solutions architect must ensure that the developers can update the application configuration information in real time.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "874",
          "answers": [
            {
              "choice": "<p>A.  In the production account, modify the S3 bucket policy by adding the development account ID in the condition field. Add a permissions policy to the developers' IAM group to allow users to put objects in the production S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  In the production account, create a two-staged pipeline that uses AWS CodeDeploy and an S3 bucket that has versioning enabled. Create an IAM role in the production account that has the permission to put objects in the S3 bucket. Associate the role with the pipeline. Allow developers to push a new version in the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an IAM role in the production account. Establish a trust relationship between the production account and the development account. Specify a permissions policy in the role to allow trusted users to put objects in the S3 bucket. Grant sts:AssumeRole permissions to the developers' IAM group for the role.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an S3 bucket in the development account. Enable S3 bucket replication between the development S3 bucket and the production S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "875",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company has a video-streaming application that runs on smart TVs. The application is written in HTML and JavaScript. A configuration exists for each smart TV type to control application behavior, such as whether the application should offer high-definition content. The configuration typically changes each quarter.<br>The company serves the application from a fleet of Amazon EC2 instances that handle the requests from the smart TVs. On each request, an application template and smart TV configuration are retrieved from Amazon S3 and are merged to produce the customized application.<br>The company's current solution produces high response times during peak load. The company wants to use Amazon CloudFront to deliver and cache the application.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "875",
          "answers": [
            {
              "choice": "<p>A.  Create a CloudFront distribution with the EC2 instances as an origin.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a Lambda@Edge function to be invoked by an origin request event. Determine the smart TV type by inspecting the user agent in the event. Modify the request URI to point to the application file from the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Enable S3 Transfer Acceleration on the S3 bucket to allow faster access from CloudFront.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable S3 Versioning on the S3 bucket that hosts the object. Modify the application build process to create a single application file for each configuration. Push the file to the S3 bucket by using the same name to create a new version. Set a Maximum TTL on the object.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a CloudFront distribution with a custom origin.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Modify the application build process to create a single application file for each configuration. Upload the application files to the S3 bucket with an incremented version number in the object name. Create an S3 webpage redirect to redirect requests for the customized application to the latest version of the file. Set a Maximum TTL on the object.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "876",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A research company is running daily simulations in the AWS Cloud to meet high demand. The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2. Occasionally, a simulation gets stuck and requires a cloud operations engineer to solve the problem by connecting to an EC2 instance through SSH.<br>Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail.<br>How can a solutions architect meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "876",
          "answers": [
            {
              "choice": "<p>A.  Launch new EC2 instances, and generate an individual SSH key for each instance. Store the SSH key in AWS Secrets Manager. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the GetSecretValue action. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement to run Systems Manager documents. Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Launch new EC2 instances without setting up any SSH key for the instances. Set up EC2 Instance Connect on each instance. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the SendSSHPublicKey action. Instruct the engineers to connect to the instance by using a browser-based SSH client from the EC2 console.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Set up AWS Secrets Manager to store the EC2 SSH key. Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance. Configure Secrets Manager to use the Lambda function for automatic rotation once daily. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "877",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use a third-party software-as-a-service (SaaS) application. The third-party SaaS application is consumed through several API calls. The third- party SaaS application also runs on AWS inside a VPC.<br>The company will consume the third-party SaaS application from inside a VPC. The company has internal security policies that mandate the use of private connectivity that does not traverse the internet. No resources that run in the company VPC are allowed to be accessed from outside the company's VPC. All permissions must conform to the principles of least privilege.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "877",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Site-to-Site VPN connection between the third-party SaaS application and the company VPC.  Configure network ACLs to limit access across the VPN tunnels.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a VPC peering connection between the third-party SaaS application and the company VPC.  Update route tables by adding the needed routes for the peering connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS PrivateLink endpoint service. Ask the third-party SaaS provider to create an interface VPC endpoint for this endpoint service. Grant permissions for the endpoint service to the specific account of the third-party SaaS provider.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "878",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an IPSec VPN.<br>The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "878",
          "answers": [
            {
              "choice": "<p>A.  Create a VPC Endpoint Service that accepts TCP traffic, host it behind a Network Load Balancer, and make the service available over DX.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a VPC Endpoint Service that accepts HTTP or HTTPS traffic, host it behind an Application Load Balancer, and make the service available over DX.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Attach a NAT gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "879",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's compliance audit reveals that some Amazon Elastic Block Store (Amazon EBS) volumes that were created in an AWS account were not encrypted.<br>A solutions architect must implement a solution to encrypt all new EBS volumes at rest.<br>Which solution will meet this requirement with the LEAST effort?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "879",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect the creation of unencrypted EBS volumes. Invoke an AWS Lambda function to delete noncompliant volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use AWS Audit Manager with data encryption.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Config rule to detect the creation of a new EBS volume. Encrypt the volume by using AWS Systems Manager Automation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Turn on EBS encryption by default in all AWS Regions.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "880",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application's underlying data storage to AWS. The application data is stored on a shared file system on premises, and the application servers connect to the shared file system through<br>SMB.<br>A solutions architect must implement a solution that uses an Amazon S3 bucket for shared storage. Until the application is fully migrated and code is rewritten to use native Amazon S3 APIs, the application must continue to have access to the data through SMB. The solutions architect must migrate the application data to<br>AWS to its new location while still allowing the on-premises application to access the data.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "880",
          "answers": [
            {
              "choice": "<p>A.  Create a new Amazon FSx for Windows File Server file system. Configure AWS DataSync with one location for the on-premises file share and one location for the new Amazon FSx file system. Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an S3 bucket for the application. Copy the data from the on-premises storage to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the file storage server from on premises to an Amazon EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an S3 bucket for the application. Deploy a new AWS Storage Gateway file gateway on an on-premises VM. Create a new file share that stores data in the S3 bucket and is associated with the file gateway. Copy the data from the on-premises storage to the new file gateway endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "881",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC. After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.<br>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "881",
          "answers": [
            {
              "choice": "<p>A.  Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB. </p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "882",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather forecasting company is migrating an application that stores data on premises in a PostgreSQL database. The Company wants to migrate the database to Amazon Aurora PostgreSQL. The database size grows at an average rate of 5 GB daily and is currently 50 TB. The data center has an internet connection with<br>50 Mbps of available bandwidth. The migration to AWS must be completed as soon as possible within the next 21 days.<br>Which data transfer strategy meets these requirements with the LEAST amount of application downtime?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "882",
          "answers": [
            {
              "choice": "<p>A.  Take the application offline. Create a local backup of the database. Transmit the database backup file over the existing connection to an Amazon S3 bucket. Use native database tools to restore the backup onto the new database and to set up replication to capture any changes since the backup. Modify the database connection string, and bring the application online.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Install the Server Migration Connector VM in the local data center. Use the AWS Server Migration Service (AWS SMS) console to replicate the on-premises database to the new database. Modify DNS records to point to the new database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a local backup of the database, and copy the backup onto an AWS Snowcone device. Activate the AWS DataSync agent on the device, and configure the agent to copy the backup and ongoing changes to an Amazon S3 bucket. Use AWS Backup to restore the backup onto the new database and to apply the changes. Modify DNS records to point to the new database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use AWS Database Migration Service (AWS DMS) to launch a replication instance in a connected VPC.  Use the AWS Schema Conversion Tool to extract the data locally and to move the data to an AWS Snowball Edge Storage Optimized device. Ship the device to AWS, and use an AWS DMS task to complete the transfer to the target database. For the migration type, choose the option to migrate existing data and replicate ongoing changes. Modify DNS records to point to the new database.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "883",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to provide AWS Cost and Usage Report data from a company's AWS Organizations management account. The company already has an Amazon S3 bucket to store the reports. The reports must be automatically ingested into a database that can be visualized with other tools.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "883",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule that a new object creation in the S3 bucket will trigger.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Cost and Usage Report configuration to deliver the data into the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure an AWS Glue crawler that a new object creation in the S3 bucket will trigger.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an AWS Lambda function that a new object creation in the S3 bucket will trigger.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create an AWS Glue crawler that the AWS Lambda function will trigger to crawl objects in the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Create an AWS Glue crawler that the Amazon EventBridge (Amazon CloudWatch Events) rule will trigger to crawl objects in the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "884",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one<br>AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "884",
          "answers": [
            {
              "choice": "<p>A.  Use AWS CloudFormation templates. Add IAM policies to control the various accounts. Deploy the templates across the multiple Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use AWS Organizations. Deploy AWS CloudFormation templates from the management account. Use AWS Control Tower to manage deployments across accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use AWS Organizations and AWS CloudFormation StackSets. Deploy a CloudFormation template from an account that has the necessary IAM permissions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "885",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A new application is running on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate. The application uses an Amazon Aurora MySQL database.<br>The application and the database run in the same subnets of a VPC with distinct security groups that are configured.<br>The password for the database is stored in AWS Secrets Manager and is passed to the application through the DB_PASSWORD environment variable. The hostname of the database is passed to the application through the DB_HOST environment variable. The application is failing to access the database.<br>Which combination of actions should a solutions architect take to resolve this error? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "885",
          "answers": [
            {
              "choice": "<p>A.  Ensure that the container has the environment variable with name \"DB_PASSWORD\" specified with a ג€ValueFromג€ and the ARN of the secret.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Ensure that the container has the environment variable with name \"DB_PASSWORD\" specified with a ג€ValueFromג€ and the secret name of the secret.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Ensure that the Fargate service security group allows inbound network traffic from the Aurora MySQL database on the MySQL TCP port 3306.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Ensure that the Aurora MySQL database security group allows inbound network traffic from the Fargate service on the MySQL TCP port 3306.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Ensure that the container has the environment variable with name \"DB_HOST\" specified with the hostname of a DB instance endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Ensure that the container has the environment variable with name \"DB_HOST\" specified with the hostname of the DB cluster endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "886",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to host a global web application on AWS. It has the following design requirements:<br>* The access pattern must allow for fetching data from multiple data sources.<br>* Minimize the cost of API calls.<br>* Keep page load times to within 50 ms.<br>* Provide user authentication and authorization and manage data access for different user personas (for example, administrator, manager, or engineer).<br>* Use a serverless design.<br>Which set of strategies should a solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "886",
          "answers": [
            {
              "choice": "<p>A.  Use Amazon CloudFront with Amazon S3 to host the web application. Use Amazon API Gateway to build the application APIs with AWS Lambda for the custom authorizer. Authorize data access by performing user lookup in Simple AD. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use Amazon CloudFront with AWS WAF to host the web application. Use AWS AppSync to build the application APIs. Use IAM groups for each user persona. Authorize data access by leveraging IAM groups in AWS AppSync resolvers.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use Amazon CloudFront with Amazon S3 to host the web application. Use AWS AppSync to build the application APIs. Use Amazon Cognito groups for each user persona. Authorize data access by leveraging Amazon Cognito groups in AWS AppSync resolvers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use AWS Direct Connect with Amazon S3 to host the web application. Use Amazon API Gateway to build the application APIs. Use AWS Lambda for custom authentication and authorization. Authorize data access by leveraging IAM roles.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "887",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application that provides an HTTP API. The API uses a MySQL-compatible SQL database for session persistence. The existing workload runs in an on-premises environment on a Kubernetes cluster. The company has significant operational overhead associated with managing servers on premises and is considering a migration to AWS.<br>The company wants to remove the need to manage servers or instances by using as many managed AWS offerings as possible. The company does not want to introduce significant changes to the web application or the HTTP API. A solutions architect must recommend different architecture solutions that the company can use to achieve these goals.<br>Which solutions will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "887",
          "answers": [
            {
              "choice": "<p>A.  Create a Kubernetes cluster on AWS. Deploy an Amazon Aurora Serverless cluster. Run the web application on Kubernetes by using a managed node group. Use a containerized application that runs on Kubernetes to deploy an Application Load Balancer that exposes the web application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Auto Scaling group for the web application. Run the web application and a MySQL database on Amazon EC2 general purpose instances. Deploy an Application Load Balancer (ALB). Associate the ALB with the Auto Scaling group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new Amazon Elastic Container Service (Amazon ECS) service for the web application. Deploy MySQL by using Amazon RDS. Run the web application as tasks in Amazon ECS with a serverless compute engine. Configure health checks. Use AWS Cloud Map and DNS to direct traffic to healthy tasks for the service.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a Kubernetes cluster on AWS. Deploy an Amazon Aurora Serverless cluster. Run the web application by using AWS Fargate and Amazon Elastic Kubernetes Service (Amazon EKS). Use containerized application that runs on Kubernetes to deploy an Application Load Balancer that exposes the web application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a new Amazon Elastic Container Service (Amazon ECS) service for the web application. Deploy a MySQL-compatible Amazon Aurora cluster. Run the web application as tasks by using Amazon ECS with EXTERNAL launch. Deploy an Application Load Balancer (ALB). Associate the ALB with the ECS service.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Create an Amazon Lightsail containers deployment for the web application. Create a highly available Lightsail database in MySQL mode. Specify a public endpoint for the container deployment. Add a custom domain for the public endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "888",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently started hosting new application workloads in the AWS Cloud. The company is using Amazon EC2 instances, Amazon Elastic File System<br>(Amazon EFS) file systems, and Amazon RDS DB instances.<br>To meet regulatory and business requirements, the company must make the following changes for data backups:<br>* Backups must be retained based on custom daily, weekly, and monthly requirements.<br>* Backups must be replicated to at least one other AWS Region immediately after capture.<br>* The backup solution must provide a single source of backup status across the AWS environment.<br>* The backup solution must send immediate notifications upon failure of any resource backup.<br>Which combination of steps will meet these requirements with the LEAST amount of operational overhead? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "888",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS Backup plan with a backup rule for each of the retention requirements</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure an AWS Backup plan to copy backups to another Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Lambda function to replicate backups to another Region and send notification if a failure occurs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Add an Amazon Simple Notification Service (Amazon SNS) topic to the backup plan to send a notification for finished jobs that have any status except BACKUP_JOB_COMPLETED. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create an Amazon Data Lifecycle Manager (Amazon DLM) snapshot lifecycle policy for each of the retention requirements.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Setup RDS snapshots on each database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "889",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instances. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM, and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to<br>20 minutes. A solutions architect wants to revise the architecture for the solution.<br>Which strategy should the solutions architect use?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "889",
          "answers": [
            {
              "choice": "<p>A.  Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "890",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application uses MongoDB as a key-value database. According to the company's technical guidelines, all Amazon EC2 instances must be hosted in a private subnet without an internet connection. In addition, all connectivity between applications and databases must be encrypted. The database must be able to scale based on demand.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "890",
          "answers": [
            {
              "choice": "<p>A.  Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the instance endpoint to connect to Amazon DocumentDB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create new Amazon DynamoDB tables for the application with on-demand capacity. Use a gateway VPC endpoint for DynamoDB to connect to the DynamoDB tables.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create new Amazon DynamoDB tables for the application with on-demand capacity. Use an interface VPC endpoint for DynamoDB to connect to the DynamoDB tables.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the cluster endpoint to connect to Amazon DocumentDB. </p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "891",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs many workloads on AWS and uses AWS Organizations to manage its accounts. The workloads are hosted on Amazon EC2, AWS Fargate, and<br>AWS Lambda. Some of the workloads have unpredictable demand. Accounts record high usage in some months and low usage in other months.<br>The company wants to optimize its compute costs over the next 3 years. A solutions architect obtains a 6-month average for each of the accounts across the organization to calculate usage.<br>Which solution will provide the MOST cost savings for all the organization's compute usage?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "891",
          "answers": [
            {
              "choice": "<p>A.  Purchase Reserved Instances for the organization to match the size and number of the most common EC2 instances from the member accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Purchase a Compute Savings Plan for the organization from the management account by using the recommendation at the management account level.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Purchase Reserved Instances for each member account that had high EC2 usage according to the data from the last 6 months.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Purchase an EC2 Instance Savings Plan for each member account from the management account based on EC2 usage data from the last 6 months.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "892",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on Amazon EC2 instances in three environments: development, testing, and production. The company uses AMIs to deploy the EC2 instances. The company builds the AMIs by using custom deployment scripts and infrastructure orchestration tools for each release in each environment.<br>The company is receiving errors in its deployment process. Errors appear during operating system package downloads and during application code installation from a third-party Git hosting service. The company needs deployments to become more reliable across all environments.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "892",
          "answers": [
            {
              "choice": "<p>A.  Mirror the application code to an AWS CodeCommit Git repository. Use the repository to build EC2 AMIs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Produce multiple EC2 AMIs, one for each environment, for each release.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Produce one EC2 AMI for each release for use across all environments.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Mirror the application code to a third-party Git repository that uses Amazon S3 storage. Use the repository for deployment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Replace the custom scripts and tools with AWS CodeBuild. Update the infrastructure deployment process to use EC2 Image Builder.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Replace the custom scripts and tools with EC2 Image Builder. Update the deployment process to use AWS CloudFormation.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "893",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A flood monitoring agency has deployed more than 10,000 water-level monitoring Sensors. Sensors send continuous data updates, and each update is less than<br>1 MB in size. The agency has a fleet of on-premises application servers. These servers receive updates from the sensors, convert the raw data into a human readable format, and write the results to an on-premises relational database server. Data analysts then use simple SQL queries to monitor the data.<br>The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks. These maintenance tasks, which include updates and patches to the application servers, cause downtime. While an application server is down, data is lost from sensors because the remaining servers cannot handle the entire workload.<br>The agency wants a solution that optimizes operational overhead and costs. A solutions architect recommends the use of AWS IoT Core to collect the sensor data.<br>What else should the solutions architect recommend to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "893",
          "answers": [
            {
              "choice": "<p>A.  Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to .csv format, and insert it into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to Apache Parquet format, and save it to an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Send the sensor data to an Amazon Kinesis Data Analytics application to convert the data to .csv format and store it in an Amazon S3 bucket. Import the data into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Send the sensor data to an Amazon Kinesis Data Analytics application to convert the data to Apache Parquet format and store it in an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "894",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a project that is launching Amazon EC2 instances that are larger than required. The project's account cannot be part of the company's organization in AWS Organizations due to policy restrictions to keep this activity outside of corporate IT. The company wants to allow only the launch of t3.small<br>EC2 instances by developers in the project's account. These EC2 instances must be restricted to the us-east-2 Region.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "894",
          "answers": [
            {
              "choice": "<p>A.  Create a new developer account. Move all EC2 instances, users, and assets into us-east-2. Add the account to the company's organization in AWS Organizations. Enforce a tagging policy that denotes Region affinity.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an SCP that denies the launch of all EC2 instances except t3.small EC2 instances in us-east-2. Attach the SCP to the project's account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create and purchase a t3.small EC2 Reserved Instance for each developer in us-east-2. Assign each developer a specific EC2 instance with their name as the tag.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an IAM policy than allows the launch of only t3.small EC2 instances in us-east-2. Attach the policy to the roles and groups that the developers use in the project's account.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "895",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon WorkSpaces to provide access to its corporate applications across multiple global locations. User profile data is stored on an<br>Amazon FSx for Windows File Server file system that is configured with a DNS alias. The file system is linked to an existing Active Directory service.<br>Recently, the company added a new application that unexpectedly caused user profiles to grow significantly. The company increased the FSx for Windows File<br>Server file system size from 3 TiB to 6 TiB to prevent any issues. A few days later, the company made changes to the application's configuration. The user profile storage usage decreased significantly, leaving a large amount of free space on the file system. A solutions architect needs to reduce the size of the file system to avoid unnecessary costs.<br>What should the solutions architect do to achieve this goal?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "895",
          "answers": [
            {
              "choice": "<p>A.  During an agreed upon maintenance window, use AWS Backup to create a point-in-time backup of the file system. Restore the backup to a new, smaller FSx for Windows File Server file system. Adjust the DNS alias after the restore is completed. Delete the original file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  During an agreed upon maintenance window, disconnect users from the file system. In the Amazon FSx console, update the storage capacity of the file system. Enter an absolute value of 3 TiB.  Reconnect users to the file system.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy an AWS DataSyne agent onto a new Amazon EC2 instance. Create a DataSync task. Configure the existing file system as the source location. Configure a new, smaller FSx for Windows File Server file system as the target location. Schedule the task. Adjust the DNS alias after the task is completed. Delete the original file system.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable shadow copies on the existing file system by using a Windows PowerShell command. Schedule a shadow copy job to create a point-in-time backup of the file system. Choose to restore previous versions, and create a new, smaller FSx for Windows File Server file system. Adjust the DNS alias after the copy job is completed. Delete the original file system.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "896",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an online shop that uses an Amazon API Gateway API, AWS Lambda functions, and an Amazon DynamoDB table provisioned with 900 RCUs.<br>The API Gateway API receives requests from customers, and the Lambda functions handle the requests. Some of the Lambda functions read data from the<br>DynamoDB table.<br>During peak hours, customers are reporting timeout errors and slow performance. An investigation reveals that the Lambda functions that read the DynamoDB table occasionally time out. Amazon CloudWatch metrics show that the peak usage of the DynamoDB table is just below 900 RCUs.<br>Which solution will resolve this issue MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "896",
          "answers": [
            {
              "choice": "<p>A.  Configure the DynamoDB table's read capacity to use auto scaling with default parameters.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Increase the timeout of all the Lambda functions that read from the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use DynamoDB Streams to replicate data to a new table. Configure all the Lambda functions to read from the new table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Increase the DynamoDB table's provisioned read capacity to 1,400 RCUs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "897",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a hybrid solution between its existing on-premises systems and a new backend in AWS. The company has a management application to monitor the state of its current IT infrastructure and automate responses to issues. The company wants to incorporate the status of its consumed AWS services into the application. The application uses an HTTPS endpoint to receive updates.<br>Which approach meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "897",
          "answers": [
            {
              "choice": "<p>A.  Configure AWS Systems Manager OpsCenter to ingest operational events from the on-premises systems. Retire the on-premises management application and adopt OpsCenter as the hub.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Personal Health Dashboard. Configure the EventBridge (CloudWateh Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to the HTTPS endpoint of the management application.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Modify the on-premises management application to call the AWS Health API to poll for status events of AWS services.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Service Health Dashboard. Configure the EventBridge (CloudWateh Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to an HTTPS endpoint for the management application with a topic filter corresponding to the services being used.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "898",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is offering one of its applications as a multi-tenant software-as-a-service (SaaS) solution. The application has a RESTAPI that runs on a set of Amazon<br>EC2 instances behind an Application Load Balancer (ALB). The instances run in an Auto Scaling group.<br>Last week, one of the tenants ran a campaign that significantly increased traffic to the REST API. The resource constraints affected the performance of other tenants that were running on the same set of EC2 instances. The company wants the ability to throttle API calls for each tenant.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "898",
          "answers": [
            {
              "choice": "<p>A.  Create an AWS WAF web ACL. Add a rate-based rule statement to the web ACL. Set the action to block.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon API Gateway API. Assign an API key usage plan for each tenant.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an Amazon API Gateway API. Assign the AWS WAF web ACL to the API Gateway API.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an Amazon CloudFront distribution. Assign the AWS WAF web ACL to the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a VPC link for HTTP APIs. Set up the ALB as the target. Configure an HTTP proxy private integration that uses the VPC link.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F.  Modify the application's API requests to target the newly created endpoint.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    },
    {
      "question_id": "899",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A news company wants to implement an AWS Lambda function that calls an external API to receive new press releases every 10 minutes. The API provider is planning to use an IP address allow list to protect the API, so the news company needs to provide any public IP addresses that access the API. The company's current architecture includes a VPC with an internet gateway and a NAT gateway. A solutions architect must implement a static IP address for the Lambda function.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "899",
          "answers": [
            {
              "choice": "<p>A.  Use the Elastic IP address that is associated with the NAT gateway for the IP address allow list.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Assign an Elastic IP address to the Lambda function. Use the Lambda function's Elastic IP address for the IP address allow list.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure the Lambda function to launch in the private subnet of the VPC. </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure the Lambda function to launch in the public subnet of the VPC. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a transit gateway. Attach the VPC and the Lambda function to the transit gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "XXX"
    }
  ]
}