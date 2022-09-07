// 5. Practice Test III
var PracticeTest3 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 45126,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large IT company has an on-premises website that provides real-estate information such as rent, house prices, and the latest news to users. The website has a Java backend and a NoSQL MongoDB database used to store subscribers&#39; data. You are a cloud analyst and need to migrate the whole application to the AWS platform. Your manager requires that a similar structure should be deployed in AWS for high availability.</p>\r\n\r\n<p>Moreover, a tracing framework is essential to record data from both the client request and the downstream call to the database in AWS. Which AWS services should you choose to implement the migration?</p>\r\n\r\n<p>Select 3&nbsp;Options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, C, D</strong></p>\r\n\r\n<p>As this case needs to migrate the on-premises system to AWS using a similar structure, DocumentDB is more appropriate than RDS Aurora. DocumentDB is also a NoSQL database compatible with MongoDB. Besides, AWS X-Ray is a service that collects data about requests that your application serves and provides tools you can use to view, filter, and gain insights into that data to identify issues and opportunities for optimization. Reference for AWS X-Ray is at <a href=\"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html\" target=\"_blank\">https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is <strong>CORRECT</strong> because autoscaling would provide high availability.</li>\r\n\t<li>Option B&nbsp; is incorrect because RDS Aurora is a SQL database that is inappropriate in this scenario and brings extra unnecessary efforts.</li>\r\n\t<li>Option&nbsp;C is&nbsp;<strong>CORRECT</strong> because Amazon DocumentDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability and&nbsp;compatible with MongoDB.</li>\r\n\t<li>Option&nbsp;D is&nbsp;<strong>CORRECT</strong> because AWS X-Ray is suitable to work as a tracing framework. It can monitor the requests from the frontend and requests to the DocumentDB database. Below is a graph that AWS X-Ray can provide.</li>\r\n\t<li><strong>Note</strong>: Please read &quot;DynamoDB&quot; as&nbsp;&quot;DocumentDB&quot; instead in the diagram given below. Please refer to the below link for &quot;DocumentDB&quot;</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/documentdb/latest/developerguide/developerguide.pdf\">https://docs.aws.amazon.com/documentdb/latest/developerguide/developerguide.pdf</a></li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_5.png\" style=\"height:708px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;E is&nbsp;incorrect:&nbsp;Theoretically, CloudWatch can be used to trace the incoming and outgoing requests, although it may bring extra efforts. However, the service should be CloudWatch Logs rather than CloudWatch Events. Amazon CloudWatch Events describe changes in Amazon Web Services (AWS) resources.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35133,
            "question_id": 45126,
            "answers": [
              {
                "choice": "<p>Deploy an Auto Scaling group of Java backend servers to provide high availability.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use RDS Aurora as the database for the subscriber data because it is highly available and can scale up to 15 Read Replicas.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a DocumentDB database to hold subscriber data. Set up an Auto Scaling policy for the read/write throughput.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS X-Ray SDK to record data about incoming and outgoing requests. View the statistics graph in the X-Ray console.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Trace the requests using AWS JAVA SDK and send logs to AWS CloudWatch Events. Create a CloudWatch dashboard to view the statistics.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28734,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>You&rsquo;ve been brought in as a solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC). The previous architect has already deployed a 3- tier VPC. The configuration is as follows.&nbsp;</p>\n\n<p><strong>VPC :</strong> vpc-2f8bc447</p>\n\n<p><strong>IGW :</strong> ig-2d8bc445</p>\n\n<p><strong>NACL :</strong> acl-208bc448</p>\n\n<p><strong>Subnets and Route Tables:</strong></p>\n\n<p>&nbsp; &nbsp;Web server&rsquo;s subnet-258bc44d</p>\n\n<p>&nbsp; &nbsp;Application server&rsquo;s subnet-248bc44c</p>\n\n<p>&nbsp; &nbsp;Database server&rsquo;s subnet-9189c6f9</p>\n\n<p><strong>Route Tables:</strong></p>\n\n<p>&nbsp; &nbsp;rtb-218bc449</p>\n\n<p>&nbsp; &nbsp;rtb-238bc44b</p>\n\n<p><strong>Associations:</strong></p>\n\n<p>&nbsp; &nbsp;Subnet-258bc44d: rtb-218bc449</p>\n\n<p>&nbsp; &nbsp;Subnet-248bc44c: rtb-238bc44b</p>\n\n<p>&nbsp; &nbsp;Subnet-9189c6f9: rtb-238bc44b</p>\n\n<p>You are now ready to begin deploying EC2 instances into the VPC. Web servers must have direct access to the internet. The Application and&nbsp;Database servers cannot have direct access to the internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - D</strong></p>\n\n<p><strong>Option A is incorrect</strong> because the route should be pointing to NAT.</p>\n\n<p><strong>Option B is incorrect</strong> because adding IGW to route rtb-238bc44b would expose the application and database server to the internet. Bastion and NAT should be in the public subnet.</p>\n\n<p><strong>Option C is incorrect </strong>because the route should point to NAT and not Internet Gateway else it would be internet accessible.</p>\n\n<p><strong>Option D is CORRECT</strong> because Bastion and NAT should be in the public subnet. As Web Server has direct access to the Internet, the subnet subnet-258bc44d should be public and Route rtb-218bc449 pointing to IGW. Route rtb-238bc44b for private subnets should point to NAT for outgoing internet access.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 85607,
            "question_id": 28734,
            "answers": [
              {
                "question_id": "28734",
                "choice": "<p>Create a bastion and NAT Instance in subnet-258bc44d and add a route to rtb-238bc44b pointing to subnet-258bc44d.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28734",
                "choice": "<p>Add a route to rtb-238bc44b pointing to igw-2d8bc445 and add a bastion and NAT instance within Subnet-248bc44c.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28734",
                "choice": "<p>Create a Bastion and NAT Instance in subnet-258bc44d. Add a route to&nbsp;rtb-238bc44b pointing to igw-2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet-248bc44c.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28734",
                "choice": "<p>Create a Bastion and NAT instance in subnet-258bc44d and add a route to rtb-238bc44b pointing to the NAT instance.</p>",
                "feedback": "",
                "correct": true
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
        "question_id": 44769,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has its major business on selling second-hand products. Its online trading system is deployed on AWS EC2 instances. In Route53, a domain name has been configured to route the traffic to a Classic Load Balancer. As Classic Load Balancer is quite old and in AWS, there are new types of load balancers that Classic Load Balancer can easily migrate to. The operation team decides to migrate the Load Balancer. They want all the connections between clients and EC2 instances to be kept secure using certificates that they created and want a secure data encryption in transit in adherence to TLS protocol between the clients and EC2 instances. Which choices should be used together to meet the needs?</p>\r\n\r\n<p>Select 2 Options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B, E</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>In order to make the full path secure, there are two parts to be considered if Network Load Balancer is used.</p>\r\n\r\n<p>1, TLS termination on Load Balancer. A listener with TLS and port 443 is required.</p>\r\n\r\n<p>2, Configure targets using protocol TLS and port 443.</p>\r\n\r\n<p>The details can be found in <a href=\"https://network.exampleloadbalancer.com/nlbtls_demo.html\" target=\"_blank\">https://network.exampleloadbalancer.com/nlbtls_demo.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect&nbsp;because the ALB terminates SSL traffic, and the requirement is to get secure traffic up to the EC2 instances.</li>\r\n\t<li>Option B is CORRECT because this is the correct way to implement the TLS termination on the load balancer.</li>\r\n\t<li>Option C is incorrect&nbsp;because the ALB terminates SSL traffic, and the requirement is to get secure traffic up to the EC2 instances.&nbsp;</li>\r\n\t<li>Option D is incorrect because although this option is partially correct, as the listener is based on TLS as Option B, the target protocol cannot be HTTPS.</li>\r\n\t<li>Option E is CORRECT because the TLS connection is set up between load balancer and targets. Together with Option B, the connections between clients and EC2 instances are kept secure.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34780,
            "question_id": 44769,
            "answers": [
              {
                "choice": "<p>In the &ldquo;Create Load Balancer&rdquo; console, create an Application Load Balancer, add a listener with protocol TLS and port 443 so that the TLS connections terminate at the Load Balancer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Go to the Load Balancer console, create a Network Load Balancer with a listener that listens to the traffic with protocol as TLS and port as 443.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Application Load Balancer with a listener that listens to the traffic with protocol as HTTPS and port 80.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For the new Load Balancer, select the target protocol as HTTPS and port as 443, setting up the connections with targets securely.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For the new Load Balancer, select the target protocol as TLS and port as 443. As a result, the connections between Load Balancer and targets are secure.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45128,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Another team just transferred your team a task to maintain an AWS CodeBuild project that aims to create a docker image for the QA lab environment. Previously, this CodeBuild project was triggered manually at about 20:00 every working day&nbsp;(Mon to Fri) by a QA engineer, which is not quite appropriate. You are considering setting up an automatic trigger for the project. At the same time, when the job runs, using an SNS topic to notify the team by email. Which procedures should you use?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&ndash;&nbsp;B</strong></p>\n\n<ul>\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>&nbsp;because the CodeBuild project needs to be scheduled every working day (Mon to Fri). The cron expression of &ldquo;0 20 ? * * *&rdquo; is incorrect.</li>\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT </strong>because, in order to schedule the CodeBuild project, the ARN is needed instead of the project name.</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_7.png\" style=\"height:474px; width:1018px\" /></p>\n\n<ul>\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect </strong>because a rule can have 5 targets synchronously. One rule is sufficient.</li>\n</ul>\n\n<p><a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/cloudwatch_limits_cwe.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/cloudwatch_limits_cwe.html</a>.</p>\n\n<ul>\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong> because CodeBuild is a supported target for AWS CloudWatch Events.</li>\n</ul>\n\n<p>Please refer to the below reference&nbsp;on how to schedule automated builds using CodeBuild.<br />\n<a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-tutorial-codebuild.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-tutorial-codebuild.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 63563,
            "question_id": 45128,
            "answers": [
              {
                "question_id": "45128",
                "choice": "<p>Configure a newly created CloudWatch Events rule that has a cron expression of &ldquo;0 20 ? * * *&rdquo;. The targets for the rule include the CodeBuild project name and the SNS topic.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45128",
                "choice": "<p>Create a new CloudWatch Events rule that has a cron expression of &ldquo;0 20 ? * MON-FRI *&rdquo;. The targets for this rule are the CodeBuild project ARN and the SNS topic name.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45128",
                "choice": "<p>Configure two new CloudWatch Events that have a cron expression of &ldquo;0 20 ? * MON-FRI *&rdquo;. The target for the first rule is the CodeBuild project ARN and the trigger for the second rule is the SNS topic.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45128",
                "choice": "<p>As AWS CloudWatch Events rule does not support CodeBuild service, an EC2 or an on-premise lightweight server is required to schedule the docker image build of the project. Use a new CloudWatch Events rule to schedule the SNS notification.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45129,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>You are an AWS administrator. Your company has two key EC2 instances owned by AWS account A. The users in AWS account B may start/stop these EC2 instances from time to time. These users are under the same IAM user group called &ldquo;Group_QA&rdquo;. You already created a cross-account&nbsp;role &ldquo;EC2Update&rdquo; in account A.</p>\r\n\r\n<p>In account B, &ldquo;Group_QA&rdquo; has been added as an inline policy to assume the role of &ldquo;EC2Update&rdquo;. How can the users of AWS account B switch role &quot;EC2Update&quot; in account A? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer&ndash;&nbsp;B and&nbsp;C</strong></p>\r\n\r\n<p>You can grant your IAM users permission to switch to roles within your AWS account or to roles defined in other AWS accounts that you own.</p>\r\n\r\n<p>The user chooses the account name on the navigation bar and chooses&nbsp;<strong>Switch Role</strong>. The user specifies the account ID (or alias) and role name. Alternatively, the user can click on a link sent in an email by the administrator. The link takes the user to the&nbsp;<strong>Switch Role</strong>&nbsp;page with the details already filled in.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>&nbsp;because, for AWS API/AWS CLI, the user in the group &ldquo;Group_QA&rdquo; should call the AssumeRole function to obtain credentials for the &ldquo;EC2Update&rdquo; role.</li>\r\n\t<li><strong>Option D is&nbsp;incorrect</strong> because it should be &ldquo;Switch Role&rdquo; rather than &ldquo;Switch Accounts,&rdquo; and no key credentials are needed for switching rules to another account.</li>\r\n</ul>\r\n\r\n<p>References:<br />\r\n<a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 56898,
            "question_id": 45129,
            "answers": [
              {
                "question_id": "45129",
                "choice": "<p>With AWS CLI, the user calls the AssumeRoleWithSAML function to obtain credentials for the &ldquo;EC2Update&rdquo; role.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45129",
                "choice": "<p>The user chooses the account name on the navigation bar and clicks &ldquo;Switch Role&rdquo;. The user specifies the account ID (or alias) and role name.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45129",
                "choice": "<p>The user can click on a link sent in an email by the administrator which takes the user to the Switch Role page with the details already filled in. The link can be found when the role &ldquo;EC2Update&rdquo; was created.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45129",
                "choice": "<p>In the AWS console, the user clicks its account name and chooses &ldquo;Switch Accounts&rdquo;. The user then specifies the account ID, key credentials, and the role name for account A.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45130,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are an AWS solutions architect in a large IT company, and your company has owned several AWS accounts. By using IAM roles, access to resources in other accounts is granted. For example, users in the Test account may switch roles and operate on DynamoDB resources that belong to the Dev account.</p>\r\n\r\n<p>For training purposes, you are responsible for preparing a document on how to switch roles properly. Which conditions must be met for IAM users to switch roles successfully across accounts? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>The below diagram is a reference on how to switch roles between accounts.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_9.1.png\" style=\"height:439px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;CORRECT&nbsp;because you cannot switch to a role when you are signed in as the AWS account root user. This is indicated in</li>\r\n</ul>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because multi-factor authentication (MFA) is optional when a role is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_9.2.png\" style=\"height:363px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect&nbsp;because the alias of the target account is optional. During role switch, the user specifies the account ID (or alias) and role name.</li>\r\n\t<li>Option&nbsp;D is&nbsp;CORRECT&nbsp;because it is required for the user to have permission to assume the role that belongs to other accounts.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35137,
            "question_id": 45130,
            "answers": [
              {
                "choice": "<p>The user is signed in as the AWS account non-root user.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The assuming entity has used multi-factor authentication (MFA) protection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The target account that the user plans to switch to must use an alias.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user must be explicitly granted permission to assume the role.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45131,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A supermarket chain had a big data analysis system deployed in AWS. The system has the raw data such as clickstream or process logs in S3. An m3.large EC2 instance transformed the data into other formats and saved it to another S3 bucket. It was then moved to Amazon Redshift.</p>\r\n\r\n<p>Your team is in charge of improving the system using AWS Glue which is a fully managed ETL (extract, transform, and load) service. Which tasks can AWS Glue simplify during re-establishing the big data system? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>AWS Glue is a service to discover data, transform it, and make it available for search and querying. AWS Glue can make all your data in S3 immediately available for analytics without moving the data.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_10.png\" style=\"height:285px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;CORRECT&nbsp;because Crawler is a key component in AWS Glue that can scan data in all kinds of repositories, classify it, extract schema information from it, and store the metadata automatically in the AWS Glue Data Catalog.</li>\r\n\t<li>Option B is&nbsp;incorrect because AWS Glue will generate ETL code in Scala or Python rather than Java.</li>\r\n\t<li>Option C is incorrect because AWS Glue does not generate triggers by default. Moreover, Cron expressions that lead to rates faster than 5 minutes are not supported.</li>\r\n\t<li>Option D is&nbsp;CORRECT because the Glue Data Catalog&nbsp;stores the metadata in the AWS Cloud which is readily available for analysis.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35138,
            "question_id": 45131,
            "answers": [
              {
                "choice": "<p>AWS Glue contains a crawler that connects to the S3 bucket and scans the dataset. Then the service creates metadata tables in the data catalog.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Glue automatically generates code in Java to extract data from the source and transform it to match the target schema.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>By&nbsp;default, AWS Glue creates a scheduler to trigger the activated tasks every minute.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Glue has a central metadata repository (Glue Data Catalog). The Glue Data Catalog is available for analysis immediately.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45310,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company runs an online 3D Printing E-commerce site&nbsp;where users can either select or upload their designs and provide the necessary details. After the payment, the order goes to the production system. The application uses the SQS FIFO queue to decouple the payment from the main printing job. Once the payment information is successfully received, the system sends the job request to the SQS FIFO queue consumed by the spot EC2 instances configured with Auto Scaling. The spot instances prepare the print job and submit it to the queue responsible for the printing. The instances need to wait for the printing job to finish before finishing the message processing. Due to&nbsp;the possibility of complex designs, the rendering job may take a while to finish.</p>\r\n\r\n<p>Your company recently deals with an Auto Part Manufacturing company, and it starts submitting complex designs for the printing. Your operations team realizes that the print rendering jobs are taking longer than before. By looking at the logs, your team can see that the auto company&#39;s jobs are taking a huge amount of time to finish and messages in the queue may be processed duplicately. How would you address this problem?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because the spot instances are not the issue, as the question does not mention that the instances are terminated.</li>\r\n\t<li>Option B is CORRECT because this method can increase the timer for the instances to process the message so that the messages will not return to the queue again.&nbsp;</li>\r\n\t<li>Option C is incorrect because the spot instances do not cause the issue. Changing the instances to on-demand ones will not help.</li>\r\n\t<li>Option D is incorrect because it takes longer to process the messages. But they are still processed successfully. A dead-letter queue does not help.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35317,
            "question_id": 45310,
            "answers": [
              {
                "choice": "<p>Increase the price reserved by the spot instances and make sure that AWS does not terminate the spot instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Increase the visibility timeout of the SQS queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the Auto Scaling group to use on-demand instances instead of spot instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a dead-letter queue for the messages that are processed unsuccessfully.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45311,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company manages a high-end auctioning site. The members register their products with the company and manage the actions related to the products. The application is built using NodeJS and MongoDB. It also uses the Redis to cache the current auctioning data and pub/sub to distribute the auction-related events like bidding count and price fluctuations.</p>\n\n<p>The engineering team has decided to re-build the part of the bid processing module and move it to a durable and scalable option instead of using the Redis pub/sub. With the new design, the management also wants the application to support the concurrent bidding. The messages in bidding must be processed in strict order. Messages from different biddings can be processed at the same time. The engineering team thinks that&nbsp;after allowing concurrent auctioning, they will need to support around 12,000-15000 transactions per minute. Please select 2&nbsp;suitable options to support the new redesign.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: D&nbsp;and E</strong></p>\n\n<ul>\n\t<li><strong>Option A is INCORRECT</strong> because in the Standard queue the order is not preserved.</li>\n\t<li><strong>Option B is INCORRECT</strong> because SNS is mainly used to fan out the messages to multiple consumers. It delivers the same message to multiple consumers and does not guarantee unique message delivery.</li>\n\t<li><strong>Option C is INCORRECT</strong>: SNS is a notification service&nbsp;(not a queueing service).</li>\n\t<li><strong>Option D is CORRECT</strong> because AWS Lambda can be configured to process the messages from the SQS FIFO queue.&nbsp;Lambda is serverless and cost-efficient. See more info here</li>\n</ul>\n\n<p><a href=\"https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/\">https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/</a></p>\n\n<ul>\n\t<li><strong>Option E is CORRECT</strong> because, for an SQS FIFO queue, all the messages with the same Message Group Identifier will be delivered in order. Messages with different message group ID values might be sent and received out of order.</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 87044,
            "question_id": 45311,
            "answers": [
              {
                "question_id": "45311",
                "choice": "<p>Use the Simple Queue Service (SQS) standard queue.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45311",
                "choice": "<p>Use the Simple Notification Service (SNS), which is similar to the Redis pub/sub, but automatically supports unlimited messages and scales.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45311",
                "choice": "<p>Create and use the Simple Notification Service (SNS) FIFO queue.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45311",
                "choice": "<p>Use the Simple Queue Service (SQS) FIFO queue and migrate the bid processing module to the Lambda.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45311",
                "choice": "<p>Configure a message group identifier to represent a distinct ordered message group within the FIFO queue.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 44770,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Node.js software team has developed a recipe application that end-users can search and share recipes. The team deployed the app in AWS EC2 instances with a network load balancer. A recent security audit has discovered an issue that the load balancer listener is not using TLS. That means the application is at a security risk and is prone to be threatened by&nbsp;man in the middle attack. Which below choices are correct to help fix this issue? Select 2.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A, C</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>For network load balancer, if TLS is used for the listener, a certificate must be identified for the listener to use as below.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-2.jpg\" style=\"height:266px; width:750px\" /></p>\r\n\r\n<p>The certificate can come from ACM or IAM. ACM integrates with Elastic Load Balancing so that you can deploy the certificate on your load balancer. However, there are regions that ACM is not supported. A certificate in IAM would be another alternative. Details can be found in <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is <strong>CORRECT</strong> because configuring a certificate in ACM is a recommended method when TLS is chosen for the listener.</li>\r\n\t<li>Option B is incorrect because HTTPS is for an application load balancer rather than a network load balancer.</li>\r\n\t<li>Option C is <strong>CORRECT</strong> because a certificate in IAM can be used for TLS listeners.</li>\r\n\t<li>Option D is incorrect because KMS is not a valid service to provide a certificate for TLS listeners. And the protocol of SSL is inaccurate for network load balancer as well.</li>\r\n\t<li>Option E is incorrect because the Secrets&nbsp;Manager cannot provide a certificate for TLS listeners.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34781,
            "question_id": 44770,
            "answers": [
              {
                "choice": "<p>Modify the listener protocol to TLS and choose an existing certificate in ACM (AWS Certificate Manager).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Change the listener protocol to HTTPS. Import a new certificate to ACM (AWS Certificate Manager) and use it in the load balancer listener.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the listener by changing the protocol to TLS. Use an existing certificate from IAM.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the listener protocol to SSL and choose an existing certificate in KMS (AWS Key Management Service).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Edit the listener by changing the protocol to TLS. Upload a new key to the Secrets Manager and link the key for the listener to use.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28726,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A customer is deploying an SSL-enabled Web application on AWS that reads the certificate from ACM. They would like to implement a separation of roles between the EC2 service administrators entitled to login to Instances and make API calls and the security officers who maintain and have exclusive access to the application&#39;s X.509 certificate contains the private key. Which configuration option would satisfy the above requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because (a) only the security officers have access to the certificate store, and (b) the certificate is not stored on EC2 instances, hence avoiding giving access to it to the EC2 service administrators.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option B is incorrect because it will still involve storing the certificate on the EC2 instances and additional configuration overhead to access the security officers, which is unnecessary.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Options C and D are both incorrect because giving EC2 instances access to the certificate should be avoided. It is better to let ELB manage the SSL certificate, instead of the EC2 web servers.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information, please refer to the links given below.\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html</a></li>\r\n\t\t<li><a href=\"https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/</a></li>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html\" target=\"_blank\">https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18843,
            "question_id": 28726,
            "answers": [
              {
                "choice": "<p>Configure IAM policies authorizing access to the&nbsp;ACM certificate store only to the authorized security officers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure system permissions on the web servers to restrict access to the certificate only to the authorized security officers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Upload the certificate on an S3 bucket owned by the security officers and accessible only by the EC2 role of the web servers</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the web servers to retrieve the certificate upon boot from a CloudHSM that is managed by the security officers.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28744,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company runs a customer-facing event registration site built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 application tier servers for normal operation but can run on a minimum of 65% server capacity and a single MySQL database. When deploying this application in a region with three availability zones (AZs) which architecture provides high availability?</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>In this scenario, the application can run on a minimum of 65% of the overall server capacities. I.e. it can run on a minimum of 4 web and 4 application servers.</p>\r\n\r\n<p>Since there are 3 AZs, there are many ways the instances can be put across them. The most important point to consider is that even if an entire AZ becomes unavailable, there should be a minimum of 4 servers running. So, placing 3 servers in 2 AZs is not a good architecture. Based on this, <strong>options A and C are incorrect</strong>. The best solution would be to have 2 servers in each AZ. So, in case of an entire AZ being unavailable, the application still has 4 servers available.</p>\r\n\r\n<p>Now, regarding the RDS instance, the high availability is provided by the Multi-AZ deployment, not by read replicas (although they improve the performance in case of read-heavy workload). So, <strong>option B is incorrect</strong>.</p>\r\n\r\n<p>Hence, <strong>option D is CORRECT</strong> because (a) it places 2 EC2 instances in each of the 3 AZs, and (b) it uses the Multi-AZ deployment of RDS.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18861,
            "question_id": 28744,
            "answers": [
              {
                "choice": "<p>A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the two other AZs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database services) deployment.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45312,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Your company has developed a suite of business analytics services as a SaaS application used by hundreds of customers worldwide. Recently there has been an acquisition of a product, and the management has decided to integrate the product with the main service. The product also runs onto the AWS platform. The initial phase required the product software to use some private resources of the main SaaS service.</p>\n\n<p>The operations team created the Cross-Account Role with the required policies and assigned the role to the account to start using the resources. After a few days, the operations team found that someone deleted an important S3 bucket from their AWS&nbsp;account which has caused the feature disruption across the service.</p>\n\n<p>The management has asked the auditing team to inspect and identify the root cause of the resource deletion based on the CloudTrail logs. Select two&nbsp;valid options through which the auditing team can identify who deleted the resources.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: A and D</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT </strong>because the request is made from the product&rsquo;s AWS account and the resource was part of the main(SaaS application&#39;s) AWS account. The user will have to check the log trail of both the accounts and match the user token being used.</li>\n\t<li><strong>Option B is INCORRECT</strong> because the CloudTrail logs of the SaaS application&rsquo;s account will not reveal the user identity. The cross-account role issues a token, and all the further interaction is logged with that token. To know which user the token belongs to, the auditor will have to look into the product&rsquo;s AWS account&rsquo;s log trail as well.</li>\n\t<li><strong>Option C is INCORRECT</strong> because the DeleteBucket will not have the user identity information. The log will have the user token information only, as the API was invoked with a cross-account role.</li>\n\t<li><strong>Option D is CORRECT</strong> because, at the time of assuming the role into the main AWS account, the product team&rsquo;s AWS account must have created an entry with the sharedEventID and the userIdentity information. sharedEventID helps to identify the real user, and userIdentity provides the IAM ARN that performs the action. These two can help to find who has&nbsp;executed the DeleteBucket API. Please check the references in <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/shared-event-ID.html\">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/shared-event-ID.html</a><br />\n\tand<br />\n\t<a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html\">https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html</a></li>\n\t<li><strong>Option E is INCORRECT</strong> because the userIdentity information will only be available inside the product team&rsquo;s AWS account in response to the AssumeRole operation. The sharedEventID will be available in both the account&rsquo;s log trail though.</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 94847,
            "question_id": 45312,
            "answers": [
              {
                "question_id": "45312",
                "choice": "<p>The auditing team will need the CloudTrail logs detail of both the SaaS application&rsquo;s AWS account and the product&#39;s AWS account.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45312",
                "choice": "<p>The auditing team can find the detail only from the SaaS application&rsquo;s AWS account, as the bucket was part of that account.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45312",
                "choice": "<p>Look for the DeleteBucket API record into the SaaS application&rsquo;s AWS account CloudTrail logs.&nbsp;It should have a user Id and the bucket detail as part of the log detail.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45312",
                "choice": "<p>Look for the sharedEventID and the userIdentity for the DeleteBucket API event in both AWS accounts.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45312",
                "choice": "<p>Look for the sharedEventID and the userIdentity for the AssumeRole API event in both AWS accounts.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45313,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company runs a successful medical sampling application onto the AWS cloud and uses various AWS services like EC2, EBS, S3, DynamoDB, etc. Due to their business nature, they have an internal audit and compliance team that regularly audits the security posture and takes up various compliance-related activities on a strict basis. The management has decided to go for an external tool to add to the internal auditing process. The management has decided to use a 3rd-party tool that helps them quickly do the auditing and compliance scanning and generate reports.</p>\r\n\r\n<p>The tool needs a way to access the production account and access resources in a read-only mode.&nbsp;There has been no final agreement from the management yet. But, after reading through the documentation of the tool, the security team decided to use their sandbox AWS account and create a cross-account role for all the required policies so that the tool can access the resources. They can check and verify the reports. The internal audit team has advised to secure the cross-account roles further so that the role can only be used by the tool and not accidentally&nbsp;used by any other service to avoid the confused deputy problem. Your security team says the cross-account role is created with the origin AWS account number and does not require further security. Please select 2 valid options to justify and configure the access.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answers: B and D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because it is advisable to use the ExternalId to secure your AssumeRole calls further. This feature is only available via the CLI and API and not via the console.</li>\r\n\t<li>Option B is CORRECT because the auditing team is correct, and the AssumeRole can be further secure down with the use of ExternalId while giving access to the external tools.</li>\r\n\t<li>Option C is INCORRECT because it&rsquo;s just the ExternalId and not the OwnerId which you can pass along the AssumeRole API.</li>\r\n\t<li>Option D is CORRECT because you can use the ExternalId parameter while making the AssumeRole API call.</li>\r\n\t<li>Option E is INCORRECT because if the cross-account role is set with the ExternalId, the policy should be modified to add the ExternalId.&nbsp;</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35320,
            "question_id": 45313,
            "answers": [
              {
                "choice": "<p>The security team is correct, and you do not need any extra security to verify the access.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The auditing team is correct, and you can use the External Id to secure the access further.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the OwnerId and ExternalId with the AssumeRole API.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the ExternalId with the AssumeRole API.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You do not need to modify the IAM policy to add the ExternalId condition.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45314,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your organization has hundreds of developers using AWS accounts. Based on the organization policy, when a developer joins the company, a new AWS account is created for that user and added to the AWS Organisation for development and testing purposes.</p>\n\n<p>Your accounting team realizes that some extra cost has been added&nbsp;to the organization&rsquo;s total bill&nbsp;from these developer accounts recently. It is possible that either the individual developers do not turn off their instances after usage or run some software that they are not supposed to run. Select the process to restrict the developer accounts&#39; usage so that the overall usage remains within the company defined policies.&nbsp;Choose 4 suitable and effective options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: A, B, C, and E</strong></p>\n\n<ul>\n\t<li>Option A is CORRECT because the SCP or Service Control Policies can be used to allow/deny different AWS services depending on the requirement.</li>\n\t<li>Option B is CORRECT because the CloudWatch Events can be tracked based on CloudTrail API calls. This can be the starting point for collecting the information from the user accounts. For example, some CloudWatch Events can be triggered&nbsp;for an EC2 instance has been launched. However, this alone will not work, and some form of analysis will require to run on these events.</li>\n\t<li>Option C is CORRECT because the CloudTrail logs can be aggregated to the central S3 bucket and analyzed there.&nbsp;</li>\n\t<li>Option D is INCORRECT because this will not be an effective and scalable solution. There will be thousands of events, and it may not make any sense to process each of them for malicious activities.</li>\n\t<li>Option E is CORRECT because Users and roles must still be granted permissions with appropriate IAM permission policies. A user without any IAM permission policies has no access at all, even if the applicable SCPs allow all services and all actions.</li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35321,
            "question_id": 45314,
            "answers": [
              {
                "choice": "<p>Implement Service Control Policies to whitelist or blacklist different AWS services depending on the user role.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the CloudWatch Events to track the user activities.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Enable CloudTrail in the user accounts to track and log user activities, and redirect the logs to the organization-wise S3 bucket for processing.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Run AWS Lambda on individual user accounts to check for malicious activities.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Assign IAM policies to only allow certain activities.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 45315,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company decided to improve on the current batch processing model and start using the AWS Batch instead of the currently running SQS and EC2 with Auto Scaling configurations. Your processing jobs are using Docker containers. You also expect the jobs to grow in future. These jobs pull messages from the AWS SQS queue and write&nbsp;the data into DynamoDB tables once the processing is completed. You have created a small Proof-of-concept application to try out the AWS Batch before you actually migrate your job containers.</p>\r\n\r\n<p>As a part of the process, you created the required compute environment, job queue, and job definition to ensure you have everything you need before executing your first job. After submitting a job to the job queue, you realized that the job is stuck in the RUNNABLE state for a long amount of time. However, in your local environment, the job runs and completes within 2 to 5 minutes from the start. What could be the possible causes of the job being stuck into the RUNNABLE state?</p>\r\n\r\n<p>Please select 3 correct options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B, C, and D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A&nbsp; is INCORRECT because the CloudWatch Log group does not impact the Batch job&#39;s running status.</li>\r\n\t<li>Please refer to the following link:\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/batch-job-stuck-runnable-status/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/batch-job-stuck-runnable-status/</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Option B is CORRECT because no internet access for the compute resources may result in this issue.</li>\r\n\t<li>Refer to the link:&nbsp;<a href=\"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html\">https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html</a></li>\r\n\t<li>Option C is CORRECT because if the job has asked for more resources than the attached compute environment has, the Batch will not schedule the job to execute, and the job will stay in the RUNNABLE state forever.</li>\r\n\t<li>Option D is CORRECT because the job may require starting new instances to run the additional containers. If the AWS account has reached&nbsp;its limit, the service will not start new containers, and the job will remain in the RUNNABLE state.</li>\r\n\t<li>Option E is INCORRECT because the question has not mentioned connecting to the SQS privately from the VPC.&nbsp;VPC Endpoint is not required for AWS Batch to work.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35322,
            "question_id": 45315,
            "answers": [
              {
                "choice": "<p>Make sure a CloudWatch Log group is set up for the Batch job.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Make sure Internet Access is available to your container.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Make sure suitable CPU and RAM are allocated for the Batch job.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Make sure your AWS account has not reached to the EC2 limit.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Make sure the VPC Endpoint is set to access the SQS queue from the containers inside the VPC.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45316,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company is running a premium photo-sharing application. Users can upload their creative photos and license them to be used by others. The application allows the users to watermark and do other signatures before the images can be visible to everyone in the public stream. The watermarking and signature are based on the user-selected plan and allowed&nbsp;to do a certain number of images in a given timeframe. Along with this, the company has collaborated with some users and groups.&nbsp;They are allowed to process images faster compared to others whenever they submit their images.</p>\r\n\r\n<p>The application is currently saving the images into S3 when uploaded.&nbsp;From there,&nbsp;it generates the Lambda trigger to process the images. However, the application cannot manage the different pipelines of work and needs some ordered processing. The management has decided to re-engineer the application to support the above requirements effectively.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because while the SQS will definitely help decouple and streamline the message processing.&nbsp;It will still not be processed any desired order. The consumer application will receive the SQS queue messages and will have to use the additional logic to schedule and prioritize the processing.</li>\r\n\t<li>Option B is INCORRECT because just&nbsp;saving the processing information to the DynamoDB will not help in the scheduling or ordering the messages. The customer application will still receive the message from the SQS in a different order and will have to run the appropriate logic to schedule the tasks.</li>\r\n\t<li>Option C is CORRECT because it always allows the consumer to check the premium queue first.&nbsp;If&nbsp;the premium queue is empty, it will&nbsp;pull from the member queue, satisfying both the requirements to re-architect and processing some images before others. You can also scale your EC2 instances, processing the images based on need as well.&nbsp;</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Please refer to the following link-&nbsp;\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html\" target=\"_blank\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html</a>&nbsp;</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option D is INCORRECT because using AWS Batch to create jobs is not necessary here.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35323,
            "question_id": 45316,
            "answers": [
              {
                "choice": "<p>Use SQS queues instead of Lambda Trigger. Use the priority order messages to process the images.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Save the processing information to DynamoDB before saving the image to S3. When the AWS Lambda trigger runs, pull the information from DynamoDB and process accordingly.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use two SQS queues instead of Lambda Trigger. One with high priority messages and another for the low priority messages. Check for the messages into the high priority queue before processing any messages from the low priority queue.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS Batch to create jobs with priority job queues and use the combination of EC2 On-Demand and Spot instances to process the messages.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45317,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company runs a business management applications on the AWS cloud and has hundreds of customers. During the peak load, they receive hundreds of requests per second. The overall application uses many AWS services like API Gateway, Lambda, DynamoDB, Kinesis, RDS, etc. The product allows users to customize their environment based on their requirements.</p>\r\n\r\n<p>The product development team is divided into different groups and uses different programming languages for different parts of the application. With the launch of the new releases, the operations teams have started seeing a random decrease in the performance and increase in support tickets being generated. The management wants to prepare a plan to find out the performance issues in real-time, and add additional options to group the issues based on the feature or customer information&nbsp;to figure out high-impact customers. Please select two steps to prepare the tracing system based on the requirements.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: C and E</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because the CloudWatch Logs generated from these individual requests will, by default, not have any correlation identifier,&nbsp;and it will have to be done manually to tie up the original requests with all the logs.</li>\r\n\t<li>Option B is INCORRECT because while it may be possible to do, it will also require&nbsp;some usage of&nbsp;a correlation identifier to isolate interactions among different services.</li>\r\n\t<li>Option C is CORRECT because the X-Ray integrates well into the AWS services, and it can manage the request relation concerning other AWS services. AWS X-Ray provides wrappers for other AWS services as well&nbsp;as traces requests with more detailed information.</li>\r\n\t<li>Option D is INCORRECT because while this is doable, it may require an additional effort to log and generate custom metrics data. CloudWatch custom metrics are&nbsp;generally used where the custom and application-specific monitoring is required, like Disk Space Consumed or Payment Gateway Error, etc.</li>\r\n\t<li>Option E is CORRECT because, with the use of AWS X-Ray segments, detail tracing can be enabled. Annotations can help pinpoint specific areas of the application in the tracing records to isolate the issues and impact area further.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35324,
            "question_id": 45317,
            "answers": [
              {
                "choice": "<p>Publish logs using the CloudWatch Logs and redirect the logs to Kinesis to inspect the issues in real-time.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Due to the distributed nature of the application and multiple services used, use the 3rd party tool and integrate it with it.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use X-Ray to monitor the performance of your application.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudWatch custom metrics to publish and generate events for the notifications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use X-Ray segments and annotations for group-level tracing.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28751,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company hosts an on-premises legacy engineering application with 900GB of data shared via a central file server. The engineering data consists of thousands of individual files ranging in size from megabytes to multiple gigabytes. Engineers typically modify 5-10 percent of the files a day. Your CTO would like to migrate this application to AWS, with minimal downtime during normal business hours ( days ). You calculate that it will take a minimum of 48 hours to transfer 900GB of data using your company&rsquo;s existing 45-Mbps Internet connection.</p>\r\n\r\n<p>After replicating the application&rsquo;s environment in AWS, which option will allow you to cost-efficiently move the application&rsquo;s data to AWS without losing any data and within the given timeframe?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>In this scenario, the following important points need to be considered - (i) only the fraction of the data (5-10%) is modified every day, (ii) there are only 48 hrs for the migration, (iii) downtime should be minimized, and (iv) there should be no data loss.</p>\r\n\r\n<p>Option A is incorrect because even though it is theoretically possible to transfer 972GB of data in 48 hours with 45Mbps speed, this option will only work if you consistently utilize the bandwidth to the max. This option will have less time in hand if there are any problems with the multipart upload. Hence, not a practical solution.</p>\r\n\r\n<p>Option B is a proactive approach, which is CORRECT because the data changes are limited and can be propagated over the week. Also, the bandwidth would be used efficiently, and you would have sufficient time and bandwidth in hand, should there be any unexpected issues while migrating.</p>\r\n\r\n<p>Option C is incorrect because physically shipping the disk to Amazon would involve many external factors such as shipping delays, loss of shipping, damage to the disk, and the time would not be sufficient to import the data in a day. This is a very risky option and should not be exercised.</p>\r\n\r\n<p>Option D is incorrect because AWS Storage Gateway involves creating S3 snapshots and synchronizing. This option is slow and may not meet the limitation of 48 hrs downtime. Besides, using EBS volume to store a large amount of data is not cost-efficient.</p>\r\n\r\n<p>Please view the below video for best practices for cloud migration to AWS:</p>\r\n\r\n<p><a href=\"https://www.youtube.com/watch?v=UpeV4OqB6Us&amp;list=PL_RVC-cMNyYTz8zlxq117O1bfji-knooI&amp;index=23\" target=\"_blank\">https://www.youtube.com/watch?v=UpeV4OqB6Us&amp;list=PL_RVC-cMNyYTz8zlxq117O1bfji-knooI&amp;index=23</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18868,
            "question_id": 28751,
            "answers": [
              {
                "choice": "<p>Copy the data to Amazon S3 using multiple threads and multi-part upload for large files over the weekend, and work in parallel with your developers to reconfigure the replicated application environment to leverage Amazon S3 to serve the engineering files.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Sync the application data to Amazon S3 starting a week before the migration. On Friday night, perform the final sync, and copy the entire data set to your AWS file server after the sync completes.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Copy the application data to a 1-TB USB drive on Friday and immediately send overnight, with Saturday delivery, the USB drive to AWS Import/Export to be imported as an EBS volume, mount the resulting EBS volume to your AWS file server on Sunday.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Leverage the AWS Storage Gateway to create a Gateway-Stored volume. On Friday, copy the application data to the Storage Gateway volume. After the data has been copied, perform a snapshot of the volume, and restore the volume as an EBS volume to be attached to your AWS file server on Sunday.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 44771,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are a software engineer. You are developing an online food order web application. The Node.js backend needs to get the client&rsquo;s IP to understand users&rsquo; locations.&nbsp; The application is deployed in AWS EC2 with a network load balancer to distribute traffic. For the network load balancer, the target is specified using instance id. TLS is also terminated on the Network Load Balancer. You are worried that the backend cannot get the client&rsquo;s IP due to the network load balancer. Which below description is correct in this situation?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; C</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Network Load Balancer supports TLS termination between the clients and the load balancer.</p>\r\n\r\n<p>You can configure a target group so that you register targets by instance ID or IP address. If you specify targets using an instance ID, the clients&#39; source IP addresses are preserved and provided to your applications. If you specify targets by IP address, the source IP addresses are the private IP addresses of the load balancer nodes.</p>\r\n\r\n<p>Therefore, in this case, the source IP is preserved since the targets are specified by instance ID.</p>\r\n\r\n<p>References are in <a href=\"https://aws.amazon.com/elasticloadbalancing/features/#compare\" target=\"_blank\">https://aws.amazon.com/elasticloadbalancing/features/#compare</a> and <a href=\"https://docs.amazonaws.cn/en_us/elasticloadbalancing/latest/network/elb-ng.pdf\" target=\"_blank\">https://docs.amazonaws.cn/en_us/elasticloadbalancing/latest/network/elb-ng.pdf</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because the proxy protocol is not required in this case since the source IP is preserved.</li>\r\n\t<li>Option B is incorrect because X-Forwarded-For is an HTTP header instead of a TCP header. Also, it is not needed in this scenario.</li>\r\n\t<li>Option C is <strong>CORRECT</strong> because since the source IP is preserved, nothing else needs to be done.</li>\r\n\t<li>Option D is incorrect because changing the protocol to TCP will have a security issue. Again it is not required.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34782,
            "question_id": 44771,
            "answers": [
              {
                "choice": "<p>Enable proxy protocol using AWS CLI for the network load balancer so that you can get the client IP in the backend service.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You just need to get the client IP from the TCP X-Forwarded-For header, which is used to identify the user&#39;s originating IP address connecting to the webserver.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Source IP continues to be preserved to your back-end applications when TLS is terminated on the Network Load Balancer in this case.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Change listener protocol to TCP or change the load balancer to the application or classic load balancer. Otherwise, the client IP cannot be preserved.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28753,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following are Lifecycle events available in OpsWorks?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A, C, and D</p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p><strong>Setup</strong>&nbsp;occurs on a new instance after it successfully boots.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>Configure</strong>&nbsp;occurs on all of the stack&#39;s instances when an instance enters or leaves the online state.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>Deploy</strong>&nbsp;occurs when you deploy an app.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>Undeploy</strong>&nbsp;occurs when you delete an app.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p><strong>Shutdown</strong>&nbsp;occurs when you stop an instance.</p>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on Lifecycle events, please refer to the below URL-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-events.html\" target=\"_blank\">http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-events.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18870,
            "question_id": 28753,
            "answers": [
              {
                "choice": "<p>Setup</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Decommision</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Deploy</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Shutdown</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28727,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>You tried to integrate two&nbsp;systems including both the frontend and backend&nbsp;in a stack. These systems don&rsquo;t store any state inside. All of the state information is stored in a DynamoDB table. You have launched each of the systems with separate AMIs.</p>\n\n<p>During testing, it has been found that sometimes these server issues&nbsp;malformed requests. Your developers resolve the issue and need to deploy the fix to the systems as soon as possible without service disruption.</p>\n\n<p>What are the two&nbsp;most effective options from the below to deploy these fixes and ensure that healthy instances are redeployed? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B and&nbsp;C</strong></p>\n\n<ul>\n\t<li><strong>Option A is incorrect </strong>because this is just a distractor, Route53 cannot be directly&nbsp;used to deploy the fixes.</li>\n\t<li><strong>Option B is CORRECT</strong> because the Blue/Green deployment strategy can deploy new versions of AMIs without service disruption.</li>\n\t<li><strong>Option C is CORRECT</strong> because you can modify the AMI used by the Auto Scaling group and adjust the desired number of the ASG to launch new instances with the new AMI.</li>\n\t<li><strong>Option D is incorrect </strong>because deploying CloudFront is not needed in this situation.</li>\n\t<li><strong>Option E is incorrect</strong> because SQS does not help to deploy the new fix.</li>\n</ul>\n\n<p><strong>Reference:</strong></p>\n\n<ul>\n\t<li><a href=\"https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf\">https://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 92934,
            "question_id": 28727,
            "answers": [
              {
                "question_id": "28727",
                "choice": "<p>Use Route53 only</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28727",
                "choice": "<p>Use Blue/Green deployment strategy by creating new Auto Scaling groups with the new AMIs.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28727",
                "choice": "<p>Modify the AMIs used by the existing Auto Scaling groups and adjust the desired number of Auto Scaling group to deploy the new AMIs in the new instances.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28727",
                "choice": "<p>Use Amazon CloudFront with access to the frontend server with origin fetch.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28727",
                "choice": "<p>Use Amazon SQS between the frontend and backend subsystems.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28754,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app sends collected data points of 100 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night&rsquo;s data on a per-user basis and store the results in Amazon S3. Users are notified via Amazon SNS mobile push notifications that new data is available, which is parsed and visualized by the mobile app. Currently, you have around 100k users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower costs.</p>\r\n\r\n<p>What would you recommend? Choose 2 answers.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answers - C &amp; E</p>\r\n\r\n<p>Option A is incorrect because accessing the DynamoDB table for read and write by 100k users will exhaust the read and write capacity, which will increase the cost drastically.</p>\r\n\r\n<p>Option B is incorrect because creating clusters of EC2 instances will be a very expensive solution in this scenario.</p>\r\n\r\n<p>Option C is CORRECT because&nbsp;(a) with SQS, the huge number of writes overnight will be buffered/queued which will avoid exhausting the write capacity (hence, cutting down on cost), and (b) SQS can handle a sudden high load, if any.</p>\r\n\r\n<p>Option D is incorrect because the data is not directly accessed from the DynamoDB table by the users. It is accessed from S3. So, there is no need for caching. Since the results are stored in S3, introducing ElastiCache is unnecessary.</p>\r\n\r\n<p>Option E is CORRECT because once the aggregated data is stored on S3, there is no point in keeping the DynamoDB tables pertaining to the previous days. Keeping the tables for the latest data only will certainly cut the unnecessary costs, keeping the overall cost of the solution down.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18871,
            "question_id": 28754,
            "answers": [
              {
                "choice": "<p>Have the mobile app access Amazon DynamoDB directly instead of JSON files stored on Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new Amazon DynamoDB table each day and drop the one for the previous day after its data is on Amazon S3.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28755,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16. The user has created one subnet with CIDR 20.0.0.0/16 in this VPC. The user is trying to create another subnet with the same VPC for CIDR 20.0.0.0/24. What will happen in this scenario?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - A</p>\r\n\r\n<p>Since the CIDR of the new subnet overlaps with that of the first subnet, an overlap error will be displayed. See the snapshot below.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/12/ckeditor_cidr.png\" style=\"height:480px; width:833px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on VPC subnets, please refer to the below link.</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18872,
            "question_id": 28755,
            "answers": [
              {
                "choice": "<p>It will throw a CIDR overlap error.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>It is not possible to create a subnet with the same CIDR as the VPC.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The second subnet will be created.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The VPC will modify the first subnet to allow this IP range.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28756,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Currently, a company uses Redshift to store its analyzed data. They need to configure the Redshift cluster for a demo. What would be the minimum configuration that a user can choose for an SSD storage using Redshift in the console?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/02/09/ckeditor_63234.png\" style=\"height:633px; width:1308px\" /></p>\r\n\r\n<p>For more information on Redshift,&nbsp;please refer to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-launch-sample-cluster.html\" target=\"_blank\">https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-launch-sample-cluster.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18873,
            "question_id": 28756,
            "answers": [
              {
                "choice": "<p>Three nodes with 320GB each</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>One node of 320GB&nbsp;</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Two nodes with 128 TB each</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>One node of 160GB</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45318,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company has developed a Serverless web and mobile application that allows users to upload and monetize video courses. The application uses the API Gateway and Lambda as the front-end stack and uses MongoDB as the database.&nbsp;All the video contents are stored in the S3 and served via the CloudFront. The MongoDB is hosted outside of the AWS environment as a 3rd party database service. After the initial launch, the company started receiving performance-related issues for some of its popular courses.</p>\r\n\r\n<p>The operations team runs an uplink monitor to ensure that the database is connected and the bandwidth is optimal. The management has decided to run some analytics to check how each request from the web or mobile performs in real-time and how much time is allotted to the database. Please suggest the steps to easily migrate the database and&nbsp;create the analytics report&nbsp;and&nbsp;improve the application&#39;s overall performance. Select 3 Options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answers: B, C, and D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because while DynamoDB does provide better scalability and performance, it would need significant changes into the current application and would not be the right fit.</li>\r\n\t<li>Option B is CORRECT because this will surely reduce the additional latency overhead by using the MongoDB over the public interface to migrate to inside the AWS and use the high-speed private channels.</li>\r\n\t<li>Option C is CORRECT because the X-Ray can start logging the requests being made from one component to another and reporting the application&#39;s overall performance. With the use of segments and annotations, the requests can be further refined.</li>\r\n\t<li>Option D is CORRECT because this will speed up the overall response. Instead of fetching the course data from the database every time, the frequent access records can be cached and served from the caching server.</li>\r\n\t<li>Option E is INCORRECT because putting the SQS in-front of the database will not have any performance impact&nbsp;nor&nbsp;fulfill any application purpose. The SQS in-front of the database is generally used to reduce the request overhead onto the database and update the database consistently.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35325,
            "question_id": 45318,
            "answers": [
              {
                "choice": "<p>Use the DynamoDB instead of MongoDB as it provides better scalability and performance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Migrate the MongoDB from outside of the AWS to inside the AWS. This will reduce the additional latency required to connect with the database from the AWS environment.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Integrate the AWS X-Ray and create a segment around the MongoDB connections to measure actual latency per request.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use ElastiCache to cache the popular or frequently used courses data to reduce the interaction with the database.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS SQS in front of the database connection to decouple the application with direct database connectivity.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45319,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company has developed and managed&nbsp;a Cash Logistics application. The application collects data from a variety of sources like Bank, Deposit Boxes, or ATMs.&nbsp;Then, it&nbsp;routes the physical cash to various points like Chain Stores, Banks, and ATM points to schedule the pickups and drop-offs. The application receives requests in different formats from different sources like CSV, XML, JSON, or even encoded data. Due to the nature of the application, all the transfer requests come before 24 hours of the actual time of scheduling so that they can be processed and prepared for the scheduling.</p>\r\n\r\n<p>To support this, the company has been running a complex suite of data importers on their on-premises data centers. The importers listen to the data requests from the various sources&nbsp;and then load them in a pipeline for the scheduling. The import files can be of different size and complexities and some takes from few minutes to an hour to process the routing information. Lately, the application cannot keep up with the scale and the complexities of the infrastructure.&nbsp;More clients are added to the pipeline&nbsp;every time a new set of importer needs to be written and configured to work seamlessly with the application. This adds up to the onboarding time while integrating a new channel of the source. The company has decided to re-engineer this part and make it more efficient and scalable. Please select 3 valid options to re-design a scalable architecture that can run onto the AWS platform instead of the on-premise data centers.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A, B, and E</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because the AWS Glue is a fully serverless ETL framework that can process a large amount of data set effectively and can handle the transformation with little to no coding requirements. It is possible to trigger the AWS Batch process once the AWS Glue import is completed. This can invoke the route scheduling jobs based on the imported data.</li>\r\n\t<li>Option B is CORRECT because the AWS Batch can process a large number of jobs with varying compute requirements. The jobs can be prioritized as well as scheduled to perform after one another. The jobs run in the elastic containers and only consume the resources when there is anything to work on. This can be integrated with AWS Glue for the post-processing once the data is available for execution.</li>\r\n\t<li>Option C is INCORRECT because running the data load and scheduling the jobs in the Lambda will not be possible as per the business requirements. Also, in the question, it mentions that it may take few minutes to an hour to process the routing information. The Lambda has a limited run time of 15 minutes per execution. So some jobs may not fit into that.</li>\r\n\t<li>Option D is INCORRECT because different importers are required for the different file types, so there will be different EMR clusters that need to run and manage. EMR is technically the same as Glue, but it provides additional controls to manage the underlying Hadoop environment for the lower-level control. It may not be a suitable fit in the current context.</li>\r\n\t<li>Option E is CORRECT because it can automatically sync the request files from the on-premise data center to the AWS environment. Once the files are available in the S3, other processes can be triggered via the S3 Event Triggers.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35326,
            "question_id": 45319,
            "answers": [
              {
                "choice": "<p>Use the AWS Glue to perform the extract and import the data to the source database for job scheduling. Trigger the AWS Batch jobs once the data is imported to perform the route schedule.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the AWS Batch to execute the processing jobs for different importers. Create separate job definitions and compute environments to support different import files based on customers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create different S3 buckets for a different source. Use the Lambda trigger to invoke after a new request has arrived. The Lambda will process the file and import the data into the target database for the job scheduling.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the EFS to import the data from on-premises data centers to the AWS. Run the EMR jobs which can pull the data from the EFS and import the data into the database for the job scheduling.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Import the files of data requests from the on-premises data center to S3. Store the files into one S3 bucket and allocate one folder for each customer.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45334,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A startup company has developed its on-premises SAAS product using standard Kubernetes. Kubernetes has proved to be a success because of its feature of easily deploying, managing the worker nodes and managing containerized applications at scale. The R&amp;D team also gained adequate Kubernetes experiences, including related tools&nbsp;like&nbsp;kubectl. Recently, the CTO of the company has proposed to migrate the whole product to the AWS platform. They need a managed service that runs Kubernetes on AWS without installing, operating, and maintaining their own Kubernetes control plane or nodes. How should they easily design the migration and manage Kubernetes with the least code modification?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;incorrect</strong>&nbsp;because this option should be used when you want to manage Kubernetes by yourself fully.</li>\r\n\t<li><strong>Option&nbsp;B is CORRECT </strong>because applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, and can be easily migrated, whether running in on-premises datacenters or public clouds. With EKS, there is no need to refactor the code.&nbsp;According to&nbsp;<a href=\"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html\">https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html</a>,&nbsp;Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes.</li>\r\n\t<li><strong>Option C is&nbsp;incorrect</strong>&nbsp;because the appropriate service to manage and run Kubernetes should be EKS instead of ECS.</li>\r\n\t<li><strong>Option&nbsp;D is incorrect</strong>&nbsp;because AWS ECR is a docker registry service. It is not the service to manage the&nbsp;Kubernetes services.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35341,
            "question_id": 45334,
            "answers": [
              {
                "choice": "<p>Provision and run Kubernetes on powerful EC2 instance types such as c5 to fully manage the Kubernetes deployment.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Run Kubernetes in Amazon Elastic Kubernetes Service (EKS) without needing to provision or manage master instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In Amazon ECR, store, encrypt, and manage container images for fast deployment. Manage and run Kubernetes clusters in Amazon Elastic Container Service (ECS).</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure and run Kubernetes in AWS Elastic Container Registry&nbsp;without having to manage servers or clusters.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 45335,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You lead a team to use Kubernetes to develop some microservices in the local server and data center. To align with the company&rsquo;s strategy to move to the AWS cloud, you need to consider the possibilities of migrating the projects that your team is working on. You think that Amazon Elastic Container Service for Kubernetes (Amazon EKS) is a good candidate. In order to start using EKS properly, which prerequisites must be met? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;C, D</strong></p>\r\n\r\n<p>In order to use the EKS service properly, some prerequisites must be met, which is mentioned in <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html\" target=\"_blank\">https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect&nbsp;</strong>because EKS can pull Docker images from ECR or any other container registries, such as Docker Hub.</li>\r\n\t<li><strong>Option B is incorrect&nbsp;</strong>because using Route53 alone will not help to access the cluster. In addition to standard Amazon EKS permissions, your IAM user or role must have route53:AssociateVPCWithHostedZone permissions to enable the cluster&#39;s endpoint private access.</li>\r\n</ul>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Refer to page 41 on the below link under the &#39;Note&#39; section</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<a href=\"https://docs.aws.amazon.com/eks/latest/userguide/eks-ug.pdf\">https://docs.aws.amazon.com/eks/latest/userguide/eks-ug.pdf</a></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;C is&nbsp;correct&nbsp;</strong>because Amazon EKS needs the IAM role to create AWS resources such as a load balancer.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;correct&nbsp;</strong>because EKS has also provided a CloudFormation template to provide a suitable VPC for the EKS cluster. The link <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html\" target=\"_blank\">https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html</a> contains the instructions on how to create the cluster VPC for EKS.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35342,
            "question_id": 45335,
            "answers": [
              {
                "choice": "<p>All related container images are registered in Amazon ECR since EKS can only pull docker images from ECR.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A Route53&nbsp;should be in place for Amazon EKS to route internet traffic among various public subnets.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An IAM EKS service role should be created to allow Amazon EKS to manage clusters on your behalf.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A VPC exists for the EKS cluster to use.&nbsp;</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28761,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You&#39;ve created a temporary application that accepts image uploads, stores them in S3, and records information about the image in RDS. After building this architecture and accepting images for the duration required, it&#39;s time to delete the CloudFormation template. However, your manager has informed you that the RDS data needs to be stored for archival reasons, and the S3 bucket with the images needs to remain. Your manager has also instructed you to ensure that the application can be restored by a CloudFormation template and run next year during the same period.</p>\r\n\r\n<p>Knowing that when a CloudFormation template is deleted, it will remove the resources it created. What is the best method for achieving the desired goals?</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Choose the correct option from the below:</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The main points in this question are (i) the need for an ability by which the RDS data&nbsp;can be restored if needed and (ii) the S3 bucket with the images needs to retain.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because it replicates the images into another bucket, but does not ensure that the bucket itself would retain.</p>\r\n\r\n<p>Option B is incorrect because RDS data does not need to be retained. You just need the ability to restore the RDS data - for which you need to use a snapshot policy.</p>\r\n\r\n<p>Option C is incorrect because the S3 bucket itself needs to be retained. Hence you need to use the retain&nbsp;policy for the S3 bucket.</p>\r\n\r\n<p>Option D is CORRECT because it uses a&nbsp;retain policy for the S3 bucket and a snapshot policy for RDS such that the data can be restored when needed.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on DeletionPolicy Options:</strong></p>\r\n\r\n<p><em>Delete</em></p>\r\n\r\n<p>AWS CloudFormation deletes the resource and all its content if applicable during stack deletion.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Retain</em></p>\r\n\r\n<p>AWS CloudFormation keeps the resource without deleting the resource or its contents when its stack is deleted.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>Snapshot</em></p>\r\n\r\n<p>For resources that support snapshots (AWS::EC2::Volume, AWS::ElastiCache::CacheCluster, AWS::ElastiCache::ReplicationGroup, AWS::RDS::DBInstance, AWS::RDS::DBCluster, and AWS::Redshift::Cluster), AWS CloudFormation creates a snapshot for the resource before deleting it.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on CloudFormation deletion policy, please visit the below URL:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18878,
            "question_id": 28761,
            "answers": [
              {
                "choice": "<p>Enable S3 bucket replication on the source bucket to a destination bucket to maintain a copy of all the S3 objects, set the deletion policy for the RDS instance to snapshot.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>For both the RDS and S3 resource types on the CloudFormation template, set the DeletionPolicy to retain.</p>",
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
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45336,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are an AWS administrator for a large organization, and you maintain several AWS accounts. Your manager recently asked you to generate the Cost &amp; Usage Reports from the billing dashboard regularly so that he can have a review of the usage and cost status. Through the AWS Billing &amp; Cost Management console, you have configured the report successfully. How should you present the reports to your manager?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer -&nbsp;C</strong></p>\r\n\r\n<p>When the Billing Report is set up, an S3 bucket is essential to store the reports.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/25/ckeditor_3.png\" style=\"height:593px; width:1000px\" />&nbsp;</p>\r\n\r\n<p>Then AWS delivers the report files to that bucket and updates the report up to three times a day.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;incorrect</strong>&nbsp;because SNS cannot be used for the billing report notification.</li>\r\n\t<li><strong>Option B is&nbsp;incorrect</strong>&nbsp;because you should give the least privilege to users. Creating an admin IAM user is improper.</li>\r\n\t<li><strong>Option C is&nbsp;correct</strong>&nbsp;because appropriate permissions should be configured for the users who need access to the S3 bucket.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong>&nbsp;because the bucket should NOT be publicly&nbsp;accessible. And the S3 bucket policy should only allow limited users to view the report.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35343,
            "question_id": 45336,
            "answers": [
              {
                "choice": "<p>Configure the billing report to use SNS to send the report to your manager with an email notification every day.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM admin user for your manager so that he can log in to the AWS billing console to view the Cost &amp; Usage Reports.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an S3 bucket where AWS delivers the billing report files. Allocate a read access for your manager to this bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new S3 bucket for AWS to send the billing report files to. Make sure the bucket is publicly accessible by modifying the bucket policy so that your manager can see the report properly.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 45337,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Consolidated Billing feature is used in a multinational company. A master AWS account is a setup to pay the charges of all the member accounts. You are an AWS solutions architect. You created the billing Cost and Usage Reports in the master AWS account. In terms of this billing report configuration, which benefits can you get? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;B, D</strong></p>\r\n\r\n<p>For Cost and Usage Reports, if the consolidated billing feature in AWS Organizations is used, only the master account can create and view the reports. Check the details in <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage.html</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect&nbsp;</strong>because member accounts cannot see their reports and the only&nbsp;master account can. Besides, the reports are updated up to three times a day instead of every hour.</li>\r\n\t<li><strong>Option B is&nbsp;CORRECT&nbsp;</strong>because AWS has provided the integration with Redshift for the billing reports:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/25/ckeditor_4.png\" style=\"height:535px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li>For more information:\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage-upload.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage-upload.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li><strong>Option&nbsp;C is incorrect </strong>because the report is a .csv file or a collection of .csv files instead of JSON format.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT:&nbsp;</strong>This is correct according to\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-costusage.html</a>.</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35344,
            "question_id": 45337,
            "answers": [
              {
                "choice": "<p>The billing reports for all member accounts are activated automatically and refreshed each hour. All member accounts can view their reports on the billing dashboard.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The report data can be uploaded to Amazon Redshift, allowing you to analyze the costs and usage. Billing and Cost Management can provide the&nbsp;RedshiftCommands.sql file in the Billing and Cost Management Console.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The JSON format billing reports are uploaded to an S3 bucket that was previously configured. You could easily download the reports from the Amazon S3 console.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The reports are available only to the master account and include activities for all the member accounts.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28728,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are moving an existing traditional system to AWS. During migration, you discover that the master server is the single point of failure. You also discover that the server stores its state in the local MySQL database. To minimize downtime, you select RDS to replace the local database and configure the master to use it. What steps would best allow you to create a self-healing architecture?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - A</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because, for the database, Multi-AZ architecture provides high availability and can meet the RTO and RPO requirements in case of failures since it uses synchronous replication and maintains standby instance gets promoted to primary. Auto Scaling group can achieve the high availability for the master server.</li>\r\n\t<li>Option B is incorrect because ELB cannot ensure the minimum or the maximum number of instances running.</li>\r\n\t<li>Option C is incorrect because&nbsp;ELB cannot ensure the minimum or the maximum number of instances running.</li>\r\n\t<li>Option D is incorrect because the Read Replica cannot achieve the self-healing requirements. Multi-AZ should be used.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Multi-AZ RDS architecture:</strong></p>\r\n\r\n<p>Multi-AZ is used for highly available architecture. If a failover happens, the secondary DB, which is a synchronous replica, will have the data, and it&rsquo;s just the CNAME that changes. For Read replica, it&rsquo;s primarily used for distributing workloads.</p>\r\n\r\n<p>For&nbsp;more information on Multi-AZ RDS, please refer to the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/multi-az/\" target=\"_blank\">https://aws.amazon.com/rds/details/multi-az/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18845,
            "question_id": 28728,
            "answers": [
              {
                "choice": "<p>Migrate the local database into the Multi-AZ database. Amazon RDS detects and automatically recovers from the most common failure scenarios for Multi-AZ deployments. Configure the master node in&nbsp;an Auto Scaling group.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Migrate the local database into the Multi-AZ database. Place the master node into a Cross Zone ELB with a minimum of one and a maximum of one with health checks.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Replicate the local database into an RDS database with a Read Replica. Place the master node into a Cross Zone ELB with a minimum of one and a maximum of one with health checks.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Replicate the local database into an RDS database with a Read Replica. Configure the master node in&nbsp;an Auto Scaling group.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 45338,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An e-commerce platform has sent online order requests to a standard SQS queue. The visibility timeout for the messages in the queue is set as 30 seconds by default. The message retention period is 7 days. From the backend log system, it has been found that the backend processing of some messages has failed. As a result, these messages were not deleted successfully from the queue. What should you do to isolate the failed messages to troubleshoot the reason why the processing doesn&#39;t succeed?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;D</strong></p>\r\n\r\n<p>When messages in an SQS queue can&#39;t be consumed successfully, the messages can be put into a dead-letter queue, ideal for isolating the problematic message.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect&nbsp;</strong>because the queue type for the original queue and dead letter queue should match. Therefore, in this case, the dead letter queue should also be a standard queue.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect </strong>because the visibility timer adjustment does not help to isolate messages that have issues.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;Same reason as Option B. When the visibility timer is modified to 0, visibility timeout is also terminated.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;correct:&nbsp;</strong>For example, if the source queue has set maxReceiveCount to 2, and the consumer of the source queue receives a message 2 times without ever deleting it, the message will be put to the dead-letter queue. Then those problematic messages are ready to be analyzed.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35345,
            "question_id": 45338,
            "answers": [
              {
                "choice": "<p>Create a new FIFO queue as the dead letter queue. So the failed messages are isolated and stored in this dead letter queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Enlarge the visibility timer a little bit and monitor the log system to see if there are still messages that fail to be processed.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Modify the visibility timer to 0 to mitigate the impacts when messages are deleted unsuccessfully.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create another SQS standard queue as the dead letter queue. So the problematic messages are isolated.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28765,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an application that is hosted on an EC2 instance. The code is written in .NET and connects to a MySQL RDS database. If you&#39;re executing .NET code against AWS on an EC2 instance that is assigned an IAM role, which of the following is a true statement?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>The best practice for IAM is to create roles that have specific access to an AWS service and then give the user permission to the AWS service via the role.</p>\r\n\r\n<p>For the best practices on IAM policies, please visit the links</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note</strong>:</p>\r\n\r\n<p>As per AWS,<br />\r\nWhen you launch an EC2 instance, you specify an IAM role to associate with the instance. Applications that run on the instance can then use the role-supplied temporary credentials to sign API requests.<br />\r\nUsing roles to grant permissions to applications that run on EC2 instances requires a bit of extra configuration. An application running on an EC2 instance is abstracted from AWS by the virtualized operating system. Because of this extra separation, an additional step is needed to assign an AWS role and its associated permissions to an EC2 instance and make them available to its applications. This extra step is the creation of an&nbsp;<em><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html\">instance profile</a></em>&nbsp;that is attached to the instance. The instance profile contains the role and can provide the role&#39;s temporary credentials to an application that runs on the instance. Those temporary credentials can then be used in the application&#39;s API calls to access resources and limit access to only those resources that the role specifies. Note that, only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.<br />\r\n<br />\r\nThe example given here shows how the application retrieves role permissions from the instance for accessing the bucket.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2018/12/31/ckeditor_aws-csap-p3-36.png\" style=\"height:372px; width:789px\" /></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18882,
            "question_id": 28765,
            "answers": [
              {
                "choice": "<p>Retrieve the temporary security credentials from Amazon EC2 instance metadata. These are then passed on to the code that assumes the role and is valid for a limited time.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The code must have AWS access keys to execute.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Only .NET code can assume IAM roles.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>None of the above</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28766,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company is making extensive use of S3. They have a strict security policy and require that all artifacts are stored securely in S3. When specified in an API call, which of the following request headers will cause an object to be SSE?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Server-side encryption is about protecting data at rest. Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.</p>\r\n\r\n<p>The object creation REST APIs (see&nbsp;Specifying Server-Side Encryption Using the REST API) provides a request header,&nbsp;x-amz-server-side-encryption&nbsp;that you can use to request server-side encryption.</p>\r\n\r\n<p>To encrypt an object at the time of upload, you need to add a header called&nbsp;x-amz-server-side-encryption to the request to tell S3 to encrypt the object using SSE-C, SSE-S3, or SSE-KMS. The following code example shows a&nbsp;Put&nbsp;request using SSE-S3.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<pre>\r\nPUT /example-object HTTP/1.1\r\nHost: myBucket.s3.amazonaws.com\r\nDate: Wed, 8 Jun 2016 17:50:00 GMT\r\nAuthorization: authorization string&nbsp;&nbsp;\r\nContent-Type: text/plain\r\nContent-Length: 11434\r\nx-amz-meta-author: Janet\r\nExpect: 100-continue\r\n<strong>x-amz-server-side-encryption: AES256</strong>\r\n[11434 bytes of object data]\r\n</pre>\r\n\r\n<p>In order to enforce object encryption, create an S3 bucket policy that denies any S3&nbsp;Put&nbsp;request that does not include the&nbsp;x-amz-server-side-encryption&nbsp;header. There are two possible values for the&nbsp;x-amz-server-side-encryption&nbsp;header:&nbsp;AES256, which tells S3 to use S3-managed keys, and&nbsp;aws:kms, which tells S3 to use AWS KMS&ndash;managed keys.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on S3 encryption, please visit the links.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html</a><br />\r\n<a href=\"https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/\" target=\"_blank\">https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18883,
            "question_id": 28766,
            "answers": [
              {
                "choice": "<p>AES256</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>amz-server-side-encryption</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>x-amz-server-side-encryption</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>server-side-encryption</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 28768,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>One of your requirements is to set up an S3 bucket to store your files like documents and images. However, those objects should not be directly accessible via the S3 URL. They should only be accessible from pages on your website so that only your paying customers can see them. How could you implement this?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Suppose you have a website with the domain name (www.example.com&nbsp;or&nbsp;example.com) with links to photos and videos stored in your S3 bucket,&nbsp;examplebucket. By default, all the S3 resources are private, so only the AWS account that created the resources can access them. To allow read access to these objects from your website, you can add a bucket policy that allows&nbsp;s3:GetObject&nbsp;permission with a condition, using theaws:referer&nbsp;key. The get request must originate from specific web pages.</p>\r\n\r\n<p>Option A is incorrect because the HTTPS endpoint will not ensure that only authenticated users can get access to the content.&nbsp;</p>\r\n\r\n<p>Option B is CORRECT because it defines the appropriate bucket policy to give access to the S3 content to the authenticated users. Refer to page 390 under section &quot;Restricting Access to a Specific HTTP Referer&quot; in the below link</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-dg.pdf\">https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-dg.pdf</a></p>\r\n\r\n<p>Option C is incorrect because you can control the access to the S3 content via bucket policy.</p>\r\n\r\n<p>Option D is incorrect because the question is not about encrypting/decrypting the data. The proper bucket policy needs to be defined to give access to the S3 content to certain users.</p>\r\n\r\n<p>For more information on S3 bucket policy examples, please visit the link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18885,
            "question_id": 28768,
            "answers": [
              {
                "choice": "<p>Use HTTPS endpoints to encrypt the data in the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use a bucket policy with the aws:referer key in a condition where the key must match your domain. Browsers should include the HTTP referer header in the request.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can&#39;t. The S3 URL must be public in order to use it on your website.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use server-side and client-side encryption. Only your application can decrypt the objects.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 44772,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A big trading company requires various organizations such as importers, exporters, banks, shipping companies, and customs departments to work with one another. The trade-related paperwork needs to go back and forth between the stakeholders, taking 5-10 days to complete, which is very time-consuming. The company is considering creating a blockchain network where all parties can transact and process trade-related paperwork electronically without the need for a central trusted authority.</p>\r\n\r\n<p>For the below descriptions, which ones help the company understand AWS Managed Blockchain service? Choose 3.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; A, B, E</strong></p>\r\n\r\n<p>Amazon Managed Blockchain is a fully managed service that makes it easy to create and manage scalable blockchain networks using the popular open-source frameworks Hyperledger Fabric and Ethereum.</p>\r\n\r\n<p>Amazon Managed Blockchain has various benefits, such as that it is fully managed, scalable, and secure. Details can be found in <a href=\"https://aws.amazon.com/managed-blockchain/\" target=\"_blank\">https://aws.amazon.com/managed-blockchain/</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is <strong>CORRECT</strong> because a member can quickly add a new peer node using Managed Blockchain&#39;s APIs.</li>\r\n\t<li>Option B is <strong>CORRECT</strong> because Amazon Managed Blockchain takes care of the hardware, software provisioning, etc.</li>\r\n\t<li>Option C is incorrect because Amazon Managed Blockchain does not require an upfront fee, and there is no commitment for usage.</li>\r\n\t<li>Option D is incorrect because, at the moment, only Hyperledger Fabric and Ethereum are supported in US East (N. Virginia) region.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-4.jpg\" style=\"height:284px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;E is&nbsp;<strong>CORRECT</strong>&nbsp;because the member can configure peer nodes. Refer to the below picture on how AWS Managed Blockchain works.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-4.1.jpg\" style=\"height:221px; width:750px\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34783,
            "question_id": 44772,
            "answers": [
              {
                "choice": "<p>Amazon Managed Blockchain can easily scale the blockchain network as the usage of applications on the network grow&nbsp;over time.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Managed Blockchain eliminates the need for manually provisioning hardware, configuring software, and setting up networking and security components.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Managed Blockchain charges an upfront fee and requires a commitment for a 12 months usage.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Popular blockchain frameworks, including Hyperledger Fabric, Ethereum, and R3 Corda, are supported in most regions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Once a new member is added, Managed Blockchain lets that member launch and configure multiple blockchain peer nodes.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28770,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are having trouble maintaining session states on some of your applications using an Elastic Load Balancer(ELB). Requests from the same session should be routed to the same target in the target group. Which of the following is the quickest and cost-efficient method to implement this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because although ElastiCache can be utilized to store the session state in the cache rather than in any database, it is slow&nbsp;to implement and not cost-efficient if compared with option C.</li>\r\n\t<li>Option&nbsp;C is CORRECT because Sticky sessions, also known as session affinity, allow you to route a site user to the particular web server managing that individual user&rsquo;s session. It is also the most cost-efficient method.</li>\r\n\t<li>Options B and D are incorrect because they describe the methods partially and do not clearly indicate that the sticky session feature should be used.</li>\r\n</ul>\r\n\r\n<p>Reference can be found in&nbsp;<a href=\"https://aws.amazon.com/caching/session-management/\" target=\"_blank\">https://aws.amazon.com/caching/session-management/</a>.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18887,
            "question_id": 28770,
            "answers": [
              {
                "choice": "<p>Disable Sticky session. Use Elasticache to put session data. Elasticache is easy to set up, manage, and scale a distributed in-memory cache environment in the cloud.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a special cookie to track the instance for each request to each listener. When the load balancer receives a request, it will then check to see if this cookie is present in the request.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the sticky session feature (also known as session affinity), enabling the load balancer to bind a user&#39;s session to a specific instance. This ensures that all requests from the user during the session are sent to the same instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>If your application does not have its own session cookie, then you can configure Elastic Load Balancing to create a session cookie by specifying your own stickiness duration.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28771,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are deploying your first EC2 instance in AWS and are using the AWS console to do this. You have chosen your AMI and your instance type and have now come to the screen where you configure your instance details. One of the things that you need to decide is whether you want to auto-assign a public IP address or not. You assume that if you do not choose this option, you will be able to assign an Elastic IP address later, which happens to be a correct assumption. Which of the below options best describes why an Elastic IP address would be preferable to a public IP address?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because public IP addresses are free.</p>\r\n\r\n<p>Option B is CORRECT because you can reassign the EIP to a new instance in case of an instance failure. Thus you do not need to change any reference to the IP address in your application.</p>\r\n\r\n<p>Option C is incorrect because the number of EIPs per account per region is limited (5).</p>\r\n\r\n<p>Option D is incorrect because EIPs are accessible from the internet.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on EIPs</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>An&nbsp;<em>Elastic IP address</em>&nbsp;is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.</p>\r\n\r\n<p>An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18888,
            "question_id": 28771,
            "answers": [
              {
                "choice": "<p>An Elastic IP address is free, whilst you must pay for a public IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can have an unlimited amount of Elastic IP addresses. However, public IP addresses are limited in number.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>An Elastic IP address cannot be accessed from the internet like a public IP address and hence is safer from a security standpoint.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28772,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have an EBS root device on /dev/sda1 on one of your EC2 instances. You are having trouble with this particular instance, and you want to either Stop/Start, Reboot,&nbsp;or Terminate the instance. But you do not want to lose any data that you have stored on /dev/sda1. Which of the below statements best describes the effect each change of instance state would have on the data you have stored on /dev/sda1?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<p>Since this is an EBS backed instance, it can be stopped and later restarted without affecting data stored in the attached volumes. By default, the root device volume for this instance will be deleted when the instance terminates.&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because, upon termination, the volume would get deleted, and the data would get lost (DeleteOnTermination setting is not mentioned, so this is a default case).</li>\r\n\t<li>Option B is incorrect because the data on EBS volume would not get lost upon stop/start or reboot.</li>\r\n\t<li>Option C is incorrect because the data on EBS volume would not get lost upon reboot.</li>\r\n\t<li>Option D is CORRECT because the data on EBS volume would not get lost upon stop/start or reboot as it is not ephemeral. On the other hand, the Instance store is ephemeral storage, and the data would get lost upon starting/stopping the instance.</li>\r\n</ul>\r\n\r\n<p>More information on this topic:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18889,
            "question_id": 28772,
            "answers": [
              {
                "choice": "<p>Whether you stop/start, reboot, or terminate the instance, it does not matter because data on an EBS volume is not ephemeral, and the data will not be lost regardless of what method is used.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Whether you stop/start, reboot, or terminate the instance, it does not matter because data on an EBS volume is ephemeral, and it will be lost no matter what method is used.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>If you stop/start the instance, the data will not be lost. However, if you either terminate or reboot the instance, the data will be lost.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The data will remain on /dev/sda1 if you reboot or stop/start the instance because data on an EBS volume is not ephemeral.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28773,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Someone on your team configured a Virtual Private Cloud with two public subnets in two separate AZs and two private subnets in two separate AZs. Each public subnet AZ has a matching private subnet AZ. The VPC and its subnets are properly configured. There are multiple webserver instances in the private subnet. You are told to set up a public-facing Elastic Load Balancer in the public subnets to accept requests from clients and distribute those requests to the webserver instances. How can you set this up?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<p><strong>Option A is incorrect </strong>because you need to set up the internet-facing load balancer. So the public subnets need to be associated.</p>\r\n\r\n<p><strong>Option B is incorrect</strong> because web servers need to remain in the private subnets. There is no need to shift them to the public subnet.</p>\r\n\r\n<p><strong>Option C is CORRECT</strong> because you need to associate the public subnets with the internet-facing load balancer. You would also need to ensure that the security group of the load balancer has the listener ports open and the security groups of the private instances allow traffic on the listener ports and the health check ports.</p>\r\n\r\n<p><strong>Option D is incorrect</strong> because you can configure the internet-facing load balancer with the public subnet.&nbsp;</p>\r\n\r\n<p>For more information on the AWS ELB, please refer to the below links.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/\" target=\"_blank\">https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84456,
            "question_id": 28773,
            "answers": [
              {
                "question_id": "28773",
                "choice": "<p>Select both of the private subnets which contain the webserver instances when configuring the ELB.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28773",
                "choice": "<p>Move the webserver instances from&nbsp;the private subnets to the public subnets and then configure the ELB with those subnets.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28773",
                "choice": "<p>Select both of the public subnets when configuring the ELB.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28773",
                "choice": "<p>You can&#39;t. The ELB must be in the same private subnets as the webserver instances.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28729,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>A company has hired you to assist with the migration of an interactive website that allows registered users to rate local restaurants. Updates to the ratings are displayed on the home page, and ratings are updated in real-time. Although the website is not very popular today, the company anticipates that it will grow over the next few weeks. They also want to ensure that the website remains highly available. The current architecture consists of a single Windows server 2016&nbsp;web server and a MySQL database on Linux. Both reside inside on an on-premises hypervisor. What would be the most efficient and optimal way to point the application to AWS, ensuring high performance and availability?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<p>The main consideration in the question is that the architecture should be highly available with high performance.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect&nbsp;</strong>because (a) EC2 servers can communicate with S3 for the web files, and (b) Auto Scaling of webservers and the setup of Multi-AZ RDS instance, as well as the Route 53 alias record with ELB provides high availability. However, this option does not mention the use of VM Import/Export that would provide an &quot;optimal&quot; solution to the given requirement.</li>\r\n\t<li><strong>Option B is incorrect</strong> because this is an interactive website and S3 is suitable for static websites.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because Route 53 is used to create an Alias record to point to an ELB DNS. Using a VM Import/Export would be the most &quot;optimal&quot; solution as given in the requirement.</li>\r\n\t<li><strong>Option D is incorrect</strong> because, in Route 53, you should create an Alias record pointing to the ELB rather than the EC2 IP addresses.&nbsp;When the EC2 instance in the Auto Scaling group is recreated, the IP will be changed, and the A record will not work in Route 53.</li>\r\n</ul>\r\n\r\n<p>For more information, please refer to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 80195,
            "question_id": 28729,
            "answers": [
              {
                "question_id": "28729",
                "choice": "<p>Configure Auto Scaling to launch one Windows Server 2016&nbsp;instance each in us-west-1a and us-west-1b. Copy the web files from an on-premises web server to each Amazon EC2 web server, using Amazon S3 as the repository. Launch a Multi-AZ MySQL Amazon RDS Instance in us-west-1a and us-west-1b. Import the data into Amazon RDS from the latest MySQL backup. Create an elastic load balancer (ELB) to front your web servers. Use Amazon Route53 and create an alias ( Type: A-IP4 Address ) record pointing to the ELB.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28729",
                "choice": "<p>Export web files to an Amazon S3 bucket in us-west-1. Run the website directly out of Amazon S3. Launch a Multi-AZ MySQL Amazon RDS instance in us-west-1a. Import the data into Amazon RDS from the latest MySQL backup. Use Route 53 and create an alias record pointing to the elastic load balancer.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28729",
                "choice": "<p>Use AWS VM Import/Export to create an Amazon EC2 AMI of the webserver. Configure Auto Scaling to launch one web server in us-west-1a and one in us-west-1b. Create an Elastic Load Balancer to distribute the traffic. Launch a Multi-AZ MySQL Amazon RDS instance in us-west-1. Import the data Into Amazon RDS from the latest MySQL backup. Use Amazon Route 53 and create an Alias record pointing to the Elastic Load Balancer.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28729",
                "choice": "<p>Use AWS VM Import/Export to create an Amazon EC2 AMI of the webserver. Configure Auto Scaling to launch one webserver in us-west-1a and one in us-west-1b. Launch a Multi-AZ MySQL Amazon RDS instance in us-west-1. Import the data into Amazon RDS from the latest MySQL backup. Use Amazon Route 53 to create a hosted zone and point an A record to the EC2 IP addresses.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28774,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have been asked to design the storage layer for an application. The application requires the&nbsp;disk performance to be at least 100000 IOPS. The data should be&nbsp;highly available without data loss, even when an availability zone has an outage. The volume you provide must have a capacity of at least 2&nbsp;TB. Which of the following designs will meet these objectives?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because this configuration is done entirely in a single AZ. There will be a data loss if the entire AZ goes down.</li>\r\n\t<li>Option B is CORRECT because (a) it uses RAID 0&nbsp;configuration that utilizes all the volumes and gives the aggregated IOPS performance, and (b) the replication across another AZ gives higher availability and fault tolerance even in case of an entire AZ becomes unavailable.</li>\r\n\t<li>Option C is incorrect because it uses an asynchronous backup of the data. The problem scenario demands a synchronous replication to prevent any data loss.</li>\r\n\t<li>Option D is incorrect because RAID 5 is not recommended for Amazon EBS since the parity write operations consume some of the IOPS available to the volumes. See the links below for more details.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/raid-config.html\">http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/raid-config.html</a></li>\r\n\t<li><a href=\"https://en.wikipedia.org/wiki/Standard_RAID_levels\">https://en.wikipedia.org/wiki/Standard_RAID_levels</a></li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option E is incorrect because, even if the snapshots are taken every 15 minutes, there are chances that there will be data loss during this time. The requirement is that there should be absolutely no data loss.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18891,
            "question_id": 28774,
            "answers": [
              {
                "choice": "<p>Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD disks provided with the instance. Provision 3&times;1 TB EBS volumes attach them to the instance and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral backed volume to the EBS-backed volume.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0&nbsp;volume using the four 800GB SSD disks provided with the Instance Configure synchronous block-level replication to an identically configured instance in us-east-1b.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Instantiate a c3.8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Instantiate a c3.8xlarge instance in us-east-1 provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Instantiate a c3 8xlarge Instance in us-east-1 Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45339,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A complicated data analysis software in JAVA has used a standard SQS queue to decouple users&#39; requests and the backend processing. The visibility timeout for the queue is set as 60 seconds. In most cases, the process of messages can finish within 1 minute successfully. However, it may take about 100 seconds for the backend to get the job done for certain new requests. These requests are tagged with a specific JSON header by the frontend already. You want to ensure that these new requests are processed properly in the backend. How should you improve the queue configurations in the best way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;B</strong></p>\r\n\r\n<p>For the new requests, the default visibility timeout of 60 seconds for the queue would be insufficient. The messages&rsquo; visibility should be extended by specifying a new timeout value using the ChangeMessageVisibility action through the AWS SDK.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because this change in the AWS console is a global change for all messages in the queue. However, in this case, only specific messages need to extend the timer.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;correct</strong>:&nbsp;Refer to <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-visibility-timeout-queue.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-visibility-timeout-queue.html</a> on how to configure Visibility Timeout for an Amazon SQS queue. Using the method, those messages with particular JSON headers can get a revised timer.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>:&nbsp;Because the FIFO queue type does not help with the visibility timeout issue for the new messages.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:</strong>&nbsp;Although the dead letter queue can help isolate the new messages, it cannot fix the problem on the visibility timeout issue. Besides, the timer needs to be enlarged only for these new messages.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35346,
            "question_id": 45339,
            "answers": [
              {
                "choice": "<p>In the AWS SQS console, simply change the default visibility timeout from 1 minute to 2 minutes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS SDK to adjust the visibility timeout to 2 minutes for messages that contain the specific JSON header.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Change the queue type from standard to FIFO with the default visibility timeout configured as 2 minutes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a new SQS queue as the dead letter queue. Route these specific requests to the dead letter queue so that the normal backend process is not influenced.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28776,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You have been asked to leverage Amazon VPC EC2 and SQS to implement an application that processes millions of messages per second from a message queue. You want to ensure that your application in EC2 instances has sufficient bandwidth when the SQS queue grows. The instances also need to access the internet. Which option will provide the most scalable solution for the application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>The Amazon EC2 instance requires access to the Internet. Hence, it should be in a public subnet or be in a private subnet with a NAT instance/gateway in the public subnet.</p>\r\n\r\n<p>Option A is incorrect because ELB does not ensure scalability.</p>\r\n\r\n<p>Option B is incorrect because (a) the EBS-optimized option will not contribute to scalability, and (b) there should be a NAT instance/gateway in the public subnet of the VPC for accessing SQS.</p>\r\n\r\n<p>Option C is incorrect because if you remove the NAT instance, the EC2 instance cannot access the SQS service.</p>\r\n\r\n<p>Option D is CORRECT because (a) it uses Auto Scaling for ensuring scalability of the application, and (b) it has instances in the public subnet so they can access the SQS service.&nbsp;</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_6tawan.png\" style=\"height:385px; width:700px\" /></p>\r\n\r\n<p>For more information on SQS, please visit the below URL-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/sqs/faqs/\" target=\"_blank\">https://aws.amazon.com/sqs/faqs/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18893,
            "question_id": 28776,
            "answers": [
              {
                "choice": "<p>Ensure the application instances are properly configured with an Elastic Load Balancer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure the application instances are launched in private subnets with the EBS-optimized option enabled.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure the application instances are launched in private subnets with the associate-public-IP-address=true option enabled. Remove any NAT instance from the public subnet, if any.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure the application instances are launched in public subnets with an Auto Scaling group and Auto Scaling triggers are configured to watch the SQS queue size.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45340,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your company is migrating an entire project to AWS. However, as certain legacy databases are too old to be migrated, your team has established two direct connections (10 gigabits) to link the on-premises data center with various AWS services such as S3, EC2, Lambda, etc. Your lead asks you to aggregate the two direct connections ( that use the same AWS device ) to increase the bandwidth. Which combination of steps should you take to fulfill this requirement? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;A, C</strong></p>\r\n\r\n<p>As this case needs to aggregate the two direct connections to increase the bandwidth, Direct Connect LAG should be considered. To establish a LAG connection, it needs the below steps:</p>\r\n\r\n<p>1, Create a new link aggregation group (LAG).</p>\r\n\r\n<p>2, Associate existing connections or new connections with the LAG.</p>\r\n\r\n<p>Details can be checked in <a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html</a>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;correct:</strong>&nbsp;AWS Direct Connect supports LAG which uses the Link Aggregation Control Protocol (LACP) to aggregate multiple connections.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;LAG supports existing connections.&nbsp;So creating new direct connections is not required.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;correct</strong>:&nbsp;Refer to <a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/associate-connection-with-lag.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/associate-connection-with-lag.html</a> on how to associate connections with LAG.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:</strong>&nbsp;AWS Direct Connect gateway is used to connect Direct Connect connection to one or more VPCs in the AWS account, which is not needed for this scenario.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35347,
            "question_id": 45340,
            "answers": [
              {
                "choice": "<p>In the AWS Direct Connect console, create a link aggregation group (LAG).</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Provision two new connections and associate them with the link aggregation group.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Associate two existing connections with the LAG in the AWS Direct Connect console.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Direct Connect gateway to combine two existing AWS Direct Connect connections over a private virtual interface.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 45341,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>In order to keep a dedicated connection and more consistent network performance, company ABC has set up 8 active Direct Connections between one of Amazon&rsquo;s Direct Connect locations and the company&rsquo;s colocation environment. The speed of the connections is 1Gbps for 6 connections and 10 Gbps for the other 2 connections. The company plans to create several link aggregation groups (LAG) for all the connections. Which configurations are valid? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;B, C</strong></p>\r\n\r\n<p>According to <a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html</a>, there are several rules to apply for LAG. Firstly, all connections in the LAG must use the same bandwidth. Secondly, in a LAG, a maximum of four connections are allowed.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because only a maximum of four connections can be configured for a LAG.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;correct:</strong>&nbsp;Because it meets the conditions mentioned in the above link.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;correct</strong>:&nbsp;Same as Option B.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:</strong>&nbsp;Because the connections in a LAG cannot use different bandwidth.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35348,
            "question_id": 45341,
            "answers": [
              {
                "choice": "<p>One LAG with six 1Gbps connections. One LAG with two 10 Gbps connections.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Two LAGs with three 1Gbps connections each. One LAG with two 10 Gbps connections.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>One LAG with four 1Gbps connections. One LAG with the other two 1Gbps connections. One LAG with two 10 Gbps connections.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>One LAG with all eight direct connections.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28949,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An organization is planning to use AWS for its production rollout. The organization needs a managed AWS service to create a LAMP stack automatically, download the latest PHP installable from S3, and set up the ELB.</p>\r\n\r\n<p>Which of the below AWS services can achieve the requirement in the easiest way?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>The Elastic Beanstalk is an easy-to-use AWS service for deploying and scaling web applications and services.</p>\r\n\r\n<p>Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. Meanwhile, if needed, we can still retain full control over the AWS resources used in the application and access the underlying resources at any time.</p>\r\n\r\n<p>Hence, A is the CORRECT answer.</p>\r\n\r\n<p>For more information on launching a LAMP stack with Elastic Beanstalk, please check the following references:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/getting-started/projects/launch-lamp-web-app/\" target=\"_blank\">https://aws.amazon.com/getting-started/projects/launch-lamp-web-app/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/php-ha-tutorial.html?icmpid=docs_tutorial_projects\" target=\"_blank\">https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/php-ha-tutorial.html?icmpid=docs_tutorial_projects</a></li>\r\n</ul>\r\n\r\n<p>We can deploy the resources on AWS CloudFormation as well, but it is more complicated than Elastic Beanstalk:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19066,
            "question_id": 28949,
            "answers": [
              {
                "choice": "<p>AWS Elastic Beanstalk</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS CloudFront</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS CloudFormation</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS DevOps</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
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
        "question_id": 28951,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user has launched a large EBS backed EC2 instance in the US-East-1a region. The user wants to achieve Disaster Recovery (DR), for that instance, by creating another small instance in Europe. How can the user achieve DR?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Options A and C are incorrect because you cannot directly copy the instance. You need to create an AMI from the instance.</p>\r\n\r\n<p>Option B is CORRECT because if you need an AMI across multiple regions, you have to copy the AMI across regions. Note that, by default, AMI&rsquo;s that you have created will not be available across all regions.</p>\r\n\r\n<p>Option D is incorrect because using &quot;Launch More Like This...&quot; enables you to use a current instance as a base for launching other instances in the same availability zone. It does not clone your selected instance; it only replicates some configuration details. First, create a copy of your instance, create an AMI from it, and then launch more instances from the AMI.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For the entire details to copy AMI&rsquo;s, please visit the link -&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19068,
            "question_id": 28951,
            "answers": [
              {
                "choice": "<p>Copy the running instance using the &ldquo;Instance Copy&rdquo; command to the EU region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AMI of the instance and copy the AMI to the EU region. Then launch the instance from the EU AMI.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Copy the instance from the US East region to the EU region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the &ldquo;Launch more like this&rdquo; option to copy the instance from one region to another.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28952,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are managing the AWS account of a big organization. The organization already has a third-party service to perform the user authentication. The organization has more than 1000+ employees, and they want to provide access to various AWS services to most of the employees. Which of the below mentioned options is the best possible solution in this case?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>The best practice for IAM is to create roles that have specific access to an AWS service and then give the user permission to the AWS service via the role.</p>\r\n\r\n<p>Option A is incorrect because creating a separate IAM user is not a feasible solution here. Instead, creating an IAM role would be a more appropriate solution.</p>\r\n\r\n<p>Option B is incorrect because this is an invalid workflow of using IAM roles for authenticating the users.</p>\r\n\r\n<p>Option C is incorrect because creating an IAM group for each user is not a best practice.</p>\r\n\r\n<p>Option D is CORRECT because it authenticates the users with the organization&rsquo;s authentication service and associates an appropriate IAM Role for accessing the AWS services.</p>\r\n\r\n<p>For the best practices on IAM policies, please visit the link</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19069,
            "question_id": 28952,
            "answers": [
              {
                "choice": "<p>The user should create a separate IAM user for each employee and provide access to them as per the policy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user should create an IAM role and attach STS with the role. The user should attach that role to the EC2&nbsp; instance and setup AWS authentication on that server.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user should create IAM groups for each user as per the organization&rsquo;s departments and add each user to the group for better access control.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create IAM roles to work with the organization&rsquo;s authentication service to authorize users for various AWS services.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28953,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user uses&nbsp;CloudFormation to launch an EC2 instance and plans to configure an application after the instance is launched. The user wants to coordinate stack resource creation with configuration actions that are external to the stack creation. How can the user configure this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>You can use a wait condition for situations like the following.</p>\r\n\r\n<ul>\r\n\t<li>To coordinate stack resource creation with configuration actions that are external to the stack creation.</li>\r\n\t<li>To track the status of a configuration process.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on Cloudformation Wait condition, please visit the link\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19070,
            "question_id": 28953,
            "answers": [
              {
                "choice": "<p>It is not possible that the stack creation will wait until one service is created and launched.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user can use the HoldCondition resource to wait for the creation of the other dependent resources.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user can use the DependentCondition resource to hold the creation of the other dependent resources.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Associate a CreationPolicy attribute with the wait condition.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28730,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A marketing research company has developed a tracking system that collects user behavior during web marketing campaigns on behalf of customers worldwide. The tracking system consists of an Auto Scaling group of EC2 instances behind an ELB. And the collected data is stored in DynamoDB. After the campaign is terminated, the tracking system is torn down, and the data is moved to Amazon Redshift, where it is aggregated and used to generate detailed reports.</p>\r\n\r\n<p>The company wants to instantiate new tracking systems in any region without any manual intervention and therefore adopted CloudFormation.</p>\r\n\r\n<p>What needs to be done to make sure that the AWS Cloudformation template works for every AWS region?</p>\r\n\r\n<p>Choose 2 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C and E</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because you need to retain or keep the snapshots of the EBS volumes to launch similar instances in the new region.</p>\r\n\r\n<p>Option B is incorrect because a DynamoDB table with the same name can be created in different regions. They have to be unique in a single region.</p>\r\n\r\n<p>Option C is CORRECT because you need to get the name of the Availability Zone based on the region in which the template would be used.</p>\r\n\r\n<p>Option D is incorrect because you do not need to define IAM users per region as they are global.</p>\r\n\r\n<p>Option E is CORRECT because the AMI ID would be needed to launch similar instances in the new region where the template would be used.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on CloudFormation intrinsic functions:</strong></p>\r\n\r\n<p>You can use the Fn::GetAZs function of CloudFormation to get the AZ of the region and assign it to the ELB.</p>\r\n\r\n<p>An example of the Fn::GetAZs function is given below</p>\r\n\r\n<p>{ &quot;Fn::GetAZs&quot; : &quot;&quot; }</p>\r\n\r\n<p>{ &quot;Fn::GetAZs&quot; : { &quot;Ref&quot; : &quot;AWS::Region&quot; } }</p>\r\n\r\n<p>{ &quot;Fn::GetAZs&quot; : &quot;us-east-1&quot; }</p>\r\n\r\n<p>An example of the FindInMap is shown below. This is useful when you want to get particular values region wise which can be used as parameters. Since the Launch configuration contains the AMI ID information and the AMI ID is different in different regions, you need to recreate the Launch Configurations based on the AMI ID.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; ...</p>\r\n\r\n<p>&nbsp; &quot;Mappings&quot; : {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &quot;RegionMap&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &quot;us-east-1&quot; : { &quot;32&quot; : &quot;ami-6411e20d&quot;, &quot;64&quot; : &quot;ami-7a11e213&quot; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;us-west-1&quot; : { &quot;32&quot; : &quot;ami-c9c7978c&quot;, &quot;64&quot; : &quot;ami-cfc7978a&quot; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;eu-west-1&quot; : { &quot;32&quot; : &quot;ami-37c2f643&quot;, &quot;64&quot; : &quot;ami-31c2f645&quot; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ap-southeast-1&quot; : { &quot;32&quot; : &quot;ami-66f28c34&quot;, &quot;64&quot; : &quot;ami-60f28c32&quot; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ap-northeast-1&quot; : { &quot;32&quot; : &quot;ami-9c03a89d&quot;, &quot;64&quot; : &quot;ami-a003a8a1&quot; }</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; }</p>\r\n\r\n<p>&nbsp; },</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp; &quot;Resources&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; &quot;myEC2Instance&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot; : &quot;AWS::EC2::Instance&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Properties&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ImageId&quot; : { &quot;Fn::FindInMap&quot; : [ &quot;RegionMap&quot;, { &quot;Ref&quot; : &quot;AWS::Region&quot; }, &quot;32&quot;]},</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &quot;InstanceType&quot; : &quot;m1.small&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</p>\r\n\r\n<p>&nbsp; &nbsp;&nbsp; &nbsp; }</p>\r\n\r\n<p>&nbsp;&nbsp; }</p>\r\n\r\n<p>}</p>\r\n\r\n<p>For more information on the Fn::FindInMap function, please refer to the below link-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-findinmap.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-findinmap.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18847,
            "question_id": 28730,
            "answers": [
              {
                "choice": "<p>Avoid using Deletion Policies for the EBS snapshots.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The names of the DynamoDB tables must be different in every target region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the built-in function of Cloudformation to set the AZ attribute of the ELB resource.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>IAM users with the right to start Cloudformation stacks must be defined for every target region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the built-in Mappings and FindInMap functions of AWS Cloudformation to refer to the AMI ID set in the ImageID attribute of the Autoscaling::LaunchConfiguration resource.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28954,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has created a VPC with the public and private subnets using the VPC wizard. The VPC has CIDR 10.0.0.0/16. The public subnet uses CIDR 10.0.1.0/24. The user plans to host a web server in the public subnet with port 80 and a Database server in the private subnet with port 3306. The user is configuring a security group for the public subnet (WebSecGrp) and the private subnet (DBSecGrp). Which of the below mentioned entries is required in the private subnet database security group DBSecGrp?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>The important point in this question is to allow the incoming traffic to the private subnet on port 3306 only for the instances in the private subnet.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because (a) it allows the inbound traffic only for the required port 3306, and (b) it allows only the traffic from the instances in the public subnet (WebSecGrp).</li>\r\n\t<li>Option B is incorrect because it allows the inbound traffic to all the instances in the VPC which is not the requirement.</li>\r\n\t<li>Option C is incorrect because defining outbound traffic will not ensure the incoming traffic from the public subnet. Also, since the security groups are stateful, you need to define the inbound traffic for the public subnet only (WebSecGrp). The outbound traffic would be automatically allowed.</li>\r\n\t<li>Option D is incorrect because you do not need to open the port 80 in this case.</li>\r\n</ul>\r\n\r\n<p><strong>More information on Web Server and DB Server Security Group settings:</strong></p>\r\n\r\n<p>Since the Web server needs to talk to the database server on port 3306, the database server should allow incoming traffic on port 3306. The below table from the AWS documentation shows how the security groups should be set up.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_gl5f1f.png\" style=\"height:430px; width:1111px\" /><br />\r\n&nbsp;</p>\r\n\r\n<p>For more information on security groups, please visit the below link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19071,
            "question_id": 28954,
            "answers": [
              {
                "choice": "<p>Allow Inbound on port 3306 in the DBSecGrp with source as WebSecGrp.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Allow Inbound on port 3306 from source 10.0.0.0/16.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allow Outbound on port 3306 in the DBSecGrp with destination as WebSecGrp.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Allow Outbound on port 80 for destination NAT instance IP.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28955,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your customer is implementing a video-on-demand streaming platform on AWS. The requirement is to be able to support multiple devices such as iOS, Android, and Windows as client devices, using a standard client player, using streaming technology and scalable architecture with cost-effectiveness.</p>\r\n\r\n<p>Which architecture meets the requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because it uses CloudFront distribution with the streaming option which does not work on all platforms; whereas, it should use the download option.</li>\r\n\t<li>Option B is CORRECT because (a) it uses CloudFront distribution (b) It uses Elemental MediaConvert for streaming the on-demand videos on any mobile and (c) it uses S3 as origin, so it keeps the costs low.</li>\r\n\t<li>Option C is incorrect because (a) provisioning streaming EC2 instances is a costly solution, (b) the videos are to be delivered on-demand, not live streaming.</li>\r\n\t<li>Option D is incorrect because the videos are to be delivered on-demand, not live streaming. So, the streaming server is not required.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on live and on-demand streaming using CloudFront, please visit the below URL:\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/blogs/aws/using-amazon-cloudfront-for-video-streaming/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/using-amazon-cloudfront-for-video-streaming/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p><br />\r\n<strong>Note:</strong><br />\r\n<br />\r\nIn the on-demand streaming case, your video content is stored in Amazon S3. Viewers can choose to watch it at any desired time. A complete on-demand streaming solution typically uses Amazon S3 for storage, AWS Elemental MediaConvert for file-based video processing, and Amazon CloudFront for delivery.<br />\r\nOnce uploaded, you may need to convert your video into the size, resolution, or format needed by a particular television or connected device. AWS Elemental MediaConvert will take care of this for you. MediaConvert takes content from S3, transcodes it as requested, and stores the result back in S3. Transcoding processes video files, creating compressed versions of the original content to reduce its size, change its format, or increase playback device compatibility. You can also create assets that vary in resolution and bitrate for adaptive bitrate streaming, which adjusts the viewing quality depending on the viewer&#39;s available bandwidth. AWS Elemental MediaConvert outputs the transcoded video to an S3 bucket.<br />\r\nThe next step is global delivery with Amazon CloudFront. CloudFront caches content at the edges for low latency and high throughput video delivery.&nbsp; This delivery can be made in two different ways. You can deliver the entire video file to the device before playing it, or you can stream it to the device.</p>\r\n\r\n<ul>\r\n\t<li>More information is available at:\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/cloudfront/streaming/\" target=\"_blank\">https://aws.amazon.com/cloudfront/streaming/</a></li>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/on-demand-video.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19072,
            "question_id": 28955,
            "answers": [
              {
                "choice": "<p>Store the video contents to Amazon Simple Storage Service (S3) as an origin server. Configure the Amazon CloudFront distribution with a streaming option to stream the video contents.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the video contents to Amazon S3 as the origin server. Configure the Amazon CloudFront distribution. Use the AWS Elemental MediaConvert to easily create video-on-demand (VOD) content for broadcast and multiscreen delivery ( multi- devices) at scale.&nbsp;</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Launch a streaming server on Amazon Elastic Compute Cloud (EC2) (for example, Adobe Media Server), and store the video contents as an origin server. Configure the Amazon CloudFront distribution with a download option to stream the video contents.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Launch a streaming server on Amazon EC2 (for example, Adobe Media Server), and store the video contents as an origin server. Launch and configure the required amount of streaming servers on Amazon EC2 as an edge server to stream the video contents.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28956,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>A document storage company deploys&nbsp;its application to AWS and changes its&nbsp;business model to support both Free Tier and Premium Tier users. The premium Tier users will be allowed to store up to 300GB of data and Free Tier customers will be allowed to store only 100GB. The customer expects that billions of files will be stored. All users need to be alerted when approaching 75 percent quota utilization and again at 90 percent quota use.</p>\n\n<p>To support the Free Tier and Premium Tier users, how should they architect their application?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT</strong> because DynamoDB which is a highly scalable service is the most suitable in this scenario.&nbsp;</li>\n\t<li><strong>Option B is incorrect </strong>because RDS would not be a suitable solution for storing billions of files since this&nbsp;exceeds the manageability thresholds of RDS.</li>\n\t<li><strong>Options C and D are&nbsp;incorrect</strong> because it uses object-level storage,&nbsp;iterating over billions of objects without applying any design pattern for performance optimization e.g. partitioning, compression.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/swf/faqs\">simple-workflow-service</a></li>\n\t<li><a href=\"https://aws.amazon.com/managed-workflows-for-apache-airflow/faqs\">managed-workflows-for-apache-airflow</a></li>\n\t<li><a href=\"https://aws.amazon.com/step-functions/faqs\">step-functions</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html\">s3-optimising-for-performance</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 85081,
            "question_id": 28956,
            "answers": [
              {
                "question_id": "28956",
                "choice": "<p>Use an S3 event notification published to a Lambda function acting as a task used by a workflow service to orchestrate the components. The workflow updates the user&#39;s data counter in a DynamoDB table and uses SES to send an email if the counter increases above the appropriate thresholds. The workflow service would be Step Functions for best performance, and a fully managed solution.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28956",
                "choice": "<p>The company should deploy an Amazon Relational Database Service (RDS) relational database with a stored objects table that has a row for each stored object along with the size of each object. The upload server will query the aggregate consumption of the user in question (by first determining the files stored by the user, and then querying the stored objects table for respective file sizes) and send an email via Amazon Simple Email Service if the thresholds are breached.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28956",
                "choice": "<p>The company should write both the content as-is and the username of the file&#39;s owner as S3 metadata for the object. They should then create a file watcher to iterate over each object and aggregate the size for each user and send a notification via Amazon Simple Queue Service to an emailing service if the storage threshold is exceeded.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28956",
                "choice": "<p>The company should create two separate Amazon Simple Storage Service buckets&nbsp;with content as-is for data storage,&nbsp;one for Free Tier Users, and another&nbsp;for Premium Tier users. A&nbsp;workflow service to orchestrate the components&nbsp;will query all objects for a given user based on the bucket that the data is stored in aggregate storage. The activity worker will notify the user via Amazon Simple Notification Service when necessary.&nbsp;The workflow service would be Step Functions for best performance, and a fully managed solution.&nbsp;</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28957,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You are designing a VPC with different subnets and instances in them. You want the instances in the subnets to communicate with each other and also ensure that traffic flows between different subnets seamlessly. How can you accomplish these requirements?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<p>Option A is INCORRECT because the Security Group should be applied on an instance instead of an availability zone, and also&nbsp;&quot;Configure explicit deny rules&quot; is incorrect. It is implicit deny and not explicit deny.</p>\r\n\r\n<p>Option B is CORRECT because&nbsp;NACLs should be configured as explicit allow&nbsp;at the subnet level.&nbsp;Security Groups should also be configured to allow the communication at the instance level.</p>\r\n\r\n<p>Option C is INCORRECT because&nbsp;for all Route tables, either main or custom: the default route is at target local, and this cannot be either deleted or modified.</p>\r\n\r\n<p>Option D is INCORRECT because&nbsp;Security Group can be applied on an instance and not on the Zone level. The Source in a security group rule can be either a range of IP, any security group within a given VPC or single IP.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19074,
            "question_id": 28957,
            "answers": [
              {
                "choice": "<p>Configure a security group for every zone. Configure a default allow all rule. Configure explicit deny rules for the zones that shouldn&rsquo;t be able to communicate with one another.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use NACLs to explicitly allow communication between subnets and Security Groups to allow communication between different instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure multiple subnets in your VPC, one for each zone. Configure routing within your VPC in such a way that each subnet only has routes to other subnets with which it needs to communicate, and doesn&rsquo;t have routes to subnets with which it shouldn&rsquo;t be able to communicate.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a security group for every availability zone. Configure allow rules only between the availability zones that need to be able to communicate with one another. Use the implicit deny all rule to block any other traffic.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28958,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You&rsquo;ve been tasked with moving an e-commerce web application from a customer&rsquo;s data center into a VPC. The application must be fault-tolerant and well as highly scalable. Moreover, the customer is adamant that service interruptions do not affect the user experience. As you near launch, you discover that the application currently uses multicast to share session state between web servers. In order to handle session state within the VPC, you choose&nbsp;the following option.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because ELB sticky sessions only cache user data locally for better performance. If the EC2 instance fails, the session data will still be lost.</li>\r\n\t<li>Option B is CORRECT because Redis is a fast, open-source, in-memory data store&nbsp;and caching service. It is highly available, reliable, and with high performance suitable for the most demanding applications such as this one.</li>\r\n\t<li>Option C is incorrect because Mesh VPN is not fault-tolerant or highly scalable - the client&#39;s real priorities. Its failure would impact users. The supernode that handles the registration is a single point of failure. In case of failure, new VPN nodes would not be able to register. Also, the nodes wouldn&#39;t register across multiple AZs. Even if it is possible, it is very cumbersome.</li>\r\n\t<li>Option D is incorrect&nbsp;because storing the session state in RDS is not a good option.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on Elastic Cache, please visit the below URL:\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/elasticache/\" target=\"_blank\">https://aws.amazon.com/elasticache/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>Our main requirement is to provide fault tolerance and high scalability.&nbsp;<br />\r\n<br />\r\nRedis data resides in-memory, in contrast to databases that store data on disk or SSDs. By eliminating the need to access disks, in-memory data stores such as Redis avoid seeking time delays and access microseconds data. Redis is a popular choice for caching, session management, real-time analytics, geospatial, chat/messaging, media streaming, and gaming leaderboards.<br />\r\n<br />\r\nElastiCache Redis can provide high scalability and is fault-tolerant.</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19075,
            "question_id": 28958,
            "answers": [
              {
                "choice": "<p>Enable session stickiness via Elastic Load Balancing.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store session state in Amazon ElastiCache for Redis.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a mesh VPN between instances and allow multicast on it.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store session state in Amazon Relational Database Service.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 28959,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company is migrating infrastructure to AWS. A large number of developers and administrators will need to control this infrastructure using the AWS Management Console. The Identity Management team is objecting to creating an entirely new directory of IAM users for all employees, and the employees are reluctant to commit yet another password to memory.</p>\r\n\r\n<p>Which of the following will satisfy both these stakeholders?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because, although it is a workable solution, the users need not use the OpenID IdP (such as Facebook, Google, SalesForce, etc.)in this scenario as they can use the on-premises 2.0 SAML compliant IdP and get the federated access to the AWS. Access via OpenID IdP is most suitable for mobile apps.</li>\r\n\t<li>Option B is incorrect because you cannot log in to AWS using the IdP provided credentials. You need temporary credentials provided by Security Token Service (STS) for that.</li>\r\n\t<li>Option C is INCORRECT as the user cannot log in to the AWS console using AWS CLI.</li>\r\n\t<li>Option D is CORRECT because it uses the on-premises 2.0 SAML compliant IdP and gets the federated access to the AWS, thus avoiding creating an IAM User for the employees in the organization.</li>\r\n</ul>\r\n\r\n<p>For more information on SAML Authentication in AWS, please visit the below URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19076,
            "question_id": 28959,
            "answers": [
              {
                "choice": "<p>Users sign in using an OpenID Connect (OIDC) compatible IdP, receive an authentication token, then use that token to log in to the AWS Management Console.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Users log in directly to the AWS Management Console using the credentials from your on-premises Kerberos compliant Identity provider.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Users log in to the AWS Management Console using the AWS Command Line Interface.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Users request a SAML assertion from your on-premises SAML 2.0-compliant identity provider (IdP) and use that assertion to obtain federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28960,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>A gaming company adopted AWS Cloud Formation to automate load-testing of their games. They have created an AWS Cloud Formation template for each gaming environment, including one for the load-testing stack. The load-testing stack creates an Amazon Relational Database Service (RDS) Postgres database and two web servers running on Amazon Elastic Compute Cloud (EC2) that send HTTP requests, measure response times, and write the results into the database. A test run usually takes between 15 and 30 minutes. Once the tests are done, the AWS Cloud Formation stacks are torn down immediately. The test results written to the Amazon RDS database must be preserved&nbsp;for visualization and analysis.<br />\r\nSelect possible solutions that allow access to the test results after the AWS Cloud Formation load -testing stack is deleted. (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C and D</strong></p>\r\n\r\n<p><strong>Option A is incorrect </strong>because (a) the creation of read replicas is not needed in this scenario, and (b) they would anyways be deleted after the stacks get deleted.&nbsp;So there is no need to define any dependency in the template.</p>\r\n\r\n<p><strong>Option B is incorrect</strong> because the UpdatePolicy attribute is only applicable to certain resources like AutoScalingGroup, AWS Lambda Alias. It does not apply to RDS.</p>\r\n\r\n<p><strong>Option C is CORRECT </strong>because the RDS resources would be preserved for the visualization and analysis after the stack gets deleted with the Retain deletion policy.</p>\r\n\r\n<p><strong>Option D is CORRECT </strong>because, with the Snapshot deletion policy, a snapshot of the RDS instance would be created for visualization and analysis later after the stack is deleted.</p>\r\n\r\n<p><strong>Option E is incorrect </strong>because automated snapshots are not needed in this case. All that is needed is a single snapshot of the RDS instance after the test is finished, which can be taken via the Snapshot deletion policy.</p>\r\n\r\n<p><strong>NOTE:</strong> This question is asking for two possible answers. It does not say that both need to be used at the same time. Hence both C and D are valid options.</p>\r\n\r\n<p>For more information on deletion policy, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 80196,
            "question_id": 28960,
            "answers": [
              {
                "question_id": "28960",
                "choice": "<p>Define an Amazon RDS Read-Replica in the load-testing AWS CloudFormation stack and define a dependency relation between master and replica via the DependsOn attribute.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28960",
                "choice": "<p>Define an update policy to prevent the deletion of the Amazon RDS database after the AWS CloudFormation stack is deleted.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28960",
                "choice": "<p>Define a deletion policy of type Retain for the Amazon RDS resource to assure that the RDS database is not deleted with the AWS CloudFormation stack.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28960",
                "choice": "<p>Define a deletion policy of type Snapshot for the Amazon RDS resource to assure that the RDS database can be restored after the AWS CloudFormation stack is deleted.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28960",
                "choice": "<p>Define automated backups with a backup retention period of 30 days for the Amazon RDS database and perform point-in-time recovery of the database after the AWS CloudFormation stack is deleted.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28961,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>A large enterprise wants to adopt CloudFormation to automate administrative tasks and implement the security principles of least privilege and separation of duties. They have identified the following roles with the corresponding tasks in the company.</p>\r\n\r\n<ul>\r\n\t<li>Network administrators: create, modify, and delete VPCs, and delete EC2 instances, subnets, NACLs, routing tables, and security groups.</li>\r\n\t<li>Application operators: deploy complete application stacks (ELB, Auto-Scaling groups, RDS, EC2 instances), whereas all resources must be deployed in the VPCs managed by the network administrators.</li>\r\n</ul>\r\n\r\n<p>Both groups must maintain their own CloudFormation templates and should be able to create, update, and delete only their own Cloud Formation stacks.</p>\r\n\r\n<p>The company has followed your advice to create two IAM groups, one for applications and one for networks. Both IAM groups are attached to IAM policies that grant rights to perform the necessary task of each group as well as the creation, update, and deletion of CloudFormation stacks.&nbsp;&nbsp;</p>\r\n\r\n<p>Which statements represent valid design considerations based on the given setup and requirements? (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A and B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because subnets cannot be deleted with instances in them.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because to launch instances explicitly, we need IAM permissions.</li>\r\n\t<li><strong>Option C is incorrect</strong> because the stacks are created using the application group&#39;s IAM policy when nesting network stacks within application stacks. And the policy should require network-level permissions.</li>\r\n\t<li><strong>Option D is incorrect </strong>because the application stack can be deleted before the network stack.</li>\r\n\t<li><strong>Option E is incorrect</strong> because network administrators need resource-level permission to delete the application stack.</li>\r\n</ul>\r\n\r\n<p>For more information, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 73463,
            "question_id": 28961,
            "answers": [
              {
                "question_id": "28961",
                "choice": "<p>Network stack updates will fail upon attempts to delete a subnet with EC2 instances.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28961",
                "choice": "<p>Restricting the launch of EC2 instances into VPCs requires resource level permissions in the IAM policy of the application group.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28961",
                "choice": "<p>Nesting network stacks within application stacks simplifies management and debugging, but requires resource-level permissions in the network group&#39;s IAM policy.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28961",
                "choice": "<p>The application stack cannot be deleted before all network stacks are deleted.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28961",
                "choice": "<p>Unless account&nbsp;level permissions are used on the cloud formation: Delete Stack action, network administrators could tear down application stacks.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28962,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An Enterprise customer is starting its migration to the cloud for&nbsp;agility.&nbsp;They want to make their internal Microsoft Active Directory available to any applications running on AWS&nbsp;as a central point of user control for leavers and joiners. Internal users only have to remember one set of credentials. How could they make their Active Directory secure,&nbsp;highly available, and with minimal on-premises infrastructure changes in the most cost and time-efficient way?</p>\r\n\r\n<p>Choose the most appropriate option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<ul>\r\n\t<li>Option A incorrect because it is just a complicated environment to set up and does not meet the purpose of the requirement.</li>\r\n\t<li>Option B is CORRECT because using an IPSec tunnel can help decrypt all the traffic from the on-premise to AWS. The domain controllers in separate AZ&rsquo;s can address high availability.</li>\r\n\t<li>Option C is incorrect because the question mentions that they want minimal changes to the on-premise environment.</li>\r\n\t<li>Option D is incorrect because it does not address the secure communication part from on-premise to AWS.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on creating VPN tunnels using Hardware VPN and Virtual private gateways, please refer to the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19079,
            "question_id": 28962,
            "answers": [
              {
                "choice": "<p>Using Amazon Elastic Compute Cloud (EC2), they could create a DMZ using a security group.&nbsp;Within the security group, they could provision two smaller Amazon EC2 instances that are running Openswan for resilient IPSec tunnels, and two larger instances that are domain controllers.&nbsp;They would use multiple Availability Zones.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Using VPN, they could create an extension to their data center and use resilient hardware IPSec tunnels; they could then have two domain controller instances that are joined to their existing domain and reside within different subnets in different Availability Zones.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Within the customer&rsquo;s existing infrastructure, they could provision&nbsp;new hardware to run Active Directory Federation Services. This&nbsp;would present Active Directory as a SAML2 endpoint on the internet.&nbsp;Any new application on AWS could be written to authenticate using SAML2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The customer could create a stand-alone VPC with its own Active Directory Domain Controllers.&nbsp;Two domain controller instances could be configured, one in each Availability Zone, and&nbsp;new applications would authenticate with those domain controllers.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28963,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An AWS customer is deploying a web application composed of a front end running on Amazon EC2 and confidential data stored on Amazon S3.</p>\r\n\r\n<p>&nbsp;The customer&#39;s security policy requires that the all-access operations to this sensitive data be authenticated and authorized by a centralized access management system operated by a separate security team.</p>\r\n\r\n<p>Besides, the web application team that owns and administers the EC2 web front-end instances is prohibited from accessing the data that circumvents this centralized access management system.</p>\r\n\r\n<p>Which of the following configurations will support these requirements.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is CORRECT because the access to the sensitive data on Amazon S3 is only given to the authenticated users.&nbsp;</p>\r\n\r\n<p>Option B is incorrect because S3 doesn&rsquo;t integrate directly with CloudHSM. Also, there is no centralized access management system control.</p>\r\n\r\n<p>Option C is incorrect because this is an incorrect workflow of the use of SAML. It does not mention if the centralized access management system is a SAML complaint.</p>\r\n\r\n<p>Option D is incorrect because, with this configuration, the web team would have access to the sensitive data on S3.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;For more information on STS, please refer to the URL-</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19080,
            "question_id": 28963,
            "answers": [
              {
                "choice": "<p>Configure the web application to authenticate end-users against the centralized access management system. Have the web application provision trusted users STS tokens entitling the download of approved data directly from Amazon S3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Encrypt the data on Amazon S3 using a CloudHSM that is operated by a separate security team. Configure the web application to integrate with the CloudHSM for decrypting approved data access operations for trusted end users.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure the web application to authenticate end-users against the centralized access management system using SAML. Have the end-users authenticate to IAM using their SAML token and download the approved data directly from Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Have the separate security team create an IAM Role entitled to access the data on Amazon S3. Have the web application team provision their instances with this Role while denying their IAM users access to the data on Amazon S3.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28731,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A customer runs an application in the US-West region in one of the availability zones and wants to set up the failover to another availability zone. The customer is also interested in implementing RDS Multi-AZ for high availability. However, you are worried that the synchronous replication between the primary DB and backup DB may impact the performance and the write and commit latency may increase. Which of the following actions can help you to address this concern?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Option A is incorrect because RDS read-replicas will not improve the performance for the write and commit latency. Read-replicas can help to share the read traffic.<br />\r\nOption B is CORRECT because this method can improve the RDS instances&#39; performance with the Multi-AZ deployments.<br />\r\nOption C is incorrect because VPC peering connection can establish the communication between two different VPCs. But it does not improve the performance of the Multi-AZ DB instances.<br />\r\nOption D is incorrect. Please check the explanations of option B.</p>\r\n\r\n<p>The reference can be found in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html</a>.</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 18848,
            "question_id": 28731,
            "answers": [
              {
                "choice": "<p>Configure several RDS read-replicas in each availability zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Provisioned IOPS and DB instance classes that are optimized for Provisioned IOPS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a VPC peering connection between two availability zones for the RDS instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>No actions are required as RDS Multi-AZ synchronous replication does not impact the performance.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28964,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A public archives organization is about to move a pilot application. They are running on AWS into production. You have been hired to analyze their application architecture and give high-availability and cost-saving recommendations. The application displays scanned historical documents.</p>\r\n\r\n<p>Each document is split into individual image tiles at multiple zoom levels to improve responsiveness and ease of use for the end users. At maximum zoom level the average document will be 8000 X 6000 pixels in size, split into multiple 40px X 40px image tiles. The tiles are batch processed by Amazon Elastic Compute Cloud (EC2) instances and put into an Amazon Simple Storage Service (S3) bucket. A browser-based JavaScript viewer fetches tiles from the Amazon (S3)&nbsp; bucket and displays them to users as they zoom and pan around each document. The average storage size of all zoom levels for a document is approximately 30MB of JPEG tiles. Originals of each document are archived in Amazon Glacier. The company expects to process and host over 500,000 scanned documents in the first year. What are your recommendations?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A, B, and C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because CloudFront does the caching via the edge locations, reducing the load on the origin.</li>\r\n\t<li>Option B is CORRECT because increasing the size of the images would help reduce the cost of the number of GET/PUT requests on the origin server.</li>\r\n\t<li>Option C is CORRECT, INTELLIGENT_TIERING storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead.\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-dg.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-dg.pdf</a>&nbsp;(Page 104 - 105)</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Option D is incorrect because decreasing the size would require more requests and will increase the overall cost.</li>\r\n\t<li>Option E is incorrect because Glacier is an archival solution and will not be suitable for frequent access to the tiles.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19081,
            "question_id": 28964,
            "answers": [
              {
                "choice": "<p>Deploy an Amazon CloudFront distribution in front of the Amazon S3 tiles bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Increase the size (width/height) of the individual tiles at the maximum zoom level.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the S3 INTELLIGENT_TIERING storage class.&nbsp;</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Decrease the size (width/height) of the individual tiles at the maximum zoom level.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the maximum zoom level in the low-cost Amazon S3 Glacier option and only retrieve the most frequently access tiles as they are requested by users.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 28965,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/16 using the wizard. The user has created a public subnet CIDR (20.0.0.0/24) and VPN only subnets CIDR (20.0.1.0/24) along with the VPN gateway (vgw-12345) to connect to the user&rsquo;s data center. The user&rsquo;s data center has CIDR 172.28.0.0/12. The user also has set up a NAT instance (i-12345) to allow traffic to the internet from the VPN subnet. Which of the below-mentioned routes should NOT be configured in&nbsp;the main route table in this scenario?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because the private subnet destination with NAT instance as the target is not needed in the route&nbsp;table.&nbsp;</li>\r\n\t<li>Option B is incorrect because you would need this entry to communicate with the internet via NAT instance (e.g. for patch updates).</li>\r\n\t<li>Option C is incorrect because you need this entry for communicating with the customer network via the virtual private gateway.</li>\r\n\t<li>Option D is incorrect because this entry is present by default to allow the resources in the VPC to communicate with each other.</li>\r\n</ul>\r\n\r\n<p>The below diagram shows how a typical setup for a VPC with a VPN and Internet gateway would look like. The only routing option which should have access to the internet gateway should be the 0.0.0.0/0 address. So Option A is the right answer.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2020/10/11/ckeditor_42825.png\" style=\"height:522px; width:1124px\" />&nbsp;</p>\r\n\r\n<p>For more information on VPC with the option of VPN, please visit the links.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario3.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario3.html</a>&nbsp;and&nbsp;</li>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario3.html\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19082,
            "question_id": 28965,
            "answers": [
              {
                "choice": "<p>Destination: 20.0.1.0/24 and Target: i-12345</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Destination: 0.0.0.0/0 and Target: i-12345</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Destination: 172.28.0.0/12 and Target: vgw-12345</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Destination: 20.0.0.0/16 and Target: local</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28966,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user has created a mobile application that makes calls to DynamoDB to fetch certain data. The application uses the DynamoDB SDK and root account access/secret access key to connect to DynamoDB from mobile. Which of the below-mentioned user&#39;s authentication is true concerning the best practice for security in this scenario?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because creating a separate user for each application user is not a feasible, secure, and recommended solution.</p>\r\n\r\n<p>Option B is incorrect because the mobile users may not be AWS users. You need to give access to the mobile application via a federated identity provider.</p>\r\n\r\n<p>Option C is CORRECT because it creates a role for Federated Users, enabling the users to sign in to the app using their Amazon, Facebook, or Google identity and authorize them to access DynamoDB seamlessly.</p>\r\n\r\n<p>Option D is incorrect because creating an IAM Role is not sufficient. You need to authenticate the application users via a web identity provider, get the temporary credentials via a Security Token Service (STS) and then access DynamoDB.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Web Identity Federation:</strong></p>\r\n\r\n<p>With Web Identity Federation, you don&#39;t need to create custom sign-in code or manage your own user identities. Instead, users of your app can sign in using a well-known identity provider (IdP) &mdash;such as Login with Amazon, Facebook, Google, or any other&nbsp;<a href=\"http://openid.net/connect/\" target=\"_blank\">OpenID Connect (OIDC)</a>-compatible IdP, receive an authentication token, and then exchange that token for temporary security credentials in AWS that map to an IAM role with permissions to use the resources in your AWS account.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Web Identity Federation, please visit the link.</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19083,
            "question_id": 28966,
            "answers": [
              {
                "choice": "<p>The user should create a separate IAM user for each mobile application and provide DynamoDB access with it.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user should create an IAM role with DynamoDB and EC2 access. Attach the role with EC2 and route all calls from the mobile through EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The application should use an IAM role with web identity federation, which validates calls to DynamoDB with identity providers, such as Google, Amazon, and Facebook.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an IAM Role with DynamoDB access and attach it with the mobile application.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28967,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You work as a Solution Architect for a firm, and your client has a multi-AZ infrastructure running on a VPC on AWS cloud. They are planning to implement a centralized custom dashboard on the client&rsquo;s data center. The dashboard will need to interact with the multi-AZ infrastructure. Data from the multi-AZ will be pulled from the data center. The solution should ensure low latency and good performance. Which of the following provides the best solution?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>Explanation<br />\r\nDirect connect connection will satisfy both the requirements of the scenario since it provides good bandwidth and low latency.</p>\r\n\r\n<p><br />\r\nOption B is incorrect &ndash; Since VPN uses the internet, it does not ensure high bandwidth.<br />\r\nOption C is incorrect &ndash; It is not true.<br />\r\nOption D is incorrect &ndash; You don&rsquo;t need a Direct. Connect&nbsp;connection to each AZ.<br />\r\n<br />\r\n<a href=\"https://aws.amazon.com/directconnect/faqs/\">https://aws.amazon.com/directconnect/faqs/</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19084,
            "question_id": 28967,
            "answers": [
              {
                "choice": "<p>Use direct connect connection to the VPC as this will provide access to all AZs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use VPN connections to 2 VGW routers in the region, as this should give you access to the infrastructure in all AZs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You cannot connect to multiple AZ&rsquo;s from a single location.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use one direct connect connection from the data center to each AZ in the region.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28968,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has launched an EC2 instance store-backed instance in the us-east-1a zone. The user created AMI #1 and copied it to the eu-west-1 region. After that, the user made a few updates to the application running in the us-east-1a zone. The user makes an AMI #2 after the changes. If the user launches a new instance in Europe from the AMI #1 copy, which statement&nbsp;is true?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because (a) the changes made to the instance will not automatically get updated in the AMI in US-East-1, and (b) the already copied AMI will not have any reference to the AMI in the US-East-1 region.</li>\r\n\t<li>Option B is incorrect because AWS does not automatically update the AMIs. It needs to be done manually.</li>\r\n\t<li>Option C is incorrect because you can copy the instance store AMI between different regions.</li>\r\n\t<li>Option D is CORRECT because the instance in the EU region will not make any changes after copying the AMI. You will need to copy the AMI#2 to eu-west-1 and then relaunch the instance to have all the changes.</li>\r\n</ul>\r\n\r\n<p>For the entire details to copy AMI&rsquo;s, please visit the link &ndash;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19085,
            "question_id": 28968,
            "answers": [
              {
                "choice": "<p>The new instance will have the changes made after the AMI copy as AWS copies the original AMI reference during the copying. Thus, the copied AMI will have all the updated data.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The new instance will have the changes made after the AMI copy since AWS keeps updating the AMI.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is not possible to copy the instance store-backed AMI from one region to another.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The new instance in the eu-west-1 region will not have the changes made after the AMI copy.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28969,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Company B has created an e-commerce site using DynamoDB and is designing a table named Products that includes items purchased by users.&nbsp;There are thousands of users and dozens of products. The table only has the partition key and does not have the sort key. When creating the table, which of the following is the most suitable to be&nbsp;selected as&nbsp;the partition key?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>When defining primary keys, you should always use the&nbsp;&quot;many to few&quot; principle.&nbsp;There are thousands of users but only a few products and categories. Hence, option A is the best answer.&nbsp;For a table item, you can fill in all the products purchased for a user.</p>\r\n\r\n<p>For more information on DynamoDB, please visit the link.</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/dynamodb/faqs/\" target=\"_blank\">https://aws.amazon.com/dynamodb/faqs/</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19086,
            "question_id": 28969,
            "answers": [
              {
                "choice": "<p>user_id</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>product_id</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>category_id</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>None of the above</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 45343,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company&rsquo;s office was just reallocated to another site.&nbsp;A&nbsp;Site-to-Site VPN was set up to connect the local server in the new site and the company&rsquo;s AWS VPC in the AWS region ap-south-1. The VPN is working properly. However, the operation team lead is worried about the robustness of the connection and has consulted you if it is possible to provide more redundancy to the VPN. Which suggestion should you give to him?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;D</strong></p>\r\n\r\n<p>Check out <a href=\"https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNConnections.html\" target=\"_blank\">https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNConnections.html</a> on how to provide redundant Site-to-Site VPN connections to provide failover.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/25/ckeditor_10.png\" style=\"height:720px; width:350px\" /></p>\r\n\r\n<p><strong>Option&nbsp;A is&nbsp;incorrect </strong>because the customer gateway is a single point of failure in this case. If it fails, the whole VPN connection is influenced.</p>\r\n\r\n<p><strong>Option&nbsp;B is&nbsp;incorrect&nbsp;</strong>because there are already two lines between the customer gateway and the virtual private gateway. There is no need to add another tunnel.</p>\r\n\r\n<p><strong>Option&nbsp;C is&nbsp;incorrect&nbsp;</strong>because the customer gateway is a single point of failure instead of a virtual private gateway.</p>\r\n\r\n<p><strong>Option&nbsp;D is&nbsp;correct</strong>&nbsp;because adding another Site-to-Site VPN connection is a good redundancy plan. Even if one customer gateway does not work, there is still another path that works.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35350,
            "question_id": 45343,
            "answers": [
              {
                "choice": "<p>No redundancy is required as the VPN connection is robust enough to provide auto failover ability. No single point failure exists for the existing solution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add 1 more tunnel between the customer gateway and virtual private gateway. So if the existing tunnel fails, the traffic can failover to the new one.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add another virtual private gateway as it is a single point without redundancy.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a second Site-to-Site VPN connection to the virtual private gateway by using a second customer gateway.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 45394,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has used Amazon Elastic MapReduce (Amazon EMR) clusters to capture data about user actions and push it to Amazon Simple Storage Service (S3). The database grows up to 50GB per day. Then it uses Apache Hive for querying user-activity data. However, the DevOps lead is unsatisfied with its performance, cost, and management complexity. You have proposed to use AWS Athena to query the data instead. Which benefits does this new solution bring? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;B, D</strong></p>\r\n\r\n<p>Amazon Athena is a query service that uses standard SQL to analyze data in Amazon S3.</p>\r\n\r\n<p>Check <a href=\"https://aws.amazon.com/athena/\" target=\"_blank\">https://aws.amazon.com/athena/</a> for its various features.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because, with Amazon Athena, you only pay for the queries. And you are charged based on the amount of data scanned by each query. It does not charge every hour.</li>\r\n\t<li><strong>Option B is&nbsp;CORRECT </strong>because Amazon Athena is totally serverless, meaning that users only need to consider how to query the data without managing the infrastructure.</li>\r\n\t<li><strong>Option C is incorrect </strong>because various standard data formats are supported, including CSV, JSON, ORC, Avro, and Parquet.</li>\r\n\t<li><strong>Option D is&nbsp;CORRECT </strong>because Amazon Athena can automatically allocate resources for queries. As a result, performance has been improved if compared with traditional solutions.</li>\r\n\t<li><strong>Option E is incorrect </strong>because the source data should be located in S3 only. AWS RDS, EFS and Glacier are not valid.</li>\r\n</ul>\r\n\r\n<p>Check out the Amazon Athena workflow as below.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_1.png\" style=\"height:298px; width:1000px\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35401,
            "question_id": 45394,
            "answers": [
              {
                "choice": "<p>AWS Athena charges every hour at an extremely low cost. It is more cost-effective than the previous solution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Athena is serverless. So you do not need to set up the instance or consider if the compute capability is enough or not.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Athena can query data in S3 easily using standard SQL only when the data format is CSV. Standard SQL cannot be used for other formats.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Athena can automatically execute queries in parallel. So most results come back within seconds.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon Athena can query data from any data sources, including S3, AWS RDS, EFS and Glacier.</p>",
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
        "question_id": 28732,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are an architect for a new sharing mobile application. Anywhere in the world, your users can see local news on topics they choose. They can post pictures and videos from inside the application. Since the application is being used on a mobile phone, connection stability is required for uploading content, and delivery should be quick.</p>\n\n<p>Content is accessed a lot in the first minutes after it has been posted but is quickly replaced by new content before disappearing. The local nature of the news means that 90% of the uploaded content is read locally.</p>\n\n<p>What solution will optimize the user experience when users upload and view content (by minimizing page load times and minimizing upload times)?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\n\n<p><strong>Option A is incorrect </strong>because Route53 is not required in this case.</p>\n\n<p><strong>Options B and C are incorrect </strong>because you do not need to upload the content to the source that is closer to the user. CloudFront will take care of that.</p>\n\n<p><strong>Option D is CORRECT</strong> because it uses S3 Transfer Acceleration to take advantage of the globally distributed edge locations in Amazon CloudFront. It enables fast, easy, and secure transfers of files over long distances.</p>\n\n<p>For more information on CloudFront, please refer to the below URLs</p>\n\n<ul>\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html</a></li>\n\t<li><a href=\"https://stackoverflow.com/questions/24014596/upload-files-via-cloudfront-distribution\" target=\"_blank\">https://stackoverflow.com/questions/24014596/upload-files-via-cloudfront-distribution</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AddingObjects.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AddingObjects.html</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84485,
            "question_id": 28732,
            "answers": [
              {
                "question_id": "28732",
                "choice": "<p>Upload and store the files in S3 in several regions. Use Route53 to choose the region that has minimal latency.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28732",
                "choice": "<p>Upload and store in S3 in the region closest to the user and then use multiple distributions of CloudFront.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28732",
                "choice": "<p>Upload to EC2 in regions closer to the user, send content to S3, use CloudFront.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28732",
                "choice": "<p>Use S3 Transfer Acceleration that uses the CloudFront global edge locations for uploading the content to the S3 bucket.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28974,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are maintaining an application that is spread across multiple web servers and has incoming traffic balanced by ELB. The application allows users to upload pictures. Currently, each web server stores the image, and a background task synchronizes the data between servers. However, the synchronization task can no longer keep up with the number of images uploaded.</p>\r\n\r\n<p>What change could you make so that all web servers have a place to store and read images at the same time?</p>\r\n\r\n<p>Choose an option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>Option A is CORRECT because S3 provides a durable, secure, cost-effective, and highly available storage service for the uploaded pictures.</p>\r\n\r\n<p>Option B is incorrect because the application needs just a storage solution, not a global content distribution service. CloudFront is also a costlier solution compared to S3.</p>\r\n\r\n<p>Option C is incorrect because you cannot share EBS volumes ( can be done only for &quot;io1&quot; EBS volumes) among multiple EC2 instances.</p>\r\n\r\n<p>Option D is incorrect because ELB cannot be used as a storage service.</p>\r\n\r\n<p>For more information on AWS S3, please refer to the below URL:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19091,
            "question_id": 28974,
            "answers": [
              {
                "choice": "<p>Store the images in Amazon S3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Store the images on Amazon CloudFront.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the images on Amazon EBS.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Store the images on the ELB.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28733,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>The company runs a complex customer system and consists of 10 different software components. All backed up by RDS. You adopted AWS OpsWorks to simplify the management and deployment of that application and created a stack and layers for each component.</p>\r\n\r\n<p>Security policy requires that all instances should run on the latest AMI and that instances must be replaced within one month after the latest AMI has been released. AMI replacements should be done in line with the company&#39;s policy without affecting the performance. You decide to write a script to be run as soon as the new AMI is released. (Select TWO)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer - D and E</strong></p>\r\n\r\n<p><strong>Option A is incorrect</strong> because you would have to re-launch new instances to change the AMI, and you can&#39;t do that with chef recipes only.</p>\r\n\r\n<p><strong>Option B is incorrect</strong> because the AMI replacements should be done without incurring application downtime or capacity problems. So if you shut down the stack, all applications will be stopped.</p>\r\n\r\n<p><strong>Option C is incorrect</strong> because the application could face the problem of insufficient capacity.</p>\r\n\r\n<p><strong>Option D is CORRECT</strong> because it represents a common practice of Blue-Green Deployment which is carried out for reducing downtime and risk by running two identical production environments called Blue and Green.</p>\r\n\r\n<p><strong>Option E is CORRECT</strong> because you can only add new instances at the layer level by specifying to use Custom AMI at the stack level.</p>\r\n\r\n<p><strong>More information on Blue-Green Deployment:</strong></p>\r\n\r\n<p>Blue-green deployment is a technique that reduces downtime and risk by running two identical production environments called Blue and Green.</p>\r\n\r\n<p>Once you have deployed and fully tested the software in Green, you switch the router. So all incoming requests now go to Green instead of Blue. Green is now LIVE, and Blue is idle.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_53otj8.png\" style=\"height:472px; width:700px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://d0.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf\" target=\"_blank\">https://d0.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 92933,
            "question_id": 28733,
            "answers": [
              {
                "question_id": "28733",
                "choice": "<p>Assign a custom recipe to each layer that replaces the underlying AMI. Use OpsWorks life-cycle events to incrementally execute this custom recipe and update the instances with the new AMI.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28733",
                "choice": "<p>Specify the latest AMI in the custom AMI at the stack level. Terminate&nbsp;instances of the stack and let OpsWorks launch new instances with the new AMI.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28733",
                "choice": "<p>Identify all EC2 instances of your OpsWorks stack, stop each instance, replace the AMI ID property with the latest AMI ID, and restart the instance. To avoid downtime, make sure no more than one instance is stopped at the same time.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "28733",
                "choice": "<p>Create a new stack and layers with identical configuration, add instances with the latest AMI specified as a custom AMI to the new layers, switch DNS to the new stack, and tear down the old stack.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "28733",
                "choice": "<p>Add new instances with the latest AMI as a custom AMI to all OpsWorks layers of your stack and terminate the old ones.</p>",
                "feedback": "",
                "correct": true
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      }
    ]
  }