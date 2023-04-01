// 9. Migration to AWS Cloud
var MigrationToAWSCloud = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 49769,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You were hired as an AWS Architect in a company to help migrate legacy applications from on-premises to AWS. The team is trying to use AWS Migration Hub to visualize the migrating process. The first step is using discovery tools to get valuable server data such as performance summary and performance time series. The team has good SQL experience, so they hope that AWS Athena can be used to analyze the imported data. Given that the legacy applications are installed in Linux CentOS 7.xxxx&nbsp;physical servers, which discovery tool is the best for you to use?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>AWS Migration Hub is a central place where the migration process can be visualized including the discovery phase. There are several discovery tools that are provided. For the details, please refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Discovery Connector is a VMware appliance used for VMware virtual machines. It cannot be used for CentOS. Besides, the data from Discovery Connector cannot be explored by AWS Athena.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT</strong>:​ Because AWS Discovery Agent has supported CentOS Linux servers. And user can enable data exploration in Amazon Athena from console:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_1.png\" style=\"height:188px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because Discovery Agent has supported a wide range of Linux and Windows servers. Check <a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html</a>.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because this is not how Discovery Agent works. Discovery Agent can transfer data securely to Application Discovery Service instead of S3.</li>\r\n</ul>\r\n\r\n<p>---------------------------------------------------------------------------------------</p>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>Please note that earlier Linux versions are also minimally supported. ( version 5 and above )</p>\r\n\r\n<p>AWS has&nbsp;<strong>not yet done away</strong>&nbsp;fully with the older Linux versions</p>\r\n\r\n<p>Please refer to page 22 on the below link</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/appdiscovery-ug.pdf#what-is-appdiscovery\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/appdiscovery-ug.pdf#what-is-appdiscovery</a></p>\r\n\r\n<p><img src=\"https://www.whizlabs.com/forums/media/2020/02/28/1582886401-28753.png\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39637,
            "question_id": 49769,
            "answers": [
              {
                "choice": "<p>Configure AWS Agentless Discovery Connector on the Linux servers which automatically register with the Application Discovery Service endpoint. The collected data is sent to the Application Discovery Service every 15 minutes. And the data uses JSON format which is a valid data format for Amazon Athena.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Install AWS Discovery Agent on the servers which transmit data to AWS Application Discovery Service. Then in Migration Hub, enable the Data Exploration in Amazon Athena.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>As Linux CentOS does not support AWS discovery tools, use Import Template to upload the server data to an S3 bucket manually. Then import the data in S3 to AWS Migration Hub and optionally analyze the data by AWS Athena.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Install AWS Discovery Agent on the physical servers and configure the agent to send data to an S3 bucket. Create related tables in AWS Athena to analyze the server data.</p>",
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
        "question_id": 49771,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team is working on the migration of Java applications to AWS. You plan to use AWS Application Discovery Agent to fetch the server data and then import it to AWS Migration Hub. However, it is found that the Agent does not support the operating system on the Linux servers. The version of your operating system is too high, but the Agent only supports lower versions. You still need to provide the server data to the Migration Hub. What approach is the most straightforward way for you to take?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<p>About different discovery approaches, please check the below screenshot:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_2.png\" style=\"height:290px; width:1000px\" /></p>\r\n\r\n<p>Discovery Connector is only used for VMware vCenter. And Discovery Agent does not support all operating systems. Users can upload data directly with an import template for the situations that Discovery Connector, and Discovery Agent cannot be used. Refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because it is not straightforward to downgrade the operating system. The best way would be uploading data directly rather than modifying the system.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because Vmware is the only supported platform for the Discovery connector.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ This approach is very straightforward to take. After the data is uploaded, the migration status can be easily tracked.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because the template format is CSV instead of JSON. Besides, only certain fields are mandatory. Not all fields need to be filled in.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39639,
            "question_id": 49771,
            "answers": [
              {
                "choice": "<p>Downgrade your operating system to the lower version and then use Discovery Agent to provide server data to Migration Hub.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Take the agentless approach by using Discovery Connector which can collect information without the need to install it on the server.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import details of the Linux servers environment directly into Migration Hub via import template.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the JSON format migration template and make sure all fields are filled in. Use an AWS CLI command to submit the data to the Migration Hub endpoint.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49772,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work in an e-commerce company, and most of the existing online trading applications are deployed in VMware. In order to migrate the servers smoothly to AWS, you propose using AWS Server Migration Service. When using the tool, it may include the following stages after the Server Migration Connector is configured:</p>\r\n\r\n<p>1, Upload VMDK to the S3 bucket.</p>\r\n\r\n<p>2, Create an AMI for the point-in-time copy.</p>\r\n\r\n<p>3, For the root device of the virtual machine, backup data to the S3 bucket using AWS s3 sync.</p>\r\n\r\n<p>4, Schedule the migration job.</p>\r\n\r\n<p>5, Convert VMDK to Amazon EBS snapshot.</p>\r\n\r\n<p>Which sequence is correct to describe the migration process?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p>AWS Server Migration Service is an ideal solution to migrate servers in the VMware environment to AWS. The final output of the whole migration process will be an AMI. For the details, refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/apn/category/aws-server-migration-service/\" target=\"_blank\">https://aws.amazon.com/blogs/apn/category/aws-server-migration-service/</a>.</li>\r\n</ul>\r\n\r\n<p>It includes the following stages during the migration:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_4.png\" style=\"height:478px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because stage 2 should be the last stage since AMI is the final output when the migration is complete.</li>\r\n\t<li><strong>Option​ ​B~C are​ ​incorrect</strong>:​ Because there is no data transfer stage via AWS s3 sync. Stage 3 is excluded.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Because the migration job should be created first. Then the VMDK is uploaded to the S3 bucket and converted to an EBS snapshot. And an AMI is created based on the EBS snapshot eventually.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39640,
            "question_id": 49772,
            "answers": [
              {
                "choice": "<p>4 -&gt; 2 -&gt; 1 -&gt; 5</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>3 -&gt; 4 -&gt; 1 -&gt; 2</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>3 -&gt; 1 -&gt; 4 -&gt; 2</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>4 -&gt; 1 -&gt; 5 -&gt; 2</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49773,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company&rsquo;s on-premises servers belong to different stacks including web servers, file servers, database servers, and application servers. Your team is in charge of the migration to AWS via AWS Server Migration Service. Your manager asks you to configure the servers into groups to manage the replication jobs better. Other than that, after the servers are successfully migrated, the instances should be automatically launched by CloudFormation templates. How should you achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\r\n\r\n<p>AWS Server Migration Service uses applications to manage groups of servers. The application can be divided into groups to allow users to launch tiers of servers. Refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/server-migration-service/latest/userguide/application-migration.html\" target=\"_blank\">https://docs.aws.amazon.com/server-migration-service/latest/userguide/application-migration.html</a></li>\r\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Because the application can assist in managing servers with groups and launching new instances by CloudFormation.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because servers cannot be managed by tags. The application should be used. Check the following screenshot:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_5.png\" style=\"height:551px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because it does not need SNS. The application can generate a CloudFormation template and create a stack automatically.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because tags or CloudWatch Event rules are not required in this scenario. Application in SMS should be used.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39641,
            "question_id": 49773,
            "answers": [
              {
                "choice": "<p>Organize the servers into an application in AWS Server Migration Service. Divide the application into groups. Configure the launch settings for CloudFormation.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Organize different servers via tags in AWS SMS for different stacks. Configure the replication jobs depending on tags. Use SMS provided CloudFormation templates to launch instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Divide servers into different user-defined groups. Trigger an SNS topic when replication jobs are finished. The SNS has a Lambda function as the target which uses CloudFormation templates to launch new instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use meaningful tags to define groups in AWS SMS. Create a CloudWatch Event rule. Whenever replication jobs are done, trigger an event to create EC2 instances using CloudFormation templates.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49774,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You need to migrate a multi-tier web application from on-premises to AWS as smoothly as possible. The web application includes a frontend on Apache and PHP, plus a database running on MySQL. All the services are deployed in VMware virtual machines. You have already set up VPC and subnets in one AWS region. And you are ready to start migrating the application. Which approach is the best one for you to take?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ B</strong></p>\r\n\r\n<p>About how to migrate multi-tier LAMP environments to AWS, please check the document in</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/how-to-migrate-multi-tier-environments-using-the-aws-server-migration-service/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/how-to-migrate-multi-tier-environments-using-the-aws-server-migration-service/</a>.</li>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS DataSync is used to transfer storage data rather than database. Check <a href=\"https://aws.amazon.com/datasync/\" target=\"_blank\">https://aws.amazon.com/datasync/</a>. Server Migration Service cannot migrate the server directly to a running EC2 instance.</li>\r\n\t<li><strong>Option​ ​B ​is​ CORRECT</strong>:​ Because DMS is suitable to migrate the database and SMS is ideal for replicating the server to an EC2 AMI. The approach makes sure that the migration goes smoothly.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because AWS Transfer cannot be used to migrate the database. Besides, AWS Migration Hub is a monitoring service rather than a migration service.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ AWS Application Discovery Service can help discover on-premises servers. However, SMS is still required to replicate the server to AWS.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39642,
            "question_id": 49774,
            "answers": [
              {
                "choice": "<p>Migrate MySQL database to RDS instance through AWS DataSync service. After the database is fully migrated, use AWS Server Migration Service to replicate the frontend server to a running EC2 instance. Change DNS records after tests have passed for the AWS server.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Database Migration Service to replicate MySQL database to Aurora. Configure Server Migration Service Connector appliance in VMware vCenter and initiate a replication job. Launch EC2 instance using the new AMI and change DNS records accordingly.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Transfer to migrate MySQL from VMware to AWS RDS. After that, in AWS Migration Hub, configure the frontend server migration to an AMI in AWS. Launch an EC2 based on the new AMI and switch DNS records in Route53.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure AWS DMS to migrate MySQL database to AWS RDS. Use AWS Application Discovery Service to replicate the frontend server to an EC2 AMI. Create an EC2 instance using the AMI and switch DNS accordingly.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49776,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You lead a project to migrate the local Oracle database to AWS RDS. You plan to use AWS Database Migration Service for the project as users can easily configure it to replicate data continuously. As the Oracle database is used for financial services, data security is very important. You already created a replication instance in AWS DMS. How does the replication instance encrypt the stored data to keep it secure?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ D</strong></p>\r\n\r\n<p><strong>Refer to </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.EncryptionKey.html\" target=\"_blank\">https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.EncryptionKey.html</a></li>\r\n</ul>\r\n\r\n<p>on how to encrypt the storage used by a replication instance.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because the replication instance is encrypted by KMS and cannot be disabled.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because the master key is aws/dms by default, and user can modify the key with a CMK according to the below screenshot:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_8.png\" style=\"height:508px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because the replication instance uses AWS KMS to encrypt the stored data.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong>:​ Refer to the explanation in Option B. When the replication instance is created, the encryption settings can be found in the section of &ldquo;Advanced security and network configuration&rdquo;.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39644,
            "question_id": 49776,
            "answers": [
              {
                "choice": "<p>By default, the volume in the instance is not encrypted. Users can choose to encrypt the EBS volume by KMS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The replication instance is encrypted by KMS, and the master key used is aws/ebs. Users cannot disable the encryption or modify the master key for the encryption.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The replication instance does not encrypt the stored data. Instead, the data in transit is encrypted for the connections between replication instances and endpoints.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>KMS encrypts data in the replication instance. The master key is aws/dms by default or a customer managed key (CMK).</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49777,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is a traditional trading company and the local database has 75 TB&nbsp;of data. The database needs to be migrated to AWS as soon as possible. Considering the limited network speed in the region, it may take months to transfer all the data to the cloud. You need to work out a plan to migrate the database faster and safer. Which approach is the best one for you to take?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ A</strong></p>\n\n<p>The major issue for the migration in the scenario is the limited network speed. The data should be loaded into a physical device first and then shipped to AWS. Snowball Edge is the best service to be considered. Refer to</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.html\" target=\"_blank\">https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.html</a>.</li>\n</ul>\n\n<ul>\n\t<li><strong>Option​ ​A ​is​ CORRECT</strong>:​ Because Snowball Edge can help transfer data to S3 bucket. The device of Snowball Edge Storage Optimized (for data transfer) has a 100 TB (80 TB usable) storage capacity. After the data is loaded to S3, user can configure AWS DMS to migrate data to AWS RDS as the following diagram:</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/10/23/ckeditor_9.png\" style=\"height:356px; width:1000px\" /></p>\n\n<p>Refer page 4 on the link :&nbsp;https://docs.aws.amazon.com/snowball/latest/developer-guide/AWSSnowball-dg.pdf</p>\n\n<ul>\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because Direct Connect maybe not enough given the huge amount of local data. The best approach should be using Snowball Edge and DMS.</li>\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong>:​ Because AWS DataSync is still based on network connection and does not solve the problem. And AWS Server Migration Service (SMS) is inappropriate.</li>\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Because AWS Schema Conversion Tool is not suitable to migrate data from S3 to DMS.</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 39645,
            "question_id": 49777,
            "answers": [
              {
                "choice": "<p>Use the Snowball Edge device to load the data to an S3 bucket, then configure a replication job in AWS Database Migration Service to migrate the data to the target DB.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up Direct Connect between local data center and AWS VPC. Configure AWS Database Migration Service to migrate the local database to AWS RDS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure AWS DataSync to automate, simplify and accelerate the data transfer between local and remote. Then configure an AWS SMS job to migrate data to AWS RDS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Order an AWS Snowmobile service to load the local database data to AWS S3. Configure AWS Schema Conversion Tool to adjust format and migrate data from S3 to RDS.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 49778,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company needs to migrate its data from a local server to AWS S3. The total amount of data is about 35TB. The data needs some advanced machine learning analysis before being migrated to AWS. The migration project should finish as fast as possible, and it is unacceptable to finish it in months. The data at rest should also be encrypted during the migration. What is the best way to achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​ ​&ndash;​ C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A ​is​ ​incorrect</strong>:​ Because AWS Transfer for SFTP is based on the network connection. It is unsuitable for migrating a huge amount of data. It also cannot provide processing ability before migration.</li>\r\n\t<li><strong>Option​ ​B ​is​ ​incorrect</strong>:​ Because when the data is less than 10PB, Snowmobile is NOT recommended.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong>:​ Snowball Edge is suitable for data migration and edge computing devices. For the scenarios that need processing abilities, either a single Snowball Edge Compute Optimized device(s) should be used.&nbsp;This Snowball Edge device option has the most compute functionality, with 52 vCPUs, 208 GiB of memory, and 42 TB (39.5 usable)</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong>:​ Snowball Edge devices have two options - Compute Optimized and Storage Optimized. For this scenario, Compute Optimized device should be chosen.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong><br />\r\n<a href=\"https://aws.amazon.com/snowmobile/faqs/\" target=\"_blank\">https://aws.amazon.com/snowmobile/faqs/</a><br />\r\n<a href=\"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/migration-services.html#aws-snowball-edge\" target=\"_blank\">https://docs.aws.amazon.com/whitepapers/latest/aws-overview/migration-services.html#aws-snowball-edge</a>.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 58382,
            "question_id": 49778,
            "answers": [
              {
                "question_id": "49778",
                "choice": "<p>Configure AWS Transfer for SFTP service to transfer files directly into Amazon S3 using the Secure File Transfer Protocol (SFTP).</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49778",
                "choice": "<p>Use AWS Snowmobile to transfer an extremely large amount of data as it is secure, fast, and cost-effective. KMS encrypts all data transferred in Snowmobile.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "49778",
                "choice": "<p>Use one Snowball Edge Compute Optimized product. Perform machine learning analysis at remote location and transfer the data. After the equipment is shipped back, AWS can store the data in S3.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "49778",
                "choice": "<p>Configure Snowball Edge Storage Optimized service. Perform machine learning and processing at edge location before copying the data. AWS can store the data in S3 after the device is returned to AWS.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      }
    ]
  }