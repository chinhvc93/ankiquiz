var ExamTopic_300_350 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#301",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An organization has an application that can schedule the start and shutdown of an EC2 instance. The organization need the instance's MAC address in order to register it with its software. EC2-CLASSIC is used to start the instance.<br><br>How can an organization ensure that the MAC registration is updated on a per-instance basis?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#301",
            "answers": [
              {
                "choice": "<p>The organization should write a boot strapping script which will get the MAC address from the instance metadata and use that script to register with the application.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The organization should provide a MAC address as a part of the user data. Thus, whenever the instance is booted the script assigns the fixed MAC address to that instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The instance MAC address never changes. Thus, it is not required to register the MAC address every time.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS never provides a MAC address to an instance; instead the instance ID is used for identifying the instance for any software registration.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#302",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business owns and operates a video processing platform. Users upload files using a web server, which then saves them on an Amazon EFS share. On a single Amazon EC2 instance, this web server is executing. A separate set of instances, each operating in its own Auto Scaling group, checks the EFS share directory structure for new files to process and creates new videos (thumbnails, various resolutions, compression, etc.) according to the instructions file that is uploaded with the video files. A separate application processes the video files and subsequently deletes them from the EFS share using a set of instances controlled by an Auto Scaling group. The output is saved to an S3 bucket. The buyer is provided links to the processed video files.<br>The organization has observed that when additional instances of the Auto Scaling Group are added, many files are processed twice, resulting in no improvement in picture processing time. These video files have a maximum size of 2GB.<br><br>What should the Solutions Architect do to increase video file dependability and minimize duplicate processing?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#302",
            "answers": [
              {
                "choice": "<p>Modify the web application to upload the video files directly to Amazon S3. Use Amazon CloudWatch Events to trigger an AWS Lambda function every time a file is uploaded, and have this Lambda function put a message into an Amazon SQS queue. Modify the video processing application to read from SQS queue for new files and use the queue depth metric to scale instances in the video processing Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a cron job on the web server instance to synchronize the contents of the EFS share into Amazon S3. Trigger an AWS Lambda function every time a file is uploaded to process the video file and store the results in Amazon S3. Using Amazon CloudWatch Events, trigger an Amazon SES job to send an email to the customer containing the link to the processed file.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Rewrite the web application to run directly from Amazon S3 and use Amazon API Gateway to upload the video files to an S3 bucket. Use an S3 trigger to run an AWS Lambda function each time a file is uploaded to process and store new video files in a different bucket. Using CloudWatch Events, trigger an SES job to send an email to the customer containing the link to the processed file.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Rewrite the web application to run from Amazon S3 and upload the video files to an S3 bucket. Each time a new file is uploaded, trigger an AWS Lambda function to put a message in an SQS queue containing the link and the instructions. Modify the video processing application to read from the SQS queue and the S3 bucket. Use the queue depth metric to adjust the size of the Auto Scaling group for video processing instances.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#303",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that runs a web service on Amazon EC2 instances and stores .jpg images in Amazon S3. The web traffic has a predictable baseline, but often demand spikes unpredictably for short periods of time. The application is loosely coupled and stateless. The .jpg images stored in Amazon S3 are accessed frequently for the first 15 to 20 days, they are seldom accessed thereafter but always need to be immediately available. The CIO has asked to find ways to reduce costs.<br><br>Which of the following options will reduce costs? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#303",
            "answers": [
              {
                "choice": "<p>Purchase Reserved instances for baseline capacity requirements and use On-Demand instances for the demand spikes. [1]</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use On-Demand instances for baseline capacity requirements and use Spot Fleet instances for the demand spikes. [1]</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a script that checks the load on all web servers and terminates unnecessary On-Demand instances.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#304",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Attempts, one of three categories of things connected with the AWS Data Pipeline's scheduling pipeline, enables sophisticated data management.<br><br>Which of the following claims about Attempts is NOT true?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#304",
            "answers": [
              {
                "choice": "<p>Attempts provide robust data management.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Data Pipeline retries a failed operation until the count of retries reaches the maximum number of allowed retry attempts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An AWS Data Pipeline Attempt object compiles the pipeline components to create a set of actionable instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Data Pipeline Attempt objects track the various attempts, results, and failure reasons if applicable.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#305",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which of the following is true when granting access to apps running on Amazon EC2 instances using an IAM role?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#305",
            "answers": [
              {
                "choice": "<p>All applications on the instance share the same role, but different permissions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All applications on the instance share multiple roles and permissions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Multiple roles are assigned to an EC2 instance at a time.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Only one role can be assigned to an EC2 instance at a time.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#306",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The CISO of a corporation has requested a Solutions Architect to reengineer the company's existing continuous integration and delivery methods in order to ensure that patch deployments to its apps occur as rapidly as possible with little downtime in the event of vulnerability discovery. Additionally, the organization must be able to immediately reverse a modification in the event of a mistake.<br>The web application is hosted on a fleet of Amazon EC2 instances that are routed via an Application Load Balancer. The firm is presently hosting the application's source code on GitHub and building it using an AWS CodeBuild project. Additionally, the firm wants to leverage AWS CodePipeline to automatically trigger builds based on GitHub contributions using the current CodeBuild project.<br><br>Which CI/CD setup satisfies all requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#306",
            "answers": [
              {
                "choice": "<p>Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for in-place deployment. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for blue/green deployments. Monitor the newly deployed code, and, if there are any issues, trigger a manual rollback using CodeDeploy.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure CodePipeline with a deploy stage using AWS CloudFormation to create a pipeline for test and production stacks. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the CodePipeline with a deploy stage using AWS OpsWorks and in-place deployments. Monitor the newly deployed code, and, if there are any issues, push another code update.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#307",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is in the process of transferring an application to AWS. It wishes to make most advantage of completely managed services throughout the move. The organization requires the application to store huge, critical documents in accordance with the following requirements:<br>✑ The data must be very durable and readily accessible.<br>✑ At all times, data must be encrypted both in transit and at rest.<br>✑ The encryption key must be controlled and changed on a regular basis by the business.<br><br>Which of the following solutions should be recommended by the Solutions Architect?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#307",
            "answers": [
              {
                "choice": "<p>Deploy the storage gateway to AWS in file gateway mode. Use Amazon EBS volume encryption using an AWS KMS key to encrypt the storage gateway volumes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon S3 with a bucket policy to enforce HTTPS for connections to the bucket and to enforce server-side encryption and AWS KMS for object encryption.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon DynamoDB with SSL to connect to DynamoDB.  Use an AWS KMS key to encrypt DynamoDB objects at rest.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy instances with Amazon EBS volumes attached to store this data. Use EBS volume encryption using an AWS KMS key to encrypt the data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#308",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business has a single AWS master billing account, which serves as the foundation for the AWS Organizations structure.<br>Within this structure, the corporation has many AWS accounts, each organized by organization unit (OUs). Other OUs and AWS accounts will be established when additional business units transfer apps to AWS. These business divisions may need access to a variety of AWS services. For all existing and prospective AWS accounts, the Security team is introducing the following requirements:<br>✑ To prevent AWS servers from being used across all accounts, control policies must be enforced.<br>✑ Exceptions to the control policies are permitted for legitimate use cases.<br><br>Which solution will achieve these criteria with the least amount of optional overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#308",
            "answers": [
              {
                "choice": "<p>Use an SCP in Organizations to implement a deny list of AWS servers. Apply this SCP at the level. For any specific exceptions for an OU, create a new SCP for that OU and add the required AWS services to the allow list.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an SCP in Organizations to implement a deny list of AWS service. Apply this SCP at the root level and each OU. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions, modify the SCP attached to that OU, and add the required AWS services to the allow list.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an SCP in Organizations to implement a deny list of AWS service. Apply this SCP at each OU level. Leave the default AWS managed SCP at the root level. For any specific executions for an OU, create a new SCP for that OU.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use an SCP in Organizations to implement an allow list of AWS services. Apply this SCP at the root level. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions for an OU, modify the SCP attached to that OU, and add the required AWS services to the allow list.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#309",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>With the put-metric-data command in Amazon CloudWatch, you may publish your own metrics. When you use the put-metric-data command to establish a new metric, it may take up to two minutes before you can use the get-metric-statistics command to receive statistics on the new metric.<br><br>How long before the new measure shows in the list of metrics returned by the list-metrics command?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#309",
            "answers": [
              {
                "choice": "<p>After 2 minutes</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Up to 15 minutes</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>More than an hour</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Within a minute</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#310",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Federated connectivity to AWS is being implemented by a solutions architect for customers of the company's mobile application. Due to legal and security constraints, the application must authenticate users using a custom-built solution and authorize users using IAM roles.<br><br>Which of the following activities would allow and authorize users and meet the requirements? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#310",
            "answers": [
              {
                "choice": "<p>Use a custom-built SAML-compatible solution for authentication and AWS SSO for authorization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a custom-built LDAP connector using Amazon API Gateway and AWS Lambda for authentication. Store authorization tokens in Amazon DynamoDB, and validate authorization requests using another Lambda function that reads the credentials from DynamoDB. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a custom-built OpenID Connect-compatible solution with AWS SSO for authentication and authorization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a custom-built SAML-compatible solution that uses LDAP for authentication and uses a SAML assertion to perform authorization to the IAM identity provider.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use a custom-built OpenID Connect-compatible solution for authentication and use Amazon Cognito for authorization.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#311",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is transferring its on-premises data center to AWS to host a legacy application. The program is composed of a single application server and a database server running Microsoft SQL Server. Each server is virtualized on VMware and uses 500 TB of data across numerous connected volumes.<br>The organization has constructed a 10 Gbps AWS Direct Connect link between its on-premises data center and the nearest AWS Region. Other services are not presently using the Direct Connect connection.<br><br>Which sequence of actions should a solutions architect do in order to migrate an application with the LEAST amount of downtime possible? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#311",
            "answers": [
              {
                "choice": "<p>Use an AWS Server Migration Service (AWS SMS) replication job to migrate the database server VM to AWS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use VM Import/Export to import the application server VM.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Export the VM images to an AWS Snowball Edge Storage Optimized device.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an AWS Server Migration Service (AWS SMS) replication job to migrate the application server VM to AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use an AWS Database Migration Service (AWS DMS) replication instance to migrate the database to an Amazon RDS DB instance.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#312",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is operating an email application across numerous Amazon Web Services (AWS) regions. The company's core region is Ohio (us-east-2) and its disaster recovery (DR) region is Northern Virginia (us-east-1). The data is duplicated constantly from the main Region to the DR Region using a single instance on each Region's public subnet. During certain periods of the day, the replication messages between the Regions accumulate a substantial backlog. The backlog resolves on its own after a short period of time, however it has an impact on the application's RPO.<br><br>Which of the following strategies would be most effective in resolving this performance issue? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#312",
            "answers": [
              {
                "choice": "<p>Increase the size of the instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Have the instance in the primary Region write the data to an Amazon SQS queue in the primary Region instead, and have the instance in the DR Region poll from this queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use multiple instances on the primary and DR Regions to send and receive the replication data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Change the DR Region to Oregon (us-west-2) instead of the current DR Region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Attach an additional elastic network interface to each of the instances in both Regions and set up load balancing between the network interfaces.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#313",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An corporation wishes to apply cost limits across all of its AWS Organizations accounts that have all capabilities activated. The corporation has assigned organizational units (OUs) to its business units and wishes to charge each business unit for its AWS expenses. The company's AWS cost has recently increased, drawing the Finance team's attention. A Solutions Architect must examine the reason of the surge while creating a solution that will monitor AWS costs in Organizations and provide notifications to the appropriate teams when expenses from a particular business unit surpass a predefined monetary threshold.<br><br>Which solution will satisfy these criteria?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#313",
            "answers": [
              {
                "choice": "<p>Use Cost Explorer to troubleshoot the reason for the additional costs. Set up an AWS Lambda function to monitor the company's AWS bill by each AWS account in an OU. Store the threshold amount set by the Finance team in the AWS Systems Manager Parameter Store. Write the custom rules in the Lambda function to verify any hidden costs for the AWS accounts. Trigger a notification from the Lambda function to an Amazon SNS topic when a budget threshold is breached.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Trusted Advisor to troubleshoot the reason for the additional costs. Set up an AWS Lambda function to monitor the company's AWS bill by each AWS account in an OU. Store the threshold amount set by the Finance team in the AWS Systems Manager Parameter Store. Write custom rules in the Lambda function to verify any hidden costs for the AWS accounts. Trigger an email to the required teams from the Lambda function using Amazon SNS when a budget threshold is breached.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Cost Explorer to troubleshoot the reason for the additional costs. Create a budget using AWS Budgets with the monetary amount set by the Finance team for each OU by grouping the linked accounts. Configure an Amazon SNS notification to the required teams in the budget.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Trusted Advisor to troubleshoot the reason for the additional costs. Create a budget using AWS Budgets with the monetary amount set by the Finance team for each OU by grouping the linked accounts. Add the Amazon EC2 instance types to be used in the company as a budget filter. Configure an Amazon SNS topic with a subscription for the Finance team email address to receive budget notifications.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#314",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A new startup is operating a serverless application on AWS Lambda. Before distributing updates to all users, new versions of the program must be made accessible to a subset of users. Additionally, developers should be able to cancel the deployment and have simple access to a rollback mechanism. When a new version of a solution is ready, the solutions architect chooses to utilize AWS CodeDeploy to deploy the changes.<br><br>Which configuration of CodeDeploy should the solutions architect use?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#314",
            "answers": [
              {
                "choice": "<p>A blue/green deployment</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A linear deployment</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A canary deployment</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>An all-at-once deployment</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#315",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business has an application behind a load balancer that utilizes sufficient Amazon EC2 instances to meet peak demand. When demand grows or an instance fails, EC2 instances are configured using scripts and third-party deployment tools. The team must conduct frequent evaluations of the instance types' use to ensure that the appropriate sizes are deployed.<br><br>What can be done to optimize this workload in order to fulfill these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#315",
            "answers": [
              {
                "choice": "<p>Use CloudFormer to create AWS CloudFormation stacks from the current resources. Deploy that stack by using AWS CloudFormation in the same region. Use Amazon CloudWatch alarms to send notifications about underutilized resources to provide cost-savings suggestions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Auto Scaling group to scale the instances, and use AWS CodeDeploy to perform the configuration. Change from a load balancer to an Application Load Balancer. Purchase a third-party product that provides suggestions for cost savings on AWS resources.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy the application by using AWS Elastic Beanstalk with default options. Register for an AWS Support Developer plan. Review the instance usage for the application by using Amazon CloudWatch, and identify less expensive instances that can handle the load. Hold monthly meetings to review new instance types and determine whether Reserved Instances should be purchased.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy the application as a Docker image by using Amazon ECS. Set up Amazon EC2 Auto Scaling and Amazon ECS scaling. Register for AWS Business Support and use Trusted Advisor checks to provide suggestions on cost savings.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#316",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business wishes to replace its existing contact center system with one based on AWS managed services. The company's call center requires a system that can collect calls, establish contact flows, and expand to accommodate future expansion. Additionally, the contact center would want the solution to use deep learning capabilities to identify callers' intent and do simple activities, hence decreasing the requirement to talk with an agent. Additionally, the solution should be capable of querying business systems and returning pertinent information to callers as asked.<br><br>Which solutions architect services should be used to design this solution? (Select three.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BDE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#316",
            "answers": [
              {
                "choice": "<p>Amazon Rekognition to identify who is calling.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Connect to create a cloud-based contact center.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Alexa for Business to build conversational interfaces.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Lambda to integrate with internal systems.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Lex to recognize the intent of the caller.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon SQS to add incoming callers to a queue.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#317",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A cellular service provider need a solution for storing and analyzing log files containing user activity. At the moment, log files are transmitted daily to an Amazon Linux instance running on an Amazon EC2 cloud. Once a day, a batch script aggregates data for analysis by a third-party program. The third-party tool uses the data supplied to it to build a visualization for end users. The batch script is inconvenient to maintain, and delivering the ever-increasing data quantities to the third-party application takes several hours. The organization wants cost savings and is willing to accept a new tool that reduces development time and administrative expenditure. The organization wishes to develop a more agile system capable of storing and performing analysis in near-real time and with a minimum of overhead. The solution must be both cost efficient and scalable in order to accommodate the expansion of the company's end-user base.<br><br>Which option best fulfills the needs of the business?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#317",
            "answers": [
              {
                "choice": "<p>Develop a Python script to capture the data from Amazon EC2 in real time and store the data in Amazon S3. Use a copy command to copy data from Amazon S3 to Amazon Redshift. Connect a business intelligence tool running on Amazon EC2 to Amazon Redshift and create the visualizations.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an Amazon Kinesis agent running on an EC2 instance in an Auto Scaling group to collect and send the data to an Amazon Kinesis Data Firehose delivery stream. The Kinesis Data Firehose delivery stream will deliver the data directly to Amazon ES. Use Kibana to visualize the data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use an in-memory caching application running on an Amazon EBS-optimized EC2 instance to capture the log data in near real-time. Install an Amazon ES cluster on the same EC2 instance to store the log files as they are delivered to Amazon EC2 in near real-time. Install a Kibana plugin to create the visualizations.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use an Amazon Kinesis agent running on an EC2 instance to collect and send the data to an Amazon Kinesis Data Firehose delivery stream. The Kinesis Data Firehose delivery stream will deliver the data to Amazon S3. Use an AWS Lambda function to deliver the data from Amazon S3 to Amazon ES. Use Kibana to visualize the data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#318",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is moving to the cloud. It want to analyze the virtual machine settings in its current data center infrastructure in order to verify that it can appropriately size new Amazon EC2 instances. The business need metrics like as CPU, memory, and disk use, as well as an inventory of the processes executing on each instance. Additionally, the organization want to monitor network connections in order to map conversations between servers.<br><br>Which would permit the most cost-effective acquisition of this data?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#318",
            "answers": [
              {
                "choice": "<p>Use AWS Application Discovery Service and deploy the data collection agent to each virtual machine in the data center.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the Amazon CloudWatch agent on all servers within the local environment and publish metrics to Amazon CloudWatch Logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Application Discovery Service and enable agentless discovery in the existing virtualization environment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable AWS Application Discovery Service in the AWS Management Console and configure the corporate firewall to allow scans over a VPN.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#319",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are developing an SSL/TLS solution that needs HTTPS clients to be authorized through client certificate authentication by the Web server. A robust solution is required.<br><br>Which of the following alternatives for establishing the web server architecture would you consider? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#319",
            "answers": [
              {
                "choice": "<p>Configure ELB with TCP listeners on TCP/443. And place the Web servers behind it.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set and configure health checks against all Web servers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure ELB with HTTPS listeners, and place the Web servers behind it.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure your web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#320",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business has an Amazon Virtual Private Cloud (VPC) that is partitioned into a public and a private subnet. In Amazon VPC, a web application is hosted, and each subnet has its own NACL. 10.0.0.0/24 is the CIDR for the public subnet. On the public subnet, an Application Load Balancer is installed. 10.0.1.0/24 is the CIDR for the private subnet.<br><br>In the private subnet, Amazon EC2 instances running a web server on port 80 are started.<br>Between the public and private subnets, only network traffic necessary for the Application Load Balancer to access the web application may be permitted.<br><br>Which set of rules should be established to verify that the NACL for the private subnet satisfies the requirement? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#320",
            "answers": [
              {
                "choice": "<p>An inbound rule for port 80 from source 0.0.0.0/0.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An inbound rule for port 80 from source 10.0.0.0/24.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>An outbound rule for port 80 to destination 0.0.0.0/0.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An outbound rule for port 80 to destination 10.0.0.0/24.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>An outbound rule for ports 1024 through 65535 to destination 10.0.0.0/24.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#321",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial services business distributes its application compliance software as a service (SaaS) platform to big worldwide banks. The SaaS platform is hosted on AWS and makes use of many AWS accounts that are managed by AWS Organizations. The SaaS platform makes extensive use of AWS resources on a global scale.<br>All API requests to AWS resources must be verified, logged for changes, and saved in a durable and secure data storage to ensure regulatory compliance.<br><br>Which method satisfies these criteria with the LEAST amount of operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#321",
            "answers": [
              {
                "choice": "<p>Create a new AWS CloudTrail trail. Use an existing Amazon S3 bucket in the organization's management account to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new AWS CloudTrail trail in each member account of the organization. Create new Amazon S3 buckets to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 buckets.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket with versioning turned on to store the logs. Deploy the trail for all accounts in the organization. Enable MFA delete and encryption on the S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket to store the logs. Configure Amazon Simple Notification Service (Amazon SNS) to send log-file delivery notifications to an external management system that will track the logs. Enable MFA delete and encryption on the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#322",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business uses the cloud to operate an application that comprises of a database and a website. Users may submit data to the website, have it processed, and then get it by email. The database is a MySQL database that is hosted on an Amazon EC2 instance. The database is hosted in a virtual private cloud (VPC) with two private subnets. The website is powered by Apache Tomcat and is hosted on a single Amazon EC2 machine in a separate VPC with a single public subnet. Between the database and website VPCs, there is a single VPC peering connection.<br>Due to excessive usage, the website has had many outages during the previous month.<br><br>Which activities should a solutions architect do to ensure the application's reliability? (Select three.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#322",
            "answers": [
              {
                "choice": "<p>Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Provision an additional VPC peering connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Migrate the MySQL database to Amazon Aurora with one Aurora Replica.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Provision two NAT gateways in the database VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Move the Tomcat server to the database VPC. </p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an additional public subnet in a different Availability Zone in the website VPC. </p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#323",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A client is using AWS to build an SSL-enabled web application and desires to build a distinction between EC2 service administrators who have access to instances and API calls and EC2 service administrators who do not, and security officers who will maintainand possess exclusive access to the X.509 certificate for the application which contains the private key.<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#323",
            "answers": [
              {
                "choice": "<p>Upload the certificate on an S3 bucket owned by the security officers and accessible only by EC2 Role of the web servers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the web servers to retrieve the certificate upon boot from an CloudHSM is managed by the security officers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure system permissions on the web servers to restrict access to the certificate only to the authority security officers</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure IAM policies authorizing access to the certificate store only to the security officers and terminate SSL on an ELB. </p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#324",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is running its big data workloads on an Amazon EMR cluster. AWS Step Functions Express Workflows utilize multiple Amazon Simple Queue Service (Amazon SQS) queues to execute the cluster's tasks. This solution's workload is changeable and unexpected. Amazon CloudWatch measurements indicate that the cluster's peak usage is barely 25% at times and that it is otherwise idle.<br>A solutions architect must optimize the cluster's expenses while minimizing the time required to perform the numerous workloads.<br><br>Which approach is the MOST cost-effective in terms of meeting these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#324",
            "answers": [
              {
                "choice": "<p>Modify the EMR cluster by turning on automatic scaling of the core nodes and task nodes with a custom policy that is based on cluster utilization. Purchase Reserved Instance capacity to cover the master node.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the EMR cluster to use an instance fleet of Dedicated On-Demand Instances for the master node and core nodes, and to use Spot Instances for the task nodes. Define target capacity for each node type to cover the load.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Purchase Reserved Instances for the master node and core nodes. Terminate all existing task nodes in the EMR cluster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the EMR cluster to use capacity-optimized Spot Instances and a diversified task fleet. Define target capacity for each node type with a mix of On- Demand Instances and Spot Instances.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#325",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A firm is using AWS to host a line-of-business (LOB) application to service its users. The application is hosted in a single VPC, with a disaster recovery copy stored in a second VPC in a separate AWS Region. Between its on-premises network and AWS, the organization uses a single AWS Direct Connect connection. The connection is terminated at a gateway that supports Direct Connect.<br>All access to the application must originate on the company's on-premises network, with all traffic encrypted in transit using IPsec. To achieve the requisite encryption, the organization is routing traffic via a VPN tunnel over the Direct Connect connection.<br>A business continuity audit identifies the Direct Connect connection as a possible single point of failure for application access. The corporation must address this problem immediately.<br><br>Which strategy will satisfy these criteria?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#325",
            "answers": [
              {
                "choice": "<p>Order a second Direct Connect connection to a different Direct Connect location. Terminate the second Direct Connect connection at the same Direct Connect gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an AWS Site-to-Site VPN connection over the internet. Terminate the VPN connection at a virtual private gateway in the secondary Region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Configure an AWS Site-to- Site VPN connection, and terminate it at the transit gateway.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a transit gateway. Attach the VPCs to the transit gateway, and connect the transit gateway to the Direct Connect gateway. Order a second Direct Connect connection, and terminate it at the transit gateway.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#326",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your organization maintains a customer-facing event registration website. This website is constructed on a three-tier design that includes web and application servers as well as a MySQL database. For regular operation, the program needs six web tier servers and six application layer servers, however it may function with a minimum of 65 percent server capacity and a single MySQL database.<br><br>Which architecture ensures high availability when installing this application in a region with three availability zones (AZs)?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#326",
            "answers": [
              {
                "choice": "<p>A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and one RDS (Relational Database Service) Instance deployed with read replicas in the two other AZs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 2 AZs with 3 EC2 instances m each AZ inside an Auto Scaling Group behind an ELS and a Multi-AZ RDS (Relational Database Service) deployment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ Inside an Auto Scaling Group behind an ELB (elastic load balancer). And an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and a Multi-AZ RDS (Relational Database services) deployment.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#327",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In the AWS Cloud, a business is operating a big containerized workload. Around 100 distinct services comprise the task. The workload is orchestrated by the firm using Amazon Elastic Container Service (Amazon ECS).<br>Recently, the company's development team switched from Amazon EC2 instances to AWS Fargate in the ECS cluster. Previously, the workload came dangerously close to exhausting the account's maximum number of EC2 instances.<br><br>The organization is concerned that the workload would exceed the allowable number of ECS jobs. A solutions architect must build a solution that notifies the development team when Fargate exceeds 80% of its maximum task capacity.<br><br>What actions should the solutions architect do in order to satisfy this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#327",
            "answers": [
              {
                "choice": "<p>Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/ SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Lambda function to poll detailed metrics form the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon Simple Email Service (Amazon SES) to notify the development team.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon Simple Email Service (Amazon SES) to notify the development team when the AWS Config rule is not compliant.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#328",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A utility company want to gather consumption data from its smart meters every five minutes in order to support time-of-use metering. When a meter provides data to Amazon Web Services, it is routed via the Amazon API Gateway, processed by an AWS Lambda function, and saved in an Amazon DynamoDB database. During the pilot phase, Lambda functions completed in between 3 and 5 seconds.<br>Engineers find that when more smart meters are implemented, Lambda functions are taking between one and two minutes to finish. Additionally, the length of the functions is rising as new kinds of measurements are acquired from the devices. While doing PUT operations on DynamoDB, there are several ProvisionedThroughputExceededException problems, as well as numerous TooManyRequestsException errors from Lambda.<br><br>Which combination of modifications will effectively address these concerns? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#328",
            "answers": [
              {
                "choice": "<p>Increase the write capacity units to the DynamoDB table.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Increase the memory available to the Lambda functions.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Increase the payload size from the smart meters to send more data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#329",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business acquires and processes real-time market data. The data transmission rate is constant. Each night, a procedure is performed to compute aggregate statistics; each execution takes around four hours to finish. The statistical analysis is not mission important to the company, and if a specific run fails, prior data points are picked up on the following iteration.<br>The present design ingests and stores streaming data in associated Amazon EBS volumes using a pool of Amazon EC2 Reserved Instances with one-year reservations. Each night, On-Demand EC2 instances are deployed to execute nightly processing, which includes reading data stored on NFS shares on the ingestion servers and terminating the nightly processing servers when complete. Reservations for Reserved Instances are about to expire, and the organization must decide whether to acquire further reservations or deploy a new design.<br><br>Which design is the most cost-effective?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#329",
            "answers": [
              {
                "choice": "<p>Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use a fleet of On-Demand EC2 instances that launches each night to perform the batch processing of the S3 data and terminates when the processing completes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the ingestion process to use Amazon Kinesis Data Firehouse to save data to Amazon S3. Use AWS Batch to perform nightly processing with a Spot market bid of 50% of the On-Demand price.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Update the ingestion process to use a fleet of EC2 Reserved Instances behind a Network Load Balancer with 3-year leases. Use Batch with Spot instances with a maximum bid of 50% of the On-Demand price for the nightly processing.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon Redshift. Use an AWS Lambda function scheduled to run nightly with Amazon CloudWatch Events to query Amazon Redshift to generate the daily statistics.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#330",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business must store and handle picture data that will be submitted through a bespoke mobile app from mobile devices. On weekdays, use peaks between 8 a.m. and 5 p.m., with thousands of uploads each minute. At other times, the app is hardly utilized. When image processing is complete, the user is alerted.<br><br>Which combination of measures should a solutions architect take to guarantee that image processing can grow to accommodate the increased load? (Select three.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#330",
            "answers": [
              {
                "choice": "<p>Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Invoke an AWS Lambda function to perform image processing when a message is available in the queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#331",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You're transferring a client-server application from on-premises to AWS. The application is configured to respond to a certain DNS domain (for example, www.example.com) and has a two-tier architecture comprised of numerous application servers and a database server. Remote clients connect to application servers through TCP. To operate correctly, the application servers need knowledge of the clients' IP addresses, which they now get through the TCP socket. The database will be hosted on a Multi-AZ RDS MySQL instance.<br>You may modify the application code during the migration process, but you must submit a change request.<br><br>How would you construct the architecture on AWS such that scalability and high availability are maximized?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#331",
            "answers": [
              {
                "choice": "<p>File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different Azs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different Azs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different Azs.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#332",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business has many AWS accounts and manages them all using AWS Organizations. A solutions architect must develop a solution that enables a business to share a network across different accounts.<br>The infrastructure team at the organization has a dedicated infrastructure account with a VPC. This account must be used to administer the network by the infrastructure team.<br>Individual accounts are not permitted to administer their own networks. Individual accounts, on the other hand, must be allowed to establish AWS resources inside subnets.<br><br>Which steps should the solutions architect do in combination to satisfy these requirements? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#332",
            "answers": [
              {
                "choice": "<p>Create a transit gateway in the infrastructure account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable resource sharing from the AWS Organizations management account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#333",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is developing a centralized logging service that will operate on Amazon EC2 and receive and analyze logs from hundreds of AWS accounts. The client services and the logging service are connected through AWS PrivateLink.<br>Each AWS account with a client has an accessible interface endpoint for the logging service. The logging service is deployed in many subnets using Amazon EC2 instances with a Network Load Balancer (NLB). Clients are unable to send logs to the VPC endpoint through the VPC endpoint.<br><br>Which measures should a solutions architect do in combination to tackle this issue? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#333",
            "answers": [
              {
                "choice": "<p>Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the clients.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#334",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Doug has built a VPC in his AWS account using the CIDR 10.201.0.0/16. He has built a public subnet using the CIDR block 10.201.31.0/24 in this VPC.<br>While creating a new EC2 instance via the console, he is unable to provide the instance's private IP address 10.201.31.6.<br><br>Which of the following is the most probable cause of this problem?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#334",
            "answers": [
              {
                "choice": "<p>Private address IP 10.201.31.6 is currently assigned to another interface</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Private IP address 10.201.31.6 is reserved by Amazon for IP networking purposes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Private IP address 10.201.31.6 is blocked via ACLs in Amazon infrastructure as a part of platform security.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Private IP address 10.201.31.6 is not part of the associated subnet's IP address range.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#335",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After migrating a client's E-Commerce website from a dedicated server to AWS, you've also configured auto scaling to do health checks on the instances in your group and replace any that fail. Your customer has brought you his own health check system, which he wishes to employ since it was really beneficial previous to his site being hosted on AWS.<br><br>Given your knowledge of auto scaling and CloudWatch, what do you believe would be a reasonable response?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#335",
            "answers": [
              {
                "choice": "<p>It is not possible to implement your own health check system due to compatibility issues.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is not possible to implement your own health check system. You need to use AWSs health check system.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is possible to implement your own health check system and then send the instance's health information directly from your system to CloudWatch but only in the US East (N. Virginia) region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is possible to implement your own health check system and then send the instance's health information directly from your system to CloudWatch.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#336",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Which licensing type allows me to utilize my current Oracle Database licenses to operate Oracle installations on Amazon RDS?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#336",
            "answers": [
              {
                "choice": "<p>Bring Your Own License</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Role Bases License</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enterprise License</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>License Included</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#337",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A bucket owner has let IAM users from another account to upload or access items in his bucket. Account A's IAM user is attempting to access an item generated by Account B's IAM user.<br><br>What is the outcome of this scenario?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#337",
            "answers": [
              {
                "choice": "<p>It is not possible to give permission to multiple IAM users</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS S3 will verify proper rights given by the owner of Account A, the bucket owner as well as by the IAM user B to the object</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The bucket policy may not be created as S3 will give error due to conflict of Access Rights</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is not possible that the IAM user of one account accesses objects of the other IAM user</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#338",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business has a report-generating application that saves reports in an Amazon S3 bucket. When a user views a report, the program creates a signed URL that the user may use to download it. The company's security staff determined that the files are accessible to the public and may be downloaded without authentication. The firm has ceased producing fresh reports until the issue is fixed.<br><br>Which series of actions will promptly address the security vulnerability without interfering with the application's usual operation?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#338",
            "answers": [
              {
                "choice": "<p>Create an AWS Lambda function that applies all policy for users who are not authenticated. Create a scheduled event to invoke the Lambda function.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Review the AWS Trusted advisor bucket permissions check and implement the recommend actions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Run a script that puts a Private ACL on all of the object in the bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the Block Public Access feature in Amazon S3 to set the IgnorePublicAcis option to TRUE on the bucket.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#339",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>AWS's IT infrastructure conforms with the following information technology security standards, including:<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: E</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#339",
            "answers": [
              {
                "choice": "<p>SOC 1/SSAE 16/ISAE 3402 (formerly SAS 70 Type II), SOC 2 and SOC 3</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>FISMA, DIACAP, and FedRAMP</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>PCI DSS Level 1, ISO 27001, ITAR and FIPS 140-2</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>HIPAA, Cloud Security Alliance (CSA) and Motion Picture Association of America (MPAA)</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All of the above</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#340",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>By default, IAM users lack the ability to establish Temporary Security Credentials for federated users and roles. By contrast, IAM users do not need any additional rights to call ______ .<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#340",
            "answers": [
              {
                "choice": "<p>GetSessionName</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>GetFederationToken</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>GetSessionToken</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>GetFederationName</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#341",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Three AWS accounts are used by a software corporation for each of its ten development teams. The business has created a common VPC template for AWS CloudFormation that contains three NAT gates. The template is added to each team's account. The corporation is afraid that network expenses may grow as a result of the addition of a new development team. A solutions architect's primary responsibility is to ensure the dependability of the organization's solutions and to reduce operational complexity.<br><br>How could the solutions architect minimize network expenses while yet achieving these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#341",
            "answers": [
              {
                "choice": "<p>Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a transit gateway to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a single VPC with three NAT gateways in a shared services account. Configure each account VPC with a default route through a VPC peering connection to the NAT gateway in the shared services account VPC.  Remove all NAT gateways from the standard VPC template.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Remove two NAT gateways from the standard VPC template. Rely on the NAT gateway SLA to cover reliability for the remaining NAT gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a single VPC with three NAT gateways in a shared services account. Configure a Site-to-Site VPN connection from each account to the shared services account. Remove all NAT gateways from the standard VPC template.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#342",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business wishes to relocate its on-premises data center to the AWS Cloud. The data center consists of real servers and virtual machines (VMs) running VMware or Hyper-V. An administrator must choose the appropriate services for data collection during the first migration discovery procedure. AWS Migration Hub should support the data format. Additionally, the business need the capacity to produce reports from the data.<br><br>Which solution satisfies these criteria?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#342",
            "answers": [
              {
                "choice": "<p>Use the AWS Agentless Discovery Connector for data collection on physical servers and all VMs. Store the collected data in Amazon S3. Query the data with S3 Select. Generate reports by using Kibana hosted on Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS Application Discovery Service agent for data collection on physical servers and all VMs. Store the collected data in Amazon Elastic File System (Amazon EFS). Query the data and generate reports with Amazon Athena.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS Application Discovery Service agent for data collection on physical servers and Hyper-V. Use the AWS Agentless Discovery Connector for data collection on VMware. Store the collected data in Amazon S3. Query the data with Amazon Athena. Generate reports by using Amazon QuickSight.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS Systems Manager agent for data collection on physical servers. Use the AWS Agentless Discovery Connector for data collection on all VMs. Store, query, and generate reports from the collected data by using Amazon Redshift.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#343",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A studio is developing a follow-up to a successful online game. Within the first week of debut, the game will attract a significant number of players from across the globe.<br>At the moment, the game is comprised of the following components, all of which are deployed in a single AWS Region:<br><br>✑ A bucket on Amazon S3 for the storage of game assets<br>✑ A table in Amazon DynamoDB that contains player scores<br><br>A solutions architect must build a multi-Region solution that minimizes latency, increases dependability, and requires little implementation work.<br><br><br>What actions should the solutions architect take to ensure that these criteria are met?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#343",
            "answers": [
              {
                "choice": "<p>Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Cross-Region Replication. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon CloudFront distribution to serve assets from the S3 bucket. Configure S3 Same-Region Replication. Create a new DynamoDB table in a new Region. Configure asynchronous replication between the DynamoDB tables by using AWS Database Migration Service (AWS DMS) with change data capture (CDC).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create another S3 bucket in a new Region, and configure S3 Cross-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets in each Region. Configure DynamoDB global tables by enabling Amazon DynamoDB Streams, and add a replica table in a new Region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create another S3 bucket in the sine Region, and configure S3 Same-Region Replication between the buckets. Create an Amazon CloudFront distribution and configure origin failover with two origins accessing the S3 buckets. Create a new DynamoDB table in a new Region. Use the new table as a replica target for DynamoDB global tables.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#344",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A corporation processes data once a day using an Amazon EMR cluster. Amazon S3 is used to store the raw data, and Amazon S3 is also used to store the processed data. Processing must be completed within four hours; it presently takes three hours. However, processing time is rising by 5 to 10 minutes each week as a result of the growing amount of raw data.<br>Additionally, the team is worried about growing expenses as computing capacity expands. At the moment, the EMR cluster is operating on three m3.xlarge instances (one master and two core nodes).<br><br>Which of the following solutions will result in cost savings associated with growing computing requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#344",
            "answers": [
              {
                "choice": "<p>Add additional task nodes, but have the team purchase an all-upfront convertible Reserved Instance for each additional node to offset the costs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add additional task nodes, but use instance fleets with the master node in on-Demand mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase a scheduled Reserved Instance for the master node.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add additional task nodes, but use instance fleets with the master node in Spot mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase enough scheduled Reserved Instances to offset the cost of running any On-Demand instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add additional task nodes, but use instance fleets with the master node in On-Demand mode and a mix of On-Demand and Spot Instances for the core and task nodes. Purchase a standard all-upfront Reserved Instance for the master node.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#345",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>True or false: You cannot construct an Amazon RDS DB instance using CloudFormation from a snapshot.<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#345",
            "answers": [
              {
                "choice": "<p>False, you can specify it in attributes</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>False, you can specify it in condition</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>False, you can specify it in resource properties</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>True</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#346",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Solutions Architect is reimagining a picture viewing and messaging platform as a SaaS application. At the moment, a virtual desktop infrastructure (VDI) farm is running a desktop picture viewer and a desktop chat application. Both programs handle user accounts and sharing via the usage of a shared database. Users log in using a web portal, which runs apps and broadcasts the application's display to the user's workstation. The Development Operations team want to discontinue the use of VDI and redesign the application.<br><br>Which architecture is the MOST cost-effective in terms of security and management?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#346",
            "answers": [
              {
                "choice": "<p>Run a website from an Amazon S3 bucket with a separate S3 bucket for images and messaging data. Call AWS Lambda functions from embedded JavaScript to manage the dynamic content, and use Amazon Cognito for user and sharing management.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Run a website from Amazon EC2 Linux servers, storing the images in Amazon S3, and use Amazon Cognito for user accounts and sharing. Create AWS CloudFormation templates to launch the application by using EC2 user data to install and configure the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Run a website as an AWS Elastic Beanstalk application, storing the images in Amazon S3, and using an Amazon RDS database for user accounts and sharing. Create AWS CloudFormation templates to launch the application and perform blue/green deployments.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Run a website from an Amazon S3 bucket that authorizes Amazon AppStream to stream applications for a combined image viewer and messenger that stores images in Amazon S3. Have the website use an Amazon RDS database for user accounts and sharing.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#347",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In 90 days, a company's lease on a colocated storage facility will expire. The firm wishes to migrate to AWS in order to avoid having to sign a contract extension. The company's environment comprises of 200 virtual machines and a 40-terabyte network attached storage (NAS). While the majority of data is archived, rapid access to data is necessary when it is requested.<br>The leadership team want to guarantee that there is as little downtime as possible throughout the relocation. Each virtual computer is configured differently. The company's current 1 Gbps network connection is mostly inactive, particularly after hours.<br><br>Which combination of measures should the business take to move to AWS with the least amount of disruption and effect on operations? (Select two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#347",
            "answers": [
              {
                "choice": "<p>Use new Amazon EC2 instances and reinstall all application code.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS SMS to migrate the virtual machines.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Storage Gateway to migrate the data to cloud-native storage.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Snowball to migrate the data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS SMS to copy the infrequently accessed data from the NAS.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#348",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>On Amazon EC2, a business hosts numerous apps. Multiple business divisions are responsible for the deployment and management of each application. All apps are hosted on a single Amazon Web Services (AWS) account, but on distinct virtual private clouds (VPCs). The firm maintains a distinct virtual private cloud (VPC) inside the same account for testing and development reasons.<br>Multiple disruptions occurred when users mistakenly terminated and updated resources belonging to another business unit. A Solutions Architect has been tasked with the responsibility of increasing the availability of the company's apps while still enabling Developers access to the resources they need.<br><br>Which of the following options satisfies the criteria with the LEAST amount of disruption?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#348",
            "answers": [
              {
                "choice": "<p>Create an AWS account for each business unit. Move each business unit's instances to its own account and set up a federation to allow users to access their business unit's account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a federation to allow users to use their corporate credentials, and lock the users down to their own VPC.  Use a network ACL to block each VPC from accessing other VPCs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Implement a tagging policy based on business units. Create an IAM policy so that each user can terminate instances belonging to their own business units only.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up role-based access for each user and provide limited permissions based on individual roles and the services for which each user is responsible.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#349",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A business is implementing RDS for its applications. The business want to use VPC to safeguard RDS access.<br><br>Which of the following is not necessary when creating an RDS with VPC?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#349",
            "answers": [
              {
                "choice": "<p>The organization must create a subnet group with public and private subnets. Both the subnets can be in the same or separate AZ.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The organization should keep minimum of one IP address in each subnet reserved for RDS failover.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>If the organization is connecting RDS from the internet it must enable the VPC attributes DNS hostnames and DNS resolution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The organization must create a subnet group with VPC using more than one subnet which are a part of separate AZs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      },
      {
        "question_id": "#350",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>50 IAM users have been established by a business with the AWS account ID 999988887777. Each user is assigned to the same group ABC.<br><br>If a company has authorized each IAM user to access the AWS console, which AWS login URL will the IAM users use??<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#350",
            "answers": [
              {
                "choice": "<p>https://999988887777.aws.amazon.com/ABC/</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>https://signin.aws.amazon.com/ABC/</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>https://ABC. signin.aws.amazon.com/999988887777/console/</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>https://999988887777.signin.aws.amazon.com/console/</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": ""
      }
    ]
  }