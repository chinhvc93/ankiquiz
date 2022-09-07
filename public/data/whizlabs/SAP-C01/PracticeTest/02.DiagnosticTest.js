// 2. Diagnostic Test
var DiagnosticTest = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 28293,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company asked you to create a mobile application. The application is built to work with DynamoDB as the backend and Javascript as the frontend. During the application&#39;s usage, you notice that sometimes during the daytime, the write requests are throttled because of low provisioned write capacity. How can you effectively resolve this problem of the DynamoDB in the easiest way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is correct because users can enable Auto Scaling in DynamoDB. Please refer to the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Option B is incorrect because just increasing the write capacity of the DynamoDB table would not satisfy the requirement &quot;effectively manage DynamoDB&quot;. The problem only happens during the daytime. So there is a waste of provisioned resources when there are few requests in the night.</li>\r\n\t<li>Option C is incorrect. Because you have to create a new&nbsp;SQS queue and modify&nbsp;the related logic for DynamoDB. This option is not the easiest one.</li>\r\n\t<li>Option D is incorrect because launching a DynamoDB table in a Multi-AZ configuration with a global index would only increase data availability and would not solve the write contention issue.</li>\r\n</ul>\r\n\r\n<p>---------------------------------------------------------------------------------------</p>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>The question is asking &quot;....how to manage&nbsp;<strong>DynamoDB</strong>&quot;</p>\r\n\r\n<p>The new feature that has been added recently is &quot;autoscaling of dynamodb&quot; which would help to solve this issue</p>\r\n\r\n<p>Please refer to the link-&nbsp;<a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html</a></p>\r\n\r\n<p>Also attached herewith is the screenshot of the same.</p>\r\n\r\n<p><img src=\"https://www.whizlabs.com/forums/media/2019/12/17/1576587735-21654.png\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18410,
            "question_id": 28293,
            "answers": [
              {
                "choice": "<p>Enable DynamoDB Auto Scaling to meet the requirements.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Increase write capacity of DynamoDB to meet the peak loads.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the SQS service to read messages in the queue and write these to DynamoDB.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Launch DynamoDB in Multi-AZ configuration with a global index to balance writes.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44734,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An agile team just starts using AWS, and the team leader wants them to move the legacy Java-based software to the AWS platform in 2 weeks. The requirement is that the new environment must be highly available, and the infrastructure is managed as code and version controlled. Besides, the team has good experiences of Chef, so they want to use that knowledge during the migration. Which actions should the team perform to meet the needs? Select 2.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A, D</strong></p>\r\n\r\n<p>Explanation:</p>\r\n\r\n<p>Options A, D are Correct:</p>\r\n\r\n<p>Firstly, OpsWorks is a supported service in CloudFormation according to<a href=\"https://aws.amazon.com/about-aws/whats-new/2014/03/03/aws-cloudformation-supports-aws-opsworks\" target=\"_blank\"> https://aws.amazon.com/about-aws/whats-new/2014/03/03/aws-cloudformation-supports-aws-opsworks/</a>. The AWS OpsWorks Resource Types in CloudFormation includes:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html\" target=\"_blank\">AWS::OpsWorks::App</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html\" target=\"_blank\">AWS::OpsWorks::ElasticLoadBalancerAttachment</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html\" target=\"_blank\">AWS::OpsWorks::Instance</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html\" target=\"_blank\">AWS::OpsWorks::Layer</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html\" target=\"_blank\">AWS::OpsWorks::Stack</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html\" target=\"_blank\">AWS::OpsWorks::UserProfile</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html\" target=\"_blank\">AWS::OpsWorks::Volume</a></li>\r\n</ul>\r\n\r\n<p>Secondly, EC2 application instances should be managed inside OpsWorks, and they do not belong to infrastructure preparations. Option A is more accurate than Option C.</p>\r\n\r\n<ul>\r\n\t<li>Option A is&nbsp;CORRECT:&nbsp;Because infrastructure should be done via CloudFormation, and it can be easily version controlled. Either CodeCommit or GitHub is ok.</li>\r\n\t<li>Option B is incorrect:&nbsp;Because CloudFormation supports OpsWorks service. A nested template could be utilized to maintain OpsWorks related resources.</li>\r\n\t<li>Option C is&nbsp;incorrect:&nbsp;Because infrastructure refers to the resources which do not change frequently, such as VPC subnets and Bastion hosts. EC2 instances are application related and should be maintained within OpsWorks stacks.</li>\r\n\t<li>Option D is&nbsp;CORRECT:&nbsp;Because the team can use the Chef experiences in OpsWorks to build up the application. Together with Option A, a highly available environment can be built.</li>\r\n\t<li>Option E is incorrect:&nbsp;Because the OpsWorks service is supported in CloudFormation. It makes more sense to create an OpsWorks stack as a CloudFormation resource.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34745,
            "question_id": 44734,
            "answers": [
              {
                "choice": "<p>Use several CloudFormation templates to build up infrastructure such as VPC, NAT Gateway, Bastion, and Route53. Version control it using CodeCommit.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>As CloudFormation does not support the OpsWorks service, use Chef in EC2 to build up the web services. Existing cookbooks can be used. Add an auto-scaling group with a proper auto-scaling configuration to ensure high availability.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS infrastructure&nbsp;such as VPC, NAT Gateway, Bastion host, Security Groups, and EC2 instances are created using CloudFormation templates.&nbsp;Version control it using GitHub.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a nested CloudFormation template to create an OpsWorks stack. The resource type is &ldquo;AWS::OpsWorks::Stack&rdquo;. Add a Java layer in the stack. Make sure that the Scaling configuration is turned on.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use OpsWorks to build up the Java web services. Existing cookbooks can be used. However, OpsWorks cannot be put into the CloudFormation template as CloudFormation does not support it.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28303,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>As AWS grows, most of your clients&#39; main concerns seem to be about security, especially when all of their competitors also seem to be using AWS. One of your clients asks you whether having a competitor who hosts their EC2 instances on the same physical host would make it easier for the competitor to hack into the client&#39;s data. Which of the following statements would be the best choice to put your client&#39;s mind at rest?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - C</p>\r\n\r\n<ul>\r\n\t<li>Options A and B are incorrect because 256-bit AES is used for encrypting the data. Ensuring the isolation of the VMs running on a hypervisor is not its responsibility.&nbsp;</li>\r\n\t<li>Option C is CORRECT because it is the hypervisor that hosts the VMs responsible for ensuring that the VMs are isolated from each other despite being hosted on the same underlying hypervisor.</li>\r\n\t<li>Option D is incorrect because IAM permissions have nothing to do with the isolation of the VMs running on a hypervisor.</li>\r\n</ul>\r\n\r\n<p><strong>More information on this topic:</strong></p>\r\n\r\n<p>The shared responsibility model for infrastructure services, such as Amazon Elastic Compute Cloud (Amazon EC2), for example, specifies that AWS manages the security of the following assets:&nbsp;</p>\r\n\r\n<p>&bull; Facilities&nbsp;</p>\r\n\r\n<p>&bull; Physical security of hardware&nbsp;</p>\r\n\r\n<p>&bull; Network infrastructure&nbsp;</p>\r\n\r\n<p>&bull; Virtualization infrastructure</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://d0.awsstatic.com/whitepapers/aws-security-best-practices.pdf\" target=\"_blank\">https://d0.awsstatic.com/whitepapers/aws-security-best-practices.pdf</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18420,
            "question_id": 28303,
            "answers": [
              {
                "choice": "<p>Different instances running on the same physical machine are isolated from each other via a 256- bit Advanced Encryption Standard (AES-256).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Different instances running on the same physical machine are isolated from each other via the hypervisor and via a 256-bit Advanced Encryption Standard (AES-256).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Different instances running on the same physical machine are isolated from each other via the&nbsp;hypervisor.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Different instances running on the same physical machine are isolated from each other via IAM permissions.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28304,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are building a large-scale confidential documentation web server on AWS, and all of the documentation for it will be stored on S3. One of the requirements is that it cannot be publicly accessible from S3 directly. You will need to use CloudFront to accomplish this. Which of the methods listed below would satisfy the requirements as outlined? Choose an answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>There are two main points (1) the files should not be accessed directly via S3 as they are confidential, and (2) the files should be accessible via CloudFront.</p>\r\n\r\n<p>If you want to use CloudFront signed URLs or signed cookies to provide access to objects in your Amazon S3 bucket, you probably also want to prevent users from accessing your Amazon S3 objects using Amazon S3 URLs. If users access your objects directly in Amazon S3, they bypass the controls provided by CloudFront signed URLs or signed cookies, for example, control over the date and time that a user can no longer access your content and control over which IP addresses can be used to access the content. In addition, if users access objects both through CloudFront and directly by using Amazon S3 URLs, CloudFront access logs are less useful because they&#39;re incomplete. See the image below:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_soifjb.png\" style=\"height:436px; width:600px\" /></p>\r\n\r\n<p>Option A is incorrect because it does not give CloudFront exclusive access to the S3 bucket.</p>\r\n\r\n<p>Option B is CORRECT because it gives CloudFront exclusive access to the S3 bucket and prevents other users from accessing the public content of S3 directly via S3 URL.</p>\r\n\r\n<p>Option C is incorrect because you do not need to create any individual policies for each bucket.</p>\r\n\r\n<p>Option D is incorrect because (a) creating a bucket policy is unnecessary and (b) it does not prevent other users from accessing the public content of S3 directly via S3 URL.</p>\r\n\r\n<p>For more information on Origin Access Identity, please see the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18421,
            "question_id": 28304,
            "answers": [
              {
                "choice": "<p>Create an Identity and Access Management (IAM) user for CloudFront and grant access to the objects in your S3 bucket to that IAM User.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OAI only.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create individual policies for each bucket that stores documents and in that policy grant access to only CloudFront.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN).</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28305,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A customer runs a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security-group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups.&nbsp;But the company wants to limit further administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because a bastion host is deployed into the public subnet of a VPC with an Elastic IP address to allow inbound Secure Shell (SSH) access to EC2 instances, but the option does not say which subnet the Bastion host needs to be deployed into ( it just says corporate network )</li>\r\n\t<li><strong>Option B is incorrect</strong> because only the corporate IP addresses should have SSH access to it, not from anywhere.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the bastion host needs to be placed in the public subnet, not private.</li>\r\n\t<li><strong>Option D is CORRECT </strong>because (a) it places the bastion host in the public subnet, and (b) only the corporate IP addresses have RDP access to it.</li>\r\n</ul>\r\n\r\n<p>For more information on controlling network access to EC2 instances using a bastion server, please see the link below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/controlling-network-access-to-ec2-instances-using-a-bastion-server/\" target=\"_blank\">https://aws.amazon.com/blogs/security/controlling-network-access-to-ec2-instances-using-a-bastion-server/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 80129,
            "question_id": 28305,
            "answers": [
              {
                "question_id": "28305",
                "choice": "<p>Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VPC.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28305",
                "choice": "<p>Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28305",
                "choice": "<p>Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28305",
                "choice": "<p>Deploy a Windows Bastion host with an elastic IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28306,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have been tasked with creating file-level restore on your EC2 instances. You already have access to all the frequent snapshots of the EBS volume. You need to be able to restore an individual lost file on an EC2 instance within 15 minutes of a reported loss of information. The acceptable RPO is several hours. How would you perform this on an EC2 instance? Choose an answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>Option A is incorrect because there is an assumption that the EC2 instance can read files from S3.</p>\r\n\r\n<p>Option B is incorrect because the old volume connected to the EC2 could have different files compared to the snapshot that we are recovering from (i.e., some files may have been removed, some may have been newly added). If that volume is removed, we may lose some files and the final volume will not be in the latest state. So, the best solution is to copy the file from the recovery volume and add it to the old connected/backup volume.</p>\r\n\r\n<p>Option C is CORRECT because it mounts the EBS snapshot containing the file - as a volume and copies the file to the already attached volume. This way, the already attached volume always stays up-to-date. Once the file is copied, the volume - that was attached for copying the file - can be removed. With this option, you can restore the individual lost files without removing any new files that the snapshot does not have.</p>\r\n\r\n<p>Option D is INCORRECT because the recent snapshot may not contain the lost file. And we only need to restore the lost file so that there is no need to copy all the system files.</p>\r\n\r\n<p>For more information on EBS snapshots, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18423,
            "question_id": 28306,
            "answers": [
              {
                "choice": "<p>Set up a cron that runs aws s3 cp on the files and copy the EBS volume files to S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Turn off the frequent snapshots of EBS volumes.&nbsp;Create a volume from an EBS snapshot, attach the EBS volume to the EC2 instance at a different mount location, cutover the application to look at the new backup volume and remove the old volume.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a volume from the snapshot to be restored and attach the EBS volume to the same EC2 instance at a different mount location, browse the file system on the newly attached volume and select the file that needs to be restored, copy it from the new volume to the original source volume.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new EC2 instance from the recent snapshot and copy all the system files from the new EC2 instance to the old EC2 instance.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28307,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company is&nbsp;developing a next-generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met.</p>\n\n<ul>\n\t<li>\n\t<p>Provide the ability for real-time analytics of the inbound biometric data.</p>\n\t</li>\n\t<li>\n\t<p>Ensure that the processing of the biometric data is highly durable, elastic and parallel.</p>\n\t</li>\n\t<li>\n\t<p>The results of the analytic processing should be persisted for data mining.</p>\n\t</li>\n</ul>\n\n<p>Which architecture outlined below will&nbsp;meet the initial requirements for the collection platform?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - B</strong></p>\n\n<p>The main point to consider here is that the information is to be analyzed in real-time. The solution should be highly durable, elastic, and processed in parallel. The result should be persisted for data mining after the analysis. Whenever the question requires real-time processing of data, always think about using Amazon Kinesis.</p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong> because (a) S3 is not efficient for collecting and storing real-time data, and (b) daily scheduled data pipeline is not a real-time analytics solution.</li>\n\t<li><strong>Option B is CORRECT</strong> because (a) Amazon Kinesis and Kinesis Analytics is ideal for capturing and processing real-time data respectively captured by the sensor, (b) it also stores the result of analysis later, and (c) Redshift cluster can be used for processing (data mining) the information captured by the Kinesis and copied via EMR.</li>\n\t<li><strong>Option C is incorrect</strong> because (a) S3 is not efficient for collecting and storing real-time data, and (b) MSSQL Server RDS is not ideal for storing the information for data mining.</li>\n\t<li><strong>Option D is incorrect </strong>because (a) EMR alone is not ideal for capturing data and would need specific frameworks like Kafka to capture data for processing. Also, real-time analytics needs to be done using Spark Streaming and not EMR alone, and (b) DynamoDB is not used for data mining.</li>\n</ul>\n\n<p>For more information on Amazon Kinesis with Redshift, go to this link-</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html\" target=\"_blank\">https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 58582,
            "question_id": 28307,
            "answers": [
              {
                "question_id": "28307",
                "choice": "<p>Utilize S3 to collect the inbound sensor data, analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28307",
                "choice": "<p>Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis Analytics&nbsp;and save the results to a Redshift cluster using EMR.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28307",
                "choice": "<p>Utilize S3 to collect the inbound sensor data analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28307",
                "choice": "<p>Utilize EMR to collect the inbound sensor data, analyze the data from EMR&nbsp;with Amazon Kinesis and save the results to DynamoDB.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44735,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A developer is trying to get a new DevOps role and preparing for a technical task for the interview. The requirement is that a simple pipeline should be built up within 1 week for a RESTful web service that contains several endpoints. For the pipeline, he decides to use AWS CodePipeline. For the application, he wants to use T2 Micro EC2 instances as they belong to free tier. In order to show a breadth of skills, he would like to use certain orchestration tool such as OpsWorks or CloudFormation to deploy the App. He has used Chef for some open source projects before. What below option is the best for him to do in a short time?</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Option B is Correct:</p>\r\n\r\n<p>&nbsp;As the developer has some Chef experiences, it is the best to use OpsWorks if available. This can save some time for his preparations for the assignment. Moreover, CodePipeline does support OpsWorks as a deployment target.</p>\r\n\r\n<p>Refer to <a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html\" target=\"_blank\">https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html</a> for details. One thing to notice is that the OpsWorks stack/layer/instance should already exist when CodePipeline is being configured:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q2.jpg\" style=\"height:441px; width:700px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because OpsWorks should be put into the Deploy stage instead of the Build stage.</li>\r\n\t<li>Option B is CORRECT: Because it is the right way to use AWS CodePipeline with AWS OpsWorks Stacks. Refer to the below for the detailed steps:</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11-stack.html\" target=\"_blank\">Step 1: Create a stack, layer, and an instance in AWS OpsWorks Stacks</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11-s3.html\" target=\"_blank\">Step 2: Upload app code to an Amazon S3 bucket</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11-addapp.html\" target=\"_blank\">Step 3: Add your app to AWS OpsWorks Stacks</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11-pipeline.html\" target=\"_blank\">Step 4: Create a pipeline in AWS CodePipeline</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11-verify.html\" target=\"_blank\">Step 5: Verifying the app deployment in AWS OpsWorks Stacks</a></li>\r\n\t<li>Option C is incorrect: Because CodePipeline supports OpsWorks. The reference link is <a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html\" target=\"_blank\">https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html</a>. Please notice that CodePipeline supports CloudFormation as well. However, as the developer has Chef experiences, OpsWorks is suggested as the first priority.</li>\r\n\t<li>Option D is incorrect: Because at the Deploy stage, OpsWorks stack/layer/instance should already exist to be chosen.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34746,
            "question_id": 44735,
            "answers": [
              {
                "choice": "<p>Use OpsWorks to hook up CodePipeline in the build stage. The artifacts can be put in an S3 bucket, and OpsWorks will use the newest code in S3 to deploy the applications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Firstly, configure an OpsWorks stack, layer and instance. Secondly, in CodePipeline, choose an S3 bucket as the source which can be a zip file for the app and set up the existing OpsWorks stack as the deployment provider. Then the app can be deployed to your stack automatically.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>As CodePipeline does not support OpsWorks, CloudFormation template must build up EC2 instance with ELB and Autoscaling. Configure CodePipeline to select CloudFormation as a deployment target in the deploy stage of the pipeline.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For CodePipeline, configure an S3 bucket as the source provider and configure the OpsWorks as the deployment provider. Then OpsWorks can create stack/layers and deploy APPs using artifacts in S3.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 52239,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A manufacturing company whose head office is in Sydney, have plants in 16 locations across the world. Employees based in these 16 locations have to send their daily development data to AWS for storage and further analysis. Data size is expected to be in GBs. What is the best way to send the data to AWS?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Incorrect</strong> because direct connect is ideal for clients who want&nbsp;to establish private connectivity between their on-prem network and AWS for some location. This is not the right solution for moving files from multiple locations.</li>\r\n\t<li><strong>Option B is Incorrect</strong> because snowball is ideal for clients moving a large bunch of data at once.</li>\r\n\t<li><strong>Option C is Correct</strong> because S3 Transfer acceleration gives the ability to write into the single S3 Bucket from various locations. It uses edge locations to move the data.</li>\r\n\t<li><strong>Option D is Incorrect</strong> because Transfer acceleration doesn&rsquo;t work with the Amazon Glacier storage class.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=J2CVnmUWSi4\" target=\"_blank\">https://www.youtube.com/watch?v=J2CVnmUWSi4</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-300-percent-faster/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-</a><a href=\"http://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to- 300-percent-faster/\" target=\"_blank\"> 300-percent-faster/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/s3/transfer-acceleration/\" target=\"_blank\">https://aws.amazon.com/s3/transfer-acceleration/</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=HnUqH3hdz4I\" target=\"_blank\">https://www.youtube.com/watch?v=HnUqH3hdz4I</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 58581,
            "question_id": 52239,
            "answers": [
              {
                "question_id": "52239",
                "choice": "<p>They can send through AWS Direct Connect and store the data in Amazon S3.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52239",
                "choice": "<p>They can store the data in Amazon S3 and send it through Snowball.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52239",
                "choice": "<p>They can send through S3 Transfer acceleration and store the data in Amazon S3.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "52239",
                "choice": "<p>They can store in Amazon Glacier and send through S3 Transfer acceleration.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 52240,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A&nbsp;company runs its critical portal on its On-prem datacenter on&nbsp;docker containers with a PostgreSQL database of size 40 TB.&nbsp;They are looking to migrate their existing portal to AWS to enhance user&#39;s experience&nbsp;with less burden on Infrastructure management.&nbsp;Which of the following methods should they use? (Select TWO).</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: B and D are correct.</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Incorrect</strong> because deploying container on ECS using EC2 will require management task.</li>\r\n\t<li><strong>Option B is Correct</strong> because Fargate removes the management task of container on ECS. Also, moving 40TB of data one-time using snowball will be the right strategy here as this is the one-time movement of large data.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because deploying a container on EC2 will require lots of management task and also moving 40TB using 1GBPS will not right strategy here as this is a one-time data movement.</li>\r\n\t<li><strong>Option D is Correct</strong> because RDS Aurora PostgreSQL provides better performance.</li>\r\n\t<li><strong>Option E is Incorrect</strong> because running PostgreSQL in EC2 will require lots of management task like installation, Patching etc</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/aurora/postgresql-features/\" target=\"_blank\">https://aws.amazon.com/rds/aurora/postgresql-features/</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=4xqOoRPrnAw\" target=\"_blank\">https://www.youtube.com/watch?v=4xqOoRPrnAw</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-fargate/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-</a><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws- fargate/\" target=\"_blank\"> fargate/</a></li>\r\n\t<li><a href=\"https://d1.awsstatic.com/events/reinvent/2019/Managing_large-scale_offline_data_migrations_Best_practices_STG337.pdf\" target=\"_blank\">https://d1.awsstatic.com/events/reinvent/2019/Managing_large-</a><a href=\"https://d1.awsstatic.com/events/reinvent/2019/Managing_large-cale_offline_data_migrations_Best_practices_STG337.pdf\" target=\"_blank\">cale_offline_data_migrations_Best_practices_STG337.pdf</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42078,
            "question_id": 52240,
            "answers": [
              {
                "choice": "<p>They should choose EC2 to deploy the containers on ECS and move the 40TB data using snowball on AWS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>They should choose Fargate to deploy the containers on ECS and move the 40TB data using&nbsp;snowball on AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>They should choose EC2 to deploy the containers on ECS and move the 40 TB data using 1Gbps Direct Connection Connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>They should use the RDS Aurora PostgreSQL Database in AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>They should run the PostgreSQL on top of EC2 Nitro Based system for better Database Performance.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28311,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have just developed a new mobile application that handles analytics workloads on large-scale datasets stored on Amazon Redshift. Consequently, the application needs to access Amazon Redshift tables. Your company is asking to expand&nbsp;the scope of the application. Which of the following methods would be the best, both practically and security-wise, to access the tables? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>Tip: When a service, user, or application needs to access an AWS resource, always prefer creating an IAM Role over creating an IAM User.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because embedding keys in the application to access AWS resources is not a good architectural practice as it creates security concerns.</p>\r\n\r\n<p>Option B is incorrect because the Redshift cluster uses the HSM certificate to connect to the client&#39;s HSM to store and retrieve the keys used to encrypt the cluster databases.</p>\r\n\r\n<p>Option C is incorrect because the read-only policy is insufficient and embedding keys in the application to access AWS resource is not a good architectural practice as it creates security concerns.</p>\r\n\r\n<p>Option D is CORRECT because (a) IAM role allows the least privileged access to the AWS resource, (b) web identity federation ensures the identity of the user, and (c) the user is given temporary credentials to access the AWS resource.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on IAM policies, please refer to the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</a></p>\r\n\r\n<p>For more information on web identity federation, please refer to the below link-</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18428,
            "question_id": 28311,
            "answers": [
              {
                "choice": "<p>Create an IAM user and generate encryption keys for that user. Create a policy for Redshift read-only access. Embed the keys in the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an HSM client certificate in Redshift and authenticate using this certificate.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a Redshift read-only access policy in IAM and embed those credentials in the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use roles that allow a web identity federated user to assume a role that allows access to the Redshift table by providing temporary credentials.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28294,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has HQ in Tokyo and branch offices worldwide and uses logistics software with a multi-regional deployment on AWS in Japan, Europe and USA. The logistic software has a 3-tier architecture and currently uses MySQL 5.6 for data persistence. Each region has deployed its own database. In the HQ region, you run an hourly batch process reading data from every region to compute cross-regional reports sent by email to all offices. This batch process must be completed as fast as possible to optimize logistics quickly. How do you build the database architecture to meet the requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - D</p>\r\n\r\n<p>The problem in the scenario is that an hourly batch process is currently run at the HQ region that reads the data from every region to compute cross-regional reports. This is a slow process and needs to be quickened. The most ideal scenario would be to have the replicated database in the HQ region updated asynchronously.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because copying the data hourly to HQ region would be slow compared to the best option, which is D.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option B is incorrect because (a) taking hourly EBS snapshots would affect the database&#39;s performance in its master region, and (b) &nbsp;copying the snapshots hourly across the region would be a slow process.</p>\r\n\r\n<p>Option C is incorrect because (a) taking hourly RDS snapshots would affect the database&#39;s performance in its master region, and (b) &nbsp;sending the snapshots hourly across the region would be a slow and very costly process.</p>\r\n\r\n<p>Option D is CORRECT because (a) it creates a read replica in the HQ region updated asynchronously. This way, generating the reports would be very quick, and (b) it does not affect the databases&#39; performance in their respective master region.</p>\r\n\r\n<p>Option E is incorrect because AWS Direct Connect&nbsp;is useless when there is no on-premise datacenter involved.</p>\r\n\r\n<p>For more information on cross-region read replicas, please visit the link below.</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18411,
            "question_id": 28294,
            "answers": [
              {
                "choice": "<p>For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28312,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A legacy application with a license is attached to a single MAC address. An EC2 instance can receive a new MAC address while launching new instances. How can you ensure that your EC2 instances can maintain a single MAC address for licensing? Choose the correct option.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>Tip: Whenever a question has a scenario where you need to use a fixed MAC address for EC2 instances, always think about using Elastic Network Interface (ENI).</p>\r\n\r\n<p>If a static MAC address is assigned to an ENI, it remains unchanged. As long as the EC2 has that ENI, its MAC address will not change.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because, as mentioned above, as ENI with static MAC address can be assigned to the EC2 instance. If the instance becomes unavailable or needs to be replaced, the ENI can be detached and re-attached to another EC2 while maintaining the same MAC address.</li>\r\n\t<li>Option B is incorrect because subnets have CIDR, not static MAC addresses.</li>\r\n\t<li>Option C is incorrect because if the EC2 instance fails or becomes unavailable, its MAC address cannot be reused with another EC2 instance.</li>\r\n\t<li>Option D is incorrect because you can avail of ENI in order to have a static MAC address for the EC2 instances.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on ENI on AWS Documentation:</strong></p>\r\n\r\n<p><strong>Create a Low Budget High Availability Solution</strong></p>\r\n\r\n<p>If one of your instances serving a particular function fails, its network interface can be attached to a replacement or hot standby instance pre-configured for the same role in order to recover the service rapidly. For example, you can use a network interface as your primary or secondary network interface to a critical service such as a database instance or a NAT instance. If the instance fails, you (or more likely, the code running on your behalf) can attach the network interface to a hot standby instance. Because the interface maintains its private IP addresses, Elastic IP addresses, and MAC address, network traffic begins flowing to the standby instance as soon as you attach the network interface to the replacement instance. Users experience a brief loss of connectivity between the time the instance fails and when the network interface is attached to the standby instance, but no changes to the VPC route table or your DNS server are required.</p>\r\n\r\n<p>Best Practices for Configuring Network Interfaces</p>\r\n\r\n<p>For more information on elastic network interfaces, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18429,
            "question_id": 28312,
            "answers": [
              {
                "choice": "<p>Create an ENI and assign it to the EC2 instance. The ENI will have a static MAC address and can be detached and reattached to a new instance if the current instance becomes unavailable.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Private subnets have static MAC addresses. Launch the EC2 instance in a private subnet and, if required, use a NAT to serve data over the internet.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a manual MAC address for each EC2 instance and report that to the licensing company.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS cannot have a fixed MAC address; the best solution is to create a dedicated VPN/VGW gateway to serve data from the legacy application.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28313,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Your company has just set up a new document server on its AWS VPC, and it has four very important clients that it wants to give access to. These clients also have VPCs on AWS, and it is through these VPCs, they will be given access to the document server. In addition, each of the clients should not have access to any of the other clients&#39; VPCs. Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A</strong></p>\r\n\r\n<p>AWS Transit Gateway helps you build applications spanning thousands of Amazon VPCs. This means deploying new applications without updating massive route tables to create peering relationships.&nbsp;</p>\r\n\r\n<p>You can quickly add Amazon VPCs, AWS accounts, VPN capacity, or AWS Direct Connect gateways to meet unexpected demand, without complex connections or massive routing tables.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect </strong>because you do not need to block any IP addresses in this scenario.</li>\r\n\t<li><strong>Option C is incorrect </strong>because peering among the client VPCs is unnecessary.&nbsp;</li>\r\n\t<li><strong>Option D is incorrect</strong> because,&nbsp;for VPC Peering, the VPCs should not have overlapping CIDRs. So, VPCs having the same CIDR cannot peer.</li>\r\n</ul>\r\n\r\n<p>For more information on VPC Peering, please see the below link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/transit-gateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&amp;whats-new-cards.sort-order=desc\" target=\"_blank\">Transit Gateway</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 92999,
            "question_id": 28313,
            "answers": [
              {
                "question_id": "28313",
                "choice": "<p>Set up AWS Transit Gateway between the company&#39;s VPC and each of the clients&#39; VPCs.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28313",
                "choice": "<p>Set up VPC peering between your company&#39;s VPC and each of the clients&#39; VPCs, but block the IPs from CIDR of the clients&#39; VPCs to deny access between each other.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28313",
                "choice": "<p>Set up VPC peering between your company&#39;s VPC and each of the clients&#39; VPC. Each client should have VPC peering set up between each other to speed up access time.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28313",
                "choice": "<p>Set up all the VPCs with the same CIDR but have your company&#39;s VPC as a centralized VPC.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 52241,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The manufacturing based company is using SAP S/4 HANA as part of their digital transformation journey. They have deployed SAP S/4 HANA on AWS for better performance and to get the cost benefits. The On-prem network is connected with AWS via AWS Direct Connect with 500Mbps Connection. Currently, 600 employees access the SAP Application using SAP GUI on their local computers from various locations. They are facing latency issues in uploading and downloading the data using SAP&nbsp;GUI. SAP Admin is also facing challenges to maintain the same version of SAP GUI in all Systems. Besides, you want users to only use up-to-date versions of SAP GUI. The company wants to overcome this issue very quickly. What should they do?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: D</strong></p>\n\n<ul>\n\t<li><strong>Option A is Incorrect</strong> because increasing the direct connect speed will not solve the upload and download speed issue and managing the same SAP GUI Version issue as the users are located at various locations.</li>\n\t<li><strong>Option B is Incorrect</strong> because increasing the direct connect speed will not solve the upload and download speed issue and managing the same SAP GUI Version issue as the users are located at various locations.</li>\n\t<li><strong>Option C is incorrect</strong> because it will take time to deploy the same version in 600 systems.</li>\n\t<li><strong>Option D is Correct</strong> because SAP GUI runs on AWS next to the SAP environment, increasing the employee&#39;s experience with SAP. SAP GUI also helps in maintaining the same version across the systems. With this option, users only access up-to-date versions of SAP GUI, and you don&rsquo;t have to deploy updates to every user&rsquo;s computer.&nbsp;&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/03/08/ckeditor_53513.png\" style=\"height:218px; width:1321px\" /><strong>Reference:</strong></li>\n\t<li><a href=\"https://aws.amazon.com/appstream2/enterprises/?nc=sn&amp;loc=2&amp;dn=3\" target=\"_blank\">https://aws.amazon.com/appstream2/enterprises/?nc=sn&amp;loc=2&amp;dn=3</a></li>\n\t<li><a href=\"https://www.youtube.com/watch?v=qAFlv1m3MX0\" target=\"_blank\">https://www.youtube.com/watch?v=qAFlv1m3MX0</a></li>\n\t<li><a href=\"https://aws.amazon.com/blogs/desktop-and-application-streaming/deploying-sap-gui-on-amazon-appstream-2-0/\" target=\"_blank\">https://aws.amazon.com/blogs/desktop-and-application-streaming/deploying-sap-gui-on-</a><a href=\"https://aws.amazon.com/blogs/desktop-and-application-streaming/deploying-sap-gui-on-amazon-appstream-2-0/\"> amazon-appstream-2-0/</a></li>\n\t<li><a href=\"https://aws.amazon.com/appstream2/features/\" target=\"_blank\">https://aws.amazon.com/appstream2/features/</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42079,
            "question_id": 52241,
            "answers": [
              {
                "choice": "<p>They should increase the Direct Connect speed from 500Mbps to 1Gbps.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>They should increase the Direct Connect speed from 500Mbps to 1Gbps and also provide AWS WorkSpace to individual employees.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>They should deploy the SAP GUI the same version on individual systems.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>They should deploy the SAP GUI on Amazon AppStream 2.0.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28315,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company needs to configure a NAT instance for its internal AWS applications to be able to download patches and package software. Currently, they are running a NAT instance that is using the floating IP scripting configuration to create fault tolerance for the NAT. What is the best way to configure the NAT instance with fault tolerance?</p>\r\n\r\n<p>Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because you would need at least two NAT instances for fault tolerance.</li>\r\n\t<li>Option B is incorrect because if you put both NAT instances in a single public subnet and that subnet becomes unavailable or unreachable to the other instances, the architecture would not be fault tolerant.</li>\r\n\t<li>Option C is CORRECT because you should place two NAT instances in two separate public subnets, and create routes from instances via each NAT instance for achieving fault tolerance.</li>\r\n\t<li>Option D is incorrect because you should not be putting the NAT instances in the private subnet as they need to communicate with the internet. They should be in the public subnet.</li>\r\n</ul>\r\n\r\n<p><strong>More information on NAT instances:</strong></p>\r\n\r\n<p>One approach to this situation is to leverage multiple NAT instances that can take over for each other if the other NAT instance should fail. This walkthrough and associated monitoring script (nat_monitor.sh) provide instructions for building an HA scenario where two NAT instances in separate Availability Zones (AZ) continuously monitor each other. If one NAT instance fails, this script enables the working NAT instance to take over outbound traffic and attempts to fix the failed instance by stopping and restarting it.</p>\r\n\r\n<p>Below is a diagram for fault tolerant NAT instances.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_as7fk3.png\" style=\"height:520px; width:640px\" /></p>\r\n\r\n<p>For more information on fault-tolerant NAT gateways, please see the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/articles/2781451301784570\" target=\"_blank\">https://aws.amazon.com/articles/2781451301784570</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18432,
            "question_id": 28315,
            "answers": [
              {
                "choice": "<p>Create one NAT instance in a public subnet and create a route from the private subnet to the NAT instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create two NAT instances in a public subnet and create a route from the private subnet to each NAT instance for fault tolerance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a NAT instance in a public subnet with application running in private subnet in an AZ. Create a similar architecture in another AZ and create a route from the private subnet to each NAT instance residing in these AZ&#39;s for fault tolerance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create two NAT instances in two separate private subnets.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45466,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has received a contract to augment&nbsp;a legacy enterprise file sharing system for a large media house. As of now, the company is using an on-premises private file sharing solution that is integrated with its directory service and uses a web-based intranet application to share files. With growing remote staff, the company&nbsp;needs support for mobile devices so that remote staff can work offline as well. Please suggest a valid option to architect the system with the given requirements.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A and B are INCORRECT</strong> because this will require a&nbsp;full-scale development of web and mobile application.</li>\r\n\t<li><strong>Option C is CORRECT </strong>as AWS WorkDocs provides all the necessary resources&nbsp;to create an enterprise-level file sharing solution. It can integrate with Enterprise Directory Service as well.</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because with S3 bucket level policies and static website hosting, it will not be sufficient to build the required solution.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35473,
            "question_id": 45466,
            "answers": [
              {
                "choice": "<p>Migrate all the files to S3 and build a web and mobile application&nbsp;to share the files. Use IAM for user access management.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Migrate the existing system to EC2 with Autoscaling and save all the files to S3. Use AD Connector for user access management.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS WorkDocs and integrate it with the on-premise directory server using the AD Connector.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use Simple AD integration with IAM, and use S3&nbsp;bucket level policies to share the files via S3. On S3, enable the Static website hosting for web access.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28317,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A 3-tier e-commerce web application is currently deployed on-premises and will be migrated to AWS for greater scalability and elasticity. The web server currently shares read-only data using a network distributed file system. The app server tier uses a clustering mechanism for discovery and shared session state that depends on IP multicast. The database tier uses shared-storage clustering to provide database failover capability and uses several read replicas for scaling. Data on all servers and the distributed file system directory is backed up weekly on a separate backup server. Which of the following AWS storage and database architectures meets the requirements of the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<p>The main requirements of this scenario are: (1) the application should be scalable and elastic, (2) app servers should be able to share the state, (3) need read replicas, and (4) weekly backup of the data.</p>\r\n\r\n<p><strong>Option A is CORRECT</strong> because (a) the overall architecture is highly available, elastic, and scalable, (b) web servers share state using DynamoDB and IP unicast that is supported by AWS, (c) it supports read replicas, and (d) weekly backup for servers using AMIs and data using DB snapshots.</p>\r\n\r\n<p><strong>Option B is incorrect</strong> because you cannot backup data to Glacier using snapshots.</p>\r\n\r\n<p><strong>Option C is incorrect </strong>because it does not address the requirement of having read replicas for elasticity and scalability.</p>\r\n\r\n<p><strong>Option D is incorrect</strong> because it is not suitable to store the read-only data in EC2. S3 should be selected as it is a more available and durable storage service.</p>\r\n\r\n<p>For more information on this topic, please visit the link&nbsp;below.</p>\r\n\r\n<p><a href=\"https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf\" target=\"_blank\">https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18434,
            "question_id": 28317,
            "answers": [
              {
                "choice": "<p>Web servers store read-only data in S3, and copy it from S3 to root volume at boot time. App servers share state using a combination of DynamoDB and IP unicast. Database use RDS with multi-AZ deployment and one or more Read Replicas. Backup web and app servers weekly via snapshots. Use the snapshots to create the AMIs ( data copied to EC2 instances from the dedicated backup servers ). Back up the database via DB snapshots.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Web servers store read-only data in S3, and copy it from S3 to root volume at boot time. App servers share state using a combination of DynamoDB and IP unicast. Database use RDS with multi-AZ deployment and one or more Read Replicas. Backup web servers, app servers, and database weekly to Glacier using snapshots.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Web servers store read-only data in S3 and copy it from S3 to root volume at boot time. App servers share state using a combination of DynamoDB and IP unicast. Database use RDS with multi-AZ deployment. Backup web and app servers weekly via AMIs. Back up the database via DB snapshots.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Web servers store read-only data in an EC2 NFS server and mount to each web server at boot time. App servers share state using a combination of DynamoDB and IP multicast. Database use RDS with multi-AZ deployment and one or more Read Replicas. Backup web and app servers weekly via AMIs, and back up the database via DB snapshots.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28318,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have a legacy application running that uses an m4.large instance size and cannot scale with Auto Scaling, but only has peak performance 5% of the time. This is a huge waste of resources and money. So your Senior Technical Manager has set you the task of trying to reduce costs while still keeping the legacy application, having lesser memory requirements, running in the long-term as it should. Which of the following will best accomplish the task your manager has assigned you? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>The AWS documentation clearly indicates using T2 EC2 instance types for those instances that often don&rsquo;t use CPU.</p>\r\n\r\n<p><strong>&nbsp;T2</strong></p>\r\n\r\n<p>T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline.</p>\r\n\r\n<p>T2 Unlimited instances can sustain high CPU performance for as long as a workload needs it. For most general-purpose workloads, T2 Unlimited instances will provide ample performance without any additional charges. If the instance needs to run at higher CPU utilization for a prolonged period, it can also do so at a flat additional charge of 5 cents per vCPU-hour.</p>\r\n\r\n<p>CPU Credits govern the baseline performance and ability to burst. T2 instances receive CPU Credits continuously at a set rate depending on the instance size, accumulating CPU Credits when they are idle, and consuming CPU credits when active. T2 instances are a good choice for various general-purpose workloads, including microservices, low-latency interactive applications, small and medium databases, virtual desktops, development, build and stage environments, code repositories, and product prototypes. For more information, see Burstable Performance Instances.</p>\r\n\r\n<p>For more information on EC2 instance types, please see the below link:</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/ec2/instance-types/\" target=\"_blank\">https://aws.amazon.com/ec2/instance-types/</a></p>\r\n\r\n<p>Option B is INCORRECT because using a &quot;C4&quot; instance would incur more costs and as per the requirements of the question, we need to reduce the costs. Please refer to the below link for instances pricing.</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/ec2/pricing/on-demand/\">https://aws.amazon.com/ec2/pricing/on-demand/</a></p>\r\n\r\n<p>Option C is INCORRECT because although &quot;t2.nano&quot; instance pricing is less, it has only 0.5 GiB of allocated memory, making the legacy application run too slow.</p>\r\n\r\n<p>Option D is INCORRECT because there are chances that the spot instances would not be available when there is a need. Therefore, there are chances for the legacy application to break down for want of more instances when needed.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18435,
            "question_id": 28318,
            "answers": [
              {
                "choice": "<p>Use a &quot;t2.medium - 3 yr RI&quot; burstable performance instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use a C4.large instance with enhanced networking.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use two t2.nano instances that have single Root I/O Virtualization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use t2.nano instance and add spot instances when they are required.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28319,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>The Dynamic Host Configuration Protocol (DHCP) provides a standard for passing configuration information to hosts on a TCP/IP network. You can have multiple sets of DHCP options, but you can associate only one set of DHCP options with a VPC at a time. You have just created your first set of DHCP options, associated it with your VPC but now realize that you have made an error in setting them up and you need to change the options. Which of the following options do you need to take to achieve this? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>Option A, B, and D are incorrect because you cannot modify the DHCP options - neither via the console nor via CLI.</p>\r\n\r\n<p>Option C is CORRECT because once you create a set of DHCP options, you cannot modify them. You must create a new set of DHCP options and associate it with your VPC.</p>\r\n\r\n<p><strong>AWS Document says:</strong></p>\r\n\r\n<p><strong>Changing DHCP Options</strong></p>\r\n\r\n<p>After you create a set of DHCP options, you can&#39;t modify them. If you want your VPC to use a different set of DHCP options, you must create a new set and associate them with your VPC. You can also set up your VPC to use no DHCP options at all.</p>\r\n\r\n<p>You can have multiple sets of DHCP options, but you can associate only one set of DHCP options with a VPC at a time. If you delete a VPC, the DHCP options set associated with the VPC are also deleted.</p>\r\n\r\n<p>After you associate a new set of DHCP options with a VPC, any existing instances and all new instances that you launch in the VPC use these options. You don&#39;t need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. If you want, you can explicitly renew the lease using the operating system on the instance.</p>\r\n\r\n<p>&nbsp;For more information on DHCP Options set, please see the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18436,
            "question_id": 28319,
            "answers": [
              {
                "choice": "<p>You need to stop all the instances in the VPC. You can then change the options, and they will take effect when you start the instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can modify the options from the console or the CLI.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You must create a new set of DHCP options and associate them with your VPC.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can modify the options from the CLI only, not from the console.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 52242,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is running a microservice-based application. They are using DynamoDB to store the data and AWS API Gateway for managing the Rest APIs. They are also using Lambda non-proxy integration. The development team recently made a change to one Rest API method. After that, the API does not seem to work as expected. You have been asked to troubleshoot the issue. Which is the correct statement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because we can make changes in the Rest APIs in AWS API Gateway.</li>\r\n\t<li><strong>Option B is Correct</strong> because updates to the method require Redeployment of the API.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because an update to the stage doesn&rsquo;t require the Redeployment of the API.</li>\r\n\t<li><strong>Option D is incorrect</strong> because it&rsquo;s not mentioned in the question that they are using the caching.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/updating-api.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/updating-api.html</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=9ElpSPXk-g8\" target=\"_blank\">https://www.youtube.com/watch?v=9ElpSPXk-g8</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42080,
            "question_id": 52242,
            "answers": [
              {
                "choice": "<p>You can&rsquo;t change the Rest APIs in AWS API Gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>As the development team has recently done the change in the method of the Rest API. They should Redeploy the API.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>As the development team has recently done the change in the stage of the Rest API. They should Redeploy the API.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You should change the Cache time-to-live (TTL) value and update the Lambda Code.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 44737,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are a software engineer and are creating a new web service in AWS. The service is about daily schedules where end users can configure and fetch. It contains an AngularJs front end that deals with data in a DynamoDB table called &quot;UserScheduleData&quot; with read and write permissions. You plan to use API gateway and Lambda to handle the backend service. During development, you also need to do integration testings frequently using curl for the API endpoints. You have created a role &ldquo;ScheduleRoleLambda&rdquo; for the Lambda itself. What below options should you perform to ensure that the Lambda contains the necessary permissions in the service role? (Select TWO).</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B, F</strong></p>\n\n<p>Firstly, the CloudWatch Logs permission&nbsp;for Lambda is required at a minimum. Refer to the below Lambda settings:</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q3.jpg\" style=\"height:259px; width:884px\" /></p>\n\n<p>Every lambda needs this permission to create a log group, log stream, and put log events.</p>\n\n<p>Besides, access for DynamoDB is required for the Lambda. &quot;dynamodb:GetItem&quot; and &quot;dynamodb:PutItem&quot; are necessary.</p>\n\n<p>Lastly, it needs to add permission&nbsp;to the permissions policy associated with the Lambda function. Run the add-permission AWS Lambda command to grant the Amazon API Gateway service principal (apigateway.amazonaws.com) permissions to invoke the Lambda function.<br />\n<a href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html\">https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html</a>&nbsp;</p>\n\n<ul>\n\t<li><strong>Option A is incorrect,</strong>&nbsp;although AWS X-Ray can trace AWS Lambda functions, it is not mandatory.</li>\n\t<li><strong>Option B is CORRECT</strong> because the Lambda&nbsp;function needs access to Amazon CloudWatch Logs for log streaming.&nbsp;</li>\n\t<li><strong>Option C is incorrect,</strong> although this permission is needed, it does not belong to the Lambda function&#39;s service role.</li>\n\t<li><strong>Option D is incorrect,</strong>&nbsp;SNS may help with error handling; however, it is optional and only needed depending on specific requirements.</li>\n\t<li><strong>Option E is incorrect </strong>because, for the permissions of DynamoDB, the resource should be arn name of the DynamoDB table in accordance with the principle of least privilege. &quot;dynamodb:FetchItem&quot; is incorrect as well.</li>\n</ul>\n\n<p>The below is an example:</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q3.1.jpg\" style=\"height:398px; width:781px\" /></p>\n\n<ul>\n\t<li><strong>Option F is CORRECT</strong>&nbsp;because it correctly describes the permissions for DynamoDB.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html\">https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html\">https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 63398,
            "question_id": 44737,
            "answers": [
              {
                "question_id": "44737",
                "choice": "<p>AWSXrayWriteOnlyAccess policy is needed for &ldquo;ScheduleRoleLambda&rdquo; so that a segment record with details about the function invocation and execution can be saved for tracking and debug purpose.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44737",
                "choice": "<p>&ldquo;ScheduleRoleLambda&rdquo; should have a policy for CloudWatch Logs including CreateLogGroup, CreateLogStream and PutLogEvents.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "44737",
                "choice": "<p>Invoke permissions are needed to the permissions policy associated with your Lambda function so that the API Gateway can call the lambda function.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44737",
                "choice": "<p>&ldquo;sns:publish&rdquo; allow inline policy should be added into &ldquo;ScheduleRoleLambda&rdquo; for error handlings. For example, when exception appears, the message can be put into a dead letter queue via SNS publish.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44737",
                "choice": "<p>&ldquo;ScheduleRoleLambda&rdquo; should contain an inline policy to allow DynamoDb access. The resource should be &ldquo;*&rdquo; and the action should contain &quot;dynamodb:FetchItem&quot;, &quot;dynamodb:PutItem&quot; and &quot;dynamodb:Query&quot;.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44737",
                "choice": "<p>An IAM policy to allow DynamoDb access is needed for &ldquo;ScheduleRoleLambda&rdquo;. The resource should be the arn of &ldquo;UserScheduleData&rdquo; and the actions should contain &quot;dynamodb:GetItem&quot; and &quot;dynamodb:PutItem&quot;.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 52243,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company is running an e-commerce application in On-prem. Your CIO has asked you to build a highly available, low cost, and easy solution to collect the user clickstream data in real-time. How are you going to design the solution on AWS?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because the Kinesis agent helps collect the clickstream data in a Kinesis data stream and store it in Amazon S3 Bucket.</li>\r\n\t<li><strong>Option B is Incorrect</strong> because DynamoDB will not be the right storage for clickstream data.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because IoT Core can&rsquo;t help in collecting the clickstream data.</li>\r\n\t<li><strong>Option D is Incorrect</strong> because Glacier is not the right storage class for storing clickstream data.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/big-data/create-real-time-clickstream-sessions-and-run-analytics-with-amazon-kinesis-data-analytics-aws-glue-and-amazon-athena/\" target=\"_blank\">https://aws.amazon.com/blogs/big-data/create-real-time-clickstream-sessions-and-run-analytics-with-amazon-kinesis-data-analytics-aws-glue-and-amazon-athena/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/streams/latest/dev/writing-with-agents.html\" target=\"_blank\">https://docs.aws.amazon.com/streams/latest/dev/writing-with-agents.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 85574,
            "question_id": 52243,
            "answers": [
              {
                "question_id": "52243",
                "choice": "<p>Use a Kinesis agent to collect the clickstream data and send data to a Kinesis data stream. Store in Amazon S3 bucket for further analysis.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "52243",
                "choice": "<p>Use Kinesis agent to collect the clickstream data in Kinesis data stream and store it in DynamoDB for further analysis.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52243",
                "choice": "<p>Use the IoT Core to collect the clickstream data in the Kinesis data stream and store the logs in Dynamo DB.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52243",
                "choice": "<p>Use the Kinesis agent to collect the clickstream data in the Kinesis data stream and store it in Amazon Glacier.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28322,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You&#39;re building a mobile application game. The application needs permissions for each user to communicate and store data in DynamoDB tables. What is the best method for granting each mobile device that installs your application to access DynamoDB tables for storage when required? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because IAM Roles are preferred over IAM Users because IAM Users have to access the AWS resources using access and secret keys, which is a security concern.</p>\r\n\r\n<p>Option B is not a feasible configuration.</p>\r\n\r\n<p>Option C is CORRECT because it (a) creates an IAM Role with the needed permissions to connect to DynamoDB, (b) it authenticates the users with Web Identity Federation, and (c) the application accesses the DynamoDB with temporary credentials that are given by STS.</p>\r\n\r\n<p>Option D is incorrect because creating the Active Directory (AD) server and using AD for authenticating are unnecessary and costly.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>See the note&nbsp;below for more information on AssumeRoleWithWebIdentity API.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>When you write such an app, you&#39;ll make requests to AWS services that must be signed with an AWS access key. However, we strongly recommend that you do not embed or distribute long-term&nbsp;AWS credentials with apps that users download to a&nbsp;device, even in an encrypted store. Instead, build your app to request temporary AWS security credentials dynamically when needed using web identity federation. The supplied temporary credentials map to an AWS role that has only the permissions needed to perform the tasks required by the mobile app</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on web identity federation, please refer to the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18439,
            "question_id": 28322,
            "answers": [
              {
                "choice": "<p>During the install and game configuration process, each user creates an IAM credential and assigns the IAM user to a group with proper permissions to communicate with DynamoDB.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM group that only gives access to your application and the DynamoDB tables. Then, when writing to DynamoDB, simply include the unique device ID to associate the data with that specific user.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM role with the proper permission policy to communicate with the DynamoDB table. Use web identity federation, which assumes the IAM role using AssumeRoleWithWebIdentity, when the user signs in, granting temporary security credentials using STS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Active Directory server and an AD user for each mobile application user. When the user signs in to the AD sign-on, allow the AD server to federate using SAML 2.0 to IAM and assign a role to the AD user which is assumed with AssumeRoleWithSAML.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28323,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>In an attempt to cut costs, your accounts manager has come to you and tells you that he thinks that if the company starts to use consolidated billing, it will save some money. He also wants the billing set up in such a way that it is relatively simple, and it gives insights into each of the VPC environments regarding the utilization of the corresponding VPC resources. Which of the following setups would satisfy your account manager&#39;s needs?</p>\r\n\r\n<p>Choose two answers from the options below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A and C</strong></p>\r\n\r\n<p>Each organization in AWS Organizations has a&nbsp;<em>master account</em>&nbsp;that pays the charges of all the&nbsp;<em>member accounts</em>. If you have access to the master account, you can see a combined view of the AWS charges incurred by the member accounts.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></li>\r\n</ul>\r\n\r\n<p><br />\r\nWe can have multiple VPC&#39;s serving various departments, and we can use tags to define them and have one billing account. The tags associated with the VPC&#39;s will distinguish each department or environment.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because VPC helps you segregate and organize your resources as per the functionality or domain, thus enabling the account owner to get insight into the resources&#39; costing within the logical grouping of the resources. e.g., If an organization has a separate VPC for each department - Finance, Development, Sales etc. It will be convenient to get the billing details per department.</li>\r\n\t<li>Option B is incorrect because if all the resources are created under a single account, it will be difficult for the accounts manager to get insights into the utilization of resources as per the domains or functionality. e.g., Instead of having a separate department such as Finance, Development, Sales, etc., if an organization has a single account, it will be tedious to get the details on the billing of each departmental resource.</li>\r\n\t<li>Option C is CORRECT as having a linked account would enable the accounts manager to leverage the Consolidated Billing for multiple AWS accounts. With Consolidated Billing, you can see a combined view of AWS charges incurred by all accounts, as well as get a cost report for each account associated with your payer account.</li>\r\n\t<li>Option D is INCORRECT because only IAM User access will not be sufficient for Consolidated Billing.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on consolidated billing, please refer to the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\" target=\"_blank\">http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>You can also have the option of segregating the resources via multiple VPC&rsquo;s and have the billing estimates done via each VPC.</p>\r\n\r\n<ul>\r\n\t<li>For more information on AWS VPC, please refer to the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/vpc/\" target=\"_blank\">https://aws.amazon.com/vpc/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18440,
            "question_id": 28323,
            "answers": [
              {
                "choice": "<p>Use multiple VPC&#39;s for the different departments ( eg: sales, marketing etc.) and tag the resources within the department.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use one Payer Account and no linked accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use one Payer Account and many linked accounts.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>IAM user access to the Billing and Cost Management console.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 52244,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is developing a mobile application. It is hosted in the AWS Mumbai region. Users can upload the images in the app from any part of the world. Images are getting stored in an S3 Bucket called &quot;test&quot;. Recently you have implemented the S3 Transfer Acceleration to improve the performance of image upload. Which one of the following is NOT true about the S3 Transfer Acceleration?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because there are no Gateway servers to manage and no firewalls to open for S3 Transfer Acceleration.</li>\r\n\t<li><strong>Option B is Correct</strong> because You can use the Amazon S3 Transfer Acceleration Speed Comparison tool for comparing general upload speed across different AWS Regions, not the Edge locations.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because the bucket URL will be test.s3-accelerate.amazonaws.com &ndash; to access an acceleration-enabled bucket.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the bucket URL will be test.s3-accelerate.dualstack.amazonaws.com &ndash; to access an acceleration-enabled bucket over IPv6.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/upload-speed-s3-transfer-acceleration/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/upload-speed-s3-transfer-acceleration/</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=J2CVnmUWSi4\" target=\"_blank\">https://www.youtube.com/watch?v=J2CVnmUWSi4</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42082,
            "question_id": 52244,
            "answers": [
              {
                "choice": "<p>There are no Gateway servers to manage and no firewalls to open for S3 Transfer Acceleration.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use the Amazon S3 Transfer Acceleration Speed Comparison tool for comparing general upload speed across different Edge locations.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can use this link test.s3-accelerate.amazonaws.com &ndash; to access an acceleration-enabled bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use test.s3-accelerate.dualstack.amazonaws.com &ndash; to access an acceleration-enabled bucket over IPv6.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28325,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A startup company is designing an application that needs to handle an unexpected amount of load and allow site visitors to read data from a DynamoDB table, which contains the results of an online polling system. At any given time, as many as 5,000 requests need to be handled by the application. The company has limited budget. How can this application be developed most cost-effectively?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>The most important design consideration of this question is to have a cost-effective architecture that provides an application that can communicate with DynamoDB.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because (a) to show the polling results, a static HTML page that is stored in S3 bucket is sufficient (b) CloudFront and Route53 are AWS managed services that are highly available and scalable, and (c) it uses the JavaScript to communicate with DynamoDB.</li>\r\n\t<li>Option B is incorrect because (a)it will require many EC2 instances to handle the load of incoming traffic, and (b) setting up the EC2 instances and ELB is not a cost-effective solution compared to the static web page in S3.</li>\r\n\t<li>Option C is incorrect because architecting this with ELB and EC2 instances will not be as cost-effective as the static HTML page - that communicates with DynamoDB - hosted in S3.</li>\r\n\t<li>Option D is incorrect. Lambda uses a default safety throttle for the number of concurrent executions across all functions in a given region per account. Currently, the concurrent lambda execution limit is 1000 (soft limit ), and we need to handle ten times the traffic at any point in time. Please note that this soft limit can be increased by contacting AWS support. This would take some time after AWS approval and implementing the same and therefore involves cost. Besides, using a Lambda function to create a static page per user may have some performance issues.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS s3, please refer to the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18442,
            "question_id": 28325,
            "answers": [
              {
                "choice": "<p>Use the JavaScript SDK and build a static HTML page, hosted inside an Amazon S3 bucket; use CloudFront and Route 53 to serve the website, which uses JavaScript client-side language to communicate with DynamoDB.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CloudFront distribution that serves the HTML web page but sends the visitors to an Auto Scaling ELB application pointing to EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy an Auto Scaling application with Elastic Load Balancer pointing to EC2 instances that use a server-side SDK to communicate with the DynamoDB table.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a Lambda script that pulls the most recent DynamoDB polling result and creates a custom HTML page in S3 as per the user request ( one lambda execution per each user request ) and use CloudFront and Route 53 to serve the static website.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28326,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are migrating an existing application to AWS cloud that would be communicating with EC2 instances in the VPC. You need to make this application highly available. The application currently relies on hard-coded host names for communication between the various tiers. You have migrated the application and configured multi-tier using the internal elastic load balancer for serving traffic. The load balancer host name is &quot;demo-app.us-east-1.elb.amazonaws.com&quot;. The current hard coded host name in your application for internal communication between your multi-tier application is &quot;demolayer.example.com&quot;. How can you architect a solution for high availability?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Since demolayer.example.com is an internal DNS record, the best way is Route 53 to create an internal resource record. One can then point the resource record to the create ELB.</p>\r\n\r\n<p>While ordinary Amazon Route&nbsp;53 resource record sets are standard DNS resource record sets,&nbsp;<em>alias resource record sets</em>&nbsp;provide an Amazon Route&nbsp;53&ndash;specific extension to DNS functionality. Instead of an IP address or a domain name, an alias resource record set contains a pointer to a CloudFront distribution, an Elastic Beanstalk environment, an ELB Classic or Application Load Balancer, an Amazon S3 bucket that is configured as a static website, or another Amazon Route&nbsp;53 resource record set in the same hosted zone.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because it does not mention how to map between the existing hard-coded hostname and the ELB hostname.</li>\r\n\t<li>Option B is CORRECT because it creates an internal ALIAS recordset where it defines the mapping between the hard-coded hostname and the ELB hostname that is to be used.</li>\r\n\t<li>Options C and D are incorrect because they should create a private recordset, not public since the mapping between the hard-coded hostname and ELB hostname should be done internally.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on alias and non-alias records, please refer to the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html\" target=\"_blank\">http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18443,
            "question_id": 28326,
            "answers": [
              {
                "choice": "<p>Create an environment variable passed to the EC2 instances using &quot;user-data&quot; with the ELB host name &quot;demo-app.us-east-1.elb.amazonaws.com&quot;&nbsp;</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a PRIVATE resource record set using Route53 with a host name of &quot;demolayer.example.com&quot; and an ALIAS record to &quot;demo-app.us-east-1.elb.amazonaws.com&quot;</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a PUBLIC resource record set using Route53 with a host name of &quot;demolayer.example.com&quot; and an ALIAS record to &quot;demo-app.us-east-1.elb.amazonaws.com&quot;</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a CNAME record to the existing on-premise DNS server with a value of &quot;demo-app.us-east-1.elb.amazonaws.com&quot;. Create a PUBLIC resource record set using Route53 with a host name of &quot;applayer.example.com&quot; and an ALIAS record to &quot;demo-app.us-east-1.elb.amazonaws.com&quot;</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28327,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>When it comes to KMS, which of the following best describes how the AWS Key Management Service works? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>AWS KMS supports two types of keys - Master Keys and Data Keys. A Data Key is used to encrypt and decrypt the actual data; whereas, the Master Key is used to protect (encrypt and decrypt) the data key and some data up to 4Kb. See the image below:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_wpulaz.png\" style=\"height:359px; width:638px\" /></p>\r\n\r\n<p>Based on this, option B is CORRECT.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on the AWS KMS Concepts, please refer to the link below-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18444,
            "question_id": 28327,
            "answers": [
              {
                "choice": "<p>AWS KMS supports two kinds of keys &mdash; master keys and data keys. Master keys can be used to encrypt and decrypt up to 4 kilobytes of data directly and can also be used to protect data keys. The master keys are then used to encrypt and decrypt customer data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS KMS supports two kinds of keys &mdash; master keys and data keys. Master keys can be used to encrypt and decrypt up to 4 kilobytes of data directly and can also be used to protect data keys. The data keys are then used to encrypt and decrypt customer data.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS KMS supports two kinds of keys &mdash; master keys and data keys. Master keys can be used to encrypt and decrypt up to 4 kilobytes of data directly and can also be used to protect data keys. The data keys are then used to decrypt the customer data, and the master keys are used to encrypt the customer data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS KMS supports two kinds of keys &mdash; master keys and data keys. Master keys can be used to encrypt and decrypt up to 4 kilobytes of data directly and can also be used to protect data keys. The data keys are then used to encrypt the customer data, and the master keys are used to decrypt the customer data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 52245,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is planning to move an existing portal to AWS. Currently, it&rsquo;s running in on-premises. It is a 5-year-old portal developed on Java and MySQL 5.6. Your company is looking to dockerize the application and deploy it in a highly available environment in AWS. You also need a serverless compute engine for containers so that you do not need to provision and manage servers. Which of the following methods is the most suitable?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>&nbsp;because the Client is looking to dockerize the App in a serverless environment. Amazon ECS with EC2 Launch Type is not the best case here.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the Client is looking for dockerizing&nbsp;the App in a serverless environment. Amazon EC2 is not the best case here.</li>\r\n\t<li><strong>Option C is incorrect</strong> because ECS with EC2 Launch Type is not a serverless environment.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because ECS with AWS Fargate Launch Type provides a highly available and serverless environment. This option meets the requirements of the question.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-dg.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-dg.pdf</a></li>\r\n\t<li><a href=\"https://www.youtube.com/watch?v=4xqOoRPrnAw\" target=\"_blank\">https://www.youtube.com/watch?v=4xqOoRPrnAw</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-fargate/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws-</a><a href=\"https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-containers-to-aws- fargate/\" target=\"_blank\"> fargate/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42083,
            "question_id": 52245,
            "answers": [
              {
                "choice": "<p>Deploy the Application on Amazon ECS with EC2 Launch Type and leverage Amazon RDS MySQL for the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy the Application on Amazon EC2 and leverage the Amazon Aurora MySQL for the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Containerize the Java based application, store Container image in Docker Hub and deploy it in ECS with EC2 Launch Type. Leverage Amazon Aurora MySQL for the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Containerize the Java based application, store Container image in ECR and deploy it in ECS with AWS Fargate Launch Type. Leverage Amazon Aurora MySQL for the database.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28329,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You have acquired a new contract from a client to move all of their&nbsp;existing infrastructures&nbsp;onto AWS. You notice that they are running some of their&nbsp;applications using multicast, and they need to keep it running as such when it is migrated to AWS. You discover that multicast is not available on AWS, as you cannot manage multiple subnets on a single interface on AWS, and a subnet can only belong to one availability zone. Which of the following would enable you to deploy legacy applications on AWS that require multicast?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because, although creating an Elastic Network Interfaces to communicate between the various subnets is a correct step, it would not be enough in this scenario unless a virtual overlay is set up on top.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because TGW allows enabling multicast and select subnets to include in the multicast domain when associating VPC attachments.</li>\r\n\t<li><strong>Option C is incorrect </strong>because it would disrupt multicast, involve additional&nbsp;time and cost, and not add any value.</li>\r\n\t<li><strong>Option D is incorrect</strong> because VPC peering and multicast are not the same.</li>\r\n</ul>\r\n\r\n<p>For more information on Multicast in an Amazon VPC, please visit the URL below</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/tgw/how-multicast-works.html\">vpc-tgw-how-multicast-works</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 103101,
            "question_id": 28329,
            "answers": [
              {
                "question_id": "28329",
                "choice": "<p>Provide Elastic Network Interfaces to communicate between the subnets.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28329",
                "choice": "<p>Rely on a Transit Gateway, enable multicast, and create a multicast domain associated with the relevant subnets.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28329",
                "choice": "<p>Create all the subnets in a single VPC&nbsp;</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28329",
                "choice": "<p>Create all the subnets on a different VPC and use VPC peering between them.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28330,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has three accounts under consolidated billing. &quot;Production&quot; is the payer account, and &quot;Development&quot; and &quot;Staging&quot; are the linked accounts and they have the reserved instances sharing enabled between them. The development account has purchased three reserved instances with instance type of m4.large in Availability Zone us-east-1a. However, no instance&nbsp;is running on the development account, but has five m4.large instances running in the staging account and Availability Zone 1a. Who can receive the benefit of the reserved instance pricing? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because the benefit of reserved instance pricing will apply to any three EC2 instances across all the accounts in the Consolidated Billing group. Since the staging account - which is part of the &quot;account family&quot; - has 5 EC2 instances running, only 3 of those will receive the reserved pricing benefit.</li>\r\n\t<li>Option B is incorrect because even though no EC2 instances are running in the development account, the instances running in the staging account will still receive the reservation pricing benefit since it is part of the Consolidated Billing group.</li>\r\n\t<li>Option C is CORRECT because the reserved instance pricing will be applied to&nbsp;three of the m4.large instances in the staging account as they&nbsp;are&nbsp;part of the Consolidated Billing group. This needs Reserved Instance sharing to be enabled at the account.</li>\r\n\t<li>Option D is incorrect because the reserved Consolidated Billing advantage is applied to all the accounts linked to the primary account, not just the primary account.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Consolidated Billing Group</strong></p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_gyrqr5.png\" style=\"height:363px; width:750px\" /></p>\r\n\r\n<p>For more information on consolidating billing, please visit the below links-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\" target=\"_blank\">http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18447,
            "question_id": 28330,
            "answers": [
              {
                "choice": "<p>All the instances in all the accounts running the m4.large will receive the pricing even if there is only one reserved instance purchase.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>No account will receive the reservation pricing because the reservation was purchased on the development account, and no instances that match the reservation are running in the development account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The reserved instance pricing will be applied to three m4.large instances in the staging account&nbsp;because the staging account runs an instance that matches the reserved instance type.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Only the primary account (the consolidated billing primary account) will receive the discounted pricing if the instance is running in the primary billing account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28331,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>A company has developed a Ruby on Rails content management platform. Currently, OpsWorks has several stacks for dev, staging, and production to deploy and manage the application. Now, the company wants to start using Python instead of Ruby. How should the company manage the new deployment so that it should revert back to the old application with Ruby if the new deployment starts adversely impacting the existing customers? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\n\n<p><strong>Option A is incorrect</strong> because it mentions how the code would be deployed using the deploy lifecycle event. However, it does not mention how the system can revert back to the old application deployment stack if there is any failure.</p>\n\n<p><strong>Option B is CORRECT </strong>because it deploys the new stack via the canary deployment method where the new stack is tested only on a small portion of production traffic first. If the new deployment has any errors, it reverses back to the old deployment stack.</p>\n\n<p><strong>Option C is incorrect.</strong> Even though you create the new stack, you should always test a small portion of production traffic with the new stack rather than route all the production traffic.</p>\n\n<p><strong>Option D is incorrect </strong>because updating all the production instances at once is risky, and it does not give an option to revert back to the old stack in case of any errors.</p>\n\n<p><strong>More information on Canary Deployment</strong></p>\n\n<p>Canary deployments are a pattern for rolling out releases to a subset of users or servers. The idea is first to deploy the change to a small subset of servers, test it, and then roll the change out to the rest of the servers. The canary deployment serves as an early warning indicator with less impact on downtime: if the canary deployment fails, the rest of the servers aren&#39;t impacted.</p>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/comparison-of-blue-green-deployment-techniques.html\">comparison-of-blue-green-deployment-techniques</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/clone-a-stack-in-aws-opsworks-and-update-dns.html\">aws-opsworks-and-update-dns</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/when-bluegreen-deployments-are-not-recommended.html\">when-bluegreen-deployments-are-not-recommended</a><br />\n\t&nbsp;</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 85082,
            "question_id": 28331,
            "answers": [
              {
                "question_id": "28331",
                "choice": "<p>Create a new stack that contains the Python application code and manages separate deployments of the application via the secondary stack using the deploy lifecycle action to implement the application code.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28331",
                "choice": "<p>Create a new stack that contains a new layer with the Python code. Route only a small portion of the production traffic to use the new deployment stack. Once the application is validated, slowly increase the production traffic to the new stack using the Canary Deployment. Revert to the old stack, if the new stack deployment fails or does not work.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28331",
                "choice": "<p>Create a new stack that contains the Python application code. Route all the traffic to the new stack at once so that all the customers get to access the updated application.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28331",
                "choice": "<p>Update the existing host instances of the application with the new Python code. This will save the cost of having to maintain two stacks, hence cutting down on the costs.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28296,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your application has very high traffic.&nbsp;So you have enabled autoscaling in&nbsp;multi-availability zone to suffice your application&#39;s needs.&nbsp;But you observe that one of the availability zones is not receiving any traffic. What can be wrong here?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>In order to make sure that all the EC2 instances behind a cross-zone ELB receive the requests, make sure that all the applicable availability zones (AZs) are added to that ELB.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because autoscaling can work with multiple AZs.</li>\r\n\t<li>Option B is incorrect because autoscaling can be enabled for multi-AZ in any single region, not just N. Virginia. (see the image below)</li>\r\n\t<li>Option C is CORRECT because most likely, the reason is that the AZ &ndash; whose EC2 instances are not receiving requests &ndash; is not added to the ELB.&nbsp;</li>\r\n\t<li>Option D is incorrect because instances need not be added manually to AZ (they should already be there!).</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_18qnln.png\" style=\"height:510px; width:600px\" /></p>\r\n\r\n<p><strong>More information on adding AZs to ELB</strong></p>\r\n\r\n<p>When you add an Availability Zone to your load balancer, Elastic Load Balancing creates a load balancer node in the Availability Zone. Load balancer nodes accept traffic from clients and forward requests to the healthy registered instances in one or more Availability Zones.</p>\r\n\r\n<ul>\r\n\t<li>For more information on adding AZ&rsquo;s to ELB, please refer to the below URL-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html\" target=\"_blank\">http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18413,
            "question_id": 28296,
            "answers": [
              {
                "choice": "<p>Autoscaling only works for single availability zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Autoscaling can be enabled for multi AZ only in north Virginia region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Availability zone is not added to Elastic load balancer.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Instances need to manually added to availability zone.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28332,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has hired a third-party security auditor, and the auditor needs read-only access to&nbsp;the required&nbsp;AWS resources and&nbsp;logs of all VPC records and events that will occur on AWS. How can the company meet the auditor&#39;s requirements without compromising with the security in the AWS environment?</p>\r\n\r\n<p>Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect.&nbsp;IAM roles are a secure way to grant permissions to entities that you trust.&nbsp; But the entities should be an IAM user in another account or a User from a corporate directory who use identity federation with SAML. None of these are specified in the question.</li>\r\n\t<li>Option B is incorrect because sending the logs via email is not a good architecture.</li>\r\n\t<li>Option C is incorrect because granting the auditor access to AWS resources is not AWS&#39;s responsibility. It is the AWS user or account owner&#39;s responsibility.</li>\r\n</ul>\r\n\r\n<p>AWS CloudTrail is now enabled&nbsp;<strong>by default</strong>&nbsp;for&nbsp;<strong>ALL CUSTOMERS</strong>&nbsp;and will provide visibility into the past seven days of account activity without the need for you to configure a trail in the service to get started.&nbsp;<br />\r\nBut if you want to access your CloudTrail log files directly or archive your logs for auditing purposes, you can still create a trail and specify the S3 bucket for your log file delivery.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-amazon-web-services-extends-cloudtrail-to-all-aws-customers/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-amazon-web-services-extends-cloudtrail-to-all-aws-customers/</a></li>\r\n</ul>\r\n\r\n<p><strong>More information on AWS CloudTrail</strong></p>\r\n\r\n<p>AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain events related to API calls across your AWS infrastructure. CloudTrail provides a history of AWS API calls for your account, including API calls made through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. This history simplifies security analysis, resource change tracking, and troubleshooting.</p>\r\n\r\n<p>For more information on CloudTrail, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/cloudtrail/\" target=\"_blank\">https://aws.amazon.com/cloudtrail/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18449,
            "question_id": 28332,
            "answers": [
              {
                "choice": "<p>Create a role that has the required permissions for the auditor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an SNS notification that sends the CloudTrail log files to the auditor&#39;s email when CloudTrail delivers the logs to S3 but does not allow the auditor access to the AWS environment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The company should contact AWS as part of the shared responsibility model, and AWS will grant required access to the third-party auditor.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable CloudTrail and specify the S3 bucket for your log file delivery.&nbsp; Create an IAM user who has read-only permission to the required AWS resources, including the VPC logs and the bucket containing CloudTrail logs.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28333,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>After configuring a whole site CDN on CloudFront, you receive the following error.</p>\r\n\r\n<p><strong><em>This distribution is not configured to allow the HTTP request method that was used for this request. The distribution supports only cachable requests. </em></strong></p>\r\n\r\n<p>What is causing&nbsp;the above error?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>The AWS documentation also states that &quot;CloudFront caches responses to <strong><em>GET</em></strong>&nbsp;and <strong><em>HEAD</em></strong>&nbsp;requests&quot; and, optionally, OPTIONS requests. CloudFront&nbsp;<strong>does not cache responses to requests that use the other methods.</strong><br />\r\n<br />\r\nAs per AWS documentation,</p>\r\n\r\n<p>Allowed HTTP Methods</p>\r\n\r\n<p>Specify the HTTP methods that you want CloudFront to process and forward to your origin:</p>\r\n\r\n<ul>\r\n\t<li><strong>GET, HEAD:</strong>&nbsp;You can use CloudFront only to get objects from your origin or to get object headers.</li>\r\n\t<li><strong>GET, HEAD, OPTIONS:</strong>&nbsp;You can use CloudFront only to get objects from your origin, get object headers, or retrieve a list of the options that your origin server supports.</li>\r\n\t<li><strong>GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE:</strong>&nbsp;You can use CloudFront to get, add, update, and delete objects, and to get object headers. In addition, you can perform other POST operations, such as submitting data from a web form.</li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>CloudFront caches responses to <em><strong>GET</strong></em>&nbsp;and <em><strong>HEAD</strong>&nbsp;</em>requests and, optionally, <strong><em>OPTIONS</em></strong>&nbsp;requests. CloudFront does not cache responses to requests that use the other methods.</p>\r\n\r\n<p><br />\r\nBased on this, Option B seems to be a better choice than C.<br />\r\n<br />\r\nFor more information, please visit:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesAllowedHTTPMethods\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesAllowedHTTPMethods</a></li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>When the CloudFront Distribution supports only &quot;cacheable requests&quot;, it means that it supports only GET and HEAD HTTP requests (read-only). For the HTTP requests such as OPTIONS, PUT, POST, PATCH AND DELETE, the CloudFront will give an error &quot;The distribution supports only cacheable requests&quot;.</p>\r\n\r\n<p>Hence, option B is the correct answer.</p>\r\n\r\n<p>There is a good question posted on StackOverflow which explains what should be done in this situation.</p>\r\n\r\n<p><a href=\"http://stackoverflow.com/questions/31253694/this-distribution-is-not-configured-to-allow-the-http-request\" target=\"_blank\">http://stackoverflow.com/questions/31253694/this-distribution-is-not-configured-to-allow-the-http-request</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18450,
            "question_id": 28333,
            "answers": [
              {
                "choice": "<p>The CloudFront distribution is configured to the wrong origin.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allowed HTTP methods on that specific origin is only accepting GET, HEAD.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Allowed HTTP methods on that specific origin is only accepting POST, PATCH.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allowed HTTP methods on that specific origin is only accepting GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 58188,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS Solutions Architect. A company owns a large number of batch processing workloads in a local data center and plans to migrate these jobs in AWS Batch. The company needs your help to decide which provisioning model should be chosen in AWS Batch jobs. Which of the following situations would you use for AWS Fargate in AWS Batch? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answers: B and D</strong></p>\n\n<ul>\n\t<li><strong>Option​ ​A is ​incorrect.</strong> Because, for this option, the EC2 instance is more suitable as users can choose the instance configurations.</li>\n\t<li><strong>Option​ B is​ CORRECT.&nbsp;</strong>Because with Fargate, jobs can start faster at the initial scale-out of work as users do not need to wait for EC2 instances to launch.</li>\n\t<li><strong>Option​ ​C ​is​ ​incorrect.&nbsp;</strong>Because the EC2 instance is more suitable as users need to customize the AMI and instance type. Users cannot do this with Fargate.</li>\n\t<li><strong>Option​ ​D ​is​ CORRECT.&nbsp;</strong>Because Fargate manages the servers and clusters of EC2 instances for AWS Batch jobs. Users do not need to worry about the details of compute resources.</li>\n\t<li><strong>Option​ E ​is​ ​incorrect.</strong> Because with Fargate, users cannot select instance types or the minimum number of vCPUs.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/batch/latest/userguide/fargate.html\">https://docs.aws.amazon.com/batch/latest/userguide/fargate.html</a></li>\n\t<li><a href=\"https://aws.amazon.com/batch/faqs/\">https://aws.amazon.com/batch/faqs/</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 59109,
            "question_id": 58188,
            "answers": [
              {
                "question_id": "58188",
                "choice": "<p>When a batch job needs access to particular instance configurations, including processors and GPUs.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "58188",
                "choice": "<p>When a batch job needs to be started fast at the initial scale-out of work.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "58188",
                "choice": "<p>When a batch job needs to use a compute environment based on a custom AMI and the instance type must be A1.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "58188",
                "choice": "<p>When users do not want to provision or scale clusters of virtual machines to run containers for AWS Batch jobs.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "58188",
                "choice": "<p>When a batch job needs the instance type to be C5 with multiple vCPUs.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28335,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>&nbsp;</p>\n\n<p>A company is running a MySQL RDS instance inside AWS. There is a new requirement for disaster recovery to export data from the AWS Production RDS instance to an on-premises data center. What is the secure and cost-effective way of performing this replication? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\n\n<ul>\n\t<li>Option A is incorrect&nbsp;because the HTTPS endpoint is incorrect as RDS uses another port. This option also does not use VPN and it is not the most secure way.</li>\n\t<li>Option B is incorrect because replicating via EC2 instances is very time consuming and very expensive cost-wise.</li>\n\t<li>Option C is incorrect because Data Pipeline is for batch jobs and not suitable for replicating the RDS DB to an on-premises database.</li>\n\t<li>Option D is CORRECT because it is feasible to set up the secure IPSec VPN connection between the on-premises server and AWS VPC. The mysqldump utility can be used to&nbsp;transfer the database.</li>\n</ul>\n\n<p>For more information on VPN connections, please visit the below URL:</p>\n\n<ul>\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html</a></li>\n</ul>\n\n<p><strong>Note:</strong></p>\n\n<p>AWS docs state that,&nbsp;<br />\nConfigure an egress rule for the external instance to operate as a Read Replica during the export. The egress rule will allow the MySQL Read Replica to connect to the MySQL DB instance during replication. Specify an egress rule that allows TCP connections to the port and IP address of the source Amazon RDS MySQL DB instance.<br />\n<br />\nPlease refer to the following links for more information.</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Exporting.NonRDSRepl.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Exporting.NonRDSRepl.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-ug.pdf</a>&nbsp;</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18452,
            "question_id": 28335,
            "answers": [
              {
                "choice": "<p>Configure the RDS instance as the master and enable replication over the open internet using a secure HTTPS endpoint to the on-premises server.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>RDS cannot replicate to an on-premises database server directly. Instead, first, configure the RDS instance to replicate to an EC2 instance with core MySQL, and then configure replication over a secure VPN/VPG connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a Data Pipeline that exports the MySQL data each night and securely downloads the data from an S3 HTTPS endpoint.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IPSec VPN connection between AWS VPC and the on-premise server. Use the mysqldump utility to transfer the database from the Amazon RDS database to the external MySQL database in the on-premises data center.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28336,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are setting up a video streaming service with the main components of the setup being S3, CloudFront, and Transcoder. Your video content will be stored on AWS S3, and it should only be viewed by the subscribers who have paid for the service. Your first job is to upload 10 videos to S3 and ensure that they are secure before you even begin to start thinking of streaming the videos. The 10 videos have just finished uploading to S3, so you now need to secure them with encryption at rest. Which of the following would be the best way to do this? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\n\n<p>There are two main considerations in this scenario: (1) the data in S3 should be encrypted &quot;at rest&quot;, and (2) only the authenticated users should be able to stream the video.</p>\n\n<ul>\n\t<li>Option A is incorrect because AWS CloudHSM is used to generate the user&#39;s own encryption keys on the AWS Cloud. It does not encrypt any data on S3 at rest.</li>\n\t<li>Option B is incorrect because, even though it encrypts the data at rest, storing the keys in the CloudFront for private access to the authenticated users is an invalid solution.</li>\n\t<li>Option C is incorrect because using the IAM approach is not scalable and safe.</li>\n\t<li>Option D is CORRECT because (a) it uses KMS keys for encrypting and decrypting the data, and (b) it ensures that only the authenticated users will have access to the videos by using the signed URLs on the CloudFront distribution.</li>\n</ul>\n\n<p>Please check the following references:</p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/#more-1038\" target=\"_blank\">https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/#more-1038</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18453,
            "question_id": 28336,
            "answers": [
              {
                "choice": "<p>Use AWS CloudHSM appliance with both physical and logical tamper detection and response mechanisms that trigger zeroization of the appliance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Encrypt your data using AES-256. After the object is encrypted, the encryption key you used needs to be stored on AWS CloudFront so that only authenticated users can stream the videos.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set an API flag, or check a box in the AWS Management Console, to have data encrypted in Amazon S3. Create IAM Users to access the videos from S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a KMS CMK to encrypt the files. Also, use signed URLs in a CloudFront distribution to serve&nbsp;the S3 contents.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28337,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You currently have 9 EC2 instances running in a Cluster Placement Group. All these nine instances were initially launched at the same time and seemed to be performing as expected. You decide that you need to add two new instances to the group.&nbsp;However, when you attempt to do this, you receive a &#39;capacity error.&#39; Which of the following actions will most likely fix this problem? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because to benefit from the enhanced networking, all the instances should be in the same Placement Group. Launching the new ones in a new Placement Group will not work in this case.</li>\r\n\t<li>Option B is CORRECT because the most likely reason for the &quot;Capacity Error&quot; is that the underlying hardware may not have the capacity to launch any additional instances on it. If the instances are stopped and restarted, AWS may move the instances to a hardware that has the capacity for all the requested instances.</li>\r\n\t<li>Option C is incorrect because there is no such limit on the number of instances in a Placement Group (however, you can not exceed your EC2 instance limit allocated to your account per region).</li>\r\n\t<li>Option D is incorrect because the capacity error is not related to the instance size and ensures that the instances are of the same size will not resolve the capacity error.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Cluster Placement Group</strong></p>\r\n\r\n<p>&nbsp;If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Restarting the instances may migrate them to hardware that has the capacity for all the requested instances.</p>\r\n\r\n<p><strong>Cluster Placement Groups</strong></p>\r\n\r\n<p>A cluster placement group is a logical grouping of instances within a single Availability Zone. A placement group can span peered VPCs in the same region.</p>\r\n\r\n<p>Cluster placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. The majority of the network traffic is between the instances in the group. To provide the lowest latency and the highest packet-per-second network performance for your placement group, choose an instance type supporting enhanced networking. For more information, see Enhanced Networking.</p>\r\n\r\n<p>We recommend that you launch the number of instances you need in the placement group in a single launch request and use the same instance type for all instances in the placement group. If you try to add more instances to the placement group later or try to launch more than one instance type in the placement group, you increase your chances of getting an insufficient capacity error.</p>\r\n\r\n<p>If you stop an instance in a placement group and then start it again, it still runs in the placement group. However, the start fails if there isn&#39;t enough capacity for the instance.</p>\r\n\r\n<p>If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group and try the launch again. Restarting the instances may migrate them to hardware that has capacity for all the requested instances.</p>\r\n\r\n<p><br />\r\nFor more information on this, please refer to the below URL</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong>&nbsp;</p>\r\n\r\n<p>In this scenario, we are discussing the insufficient capacity error happening within a placement group.<br />\r\nAs per AWS docs,</p>\r\n\r\n<p>&quot;If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Restarting the instances may migrate them to hardware that has capacity for all the requested instances.&quot;</p>\r\n\r\n<p>In our scenario, we already have 9 EC2 instances running on a placement group. When we tried to add 2 more to the group, we have encountered this error. So if we stop and restart all the instances, it will help resolve this issue as the restarting instances will migrate to a new hardware that will have the capacity for all the instances.<br />\r\n<br />\r\nFor more information, please refer to:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18454,
            "question_id": 28337,
            "answers": [
              {
                "choice": "<p>Create another placement group and launch new instances in that group. Make sure that both the placement groups are in the same subnet.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Stop and restart all the instances in the Placement Group and then try the launch again.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Request a capacity increase from AWS as you are initially limited to 10 instances per Placement Group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Make sure all the instances are the same size and then try the launch again.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28338,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has two batch processing applications that consume financial data about the day&#39;s stock transactions. Each transaction needs to be stored durably and the order of transactions needs to be guaranteed so that the billing and audit batch processing applications can process the data. The billing application firstly processes the transaction information and after several hours, the audit application access to the same data. After the transaction information for the day is processed, the information no longer needs to be stored. What is the best way to architect this application so that the above requirements are achieved? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<p>The main architectural considerations in this scenario are: (1) each transaction needs to be stored durably (no loss of any transaction), (2)&nbsp; they should be processed in serial order, (3) guaranteed delivery of each record to the audit and billing batch processing, and (4) the processing of the record by two application is done with a time gap of several hours.</p>\r\n\r\n<p>Based on the considerations above, it seems that we must use Amazon Kinesis Data Streams which enables real-time processing of streaming big data. It provides ordering of records and the ability to read and/or replay records in the same order to multiple Amazon Kinesis Applications. The Amazon Kinesis Client Library (KCL) delivers all records for a given partition key to the same record processor, making it easier to build multiple applications reading from the same Amazon Kinesis data stream (for example, to perform counting, aggregation, and filtering).</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because (a) the onus of ensuring that each message is copied to the audit queue is on the application, and (b) this option is not fail-proof. i.e. If the application fails to copy the message between the queue, there is no logic to put the message back to the billing queue.</li>\r\n\t<li>Option B is incorrect because even though it uses SQS, there is an overhead of ensuring that the message is processed properly by the billing and audit processes. When the billing process is processing the message, the message is unavailable for the audit process. Also, there is a possibility of processing the same record (message) multiple times by the instances processing it (there is no way to know if the record has been already processed).</li>\r\n\t<li>Option C is incorrect because it adds the overhead of delivery guarantee on the application itself. Also, the use of DynamoDB in this scenario is not a cost-effective solution.&nbsp;To store the transaction data in real-time data, Kinesis is a better choice.</li>\r\n\t<li>Option D is CORRECT because Amazon Kinesis is best suited for applications that need to process large real-time transactional records and have the ability to consume records in the same order a few hours later. For example, you have a billing application and an audit application that runs a few hours behind the billing application. Because Amazon Kinesis Data Streams stores data for up to 7 days, you can run the audit application up to 7 days behind the billing application.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on&nbsp;</strong><strong><strong>when Amazon Kinesis Data Streams and Amazon SQS should be used:</strong></strong></p>\r\n\r\n<p>AWS recommends Amazon Kinesis Data Streams for use cases with requirements that are similar to the following:</p>\r\n\r\n<ul>\r\n\t<li>Routing related&nbsp;records&nbsp;to the same&nbsp;record processor&nbsp;(as in streaming MapReduce). For example, counting and aggregation are simpler when all records for a given key are routed to the same record processor.</li>\r\n\t<li>Ordering of&nbsp;records. For example, you want to transfer log data from the application host to the processing/archival host while maintaining the order of log statements.</li>\r\n\t<li>Ability for multiple applications to consume the same stream concurrently. For example, you have one application that updates a real-time dashboard and another archives data to&nbsp;Amazon Redshift. You want both applications to consume data from the same stream concurrently and independently.</li>\r\n\t<li>Ability to consume&nbsp;records&nbsp;in the same order a few hours later. For example, you have a billing application and an audit application that runs a few hours behind the billing application. Because Amazon Kinesis Data Streams stores data for up to 7 days, you can run the audit application up to 7 days behind the billing application.</li>\r\n</ul>\r\n\r\n<p>AWS recommends Amazon SQS for use cases with requirements that are similar to the following:</p>\r\n\r\n<ul>\r\n\t<li>Messaging semantics (such as message-level ack/fail) and visibility timeout. For example, you have a queue of work items and want to track each item&#39;s successful completion independently. Amazon SQS tracks the ack/fail, so the application does not have to maintain a persistent checkpoint/cursor. Amazon SQS will delete asked messages and redeliver failed messages after a configured visibility timeout.</li>\r\n\t<li>Individual message delay. For example, you have a job queue and need to schedule individual jobs with a delay. With Amazon SQS, you can configure individual messages to have a delay of up to 15 minutes.</li>\r\n\t<li>Leveraging Amazon SQS&rsquo;s ability to scale transparently. For example, you buffer requests and the load changes as a result of occasional load spikes or the natural growth of your business. Because each buffered request can be processed independently, Amazon SQS can scale transparently to handle the load without any provisioning instructions from you.</li>\r\n</ul>\r\n\r\n<p><a href=\"https://aws.amazon.com/kinesis/data-streams/faqs/\" target=\"_blank\">https://aws.amazon.com/kinesis/data-streams/faqs/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18455,
            "question_id": 28338,
            "answers": [
              {
                "choice": "<p>Use SQS for storing the transaction messages. When the billing batch process consumes each message, have the application create an identical message and place it in a different SQS for the audit application to use several hours later.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use SQS for storing the transaction messages; when the billing batch process performs first and consumes the message, write the code in a way that does not remove the message after consumed, so it is available for the audit application several hours later. The audit application can consume the SQS message and remove it from the queue when completed.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the transaction information in a DynamoDB table. The billing application can read the rows while the audit application will read the rows then&nbsp;remove the data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Kinesis to store the transaction information. The billing application consumes data from the stream and then the audit application consumes the same data several hours later.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28339,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company is considering integrating its on-premises resources with AWS in a hybrid architecture without any security threats posed by the internet. Their goal is to run the customer-facing data collection processes in AWS. They have to transfer a huge volume of data from their on-premises environment to the EC2 instances running in an AWS VPC (with the data being stored in the volumes of the EC2 instances) daily using a high bandwidth connection which may save costs too. How can this be accomplished?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<p>In this question, the customer wants to transfer a large amount of data to VPC from the on-premises data center. The main architectural considerations are (1) the cost should be low, and (2) the data being transferred is new data every time.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect.&nbsp;Although setting up a VPN is a cost-effective solution, it may not have sufficient bandwidth for the data being transferred, especially since the data is new every time. Also, the data will be transferred over the internet. So, the new data adds to the unpredictability of the performance that the VPN connection would yield. So, the VPN connection may stay much longer than expected adding to the overall cost.</li>\r\n\t<li>Option B is CORRECT because (a) since it is a dedicated connection from on-premises data center to AWS, it takes out the unpredictable nature of the internet out of the equation, and (2) due to the high bandwidth availability, Direct Connect would most probably transfer the large amount of data quickly compared to VPN connection. Hence, it may well save the cost for the customer.</li>\r\n\t<li>Option C is incorrect because AWS Import/Export is not an ideal option since the data being transferred is new every time, since Import/Export is preferred mainly for first-time data migration and using VPN/Direct Connect later on.&nbsp;</li>\r\n\t<li>Option D is incorrect because it is the requirement that the data must be transferred to AWS, hence ruling out the option of leaving the data on-premise.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS direct connect, browse to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/directconnect/\" target=\"_blank\">https://aws.amazon.com/directconnect/</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:&nbsp;</strong>While I agree that the Direct Connect is costly, but compared to other options given, it is certainly the most viable. With the dedicated network connectivity and higher bandwidth, the data transfer would get done quicker than the internet. With Direct Connect, the initial setup cost would be more. But in the long run, it would be the most suitable solution even with regards to keeping the cost low.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18456,
            "question_id": 28339,
            "answers": [
              {
                "choice": "<p>Provision a VPN connection between the on-premise data center and the AWS region using the VPN section of a VPC.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest provisioning a Direct Connect connection between the on-premise data center and the AWS region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest using AWS import/export to transfer the TBs of data while synchronizing the new data as it arrives.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest leaving the data required for the application on-premise and use a VPN to query the on-premise database data from EC2 when required.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28340,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A multi-tier application is being hosted on a single EC2 instance in a VPC without an ELB. You have been instructed to set it up with separate SSL certificates for each tier. Which of the following would be the best method to achieve this while leaving the application running on a single EC2 instance?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>It can be useful to assign multiple IP addresses to an instance in your VPC to do the following.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>(1) Host multiple websites on a single server by using multiple SSL certificates on a single server and associating each certificate with a specific IP address.</p>\r\n\r\n<p>(2) Operate network appliances, such as firewalls or load balancers, that have multiple IP addresses for each network interface.</p>\r\n\r\n<p>(3) Redirect internal traffic to a standby instance if your instance fails by reassigning the secondary IP address to the standby instance.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because, as mentioned above, if you have multiple elastic network interfaces (ENIs) attached to the EC2 instance, each network IP can have a component running with a separate SSL certificate.</li>\r\n\t<li>Option B is incorrect because having separate rules in the security group as well as NACL does not mean that the instance supports multiple SSLs.</li>\r\n\t<li>Option C is incorrect because an EC2 instance cannot have multiple subnets.</li>\r\n\t<li>Option D is incorrect because the NAT address is not related to supporting multiple SSLs.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on Multiple IP Addresses, please refer to the link below.\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18457,
            "question_id": 28340,
            "answers": [
              {
                "choice": "<p>Create an EC2 instance that has multiple network interfaces with multiple elastic IP addresses.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an EC2 instance that has both an ACL and the security group attached to it and have separate rules for each IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an EC2 instance that has multiple subnets attached to it&nbsp;and each will have a separate IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an EC2 instance with a NAT address.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28341,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are working as a consultant for a company designing a new hybrid architecture to manage part of their application infrastructure in the cloud and on-premise. As part of the infrastructure, they need to transfer high amounts of data consistently. They require a low latency and high consistency traffic to AWS. The company is looking to keep costs as low as possible and is willing to accept slow traffic in the event of primary failure. Given these requirements, how would you design a hybrid architecture? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>AWS Direct Connect makes it easy to establish a dedicated network connection from your on-premises data center to AWS. i.e. You can establish private connectivity between AWS and the on-premises data center, which helps to reduce the overall network cost, increase bandwidth throughput, and provide a more consistent network experience than the internet-based connection.&nbsp;</p>\r\n\r\n<p>A VPN connection is a low-cost, appliance-based access to the AWS resources given to the on-premises resources via gateways. Compared to AWS Direct Connect, the VPN connection may experience slow connection speed and limited bandwidth due to unpredictability of the internet.</p>\r\n\r\n<p>Since cost is a factor for the backup and the company does not mind the reduced traffic, the backup option can a VPN connection instead of another direct connect solution.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is CORRECT because it sets up a Direct Connect as the primary connection that provides consistent bandwidth for transferring high amounts of data. In case of failure, it sets up a VPN which is a low-cost solution.</p>\r\n\r\n<p>Option B is incorrect because VPN (although set up as dual) does not provide a low latency connection as it still has network unpredictability, and consistency as the Direct Connect would do.</p>\r\n\r\n<p>Option C is incorrect because there is no automatic failover or redundancy in Direct Connect.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option D is incorrect because setting up two Direct Connect connections would be costly.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on AWS direct connect, browse to the below URL-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/directconnect/\" target=\"_blank\">https://aws.amazon.com/directconnect/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18458,
            "question_id": 28341,
            "answers": [
              {
                "choice": "<p>Provision a Direct Connect connection to an AWS region using a Direct Connect partner. Provision a VPN connection as a backup in the event of Direct Connect connection failure.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a dual VPN tunnel for private connectivity, which increases network consistency and reduces latency. The dual tunnel provides a backup VPN in the case of primary failover.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Provision a Direct Connect connection which has automatic failover and backup built into the service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Provision a Direct Connect connection to an AWS region using a Direct Connect provider. Provision a secondary Direct Connect connection as a failover.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49770,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company owns a large number of on-premises virtual machines managed in VMware vCenter. To plan the migration from local servers to AWS, you have installed AWS Discovery Connector in the VMware vCenter Server that helps collect information about the virtual machines. The Discovery Connector has already registered with the Application Discovery Service successfully. Which data can be discovered by the Discovery Connector? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answers​ ​&ndash;​ A, D</strong></p>\r\n\r\n<p>There are two ways of performing discovery and collecting data offered by Application Discovery Service which are Agentless discovery and Agent-based discovery. The reference can be found in&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Discovery Connector belongs to agentless discovery. It can collect static configuration and utilization data including CPU, RAM, and Disk I/O.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​&nbsp; Only the &#39;type&#39; of the hypervisor can be discovered and NOT the &#39;name&#39; of the hypervisor.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because Discovery Connector does not discover the time and date of the system.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Refer to the explanation in Option A.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong>:​ Because only AWS Application Discovery Agent can provide the running process data to the Application Discovery Service.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39638,
            "question_id": 49770,
            "answers": [
              {
                "choice": "<p>Average number of read and write I/O operations per second.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Name of the hypervisor used</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Date and time on the virtual machine.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Average free RAM expressed in MB.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The running process data on the local server.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28342,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A third-party auditor is being brought in to review security processes and configurations for all of a company&#39;s AWS accounts. Currently, the company does not use any on-premises identity provider. Instead, they rely on IAM accounts in each of their AWS accounts.&nbsp;Now the auditor needs read-only access to all AWS resources for each AWS account. The auditor has an IAM user in his AWS account. Given the requirements, what is the most secure and easiest method for architecting access for the security auditor? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\n\n<p>Option A is incorrect because creating an IAM User for each AWS account is an overhead and less preferred way than creating IAM Role.</p>\n\n<p>Option B is incorrect because the scenario says that the company does not have any on-premises identity provider. This method is not straightforward.</p>\n\n<p>Option C is CORRECT because it creates an IAM Role with all the necessary permission policies that&nbsp;allow the auditor to assume it while accessing the resources.</p>\n\n<p>Option D is incorrect because using the IAM Role with the required permissions is the preferred and more secure way of accessing the AWS resources than using the Amazon credentials. Also, this option does not use the Security Token Service that gives temporary credentials to log in. Hence this is a less secure way of accessing the AWS resources.</p>\n\n<p>For more information on IAM roles, please refer to the below URL-</p>\n\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18459,
            "question_id": 28342,
            "answers": [
              {
                "choice": "<p>Create an IAM user for each AWS account with read-only permission policies for the auditor, and disable each account when the audit is complete.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an on-premise AD server and enable SAML identity&nbsp;federation for single sign-on to each AWS account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM role with read-only permissions to all AWS services in each AWS account. Allow&nbsp;the auditor IAM user to assume the ARN role for each AWS account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a custom identity broker application that allows the auditor to use existing Amazon credentials to log into the AWS environments.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28343,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An auditor needs access to logs that record all the API events on AWS. The auditor only needs read-only access to the log files and does not need access to each AWS account. The company has multiple AWS accounts, and the auditor needs access to all the logs for all the accounts. What is the best way to configure access for the auditor to view event logs from all accounts? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>You can have CloudTrail deliver log files from multiple AWS accounts into a single Amazon S3 bucket. For example, you have four AWS accounts with account IDs 111111111111, 222222222222, 333333333333, and 444444444444, and you want to configure CloudTrail to deliver log files from all four of these accounts to a bucket belonging to account 111111111111. To accomplish this, complete the following steps in order:</p>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p>Turn on CloudTrail in the account where the destination bucket will belong (111111111111 in this example). Do not turn on CloudTrail in any other accounts yet.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Update the bucket policy on your destination bucket to grant cross-account permissions to CloudTrail.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Turn on CloudTrail in the other accounts you want (222222222222, 333333333333, and 444444444444 in this example). Configure CloudTrail in these accounts to use the same bucket belonging to the account that you specified in step 1 (111111111111 in this example).</p>\r\n\r\n\t<p>&nbsp;</p>\r\n\t</li>\r\n</ol>\r\n\r\n<p>The AWS CloudTrail service provides an option to deliver the log files for all the regions in a single S3 bucket. This feature is very useful when you need to access the logs related to all the resources in multiple regions for all the AWS accounts via a single S3 bucket. Please see the images below.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_odsufu.png\" style=\"height:170px; width:684px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_yvvdax.png\" style=\"height:219px; width:774px\" /></p>\r\n\r\n<p>Option A is incorrect because delivering the logs in multiple buckets is an unnecessary overhead. Instead, you can have CloudTrail deliver the logs to a single S3 bucket.</p>\r\n\r\n<p>Option B is incorrect because consolidated billing will not help the auditor to get the records of all the API events in AWS.&nbsp;</p>\r\n\r\n<p>Option C is incorrect because there is no consolidated logging feature in AWS CloudTrail.</p>\r\n\r\n<p>Option D is CORRECT because it delivers the logs pertaining to different AWS accounts to a single S3 bucket in the primary account and grants the auditor access to it.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>More information on this topic regarding CloudTrail:</p>\r\n\r\n<p>You can have CloudTrail deliver log files from multiple AWS accounts into a single Amazon S3 bucket. For example, if you have four AWS accounts with account IDs A, B, C, and D, and you can configure CloudTrail to deliver log files from all four of these accounts to a bucket belonging to account A. See the link below-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-receive-logs-from-multiple-accounts.html\" target=\"_blank\">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-receive-logs-from-multiple-accounts.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18460,
            "question_id": 28343,
            "answers": [
              {
                "choice": "<p>Configure the CloudTrail service in each AWS account, and make the logs delivered to an S3 bucket on each account, while granting the auditor permissions to the bucket via roles in the secondary accounts and a single primary IAM account that can assume a read-only role in the secondary AWS accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the CloudTrail service in the primary AWS account and configure consolidated billing for all the secondary accounts. Then grant the auditor access to the S3 bucket that receives the CloudTrail log files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the CloudTrail service in each AWS account and enable consolidated logging inside of CloudTrail.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the CloudTrail service in each AWS account and have the logs delivered to a single S3 bucket in&nbsp;a separate account. Provide the auditor to access only to this&nbsp;bucket.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28344,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An employee unknowingly keeps terminating EC2 instances on the production environment. You want to restrict the user from terminating the production instances or add an extra layer of defense before he tries to do that next time. Which of the following options are suitable? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A&nbsp;&amp; D</strong><br />\r\n<br />\r\nThe key point to this question is the &ldquo;extra layer of defence against terminating the instances&rdquo;.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because with tags you can explicitly deny an action. Check the following example:</li>\r\n</ul>\r\n\r\n<p>{<br />\r\n&quot;Sid&quot;: &quot;DenyDelete&quot;,<br />\r\n&quot;Action&quot;: [<br />\r\n&quot;ec2:TerminateInstances&quot;<br />\r\n],<br />\r\n&quot;Effect&quot;: &quot;Deny&quot;,<br />\r\n&quot;Resource&quot;: &quot;*&quot;,<br />\r\n&quot;Condition&quot;: {<br />\r\n&quot;StringLikeIfExists&quot;: {<br />\r\n&quot;ec2:ResourceTag/Production&quot;: &quot;true&quot;<br />\r\n}<br />\r\n}<br />\r\n}<br />\r\n<br />\r\nFrom the article below:<br />\r\n&ldquo;In some contexts, you may optionally choose to explicitly deny a group of users the ability to manage specific instances. Explicit denial policies are not generally required since IAM is deny-all by default.&nbsp;But the use of an explicit deny policy&nbsp;<strong>can provide an additional layer of protection</strong>&nbsp;since the presence of a deny statement will cause the user to be denied the ability to act&nbsp;<strong>even if another policy statement would have allowed it</strong>.&rdquo;&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/blogs/security/resource-level-permissions-for-ec2-controlling-management-access-on-specific-instances/\" target=\"_blank\">https://aws.amazon.com/blogs/security/resource-level-permissions-for-ec2-controlling-management-access-on-specific-instances/</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Option B is incorrect. While it starts correctly by tagging production instances, it does not use the production tag in the IAM policy. Besides, the IAM policy&nbsp;should contain an explicit deny instead of an implicit deny.</li>\r\n\t<li>Option C is incorrect because disabling MFA removes layers of protections rather than adds them.&nbsp;</li>\r\n\t<li>Option D is CORRECT because it ensures that an AWS MFA device authenticates the user before the employee can delete objects (termination protection for instances). The following condition can be added to the IAM policy:</li>\r\n</ul>\r\n\r\n<p>&quot;Condition&quot;: {&quot;Bool&quot;: {&quot;aws:MultiFactorAuthPresent&quot;: &quot;true&quot;}}</p>\r\n\r\n<p><br />\r\nFrom the article below:<br />\r\n&ldquo;You can also set conditions that require the use of SSL or MFA (multi-factor authentication). For example, you can&nbsp;<strong>require that a user has authenticated with an MFA device in order to be allowed to terminate an Amazon EC2 instance.</strong>&rdquo;</p>\r\n\r\n<p>For more information</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-policy-conditions\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-policy-conditions</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_configure-api-require.html#MFAProtectedAPI-resource-policies\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_configure-api-require.html#MFAProtectedAPI-resource-policies</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18461,
            "question_id": 28344,
            "answers": [
              {
                "choice": "<p>&nbsp;</p>\r\n\r\n<p>Tag the instances&nbsp;with a production-identifying tag and add resource-level permissions to the employee user with an explicit deny on the terminate API call to instances with the production tag.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>&nbsp;</p>\r\n\r\n<p>Tag the instances with a production-identifying tag. Give the IAM user an implicit deny on the EC2 terminate API call for all the EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the IAM policy on the user to require MFA before deleting EC2 instances and disable MFA access to the employee.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user should be authenticated with an MFA device in order to be allowed to terminate&nbsp;an Amazon EC2 instance.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 49775,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are an AWS solutions architect and in charge of a migration project from local servers to AWS. AWS Server Migration Service has been configured to replicate a large number of VMware virtual machines to EC2 AMI. SMS already helps generating CloudFormation templates during the migration of applications. You also manually created several CloudFormation templates to create AWS resources including EC2. You wish to use a service to manage the resources created by CloudFormation templates centrally. And users can choose certain products and deploy them quickly. The service should also integrate with IAM to provide access control. Which method is the best for you to take?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>AWS Service Catalog can help manage CloudFormation templates in portfolio and products. It also works with IAM to provide access control to the managed resources. Details can be found in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html\" target=\"_blank\">https://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Config cannot be used to manage resources by tags.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because Resource Access Manager is used to share resources with other IAM accounts. It is unsuitable for this scenario.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Because in Service Catalog, you can add a product and link it with a CloudFormation template. Using this method, all CloudFormation templates can be managed as products in a portfolio.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because AWS Resource Groups cannot group the CloudFormation templates. Users cannot create CloudFormation stacks based on the groups either.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39643,
            "question_id": 49775,
            "answers": [
              {
                "choice": "<p>Manage resources in AWS Config via tags. Create resources and provide access control based on tags.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure and manage all CloudFormation templates in AWS Resource Access Manager. Assign different permissions to IAM users or roles.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create portfolio and products in AWS Service Catalog. Use IAM permissions to grant users access to the portfolio.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create groups of CloudFormation templates in AWS Resource Groups. Assign related IAM permissions based on the group ARN.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28346,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has employees who need to run internal applications that access the company&#39;s AWS resources. These employees already have user credentials in the company&#39;s current identity authentication system, based on their roles, supported by SAML2.0. How should the SSO setup be designed?</p>\r\n\r\n<p>Choose 2 options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answers &ndash; B and C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because already a role-based setup is in place.</li>\r\n\t<li>Option B is CORRECT because (a) it creates a custom identity broker application for authenticating the users using their existing credentials, (b) it gets temporary access credentials using STS, and (3) it uses federated access for accessing the AWS resources.</li>\r\n\t<li>Option C is CORRECT because (a) it creates a custom identity broker application for authenticating the users using their existing credentials, and (b) it uses AssumeRole API for accessing the resources using a temporary role.</li>\r\n\t<li>Option D is INCORRECT as the DecodeAuthorizationMessage API call only decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request.</li>\r\n</ul>\r\n\r\n<p><strong>More information on AssumeRole and GetFederatedToken:</strong></p>\r\n\r\n<p>Assume Role - Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) that you can use to access AWS resources that you might not normally have access to. Typically, you use&nbsp;AssumeRole&nbsp;for cross-account access or federation.</p>\r\n\r\n<p>For more information, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html\" target=\"_blank\">http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html</a></li>\r\n</ul>\r\n\r\n<p>GetFederationToken - Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network</p>\r\n\r\n<p>For more information, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html\" target=\"_blank\">http://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18463,
            "question_id": 28346,
            "answers": [
              {
                "choice": "<p>Create an IAM user to share based on employee roles in the company.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a custom identity broker application that authenticates the employees using the existing system, uses the GetFederationToken API call and passes a permission policy to gain temporary access credentials from STS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a custom identity broker application that authenticates employees using the existing system and uses the AssumeRole API call to gain temporary, role-based access to AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an AD server that synchronizes from the company&#39;s current Identity Provider and configures SAML based Single-Sign-On which will then use the DecodeAuthorizationMessage API call to generate credentials for the employees.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28347,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have created a mobile application that serves data stored in an Amazon DynamoDB table. Your primary concern is scalability of the application and ability&nbsp;to handle millions of visitors and data requests. As part of your application, the customer needs access to the data located in the DynamoDB table. Given the application requirements, what would be the best method to design the application? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\n\n<p>The AssumeRolewithWebIdentity returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider, such as Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.</p>\n\n<p>Out of options C and D, Option C is invalid because S3 is used to host static websites and not server side language websites.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_qwvkc5.png\" style=\"height:450px; width:600px\" /></p>\n\n<p>&nbsp;</p>\n\n<p>For more information on AssumeRolewithWebIdentity, please visit the below URL-</p>\n\n<p><a href=\"http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html\" target=\"_blank\">http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html</a></p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18464,
            "question_id": 28347,
            "answers": [
              {
                "choice": "<p>Configure an on-premise AD server utilizing SAML 2.0 to manage the application users inside the on-premise AD server and write code that authenticates against the LD serves. Grant a role assigned to the STS token to allow the end-user to access the required data in the DynamoDB table.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Let the users sign into the app using a third-party identity provider such as Amazon, Google, or Facebook. Use the AssumeRoleWith API call to assume the role containing the proper permissions to communicate with the DynamoDB table. Write the application in JavaScript and host the static webpage&nbsp;in an S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Let the users sign into the app using a third-party identity provider such as Amazon, Google, or Facebook. Use the AssumeRoleWithWebIdentity API call to assume the role containing the proper permissions to communicate with the DynamoDB table. Write the application in a server-side language using the AWS SDK and host the application in an S3 bucket for scalability.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Let the users sign in to the app using a third-party identity provider such as Amazon, Google, or Facebook. Use the AssumeRoleWithWebIdentity API call to assume the role containing the proper permissions to communicate with the DynamoDB table. Write the application in JavaScript and host the static webpage in an S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 52246,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Singapore-based College is closed due to covid 19. College wants to continue Online classes. They are also looking for a solution to offer college-based applications/software/Labs to students easily. What device-agnostic solution for all college students will you suggest?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because using Amazon WorkSpace is not the right solution in this case.</li>\r\n\t<li><strong>Option B is Correct</strong> because Amazon AppStream offers a desktop-based application through streaming. Price is based on a monthly fee per streaming user and stream resource required for provisioning.</li>\r\n\t<li><strong>Option C is incorrect</strong> because &nbsp;Amazon WorkSpace is not the right solution in this case.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the hourly fee&nbsp;per streaming user is the wrong statement here.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/appstream2/pricing/?nc=sn&amp;loc=4\" target=\"_blank\">https://aws.amazon.com/appstream2/pricing/?nc=sn&amp;loc=4</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-to-provide-equitable-access/\" target=\"_blank\">https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-</a><a href=\"https://aws.amazon.com/blogs/publicsector/fife-school-districts-use-amazon-appstream-2-0-to-provide-equitable-access/\">to-provide-equitable-access/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42084,
            "question_id": 52246,
            "answers": [
              {
                "choice": "<p>You can suggest using Amazon AppStream 2.0 in VPC. Amazon&nbsp; AppStream 2.0 price is based on a monthly fee per streaming user and stream resource required for provisioning. Students can access the application through the Amazon WorkSpace.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can suggest using Amazon AppStream 2.0 in VPC. Amazon AppStream 2.0 price is based on a monthly fee per streaming user and stream resource required for provisioning. Students can access the application through the browser in their personal system.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can suggest to use Amazon WorkSpace and run them in always ON mode.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can suggest using Amazon AppStream 2.0. Amazon AppStream 2.0 price is based on an hourly fee per streaming user and stream resource required for provisioning. Students can access the application through the browser in their personal system.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28349,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer&rsquo;s end. However, the customer cannot connect from EC2 instances inside its VPC to servers residing in its data center.</p>\r\n\r\n<p>How can this be resolved? (Choose 2 answers).</p>\r\n\r\n<p>&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answers - B &amp; E</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because adding an option of VPN is unnecessary.</li>\r\n\t<li>Option B is CORRECT because VGW is the other side of the connection (on the AWS side) and the route propagation needs to be enabled for the Direct Connect to work.</li>\r\n\t<li>Option C is incorrect because there is no such configuration in the Virtual Private Gateway.</li>\r\n\t<li>Option D is incorrect because there is no &ldquo;route&rdquo; command available on the instances in the VPC.</li>\r\n\t<li>Option E is correct because to advertise prefixes to Amazon, for&nbsp;<strong>Prefixes you want to advertise</strong>, enter the IPv4 CIDR destination addresses (separated by commas) to which traffic should be routed over the virtual interface. ( under Additional Settings )\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/routing-and-bgp.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/routing-and-bgp.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18466,
            "question_id": 28349,
            "answers": [
              {
                "choice": "<p>Add a route to the route table with an IPsec VPN connection as the target.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable route propagation to the Virtual Private Gateway (VGW).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Open the port 80 in the security group of the Virtual Private Gateway (VGW).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the route table of all Instances using the &lsquo;route&rsquo; command.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enter&nbsp;the IPv4 destination addresses for routing the traffic over VGW.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28350,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are setting up a website for a small company. This website serves up images and is very resource intensive. You have decided to serve up the images using Cloudfront. There is a requirement though&nbsp;the content should be served up using a custom domain and should work with https.</p>\r\n\r\n<p>What can you do to ensure this requirement is fulfilled?</p>\r\n\r\n<p>Select 2 options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B and C</p>\r\n\r\n<p>Custom SSL certificate support lets you deliver content over HTTPS using your own domain name and your own SSL certificate. This gives visitors to your website the security benefits of CloudFront over an SSL connection that uses your own domain name in addition to lower latency and higher reliability.<br />\r\nNote: Please note that some older browsers do not support SNI and will not be able to establish a connection with CloudFront to load the HTTPS version of your content.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/cloudfront/custom-ssl-domains/\">https://aws.amazon.com/cloudfront/custom-ssl-domains/</a></li>\r\n</ul>\r\n\r\n<p>Option C is correct.&nbsp;If we want to use our own domain name, we need to use Amazon Route&nbsp;53 to create an alias record that points to our CloudFront distribution.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html</a></li>\r\n</ul>\r\n\r\n<p>Option A is incorrect because a custom SSL certificate or third-party certificate can not be configured in Route53.</p>\r\n\r\n<p>Option D is incorrect because Origin Access identity(OAI) does not deal with custom SSL. It is only used to ensure that the origin is accessible with CloudFront distribution only.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Custom SSL Domains:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>AWS Cloudfront can use IAM certificates.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Reference Link:&nbsp;</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-custom-certificate/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-custom-certificate/</a></p>\r\n\r\n<p><br />\r\nAlso, there is a discussion forum on the same topic &quot;&quot;ssl certificate IAM&quot; in the Amazon CloudFront Discussion Forum&quot;.&nbsp;</p>\r\n\r\n<p>It is helpful in understanding this topic further.</p>\r\n\r\n<p><br />\r\nFor more information on CloudFront custom SSL domains, please visit the below URL-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/cloudfront/custom-ssl-domains/\" target=\"_blank\">https://aws.amazon.com/cloudfront/custom-ssl-domains/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18467,
            "question_id": 28350,
            "answers": [
              {
                "choice": "<p>You must provision and configure your own SSL certificate in Route 53 and associate it to your CloudFront distribution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You must provision Server Name Indication (SNI) Custom SSL for your CloudFront Distribution.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You must provision and configure an ALIAS in Route 53 and associate it to your CloudFront distribution.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You must create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket where the images are stored.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 52247,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is developing a Serverless application with Lambda Proxy Integration in API Gateway. Caching is also used for the Rest APIs. Your company is worried about the security of the APIs. Which of the following security considerations should you&nbsp;NOT recommend for your application? (Select TWO).</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: B and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Incorrect</strong> as CloudTrail helps in logging the user and API Activity.</li>\r\n\t<li><strong>Option B is Correct </strong>because AWS Inspector is used for EC2 and cannot be used to inspect API Gateway.</li>\r\n\t<li><strong>Option C is Incorrect</strong> because creating Private Rest APIs and using CloudWatch logs or Amazon Kinesis Data Firehose helps with the logging and security.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>Option D is Incorrect</strong> because implementing Least Privilege is the right security strategy.</li>\r\n\t<li><strong>Option E is Correct</strong> because JWTs are used for restricting client access to your APIs and cannot be used to encrypt cache.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/security.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/security.html</a></li>\r\n\t<li><a href=\"https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf\" target=\"_blank\">https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 42085,
            "question_id": 52247,
            "answers": [
              {
                "choice": "<p>Suggest setting up API and user activity logging with AWS CloudTrail.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest setting up AWS Inspector to perform security assessments on the Rest APIs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest creating private Rest APIs and using CloudWatch Logs or Amazon Kinesis Data Firehose to log requests to your APIs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use IAM policies to implement least privilege access for creating, reading, updating, or deleting Rest APIs in API Gateway.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Suggest using JSON Web Tokens (JWTs) for encrypting cache.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 52248,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Japan-based fintech company is running applications in AWS. Those are mission-critical applications, and they want to analyze the application logs using Amazon Redshift. The applications forward the logs to a Kinesis Data Firehose. What do you suggest to send the records from Kinesis Data Firehose to Redshift?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is Correct</strong> because a Kinesis Firehose Delivery Stream can directly configure Amazon Redshift as its destination.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong>&nbsp;because LOAD is not a valid command to move the data to Amazon Redshift.</li>\r\n\t<li><strong>Option C is incorrect</strong> because SQS cannot be used to send the data from Kinesis Firehose to Amazon Redshift.</li>\r\n\t<li><strong>Option D is incorrect</strong> because Lambda cannot be used to send the data from Kinesis Firehose to Amazon Redshift.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-redshift\" target=\"_blank\">https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-redshift</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 79568,
            "question_id": 52248,
            "answers": [
              {
                "question_id": "52248",
                "choice": "<p>Directly configure Amazon Redshift as the destination of the Kinesis Data Firehose Delivery Stream.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "52248",
                "choice": "<p>Use Amazon S3 to store raw data and send the data to Amazon Redshift using Load Command.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52248",
                "choice": "<p>Directly send the data to Amazon Redshift using an SQS queue.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "52248",
                "choice": "<p>Directly send the data to Amazon Redshift using a custom Lambda fuction.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28352,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your supervisor tells you of&nbsp;a client who needs a two-tier web application that is&nbsp;publicly accessible and configured on AWS. The most important requirement is that MySQL must be used as the database, and it must be configured at the client&#39;s location in the most secure fashion. Which of the following solutions would be the best to ensure&nbsp;that the client&rsquo;s requirements are met?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>In this scenario, the main architectural consideration is that the database should remain on the client&#39;s data center.&nbsp;Since the database should not be hosted on the cloud, you cannot put the database in the public&nbsp;subnet in AWS.</p>\r\n\r\n<ul>\r\n\t<li>Option A is correct&nbsp;because it puts the application servers in the public subnet ( because it should be publicly accessible ) and keeps the database server at the client&#39;s data center. This is also a valid two-tiered architecture.</li>\r\n\t<li>Option B is INCORRECT because VPC peering cannot establish the connection between on-premises and AWS VPC.</li>\r\n\t<li>Option C is INCORRECT because the database cannot be on the public subnet. It is rather located at the client&#39;s data center as per the question.</li>\r\n\t<li>Option D is INCORRECT because the database cannot be on the public subnet due to the posed security risk (against the question&#39;s requirements).</li>\r\n</ul>\r\n\r\n<p>The best option is to create a VPN connection for securing traffic, as shown below.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_j0vgh8.png\" style=\"height:345px; width:600px\" /></p>\r\n\r\n<ul>\r\n\t<li>For more information on VPN connections, please visit the below URL-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18469,
            "question_id": 28352,
            "answers": [
              {
                "choice": "<p>Build the application server on a public subnet and the database at the client&rsquo;s data center. Connect them with a VPN connection that uses IPsec.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Build the application server on the private subnet and the database at the client&#39;s data center. Connect them with a VPC peering connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Build the application server on a private subnet and the database on the public subnet with a NAT instance between them.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Build the application server on the private subnet and the database on the public subnet with a secure SSH connection to the public subnet from the client&#39;s data center.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28353,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Regarding encryption on data stored on your databases, namely Amazon RDS, which of the following statements is true? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Tip for the exam:&nbsp;You can encrypt your Amazon RDS instances and snapshots at rest by enabling the encryption option for your Amazon RDS DB instance (only certain EC2 instance types support encryption, more information is given below). Data that is encrypted at rest includes the underlying storage for a DB instance, its automated backups, Read Replicas, and snapshots.</p>\r\n\r\n<p>Option A is incorrect because the RDS instance encryption can be done through the AWS console.</p>\r\n\r\n<p>Option B is CORRECT because once the encryption is enabled, its automated backups, read replicas, and snapshots are automatically encrypted without the need for any additional settings.</p>\r\n\r\n<p>Option C is incorrect because no additional configurations need to be made from the client side, once the encryption is enabled.</p>\r\n\r\n<p>Option D is incorrect because, as mentioned above, the snapshots get automatically encrypted once the encryption is turned-on on the RDS instance.</p>\r\n\r\n<p>For more information on RDS encryption, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html</a></p>\r\n\r\n<p>See the list of instance types that support the encryption-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Availability\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Availability</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18470,
            "question_id": 28353,
            "answers": [
              {
                "choice": "<p>Encryption cannot be enabled on RDS instances using the AWS console.&nbsp;</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Encryption can be enabled on RDS instances to encrypt the underlying storage.&nbsp;This will, by default, also encrypt snapshots as they are created. No additional configuration needs to be made on the client-side for this to work.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Encryption can be enabled on RDS instances to encrypt the underlying storage, and this will by default also encrypt snapshots as they are created. However, some additional configuration needs to be made on the client-side for this to work.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Encryption can be enabled on RDS instances to encrypt the underlying storage, but you cannot encrypt snapshots as they are created.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45467,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company has built a workload management solution for a deepwater drilling company. The application sends the workload detail before each shift starts. Due to the recent change in the regulations, there has to be a worklog file that needs to be sent to each Shift Manager at the time of shift start. As per the requirements, the file can only be accessed by the targeted user and it should only be allowed to access within a given shift timeline and needs to be password protected as well. Because there is a very short deadline, the management has tasked you to come up with a reliable, secure and cost-effective solution.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT</strong> because bucket policy and static web hosting will not be enough to cater to all the requirements like restricted time-based access.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because Workdocs supports features to share restricted, time-based files. And with the downloadable clients, it would be easy for the users to access those files.</li>\r\n\t<li><strong>Options C and D are INCORRECT</strong>. Although it is possible to build a solution with the given requirements, it would be a waste of resources to build a custom application that can already be served with AWS Workdocs.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35474,
            "question_id": 45467,
            "answers": [
              {
                "choice": "<p>Use S3 to store the files inside individual folders for shift managers in a single bucket. Enable the S3 Website Hosting and control the access via bucket policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon WorkDocs to share files with shift managers via email. Set the expiration date and password on the link.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Upload the files to EBS and build an application which can run on EC2 to share the files with AWS Simple Email Service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Upload the files to S3 and develop a custom application which can be hosted on S3. Use the AWS Cognito to allow the restricted, time-based access.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28355,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your security officer has told you that you need to tighten up the logging of all events that occur on your AWS account. He wants to be able to access all events that occur on the account across all regions quickly and in the simplest possible manner. He also wants to make sure that he is the only person who can access these events in the most secure way possible. Which of the following would be the best solution to assure his requirements are met? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The main points to consider in this scenario is: (1)&nbsp; the security officer needs to access all events that occur on the account <strong>across all the regions</strong>, and (2) only that security officer should have the access.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is CORRECT because it configures only one S3 bucket for all the CloudTrail log events on the account across all the regions. It also restricts access to the security officer only via the bucket policy. See the images below:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_yw6lzg.png\" style=\"height:214px; width:857px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_vkaauy.png\" style=\"height:276px; width:969px\" /></p>\r\n\r\n<p>Option B is incorrect because it uses Amazon Glacier vaults, an archival solution and is not used to store the CloudTrail logs.</p>\r\n\r\n<p>Option C is incorrect because sending the API calls to CloudWatch is unnecessary. Also, notifying the security officer via email is not a good nor a secure architecture.</p>\r\n\r\n<p>Option D is incorrect because CloudTrail provides an option where are all the logs get delivered to a single S3 bucket. Putting all the logs in separate buckets is an overhead .</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on AWS CloudTrail</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain events related to API calls across your AWS infrastructure. CloudTrail provides a history of AWS API calls for your account, including API calls made through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. This history simplifies security analysis, resource change tracking, and troubleshooting.</p>\r\n\r\n<p>You can design CloudTrail to send all logs to a central S3 bucket.</p>\r\n\r\n<p>For more information on CloudTrail, please visit the below URL-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/cloudtrail/\" target=\"_blank\">https://aws.amazon.com/cloudtrail/</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18472,
            "question_id": 28355,
            "answers": [
              {
                "choice": "<p>Use CloudTrail to log all events to one S3 bucket. Make this S3 bucket only accessible by your security officer with a bucket policy that restricts access to his user only and adds MFA to the policy for a further security level.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudTrail to log all events to an Amazon Glacier Vault. Make sure the vault access policy only grants access to the security officer&#39;s IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudTrail to send all API calls to CloudWatch and send an email to the security officer every time an API call is made. Make sure the emails are encrypted.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudTrail to log all events to a separate S3 bucket in each region as CloudTrail cannot write to a bucket in a different region. Use MFA and bucket policies on all the different buckets.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28356,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have created a temporary application that accepts image uploads, stores them in S3, and records information about the image in RDS. After building this architecture and accepting images for the duration required, it&#39;s time to delete the CloudFormation template. However, your manager has informed you that the RDS data needs to be stored and the S3 bucket with the images needs to remain for archival reasons. Your manager has also instructed you to ensure that the application can be restored by a CloudFormation template and run next year during the same period.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Knowing that when a CloudFormation template is deleted, it will remove the resources it created.&nbsp;What is the best method to achieve the desired goals? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The main points in this scenario are: even if the CloudFormation stack is deleted,&nbsp; (1) the RDS data needs to be stored, and (2) the S3 bucket with the images should remain (not be deleted).</p>\r\n\r\n<p>Option A is incorrect because even if the images are backed up to another bucket, the original bucket would be deleted if the CloudFormation stack is deleted. One of the requirements is to retain the S3 bucket.</p>\r\n\r\n<p>Option B is incorrect because the DeletionPolicy attribute for RDS should be <em>snapshot</em>, not <em>retain. </em>After all,&nbsp;with <em>snapshot </em>option, the backup of the RDS instance would be stored in the form of snapshots (which is the requirement). With <em>retain </em>option, CF will keep the RDS instance alive which is unwanted.</p>\r\n\r\n<p>Option C is incorrect because the DeletionPolicy of the S3 bucket should be <em>retain</em>, not <em>snapshot</em>.</p>\r\n\r\n<p>Option D is CORRECT because it correctly sets the DeletionPolicy of <em>retain </em>on the S3 bucket and <em>snapshot </em>on the RDS instance.</p>\r\n\r\n<p><strong>More information on DeletionPolicy on CloudFormation</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>DeletionPolicy options include:</p>\r\n\r\n<ul>\r\n\t<li><strong>Retain</strong>:&nbsp;You retain the resource in the event of a stack deletion.</li>\r\n\t<li><strong>Snapshot</strong>:&nbsp;You get a snapshot of the resource before it&rsquo;s deleted. This option is available only for resources that support snapshots.</li>\r\n\t<li><strong>Delete</strong>:&nbsp;You delete the resource along with the stack. This is the default outcome if you don&rsquo;t set a DeletionPolicy.</li>\r\n</ul>\r\n\r\n<p>AWS Document says:</p>\r\n\r\n<p>To keep or copy resources when you delete a stack, you can specify either the Retain or Snapshot policy options.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>With the DeletionPolicy attribute, you can preserve or (in some cases) backup a resource when its stack is deleted. You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy attribute, AWS CloudFormation deletes the resource by default.</p>\r\n\r\n<p>&nbsp;To keep a resource when its stack is deleted, specify Retain for that resource. You can use retain for any resource. For example, you can retain a nested stack, Amazon S3 bucket, or EC2 instance so that you can continue to use or modify those resources after you delete their stacks.</p>\r\n\r\n<p>Note</p>\r\n\r\n<p>If you want to modify resources outside of AWS CloudFormation, use a retain policy and then delete the stack. Otherwise, your resources might get out of sync with your AWS CloudFormation template and cause stack errors.</p>\r\n\r\n<p>For resources that support snapshots, such as AWS::EC2::Volume, specify Snapshot to have AWS CloudFormation create a snapshot before deleting the resource.</p>\r\n\r\n<p>For more information on Cloudformation deletion policy, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18473,
            "question_id": 28356,
            "answers": [
              {
                "choice": "<p>Enable S3 bucket replication on the source bucket to a destination bucket to maintain a copy of all the S3 objects, set the deletion policy for the RDS instance to snapshot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For both the RDS and S3 resource types on the CloudFormation template, set the DeletionPolicy to Retain.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set the DeletionPolicy on the S3 resource to snapshot and the DeletionPolicy on the RDS resource to snapshot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set the DeletionPolicy on the S3 resource declaration in the CloudFormation template to retain, set the RDS resource declaration DeletionPolicy to snapshot.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 44738,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A software team builds up a feature that needs a new RESTful endpoint that returns greetings to customers. The endpoint contains several path variables and query string parameters. This HTTP endpoint is supposed to be hit millions of times per month. However, the hit rate may change dramatically. The team decides to use API gateway/lambda to save some cost. The team needs to deploy the feature quickly. However, the team members have little experience with lambda. Which below options CAN NOT help the team? Select 2.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; C, D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>The feature development is under time pressure. So we should find the options that make things unnecessarily complicated. One thing to note is that this question asks for the options that CAN NOT help.</p>\r\n\r\n<p>To build an API with Lambda integrations, either Lambda proxy integration or Lambda custom integration can be used. (<a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html</a>):</p>\r\n\r\n<p>In Lambda proxy integration, the input to the integrated Lambda function can be expressed as any combination of request headers, path variables, query string parameters, and body. In addition, the Lambda function can use API configuration settings to influence its execution logic. <strong>For an API developer, setting up a Lambda proxy integration is simple. Other than choosing a particular Lambda function in a given region, you have little else to do. </strong>API Gateway configures the integration request and integration response for you.</p>\r\n\r\n<p>In Lambda custom integration, you must ensure that input to the Lambda function is supplied as the integration request payload. This implies that you, as an API developer, must map any input data the client supplied as request parameters into the proper integration request body. You may also need to translate the client-supplied request body into a format recognized by the Lambda function.</p>\r\n\r\n<p>According to the above, the simpler way is to use Lambda proxy integration. The below is an example when creating a resource in API gateway:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q4.jpg\" style=\"height:405px; width:700px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because the &ldquo;microservice-http-endpoint&rdquo; blueprint can help build the whole system quickly, which is also straightforward to use. Refer to&nbsp;<a href=\"https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example-configure-event-source_1.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example-configure-event-source_1.html </a>on how to use an API gateway/Lambda blueprint.</li>\r\n\t<li>Option B is incorrect: Because Lambda proxy integration is simpler for API to integrate with Lambda.</li>\r\n\t<li>Option C is CORRECT: Because Lambda custom integration has introduced unnecessary complicity. Considering the limited time, it is not a proper way and brings less help on the project.</li>\r\n\t<li>Option D is CORRECT: Although lambda authorizer can help with the authorization, it is not required in this case. It has added extra effort to the project and is not a necessary step either.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34749,
            "question_id": 44738,
            "answers": [
              {
                "choice": "<p>In the Lambda console, choose a blueprint such as &ldquo;microservice-http-endpoint&rdquo; to create a lambda-microservice under the selected API.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Build an API gateway with a proxy resource for a Lambda function. This can be done by selecting the &ldquo;Configure as proxy resource&rdquo; option when creating an API resource.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the API Gateway console to build an API that enables a client to call Lambda functions through the Lambda custom integration. Lambda custom integration is very simple to use, and the user has little else to do except choosing a particular Lambda function in a given region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Implement a lambda authorizer for the API gateway to grant permissions. A Lambda authorizer uses bearer token authentication strategies, such as OAuth or SAML, which secures access to the API gateway and back-end lambda.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28358,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are launching your first ElastiCache cache cluster and start using Memcached. Which of your following requirement is NOT supported by Memcached?&nbsp;Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Option B is CORRECT because it is Redis, not Memcached, which supports advanced/complexdata types such as strings, hashes, lists, sets, sorted sets, and bitmaps.</p>\r\n\r\n<p>Options A, C and D are all incorrect because these are the main features of Memcached.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For the exam, it is very important to remember the differences between Memcached and Redis. Both are excellent solutions, but used for different scenarios. Please see the notes given below by the AWS documentation:&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Choose Memcached if the following apply to your situation:</strong></p>\r\n\r\n<ul>\r\n\t<li>You need the simplest model possible.</li>\r\n\t<li>You need to run large nodes with multiple cores or threads.</li>\r\n\t<li>You need the ability to scale out/in, adding and removing nodes as demand on your system increases and decreases.</li>\r\n\t<li>You need to cache objects, such as a database.</li>\r\n</ul>\r\n\r\n<p><strong>Choose Redis 2.8.x or Redis 3.2.4 (non-clustered mode) if the following apply to your situation:</strong></p>\r\n\r\n<ul>\r\n\t<li>You need complex data types, such as strings, hashes, lists, sets, sorted sets, and bitmaps.</li>\r\n\t<li>You need to sort or rank in-memory data-sets.</li>\r\n\t<li>You need persistence of your key store.</li>\r\n\t<li>You need to replicate your data from the primary to one or more read replicas for read-intensive applications.</li>\r\n\t<li>You need automatic failover if your primary node fails.</li>\r\n\t<li>You need publish and subscribe (pub/sub) capabilities&mdash;to inform clients about events on the server.</li>\r\n\t<li>You need backup and restore capabilities.</li>\r\n\t<li>You need to support multiple databases.</li>\r\n</ul>\r\n\r\n<p>For more information on the various caching engines, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.Uses.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/SelectEngine.Uses.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18475,
            "question_id": 28358,
            "answers": [
              {
                "choice": "<p>Your&nbsp;ability to scale your cache horizontally as you grow.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use more advanced data types, such as lists, hashes, and sets.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Your need for as&nbsp;simple a caching model as possible.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Object caching is your primary goal to offload your database.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28359,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A new client may use your company to move some of their existing Data Center applications and infrastructure to AWS. You need to provide an initial scope to this possible new client. One of the things you notice concerning the existing infrastructure is that it has a few legacy applications that you are almost certain will not work on AWS. Which of the following would be the best strategy to employ regarding the migration of these legacy applications? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because there is some legacy application that will not work on the AWS platform. So creating VPC for such applications will not be possible.</li>\r\n\t<li>Option B is incorrect because the scenario explicitly mentions that there are some components of the application (legacy part) that will not work with AWS. So, it is highly presumptuous that the legacy application can be run by an AWS Machine Image (legacy application may consist of more than just AMIs).</li>\r\n\t<li>Option C is CORRECT because it uses a hybrid approach - where the legacy application stays on-premises. It should definitely work as the remaining infrastructure would be on AWS. The communication between the two infrastructures would be taken care of by establishing a VPN connection. This is certainly the most viable, time, and cost-saving solution among the given options.</li>\r\n\t<li>Option D is incorrect because it is the least feasible solution. First of all, de-commissioning the legacy application may not be possible for the client, especially when the scenario says that the legacy application will almost surely not work on AWS. Still, even if they agree, it would be a big impact on the client in terms of time, cost, and efforts to re-architect the solution to replace the legacy application.</li>\r\n</ul>\r\n\r\n<p><strong>More information on the hybrid setup:</strong></p>\r\n\r\n<p>The best option is to have a dual-mode wherein you have the legacy apps running on-premise and start migrating the apps which have compatibility in the cloud. Have a VPN connection from the on-premise to the cloud for ensuring communication can happen from each environment to the other.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_dg47an.png\" style=\"height:600px; width:600px\" /></p>\r\n\r\n<p>For the full fundamentals of AWS networking options, please visit the URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/\" target=\"_blank\">https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18476,
            "question_id": 28359,
            "answers": [
              {
                "choice": "<p>Create two VPCs. One containing all the legacy applications and the other containing all the other applications. Make a connection between them with VPC peering.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Move the legacy applications onto AWS first before you build any infrastructure. There is sure to be an AWS Machine Image that can run this legacy application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a hybrid cloud by configuring a VPN tunnel to the on-premises location of the Data Center.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Convince the client to look for another solution by de-commissioning these applications and seeking new ones that will run on AWS.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 44739,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A very big company has provided financial consulting services to end-users. It uses the traditional MySQL database inside EC2 t2.medium instances which mainly deal with legacy services. As a business grows, read contention is becoming more and more frequent for the database. The AWS architect suggests using Aurora to scale as it is much cheaper and provides great read scalability. How would you use Aurora to scale up and ease the read contention issue? (Select THREE.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B, C, E</strong></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>Amazon Aurora can be used with the MySQL DB instance to take advantage of the read scaling capabilities of Amazon Aurora and expand the read workload for the MySQL DB instance. To use Aurora to read scale the MySQL DB instance, create an Amazon Aurora MySQL DB cluster and make it a replication slave of your MySQL DB instance. This applies to an Amazon RDS MySQL DB instance, or a MySQL database running external to Amazon RDS.</p>\n\n<p>Please refer to <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf</a></p>\n\n<p>One thing to note is that Aurora has the concept of DB cluster and can scale up to 15 read replicas. The below is a screenshot of when DB cluster identifier is defined:</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_aws_q5.jpg\" style=\"height:484px; width:750px\" /></p>\n\n<ul>\n\t<li>Option A is incorrect: Because it is unnecessary to use db.r5.16xlarge which is not cost-efficient. Also, Multi-AZ deployment is for availability instead of scalability.</li>\n\t<li>Option B is CORRECT: Because an Amazon Aurora MySQL DB cluster needs to be set up first so that the source MySQL database will use its endpoint.</li>\n\t<li>Option C is CORRECT: Because when replication starts, it is important to monitor if the data is successfully synchronized. This is also stated in<a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf\" target=\"_blank\"> https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf</a></li>\n\t<li>Option D is incorrect: Aurora can scale from the MySQL instances outside of RDS MySQL.</li>\n\t<li>Option E is CORRECT: The same reason as options D. Refer to &ldquo;Start Replication Between an External Master Instance and a MySQL DB Instance on Amazon RDS&rdquo; in<a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf\" target=\"_blank\"> https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf</a> page 575.</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34750,
            "question_id": 44739,
            "answers": [
              {
                "choice": "<p>Create an Amazon Aurora MySQL DB db.r5.16xlarge instance. Make sure that Multi-AZ deployment is enabled in different zones. Enable Aurora global tables.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Aurora MySQL DB cluster. The Aurora DB cluster endpoint address will be used when referenced by the MySQL source instances to scale up.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up replication between a MySQL DB instance and an Amazon Aurora MySQL DB cluster. Monitor the replication to ensure that it remains healthy and repair it if necessary.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>As Aurora does not support MySQL database running external to Amazon RDS, migrate the database from EC2 MySQL to RDS MySQL first and then use Aurora to scale the database.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Make the Aurora DB a replication slave of MySQL DB instances. This applies to the Amazon RDS MySQL DB instance, or a MySQL database running in EC2.</p>\n\n<p>&nbsp;</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28361,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have been given the task of designing a backup strategy&nbsp;for your organization&#39;s on-premise storage&nbsp;with the only caveat being that you must use the AWS Storage Gateway. There is no requirement for the file protocol. Which of the following is the correct/appropriate statement surrounding the most cost-effective storage&nbsp;strategy?&nbsp;Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - A</p>\r\n\r\n<p>Option A is CORRECT becasue the VTL is most cost-effective storage option here when compared to Gateway-Cached or the Gateway-Stored Volumes while the user is looking for a backup storage for the on-premises data.</p>\r\n\r\n<p>Option B is incorrect because this is NOT a cost-effective option it keeps only the frequently accessed data (not the entire data) on the on-premises server to get quick access.</p>\r\n\r\n<p>Option C is incorrect because although both Gateway-Cached Volumes and Gateway-Stored Volume can be independently deployed as storage/backup options these are not as cost-effective as the&nbsp;VTL.</p>\r\n\r\n<p>Option D is incorrect because this is also NOT a cost-effective option for storage of data.</p>\r\n\r\n<p><strong>More information on AWS Storage Gateway</strong></p>\r\n\r\n<p>Volume Gateway&nbsp;&ndash; A volume gateway provides cloud-backed storage volumes that you can mount as Internet Small Computer System Interface (iSCSI) devices from your on-premises application servers. The gateway supports the following volume configurations:</p>\r\n\r\n<ul>\r\n\t<li>Cached volumes&nbsp;&ndash; You store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Cached volumes offer substantial cost savings on primary storage and minimize the need to scale your storage on-premises. You also retain low-latency access to your frequently accessed data.</li>\r\n\t<li>Stored volumes&nbsp;&ndash; If you need low-latency access to your entire dataset, first configure your on-premises gateway to store all your data locally. Then asynchronously back up point-in-time snapshots of this data to Amazon S3. This configuration provides durable and inexpensive off-site backups that you can recover to your local data center or Amazon EC2. For example, if you need replacement capacity for disaster recovery, you can recover the backups to Amazon EC2.</li>\r\n</ul>\r\n\r\n<p>Tape Gateway&nbsp;&ndash; With a tape gateway, you can cost-effectively and durably archive backup data in Amazon Glacier. A tape gateway provides a virtual tape infrastructure that scales seamlessly with your business needs and eliminates the operational burden of provisioning, scaling, and maintaining a physical tape infrastructure.</p>\r\n\r\n<p>For more information on Storage gateways, please visit the below URLs-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\" target=\"_blank\">https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html</a></p>\r\n\r\n<p><a href=\"https://aws.amazon.com/storagegateway/faqs/\" target=\"_blank\">https://aws.amazon.com/storagegateway/faqs/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18478,
            "question_id": 28361,
            "answers": [
              {
                "choice": "<p>You should use Gateway-Virtual Tape Library (VTL) as it is the most cost-efficient.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You should use Gateway-Cached Volumes. You will have quicker access to the data, and it is a more preferred storage&nbsp;solution than Gateway-Stored Volumes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It doesn&#39;t matter whether you use Gateway-Cached Volumes or Gateway-Stored Volumes as long as you also combine either of these solutions with the Gateway-Virtual Tape Library (VTL).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You should use Gateway-Stored Volumes as it is preferable to Gateway-Cached Volumes as a storage medium.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28299,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has an e-commerce platform that is expanding all over the globe. You have EC2 instances deployed in multiple regions. You want to monitor the performance of all of these EC2 instances. How will you set up CloudWatch to monitor EC2 instances in multiple regions?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>You can monitor AWS resources in multiple regions using a single CloudWatch dashboard. For example, you can create a dashboard that shows CPU utilization for an EC2 instance located in the&nbsp;us-west-2&nbsp;region with your billing metrics, which are located in the&nbsp;us-east-1&nbsp;region.</p>\r\n\r\n<p>Please see the following snapshot which shows how a global CloudWatch Dashboard looks.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_vf2fhs.png\" style=\"height:523px; width:1820px\" /></p>\r\n\r\n<p>For more information on the Cloudwatch dashboard, please refer to the below URLs-</p>\r\n\r\n<p>Nov 8 2019 new anouncement:&nbsp;&nbsp;<a href=\"https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-cross-account-cross-region-dashboards/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-cross-account-cross-region-dashboards/</a></p>\r\n\r\n<p>Cross-region cross-account console:&nbsp; <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html</a></p>\r\n\r\n<p>Cross-Account Cross-Region Dashboards with Amazon CloudWatch:&nbsp; &nbsp;<a href=\"https://aws.amazon.com/blogs/aws/cross-account-cross-region-dashboards-with-amazon-cloudwatch/\">https://aws.amazon.com/blogs/aws/cross-account-cross-region-dashboards-with-amazon-cloudwatch/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18416,
            "question_id": 28299,
            "answers": [
              {
                "choice": "<p>Create separate dashboards in every region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Register instances running on different regions to CloudWatch.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Have one single dashboard that reports the metrics from CloudWatch pertaining to different regions.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>This is not possible.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28362,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>What does the below custom IAM Policy achieve?</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &quot;Statement&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:TerminateInstances&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:StartInstances&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:RunInstances&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:StopInstances&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;arn:aws:ec2:*:*:instance/*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; },</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor1&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: &quot;ec2:DescribeInstances&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>\r\n\r\n<p>&nbsp; &nbsp; ]</p>\r\n\r\n<p>}</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because, although the policy given in the question allows the access to launch the EC2 instance by including &quot;ec2:RunInstances&quot; in the Actions, it will not allow the user to launch the EC2 instances.&nbsp;(Try creating the same policy, attach it to a new user. You can log in using that user credentials and see if you can launch an EC2 instance. You will not be able to do so. You will get the error shown below.).&nbsp;In order to allow users to launch an instance, the policy needs to be updated to grant the user more privileges: access to launch using an EC2 key pair, a security group, an Elastic Block Store (EBS) volume, and an Amazon Machine Image (AMI). To do this, you will have to create a separate statement for the RunInstances action.</li>\r\n\t<li>Option B is incorrect because, as mentioned above, the user will not be able to launch an EC2 instance and will get an error (shown below) about not having the permission to do so.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_mtwxkx.png\" style=\"height:186px; width:624px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option C is incorrect because the user can start, stop, and terminate existing instances with this policy.</li>\r\n\t<li>Option D is incorrect because the user will be able to start, stop and terminate existing EC2 instances.</li>\r\n</ul>\r\n\r\n<p>For more information on EC2 resource-level permissions, please visit the below URL and for further explanation as to why only the TerminateInstances, StopInstances, and StartInstances actions are allowed, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/demystifying-ec2-resource-level-permissions/\" target=\"_blank\">https://aws.amazon.com/blogs/security/demystifying-ec2-resource-level-permissions/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18479,
            "question_id": 28362,
            "answers": [
              {
                "choice": "<p>Permits the user start, stop, terminate and describe&nbsp;the existing instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Permits the user to launch a new instance as well as start, stop, and terminate the existing instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Permits the user only to describe the instances (read-only), and will not be able to start, stop, or terminate instances, since it overrides the allowed actions of TerminateInstances, RunInstances, StartInstances, and StopInstances in the policy.&nbsp;</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>None of the above.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28363,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company is running a production load Redshift cluster for a client. The client has an RTO objective of one hour and an RPO of one day. While configuring the initial cluster, what configuration would best meet the client&#39;s recovery needs for this specific Redshift cluster configuration? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because it copies the snapshot from the destination region (disaster recovery region).</p>\r\n\r\n<p>Option B is CORRECT because it copies the snapshot from the source region (production) to the destination region (disaster recovery region).</p>\r\n\r\n<p>Option C is incorrect because you do not need to copy the manual snapshots (as it is an overhead). Redshift copies the snapshot from source to destination region.</p>\r\n\r\n<p>Option D is incorrect because Redshift replicates the data to another region using snapshots. Once the snapshot is copied from the source to the destination region, you need to restore the cluster from the snapshot and use its DSN.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Amazon Redshift Snapshots</strong></p>\r\n\r\n<p>Snapshots are point-in-time backups of a cluster. There are two types of snapshots:&nbsp;<em>automated</em>&nbsp;and&nbsp;<em>manual</em>. Amazon Redshift stores these snapshots internally in Amazon S3 using an encrypted Secure Sockets Layer (SSL) connection. If you need to restore from a snapshot, Amazon Redshift creates a new cluster and imports data from the snapshot that you specify.</p>\r\n\r\n<p>When you restore from a snapshot, Amazon Redshift creates a new cluster and makes the new cluster available before all of the data is loaded, so you can begin querying the new cluster immediately. The cluster streams data on demand from the snapshot in response to the active queries then loads the remaining data in the background.</p>\r\n\r\n<p>Amazon Redshift periodically takes snapshots and tracks incremental changes to the cluster since the last snapshot. Amazon Redshift retains all of the data required to restore a cluster from a snapshot.</p>\r\n\r\n<p>For more information on RedShift snapshots, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html\" target=\"_blank\">http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18480,
            "question_id": 28363,
            "answers": [
              {
                "choice": "<p>Enable automatic snapshots on the cluster in the production region FROM the disaster recovery region. So snapshots are available in the disaster recovery region and can be launched in the event of a disaster.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable automatic snapshots and configure automatic snapshot copy from the current production cluster to the disaster recovery region.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable automatic snapshots on a Redshift cluster. In the event of a disaster, a failover to the backup region is needed. Manually copy the snapshot from the primary region to the secondary region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create the cluster configuration and enable Redshift replication from the cluster running in the primary region to the cluster running in the secondary region. In the event of a disaster, change the DNS endpoint to the secondary cluster&rsquo;s leader node.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28364,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company runs its current application that has a million views per day, entirely on-premises. However, they expect a big boost in traffic and need to figure out a way to decrease the load to handle the scale. Unfortunately, they cannot migrate their application to AWS. What could they do with their current on-premises application to help offload some of the traffic and scale to meet the demand cost-effectively? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\n\n<p>The main point to consider is that the application should entirely stay on the on-premises server but still leverage AWS offerings for handling the peak traffic and scale on demand. CloudFront is the best suited for such a situation because it can use the on-premises server as the custom origin.</p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong> because even though OpsWork can work with on-premises servers, setting up the EC2 instances with Auto Scaling would be a costly solution.</li>\n\t<li><strong>Option B is incorrect</strong> because moving static files to S3 is not sufficient ( since the application has a million views per day ) to improve the scalability to handle the peak load.&nbsp;How to handle the dynamic contents is not mentioned in this option.</li>\n\t<li><strong>Option C is incorrect </strong>because the requirement explicitly mentions that the application cannot be migrated to AWS.</li>\n\t<li><strong>Option D is CORRECT </strong>because CloudFront - which is an AWS managed - is a highly available, scalable service that can use the on-premises server as the origin. By enabling the &quot;Query String Forwarding&quot; with a value of &quot;None&quot; will increase&nbsp;the likelihood that CloudFront can serve a request from the cache, which improves performance and reduces the load on your origin.&nbsp;Amazon CloudFront can speed up the distribution of both the static and dynamic web content as it delivers the content through a worldwide network (edge locations).</li>\n</ul>\n\n<p>Refer to page 52 on the below link-&nbsp;</p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/cloudfront/\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AmazonCloudFront_DevGuide.pdf</a></li>\n</ul>\n\n<ul>\n</ul>\n\n<p><a href=\"https://aws.amazon.com/cloudfront/\" target=\"_blank\"><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2020/10/08/ckeditor_51131.png\" style=\"height:355px; width:604px\" /></a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 63497,
            "question_id": 28364,
            "answers": [
              {
                "question_id": "28364",
                "choice": "<p>&nbsp;</p>\n\n<p>Deploy OpsWorks on-premise to manage the instance to configure on-premise auto-scaling to meet the demand.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28364",
                "choice": "<p>Upload all static files to Amazon S3 and create a CloudFront distribution serving those static files.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28364",
                "choice": "<p>Duplicate half your web infrastructure on AWS, offload the DNS to Route 53 and configure weighted-based DNS routing to send half the traffic to AWS.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28364",
                "choice": "<p>Create a CloudFront CDN and enable query string forwarding. Offload the DNS to AWS to handle CloudFront CDN traffic but use on-premise load balancers as the origin.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 44740,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Like the benefits Lambda has, Amazon Aurora has provided an on-demand, autoscaling serverless configuration, which automatically starts up, shuts down, and scales up or down capacity based on the application&#39;s needs. Aurora Serverless provides a relatively simple, cost-effective option. Which below scenarios are suitable for Aurora serverless to be used? Select 3 Options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A, B, D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Aurora Serverless provides the following advantages.</p>\r\n\r\n<ul>\r\n\t<li>Simpler - Aurora Serverless removes much of the complexity of managing DB instances and capacity.</li>\r\n\t<li>Scalable - Aurora Serverless seamlessly scales compute and memory capacity as needed, with no disruption to client connections.</li>\r\n\t<li>Cost-effective - When you use Aurora Serverless, you pay for only the database resources that you consume on a per-second basis.</li>\r\n\t<li>Highly available storage - Aurora Serverless uses the same fault-tolerant, distributed storage system with six-way replication as Aurora to protect against data loss.</li>\r\n</ul>\r\n\r\n<p>For details about Aurora Serverless, please refer to page 100 in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf</a></li>\r\n</ul>\r\n\r\n<p>To create an Aurora serverless, make sure the Capacity type is selected as Serverless:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/21/ckeditor_awsq6.jpg\" style=\"height:435px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because it is a new application, and the load is unknown. It is suitable for Aurora Serverless since it is hard to provision an instance size.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Option&nbsp;B is&nbsp;CORRECT:&nbsp;Because Aurora Serverless is suitable for development and test databases. With Aurora Serverless, the database automatically shuts down when it&#39;s not in use. It can save costs without impacting the service.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because Aurora Serverless does not support MariaDB. Only MySQL is supported in production. Refer to &ldquo;Limitations of Aurora Serverless&rdquo; in</p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf</a>.</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p><strong>Note:</strong> Aurora Serverless is also available in preview for the Aurora PostgreSQL-compatible edition since Nov 2018.</p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>\r\n\t<p>Option&nbsp;D is&nbsp;CORRECT:&nbsp;Because Aurora Serverless is suitable for unpredictable workloads. The database auto scales its capacity to meet the needs of the application&#39;s peak load and scales back down when the surge of activity is over.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Option&nbsp;E is&nbsp;incorrect:&nbsp;One limitation for Aurora Serverless is that you can&#39;t access an Aurora Serverless DB cluster&#39;s endpoint through an AWS VPN connection or an inter-region VPC peering connection. Also, the workload is stable so that a provisioned capacity works for this case.</p>\r\n\t</li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>As of now, the WRT exam options are good to go for Amazon Aurora Serverless.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/aurora/serverless/\" target=\"_blank\">https://aws.amazon.com/rds/aurora/serverless/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34751,
            "question_id": 44740,
            "answers": [
              {
                "choice": "<p>Startup company B is deploying a new application for an online trading system, which needs a database to store customers&rsquo; transactions. It is a totally new application; therefore, the team is still unsure what the load may look like at first.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>For an internal project, a developer needs to use a database during work hours but does not need it on nights or weekends. He decides to use Aurora to save some costs as required by the team lead.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A middle-size company C is considering migrating its legacy on-premise MariaDB&nbsp;database to AWS RDS. The database has a dramatically higher workload on weekends than weekdays.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A development team runs an IOT monitor system where there is database usage throughout the day and peaks of activity that are hard to predict. When the peaks happen, the total activities may reach 10 times of the normal level.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A company has EC2 applications in the Sydney region. Due to the market increase in Singapore, it decides to add an RDS database on the Singapore region. Because of some security considerations, AWS VPN is needed for the database to talk with several on-premise applications. The workload is expected to be high and stable.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28366,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has a Redshift cluster for petabyte-scale data warehousing. The data within the cluster is easily reproducible from additional data stored on Amazon S3. The company wants to reduce the overall cost of running this Redshift cluster. Which scenario would meet best for the needs of the running cluster? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Snapshots are point-in-time backups of a cluster. There are two types of snapshots:&nbsp;<em>automated</em>&nbsp;and&nbsp;<em>manual</em>. Amazon Redshift stores these snapshots internally in Amazon S3 using an encrypted Secure Sockets Layer (SSL) connection. If you need to restore from a snapshot, Amazon Redshift creates a new cluster and imports data from the snapshot that you specify.</p>\r\n\r\n<p>Option A is incorrect because AWS Redshift does not have the concept of read replica.</p>\r\n\r\n<p>Option B is CORRECT because&nbsp;</p>\r\n\r\n<p>&quot;There is no additional charge for backup storage up to 100% of your provisioned storage for an active data warehouse cluster&quot;. Therefore, if we reduce&nbsp;to a 1-day retention period for the backup, we can save costs too.&nbsp;</p>\r\n\r\n<p>Refer link:&nbsp;<a href=\"https://aws.amazon.com/redshift/pricing/\">https://aws.amazon.com/redshift/pricing/</a></p>\r\n\r\n<p>Option C is incorrect because implementing daily backup is going to be more expensive than option B.</p>\r\n\r\n<p>Option D is incorrect because we cannot get disabled manual snapshots. In this scenario, we need to reconfigure the automated snapshots.</p>\r\n\r\n<p>For more information on Redshift snapshots, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html\" target=\"_blank\">http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18483,
            "question_id": 28366,
            "answers": [
              {
                "choice": "<p>Disable automated backups. Create a read-replica in another region for disaster recovery.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable automated snapshots but set the retention period to a lower number to reduce storage costs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Implement daily backups but do not enable multi-region copy to save data transfer costs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Disable manual snapshots on the cluster.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28367,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a web application that has a high amount of dynamic content. The application has MySQL as its database. The company is looking to&nbsp;implement a caching solution&nbsp;for clients requesting the application. What is the best possible solution and why?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>The scenario requires a caching solution which should help to reduce the load time of the <strong>dynamic</strong> content. ElastiCache is the proper caching solution for this use case.</p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because Route 53 helps improving the resolving of the DNS queries for the multi-region application. It does not help caching of the dynamic content.</li>\r\n\t<li>Option B is CORRECT because ElastiCache is most suited for caching dynamic content. This will make sure the&nbsp;read-intensive load is reduced on the database instance.</li>\r\n\t<li>Option C is INCORRECT because setting the&nbsp;TTL to 0 in CloudFront does not cache content and is not suited for caching dynamic content.</li>\r\n\t<li>Option D is INCORRECT because it is the same answer as above, except query string forwarding is disabled. This would block the&nbsp;dynamic content generated at the origin server using the query string parameters.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/amazon-cloudfront-support-for-dynamic-content/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/amazon-cloudfront-support-for-dynamic-content/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18484,
            "question_id": 28367,
            "answers": [
              {
                "choice": "<p>Offload the DNS to Route 53; Route 53 has DNS servers worldwide and routes the request to the closest region which reduces DNS latency.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an ElastiCache cluster, write code that caches the correct dynamic content and places it in front of the RDS dynamic content. This will reduce the amount of time it takes to request the dynamic content since it is cached.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CloudFront distribution, enable query string forwarding and&nbsp;set the TTL to 0.&nbsp;This will keep TCP connections live from CloudFront to the origin, reducing the time it takes for a TCP handshake to occur.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CloudFront distribution,&nbsp;disable query string forwarding and&nbsp;set the TTL to 0. This will keep TCP connections live from CloudFront to the origin, reducing the time it takes for a TCP handshake to occur.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28368,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are running an online gaming server, with one of its requirements being a need for a high IOPS of write performance on its EBS volumes. Given the fact that each EBS volume&nbsp;cannot provision the required IOPS, which of the following would be a reasonable solution if instance bandwidth is not an issue? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>Option A is CORRECT because creating a RAID 0 array allows you to achieve a higher performance level for a file system than you can provision on a single Amazon EBS volume, and the resulting size of a RAID 0 array is the sum of the sizes of the volumes within it.&nbsp;The bandwidth is the sum of the available bandwidth of the volumes within it.&nbsp;</p>\r\n\r\n<p>Option B is incorrect because ephemeral storage may not always have consistent and reliable I/O performance given by PIOPS EBS Volumes.</p>\r\n\r\n<p>Option C is incorrect because (a) instance bandwidth is not an issue, and (b) auto-scaling with spot instances will not increase the IOPS of the EBS volumes.</p>\r\n\r\n<p>Option D is incorrect because launching the instances in a placement group does not increase the IOPS of the EBS volumes. It only increases the overall network performance.</p>\r\n\r\n<p><strong>More information on EBS with RAID Configuration</strong></p>\r\n\r\n<p>With Amazon EBS, you can use any of the standard RAID configurations that you can use with a traditional bare metal server, as long as the operating system for your instance supports that particular RAID configuration. This is because all RAID is accomplished at the software level. For greater I/O performance than you can achieve with a single volume, RAID 0 can stripe multiple volumes together; for on-instance redundancy, RAID 1 can mirror two volumes together.</p>\r\n\r\n<p>An example of better throughout with RAID 0 configuration is also given in the AWS documentation.</p>\r\n\r\n<p>&nbsp;The resulting size of a RAID 0 array is the sum of the sizes of the volumes within it, and the bandwidth is the sum of the available bandwidth of the volumes within it. The resulting size and bandwidth of a RAID 1 array are equal to the size and bandwidth of the volumes in the array. For example, two 500 GiB Amazon EBS io1 volumes with 4,000 provisioned IOPS each will create a 1000 GiB RAID 0 array with an available bandwidth of 8,000 IOPS and 1,000 MB/s of throughput or a 500 GiB RAID 1 array with an available bandwidth of 4,000 IOPS and 500 MB/s of throughput.</p>\r\n\r\n<p>For more information on RAID configuration, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18485,
            "question_id": 28368,
            "answers": [
              {
                "choice": "<p>Create a RAID 0 configuration with several&nbsp;EBS volumes.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use ephemeral storage which gives a much larger IOPS write performance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Auto Scaling to use spot instances when required to increase the IOPS write performance when required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a Placement Group with several&nbsp;EBS volumes.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28369,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>While implementing cost-cutting measurements in your organization, you have been told that you need to migrate some of your existing resources to another region. The first task you have been given is to copy all of your Amazon Machine Images from Asia Pacific (Sydney) to US West (Oregon). One of the things that you are unsure of is how the SSH&nbsp;keys on your Amazon Machine Images need to be migrated. Which of the following best describes how your SSH&nbsp;keys are affected when AMIs are migrated between regions? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>Option A is incorrect because, as mentioned above, the SSH&nbsp;Keys are private keys and are never copied across the regions.</p>\r\n\r\n<p>Option B is incorrect because the SSH&nbsp;keys are not user-specific.</p>\r\n\r\n<p>Option C is incorrect because the authorization keys are copied across the region.</p>\r\n\r\n<p>Option D is CORRECT because the authorization key is included in the AMI, hence copied across the region. However, the SSH keys are not copied and need to be imported explicitly if you still want to use the same SSH key for the instances in the new region. See the AWS Console option for importing the SSH key.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_ozi1er.png\" style=\"height:500px; width:707px\" /></p>\r\n\r\n<p>For more information on EC2 key pairs, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html</a></li>\r\n</ul>\r\n\r\n<p>For more information on this subject, please visit the below forums on AWS-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://forums.aws.amazon.com/thread.jspa?threadID=52654\" target=\"_blank\">https://forums.aws.amazon.com/thread.jspa?threadID=52654</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong>&nbsp;</p>\r\n\r\n<p>You specify the name of the key pair when you launch an EC2 instance and provide the private key when you connect to that instance. Authorization Key here is the public key content (of the key pair) placed in an entry within&nbsp;<strong>~/.ssh/authorized_keys</strong>&nbsp;of that EC2 instance. This gets copied as part of the AMI.&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18486,
            "question_id": 28369,
            "answers": [
              {
                "choice": "<p>The SSH&nbsp;keys will also be copied across, so you don&#39;t need to do anything except launch the new instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The SSH&nbsp;keys will also be copied across.&nbsp;However, they will only work for users who have already accessed them in the old region. If you need new users to access the instances, then new keys will need to be generated.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Neither the SSH&nbsp;key nor the authorized key is copied and consequently you need to create new keys when you launch the new instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The SSH keys will not be copied to the new region but the authorization keys will still be in the operating system of the AMI. You need to import the SSH keys to the new region if you want to launch the new EC2 instances with the same SSH keys.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28370,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You&#39;re working as a consultant for a company that has a three-tier application. This architecture&#39;s application layer sends over 20Gbps of data per second during peak hours to and from Amazon S3. Currently, you&#39;re running two NAT gateways in two subnets to transfer the data from your private application layer to Amazon S3. You will also need to ensure that the instances receive software patches from a third-party repository. What architecture changes should be made, if any? Choose the correct answer from the options below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>VPC Endpoints for Amazon S3 are easy to configure, highly reliable, and provide a secure connection to S3 that does not require a gateway or NAT instances. The&nbsp;EC2 instances running in private subnets of a VPC can now have controlled access to S3 buckets, objects, and API functions in the same region as the VPC. You can use an S3 bucket policy to indicate which VPCs and VPC Endpoints have access to your S3 buckets.</p>\r\n\r\n<p>Option A is incorrect because adding a third NAT Gateway for communicating with an S3 bucket is a costly solution compared to creating an S3 endpoint.</p>\r\n\r\n<p>Option B is CORRECT because (a) you can securely connect with S3 via the S3 endpoint, and (b) even though you can connect to the S3 endpoint without requiring a NAT gateway, you still need to keep it because the instances in the VPC needs to receive the software patches from the third-party repository. See the image in the <em>More information on VPC Endpoint for S3</em> section.</p>\r\n\r\n<p>Option C is incorrect because you need to connect to the Amazon S3 via the VPC endpoint as the current NAT gateways may not be sufficient to handle the peak load.</p>\r\n\r\n<p>Option D is incorrect because if you remove the NAT Gateway, the instances in the VPC will not be able to receive the software patches from the third-party repository.</p>\r\n\r\n<p><strong>More information on VPC Endpoint for S3</strong></p>\r\n\r\n<p>VPC endpoints alleviate the need for everything to go through the&nbsp; NAT instance</p>\r\n\r\n<p><strong>&nbsp;New VPC Endpoint for S3</strong></p>\r\n\r\n<p>Today we are simplifying access to S3 resources from within a VPC by introducing the concept of a VPC Endpoint. These endpoints are easy to configure, highly reliable, and provide a secure connection to S3 that does not require a gateway or NAT instances.</p>\r\n\r\n<p>EC2 instances running in private subnets of a VPC can now have controlled access to S3 buckets, objects, and API functions in the same region as the VPC. You can use an S3 bucket policy to indicate which VPCs and which VPC Endpoints have access to your S3 buckets.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_mk0yl4.png\" style=\"height:443px; width:600px\" /></p>\r\n\r\n<p>For more information on VPC endpoints, please refer to the below URL-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18487,
            "question_id": 28370,
            "answers": [
              {
                "choice": "<p>NAT gateways support network performance of 10 Gbps and two of them are running: Add a third NAT Gateway to a separate subnet to allow for any increase in demand.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a VPC S3 endpoint which allows for higher bandwidth, throughput as well as tighter security and keep the NAT gateways to receive the software patches from the third party repository.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>NAT gateways support 10Gbps and two are running: No changes are required to improve this architecture.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the NAT gateways and create a VPC S3 endpoint which allows for higher bandwidth throughput as well as tighter security.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 49902,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>In your organization, your DevOps team is in charge of provisioning resources in an AWS account. Tim was a team member and created a Customer Managed Key in KMS several months ago. The default key policy is removed, and the key policy is as below.</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp;&nbsp;&quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&quot;Id&quot;: &quot;key-consolepolicy-1&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&quot;Statement&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Sid&quot;: &quot;Enable IAM User Permissions&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Principal&quot;: {&quot;AWS&quot;: &quot;arn:aws:iam::111122223333:user/Tim&quot;},</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Action&quot;: &quot;kms:*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>\r\n\r\n<p>&nbsp;&nbsp;]</p>\r\n\r\n<p>}</p>\r\n\r\n<p>As Tim leaves the company, his accounts are deleted including the above IAM user. As a result, the CMK becomes unmanageable for other users to view or use. How should you deal with this problem?&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>About the default and recommended key policies in KMS, check the AWS documentation in <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default</a>. The default key policy is as below:</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &quot;Sid&quot;: &quot;Enable IAM User Permissions&quot;,</p>\r\n\r\n<p>&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &quot;Principal&quot;: {&quot;AWS&quot;: &quot;arn:aws:iam::111122223333:root&quot;},</p>\r\n\r\n<p>&nbsp; &quot;Action&quot;: &quot;kms:*&quot;,</p>\r\n\r\n<p>&nbsp; &quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>}</p>\r\n\r\n<p>This allows the permissions of the key to be managed by IAM policies.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT:​ </strong>Because even the root user cannot manage it. You have to contact AWS Support to restore it.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect:​ </strong>Because the root user cannot manage the key policy either as the user is not allowed to do that.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect:​ </strong>Because the key policy cannot be modified by any IAM user anymore.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:​ </strong>Because the key policy still denies the action even if the IAM user has an IAM policy to allow it.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39770,
            "question_id": 49902,
            "answers": [
              {
                "choice": "<p>&nbsp;Contact AWS Support to regain access to the CMK.&nbsp;</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Log in as the root user of the AWS account and add another user as the key administrator.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the IAM admin user to edit the key policy to allow all actions for the principal of arn:aws:iam::111122223333:root. Add other IAM users as key administrators or users if required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM policy that allows the action of kms:PutKeyPolicy and attach the policy to an IAM user. Login into AWS console with the user and modify the key policy to the default one<strong>.&nbsp;</strong><br />\r\n&nbsp;</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28300,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have multiple EC2 instances in three availability zones (AZs), with a load balancer configured for your application. Any instance can process the requests and there is no need to route the requests for a particular session&nbsp;to the same EC2 instance. However, you observe that only one of those AZs is receiving all the traffic. Which of the following actions may help distribute the traffic in three AZs? (Select TWO).</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A, C</p>\n\n<p>Since the traffic is routed to only one availability zone (AZ) and none of the other AZs are receiving any, the ELB must have only one AZ registered in it. First, you have to ensure that the ELB is configured to support multiple AZs via Cross-Zone load balancing. Even after enabling the cross zone load balancing, if the traffic is routed to particular EC2 instances in an AZ, the users&#39; sessions must have tied to those EC2 instances. These symptoms seem to be related to the sticky sessions (session affinity). So, the second thing you must ensure that the sticky sessions need to be either disabled or configured to be expiring after a specific period.</p>\n\n<p>Option A is CORRECT because, as mentioned above, sticky sessions could be a reason for traffic being routed to specific EC2 instances in a specific AZ.</p>\n\n<p>Option B is incorrect because reducing the health check frequency will not balance the traffic between different AZs.</p>\n\n<p>Option C is CORRECT because cross zone load balancing needs to be enabled on the ELB and the other AZs must be registered under this ELB.</p>\n\n<p>Option D is incorrect because there is no such recommendation from Amazon about ELB.</p>\n\n<p><strong>More information on ELB, Sticky Sessions, and Cross Zone Load Balancing:</strong></p>\n\n<p><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html</a></p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_pzy32n.png\" style=\"height:587px; width:1190px\" /></p>\n\n<p><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html</a></p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_bvzg00.png\" style=\"height:805px; width:1860px\" /></p>\n\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18417,
            "question_id": 28300,
            "answers": [
              {
                "choice": "<p>Disable sticky sessions</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Reduce the frequency of the health checks</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enable cross zone load balancer</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon recommends to use two availability zone behind ELB</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28372,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company has a branch office in Sydney (Australia) that has just purchased the AWS Direct Connect link to connect a local data center to AWS resources in the ap-southeast-2 Region. The company also owns lots of AWS EC2 resources in VPCs in the US West Region. You want to use the same Direct Connection for your local data center to communicate with these resources in us-west-1. How would you achieve the requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\n\n<p>A Direct Connect gateway is a globally available resource. You can create the Direct Connect gateway in any Region and access it from all other Regions.&nbsp;</p>\n\n<p>A Direct Connect gateway does not allow gateway associations that are on the same Direct Connect gateway to send traffic to each other (for example, a virtual private gateway to another virtual private gateway).</p>\n\n<p>A Direct Connect gateway does not prevent traffic from being sent from one gateway association back to the gateway association itself (for example when you have an on-premises supernet route that contains the prefixes from the gateway association).&nbsp;</p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong> because the Direct Connection can be used to access public or private services in a remote region.</li>\n\t<li><strong>Option B is incorrect </strong>because you would need to create a Direct Connect gateway in the remote Region (us-west-1) for the connection.</li>\n\t<li><strong>Option C is incorrect </strong>because a public virtual interface is required for accessing public services in the remote region.</li>\n\t<li><strong>Option D is CORRECT</strong> because the Direct Connect gateway can be created as a globally available resource&nbsp;to communicate with private resources in VPCs.</li>\n</ul>\n\n<p>For more information on accessing a remote AWS Region, please visit the below URL-</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/remote_regions.html\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/remote_regions.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 63530,
            "question_id": 28372,
            "answers": [
              {
                "question_id": "28372",
                "choice": "<p>The Direct Connection cannot be used for different Regions. You need to create a new connection in the us-west-1 Region.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28372",
                "choice": "<p>Create a private virtual interface in the ap-southeast-2 Region and use it to connect the AWS Direct Connect connection to the VPCs in us-west-1.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28372",
                "choice": "<p>Create a public virtual interface in the us-west-1 Region and set up a VPN over the public virtual interface to protect the data.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28372",
                "choice": "<p>Create a Direct Connect gateway as a globally available resource. Use it to connect the AWS Direct Connect connection over a private virtual interface to VPCs in us-west-1.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 44741,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Company D has a legacy employee verification product which exists for many years. The system has used some old facial recognition technologies by comparing new photos with original ones in a large file system to verify employees. It is becoming harder and harder to maintain the system as all product architects have left and technical documents are not well maintained.&nbsp;The company decides to migrate the system to AWS and use some new technologies if possible. However, they do not want to spend huge efforts on the migration and hope to finish it as soon as possible. Which option is the best for the company to choose at a reasonable cost?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>AWS always recommends exploring new services that can help increase working efficiency. Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. You can also search and compare faces. Rekognition&rsquo;s API lets you easily build powerful visual search and discovery into your applications. With Amazon Rekognition, you only pay for the images you analyze and the face metadata you store. There are no minimum fees, and there are no upfront commitments. As the question asks for a migration with a reasonable cost, it is not proper to use the SAAS provider.</p>\r\n\r\n<p>The below is a piece of an example response of a DetectFaces API call. Lots of information can be returned by Rekognition:</p>\r\n\r\n<p>{<br />\r\n&nbsp;&nbsp;&nbsp; &quot;FaceDetails&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AgeRange&quot;: {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;High&quot;: 43,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Low&quot;: 26<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Beard&quot;: {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Confidence&quot;: 97.48941802978516,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Value&quot;: true<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;BoundingBox&quot;: {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Height&quot;: 0.6968063116073608,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Left&quot;: 0.26937249302864075,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Top&quot;: 0.11424895375967026,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Width&quot;: 0.42325547337532043<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Confidence&quot;: 99.99995422363281,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Emotions&quot;: [<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Confidence&quot;: 0.042965151369571686,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot;: &quot;DISGUSTED&quot;<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Confidence&quot;: 0.002022328320890665,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Type&quot;: &quot;HAPPY&quot;<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Confidence&quot;: 0.4482877850532532,<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot;: &quot;SURPRISED&quot;<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },<br />\r\n&hellip;</p>\r\n\r\n<p>}</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because the price will be higher than Rekognition. It is not the best choice.</li>\r\n\t<li>Option B is CORRECT: Because Rekognition can definitely meet the need with a reasonable cost. About the facial recognition function of Rekognition, please refer to <a href=\"https://aws.amazon.com/getting-started/tutorials/detect-analyze-compare-faces-rekognition/\" target=\"_blank\">https://aws.amazon.com/getting-started/tutorials/detect-analyze-compare-faces-rekognition/</a>&nbsp;The compare-faces CLI reference is in <a href=\"https://docs.aws.amazon.com/cli/latest/reference/rekognition/compare-faces.html\" target=\"_blank\">https://docs.aws.amazon.com/cli/latest/reference/rekognition/compare-faces.html</a></li>\r\n\t<li>Option C is incorrect: Same reason as A. Also, RDS is unsuitable for storing photos.</li>\r\n\t<li>Option D is incorrect: It is quite similar to option B. However, for Rekognition CLI, compare-faces only support source and target pictures in S3. Refer to the below in <a href=\"https://docs.aws.amazon.com/cli/latest/reference/rekognition/compare-faces.html\" target=\"_blank\">https://docs.aws.amazon.com/cli/latest/reference/rekognition/compare-faces.html</a>:</li>\r\n\t<li><em>&ldquo;If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn&#39;t supported. The image must be formatted as a PNG or JPEG file.&rdquo;</em></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34752,
            "question_id": 44741,
            "answers": [
              {
                "choice": "<p>Utilize a popular facial recognition service that has used new biometric matching technology. Put the application in EC2 to handle the facial recognition tasks. Also, migrate the on-premise file system to S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Rekognition CLI to develop an application to use AWS Rekognition facial analysis service. For example, &ldquo;aws rekognition detect-faces&rdquo; can return a JSON response that contains information for each detected face. It can also compare faces to see if they match.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Utilize a modern facial recognition SAAS. Put the application in EC2 or lambda to communicate with the SAAS service provider. Also, migrate the on-premise file system to RDS. Make sure that the SAAS provider has access to RDS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Transform all source or target pictures to base64-encoded bytes. Use Rekognition CLI to compare faces such as &ldquo;aws rekognition compare-faces&rdquo; by using the pictures with the format of image bytes.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      }
    ]
  }