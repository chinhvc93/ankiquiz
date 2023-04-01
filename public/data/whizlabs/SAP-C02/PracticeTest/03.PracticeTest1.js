// Practice Test 1(SAP-C02)
var SAP_C02_Whiz_PracticeTest1 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 98348,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company uses AWS Direct Connect to connect its on-premises network with an AWS VPC. DNS records of the AWS resources in the VPC are managed by a Route 53 private hosted zone. Now you want to forward DNS queries of the on-premise network to the Route 53 Resolver so that records in the Route 53 private hosted zone can be resolved in the on-premises network. Which of the following actions is appropriate for the above requirement to take place?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the Route 53 Resolver service does not provide a domain name or IP address for DNS resolvers on the on-premises network to be configured.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the Route 53 Resolver inbound endpoint should be used when forwarding DNS queries to the Route 53 Resolver. You can then configure the on-premises resolver to forward queries to the inbound endpoint. Take the following diagram as an example:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sas1.png\" style=\"height:415px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because Route 53 Resolver outbound endpoint is used when forwarding DNS queries from the AWS VPC to the on-premises networks. In this scenario, the inbound endpoint should be used.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because, without an inbound endpoint, Route 53 Resolver cannot automatically forward incoming DNS queries from on-premises networks. Other than that, there is no such method to include all the Route 53 domain names in the Route 53 Resolver.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124076,
            "question_id": 98348,
            "answers": [
              {
                "question_id": "98348",
                "choice": "<p>Configure resolvers on the on-premises network to forward DNS queries to the domain name or the IP address of the Route 53 Resolver.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98348",
                "choice": "<p>Create a Route 53 Resolver inbound endpoint in the VPC and configure resolvers on the on-premises network to forward DNS queries to the inbound endpoint.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98348",
                "choice": "<p>Create a Route 53 Resolver outbound endpoint in the VPC and create one or more rules to specify the domain names of the DNS queries that you want resolvers on the on-premises network to forward to Route 53.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98348",
                "choice": "<p>Include all the Route 53 domain names in the Route 53 Resolver so that the Resolver can automatically resolve domain names and answer DNS queries from the on-premises network.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98349,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are working in a large company as an AWS Solutions Architect. Your company uses VPN connections to connect an AWS VPC with the on-premises networks. There is a DNS resolver in the on-premises network to manage several domain names. Now, you also want to resolve these domain names for the AWS resources in the VPC (i.e., EC2 instances). Which of the following options should be used to achieve this requirement? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answers: C and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the question does not mention the usage of AWS Route 53 private hosted zone, and users cannot add the on-premises DNS resolver as an NS record either.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because, in AWS Route 53 Resolver, users cannot create any A records for domain names. Instead, endpoints and rules should be configured in order to forward DNS queries to other networks.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because an outbound endpoint is required to forward DNS queries from AWS VPC to the on-premises network.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the route table is not the correct place to specify how to forward DNS queries. Route 53 Resolver should be used to resolve DNS queries between VPCs and other networks.</li>\r\n\t<li><strong>Option​ ​E ​is​ CORRECT</strong> because defining rules works with outbound endpoints to determine how to forward DNS queries for certain domain names to the on-premises DNS resolver.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries-managing.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries-managing.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-rules-managing.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-rules-managing.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124077,
            "question_id": 98349,
            "answers": [
              {
                "question_id": "98349",
                "choice": "<p>Add the on-premises DNS resolver as an NS record in a privately hosted zone of AWS Route 53.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98349",
                "choice": "<p>For each domain name, create an A record in the AWS Route 53 Resolver with the on-premises DNS resolver IP as its value.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98349",
                "choice": "<p>Create an outbound endpoint in the AWS Route 53 Resolver for the AWS VP.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98349",
                "choice": "<p>In the default route table of AWS VPC, create a route to forward all DNS queries to the on-premises DNS resolver&rsquo;s domain name.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98349",
                "choice": "<p>In AWS Route 53 Resolver, define rules to specify which DNS queries are forwarded to the DNS resolver on the on-premises network.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98350,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are working in a financial company as an AWS solutions architect. The company plans to migrate its various databases from on-premises data centers to the AWS platform. The on-premises databases are configured differently to serve a large number of applications and services. In which of the following scenarios, would you suggest using Amazon EC2 instead of Amazon RDS to run the database?</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answers: A and C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because, with Amazon RDS, users cannot fully control the database. Instead, Amazon RDS manages the database so that users only need to focus on the business and applications. In this scenario, as full control of the database is required, Amazon EC2 should be suggested.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the database hosted in EC2 cannot automatically patch or upgrade. In this scenario, Amazon RDS service should be suggested.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because Amazon RDS for Oracle does not support all Oracle versions. For the legacy versions that RDS does not support, EC2 should be considered.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Amazon RDS provides various metrics in Amazon CloudWatch, and users do not need to configure them on their own. Amazon RDS service should be suggested in this scenario.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong> because Amazon RDS is a highly available service and provides synchronous Multi-AZ replication. Users can easily enable the feature through Amazon RDS. In this scenario, Amazon RDS should be suggested.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/oracle-database-aws-best-practices/choosing-between-amazon-rds-amazon-ec2-or-vmware-cloud-on-aws-for-your-oracle-database.html\" target=\"_blank\">https://docs.aws.amazon.com/whitepapers/latest/oracle-database-aws-best-practices/choosing-between-amazon-rds-amazon-ec2-or-vmware-cloud-on-aws-for-your-oracle-database.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124078,
            "question_id": 98350,
            "answers": [
              {
                "question_id": "98350",
                "choice": "<p>Full control of a database is required including provisioning SYSTEM user access.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98350",
                "choice": "<p>The database can be automatically patched to remediate security vulnerabilities in time and upgraded to a new database version.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98350",
                "choice": "<p>For a legacy application, an old Oracle database version is required (i.e. Oracle Database 11g).</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98350",
                "choice": "<p>The database needs to provide out-of-box metrics including disk usage, read/write IOPs, and network throughput.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98350",
                "choice": "<p>The Oracle database (version 19c) should be highly available and can be easily synchronously replicated in multiple availability zones.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98351,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS consultant working in a large organization. The organization owns hundreds of servers in a local data center and has a plan to migrate them to the AWS platform. The workloads include SQL Server, Java web applications, custom software, etc. They also use different types of operating systems, such as Windows, CentOS, Debian, and Ubuntu servers. You need to design an automated lift-and-shift solution that can simplify and expedite the migration. Which of the following options is the most appropriate?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer:​ C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because AWS Application Migration Service is recommended as the primary migration service for lift-and-shift migrations. Besides, AWS Server Migration Service does not dump servers to files in S3.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because Application Discovery Service is used to plan the migration to AWS by collecting on-premises data. The service itself does not lift and shift the applications to AWS. Besides, AWS DataSync is used for transferring the storage data between on-premises and AWS. AWS DataSync cannot work with Application Discovery Service to migrate applications into on-premises servers.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because AWS Application Migration Service is the correct service to be used as a highly automated lift-and-shift migration solution. With the service, users can manage the source servers, automatically replicate entire servers, perform tests, and execute cutover when ready.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because AWS Transfer Family is a service for migrating SFTP, AS2, FTPS, and FTP-based workflows to AWS. It does not replicate software applications or servers to AWS.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/application-migration-service/when-to-choose-aws-mgn/\" target=\"_blank\">https://aws.amazon.com/application-migration-service/when-to-choose-aws-mgn/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html\" target=\"_blank\">https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124079,
            "question_id": 98351,
            "answers": [
              {
                "question_id": "98351",
                "choice": "<p>Use the AWS Server Migration Service to dump the servers to files in Amazon S3 and then launch new EC2 instances or Lambda functions with the files.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98351",
                "choice": "<p>Use the AWS Application Discovery Service to lift and shift the applications to AWS by installing migration agents and use AWS DataSync to automate the incremental snapshot-based replications.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98351",
                "choice": "<p>Add the source servers to AWS Application Migration Service by installing the AWS Replication Agent and then use the Application Migration Service to automatically convert and launch the servers on AWS.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98351",
                "choice": "<p>Use the AWS Transfer Family service to configure migration agents and replication staging servers that automate the migration of the on-premises servers to AWS EC2 instances.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98352,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are working as an AWS Solutions Architect. The company has several new projects in the AWS Cloud and the development team needs your opinion on which AWS database service should be used. Which of the following scenarios would you suggest Aurora serverless as the database service? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answers: A and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because Aurora Serverless is an on-demand, autoscaling configuration for Amazon Aurora. With Aurora Serverless, users only need to identify the capacity range, and Aurora will automate the processes of monitoring the workload and adjusting the capacity:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sas5.png\" style=\"height:387px; width:750px\" /></p>\r\n\r\n<p>Aurora Serverless meets the requirements of the scenario.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because, in this scenario, low latency and in-memory capabilities are required for the data store. Amazon ElastiCache should be suggested.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because a NoSQL database should be considered to store key-value pairs. Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database and should be used here.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the database in the option has a stable and predicted workload. Aurora is more suitable instead of Aurora Serverless. Other than that, with Aurora Serverless, users cannot choose the Memory Optimised DB instance class.</li>\r\n\t<li><strong>Option​ ​E ​is​ CORRECT</strong> because Amazon Aurora supports MySQL and PostgreSQL databases. With Aurora Serverless, you only pay for the database resources that you consume. Aurora Serverless is appropriate for this scenario.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/products/databases/\" target=\"_blank\">https://aws.amazon.com/products/databases/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124080,
            "question_id": 98352,
            "answers": [
              {
                "question_id": "98352",
                "choice": "<p>A Relational Database for a Java application. The peaks of the database activities are hard to predict. You want to automatically scale up and down the database without the need to manage the database capacity manually.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98352",
                "choice": "<p>A high-performance in-memory data store for gaming leaderboards with microsecond latencies and caching capabilities.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98352",
                "choice": "<p>A fast, flexible, and high-performance database to store key-value pairs for an eCommerce system.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98352",
                "choice": "<p>A MySQL compatible database that stores application usage data with stable and predicted workload. The DB instance class should be memory optimized.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98352",
                "choice": "<p>A MySQL database for a proof-of-concept project that is idle most of the time and you want to pay on a per-second basis for the database capacity.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98353,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team has two AWS accounts (dev: 111111111111 and prod: 222222222222). You are configuring CI/CD pipelines in both AWS accounts for a new application. In an S3 bucket of the dev account, there are software packages encrypted by an AWS KMS customer-managed key (owned by the dev account). In order to transfer these files from the dev account to the production account in the pipelines, you need to set up a proper IAM role in the production account to use the KMS key in the dev account. Which of the following configurations is required to achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the actions in the key policy should not be &ldquo;kms:*&rdquo; for this question, as it over-provisions the permissions. The correct way is only to allow the permissions that are needed (i.e., kms:Encrypt, kms:Decrypt).</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because you cannot add the KMS key ARN as the trusted entity in the IAM role of the prod account. The trusted entity should be the AWS dev account &quot;arn:aws:iam::111111111111:root&quot; so that IAM entities in the AWS dev account can assume it.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because you cannot add a key policy in the IAM role. The key policy is for the KMS key. Other than that, &ldquo;kms:*&rdquo; is inappropriate as it allows more actions than needed.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because to use the dev KMS key from the prod account, the key policy needs to be configured to allow the prod account to use the key as a key user. The key policy in the option is appropriate as it gives suitable permissions to the production account.</li>\r\n</ul>\r\n\r\n<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;Allow an external account to use this KMS key&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AWS&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:iam::222222222222:root&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:ReEncrypt*&quot;,\r\n&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&quot;kms:GenerateDataKey*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:DescribeKey&quot;\r\n&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n}</pre>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124081,
            "question_id": 98353,
            "answers": [
              {
                "question_id": "98353",
                "choice": "<p>In the AWS KMS key of the dev account, set up a key policy to allow the actions of &ldquo;kms:*&rdquo; for the prod account ARN &ldquo;arn:aws:iam::222222222222:root&rdquo;</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98353",
                "choice": "<p>In the IAM role of the prod account, add the KMS key ARN as a trusted entity so that the KMS key can assume the prod role and allow the prod role to use the key</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98353",
                "choice": "<p>In the IAM role of the prod account, add a key policy to allow &ldquo;kms:*&rdquo; with the KMS key ARN of the dev account as the &ldquo;Principal&rdquo;</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98353",
                "choice": "<p>In the AWS KMS key of the dev account, set up a key policy to allow the prod account to use the key as a key user as follows:</p>\r\n\r\n<pre>\r\n{\r\n    &quot;Sid&quot;: &quot;Allow th external account to use this KMS key&quot;,\r\n    &quot;Effect&quot;: &quot;Allow&quot;,\r\n    &quot;Principal&quot;: {\r\n        &quot;AWS&quot;: [\r\n            &quot;arn:aws:iam::222222222222:root&quot;\r\n        ]\r\n    },\r\n    &quot;Action&quot;: [\r\n        &quot;kms:Encrypt&quot;,\r\n        &quot;kms:Decrypt&quot;,\r\n        &quot;kms:ReEncrypt*&quot;,\r\n        &quot;kms:GenerateDataKey*&quot;,\r\n        &quot;kms:DescribeKey&quot;\r\n    ],\r\n    &quot;Resource&quot;: &quot;*&quot;\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98354,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team is developing a microservice with Amazon API Gateway and Lambda function. During testing, it has been found that end users hit invalid endpoints such as &ldquo;<em>https://xxxxxxxxxx.execute-api.ap-southeast-1.amazonaws.com/test/invalid</em>&rdquo;. When that happens, users receive an HTTP response with the status code 403 and a message { &quot;message&quot;: &quot;Missing Authentication Token&quot; }. You want to modify the status code of the HTTP response from &#39;403 Forbidden&#39; to be &#39;404 Not Found&#39;. What is the most suitable way to achieve this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because users cannot choose the &lsquo;403 Forbidden&rsquo; response in the Gateway Responses pane. Instead, users can select a Gateway Response type (i.e., Missing Authentication Token) and then customize its status code and headers.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because this is the correct way to modify the status code of a Gateway Response. Take the following screenshot as an example:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sas7.png\" style=\"height:161px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Options​ ​C and D are​ ​incorrect</strong> because users do not need to configure a method for invalid endpoints. When API Gateway fails to process a request, it returns to the client an error response without forwarding the request to the backend. The correct way is to customize the response in the Gateway Responses pane.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-gatewayResponse-definition.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-gatewayResponse-definition.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124082,
            "question_id": 98354,
            "answers": [
              {
                "question_id": "98354",
                "choice": "<p>In the AWS console, go to API Gateway and select the API. In the Gateway Responses pane of the API, choose the &lsquo;403 Forbidden&rsquo; response and modify it to be &lsquo;404 Not Found&rsquo;. Clear the browser cache and retest it.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98354",
                "choice": "<p>In the AWS console, go to API Gateway and select the API. In the Gateway Responses pane of the API, choose &lsquo;Missing Authentication Token&rsquo; and modify the status code from the default (403) to 404. Deploy the API to a new or existing stage.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98354",
                "choice": "<p>In the AWS console, go to API Gateway and select the API. In the Resources pane of the API, create a method for the invalid endpoint. In &lsquo;Method Response&rsquo;, customize the HTTP response to be &#39;404 Not Found&#39;. Redeploy the API to a new stage.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98354",
                "choice": "<p>In the AWS console, go to API Gateway and select the API. In the Resources pane of the API, create a method for all the invalid endpoints. In &lsquo;Integration Response&rsquo;, modify the &#39;Method response status&#39; to be &#39;404 Not Found&#39;.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98355,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are working with the platform team of a financial company. In order to better govern and standardize the AWS resources used in the company, your team is using AWS Service Catalog to maintain approved AWS resources used by different teams. You have configured a Service Catalog Product that includes a Linux EC2 instance. The CloudFormation template of the Service Catalog Product allows the user to select from 5 instance types. However, you want to limit the development team in their AWS accounts to only use the instance type t2.micro when they launch the Product in the Service Catalog Portfolio. How do you achieve this requirement most suitably?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer:&nbsp;A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because adding a Template Constraint for the Product in the Portfolio is the correct way to apply this limitation. This Template Constraint can prevent the development team from selecting other instance types. The following is an example of the Template Constraint:</li>\r\n</ul>\r\n\r\n<pre>\r\n{\r\n&nbsp; &quot;Rules&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Rule1&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Assertions&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Assert&quot; : {&quot;Fn::Contains&quot;: [[&quot;t2.micro&quot;], {&quot;Ref&quot;: &quot;InstanceType&quot;}]},\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AssertDescription&quot;: &quot;Instance type should be t2.micro&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; }\r\n}</pre>\r\n\r\n<p>With the above Template Constraint, when users launch a new product, the instance type can only be &ldquo;t2.micro&rdquo;.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because this is not how service action in Service Catalog works. Service actions in Service Catalog use AWS Systems Manager documents to define the actions on the EC2 instances. You cannot use the service actions to restrict the CloudFormation parameters such as instance types.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because there is no need to create a new Product in Service Catalog with a new CloudFormation template. The actual need here in the question is to add another layer of control over Products launched by the development team. Adding a Template Constraint is the most suitable solution.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because there is no need to modify the CloudFormation template. The same template can be used by multiple teams. Template Constraint is the most suitable and easiest way to apply this limitation.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-constraint.html\" target=\"_blank\">https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-constraint.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124083,
            "question_id": 98355,
            "answers": [
              {
                "question_id": "98355",
                "choice": "<p>Select the Service Catalog portfolio. Add a Template Constraint for the Product to limit the &ldquo;InstanceType&rdquo; to t2.micro.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98355",
                "choice": "<p>In Service Catalog, create a new service action, choose the &ldquo;AWS-InstanceType&rdquo; SSM document, and set the &ldquo;InstanceType&rdquo; parameter to t2.micro.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98355",
                "choice": "<p>In Service Catalog, create a new Product, upload a new CloudFormation template, and set the &ldquo;InstanceType&rdquo; to t2.micro. Include the new Product in the Portfolio for the development team.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98355",
                "choice": "<p>There is no way to apply this limitation in the Service Catalog Product. You have to modify the CloudFormation template of the Service Catalog Product to only allow the instance type to t2.micro.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98356,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company runs on-premises virtual machines in the VMware vCenter and plans to migrate them to AWS via the AWS Application Migration Service. To prepare for the migration, you want to use the Application Discovery Service Agentless Collector to collect information about the on-premises environment. Which of the following are the prerequisites of using the Agentless Collector so that the VMware VMs can be discovered? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B and C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because this option is for the installation of the Application Discovery Agent instead of the prerequisites of using Agentless Collector.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because updating the on-premises firewalls to allow outbound access to the AWS domains is required, so that the Agentless Collector can establish the HTTPS connections to the AWS domains properly.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because the Agentless Collector needs the IAM user credentials to authenticate with AWS to forward data to the Application Discovery Service.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because an IAM role is not required, and you cannot attach an IAM role to the Agentless Collector. Other than that, &ldquo;AWSApplicationDiscoveryAgentAccess&rdquo; is incorrect as it is for the Discovery Agent, not for Agentless Collector.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect</strong> because you cannot configure a security group for the Application Discovery Service. This option is not possible.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-collector-transition.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-collector-transition.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/agentless-collector-gs.html\" target=\"_blank\">https://docs.aws.amazon.com/application-discovery/latest/userguide/agentless-collector-gs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124084,
            "question_id": 98356,
            "answers": [
              {
                "question_id": "98356",
                "choice": "<p>Login to the VMs and download the agent installation script (i.e. curl -o ./aws-discovery-agent.tar.gz https://s3-us-west-2.amazonaws.com/aws-discovery-agent.us-west-2/linux/latest/aws-discovery-agent.tar.gz).</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98356",
                "choice": "<p>Update the on-premises firewall settings to allow outbound access to the AWS domains that Agentless Collector requires (i.e. arsenal-discovery.us-west-2.amazonaws.com).</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98356",
                "choice": "<p>Create an IAM user with the predefined IAM policy &ldquo;AWSApplicationDiscoveryAgentlessCollectorAccess&rdquo; for the Agentless Collector to authenticate with AWS when forwarding the data.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98356",
                "choice": "<p>Create an IAM role with the predefined IAM policy &ldquo;AWSApplicationDiscoveryAgentAccess&rdquo; and attach the role to the Agentless Collector.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98356",
                "choice": "<p>Make sure the security group of the Application Discovery Service allows the IP range of the on-premises network on port 443.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98357,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS consultant working for a government firm. Its IT infrastructure has been set up in both the on-premises and AWS environments. There is a MySQL database deployed in AWS RDS for an important application. Your manager asks you to replicate the RDS MySQL database to an on-premises instance so that the instance can be used as a standby just in case the whole AWS environment has an outage. How could you achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer:​ C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option ​A is ​incorrect</strong> because in AWS RDS, a read replica is also an AWS RDS instance, and users cannot directly add an on-premises instance as a replica through the RDS console.</li>\r\n\t<li><strong>Option B is ​incorrect</strong> because this option only dumps the database in the on-premises instance. It does not include the steps to add the on-premises instance as a replication target for the RDS instance.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because this option firstly creates a read replica and uses the read replica to dump the database and record the binary log information. Then with the MySQL binary log information (i.e., master_log_file and master_log_pos), users can configure the replication from the RDS instance to the on-premises server. The following is an example command in the on-premises server to establish the replication:</li>\r\n</ul>\r\n\r\n<p>mysql&gt; change master to master_host=&#39;rds-endpoint&#39;,master_user=&#39;xxxxxxxx&#39;, master_password=&#39;xxxxxxxx&#39;, master_log_file=&#39;mysql-bin.000001&#39;, master_log_pos= xxx;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because AWS Database Migration Service (DMS) is more appropriate for migrating databases between on-premises and AWS. For example, AWS DMS can perform a one-time migration of an on-premises MySQL database to AWS RDS MySQL. However, it is not a suitable service to configure an on-premises standby instance.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/replicate-amazon-rds-mysql-on-premises/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/replicate-amazon-rds-mysql-on-premises/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124085,
            "question_id": 98357,
            "answers": [
              {
                "question_id": "98357",
                "choice": "<p>In the RDS console, create a read replica whose target is the on-premises instance. Configure the security group of the RDS MySQL database to allow the outbound traffic to the on-premises instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98357",
                "choice": "<p>Connect to the RDS database via a Linux server and use the &ldquo;mysqldump&rdquo; utility to dump the RDS database as a SQL file (i.e. mysqldump -h rds_instance_endpoint.rds.amazonaws.com -u user -ppassword --triggers --routines &gt; dbdump.sql). Import the SQL file in the on-premises instance. In the AWS RDS console, add the on-premises instance as a replica.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98357",
                "choice": "<p>In the AWS RDS console, select the database, and create a read replica. Connect to the replica and record the binary log information through the mysql &ldquo;show slave status&rdquo; command. Switch the replication target from the read replica to the on-premises server through the mysql &ldquo;change master&rdquo; command with the binary log information that was recorded previously.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98357",
                "choice": "<p>Create a replication server in the AWS Database Migration Service. Add the RDS MySQL database as the source and the on-premises instance as the target. Create a migration task to begin the replication.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98165,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An international travel-booking service company that sees 100 million unique users monthly for their web app, has built and deployed its applications in Amazon EC2 behind Elastic Load Balancer (ELB). To manage the surge in traffic, EC2 instances are configured with Auto Scaling Groups.<br />\r\nTo improve the user experience and resolve latency, downtime related issues for global customers, the company is looking for a cross-region traffic management solution to route user traffic to the optimal endpoint based on performance, user&rsquo;s location, and instant reaction to the changes in application health.</p>\r\n\r\n<p>You have been hired as a Solution Architect to implement this solution. Which is the best option in your opinion?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because Amazon CloudFront is a Content Delivery Network that caches the content to the edge locations nearest to users. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). As in the problem statement, finding an optimal pathway to the nearest regional endpoint is not done with Amazon CloudFront.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because AWS Global Accelerator uses Edge Locations to find an optimal pathway to the nearest regional endpoint and does the multi-region failover very effectively and helps the company improve the availability and performance of the applications that you offer to your global users. It provides static IP addresses that provide a fixed entry point to your applications and eliminate the complexity of managing specific IP addresses for different AWS Regions and Availability Zones. AWS Global Accelerator always routes user traffic to the optimal endpoint based on performance, reacting instantly to changes in application health, your user&rsquo;s location, and policies that you configure.</li>\r\n\t<li><strong>Option C is incorrect</strong> because AWS Network LoadBalancer can help improve performance within a region across multi AZs. But here, the requirement is to cross-region failover.</li>\r\n\t<li><strong>Option D is incorrect.</strong> There are no complaints from the company about the applications. In fact, at present, it handles 100 million users a month. The requirement is to improve the performance and solve latency. This should be checked and done at the network level first.&nbsp;</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/global-accelerator/\" target=\"_blank\">https://aws.amazon.com/global-accelerator/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124101,
            "question_id": 98165,
            "answers": [
              {
                "question_id": "98165",
                "choice": "<p>Place Amazon CloudFront in front of the ELB to enable edge location cache for low latency and better user experience.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98165",
                "choice": "<p>Use AWS Global Accelerator in front of ELB to improve the availability, performance, and user experience.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98165",
                "choice": "<p>Use AWS NetworkLoadBalancer to handle a high volume of traffic and achieve low latency. This will also improve user experience.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98165",
                "choice": "<p>Modify the application from its existing platform to AWS Serverless (API Gateway, Lambda, DynamoDB, etc.) to handle the dynamic load, solve latency issues and improve user experience.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98166,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An international media company uses an on-premises data center, which comprises over 300 servers to store and process its large amount of data for its clients spread across 100 countries. To achieve Disaster Recovery (DR), the company relies on a second nearby data center and replicates its full stack of physical tapes. The DR process is manual, requires a significant number of resources, and staff has to travel to the secondary data center to retrieve the correct tapes if a DR event occurs.</p>\r\n\r\n<p>The company wants to improve and automate its business unit&rsquo;s DR to replicate and recover its workloads to achieve faster recovery and minimize data loss during a service interruption.</p>\r\n\r\n<p>The company hired you as a Solution Architect to guide them in this journey. What would you recommend here?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because AWS Elastic Disaster Recovery would help build a robust cloud disaster recovery solution that would work seamlessly on AWS. Using this strategy, the company can continuously replicate its data in a low-cost staging area on AWS, which reduces its compute and storage footprint to a minimum and reduces the need to provide duplicate resources.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-2.png\" style=\"height:305px; width:750px\" /></p>\r\n\r\n<p>Image source:<a href=\"https://aws.amazon.com/disaster-recovery/?nc=sn&amp;loc=0\" target=\"_blank\">https://aws.amazon.com/disaster-recovery/?nc=sn&amp;loc=0</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Server Migration Service (SMS) is mainly used for the lift-shift migration model. The requirement here is to have a DR scenario in the Cloud.</li>\r\n\t<li><strong>Option C is incorrect</strong> because AWS DataSync is an online data transfer service that simplifies, automates, and accelerates the process of copying large amounts of data to and from AWS storage services over the Internet or AWS Direct Connect. AWS DataSync is ideal for online data transfers, not a solution for DR.</li>\r\n\t<li><strong>Option D is incorrect</strong> because AWS Storage Gateway seamlessly connects on-premises applications to cloud storage, caching data locally for low-latency access. It&rsquo;s a data backup and restoration service. AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage, not suitable as a DR service.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/disaster-recovery/?nc=sn&amp;loc=0\" target=\"_blank\">https://aws.amazon.com/disaster-recovery/?nc=sn&amp;loc=0</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124102,
            "question_id": 98166,
            "answers": [
              {
                "question_id": "98166",
                "choice": "<p>Set up AWS Elastic Disaster Recovery on your source servers to initiate secure data replication. Your data is replicated to a staging area subnet in your AWS account, in the AWS Region you select.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98166",
                "choice": "<p>Use AWS Server Migration Service and replicate your on-premises services to AWS. Run your on-premises AWS services in Active/Passive mode so that during DR, AWS can be up and running to avoid any interruption.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98166",
                "choice": "<p>Configure AWS DataSync to automate and accelerate moving data between on-premises and AWS storage services. This will back up your data to AWS Cloud and enable a smooth and quick DR.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98166",
                "choice": "<p>Replicate your on-premise data using AWS Storage Gateway and achieve hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98167,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A scientific research organization is looking for a data backup solution for their on-premises data. Their hybrid cloud storage solution should include</p>\r\n\r\n<ul>\r\n\t<li>Seamless connection between on-premises environments and AWS</li>\r\n\t<li>Quick and easy to deploy</li>\r\n\t<li>Moving backups to the cloud, using on-premises file shares backed by durable and cost-effective cloud storage</li>\r\n\t<li>Providing low-latency access to data in AWS for on-premises applications</li>\r\n\t<li>End-to-end data protection</li>\r\n</ul>\r\n\r\n<p>Which of these will be a cost-conscious architecture that satisfies all of the above?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because Direct Connect is not fast and easy to deploy. Plus, data transfer is not encrypted, so the last condition of End-to-End data protection does not satisfy.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because AWS Storage Gateway satisfies all the above conditions - To support these use cases, the service provides four different types of gateways &ndash; Tape Gateway, Amazon S3 File Gateway, Amazon FSx File Gateway, and Volume Gateway &ndash; that seamlessly connect on-premises applications to cloud storage, caching data locally for low-latency access. AWS Storage gateway is easy to integrate with Amazon S3 for durable and cost-effective backup storage.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-3.png\" style=\"height:449px; width:750px\" /></p>\r\n\r\n<p>Image source: <a href=\"https://aws.amazon.com/storagegateway/\" target=\"_blank\">https://aws.amazon.com/storagegateway/</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is incorrect</strong> because AWS DataSync is an online data transfer service that simplifies, automates, and accelerates the process of copying large amounts of data to and from AWS storage services over the Internet or AWS Direct Connect. It is mainly designed for migrating On-premises data from Network Attached Storage (NAS) system or Network File System (NFS) to Amazon S3 or Amazon EFS. AWS DataSync is ideal for online data transfers.</li>\r\n</ul>\r\n\r\n<p>Hopefully, this will make it clearer from a usage point of view - You can use DataSync to migrate active data to AWS, transfer data to the cloud for analysis and processing, archive data to free up on-premises storage capacity, or replicate data to AWS for business continuity.</p>\r\n\r\n<p>AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect</strong> because AWS Snowball is mainly used for Data Import/Export to/from AWS. This does not form hybrid cloud storage as per the above requirement.&nbsp;</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/storagegateway/features/?nc=sn&amp;loc=2&amp;dn=1\" target=\"_blank\">https://aws.amazon.com/storagegateway/features/?nc=sn&amp;loc=2&amp;dn=1</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124103,
            "question_id": 98167,
            "answers": [
              {
                "question_id": "98167",
                "choice": "<p>Establish Direct Connect connection between on-premises and AWS and achieve a dedicated line for secure and fast data transfer from on-premises to AWS. All your on-premises applications can access the data in AWS using the same Direct Connect connection.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98167",
                "choice": "<p>Use AWS Storage Gateway to achieve hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98167",
                "choice": "<p>Use AWS DataSync to achieve online data transfer service that simplifies, automates, and accelerates data migration between storage systems and services.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98167",
                "choice": "<p>Implement AWS Snowball in your local data center and copy all the data to it. Then have Amazon replicate the data to AWS Cloud.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98168,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>As a Solution Architect of a startup company, to reduce costs and improve performance, you want to identify workload patterns based on the usage and cost for diverse workloads in AWS compute resources like Amazon EC2 instance types, Amazon Elastic Block Store (EBS) volumes, Auto Scaling Group, AWS Lambda functions, etc. and avoid overprovisioning and underprovisioning of those resources. You are expecting some kind of dashboard view in AWS that shows the savings and performance improvement opportunities at the account level, the estimated monthly savings and the possible savings for over-provisioned resources, and the bottleneck risk with the current configuration for under-provisioned resources. Which of the below services in AWS can serve your purpose?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because AWS Compute Optimizer identifies optimal AWS Compute resources for your workloads. Using AWS Compute Optimizer, you can realize resource efficiency metrics alongside its recommendations to help you assess how efficiently you are using AWS resources. These efficiency metrics are available for Amazon EC2, AWS Lambda, and Amazon EBS at the resource and AWS account levels.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-4.1.png\" style=\"height:186px; width:750px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-4.2.png\" style=\"height:249px; width:750px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-4.3.png\" style=\"height:248px; width:750px\" /></p>\r\n\r\n<p>Image source: <a href=\"https://aws.amazon.com/blogs/aws/new-for-aws-compute-optimizer-resource-efficiency-metrics-to-estimate-savings-opportunities-and-performance-risks/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-for-aws-compute-optimizer-resource-efficiency-metrics-to-estimate-savings-opportunities-and-performance-risks/</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Service Catalog allows organizations to create and manage catalogs of IT services (applications, resources, and metadata) that are approved for use on AWS by a centrally managed&nbsp;IT service team, or governance or compliance team. This helps you achieve consistent governance and meet your compliance requirements while enabling users to deploy only the approved IT services they need quickly. It does not fit the above requirement.</li>\r\n\t<li><strong>Option C is incorrect</strong> because AWS Budgets can help you track and take action on AWS cost and usage which means you can define your budget in terms of cost (how much you want to spend on a service) or usage (how much you want to use a service) and track them not to exceed the threshold. But it doesn&rsquo;t give you any recommendations or suggestions on overprovisioning or underprovisioning of AWS resource/service.&nbsp;</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-4.4.png\" style=\"height:221px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect</strong> because you do not need to create the Dashboards. It is already available in the AWS Compute Optimizer service.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-for-aws-compute-optimizer-resource-efficiency-metrics-to-estimate-savings-opportunities-and-performance-risks/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-for-aws-compute-optimizer-resource-efficiency-metrics-to-estimate-savings-opportunities-and-performance-risks/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124104,
            "question_id": 98168,
            "answers": [
              {
                "question_id": "98168",
                "choice": "<p>Use AWS Compute Optimizer to avoid overprovisioning or underprovisioning the above-mentioned AWS resources based on the utilization and evaluate estimated savings and performance improvement opportunities at the account level.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98168",
                "choice": "<p>Configure AWS Service Catalog with the AWS resources that you want to track based on their utilization and use the recommendation to optimize.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98168",
                "choice": "<p>Use AWS Budgets to track AWS cost and usage, receive recommendations on resources based on the utilization and follow the recommendations to optimize your services and resources.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98168",
                "choice": "<p>There is no Dashboard available to capture these metrics. You need to create one in CloudWatch Dashboards manually. Based on the CloudWatch metrics, you optimize your services and resources.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98169,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A Big Data company stores all its raw data in Amazon S3. Over a few days in every quarter of the calendar year, the petabyte-scale of data needs to be processed to the analytical platform. This processed data gets analyzed during Company&rsquo;s Quarterly Business Review (QBR) meeting and again in the annual review meeting by the year-end. As part of this solution, they plan to run their S3 data through 10 nodes of the Amazon EMR cluster hosted on c5.xlarge EC2 instances and finally load the data to Amazon Redshift. You are a Solution Architect at the company, and the CTO tasked you to optimize the cost of the overall solution. Which of these will be your pick?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because S3 Standard IA charges per GB retrieval. So, retrieving petabytes of data will cost more than the S3 Standard. S3 Standard-IA is ideal for long-term storage, backups, and as a data store for disaster recovery files. Plus, EC2 On Demand for EMR will cost way more than Spot instances. So even though the &lsquo;Reserved instance for Redshift&rsquo; option is correct, the option for raw data in S3 and EC2 for EMR is wrong in terms of cost optimization. Hence this option is incorrect.</li>\r\n\t<li><strong>Option B is incorrect</strong> because S3 Intelligent Tier is advantageous only if your access patterns are incredibly seldom. You can save more than&nbsp; 90% on storage costs by leveraging the Deep Archive Access Tier. If all of your files are being regularly accessed, you will ultimately not yield any savings through S3 Intelligent Tiering. Plus, EC2 On Demand for EMR will cost way more than Spot instances. So even though the &lsquo;Reserved instance for Redshift&rsquo; option is correct, the option for raw data in S3 and EC2 for EMR is wrong in terms of cost optimization. Hence this option is incorrect.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because S3 Standard, Spot Instance for EMR, and Reserved Instance for Redshift are the best cost-optimized solutions here. S3 is suited for getting access frequently to store data and retrieve it for a few days quarterly. EC2 Spot instance type is best suited for the EMR cluster, as there the Company will have more than a 90% discount compared to On-Demand. And Redshift needs to be available throughout the year for all QBR and Annual Results, so the Reserved type of instance is best here.&nbsp;</li>\r\n\t<li><strong>Option D is incorrect</strong> because S3 Standard IA charges per GB retrieval, so retrieving petabytes of data will cost more than the S3 Standard. Also, EC2 Reserved for EMR is over-commitment and cost as well, as these are needed only for a few days each quarter. Spot instances are best suitable here. So even though the &lsquo;Reserved instance for Redshift&rsquo; option is correct, the option for raw data in S3 and EC2 for EMR is wrong in terms of cost optimization. Hence this option is incorrect.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/emr/pricing/\" target=\"_blank\">https://aws.amazon.com/emr/pricing/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/ec2/spot/instance-advisor/\" target=\"_blank\">https://aws.amazon.com/ec2/spot/instance-advisor/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124105,
            "question_id": 98169,
            "answers": [
              {
                "question_id": "98169",
                "choice": "<p>Store the raw data in S3 Standard Infrequent Access, host the EMR cluster on EC2 On-Demand Instances and Reserved instance for Redshift.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98169",
                "choice": "<p>Use S3 Intelligent Tier to store the raw data, host the EMR cluster on EC2 On-Demand Instances and Reserved instances for Redshift.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98169",
                "choice": "<p>Store the raw data in S3 Standard, host the EMR cluster on EC2 Spot Instances and Reserved instances for Redshift.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98169",
                "choice": "<p>Store the raw data in&nbsp; S3 Standard Infrequent Access, host the EMR cluster on EC2 Reserved Instances for EMR and Reserved instances for Redshift.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98170,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A financial company is embarking on a journey to migrate its on-premises applications, database, and servers to AWS. They are looking for a single place to discover their existing servers, plan migrations, and track the status of each application migration.</p>\r\n\r\n<p>You are hired as a migration expert. The company expects you to come up with recommendations to analyze their applications and help them determine the optimal strategy and tools to migrate and modernize at scale.</p>\r\n\r\n<p>Which AWS service will help you serve the company&rsquo;s needs?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because AWS Application Discovery Agent is a software that you can install to the server hosting the application you want to migrate to the cloud. These agents capture system configuration, system performance, running processes, and details of the network connections between systems. Here the customer requirement is different; they need a strategic platform to help them plan, form strategies and track the overall migration.</li>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Server Migration Service (SMS) is mainly used for the lift-shift migration model. Again, it doesn&rsquo;t suit the customer requirement above.</li>\r\n\t<li><strong>Option C is incorrect</strong> because AWS Service Catalog lets you manage the deployment of IT services, applications, resources, and metadata centrally to achieve consistent governance of your infrastructure as code (IaC) templates. With AWS Service Catalog, you can meet your compliance requirements while ensuring your customers can quickly deploy the approved IT services they need. This is not the requirement here.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because AWS Migration Hub helps to\r\n\t<ul>\r\n\t\t<li>Discover or import your on-premises server details</li>\r\n\t\t<li>Build a migration plan</li>\r\n\t\t<li>Build migration and modernization Strategy and recommendations</li>\r\n\t\t<li>Simple and intuitive migration dashboard for tracking</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-6.png\" style=\"height:618px; width:750px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/migration-hub/features/?nc=sn&amp;loc=2#Discover_or_import_your_on-premises_server_details\" target=\"_blank\">https://aws.amazon.com/migration-hub/features/?nc=sn&amp;loc=2#Discover_or_import_your_on-premises_server_details</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124106,
            "question_id": 98170,
            "answers": [
              {
                "question_id": "98170",
                "choice": "<p>Install AWS Application Discovery Agent on the on-premises servers and capture details of the application and their configurations, performance, etc.&nbsp;Use these data to plan your migration.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98170",
                "choice": "<p>Use AWS Server Migration Service to perform all the migration-related analysis and then use the same to migrate on-premises applications, databases and servers to AWS.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98170",
                "choice": "<p>Configure AWS Service Catalog for on-premises servers, applications and database and collect all the data required to form a migration strategy</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98170",
                "choice": "<p>Use AWS Migration Hub to discover or import your on-premises server details, build a migration plan, strategy, follow recommendations, and track migration on the simple and intuitive dashboard</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98171,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are a Solution Architect in an airline company. They want your advice as they embark on their on-premises to AWS Cloud migration journey. You are guiding the customer to perform their pre-migration assessment. At the moment, you are in the application portfolio assessment phase. Due to lack of time, you must ensure that the team does not pick up something that is irrelevant to the assessment.</p>\r\n\r\n<p>Which of the below activities are Not part of the Application Portfolio Assessment phase for AWS Cloud migration? (Select Two)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: D and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Options D and E are CORRECT</strong> because they are not part of the portfolio assessment phase. The Cutover runbook is part of Migrate and Modernize phase, and Landing zone creation comes at the Mobilize stage of AWS migration.</li>\r\n</ul>\r\n\r\n<p>All other activities in A, B, C, and F are the activities in the Application Portfolio Assessment phase of AWS Cloud migration:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-7.png\" style=\"height:422px; width:750px\" /></p>\r\n\r\n<p>Source for both images:<strong> </strong><a href=\"https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-application-portfolio-assessment-migration/introduction.html\" target=\"_blank\">https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-application-portfolio-assessment-migration/introduction.html</a></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-application-portfolio-assessment-migration/introduction.html\" target=\"_blank\">https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-application-portfolio-assessment-migration/introduction.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124107,
            "question_id": 98171,
            "answers": [
              {
                "question_id": "98171",
                "choice": "<p>Portfolio discovery and initial planning</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98171",
                "choice": "<p>Prioritized applications assessment</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98171",
                "choice": "<p>Portfolio analysis and migration planning</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98171",
                "choice": "<p>Establish cutover runbooks</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98171",
                "choice": "<p>Creating Landing Zone</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98171",
                "choice": "<p>Continuous assessment and improvement</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98172,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are a Solution Architect in a Government research company. Recently in an audit by the Cloud Security Office team, most of your resources spread across multiple accounts become non-compliant. The CTO of the company has instructed you to come up with a framework to build and deploy compliance packages for all your AWS resources across multiple accounts and regions, which includes rules and remediation actions that are authored by the Cloud Security Officer. Also, the framework should have a reporting aspect and reduce the time for a resource left in a non-compliant state.</p>\r\n\r\n<p>Which of the following will help you achieve this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because using Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without learning about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring. It does not check if a resource is compliant or not.</li>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Run Command allows you to automate common administrative tasks and perform one-time configuration changes at scale. Administrators mainly use this service to install or bootstrap applications, build a deployment pipeline, capture log files when an instance is removed from an Auto Scaling group, join instances to a Windows domain, install software updates and more. It won&rsquo;t help in defining the compliance rules as per the given requirement above.</li>\r\n\t<li><strong>Option C is incorrect</strong> because AWS Systems Manager Compliance scans your fleet of managed nodes, Amazon EC2, and on-premises servers or virtual machines and patches compliance and configuration inconsistencies. You can collect and aggregate data from multiple AWS accounts and Regions, and then drill down into specific resources that aren&rsquo;t compliant. This is not suitable for the above requirement, where compliance is to be maintained across all resources, not alone in the fleet of EC2.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because AWS Config - Conformance Pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a Region or across an organization in AWS Organizations. Conformance packs are created by authoring a YAML template that contains the list of AWS Config managed or custom rules and remediation actions. You can deploy the template by using the AWS Config console or the AWS CLI. Take a look at <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/conformancepack-sample-templates.html\" target=\"_blank\">sample conformance pack templates</a> or create a conformance pack YAML file from scratch based on <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/custom-conformance-pack.html\" target=\"_blank\">Custom Conformance Pack</a>.</li>\r\n</ul>\r\n\r\n<p><strong>Reference: </strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/config/faq/\" target=\"_blank\">https://aws.amazon.com/config/faq/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124108,
            "question_id": 98172,
            "answers": [
              {
                "question_id": "98172",
                "choice": "<p>Include all the compliance rules from Cloud Security Officers to AWS Elastic Beanstalk while provisioning your resources.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98172",
                "choice": "<p>Automate all your compliance checks and patching using AWS Systems Manager Run Command.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98172",
                "choice": "<p>Suggest the Cloud Security Officers to write their rules in AWS Systems Manager Compliance service.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98172",
                "choice": "<p>Define all the rules and remediation actions in AWS Config. Then use&nbsp; AWS Config Conformance Packs to&nbsp; deploy the AWS Config rules and remediation action as a single entity.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98173,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>While prioritizing applications for migration to AWS, the focus is on establishing initial criteria to define workloads that are good candidates for pilot applications. Which one of these would define the highest priority application to migrate?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option D</strong> gets the highest score on the priority scale. In the stage of prioritizing applications, the focus is on establishing initial criteria to prioritize low-risk and low-complexity workloads. These workloads are good candidates for pilot applications. Using low-risk, low-complexity workloads in initial migrations reduces the risk and gives teams the opportunity to gain experience. Always pick an application that is ready to move to the cloud and comes under Rehost or Lift and Shift type of migration strategy, even though the business critical is minimum.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/prioritization-and-migration-strategy.html\" target=\"_blank\">https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/prioritization-and-migration-strategy.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124109,
            "question_id": 98173,
            "answers": [
              {
                "question_id": "98173",
                "choice": "<p>Business Criticality = High, Number of compute instance = 11 or more, Migration Strategy = Refractor/Re-architect</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98173",
                "choice": "<p>Business Criticality = High, Number of compute instance = 4-10, Migration Strategy = Relocate</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98173",
                "choice": "<p>Business Criticality = Medium, Number of compute instance = 1-3, Migration Strategy = Replatform</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98173",
                "choice": "<p>Business Criticality = Low, Number of compute instance = 1-3, Migration Strategy = Rehost</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98174,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A financial company is embarking on a journey to migrate its on-premises legacy applications to AWS. The company&rsquo;s purpose of migration is to boost agility and improve business continuity; hence, they are talking about the decomposition of the monoliths to microservices. You are hired as a solution architect to help the company guide in the process of migration. After a few meetings with the business and tech team, you plan to use AWS serverless services to build the microservices.</p>\r\n\r\n<p>Which migration strategy best suits this case?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because you use Relocate for your applications that already reside on VMware, containers, etc., and migrate those into the cloud for ease of management and cost savings of scale.</li>\r\n\t<li><strong>Option B is incorrect</strong> because Replatform is known as: <strong>&ldquo;Lift, tinker and shift&rdquo;</strong> or <strong>&ldquo;Lift and reshape&rdquo;. </strong>With a few modifications, many applications can be easily fit to leverage Cloud native services. For example, you can reduce the management overhead of your database by using Amazon Relational Database (RDS) Service; or you can save on licensing costs by using open-source software such as Linux or Apache Tomcat. This can lead to functional benefits and/or cost savings.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because Refactor is&nbsp;also known as Re-architect or &ldquo;Decouple and Rewrite for Cloud&rdquo;. This option entails the biggest investment - but yields the best returns. It is often driven by a strong business need for new features, performance, or the ability to scale.</li>\r\n</ul>\r\n\r\n<p>Refactoring/Rearchitecting, a tired old legacy application to take advantage of being Cloud-native is one of the best reasons to migrate to the Cloud.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect</strong> because Rehost is&nbsp;also known as: <strong>&ldquo;Lift and shift&rdquo; </strong>In this case, the application is shifted from a dedicated IT environment into a shared one either manually or through automation. It also makes future refactoring easier as the application, its data, and access are already Cloud-based.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/c02-10.png\" style=\"height:378px; width:750px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/enterprise-strategy/new-possibilities-seven-strategies-to-accelerate-your-application-migration-to-aws/\" target=\"_blank\">https://aws.amazon.com/blogs/enterprise-strategy/new-possibilities-seven-strategies-to-accelerate-your-application-migration-to-aws/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124110,
            "question_id": 98174,
            "answers": [
              {
                "question_id": "98174",
                "choice": "<p>Relocate</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98174",
                "choice": "<p>Replatform</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98174",
                "choice": "<p>Refactor</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98174",
                "choice": "<p>Rehost</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98498,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A popular video hosting company hosts a variety of videos or media files with a duration of 15 minutes to 3 hours in centralized on-premise storage. The company wants to add a comprehensive set of features to create engaging viewing experiences, including graphic overlays, content protection, multi-language audio, closed captioning support, and professional broadcast formats, and convert all these media files into the formats that users can play back on mobile devices, tablets, web browsers, and connected televisions.</p>\r\n\r\n<p>The company wants AWS as its cloud provider and plans to store the converted files in a cost-effective storage service and set up a secure, low latency, cache-based distribution system for selected users (users who have paid a fee).</p>\r\n\r\n<p>If you were a solution architect in that company, what would be your choice for this requirement? (Select THREE)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B, D and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because Kinesis Video Streams can ingest data from edge devices, smartphones, security cameras, and other data sources such as RADARs, LIDARs, drones, satellites, and depth-sensors and provides SDKs that make it easy for devices to securely stream media to AWS for playback, storage, analytics, machine learning, and other processing. This is a video stream service and does not fit the given use case.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because AWS Elemental Media Convert can convert large, high-quality digital media files into a file format that users can playback on mobile devices, tablets, web browsers, and connected televisions. This also adds a comprehensive set of features to create engaging viewing experiences, including graphic overlays, content protection, multi-language audio, closed captioning support, and professional broadcast formats, as mentioned in the requirement.</li>\r\n\t<li><strong>Option C is incorrect</strong> because this does not fit into the cost-effective storage and cache-based distribution solution. Both Amazon FSx for Lustre and high-end EC2 instances would cost quite a lot.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because Amazon S3 is the storage where the AWS Elemental Media Convert saves the converted files.</li>\r\n\t<li><strong>Option E is CORRECT</strong> because Amazon CloudFront Signed URL suits the best to serve the private content securely. This also helps to achieve a cache-based low latency content distribution system for paid users only.</li>\r\n\t<li><strong>Option F is incorrect</strong> because AWS Global Accelerator routes user traffic to the optimal endpoint based on performance, reacting instantly to changes in application health, your user&rsquo;s location, and policies that you configure. This does not achieve the requirement of subscribed or paid user distribution.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/mediaconvert/\" target=\"_blank\">https://aws.amazon.com/mediaconvert/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124086,
            "question_id": 98498,
            "answers": [
              {
                "question_id": "98498",
                "choice": "<p>Use Amazon Kinesis Video Streams to convert media files stored in Amazon S3 into media files in the formats required by consumer playback devices.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98498",
                "choice": "<p>Use AWS Elemental MediaConvert to add those comprehensive features and convert media files stored in Amazon S3 into media files in the formats required by consumer playback devices.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98498",
                "choice": "<p>Use Amazon FSx for Lustre as storage to store converted media files and mount them onto high-end EC2 instances for further processing to end-user.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98498",
                "choice": "<p>Use Amazon S3 as storage to store converted media files.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98498",
                "choice": "<p>Use Amazon CloudFront Signed URL to achieve cache-based low latency content distribution system to the paid users only.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98498",
                "choice": "<p>Use AWS Global Accelerator to achieve a secure low latency content distribution system for paid users only.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98499,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An educational tech company seeks to embed best practices in its development and operational processes as it migrates to the cloud. Recently the company saw a massive spike in its monthly AWS spending. On further analysis, they found that some developers had accidentally launched a few Amazon EC2 &amp; RDS instances in unexpected Regions.</p>\r\n\r\n<p>You have been hired to establish best practices ensuring the least privileges for developers and control access to on-premises as well as AWS Cloud resources using Active Directory.</p>\r\n\r\n<p>You got the responsibility to implement a cost-control mechanism by restricting the level of access that developers have to the AWS Management Console without impacting their productivity. The company would like to allow developers to launch EC2 and RDS instances only in the eu-west-1 region to control their AWS bills.</p>\r\n\r\n<p>How can you help the company achieve the new security mandate while minimizing the operational burden on the DevOps team?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because this increases the operational burden on the DevOps team as you set up an IAM user for each developer. This solution does not utilize the advantage of the existing Active Directory that supports SAML-based authentication.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because you can use a role to configure your SAML 2.0-compliant identity provider (IdP) and AWS to permit your federated users to access the AWS Management Console. The role grants the user permission to carry out tasks in the console.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-2.png\" style=\"height:433px; width:750px\" /></p>\r\n\r\n<p>For the above scenario, the company wants to control access to on-premises as well as AWS Cloud resources using Active Directory, so it should use SAML 2.0 federated users to access the AWS Management Console.</p>\r\n\r\n<p>You also create an IAM role with a trust policy that sets the SAML provider as the principal, which establishes a trust relationship between your organization and AWS. In this case, the role will have a PowerUserAccess managed policy attached. As the PowerUserAccess managed policy will allow the developers to create RDS instances in any Region, you also need to attach a custom policy that denies access to RDS in any AWS Region except eu-west-1. Also, note that here the PowerUserAccess provides just the right access privileges required for the given use case &ndash; so the least privilege access rule is not violated.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is incorrect</strong> because this will imply higher restrictions. As the custom policy denies the developers access to any AWS services except AWS Service Catalog, it would limit access to all other services in any Region. The ask is only for EC2 and RDS instances not to be made available in other regions except the given one. Hence this option is incorrect.</li>\r\n\t<li><strong>Option D is incorrect</strong> because this option is a distractor as AWS Config is not purposed to serve this kind of use-case. You use AWS Config to continually assess, audit, and evaluate the configurations and relationships of your AWS resources. You code all your compliance requirements as AWS Config rules and write some remediation actions, automating the assessment of your resource configurations across your organization. There is no compliance-related issue mentioned in the above use-case.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html\" target=\"_blank\">https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124087,
            "question_id": 98499,
            "answers": [
              {
                "question_id": "98499",
                "choice": "<p>Create an IAM user for each developer and add them to the developer IAM group that has PowerUserAccess managed policy attached to it. Attach a custom policy that allows developers to launch EC2 and RDS instances only in eu-west-1 region.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98499",
                "choice": "<p>Set up SAML-based authentication tied to an IAM role that has the PowerUserAccess managed policy attached to it. Attach a custom policy that denies access to EC2 and RDS in any AWS Region except eu-west-1.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98499",
                "choice": "<p>Set up SAML-based authentication tied to an IAM role that has a PowerUserAccess managed policy and a custom policy that denies all the developers access to any AWS services except AWS Config. Within AWS Config, create a product containing only EC2 and RDS service in eu-west-1 region.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98499",
                "choice": "<p>Set up SAML-based authentication tied to an IAM role that has a PowerUserAccess managed policy and a custom policy that denies all the developers access to any AWS services except AWS Service Catalog. Within AWS Service Catalog, create a product containing only EC2 and RDS service in eu-west-1 region.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98500,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company has two AWS accounts: one account for Production to manage live applications and one Development account for developers and testers to use as a sandbox that freely applies changes and test applications. In each account, you store application information in Amazon S3 buckets.</p>\r\n\r\n<p>There are two IAM user groups in the Development account: Developers and Testers. Users in both user groups have permission to work in the Development account and access resources. Now the requirement is that a Developer must update the live applications in the Production account often. In the Production account, the developers need to store these applications in an Amazon S3 bucket called productionapp.</p>\r\n\r\n<p>The company needs a security strategy that meets the following requirements:</p>\r\n\r\n<ul>\r\n\t<li>Developers can use the AWS Management Console to access the productionapp bucket in the Production account.</li>\r\n\t<li>They can also access the bucket by using API calls.</li>\r\n\t<li>Testers attempting to access the productionapp bucket should fail.</li>\r\n</ul>\r\n\r\n<p>In addition to this security requirement, the solution should also reduce Management and Operational overhead.</p>\r\n\r\n<p>Which strategy will meet these requirements?</p>\r\n\r\n<ul>\r\n</ul>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because at the end of these steps:\r\n\r\n\t<ul>\r\n\t\t<li>&nbsp;There is productionapp bucket in the Production account.</li>\r\n\t\t<li>Users in the Development account (the trusted account) are allowed to assume a specific role in the Production account.</li>\r\n\t\t<li>A role in the Production account (the trusting account) is allowed to access a specific Amazon S3 bucket.</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>Developers in Development account can switch to that UpdateProductionApp role from the AWS Management Console, the AWS CLI, and the AWS API and access the productionapp bucket.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-3.1.png\" style=\"height:318px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because you use sts:ExternalId to grant access to a third party and require an ExternalId in a Condition element in your permissions policy. This ExternalID in IAM is mainly used to prevent the confused deputy problem &ndash; (<em>&rdquo;a security issue where an entity that doesn&#39;t have permission to perform an action can coerce a more-privileged entity to perform the action&rdquo;</em>) and help you protect your account if you provide <strong>third parties</strong> (known as <em>cross-account</em>) or other AWS services (known as <em>cross-service</em>) access to resources in your account. Find details here <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html</a></li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-3.2.png\" style=\"height:243px; width:750px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-3.3.png\" style=\"height:188px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is incorrect</strong> because (even though it is possible) this causes more Operational and Management overhead to maintain a separate set of user groups and users in the Production account. This is not an effective solution.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the S3 bucket policy has no part to play here. As long as options i &amp; ii are satisfied, developers in Development account can access the bucket by just switching roles. In this case, you are already assuming the IAM role that allows access to the S3 bucket. Hence you do not need to add a separate bucket policy. S3 bucket policy is a resource-based policy, that applies when you want other accounts or users to access the bucket without assuming or switching the role, and let the bucket owner have complete control of the bucket and objects in it.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html\" target=\"_blank\">https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html</a></li>\r\n\t<li>Image source: <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124088,
            "question_id": 98500,
            "answers": [
              {
                "question_id": "98500",
                "choice": "<p>&nbsp;&nbsp;&nbsp; i) Create an IAM role UpdateProductionApp<em> </em>in the Production account. Define the Development account as a trusted entity and specify a permissions policy that allows trusted users to update the productionapp bucket.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; ii) In the Development account, modify the IAM user group policy for Developers by enabling sts:AssumeRole to grant access to the IAM role UpdateProductionApp, explicitly deny Tester&rsquo;s access to the IAM role UpdateProductionApp.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; iii) Test access by switching to the Production account and roles UpdateProductionApp</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98500",
                "choice": "<p>&nbsp;&nbsp; i) Create an IAM role UpdateProductionApp<em> </em>in the Production account. Define the Development account as a trusted entity and specify a permissions policy that allows trusted users to update the productionapp bucket.</p>\r\n\r\n<p>&nbsp;&nbsp; ii) In the Development account, modify the IAM user group policy for Developers by enabling sts:AssumeRole with a condition of sts:ExternalId to grant access to the IAM role UpdateProductionApp, explicitly deny Tester&rsquo;s access to the UpdateProductionApp role.</p>\r\n\r\n<p>&nbsp; iii) Test access by switching to the Production account and roles UpdateProductionApp</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98500",
                "choice": "<p>&nbsp; i) &nbsp;Create an IAM role UpdateProductionApp<em> </em>in the Production account and specify a permissions policy that allows trusted users to update the productionapp bucket.</p>\r\n\r\n<p>&nbsp;ii) Set up an IAM user group as Development in Production account and attach the IAM role UpdateProductionApp<em> </em>to the group.</p>\r\n\r\n<p>&nbsp;iii) Create an IAM user for each developer. Assign these users to the Development group</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98500",
                "choice": "<p>&nbsp; &nbsp;i) Create an IAM role UpdateProductionApp<em> </em>in the Production account. Define the Development account as a trusted entity and specify a permissions policy that allows trusted users to update the productionapp bucket.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; ii) In the Development account, modify the IAM user group policy for Developers by enabling sts:AssumeRole to grant access to the UpdateProductionApp role, and explicitly deny Testers access to the UpdateProductionApp role.</p>\r\n\r\n<p>&nbsp;&nbsp; iii) Use the S3 bucket policy in productionapp bucket to grant the s3:PutObject and s3:PutObjectAcl permissions to Development account.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98501,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A fitness tracking device company captures all its user data in Amazon DynamoDB. The company is forming a new backup strategy. It wants all accounts in the organization to back up all Amazon DynamoDB tables with a default backup frequency of once per week.</p>\r\n\r\n<p>In addition, the company wants a separate backup policy attached directly to the production account of the organization with a backup frequency of once per day.</p>\r\n\r\n<p>Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because AWS Batch helps you to run batch computing workloads on the AWS Cloud - it is not a backup solution.</li>\r\n\t<li><strong>Option B is incorrect</strong> because you do not need to create a separate Lambda function to back up DynamoDB. DynamoDB already has got an inbuilt backup feature on each table.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-4.png\" style=\"height:353px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is CORRECT</strong> because you use both AWS Backup and AWS Organizations together to enable the backup policy type in your organization and then create default backup policies with a frequency of once per week and attach them to the organization&#39;s root, OUs, or accounts. For the production account, define the backup policy with backup frequency as daily and attach the policy directly to the production account.</li>\r\n\t<li><strong>Option D is incorrect</strong> because DynamoDB on-demand backups cannot be copied to a different account or Region. To create backup copies across AWS accounts and for other advanced features, you should use AWS Backup.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Image source: <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup.Tutorial.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup.Tutorial.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-backup.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-backup.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124089,
            "question_id": 98501,
            "answers": [
              {
                "question_id": "98501",
                "choice": "<p>Define the backup policy in the Job Definition of AWS Batch. Use AWS Batch Jobs to run weekly and daily based on your account type.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98501",
                "choice": "<p>Create AWS Lambda function to backup Amazon DynamoDB. Use Amazon Event Bridge (CloudWatch Events) to schedule Lambda triggers once a week for all accounts and once a day for the production account.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98501",
                "choice": "<p>Use AWS Backup to define the different backup policies needed for Production and other accounts based on the daily and weekly frequency respectively. Use AWS Organizations to enable default backup policies (with a frequency of once per week) and attach them to the organization&#39;s root, OUs, or accounts. For the production account, directly attach the backup policy with backup frequency as daily.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98501",
                "choice": "<p>Use the DynamoDB on-demand backup capability to create full backups of your tables, based on the frequency of your backup for each account.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98502,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company has two AWS accounts: one account for Production to manage live applications and one Development account for developers and testers to use the account as a sandbox to apply changes and test applications freely. In each account, you store application information in Amazon S3 buckets.</p>\r\n\r\n<p>In the Development account, there are two IAM user groups: Developers and Testers. Users in both user groups have permission to work in the Development account and access resources there. From time to time, a Developer must update the live applications in the Production account in an Amazon S3 bucket called productionapp.</p>\r\n\r\n<p>You need to set up IAM permission such that developers in Development account can access the productionapp S3 bucket in the Production account. Also, ensure that similar attempts by a Tester to access the productionapp bucket should fail.</p>\r\n\r\n<p>Which of the below AWS JSON policy elements in IAM permission will help achieve this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because all the steps and JSON policy in permissions are correct.</li>\r\n\t<li><strong>Option B is incorrect</strong> because you do not need a bucket name to define in IAM permission in this case.</li>\r\n\t<li><strong>Option C is incorrect</strong> because you do not need a bucket name to define in IAM permission in this case.</li>\r\n\t<li><strong>Option D is incorrect</strong> because the syntax of the resource in the JSON policy is incorrect.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html#tutorial_cross-account-with-roles-3\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html#tutorial_cross-account-with-roles-3</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124090,
            "question_id": 98502,
            "answers": [
              {
                "question_id": "98502",
                "choice": "<pre>\r\ni) In Development account, modify the IAM user group policy for Developers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp&quot;\r\n&nbsp; }\r\n}\r\nii) In Development account, modify the IAM user group policy for Testers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp&quot;\r\n&nbsp; }\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98502",
                "choice": "<pre>\r\ni) In Development account, modify the IAM user group policy for Developers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:s3:::productionapp/*&quot;\r\n&nbsp; }\r\n}\r\nii) In Development account, modify the IAM user group policy for Testers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:s3:::productionapp/*&quot;\r\n&nbsp; }\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98502",
                "choice": "<pre>\r\ni) In Development account, modify the IAM user group policy for Developers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:s3:::productionapp&quot;\r\n&nbsp; }\r\n}\r\nii) In Development account, modify the IAM user group policy for Testers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:s3:::productionapp&quot;\r\n&nbsp; }\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98502",
                "choice": "<pre>\r\ni) In Development account, modify the IAM user group policy for Developers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*&quot;\r\n&nbsp; }\r\n}\r\nii) In Development account, modify the IAM user group policy for Testers as per below:\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: {\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;sts:AssumeRole&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*&quot;\r\n&nbsp; }\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98503,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>What do you infer from the below resource-based policy?</p>\r\n\r\n<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [{\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;NotPrincipal&quot;: {&quot;AWS&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:iam::222233334444:user/Bob&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:iam::222233334444:root&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]},\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:s3:::myexamplebucket&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:s3:::myexamplebucket/*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp; }]\r\n}\r\n</pre>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option C is CORRECT.</strong> In the given example, all principals except the user named Bob in AWS account 222233334444 are explicitly denied access to a resource. Note that as the&nbsp;best practice, the NotPrincipal element contains the ARN of both the user Bob and the AWS account that Bob belongs to (arn:aws:iam::222233334444:root). If the NotPrincipal element contained only Bob&#39;s ARN, the effect of the policy might be to explicitly deny access to the AWS account that contains the user Bob. Sometimes, a user cannot have more permissions than their parent account.&nbsp;So if Bob&#39;s account is explicitly denied access, then Bob might be unable to access the resource.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-6.png\" style=\"height:138px; width:698px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Options A, B &amp; D are incorrect</strong> because of the same reason. <em>&ldquo;When you use NotPrincipal in the same policy statement as &quot;Effect&quot;: &quot;Deny&quot;, the actions specified in the policy statement are explicitly denied to all principals except for the ones specified.&rdquo;</em>&nbsp; &ndash; <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html</a></li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/s3-folder-user-access/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/s3-folder-user-access/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124091,
            "question_id": 98503,
            "answers": [
              {
                "question_id": "98503",
                "choice": "<p>User Bob and all other users under root will be denied access to Amazon S3 bucket myexamplebucket in account 222233334444</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98503",
                "choice": "<p>User Bob and all other users under root account 222233334444 will be allowed access to Amazon S3 bucket myexamplebucket</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98503",
                "choice": "<p>Both user Bob and root user will only be able to access to Amazon S3 bucket myexamplebucket. All other users in account 222233334444 are denied S3 access</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98503",
                "choice": "<p>This policy explicitly denies user Bob and the root user of account 222233334444. Hence all other users are allowed to access the S3 bucket myexamplebucket</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98504,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You&rsquo;re architecting APIs using Amazon API Gateway for one of the major eCommerce websites. The eCommerce company expects huge traffic. As a precautionary measure to prevent the APIs and the account from being overwhelmed by too many requests, the company has asked you to keep the below two points in mind:</p>\r\n\r\n<ul>\r\n\t<li>To protect the performance and availability of the underlying service while ensuring access for all AWS customers.</li>\r\n\t<li>To protect the customer from malicious code or misconfigurations that can result in unexpected charges.</li>\r\n</ul>\r\n\r\n<p>What do you do in your API architecture to meet the above demand?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because AWS WAF cannot control API usage plans as per the requirement above. It protects AWS services from external threats based on the Web ACL rules, but cannot be used to improve or optimize the performance of APIs in Amazon API Gateway.</li>\r\n\t<li><strong>Option B is incorrect</strong> because the surge in traffic while accessing APIs will always overwhelm your underlying services, irrespective of the fact that your services are serverless or not. When request submissions exceed the steady-state request rate and burst limits, API Gateway begins to throttle requests. Clients may receive &ldquo;429 Too Many Requests&rdquo; error responses at this point. Upon catching such exceptions, the client can resubmit the failed requests in a way that is rate limiting &ndash; and the best way to achieve this is by configuring throttling and quotas for the APIs.</li>\r\n\t<li><strong>Option C is incorrect</strong> because Lambda@Edge &ndash; an extension of AWS Lambda, is a compute service that helps you execute functions that customize the content CloudFront delivers. Again, this option does not have any control over the API Gateway performance improvement and optimization.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because one can configure throttling and quotas for the APIs to help protect them from being overwhelmed by too many requests.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-7.png\" style=\"height:128px; width:717px\" /></p>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Image source: <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/mt/managing-monitoring-api-throttling-in-workloads/\" target=\"_blank\">https://aws.amazon.com/blogs/mt/managing-monitoring-api-throttling-in-workloads/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124092,
            "question_id": 98504,
            "answers": [
              {
                "question_id": "98504",
                "choice": "<p>Associate an AWS WAF regional Web ACL with an API Gateway API stage. Apply rate-based rule in the AWS WAF Web ACL.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98504",
                "choice": "<p>Propose a serverless architecture using microservices written on AWS Lambda and database as DynamoDB. Integrate Lambda with Application Auto Scaling Group to allow provisioned concurrency based on utilization.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98504",
                "choice": "<p>Associate a CloudFront distribution with a Lambda@Edge function and integrate API Gateway as the origin.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98504",
                "choice": "<p>Set the target limits for individual API stages or methods to improve overall performance across all APIs in your account. Alternatively, enable usage plans to set throttles on client request submissions based on specified request rates and quotas. Also, Enable API caching to enhance responsiveness.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98505,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company wants to free its teams from time-consuming database tasks like server provisioning, patching, backups, etc., and hence decided to migrate their on-premises MariaDB database to AWS. The company wants its AWS database to have built-in security, continuous backups, serverless compute, multiple read replicas, automated multi-Region replication, less expensive compared to other commercial-grade databases, and integrations with other AWS services.&nbsp;</p>\r\n\r\n<p>The company is asking for your advice and help as a solution architect to migrate databases to AWS quickly and securely. They have conditions that the source database remains fully operational during the migration and downtime should be minimized to applications that rely on the database.</p>\r\n\r\n<p>Which combination of architectural changes should you make to meet the above requirements?</p>\r\n\r\n<ul>\r\n</ul>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because Amazon Aurora Mysql satisfies all the above requirements about the target database. AWS DMS fits the requirement of quick and easy hassle-free migration service.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-8.1.png\" style=\"height:70px; width:750px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-8.2.png\" style=\"height:369px; width:750px\" /></p>\r\n\r\n<p>DMS - AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because, as per the definition of <a href=\"https://en.wikipedia.org/wiki/MariaDB\" target=\"_blank\">MariaDB</a>, &ldquo;MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system, intended to remain free and open-source software under the GNU General Public License.&rdquo; The company wants to migrate &ldquo;quickly and securely&rdquo;. Here the migration process from MySQL MariaDB to NoSQL DynamoDB is not going to be fast and easy. Plus, there is no requirement that can justify the usage of NoSQL DynamoDB in AWS.</li>\r\n\t<li><strong>Options C &amp; D both are incorrect</strong> because Amazon Aurora Serverless (MySQL and PostgreSQL type) is going to be an over-power solution. All the requirements can be well satisfied by using AWS Aurora. There is no demand for auto-scaling or dynamic load balancing capability etc. from the company. Hence this is not the best and most optimized solution.&nbsp;</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/aurora/\" target=\"_blank\">https://aws.amazon.com/rds/aurora/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/database/migrate-self-managed-mariadb-to-amazon-aurora-mysql/\" target=\"_blank\">https://aws.amazon.com/blogs/database/migrate-self-managed-mariadb-to-amazon-aurora-mysql/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124093,
            "question_id": 98505,
            "answers": [
              {
                "question_id": "98505",
                "choice": "<ul>\r\n\t<li>Provision Amazon Aurora Mysql as the target DB instance in AWS.</li>\r\n\t<li>Provision Database Migration Service (DMS) replication instance and create DMS endpoints.</li>\r\n\t<li>Create DMS task, migrate data from the source database as on-premises MariaDB, and perform validation.</li>\r\n</ul>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98505",
                "choice": "<ul>\r\n\t<li>Provision DynamoDB as target DB instance in AWS.</li>\r\n\t<li>Provision Database Migration Service (DMS) replication instance and create DMS endpoints.</li>\r\n\t<li>Create DMS task, migrate data from the source database as on-premises MariaDB, and perform validation.</li>\r\n</ul>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98505",
                "choice": "<ul>\r\n\t<li>Provision Amazon Aurora Serverless MySQL as target DB instance in AWS.</li>\r\n\t<li>Provision Database Migration Service (DMS) replication instance and create DMS endpoints.</li>\r\n\t<li>Create DMS task, migrate data from source database as on-premises MariaDB and perform validation.</li>\r\n</ul>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98505",
                "choice": "<ul>\r\n\t<li>Provision Amazon Aurora Serverless PostgreSQL as target DB instance in AWS.</li>\r\n\t<li>Provision Database Migration Service (DMS) replication instance and create DMS endpoints.</li>\r\n\t<li>Create DMS task, migrate data from the source database as on-premises MariaDB and perform validation.</li>\r\n</ul>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98506,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>With the increase in popularity of a free streaming video service company, the challenge also increases. For example</p>\r\n\r\n<ul>\r\n\t<li>The company finds it very expensive and cost-prohibitive to store and maintain on-premises data centers for their robust petabytes (PB) of media library.</li>\r\n\t<li>It lacks the flexibility of storing media files automatically based on hot (viral videos - frequent access), warm (often or infrequent access), and cool (rare or archive access) tiers.</li>\r\n\t<li>It needs high availability to distribute and give consumers easy access to the robust media library.</li>\r\n</ul>\r\n\r\n<p>You are a solution architect in the company and have been tasked to resolve all these problems in 90 days by moving the data securely to AWS. The company has also asked you to ensure that the service and performance of the existing model should not get affected by this operation.</p>\r\n\r\n<p>Which solution will resolve these problems?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because Kinesis Video Streams can ingest data from edge devices, smartphones, security cameras, and other data sources such as RADARs, LIDARs, drones, satellites, dash cams, and depth-sensors and provides SDKs that make it easy for devices to securely stream media to AWS for playback, storage, analytics, machine learning, and other processing. This will not satisfy the demand of the company. Plus, this solution runs online and requires high network bandwidth, which will slow down the performance of the existing AS-IS model while serving content from the on-premises data center to their customers.&nbsp;&nbsp;</li>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Storage Gateway is used for on-premises data backup to AWS and a hybrid model where both on-premises and cloud services can access the backed-up data. This will increase the cost of storage as the on-premises are getting extended to additional cloud storage.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because Amazon Snowball Edge Storage Optimized devices can move petabytes of data. This Snowball Edge device runs in disconnected, austere edge environments without utilizing your network bandwidth, so your existing model still functions as it is. Also, multiple Amazon Snowball Edge Storage Optimized devices can be used concurrently to fasten the process of data movement. Amazon S3 Intelligent-Tiering best fits to automatically store data into cost-effective storage classes based on hot (viral videos - frequent access), warm (often or infrequent access), and cool (rare or archive access) tiers.</li>\r\n\t<li><strong>Option D is incorrect</strong> because AWS DataSync is an online data transfer service that simplifies, automates, and accelerates the process of copying large amounts of data to and from AWS storage services over the Internet or AWS Direct Connect. Setting up AWS Direct Connect is a complex and lengthy process. Sometimes it takes more than 90 days. Hence it is less likely to have the petabytes of media files moved to AWS within 90 days.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/snow/\" target=\"_blank\">https://aws.amazon.com/snow/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124094,
            "question_id": 98506,
            "answers": [
              {
                "question_id": "98506",
                "choice": "<p>To move large files quickly and securely, use Amazon Kinesis Video Streams and upload media files from the on-premises data center to Amazon S3. Leverage Amazon S3 Intelligent Tiering to achieve better flexibility based on hot, warm, and cool tiers and implement Amazon CloudFront for high availability.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98506",
                "choice": "<p>For a quick and secure solution, replicate your on-premise data using AWS Storage Gateway and achieve hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage for better flexibility and availability. Leverage Amazon S3 Intelligent Tiering to achieve better flexibility based on hot, warm, and cool tiers of media files.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98506",
                "choice": "<p>Use multiple Amazon Snowball Edge Storage Optimized devices concurrently to move large files quickly and securely to Amazon S3. Leverage Amazon S3 Intelligent Tiering to optimize storing data into storage classes automatically based on hot, warm, and cool tiers.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98506",
                "choice": "<p>Set up AWS Direct Connect and configure AWS DataSync to automate and accelerate moving data securely from on-premises to AWS storage services. Leverage Amazon S3 Intelligent Tiering to optimize storing data into storage classes automatically based on hot, warm, and cool tiers.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98507,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A research team in a biopharmaceutical company that seeks to deliver truly innovative and life-changing treatments for patients with cancer and other severe conditions often collaborates with third-party universities and research institutions, with whom they share important research data &amp; files. The company has embraced Amazon S3 as cloud native storage to maintain one source of data. A new collaboration project cropped up on short notice which requires petabyte-scale storage or SFTP infrastructure that could handle huge volumes of file transfer. The company needs to exchange data in a controlled and secure way that doesn&rsquo;t allow such third parties to access their critical data and files.</p>\r\n\r\n<p>Which solution will help the company build an SFTP infrastructure quickly and securely?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because AWS Snowball is used to move databases, backups, archives, analytics datasets and media content to the cloud - especially when network conditions are limited. Ordering AWS Snowball is a complex, costly and lengthy process. So this option is negative. Plus, the requirement of &ldquo;....SFTP infrastructure that could handle huge volumes of the file transfer.&rdquo;-- does not meet.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/ap-10.png\" style=\"height:206px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> because AWS Storage Gateway is a set of hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage where both on-premises and cloud services can access the backed-up data. It is not suitable for the above use-case.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because AWS Transfer for SFTP from AWS Transfer Family easily manages file transfers and modernizes the transfer workflows within hours by using existing authentication systems. Attach the SFTP endpoint to your bucket, provision users, and start sharing the files.</li>\r\n\t<li><strong>Option D is incorrect</strong> because AWS DataSync is an online data transfer service that simplifies, automates, and accelerates the process of copying large amounts of data to and from AWS storage services over the Internet or AWS Direct Connect. Setting up AWS Direct Connect is a complex and lengthy process. Sometimes it takes more than 90 days. Hence it is less likely to have the petabytes of media files moved to AWS within 90 days. Plus, AWS DataSync can not replicate SFTP infrastructure.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li>Image Source: <a href=\"https://aws.amazon.com/snowball/\" target=\"_blank\">https://aws.amazon.com/snowball/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/aws-transfer-family/?nc=sn&amp;loc=0\" target=\"_blank\">https://aws.amazon.com/aws-transfer-family/?nc=sn&amp;loc=0</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124095,
            "question_id": 98507,
            "answers": [
              {
                "question_id": "98507",
                "choice": "<p>Use AWS Snowball to Migrate petabyte-scale data and transfer file from company to it&rsquo;s partner.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98507",
                "choice": "<p>For a quick and secure solution, use AWS Storage Gateway and achieve a reliable exchange of data with partners.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98507",
                "choice": "<p>Use AWS Transfer for SFTP from AWS Transfer Family for an easy and reliable solution for exchanging data with partners.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98507",
                "choice": "<p>Set up AWS Direct Connect between the company and the partner and configure AWS DataSync to automate and accelerate moving data securely.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98573,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You join&nbsp;a company recently and need to manage an AWS Organization with several Organizational Units (OUs). A &ldquo;FullAWSAcess&rdquo; SCP has been attached to the organization&rsquo;s Root that allows all services and actions. Other policies are attached in OUs to prevent users from using some AWS services or performing certain actions (i.e.deleting DynamoDB tables). Your manager asks you to identify the allowed AWS services that have not been accessed for 6 months in the Development OU. How do you achieve this in the easiest way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because searching for services through CloudTrail event history needs lots of manual effort. Other than that, CloudTrail&rsquo;s event history only shows 90 days of management events.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because AWS IAM Access Analyzer cannot quickly identify AWS services that are not accessed. AWS IAM Access Analyzer can find resources such as S3 buckets shared with external entities and generate findings for users to review.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because the &ldquo;Service access report&rdquo; of the Organization OU can quickly show the last accessed information so that users can refine their policies to disallow unused services or actions. The following is an example of the &ldquo;Service access report&rdquo;:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-1.png\" style=\"height:345px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because users can only view the applied policies in the Organization OU panel, but there is no information on the last accessed services.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124096,
            "question_id": 98573,
            "answers": [
              {
                "question_id": "98573",
                "choice": "<p>In the AWS console, go to CloudTrail &gt; Event history, and search for the services accessed within 6 months. Compare the services with the allowed services in the SCP. Identify the allowed services that are not accessed.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98573",
                "choice": "<p>In the AWS console, go to IAM &gt; Access analyzer, and create a new analyzer in the AWS Organization. Monitor the &ldquo;Active findings&rdquo; in the analyzer and identify the AWS services that are not accessed for 6 months.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98573",
                "choice": "<p>In the AWS console, go to IAM &gt; Access reports &gt; Organization activity, select the Development OU, and check the last accessed information in the &ldquo;Service access report&rdquo; table.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98573",
                "choice": "<p>In the AWS console, go to AWS Organizations &gt; Development OU &gt; Policies, select the applied SCPs, and review whether there are any services that are not accessed for 6 months.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98574,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are managing an AWS Organization which includes multiple Organizational Units (OUs). The default &ldquo;FullAWSAccess&rdquo; SCP in the Root has been removed so that all actions for all services are implicitly denied. There are custom policies attached to the Root and OUs to allow the services that you want to permit explicitly. Now you want to identify the allowed services that have not been accessed for a long time and remove these services from the allowed list. How do you achieve this requirement in the most suitable way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because it is inappropriate to detach the policies from the OU in this question. The services will be impacted as all the services and actions are implicitly denied by default.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the Organization activity in IAM access reports provides the last accessed information. Users can quickly identify the services that are not used but allowed by the SCP.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because Access Advisor in IAM policies does not provide an overall view of the whole AWS Organization. You have to consolidate the Access Advisor findings of each IAM entity. The correct way is to use the Organization activity in IAM access reports.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because AWS CLI &ldquo;aws iam get-service-last-accessed-details&rdquo; can only generate a report that includes details about when an IAM entity (i.e., user, user group, role, or policy) was last used to access AWS resources. You cannot identify the services required by the whole AWS Organization through this CLI command.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124097,
            "question_id": 98574,
            "answers": [
              {
                "question_id": "98574",
                "choice": "<p>Detach the policies from an OU, monitor the failed APIs in CloudTrail, and identify the services required by the OU. Modify the policies to only allow the required services and reattach the policies in the OU.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98574",
                "choice": "<p>View the last accessed information in &ldquo;AWS IAM &gt; Access reports &gt; Organization activity&rdquo;. If there are services that are not accessed for a long time, remove them from the Organization Service Control Policies (SCPs).</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98574",
                "choice": "<p>In &ldquo;AWS IAM &gt; Policies &gt; Access Advisor&rdquo;, check the &ldquo;Last Accessed&rdquo; column for the services that are not accessed. Remove them from the Organization SCP allow list.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98574",
                "choice": "<p>Use AWS CLI &ldquo;aws iam get-service-last-accessed-details&rdquo; to retrieve service last accessed information for the IAM entities owned by the Organization. For the services that are not needed, remove them from the SCP allow list.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98575,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS engineer in a company. You plan to use the attribute-based access control (ABAC) strategy to control access to the KMS customer-managed keys based on the tags associated with them. All the customer-managed keys have been configured with a &ldquo;Project&rdquo; tag to determine which project the keys belong to. Several KMS keys have the &quot;Project&quot;=&quot;Beta&quot; tag. You want to set up an IAM policy that allows the &ldquo;kms:Encrypt&rdquo; and &ldquo;kms:Decrypt&rdquo; operations only on these KMS keys. Which of the following IAM policies is correct?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because &quot;kms:ResourceAliases&quot; is the condition key for KMS alias instead of KMS tag. AWS KMS attribute-based access control (ABAC) strategy supports both tags and aliases. In this question, the tag condition key &ldquo;aws:ResourceTag&rdquo; should be used.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the policy has a &quot;Deny&quot; statement that overrides the &ldquo;Allow&rdquo; statement for the KMS tag. With this policy, the IAM principal cannot operate on the KMS keys with the &quot;Project&quot;=&quot;Beta&quot; tag.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the policy denies the usage of KMS keys if they do not have the &quot;Project&quot;=&quot;Beta&quot; alias. It does not provide any &lsquo;allow&rsquo; permissions, so KMS keys with the tag are not allowed.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because the policy contains the proper condition for the &quot;Project&quot;=&quot;Beta&quot; tag. It allows the usage of the KMS keys on the condition that the keys have the &quot;Project&quot;=&quot;Beta&quot; tag.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/abac.html\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/abac.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/tag-authorization.html\" target=\"_blank\">https://docs.aws.amazon.com/kms/latest/developerguide/tag-authorization.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124098,
            "question_id": 98575,
            "answers": [
              {
                "question_id": "98575",
                "choice": "<pre>\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;IAMPolicyWithResourceTag&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:kms:ap-southeast-1:xxxxxxxxxxxx:key/*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:ResourceAliases&quot;: &quot;Project/Beta&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98575",
                "choice": "<pre>\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;IAMPolicyWithResourceTagDeny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:kms:ap-southeast-1:xxxxxxxxxxxx:key/*&quot;\r\n&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;IAMPolicyWithResourceTagAllow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:kms:ap-southeast-1:xxxxxxxxxxxx:key/*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;aws:ResourceTag/Project&quot;: &quot;Beta&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98575",
                "choice": "<pre>\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;IAMPolicyWithResourceTag&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:kms:ap-southeast-1:xxxxxxxxxxxx:key/*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringNotEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:ResourceAliases&quot;: &quot;Project/Beta&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98575",
                "choice": "<pre>\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;Sid&quot;: &quot;IAMPolicyWithResourceTag&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;arn:aws:kms:ap-southeast-1:xxxxxxxxxxxx:key/*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringEquals&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;aws:ResourceTag/Project&quot;: &quot;Beta&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98576,
        "topic_id": 2686,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company owns a self-managed directory in Microsoft Active Directory (AD) to manage the company employee identities. Now you want to use AWS IAM Identity Center (successor to AWS Single Sign-On) to manage the SSO access to AWS accounts and cloud applications in the AWS access portal. You also want to redirect the directory requests to the self-managed AD without the need to cache information in AWS. What is the correct way to configure it?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because AD Connector is a directory gateway and can redirect the directory requests. The self-managed AD can be connected to the IAM Identity Center through this method.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the question asks for redirecting the directory requests without the need to cache information. This option uses an AWS Managed Microsoft AD and does not meet this requirement.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the trust relationships between AWS Managed Microsoft AD and the self-managed AD should be two-way instead of one-way.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because in &ldquo;AWS Identity Center &gt; Settings &gt; Identity source &gt; Change identity source&rdquo;, users cannot directly add a self-managed directory. Instead, users can add an AWS Managed Microsoft AD to IAM Identity Center through the IAM Identity Center console.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html\" target=\"_blank\">https://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/singlesignon/latest/userguide/connectawsad.html\" target=\"_blank\">https://docs.aws.amazon.com/singlesignon/latest/userguide/connectawsad.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124099,
            "question_id": 98576,
            "answers": [
              {
                "question_id": "98576",
                "choice": "<p>Configure an Active Directory (AD) Connector in the AWS Directory Service as a directory gateway to forward directory requests. Connect IAM Identity Center to the self-managed Active Directory by using the AD Connector.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98576",
                "choice": "<p>Create an AWS Managed Microsoft AD and establish two-way trust relationships between the self-managed directory and AWS Microsoft AD in the AWS IAM Identity Center.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98576",
                "choice": "<p>In the AWS IAM Identity Center, configure a one-way trust relationship between AWS Microsoft AD and the self-managed directory to redirect the directory requests.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98576",
                "choice": "<p>In &ldquo;AWS Identity Center &gt; Settings &gt; Identity source &gt; Change identity source&rdquo;, select the self-managed directory and connect it to the IAM Identity Center.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Accelerate Workload Migration and Modernization"
      },
      {
        "question_id": 98577,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>As a cloud engineer, you are managing an AWS Organization that covers several Organizational Units (OUs). To provide better governance in the AWS environment, you need to create AWS resources in the whole AWS Organization or certain Organization Units. For example, you would like to set up AWS Config rules across the whole company. Another requirement is that the resources should be in multiple regions that you have selected. You plan to create the resources through AWS CloudFormation. Which of the following methods is the most suitable?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>​Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because, with self-managed permissions in CloudFormation StackSet, users have to select the specific AWS accounts in specific Regions manually. CloudFormation StackSets can also be configured through service-managed permissions. With this model, StackSets can be automatically deployed to all accounts in the Organization or OUs. Option B is better than option A.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because, with service-managed permissions in CloudFormation StackSet, you can deploy the stacks to all accounts managed by AWS Organizations in specific Regions.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because you still cannot easily launch or manage the CloudFormation stacks across all accounts in the AWS Organization, although the accounts and regions were added in CloudFormation parameters.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because you cannot share the resource groups in the AWS Organization, although resource groups can be used to organize the AWS resources based on CloudFormation stacks. Therefore, this option cannot meet the requirement.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-getting-started-create.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-getting-started-create.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124100,
            "question_id": 98577,
            "answers": [
              {
                "question_id": "98577",
                "choice": "<p>Create CloudFormation StackSets with self-managed permissions. On the &ldquo;Set deployment options&rdquo; page, configure the accounts and Regions into which you want to deploy the stack set.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98577",
                "choice": "<p>Create CloudFormation StackSets with service-managed permissions. Set the deployment options to &ldquo;Deploy to organization&rdquo; or &ldquo;Deploy to organizational units&rdquo;. Choose the Regions in which you want to deploy the stack instances.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98577",
                "choice": "<p>In the CloudFormation templates, add the AWS accounts and Regions as CloudFormation parameters. Launch the CloudFormation stacks through the AWS Organization administrator account.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98577",
                "choice": "<p>In the AWS Organization administrator account, create resource groups based on CloudFormation stacks. Share the resource groups in the whole organization or OUs.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98578,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>As the company grows, the company&rsquo;s AWS Organization is becoming complicated with a large number of Organizational Units (OUs) and AWS accounts. Due to several restructures to the company, new AWS accounts are being created, and existing AWS accounts are being suspended. As an AWS administrator, you need to maintain all AWS accounts in the AWS Organization. Your manager asks you to provide information that includes the details of individual AWS accounts, such as Account IDs, Email addresses, and statuses. Which is the most suitable way to achieve the requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because &ldquo;Export account list&rdquo; in the AWS Organization console is the most suitable method to download the account information quickly. The CSV file provides the required details for each account.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because it is not suitable to use the organization&rsquo;s root account for this task due to security reasons. The root account allows full access to all AWS services. In this scenario, it is more suitable to use a non-root IAM user.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the &ldquo;Credentials report&rdquo; in the IAM console only provides the IAM credential details of an AWS account. It does not include all the account details of the organization.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the &ldquo;Organization activity&rdquo; view only provides the organization hierarchy, and it does not contain the account details of the organization.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_export.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_export.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124111,
            "question_id": 98578,
            "answers": [
              {
                "question_id": "98578",
                "choice": "<p>Sign in to the AWS Organizations console as an IAM user, choose &ldquo;Actions&rdquo; and click &ldquo;Export account list&rdquo; to download the organization account information as a CSV file.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98578",
                "choice": "<p>Sign in to the AWS Organizations console as the root user, choose &ldquo;Actions&rdquo; and click &ldquo;Export account list&rdquo; to export the organization account information as a txt file.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98578",
                "choice": "<p>Sign in to the AWS IAM console as the organization root user, choose &ldquo;Credentials report&rdquo;, and download the credentials reports as a CSV file.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98578",
                "choice": "<p>Sign in to the AWS IAM console as the organization root user, choose &ldquo;Organization activity&rdquo;, and view all the AWS account information.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98579,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team is developing a mobile app and plans to use the Amazon Cognito identity pool to return temporary credentials to the application to access AWS resources. The &ldquo;enhanced authflow&rdquo; for Cognito has been chosen to simplify the network calls to get credentials. The app first authenticates with a third-party identity provider (i.e., Facebook), presents an ID token in a GetID request to the Amazon Cognito identity pool, and exchanges the token for an identity ID. For the further authentication flow, which&nbsp;option&nbsp;is correct?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the enhanced authflow simplifies credential retrieval by performing GetOpenIdToken and AssumeRoleWithWebIdentity in the background. The app does not need to send GetOpenIdToken or AssumeRoleWithWebIdentity messages.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because GetOpenIdTokenForDeveloperIdentity is used when a developer-authenticated identity provider has been used. In this scenario, a third-party identity provider is used.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the app does not send AssumeRoleWithWebIdentity in the enhanced authflow. Other than that, in the basic authflow, AssumeRoleWithWebIdentity should be sent to AWS STS instead of Amazon Cognito.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because the GetCredentialsForIdentity message is used to fetch the AWS API credentials based on the following flows:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/hvhf.png\" style=\"height:472px; width:750px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html\" target=\"_blank\">https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124112,
            "question_id": 98579,
            "answers": [
              {
                "question_id": "98579",
                "choice": "<p>The identity ID is used in a GetOpenIdToken request to the Amazon Cognito identity pool. A new OAuth 2.0 token is returned and used in an AssumeRoleWithWebIdentity request to retrieve AWS API credentials.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98579",
                "choice": "<p>The identity ID is used in a GetOpenIdTokenForDeveloperIdentity request to the Amazon Cognito identity pool. A new OAuth 2.0 token is returned and used in an AssumeRoleWithWebIdentity request to retrieve AWS API credentials.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98579",
                "choice": "<p>The identity ID is used in a GetCredentialsForIdentity request to the Amazon Cognito identity pool. If the identity ID is validated successfully, a new OAuth 2.0 token is returned. The app uses the new token in an AssumeRoleWithWebIdentity request to Cognito to retrieve AWS API credentials.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98579",
                "choice": "<p>The identity ID is used in a GetCredentialsForIdentity request to the Amazon Cognito identity pool. If the identity ID is validated successfully, AWS API credentials will be returned.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98580,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team is developing a new application. A REST API is being set up in Amazon API Gateway with a Lambda function as the backend. To simplify the maintenance and configurations of the REST API, you plan to use proxy integration for the Lambda function so that you can change the Lambda function at any time without the need to redeploy the REST API in API Gateway. The entire HTTP request for all types of methods should be sent to the Lambda function as-is. About the Lambda proxy integration, which of the following configurations is correct?</p>\r\n\r\n<p>&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because the ANY method allows the users to use a single API method setup for all of the supported HTTP methods. The following is an example of enabling the Lambda proxy integration:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-8.png\" style=\"height:267px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the catch-all ANY method should be used that represents any HTTP method. There is no need to configure each HTTP method under the Lambda proxy integration configuration.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because this option does not enable the &ldquo;Use Lambda Proxy integration&rdquo; option, and the REST API is set up with the Lambda non-proxy integration.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the &ldquo;Use Lambda Proxy integration&rdquo; option is not enabled. Other than that, &ldquo;Passthrough&rdquo; in Content Handling only determines how the request body is handled. It is not the correct place to configure Lambda proxy integration.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-lambda-non-proxy-integration.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-lambda-non-proxy-integration.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124113,
            "question_id": 98580,
            "answers": [
              {
                "question_id": "98580",
                "choice": "<p>In the REST API, set up an &ldquo;ANY&rdquo; method, choose &ldquo;Use Lambda Proxy integration&rdquo;, and select the backend Lambda in the &ldquo;Lambda Function&rdquo; field.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98580",
                "choice": "<p>In the REST API, set up an HTTP method for each HTTP type including DELETE, GET, HEAD, OPTIONS, PATCH, POST, and PUT, click &ldquo;Use Lambda Proxy integration&rdquo;, and add the backend Lambda in the &ldquo;Lambda Function&rdquo; field.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98580",
                "choice": "<p>In the REST API, set up an &ldquo;ANY&rdquo; method, choose Method Request in the Method Execution pane, and add any required HTTP headers in the HTTP Request Headers section.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98580",
                "choice": "<p>In the REST API, set up an HTTP method for each HTTP type including DELETE, GET, HEAD, OPTIONS, PATCH, POST, and PUT, choose the Integration Request of the HTTP method, and configure the Content Handling to be &ldquo;Passthrough&rdquo;.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98581,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS Solutions Architect. Your team owns a website deployed in an Amazon Linux EC2 instance. Due to business needs, there is a new requirement to use the same instance to host another website by using multiple SSL certificates on a single server and associating each certificate with an elastic network interface (ENI). The new elastic network interface should be in a different subnet from the existing ENI. How would you configure it in the EC2 instance?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the AWS CLI run-instances command with the --secondary-private-ip-addresses option is used to assign a secondary private IP. It is not used to attach a secondary ENI.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because there is no need to stop and start the instance when attaching an ENI. Other than that, the &ldquo;Secondary IP&rdquo; option is used for assigning a secondary IP instead of a secondary ENI.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because users can attach an ENI in &ldquo;AWS EC2 console &gt; Actions &gt; Networking &gt; Attach network interface&rdquo;. The following screenshot is an example:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-9.png\" style=\"height:429px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because users can configure a secondary ENI in another subnet for an EC2 instance. Users must attach a network interface to an instance in the same Availability Zone.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124114,
            "question_id": 98581,
            "answers": [
              {
                "question_id": "98581",
                "choice": "<p>Create a new elastic network interface in a different subnet. Attach the network interface using the AWS CLI run-instances command with the --secondary-private-ip-addresses option.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98581",
                "choice": "<p>Create a new elastic network interface. Stop the instance. Attach the network interface in &ldquo;AWS EC2 console &gt; Network Settings &gt; Advanced network configuration &gt; Secondary IP &gt; Manually assign&rdquo;. Start the instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98581",
                "choice": "<p>Create a new elastic network interface in a different subnet. Attach the network interface in &ldquo;AWS EC2 console &gt; Actions &gt; Networking &gt; Attach network interface&rdquo;.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98581",
                "choice": "<p>There is no way to configure a secondary ENI under another subnet in an EC2 instance. All elastic network interfaces attached to a single EC2 instance must be in the same subnet.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98582,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are a cloud engineer and manage an AWS Organization in a startup company. The AWS Organization has several Organizational Units (OUs); one is called &ldquo;Platform_OU&rdquo;. Platform_OU has several AWS accounts owned by the platform team. Due to recent company restructures, there will be a new site reliability engineering (SRE) team and an SRE_OU has been created by you. Some existing AWS accounts in Platform_OU should be placed in the new SRE_OU. How would you achieve this requirement in the most suitable way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because it is unnecessary to remove the AWS accounts from the organization or re-invite these AWS accounts. Instead, these AWS accounts can be moved from one OU to another.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because users can choose the AWS accounts and move them to another OU in the AWS Organization console. This is the most suitable approach. The following is an example of moving an AWS account from Platform_OU to SRE_OU:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-10.png\" style=\"height:500px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because there is no need to recreate new AWS accounts for SRE_OU. The existing AWS accounts can be directly moved between OUs.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because it is not required to move AWS accounts to the root of the organization. Hence, this option is not suitable.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#move_account_to_ou\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#move_account_to_ou</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124115,
            "question_id": 98582,
            "answers": [
              {
                "question_id": "98582",
                "choice": "<p>In the AWS Organization console, select the AWS accounts in the Platform_OU. On the Actions menu, choose &ldquo;Remove from organization&rdquo; to remove these accounts from the AWS Organization. Reinvite these AWS accounts and add them to the SRE_OU.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98582",
                "choice": "<p>In the AWS Organization console, select the AWS accounts in the Platform_OU. On the Actions menu, choose Move. Select the SRE_OU and choose &ldquo;Move AWS account&rdquo;.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98582",
                "choice": "<p>In the AWS Organization console, select the AWS accounts in the Platform_OU. On the Actions menu, choose &ldquo;Remove from organization&rdquo;. Create new SRE AWS accounts and place them in the SRE_OU.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98582",
                "choice": "<p>In the AWS Organization console, select Platform_OU and move the AWS accounts from Platform_OU to the root. Select the SRE_OU and add the AWS accounts from root to SRE_OU.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98583,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your team is developing a new web application. As the application is container-based, you plan to host the application in AWS ECS Fargate for its simplicity. A simple and scalable Elastic File System (EFS) volume is also required because the application relies on files for state persistence. You have already created an Amazon ECS Cluster and an EFS file system. To successfully mount the Amazon EFS file system on ECS Fargate, which of the following conditions must be met? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answers: A and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because the EFS file system uses port 2049 for inbound communication. So, the EFS file system&rsquo;s security group should allow the inbound traffic from ECS Fargate.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because the security group of the ECS Fargate task should allow outbound traffic instead of inbound traffic on port 2049.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the security group of the EFS file system does not need to perform the outbound communications to the ECS service. So, this option is not required.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because the EFS file system, Amazon ECS cluster, and Fargate tasks should be placed in multiple availability zones to gain high availability&nbsp;for the conditions to be met to mount EFS on ECS Fargate successfully. This option is wrong.</li>\r\n\t<li><strong>Option​ ​E is CORRECT</strong> because, according to the Amazon EFS file system, Amazon ECS cluster, and Fargate tasks must all be in the same VPC.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-mount-efs-containers-tasks/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-mount-efs-containers-tasks/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tutorial-efs-volumes.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tutorial-efs-volumes.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124116,
            "question_id": 98583,
            "answers": [
              {
                "question_id": "98583",
                "choice": "<p>The security group of the EFS file system should allow the inbound connections on port 2049 from the ECS Fargate task or service.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98583",
                "choice": "<p>The security group of the ECS Fargate task should allow the inbound connections on port 2049 from the EFS file system&rsquo;s security group.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98583",
                "choice": "<p>The security group of the EFS file system should allow the outbound connections on port 80/443 to the ECS Fargate service.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98583",
                "choice": "<p>The EFS file system, Amazon ECS cluster, and Fargate tasks must be in the same availability zone.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98583",
                "choice": "<p>The EFS file system, Amazon ECS cluster, and Fargate tasks must be in the same VPC.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98584,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You have created an API Gateway API to expose the &quot;GET /user?user={name}&quot; method to invoke a Lambda function. The method has a query string called &quot;user&quot;. The Lambda function will respond with a message of &quot;Hello, {name}!&quot;. You have deployed the Lambda function as follows:</p>\r\n\r\n<pre>\r\nexports.handler = function(event, context, callback) {\r\n&nbsp;&nbsp;&nbsp; var res ={\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;statusCode&quot;: 200,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;headers&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Content-Type&quot;: &quot;*/*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; };\r\n&nbsp;&nbsp;&nbsp; if (event.user==null) {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; callback(new Error(&#39;Missing the required greeter parameter.&#39;));\r\n&nbsp;&nbsp;&nbsp; } else {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; res.body = &quot;Hello, &quot; + event.user +&quot;!&quot;;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; callback(null, res);\r\n&nbsp;&nbsp;&nbsp; }\r\n};</pre>\r\n\r\n<p>How would you set up the Lambda integration with the API method properly?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>​Correct Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because &ldquo;aws apigateway put-integration-response&rdquo; is used to configure how to pass the result returned from the backend to the client. It is not used to configure how the incoming request data is mapped to the integration request. The AWS CLI &ldquo;aws apigateway put-integration&rdquo; should be used.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because AWS CLI &ldquo;aws apigateway put-method&rdquo; is used to add a method in an API Gateway resource. It is not used to configure Lambda custom integration.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because, in Lambda proxy integration, API Gateway passes the raw request to the integrated Lambda function as it is. You can not configure the property mapping for a proxy integration.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because AWS CLI &ldquo;aws apigateway put-integration&rdquo; is the correct command to configure the Lambda custom integration and map the user query string parameter to the user property of the JSON payload.</li>\r\n</ul>\r\n\r\n<p>The following is an example of using the command:</p>\r\n\r\n<pre>\r\naws apigateway put-integration \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --region us-west-1 \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --rest-api-id xxxxxxxxxx \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --resource-id xxxxxx \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --http-method GET \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --type AWS \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --integration-http-method POST \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --uri api-integration-endpoint \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --request-templates file://integration-template.json \\\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --credentials arn:aws:iam::xxxxxxxxxxxx:role/apigProxyRole</pre>\r\n\r\n<p>The request-templates parameter value file://integration-template.json is a file that contains the required key-value map as a JSON object: {&quot;application/json&quot;:&quot;{\\&quot;user\\&quot;:\\&quot;$input.params(&#39;user&#39;)\\&quot;}&quot;}</p>\r\n\r\n<p>In the above example, the mapping template translates the user query string parameter to the user property of the JSON payload.</p>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-custom-integrations.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-custom-integrations.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html</a>&nbsp;</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124117,
            "question_id": 98584,
            "answers": [
              {
                "question_id": "98584",
                "choice": "<p>Use AWS CLI &ldquo;aws apigateway put-integration-response&rdquo; to set up the Lambda proxy integration. Configure the mapping of the user query string parameter to the user property of the JSON payload for the Lambda function.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98584",
                "choice": "<p>Use AWS CLI &ldquo;aws apigateway put-method&rdquo; to set up the Lambda custom integration. Configure the mapping of the user query string parameter to the event property for the Lambda function.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98584",
                "choice": "<p>Use AWS CLI &ldquo;aws apigateway put-integration&rdquo; to set up the Lambda proxy integration. Use a template file to configure the mapping of the user query string parameter to the event property for the Lambda function.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98584",
                "choice": "<p>Use AWS CLI &ldquo;aws apigateway put-integration&rdquo; to set up the Lambda custom integration. Configure the mapping of the user query string parameter to the user property of the JSON payload for the Lambda function.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98585,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are working as an AWS solutions architect in a company. Your company deploys AWS resources mainly in the us-east-1 region, where multiple VPCs and subnets are created. At the same time, the company wants to build and run applications on-premises using the same programming interfaces as in AWS. Subnets should also be created on the local network so that local AWS compute instances can communicate with other instances in the AWS region within the same VPC. How would you design the solution to meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because AWS Local Zone is an extension of an AWS Region in geographic proximity to the users. It is still within the AWS infrastructure and not designed for on-premises resources.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because AWS Local Zone still uses AWS infrastructure and is not used to deploy AWS resources in the on-premises network.</li>\r\n\t<li><strong>Option​ ​C ​is​ CORRECT</strong> because AWS Outpost is used to establish the AWS resources on-premises. AWS VPCs can be extended to Outpost and instances in Outpost subnets can communicate with instances in the AWS Region.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because, in this scenario, both Direct Connect and VPN connections can be used to connect Outpost to the AWS us-east-1 region. However, this question requires the same VPC to be used in both Outpost and the AWS region. There is no need to configure new VPC and VPC peer connections.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/Extend_VPCs.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/Extend_VPCs.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html\" target=\"_blank\">https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124118,
            "question_id": 98585,
            "answers": [
              {
                "question_id": "98585",
                "choice": "<p>Set up AWS Local Zone to run the applications on-premises. Connect Local Zone to the AWS us-east-1 region with Direct Connect. Create subnets on the Local Zone and launch on-premises AWS resources in the subnets.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98585",
                "choice": "<p>Set up AWS Local Zone to run the applications on-premises. Connect Local Zone to the AWS us-east-1 region with VPN connections. Create a new VPC with subnets on the Local Zone and establish the VPC peer connections between the Local Zone VPC and AWS VPC.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98585",
                "choice": "<p>Set up AWS Outposts to run the applications on-premises. Connect Outpost to the AWS us-east-1 region with Direct Connect. Create subnets on the Outpost and launch on-premises AWS resources in the subnets.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98585",
                "choice": "<p>Set up AWS Outposts to run the applications on-premises. Connect Outpost to the AWS us-east-1 region with VPN connections. Create a new VPC with subnets on Outpost and establish the VPC peer connections between the Outpost VPC and AWS VPC.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98586,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an AWS consultant working in a bank. The development team is working on a web application that reads some system parameters in the run time. These parameters have been stored in AWS Systems Manager Parameter Store (us-east-1) as SecureString encrypted by a KMS customer-managed key. All the parameters stored in the production AWS account have the prefix &quot;prod&quot;. Now you need to create an IAM policy so that the web application can read the production parameters properly. Which of the following IAM policies is the most appropriate?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>​Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because the policy allows the &ldquo;ssm:GetParameters&rdquo; operation for the production parameters and the &ldquo;kms:Decrypt&rdquo; operation for the KMS key. It does not allow other unnecessary policies; hence it meets the least-privilege principle.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because to read the SecureString parameters encrypted by KMS, only the &ldquo;kms:Decrypt&rdquo; action is required. There is no need to allow &ldquo;kms:Encrypt&rdquo; or &ldquo;kms:GenerateDataKey&rdquo;.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the question only asks for the IAM policy to read the production parameters. So the actions &ldquo;ssm:PutParameter&rdquo;, &ldquo;ssm:DeleteParameter&rdquo; and &ldquo;ssm:DeleteParameters&rdquo; are not required.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because there is an explicit deny for &ldquo;ssm:GetParameter&rdquo;. With the IAM policy, the &ldquo;ssm:GetParameter&rdquo; action for all parameters is not allowed.</li>\r\n</ul>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124119,
            "question_id": 98586,
            "answers": [
              {
                "question_id": "98586",
                "choice": "<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:GetParameters&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98586",
                "choice": "<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:GetParameter&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;kms:Encrypt&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;kms:GenerateDataKey&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98586",
                "choice": "<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:GetParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:PutParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:DeleteParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:DeleteParameters&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98586",
                "choice": "<pre>\r\n{\r\n&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:GetParameter*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:GetParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:PutParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:DeleteParameter&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:DeleteParameters&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ssm:DescribeParameters&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;kms:Decrypt&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID&quot;\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\r\n&nbsp;&nbsp;&nbsp; ]\r\n}\r\n</pre>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98587,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company deploys applications in AWS and application logs are stored in several AWS services, including S3, CloudWatch, and Kinesis Data Firehose. Your team needs to build a new search and analytics engine to perform analytics on these logs for real-time application monitoring. After the data is indexed in the search and analytics engine, users can use SQL tools (i.e., SQL CLI and SQL Workbench) to query and search for valuable data. The search engine should also be an AWS-managed service. How would you design the solution?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>​<strong>Correct Answer​: D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because Amazon Redshift is a fully managed, petabyte-scale data warehouse service instead of a managed search engine. Redshift is suitable for use cases such as machine learning, business analytics, etc. Besides, Redshift does not load data from CloudWatch or Kinesis Data Firehose. For the supported data type, please check</li>\r\n\t<li><strong>Option​ B is​ ​incorrect</strong> because Amazon Athena is not a search and analytics engine. This question also mentions that the data is stored in services such as CloudWatch and Kinesis Data Firehose. Athena cannot query data in these services.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because the question doesn&rsquo;t ask for a big data processing framework. Amazon EMR is based on Apache Hadoop and Apache Spark and is a big data framework.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT</strong> because Amazon OpenSearch is a suitable AWS-managed service as a search solution. SQL is also supported in Amazon OpenSearch for users to query the data.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sql-support.html\" target=\"_blank\">https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sql-support.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html\" target=\"_blank\">https://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/redshift/latest/dg/t_Loading_tables_with_the_COPY_command.html\" target=\"_blank\">https://docs.aws.amazon.com/redshift/latest/dg/t_Loading_tables_with_the_COPY_command.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124120,
            "question_id": 98587,
            "answers": [
              {
                "question_id": "98587",
                "choice": "<p>Configure a cluster in Amazon Redshift, load the data from S3, CloudWatch, and Kinesis Data Firehose<strong> </strong>to the Amazon Redshift cluster, and search for the data in the Redshift data lake with standard SQL commands.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98587",
                "choice": "<p>Load the data into Amazon Athena which is an interactive query engine. Use standard SQL to query data in Athena and use Amazon QuickSight for data visualization.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98587",
                "choice": "<p>Configure an Amazon EMR cluster and load the data into the cluster for indexing. Use SQL to query the data in the EMR cluster for analytics purposes.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98587",
                "choice": "<p>Configure a domain in the Amazon OpenSearch Service, load the data into the OpenSearch Service domain, and use SQL to query the data.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98700,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An IT Firm is using AWS Organizations to manage multiple accounts. During an annual security audit, it was found that many users have excess permissions which are not required. The Security head has assigned you to work on the least-privilege access for all users in the AWS Organizations. While removing these permissions, permission to resources that users have accessed in the last 180 days should not be removed.</p>\r\n\r\n<p>Which report can be viewed to get resources accessed by users before fine-tuning permissions in the AWS Organizations?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Last Accessed Information can be used to fine-tune permissions set to all users and accounts within an AWS Organization. It helps to check if users are granted additional permission which is never used by the user or not required in case the user has moved to another domain. Using Last Access Information, additional unused permissions can be removed and thus can adhere to the best practice of least privilege.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as AWS Config can be used to assess and record configuration changes done by users on AWS resources. It does not help in providing a list of resources that the user has accessed. An organization aggregator will collect AWS Config configurations and compliance data from all the accounts within an AWS Organization.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS Trusted Advisor can be used to evaluate AWS resources and recommend best practices concerning cost optimization, performance, security, fault tolerance, and service quotas. It&rsquo;s not suitable to get a list of resources accessed by users in the AWS cloud.</li>\r\n\t<li><strong>Option D is incorrect</strong> as AWS Control Tower can help to ensure security and cross-account permissions for all accounts in an AWS Organizations are correctly applied, and there is no drift in the permissions. It is not suitable to get a list of resources accessed by users in AWS Organizations.</li>\r\n</ul>\r\n\r\n<p>For more information on the last accessed information with AWS Organizations, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-example-scenarios.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-example-scenarios.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124121,
            "question_id": 98700,
            "answers": [
              {
                "question_id": "98700",
                "choice": "<p>Use AWS Organizations management account credentials to log in to the AWS IAM console and fetch the last accessed information to get a list of resources accessed by the users.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98700",
                "choice": "<p>Use the Organization aggregator with AWS Config to get a list of resources accessed by users in the AWS Organizations.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98700",
                "choice": "<p>Use the Organizational view for the AWS Trusted advisor to get a list of resource access from all users in the AWS Organizations.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98700",
                "choice": "<p>Use AWS Control Tower along with AWS Organizations to get a list of resource access from all users in the AWS Organizations.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98701,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An IT firm has hybrid connectivity between on-premises location and AWS using AWS Direct Connect links. On-Premises users need to download project files stored in an Amazon S3 bucket. For providing access, IT firms do not want to create IAM users but are looking to use existing credentials created in SAML compatible Identity provider (IdP) deployed at on-premises locations.&nbsp;</p>\n\n<p>Which sequence of events takes place while users access the Amazon S3 bucket?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\n\n<p>For providing access to AWS resources, Identity providers can be used instead of creating IAM users. A trust relationship needs to be created between the AWS account and the (Identity provider) IdP. IAM supports IdPs that are compatible with OpenID Connect (OIDC) or SAML 2.0 (Security Assertion Markup Language 2.0).</p>\n\n<p>If a company has an existing IdP, the same can be used by users to get access to AWS resources instead of using new credentials created with IAM. For accessing the Amazon S3 bucket from an on-premises location following sequence of steps needs to be followed,</p>\n\n<ol>\n\t<li>On-Premises users get authenticated with Local Identity providers. This IdP needs to support SAML2 which is compatible with AWS.</li>\n\t<li>IdP sends a SAML assertion to the users.</li>\n\t<li>Users forward this SAML assertion to AWS STS which returns temporary credentials to users for accessing the Amazon S3 bucket.</li>\n\t<li>Using this credential, users can access the Amazon S3 bucket and download project files stored in the Amazon S3 bucket.</li>\n</ol>\n\n<p>The following diagram shows the sequence of events that takes place,</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2.png\" style=\"height:301px; width:750px\" /></p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong> as LDAP (Lightweight Directory Access Protocol) - based Identity providers do not directly send requests to STS.&nbsp;</li>\n\t<li><strong>Option C is incorrect</strong> as the client needs to send SAML assertion to STS using Assume Role with SAML API and not with Assume Role With Web Identity API.</li>\n\t<li><strong>Option D is incorrect</strong> as LDAP-based Identity providers do not directly send requests to STS. Also, Assume Role with SAML API should be used by the client while sending SAML assertion to STS.</li>\n</ul>\n\n<p>For more information on using SAML identity providers for providing access to users, refer to the following URL,</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124122,
            "question_id": 98701,
            "answers": [
              {
                "question_id": "98701",
                "choice": "<p>1. Users make a request to IdP and get authenticated<br />\n2. IdP sends a SAML assertion to STS using AssumeRolewithSAML API on behalf of the users<br />\n3. STS returns temporary security credentials to IdP<br />\n4. IdP forwards this security credential to users allowing access to the Amazon S3 bucket<br />\n&nbsp;</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98701",
                "choice": "<p>1. Users make a request to IdP and get authenticated<br />\n2. IdP sends a SAML assertion to users<br />\n3. Users forward this SAML assertion to STS using AssumeRolewithSAML API<br />\n4. STS returns a temporary security credential that allows users to access the Amazon S3 bucket<br />\n&nbsp;</p>",
                "feedback": "",
                "correct": "1"
              },
              {
                "question_id": "98701",
                "choice": "<p>1. Users make a request to IdP and get authenticated<br />\n2. IdP sends a SAML assertion to users<br />\n3. Users forward this SAML assertion to STS using AssumeRoleWithWebIdentity API<br />\n4. STS returns temporary security credentials that allow users to access the Amazon S3 bucket<br />\n&nbsp;</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98701",
                "choice": "<p>1. Users make a request to IdP and get authenticated<br />\n2. IdP sends a SAML assertion to STS using AssumeRoleWithWebIdentity API on behalf of the users<br />\n3. STS returns temporary security credentials to IdP<br />\n4. IdP forwards this security credential to users allowing access to the Amazon S3 bucket<br />\n&nbsp;</p>",
                "feedback": "",
                "correct": "0"
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98702,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A company has applied Service Control Policies (SCP) to an AWS Organization to deny any instance launch other than t2. micro instance type. This AWS Organization comprises a single OU with two accounts: Production and Development. Development accounts need to launch a c5. xlarge instance type for a month&rsquo;s time to perform testing of a new application. Post testing phase, the Development account should only launch the t2. micro instance type. The production account should launch only the t2. micro instance type at all times.</p>\n\n<p>Which combination of changes can be done in SCP to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\n\n<p>Service Control policies are a type of AWS Organizations policy to manage permissions within the Organizations. They are applied at the root of the organizations, at the OU (Organization Unit), or at the account level.</p>\n\n<p>SCP applied at the root of the organization affects permission for all OUs and accounts within the AWS Organizations, while SCP applied at the OU level affects permission to all accounts within that OU.</p>\n\n<p>If permission is denied at the level of OU or account, even explicit &ldquo;allow&rdquo; permissions at the OU or account level will not grant the permission. In the above case, an SCP at the root level denies permission to launch instances other than the t2. micro instance type. This permission will be inherited by the OU and both accounts: Production and Development in the OU. To provide permission to only the Development account to launch c5. large instance type following can be performed,</p>\n\n<ol>\n\t<li>Move Development Account to a new OU. Apply a new SCP to this OU to allow the launch of the c5. xlarge instance type.</li>\n\t<li>Remove SCP, which denies launch of instance type other than t2. micro instance type from the root level and apply it to the OU which has a Production account.</li>\n</ol>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong> as SCP at the root level denies the launch of the c5. xlarge instance type;&nbsp;attaching an SCP at OU level to allow the launch of the c5. xlarge instance type won&rsquo;t grant permission.&nbsp;</li>\n\t<li><strong>Option C is incorrect</strong> as allowing the launch of the c5. xlarge instance type in SCP at the root level will allow both the Production and Development accounts.</li>\n\t<li><strong>Option D is incorrect</strong> as SCP at the root level denies the launch of the c5. xlarge instance type;&nbsp;attaching an SCP at the account level to allow the launch of the c5. xlarge instance type won&rsquo;t grant permission.</li>\n</ul>\n\n<p>For more information on attaching SCPs in AWS Organizations, refer to the following URLs,</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124123,
            "question_id": 98702,
            "answers": [
              {
                "question_id": "98702",
                "choice": "<p>Create a new OU named Development. Move the Development account to this OU. Create a new SCP allowing access to launch the c5. xlarge instance type. Make no changes to the existing SCP attached to the root.</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98702",
                "choice": "<p>Create a new OU named Development. Move the Development account to this OU. Create a new SCP allowing to launch c5. xlarge instance type and attach it to the new OU. Detach existing SCP from the root and attach it to the OU which has a Production account.</p>",
                "feedback": "",
                "correct": "1"
              },
              {
                "question_id": "98702",
                "choice": "<p>Detach existing SCP from the root of the Organization. Attach a new SCP which will allow the launch of the c5. xlarge instance type. Post testing phase, revert these SCP.</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98702",
                "choice": "<p>Attach a new SCP to the Development account which will allow the launch of the c5. xlarge instance type. Make no changes is the existing SCP attached to the root of the Organizations.</p>",
                "feedback": "",
                "correct": "0"
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98703,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Developers in a large telecommunication company are working on a new mobile application for which low latency is a primary requirement. The application deployed with an IPv4 address will be accessed by 5G users of the telecommunication company. Applications will need secure connectivity to the internet to download security patches on a regular basis. Application data needs to be replicated securely to Amazon S3 buckets.</p>\r\n\r\n<p>What solution can a Solution Architect propose for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>Wavelength Zone allows to deploy AWS compute and storage resources at the edge of the telecommunication carrier network. This enables ultra-low latency from the application to the 5G devices and end users. The Wavelength zone has secure high bandwidth connectivity to the AWS. This will allow application data to be securely replicated to the Amazon S3 bucket.</p>\r\n\r\n<p>Carrier gateway provides connectivity between Wavelength Zone and telecommunication carrier as well as devices on the telecommunication carrier network. Carrier gateway allows inbound traffic from the telecommunication carrier network to the Wavelength zone as well as outbound traffic to the telecommunication carrier network and the internet.</p>\r\n\r\n<p>In the above case, the Telecommunication team is looking for low latency for new applications from 5G end users. This can be achieved by deploying applications on Amazon EC2 instances launched in the Wavelength Zone. For Internet access, a carrier gateway can be used. For this, a default route pointing to the Carrier gateway needs to be added to the Wavelength Zone subnet route table.</p>\r\n\r\n<p>Diagram showing instance deployed in Wavelength zone with carrier gateway.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-4.png\" style=\"height:274px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as the Local Zone is an extension of the AWS regions. It&#39;s best suited for deploying resources in multiple locations closer to users. Local Zones are not suitable for deploying applications at the edge of telecommunication carrier 5G network.&nbsp;</li>\r\n\t<li><strong>Option B is incorrect</strong> as for internet access in the Wavelength zone, the Carrier gateway is required and not the NAT gateway.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS Outpost allows the deployment of AWS services at the customer premises. For getting low latency from telecommunications 5G networks, applications should be deployed on Amazon EC2 instances launched in the Wavelength zone and not in AWS Outpost.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS Wavelength, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/wavelength/latest/developerguide/carrier-gateways.html\" target=\"_blank\">https://docs.aws.amazon.com/wavelength/latest/developerguide/carrier-gateways.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html\" target=\"_blank\">https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124124,
            "question_id": 98703,
            "answers": [
              {
                "question_id": "98703",
                "choice": "<p>Deploy an application on an Amazon EC2 instance launched in AWS Local Zone. For internet access, create a default route in an Egress-only internet gateway attached to the Amazon VPC in the nearest region.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98703",
                "choice": "<p>Deploy an application on an Amazon EC2 instance launched in AWS Wavelength Zone. For internet access, create a default route in the NAT gateway created in the Amazon VPC.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98703",
                "choice": "<p>Deploy an application on an Amazon EC2 instance launched in AWS Outpost. For internet access, create a default route in the NAT gateway attached to the Amazon VPC created in the nearest region.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98703",
                "choice": "<p>Deploy an application on an Amazon EC2 instance launched in AWS Wavelength Zone. For internet access, create a default route in the Carrier gateway attached to the Wavelength zone.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98704,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A start-up firm has deployed thousands of sensors across the globe to capture environmental changes. These sensors send a continuous data log of size less than 4Kb that needs to be analyzed in real-time, and a summary of the environmental data needs to be stored for future requirements. The firm is looking for a cost-effective managed solution to implement this setup in AWS Cloud. The solution should be highly scalable to handle any future growth.</p>\r\n\r\n<p>What solution can be designed to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Amazon Kinesis Data Analytics for Apache Flink is a fully managed service for performing analysis on streaming data. Amazon Kinesis Data Streams is a fully managed scalable service for capturing, processing, and storing data streams. In the above case, streaming data from thousands of sensors can be captured using Amazon Kinesis Data Streams in real-time. Amazon Kinesis Data Analytics can perform an analysis of this streaming data and save the results in an Amazon S3 bucket for future storage. Using Amazon Kinesis Data Analytics for capturing data and Amazon Kinesis Data Analytics for Apache Flink for analysis data provides a cost-effective, scalable solution.&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as there is a requirement for real-time data processing.&nbsp;Amazon Data Pipeline is not suitable. Amazon Data Pipeline is suitable for data transfer between AWS services or from on-premises at regular intervals.</li>\r\n\t<li><strong>Option C is incorrect</strong> as there is a requirement for real-time data processing.&nbsp;Amazon Data Pipeline is not suitable. Amazon Data Pipeline is suitable for data transfer between AWS services or from on-premises at regular intervals. Also, storing data from thousands of sensors in Amazon S3 will incur additional charges.</li>\r\n\t<li><strong>Option D is incorrect</strong> as this will require separate software with Amazon EC2 instance to perform analysis of streaming data. This will incur additional costs.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon Kinesis Data Analytics, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-it-works.html\" target=\"_blank\">https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-it-works.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/kinesis/data-analytics/faqs/?nc=sn&amp;loc=6\" target=\"_blank\">https://aws.amazon.com/kinesis/data-analytics/faqs/?nc=sn&amp;loc=6</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124125,
            "question_id": 98704,
            "answers": [
              {
                "question_id": "98704",
                "choice": "<p>Capture the streaming data using Amazon Kinesis Data Streams. Use Kinesis Data Analytics for Apache Flink for the analysis of streaming data and store processed data in Amazon S3.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98704",
                "choice": "<p>Capture the streaming data using Amazon Data Pipeline. Use Kinesis Data Analytics for Apache Flink for analysis of streaming data and store processed data in Amazon S3.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98704",
                "choice": "<p>Capture the streaming data using Amazon Data Pipeline. Store the data in Amazon S3 and analyze the data using Amazon Athena. Store the analyzed data in different Amazon S3 buckets.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98704",
                "choice": "<p>Capture the streaming data using Amazon Kinesis Data Streams and send it to the Amazon EC2 instance. Use KCL libraries on the Amazon EC2 instance to analyze the data.&nbsp;Store the analyzed data in the Amazon S3 bucket.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98705,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A manufacturing company has deployed AWS Managed Microsoft AD for managing a large user base in the AWS cloud. The Security team is looking to capture AD controller events logs, such as failed login attempts or changes made to user groups. The captured logs should be analyzed in real-time, and a dashboard should be created depicting trends and insights of each event.</p>\r\n\r\n<p>How can a solution be designed for this requirement most efficiently?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>Amazon OpenSearch Service is a managed service for search and analytical engine use cases supporting OpenSearch and legacy AWS Elasticsearch. It can also be used to create visualizations based on the analyzed data and create a dashboard with data. For the above case, event logs of the Amazon Managed Microsoft AD can be captured using Amazon CloudWatch logs. AWS Lambda can be used to push these logs in real time to Amazon OpenSearch. In Amazon OpenSearch, logs will be analyzed, and a dashboard will be created based on log data.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as this will require additional services to be deployed, such as Amazon Kinesis Data Streams, Amazon Kinesis Data Analytics, Amazon Kinesis Firehose, and Amazon Quick Sight to set up the dashboard. This will incur additional costs and admin work.</li>\r\n\t<li><strong>Option C is incorrect</strong> as with Amazon Kinesis Firehose, data would be sent to Amazon OpenSearch service in near-real time and not in real-time. In real-time, data is sent to Amazon OpenSearch instantaneously while in near-real time, there will be some delay in sending data to Amazon OpenSearch.</li>\r\n\t<li><strong>Option D is incorrect</strong> as with Amazon Kinesis Firehose, data would be sent to Amazon Kinesis Data Analytics in near-real time and not in real-time.</li>\r\n</ul>\r\n\r\n<p>For more information on the analysis of events logs using Amazon OpenSearch service, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/modernizing-with-aws/analyze-active-directory-event-logs-using-amazon-opensearch/\" target=\"_blank\">https://aws.amazon.com/blogs/modernizing-with-aws/analyze-active-directory-event-logs-using-amazon-opensearch/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124126,
            "question_id": 98705,
            "answers": [
              {
                "question_id": "98705",
                "choice": "<p>Stream event logs from AD controllers to Amazon Kinesis Data Analytics using Amazon CloudWatch Logs and Amazon Kinesis Data Streams. Store the events analyzed in Amazon Kinesis Data Analytics in an Amazon S3 bucket using Amazon Kinesis Firehose. Use Amazon Quick Sight to create a dashboard for trends based on the data stored in Amazon S3.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98705",
                "choice": "<p>Stream event logs from AD controllers to Amazon OpenSearch Service using Amazon CloudWatch Logs and AWS Lambda. Analyze events in Amazon OpenSearch Service and create a visualization in the Amazon OpenSearch dashboard.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98705",
                "choice": "<p>Stream event logs from AD controllers to Amazon OpenSearch Service using Amazon CloudWatch Logs and Amazon Kinesis Firehose. Analyze events in Amazon OpenSearch Service and create a visualization in the Amazon OpenSearch dashboard.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98705",
                "choice": "<p>Stream event logs from AD controllers to Amazon Kinesis Data Analytics using Amazon CloudWatch Logs and Amazon Kinesis Firehose. Analyze the events in Amazon Kinesis Data Analytics and store the results in Amazon Redshift using Amazon Kinesis Firehose. Use Amazon QuickSight to create a dashboard for trends based on the data stored in Amazon Redshift.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98706,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An IT firm is working on a new application in AWS Cloud. The application needs to capture video files from thousands of smart home devices installed at various locations. Real-time analysis should be performed on the files received from the devices without any changes to the video files, and alerts should be sent to the home users app if any picture matches the video files. All the video files need to be discarded post-analysis. The team is looking for a high-performance scalable solution that can be set up with the least effort.</p>\r\n\r\n<p>What solution can be proposed for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>Amazon Rekognition is a fully managed scalable service for the analysis of images and video files. Amazon Kinesis Video Streams is a secure service to capture streaming videos from various sources and sends them to AWS.</p>\r\n\r\n<p>In the above cases, video files from thousands of smart home devices can be securely captured with Amazon Kinesis Video Streams. Once files are in the Amazon Kinesis Video Streams, it can notify Amazon Recognition to perform real-time analysis on the video files. Once processing is done as per customer requirements to match the picture or object of interest in the files, it can send a notification to the end user. With both Amazon Kinesis Video Streams and Amazon Rekognition, there is no need to build or manage any infrastructure, and it can scale up or down based on the demands. With the support of real-time analysis, there is no need to store these video files in any storage service.&nbsp;</p>\r\n\r\n<p>Typical Deployment of video streaming application using Amazon Kinesis Video Streams and Amazon recognition.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-7.png\" style=\"height:319px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as Amazon Rekognition can directly consume data from Amazon Kinesis Video Streams. There is no need to store data in Amazon DynamoDB.</li>\r\n\t<li><strong>Option B is incorrect</strong> as Since there is no need to transform the data or store the data for future requirements, streaming video files to Amazon Kinesis Video streams is a better option than Amazon Kinesis Firehose.</li>\r\n\t<li><strong>Option D is incorrect</strong> as this will require additional efforts to set up Amazon Kinesis Data Analytics, AWS EventBridge, and Amazon SNS.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon Rekognition and Amazon Kinesis Video Streams, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rekognition/connected-home/\" target=\"_blank\">https://aws.amazon.com/rekognition/connected-home/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/rekognition/media-analysis/?nc=sn&amp;loc=2&amp;dn=1\" target=\"_blank\">https://aws.amazon.com/rekognition/media-analysis/?nc=sn&amp;loc=2&amp;dn=1</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/kinesis/video-streams/features/?nc=sn&amp;loc=2\" target=\"_blank\">https://aws.amazon.com/kinesis/video-streams/features/?nc=sn&amp;loc=2</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124127,
            "question_id": 98706,
            "answers": [
              {
                "question_id": "98706",
                "choice": "<p>Capture the video files using Amazon Kinesis Video Streams. Store the data in Amazon DynamoDB. Use Amazon Rekognition to perform analysis on the video files and send an alert to the smart home app.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98706",
                "choice": "<p>Capture the video files using Amazon Kinesis Firehose. Store the data in an Amazon S3 bucket. Use Amazon Rekognition to perform analysis on the video files and send an alert to the smart home app.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98706",
                "choice": "<p>Capture the video files using Amazon Kinesis Video Streams. Use Amazon Rekognition to perform analysis on the video files and send an alert to the smart home app.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98706",
                "choice": "<p>Capture the video files using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Analytics to perform analysis on the video files. Use AWS Event Bridge to notify Amazon SNS which will send an alert to the smart home app.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98707,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An engineering firm is looking for storing and analyzing the industrial telemetry from thousands of pieces of equipments spread across multiple factories. They have a container-based application with a third-party database at an on-premises location which they want to migrate to AWS Cloud. They are looking for a serverless option for this application without provisioning any infrastructure. There is no requirement to support any open-source API.&nbsp; The firm is looking for a scalable and serverless database to store millions of data points collected from all the equipment in the AWS cloud. These data should be analyzed on a daily basis and provide insight into equipment health.</p>\r\n\r\n<p>How can a solution be designed for this requirement?&nbsp; &nbsp;&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>Amazon ECS is a fully managed orchestration service that can be used to deploy, manage and scale containerized applications. Amazon Timestream is a fully managed scalable time series database which can store and analyze trillions of time series data points. With the Fargate launch type, there is no need to provision Amazon EC2 instances for the containers. Based on CPU requirements, AWS runs containers. For scalable serverless time-series databases, Amazon Timestream is an ideal option. It can process trillions of queries quickly without any performance impact. Amazon Kinesis Data Streams and Amazon Kinesis Data Analytics can be used to stream data to the Amazon Timestream. For performing virtualization of the processed data, Amazon QuickSight is a suitable option.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as the firm is not looking for containerized applications to support open-source API. Amazon EKS is not an ideal option.</li>\r\n\t<li><strong>Option B is incorrect</strong> as for deploying applications, the firm is not looking to provision any infrastructure. Amazon ECS with EC2 launch type is not an ideal option. Amazon Timestream is a better option than using Amazon Aurora serverless for storing and analyzing trillions of data points from thousands of equipment.&nbsp;Amazon Aurora Serverless is not a time-series database.</li>\r\n\t<li><strong>Option C is incorrect</strong> as the firm is not looking for containerized applications to support open-source API. Amazon EKS is not an ideal option. Amazon Timestream is a better option&nbsp;than using Amazon Aurora serverless for storing and analyzing trillions of data points from thousands of equipment. Amazon Aurora Serverless is not a time-series database.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon ECS and Amazon Timestream, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html\" target=\"_blank\">https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/ecs/\" target=\"_blank\">https://aws.amazon.com/ecs/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/\" target=\"_blank\">https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124128,
            "question_id": 98707,
            "answers": [
              {
                "question_id": "98707",
                "choice": "<p>Deploy containerized applications using Amazon EKS. Stream data in Amazon Timestream using Amazon Kinesis Data Streams and Amazon Kinesis Data Analytics. Analyze data in Amazon Timestream and virtualize using Amazon QuickSight.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98707",
                "choice": "<p>Deploy containerized application using Amazon ECS with EC2 launch type. Stream data in Amazon S3 using Amazon Kinesis Data Streams and Amazon Kinesis Data Analytics. Analyze data using Amazon Aurora Serverless and virtualize using Amazon QuickSight.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98707",
                "choice": "<p>Deploy containerized applications using Amazon EKS. Stream data in Amazon S3 using Amazon Kinesis Data Streams and Amazon Kinesis Data Analytics. Analyze data using Amazon Aurora Serverless and virtualize using Amazon QuickSight.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98707",
                "choice": "<p>Deploy containerized application using Amazon ECS with Fargate launch type. Stream data in Amazon Timestream using Amazon Kinesis Data Streams. Analyze data in Amazon Timestream and virtualize using Amazon QuickSight.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98708,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An online retail company is working on an order-processing application using Amazon API Gateway and AWS Lambda. AWS Step functions will be used to coordinate between various components within the application. Some tasks for this application are long-running non-idempotent tasks such as payment processing, while some tasks are high-volume idempotent tasks like sending payment notifications to the customers. The company is looking to create workflows with AWS Step Functions for this requirement in a scalable, cost-effective way.</p>\r\n\r\n<p>How can the workflows be designed for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>AWS Step Functions supports three types of workflows,</p>\r\n\r\n<p>1) Standard Workflows: These are suitable for long-running tasks with exactly-once workflow execution. Pricing for this workflow is based on the number of state transitions. These are suited for non-idempotent workflows such as payment processing or starting an Amazon EMR cluster.</p>\r\n\r\n<p>2) Synchronous Express Workflows: These are suitable for tasks to be completed within 5 minutes. This supports at-most-once workflow execution. Pricing is based on the number of executions run, the duration of each execution, and the memory consumed by each execution. These workflows wait till the execution is completed and then returns the result. These are suitable for parallel tasks, handling errors, or orchestrating microservices.</p>\r\n\r\n<p>3) Asynchronous Express Workflows: These are suitable for tasks to be completed within 5 minutes. This supports at-least-once workflow execution. Pricing is based on the number of executions run, the duration of each execution, and the memory consumed by each execution. These workflows do not wait till the execution is completed. These are suitable for workflows for which immediate response is not required, such as messaging or sending notifications.</p>\r\n\r\n<p>Standard Workflows can be used in the above case for long-running non-idempotent tasks such as payment processing. While for short-duration idempotent tasks such as sending payment notifications, Asynchronous express workflows can be used.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as Standard Workflows are suitable for long-running non-idempotent workflows. At the same time, Asynchronous workflows are suitable for short-duration idempotent workflows.</li>\r\n\t<li><strong>Option C is incorrect</strong> as using Standard workflows for the short duration idempotent tasks will incur additional costs. For non-idempotent workflows, Standard workflows are suitable rather than Synchronous express workflows.</li>\r\n\t<li><strong>Option D is incorrect</strong> as Standard Workflows are suitable for long-running non-idempotent workflows, not Asynchronous express workflows.</li>\r\n</ul>\r\n\r\n<p>For more information on workflows with AWS Step Functions, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html\" target=\"_blank\">https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/express-at-least-once-execution.html\" target=\"_blank\">https://docs.aws.amazon.com/step-functions/latest/dg/express-at-least-once-execution.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124129,
            "question_id": 98708,
            "answers": [
              {
                "question_id": "98708",
                "choice": "<p>For non-idempotent tasks, use Standard workflows; for idempotent tasks, use Asynchronous Express workflows.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98708",
                "choice": "<p>For non-idempotent tasks, use Asynchronous Express workflows; for idempotent tasks, use Standard workflows.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98708",
                "choice": "<p>For non-idempotent tasks, use Synchronous Express workflows; for idempotent tasks, use Standard workflows.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98708",
                "choice": "<p>For non-idempotent tasks, use Asynchronous Express workflows; for idempotent tasks, use Synchronous workflows.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98709,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A financial company has a large number of Amazon S3 buckets created. Some of these S3 buckets are used by internal company workers, while others are used by external clients to store financial data. For annual audit purposes, the Audit Team is looking for a list of Amazon S3 buckets that are shared with external clients and have any sensitive data stored in those buckets.</p>\r\n\r\n<p>Which actions can be initiated to get this data in the most efficient way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>AWS IAM Access Analyzer can be used to determine AWS resources shared with external entities. Amazon Macie can be used to evaluate data stored in the Amazon S3 bucket to discover any sensitive data. These findings can be saved for further remediations.</p>\r\n\r\n<p>In the above case, to determine Amazon S3 buckets shared with external entities, AWS IAM Access Analyzer can be used to discover any sensitive data stored in these buckets; Amazon Macie is the appropriate service.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as AWS IAM Access advisor can be used to determine permissions granted to IAM users and when the user accessed AWS resources. It cannot be used to determine Amazon S3 buckets that are shared with external entities. Amazon Detective can be used to analyze and investigate potential security issues. It does not detect sensitive data stored in an Amazon S3 bucket.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS IAM Access advisor can be used to determine permissions granted to IAM users and when the user accessed AWS resources. It cannot be used to determine Amazon S3 buckets that are shared with external entities. Amazon GuardDuty is an intelligent threat detection service that can continuously monitor AWS accounts and workloads. It does not detect sensitive data stored in an Amazon S3 bucket.</li>\r\n\t<li><strong>Option D is incorrect</strong> as Amazon Inspector can be used with an Amazon EC2 instance for discovering software vulnerabilities. It does not detect sensitive data stored in an Amazon S3 bucket.</li>\r\n</ul>\r\n\r\n<p>For more information on the IAM Access analyzer with Amazon Macie, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/correlate-iam-access-analyzer-findings-with-amazon-macie/\" target=\"_blank\">https://aws.amazon.com/blogs/security/correlate-iam-access-analyzer-findings-with-amazon-macie/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124130,
            "question_id": 98709,
            "answers": [
              {
                "question_id": "98709",
                "choice": "<p>Use AWS IAM Access Advisor to determine Amazon S3 buckets shared with external entities. Use Amazon Detective to detect any sensitive data stored in these buckets.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98709",
                "choice": "<p>Use AWS IAM Access Analyzer to determine Amazon S3 buckets shared with external entities. Use Amazon Macie to detect any sensitive data stored in these buckets.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98709",
                "choice": "<p>Use AWS IAM Access Advisor to determine Amazon S3 buckets shared with external entities. Use Amazon GuardDuty to detect any sensitive data stored in these buckets.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98709",
                "choice": "<p>Use AWS IAM Access Analyzer to determine Amazon S3 buckets shared with external entities. Use Amazon Inspector to detect any sensitive data stored in these buckets.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98710,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An IT multinational company has created AWS Organizations for managing multiple accounts. AWS Security Hub is integrated with AWS Organizations. Recently this company has merged with another IT company that also hosts resources in AWS Cloud. The merged entity will have separate AWS Organizations, but the Security Head wants to consolidate accounts from both these AWS Organizations under a single Security Hub administrator account.</p>\r\n\r\n<p>What actions can be initiated with the least manual effort?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>AWS Security Hub can be integrated with AWS Organizations. AWS Organizations management account designates which member can be a Security Hub administrator account.</p>\r\n\r\n<p>This designated account has the permission to view security findings for all the member accounts in the Organizations. There are two scenarios while adding member accounts part of AWS Organizations in Security Hub,</p>\r\n\r\n<ol>\r\n\t<li>Member accounts that are part of the same AWS Organizations can be added to AWS Security Hub with a manual or automatic process.</li>\r\n\t<li>For adding member accounts that are part of different AWS Organizations, a manual process needs to be initiated to invite those member accounts. These invitations must be sent from the Security Hub administrator account.</li>\r\n</ol>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as Invite should be sent from the Security Hub administrator account, not from the AWS Organizations management account.</li>\r\n\t<li><strong>Option B is incorrect</strong> as Invite should be sent from the Security Hub administrator account, not from the AWS Organizations management account.</li>\r\n\t<li><strong>Option D is incorrect</strong> as Automatic enablement is useful for new members joining the existing AWS Organizations. In the above case, where member accounts are part of different AWS Organizations automatic enablement won&rsquo;t work.</li>\r\n</ul>\r\n\r\n<p>For more information on managing members by invitation for AWS Security Hub, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/account-management-manual.html\" target=\"_blank\">https://docs.aws.amazon.com/securityhub/latest/userguide/account-management-manual.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124131,
            "question_id": 98710,
            "answers": [
              {
                "question_id": "98710",
                "choice": "<p>Send an invite from the management account of the AWS Organizations which has member accounts to be consolidated with AWS Security Hub.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98710",
                "choice": "<p>Send an invite from the management account of the AWS Organizations in which Security Hub is integrated.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98710",
                "choice": "<p>Send an invite from a Security Hub administrator account to the member accounts belonging to different AWS Organizations.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98710",
                "choice": "<p>Make all members&#39; accounts to be part of both AWS Organizations. Turn on automatic enablement on the Security Hub to consolidate all member accounts in both AWS Organizations to be under a single Security Hub administrator account.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98711,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A message-broking application using WebSocket protocol is deployed at on-premises.</p>\r\n\r\n<p>The company plans to migrate this application to AWS Cloud infrastructure without making any changes in the application code. The primary purpose for application migration to AWS Cloud is to reduce operational overhead and minimize cost. The proposed setup should be scalable and should integrate with the Amazon S3 bucket which will be used for storing messages. Which solution will meet these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>Amazon MQ provides a fully managed service for message-broker applications. It supports protocols such as JMS, NMS, AMQP 1.0 and 0.9.1, STOMP, MQTT, and WebSocket. It&#39;s best suited for deploying message brokers on the AWS cloud with reduced operational overhead and minimizing cost.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect.</strong>&nbsp;Amazon SQS can provide a reliable and high-performance message broker. Since the company is not looking for any changes in the application code, this is not the correct solution.</li>\r\n\t<li><strong>Option B is incorrect.</strong>&nbsp;Amazon SQS can provide a reliable and high-performance message broker. Since the company is not looking for any changes in the application code, this is not the correct solution.</li>\r\n\t<li><strong>Option C is incorrect</strong> because it&#39;s required to reduce operational overhead and minimize cost. Deploying applications on Amazon EC2 instance with RabbitMQ is not the best option. Using Amazon EC2 instances with RabbitMQ will provide more control but will increase operational overhead.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon MQ, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/amazon-mq/features/\" target=\"_blank\">https://aws.amazon.com/amazon-mq/features/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/amazon-mq/faqs/\" target=\"_blank\">https://aws.amazon.com/amazon-mq/faqs/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124132,
            "question_id": 98711,
            "answers": [
              {
                "question_id": "98711",
                "choice": "<p>Deploy the application in AWS Cloud using Amazon SQS FIFO queues along with Amazon EC2 instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98711",
                "choice": "<p>Deploy the application in AWS Cloud using Amazon SQS Standard queues along with Amazon EC2 instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98711",
                "choice": "<p>Deploy the application in AWS Cloud using RabbitMQ on Amazon EC2 instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98711",
                "choice": "<p>Deploy the application in the AWS cloud using Amazon MQ along with Amazon EC2 instance.</p>",
                "feedback": "",
                "correct": 1
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98712,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>An engineering firm is looking to analyze data stored in on-premises locations. The application from&nbsp;which data needs to be analyzed supports only the SFTP protocol to copy the data files. A large amount of data is expected to be analyzed every first week of the month. Data copy and analysis should support this varying size of data without any manual intervention and in a cost-effective manner. Hybrid connectivity using AWS Direct Connect 10 Gig links is already implemented.</p>\n\n<p>What solution can be designed to facilitate this data transfer?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\n\n<p>AWS Transfer Family is a fully managed service for transferring data files over SFTP, FTPS, FTP, and AS2 protocol to and from AWS Storage service. It supports dynamic workloads enabling users to avoid any manual changes when there is a spike in data transfer. Once application data is transferred from on-premises to the Amazon S3 bucket using the AWS Transfer family, Amazon Athena can perform analysis of the data directly from the Amazon S3 bucket. Amazon Athena is a scalable, fully managed service that can analyze petabyte-scale data.</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-13.png\" style=\"height:281px; width:750px\" /></p>\n\n<ul>\n\t<li><strong>Option B is incorrect</strong> as AWS DataSync is not suitable for moving data with SFTP protocol.</li>\n\t<li><strong>Option C is incorrect</strong> as AWS Storage Gateway does not support SFTP protocol for data transfer. Using third-party tools with Amazon EC2 instance will incur additional costs.</li>\n\t<li><strong>Option D is incorrect</strong> as AWS DataSync is not suitable for moving data with SFTP protocol. Also, storing data in Amazon EFS will incur huge costs.</li>\n</ul>\n\n<p>For more information on using the AWS Transfer family, refer to the following URL,</p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/aws-transfer-family/features/?nc=sn&amp;loc=2&amp;dn=1\" target=\"_blank\">https://aws.amazon.com/aws-transfer-family/features/?nc=sn&amp;loc=2&amp;dn=1</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124133,
            "question_id": 98712,
            "answers": [
              {
                "question_id": "98712",
                "choice": "<p>Use AWS Transfer family to store files from an on-premises location to Amazon S3. Use Amazon Athena to perform analysis on the data stored in the Amazon S3 bucket.</p>",
                "feedback": "",
                "correct": "1"
              },
              {
                "question_id": "98712",
                "choice": "<p>Use AWS Data Sync to store files from an on-premises location to Amazon S3. Use Amazon Athena to perform analysis on the data stored in the Amazon S3 bucket.</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98712",
                "choice": "<p>Use AWS Storage Gateway to transfer data from on-premises to Amazon EBS. Use third-party tools deployed on Amazon EC2 instances to analyze data stored in Amazon EBS.</p>",
                "feedback": "",
                "correct": "0"
              },
              {
                "question_id": "98712",
                "choice": "<p>Use AWS Data Sync to store files from an on-premises location to Amazon EFS. Use Amazon Athena to perform analysis on the data stored in the Amazon EFS bucket.</p>",
                "feedback": "",
                "correct": "0"
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98713,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A new web application is designed by a developer team using Amazon API Gateway and AWS Lambda. REST APIs will be used for this purpose which will synchronously invoke the AWS Lambda function. The developer team is expecting a huge response to this application and looking for a secure solution for authenticating a large number of clients.&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n\r\n<p>Which solution can be designed for this requirement in the most effective way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>Amazon Cognito user pool can be used to control who can access REST APIs in the API Gateway. With this method,</p>\r\n\r\n<ol>\r\n\t<li>Clients sign up with a user pool.</li>\r\n\t<li>Once clients sign in with a user pool, they obtain an identity token.</li>\r\n\t<li>Clients pass this token with API Gateway to get access to the REST APIs created in the API Gateway.</li>\r\n</ol>\r\n\r\n<p>This method is best suited when there is a need to provide access to a large number of global users.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-14.png\" style=\"height:283px; width:404px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as request parameter-based Lambda authorizers are supported only for WebSocket API and not REST APIs.</li>\r\n\t<li><strong>Option C is incorrect</strong> because there would be a large number of clients accessing these APIs, and using resource policies will not be an efficient way to control access.</li>\r\n\t<li><strong>Option D is incorrect</strong> as IAM-based policies are best suited for controlling access to API from within the AWS Infrastructure. These are not suited to control access for external clients.</li>\r\n</ul>\r\n\r\n<p>For more information on authentication methods with API Gateway, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124134,
            "question_id": 98713,
            "answers": [
              {
                "question_id": "98713",
                "choice": "<p>Create a request parameter-based Lambda authorizer. Configure API Gateway to call Lambda authorizer to authenticate clients making a request using REST API.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98713",
                "choice": "<p>Create users in Amazon Cognito user pools. Create an API Gateway authorizer with this user pool and enable the authorizer on the REST API.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98713",
                "choice": "<p>Create resource policies matching specific users. Attach this resource policy to Amazon API Gateway which will control access to the APIs.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98713",
                "choice": "<p>Create an IAM user policy to invoke API. Attach this policy to Amazon API Gateway which will control access to the APIs.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98714,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>A Java-based web application is migrated from On-premises to AWS. Amazon Elastic Beanstalk is used to deploy applications using ALB, Amazon EC2 instances in multiple AZ, and Amazon DynamoDB in provisioned capacity mode. Auto-scaling groups are created with general-purpose Amazon EC2 instances. Post-migration, customers observe a delayed response from web applications during busy hours. Further checks observed that the application performs a non-critical zip archive process causing load on the Amazon EC2 instance.</p>\r\n\r\n<p>How can a solution be redesigned in a cost-effective way to get a better response from the web application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>A worker environment can be deployed with Amazon Elastic Beanstalk for long-running application tasks. Long-running jobs can be sent to the Amazon SQS queue and are further processed by Amazon EC2 instances in the worker environment tier.</p>\r\n\r\n<p>In the above case, an application deployed on an Amazon EC2 instance is getting overwhelmed due to an additional non-critical process of generating zip archives. To remediate this issue in a cost-effective way, the zip process can be decoupled to a separate tier, which in turn can increase the performance of the application during busy hours.</p>\r\n\r\n<p>Diagram showing typical deployment using a web server and worker environment tiers with Amazon Elastic Beanstalk.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-15.png\" style=\"height:471px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as the ZIP archive is generally a compute-intensive process. Deploying a memory-intensive Amazon EC2 instance won&rsquo;t be any value addition. Also, using memory-intensive Amazon EC2 instances will be costly. The application can be implemented by decoupling the zip process and decreasing the load on the Amazon EC2 instance.</li>\r\n\t<li><strong>Option C is incorrect</strong> as Amazon EC2 instances with Elastic Fabric Adaptor are more suitable for applications requiring high-level inter-node communications. In the above case, application response is getting affected due to additional non-critical processes running on the Amazon EC2 instance.&nbsp;</li>\r\n\t<li><strong>Option D is incorrect</strong> as since the issue is with overloading of the application due to processing of non-critical tasks of the zip archive, changing capacity mode at the database layer won&rsquo;t help and in turn will be costly.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon Elastic Beanstalk environments, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124135,
            "question_id": 98714,
            "answers": [
              {
                "question_id": "98714",
                "choice": "<p>Redeploy the application using Elastic Beanstalk worker environments with Amazon SQS and Amazon EC2 instance for the zip archive process. For the front-end, use the web server environment of ALB, Amazon EC2 instance, and Amazon DynamoDB.</p>",
                "feedback": "",
                "correct": 1
              },
              {
                "question_id": "98714",
                "choice": "<p>Redeploy Auto Scaling groups with memory-intensive Amazon EC2 instance instead of general-purpose Amazon EC2 instance.</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98714",
                "choice": "<p>Redeploy application on Amazon EC2 instance with Elastic fabric Adaptor (EFA).</p>",
                "feedback": "",
                "correct": 0
              },
              {
                "question_id": "98714",
                "choice": "<p>Redeploy the database layer with on-demand capacity mode instead of the provisioned capacity mode of the Amazon DynamoDB.</p>",
                "feedback": "",
                "correct": 0
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98861,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A start-up firm is developing a new three-tier application which collects sensor data from thousands of IoT devices. These small-sized data should be written to the database in a fast efficient way. Data should be stored for a long term for performing analytical queries quickly. Application and web layer solution is already designed. The firm is looking for a database that can provide optimum reads and writes to handle high workloads.</p>\r\n\r\n<p>What solution can be designed for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Amazon Timestream is a serverless time series scalable database which can be used to store and analyze events. It is less costly than using relational databases for the same purpose. Amazon Timestream has two tiers of storage: a memory store and a magnetic store. Data in both the storage tiers are replicated across multiple Availability zones in a region. Based on retention policies, data can be moved from the memory store to the magnetic store. Memory storage is suitable for high throughput writes and fast point-in-time queries. Magnetic storage is suitable for low throughput writes and fast analytical queries along with long-term data storage.</p>\r\n\r\n<p>Following diagram shows storage with Amazon Timestream,</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-1.png\" style=\"height:646px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect </strong>as using Amazon RDS for the time series data will be more costly as compared to the Amazon Timestream.</li>\r\n\t<li><strong>Option C is incorrect </strong>as using Amazon RDS for the time series data will be more costly as compared to the Amazon Timestream.</li>\r\n\t<li><strong>Option D is incorrect </strong>as with Amazon Timestream, for high throughput data writes, a memory store must be used while for fast analytical queries, using a magnetic store is the best option.</li>\r\n</ul>\r\n\r\n<p>For more information on storage with Amazon Timestream, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html\" target=\"_blank\">https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/timestream/latest/developerguide/architecture.html\" target=\"_blank\">https://docs.aws.amazon.com/timestream/latest/developerguide/architecture.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124153,
            "question_id": 98861,
            "answers": [
              {
                "choice": "<p>For fast analytic queries, use magnetic store while for high throughput data writes use memory store with Amazon Timestream</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>For fast analytic queries, use Provisioned IOPS SSD while for high throughput data writes use General Purpose SSD with Amazon RDS</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>For fast analytic queries, use General Purpose SSD while for high throughput data writes use Provisioned IOPS SSD with Amazon RDS</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>For fast analytic queries, use memory store while for high throughput data writes use magnetic store with Amazon Timestream</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98862,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed a legacy web application on an instance store-backed Amazon EC2 Linux instance. After the successful deployment in the us-west-1 region, the company is looking to replicate this deployment in other regions for quick deployment. The operations team is looking for a process to create an AMI from the existing Amazon EC2 instance in a cost-effective and efficient way.</p>\r\n\r\n<p>Which steps can a solution architect initiate to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>AMI can be created for instance store-backed Linux instance with the following steps,</p>\r\n\r\n<ol>\r\n\t<li>Upload credentials to the instance: This step ensures that AMI is accessed only by the user and the Amazon EC2 instance.</li>\r\n\t<li>Prepare the bundle using the command <em>ec2-bundle-vol</em>: This step creates compressed encrypted files in a /tmp directory. If some files need to be excluded from the bundle, then those files can be excluded with command &ldquo;-e option&rdquo;.</li>\r\n\t<li>Upload bundle to Amazon S3 bucket using the command <em>ec2-upload-bundle</em>:&nbsp; This command uploads the bundle to the Amazon S3 bucket.</li>\r\n\t<li>Register AMI using the <em>register-image</em> command: This step can be used to register an AMI in a specific region.</li>\r\n</ol>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as for creating a bundle with Amazon EC2 instance, the correct command is <em>ec2-bundle-vol </em>and<em> not ec2-bundle-vol. register-volume</em> is an incorrect command to register an AMI.</li>\r\n\t<li><strong>Option C is incorrect</strong> as the Bundle should be uploaded in the Amazon S3 bucket and not in Amazon EBS volumes as it would be more costly. <em>register-instance</em> is an incorrect command to register an AMI.</li>\r\n\t<li><strong>Option D is incorrect</strong> as for creating a bundle with Amazon EC2 instance, the correct command is <em>ec2-bundle-vol </em>and<em> not ec2-bundle-vol. </em>Bundles should be uploaded in the Amazon S3 bucket and not in Amazon EBS volumes as it would be more costly. <em>imagebuilder</em> is an incorrect command to register an AMI.</li>\r\n</ul>\r\n\r\n<p>For more information on creating an AMI from instance stored backed Linux instance, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html#amazon_linux_instructions\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html#amazon_linux_instructions</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124156,
            "question_id": 98862,
            "answers": [
              {
                "choice": "<p>1. Upload credentials to the instance</p>\r\n\r\n<p>2. Prepare the bundle using the command <em>ec2-bundle-image</em></p>\r\n\r\n<p>3. Upload bundle to Amazon S3 bucket using the command <em>ec2-upload-bundle</em></p>\r\n\r\n<p>4. Register AMI using the <em>register-volume</em> command</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>1. Upload credentials to the instance</p>\r\n\r\n<p>2. Prepare the bundle using the command <em>ec2-bundle-vol</em></p>\r\n\r\n<p>3. Upload bundle to Amazon S3 bucket using the command <em>ec2-upload-bundle</em></p>\r\n\r\n<p>4. Register AMI using the <em>register-image</em> command</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>1. Upload credentials to the instance</p>\r\n\r\n<p>2. Prepare the bundle using the command <em>ec2-bundle-vol</em></p>\r\n\r\n<p>3. Upload bundle to Amazon EBS volume using the command <em>ec2-upload-bundle</em></p>\r\n\r\n<p>4. Register AMI using the <em>register-instance</em> command</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>1. Upload credentials to the instance</p>\r\n\r\n<p>2. Prepare the bundle using the command <em>ec2-bundle-image</em></p>\r\n\r\n<p>3. Upload bundle to Amazon EBS volume using the command <em>ec2-upload-bundle</em></p>\r\n\r\n<p>4. Register AMI using the <em>imagebuilder</em> command</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98863,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed a web application in AWS cloud with Amazon EC2 instance and Amazon RDS. Recently there was an outage reported due to Amazon RDS DB instances running out of storage. The operation team restored the DB instance, but the team&rsquo;s head wants you to work on a solution to proactively monitor the DB instance storage and send a notification when storage space is low. Also, since the workload is unpredictable, the management team wants to have RDS instance storage adapt to additional storage requirements without any manual intervention.</p>\r\n\r\n<p>What solution can be implemented for these requirements? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B and E</strong></p>\r\n\r\n<p>Amazon RDS DB instance&rsquo;s available storage space can be monitored by using the FreeStorageSpace metric in Amazon CloudWatch. To automatically scale up the storage space of the Amazon RDS DB instance, storage autoscaling can be enabled on a DB instance. This feature is suitable for unpredictable workloads which need to have storage space on DB instances to be adjusted as per the demands. Once storage auto-scaling is enabled, Amazon RDS starts modification of the storage space when any of the following conditions are met,</p>\r\n\r\n<ol>\r\n\t<li>Available free storage space is less than 10% of the allocated space.</li>\r\n\t<li>Low-storage conditions last for at least five minutes.</li>\r\n\t<li>At least six hours have passed since the last storage modifications or storage optimization on the DB instance is completed.</li>\r\n</ol>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as using an Amazon EBS instance will not help to resolve storage full issues automatically.</li>\r\n\t<li><strong>Option C is incorrect</strong> as using Provisioned IOPS SSD storage will help to get better performance but will not resolve &lsquo;storage full&rsquo; issues automatically.</li>\r\n\t<li><strong>Option D is incorrect</strong> as the metric to be used with Amazon CloudWatch is FreeStorageSpace and not FreeLocalStorage. FreeLocalStorage is used to determine local storage available for Aurora MySQL and Aurora PostgreSQL.</li>\r\n</ul>\r\n\r\n<p>For more information on troubleshooting Amazon RDS storage-full issues., refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/rds-out-of-storage/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/rds-out-of-storage/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/storage-full-rds-cloudwatch-alarm/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/storage-full-rds-cloudwatch-alarm/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124157,
            "question_id": 98863,
            "answers": [
              {
                "choice": "<p>Deploy Amazon RDS on Amazon EBS optimized instance</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Monitor available DB instance storage space by using the FreeStorageSpace metric in Amazon CloudWatch and create a notification if threshold values are exceeded</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Provisioned IOPS SSD storage type with Amazon RDS DB instance</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Monitor available DB instance storage space by using the FreeLocalStorage metric in Amazon CloudWatch and create a notification if threshold values are exceeded</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Enable Storage autoscaling on an Amazon RDS DB instance</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98864,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A media firm is using Amazon S3 buckets to store all their media archives. Recently they have enabled encryptions with SSE-KMS on new S3 buckets containing millions of objects created by all users in the account. The finance team is observing a huge surge in cost since the encryption is enabled for the Amazon S3 bucket and they have engaged you to work on a solution to save cost and with the least admin overhead.</p>\r\n\r\n<p>What solution can be designed in a most cost-effective way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>When a large number of objects stored in an Amazon S3 bucket are encrypted using SSE-KMS, Amazon S3 uses an individual KMS data key for each object. This leads to large volumes of requests to AWS KMS from the Amazon S3 bucket which results in higher costs.<br />\r\nTo reduce this cost, Amazon S3 bucket keys can be used along with SSE-KMS. When Amazon S3 bucket keys are configured with the bucket, AWS generates short-lived bucket keys from AWS KMS which are stored locally in the bucket.</p>\r\n\r\n<p>For all the objects in the bucket, instead of requesting a data key from AWS KMS, Amazon S3 will use a bucket key. This reduces the traffic between Amazon S3 and AWS KMS and in turn decreases costs significantly.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-4.png\" style=\"height:477px; width:669px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as this will import the key material used for KMS keys from external entities. This will not help to save costs.</li>\r\n\t<li><strong>Option B is incorrect</strong> as with keys stored in the application, encryption and decryption is managed by the clients. This will require additional admin work from the client end.</li>\r\n\t<li><strong>Option C is incorrect</strong> as configuring server-side encryption with customer-provided keys will require clients to manage encryption of the keys which will be used for encrypting/decrypting of data before it is send to Amazon S3. This will require additional admin work from the client end.</li>\r\n</ul>\r\n\r\n<p>For more information on using Amazon S3 bucket keys, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124158,
            "question_id": 98864,
            "answers": [
              {
                "choice": "<p>Configure key material origin values as External for the KMS keys</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure client-side encryption using keys stored within the application</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure server-side encryption with customer-provided keys (SSE-C)</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure S3 bucket keys for SSE-KMS</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98865,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company has deployed a new critical application using Amazon RDS for SQL server as a database in the us-east-1 region. The company is planning to deploy additional databases in a separate region to mitigate against any data loss due to outages in a region. The primary objective of this deployment is to provide the lowest RTO and RPO. The company is looking for cost-effective options that would replicate existing databases to different regions enabling them to restore DB instances quickly and efficiently.&nbsp;</p>\r\n\r\n<p>What architecture can be suggested to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Amazon RDS for SQL server supports managed disaster recovery (DR) using Amazon RDS cross-Region automated backups. This feature enables automated backups of RDS snapshots and Transaction logs in a different region. This helps to restore a new DB instance in different regions, quickly reducing RPO (Recovery Point Objective) and RTO (Recovery Time objective) to minutes.</p>\r\n\r\n<p>For critical databases, restoration can be done to a specific point in time within the backup retention period. DB instances can be restored only in case of disaster in the primary region and there is no need to have a DB instance running all the time in a different region. This option helps to reduce management overhead.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-5.png\" style=\"height:345px; width:675px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as for using AWS Backup for automated backups of the snapshot, configuration changes will be required to be done in AWS Backup. This will lead to ad-hoc admin work.</li>\r\n\t<li><strong>Option C is incorrect</strong> as this would result in additional cost for storing snapshots in Amazon S3 bucket as well as additional changes for configuring cross-region replication.</li>\r\n\t<li><strong>Option D is incorrect</strong> as appropriate Lambda functions need to be created for backup of snapshots across regions which will lead to ad-hoc admin work.</li>\r\n</ul>\r\n\r\n<p>For more information on managing disaster recovery with Amazon RDS, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/database/managed-disaster-recovery-with-amazon-rds-for-sql-server-using-cross-region-automated-backups/\" target=\"_blank\">https://aws.amazon.com/blogs/database/managed-disaster-recovery-with-amazon-rds-for-sql-server-using-cross-region-automated-backups/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124159,
            "question_id": 98865,
            "answers": [
              {
                "choice": "<p>Enable cross-region automated backup replication on the DB instance. Restore DB instances in different regions using this snapshot</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Create automated backups of snapshots in different regions using AWS Backup. Restore DB instances in different regions using this snapshot</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Export DB Snapshot data to Amazon S3. Use Cross-region replication With Amazon S3 to copy this snapshot to different regions. Restore DB instances in different regions using this snapshot</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Lambda function to create and copy a database snapshot to different regions. Restore DB instances in different regions using this snapshot</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98866,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A technological company is planning to deploy thousands of sensors in a city which will capture pollution-related data. The data from these sensors should be captured and stored effectively in the Amazon DynamoDB table for further analysis. The payload data from these sensors should be formatted and stored in a single database table.</p>\r\n\r\n<p>How can a solution be implemented for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>AWS IoT rules allow devices to interact with the AWS services. Rules are analyzed and actions are performed based on MQTT topic streams. Multiple tasks such as below can be performed by AWS IoT rules,</p>\r\n\r\n<ul>\r\n\t<li>Augment or filter data received from a device.</li>\r\n\t<li>Write data received from a device to an Amazon DynamoDB database.</li>\r\n\t<li>Save a file to Amazon S3.</li>\r\n\t<li>Send a push notification to all users using Amazon SNS.</li>\r\n\t<li>Publish data to an Amazon SQS queue.</li>\r\n</ul>\r\n\r\n<p>In the above case, the company wants to collect data from multiple sensors and store them in a single table of DynamoDB. This can be achieved by creating AWS IoT rules which will format the data from multiple sensors and store them in a single table.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because using IoT rules, message brokers can directly store data in the Amazon DynamoDB table. There is no need to invoke AWS Lambda functions to store data in the Amazon DynamoDB table.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS IoT FleetWise can be used to collect and transfer vehicle data in near real-time to the AWS Cloud. In the above case, there is no requirement for near real-time data collection from vehicles, but data is to be collected from stationary sensors and stored in the Amazon DynamoDB table.</li>\r\n\t<li><strong>Option D is incorrect</strong> because using IoT rules, message brokers can directly store data in the Amazon DynamoDB table. There is no need to store data in Amazon SQS and then invoke AWS Lambda functions to copy data in the Amazon DynamoDB table.</li>\r\n</ul>\r\n\r\n<p>For more information on creating AWS IoT rules for storing data in the Amazon DynamoDB table, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/iot/latest/developerguide/iot-ddb-rule.html\" target=\"_blank\">https://docs.aws.amazon.com/iot/latest/developerguide/iot-ddb-rule.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/dynamodb/iot/\" target=\"_blank\">https://aws.amazon.com/dynamodb/iot/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124160,
            "question_id": 98866,
            "answers": [
              {
                "choice": "<p>Enable AWS IoT Analytics on the sensor data. Use a message broker with MQTT protocol to invoke AWS Lambda functions to store the formatted data in the Amazon DynamoDB table</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create AWS IoT rules which will capture and send formatted data to the Amazon DynamoDB table</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Enable AWS IoT FleetWise on the sensor data and store formatted data in the Amazon DynamoDB table</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a message broker which will use the MQTT protocol to store sensor data in the Amazon SQS. Use AWS Lambda to read messages from Amazon SQS and copy the formatted data in the Amazon DynamoDB table</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98867,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A city traffic department is working on a new application which will capture continuous videos from major locations in a city and store it for future analysis. The captured videos should be compatible with an existing third-party player to view the video. Some users will also use mobile phone browsers to replay these videos.You as a AWS architect is assigned to design a solution to capture videos which should be viewed in third-party players or directly from mobile phone browsers.</p>\r\n\r\n<p>What solution can be designed to meet this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<p>Kinesis Video Streams is a fully managed video streaming service suitable for streaming many-to-one live videos. It helps to capture streaming videos for further analysis or storage or play with third-party players. It supports the following two APIs</p>\r\n\r\n<ol>\r\n\t<li>GetDASHStreamingSessionURL: This API retrieves a MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream which can be opened in the URL of the media player.</li>\r\n\t<li>GetHLSStreamingSessionURL: This API retrieves an HTTP Live Streaming (HLS) URL for the stream. This URL can be played in a media player or mobile phone browser.</li>\r\n</ol>\r\n\r\n<p>In the above case, to support streaming videos from thousands of devices and playing these videos in both the URL of the media player and mobile phone browser, GetHLSStreamingSessionURL API can be used.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as AWS Elemental MediaLive is a video processing service that can help to create high-quality streams which can be broadcast to TV or internet-connected devices. It is suitable to stream a live video to many users but not suitable for streaming multiple video streams into a single output as with Amazon Kinesis Video Streams.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\r\n\t<li><strong>Option B is incorrect</strong> as using GetDASHStreamingSessionURL API with Kinesis Video Streams, videos can be played in URL in the media player but not in the mobile phone browser.</li>\r\n\t<li><strong>Option D is incorrect</strong> as Amazon Elastic Transcoder is a media transcoding service in the cloud that can help to transcode media files from the source format into the format supported by the destination devices. It is not a suitable service to stream live videos.</li>\r\n</ul>\r\n\r\n<p>For more information on streaming live videos with Amazon Kinesis Video Streams, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html\" target=\"_blank\">https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/kinesis/video-streams/faqs/?nc=sn&amp;loc=5\" target=\"_blank\">https://aws.amazon.com/kinesis/video-streams/faqs/?nc=sn&amp;loc=5</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/iot/choose-the-right-aws-video-service-for-your-use-case/\" target=\"_blank\">https://aws.amazon.com/blogs/iot/choose-the-right-aws-video-service-for-your-use-case/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124161,
            "question_id": 98867,
            "answers": [
              {
                "choice": "<p>Use AWS Elemental MediaLive to get the streaming live video URL. Use the URL in a third-party player and mobile phone browser to stream the live video</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a streaming session using GetDASHStreamingSessionURL API with Kinesis Video Streams. Use the URL returned by this session in a third-party player and mobile phone browser to stream the live video</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a streaming session using GetHLSStreamingSessionURL API with Kinesis Video Streams. Use the URL returned by this session in a third-party player and mobile phone browser to stream the live video</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Elastic Transcoder to get the streaming live video URL. Use the URL in a third-party player and mobile phone browser to stream the live video</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98868,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A web application is deployed using Amazon EC2 instance and Network Load Balancer (NLB). To support financial transactions, end-to-end encryption is configured with TLS certificates deployed on Amazon EC2 instances. The Quality Assurance team is observing degradation in application performance. On further analysis, it is found that CPU Utilization of the Amazon EC2 instance is hitting more than 80% constantly. The IT head is looking for a solution that can provide a better application performance even when demand for this application surges.</p>\r\n\r\n<p>How can applications be redesigned for better performance with minimal changes in the existing setup?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>Network Load Balancer supports TLS (Transport Layer Security) traffic and sets up a connection with the target instance over TCP or TLS. Performing a compute intensive workload of encrypting and decrypting the traffic on Amazon EC2 instances, may lead to high CPU utilization and performance degradation.&nbsp; By configuring a TLS listener on NLB, encryption and decryption is handled by the NLB which can provide low latency and can handle high throughput traffic.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as using AWS CloudHSM will be costly and will not be efficient as customers who are using AWS CloudHSM will require to manage TLS certificates on AWS CloudHSM.</li>\r\n\t<li><strong>Option B is incorrect</strong> as this will require radical changes in application setup, with the additional configuration of Amazon CloudFront and AWS ACM.</li>\r\n\t<li><strong>Option C is incorrect</strong> as TLS renegotiations are not supported on NLB. This will not minimize load on the Amazon EC2 instance.</li>\r\n</ul>\r\n\r\n<p>For more information on TCP listeners on NLB, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-tls-termination-for-network-load-balancers/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124162,
            "question_id": 98868,
            "answers": [
              {
                "choice": "<p>Configure TLS offloading with TLS certificates deployed on AWS CloudHSM instead of Amazon EC2 instance</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure Amazon CloudFront infront of NLB. Amazon CloudFront will use TLS certificates stored in AWS Certificate Manager</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure TLS renegotiations between NLB and Amazon EC2 instance</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Configure TLS listener on Network Load Balancer using port 443</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98869,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The developer team has developed a new application with Amazon S3, Amazon Event Bridge and third-party API destinations. The application users store thousands of images in an Amazon S3 bucket. Amazon EventBridge routes Amazon S3 events to the external API endpoints. Due to high volumes, a considerable delay is observed in forwarding these events to the external API endpoints. The Operations Head is looking for storing the events which are not delivered so that separate processing of these events can be performed.</p>\r\n\r\n<p>Which of the following combination of actions can be suggested to avoid delay and ensure all events are stored durably?</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: A and&nbsp;E</strong></p>\r\n\r\n<p>Invocation is the event matching the rules and in turn forwarded to the target. After an invocation quota is reached in a region, Amazon EventBridge throttles the events and is sent to the target with a delay. The Invocation quota has a soft limit of 18,750 requests per second in the US west region. This soft limit varies in different regions and the latest count can be checked from AWS documentation.</p>\r\n\r\n<p>In the above case, due to high volumes, the invocation quota might result in a delay in forwarding events to the external API endpoint. To avoid reaching the quota limit, an invocation rate limit can be set for the destination. This will limit the surge in traffic and any traffic exceeding the limit will be queued in the EventBridge and forwarded later within the rate limit.</p>\r\n\r\n<p>To store any undelivered events, a dead letter queue needs to be created on the event bus and store the messages in Amazon SQS for further processing.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-9.png\" style=\"height:432px; width:720px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as connections are used with API destinations to define authorization parameters that are used to connect to the HTTP endpoint. Setting this limit will not impact the delay as the connections are not the cause of the delay.</li>\r\n\t<li><strong>Option C is incorrect </strong>as events need to be stored in the Amazon SQS and not in the Amazon SNS.</li>\r\n\t<li><strong>Option D is incorrect</strong> as API Destination limits are the number of external API endpoints to which Amazon EventBridge forwards the events. Setting this limit will not impact the delay as the external API endpoints are not the cause of the delay.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon EventBridge quotas, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html#eb-invocations-limits\" target=\"_blank\">https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html#eb-invocations-limits</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/\" target=\"_blank\">https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124163,
            "question_id": 98869,
            "answers": [
              {
                "choice": "<p>Set up an invocation time limit for the API destination</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a connection limit for the API destination</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a dead letter queue on the event bus and store the events in Amazon SNS for further processing</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Set up an API destination limit for the destination</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a dead letter queue on the event bus and store the events in Amazon SQS for further processing</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98870,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An engineering firm is using a web application deployed with AWS Elastic Beanstalk. For this application they have configured user pools with custom domains for Amazon Cognito. To comply with audit findings,the Operations Team is working on deleting all existing ACM certificates and updating them with new ones. While deleting some of the ACM certificates, they are getting an error as &quot;The certificate is in use (associated with other AWS resources) and cannot be deleted. Disassociate the certificate from each resource in the list and try again.&quot; They are seeking your consultation to resolve this ACM certification error.</p>\r\n\r\n<p>What suggestion can be provided for the requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer:&nbsp;B</strong></p>\r\n\r\n<p>To delete an ACM certificate, first all the associations of the certificate with AWS resources should be removed. When a custom domain is added to the Amazon Cognito user pool, a CloudFront distribution is created with which the ACM certificate is associated. This CloudFront distribution is owned by Amazon Cognito and not by the individual account. To remove this certificate associated with CloudFront distribution following two actions can be initiated,</p>\r\n\r\n<ol>\r\n\t<li>Delete the custom domain name for Amazon Cognito:&nbsp; This will delete the CloudFront distribution created by Amazon Cognito along with associated ACM certificates.</li>\r\n\t<li>Remove the association of the ACM certificate with the CloudFront distribution: By updating the ACM certificate associated with the custom domain of Amazon Cognito, the original ACM certificate can be deleted.</li>\r\n</ol>\r\n\r\n<ul>\r\n\t<li><strong>Options A, C&nbsp;and D are incorrect </strong>as with custom domains for Amazon Cognito, a CloudFront distribution is created to which the ACM certificate is associated, so the association should be removed from CloudFront, not with the Application Load balancer.</li>\r\n</ul>\r\n\r\n<p>For more information on the deletion of AWS ACM certificates, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-resources/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-resources/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html\" target=\"_blank\">https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124164,
            "question_id": 98870,
            "answers": [
              {
                "choice": "<p>Remove the association of the existing ACM certificate with the Application Load balancer by updating the ACM certificate associated with the custom domain of Amazon Cognito</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the association of the existing ACM certificate with the CloudFront distribution by updating the ACM certificate associated with the custom domain of Amazon Cognito</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the association of the existing ACM certificate with the API Gateway by updating the ACM certificate associated with the custom domain of Amazon Cognito</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Remove the association of the existing ACM certificate with the AWS Elastic Beanstalk by updating the ACM certificate associated with the custom domain of Amazon Cognito</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98871,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A trading consortium has created a private blockchain network using Amazon Managed Blockchain with Hyperledger Fabric framework. There are multiple AWS accounts as members of this network. VPC Private endpoints are created to enable all members access the resources. They have tied up with a new distributor which needs to be part of this network. Distributors should seamlessly join this network and access the Hyperledger Fabric resources.</p>\r\n\r\n<p>What combination of steps should a solution architect initiate to meet these requirements?&nbsp; (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: C and E</strong></p>\r\n\r\n<p>Amazon Managed Blockchain is a fully managed service that helps to easily join public networks or create and manage scalable private networks.&nbsp; It supports open-source frameworks such as Hyperledger Fabric and Ethereum.</p>\r\n\r\n<p>With Amazon Managed Blockchain network, each AWS account that is a member of the network has an equal ownership stake in all the resources. Voting rules for each member account are specified during network creation. For inviting a new member to be part of the blockchain network, a proposal has to be created. All existing member accounts vote on this proposal and based upon approval, an invitation is sent to a new account to join the network. Amazon Managed Blockchain creates an endpoint to communicate with the Hyperledger Fabric resources. To access these endpoints, the VPC Privatelink endpoint needs to be created in the account. For multiple members in the AWS account, a single VPC PrivateLink endpoint has to be created.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-11.png\" style=\"height:246px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as for Amazon Managed Blockchain network, governance is distributed among all the members who have joined the network. For inviting new accounts to join the network, all the current members and not just the administrator would approve based upon the voting rules of the network.</li>\r\n\t<li><strong>Option B is incorrect</strong> as it is not required to create a VPC PrivateLink endpoint from all the current members to any account. VPC PrivateLink endpoint needs to be created from the account which needs to access the network.</li>\r\n\t<li><strong>Option D is incorrect</strong> as even if there are multiple members in the AWS account, a single VPN PrivateLink endpoint is required to be created.</li>\r\n</ul>\r\n\r\n<p>For more information on Amazon Managed Blockchain, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/managed-blockchain/\" target=\"_blank\">https://aws.amazon.com/managed-blockchain/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/managed-blockchain/faqs/?nc=sn&amp;loc=6\" target=\"_blank\">https://aws.amazon.com/managed-blockchain/faqs/?nc=sn&amp;loc=6</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124165,
            "question_id": 98871,
            "answers": [
              {
                "choice": "<p>Create a proposal for inviting other AWS accounts to the blockchain network. Once a proposal is approved by an administrator in the network, other AWS accounts will receive the invite</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new VPC PrivateLink endpoint from all the current member VPC to new account VPC to enable access to Hyperledger Fabric resources</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a single VPC PrivateLink endpoint for all members in the AWS account from which Hyperledger Fabric resources will be accessed</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Create multiple VPC PrivateLink endpoints for each member in the AWS account from which Hyperledger Fabric resources will be accessed</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a proposal for inviting other AWS accounts to the blockchain network. Once a proposal is approved by current members of the network, other AWS accounts will receive the invite</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 98872,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The company has application servers running on Windows operating systems at on-premises locations for which it is looking for a low-cost disaster recovery tool in the AWS cloud. The company is expecting RPO in seconds while RTO should be in minutes. To control Recovery instances in an AWS Cloud, standard Amazon EC2 launch templates must be used.</p>\r\n\r\n<p>What solution can be designed for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\r\n\r\n<p>AWS Elastic Disaster Recovery (AWS DRS)&nbsp; is a cost-effective scalable tool for application recovery in AWS. AWS DRS initiates data replication to AWS resources using affordable storage and minimal compute resources.&nbsp; During disruptions, applications can be recovered by launching recovery instances in the AWS cloud and using a point-in-time server state. This helps to achieve RPO in seconds while RTO in minutes. For launching recovery instances, AWS DRS also supports using standard EC2 launch templates.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-12.png\" style=\"height:262px; width:645px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as the AWS Transfer family is suitable for transfer of files using FTP/SFTP protocol. It is not a suitable tool for disaster recovery.</li>\r\n\t<li><strong>Option B is incorrect</strong> as with AWS Backup, lower RPO and RTO targets cannot be met.</li>\r\n\t<li><strong>Option C is incorrect</strong> as CloudEndure Disaster Recovery does not support using standard Amazon EC2 instance launch templates to control Recovery instances.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS DRS, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/disaster-recovery/faqs/?nc=sn&amp;loc=4\" target=\"_blank\">https://aws.amazon.com/disaster-recovery/faqs/?nc=sn&amp;loc=4</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124166,
            "question_id": 98872,
            "answers": [
              {
                "choice": "<p>Use AWS Transfer family to automate data copy from on-premises applications servers to AWS. During a disaster, launch an EC2 instance in AWS Cloud using this application data</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Backup to automate data copy from on-premises applications servers to AWS. During a disaster, launch an EC2 instance in AWS Cloud using this application data</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Setup CloudEndure Disaster Recovery on application servers deployed at the on-premise location</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Set up AWS Elastic Disaster Recovery (AWS DRS) on application servers deployed at the on-premise location</p>",
                "correct": 1,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 98873,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A telecommunications service provider is building a new application in an AWS Wavelength zone. This application is deployed on an Amazon EC2 instance launched in two Wavelength Zones 1 and 2 belonging to a single VPC A. Amazon EC2 instance can communicate with parent VPC and Internet. For synchronization traffic between the applications in two Wavelength zones, connectivity needs to be established between the Amazon EC2 instance. Connectivity should be established with fine-grain control allowing only specific Amazon EC2 instances to communicate from both Wavelength zones.</p>\r\n\r\n<p>What solution can be proposed for this additional connectivity?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>Amazon EC2 instances launched in two different Wavelength Zones associated with a single VPC cannot communicate with each other. To enable this communication, 2 different VPCs need to be created. Each Wavelength zone is associated with each VPC. Transit Gateway can be used to enable communication between these VPCs.</p>\r\n\r\n<p>In the above case, Wavelength Zone 1 is associated with VPC A while Wavelength Zone 2 is associated with VPC B. To enable communication between instances in Wavelength Zone 1 and Wavelength Zone 2, Transit Gateway should be used to establish routing between VPC A and VPC B.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/sap-2-13.png\" style=\"height:393px; width:529px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as the Instance associated with subnets part of two different Wavelength Zones in a single VPC cannot communicate with each other.</li>\r\n\t<li><strong>Option C is incorrect</strong> as with VPC peering all subnets will be allowed to communicate with each without any control, which is not required as per the requirement.</li>\r\n\t<li><strong>Option D is incorrect</strong> as a single subnet cannot be spanned across two Wavelength zones.</li>\r\n</ul>\r\n\r\n<p>For more information on extending Amazon VPC, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/Extend_VPCs.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/Extend_VPCs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124167,
            "question_id": 98873,
            "answers": [
              {
                "choice": "<p>Create a new VPC B. Associate subnet in existing VPC A &nbsp;with Wavelength zone 1. Create a subnet in VPC B and associate it with Wavelength zone 2. Use Transit Gateway to enable communication between instances launched in Wavelength Zone 1 and Wavelength Zone 2</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Create two new subnets in existing VPC A and associate them with Wavelength zone 1 and Wavelength zone 2. Configure routing in the carrier gateway in each Wavelength zone to allow communication between the instances</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new VPC B. Associate subnet in existing VPC A with Wavelength zone 1. Create a subnet in VPC B and associate it with Wavelength zone 2. Use VPC Peering to enable communication between instances launched in Wavelength Zone 1 and Wavelength Zone 2</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Create a single new subnet in VPC A and associate it with Wavelength zone 1 and Wavelength zone 2. Configure routing in the carrier gateway in each Wavelength zone to allow communication between the instances via the parent region VPC</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98874,
        "topic_id": 2687,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An engineering firm has a large number of Amazon S3 buckets launched in their AWS account. Internal and external users need to have different permission to store data in these Amazon S3 buckets. Access should be granted based on AWS security best practices of least privileges. The permissions should be efficiently granted considering the large volume of buckets and users in this account. A sample policy needs to be created for the bucket name my_test_bucket.</p>\r\n\r\n<p>Which of the following policies is most suitable for the requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>When there is a need for controlling permissions on a large number of Amazon S3 buckets, IAM policies are better suited than using Amazon S3 bucket policy.</p>\r\n\r\n<p>Applying and managing resource policies on a large number of S3 buckets will lead to additional admin work.</p>\r\n\r\n<p>With IAM policies, different policies can be created based on permissions to be granted to users. Users can be added to a group to avoid IAM policies being created for each user separately.</p>\r\n\r\n<p>All the S3 bucket policies will have the &ldquo;Principal &#39;&#39; JSON element which identifies the principals that the bucket policy will access. In the IAM policy &ldquo;Principal &#39;&#39; JSON element is missing as it is the entity to which the IAM policy is applied.</p>\r\n\r\n<p>In the above case, the IAM policy can be created to allow all S3 actions to be performed on a specific bucket name as my_test_bucket. Based on the permission required, different IAM policies can be created and applied to individual users or a group of users to grant access to different S3 buckets.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as this IAM policy will allow all actions to be done on all the S3 buckets created in the Amazon S3.</li>\r\n\t<li><strong>Option C is incorrect</strong> as this S3 bucket policy will allow user ABC full access to the bucket name my_test_bucket. Since there will be thousands of S3 buckets, maintaining a bucket policy for each user on every bucket will incur additional admin overhead.</li>\r\n\t<li><strong>Option D is incorrect</strong> as since the Principal element is mentioned this is an S3 Bucket policy that will allow all users in the account 123456789000 to perform all actions on all the buckets created in Amazon S3. This will be against the requirements of having different permission for internal and external users.</li>\r\n</ul>\r\n\r\n<p>For more information on AWS IAM policies, refer to the following URLs,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/\" target=\"_blank\">https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124168,
            "question_id": 98874,
            "answers": [
              {
                "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3:::*&quot;]\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;:[{\r\n&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3:::my_test_bucket/*&quot;]\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<pre class=\"brush:java;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AWS&quot;: [&quot;arn:aws:iam::123456789000:user/ABC&quot;]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3::: my_test_bucket/*&quot;]\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<pre class=\"brush:jscript;\">\r\n{\r\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,\r\n&nbsp; &quot;Statement&quot;: [\r\n&nbsp;&nbsp;&nbsp; {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: {\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AWS&quot;: [&quot;arn:aws:iam::123456789000:user/*&quot;]\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3:::*&quot;]\r\n&nbsp;&nbsp;&nbsp; }\r\n&nbsp; ]\r\n}\r\n</pre>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design Solutions for Organizational Complexity"
      },
      {
        "question_id": 98875,
        "topic_id": 364,
        "course_id": null,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A service provider firm is planning to deploy AWS IoT solutions across multiple countries in the Europe region. They will be deploying IoT devices in farms to gather environmental data. Some of the farm locations are remote locations where there are connectivity challenges. The firm is looking to perform local compute functionalities on remote devices and upload processed data securely in an encrypted format to the IoT core. The proposed solution should be scalable to thousands of devices and survive connectivity issues for data synchronization.</p>\r\n\r\n<p>How can a solution be designed for this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<p>AWS IoT Greengrass is a software service that can help to run local compute, messaging, data caching, sync, and ML inference capabilities for connected devices. This allows data on the devices to synchronize AWS IoT Core. AWS IoT Greengrass allows the synchronization of data even when there are disruptions in connectivity. AWS IoT Greengrass will act as a gateway to upload data to the IoT Core.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong> as AWS IoT Device Management is suitable for cloud-based device management and remote management of IoT devices. It is not a suitable option for running local compute on remote IoT devices.</li>\r\n\t<li><strong>Option C is incorrect</strong> as AWS IoT Device Defender is best suited for monitoring IoT device configurations so that they do not deviate from security best practices. It is not a suitable option for running local compute on remote IoT devices.</li>\r\n\t<li><strong>Option D is incorrect</strong> as AWS IoT SiteWise is suitable for collecting, storing, organizing, and visualizing streaming data from thousands of sensors across multiple industrial facilities. It is not a suitable option for running local compute on remote IoT devices.</li>\r\n</ul>\r\n\r\n<p>For more information on security options with AWS IoT Greengrass, refer to the following URL,</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/whitepapers/latest/securing-iot-with-aws/aws-iot-greengrass-software-for-edge-computing.html\" target=\"_blank\">https://docs.aws.amazon.com/whitepapers/latest/securing-iot-with-aws/aws-iot-greengrass-software-for-edge-computing.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 124169,
            "question_id": 98875,
            "answers": [
              {
                "choice": "<p>Use AWS IoT Greengrass with connected devices located globally</p>",
                "correct": 1,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS IoT Device Management with connected devices located globally</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS IoT Device Defender with connected devices located globally</p>",
                "correct": 0,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS IoT SiteWise with connected devices located globally</p>",
                "correct": 0,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      }
    ]
  }