var SOA_C02_Exam_001_050 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#1",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an infernal web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto<br>Scaling group in a single Availability Zone. A SysOps administrator must make the application highly available.<br>Which action should the SysOps administrator take to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1",
          "answers": [
            {
              "choice": "<p>A.  Increase the maximum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Increase the minimum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Update the Auto Scaling group to launch new instances in a second Availability Zone in the same AWS Region.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Update the Auto Scaling group to launch new instances in an Availability Zone in a second AWS Region.</p>",
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
      "question_text": "<p>A company hosts a website on multiple Amazon EC2 instances that run in an Auto Scaling group. Users are reporting slow responses during peak times between<br>6 PM and 11 PM every weekend. A SysOps administrator must implement a solution to improve performance during these peak times.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#2",
          "answers": [
            {
              "choice": "<p>A.  Create a scheduled Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to increase the desired capacity before peak times.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure a scheduled scaling action with a recurrence option to change the desired capacity before and after peak times.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a target tracking scaling policy to add more instances when memory utilization is above 70%.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Configure the cooldown period for the Auto Scaling group to modify desired capacity before and after peak times.</p>",
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
      "question_text": "<p>A company is running a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The company configured an Amazon CloudFront distribution and set the ALB as the origin. The company created an Amazon Route 53 CNAME record to send all traffic through the CloudFront distribution. As an unintended side effect, mobile users are now being served the desktop version of the website.<br>Which action should a SysOps administrator take to resolve this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#3",
          "answers": [
            {
              "choice": "<p>A.  Configure the CloudFront distribution behavior to forward the User-Agent header.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure the CloudFront distribution origin settings. Add a User-Agent header to the list of origin custom headers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Enable IPv6 on the ALB.  Update the CloudFront distribution origin settings to use the dualstack endpoint.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable IPv6 on the CloudFront distribution. Update the Route 53 record to use the dualstack endpoint.</p>",
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
      "question_text": "<p>A SysOps administrator has enabled AWS CloudTrail in an AWS account. If CloudTrail is disabled, it must be re-enabled immediately.<br>What should the SysOps administrator do to meet these requirements WITHOUT writing custom code?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#4",
          "answers": [
            {
              "choice": "<p>A.  Add the AWS account to AWS Organizations. Enable CloudTrail in the management account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Config rule that is invoked when CloudTrail configuration changes. Apply the AWS-ConfigureCloudTrailLogging automatic remediation action.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Config rule that is invoked when CloudTrail configuration changes. Configure the rule to invoke an AWS Lambda function to enable CloudTrail.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an Amazon EventBridge (Amazon CloudWatch Event) hourly rule with a schedule pattern to run an AWS Systems Manager Automation document to enable CloudTrail.</p>",
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
      "question_text": "<p>A company hosts its website on Amazon EC2 instances behind an Application Load Balancer. The company manages its DNS with Amazon Route 53, and wants to point its domain's zone apex to the website.<br>Which type of record should be used to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#5",
          "answers": [
            {
              "choice": "<p>A.  An AAAA record for the domain's zone apex</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  An A record for the domain's zone apex</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  A CNAME record for the domain's zone apex</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  An alias record for the domain's zone apex</p>",
              "correct": true,
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
      "question_text": "<p>A company must ensure that any objects uploaded to an S3 bucket are encrypted.<br>Which of the following actions will meet this requirement? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#6",
          "answers": [
            {
              "choice": "<p>A.  Implement AWS Shield to protect against unencrypted objects stored in S3 buckets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Implement Object access control list (ACL) to deny unencrypted objects from being uploaded to the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Implement Amazon S3 default encryption to make sure that any object being uploaded is encrypted before it is stored.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Implement Amazon Inspector to inspect objects uploaded to the S3 bucket to make sure that they are encrypted.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Implement S3 bucket policies to deny unencrypted objects from being uploaded to the buckets.</p>",
              "correct": true,
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
      "question_text": "<p>A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load<br>Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application.<br>Which combination of actions should a SysOps administrator take to resolve this problem? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#7",
          "answers": [
            {
              "choice": "<p>A.  Change to the least outstanding requests algorithm on the ALB target group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure cookie forwarding in the CloudFront distribution cache behavior.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Configure header forwarding in the CloudFront distribution cache behavior.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable group-level stickiness on the ALB listener rule.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Enable sticky sessions on the ALB target group.</p>",
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
      "question_text": "<p>A company is running a serverless application on AWS Lambda. The application stores data in an Amazon RDS for MySQL DB instance. Usage has steadily increased, and recently there have been numerous 'too many connections' errors when the Lambda function attempts to connect to the database. The company already has configured the database to use the maximum max_connections value that is possible.<br>What should a SysOps administrator do to resolve these errors?<br><br></p>",
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
              "choice": "<p>A.  Create a read replica of the database. Use Amazon Route 53 to create a weighted DNS record that contains both databases.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use Amazon RDS Proxy to create a proxy. Update the connection string in the Lambda function.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Increase the value in the max_connect_errors parameter in the parameter group that the database uses.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Update the Lambda function's reserved concurrency to a higher value.</p>",
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
      "question_text": "<p>A SysOps administrator is deploying an application on 10 Amazon EC2 instances. The application must be highly available. The instances must be placed on distinct underlying hardware.<br>What should the SysOps administrator do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#9",
          "answers": [
            {
              "choice": "<p>A.  Launch the instances into a cluster placement group in a single AWS Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Launch the instances into a partition placement group in multiple AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Launch the instances into a spread placement group in multiple AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Launch the instances into a spread placement group in a single AWS Region.</p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator is troubleshooting an AWS CloudFormation template whereby multiple Amazon EC2 instances are being created. The template is working in us-east-1, but it is failing in us-west-2 with the error code:<br>AMI [ami-12345678] does not exist<br>How should the Administrator ensure that the AWS CloudFormation template is working in every region?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#10",
          "answers": [
            {
              "choice": "<p>A.  Copy the source region's Amazon Machine Image (AMI) to the destination region and assign it the same ID. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Edit the AWS CloudFormation template to specify the region code as part of the fully qualified AMI ID. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Edit the AWS CloudFormation template to offer a drop-down list of all AMIs to the user by using the AWS::EC2::AMI::ImageID control.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Modify the AWS CloudFormation template by including the AMI IDs in the ג€Mappingsג€ section. Refer to the proper mapping within the template for the proper AMI ID. </p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator is provisioning an Amazon Elastic File System (Amazon EFS) file system to provide shared storage across multiple Amazon EC2 instances. The instances all exist in the same VPC across multiple Availability Zones. There are two instances in each Availability Zone. The SysOps administrator must make the file system accessible to each instance with the lowest possible latency.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#11",
          "answers": [
            {
              "choice": "<p>A.  Create a mount target for the EFS file system in the VPC.  Use the mount target to mount the file system on each of the instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create a mount target for the EFS file system in one Availability Zone of the VPC.  Use the mount target to mount the file system on the instances in that Availability Zone. Share the directory with the other instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a mount target for each instance. Use each mount target to mount the EFS file system on each respective instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a mount target in each Availability Zone of the VPC.  Use the mount target to mount the EFS file system on the instances in the respective Availability Zone.</p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator has successfully deployed a VPC with an AWS CloudFormation template. The SysOps administrator wants to deploy the same template across multiple accounts that are managed through AWS Organizations.<br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#12",
          "answers": [
            {
              "choice": "<p>A.  Assume the OrganizationAccountAccessRole IAM role from the management account. Deploy the template in each of the accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Lambda function to assume a role in each account. Deploy the template by using the AWS CloudFormation CreateStack API call.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Lambda function to query for a list of accounts. Deploy the template by using the AWS CloudFormation CreateStack API call.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use AWS CloudFormation StackSets from the management account to deploy the template in each of the accounts.</p>",
              "correct": true,
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
      "question_text": "<p>A company is running distributed computing software to manage a fleet of 20 Amazon EC2 instances for calculations. The fleet includes 2 control nodes and 18 task nodes to run the calculations. Control nodes can automatically start the task nodes.<br>Currently, all the nodes run on demand. The control nodes must be available 24 hours a day, 7 days a week. The task nodes run for 4 hours each day. A SysOps administrator needs to optimize the cost of this solution.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#13",
          "answers": [
            {
              "choice": "<p>A.  Purchase EC2 Instance Savings Plans for the control nodes.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use Dedicated Hosts for the control nodes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use Reserved Instances for the task nodes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use Spot Instances for the control nodes. Use On-Demand Instances if there is no Spot availability.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Use Spot Instances for the task nodes. Use On-Demand Instances if there is no Spot availability.</p>",
              "correct": true,
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
      "question_text": "<p>A company is supposed to receive a data file every hour in an Amazon S3 bucket. An S3 event notification invokes an AWS Lambda function each time a file arrives. The function processes the data for use by an application.<br>The application team notices that sometimes the file does not arrive. The application team wants to receive a notification whenever the file does not arrive.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
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
              "choice": "<p>A.  Add an S3 Lifecycle rule on the S3 bucket with a scope that is limited to objects that were created in the last hour. Configure another S3 event notification to be invoked by the lifecycle transition when the number of objects transitioned is zero. Publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure another S3 event notification to invoke a Lambda function that posts a message to an Amazon Simple Queue Service (Amazon SQS) queue. Create an Amazon CloudWatch alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team when the ApproximateAgeOfOldestMessage metric of the queue is greater than 1 hour.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an Amazon CloudWatch alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the application team when the Invocations metric of the Lambda function is zero for an hour. Configure the alarm to treat missing data as breaching.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a new Lambda function to get the timestamp of the newest file in the S3 bucket. If the timestamp is more than 1 hour ago, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to notify the application team. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the new function hourly.</p>",
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
      "question_text": "<p>A company recently acquired another corporation and all of that corporation's AWS accounts. A financial analyst needs the cost data from these accounts. A<br>SysOps administrator uses Cost Explorer to generate cost and usage reports. The SysOps administrator notices that 'No Tagkey' represents 20% of the monthly cost.<br>What should the SysOps administrator do to tag the 'No Tagkey' resources?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#15",
          "answers": [
            {
              "choice": "<p>A.  Add the accounts to AWS Organizations. Use a service control policy (SCP) to tag all the untagged resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use an AWS Config rule to find the untagged resources. Set the remediation action to terminate the resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use Cost Explorer to find and tag all the untagged resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use Tag Editor to find and tag all the untagged resources.</p>",
              "correct": true,
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
      "question_text": "<p>While setting up an AWS managed VPN connection, a SysOps administrator creates a customer gateway resource in AWS. The customer gateway device resides in a data center with a NAT gateway in front of it.<br>What address should be used to create the customer gateway resource?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#16",
          "answers": [
            {
              "choice": "<p>A.  The private IP address of the customer gateway device</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The MAC address of the NAT device in front of the customer gateway device</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  The public IP address of the customer gateway device</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  The public IP address of the NAT device in front of the customer gateway device</p>",
              "correct": true,
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
      "question_text": "<p>A company has a web application that is experiencing performance problems many times each night. A root cause analysis reveals sudden increases in CPU utilization that last 5 minutes on an Amazon EC2 Linux instance. A SysOps administrator must find the process ID (PID) of the service or process that is consuming more CPU.<br>What should the SysOps administrator do to collect the process utilization information with the LEAST amount of effort?<br><br></p>",
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
              "choice": "<p>A.  Configure the Amazon CloudWatch agent procstat plugin to capture CPU process metrics.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Configure an AWS Lambda function to run every minute to capture the PID and send a notification.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Log in to the EC2 instance by using a .pem key each night. Then run the top command.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use the default Amazon CloudWatch CPU utilization metric to capture the PID in CloudWatch.</p>",
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
      "question_text": "<p>A SysOps administrator configured AWS Backup to capture snapshots from a single Amazon EC2 instance that has one Amazon Elastic Block Store (Amazon<br>EBS) volume attached. On the first snapshot, the EBS volume has 10 GiB of data. On the second snapshot, the EBS volume still contains 10 GiB of data, but 4<br>GiB have changed. On the third snapshot, 2 GiB of data have been added to the volume, for a total of 12 GiB.<br>How much total storage is required to store these snapshots?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#18",
          "answers": [
            {
              "choice": "<p>A.  12 GiB</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  16 GiB</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  26 GiB</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  32 GiB</p>",
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
      "question_text": "<p>A team is managing an AWS account that is a member of an organization in AWS Organizations. The organization has consolidated billing features enabled. The account hosts several applications.<br>A SysOps administrator has applied tags to resources within the account to reflect the environment. The team needs a report of the breakdown of charges by environment.<br>What should the SysOps administrator do to meet this requirement?<br><br></p>",
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
              "choice": "<p>A.  Filter, map, and categorize resource groups in Tag Editor.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Ensure that the organization's service control policies (SCPs) allow access to cost allocation tags.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Ensure that the IAM credentials that are used to access Cost Explorer have permissions to group cost by tags.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Activate the tag keys for cost allocation on the organization's management account.</p>",
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
      "question_text": "<p>A company uses an AWS CloudFormation template to provision an Amazon EC2 instance and an Amazon RDS DB instance. A SysOps administrator must update the template to ensure that the DB instance is created before the EC2 instance is launched.<br>What should the SysOps administrator do to meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#20",
          "answers": [
            {
              "choice": "<p>A.  Add a wait condition to the template. Update the EC2 instance user data script to send a signal after the EC2 instance is started.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Add the DependsOn attribute to the EC2 instance resource, and provide the logical name of the RDS resource.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Change the order of the resources in the template so that the RDS resource is listed before the EC2 instance resource.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create multiple templates. Use AWS CloudFormation StackSets to wait for one stack to complete before the second stack is created.</p>",
              "correct": false,
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
      "question_text": "<p>A company hosts a static website on Amazon S3. The website is served by an Amazon CloudFront distribution with a default TTL of 86,400 seconds.<br>The company recently uploaded an updated version of the website to Amazon S3. However, users still see the old content when they refresh the site. A SysOps administrator must make the new version of the website visible to users as soon as possible.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#21",
          "answers": [
            {
              "choice": "<p>A.  Adjust the TTL value for the DNS CNAME record that is pointing to the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an invalidation on the CloudFront distribution for the old S3 objects.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a new CloudFront distribution. Update the DNS records to point to the new CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Update the DNS record for the website to point to the S3 bucket.</p>",
              "correct": false,
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
      "question_text": "<p>A SysOps administrator is responsible for managing a company's cloud infrastructure with AWS CloudFormation. The SysOps administrator needs to create a single resource that consists of multiple AWS services. The resource must support creation and deletion through the CloudFormation console.<br>Which CloudFormation resource type should the SysOps administrator create to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#22",
          "answers": [
            {
              "choice": "<p>A.  AWS::EC2::Instance with a cfn-init helper script</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  AWS::OpsWorks::Instance</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  AWS::SSM::Document</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Custom::MyCustomType</p>",
              "correct": true,
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
      "question_text": "<p>A new website will run on Amazon EC2 instances behind an Application Load Balancer. Amazon Route 53 will be used to manage DNS records.<br>What type of record should be set in Route 53 to point the website's apex domain name (for example, `company.com`) to the Application Load Balancer?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#23",
          "answers": [
            {
              "choice": "<p>A.  CNAME</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  SOA</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  TXT</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  ALIAS</p>",
              "correct": true,
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
      "question_text": "<p>A company is implementing security and compliance by using AWS Trusted Advisor. The company's SysOps team is validating the list of Trusted Advisor checks that it can access.<br>Which factor will affect the quantity of available Trusted Advisor checks?<br><br></p>",
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
              "choice": "<p>A.  Whether at least one Amazon EC2 instance is in the running state</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The AWS Support plan</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  An AWS Organizations service control policy (SCP)</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Whether the AWS account root user has multi-factor authentication (MFA) enabled</p>",
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
      "question_text": "<p>A SysOps administrator is investigating issues on an Amazon RDS for MariaDB DB instance. The SysOps administrator wants to display the database load categorized by detailed wait events.<br>How can the SysOps administrator accomplish this goal?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#25",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon CloudWatch dashboard.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Enable Amazon RDS Performance Insights.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Enable and configure Enhanced Monitoring.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Review the database logs in Amazon CloudWatch Logs.</p>",
              "correct": false,
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
      "question_text": "<p>A company is planning to host an application on a set of Amazon EC2 instances that are distributed across multiple Availability Zones. The application must be able to scale to millions of requests each second.<br>A SysOps administrator must design a solution to distribute the traffic to the EC2 instances. The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#26",
          "answers": [
            {
              "choice": "<p>A.  Amazon Simple Queue Service (Amazon SQS) queue</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Application Load Balancer</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  AWS Global Accelerator</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Network Load Balancer</p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator is using AWS CloudFormation StackSets to create AWS resources in two AWS Regions in the same AWS account. A stack operation fails in one Region and returns the stack instance status of OUTDATED.<br>What is the cause of this failure?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#27",
          "answers": [
            {
              "choice": "<p>A.  The CloudFormation template changed on the local disk and has not been submitted to CloudFormation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The CloudFormation template is trying to create a global resource that is not unique.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  The stack has not yet been deployed to the Region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  The SysOps administrator is using an old version of the CloudFormation API.</p>",
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
      "question_text": "<p>A SysOps administrator must configure Amazon S3 to host a simple nonproduction webpage. The SysOps administrator has created an empty S3 bucket from the<br>AWS Management Console. The S3 bucket has the default configuration in place.<br>Which combination of actions should the SysOps administrator take to complete this process? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#28",
          "answers": [
            {
              "choice": "<p>A.  Configure the S3 bucket by using the 'Redirect requests for an object' functionality to point to the bucket root URL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Turn off the 'Block all public access' setting. Allow public access by using a bucket ACL that contains <Permission>WEBSITE</Permission>.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Turn off the 'Block all public access' setting. Allow public access by using a bucket ACL that allows access to the AuthenticatedUsers grantee.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Turn off the 'Block all public access' setting. Set a bucket policy that allows 'Principal': the s3:GetObject action.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create an index.html document. Configure static website hosting, and upload the index document to the S3 bucket.</p>",
              "correct": true,
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
      "question_text": "<p>A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A SysOps administrator needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#29",
          "answers": [
            {
              "choice": "<p>A.  Create an Aurora Replica. Promote the replica to replace the primary DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use backtracking to rewind the existing DB cluster to the desired recovery point.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use point-in-time recovery to restore the existing DB cluster to the desired recovery point.</p>",
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
      "question_text": "<p>A user working in the Amazon EC2 console increased the size of an Amazon Elastic Block Store (Amazon EBS) volume attached to an Amazon EC2 Windows instance. The change is not reflected in the file system.<br>What should a SysOps administrator do to resolve this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#30",
          "answers": [
            {
              "choice": "<p>A.  Extend the file system with operating system-level tools to use the new storage capacity.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Reattach the EBS volume to the EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Reboot the EC2 instance that is attached to the EBS volume.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Take a snapshot of the EBS volume. Replace the original volume with a volume that is created from the snapshot.</p>",
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
      "question_text": "<p>A SysOps administrator is using Amazon EC2 instances to host an application. The SysOps administrator needs to grant permissions for the application to access an Amazon DynamoDB table.<br>Which solution will meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#31",
          "answers": [
            {
              "choice": "<p>A.  Create access keys to access the DynamoDB table. Assign the access keys to the EC2 instance profile.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an EC2 key pair to access the DynamoDB table. Assign the key pair to the EC2 instance profile.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an IAM user to access the DynamoDB table. Assign the IAM user to the EC2 instance profile.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an IAM role to access the DynamoDB table. Assign the IAM role to the EC2 instance profile.</p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator wants to protect objects in an Amazon S3 bucket from accidental overwrite and deletion. Noncurrent objects must be kept for 90 days and then must be permanently deleted. Objects must reside within the same AWS Region as the original S3 bucket.<br>Which solution meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#32",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon Data Lifecycle Manager (Amazon DLM) lifecycle policy for the S3 bucket. Add a rule to the lifecycle policy to delete noncurrent objects after 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Backup policy for the S3 bucket. Create a backup rule that includes a lifecycle to expire noncurrent objects after 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Enable S3 Cross-Region Replication on the S3 bucket. Create an S3 Lifecycle policy for the bucket to expire noncurrent objects after 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable S3 Versioning on the S3 bucket. Create an S3 Lifecycle policy for the bucket to expire noncurrent objects after 90 days.</p>",
              "correct": true,
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
      "question_text": "<p>A company has an application that customers use to search for records on a website. The application's data is stored in an Amazon Aurora DB cluster. The application's usage varies by season and by day of the week.<br>The website's popularity is increasing, and the website is experiencing slower performance because of increased load on the DB cluster during periods of peak activity. The application logs show that the performance issues occur when users are searching for information. The same search is rarely performed multiple times.<br>A SysOps administrator must improve the performance of the platform by using a solution that maximizes resource efficiency.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#33",
          "answers": [
            {
              "choice": "<p>A.  Deploy an Amazon ElastiCache for Redis cluster in front of the DB cluster. Modify the application to check the cache before the application issues new queries to the database. Add the results of any queries to the cache.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an Aurora Replica for the DB cluster. Modify the application to use the reader endpoint for search operations. Use Aurora Auto Scaling to scale the number of replicas based on load.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use Provisioned IOPS on the storage volumes that support the DB cluster to improve performance sufficiently to support the peak load on the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Increase the instance size in the DB cluster to a size that is sufficient to support the peak load on the application. Use Aurora Auto Scaling to scale the instance size based on load.</p>",
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
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts. Corporate policy mandates that only specific AWS Regions can be used to store and process customer data. A SysOps administrator must prevent the provisioning of Amazon EC2 instances in unauthorized Regions by anyone in the company.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#34",
          "answers": [
            {
              "choice": "<p>A.  Configure AWS CloudTrail in all Regions to record all API activity. Create an Amazon EventBridge (Amazon CloudWatch Events) rule in all unauthorized Regions for ec2:RunInstances events. Use AWS Lambda to terminate the launched EC2 instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  In each AWS account, create a managed IAM policy that uses a Region condition to deny the ec2:RunInstances action in all unauthorized Regions. Attach this policy to all IAM groups in each AWS account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  In each AWS account, create an IAM permissions boundary policy that uses a Region condition to deny the ec2:RunInstances action in all unauthorized Regions. Attach the permissions boundary policy to all IAM users in each AWS account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a service control policy (SCP) in AWS Organizations to deny the ec2:RunInstances action in all unauthorized Regions. Attach this policy to the root level of the organization.</p>",
              "correct": true,
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
      "question_text": "<p>A company's public website is hosted in an Amazon S3 bucket in the us-east-1 Region behind an Amazon CloudFront distribution. The company wants to ensure that the website is protected from DDoS attacks. A SysOps administrator needs to deploy a solution that gives the company the ability to maintain control over the rate limit at which DDoS protections are applied.<br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#35",
          "answers": [
            {
              "choice": "<p>A.  Deploy a global-scoped AWS WAF web ACL with an allow default action. Configure an AWS WAF rate-based rule to block matching traffic. Associate the web ACL with the CloudFront distribution.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy an AWS WAF web ACL with an allow default action in us-east-1. Configure an AWS WAF rate-based rule to block matching traffic. Associate the web ACL with the S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy a global-scoped AWS WAF web ACL with a block default action. Configure an AWS WAF rate-based rule to allow matching traffic. Associate the web ACL with the CloudFront distribution.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy an AWS WAF web ACL with a block default action in us-east-1. Configure an AWS WAF rate-based rule to allow matching traffic. Associate the web ACL with the S3 bucket.</p>",
              "correct": false,
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
      "question_text": "<p>A SysOps administrator developed a Python script that uses the AWS SDK to conduct several maintenance tasks. The script needs to run automatically every night.<br>What is the MOST operationally efficient solution that meets this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#36",
          "answers": [
            {
              "choice": "<p>A.  Convert the Python script to an AWS Lambda function. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the function every night.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Convert the Python script to an AWS Lambda function. Use AWS CloudTrail to invoke the function every night.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy the Python script to an Amazon EC2 instance. Use Amazon EventBride (Amazon CloudWatch Events) to schedule the instance to start and stop every night.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy the Python script to an Amazon EC2 instance. Use AWS Systems Manager to schedule the instance to start and stop every night.</p>",
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
      "question_text": "<p>A SysOps administrator must create a solution that immediately notifies software developers if an AWS Lambda function experiences an error.<br>Which solution will meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#37",
          "answers": [
            {
              "choice": "<p>A.  Create an Amazon Simple Notification Service (Amazon SNS) topic with an email subscription for each developer. Create an Amazon CloudWatch alarm by using the Errors metric and the Lambda function name as a dimension. Configure the alarm to send a notification to the SNS topic when the alarm state reaches ALARM.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon Simple Notification Service (Amazon SNS) topic with a mobile subscription for each developer. Create an Amazon EventBridge (Amazon CloudWatch Events) alarm by using the LambdaError as the event pattern and the SNS topic name as a resource. Configure the alarm to send a notification to the SNS topic when the alarm state reaches ALARM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Verify each developer email address in Amazon Simple Email Service (Amazon SES). Create an Amazon CloudWatch rule by using the LambdaError metric and developer email addresses as dimensions. Configure the rule to send an email through Amazon SES when the rule state reaches ALARM.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Verify each developer mobile phone in Amazon Simple Email Service (Amazon SES). Create an Amazon EventBridge (Amazon CloudWatch Events) rule by using Error as the event pattern and the Lambda function name as a resource. Configure the rule to send a push notification through Amazon SES when the rule state reaches ALARM.</p>",
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
      "question_text": "<p>A company has a private Amazon S3 bucket that contains sensitive information. A SysOps administrator needs to keep logs of the IP addresses from authentication failures that result from attempts to access objects in the bucket. The logs must be stored so that they cannot be overwritten or deleted for 90 days.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A.  Create an AWS CloudTrail trail. Configure the log files to be saved to Amazon CloudWatch Logs. Configure the log group with a retention period of 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS CloudTrail trail. Configure the log files to be saved to a different S3 bucket. Turn on CloudTrail log file integrity validation for 90 days.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Turn on access logging for the S3 bucket. Configure the access logs to be saved to Amazon CloudWatch Logs. Configure the log group with a retention period of 90 days.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Turn on access logging for the S3 bucket. Configure the access logs to be saved in a second S3 bucket. Turn on S3 Object Lock on the second S3 bucket, and configure a default retention period of 90 days.</p>",
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
      "question_text": "<p>A SysOps administrator migrates NAT instances to NAT gateways. After the migration, an application that is hosted on Amazon EC2 instances in a private subnet cannot access the internet.<br>Which of the following are possible reasons for this problem? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#39",
          "answers": [
            {
              "choice": "<p>A.  The application is using a protocol that the NAT gateway does not support.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The NAT gateway is not in a security group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  The NAT gateway is in an unsupported Availability Zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  The NAT gateway is not in the Available state.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E.  The port forwarding settings do not allow access to internal services from the internet.</p>",
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
      "question_text": "<p>A company runs an application on an Amazon EC2 instance. A SysOps administrator creates an Auto Scaling group and an Application Load Balancer (ALB) to handle an increase in demand. However, the EC2 instances are failing the health check.<br>What should the SysOps administrator do to troubleshoot this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#40",
          "answers": [
            {
              "choice": "<p>A.  Verify that the Auto Scaling group is configured to use all AWS Regions.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Verify that the application is running on the protocol and the port that the listener is expecting.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Verify the listener priority in the ALB.  Change the priority if necessary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Verify the maximum number of instances in the Auto Scaling group. Change the number if necessary.</p>",
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
      "question_text": "<p>A SysOps administrator has created an AWS Service Catalog portfolio and has shared the portfolio with a second AWS account in the company. The second account is controlled by a different administrator.<br>Which action will the administrator of the second account be able to perform?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#41",
          "answers": [
            {
              "choice": "<p>A.  Add a product from the imported portfolio to a local portfolio.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Add new products to the imported portfolio.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Change the launch role for the products contained in the imported portfolio.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Customize the products in the imported portfolio.</p>",
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
      "question_text": "<p>A company has migrated its application to AWS. The company will host the application on Amazon EC2 instances of multiple instance families.<br>During initial testing, a SysOps administrator identifies performance issues on selected EC2 instances. The company has a strict budget allocation policy, so the<br>SysOps administrator must use the right resource types with the performance characteristics to match the workload.<br>What should the SysOps administrator do to meet this requirement?<br><br></p>",
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
              "choice": "<p>A.  Purchase regional Reserved Instances (RIs) for immediate cost savings. Review and take action on the EC2 rightsizing recommendations in Cost Explorer. Exchange the RIs for the optimal instance family after rightsizing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Purchase zonal Reserved Instances (RIs) for the existing instances. Monitor the RI utilization in the AWS Billing and Cost Management console. Make adjustments to instance sizes to optimize utilization.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Review and take action on AWS Compute Optimizer recommendations. Purchase Compute Savings Plans to reduce the cost that is required to run the compute resources.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Review resource utilization metrics in the AWS Cost and Usage Report. Rightsize the EC2 instances. Create On-Demand Capacity Reservations for the rightsized resources.</p>",
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
      "question_text": "<p>A SysOps administrator is tasked with deploying a company's infrastructure as code. The SysOps administrator want to write a single template that can be reused for multiple environments.<br>How should the SysOps administrator use AWS CloudFormation to create a solution?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#43",
          "answers": [
            {
              "choice": "<p>A.  Use Amazon EC2 user data in a CloudFormation template.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Use nested stacks to provision resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Use parameters in a CloudFormation template.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use stack policies to provision resources.</p>",
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
      "question_text": "<p>A SysOps administrator is responsible for a large fleet of Amazon EC2 instances and must know whether any instances will be affected by upcoming hardware maintenance.<br>Which option would provide this information with the LEAST administrative overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#44",
          "answers": [
            {
              "choice": "<p>A.  Deploy a third-party monitoring solution to provide real-time EC2 instance monitoring.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  List any instances with failed system status checks using the AWS Management Console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Monitor AWS CloudTrail for StopInstances API calls.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Review the AWS Personal Health Dashboard.</p>",
              "correct": true,
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
      "question_text": "<p>A SysOps administrator is attempting to deploy resources by using an AWS CloudFormation template. An Amazon EC2 instance that is defined in the template fails to launch and produces an InsufficientInstanceCapacity error.<br>Which actions should the SysOps administrator take to resolve this error? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#45",
          "answers": [
            {
              "choice": "<p>A.  Create a separate AWS CloudFormation template for the EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Modify the AWS CloudFormation template to not specify an Availability Zone for the EC2 instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Modify the AWS CloudFormation template to use a different EC2 instance type.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Use a different Amazon Machine Image (AMI) for the EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Use the AWS CLI's validate-template command before creating a stack from the template.</p>",
              "correct": false,
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
      "question_text": "<p>A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route 53 to route traffic.<br>The company also has a static website that is configured in an Amazon S3 bucket.<br>A SysOps administrator must use the static website as a backup to the web application. The failover to the static website must be fully automated.<br>Which combination of actions will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#46",
          "answers": [
            {
              "choice": "<p>A.  Create a primary failover routing policy record. Configure the value to be the ALB. </p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an AWS Lambda function to switch from the primary website to the secondary website when the health check fails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create a primary failover routing policy record. Configure the value to be the ALB.  Associate the record with a Route 53 health check.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create a secondary failover routing policy record. Configure the value to be the static website. Associate the record with a Route 53 health check.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  Create a secondary failover routing policy record. Configure the value to be the static website.</p>",
              "correct": true,
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
      "question_text": "<p>A data analytics application is running on an Amazon EC2 instance. A SysOps administrator must add custom dimensions to the metrics collected by the Amazon<br>CloudWatch agent.<br>How can the SysOps administrator meet this requirement?<br><br></p>",
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
              "choice": "<p>A.  Create a custom shell script to extract the dimensions and collect the metrics using the Amazon CloudWatch agent.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an Amazon EventBridge (Amazon CloudWatch Events) rule to evaluate the required custom dimensions and send the metrics to Amazon Simple Notification Service (Amazon SNS).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Create an AWS Lambda function to collect the metrics from AWS CloudTrail and send the metrics to an Amazon CloudWatch Logs group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Create an append_dimensions field in the Amazon CloudWatch agent configuration file to collect the metrics.</p>",
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
      "question_text": "<p>A company stores its data in an Amazon S3 bucket. The company is required to classify the data and find any sensitive personal information in its S3 files.<br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A.  Create an AWS Config rule to discover sensitive personal information in the S3 files and mark them as noncompliant.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Create an S3 event-driven artificial intelligence/machine learning (AI/ML) pipeline to classify sensitive personal information by using Amazon Rekognition.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Enable Amazon GuardDuty. Configure S3 protection to monitor all data inside Amazon S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Enable Amazon Macie. Create a discovery job that uses the managed data identifier.</p>",
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
      "question_text": "<p>A company hosts a web portal on Amazon EC2 instances. The web portal uses an Elastic Load Balancer (ELB) and Amazon Route 53 for its public DNS service.<br>The ELB and the EC2 instances are deployed by way of a single AWS CloudFormation stack in the us-east-1 Region. The web portal must be highly available across multiple Regions.<br>Which configuration will meet these requirements?<br><br></p>",
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
              "choice": "<p>A.  Deploy a copy of the stack in the us-west-2 Region. Create a single start of authority (SOA) record in Route 53 that includes the IP address from each ELB.  Configure the SOA record with health checks. Use the ELB in us-east-1 as the primary record and the ELB in us-west-2 as the secondary record.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B.  Deploy a copy of the stack in the us-west-2 Region. Create an additional A record in Route 53 that includes the ELB in us-west-2 as an alias target. Configure the A records with a failover routing policy and health checks. Use the ELB in us-east-1 as the primary record and the ELB in us-west-2 as the secondary record.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C.  Deploy a new group of EC2 instances in the us-west-2 Region. Associate the new EC2 instances with the existing ELB, and configure load balancer health checks on all EC2 instances. Configure the ELB to update Route 53 when EC2 instances in us-west-2 fail health checks.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D.  Deploy a new group of EC2 instances in the us-west-2 Region. Configure EC2 health checks on all EC2 instances in each Region. Configure a peering connection between the VPCs. Use the VPC in us-east-1 as the primary record and the VPC in us-west-2 as the secondary record.</p>",
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
      "question_text": "<p>A SysOps administrator is investigating why a user has been unable to use RDP to connect over the internet from their home computer to a bastion server running on an Amazon EC2 Windows instance.<br>Which of the following are possible causes of this issue? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#50",
          "answers": [
            {
              "choice": "<p>A.  A network ACL associated with the bastion's subnet is blocking the network traffic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B.  The instance does not have a private IP address.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C.  The route table associated with the bastion's subnet does not have a route to the internet gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D.  The security group for the instance does not have an inbound rule on port 22.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E.  The security group for the instance does not have an outbound rule on port 3389.</p>",
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