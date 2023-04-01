// Practice Test 3
var SAP_C02_Whiz_PracticeTest3 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": 98609,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A communication company has deployed several EC2 instances in region ap-southeast-1 which are used to monitor user activities. The AWS administrator has configured an EBS lifecycle policy to create a snapshot every day for each EBS volume to preserve data. The retention is configured as 5, which means the oldest snapshot will be deleted after 5 days. The administrator plans to copy some snapshots manually to another region ap-southeast-2 as these snapshots contain some important data. Can these snapshots be retained?&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer:&nbsp;C</strong></p>\r\n\r\n<p>Copying a snapshot to&nbsp;a new Region is commonly used for geographic expansion, migration, disaster recovery, etc.</p>\r\n\r\n<p>EBS snapshots&#39; lifecycle policies contain some rules. One of the rules is that when you copy a policy&#39;s snapshot, the new copy is not influenced by the retention schedule.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong> because the copied snapshots will be kept.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect</strong> because no matter whether the copied snapshots are in the same region or not, they can be retained.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;CORRECT</strong> because the new snapshots are not affected by the original policy.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong> because there is no delete protection option for snapshots.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123457,
          "question_id": 98609,
          "answers": [
            {
              "choice": "<p>The copied&nbsp;snapshots may be deleted after the retention period, as they are still affected by the retention policy</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The copied&nbsp;snapshots can be kept only when they are copied to another region.&nbsp;Otherwise, they may be deleted by the retention policy. In this case, the snapshots can be kept</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The copied&nbsp;snapshots can be kept as the retention schedule is not carried over to the copy</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The copied snapshots in region ap-southeast-2 will be deleted after 5 days unless the delete protection option is enabled</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98610,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IT company has a big data analytics application that is deployed in EC2 in multiple availability zones. These EC2 instances simultaneously access a shared Amazon EFS file system using a traditional file permissions model. A recent internal security audit has found a potential security risk, as the EFS file system is not encrypted for either at rest or in transit. What actions could be taken to address the potential security threat posed by the non-encryption of the EFS volume?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;A</strong></p>\r\n\r\n<p>Both encryption of data in transit and at rest are supported for EFS. Due to&nbsp;this, Amazon EFS now offers a comprehensive encryption solution. Blog&nbsp;<a href=\"https://aws.amazon.com/blogs/aws/new-encryption-of-data-in-transit-for-amazon-efs/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-encryption-of-data-in-transit-for-amazon-efs/</a> has an introduction to this.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT:&nbsp;</strong>For the encryption at rest, it can be enabled as an option when the EFS file system is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/25/ckeditor_aws6-9.jpg\" style=\"height:156px; width:750px\" /></p>\r\n\r\n<p>For the encryption in transit, it can be enabled when the EFS file system is mounted:</p>\r\n\r\n<p><em>sudo mount -t efs&nbsp; -o tls fs-12345678:/ /mnt/efs</em></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect:</strong> Because the encryption of data in transit is enabled when the EFS file system is mounted.</li>\r\n\t<li><strong>Option C is incorrect:</strong> Because the encryption of data at rest is enabled when the EFS file system is created.</li>\r\n\t<li><strong>Option D is incorrect:</strong> Same reason as Option B &amp; C.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/efs/latest/ug/encryption.html\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/encryption.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123458,
          "question_id": 98610,
          "answers": [
            {
              "choice": "<p>The encryption of data at rest has to be enabled when the Amazon EFS file system is created. The encryption of data in transit can be enabled when the file system is mounted in the EC2 instance</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest and in transit can be enabled when the Amazon EFS file system is created</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest and in transit can only be enabled when the Amazon EFS file system is mounted in the EC2 instance</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest can be enabled when the Amazon EFS file system is mounted in the EC2 instance. The encryption of data in transit is enabled when the EFS file system is created using the AWS console or CLI</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98611,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>For application development and testing purposes, your team has created several EFS volumes. As&nbsp;the AWS operation engineer, you have been tasked with&nbsp;mounting some EFS file systems on&nbsp;EC2 Linux instances with encryption enabled in transit. You have already installed the EFS mount helper on&nbsp;the instances. To use the mount helper properly when mounting the EFS volumes, which actions should you perform? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A, C and&nbsp;E</strong></p>\r\n\r\n<p>Encryption of data in transit is enabled by connecting to Amazon EFS using TLS. AWS recommends using the mount helper because it&#39;s the simplest option. The helper is in the amazon-efs-utils package which is an open-source collection of Amazon EFS tools. This link <a href=\"https://docs.aws.amazon.com/efs/latest/ug/using-amazon-efs-utils.html#efs-mount-helper\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/using-amazon-efs-utils.html#efs-mount-helper</a> is the user guide for the helper.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because the command is&nbsp;&ldquo;sudo mount -t efs fs-92758f7b -o tls /mnt/efs&rdquo;. The &ldquo;fs-92758f7b&rdquo; is the EFS file system ID.</li>\r\n\t<li><strong>Option B is incorrect </strong>because EFS encryption does not need the rule from the security group. For more on&nbsp;how to use&nbsp;mounting with the EFS mount helper, refer to <a href=\"https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html#mounting-fs-mount-helper\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html#mounting-fs-mount-helper</a>.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because mount targets are needed for the VPC&rsquo;s availability zones when the EFS file system is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/25/ckeditor_aws6-10.jpg\" style=\"height:429px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect.&nbsp;</strong>Similar to Option B, there is no specific network ACL rule needed for EFS encryption in transit.</li>\r\n\t<li><strong>Option E is CORRECT</strong> because the &ldquo;-o tls&rdquo; option is needed to enable the encryption in transit.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123459,
          "question_id": 98611,
          "answers": [
            {
              "choice": "<p>Get the&nbsp;EFS file system&#39;s ID from the console or programmatically through the Amazon EFS API</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Make sure that the security group of EC2 instances has opened the port 443 for SSL traffic</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create mount targets for your EC2 instances</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>In the subnets of your EC2 Instances, create a&nbsp;network ACL rule to allow HTTPS traffic so that encryption in transit between EC2 and EFS file system is allowed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>When the mount helper utility is used, add the encryption option:&nbsp;&ldquo;-o tls&rdquo;</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98612,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS consultant in an IT company. Your development manager just assigned you a task to evaluate if the EBS volume types of the EC2 instances were properly configured in all regions. The major concern that you have found is that almost all EBS volumes are using the Provisioned IOPS SSD (io1) volume type which costs the company a lot. You plan to change the volume type from io1 to other types. However, for which scenarios should you still use the EBS volume type of io1?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>Refer to <a href=\"https://aws.amazon.com/ebs/features/\" target=\"_blank\">https://aws.amazon.com/ebs/features/</a> for the use cases of different EBS volume types:</p>\r\n\r\n<table cellspacing=\"0\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Volume Type</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>EBS Provisioned IOPS SSD (io1)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>EBS General Purpose SSD (gp2)*</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Throughput Optimized HDD (st1)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Cold HDD (sc1)</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Short Description</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Highest performance SSD volume designed for latency-sensitive transactional workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>General Purpose SSD volume that balances price performance for a wide variety of transactional workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Low-cost HDD volume designed for frequently accessed, throughput intensive workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Lowest cost HDD volume designed for less frequently accessed workloads</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Use Cases</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>I/O-intensive NoSQL and relational databases</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Boot volumes, low-latency interactive apps, dev &amp; test</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Big data, data warehouses, log processing</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t<p>Colder data requiring fewer scans per day</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because according to the above introductions, this should be a gp2 for a boot volume.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:&nbsp;</strong>Because this is ideal for io1 as it needs the highest performance and lowest latency.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:&nbsp;</strong>Because this should be an st1, it could lower the cost and meet the performance need.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:</strong>&nbsp;Because sc1 is suitable for this as it is not frequently used. Moreover, because it contains a large amount of data, using io1 is not cost-efficient.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123460,
          "question_id": 98612,
          "answers": [
            {
              "choice": "<p>A boot volume of a test server that&nbsp;is frequently used by the Quality Assurance team</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A Cassandra database that needs extremely low latency and high performance when being processed</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>A data warehouse server that contains a huge amount of customer data. The data needs to be accessed and analyzed by a monitor process frequently</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Some large and legacy cold data that&nbsp;is stored to trace customers&rsquo; activities in the past. The database requires fewer scans per day</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98613,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>AWS Lambda functions are widely used in your company by different teams. There is a requirement to extend the Lambda functions to integrate with other tools for monitoring, observability and security such as AppDynamics, HashiCorp, Splunk, etc. With the integration, some additional code needs to be run during function initialization, invocation or shut down. Which of the following options can achieve the requirement by extending Lambda&rsquo;s execution environment?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because Lambda Extensions provides an easy way to integrate Lambda with other tools. The Lambda Extensions can be deployed through Lambda Layers that are generated by the .zip archive files. Lambda service extracts the extension files from the Lambda layers and manages the lifecycle of extensions.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because there is no need to create other Lambda functions. The existing Lambda functions should be extended by Lambda Extensions.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because CloudWatch event rules cannot trigger additional code during function initialization or shut down. Creating extra Lambda functions is not necessary.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Lambda extensions cannot be used to process SQS messages from Lambda functions. SQS queues are not required for building extensions for AWS Lambda.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/building-extensions-for-aws-lambda-in-preview/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/building-extensions-for-aws-lambda-in-preview/</a>,</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123535,
          "question_id": 98613,
          "answers": [
            {
              "question_id": "98613",
              "choice": "<p>Deploy Lambda extensions through Lambda layers by adding the extensions in the Lambda .zip archives</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98613",
              "choice": "<p>Deploy the required tools in other dedicated Lambda functions and integrate existing Lambda functions with these dedicated Lambda functions</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98613",
              "choice": "<p>Extend Lambda function with CloudWatch event rules by configuring third-party Lambda functions to process events</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98613",
              "choice": "<p>Integrate the Lambda function with Amazon SQS and process the queue messages by Lambda extensions</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98614,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are hired as an AWS engineer. Your major responsibility is to migrate existing services to the AWS platform. The company&rsquo;s on-premises main page is made of Node.js and PostgreSQL database. You just migrated the frontend and backend to an EC2 instance. Also, you created a PostgreSQL instance in RDS.</p>\r\n\r\n<p>However, you found that the EC2 instance cannot talk with the RDS instance with the exception &ldquo;could not connect to server: Connection timed out&rdquo;. How should you check the configurations and fix this problem? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;CORRECT:&nbsp;</strong>Because if the used endpoint or port is incorrect, the error would be &ldquo;Connection timed out&rdquo;.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:&nbsp;</strong>Because the AWS SDK version does not cause the issue to communicate with the RDS instance.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:&nbsp;</strong>Because the low configured capacity does not lead to a &ldquo;Connection timed out&rdquo; issue.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT:&nbsp;</strong>Because the most common problem when attempting to connect to a PostgreSQL DB instance is that the security group assigned to the DB instance has incorrect access rules.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.SQLServer.Connect\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.SQLServer.Connect</a> is a user guide on how to troubleshoot the RDS issues.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123462,
          "question_id": 98614,
          "answers": [
            {
              "choice": "<p>Check that if the hostname is the DB instance endpoint and the port number is correct</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the AWS SDK version is correct as there are issues for certain versions to communicate with RDS instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the RDS instance has configured enough read and write capacity. If not, the &ldquo;Connection timed out&rdquo; issue may appear</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Check that the security group assigned to the DB instance has the necessary rules to allow access through the EC2 instance</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98615,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Two departments A and B have been added into a consolidated billing organization. Department A has 5 reserved RDS instances with DB Engine as MySQL. During one particular hour, department A used three DB Instances, and department B used two RDS instances for a total of 5 DB Instances on the consolidated bill. How should the RDS instances in department B be configured so that all five instances are charged as Reserved DB Instances?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct</strong>&nbsp;<strong>Answer: E</strong></p>\r\n\r\n<p>In order to receive the cost-benefit from Reserved DB Instances, all the attributes of DB Instances (DB Engine, DB Instance class, Deployment type, and License Model) in another account should match the attributes of the Reserved DB Instances.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A &amp; D are all required,</strong> and do find the reference in the following link.</li>\r\n\t<li><strong>Option E is&nbsp;CORRECT:&nbsp;</strong>Because all of the other options are needed.&nbsp;</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123463,
          "question_id": 98615,
          "answers": [
            {
              "choice": "<p>Department B should launch DB instances in the same region as Reserved Instance in department A</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The DB engine in Department B should be MySQL</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The DB Instance Class should be the same in both departments such as m1.large</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The deployment type such as Multi-AZ should be the same in both department A and department B</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>All the above are needed</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98616,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are working for a large company.&nbsp;You have set up the AWS consolidated billing with a Management account and several member accounts. However, the management&nbsp;account&rsquo;s cost allocation report&nbsp;does not use the AWS generated cost allocation tags to organize the resource costs.</p>\r\n\r\n<p>For example, there is an AWS tag called &ldquo;createdBy&rdquo; which tracks who created a resource. But in the report, the operator cannot track the cost filtered by &ldquo;createdBy&rdquo; tag. How can you fix this issue in the cost allocation report?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<p>AWS provides two types of cost allocation tags: AWS-generated tags and user-defined tags. AWS defines, creates, and applies the AWS-generated tags for you, and users define, create, and apply user-defined tags.<br />\r\nTo use the AWS-generated tags, a management account owner must activate them in the Billing and Cost Management console. When a management account owner activates the tag, the tag is also activated for all member accounts.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>:&nbsp;Because AWS-generated tags should be activated.</li>\r\n\t<li><strong>Option B is&nbsp;incorrect</strong>:&nbsp;Because AWS-generated tags can only be activated in the management account.</li>\r\n\t<li><strong>Option C is&nbsp;incorrect</strong>:&nbsp;Same reason as Option B. Also, it is not user-defined tags.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT</strong>:&nbsp;Because the tag can be activated in &ldquo;Billing -&gt; Cost Management.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/11/ckeditor_9_47_00.png\" style=\"height:124px; width:750px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tags.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tags.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123464,
          "question_id": 98616,
          "answers": [
            {
              "choice": "<p>Use the Management account to log in to the AWS console and activate the user-defined tags in the Billing and Cost Management console</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For both, the Management account and member accounts, use AWS CLI to activate AWS generated tags for Billing and Cost Management</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Log in to the AWS console of both Management account and member accounts, activate the user-defined tags in Billing -&gt; Cost Explorer -&gt; Cost Allocation Tags</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Log in to the AWS console using the Management account and activate the AWS-generated&nbsp;tags in the Billing and Cost Management console</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98617,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has a logging microservice used to generate logs when users have entered certain commands in another application. This logging service is implemented via an SQS standard queue that an EC2 instance is listening to. However, you have found that on some occasions, the order of the logs is not maintained. As a result, it becomes harder to use this service to trace users&rsquo; activities. How should you simply fix this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>The FIFO queue improves upon and complements the standard queue. The most important features of this queue type are FIFO (First-In-First-Out) delivery and exactly-once processing. The FIFO queue is mainly used to process the messages in the queue that needs to be guaranteed without any items being out of order or duplicated.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because you can&#39;t convert an existing standard queue into a FIFO queue. This is clarified in&nbsp;<a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html\">FIFO-queues</a>.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because in this context the FIFO queue can guarantee the sequence for users&#39; operations so that the issue of the logging system is fixed. Note that according to the question description the DelaySeconds parameter is assumed as per-queue delay, there is a message group ID per message, logs message bodies must be considered by SQS as different e.g. timestamp, application, command, user. Otherwise, scenarios when additional logic applies to uniqueness or duplicates should be dealt with by the producer providing a message deduplication ID value.</li>\r\n\t<li><strong>Option C is incorrect</strong> because this is not a straightforward method by changing the whole microservice to SWF. Option B is much simpler than this option.</li>\r\n\t<li><strong>Option D is incorrect.</strong>&nbsp;Refer to the explanations in Option B.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-message-order.html\" target=\"_blank\">FIFO-queues-message-order</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html\" target=\"_blank\">sqs-best-practices</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123465,
          "question_id": 98617,
          "answers": [
            {
              "choice": "<p>Convert the existing standard queue into a FIFO queue. Add a deduplication ID for the messages that are sent to the queue</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Delete the existing standard queue and recreate it as a FIFO queue. As a result, the order for the messages to be received is ensured</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the whole microservice application to SWF so that the operation sequence is guaranteed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The wrong order of timestamps is a limitation of SQS, which does not have a fix</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98618,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>John is a software contractor and is working on a web application. Since the budget is limited and the schedule is tight, he decides to implement it using API gateway and Lambda so that he does not need to consider the server management, scalability, etc. The customer has raised concerns that the APIs should be kept secure and there should be mechanisms to control the access to API endpoints. Which below method can be used to help secure the API?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;E</strong></p>\r\n\r\n<p>Multiple mechanisms can be used to control access to the API in the API gateway. And several methods can be used together to implement a very granular and secure application. <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html</a> is an introduction to the methods.</p>\r\n\r\n<p>The below mechanisms can be chosen.</p>\r\n\r\n<ul>\r\n\t<li>Resource policies let you create resource-based policies to allow or deny access to your APIs and methods from the specified source IP addresses or VPC endpoints. It can be configured in the API Gateway console:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.jpg\" style=\"height:222px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Standard AWS IAM roles and policies offer flexible and robust access controls that can be applied to an entire API or individual methods.</li>\r\n</ul>\r\n\r\n<p>The below is an IAM policy example of calling the Lambda function:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.1.jpg\" style=\"height:270px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Lambda authorizers are Lambda functions that control access to REST API methods using bearer token authentication and information described by headers, paths, query strings, stage variables, or context variables request parameters.</li>\r\n</ul>\r\n\r\n<p>In the API Gateway console, lambda authorizers can be created in the below place.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.2.jpg\" style=\"height:385px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Amazon Cognito user pools let you create customizable authentication and authorization solutions for your REST APIs.</li>\r\n\t<li>As a result, <strong>option E is correct.</strong></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123466,
          "question_id": 98618,
          "answers": [
            {
              "choice": "<p>Attach a resource policy to the API Gateway API, which controls access to the API Gateway resources. Access can be controlled by IAM condition elements, including conditions on AWS account, source VPC, etc</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use IAM permissions to control access to the API Gateway component. For example, in order to call a deployed API, the API caller must be granted permission to perform required IAM actions supported by the API execution component of API Gateway</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Lambda function as the authorizer. When a client calls the API, the API Gateway either supplies the authorization token that is extracted from a specified request header for the token-based authorizer or it passes in the incoming request parameters as the input to the request parameters-based authorizer Lambda function</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Cognito user pool to control who can access the API in Amazon API Gateway. You need to use the Amazon Cognito console, CLI/SDK, or API to create a user pool. Then, in the API Gateway, create an API Gateway authorizer with the chosen user pool</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>All the above options are correct</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98619,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You deployed your company website using Elastic Beanstalk, and you enabled log file rotation to S3. An Elastic MapReduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved the website&#39;s overall performance using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by order of magnitude. How do you fix your usage dashboard?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because the website is now only accessible via CloudFront. So, for the dashboard to have the up-to-date information via EMR, the logs from the CloudFront must be stored on S3 (to be analyzed by the EMR). Once these logs are delivered to S3, the dashboard should show the correct traffic information.</li>\r\n\t<li><strong>Option B is incorrect </strong>because the CloudTrail log will not show the required information. It will only show the insights of the AWS services and APIs accessed by the application.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the dashboard must be showing the information about the traffic pertaining to the website. CloudWatch will show the information based on the metrics related to AWS resources (not the website).</li>\r\n\t<li><strong>Option D is incorrect</strong> because the configuration of the Elastic Beanstalk environment is independent of the CloudFront setting. In order to have the information related to the dynamic content, the logs created by CloudFront must be delivered to S3. &ldquo;Rebuild Environment&rdquo; of Elastic Beanstalk will not be of any use.</li>\r\n\t<li><strong>Option E is incorrect </strong>because &ldquo;Restart App Server(s)&rdquo; causes the environment to restart the application container server running on each Amazon EC2 instance. It is totally unrelated to the information that is shown by the dashboard.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123467,
          "question_id": 98619,
          "answers": [
            {
              "choice": "<p>Allow CloudFront logs to be delivered to S3 and use them as input of the Elastic MapReduce job</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on CloudTrail and use trail log tiles on S3 as input of the Elastic MapReduce job</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Change your log collection process to use CloudWatch ELB metrics as input of the Elastic MapReduce job</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Beanstalk &quot;Rebuild Environment&quot; option to update log delivery to the Elastic MapReduce job</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Beanstalk &#39;Restart App Server(s)&quot; option to update log delivery to the Elastic MapReduce job</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98620,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. You need to restore the Storage Gateway data in AWS. How would you implement this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because&nbsp;all gateway-cached volume data and snapshot data are stored in Amazon S3 encrypted at rest using server-side encryption (SSE) and&nbsp;cannot be visible or accessed with S3 API or any other tools. (Ref: <a href=\"https://forums.aws.amazon.com/thread.jspa?threadID=109748\" target=\"_blank\">https://forums.aws.amazon.com/thread.jspa?threadID=109748</a>)</li>\r\n\t<li><strong>Option B is incorrect </strong>because the lifecycle policy does not help to restore the data.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the cached volumes are never stored in Glacier.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because you can take point-in-time snapshots of gateway volumes made available in the form of Amazon EBS snapshots. A new EBS volume can be created from the snapshot which can be mounted to an existing EC2 instance.</li>\r\n</ul>\r\n\r\n<p>For more information on this topic, please refer to the AWS FAQs.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/storagegateway/faqs/\" target=\"_blank\">https://aws.amazon.com/storagegateway/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123468,
          "question_id": 98620,
          "answers": [
            {
              "choice": "<p>Use an HTTPS GET to the Amazon S3 bucket where the files are located</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Restore by implementing a lifecycle policy on the Amazon S3 bucket</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Make an Amazon Glacier Restore API call to load the files into another Amazon S3 bucket within four to six hours</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EBS volume from a gateway snapshot and mount it to an Amazon EC2 instance</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98621,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are using DynamoDB to store data in your application. You create a table named &quot;Users&quot; with &quot;UserID&quot; as the Primary Key. However, you envision that, in some cases, you might need to query the table by &quot;UserName&quot; which cannot be set as the primary key. What changes would you make to this table to be able to query using UserName?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>Some applications might need to perform many kinds of queries, using a variety of different attributes as query criteria. To support these requirements, you can create one or more<em>&nbsp;global secondary indexes</em>&nbsp;and issue&nbsp;<code>Query</code>&nbsp;requests against these indexes in Amazon DynamoDB.<br />\r\nTo speed up queries on non-key attributes, you can create a global secondary index. A global secondary index contains a selection of attributes from the base table, but they are organized by a primary key that is different from that of the table. The index key does not need to have any of the key attributes from the table. It doesn&#39;t even need to have the same key schema as a table.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because creating another table is costly and unnecessary.</li>\r\n\t<li><strong>Option B is incorrect</strong> because UserName cannot be the primary key.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because, as mentioned above, creating a global secondary index on UserName would allow the user to efficiently access the table via querying on this attribute rather than UserID which is the primary key.</li>\r\n\t<li><strong>Option D is incorrect</strong> because DynamoDB tables are partitioned based on the primary key, and you cannot make UserName as the primary key.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html\" target=\"_blank\">http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123469,
          "question_id": 98621,
          "answers": [
            {
              "choice": "<p>Create a second table that contains all the information, but make UserName the primary key</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a hash and change the primary key</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Global secondary index</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Partition the table using UserName rather than UserID</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98622,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team is working on a plant recognition application. After users upload photos of plants, the application can provide their names and properties.</p>\r\n\r\n<p>A MySQL database is deployed in EC2 using an instance store, as instance store-backed storage is very fast in terms of reads and writes, which makes it optimal for running MySQL. However, as the instance store is an ephemeral volume, the database will be lost when the instance&nbsp;stops&nbsp;or is terminated. How should the team plan to back up and migrate the MySQL database? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and&nbsp;B</strong></p>\r\n\r\n<p>About how to back up the instance store volume, refer to the document.</p>\r\n\r\n<p>You can back up data stored on an instance store volume in one of the two ways mentioned in options A &amp; B.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;CORRECT:&nbsp;</strong>Because it is useful to back up the database filestore to S3.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:</strong>&nbsp;This is recommended as the above link. For example, tools such as sync for Linux or robocopy for Windows can be used to backup data.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect: </strong>There is no way to create an AMI from instance store volume using the console. To do so, you must use&nbsp;AMI Tools from the command line.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect: </strong>Snapshots cannot create, for instance, store volumes. Only EBS volumes can.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123470,
          "question_id": 98622,
          "answers": [
            {
              "choice": "<p>Back up the database filestore&nbsp;to S3</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new EBS volume and attach the volume to EC2. Export&nbsp;the MySQL database to the EBS volume using disk management&nbsp;or migration&nbsp;tool</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>In the EC2 AWS console, select the instance -&gt; Actions -&gt; Image -&gt; Create Image. Then the created AMI is able to backup the MySQL data in the instance store</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create snapshots for the instance store volume where the MySQL database resides. Copy the snapshots to other regions for further backup</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98623,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As an AWS specialist, you are in charge of configuring consolidated billing in a multinational IT company. In the linked accounts, users have set up AWS resources using a tag called Department, which is used to differentiate resources. There are some other user-created tags such as Phase, CICD, Trial, etc.</p>\r\n\r\n<p>In the cost allocation report, you only want to filter it using the tag of Department, and other tags are excluded in the report. How should you implement this so that the cost report is properly set up?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>User-Defined Cost Allocation Tags can be selected and activated in the Cost Allocation Tags.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/06/23/ckeditor_zmam_23_11.png\" style=\"height:240px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT</strong>&nbsp;because using this method&nbsp;only, the user-defined tag Department will appear in the cost allocation report.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect</strong>&nbsp;because it should be the Cost Allocation Tags&nbsp;rather than the Cost Explorer console. Moreover, by default, all user-defined tags are deactivated.</li>\r\n\t<li><strong>Option C is&nbsp;incorrect&nbsp;</strong>because it should be the Cost Allocation Tags&nbsp;rather than the Cost Explorer console.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong>&nbsp;because only a management&nbsp;account can activate or deactivate the user-defined tags. Besides, the tag does not appear on earlier reports before it is activated.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123471,
          "question_id": 98623,
          "answers": [
            {
              "choice": "<p>In the Billing and Management console of the management&nbsp;account, select Cost allocation tags and then select the Department tag in the User-Defined Cost Allocation Tags area and activate it. The tag starts appearing on the cost allocation report after it is applied but does not appear on earlier reports</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>In the Cost Explorer console of the management&nbsp;account, deactivate all the other tags except the Department tag in the User-Defined Cost Allocation Tags area. By default, all user-defined tags are activated</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the Cost Explorer console of the management&nbsp;account, select the Department tag in the User-Defined Cost Allocation Tags area and activate it. Make sure that other tags are inactive at the same time</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the Billing and Management console of the management&nbsp;account and member accounts, select Cost allocation tags and then select the Department tag in the User-Defined Cost Allocation Tags area and activate it. The tag starts appearing on the cost allocation report after it is applied and also appears on earlier reports after 1 hour</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98624,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A web company is looking to implement an external payment service into their highly available application deployed in a VPC. Their application EC2 instances are behind a public-facing ELB with NAT instances and Public IP s in place. Auto Scaling is used to add additional instances as traffic increases under normal load. The application runs 2 instances in the Auto Scaling group, but it can scale 3x in size at the peak. The application instances need to communicate with the payment service over the Internet, which requires whitelisting all public IP addresses to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because (a) the requests originated from the instances in the subnet would be routed through the NAT, so they would have the NAT&rsquo;s IP address (which is whitelisted), and (b) two NAT instances would provide high availability.</li>\r\n\t<li><strong>Option B is incorrect </strong>because (a) Internet Gateway (IGW) can only route the traffic.&nbsp;It cannot whitelist any particular IP and payment requests, and (b) EC2 instances with public IP addresses in a public subnet are routed through the gateway. Still, they will keep their own IP address.&nbsp;So they will not get whitelisted.</li>\r\n\t<li><strong>Option C is incorrect </strong>because the outbound traffic cannot be routed through an ELB.</li>\r\n\t<li><strong>Option D is incorrect </strong>because the ASG will have 6 servers during the peak load, and the payment service only allows 4 to be whitelisted.&nbsp;So, it will exceed the allowed 4 IP addresses.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123472,
          "question_id": 98624,
          "answers": [
            {
              "choice": "<p>Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instance&#39;s public IP address to the payment validation whitelist API</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98625,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Cognito, your mobile app authenticates with the Identity Provider (IdP) using the provider&rsquo;s SDK. Once the end-user is authenticated with the IdP, the OAuth or OpenID Connect token returned from the IdP is passed by your app to Amazon Cognito. In addition to the access token, which of the following is returned for the user to provide a set of temporary, limited-privilege AWS credentials?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<p>If you&#39;re allowing unauthenticated users, you can retrieve a unique Amazon Cognito identifier (identity ID) for your end-user immediately. If you&#39;re authenticating users, you can retrieve the identity ID after setting the login tokens in the credentials provider.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_oz809g.png\" style=\"height:422px; width:750px\" /></p>\r\n\r\n<p>For more information on Cognito ID, please refer to the below link.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html\" target=\"_blank\">http://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123473,
          "question_id": 98625,
          "answers": [
            {
              "choice": "<p>Cognito SDK</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito Key Pair</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito Identity ID</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito API</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98626,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have been asked to design network connectivity between your existing data centers and AWS. Your application&#39;s EC2 instances must be able to connect to existing backend resources located in your data center. Network traffic between AWS and your data centers will start small, but ramp up to 10s of GB per second over the course of several months. The success of your application is dependent upon getting to market quickly. Which of the following design options will allow you to meet your objectives?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;C</strong></p>\r\n\r\n<p>The most important considerations in this scenario are: (1) the network traffic would be initially small, and will increase in the future, and (2) the application should be up quickly.&nbsp;So time is crucial. One thing should be noted that it takes time initially to set up the AWS Direct Connect (See the link below for the latest information).</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because setting up Direct Connect will take time.&nbsp;So, the backend servers will not be connected&nbsp;quickly.</li>\r\n\t<li><strong>Option B is incorrect </strong>because provisioning VPN is not a long-term solution since the traffic would increase to over 10Gbps.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because (a) it provides a quick connection between the on-premise data center and AWS via VPN, and (b) it also initiates the provision of a Direct Connect solution to tackle the requirement of higher bandwidth (for 10Gbps network) for later.</li>\r\n\t<li><strong>Option D is incorrect </strong>because setting up Direct Connect will take time, and the application will not be up within time as it is time-critical. It needs to establish a VPN connection firstly.</li>\r\n</ul>\r\n\r\n<p>For more information on VPN and Direct Connect, please visit the link below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/getting_started.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/getting_started.html</a></li>\r\n\t<li><a href=\"https://datapath.io/resources/blog/aws-direct-connect-vs-vpn-vs-direct-connect-gateway/\" target=\"_blank\">https://datapath.io/resources/blog/aws-direct-connect-vs-vpn-vs-direct-connect-gateway/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123474,
          "question_id": 98626,
          "answers": [
            {
              "choice": "<p>Quickly create an internal ELB for your backend applications, submit a Direct Connect request to provision a 1 Gbps cross-connect between your data center and VPC, then increase the number or size of your Direct Connect connections as needed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Allocate EIPs and an Internet Gateway for your VPC instances to use for quick, temporary access to your backend applications, then provision a VPN connection between a VPC and existing on-premises equipment</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a VPN connection between a VPC and existing on-premises equipment, submit a Direct Connect partner request to provision cross-connects between your data center and the Direct Connect location, then cut over from the VPN connection one or more Direct Connect connections as needed</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Quickly submit a Direct Connect request to provision a 1 Gbps cross-connect between your data center and VPC, then increase the number or size of your Direct Connect connections as needed</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98627,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has developed an operations system for an e-commerce organization having multiple offices across the country. The operations team pushes the new changes to the production frequently. The product uses AWS RDS Multi-AZ MySQL with read-replicas. The web application is running on EC2 with ELB in front. The last feature update created an issue with the database, and part of the system is down due to that. The development team has rolled out a couple of more patches to fix the issue. But some users are still facing the outages. The management has finally decided to roll back the update to the last known stable version until all the issues are resolved in the QA environment. Which of the following options is the most suitable to perform the rollback cost-efficiently?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because point-in-time recovery helps to recover the database to a certain point in time. The EC2 servers can be recovered with the previous AMI.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because this method is not cost-efficient as a new set of resources need to be configured.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because it does not mention how to roll back the application.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because the database problem is still there, and the traffic still goes to the existing problematic database.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html\" target=\"_blank\">https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123475,
          "question_id": 98627,
          "answers": [
            {
              "choice": "<p>Use the DB snapshot with Point-in-time recovery to rollback the database, and rollback the EC2 servers with a previously working AMI</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a totally new environment with the last known stable build. Use the Route53 Weighted policy to redirect the traffic to the new environment. Delete the old environment</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the DB snapshot with Point-in-time recovery and restore on top of the original database</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CloudFormation template with RollingUpdate policy to create a new frontend and change the Route53 record to redirect traffic to the new frontend with the existing database</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98628,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Server-side encryption is about data encryption at rest. That is, Amazon S3 encrypts your data at the object level as it writes it to disk in its data centers and decrypts it for you when you go to access it. A few different options are depending on how you choose to manage the encryption keys. One of the options is called &#39;Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)&#39;. Which of the following best describes how this encryption method works?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because there are no separate permissions to the key that protects the data key.</li>\r\n\t<li><strong>Option B is CORRECT </strong>because as mentioned above, each object is encrypted with a strong unique key and that key itself is encrypted by a master key.</li>\r\n\t<li><strong>Option C is incorrect </strong>because the keys are managed by the AWS.</li>\r\n\t<li><strong>Option D is incorrect </strong>because there is no randomly generated key and the client does not do the encryption.</li>\r\n</ul>\r\n\r\n<p>For more information on S3 encryption, please visit the links:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123476,
          "question_id": 98628,
          "answers": [
            {
              "choice": "<p>There are separate permissions for the use of an envelope key (a key that protects your data&#39;s encryption key) that provides added protection against unauthorized access of your objects in S3 and also provides you with an audit trail of when your key was used and by whom</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Each object is encrypted with a unique key employing strong encryption. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You manage the encryption keys and Amazon S3 manages the encryption, as it writes to disk, and decryption when you access your objects</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A randomly generated data encryption key is returned from Amazon S3, which is used by the client to encrypt the object data</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98629,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>There are currently multiple applications hosted in a VPC. During monitoring, it has been noticed that multiple port scans are coming in from a specific IP Address block. The internal security team has requested that all offending IP Addresses be denied for the next 24 hours. Which of the following is the best method to quickly and temporarily deny access from the specified IP Addresses?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>A network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.</p>\r\n\r\n<ul>\r\n\t<li><strong>Options A and D are incorrect </strong>because (a) it will only work for Windows-based instances, and (b) a better approach is to block the traffic at the subnet layer via NACL rather than instance layer (windows firewall).</li>\r\n\t<li><strong>Option B is CORRECT</strong> because the best way to allow or deny IP address-based access to the resources in the VPC is to configure rules in the Network access control list (NACL), which are applied at the subnet level.</li>\r\n\t<li><strong>Option C is incorrect</strong> because (a) you cannot explicitly deny access to particular IP addresses via security group, and (b) a better approach is to block the traffic at the subnet layer via NACL rather than instance layer (security group).</li>\r\n</ul>\r\n\r\n<p>For more information on network ACL&rsquo;s, please refer to the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.htm</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123477,
          "question_id": 98629,
          "answers": [
            {
              "choice": "<p>Create an AD policy to modify the Windows Firewall settings on all hosts in the VPC to deny access from the IP Address block</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP Address block</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Add a rule to all of the VPC Security Groups to deny access from the IP Address block</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Windows Firewall settings on all AMI&#39;s that your organization uses in that VPC to deny access from the IP address block</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98630,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>What would happen to an RDS (Relational Database Service) Multi-Availability Zone deployment if the primary DB instance fails?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because the IP address of the primary and standby instances remain the same and are not changed.</li>\r\n\t<li><strong>Option B is incorrect </strong>because the CNAME record of the primary DB instance changes to the standby instance.</li>\r\n\t<li><strong>Option C is incorrect</strong> because there is no new instance created in the standby AZ.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because the CNAME of the primary DB instance changes to the standby instance so that there is no impact on the application setting or any reference to the primary instance.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Amazon RDS Multi-AZ deployment:</strong></p>\r\n\r\n<p>Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure (for example, instance hardware failure, storage failure, or network disruption), Amazon RDS performs an automatic failover to the standby so that you can resume database operations as soon as the failover is complete.&nbsp;</p>\r\n\r\n<p>And as per the AWS documentation, the CNAME is changed to the standby DB when the primary one fails.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_wgn6rf.png\" style=\"height:207px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/faqs/\" target=\"_blank\">https://aws.amazon.com/rds/faqs/</a></li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_chafyc.png\" style=\"height:410px; width:750px\" /></p>\r\n\r\n<p>For more information on Multi-AZ RDS, please visit the link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/multi-az/\" target=\"_blank\">https://aws.amazon.com/rds/details/multi-az/</a></li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123478,
          "question_id": 98630,
          "answers": [
            {
              "choice": "<p>The IP address of the primary DB instance is switched to the standby DB instance</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The primary RDS (Relational Database Service) DB instance reboots and remains as primary</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A new DB instance is created in the standby availability zone</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The canonical name record (CNAME) is re-pointed from the primary to the secondary instance (standby)</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98631,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You&rsquo;ve been brought in as a solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC). The previous architect has already deployed a 3- tier VPC. The configuration is as follows.&nbsp;</p>\r\n\r\n<p><strong>VPC :</strong> vpc-2f8bc447</p>\r\n\r\n<p><strong>IGW :</strong> ig-2d8bc445</p>\r\n\r\n<p><strong>NACL :</strong> acl-208bc448</p>\r\n\r\n<p><strong>Subnets and Route Tables:</strong></p>\r\n\r\n<p>&nbsp; &nbsp;Web server&rsquo;s subnet-258bc44d</p>\r\n\r\n<p>&nbsp; &nbsp;Application server&rsquo;s subnet-248bc44c</p>\r\n\r\n<p>&nbsp; &nbsp;Database server&rsquo;s subnet-9189c6f9</p>\r\n\r\n<p><strong>Route Tables:</strong></p>\r\n\r\n<p>&nbsp; &nbsp;rtb-218bc449</p>\r\n\r\n<p>&nbsp; &nbsp;rtb-238bc44b</p>\r\n\r\n<p><strong>Associations:</strong></p>\r\n\r\n<p>&nbsp; &nbsp;Subnet-258bc44d: rtb-218bc449</p>\r\n\r\n<p>&nbsp; &nbsp;Subnet-248bc44c: rtb-238bc44b</p>\r\n\r\n<p>&nbsp; &nbsp;Subnet-9189c6f9: rtb-238bc44b</p>\r\n\r\n<p>You are now ready to begin deploying EC2 instances into the VPC. Web servers must have direct access to the internet. The Application and&nbsp;Database servers cannot have direct access to the internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because the route should be pointing to NAT.</li>\r\n\t<li><strong>Option B is incorrect</strong> because adding IGW to route rtb-238bc44b would expose the application and database server to the internet. Bastion and NAT should be in the public subnet.</li>\r\n\t<li><strong>Option C is incorrect </strong>because the route should point to NAT and not Internet Gateway else it would be internet accessible.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because Bastion and NAT should be in the public subnet. As Web Server has direct access to the Internet, the subnet subnet-258bc44d should be public and Route rtb-218bc449 pointing to IGW. Route rtb-238bc44b for private subnets should point to NAT for outgoing internet access.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123479,
          "question_id": 98631,
          "answers": [
            {
              "choice": "<p>Create a bastion and NAT Instance in subnet-258bc44d and add a route to rtb-238bc44b pointing to subnet-258bc44d</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Add a route to rtb-238bc44b pointing to igw-2d8bc445 and add a bastion and NAT instance within Subnet-248bc44c</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Bastion and NAT Instance in subnet-258bc44d. Add a route to&nbsp;rtb-238bc44b pointing to igw-2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet-248bc44c</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Bastion and NAT instance in subnet-258bc44d and add a route to rtb-238bc44b pointing to the NAT instance</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98632,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS administrator. Your company has two key EC2 instances owned by AWS account A. The users in AWS account B may start/stop these EC2 instances from time to time. These users are under the same IAM user group called &ldquo;Group_QA&rdquo;. You already created a cross-account&nbsp;role &ldquo;EC2Update&rdquo; in account A.</p>\r\n\r\n<p>In account B, &ldquo;Group_QA&rdquo; has been added as an inline policy to assume the role of &ldquo;EC2Update&rdquo;. How can the users of AWS account B switch role &quot;EC2Update&quot; in account A? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: B and&nbsp;C</strong></p>\r\n\r\n<p>You can grant your IAM users permission to switch to roles within your AWS account or to roles defined in other AWS accounts that you own.</p>\r\n\r\n<p>The user chooses the account name on the navigation bar and chooses&nbsp;<strong>Switch Role</strong>. The user specifies the account ID (or alias) and role name. Alternatively, the user can click on a link sent in an email by the administrator. The link takes the user to the&nbsp;<strong>Switch Role</strong>&nbsp;page with the details already filled in.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>&nbsp;because, for AWS API/AWS CLI, the user in the group &ldquo;Group_QA&rdquo; should call the AssumeRole function to obtain credentials for the &ldquo;EC2Update&rdquo; role.</li>\r\n\t<li><strong>Option D is&nbsp;incorrect</strong> because it should be &ldquo;Switch Role&rdquo; rather than &ldquo;Switch Accounts,&rdquo; and no key credentials are needed for switching rules to another account.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123480,
          "question_id": 98632,
          "answers": [
            {
              "choice": "<p>With AWS CLI, the user calls the AssumeRoleWithSAML function to obtain credentials for the &ldquo;EC2Update&rdquo; role</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The user chooses the account name on the navigation bar and clicks &ldquo;Switch Role&rdquo;. The user specifies the account ID (or alias) and role name</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The user can click on a link sent in an email by the administrator which takes the user to the Switch Role page with the details already filled in. The link can be found when the role &ldquo;EC2Update&rdquo; was created</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>In the AWS console, the user clicks its account name and chooses &ldquo;Switch Accounts&rdquo;. The user then specifies the account ID, key credentials, and the role name for account A</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98633,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS solutions architect in a large IT company, and your company has owned several AWS accounts. By using IAM roles, access to resources in other accounts is granted. For example, users in the Test account may switch roles and operate on DynamoDB resources that belong to the Dev account.</p>\r\n\r\n<p>For training purposes, you are responsible for preparing a document on how to switch roles properly. Which conditions must be met for IAM users to switch roles successfully across accounts? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;A and&nbsp;D</strong></p>\r\n\r\n<p>The below diagram is a reference on how to switch roles between accounts.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_9.1.png\" style=\"height:330px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;CORRECT</strong>&nbsp;because you cannot switch to a role when you are signed in as the AWS account root user. This is indicated in</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:&nbsp;</strong>Because multi-factor authentication (MFA) is optional when a role is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_9.2.png\" style=\"height:272px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>&nbsp;because the alias of the target account is optional. During role switch, the user specifies the account ID (or alias) and role name.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT&nbsp;</strong>because it is required for the user to have permission to assume the role that belongs to other accounts.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123481,
          "question_id": 98633,
          "answers": [
            {
              "choice": "<p>The user is signed in as the AWS account non-root user</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The assuming entity has used multi-factor authentication (MFA) protection</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The target account that the user plans to switch to must use an alias</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The user must be explicitly granted permission to assume the role</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98634,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An e-commerce platform has sent online order requests to a standard SQS queue. The visibility timeout for the messages in the queue is set as 30 seconds by default. The message retention period is 7 days. From the backend log system, it has been found that the backend processing of some messages has failed. As a result, these messages were not deleted successfully from the queue. What should you do to isolate the failed messages to troubleshoot the reason why the processing doesn&#39;t succeed?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer:&nbsp;D</strong></p>\r\n\r\n<p>When messages in an SQS queue can&#39;t be consumed successfully, the messages can be put into a dead-letter queue, ideal for isolating the problematic message.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect&nbsp;</strong>because the queue type for the original queue and dead letter queue should match. Therefore, in this case, the dead letter queue should also be a standard queue.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect </strong>because the visibility timer adjustment does not help to isolate messages that have issues.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;Same reason as Option B. When the visibility timer is modified to 0, visibility timeout is also terminated.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;correct:&nbsp;</strong>For example, if the source queue has set maxReceiveCount to 2, and the consumer of the source queue receives a message 2 times without ever deleting it, the message will be put to the dead-letter queue. Then those problematic messages are ready to be analyzed.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123482,
          "question_id": 98634,
          "answers": [
            {
              "choice": "<p>Create a new FIFO queue as the dead letter queue. So the failed messages are isolated and stored in this dead letter queue</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Enlarge the visibility timer a little bit and monitor the log system to see if there are still messages that fail to be processed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the visibility timer to 0 to mitigate the impacts when messages are deleted unsuccessfully</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create another SQS standard queue as the dead letter queue. So the problematic messages are isolated</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98635,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A complicated data analysis software in JAVA has used a standard SQS queue to decouple users&#39; requests and the backend processing. The visibility timeout for the queue is set as 60 seconds. In most cases, the process of messages can finish within 1 minute successfully. However, it may take about 100 seconds for the backend to get the job done for certain new requests. These requests are tagged with a specific JSON header by the front end already.<br />\r\nYou want to ensure that these new requests are processed properly in the backend. How should you improve the queue configurations in the best way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer:&nbsp;B</strong></p>\r\n\r\n<p>For the new requests, the default visibility timeout of 60 seconds for the queue would be insufficient. The messages&rsquo; visibility should be extended by specifying a new timeout value using the ChangeMessageVisibility action through the AWS SDK.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because this change in the AWS console is a global change for all messages in the queue. However, in this case, only specific messages need to extend the timer.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;correct</strong>:&nbsp;Refer to <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html</a> on how to configure Visibility Timeout for an Amazon SQS queue. Using the method, those messages with particular JSON headers can get a revised timer.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>:&nbsp;Because the FIFO queue type does not help with the visibility timeout issue for the new messages.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:</strong>&nbsp;Although the dead letter queue can help isolate the new messages, it cannot fix the problem of the visibility timeout issue. Besides, the timer needs to be enlarged only for these new messages.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123483,
          "question_id": 98635,
          "answers": [
            {
              "choice": "<p>In the AWS SQS console, simply change the default visibility timeout from 1 minute to 2 minutes</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS SDK to adjust the visibility timeout to 2 minutes for messages that contain the specific JSON header</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Change the queue type from standard to FIFO with the default visibility timeout configured as 2 minutes</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new SQS queue as the dead letter queue. Route these specific requests to the dead letter queue so that the normal backend process is not influenced</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98636,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has launched an EC2 instance store-backed instance in the us-east-1a zone. The user created AMI #1 and copied it to the eu-west-1 region. After that, the user made a few updates to the application running in the us-east-1a zone. The user makes an AMI #2 after the changes. If the user launches a new instance in Europe from the AMI #1 copy, which statement&nbsp;is true?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because (a) the changes made to the instance will not automatically get updated in the AMI in US-East-1, and (b) the already copied AMI will not have any reference to the AMI in the US-East-1 region.</li>\r\n\t<li><strong>Option B is incorrect </strong>because AWS does not automatically update the AMIs. It needs to be done manually.</li>\r\n\t<li><strong>Option C is incorrect </strong>because you can copy the instance store AMI between different regions.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because the instance in the EU region will not make any changes after copying the AMI. You will need to copy the AMI#2 to eu-west-1 and then relaunch the instance to have all the changes.</li>\r\n</ul>\r\n\r\n<p>For the entire details to copy AMI&rsquo;s, please visit the link &ndash;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123484,
          "question_id": 98636,
          "answers": [
            {
              "choice": "<p>The new instance will have the changes made after the AMI copy as AWS copies the original AMI reference during the copying. Thus, the copied AMI will have all the updated data</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The new instance will have the changes made after the AMI copy since AWS keeps updating the AMI</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>It is not possible to copy the instance store-backed AMI from one region to another</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The new instance in the eu-west-1 region will not have the changes made after the AMI copy</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98637,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is running a premium photo-sharing application. Users can upload their creative photos and license them to be used by others. The application allows the users to watermark and do other signatures before the images can be visible to everyone in the public stream. The watermarking and signature are based on the user-selected plan and allowed&nbsp;to do a certain number of images in a given timeframe. Along with this, the company has collaborated with some users and groups.&nbsp;They are allowed to process images faster compared to others whenever they submit their images.</p>\r\n\r\n<p>The application is currently saving the images into S3 when uploaded.&nbsp;From there,&nbsp;it generates the Lambda trigger to process the images. However, the application cannot manage the different pipelines of work and needs some ordered processing. The management has decided to re-engineer the application to support the above requirements effectively.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT </strong>because while the SQS will definitely help decouple and streamline the message processing.&nbsp;It will still not be processed any desired order. The consumer application will receive the SQS queue messages and will have to use the additional logic to schedule and prioritize the processing.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because just&nbsp;saving the processing information to the DynamoDB will not help in the scheduling or ordering the messages. The customer application will still receive the message from the SQS in a different order and will have to run the appropriate logic to schedule the tasks.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because it always allows the consumer to check the premium queue first.&nbsp;If&nbsp;the premium queue is empty, it will&nbsp;pull from the member queue, satisfying both the requirements to re-architect and processing some images before others. You can also scale your EC2 instances, processing the images based on need as well.&nbsp;</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because using AWS Batch to create jobs is not necessary here.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html\" target=\"_blank\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123485,
          "question_id": 98637,
          "answers": [
            {
              "choice": "<p>Use SQS queues instead of Lambda Trigger. Use the priority order messages to process the images</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Save the processing information to DynamoDB before saving the image to S3. When the AWS Lambda trigger runs, pull the information from DynamoDB and process accordingly</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use two SQS queues instead of Lambda Trigger. One with high priority messages and another for the low priority messages. Check for the messages into the high priority queue before processing any messages from the low priority queue</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Batch to create jobs with priority job queues and use the combination of EC2 On-Demand and Spot instances to process the messages</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98638,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company runs a business management applications on the AWS cloud and has hundreds of customers. During the peak load, they receive hundreds of requests per second. The overall application uses many AWS services like API Gateway, Lambda, DynamoDB, Kinesis, RDS, etc. The product allows users to customize their environment based on their requirements.</p>\r\n\r\n<p>The product development team is divided into different groups and uses different programming languages for different parts of the application. With the launch of the new releases, the operations teams have started seeing a random decrease in the performance and increase in support tickets being generated. The management wants to prepare a plan to find out the performance issues in real-time, and add additional options to group the issues based on the feature or customer information&nbsp;to figure out high-impact customers. Please select two steps to prepare the tracing system based on the requirements.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: C and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT </strong>because the CloudWatch Logs generated from these individual requests will, by default, not have any correlation identifier,&nbsp;and it will have to be done manually to tie up the original requests with all the logs.</li>\r\n\t<li><strong>Option B is INCORRECT </strong>because while it may be possible to do, it will also require&nbsp;some usage of&nbsp;a correlation identifier to isolate interactions among different services.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because the X-Ray integrates well into the AWS services, and it can manage the request relation concerning other AWS services. AWS X-Ray provides wrappers for other AWS services as well&nbsp;as traces requests with more detailed information.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because while this is doable, it may require an additional effort to log and generate custom metrics data. CloudWatch custom metrics are&nbsp;generally used where the custom and application-specific monitoring is required, like Disk Space Consumed or Payment Gateway Error, etc.</li>\r\n\t<li><strong>Option E is CORRECT</strong> because, with the use of AWS X-Ray segments, detail tracing can be enabled. Annotations can help pinpoint specific areas of the application in the tracing records to isolate the issues and impact area further.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123486,
          "question_id": 98638,
          "answers": [
            {
              "choice": "<p>Publish logs using the CloudWatch Logs and redirect the logs to Kinesis to inspect the issues in real-time</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Due to the distributed nature of the application and multiple services used, use the 3rd party tool and integrate it with it</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use X-Ray to monitor the performance of your application</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use CloudWatch custom metrics to publish and generate events for the notifications</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use X-Ray segments and annotations for group-level tracing</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98639,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You lead a team to use Kubernetes to develop some microservices in the local server and data center. To align with the company&rsquo;s strategy to move to the AWS cloud, you need to consider the possibility of migrating the projects that your team is working on. You think that Amazon Elastic Kubernetes Service (Amazon EKS)&nbsp;is a good candidate. In order to start using EKS properly, which prerequisites must be met? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;C and&nbsp;D</strong></p>\r\n\r\n<p>In order to use the EKS service properly, some prerequisites must be met, which are mentioned at <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html\" target=\"_blank\">https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect&nbsp;</strong>because EKS can pull Docker images from ECR or any other container registries, such as Docker Hub.</li>\r\n\t<li><strong>Option B is incorrect&nbsp;</strong>because using Route53 alone will not help to access the cluster. In addition to standard Amazon EKS permissions, your IAM user or role must have route53:AssociateVPCWithHostedZone permissions to enable the cluster&#39;s endpoint private access.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;correct&nbsp;</strong>because Amazon EKS needs the IAM role to create AWS resources such as a load balancer.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;correct&nbsp;</strong>because EKS has also provided a CloudFormation template to provide a suitable VPC for the EKS cluster.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/eks/latest/userguide/eks-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/eks/latest/userguide/eks-ug.pdf</a></li>\r\n\t<li>The link <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html\" target=\"_blank\">https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html</a> contains the instructions on how to create the cluster VPC for EKS.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123487,
          "question_id": 98639,
          "answers": [
            {
              "choice": "<p>All related container images are registered in Amazon ECR since EKS can only pull docker images from ECR</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A Route53&nbsp;should be in place for Amazon EKS to route internet traffic among various public subnets</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>An IAM EKS service role should be created to allow Amazon EKS to manage clusters on your behalf</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>A VPC exists for the EKS cluster to use</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98640,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You&#39;ve created a temporary application that accepts image uploads, stores them in S3, and records information about the image in RDS. After building this architecture and accepting images for the duration required, it&#39;s time to delete the CloudFormation template. However, your manager has informed you that the RDS data needs to be stored for archival reasons, and the S3 bucket with the images needs to remain. Your manager has also instructed you to ensure that the application can be restored by a CloudFormation template and run next year during the same period.</p>\r\n\r\n<p>Knowing that when a CloudFormation template is deleted, it will remove the resources it created. What is the best method for achieving the desired goals?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<p>The main points in this question are (i) the need for an ability by which the RDS data&nbsp;can be restored if needed and (ii) the S3 bucket with the images needs to retain.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because it replicates the images into another bucket, but does not ensure that the bucket itself would retain.</li>\r\n\t<li><strong>Option B is incorrect </strong>because RDS data does not need to be retained. You just need the ability to restore the RDS data - for which you need to use a snapshot policy.</li>\r\n\t<li><strong>Option C is incorrect </strong>because the S3 bucket itself needs to be retained. Hence you need to use the retain&nbsp;policy for the S3 bucket.</li>\r\n\t<li><strong>Option D is CORRECT </strong>because it uses a&nbsp;retain policy for the S3 bucket and a snapshot policy for RDS such that the data can be restored when needed.</li>\r\n</ul>\r\n\r\n<p><strong>More information on DeletionPolicy Options:</strong></p>\r\n\r\n<p><em>Delete</em></p>\r\n\r\n<p>AWS CloudFormation deletes the resource and all its content if applicable during stack deletion.</p>\r\n\r\n<p><em>Retain</em></p>\r\n\r\n<p>AWS CloudFormation keeps the resource without deleting the resource or its contents when its stack is deleted.&nbsp;</p>\r\n\r\n<p><em>Snapshot</em></p>\r\n\r\n<p>For resources that support snapshots (AWS::EC2::Volume, AWS::ElastiCache::CacheCluster, AWS::ElastiCache::ReplicationGroup, AWS::RDS::DBInstance, AWS::RDS::DBCluster, and AWS::Redshift::Cluster), AWS CloudFormation creates a snapshot for the resource before deleting it.&nbsp;</p>\r\n\r\n<p>For more information on CloudFormation deletion policy, please visit the below URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123488,
          "question_id": 98640,
          "answers": [
            {
              "choice": "<p>Enable S3 bucket replication on the source bucket to a destination bucket to maintain a copy of all the S3 objects, set the deletion policy for the RDS instance to snapshot</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For both the RDS and S3 resource types on the CloudFormation template, set the DeletionPolicy to retain</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Set the DeletionPolicy on the S3 resource to snapshot and the DeletionPolicy on the RDS resource to snapshot</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Set the DeletionPolicy on the S3 resource declaration in the CloudFormation template to retain, set the RDS resource declaration DeletionPolicy to snapshot</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98641,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You work in the integration team of a company, and your team is integrating the infrastructure with Amazon VPC. You are recently assigned a task to create a VPN connection. You have the AWS management console logging access. The first step that you plan to do is to create a customer gateway in the AWS VPC console. In order to do that, which information do you need? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answers:&nbsp;A and&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li>The first step of creating a VPN connection is to set up a customer gateway in the AWS VPC console according to <a href=\"https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html\" target=\"_blank\">https://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html</a>.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/25/ckeditor_9.png\" style=\"height:252px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is Correct:</strong>&nbsp;AWS VPN has used BGP ASN to establish the connection for dynamic routing.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;For static routing, no BGP ASN is needed.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;The internet-routable IP address for the customer gateway device&#39;s external interface is required. And the value must be static.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;Correct</strong>:&nbsp;Same reason as option C.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123489,
          "question_id": 98641,
          "answers": [
            {
              "choice": "<p>A Border Gateway Protocol (BGP) Autonomous System Number (ASN) if the routing type is Dynamic</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>A BGP Autonomous System Number (ASN) if the routing type is static</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A dynamic public IP address for the customer gateway device. If the customer gateway is behind a NAT device, use the NAT device&#39;s dynamic public IP address</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>A static, internet-routable IP address for the customer gateway device</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98642,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large enterprise wants to adopt CloudFormation to automate administrative tasks and implement the security principles of least privilege and separation of duties. They have identified the following roles with the corresponding tasks in the company.</p>\r\n\r\n<ul>\r\n\t<li>Network administrators: create, modify, and delete VPCs, and delete EC2 instances, subnets, NACLs, routing tables, and security groups.</li>\r\n\t<li>Application operators: deploy complete application stacks (ELB, Auto-Scaling groups, RDS, EC2 instances), whereas all resources must be deployed in the VPCs managed by the network administrators.</li>\r\n</ul>\r\n\r\n<p>Both groups must maintain their own CloudFormation templates and should be able to create, update, and delete only their own Cloud Formation stacks.</p>\r\n\r\n<p>The company has followed your advice to create two IAM groups, one for applications and one for networks. Both IAM groups are attached to IAM policies that grant rights to perform the necessary task of each group as well as the creation, update, and deletion of CloudFormation stacks.&nbsp;&nbsp;</p>\r\n\r\n<p>Which statements represent valid design considerations based on the given setup and requirements? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because subnets cannot be deleted with instances in them.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because to launch instances explicitly, we need IAM permissions.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the stacks are created using the application group&#39;s IAM policy when nesting network stacks within application stacks. And the policy should require network-level permissions.</li>\r\n\t<li><strong>Option D is incorrect </strong>because the application stack can be deleted before the network stack.</li>\r\n\t<li><strong>Option E is incorrect</strong> because network administrators need resource-level permission to delete the application stack.</li>\r\n</ul>\r\n\r\n<p>For more information, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123490,
          "question_id": 98642,
          "answers": [
            {
              "choice": "<p>Network stack updates will fail upon attempts to delete a subnet with EC2 instances</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Restricting the launch of EC2 instances into VPCs requires resource level permissions in the IAM policy of the application group</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Nesting network stacks within application stacks simplifies management and debugging, but requires resource-level permissions in the network group&#39;s IAM policy</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The application stack cannot be deleted before all network stacks are deleted</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Unless account&nbsp;level permissions are used on the cloud formation: Delete Stack action, network administrators could tear down application stacks</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98643,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An Enterprise customer is starting its migration to the cloud for&nbsp;agility.&nbsp;They want to make their internal Microsoft Active Directory available to any applications running on AWS&nbsp;as a central point of user control for leavers and joiners. Internal users only have to remember one set of credentials. How could they make their Active Directory secure,&nbsp;highly available, and with minimal on-premises infrastructure changes in the most cost and time-efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A incorrect</strong> because it is just a complicated environment to set up and does not meet the purpose of the requirement.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because using an IPSec tunnel can help decrypt all the traffic from the on-premise to AWS. The domain controllers in separate AZ&rsquo;s can address high availability.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the question mentions that they want minimal changes to the on-premise environment.</li>\r\n\t<li><strong>Option D is incorrect </strong>because it does not address the secure communication part from on-premise to AWS.</li>\r\n</ul>\r\n\r\n<p>For more information on creating VPN tunnels using Hardware VPN and Virtual private gateways, please refer to the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123491,
          "question_id": 98643,
          "answers": [
            {
              "choice": "<p>Using Amazon Elastic Compute Cloud (EC2), they could create a DMZ using a security group.&nbsp;Within the security group, they could provision two smaller Amazon EC2 instances that are running Openswan for resilient IPSec tunnels, and two larger instances that are domain controllers.&nbsp;They would use multiple Availability Zones</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Using VPN, they could create an extension to their data center and use resilient hardware IPSec tunnels; they could then have two domain controller instances that are joined to their existing domain and reside within different subnets in different Availability Zones</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Within the customer&rsquo;s existing infrastructure, they could provision&nbsp;new hardware to run Active Directory Federation Services. This&nbsp;would present Active Directory as a SAML2 endpoint on the internet.&nbsp;Any new application on AWS could be written to authenticate using SAML2</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The customer could create a stand-alone VPC with its own Active Directory Domain Controllers.&nbsp;Two domain controller instances could be configured, one in each Availability Zone, and&nbsp;new applications would authenticate with those domain controllers</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98644,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are writing an AWS CloudFormation template, and you want to assign values to properties that will not be available until runtime. You know that you can use intrinsic functions to do this but are unsure which part of the template they can use. Which of the following is correct in describing how you can currently use intrinsic functions in an AWS CloudFormation template?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>As per AWS documentation:</p>\r\n\r\n<p>You can use intrinsic functions only in specific parts of a template. Currently, you can use intrinsic functions in resource properties, outputs, metadata attributes, and update policy attributes. You can also use intrinsic functions to create stack resources conditionally.</p>\r\n\r\n<ul>\r\n\t<li>Hence, <strong>B is the correct answer.</strong></li>\r\n</ul>\r\n\r\n<p>For more information on intrinsic function, please refer to the below link.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123492,
          "question_id": 98644,
          "answers": [
            {
              "choice": "<p>You can use intrinsic functions in any part of a template</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can use intrinsic functions only in specific parts of a template. You can use intrinsic functions in resource properties, outputs, metadata attributes, and update policy attributes</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You can use intrinsic functions only in the resource properties part of a template</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can use intrinsic functions in any part of a template, except AWSTemplateFormatVersion and Description</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98645,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As a solution architect professional, you have been requested to launch 20 Large EC2 instances which will all be used to process huge amounts of data. There is also a requirement that these instances need to transfer data back and forth among each other and need a low-latency network performance. Which of the following would be the most efficient setup to achieve this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because being in the same region would not mean that the data transfer between the instances would be faster. In fact, the instances would experience network latency.</li>\r\n\t<li><strong>Option B is incorrect </strong>because just being in the same AZ is not sufficient.&nbsp;They should be added to a Placement Group to benefit from the low network latency.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because Placement Group enables applications to get the low-latency network performance necessary for tightly-coupled node-to-node communication typical of many high-performance computing applications.&nbsp;</li>\r\n\t<li><strong>Option D is incorrect </strong>because despite being of the largest size, the EC2 instances would still experience network latency if they are not part of a Placement Group.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Placement Groups:</strong></p>\r\n\r\n<p>A&nbsp;<em>placement group</em>&nbsp;is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. To provide the lowest latency, and the highest packet-per-second network performance for your placement group, choose an instance type that supports enhanced networking.</p>\r\n\r\n<p>For more information on Placement Groups, please visit the URL</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123493,
          "question_id": 98645,
          "answers": [
            {
              "choice": "<p>Ensure that all the instances are placed in the same region</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that all instances are placed in the same Availability Zone</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use a cluster Placement Group and ensure that all instances are launched in it</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the largest EC2 instances currently available on AWS and make sure they are spread across multiple Availability Zones</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98646,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A fintech startup company is developing a product on the AWS platform. To speed up the development, the company plans to use a SaaS provided by AWS Marketplace. The SaaS provider already configured an AWS PrivateLink. In the company&rsquo;s VPC, which configuration is required to utilize this private connection so that traffic flows to the service provider over private AWS networking rather than over the Internet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;A</strong></p>\r\n\r\n<p>To use AWS PrivateLink, an interface VPC endpoint for a service in the VPC is required.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_4.png\" style=\"height:519px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT:</strong>&nbsp;Because the interface VPC endpoint is essential to establish a secure connection to the private link.</li>\r\n\t<li><strong>Option B is incorrect:</strong>&nbsp;Because a site-to-site VPN connection is used for the VPN connection between AWS and the on-premise data center which is not suitable for this case.</li>\r\n\t<li><strong>Option C is incorrect:</strong>&nbsp;Because it should be an interface VPC endpoint rather than a gateway VPC endpoint. Secondly, the IP address in the elastic network interface should be private instead of elastic.</li>\r\n\t<li><strong>Option D is incorrect:</strong>&nbsp;Because an AWS Direct Connect connection is for the private connection between an on-premise server and AWS VPC. However, this question asks for a solution to communicate between the SaaS and AWS VPC.</li>\r\n\t<li>Details can be checked in the AWS document <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123494,
          "question_id": 98646,
          "answers": [
            {
              "choice": "<p>In the VPC, configure an interface VPC endpoint for the SaaS which creates an elastic network interface in the subnet with a private IP address</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a site-to-site VPN connection in customer VPC for the SaaS to use the AWS private link connection</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the VPC, set up a gateway VPC endpoint for the SaaS which creates an elastic network interface in the subnet with an elastic IP address</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In the VPC, create an AWS Direct Connect connection for the SaaS to securely connect with the AWS PrivateLink</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98647,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has created one IAM user and applied the below mentioned policy to the user. What entitlements do the IAM users avail with this policy?</p>\r\n\r\n<div class=\"brush:java;\" style=\"background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;\">{<br />\r\n&nbsp; &nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,<br />\r\n&nbsp; &nbsp; &quot;Statement&quot;: [<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; {<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:Describe*&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; },<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; {<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;autoscaling:Describe*&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; },<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; {<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:ListMetrics&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:Describe*&quot;,<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:GetMetricStatistics&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; }<br />\r\n&nbsp; &nbsp; ]<br />\r\n}</div>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<p>AWS Identity and Access Management is a web service that allows organizations to manage users and user permissions for various AWS services. If an organization wants to set up read-only access to EC2 for a particular user, they should mention the action in the IAM policy which entitles the user for Describe rights for EC2, CloudWatch, Auto Scaling, and ELB. The user will have read-only access for EC2, CloudWatch, and Auto Scaling in the policy shown below. Since ELB is not mentioned as a part of the list, the user will not have access to ELB.</p>\r\n\r\n<p>The above policy will allow the user to view EC2 instances&nbsp;(look at Auto Scaling&nbsp;and CloudWatch).</p>\r\n\r\n<ul>\r\n\t<li><strong>Options A, B and C are incorrect </strong>because the policy does not include ELB permissions.</li>\r\n</ul>\r\n\r\n<p>For more information on IAM policy, please visit the URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123495,
          "question_id": 98647,
          "answers": [
            {
              "choice": "<p>The policy will allow the user to perform all read-only activities on the EC2 services including EC2 instances, Auto Scaling groups and ELBs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The policy will allow the user to list all the EC2 resources including EC2 instances, Auto Scaling groups and ELBs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The policy will allow the user to perform all read and write activities on the EC2 services including EC2 instances, Auto Scaling groups and ELBs</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The policy will allow the user to perform the read-only activities on the EC2 instances and Auto Scaling groups</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98648,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>A company is creating a new recipe blog sharing application in AWS. The static content has been put into an S3 bucket. In the meantime, a database is needed to store the data for various blog posts. The application retrieves data from the database and dynamically renders a recipe blog page.</p>\r\n\r\n<p>The web application has a requirement to serve users globally. Also, the company prefers a serverless solution if possible. Which combinations of services should be used together so that the application does NOT need origin infrastructure and administrative effort required for automatic scaling, backups, or database redundancy? (Select THREE.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;B, D and&nbsp;E</strong></p>\r\n\r\n<p>The main requirement for this question is that no extra efforts are needed for origin infrastructure, automatic scaling, backups, and database redundancy. Proper AWS services should be chosen to align with this rule. Hence, options having EC2 with ELB and Auto Scaling can be safely eliminated.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect:&nbsp;</strong>Because ELB and Auto Scaling do&nbsp;not help to route traffic to users globally.</li>\r\n\t<li><strong>Option B is&nbsp;CORRECT</strong>:&nbsp;Because CloudFront has over 100 Edge Locations and is a proper CDN to deliver content to end-users with lower latency globally.</li>\r\n\t<li><strong>Option C is incorrect:&nbsp;</strong>Same reason as Option A as EC2 is eliminated.</li>\r\n\t<li><strong>Option D is&nbsp;CORRECT</strong>:&nbsp;Because Lambda@Edge can work together with CloudFront to build dynamic web applications that automatically scale up and down. There is also no need to build up servers to hold the application code.</li>\r\n\t<li><strong>Option E is&nbsp;CORRECT:</strong>&nbsp;Because DynamoDB database is a fully managed and high-performance database. DynamoDB automatically scales tables to adjust for capacity and maintain performance.</li>\r\n\t<li><strong>Option F is incorrect:</strong>&nbsp;RDS needs Read Replica and Multi-AZ to be scalable, which brings extra efforts. There is also no need to use a relational database for this case. Option E (DynamoDB) is better and is a pure serverless solution together with other valid options.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123534,
          "question_id": 98648,
          "answers": [
            {
              "question_id": "98648",
              "choice": "<p>Configure an elastic load balancer and Auto Scaling group to balance the traffic dynamically</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98648",
              "choice": "<p>Configure an AWS CloudFront to serve end users from various Edge Locations</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98648",
              "choice": "<p>Create an Auto Scaling configuration for EC2 instances to automatically scale up and down according to the load</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98648",
              "choice": "<p>Run the application code in Lambda@Edge to retrieve data from the database, and the response is also cached and served by CloudFront</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98648",
              "choice": "<p>Use DynamoDB to store data for blog posts that the application is using</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98648",
              "choice": "<p>For the dynamic data including blog posts for customers, configure an RDS instance as the database</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98649,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS administrator. Recently, you started to use various AWS services in AWS Systems Manager to maintain over 20 EC2 and on-premises instances. In the past month, the AWS bill has increased by about 10% than before. The company&rsquo;s accountant asked you about the potential cause of this. For the AWS Systems Manager services, which ones may bring additional charges? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answers:&nbsp;D&nbsp;and&nbsp;E</strong></p>\r\n\r\n<p>For the services provided by AWS Systems Manager, most of them are free without extra cost. However, there are still some priced features when used. For the details, please refer to <a href=\"https://aws.amazon.com/systems-manager/pricing/\" target=\"_blank\">https://aws.amazon.com/systems-manager/pricing/</a> on AWS Systems Manager Pricing.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;CORRECT b</strong>ecause on-premises Instance Management does not incur any charges, it is free.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect b</strong>ecause Run Command is free. Check the above link.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect b</strong>ecause Patch Manager automates the process of patching managed instances, which is a free service.</li>\r\n\t<li><strong>Option D is CORRECT: </strong>Parameter Store is a secure place to store parameters or secrets. When you create advanced parameters, you are charged based on the number of advanced parameters stored each month and per API interaction.\r\n\t<ul>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;CORRECT because t</strong>he Automation will bring additional charges.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/systems-manager/pricing/\" target=\"_blank\">https://aws.amazon.com/systems-manager/pricing/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123497,
          "question_id": 98649,
          "answers": [
            {
              "choice": "<p>On-Premises Instance Management</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Run Command in Systems Manager</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Patch Manager</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Advanced Parameter Store</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Systems Manager Automation</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98650,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are maintaining over a dozen EC2 Ubuntu instances. The application installed in the instances had an&nbsp;issue last week, and the development team already knew the root cause. To prevent the issue from happening again, some debug logs have been added to the application. Your manager asked you to use AWS Systems Manager to send the logs to an S3 bucket every 2:00 AM for all the EC2 instances. Which AWS Systems Manager service should you use to meet this requirement? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answers:&nbsp;C and D</strong></p>\r\n\r\n<p>State Manager and Maintenance Windows, both capabilities of AWS Systems Manager, can perform some similar types of updates on your managed instances.&nbsp;</p>\r\n\r\n<p>A maintenance window&nbsp;takes one or more actions on AWS resources within a given time window. You can define a single maintenance window with start and end times. You can specify multiple tasks to run within this maintenance window.</p>\r\n\r\n<p>For this case, the State Manager should be used. The &ldquo;AWS-RunPowerShellScript&rdquo; document can be created, and its target is all the EC2 instances.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_9.png\" style=\"height:228px; width:750px\" /></p>\r\n\r\n<p>AWS Systems Manager State Manager is a service that automates the process of keeping the Amazon EC2 or hybrid infrastructure in the state that you desire.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because Session Manager is a service to provide secure and auditable instance management, which is not a tool to execute a script or command.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;Because Distributor packages the software to install on AWS Systems Manager managed instances. It is not designed to run a script or command as a schedule.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;CORRECT</strong>:&nbsp;Because in State Manager, the user can design an association that contains a proper document to accomplish this mission.</li>\r\n\t<li><strong>Option D is CORRECT</strong>: because Maintenance Windows can be used&nbsp;if your high priority operations include patching your managed instances, running multiple types of tasks on your instances during an update period, or controlling when update operations can be run on your instances.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-vs-maintenance-windows.html\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-vs-maintenance-windows.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123498,
          "question_id": 98650,
          "answers": [
            {
              "choice": "<p>Use the Session manager to send&nbsp;the required logs to the S3 bucket every 2:00 AM</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Systems Manager Distributor to transfer the logs every 2:00 AM on all the AWS Systems Manager managed instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use State Manager to run a shell script every 2:00 AM for all the EC2 instances</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a schedule in AWS Systems Manager Maintenance Windows to move the logs to the S3 bucket every 2:00 AM</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98651,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name example.com. You decide to use Route53 Latency-Based Routing to serve web requests to the users from the region closest to them. To provide business continuity in the event of server downtime,&nbsp;you configure weighted record sets associated with two web servers in separate Availability Zones per region.</p>\r\n\r\n<p>During a DR test, you notice that when you disable all web servers in one of the regions, Route53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;B and&nbsp;E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because you can set up weighted record sets as the failover or secondary recordset.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because if the HTTP health check is not set with the weighted resource record sets of the disabled web servers, Route 53 will consider them healthy and continue to forward the traffic. Once the health check is enabled, the DNS queries will get a response indicating that the web servers are disabled, and then the requests would get routed to the other region.</li>\r\n\t<li><strong>Option C is incorrect </strong>because even if the weight is lower for the region with disabled web servers, Route 53 will continue forwarding the users&#39; requests closest to that region because it will evaluate the latency record set first.</li>\r\n\t<li><strong>Option D is incorrect </strong>because, even if one of the servers fails, the other server will still work, and the region should get the traffic.</li>\r\n\t<li><strong>Option E is CORRECT </strong>because if the &ldquo;Evaluate Target Health&rdquo; is not set to &ldquo;Yes&rdquo; for the region containing the disabled web servers, Route 53 will consider the health of the recordset as healthy and continue to route the traffic to it.</li>\r\n</ul>\r\n\r\n<p>For more information on How Amazon Route 53 chooses records when Health Checking is configured, please visit the link below:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-how-route-53-chooses-records.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-how-route-53-chooses-records.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-eth-no\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-eth-no</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123499,
          "question_id": 98651,
          "answers": [
            {
              "choice": "<p>Latency resource record sets cannot be used in combination with weighted resource record sets</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You did not set up an HTTP health check to one or more of the weighted resource record sets associated with the disabled web servers</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>One of the two working web servers in the other region did not pass its HTTP health check</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You did not set &ldquo;Evaluate Target Health&rdquo; to &ldquo;Yes&rdquo; on the latency alias resource record set associated with example.com in the region where you disabled the servers</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98652,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has landed a contract to build a search engine for public legal documents. The dataset is around 100TB in size and is available at the customer&rsquo;s data center in various formats. Part of the dataset is stored in tapes, and the other is stored in disks. Some of the datasets are very old, dated nearly 15 years back, and stored in a compressed format to save on the disk. The management has assigned you the task to come up with a flexible and cost-efficient design to ingest the data and make it available for the front-end application to search through efficiently.<br />\r\nWhich two sequential steps should you choose to accomplish this final task?</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT </strong>because Snowball Edge Storage Optimized devices can be used to transfer a large amount of data to AWS Data Centres for one-time transfer or periodic transfer.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because AWS Batch will allow you to run custom code to decompress the data and finally save the output to OpenSearch via the Kinesis Firehose.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because it will use the standard internet line available to the company and take up a huge amount of time to migrate the data.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because RDS might not be the right database for this data size and the requirement to search through it.</li>\r\n\t<li><strong>Option E is INCORRECT</strong> because the Direct Connect setup will not be cost-effective for a one-time transfer.</li>\r\n</ul>\r\n\r\n<p><strong>References:&nbsp;</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html\" target=\"_blank\">https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/orchestrating-an-application-process-with-aws-batch-using-aws-cloudformation/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/orchestrating-an-application-process-with-aws-batch-using-aws-cloudformation/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/developer/orchestrating-an-application-process-with-aws-batch-using-aws-cdk/\" target=\"_blank\">https://aws.amazon.com/blogs/developer/orchestrating-an-application-process-with-aws-batch-using-aws-cdk/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123500,
          "question_id": 98652,
          "answers": [
            {
              "choice": "<p>Set up the Snowball Edge Storage Optimized devices to migrate the data to S3</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the AWS Batch to process the data from S3, send it to Kinesis Firehose, and save it to Amazon&nbsp;OpenSearch Service</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a VPN connection and transfer the data to AWS S3 over the weekend</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Load the data to EFS and create Auto Scaling EC2 instances to read through the data and save it into the AWS RDS for querying</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Set up&nbsp;a Direct Connect connection to transfer the data from on-premise servers to the S3</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98653,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has built a Therapist Finder service. Since the launch last year, over 150K therapists have registered from around the country, and the service is growing rapidly. The management has decided to add a new, much-needed feature to showcase Verified Therapists&nbsp;based on a complex search context and other parameters on their website. Thus,&nbsp;when users search for related therapists, the service can show verified therapists. Their current database is in DynamoDB. The management is ready to do some reengineering if the solution can be cost-effective as well.&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because moving the data to Amazon OpenSearch will give better search options without breaking the Read Capacity of the DynamoDB.&nbsp;Use the OpenSearch queries to boost the search result efficiently.</li>\r\n\t<li><strong>Option B&nbsp;is INCORRECT</strong> because moving the data to RDS will not solve the issue and will need significant engineering effort as well.</li>\r\n\t<li><strong>Option C&nbsp;is INCORRECT</strong> because ElastiCache is to cache the data and not run the complex search queries.</li>\r\n\t<li><strong>Option D&nbsp;is INCORRECT </strong>because DAX is not a service to help to search content and does not help to implement the feature.&nbsp;</li>\r\n</ul>\r\n\r\n<p>DAX and ElastiCache are used for different purposes than Amazon&nbsp;OpenSearch services.</p>\r\n\r\n<p>DAX is better than ElastiCache but cannot be compared to Amazon OpenSearch Service.</p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/indexing-amazon-dynamodb-content-with-amazon-elasticsearch-service-using-aws-lambda/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/indexing-amazon-dynamodb-content-with-amazon-elasticsearch-service-using-aws-lambda/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123501,
          "question_id": 98653,
          "answers": [
            {
              "choice": "<p>Stream the DynamoDB data to Amazon OpenSearch using AWS Lambda and use it for the search</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the DynamoDB data to the AWS RDS database and use it for the search</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS ElastiCache in front of the DynamoDB for the search queries</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the DynamoDB Accelerator for faster response times&nbsp;and save the read capacity</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98654,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company recently launched a mobile application that allows users to take pictures of what they are eating daily, share with others, and get feedback to maintain a healthy diet routine. These pictures are stored in S3 and served via the CloudFront. The CEO of the company thinks the storage is not well optimized by looking at the bill. He has asked to generate the access log reports and shift the images to different storage if they are not frequently used. It is not very clear which images will be accessed frequently, but as per the past data analysis, the usage becomes low after the initial 3-4 weeks. Please select the best option to optimize the cost and also maintain accessibility.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT</strong> because CloudFront is used to deliver the images to end-users to reduce the latency lag. Edge Locations work as caching servers, and it saves the images based on the frequency of use. However, CloudFront still loads the content from the origin S3 Bucket.</li>\r\n\t<li><strong>Option B is INCORRECT </strong>because migrating the images to Glacier will make it almost inaccessible after 3 weeks. Glacier retrieval time is between 3-5 hours, and per the requirement, the application still needs to maintain accessibility.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because the CloudFront already geo-distributes the load and putting an elastic load balancer in front of it is not viable.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because S3 Intelligent Tier automatically shifts content between the Standard and Infrequent Access tier based on the usage pattern. If the content is not used for 30 consecutive days, it will automatically be moved to the Infrequent Access tier. Upon use, it will be transferred back to the Standard tier without any additional cost.</li>\r\n\t<li><strong>Option E is INCORRECT</strong> because serving images from EBS is not very scalable as compared to S3 storage. There is no lifecycle event for EBS volumes.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/csa-pro-4-60.PNG\" style=\"height:582px; width:750px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/s3/storage-classes/\" target=\"_blank\">https://aws.amazon.com/s3/storage-classes/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123502,
          "question_id": 98654,
          "answers": [
            {
              "choice": "<p>Use CloudFront Edge Locations and enable access logs.&nbsp;It will automatically optimize the storage cache based on the access pattern</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Apply Lifecycle event to migrate from S3 Standard to Glacier after 3 weeks</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an elastic load balancer, point to the CloudFront distribution, and enable the Access Logs. Use Kinesis to process the logs and shift the images to S3 Infrequent Access based on low usage</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Store the images with S3 Intelligent Tier. It will automatically select the best storage class depending on the access pattern</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Store the images on EC2 EBS and serve it from there. EBS is highly optimized and cheap compared to S3. Put a lifecycle event to shift the unused images to S3 after 30 days</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98655,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/24. The user has created a public subnet with CIDR 20.0.0.0/25 and a private subnet with CIDR 20.0.0.128/25. The user has launched one instance each in the private and public subnet. Which of the below-mentioned options cannot be the correct IP address (private IP) assigned to an instance in the public or private subnet?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;A</strong></p>\r\n\r\n<p>In Amazon VPC, the first four IP addresses and the last IP address in each subnet CIDR block are not available for the user to assign to an instance. <em>For example:</em>&nbsp;In this VPC, the following five IP addresses are reserved for a subnet with CIDR block 20.0.0.0/25:</p>\r\n\r\n<p>Netmask: 255.255.255.128 = 25</p>\r\n\r\n<p>Broadcast address is 20.0.0.127</p>\r\n\r\n<ul>\r\n\t<li>20.0.0.0: Network address.</li>\r\n\t<li>20.0.0.1: Reserved by AWS for the VPC router.</li>\r\n\t<li>20.0.0.2: Reserved by AWS. The IP address of the DNS server is always the base of the VPC network range plus two; however, we also reserve the base of each subnet range plus two. 20.0.0.3: Reserved by AWS for future use.</li>\r\n\t<li>20.0.0.3:&nbsp;&nbsp;Reserved by AWS for future use.</li>\r\n</ul>\r\n\r\n<p>For more information on IP Reservations, please visit the link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123503,
          "question_id": 98655,
          "answers": [
            {
              "choice": "<p>20.0.0.127</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>20.0.0.132</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>20.0.0.122</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>20.0.0.55</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98656,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is running a business analytics service that uses RDS with MySQL as the main database. The database is configured with Multi-AZ. Most recently, the load on the database has increased rapidly with&nbsp;the launch of new features. By looking at the logs, most of the load is generated by read-only queries. Because of the heavy read loads, the operations team has decided to put a set of read replicas in place. The new application features are launched via a cluster of containers into the virtual machines, where all the containers are having access to the same set of configurations. How can you pair the read replicas together to make sure the application running in the containers can access them properly?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because, in Route 53, you can create individual record sets for each DNS endpoint associated with your read replicas and give them the same weight. Then the read requests are distributed across multiple read replicas.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because the ELB cannot point to multiple replicas.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because this is not a workable solution. Elastic IP is an external resource, and routing the Elastic IP to read replica set is impossible.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because it is possible to route internal Route53 multivalve answer records to a set of IPs.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/requests-rds-read-replicas/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/requests-rds-read-replicas/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123504,
          "question_id": 98656,
          "answers": [
            {
              "choice": "<p>Create Amazon Route 53 weighted record sets to distribute requests across the read replicas</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create an ELB and point to all the read replicas. Use the URL of the ELB to access the read replicas from the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Elastic IP and create a route table entry to point the IP to the read replicas. Use the IP to access the read replicas from the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Read replica cluster is not supported in AWS. Use an external utility to create a DNS record and use the record to access the read replicas from the application</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98657,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following are correct statements with policy evaluation logic in AWS Identity and Access Management?</p>\r\n\r\n<p>Choose 2 answers from the below options.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers:&nbsp;C and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because explicit deny always overrides an explicit allow.</li>\r\n\t<li><strong>Option B is incorrect </strong>because all requests are denied by default.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because an explicit allow overrides the default deny.</li>\r\n\t<li><strong>Option D is incorrect </strong>because explicit deny cannot be overridden by an explicit allow.</li>\r\n\t<li><strong>Option E is CORRECT </strong>because all requests are denied by default.</li>\r\n</ul>\r\n\r\n<p>The below diagram shows the evaluation logic of IAM policies. And as per the evaluation logic, it is clear that the above scenario leads to a default deny.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_oe4pzj.png\" style=\"height:724px; width:750px\" /></p>\r\n\r\n<p>For more information on the IAM policy evaluation logic, please refer to the link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123505,
          "question_id": 98657,
          "answers": [
            {
              "choice": "<p>An explicit deny does not override an explicit allow</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>By default, all requests are allowed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>An explicit allow overrides default deny</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>An explicit allow overrides an explicit deny</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>By default, all requests are denied</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98658,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a sensor intended to be placed inside people&#39;s watches, monitoring the number of steps taken every day. There is an expectation of thousands of sensors reporting every minute and hopes to scale to millions by the end of the year. A requirement for the project is that it needs to accept the data, run it through ETL to store in the warehouse, and archive it on Amazon Glacier, with room for a real-time dashboard for the sensor data to be added at a later date. What is the best method for architecting this application given the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because S3 is not ideal for handling huge amounts of real-time requests.</li>\r\n\t<li><strong>Option B is incorrect </strong>because Amazon Cognito is not suitable for handling real-time data.</li>\r\n\t<li><strong>Option C is incorrect </strong>because DynamoDB is not suitable for data ingestion and handling.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because the requirement is real-time data ingestion and analytics. The best option is to use Kinesis for storing real-time incoming data. The data can then be moved to S3 and then analyzed using EMR and Redshift. Data can then be moved to Glacier for archival.</li>\r\n</ul>\r\n\r\n<p><strong>More information about the use of Amazon Kinesis:</strong></p>\r\n\r\n<p>Amazon Kinesis is a platform for streaming data on AWS, making it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.</p>\r\n\r\n<ul>\r\n\t<li>Use Amazon Kinesis Streams to collect and process large streams of data records in real-time.</li>\r\n\t<li>Use Amazon Kinesis Firehose to deliver real-time streaming data to destinations such as Amazon S3 and Amazon Redshift.</li>\r\n\t<li>Use Amazon Kinesis Analytics to process and analyze streaming data with standard SQL.</li>\r\n</ul>\r\n\r\n<p><strong>More information about the use of Amazon Cognito:</strong></p>\r\n\r\n<p>Amazon Cognito lets you easily add user sign-up and sign-in and manage permissions for your mobile and web apps. You can create your own user directory within Amazon Cognito, or you can authenticate users through social identity providers such as Facebook, Twitter, or Amazon; with SAML identity solutions; or by using your own identity system. In addition, Amazon Cognito enables you to save data locally on users&#39; devices, allowing your applications to work even when the devices are offline. You can then synchronize data across users&#39; devices so that their app experience remains consistent regardless of the device they use.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 123506,
          "question_id": 98658,
          "answers": [
            {
              "choice": "<p>Write the sensor data to Amazon S3 with a lifecycle policy for Glacier, create an EMR cluster that uses the bucket data, and run&nbsp;it through ETL. It then outputs that data into the Redshift data warehouse</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Cognito to accept the data when the user pairs the sensor to the phone.&nbsp;Then have Cognito send the data to Dynamodb. Use Data Pipeline to create a job that takes the DynamoDB table and sends it to an EMR cluster for ETL, then outputs to Redshift and S3 while&nbsp;using S3 lifecycle policies to archive on Glacier</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Write the sensor data directly to a scalable DynamoDB; create a data pipeline that starts an EMR cluster using data from DynamoDB and sends the data to S3 and Redshift</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Write the sensor data directly to Amazon Kinesis, output the data into Amazon S3, and create a lifecycle policy for Glacier archiving. Also, have a parallel processing application that runs the data through EMR and sends it to a Redshift data warehouse</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98876,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS solutions architect of the company Bigbank. As the company grows, you need to empower the software developers to create IAM roles by themselves. In the meantime, security guardrails should be in place to set maximum permissions for the IAM roles. You want to use IAM permissions boundaries to limit privileges available to IAM roles. For each IAM role created by the developers, the role must have the predefined permissions boundary policy (DevelopersPermissionsBoundary) attached to it which developers cannot delete. To achieve these requirements, you need to attach an IAM policy to the developers&rsquo; IAM identities. Which of the following IAM policies is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>​<strong>Correct Answer​: C</strong></p>\r\n\r\n<p>There are two requirements for the IAM policy attached to the developers&rsquo; IAM identities:</p>\r\n\r\n<p>1, The IAM policy should allow the creation of IAM roles on the condition that the permissions boundary &ldquo;DevelopersPermissionsBoundary&quot; is attached.</p>\r\n\r\n<p>2, The IAM policy should deny the permissions boundary deletion action for &ldquo;DevelopersPermissionsBoundary&rdquo;.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the IAM policy does not allow the creation of IAM roles (iam:CreateRole). &quot;iam:PutRolePermissionsBoundary&quot; is only for adding or updating the permissions boundary policy.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the IAM policy only allows &quot;iam:AttachUserPolicy&quot; which is used to attach a managed policy. The IAM policy does not allow the creation of IAM roles attached to the permissions boundary &ldquo;DevelopersPermissionsBoundary&quot;.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because the first part &ldquo;AllowRoleCreationWithPermissionsBoundary&rdquo; allows the creation of roles if the permissions boundary is attached. The second part &ldquo;DenyPermissionsBoundaryDeletion&rdquo; denies the permission boundary deletion action.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the first part &ldquo;DenyRoleCreationWithoutPermissionsBoundary&rdquo; does not allow the creation of IAM roles. It only denies the creation of IAM roles if the permissions boundary is NOT &ldquo;DevelopersPermissionsBoundary&quot;. The IAM policy needs an explicit allow for the IAM role creation otherwise the IAM:CreateRole action is denied.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/when-and-where-to-use-iam-permissions-boundaries/\" target=\"_blank\">https://aws.amazon.com/blogs/security/when-and-where-to-use-iam-permissions-boundaries/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124229,
          "question_id": 98876,
          "answers": [
            {
              "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;AllowRoleCreationWithPermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:PutRolePermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DenyPermissionsBoundaryDeletion&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:DeleteRolePermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;iam:PermissionsBoundary&quot;: &quot;arn:aws:iam:&lt;Account_ID&gt;:policy/DevelopersPermissionsBoundary&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp; ]\r\n}\r\n</pre>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;AllowRoleCreationWithPermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:AttachUserPolicy&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;iam:PermissionsBoundary&quot;: &quot;arn:aws:iam:&lt;Account_ID&gt;:policy/DevelopersPermissionsBoundary&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DenyPermissionsBoundaryDeletion&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:DeleteRolePermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp; ]\r\n}</pre>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;AllowRoleCreationWithPermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:CreateRole&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;iam:PermissionsBoundary&quot;: &quot;arn:aws:iam:&lt;Account_ID&gt;:policy/DevelopersPermissionsBoundary&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DenyPermissionsBoundaryDeletion&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:DeleteRolePermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;iam:PermissionsBoundary&quot;: &quot;arn:aws:iam:&lt;Account_ID&gt;:policy/DevelopersPermissionsBoundary&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp; ]\r\n}\r\n</pre>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DenyRoleCreationWithoutPermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:CreateRole&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&quot;StringNotEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;iam:PermissionsBoundary&quot;: &quot;arn:aws:iam:&lt;Account_ID&gt;:policy/DevelopersPermissionsBoundary&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DenyPermissionsBoundaryDeletion&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;iam:DeleteRolePermissionsBoundary&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp; ]\r\n}</pre>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98877,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is configuring an AWS Outposts to build and run applications on-premises. A VPC and its subnets with EC2 instances are configured in the Outposts. You have also created several S3 buckets and stored files on-premises. Now applications in the Outposts EC2 instances need to utilize AWS CLI (i.e. aws s3api get-object) to access the S3 Outposts objects. In order to successfully manage the S3 on Outposts objects, which of the following conditions must be met?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>​<strong>Correct Answer​: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the bucket policy is not necessary since not all &ldquo;s3-outposts&rdquo; actions need to be allowed. The bucket policy together with other IAM policies depends on specific business requirements.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because S3 versioning and a lifecycle configuration are not required for the Outposts S3 bucket communications.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because Outposts access points are required for the S3 Outposts configurations. According to <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsNetworking.html#AccessingS3Outposts\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsNetworking.html#AccessingS3Outposts</a>, the following conditions must be met:</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li>An access point for the VPC.</li>\r\n\t<li>An endpoint for the same VPC.</li>\r\n\t<li>An active connection between your Outposts and your AWS Region. For more information about how to connect your Outposts to a Region, see <a href=\"https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#region-connectivity\" target=\"_blank\">Outposts connectivity to AWS Regions</a> in the AWS Outposts User Guide.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because AWS PrivateLink is not a necessary configuration. AWS PrivateLink enables users to access the bucket management and endpoint management APIs for Amazon S3 on Outposts. The details can be found at <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-outposts-privatelink-interface-endpoints.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-outposts-privatelink-interface-endpoints.html</a>.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsGSConsole.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsGSConsole.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsGetObject.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsGetObject.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-outposts-privatelink-interface-endpoints.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-outposts-privatelink-interface-endpoints.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124230,
          "question_id": 98877,
          "answers": [
            {
              "choice": "<p>On the AWS Outposts S3 bucket, configure the following bucket policy to allow all &ldquo;s3-outposts&rdquo; operations:</p>\r\n\r\n<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp; &quot;Version&quot;:&quot;2012-10-17&quot;,\r\n&nbsp;&nbsp; &quot;Id&quot;:&quot;BucketPolicy&quot;,\r\n&nbsp;&nbsp; &quot;Statement&quot;:[\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;:&quot;st1&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;:&quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;:&quot;*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;:&quot;s3-outposts:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;:&quot;arn:aws:s3-outposts:region:xxxxxxxxxxxx:outpost/op-example/bucket/example-bucket&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp; ]\r\n}\r\n</pre>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For Amazon S3 on Outposts, enable S3 versioning and create a lifecycle configuration to expire objects or replace them with newer object versions</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For Amazon S3 on Outposts, configure Outposts access points attached to the Outposts buckets that will be used by the S3 object operations such as GetObject and PutObject</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Provision AWS PrivateLink for S3 on the Outposts and access the S3 objects through the interface VPC endpoints</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98878,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As an AWS cloud engineer, you need to manage a large number of EC2 instances in AWS. Most of the EC2 instances use customized RHEL 8 AMI. To manage the instances in AWS Systems Manager, you have manually pre-installed the SSM agents in EC2, but sometimes SSM agents do not work properly for certain EC2 instances. You want to set up a service to easily view the SSM agent logs and monitor the running status of the agents. How do you configure it?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because it only enables the SSM agent to debug logging and does not help users to monitor the agent activities. Users still need to log in to EC2 to view the agent logs.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because by forwarding the SSM agent logs to CloudWatch Logs, users can view the agent running status and monitor the agent activities through the CloudWatch Logs service.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because CloudTrail can only record the System Manager API calls but cannot record the SSM agent running status such as a runtime agent failure.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Change Manager is a component of Systems Manager for managing changes to the application configuration and infrastructure. The change requests are captured in AWS CloudTrail Lake but SSM agent logs cannot be captured.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-ssm-agent.html\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-ssm-agent.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124231,
          "question_id": 98878,
          "answers": [
            {
              "choice": "<p>Locate the SSM agent configuration file &ldquo;/etc/amazon/ssm/seelog.xml.template&rdquo; in EC2. Change the default logging by modifying the minlevel value from info to debug</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a log group in CloudWatch Logs. Log into the instance through SSH and locate the SSM agent configuration file &ldquo;/etc/amazon/ssm/seelog.xml.template&rdquo; in EC2 and add an element to forward the SSM agent logs to the CloudWatch log group</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new trail in AWS CloudTrail and configure an Amazon SNS notification for the trail. View all the Systems Manager API calls as events in CloudTrail</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In Change Manager of AWS Systems Manager, turn on the CloudTrail Lake event tracking to monitor all the management events from the SSM agents</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98879,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are working in the company as an AWS Engineer of the platform team. The company uses an AWS Organization to manage all of its AWS accounts. The AWS accounts of the development team are placed in the Development Organizational Unit (OU). It has been found that sometimes engineers in the development team create too many EC2 instances and run out of budget. You need to enforce a policy to stop the development team from continuing to launch more EC2 instances when the spending is over the budget limit. Which of the following options is the easiest way to accomplish the requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct ​Answer​: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because a budget action enables users to automatically apply an SCP policy in the development OU to deny the EC2 creation actions:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-s3-4.png\" style=\"height:647px; width:750px\" /></p>\r\n\r\n<p>An example of the above &ldquo;EC2Deny&rdquo; SCP is as follows:</p>\r\n\r\n<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ec2:Run*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ec2:Start*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ec2:Create*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}</pre>\r\n\r\n<ul>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the action type &ldquo;Automate instances to stop for EC2 or RDS&rdquo; can only be used to stop running instances and cannot prevent more EC2 instances from being launched.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because users have to maintain a new Lambda function to react to over-budget events. Instead, users should use a budget action that can easily achieve the requirement to deny the creation of EC2 instances when the budget is over the limit. Option A should be chosen as the question asks the easiest solution.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because this option is not the easiest one as the IAM policy needs to be applied to each IAM identity including IAM role, group, and user. When there are IAM identity changes in the OU, the budget action needs to be changed accordingly.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html\" target=\"_blank\">https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/mt/manage-cost-overruns-part-1/\" target=\"_blank\">https://aws.amazon.com/blogs/mt/manage-cost-overruns-part-1/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/mt/manage-cost-overruns-part-2/\" target=\"_blank\">https://aws.amazon.com/blogs/mt/manage-cost-overruns-part-2/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124232,
          "question_id": 98879,
          "answers": [
            {
              "choice": "<p>Create a budget in AWS Budgets, set up an alert threshold, and configure a budget action to apply a service control policy (SCP) in the Development OU to deny the creation of EC2 instances</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a budget in AWS Budgets, set up an alert threshold, and configure a budget action with the &ldquo;Automate instances to stop for EC2&rdquo; action type to stop EC2 instances from being created by the development team</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a budget in AWS Budgets and set up an alert threshold. Create a Lambda function triggered by the over-budget CloudWatch events. Use the Lambda function to apply an SCP in the Development OU to deny the creation of new EC2 instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a budget in AWS Budgets and set up an alert threshold. Create a budget action with the &ldquo;IAM Policy&rdquo; action type to apply a customised IAM policy that denies the EC2 creation action to the IAM identities of the development team</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98880,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS Solutions Architect in an IT company. The company has built an internal dockerized Python web application and a PostgreSQL database deployed in EC2 instances. You need to design a new solution to restructure the application in new AWS services without using EC2. An RDS Aurora database will be set up to host the PostgreSQL database. For the Python application, the requirement is that it should be fast, simple, and cost-effective to be deployed without the need to configure load balancers to distribute traffic. The application should auto-scale based on the maximum number of concurrent requests for an instance that users have configured. How would you design the solution to host the Python application easily?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>​<strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the Lambda function provisions a separate instance for each concurrent request according to <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html</a>. However, the question asks for the ability to configure the maximum number of concurrent requests for a single instance.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because AWS App Runner helps users to deploy the application from a container image directly. App Runner is easy to use and manages networking, scaling, load balancing, and so on so that users can focus on the application logic.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because AWS ECS Fargate does not provide the load balancing function by itself and users have to configure load balancers. This does not meet the requirements.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because, with Elastic Kubernetes Service, users still need to configure a Load Balancer to distribute the ingress traffic across multiple pods running in different Availability Zones.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-for-app-runner-vpc-support/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-for-app-runner-vpc-support/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124233,
          "question_id": 98880,
          "answers": [
            {
              "choice": "<p>Store the Docker images in ECR and deploy the application using a new AWS Lambda function. Configure the max concurrency in the auto-scaling settings of the Lambda function</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Store the Docker images in ECR and host the application in a new AWS App Runner service. Configure the max concurrency in the auto-scaling settings of the App Runner service</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Store the Docker images in ECR and host the application in AWS ECS Fargate. Configure the max concurrency in the auto-scaling settings of ECS task definitions</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Store the Docker images in ECR and host the application in AWS Elastic Kubernetes Service (EKS). Configure the max concurrency in the auto-scaling settings of EKS clusters</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98881,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company owns a business critical application in AWS. Currently, the application is deployed in an Amazon Elastic Container Service (ECS) cluster running on an EC2 instance. The targeted cloud infrastructure RTO and RPO are planned to be 5 minutes and 1 second respectively. The cloud infrastructure outage occurs when the underlying EC2 infrastructure components (i.e. hardware) fail. You need to take some actions to achieve the above RTO and RPO cost-effectively. Which of the following options is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>​<strong>Correct Answer​: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because a hot standby at another AWS Region is not a cost-effective approach. This cannot achieve the required RTO and RPO due to the EC2 infrastructure outage. An EC2 auto-scaling group can achieve the requirements.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because there is no need to launch a new ECS cluster for another availability zone. Extra traffic management is also required to automatically redirect the traffic to another ECS cluster when an outage happens. To automatically switch the application traffic, it has to rely on customized logic/services instead of native AWS-provided services (i.e. Auto Scaling groups). Hence this option is not the most appropriate.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because an auto-scaling group can automatically adjust capacity to maintain steady and predictable performance when an EC2 infrastructure outage occurs. The RTO and RPO can be achieved since EC2 instances in an auto-scaling group have the same software image and the data loss is minimal.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Fargate Spot may tear down EC2 instances in the ECS cluster and it will cause an outage to the business-critical application. Fargate Spot is suitable for interruption-tolerant Amazon ECS tasks according to <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html</a>.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/mt/validating-and-improving-the-rto-and-rpo-using-aws-resilience-hub/\" target=\"_blank\">https://aws.amazon.com/blogs/mt/validating-and-improving-the-rto-and-rpo-using-aws-resilience-hub/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/mt/establishing-rpo-and-rto-targets-for-cloud-applications/\" target=\"_blank\">https://aws.amazon.com/blogs/mt/establishing-rpo-and-rto-targets-for-cloud-applications/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124234,
          "question_id": 98881,
          "answers": [
            {
              "choice": "<p>Configure a hot standby site at another AWS Region with a new ECS cluster. Use Route 53 to control the weight for the two sites and switch the traffic to the other site when the EC2 infrastructure outage happens</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new ECS cluster with the EC2 capacity type and launch the EC2 instance in another availability zone. Switch the application traffic to the new ECS cluster when the EC2 infrastructure outage happens</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group with EC2 instances and configure an ECS capacity provider that uses the auto-scaling group to manage the Amazon EC2 instances registered to the ECS cluster</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Change the ECS cluster capacity type from Amazon EC2 to Fargate Spot so that ECS can automatically scale up new instances when an EC2 infrastructure outage happens</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98882,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS solutions architect and need to design a solution for a new project. The project needs a Node.js backend to handle requests from IoT devices. When an IoT device triggers an event, the backend should start to process the event and write files in S3. The processing of one event is forecasted to finish in less than 10 minutes. To speed up the software development, the software Node.js backend should be easy to deploy and the underlying management such as infrastructure, patching, and scaling should be automatically handled by AWS. The solution should also be cost-effective. Which of the following options would you choose?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because EC2 instances in the auto scaling group are not cost-effective. The backend is event-driven and may not have any workload for a long time. Besides, with EC2 instances, users have to handle patching, scaling, and other management tasks.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because ECS Fargate uses EC2 instances under the hood and is being charged based on Fargate tasks. Although the tasks can be scaled down based on metrics, it is still not cost-effective.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because although Elastic Beanstalk can save users lots of effort on the AWS infrastructure, the environment tier it launches is not serverless and users are charged based on the resources (i.e. auto scaling group and elastic load balancer) the Elastic Beanstalk environment includes.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because the Lambda function is suitable for hosting an event-driven backend. It is triggered when needed and scales automatically. Users only pay for the consumed compute time. Lambda functions can run up to 15 minutes per execution, which also meets the requirement.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html\" target=\"_blank\">https://docs.aws.amazon.com/lambda/latest/dg/welcome.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124235,
          "question_id": 98882,
          "answers": [
            {
              "choice": "<p>Use CloudFormation to launch an EC2 auto scaling group to host the backend. Install the Systems Manager agents in the instances and use the Systems Manager Patch Manager and Session Manager to auto-patch the instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Docker image for the backend and deploy the application in Amazon ECS Fargate. Configure an auto-scaling policy to scale up and down the ECS tasks based on the CPU metrics</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Elastic Beanstalk application to develop and scale the Node.js backend. Deploy the application in an Elastic Beanstalk worker environment that includes an Auto Scaling group</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Lambda function with the Node.js runtime with the Amazon Linux operating system. Create an API in AWS API Gateway to trigger the Lambda function</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98883,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team owns a business-critical RESTful API deployed in AWS API Gateway. It is important to ensure the endpoint works properly and passes the sanity checks. You want to monitor the endpoint continuously and discover issues on the API endpoint. The monitoring needs to contain the heartbeat checks on the health check API endpoint and other sanity GET/POST HTTP requests. The monitoring should also publish metrics to CloudWatch and integrate with CloudWatch alarms or SNS for automatic notifications. From the following options, which one would you select as the most suitable one?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because Synthetics Canaries in CloudWatch Application Monitoring can easily monitor the API endpoints on a schedule. Canaries perform the checks that users have defined in the canary scripts.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-s3-8.png\" style=\"height:514px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because CloudWatch Resource Health in CloudWatch Application Monitoring can only monitor the health and performance of EC2 hosts. It cannot perform the monitoring of API Gateway endpoints.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because users need to manually configure a Lambda function from scratch, a CloudWatch Event rule, and the required alarms or notifications. The same function can be achieved by a canary in CloudWatch Synthetic Monitoring. CloudWatch Synthetic Canaries also provide features such as blueprints and schedules for users to easily configure the monitoring. Because of the above reasons, option C is NOT the most suitable one.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Route 53 Health Check does not integrate with SNS notifications directly. Route 53 Health Check can be used to test the connectivities of an endpoint. But users need to monitor the health check via CloudWatch and configure notifications through CloudWatch alarms. Details can be found at <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-health-checks.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-health-checks.html</a></li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-health-checks.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/monitoring-health-checks.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124236,
          "question_id": 98883,
          "answers": [
            {
              "choice": "<p>In CloudWatch Application Monitoring, configure Synthetics Canaries with blueprints to perform heartbeat and HTTP request monitoring. Configure alarms in the Synthetics Canaries</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the API monitoring in CloudWatch Resource Health of Application Monitoring. Configure CloudWatch alarms or SNS notifications for failed health checks</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda function to perform the health checks on the API endpoint and send notifications to an SNS topic if the checks fail. Use a CloudWatch Event rule to trigger the Lambda function periodically</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the API monitoring in Route 53 Health Check. Set up SNS notifications in Route 53 Health Check to an SNS topic when the health check status is unhealthy</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98884,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team needs to build a new database to store time series data from the metrics of EC2 instances including CPU/memory utilization, IOPS, network data, etc. The database will be part of the DevOps solution that monitors EC2 health and usage metrics and analyzes data in near real-time to improve performance and availability. After the database is established, you need to set up scheduled queries that can operate on the data and write the query results into a separate table. The scheduled queries are mainly used for real-time analytics. How would you design the solution in AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because Amazon DynamoDB is not designed for time series databases. DynamoDB also does not have a native scheduled query function for real-time analytics.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because Amazon Keyspaces (for Apache Cassandra) is a NoSQL database management system and cannot use SQL commands to perform the queries. Apache Cassandra is also not designed for time series databases. For the Amazon Keyspaces use cases, please refer to <a href=\"https://docs.aws.amazon.com/keyspaces/latest/devguide/use-cases.html\" target=\"_blank\">https://docs.aws.amazon.com/keyspaces/latest/devguide/use-cases.html</a>.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because Amazon Timestream is a fast and scalable time series database that provides built-in time series analytics functions. It also has a scheduled query feature by which users can determine real-time analysis.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because compared with option C, this option needs to build a Lambda function together with a CloudWatch Event rule as triggers. However, Amazon Timestream has already provided a native scheduled query feature that is a fully managed, serverless, and scalable solution.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html\" target=\"_blank\">https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/timestream/latest/developerguide/scheduledqueries.html\" target=\"_blank\">https://docs.aws.amazon.com/timestream/latest/developerguide/scheduledqueries.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/keyspaces/latest/devguide/use-cases.html\" target=\"_blank\">https://docs.aws.amazon.com/keyspaces/latest/devguide/use-cases.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124237,
          "question_id": 98884,
          "answers": [
            {
              "choice": "<p>Store the time series data in an Amazon DynamoDB NoSQL database. Set up scheduled queries through Amazon EventBridge and Lambda function</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Store the time series data in Amazon Keyspaces which is a serverless Apache Cassandra database service. Use standard SQL commands to perform scheduled queries</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Set up the time series database using Amazon Timestream. Use the scheduled query feature in Amazon Timestream to define the real-time analytics queries</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Set up the time series database in an Amazon Timestream database. Use a Lambda function to perform the required real-time analytics. Invoke the Lambda function with a cron expression in a CloudWatch Event rule</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98885,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company&rsquo;s AWS Organization has the default &ldquo;FullAWSAccess&rdquo; policy applied in the Organization Root. In the Development Organizational Unit (OU), the following SCP has been applied:</p>\r\n\r\n<pre class=\"brush:java;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DevelopmentOUPolicy1&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;cloudtrail:DeleteTrail&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp; {&nbsp;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DevelopmentOUPolicy2&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;ec2:RunInstances&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:ec2:*:*:instance/*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringNotEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ec2:InstanceType&quot;: &quot;t2.micro&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}</pre>\r\n\r\n<p>An AWS account within the Development OU has an IAM user named Roger. The user has the following IAM permissions boundary:</p>\r\n\r\n<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;IAM:ListUsers&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;IAM:GetAccountPasswordPolicy&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;cloudwatch:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ec2:*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}</pre>\r\n\r\n<p>You have also set the following IAM policy to the IAM user Roger:</p>\r\n\r\n<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;IAM:CreateUser&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;cloudwatch:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;ec2:*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}</pre>\r\n\r\n<p>For the IAM user Roger, which of the following operations can be performed successfully? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: B and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because although the IAM policy of the IAM user Roger allows &quot;IAM:CreateUser&quot;, the IAM permissions boundary does not include the &quot;IAM:CreateUser&quot; action. Hence, the operation of creating a new IAM user is denied.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the operations for the &quot;t2.micro&quot; EC2 instance are not denied by the Organization SCP and are also allowed in both the IAM permissions boundary and the IAM policy of the user.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because in SCP, the &quot;cloudtrail:DeleteTrail&quot; action is denied. As the SCP applies to all the AWS accounts in the OU, the operation of deleting the trail is unsuccessful.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because &quot;cloudwatch:*&quot; is allowed in both the IAM permissions boundary and the IAM policy of the user. There is also no deny for the CloudWatch actions in the Organization SCP.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong> because, in SCP, there is a deny of &quot;ec2:RunInstances&quot; if the instance type is NOT &quot;t2.micro&quot;. Since the instance type is &quot;t2.large&quot;, the operation is unsuccessful.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124238,
          "question_id": 98885,
          "answers": [
            {
              "choice": "<p>Create another IAM user named Jack. Set the password for the new IAM user and apply a permission boundary to the IAM user</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create and terminate an EC2 instance with the &quot;t2.micro&quot; instance type in the us-east-1 AWS region</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new CloudTrail to collect all S3 events for testing purposes. Delete the trail after the testing has been completed</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>For an existing EC2 instance, set a CloudWatch alarm for the CPU metric. When the CPU metric is over 80%, raise the CloudWatch alarm</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an EC2 instance with the &quot;t2.large&quot; instance type in the us-east-1 AWS region. Stop and terminate the instance after it is being used</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98886,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company owns an AWS Aurora MySQL global database. The global database is configured in two AWS regions. The primary AWS region is us-west-2 and the secondary AWS region is us-east-1. One day, there is an unexpected outage in the us-west-2 region. The Aurora global database is impacted and the primary Aurora DB cluster becomes unavailable. As an AWS cloud engineer, you need to quickly perform a cross-region failover to reconstruct the Aurora global database and recover the application from the regional outage. Which of the following approaches is correct?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the application should use the new endpoint of the promoted Aurora DB cluster in us-east-1. Please check <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover</a> for the details.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because detaching the secondary DB cluster immediately stops the replication and promotes it to be a standalone DB cluster with full read/write capabilities. Reconfiguring the endpoint makes sure that the application uses the correct Aurora DB cluster.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because it should not add the AWS region us-west-2 back as the secondary region as there is an outage in us-west-2. It may cause the global database to fail synchronization or replication.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because restoring the database from the latest DB snapshot does not perform a cross-region failover. With this option, the global database will still have the outage in the primary us-west-2 region.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124239,
          "question_id": 98886,
          "answers": [
            {
              "choice": "<p>In the Aurora global database, initiate a failover from the primary region (us-west-2) to the secondary region (us-east-1). Use the same database endpoint for the application</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Detach the secondary DB cluster (us-east-1) from the Aurora global database. Reconfigure the application to send write operations to the DB cluster in us-east-1. Add another AWS region to the DB cluster</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Detach the secondary DB cluster (us-east-1) from the Aurora global database. Configure the application to send write operations to the DB cluster in us-east-1. Restore the global database by adding the AWS region (us-west-2) back to the DB cluster as the secondary region</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Stop all the write operations to the primary cluster. Restore the Aurora global database from the latest DB snapshot. Resume the write operations after the restoring is successful</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98887,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are working in a startup company. Your team has built a long-running Amazon Linux EC2 instance to store and process application buffers and caches in the development AWS account. The EC2 instance uses instance store volumes (including the root volume) and the instance type is c3.8xlarge. The EC2 instance and the software application are working properly. Your manager asks you to create an instance store-backed AMI from the EC2 instance in order to launch more instances in other AWS accounts (i.e. staging, production). Which of the following methods is correct to fulfill the requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>​<strong>Correct Answer​:​ A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because EC2 AMI tools are required to bundle the manifest and upload the manifest to S3. Then the ec2 register-image command can register the AMI with the manifest in S3. The details can be found in <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html</a>.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because users can use the Create image page to create an Amazon EBS-backed Linux AMI instead of an instance store-backed Linux AMI.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the instance store persists only during the lifetime of its associated instance. No snapshots can be created from instance store volumes.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because &ldquo;aws ec2 create-image&rdquo; is used to create an Amazon EBS-backed AMI from an Amazon EBS-backed instance. To register an instance store-backed AMI, &ldquo;aws ec2 register-image&rdquo; is required.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124240,
          "question_id": 98887,
          "answers": [
            {
              "choice": "<p>Install the EC2 AMI tools in the EC2 instance. Create the AMI bundle using the ec2-bundle-vol CLI command. Run the ec2-upload-bundle command to upload the bundle manifest to Amazon S3. Use ec2 register-image CLI to register the AMI</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Select the EC2 instance in the AWS EC2 console. On the Create image page, create the AMI by selecting all the instance store volumes</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Select each instance store volume and create an instance store snapshot. Create an instance store-backed AMI from the instance store snapshots</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Install the EC2 AMI tools in the EC2 instance. Create the block device mappings using the ec2-bundle-vol CLI command. Run the &ldquo;aws ec2 create-image&rdquo; command to create the AMI with the block device mappings</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98888,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team maintains an RDS MySQL database in AWS. The DB instance class is db.t2.medium. One day, the DB instance has an outage and all connections to the database have been dropped for a short period. The outage lasts for several minutes. During troubleshooting, your database administrator has found that a team member has modified the instance class from db.t2.medium to db.r5d.large for more memory capacities and applied the change immediately. What is the reason for the DB instance outage and what is the correct way to change the DB instance class in the future?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because when the DB class is modified, the DB instance will reboot and cause an outage. The DB snapshot does not remediate the impacts. The change should be applied in the next scheduled maintenance window.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the outage happens NOT due to RDS reset connections. When the instance class is modified and the change is applied immediately, the DB instance reboot occurs.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because when the DB instance class is changed, RDS does not create a snapshot. Instead, the DB instance is rebooted and causes the outage.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because the DB instance is rebooted when the DB instance class is changed. For all the scenarios that cause DB instances to reboot, please check <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.Reboots\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.Reboots</a>. The DB instance class change should be applied in the next maintenance window to minimize the impacts.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.Reboots\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.Reboots</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124241,
          "question_id": 98888,
          "answers": [
            {
              "choice": "<p>The outage happens because the DB instance is rebooted when the instance class is changed. The correct way to change the DB instance class is to create a DB snapshot first and then apply the change after the DB snapshot is created successfully</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The outage happens because RDS reset all database connections when the instance class is modified and the change is applied immediately. The correct way to change the DB instance class is to keep the same instance class type (t2 in the question) to prevent the outage</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The outage happens because RDS creates a snapshot when the instance class is changed. The correct way to change the DB instance class is to apply the change during the next scheduled maintenance window</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>The outage happens because the DB instance is rebooted when the instance class is changed. The correct way to change the DB instance class is to apply the change during the next scheduled maintenance window</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98889,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS solutions architect and in charge of workload migration projects from on-premises to AWS. A workload needs to be deployed in a single EC2 instance (c5.xlarge). To simplify the management of the workload, multiple IPv4 addresses (less than 15) are required on the same elastic network interface of the EC2 instance. The application on the EC2 instance will be able to select the IPv4 addresses from the network interface when the application scales up. How would you reserve and assign the IPv4 addresses to the EC2 network interface in the most suitable way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because manually assigning 15 private IP addresses is hard to manage. To simplify IP management, users can assign an IP prefix to the network interface.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because secondary private IPv4 addresses are used to allocate a secondary IP address. Users cannot assign a prefix in the secondary private IPv4 addresses field.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because, with the prefix, users can assign a block of IP addresses as opposed to individual IP addresses. This method simplifies management. The following is an example of managing prefix:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-s3-14.png\" style=\"height:646px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because a network interface can be assigned with multiple IP addresses and there is no need to assign multiple network interfaces to the EC2 instance.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124242,
          "question_id": 98889,
          "answers": [
            {
              "choice": "<p>When creating the EC2 network interface, assign 15 private IP addresses from the subnet to reserve the IP addresses required by the interface</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>When creating the EC2 network interface, assign a /28 IPv4 prefix in the &ldquo;Secondary private IPv4 addresses&rdquo; field. Make sure that the prefix does not overlap with the primary IP address</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>When creating the EC2 network interface, assign a /28 IPv4 prefix by selecting auto-assign or custom prefix in the advanced settings</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>When a new IP address is required by the application, create a new network interface with an auto-assigned IP address and attach the network interface to the EC2 instance</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98890,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS consultant and helping a financial company to design a disaster recovery plan. The company owns several standalone EC2 servers (both Linux and Windows) in region us-east-1. When any unexpected events such as software issues or hardware failures happen in the us-east-1 region, the applications of the EC2 servers should be recovered in another AWS Region (us-west-1). You plan to use AWS Elastic Disaster Recovery as the disaster recovery solution to manage the point-in-time recovery and minimize the downtime and data loss of the servers. Which of the following options would you use as a best practice for using Elastic Disaster Recovery?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer​: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because Elastic Disaster Recovery (DRS) uses EBS snapshots to maintain <a href=\"https://docs.aws.amazon.com/drs/latest/userguide/failback-overview.html#point-in-time-faq\" target=\"_blank\">recovery Points-In-Time</a>. The EBS snapshots should be well protected instead of being cleaned up.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because performing drills is a key feature of Elastic Disaster Recovery for users to verify and update the recovery plan with any findings and required changes.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because Elastic Disaster Recovery allows users to choose a different instance type or size by customizing the EC2 launch templates of the recovery instances. For certain use cases (i.e. drills), a different instance size may be required.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because AWS Elastic Disaster Recovery cannot set up all the required resources in the target region (i.e. security groups). For other related resources (except EC2 instances), users should set them up properly and keep them if needed. It is also suggested to use a CloudFormation template to manage these resources. In option D, it mentions that AWS Elastic Disaster Recovery should always be used to create instances and other necessary related resources. This statement is not a best practice and hence should not be chosen.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html\" target=\"_blank\">https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/drs/latest/userguide/best_practices_drs.html\" target=\"_blank\">https://docs.aws.amazon.com/drs/latest/userguide/best_practices_drs.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124243,
          "question_id": 98890,
          "answers": [
            {
              "choice": "<p>In AWS Elastic Disaster Recovery, clean up old EBS snapshots generated by the recovery tasks so that the servers can be recovered from the latest state</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>In AWS Elastic Disaster Recovery, perform regular drills by launching drill instances and verify if the recovered servers function properly in the AWS region us-west-1</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>In AWS Elastic Disaster Recovery, always use the same instance types and sizes for the recovery instances to align with the configurations of the source instances</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>During a failover, always use AWS Elastic Disaster Recovery to create the instances in the target region and other necessary related resources (i.e. security groups)</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98891,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Which of the following statement about deletion of key from AWS Key Management Service (KMS) is true?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>You can schedule an AWS KMS key and associated metadata that you created in AWS KMS for deletion, with a configurable waiting period of 7 to 30 days. This waiting period helps you verify the impact of deleting a key on your applications and users that depend on it.</p>\r\n\r\n<p>The default waiting period is 30 days. You can cancel key deletion during the waiting period. The key cannot be used if it is scheduled for deletion until you cancel the deletion during the waiting period. The key gets deleted at the end of the configurable waiting period if you don&rsquo;t cancel the deletion. Once a key is deleted, you can no longer use it. All data protected under a deleted root key is inaccessible.</p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/kms/faqs/\" target=\"_blank\">https://aws.amazon.com/kms/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124249,
          "question_id": 98891,
          "answers": [
            {
              "choice": "<p>You can schedule an AWS KMS key and associated metadata that you created in AWS KMS for deletion, with a configurable waiting period from 5 to 20 days. You cannot cancel key deletion during the waiting period</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You can schedule an AWS KMS key and associated metadata that you created in AWS KMS for deletion, with a configurable waiting period from 7 to 30 days. You can cancel key deletion during the waiting period</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>You can schedule an AWS KMS key and associated metadata that you created in AWS KMS for deletion, with a configurable waiting period of 24hrs. You can cancel key deletion during the waiting period</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>You need to apply for the deletion procedure from the admin account and then schedule for deletion, with a configurable waiting period of 24hrs</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98892,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IT firm has its employees running its built-in applications that access the company&rsquo;s AWS resources. These employees have user credentials in the company&rsquo;s authentication system, based on their roles, supported by SAML.2.0. Identify the ways in which the SSO setup can be designed to gain temporary access to AWS? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: B and C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because already a role-based setup is in place and it seems redundant here.</li>\r\n\t<li><strong>Option B is the correct answer </strong>because (a) it creates a custom identity broker application for authenticating the users using their existing credentials, (b) it gets temporary access credentials using STS, and (c) it uses federated access for accessing the AWS resources.</li>\r\n\t<li><strong>Option C is the correct answer</strong> because (a) creates a custom identity broker application for authenticating the users using their existing credentials, and (b) it uses AssumeRole API for accessing the resources using a temporary role.</li>\r\n\t<li><strong>Option D is incorrect </strong>because the DecodeAuthorizationMessage API call only Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124250,
          "question_id": 98892,
          "answers": [
            {
              "choice": "<p>Design&nbsp; IAM users, with role based setup and pass a permission policy to achieve temporary access credentials from AWS STS to share based on employee roles in the company</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom identity broker application that authenticates the employees using the existing system, uses the GetFederationToken API decision, and passes a permission policy to achieve temporary access credentials from AWS - STS (Security Token Service)</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom identity broker application that authenticates employees using the existing system and uses the AssumeRole API call to gain temporary, role-based access to AWS</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AD server that synchronizes from the company&rsquo;s current identity provider and configures SAML-based single-sign-on, which will then use the DecodeAuthorizationMessage API call to generate credentials for the employees</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98893,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are the AWS Solutions Architect for a large organization that uses AWS Organizations to manage multiple AWS accounts. The organization&#39;s management team has requested that you export a complete list of all the AWS accounts in the organization, including the account ID, account name, and account status for each account. They also want this information to be regularly updated, so you need to design a solution that can automatically export this data on a regular basis. How would you design this solution using AWS Organizations and other AWS services?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong> as the ListAccounts operation of the AWS Organizations API can be used to retrieve the list of accounts and their details, including the account ID, account name, and account status for each account. Amazon S3 can be used to store the exported data. A scheduled AWS Lambda function can be used to automate the export process.</li>\r\n\t<li><strong>Option B is incorrect</strong> as Amazon CloudWatch Events can be used to trigger an AWS Lambda function on a regular basis. However, the question asks for the data to be exported to Amazon S3, and Option B does not specify how the data will be stored.</li>\r\n\t<li><strong>Option C is incorrect</strong> as the DescribeOrganization operation of the AWS Organizations API returns information about the organization, such as the ID, ARN, and feature set, but it does not return a list of accounts and their details. Amazon S3 can be used to store the exported data. A scheduled AWS Lambda function can be used to automate the export process.</li>\r\n\t<li><strong>Option D is incorrect</strong> as the DescribeOrganization operation does not return a list of accounts and their details. Amazon CloudWatch Events can be used to trigger an AWS Lambda function on a regular basis. However, the question asks for the data to be exported to Amazon S3, and Option D does not specify how the data will be stored.</li>\r\n</ul>\r\n\r\n<p><strong>References: </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_export.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_export.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-policy-keys\" target=\"_blank\">https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-policy-keys</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.htm\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.htm</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124251,
          "question_id": 98893,
          "answers": [
            {
              "choice": "<p>Use the AWS Organizations API&#39;s ListAccounts operation to retrieve the list of accounts and their details. Then, use Amazon S3 to store the exported data and set up a scheduled AWS Lambda function to automate the export process</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Organizations API&#39;s ListAccounts operation to retrieve the list of accounts and their details. Then, use Amazon CloudWatch Events to trigger an AWS Lambda function on a regular basis to export the data to Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Organizations API&#39;s DescribeOrganization operation to retrieve the list of accounts and their details. Then, use Amazon S3 to store the exported data and set up a scheduled AWS Lambda function to automate the export process</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Organizations API&#39;s DescribeOrganization operation to retrieve the list of accounts and their details. Then, use Amazon CloudWatch Events to trigger an AWS Lambda function on a regular basis to export the data to Amazon S3</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98894,
      "topic_id": 2687,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As an AWS admin of an IT firm, you are responsible for the following tasks on your AWS Organization using the CLI like;</p>\r\n\r\n<p>- Viewing details of an OU</p>\r\n\r\n<p>- Creating an OU</p>\r\n\r\n<p>- Renaming an OU</p>\r\n\r\n<p>- Edit tags attached to an OU</p>\r\n\r\n<p>- Moving an account to an OU or between the root and OUs</p>\r\n\r\n<p>Which of the following AWS CLI set of commands moves an AWS account from the root to an OU?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct</strong> <strong>Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct </strong>as the command syntax is given by AWS which has to be followed.</li>\r\n\t<li><strong>Options B, C and D are incorrect</strong> due to incorrect command syntax.</li>\r\n</ul>\r\n\r\n<p>Knowledge Note: You must specify the IDs of both the source and destination containers.</p>\r\n\r\n<p><strong>Reference: </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#move_account_to_ou\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#move_account_to_ou</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124252,
          "question_id": 98894,
          "answers": [
            {
              "choice": "<p>$ aws organizations move-account \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --account-id 111122223333 \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --source-parent-id r-a1b2 \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --destination-parent-id ou-a1b2-f6g7h111</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>$ aws organizations move-account \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --111122223333 account-id \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --source-parent-id r-a1b2 \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --destination-parent-id ou-a1b2-f6g7h111</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>$ aws organizations move-account \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --111122223333 account-id \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --r-a1b2 source-parent-id \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --destination-parent-id ou-a1b2-f6g7h111</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>$ aws organizations move-account \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --account-id 111122223333 \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --source-parent-id r-a1b2 \\</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; --ou-a1b2-f6g7h111 destination-parent-id</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design Solutions for Organizational Complexity"
    },
    {
      "question_id": 98895,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are the AWS Solutions Architect for a large organization that uses AWS Organizations to manage multiple AWS accounts. You have implemented service control policies (SCPs) to enforce fine-grained permissions on the accounts in the organization. One of the SCPs includes a condition attribute that allows users to perform certain actions only during a specific time period.You have been asked to modify this SCP to expire the condition attribute at the end of the current month. Which of the following options would you choose to accomplish this task?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is correct</strong> as Editing the SCP to set the condition attribute to expire at the end of the current month is the most straightforward and effective way to modify the expiration date of the condition attribute.</li>\r\n\t<li><strong>Option A is incorrect</strong> as removing the condition attribute entirely would remove the desired permissions controls from the SCP.</li>\r\n\t<li><strong>Option C is incorrect</strong> as creating a new SCP and applying it to the accounts in the organization would create a new set of permissions controls that could conflict with the existing SCP.</li>\r\n\t<li><strong>Option D is incorrect</strong> as attaching a new SCP to the existing SCP using an &quot;allow&quot; statement would not change the expiration date of the condition attribute in the existing SCP.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\" target=\"_blank\">ttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124253,
          "question_id": 98895,
          "answers": [
            {
              "choice": "<p>Edit the SCP to remove the condition attribute entirely</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Edit the SCP to set the condition attribute to expire at the end of the current month</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new SCP with the desired expiration date and apply it to the accounts in the organization</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new SCP with the desired expiration date and attach it to the existing SCP using an &quot;allow&quot; statement</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98896,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are the AWS Solutions Architect for a large organization that uses AWS Organizations to manage multiple AWS accounts. The organization has set up a permission boundary for the root user of the management account that limits the services and actions that the root user can access.</p>\r\n\r\n<p>Recently, a new member has been added to the organization&#39;s management team and they need to be able to perform certain actions that are restricted by the current permission boundary.</p>\r\n\r\n<p>Which of the following options would you choose to allow the new member to perform the necessary actions while still maintaining the organization&#39;s overall security posture?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is correct</strong> because this option allows you to maintain the organization&#39;s overall security posture by keeping the current permission boundary in place for the root user of the management account. It also allows the new member to perform the necessary actions by assuming a role with the necessary permissions when required.</li>\r\n\t<li><strong>Option A is incorrect</strong> as removing the permission boundary from the root user of the management account would significantly reduce the organization&#39;s overall security posture.</li>\r\n\t<li><strong>Option B is incorrect</strong> as editing the permission boundary to allow the necessary actions could potentially expose the organization to unnecessary risk if the new permissions are not carefully managed.</li>\r\n\t<li><strong>Option C is incorrect</strong> as creating a new IAM user with the necessary permissions would not be sufficient, as the new member would still be subject to the current permission boundary when using their own IAM user.</li>\r\n</ul>\r\n\r\n<p><strong>References: </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/when-and-where-to-use-iam-permissions-boundaries/\" target=\"_blank\">https://aws.amazon.com/blogs/security/when-and-where-to-use-iam-permissions-boundaries/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_iam.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_iam.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124254,
          "question_id": 98896,
          "answers": [
            {
              "choice": "<p>Remove the permission boundary from the root user of the management account</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Edit the permission boundary to allow the necessary actions</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM user with the necessary permissions and assign them to the new member of the management team</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM role with the necessary permissions and assume the role when the new member needs to perform the restricted actions</p>",
              "correct": 1,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98952,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As an AWS Solutions Architect for a global financial institution, you have been tasked with implementing a data storage solution that meets the organization&#39;s strict compliance and regulatory requirements. The institution is also aimed to reduce costs and optimize storage usage. The organization currently stores large amounts of financial data on Amazon S3 and management is concerned about the high cost of storage and the lack of visibility into storage usage.</p>\r\n\r\n<p>To address these concerns, you decide to implement Amazon S3 Storage Lens, a powerful tool that allows for detailed analysis and optimization of S3 storage usage.</p>\r\n\r\n<p>What would you recommend to enable Amazon S3 Storage Lens for the organization&#39;s S3 data based on the given requirements? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong> as by enabling Amazon S3 Storage Lens through the AWS Management Console, the cost optimization feature can be used to identify and delete unnecessary data, reducing storage costs.</li>\r\n\t<li><strong>Option D is correct</strong> as by working with AWS Support to develop a custom regulatory compliance solution, the organization can ensure that the data stored on Amazon S3 is in strict compliance with all relevant regulations and that Amazon S3 Storage Lens is properly configured to meet these requirements.</li>\r\n\t<li><strong>Option B is incorrect</strong> as it is possible to enable Amazon S3 Storage Lens on all S3 buckets using the AWS CLI command, this option alone is not sufficient to ensure that data is stored with strict compliance and regulatory requirements.</li>\r\n\t<li><strong>Option C is incorrect</strong> as modifying the S3 bucket policy and using the data analytics feature can help optimize storage usage, it is not a comprehensive solution to provide compliance requirements.</li>\r\n\t<li><strong>Option E is incorrect</strong> as it is possible to use AWS Config to monitor S3 buckets and trigger an AWS Lambda function to enable Amazon S3 Storage Lens, this option alone is not sufficient to address the organization&#39;s compliance and regulatory requirements and reduce storage costs.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Amazon S3 Storage Lens:<a href=\"https://aws.amazon.com/s3/storage-lens/\"> </a><a href=\"https://aws.amazon.com/s3/storage-lens/\" target=\"_blank\">https://aws.amazon.com/s3/storage-lens/</a></li>\r\n\t<li>Using Amazon S3 Storage Lens:<a href=\"https://docs.aws.amazon.com/s3/storage-lens/getting-started/\"> </a><a href=\"https://docs.aws.amazon.com/s3/storage-lens/getting-started/\" target=\"_blank\">https://docs.aws.amazon.com/s3/storage-lens/getting-started/</a></li>\r\n\t<li>Cost optimization with Amazon S3 Storage Lens:<a href=\"https://aws.amazon.com/s3/storage-lens/cost-optimization/\"> </a><a href=\"https://aws.amazon.com/s3/storage-lens/cost-optimization/\" target=\"_blank\">https://aws.amazon.com/s3/storage-lens/cost-optimization/</a></li>\r\n\t<li>Data organization with Amazon S3 Storage Lens:<a href=\"https://aws.amazon.com/s3/storage-lens/data-organization/\"> </a><a href=\"https://aws.amazon.com/s3/storage-lens/data-organization/\" target=\"_blank\">https://aws.amazon.com/s3/storage-lens/data-organization/</a></li>\r\n\t<li>Amazon S3 Bucket Policies:<a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html\"> </a><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html</a></li>\r\n\t<li>AWS Config:<a href=\"https://aws.amazon.com/config/\"> </a><a href=\"https://aws.amazon.com/config/\" target=\"_blank\">https://aws.amazon.com/config/</a></li>\r\n\t<li>AWS Lambda:<a href=\"https://aws.amazon.com/lambda/\"> </a><a href=\"https://aws.amazon.com/lambda/\" target=\"_blank\">https://aws.amazon.com/lambda/</a></li>\r\n\t<li>AWS Support:<a href=\"https://aws.amazon.com/premiumsupport/\"> </a><a href=\"https://aws.amazon.com/premiumsupport/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/</a></li>\r\n\t<li>AWS CLI:<a href=\"https://aws.amazon.com/cli/\"> </a><a href=\"https://aws.amazon.com/cli/\" target=\"_blank\">https://aws.amazon.com/cli/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124336,
          "question_id": 98952,
          "answers": [
            {
              "choice": "<p>Enable Amazon S3 Storage Lens on all S3 buckets through the AWS Management Console, and use the cost optimization feature to identify and delete unnecessary data</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Utilize the AWS CLI command &quot;aws s3storage-lens enable&quot; to enable Amazon S3 Storage Lens on all S3 buckets, and use the data organization feature to ensure that data is stored with strict compliance and regulatory requirements</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the S3 bucket policy to include a statement that grants storage-lens:Analyze permissions, and use the data analytics feature to identify patterns in data usage and optimize storage</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Contact AWS Support and request to enable Amazon S3 Storage Lens for all S3 buckets and work with the support team to develop a custom regulatory compliance solution</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config to monitor all S3 buckets, and send an alert to an SNS topic that triggers an AWS Lambda function to enable Amazon S3 Storage Lens on the specific S3 bucket that has been recently changed</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 98953,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As an AWS Solutions Architect for a large e-commerce company, you have been tasked with designing a highly available and scalable DNS solution that can handle millions of queries per second. The company currently uses Amazon Route 53 as its primary DNS service, but the management team is concerned about the potential for a single point of failure and the need for faster query resolution.</p>\r\n\r\n<p>To address these concerns, you decide to implement Amazon Route 53 Resolver, a powerful tool that allows for faster query resolution and increased availability by providing inbound and outbound DNS query capabilities.</p>\r\n\r\n<p>Which of the following combination of options would meet the requirement to enable Amazon Route 53 Resolver for the company&#39;s DNS infrastructure, while also ensuring high availability and scalability? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong> as by creating an inbound resolver endpoint in each availability zone, the company can ensure high availability by providing a DNS resolution service that is close to the client. This reduces the chances of a single point of failure and improves query resolution time.</li>\r\n\t<li><strong>Option D is correct</strong> as by enabling Amazon Route 53 Resolver for all VPCs within the company&#39;s AWS infrastructure, the company can ensure high scalability and availability by providing a DNS resolution service that can handle millions of queries per second. Using Route 53 Resolver to forward queries to on-premises DNS servers for resolution provides a hybrid solution that can leverage both on-premises and cloud-based resources to resolve queries.</li>\r\n\t<li><strong>Option B is incorrect</strong> because setting up a secondary hosted zone in Amazon Route 53 can provide some level of high availability, it does not address the concern of a single point of failure and it does not provide a scalable solution to handle millions of queries per second as Route 53 Resolver does.</li>\r\n\t<li><strong>Option C is incorrect</strong> because Amazon Route 53 Resolver Rules can help optimize query resolution time, but it does not address the concern of high availability and scalability that the company is facing.</li>\r\n\t<li><strong>Option E is incorrect</strong> because creating an outbound resolver endpoint in each availability zone and configuring Amazon Route 53 to forward all queries to the endpoint in the nearest region can improve query resolution time, but it does not address the concern of high availability and scalability.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Amazon Route 53 Resolver:<a href=\"https://aws.amazon.com/route53/resolver/\"> </a><a href=\"https://aws.amazon.com/route53/resolver/\" target=\"_blank\">https://aws.amazon.com/route53/resolver/</a></li>\r\n\t<li>Amazon Route 53 Resolver inbound and outbound queries:<a href=\"https://docs.aws.amazon.com/route53/latest/developerguide/resolver-overview.html\"> </a><a href=\"https://docs.aws.amazon.com/route53/latest/developerguide/resolver-overview.html\" target=\"_blank\">https://docs.aws.amazon.com/route53/latest/developerguide/resolver-overview.html</a></li>\r\n\t<li>Creating a Resolver endpoint:<a href=\"https://docs.aws.amazon.com/route53/latest/APIReference/API_CreateResolverEndpoint.html\"> </a><a href=\"https://docs.aws.amazon.com/route53/latest/APIReference/API_CreateResolverEndpoint.html\" target=\"_blank\">https://docs.aws.amazon.com/route53/latest/APIReference/API_CreateResolverEndpoint.html</a></li>\r\n\t<li>Using Route 53 Resolver to forward DNS queries:<a href=\"https://docs.aws.amazon.com/route53/latest/developerguide/resolver-forward-queries.html\"> </a><a href=\"https://docs.aws.amazon.com/route53/latest/developerguide/resolver-forward-queries.html\" target=\"_blank\">https://docs.aws.amazon.com/route53/latest/developerguide/resolver-forward-queries.html</a></li>\r\n\t<li>AWS VPCs:<a href=\"https://aws.amazon.com/vpc/\"> </a><a href=\"https://aws.amazon.com/vpc/\" target=\"_blank\">https://aws.amazon.com/vpc/</a></li>\r\n\t<li>Amazon Route 53 routing policies:<a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\"> </a><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124337,
          "question_id": 98953,
          "answers": [
            {
              "choice": "<p>Creating an inbound resolver endpoint in each availability zone and configuring Amazon Route 53 to forward all queries to the endpoint in the same availability zone as the client</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Setting up a secondary hosted zone in Amazon Route 53 and configuring a failover routing policy to automatically switch to the secondary zone in case of failure</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Using Amazon Route 53 Resolver Rules to forward queries to a specific set of IP addresses based on the query type, in order to optimize query resolution time</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Enabling Amazon Route 53 Resolver for all VPCs within the company&#39;s AWS infrastructure, and using Route 53 Resolver to forward queries to on-premises DNS servers for resolution</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Creating an outbound resolver endpoint in each availability zone and configuring Amazon Route 53 to forward all queries to the endpoint in the nearest region</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 98954,
      "topic_id": 2686,
      "course_id": null,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>As the AWS Solutions Architect for a large healthcare organization, you have been tasked with migrating the organization&#39;s legacy on-premises data warehouse to Amazon Redshift. The organization&#39;s management team is concerned about the potential downtime and data loss during the migration process.</p>\r\n\r\n<p>To address these concerns, you decide to use the AWS Schema Conversion Tool (AWS SCT) to convert the existing schema and migrate the data to Amazon Redshift with minimal downtime and data loss.</p>\r\n\r\n<p>Which combination of the below options would you recommend to use the AWS Schema Conversion Tool to ensure a successful migration of the legacy data warehouse to Amazon Redshift? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong> because AWS SCT can convert the existing schema to a format that is compatible with Amazon Redshift, which means that you can move your data to Amazon Redshift with minimal changes. Once the schema is converted, AWS DMS can be used to migrate the data with minimal downtime and data loss, as it can replicate ongoing changes in real-time.</li>\r\n\t<li><strong>Option D is correct</strong> as in the previous answer, the AWS SCT can convert the existing schema to a format that is compatible with Amazon Redshift. Once the schema is converted, AWS Glue can be used to extract, transform, and load the data into Amazon Redshift. Glue also has support for incremental loads, which can help minimize downtime and data loss.</li>\r\n\t<li><strong>Option B is incorrect</strong> as the AWS SCT can&rsquo;t generate a CloudFormation template to automate the creation of the Amazon Redshift cluster, it doesn&#39;t convert the schema or migrate the data. The AWS SCT is used to convert the schema and the CloudFormation template is used to automate the creation of the Redshift cluster, but you still need to use a data migration service to move the data.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS SCT can convert the existing schema to another compatible, but cannot create a new schema. You can use AWS Data Pipeline to move the data but you still need to convert the schema first.</li>\r\n\t<li><strong>Option E is incorrect</strong> as AWS S3 can be used to store the converted data, it&#39;s not a recommended way to load data into Amazon Redshift as it could be complex and time-consuming. Also, it may require additional steps and resources to ensure that the data is loaded into Amazon Redshift in a timely and accurate manner. It&#39;s better to use a data migration service like DMS or Glue to automate the data migration process.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>AWS Schema Conversion Tool (AWS SCT):<a href=\"https://aws.amazon.com/dms/schema-conversion-tool/\"> </a><a href=\"https://aws.amazon.com/dms/schema-conversion-tool/\" target=\"_blank\">https://aws.amazon.com/dms/schema-conversion-tool/</a></li>\r\n\t<li>Converting your schema with AWS SCT:<a href=\"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html\"> </a><a href=\"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html\" target=\"_blank\">https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html</a></li>\r\n\t<li>Amazon Redshift:<a href=\"https://aws.amazon.com/redshift/\"> </a><a href=\"https://aws.amazon.com/redshift/\" target=\"_blank\">https://aws.amazon.com/redshift/</a></li>\r\n\t<li>AWS Database Migration Service (AWS DMS):<a href=\"https://aws.amazon.com/dms/\"> </a><a href=\"https://aws.amazon.com/dms/\" target=\"_blank\">https://aws.amazon.com/dms/</a></li>\r\n\t<li>AWS Glue:<a href=\"https://aws.amazon.com/glue/\"> </a><a href=\"https://aws.amazon.com/glue/\" target=\"_blank\">https://aws.amazon.com/glue/</a></li>\r\n\t<li>AWS Data Pipeline:<a href=\"https://aws.amazon.com/datapipeline/\"> </a><a href=\"https://aws.amazon.com/datapipeline/\" target=\"_blank\">https://aws.amazon.com/datapipeline/</a></li>\r\n\t<li>Amazon S3:<a href=\"https://aws.amazon.com/s3/\"> </a><a href=\"https://aws.amazon.com/s3/\" target=\"_blank\">https://aws.amazon.com/s3/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124339,
          "question_id": 98954,
          "answers": [
            {
              "choice": "<p>Use the AWS SCT to convert the existing schema to a format compatible with Amazon Redshift, and then use AWS DMS to migrate the data to Amazon Redshift</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS SCT to generate a CloudFormation template that automates the creation of the Amazon Redshift cluster, and then use the template to launch the cluster and migrate the data</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS SCT to create a new schema in Amazon Redshift and then use AWS Data Pipeline to migrate the data to the new schema</p>",
              "correct": 0,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS SCT to convert the existing schema to a format compatible with Amazon Redshift, and then use AWS Glue to migrate the data to Amazon Redshift</p>",
              "correct": 1,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS SCT to convert the existing schema to a format compatible with Amazon Redshift, and then use AWS S3 to store the converted data and manually load it into Amazon Redshift</p>",
              "correct": 0,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Accelerate Workload Migration and Modernization"
    },
    {
      "question_id": 98955,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>As the AWS Solutions Architect for a large retail company, you have been tasked with designing a highly available and scalable solution for deploying and managing the company&#39;s microservices. The company currently uses a traditional on-premises infrastructure for deploying and managing its microservices, but the management team is concerned about the potential for downtime and lack of scalability.</p>\r\n\r\n<p>To address these concerns, you decide to use Amazon Elastic Container Service (ECS) to deploy and manage the company&#39;s microservices.</p>\r\n\r\n<p>What of the following are the ways to use Amazon Elastic Container Service (ECS) to ensure a highly available and scalable solution for deploying and managing the company&#39;s microservices? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: B and D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is correct</strong> as by creating an Auto Scaling group for the ECS cluster, the company can ensure high availability and scalability by automatically scaling the number of tasks based on CPU usage. This ensures that the microservices are always running and there is enough capacity to handle traffic during peak periods</li>\r\n\t<li><strong>Option D is correct</strong> because AWS Fargate allows the company to run containers without having to manage the underlying EC2 instances, which removes a lot of operational overhead. Additionally, using Fargate gives the company the ability to scale the number of tasks automatically based on traffic, which helps ensure high availability and scalability</li>\r\n\t<li><strong>Option A is incorrect</strong> as - Creating an ECS cluster in a single availability zone and deploying all microservices to that cluster. This is not a correct answer because creating an ECS cluster in a single availability zone would mean that the company&#39;s microservices would be vulnerable to downtime in the event of an availability zone failure. This doesn&#39;t meet the company&#39;s requirement for high availability</li>\r\n\t<li><strong>Option C is incorrect</strong> as - Using AWS Elastic Beanstalk to deploy and manage the microservices on ECS. This is not a correct answer because Elastic Beanstalk is a fully managed service that simplifies the deployment, scaling, and management of web applications, it&#39;s not a service that is designed to deploy and manage microservices on ECS</li>\r\n\t<li><strong>Option E is incorrect</strong> as - Creating an ECS cluster in multiple availability zones and deploying all microservices to the cluster, using Amazon Route 53 to distribute traffic to the microservices. This is not a correct answer because while it is correct that creating an ECS cluster in multiple availability zones can help increase the availability of the microservices, it does not address the concern of automatic</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Amazon Elastic Container Service (ECS): <a href=\"https://aws.amazon.com/ecs/\" target=\"_blank\">https://aws.amazon.com/ecs/</a></li>\r\n\t<li>AWS Fargate: <a href=\"https://aws.amazon.com/fargate/\" target=\"_blank\">https://aws.amazon.com/fargate/</a></li>\r\n\t<li>Auto Scaling group: <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html\" target=\"_blank\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html</a></li>\r\n\t<li>AWS Elastic Beanstalk: <a href=\"https://aws.amazon.com/elasticbeanstalk/\" target=\"_blank\">https://aws.amazon.com/elasticbeanstalk/</a></li>\r\n\t<li>Amazon Route 53: <a href=\"https://aws.amazon.com/route53/\" target=\"_blank\">https://aws.amazon.com/route53/</a></li>\r\n\t<li>AWS Container Services: <a href=\"https://aws.amazon.com/containers/\" target=\"_blank\">https://aws.amazon.com/containers/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 124341,
          "question_id": 98955,
          "answers": [
            {
              "question_id": "98955",
              "choice": "<p>Create an ECS cluster in a single availability zone and deploy all microservices to that cluster</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98955",
              "choice": "<p>Create an Auto Scaling group for the ECS cluster and configure the group to automatically scale the number of tasks based on CPU usage</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98955",
              "choice": "<p>Use AWS Elastic Beanstalk to deploy and manage the microservices on ECS</p>",
              "feedback": "",
              "correct": 0
            },
            {
              "question_id": "98955",
              "choice": "<p>Use AWS Fargate to deploy and manage the microservices on ECS</p>",
              "feedback": "",
              "correct": 1
            },
            {
              "question_id": "98955",
              "choice": "<p>Create an ECS cluster in multiple availability zones and deploy all microservices to the cluster. Use Amazon Route 53 to distribute traffic to the microservices</p>",
              "feedback": "",
              "correct": 0
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    }
  ]
}