var ExamTopic_700_799 = {
    "msg": "Exam Topic 700 - 799",
    "data": [
      {
        "question_id": "700",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has five physical data centers in specific locations around the world. Each data center has hundreds of physical servers with a mix of Windows and<br>Linux-based applications and database services. Each data center also has an AWS Direct Connect connection of 10 Gbps to AWS with a company-approved<br>VPN solution to ensure that data transfer is secure. The company needs to shut down the existing data centers as quickly as possible and migrate the servers and applications to AWS.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "700",
            "answers": [
              {
                "choice": "<p>A.  Install the AWS Server Migration Service (AWS SMS) connector onto each physical machine. Use the AWS Management Console to select the servers from the server catalog, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Install the AWS DataSync agent onto each physical machine. Use the AWS Management Console to configure the destination to be an AMI, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Install the CloudEndure Migration agent onto each physical machine. Create a migration blueprint, and start the replication. Once the replication is complete, launch the Amazon EC2 instances in cutover mode.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Install the AWS Application Discovery Service agent onto each physical machine. Use the AWS Migration Hub import option to start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "701",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security:<br>✑ The database must use strong, randomly generated passwords stored in a secure AWS managed service.<br>✑ The application resources must be deployed through AWS CloudFormation.<br>✑ The application must rotate credentials for the database every 90 days.<br>A solutions architect will generate a CloudFormation template to deploy the application.<br>Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "701",
            "answers": [
              {
                "choice": "<p>A.  Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "702",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a three-tier application running on AWS with a web server, an application server, and an Amazon RDS MySQL DB instance. A solutions architect is designing a disaster recovery (DR) solution with an RPO of 5 minutes.<br>Which solution will meet the company's requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "702",
            "answers": [
              {
                "choice": "<p>A.  Configure AWS Backup to perform cross-Region backups of all servers every 5 minutes. Reprovision the three tiers in the DR Region from the backups using AWS CloudFormation in the event of a disaster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Maintain another running copy of the web and application server stack in the DR Region using AWS CloudFormation drift detection. Configure cross-Region snapshots of the DB instance to the DR Region every 5 minutes. In the event of a disaster, restore the DB instance using the snapshot in the DR Region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Amazon EC2 Image Builder to create and copy AMIs of the web and application server to both the primary and DR Regions. Create a cross-Region read replica of the DB instance in the DR Region. In the event of a disaster, promote the read replica to become the master and reprovision the servers with AWS CloudFormation using the AMIs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create AMIs of the web and application servers in the DR Region. Use scheduled AWS Glue jobs to synchronize the DB instance with another DB instance in the DR Region. In the event of a disaster, switch to the DB instance in the DR Region and reprovision the servers with AWS CloudFormation using the AMIs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "703",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its corporate data center from on premises to the AWS Cloud. The data center includes physical servers and VMs that use VMware and Hyper-V. An administrator needs to select the correct services to collect data for the initial migration discovery process. The data format should be supported by AWS Migration Hub. The company also needs the ability to generate reports from the data.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "703",
            "answers": [
              {
                "choice": "<p>A.  Use the AWS Agentless Discovery Connector for data collection on physical servers and all VMs. Store the collected data in Amazon S3. Query the data with S3 Select. Generate reports by using Kibana hosted on Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use the AWS Application Discovery Service agent for data collection on physical servers and all VMs. Store the collected data in Amazon Elastic File System (Amazon EFS). Query the data and generate reports with Amazon Athena.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use the AWS Application Discovery Service agent for data collection on physical servers and Hyper-V. Use the AWS Agentless Discovery Connector for data collection on VMware. Store the collected data in Amazon S3. Query the data with Amazon Athena. Generate reports by using Amazon QuickSight.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use the AWS Systems Manager agent for data collection on physical servers. Use the AWS Agentless Discovery Connector for data collection on all VMs. Store, query, and generate reports from the collected data by using Amazon Redshift.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "704",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon Aurora MySQL for a customer relationship management (CRM) application. The application requires frequent maintenance on the database and the Amazon EC2 instances on which the application runs. For AWS Management Console access, the system administrators authenticate against<br>AWS Identity and Access Management (IAM) using an internal identity provider. For database access, each system administrator has a user name and password that have previously been configured within the database.<br>A recent security audit revealed that the database passwords are not frequently rotated. The company wants to replace the passwords with temporary credentials using the company's existing AWS access controls.<br>Which set of options will meet the company's requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "704",
            "answers": [
              {
                "choice": "<p>A.  Create a new AWS Systems Manager Parameter Store entry for each database password. Enable parameter expiration to invoke an AWS Lambda function to perform password rotation by updating the parameter value. Create an IAM policy allowing each system administrator to retrieve their current password from the Parameter Store. Use the AWS CLI to retrieve credentials when connecting to the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new AWS Secrets Manager entry for each database password. Configure password rotation for each secret using an AWS Lambda function in the same VPC as the database cluster. Create an IAM policy allowing each system administrator to retrieve their current password. Use the AWS CLI to retrieve credentials when connecting to the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable IAM database authentication on the database. Attach an IAM policy to each system administrator's role to map the role to the database user name. Install the Amazon Aurora SSL certificate bundle to the system administrators' certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable IAM database authentication on the database. Configure the database to use the IAM identity provider to map the administrator roles to the database user. Install the Amazon Aurora SSL certificate bundle to the system administrators' certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "705",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's AWS architecture currently uses access keys and secret access keys stored on each instance to access AWS services. Database credentials are hard-coded on each instance. SSH keys for command-line remote access are stored in a secured Amazon S3 bucket. The company has asked its solutions architect to improve the security posture of the architecture without adding operational complexity.<br>Which combination of steps should the solutions architect take to accomplish this? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "705",
            "answers": [
              {
                "choice": "<p>A.  Use Amazon EC2 instance profiles with an IAM role</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Secrets Manager to store access keys and secret access keys</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS Systems Manager Parameter Store to store database credentials</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use a secure fleet of Amazon EC2 bastion hosts for remote access</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use AWS KMS to store database credentials</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Use AWS Systems Manager Session Manager for remote access</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "706",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br>Which solution is the MOST cost-effective way to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "706",
            "answers": [
              {
                "choice": "<p>A.  Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure AWS Budgets in the organization's master account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's master account to create monthly reports for each business unit.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable AWS Cost and Usage Reports in the organization's master account and configure reports grouped by application, environment, and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "707",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is configuring connectivity to a multi-account AWS environment to support application workloads that serve users in a single geographic region. The workloads depend on a highly available, on-premises legacy system deployed across two locations. It is critical for the AWS workloads to maintain connectivity to the legacy system, and a minimum of 5 Gbps of bandwidth is required. All application workloads within AWS must have connectivity with one another.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "707",
            "answers": [
              {
                "choice": "<p>A.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create private virtual interfaces on each connection for each AWS account VPC.  Associate the private virtual interface with a virtual private gateway attached to each VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a DX gateway in a central network account and associate it with the virtual private gateways. Create a public virtual interface on each DX connection and associate the interface with the DX gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC.  Create a transit gateway in a central network account and associate it with the virtual private gateways. Create a transit virtual interface on each DX connection and attach the interface to the transit gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "708",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company needs to create a separate AWS account for a new digital wallet application. The company uses AWS Organizations to manage its accounts.<br>A solutions architect uses the IAM user Support1 from the master account to create a new member account with finance1@example.com as the email address.<br>What should the solutions architect do to create IAM users in the new member account?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "708",
            "answers": [
              {
                "choice": "<p>A.  Sign in to the AWS Management Console with AWS account root user credentials by using the 64-character password from the initial AWS Organizations email sent to finance1@example.com. Set up the IAM users as required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  From the master account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Go to the AWS Management Console sign-in page. Choose ג€Sign in using root account credentials.ג€ Sign in by using the email address finance1@example.com and the master account's root password. Set up the IAM users as required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Go to the AWS Management Console sign-in page. Sign in by using the account ID of the new member account and the Support1 IAM credentials. Set up the IAM users as required.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "709",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is designing a data processing platform to process a large number of files in an Amazon S3 bucket and store the results in Amazon DynamoDB.<br>These files will be processed once and must be retained for 1 year. The company wants to ensure that the original files and resulting data are highly available in multiple AWS Regions.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "709",
            "answers": [
              {
                "choice": "<p>A.  Create an S3 CreateObject event notification to copy the file to Amazon Elastic Block Store (Amazon EBS). Use AWS DataSync to sync the files between EBS volumes in multiple Regions. Use an Amazon EC2 Auto Scaling group in multiple Regions to attach the EBS volumes. Process the files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 bucket with an S3 Lifecycle policy to move the files to S3 Glacier after 1 year.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an S3 CreateObject event notification to copy the file to Amazon Elastic File System (Amazon EFS). Use AWS DataSync to sync the files between EFS volumes in multiple Regions. Use an AWS Lambda function to process the EFS files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 buckets with an S3 Lifecycle policy to move the files to S3 Glacier after 1 year.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to push S3 file paths into Amazon EventBridge (Amazon CloudWatch Events). Use an AWS Lambda function to poll EventBridge (CloudWatch Events) to process each file and store the results in a DynamoDB table in each Region. Configure both S3 buckets to use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to execute an AWS Lambda function to process each file and store the results in a DynamoDB global table in multiple Regions. Configure both S3 buckets to use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "710",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an Apache Hadoop cluster on Amazon EC2 instances. The Hadoop cluster stores approximately 100 TB of data for weekly operational reports and allows occasional access for data scientists to retrieve data. The company needs to reduce the cost and operational complexity for storing and serving this data.<br>Which solution meets these requirements in the MOST cost-effective manner?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "710",
            "answers": [
              {
                "choice": "<p>A.  Move the Hadoop cluster from EC2 instances to Amazon EMR. Allow data access patterns to remain the same.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Write a script that resizes the EC2 instances to a smaller instance type during downtime and resizes the instances to a larger instance type before the reports are created.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Move the data to Amazon S3 and use Amazon Athena to query the data for reports. Allow the data scientists to access the data directly in Amazon S3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Migrate the data to Amazon DynamoDB and modify the reports to fetch data from DynamoDB.  Allow the data scientists to access the data directly in DynamoDB. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "711",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a sensor data collection pipeline in which thousands of sensors write data to an Amazon Simple Queue Service (Amazon SQS) queue every minute. The queue is processed by an AWS Lambda function that extracts a standard set of metrics from the sensor data. The company wants to send the data to Amazon CloudWatch. The solution should allow for viewing individual and aggregate sensor metrics and interactively querying the sensor log data using<br>CloudWatch Logs Insights.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "711",
            "answers": [
              {
                "choice": "<p>A.  Write the processed data to CloudWatch Logs in the CloudWatch embedded metric format.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Write the processed data to CloudWatch Logs. Then write the data to CloudWatch by using the PutMetricData API call.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Write the processed data to CloudWatch Logs in a structured format. Create a CloudWatch metric filter to parse the logs and publish the metrics to CloudWatch with dimensions to uniquely identify a sensor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure the CloudWatch Logs agent for AWS Lambda. Output the metrics for each sensor in statsd format with tags to uniquely identify a sensor. Write the processed data to CloudWatch Logs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "712",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors. Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events.<br>The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.<br>Which strategy meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "712",
            "answers": [
              {
                "choice": "<p>A.  Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "713",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS for PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released.<br>What changes to the current architecture will reduce operational overhead and support the product release?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "713",
            "answers": [
              {
                "choice": "<p>A.  Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "714",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently completed a large-scale migration to AWS. Development teams that support various business units have their own accounts in AWS<br>Organizations. A central cloud team is responsible for controlling which services and resources can be accessed, and for creating operational strategies for all teams within the company. Some teams are approaching their account service quotas. The cloud team needs to create an automated and operationally efficient solution to proactively monitor service quotas. Monitoring should occur every 15 minutes and send alerts when a team exceeds 80% utilization.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "714",
            "answers": [
              {
                "choice": "<p>A.  Create a scheduled AWS Config rule to trigger an AWS Lambda function to call the GetServiceQuota API. If any service utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon CloudWatch alarm that triggers an AWS Lambda function to call the Amazon CloudWatch GetInsightRuleReport API to retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish an Amazon Simple Email Service (Amazon SES) notification to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, use Amazon Pinpoint to send an alert to the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "715",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.<br>The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application<br>Load Balancer (ALB) in a VPC. The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets.<br>How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "715",
            "answers": [
              {
                "choice": "<p>A.  Associate a block of customer-owned public IP addresses to the VPC.  Enable public IP addressing for public subnets in the VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create Elastic IP addresses from the block of customer-owned IP addresses. Assign the static Elastic IP addresses to the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Register a block of customer-owned public IP addresses in the AWS account. Set up AWS Global Accelerator to use Elastic IP addresses from the address block. Set the ALB as the accelerator endpoint.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "716",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple<br>Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts.<br>A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks.<br>Trusted access has been enabled in Organizations.<br>What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "716",
            "answers": [
              {
                "choice": "<p>A.  Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create stacks in the Organizations member accounts. Use self-service permissions. Set deployment options to deploy to an organization. Enable the CloudFormation StackSets automatic deployment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a stack set in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create stacks in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "717",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to provide desktop as a service (DaaS) to a number of employees using Amazon WorkSpaces. WorkSpaces will need to access files and services hosted on premises with authorization based on the company's Active Directory. Network connectivity will be provided through an existing AWS Direct<br>Connect connection.<br>The solution has the following requirements:<br>✑ Credentials from Active Directory should be used to access on-premises files and services.<br>✑ Credentials from Active Directory should not be stored outside the company.<br>✑ End users should have single sign-on (SSO) to on-premises files and services once connected to WorkSpaces.<br>Which strategy should the solutions architect use for end user authentication?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "717",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory within the WorkSpaces VPC.  Use the Active Directory Migration Tool (ADMT) with the Password Export Server to copy users from the on-premises Active Directory to AWS Managed Microsoft AD.  Set up a one- way trust allowing users from AWS Managed Microsoft AD to access resources in the on-premises Active Directory. Use AWS Managed Microsoft AD as the directory for WorkSpaces.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service to be deployed on premises using the service account to communicate with the on-premises Active Directory. Ensure the required TCP ports are open from the WorkSpaces VPC to the on-premises AD Connector. Use the AD Connector as the directory for WorkSpaces.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service within the WorkSpaces VPC using the service account to communicate with the on-premises Active Directory. Use the AD Connector as the directory for WorkSpaces.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory in the AWS Directory Service within the WorkSpaces VPC.  Set up a one-way trust allowing users from the on-premises Active Directory to access resources in the AWS Managed Microsoft AD.  Use AWS Managed Microsoft AD as the directory for WorkSpaces. Create an identity provider with AWS Identity and Access Management (IAM) from an on-premises ADFS server. Allow users from this identity provider to assume a role with a policy allowing them to run WorkSpaces.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "718",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints.<br>Which step should the solutions architect take to resolve this issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "718",
            "answers": [
              {
                "choice": "<p>A.  Update the subnet route table with a route to the interface endpoint</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable the private DNS option on the VPC attributes</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure the security group on the interface endpoint to allow connectivity to the AWS services</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "719",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.<br>To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.<br>Which combination of steps should the solutions architect take to implement this solution? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "719",
            "answers": [
              {
                "choice": "<p>A.  Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC.  Update the bucket policy to require access from an access point</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an interface endpoint for Amazon S3 in each application's VPC.  Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a gateway endpoint for Amazon S3 in each application's VPC.  Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC.  Update the bucket policy to require access from an access point.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create a gateway endpoint for Amazon S3 in the data lake's VPC.  Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "720",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that runs applications on AWS recently subscribed to a new software-as-a-service (SaaS) data vendor. The vendor provides the data by way of a<br>REST API that the vendor hosts in its AWS environment. The vendor offers multiple options for connectivity to the API and is working with the company to find the best way to connect.<br>The company's AWS account does not allow outbound internet access from its AWS environment. The vendor's services run on AWS in the same Region as the company's applications.<br>A solutions architect must implement connectivity to the vendor's API so that the API is highly available in the company's VPC.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "720",
            "answers": [
              {
                "choice": "<p>A.  Connect to the vendor's public API address for the data service</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Connect to the vendor by way of a VPC peering connection between the vendor's VPC and the company's VPC</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Connect to the vendor by way of a VPC endpoint service that uses AWS PrivateLink</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Connect to a public bastion host that the vendor provides. Tunnel the API traffic</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "721",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a web application that runs on Amazon EC2 instances in an Auto Scaling group behind a public-facing Application Load Balancer (ALB).<br>Only users from a specific country are allowed to access the application. The company needs the ability to log the access requests that have been blocked. The solution should require the least possible maintenance.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "721",
            "answers": [
              {
                "choice": "<p>A.  Create an IPSet containing a list of IP ranges that belong to the specified country. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from an IP range in the IPSet. Associate the rule with the web ACL. Associate the web ACL with the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure AWS Shield to block any requests that do not originate from the specified country. Associate AWS Shield with the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a security group rule that allows ports 80 and 443 from IP ranges that belong to the specified country. Associate the security group with the ALB. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "722",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A multimedia company needs to deliver its video-on-demand (VOD) content to its subscribers in a cost-effective way. The video files range in size from 1-15 GB and are typically viewed frequently for the first 6 months after creation, and then access decreases considerably. The company requires all video files to remain immediately available for subscribers. There are now roughly 30,000 files, and the company anticipates doubling that number over time.<br>What is the MOST cost-effective solution for delivering the company's VOD content?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "722",
            "answers": [
              {
                "choice": "<p>A.  Store the video files in an Amazon S3 bucket using S3 Intelligent-Tiering. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Elemental MediaConvert and store the adaptive bitrate video files in Amazon S3. Configure an AWS Elemental MediaPackage endpoint to deliver the content from Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Store the video files in Amazon Elastic File System (Amazon EFS) Standard. Enable EFS lifecycle management to move the video files to EFS Infrequent Access after 6 months. Create an Amazon EC2 Auto Scaling group behind an Elastic Load Balancer to deliver the content from Amazon EFS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Store the video files in Amazon S3 Standard. Create S3 Lifecycle rules to move the video files to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months and to S3 Glacier Deep Archive after 1 year. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "723",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the Internet.<br>What is the MOST operationally efficient way to enforce this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "723",
            "answers": [
              {
                "choice": "<p>A.  Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "724",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs.<br>✑ The company has the following DNS resolution requirements:<br>✑ On-premises systems should be able to resolve and connect to cloud.example.com.<br>All VPCs should be able to resolve cloud.example.com.<br>There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway.<br>Which architecture should the company use to meet these requirements with the HIGHEST performance?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "724",
            "answers": [
              {
                "choice": "<p>A.  Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Associate the private hosted zone to all the VPCs. Deploy an Amazon EC2 conditional forwarder in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the conditional forwarder.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Associate the private hosted zone to the shared services VPC.  Create a Route 53 outbound resolver in the shared services VPC.  Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the outbound resolver.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Associate the private hosted zone to the shared services VPC.  Create a Route 53 inbound resolver in the shared services VPC.  Attach the shared services VPC to the transit gateway and create forwarding rules in the on-premises DNS server for cloud.example.com that point to the inbound resolver.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "725",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A development team has created a new flight tracker application that provides near-real-time data to users. The application has a front end that consists of an<br>Application Load Balancer (ALB) in front of two large Amazon EC2 instances in a single Availability Zone. Data is stored in a single Amazon RDS MySQL DB instance. An Amazon Route 53 DNS record points to the ALB.<br>Management wants the development team to improve the solution to achieve maximum reliability with the least amount of operational overhead.<br>Which set of actions should the team take?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "725",
            "answers": [
              {
                "choice": "<p>A.  Create RDS MySQL read replicas. Deploy the application to multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure the DB instance as Multi-AZ. Deploy the application to two additional EC2 instances in different Availability Zones behind an ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Replace the DB instance with Amazon DynamoDB global tables. Deploy the application in multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Replace the DB instance with Amazon Aurora with Aurora Replicas. Deploy the application to multiple smaller EC2 instances across multiple Availability Zones in an Auto Scaling group behind an ALB. </p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "726",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A multimedia company with a single AWS account is launching an application for a global user base. The application storage and bandwidth requirements are unpredictable. The application will use Amazon EC2 instances behind an Application Load Balancer as the web tier and will use Amazon DynamoDB as the database tier. The environment for the application must meet the following requirements:<br>✑ Low latency when accessed from any part of the world<br>✑ WebSocket support<br>✑ End-to-end encryption<br>Protection against the latest security threats<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0047600004.png' ><br>✑ Managed layer 7 DDoS protection<br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "726",
            "answers": [
              {
                "choice": "<p>A.  Use Amazon Route 53 and Amazon CloudFront for content distribution. Use Amazon S3 to store static content</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use Amazon Route 53 and AWS Transit Gateway for content distribution. Use an Amazon Elastic Block Store (Amazon EBS) volume to store static content</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS WAF with AWS Shield Advanced to protect the application</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS WAF and Amazon Detective to protect the application</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use AWS Shield Standard to protect the application</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "727",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using AWS Organizations to manage 15 AWS accounts. A solutions architect wants to run advanced analytics on the company's cloud expenditures. The cost data must be gathered and made available from an analytics account. The analytics application runs in a VPC and must receive the raw cost data each night to run the analytics.<br>The solutions architect has decided to use the Cost Explorer API to fetch the raw data and store the data in Amazon S3 in JSON format. Access to the raw cost data must be restricted to the analytics application. The solutions architect has already created an AWS Lambda function to collect data by using the Cost Explorer<br>API.<br>Which additional actions should the solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "727",
            "answers": [
              {
                "choice": "<p>A.  Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create a gateway endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the S3 endpoint.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create a gateway endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the analytics VPC by using the aws:SourceVpc condition.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create an interface endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the analytics VPC private CIDR range by using the aws:SourceIp condition.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create an interface endpoint for Amazon S3 in the analytics VPC.  Create an S3 bucket policy that allows access only from the S3 endpoint.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "728",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate a 30 TB Oracle data warehouse from on premises to Amazon Redshift. The company used the AWS Schema Conversion Tool (AWS<br>SCT) to convert the schema of the existing data warehouse to an Amazon Redshift schema. The company also used a migration assessment report to identify manual tasks to complete.<br>The company needs to migrate the data to the new Amazon Redshift cluster during an upcoming data freeze period of 2 weeks. The only network connection between the on-premises data warehouse and AWS is a 50 Mbps internet connection.<br>Which migration strategy meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "728",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Database Migration Service (AWS DMS) replication instance. Authorize the public IP address of the replication instance to reach the data warehouse through the corporate firewall. Create a migration task to run at the beginning of the fata freeze period.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Install the AWS SCT extraction agents on the on-premises servers. Define the extract, upload, and copy tasks to send the data to an Amazon S3 bucket. Copy the data into the Amazon Redshift cluster. Run the tasks at the beginning of the data freeze period.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Install the AWS SCT extraction agents on the on-premises servers. Create a Site-to-Site VPN connection. Create an AWS Database Migration Service (AWS DMS) replication instance that is the appropriate size. Authorize the IP address of the replication instance to be able to access the on-premises data warehouse through the VPN connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a job in AWS Snowball Edge to import data into Amazon S3. Install AWS SCT extraction agents on the on-premises servers. Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device. When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "729",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that tracks medical devices in hospitals wants to migrate its existing storage solution to the AWS Cloud. The company equips all of its devices with sensors that collect location and usage information. This sensor data is sent in unpredictable patterns with large spikes. The data is stored in a MySQL database running on premises at each hospital. The company wants the cloud storage solution to scale with usage.<br>The company's analytics team uses the sensor data to calculate usage by device type and hospital. The team needs to keep analysis tools running locally while fetching data from the cloud. The team also needs to use existing Java application and SQL queries with as few changes as possible.<br>How should a solutions architect meet these requirements while ensuring the sensor data is secure?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "729",
            "answers": [
              {
                "choice": "<p>A.  Store the data in an Amazon Aurora Serverless database. Serve the data through a Network Load Balancer (NLB). Authenticate users using the NLB with credentials stored in AWS Secrets Manager.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Store the data in an Amazon S3 bucket. Serve the data through Amazon QuickSight using an IAM user authorized with AWS Identity and Access Management (IAM) with the S3 bucket as the data source.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Store the data in an Amazon S3 bucket. Serve the data through Amazon Athena using AWS PrivateLink to secure the data in transit.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "730",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The following AWS Identity and Access Management (IAM) customer managed policy has been attached to an IAM user:<br><img src='https://www.examtopics.com//assets/media/exam-media/04241/0048000001.png' ><br>Which statement describes the access that this policy provides to the user?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "730",
            "answers": [
              {
                "choice": "<p>A.  The policy grants access to all Amazon S3 actions, including all actions in the prod-data S3 bucket</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  This policy denies access to all Amazon S3 actions, excluding all actions in the prod-data S3 bucket</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  This policy denies access to the Amazon S3 bucket and objects not having prod-data in the bucket name</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  This policy grants access to all Amazon S3 actions in the prod-data S3 bucket, but explicitly denies access to all other AWS services</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "731",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has implemented an ordering system using an event driven architecture. During initial testing, the system stopped processing orders. Further log analysis revealed that one order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was causing an error on the backend and blocking all subsequent order messages. The visibility timeout of the queue is set to 30 seconds, and the backend processing timeout is set to 10 seconds. A solutions architect needs to analyze faulty order messages and ensure that the system continues to process subsequent messages.<br>Which step should the solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "731",
            "answers": [
              {
                "choice": "<p>A.  Increase the backend processing timeout to 30 seconds to match the visibility timeout.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Reduce the visibility timeout of the queue to automatically remove the faulty message.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "732",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company has a business-critical application that runs in a single AWS Region. The application consists of multiple Amazon EC2 instances and an Amazon<br>RDS Multi-AZ DB instance. The EC2 instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones.<br>A solutions architect is implementing a disaster recovery (DR) plan for the application. The solutions architect has created a pilot light application deployment in a new Region, which is referred to as the DR Region. The DR environment has an Auto Scaling group with a single EC2 instance and a read replica of the RDS DB instance.<br>The solutions architect must automate a failover from the primary application environment to the pilot light environment in the DR Region.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "732",
            "answers": [
              {
                "choice": "<p>A.  Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Add an email subscription to the SNS topic that sends messages to the application owner. Upon notification, instruct a systems operator to sign in to the AWS Management Console and initiate failover operations for the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task notifies a systems operator and attempts to restart the application services.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task modifies the DR environment by promoting the read replica and by adding EC2 instances to the Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Use an AWS Lambda function that is invoked by Amazon SNS in the DR Region to promote the read replica and to add EC2 instances to the Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "733",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service<br>(Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the application's authentication service. All the failed login attempts originate from about 500 different IP addresses that change each week. A solutions architect must prevent the failed login attempts from overwhelming the authentication service.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "733",
            "answers": [
              {
                "choice": "<p>A.  Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the ALB</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIDR ranges</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the ALB</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "734",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time. A user is notified when image processing is complete.<br>Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "734",
            "answers": [
              {
                "choice": "<p>A.  Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Invoke an AWS Lambda function to perform image processing when a message is available in the queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "735",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's processing team has an AWS account with a production application. The application runs on Amazon EC2 instances behind a Network Load<br>Balancer (NLB). The EC2 instances are hosted in private subnets in a VPC in the eu-west-1 Region. The VPC was assigned the CIDR block of 10.0.0.0/16. The billing team recently created a new AWS account and deployed an application on EC2 instances that are hosted in private subnets in a VPC in the eu-central-1<br>Region. The new VPC is assigned the CIDR block of 10.0.0.0/16.<br>The processing application needs to securely communicate with the billing application over a proprietary TCP port.<br>What should a solutions architect do to meet this requirement with the LEAST amount of operational effort?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "735",
            "answers": [
              {
                "choice": "<p>A.  In the billing team's account, create a new VPC and subnets in eu-central-1 that use the CIDR block of 192.168.0.0/16. Redeploy the application to the new subnets. Configure a VPC peering connection between the two VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the processing team's account, add an additional CIDR block of 192.168.0.0/16 to the VPC in eu-west-1. Restart each of the EC2 instances so that they obtain a new IP address. Configure an inter-Region VPC peering connection between the two VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  In the billing team's account, create a new VPC and subnets in eu-west-1 that use the CIDR block of 192.168.0.0/16. Create a VPC endpoint service (AWS PrivateLink) in the processing team's account and an interface VPC endpoint in the new VPC.  Configure an inter-Region VPC peering connection in the billing team's account between the two VPCs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  In each account, create a new VPC with the CIDR blocks of 192.168.0.0/16 and 172.16.0.0/16. Create inter-Region VPC peering connections between the billing team's VPCs and the processing team's VPCs. Create gateway VPC endpoints to allow traffic to route between the VPCs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "736",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that is developing a mobile game is making game assets available in two AWS Regions. Game assets are served from a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in each Region. The company requires game assets to be fetched from the closest Region. If game assets become unavailable in the closest Region, they should be fetched from the other Region.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "736",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon CloudFront distribution. Create an origin group with one origin for each ALB.  Set one of the origins as primary.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon Route 53 health check for each ALB.  Create a Route 53 failover routing record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create two Amazon CloudFront distributions, each with one ALB as the origin. Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions. Set the Evaluate Target Health value to Yes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon Route 53 health check for each ALB.  Create a Route 53 latency alias record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "737",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet.<br>An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.<br>The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.<br>How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "737",
            "answers": [
              {
                "choice": "<p>A.  Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "738",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application<br>VPC with the shared services VPC, an error message indicates a peering failure.<br>Which factors could cause this error? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "738",
            "answers": [
              {
                "choice": "<p>A.  The IPv4 CIDR ranges of the two VPCs overlap</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  The VPCs are not in the same Region</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  One or both accounts do not have access to an Internet gateway</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  One of the VPCs was not shared through AWS Resource Access Manager</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  The IAM role in the peer accepter account does not have the correct permissions</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "739",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that develops consumer electronics with offices in Europe and Asia has 60 TB of software images stored on premises in Europe. The company wants to transfer the images to an Amazon S3 bucket in the ap-northeast-1 Region. New software images are created daily and must be encrypted in transit. The company needs a solution that does not require custom development to automatically transfer all existing and new software images to Amazon S3.<br>What is the next step in the transfer process?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "739",
            "answers": [
              {
                "choice": "<p>A.  Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure Amazon Kinesis Data Firehose to transfer the images using S3 Transfer Acceleration</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use an AWS Snowball device to transfer the images with the S3 bucket as the target</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Transfer the images over a Site-to-Site VPN connection using the S3 API with multipart upload</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "740",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a distributed application on a set of Amazon EC2 instances in an Auto Scaling group. The application stores large amounts of data on an<br>Amazon Elastic File System (Amazon EFS) file system, and new data is generated monthly. The company needs to back up the data in a secondary AWS Region to restore from in case of a performance problem in its primary Region. The company has an RTO of 1 hour. A solutions architect needs to create a backup strategy while minimizing the extra cost.<br>Which backup strategy should the solutions architect recommend to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "740",
            "answers": [
              {
                "choice": "<p>A.  Create a pipeline in AWS Data Pipeline. Copy the data to an EFS file system in the secondary Region. Create a lifecycle policy to move files to the EFS One Zone-Infrequent Access storage class.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Set up automatic backups by using AWS Backup. Create a copy rule to copy backups to an Amazon S3 bucket in the secondary Region. Create a lifecycle policy to move backups to the S3 Glacier storage class.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up AWS DataSync and continuously copy the files to an Amazon S3 bucket in the secondary Region. Create a lifecycle policy to move files to the S3 Glacier Deep Archive storage class.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Turn on EFS Cross-Region Replication and set the secondary Region as the target. Create a lifecycle policy to move files to the EFS Infrequent Access storage class in the secondary Region.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "741",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application on AWS. An AWS Lambda function uses credentials to authenticate to an Amazon RDS for MySQL DB instance. A security risk assessment identified that these credentials are not frequently rotated. Also, encryption at rest is not enabled for the DB instance. The security team requires that both of these issues be resolved.<br>Which strategy should a solutions architect recommend to remediate these security risks?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "741",
            "answers": [
              {
                "choice": "<p>A.  Configure the Lambda function to store and retrieve the database credentials in AWS Secrets Manager and enable rotation of the credentials. Take a snapshot of the DB instance and encrypt a copy of that snapshot. Replace the DB instance with a new DB instance that is based on the encrypted snapshot.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Modify the DB instance and enable encryption.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure the Lambda function to store and retrieve the database credentials as encrypted AWS Systems Manager Parameter Store parameters. Create another Lambda function to automatically rotate the credentials. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "742",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently deployed a new application that runs on a group of Amazon EC2 Linux instances in a VPC. In a peered VPC, the company launched an EC2<br>Linux instance that serves as a bastion host. The security group of the application instances allows access only on TCP port 22 from the private IP of the bastion host. The security group of the bastion host allows access to TCP port 22 from 0.0.0.0/0 so that system administrators can use SSH to remotely log in to the application instances from several branch offices.<br>While looking through operating system logs on the bastion host, a cloud engineer notices thousands of failed SSH logins to the bastion host from locations around the world. The cloud engineer wants to change how remote access is granted to the application instances and wants to meet the following requirements:<br>✑ Eliminate brute-force SSH login attempts.<br>✑ Retain a log of commands run during an SSH session.<br>✑ Retain the ability to forward ports.<br>Which solution meets these requirements for remote access to the application instances?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "742",
            "answers": [
              {
                "choice": "<p>A.  Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to use Session Manager to establish a session with the application instances. Terminate the bastion host.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Update the security group of the bastion host to allow traffic from only the public IP addresses of the branch offices.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure an AWS Client VPN endpoint and provision each system administrator with a certificate to establish a VPN connection to the application VPC.  Update the security group of the application instances to allow traffic from only the Client VPN IPv4 CIDR. Terminate the bastion host.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to issue commands to the application instances by using Systems Manager Run Command. Terminate the bastion host.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "743",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company that provisions job boards for a seasonal workforce is seeing an increase in traffic and usage. The backend services run on a pair of Amazon EC2 instances behind an Application Load Balancer with Amazon DynamoDB as the datastore. Application read and write traffic is slow during peak seasons.<br>Which option provides a scalable application architecture to handle peak seasons with the LEAST development effort?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "743",
            "answers": [
              {
                "choice": "<p>A.  Migrate the backend services to AWS Lambda. Increase the read and write capacity of DynamoDB</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Migrate the backend services to AWS Lambda. Configure DynamoDB to use global tables</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Auto Scaling groups for the backend services. Use DynamoDB auto scaling</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use Auto Scaling groups for the backend services. Use Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function to write to DynamoDB</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "744",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that sells tickets online and experiences bursts of demand every 7 days. The application has a stateless presentation layer running on Amazon EC2, an Oracle database to store unstructured data catalog information, and a backend API layer. The front-end layer uses an Elastic Load Balancer to distribute the load across nine On-Demand instances over three Availability Zones (AZs). The Oracle database is running on a single EC2 instance. The company is experiencing performance issues when running more than two concurrent campaigns. A solutions architect must design a solution that meets the following requirements:<br>✑ Address scalability issues.<br>✑ Increase the level of concurrency.<br>✑ Eliminate licensing costs.<br>✑ Improve reliability.<br>Which set of steps should the solutions architect take?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "744",
            "answers": [
              {
                "choice": "<p>A.  Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the Oracle database into a single Amazon RDS reserved DB instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Create two additional copies of the database instance, then distribute the databases in separate AZs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the tables in the Oracle database into Amazon DynamoDB tables.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Convert the On-Demand Instances into Spot instances to reduce costs for the front end. Convert the tables in the Oracle database into Amazon DynamoDB tables.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "745",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to refactor its retail ordering web application that currently has a load-balanced Amazon EC2 instance fleet for web hosting, database API services, and business logic. The company needs to create a decoupled, scalable architecture with a mechanism for retaining failed orders while also minimizing operational costs.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "745",
            "answers": [
              {
                "choice": "<p>A.  Use Amazon S3 for web hosting with Amazon API Gateway for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use Amazon Elastic Container Service (Amazon ECS) for business logic with Amazon SQS long polling for retaining failed orders.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS Elastic Beanstalk for web hosting with Amazon API Gateway for database API services. Use Amazon MQ for order queuing. Use AWS Step Functions for business logic with Amazon S3 Glacier Deep Archive for retaining failed orders.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Amazon S3 for web hosting with AWS AppSync for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use AWS Lambda for business logic with an Amazon SQS dead-letter queue for retaining failed orders.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use Amazon Lightsail for web hosting with AWS AppSync for database API services. Use Amazon Simple Email Service (Amazon SES) for order queuing. Use Amazon Elastic Kubernetes Service (Amazon EKS) for business logic with Amazon Elasticsearch Service (Amazon ES) for retaining failed orders.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "746",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company is building a system to generate monthly, immutable bank account statements for its users. Statements are stored in Amazon S3. Users should have immediate access to their monthly statements for up to 2 years. Some users access their statements frequently, whereas others rarely access their statements. The company's security and compliance policy requires that the statements be retained for at least 7 years.<br>What is the MOST cost-effective solution to meet the company's needs?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "746",
            "answers": [
              {
                "choice": "<p>A.  Create an S3 bucket with Object Lock disabled. Store statements in S3 Standard. Define an S3 Lifecycle policy to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days. Define another S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an S3 bucket with versioning enabled. Store statements in S3 Intelligent-Tiering. Use same-Region replication to replicate objects to a backup S3 bucket. Define an S3 Lifecycle policy for the backup S3 bucket to move the data to S3 Glacier. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an S3 bucket with Object Lock enabled. Store statements in S3 Intelligent-Tiering. Enable compliance mode with a default retention period of 2 years. Define an S3 Lifecycle policy to move the data to S3 Glacier after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an S3 bucket with versioning disabled. Store statements in S3 One Zone-Infrequent Access (S3 One Zone-IA). Define an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "747",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a large on-premises MySQL database at its main office that supports an issue tracking system used by employees around the world. The company already uses AWS for some workloads and has created an Amazon Route 53 entry for the database endpoint that points to the on-premises database.<br>Management is concerned about the database being a single point of failure and wants a solutions architect to migrate the database to AWS without any data loss or downtime.<br>Which set of actions should the solutions architect implement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "747",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load from the on-premises database to Aurora. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  During nonbusiness hours, shut down the on-premises database and create a backup. Restore this backup to an Amazon Aurora DB cluster. When the restoration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load with continuous replication from the on-premises database to Aurora. When the migration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a backup of the database and restore it to an Amazon Aurora multi-master cluster. This Aurora cluster will be in a master-master replication configuration with the on-premises database. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "748",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a policy that all Amazon EC2 instances that are running a database must exist within the same subnets in a shared VPC. Administrators must follow security compliance requirements and are not allowed to directly log in to the shared account. All company accounts are members of the same organization in AWS Organizations. The number of accounts will rapidly increase as the company grows.<br>A solutions architect uses AWS Resource Access Manager to create a resource share in the shared account.<br>What is the MOST operationally efficient configuration to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "748",
            "answers": [
              {
                "choice": "<p>A.  Add the VPC to the resource share. Add the account IDs as principals</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add all subnets within the VPC to the resource share. Add the account IDs as principals</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Add all subnets within the VPC to the resource share. Add the organization as a principal</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add the VPC to the resource share. Add the organization as a principal</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "749",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is evaluating the reliability of a recently migrated application running on AWS. The front end is hosted on Amazon S3 and accelerated by<br>Amazon CloudFront. The application layer is running in a stateless Docker container on an Amazon EC2 On-Demand Instance with an Elastic IP address. The storage layer is a MongoDB database running on an EC2 Reserved Instance in the same Availability Zone as the application layer.<br>Which combination of steps should the solutions architect take to eliminate single points of failure with minimal application code changes? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "749",
            "answers": [
              {
                "choice": "<p>A.  Create a REST API in Amazon API Gateway and use AWS Lambda functions as the application layer</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Application Load Balancer and migrate the Docker container to AWS Fargate</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Migrate the storage layer to Amazon DynamoDB</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Migrate the storage layer to Amazon DocumentDB (with MongoDB compatibility)</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create an Application Load Balancer and move the storage layer to an EC2 Auto Scaling group</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "750",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company operates an on-premises software-as-a-service (SaaS) solution that ingests several files daily. The company provides multiple public SFTP endpoints to its customers to facilitate the file transfers. The customers add the SFTP endpoint IP addresses to their firewall allow list for outbound traffic. Changes to the<br>SFTP endpoint IP addresses are not permitted.<br>The company wants to migrate the SaaS solution to AWS and decrease the operational overhead of the file transfer service.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "750",
            "answers": [
              {
                "choice": "<p>A.  Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add a subnet containing the customer-owned block of IP addresses to a VPC.  Create Elastic IP addresses from the address pool and assign them to an Application Load Balancer (ALB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the ALB.  Store the files in attached Amazon Elastic Block Store (Amazon EBS) volumes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Register the customer-owned block of IP addresses with Amazon Route 53. Create alias records in Route 53 that point to a Network Load Balancer (NLB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the NLB.  Store the files in Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an Amazon S3 VPC endpoint. Enable SFTP support on the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "751",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating a legacy application from an on-premises data center to AWS. The application consists of a single application server and a Microsoft SQL<br>Server database server. Each server is deployed on a VMware VM that consumes 500 TB of data across multiple attached volumes.<br>The company has established a 10 Gbps AWS Direct Connect connection from the closest AWS Region to its on-premises data center. The Direct Connect connection is not currently in use by other services.<br>Which combination of steps should a solutions architect take to migrate the application with the LEAST amount of downtime? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "751",
            "answers": [
              {
                "choice": "<p>A.  Use an AWS Server Migration Service (AWS SMS) replication job to migrate the database server VM to AWS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use VM Import/Export to import the application server VM.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Export the VM images to an AWS Snowball Edge Storage Optimized device.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use an AWS Server Migration Service (AWS SMS) replication job to migrate the application server VM to AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use an AWS Database Migration Service (AWS DMS) replication instance to migrate the database to an Amazon RDS DB instance.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "752",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is creating a REST API to share information with six of its partners based in the United States. The company has created an Amazon API Gateway<br>Regional endpoint. Each of the six partners will access the API once per day to post daily sales figures.<br>After initial deployment, the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet and wants to secure its API while minimizing cost.<br>Which approach should the company take to secure its API?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "752",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Configure CloudFront with an origin access identity (OAI) and associate it with the distribution. Configure API Gateway to ensure only the OAI can run the POST method.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Add a custom header to the CloudFront distribution populated with an API key. Configure the API to require an API key on the POST method.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a resource policy with a request limit and associate it with the API. Configure the API to require an API key on the POST method.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to the usage plan.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "753",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running its AWS infrastructure across two AWS Regions. The company has four VPCs in the eu-west-1 Region and has two VPCs in the us-east-1<br>Region. The company also has an on-premises data center in Europe that has two AWS Direct Connect connections in eu-west-1.<br>The company needs a solution in which Amazon EC2 instances in each VPC can connect to each other by using private IP addresses. Servers in the on-premises data center also must be able to connect to those VPCs by using private IP addresses.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "753",
            "answers": [
              {
                "choice": "<p>A.  Create an AWS Transit Gateway in each Region, and attach each VPC to the transit gateway in that Region. Create cross-Region peering between the transit gateways. Create two transit VIFs, and attach them to a single Direct Connect gateway. Associate each transit gateway with the Direct Connect gateway.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create VPC peering between each VPC in the same Region. Create cross-Region peering between each VPC in different Regions. Create two private VIFs, and attach them to a single Direct Connect gateway. Associate each VPC with the Direct Connect gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create VPC peering between each VPC in the same Region. Create cross-Region peering between each VPC in different Regions. Create two public VIFs that are configured to route AWS IP addresses globally to on-premises servers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Transit Gateway in each Region, and attach each VPC to the transit gateway in that Region. Create cross-Region peering between the transit gateways. Create two private VIFs, and attach them to a single Direct Connect gateway. Associate each VPC with the Direct Connect gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "754",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application that gives users the ability to search for videos and related information by using keywords that are curated from content providers.<br>The application data is stored in an on-premises Oracle database that is 800 GB in size.<br>The company wants to migrate the data to an Amazon Aurora MySQL DB instance. A solutions architect plans to use the AWS Schema Conversion Tool and<br>AWS Database Migration Service (AWS DMS) for the migration. During the migration, the existing database must serve ongoing requests. The migration must be completed with minimum downtime.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "754",
            "answers": [
              {
                "choice": "<p>A.  Create primary key indexes, secondary indexes, and referential integrity constraints in the target database before starting the migration process.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS DMS to run the conversion report for Oracle to Aurora MySQL. Remediate any issues. Then use AWS DMS to migrate the data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use the M5 or C5 DMS replication instance type for ongoing replication.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Turn off automatic backups and logging of the target database until the migration and cutover processes are complete.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "755",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "755",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon SES configuration set with Amazon Kinesis Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "756",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is launching a new web application on Amazon EC2 instances. Development and production workloads exist in separate AWS accounts.<br>According to the company's security requirements, only automated configuration tools are allowed to access the production account. The company's security team wants to receive immediate notification if any manual access to the production AWS account or EC2 instances occurs.<br>Which combination of actions should a solutions architect take in the production account to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CDE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "756",
            "answers": [
              {
                "choice": "<p>A.  Turn on AWS CloudTrail logs in the application's primary AWS Region. Use Amazon Athena to query the logs for AwsConsoleSignIn events.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure Amazon Simple Email Service (Amazon SES) to send email to the security team when an alarm is activated.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Deploy EC2 instances in an Auto Scaling group. Configure the launch template to deploy instances without key pairs. Configure Amazon CloudWatch Logs to capture system access logs. Create an Amazon CloudWatch alarm that is based on the logs to detect when a user logs in to an EC2 instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure an Amazon Simple Notification Service (Amazon SNS) topic to send a message to the security team when an alarm is activated.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Turn on AWS CloudTrail logs for all AWS Regions. Configure Amazon CloudWatch alarms to provide an alert when an AwsConsoleSignIn event is detected.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Deploy EC2 instances in an Auto Scaling group. Configure the launch template to delete the key pair after launch. Configure Amazon CloudWatch Logs for the system access logs. Create an Amazon CloudWatch dashboard to show user logins over time.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "757",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a workload that consists of thousands of Amazon EC2 instances. The workload is running in a VPC that contains several public subnets and private subnets. The public subnets have a route for 0.0.0.0/0 to an existing internet gateway. The private subnets have a route for 0.0.0.0/0 to an existing NAT gateway.<br>A solutions architect needs to migrate the entire fleet of EC2 instances to use IPv6. The EC2 instances that are in private subnets must not be accessible from the public internet.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "757",
            "answers": [
              {
                "choice": "<p>A.  Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Update all the VPC route tables, and add a route for ::/0 to the internet gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Update the VPC route tables for all private subnets, and add a route for ::/0 to the NAT gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Create an egress-only internet gateway. Update the VPC route tables for all private subnets, and add a route for ::/0 to the egress-only internet gateway.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Create a new NAT gateway, and enable IPv6 support. Update the VPC route tables for all private subnets, and add a route for ::/0 to the IPv6-enabled NAT gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "758",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating applications from on premises to the AWS Cloud. These applications power the company's internal web forms. These web forms collect data for specific events several times each quarter. The web forms use simple SQL statements to save the data to a local relational database.<br>Data collection occurs for each event, and the on-premises servers are idle most of the time. The company needs to minimize the amount of idle infrastructure that supports the web forms.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "758",
            "answers": [
              {
                "choice": "<p>A.  Use Amazon EC2 Image Builder to create AMIs for the legacy servers. Use the AMIs to provision EC2 instances to recreate the applications in the AWS Cloud. Place an Application Load Balancer (ALB) in front of the EC2 instances. Use Amazon Route 53 to point the DNS names of the web forms to the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create one Amazon DynamoDB table to store data for all the data input. Use the application form name as the table key to distinguish data items. Create an Amazon Kinesis data stream to receive the data input and store the input in DynamoDB.  Use Amazon Route 53 to point the DNS names of the web forms to the Kinesis data stream's endpoint.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create Docker images for each server of the legacy web form applications. Create an Amazon Elastic Container Service (Amazon EC2) cluster on AWS Fargate. Place an Application Load Balancer in front of the ECS cluster. Use Fargate task storage to store the web form data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provision an Amazon Aurora Serverless cluster. Build multiple schemas for each web form's data storage. Use Amazon API Gateway and an AWS Lambda function to recreate the data input forms. Use Amazon Route 53 to point the DNS names of the web forms to their corresponding API Gateway endpoint.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "759",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly.<br>The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company's customers.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "759",
            "answers": [
              {
                "choice": "<p>A.  Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases are synced, point the collector DNS record to the ALB.  Disable the AWS DMS sync task after the cutover from on premises to AWS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB.  Disable the AWS DMS sync task after the cutover from on premises to AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Set up an Amazon Aurora MySQL database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as an Amazon Kinesis data stream. Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the Kinesis data stream.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "760",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email. Data is stored in a MySQL database running on an Amazon EC2 instance. The database is running in a VPC with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC.<br>The website has suffered several outages during the last month due to high traffic.<br>Which actions should a solutions architect take to increase the reliability of the application? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "760",
            "answers": [
              {
                "choice": "<p>A.  Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Provision an additional VPC peering connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Migrate the MySQL database to Amazon Aurora with one Aurora Replica.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provision two NAT gateways in the database VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Move the Tomcat server to the database VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Create an additional public subnet in a different Availability Zone in the website VPC. </p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "761",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is building a web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is expected to receive many more reads than writes. The solutions architect needs to ensure that the large amount of read traffic can be accommodated and that the DB instance is highly available.<br>Which steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "761",
            "answers": [
              {
                "choice": "<p>A.  Create multiple read replicas and put them into an Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create multiple read replicas in different Availability Zones.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon Route 53 hosted zone and a record set for each read replica with a TTL and a weighted routing policy.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Application Load Balancer (ALB) and put the read replicas behind the ALB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Configure an Amazon CloudWatch alarm to detect a failed read replicas. Set the alarm to directly invoke an AWS Lambda function to delete its Route 53 record set.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Configure an Amazon Route 53 health check for each read replica using its endpoint.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "762",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS<br>Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only into a single AWS Region.<br>The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "762",
            "answers": [
              {
                "choice": "<p>A.  Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC.  Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy's Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC.  Configure a new NAT gateway. Use an AWS Network Firewall firewall for rule-based filtering. Create Network Firewall endpoints in each Availability Zone. Modify all default routes to point to the Network Firewall endpoints.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS Network Firewall firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering. Modify all default routes to point to the proxy's Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "763",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has multiple business units. Each business unit has its own AWS account and runs a single website within that account. The company also has a single logging account. Logs from each business unit website are aggregated into a single Amazon S3 bucket in the logging account. The S3 bucket policy provides each business unit with access to write data into the bucket and requires data to be encrypted.<br>The company needs to encrypt logs uploaded into the bucket using a single AWS Key Management Service (AWS KMS) CMK. The CMK that protects the data must be rotated once every 365 days.<br>Which strategy is the MOST operationally efficient for the company to use to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "763",
            "answers": [
              {
                "choice": "<p>A.  Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Manually rotate the CMK every 365 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Enable automatic rotation of the CMK.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Manually rotate the CMK every 365 days.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Enable automatic rotation of the CMK.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "764",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "764",
            "answers": [
              {
                "choice": "<p>A.  Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for VM Import. Use the AWS CLI to run the EC2 import command.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFS) share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy. Launch an EC2 instance that is based on the AMI.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM. Register the VM with Systems Manager to be a managed instance. Use AWS Backup to create a snapshot of the VM and create an AMI. Launch an EC2 instance that is based on the AMI.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "765",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account.<br>Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads.<br>Which strategy will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "765",
            "answers": [
              {
                "choice": "<p>A.  Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCPs with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the IAM policy for the developers' assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/ DevelopmentUnit.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "766",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's factory and automation applications are running in a single VPC. More than 20 applications run on a combination of Amazon EC2, Amazon Elastic<br>Container Service (Amazon ECS), and Amazon RDS.<br>The company has software engineers spread across three teams. One of the three teams owns each application, and each time is responsible for the cost and performance of all of its applications. Team resources have tags that represent their application and team. The teams use IAM access for daily activities.<br>The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and<br>Cost Management solution that provides these cost reports.<br>Which combination of actions will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "766",
            "answers": [
              {
                "choice": "<p>A.  Activate the user-define cost allocation tags that represent the application and the team.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Activate the AWS generated cost allocation tags that represent the application and the team.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a cost category for each application in Billing and Cost Management.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Activate IAM access to Billing and Cost Management.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create a cost budget.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Enable Cost Explorer.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "767",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company's applications read from and write to Amazon Kinesis Data Streams.<br>Most of the workloads run in private subnets.<br>A solutions architect must review the infrastructure. The solution architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high. A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "767",
            "answers": [
              {
                "choice": "<p>A.  Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add an interface VPC endpoint for Kinesis Data Streams to the VPC.  Ensure that the VPC endpoint policy allows traffic from the applications.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "768",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using multiple AWS accounts. The company has a shared service account and several other accounts for different projects.<br>A team has a VPC in a project account. The team wants to connect this VPC to a corporate network through an AWS Direct Connect gateway that exists in the shared services account. The team wants to automatically perform a virtual private gateway association with the Direct Connect gateway by using an already- tested AWS Lambda function while deploying its VPC networking stack. The Lambda function code can assume a role by using AWS Security Token Service<br>(AWS STS). The team is using AWS CloudFormation to deploy its infrastructure.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "768",
            "answers": [
              {
                "choice": "<p>A.  Deploy the Lambda function to the project account. Update the Lambda function's IAM role with the directconnect:* permission.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a cross-account IAM role in the shared services account that grants the Lambda function the directconnect:* permission. Add the sts:AssumeRole permission to the IAM role that is associated with the Lambda function in the shared services account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Add a custom resource to the CloudFormation networking stack that references the Lambda function in the project account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Deploy the Lambda function that is performing the association to the shared services account. Update the Lambda function's IAM role with the directconnect:* permission.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create a cross-account IAM role in the shared services account that grants the sts:AssumeRole permission to the Lambda function with the directconnect:* permission acting as a resource. Add the sts:AssumeRole permission with this cross-account IAM role as a resource to the IAM role that belongs to the Lambda function in the project account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Add a custom resource to the CloudFormation networking stack that references the Lambda function in the shared services account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "769",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a line-of-business (LOB) application on AWS to support its users. The application runs in one VPC, with a backup copy in a second VPC in a different AWS Region for disaster recovery. The company has a single AWS Direct Connect connection between its on-premises network and AWS. The connection terminates at a Direct Connect gateway.<br>All access to the application must originate from the company's on-premises network and traffic must be encrypted in transit through the use of IPsec. The company is routing traffic through a VPN tunnel over the Direct Connect connection to provide the required encryption.<br>A business continuity audit determines that the Direct Connect connection represents a potential single point of failure for access to the application. The company needs to remediate this issue as quickly as possible.<br>Which approach will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "769",
            "answers": [
              {
                "choice": "<p>A.  Order a second Direct Connect connection to a different Direct Connect location. Terminate the second Direct Connect connection at the same Direct Connect gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure an AWS Site-to-Site VPN connection over the internet. Terminate the VPN connection at a virtual private gateway in the secondary Region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Configure an AWS Site-to- Site VPN connection, and terminate it at the transit gateway.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Order a second Direct Connect connection, and terminate it at the transit gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "770",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company in Europe plans to migrate its applications to the AWS Cloud. The company uses multiple AWS accounts for various business groups. A data privacy law requires the company to restrict developers' access to AWS European Regions only.<br>What should the solutions architect do to meet this requirement with the LEAST amount of management overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "770",
            "answers": [
              {
                "choice": "<p>A.  Create IAM users and IAM groups in each account. Create IAM policies to limit access to non-European Regions. Attach the IAM policies to the IAM groups.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable AWS Organizations, attach the AWS accounts, and create OUs for European Regions and non-European Regions. Create SCPs to limit access to non-European Regions and attach the policies to the OUs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up AWS Single Sign-On and attach AWS accounts. Create permission sets with policies to restrict access to non-European Regions. Create IAM users and IAM groups in each account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable AWS Organizations, attach the AWS accounts, and create OUs for European Regions and non-European Regions. Create permission sets with policies to restrict access to non-European Regions. Create IAM users and IAM groups in the primary account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "771",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has several applications running in an on-premises data center. The data center runs a mix of Windows and Linux VMs managed by VMware vCenter.<br>A solutions architect needs to create a plan to migrate the applications to AWS. However, the solutions architect discovers that the document for the applications is not up to date and that there are no complete infrastructure diagrams. The company's developers lack time to discuss their applications and current usage with the solutions architect.<br>What should the solutions architect do to gather the required information?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "771",
            "answers": [
              {
                "choice": "<p>A.  Deploy the AWS Server Migration Service (AWS SMS) connector using the OVA image on the VMware cluster to collect configuration and utilization data from the VMs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use the AWS Migration Portfolio Assessment (MPA) tool to connect to each of the VMs to collect the configuration and utilization data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Install the AWS Application Discovery Service on each of the VMs to collect the configuration and utilization data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Register the on-premises VMs with the AWS Migration Hub to collect configuration and utilization data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "772",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use<br>AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "772",
            "answers": [
              {
                "choice": "<p>A.  From the management account, share the transit gateway with member accounts by using AWS Resource Access Manager.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  From the management account, share the transit gateway with member accounts by using an AWS Organizations SCP.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the management account by using the transit gateway ID. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the management account by using a transit gateway service-linked role.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  From the management account, share the transit gateway with member accounts by using AWS Service Catalog.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "773",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A scientific company needs to process text and image data from an Amazon S3 bucket. The data is collected from several radar stations during a live, time-critical phase of a deep space mission. The radar stations upload the data to the source S3 bucket. The data is prefixed by radar station identification number.<br>The company created a destination S3 bucket in a second account. Data must be copied from the source S3 bucket to the destination S3 bucket to meet a compliance objective. The replication occurs through the use of an S3 replication rule to cover all objects in the source S3 bucket.<br>One specific radar station is identified as having the most accurate data. Data replication at this radar station must be monitored for completion within 30 minutes after the radar station uploads the objects to the source S3 bucket.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "773",
            "answers": [
              {
                "choice": "<p>A.  Set up an AWS DataSync agent to replicate the prefixed data from the source S3 bucket to the destination S3 bucket. Select to use all available bandwidth on the task, and monitor the task to ensure that it is in the TRANSFERRING status. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the second account, create another S3 bucket to receive data from the radar station with the most accurate data. Set up a new replication rule for this new S3 bucket to separate the replication from the other radar stations. Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable Amazon S3 Transfer Acceleration on the source S3 bucket, and configure the radar station with the most accurate data to use the new endpoint. Monitor the S3 destination bucket's TotalRequestLatency metric. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a new S3 replication rule on the source S3 bucket that filters for the keys that use the prefix of the radar station with the most accurate data. Enable S3 Replication Time Control (S3 RTC). Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "774",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is serving files to its customer through an SFTP server that is accessible over the Internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached. Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses.<br>A solutions architect must implement a solution to improve availability, minimize the complexity of infrastructure management, and minimize the disruption to customers who access files. The solution must not change the way customers connect.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "774",
            "answers": [
              {
                "choice": "<p>A.  Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted, Internet-facing endpoint. Associate the SFTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by using the task definition, and place a Network Load Balancer (NLB) in front of the service. When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NLB.  Sync all files from the SFTP server to the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used for SFTP file hosting. Create a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume. Configure the Auto Scaling group to automatically add instances behind the NLB.  Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "775",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application distributed over several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The security team requires that all application access attempts be made available for analysis. Information about the client IP address, connection type, and user agent must be included.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "775",
            "answers": [
              {
                "choice": "<p>A.  Enable EC2 detailed monitoring, and include network logs. Send all logs through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Enable VPC Flow Logs for all EC2 instance network interfaces. Publish VPC Flow Logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Enable Traffic Mirroring and specify all EC2 instance network interfaces as the source. Send all traffic information through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "776",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a legacy application on Amazon EC2 instances in multiple Availability Zones behind a software load balancer that runs on an active/standby set of EC2 instances. For disaster recovery, the company has created a warm standby version of the application environment that is deployed in another AWS<br>Region. The domain for the application uses a hosted zone from Amazon Route 53.<br>The company needs the application to use static IP addresses, even in the case of a failover event to the secondary Region. The company also requires the client's source IP address to be available for auditing purposes.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "776",
            "answers": [
              {
                "choice": "<p>A.  Replace the software load balancer with an AWS Application Load Balancer. Create an AWS Global Accelerator accelerator. Add an endpoint group for each Region. Configure Route 53 health checks. Add an alias record that points to the accelerator.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Replace the software load balancer with an AWS Network Load Balancer. Create an AWS Global Accelerator accelerator. Add an endpoint group for each Region. Configure Route 53 health checks. Add a CNAME record that points to the DNS name of the accelerator.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Replace the software load balancer with an AWS Application Load Balancer. Use AWS Global Accelerator to create two separate accelerators. Add an endpoint group for each Region. Configure Route 53 health checks. Add a record set that is configured for active-passive DNS failover. Point the record set to the DNS names of the two accelerators.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Replace the software load balancer with an AWS Network Load Balancer. Use AWS Global Accelerator to create two separate accelerators. Add an endpoint group for each Region. Configure Route 53 health checks. Add a record set that is configured for weighted round-robin DNS failover. Point the record set to the DNS names of the two accelerators.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "777",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company maintains a restaurant review website. The website is a single-page application where files are stored in Amazon S3 and delivered using Amazon<br>CloudFront. The company receives several fake postings every day that are manually removed.<br>The security team has identified that most of the fake posts are from bots with IP addresses that have a bad reputation within the same global region. The team needs to create a solution to help restrict the bots from accessing the website.<br>Which strategy should a solutions architect use?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "777",
            "answers": [
              {
                "choice": "<p>A.  Use AWS Firewall Manager to control the CloudFront distribution security settings. Create a geographical block rule and associate it with Firewall Manager.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Associate an AWS WAF web ACL with the CloudFront distribution. Select the managed Amazon IP reputation rule group for the web ACL with a deny action.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use AWS Firewall Manager to control the CloudFront distribution security settings. Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Associate an AWS WAF web ACL with the CloudFront distribution. Create a rule group for the web ACL with a geographical match statement with a deny action.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "778",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon<br>DynamoDB table. The application is showing an increase in the number of errors during PUT requests. Most of the PUT calls come from a small number of clients that are authenticated with specific API keys.<br>A solutions architect has identified that a large number of the PUT requests originate from one client. The API is noncritical, and clients can tolerate retries of unsuccessful calls. However, the errors are displayed to customers and are causing damage to the API's reputation.<br>What should the solutions architect recommend to improve the customer experience?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "778",
            "answers": [
              {
                "choice": "<p>A.  Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Implement API throttling through a usage plan at the API Gateway level. Ensure that the client application handles code 429 replies without error.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Turn on API caching to enhance responsiveness for the production stage. Run 10-minute load tests. Verify that the cache capacity is appropriate for the workload.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Implement reserved concurrency at the Lambda function level to provide the resources that are needed during sudden increases in traffic.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "779",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical company is running an application in the AWS Cloud. The application simulates the effect of medical drugs in development.<br>The application consists of two parts: configuration and simulation. The configuration part runs in AWS Fargate containers in an Amazon Elastic Container Service<br>(Amazon ECS) cluster. The simulation part runs on large, compute optimized Amazon EC2 instances. Simulations can restart if they are interrupted.<br>The configuration part runs 24 hours a day with a steady load. The simulation part runs only for a few hours each night with a variable load. The company stores simulation results in Amazon S3, and researchers use the results for 30 days. The company must store simulations for 10 years and must be able to retrieve the simulations within 5 hours.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "779",
            "answers": [
              {
                "choice": "<p>A.  Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Intelligent-Tiering.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Purchase an EC2 Instance Savings Plan to cover the usage for the configuration part and the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Purchase Compute Savings Plans to cover the usage for the configuration part. Run the simulation part by using EC2 Spot Instances. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Purchase Compute Savings Plans to cover the usage for the configuration part. Purchase EC2 Reserved Instances for the simulation part. Create an S3 Lifecycle policy to transition objects that are older than 30 days to S3 Glacier Deep Archive.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "780",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company manages multiple AWS accounts by using AWS Organizations. Under the root OU, the company has two OUs: Research and DataOps.<br>Because of regulatory requirements, all resources that the company deploys in the organization must reside in the ap-northeast-1 Region. Additionally, EC2 instances that the company deploys in the DataOps OU must use a predefined list of instance types.<br>A solutions architect must implement a solution that applies these restrictions. The solution must maximize operational efficiency and must minimize ongoing maintenance.<br>Which combination of steps will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "780",
            "answers": [
              {
                "choice": "<p>A.  Create an IAM role in one account under the DataOps OU. Use the ec2:InstanceType condition key in an inline policy on the role to restrict access to specific instance type.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an IAM user in all accounts under the root OU. Use the aws:RequestedRegion condition key in an inline policy on each user to restrict access to all AWS Regions except ap-northeast-1.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an SCP. Use the aws:RequestedRegion condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an SCP. Use the ec2:Region condition key to restrict access to all AWS Regions except ap-northeast-1. Apply the SCP to the root OU, the DataOps OU, and the Research OU.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create an SCP. Use the ec2:InstanceType condition key to restrict access to specific instance types. Apply the SCP to the DataOps OU.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "781",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting an image-processing service on AWS in a VPC. The VPC extends across two Availability Zones. Each Availability Zone contains one public subnet and one private subnet.<br>The service runs on Amazon EC2 instances in the private subnets. An Application Load Balancer in the public subnets is in front of the service. The service needs to communicate with the internet and does so through two NAT gateways. The service uses Amazon S3 for image storage. The EC2 instances retrieve approximately 1 ׀¢׀’ of data from an S3 bucket each day.<br>The company has promoted the service as highly secure. A solutions architect must reduce cloud expenditures as much as possible without compromising the service's security posture or increasing the time spent on ongoing operations.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "781",
            "answers": [
              {
                "choice": "<p>A.  Replace the NAT gateways with NAT instances. In the VPC route table, create a route from the private subnets to the NAT instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Move the EC2 instances to the public subnets. Remove the NAT gateways.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up an S3 gateway VPC endpoint in the VPC.  Attach an endpoint policy to the endpoint to allow the required actions on the S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Attach an Amazon Elastic File System (Amazon EFS) volume to the EC2 instances. Host the image on the EFS volume.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "782",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching.<br>Management requires a single report showing the patch status of all the servers and instances.<br>Which set of actions should a solutions architect take to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "782",
            "answers": [
              {
                "choice": "<p>A.  Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use an Amazon EventBridge (Amazon CloudWatch Events) rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use AWS X-Ray to post the patch status to AWS Systems Manager OpsCenter to generate patch compliance reports.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "783",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a large containerized workload in the AWS Cloud. The workload consists of approximately 100 different services. The company uses<br>Amazon Elastic Container Service (Amazon ECS) to orchestrate the workload.<br>Recently, the company's development team started using AWS Fargate instead of Amazon EC2 instances in the ECS cluster. In the past, the workload has come close to running the maximum number of EC2 instances that are available in the account.<br>The company is worried that the workload could reach the maximum number of ECS tasks that are allowed. A solutions architect must implement a solution that will notify the development team when Fargate reaches 80% of the maximum number of tasks.<br>What should the solutions architect do to meet this requirement?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "783",
            "answers": [
              {
                "choice": "<p>A.  Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/ SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS Lambda function to poll detailed metrics form the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon Simple Email Service (Amazon SES) to notify the development team.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "784",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a large number of AWS accounts in an organization in AWS Organizations. A different business group owns each account. All the AWS accounts are bound by legal compliance requirements that restrict all operations outside the eu-west-2 Region.<br>The company's security team has mandated the use of AWS Systems Manager Session Manager across all AWS accounts.<br>Which solution should a solutions architect recommend to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "784",
            "answers": [
              {
                "choice": "<p>A.  Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. In AWS Organizations, apply the SCP to the root of the organization.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. For each AWS account, use the AmNotLike condition key to add the ARN of the IAM role that is associated with the Session Manager instance profile to the condition element of the SCP. In AWS Organizations apply, the SCP to the root of the organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an SCP that denies access to all requests that do not target eu-west-2. Use the NotAction element to exempt global services from the restriction. In AWS Organizations, apply the SCP to the root of the organization. In each AWS account, create an IAM permissions boundary that allows access to the IAM role that is associated with the Session Manager instance profile.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  For each AWS account, create an IAM permissions boundary that denies access to all requests that do not target eu-west-2. For each AWS account, apply the permissions boundary to the IAM role that is associated with the Session Manager instance profile.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "785",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations. The company has an organization that has a central management account. The company plans to provision multiple AWS accounts for different departments. All department accounts must be a member of the company's organization.<br>Compliance requirements state that each account must have only one VPC. Additionally, each VPC must have an identical network security configuration that includes fully configured subnets, gateways, network ACLs, and security groups.<br>The company wants this security setup to be automatically applied when a new department account is created. The company wants to use the central management account for all security operations, but the central management account should not have the security setup.<br>Which approach meets these requirements with the LEAST amount of setup?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "785",
            "answers": [
              {
                "choice": "<p>A.  Create an OU within the company's organization. Add department accounts to the OU. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create a CloudFormation stack set by using this template file with automated deployment enabled. Apply the CloudFormation stack set to the OU.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a new organization with the central management account. Invite all AWS department accounts into the new organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create a CloudFormation stack that is based on this template. Apply the CloudFormation stack to the newly created organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Invite department accounts to the company's organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create an AWS CodePipeline pipeline that will deploy the network security setup to the newly created account. Specify the creation of an account as an event hook. Apply the event hook to the pipeline.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Invite department accounts to the company's organization. From the central management account, create an AWS CloudFormation template that includes the VPC and the network security configurations. Create an AWS Lambda function that will deploy the VPC and the network security setup to the newly created account. Create an event that watches for account creation. Configure the event to invoke the pipeline.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "786",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company owns a chain of travel agencies and is running an application in the AWS Cloud. Company employees use the application to search for information about travel destinations. Destination content is updated four times each year.<br>Two fixed Amazon EC2 instances serve the application. The company uses an Amazon Route 53 public hosted zone with a multivalue record of travel.example.com that returns the Elastic IP addresses for the EC2 instances. The application uses Amazon DynamoDB as its primary data store. The company uses a self-hosted Redis instance as a caching solution.<br>During content updates, the load on the EC2 instances and the caching solution increases drastically. This increased load has led to downtime on several occasions. A solutions architect must update the application so that the application is highly available and can handle the load that is generated by the content updates.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "786",
            "answers": [
              {
                "choice": "<p>A.  Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB.  Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the EC2 instances before the content updates.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Set up Amazon ElastiCache for Redis. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set up Amazon ElastiCache for Memcached. Update the application to use ElastiCache Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB.  Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the application before the content updates.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "787",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical company is building a data lake on Amazon S3. The data must be encrypted in transit and at rest. The data must remain protected even if S3 bucket is inadvertently made public.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "787",
            "answers": [
              {
                "choice": "<p>A.  Ensure that each S3 bucket has a bucket policy that includes a Deny statement if the aws:SecureTransport condition is not present.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create a CMK in AWS Key Management Service (AWS KMS). Turn on server-side encryption (SSE) on the S3 buckets, select SSE-KMS for the encryption type, and use the CMK as the key.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Ensure that each S3 bucket has a bucket policy that includes a Deny statement for PutObject actions if the request does not include an ג€s3:x-amz-server-side- encryptionג€:ג€aws:kmsג€ condition.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Turn on server-side encryption (SSE) on the S3 buckets and select SSE-S3 for the encryption type.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Ensure that each S3 bucket has a bucket policy that includes a Deny statement for PutObject actions if the request does not include an ג€s3:x-amz-server-side- encryptionג€:ג€AES256ג€ condition.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F.  Turn on AWS Config. Use the s3-bucket-public-read-prohibited, s3-bucket-public-write-prohibited, and s3-bucket-ssl-requests-only AWS Config managed rules to monitor the S3 buckets.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "788",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin.<br>The web application communicates with Amazon API Gateway Regional endpoints. The API Gateway APIs call AWS Lambda functions that store metadata in an<br>Amazon Aurora Serverless database and put the documents into an S3 bucket.<br>The company is growing steadily and has completed a proof of concept with its largest customer. The company must improve latency outside of Europe<br>Which combination of actions will meet these requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "788",
            "answers": [
              {
                "choice": "<p>A.  Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an accelerator in AWS Global Accelerator. Attach the accelerator to the CloudFront distribution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Change the API Gateway Regional endpoints to edge-optimized endpoints.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provision the entire stack in two other locations that are spread across the world. Use global databases on the Aurora Serverless cluster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Add an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "789",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is troubleshooting an application that runs on Amazon EC2 instances. The EC2 instances run in an Auto Scaling group. The application needs to access user data in an Amazon DynamoDB table that has fixed provisioned capacity.<br>To match the increased workload, the solutions architect recently doubled the maximum size of the Auto Scaling group. Now, when many instances launch at the same time, some application components are throttled when the components scan the DynamoDB table. The Auto Scaling group terminates the failing instances and starts new instances until all applications are running<br>A solutions architect must implement a solution to mitigate the throttling issue in the MOST cost-effective manner<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "789",
            "answers": [
              {
                "choice": "<p>A.  Double the provisioned read capacity of the DynamoDB table.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Duplicate the DynamoDB table. Configure the running copy of the application to select at random which table it access.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Set the DynamoDB table to on-demand mode.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Add DynamoDB Accelerator (DAX) to the table.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "790",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must analyze a company's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/ passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.<br>The solutions architect must analyze the environment and take action based on the findings.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "790",
            "answers": [
              {
                "choice": "<p>A.  Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes. Create and review a dashboard that is based on the metrics. Identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Install the Amazon CloudWatch agent on each of the EC2 instances. Turn on AWS Compute Optimizer, and let it run for at least 12 hours. Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Sign up for the AWS Enterprise Support plan. Turn on AWS Trusted Advisor. Wait 12 hours. Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "791",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large mobile gaming company has successfully migrated all of its on-premises infrastructure to the AWS Cloud. A solutions architect is reviewing the environment to ensure that it was built according to the design and that it is running in alignment with the Well-Architected Framework.<br>While reviewing previous monthly costs in Cost Explorer, the solutions architect notices that the creation and subsequent termination of several large instance types account for a high proportion of the costs. The solutions architect finds out that the company's developers are launching new Amazon EC2 instances as part of their testing and that the developers are not using the appropriate instance types.<br>The solutions architect must implement a control mechanism to limit the instance types that only the developers can launch.<br>Which solution will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "791",
            "answers": [
              {
                "choice": "<p>A.  Create a desired-instance-type managed rule in AWS Config. Configure the rule with the instance types that are allowed. Attach the rule to an event to run each time a new EC2 instance is launched.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the EC2 console, create a launch template that specifies the instance types that are allowed. Assign the launch template to the developers' IAM accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a new IAM policy. Specify the instance types that are allowed. Attach the policy to an IAM group that contains the IAM accounts for the developers</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "792",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.<br>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "792",
            "answers": [
              {
                "choice": "<p>A.  Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC. </p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection and connect the new public virtual interface to the single VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC. </p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "793",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company plans to deploy a new private intranet service on Amazon EC2 instances inside a VPC. An AWS Site-to-Site VPN connects the VPC to the company's on-premises network. The new service must communicate with existing on-premises services. The on-premises services are accessible through the use of hostnames that reside in the company.example DNS zone. This DNS zone is wholly hosted on premises and is available only on the company's private network.<br>A solutions architect must ensure that the new service can resolve hostnames on the company example domain to integrate with existing services.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "793",
            "answers": [
              {
                "choice": "<p>A.  Create an empty private zone in Amazon Route 53 for company example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Turn on DNS hostnames for the VPC.  Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Turn on DNS hostnames for the VPC.  Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configure the on-premises DNS server to forward requests for company.example to the new resolver.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to run the document when an instance is entering the running state.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "794",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company recently experienced an unexpected increase in Amazon RDS and Amazon DynamoDB costs. The company needs to increase visibility into details of AWS Billing and Cost Management. There are various accounts associated with AWS Organizations, including many development and production accounts. There is no consistent tagging strategy across the organization, but there are guidelines in place that require all infrastructure to be deployed using<br>AWS CloudFormation with consistent tagging. Management requires cost center numbers and project ID numbers for all existing and future DynamoDB tables and<br>RDS instances.<br>Which strategy should the solutions architect provide to meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "794",
            "answers": [
              {
                "choice": "<p>A.  Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Use an AWS Config rule to alert the finance team of untagged resources. Create a centralized AWS Lambda based solution to tag untagged RDS databases and DynamoDB resources every hour using a cross-account role.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID.  Use SCPs to restrict resource creation that do not have the cost center and project ID on the resource.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources. Update existing federated roles to restrict privileges to provision resources that do not include the cost center and project ID on the resource.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "795",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its data center from on premises to the AWS Cloud. The migration will take several months to complete. The company will use Amazon<br>Route 53 for private DNS zones.<br>During the migration, the company must keep its AWS services pointed at the VPC's Route 53 Resolver for DNS. The company also must maintain the ability to resolve addresses from its on-premises DNS server. A solutions architect must set up DNS so that Amazon EC2 instances can use native Route 53 endpoints to resolve on-premises DNS queries.<br>Which configuration will meet these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "795",
            "answers": [
              {
                "choice": "<p>A.  Configure the VPC DHCP options set to point to on-premises DNS server IP addresses. Ensure that security groups for EC2 instances allow outbound access to port 53 on those DNS server IP addresses.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Launch an EC2 instance that has DNS BIND installed and configured. Ensure that the security groups that are attached to the EC2 instance can access the on-premises DNS server IP address on port 53. Configure BIND to forward DNS queries to on-premises DNS server IP addresses. Configure each migrated EC2 instance's DNS settings to point to the BIND server IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create a new outbound endpoint in Route 53, and attach the endpoint to the VPC.  Ensure that the security groups that are attached to the endpoint can access the on-premises DNS server IP address on port 53. Create a new Route 53 Resolver rule that routes on-premises designated traffic to the on-premises DNS server.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a new private DNS zone in Route 53 with the same domain name as the on-premises domain. Create a single wildcard record with the on-premises DNS server IP address as the record's address.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "796",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements:<br>✑ Inbound requests must be filtered for common vulnerability attacks.<br>✑ Rejected requests must be sent to a third-party auditing application.<br>✑ All resources should be highly available.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "796",
            "answers": [
              {
                "choice": "<p>A.  Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB.  Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Configure an Application Load Balancer (ALB) and add the EC2 instances as targets. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs. Use an AWS Lambda function to frequently push the logs to the third-party auditing application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Configure an Application Load Balancer (ALB) along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Configure a Multi-AZ Auto Scaling group using the application's AMI Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF.  Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "797",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs applications on Amazon EC2 instances. The company plans to begin using an Auto Scaling group for the instances. As part of this transition, a solutions architect must ensure that Amazon CloudWatch Logs automatically collects logs from all new instances. The new Auto Scaling group will use a launch template that includes the Amazon Linux 2 AMI and no key pair.<br>Which solution meets these requirements?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "797",
            "answers": [
              {
                "choice": "<p>A.  Create an Amazon CloudWatch agent configuration for the workload. Store the CloudWatch agent configuration in an Amazon S3 bucket. Write an EC2 user data script to fetch the configuration file from Amazon S3. Configure the CloudWatch agent on the instance during initial boot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an Amazon CloudWatch agent configuration for the workload in AWS Systems Manager Parameter Store. Create a Systems Manager document that installs and configures the CloudWatch agent by using the configuration. Create an Amazon EventBridge (Amazon CloudWatch Events) rule on the default event bus with a Systems Manager Run Command target that runs the document whenever an instance enters the running state.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an Amazon CloudWatch agent configuration for the workload. Create an AWS Lambda function to install and configure the CloudWatch agent by using AWS Systems Manager Session Manager. Include the agent configuration inside the Lambda package. Create an AWS Config custom rule to identify changes to the EC2 instances and invoke Lambda function.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an Amazon CloudWatch agent configuration for the workload. Save the CloudWatch agent configuration as part of an AWS Lambda deployment package. Use AWS CloudTrail to capture EC2 tagging events and initiate agent installation. Use AWS CodeBuild to configure the CloudWatch agent on the instances that run the workload.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "798",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central<br>Amazon S3 bucket every 15 minutes. The security team discovers that log files are missing from some of the terminated EC2 instances.<br>Which set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "798",
            "answers": [
              {
                "choice": "<p>A.  Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B.  Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge (Amazon CloudWatch Events) rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge (CloudWatch Events) rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic. From the SNS notification, call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send ABANDON to the Auto Scaling group to terminate the instance.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "XXX"
      },
      {
        "question_id": "799",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must implement a multi-Region architecture for an Amazon RDS for PostgreSQL database that supports a web application. The database launches from an AWS CloudFormation template that includes AWS services and features that are present in both the primary and secondary Regions.<br>The database is configured for automated backups, and it has an RTO of 15 minutes and an RPO of 2 hours. The web application is configured to use an Amazon<br>Route 53 record to route traffic to the database.<br>Which combination of steps will result in a highly available architecture that meets all the requirements? (Choose two.)<br><br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "799",
            "answers": [
              {
                "choice": "<p>A.  Create a cross-Region read replica of the database in the secondary Region. Configure an AWS Lambda function in the secondary Region to promote the read replica during failover event.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B.  In the primary Region, create a health check on the database that will invoke an AWS Lambda function when a failure is detected. Program the Lambda function to recreate the database from the latest database snapshot in the secondary Region and update the Route 53 host records for the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C.  Create an AWS Lambda function to copy the latest automated backup to the secondary Region every 2 hours.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D.  Create a failover routing policy in Route 53 for the database DNS record. Set the primary and secondary endpoints to the endpoints in each Region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E.  Create a hot standby database in the secondary Region. Use an AWS Lambda function to restore the secondary database to the latest RDS automatic backup in the event that the primary database fails.</p>",
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