// 1. Free Test
var FreeTest = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 28415,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are looking to migrate your Development and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each account bill to a Management&nbsp;AWS account using Consolidated Billing. To make sure that you keep within the budget, you would like to implement a way for administrators in the Management&nbsp;account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which of the options will allow you to achieve this goal.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\n\n<p>The scenario here is asking you to give permissions to administrators in the Management account such that they can have access to stop, delete, and terminate the resources in two accounts: Dev and Test.</p>\n\n<p>Tip: Remember that you always create roles in the account whose resources are to be accessed. In this example, that would be Dev and Test. Then you create the users in the account who will be accessing the resources and give them that particular role. In this example, the Management account should create the users.</p>\n\n<p>Option A is incorrect because the Management account IAM user needs to assume roles from the Dev and Test accounts. The roles should have suitable permissions so that the Management account IAM user can access resources.</p>\n\n<p>Option B is incorrect because the cross-account role should be created in Dev and Test accounts, not in the Management account.</p>\n\n<p>Option C is CORRECT because (a) the cross-account role is created in Dev and Test accounts, and the users are created in the Management account given that role.</p>\n\n<p>Option D is incorrect because consolidated billing does not give access to resources in this fashion.</p>\n\n<p>For more information on cross-account access, please visit the below URL-</p>\n\n<ul>\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18532,
            "question_id": 28415,
            "answers": [
              {
                "choice": "<p>Create IAM users in the Management account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant Management&nbsp;account access to the resources in the account by inheriting permissions from the&nbsp;Management&nbsp;account.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create IAM users and a cross-account role in the Management account that grants full Admin permissions to the Dev and Test accounts.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create IAM users in the Management account with the &quot;AssumeRole&quot; permissions. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant Management account access.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Link the accounts using Consolidated Billing. This will give IAM users in the Management account access to the resources in Dev and Test accounts.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28435,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An administrator in your company has created a VPC with an IPv4 CIDR block 10.0.0.0/24. Now they want to add additional address space outside of the current VPC CIDR. Because&nbsp;there is a requirement to host more resources in that VPC. Which of the below requirement can be used to accomplish this? Choose an answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>An existing CIDR for a VPC is not modifiable. However, you can add additional CIDR blocks, i.e., up to four secondary IPv4 CIDR blocks to an already existing VPC.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because you can change the CIDR of VPC by adding up to 4 secondary IPv4 IP CIDRs to your VPC.</li>\r\n\t<li>Option B is CORRECT because you can expand your existing VPC by adding up to four secondary IPv4 IP ranges (CIDRs) to your VPC.</li>\r\n\t<li>Option C is incorrect because deleting the subnets is unnecessary.</li>\r\n\t<li>Option D is incorrect because this configuration would peer the VPC. It will not alter the existing VPC&rsquo;s CIDR.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on VPC and its FAQs, please refer to the following links-\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/about-aws/whats-new/2017/08/amazon-virtual-private-cloud-vpc-now-allows-customers-to-expand-their-existing-vpcs/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2017/08/amazon-virtual-private-cloud-vpc-now-allows-customers-to-expand-their-existing-vpcs/</a></li>\r\n\t\t<li><a href=\"https://aws.amazon.com/vpc/faqs/\" target=\"_blank\">https://aws.amazon.com/vpc/faqs/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18552,
            "question_id": 28435,
            "answers": [
              {
                "choice": "<p>You cannot change a VPC&#39;s size. Currently, to change the size of a VPC, you must terminate your existing VPC and create a new one.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Expand your existing VPC by adding secondary IPv4 IP ranges (CIDRs) to your VPC.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Delete all the subnets in the VPC and expand the VPC.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new VPC with a greater range and then connect the older VPC to the newer one.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 44759,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A middle-sized company is planning to migrate its on-premises servers to AWS. At the moment, they have used various licenses, including windows operating system server, SQL Server, IBM Db2, SAP ERP, etc. After migration, the existing licenses should continue to work in EC2. The IT administrators prefer to use a centralized place to control and manage the licenses to prevent potential non-compliant license usages. For example, SQL Server Standard&#39;s license only allows 50 vCPUs, which means a rule is needed to limit the number of SQL Servers in EC2. Which option is correct for the IT administrators to use?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>AWS License Manager is a central place to manage licenses in AWS EC2 and on-premises instances. It contains 3 parts to use:</p>\r\n\r\n<ul>\r\n\t<li>Define licensing rules.</li>\r\n\t<li>Enforce licensing rules.</li>\r\n\t<li>Track usage.</li>\r\n</ul>\r\n\r\n<p>AWS License Manager currently integrates with Amazon EC2, allowing you to track licenses for default (shared-tenancy) EC2 instances, Dedicated Instances, Dedicated Hosts, Spot Instances, and Spot Fleet, and Auto Scaling groups. Refer to <a href=\"https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html\" target=\"_blank\">https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;incorrect.&nbsp;Because AWS License Manager manages the BYOL licenses. Although AWS System Manager can work together with AWS License Manager to manage licenses for on-premises servers and non-AWS public clouds, it is not the central place to provide license management.</li>\r\n\t<li>Option&nbsp;B is&nbsp;CORRECT:&nbsp;Because AWS License Manager can define licensing rules, track license usage, and enforce controls on license use to reduce the risk of license overages.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because the AWS License manager should be considered first for licensing management.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because AWS License Manager can manage non-Microsoft licenses.</li>\r\n</ul>\r\n\r\n<p>According to <a href=\"https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html\" target=\"_blank\">https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html</a>, license Manager tracks various software products from Microsoft, IBM, SAP, Oracle, and other vendors.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34770,
            "question_id": 44759,
            "answers": [
              {
                "choice": "<p>Create license rules in AWS System Manager for all BYOL licenses. Use the rules to make sure that there are no non-compliant activities. Link the rules when EC2 AMI is created. System Manager console has provided license usage status.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Define license rules in AWS License Manager for the required licenses. Enforce the license rules in EC2 and track usage in the AWS License Manager console.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use a license management blueprint to create a dedicated Lambda to control license usage. Lambda outputs the usage status to Cloudwatch Metrics which can be used by the administrators to track the status.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Define and enforce license rules in AWS License Manager for the Microsoft relevant licenses such as windows, SQL Server as only Microsoft licenses are supported. For the other licenses such as IBM Db2, track the license usage in AWS System Manager.</p>\r\n\r\n<p>&nbsp;</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 44760,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An outsourcing company is working on a government project. Security is very important to the success of the application. The application is developed mainly in EC2 with several application load balancers. CloudFront and Route53 are also configured. The major concern is that it should be able to be protected against DDoS attacks. The company decides to activate the AWS Shield Advanced feature. To this effect, it has hired an external consultant to &#39;educate&#39; its employees on the same. For the below options, which ones help the company to understand the AWS Shield Advanced plan? Select 3.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A, D, E</strong></p>\r\n\r\n<p><strong>Explanation</strong>:</p>\r\n\r\n<p>AWS Shield has two plans - AWS Shield Standard and AWS Shield Advanced.</p>\r\n\r\n<p><strong>AWS Shield Standard:</strong></p>\r\n\r\n<p>AWS Shield Standard activates automatically at no additional charge. AWS Shield Standard defends against the most common, frequently occurring network and transport layer DDoS attacks that target your applications.</p>\r\n\r\n<p><strong>AWS Shield Advanced:</strong></p>\r\n\r\n<p>For higher levels of protection against attacks. It has a subscription fee which is $ 3000 per month.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT.&nbsp;Because Elastic Load Balancing (ELB), Amazon CloudFront, Amazon Route 53 are all covered by AWS Shield Advanced.</li>\r\n\t<li>Option B is incorrect.&nbsp;Because AWS Shield Advanced has a subscription commitment of 1 year with a base monthly fee of 3000$.</li>\r\n\t<li>Option C is incorrect.&nbsp;Because Route 53 is covered by AWS Shield Advanced.</li>\r\n\t<li>Option D is CORRECT.&nbsp;Because 24*7 support by the DDoS Response team is a key feature of the advanced plan.</li>\r\n\t<li>Option E is CORRECT.&nbsp;Because AWS Shield Advanced integrates with AWS CloudWatch and provides relevant reports.</li>\r\n\t<li>Option F is incorrect.&nbsp;Because AWS Shield is not within AWS WAF. Please note that both of them help protect the AWS resources. AWS WAF is a web application firewall service, while AWS Shield provides expanded DDoS attack protection for the AWS resources.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34771,
            "question_id": 44760,
            "answers": [
              {
                "choice": "<p>AWS Shield Advanced plan is able to protect application load balancers, CloudFront and Route53 from DDoS attacks.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Shield Advanced plan does not have a monthly base charge. The company only needs to pay the data transfer fee. Other than that, AWS WAF includes no additional cost.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Route 53 is not covered by AWS Shield Advanced plan. However, Route 53 is able to be protected under AWS WAF. A dedicated rule in WAF should be customized.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>24*7 support by the DDoS Response team. Critical and urgent priority cases can be answered quickly by DDoS experts. Custom mitigations during attacks are also available.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Real-time notification of attacks is available via Amazon CloudWatch. Historical attack reports are also provided.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Shield is a sub-feature within AWS WAF. AWS Shield Advanced can be activated in AWS WAF console, which also provides the near real-time metrics and packet captures for attack forensics.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44805,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your organization is planning to shift one of the high-performance data analytics applications running on Linux servers purchased from the 3rd party vendor to the AWS. Currently, the application works in an on-premises load balancer, and all the data is stored in a very large shared file system for low-latency and high throughput purposes. The management wants minimal disruption to existing service and also wants to do stepwise migration for easy rollback. Please select 3 valid options from below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C, D, E</strong></p>\r\n\r\n<ul>\r\n\t<li>Options C, D, and E are correct because network extension via VPN or Direct Connect will allow the on-premises instances to use the AWS resources like EFS. EFS is elastic file storage that can be mounted on EC2 and other instances. It is inherently durable and scalable. EFS stores the data by default at multiple availability zones. With Route 53 Weighted policy, the requests can be distributed to on-premise and AWS resources easily in a controlled manner.</li>\r\n\t<li>Option A is INCORRECT because S3 will work as shared, durable storage.&nbsp;But it may not be a suitable choice for low-latency, high throughput load processing. As the application cannot be easily modified, presenting the S3 as a local file system will be another task and has to be done via File Storage Gateway.</li>\r\n\t<li>Option B is INCORRECT because the purpose is to use a shared file system solution (EFS).&nbsp;RAID1 for EBS is not&nbsp;necessary as the application requires data from EFS rather than the local storage.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34816,
            "question_id": 44805,
            "answers": [
              {
                "choice": "<p>Save all the data on S3 and use it as shared storage. Use an application load balancer with EC2 instances to share the processing load.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a RAID 1 storage using EBS and run the application on EC2 with application-level load balancers to share the processing load.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the VPN or Direct Connect to create a link between your company premise and AWS regional data center.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an EFS with provisioned throughput and share the storage between your on-premise instances and EC2 instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Setup a Route 53 record to distribute the load between on-premises and AWS load balancer with the weighted routing policy.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 44845,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A communication company has deployed several EC2 instances in region ap-southeast-1 which are used to monitor user activities. The AWS administrator has configured an EBS lifecycle policy to create a snapshot every day for each EBS volume to preserve data. The retention is configured as 5, which means the oldest snapshot will be deleted after 5 days. The administrator plans to copy some snapshots manually to another region ap-southeast-2 as these snapshots contain some important data. Can these snapshots be retained?&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;C</strong></p>\r\n\r\n<p>Copying a snapshot to a new Region is commonly used for geographic expansion, migration, disaster recovery, etc.</p>\r\n\r\n<p>EBS snapshots&#39; lifecycle policies contain some rules. One of the rules is that when you copy a policy&#39;s snapshot, the new copy is not influenced by the retention schedule.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;incorrect:&nbsp;Because the new snapshots will be kept.</li>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because no matter the new snapshots are in the same region or not, they can be retained.</li>\r\n\t<li>Option&nbsp;C is&nbsp;CORRECT:&nbsp;Because the new snapshots are not affected by the original policy. Reference is in <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html</a>.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because there is no delete protection option for snapshots.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34856,
            "question_id": 44845,
            "answers": [
              {
                "choice": "<p>These new snapshots may be deleted after the retention period, as they are still affected by the retention policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>These new snapshots can be kept only when they are copied to another region.&nbsp;Otherwise, they may be deleted by the retention policy. In this case, the snapshots can be kept.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>These new snapshots can be kept as the retention schedule is not carried over to the copy.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The new snapshots in region ap-southeast-2 will be deleted after 5 days unless the delete protection option is enabled.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45084,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>You are working for a large company.&nbsp;You have set up the AWS consolidated billing with a Management account and several member accounts. However, the management&nbsp;account&rsquo;s cost allocation report&nbsp;does not use the AWS generated cost allocation tags to organize the resource costs.</p>\n\n<p>For example, there is an AWS tag called &ldquo;createdBy&rdquo; which tracks who created a resource. But in the report, the operator cannot track the cost filtered by &ldquo;createdBy&rdquo; tag. How can you fix this issue in the cost allocation report?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer -&nbsp;D</strong></p>\n\n<p>AWS provides two types of cost allocation tags: AWS-generated tags and user-defined tags. AWS defines, creates, and applies the AWS-generated tags for you, and users define, create, and apply user-defined tags.<br />\nTo use the AWS-generated tags, a management account owner must activate them in the Billing and Cost Management console. When a management account owner activates the tag, the tag is also activated for all member accounts.</p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong>:&nbsp;Because AWS-generated tags should be activated.</li>\n\t<li><strong>Option B is&nbsp;incorrect</strong>:&nbsp;Because AWS-generated tags can only be activated in the management account.</li>\n\t<li><strong>Option C is&nbsp;incorrect</strong>:&nbsp;Same reason as Option B. Also, it is not user-defined tags.</li>\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT</strong>:&nbsp;Because the tag can be activated in &ldquo;Billing -&gt; Cost Management.</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/11/ckeditor_9_47_00.png\" style=\"height:165px; width:1000px\" /></p>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tags.html\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tags.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 71945,
            "question_id": 45084,
            "answers": [
              {
                "question_id": "45084",
                "choice": "<p>Use the Management account to log in to the AWS console and activate the user-defined tags in the Billing and Cost Management console.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45084",
                "choice": "<p>For both, the Management account and member accounts, use AWS CLI to activate AWS generated tags for Billing and Cost Management.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45084",
                "choice": "<p>Log in to the AWS console of both Management account and member accounts, activate the user-defined tags in Billing -&gt; Cost Explorer -&gt; Cost Allocation Tags.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45084",
                "choice": "<p>Log in to the AWS console using the Management account and activate the AWS-generated&nbsp;tags in the Billing and Cost Management console.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45123,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has run a major auction platform where people buy and sell a wide range of products. The platform requires that transactions from buyers and sellers get processed in exactly the order received. At the moment, the platform is implemented using RabbitMQ which is a light-weighted queue system. The company consulted you to migrate the on-premise platform to AWS. How should you design the migration plan? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, C</strong></p>\r\n\r\n<p>SQS has 2 types - standard queue and FIFO queue. In this case, the FIFO queue should be chosen as the order of message processing is critical to the application. FIFO queue has the below key features.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_2.png\" style=\"height:440px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is&nbsp;CORRECT:&nbsp;Because the SQS FIFO queue can help with the message processing in the right order.</li>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because the SQS standard queue may have an issue that some messages are handled in the wrong sequence.</li>\r\n\t<li>Option C is&nbsp;CORRECT:&nbsp;Because the message group ID is a feature to help with the FIFO delivery. Messages that belong to the same message group are always processed one by one, in a strict order relative to the message group.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because deduplication ID is a method to help on preventing messages to be processed duplicately, which is not used to guarantee the message order.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35130,
            "question_id": 45123,
            "answers": [
              {
                "choice": "<p>When the bids are received, send the bids to an SQS FIFO queue before they are processed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>When the users have submitted the bids from the frontend, the backend service delivers the messages to an SQS standard queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a message group ID to the messages before they are sent to the SQS queue so that the message processing is in a strict order.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use an EC2 or Lambda to add a deduplication ID to the messages before the messages are sent to the SQS queue to ensure that bids are processed in the right order.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28706,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Server-side encryption is about data encryption at rest. That is, Amazon S3 encrypts your data at the object level as it writes it to disk in its data centers and decrypts it for you when you go to access it. A few different options are depending on how you choose to manage the encryption keys. One of the options is called &#39;Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)&#39;. Which of the following best describes how this encryption method works?</p>\r\n\r\n<p>Choose the correct option from the below:</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because there are no separate permissions to the key that protects the data key.</p>\r\n\r\n<p>Option B is CORRECT because as mentioned above, each object is encrypted with a strong unique key and that key itself is encrypted by a master key.</p>\r\n\r\n<p>Option C is incorrect because the keys are managed by the AWS.</p>\r\n\r\n<p>Option D is incorrect because there is no randomly generated key and the client does not do the encryption.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on S3 encryption, please visit the links-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18823,
            "question_id": 28706,
            "answers": [
              {
                "choice": "<p>There are separate permissions for the use of an envelope key (a key that protects your data&#39;s encryption key) that provides added protection against unauthorized access of your objects in S3 and also provides you with an audit trail of when your key was used and by whom.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Each object is encrypted with a unique key employing strong encryption. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You manage the encryption keys and Amazon S3 manages the encryption, as it writes to disk, and decryption when you access your objects.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A randomly generated data encryption key is returned from Amazon S3, which is used by the client to encrypt the object data.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45127,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work in a video game company, and your team is working on a feature that tells how many times certain web pages have been viewed or clicked. You also created an AWS Lambda function to show some key statistics of the data. You tested the Lambda function, and it worked perfectly.</p>\r\n\r\n<p>However, your team lead requires you to show the statistics every day at 8:00 AM GMT on a big TV screen so that when employees come into the office every morning, they have a rough idea of how the feature runs. What is the most cost-efficient and straightforward way for you to make this happen?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer&ndash;&nbsp;A</strong></p>\r\n\r\n<p>Potentially, more than one option may work. However, this question asks the most cost-efficient and straightforward method that needs to be considered.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;<strong>CORRECT</strong> because the AWS CloudWatch Events rule is free and quite easy&nbsp;to begin with. To schedule a daily event at 8:00 AM GMT, you just need to set up a cron rule, as given in the below screenshot.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_6.png\" style=\"height:384px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option B is&nbsp;incorrect:&nbsp;Because launching a new EC2 instance for this task is not cost-efficient.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because this is not something AWS Batch works. For AWS Batch, it runs as a containerized application on an Amazon EC2 instance in your computing environment.</li>\r\n\t<li>Option D is&nbsp;incorrect:&nbsp;Because firstly, it should be &ldquo;Create rule&rdquo; rather than &ldquo;Create Event&rdquo;. Secondly, the Cron expression of &ldquo; * ? * * 08 00&rdquo; is incorrect.</li>\r\n</ul>\r\n\r\n<p>For More information, Please check below AWS Docs:&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35134,
            "question_id": 45127,
            "answers": [
              {
                "choice": "<p>Create an AWS CloudWatch Events rule that is scheduled using a cron expression.&nbsp;Configure the target as the Lambda function.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Amazon Linux EC2 T2 instance and set up a Cron job using Crontab. Use AWS CLI to call your AWS Lambda every 8:00 AM.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Batch to set up a job with a job definition that runs every 8:00 AM for the Lambda function.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In AWS CloudWatch Events console, click &ldquo;Create Event&rdquo; using the cron expression &ldquo; * ? * * 08 00&rdquo;. Configure the target as the Lambda function.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28767,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You decide to create a bucket on AWS S3 called &#39;mybucket&#39; and then perform the following actions in the order that they are listed here.</p>\r\n\r\n<p>- You upload a file to the bucket called &#39;file1&#39;</p>\r\n\r\n<p>- You enable versioning on the bucket</p>\r\n\r\n<p>- You upload a file called &#39;file2&#39;</p>\r\n\r\n<p>- You upload a file called &#39;file3&#39;</p>\r\n\r\n<p>- You upload another file called &#39;file2&#39;</p>\r\n\r\n<p>Which of the following is true for &#39;mybucket&#39;? Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Objects stored in your bucket before you set the versioning state have a version ID of null.&nbsp;When you enable versioning, existing objects in your bucket do not change. What changes is how Amazon S3 handles the objects in future requests.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because the version ID for file1 would be null.</p>\r\n\r\n<p>Option B is CORRECT because the file1 was put in the bucket before the versioning was enabled.&nbsp;Hence, it will have a null version ID. The file2 will have two version IDs, and file3 will have a single version ID.</p>\r\n\r\n<p>Option C is incorrect because file2 cannot have a null version ID as the versioning was enabled before putting it in the bucket.</p>\r\n\r\n<p>Option D is incorrect because once the versioning is enabled, all the files put <em>after</em>&nbsp;that will not have a null version ID. But file1 was put <em>before </em>versioning was enabled.&nbsp;So it will have null as its version ID.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on S3 versioning, please visit the below link.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18884,
            "question_id": 28767,
            "answers": [
              {
                "choice": "<p>There will be 1 version ID for file1, 2 version IDs for file2, and 1 version ID for file3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The version ID for file1 will be null. There will be 2 version IDs for file2, and 1 version ID for file3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>There will be 1 version ID for file1, the version ID for file2 will be null, and there will be 1 version ID for file3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All file version ID&#39;s will be null because versioning must be enabled before uploading objects to &#39;mybucket&#39;.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45342,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You work in the integration team of a company, and your team is integrating the infrastructure with Amazon VPC. You are recently assigned a task to create a VPN connection. You have the AWS management console logging access. The first step that you plan to do is to create a customer gateway in the AWS VPC console. In order to do that, which information do you need? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>The first step of creating a VPN connection is to set up a customer gateway in the AWS VPC console according to <a href=\"https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html\" target=\"_blank\">https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html</a>.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/25/ckeditor_9.png\" style=\"height:336px; width:1000px\" /></p>\r\n\r\n<p><strong>Option&nbsp;A is&nbsp;correct:</strong>&nbsp;AWS VPN has used BGP ASN to establish the connection for dynamic routing.</p>\r\n\r\n<p><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;For static routing, no BGP ASN is needed.</p>\r\n\r\n<p><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;The internet-routable IP address for the customer gateway device&#39;s external interface is required. And the value must be static.</p>\r\n\r\n<p><strong>Option&nbsp;D is&nbsp;correct</strong>:&nbsp;Same reason as option C.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35349,
            "question_id": 45342,
            "answers": [
              {
                "choice": "<p>A Border Gateway Protocol (BGP) Autonomous System Number (ASN) if the routing type is Dynamic.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A BGP Autonomous System Number (ASN) if the routing type is static.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A dynamic public IP address for the customer gateway device. If the customer gateway is behind a NAT device, use the NAT device&#39;s dynamic public IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A static, internet-routable IP address for the customer gateway device.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28970,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are writing an AWS CloudFormation template, and you want to assign values to properties that will not be available until runtime. You know that you can use intrinsic functions to do this but are unsure which part of the template they can use. Which of the following is correct in describing how you can currently use intrinsic functions in an AWS CloudFormation template?</p>\r\n\r\n<p>Choose an option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<p>As per AWS documentation:</p>\r\n\r\n<p>You can use intrinsic functions only in specific parts of a template. Currently, you can use intrinsic functions in resource properties, outputs, metadata attributes, and update policy attributes. You can also use intrinsic functions to create stack resources conditionally.</p>\r\n\r\n<p>Hence, B is the correct answer.</p>\r\n\r\n<p>For more information on intrinsic function, please refer to the below link.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19087,
            "question_id": 28970,
            "answers": [
              {
                "choice": "<p>You can use intrinsic functions in any part of a template.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use intrinsic functions only in specific parts of a template. You can use intrinsic functions in resource properties, outputs, metadata attributes, and update policy attributes.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can use intrinsic functions only in the resource properties part of a template.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use intrinsic functions in any part of a template, except AWSTemplateFormatVersion and Description.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28973,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your application uses an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence. The database CPU is often above 80% usage, and 90% of I/O operations on the database are reads. To improve the performance, you recently added a single-node Memcached ElastiCache Cluster to cache frequent DB query results. In the next weeks, the overall workload is expected to grow by 30%. Do you need to change anything in the architecture to maintain the high availability of the application with the anticipated additional load, and why?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because having two clusters in different AZs provides high availability of the cache nodes, removing the single point of failure. It will help caching&nbsp;the data; hence, reducing the overload on the database, maintaining the availability, and reducing the impact.</li>\r\n\t<li>Option B is incorrect because, even though AWS will automatically recover the failed node, there are no other nodes in the cluster once the failure happens. So, the data from the cluster would be lost once that single node fails. For higher availability, there should be multiple nodes. Also, once the cache node fails, all the cached read load will go to the database, which will not be able to handle the load with a 30% increase to current levels. This means there will be an availability impact.</li>\r\n\t<li>Option C is incorrect because provisioning the nodes in the same AZ does not tolerate an AZ failure. For higher availability, the nodes should be spread across multiple AZs.</li>\r\n\t<li>Option D is incorrect because the very purpose of the cache node was to reduce the impact on the database by not overloading it. If the cache node fails, the database will not be able to handle the 30% increase in the load; so, it will have an availability impact.</li>\r\n</ul>\r\n\r\n<p><strong>More information on this topic from AWS Documentation:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/BestPractices.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/BestPractices.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Mitigating Node Failures</strong></p>\r\n\r\n<p>To mitigate the impact of a node failure, spread your cached data over more nodes. Because Memcached does not support replication, a node failure will always result in some data loss from your cluster.</p>\r\n\r\n<p>When you create your Memcached cluster, you can create it with 1 to 20 nodes or more by special request. Partitioning your data across a greater number of nodes means you&rsquo;ll lose less data if a node fails. For example, if you partition your data across 10 nodes, any single node stores approximately 10% of your cached data. In this case, a node failure loses approximately 10% of your cache which needs to be replaced when a replacement node is created and provisioned.</p>\r\n\r\n<p><strong>Mitigating Availability Zone Failures</strong></p>\r\n\r\n<p>To mitigate the impact of an availability zone failure, locate your nodes in as many availability zones as possible. In the unlikely event of an AZ failure, you will lose only the data cached in that AZ, not the data cached in the other AZs.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19090,
            "question_id": 28973,
            "answers": [
              {
                "choice": "<p>Yes. You should deploy two Memcached ElastiCache clusters in different AZ&#39;s&nbsp;with a change in application logic to support both clusters because the RDS instance will not be able to handle the load if the cache node fails.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>No. If the cache node fails, the automated ElastiCache node recovery feature will prevent any availability impact.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Yes. You should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>No. If the cache node fails, you can always get the same data from the DB without having any availability impact.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 49909,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work in a DevOps team, and your team maintains several applications deployed in AWS. At the moment, there are dozens of server certificates stored in IAM. These certificates are used for different purposes and have different expiry date. You have to renew the certificates before they expire. Otherwise, the services will be impacted. You want to use another approach to renew and manage these certificates. Which method is the best?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>Check <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html</a> on how to manage server certificates in IAM and ACM.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrec</strong>t:​ Because for the imported server certificates in IAM, there is no IAM console to manage them. This is one major disadvantage of managing certificates in IAM.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT:</strong>​ Because ACM is a preferred solution. Certificates requested by ACM are free and automatically renew.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because you cannot migrate the certificates from IAM to ACM directly. There is no such console to do that. For ACM, you can import third-party certificates to the service.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect:</strong>​ Because ACM cannot automatically renew imported third-party certificates. You are responsible for monitoring the expiration date.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Please check the reference in</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39777,
            "question_id": 49909,
            "answers": [
              {
                "choice": "<p>In the IAM console, add a new strategy for server certificates to renew one month before the expiry date automatically.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Provision and manage the server certificates in AWS Certificate Manager (ACM). The certificates requested from ACM are automatically renewed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In IAM console, migrate the certificates from IAM to ACM then ACM can automatically renew the certificates one month before the expiry date.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import all third-party certificates into ACM. ACM is responsible for the automatic renew for both third-party certificates and ACM provided certificates.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      }
    ]
  }