// 4. Practice Test II
var PracticeTest2 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": 44781,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large financial application generates logs in a comma-separated format and saves them to S3 for later processing. After each file is generated, a message is sent to an SQS queue. EC2 instances monitoring the SQS queue are running behind a load balancer in an Auto Scaling group. An EC2 instance will pick up the message from SQS and start processing it. Once the processing is completed, the processed files are stored into another S3 bucket to be used later in a reporting process. The EC2 instances load their application from S3 on startup. The application release logs show that there have been many updates to the application in the last month. The data security and monitoring team wants to check the application logs to ensure that the logs do not contain any sensitive information. How can you complete this process effectively without interrupting the Auto Scaling or the application release cycle?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C&nbsp;</strong>because Cloudwatch logs provide information on the application behavior. A Lambda function can process CloudWatch Logs.</p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because the CloudTrail only monitors the API calls made to AWS resources and does not record the application logs.</li>\r\n\t<li>Option B is INCORRECT because suspending the ASG terminate Instances is not effective and may affect the application release cycle during high utilization period. Administrators should be able to get the logs without even log in to EC2 Instances.</li>\r\n\t<li>Option D is INCORRECT because this method is not straight-forward or cost-effective.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34792,
          "question_id": 44781,
          "answers": [
            {
              "choice": "<p>Enable CloudTrail and redirect all the system logs to an S3 bucket. Download the log files from the S3 bucket and check for sensitive information.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Suspend the Auto Scaling termination process, and then log into the machines that started recently and check the logs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install the CloudWatch Logs Agent and publish the logs to CloudWatch. Trigger a Lambda function to process the logs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Take daily snapshots of the EC2 instance volumes, and then mount the recent snapshots to another instance and check the logs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44782,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company runs a video analysis software that is available in both Free and Paid plans. To support the Free and Paid versions effectively, your company uses a spot pricing framework that does the bidding as per the subscription plan to ensure the availability of the spot instances and maintain the cost. The instances are running behind a load balancer created for the analysis job with the auto-scaling group attached to that. Paid subscription jobs are set to run into multiple availability zones to maintain high availability. The application using the spot engine adds the desired instances based on active jobs and terminates instances when the processing is completed. By looking at the CloudWatch logs, you noticed that sometimes the Auto Scaling launches new instances before terminating the old ones. What could the cause and the corresponding resolution for this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because the desired capacity is meant to maintain a minimum number of instances in an Auto Scaling group.</li>\r\n\t<li>Option B is CORRECT because suspending the AZRebalance will disable the instance balancing activity if the availability zones have a different number of instances.</li>\r\n\t<li>Option C is INCORRECT for the current situation. If the Auto Scaling runs into a single availability zone, the AZRebalance event will not trigger. But at the same time, it will not be fault-tolerant against availability zone failures.</li>\r\n\t<li>Option D is INCORRECT because the min/max count does not affect the availability zone rebalance process.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34793,
          "question_id": 44782,
          "answers": [
            {
              "choice": "<p>Update the desired capacity of the Auto Scaling Group based on the number of active jobs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Auto Scaling triggers the AZRebalance event if the number of instances in availability zones are not matching after terminating instances. Suspend the AZRebalance process of Auto Scaling to avoid the rebalancing.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run all the instances into a single availability zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the min and max capacity of the Auto Scaling Group after the jobs are completed.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44783,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have an existing application that runs on your premise and currently uses a non-relational database. Your team has decided to move the application to the cloud environment and the database to DynamoDB to use some of its features like scaling and data streaming.&nbsp;As per the management outline, for post-migration, all the communication between the application and the DynamoDB must be secure and scalable as the load will increase in the near future. EC2 instances should use their private IP addresses to access DynamoDB with no exposure to the public internet. What combinations can be used to design the migration and the post-migration activities, including the secure connection to DynamoDB? Select three&nbsp;options.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A, D, and E</strong></p>\n\n<ul>\n\t<li>Option&nbsp;A is CORRECT because the question is asking for migration and migrating the application to AWS. So, EC2 would be the best fit here.</li>\n\t<li>Option B is INCORRECT&nbsp;because VPC gateway endpoints should be used. HTTP is incorrect.</li>\n\t<li>Option C is INCORRECT because VPC endpoints are only accessible from EC2 instances inside a VPC. In case you are running it from your local premise, you will have to run it via a proxy that redirects to VPC based resource and then towards the endpoint.</li>\n\t<li>Option D is CORRECT because an Auto Scaling group can dynamically scale the EC2 instances to maintain steady performance. In response to actual traffic patterns, Amazon DynamoDB auto scaling can dynamically adjust provisioned throughput capacity on your behalf.</li>\n\t<li>Option E is CORRECT because VPC Endpoints provide a secure link to access the AWS resources from a&nbsp;VPC. Please check the reference in&nbsp;<a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html</a>.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34794,
          "question_id": 44783,
          "answers": [
            {
              "choice": "<p>Migrate the on-premises application to the AWS EC2.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the HTTP&nbsp;endpoint of the DynamoDB to make sure all the communication is secure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect your on-premises network to AWS using the VPN to access the DynamoDB via the VPC endpoints.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Host the application in an Auto Scaling group and enable Amazon DynamoDB auto-scaling.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the VPC gateway endpoint to connect with your DynamoDB.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 44804,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>To follow the new security compliances, your company has hired an external auditor to assess the security perimeter around your SaaS platform. The application, S3 and DynamoDB are running in multiple regions, and the application uses load balancers within each region for high availability. The instances load sensitive configurations from an S3 bucket at the start, and the DynamoDB is used as a primary database. The auditor has advised tightening the security groups and NACLs based on the application requirement and use the private network instead of using the public endpoints to access the AWS services. Your team decided to use the VPC Endpoints as it uses the AWS internal network for all the communication. After a detailed examination, they realize that the data used for the applications also need to be replicated in different regions. Please select three valid options, including the modification for endpoints and objects replications across regions.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answers: A, B, E</strong></p>\r\n\r\n<p><strong>Interface endpoints</strong><br />\r\nAn interface endpoint is an elastic network interface with a private IP address from the IP address range of your subnet. It serves as an entry point for traffic destined to a supported AWS service or a VPC endpoint service. Interface endpoints are powered by AWS PrivateLink.</p>\r\n\r\n<p><strong>Gateway Load Balancer endpoints</strong><br />\r\nA Gateway Load Balancer endpoint is an elastic network interface with a private IP address from the IP address range of your subnet. Gateway Load Balancer endpoints are powered by AWS PrivateLink. This type of endpoint serves as an entry point to intercept traffic and route it to a service that you&#39;ve configured using Gateway Load Balancers, for example, for security inspection.</p>\r\n\r\n<p><strong>Gateway endpoints</strong><br />\r\nA gateway endpoint is for the following supported AWS services:<br />\r\nAmazon S3<br />\r\nDynamoDB</p>\r\n\r\n<p>You specify a gateway endpoint as a route table target for traffic that is destined for the supported AWS services.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> as the DynamoDB Global Tables will create a Multi-Region, Multi-Master database that can be accessed internally from each region.</li>\r\n\t<li><strong>Option B is CORRECT</strong> as creating the VPC Endpoints for services like S3 and DynamoDB will allow the application to use them via the AWS network.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because NAT gateways are used to communicate with the Internet via a private subnet. This is to secure the private resources like Database and Application servers which do not require and ideally should not have public connectivity.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because DynamoDB uses the Gateway Endpoint instead of the Interface Endpoint.</li>\r\n\t<li><strong>Option E is CORRECT</strong> because VPC Endpoints are regional points and can not be accessed outside of those regions. To use the endpoints, we need to copy the S3 objects to all the regions from which they will be used. S3 Cross-Region Replication can do this effectively without any manual support.</li>\r\n</ul>\r\n\r\n<p><strong>NOTE:&nbsp; Please read the question as follows</strong></p>\r\n\r\n<p>To follow the new security compliance&#39;s&nbsp;your company has hired an external auditor to assess the security perimeter around your SaaS platform.</p>\r\n\r\n<p>The application, S3, and DynamoDB are running in multiple regions, and the application uses load balancers within each region for high availability.</p>\r\n\r\n<p>The instances load sensitive configurations from an S3 bucket at the start, and the DynamoDB is used as a primary database.</p>\r\n\r\n<p><em>The auditor has advised furthering</em>&nbsp;</p>\r\n\r\n<p>1. tighten the security groups and NACLs based on the application requirement&nbsp;and&nbsp;</p>\r\n\r\n<p>2. use the private network instead of using the public endpoints to access the AWS services.&nbsp;</p>\r\n\r\n<p>Your team decided to use the VPC Endpoints as it uses the AWS internal network for all the communication.&nbsp;</p>\r\n\r\n<p>After a detailed examination, they realize that the data used for the applications also need to be replicated in different regions.</p>\r\n\r\n<p>Please select three valid options, including the modification for endpoints and objects replications across regions.</p>\r\n\r\n<p><strong>Reference:</strong><br />\r\n<a href=\"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html\">https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 58978,
          "question_id": 44804,
          "answers": [
            {
              "question_id": "44804",
              "choice": "<p>Configure the DynamoDB Global Tables to replicate the data into multi-regions.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44804",
              "choice": "<p>Create VPC Endpoints for S3 and DynamoDB.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44804",
              "choice": "<p>Use the NAT Gateway for all the egress communication to these AWS services.&nbsp;</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44804",
              "choice": "<p>Set up VPC gateway endpoint for S3 and interface endpoint for DynamoDB to communicate with these services over the private AWS network.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44804",
              "choice": "<p>Use the S3 Cross-Region Replication to save the configurations in the multiple regions.</p>",
              "feedback": "",
              "correct": true
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
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
      "question_id": 44806,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The new mobile application that you are building will accept images and videos from the mobile app and will store, enhance, watermark, and deliver them to other users. As per the initial research, it seems that EFS will be a suitable option as the application will be running behind a load balancer. The file system will be shared among the instances so that the data can be delivered fast. Your company has decided to use the CloudFront before the load balancer to geocache the contents and serve it faster. Which of the following statements of EFS are correct when working with the application? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C, E</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because Amazon EFS data is distributed across multiple Availability Zones (AZs), providing a high durability and availability level.</li>\r\n\t<li>Option B is INCORRECT because EFS supports two throughput modes to choose from for your file system, Bursting Throughput, and Provisioned Throughput. With <em>Bursting Throughput</em> mode, throughput on Amazon EFS scales as your file system grows. File-based workloads are typically spiky, driving high levels of throughput for short periods of time and low levels of throughput the rest of the time. To accommodate this, EFS is designed to burst to high throughput levels for periods of time.</li>\r\n\t<li>Option C is CORRECT because EFS serves as a local file system and is not directly accessible. All the read/write operations have to be done via the EC2 with which it is attached.</li>\r\n\t<li>Option D is INCORRECT because EFS provides both in-transit and at-rest encryption options using the AWS KMS service.</li>\r\n\t<li>Option E is CORRECT because EFS uses a credit system to determine when file systems can burst. Each file system earns credits over time at a baseline rate determined by the size of the file system and uses credits whenever it reads or writes data. So if you have proportionally high read/write compared to overall data, you may face the burst capacity issues and opt to the Throughput Provisioned Mode.</li>\r\n</ul>\r\n\r\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p><strong>Specifying Throughput with Provisioned Mode</strong></p>\r\n\r\n\t\t\t<p>AWS EFS supports Provisioned Throughput mode, which allows applications configured to provision the throughput irrespective of the data stored inside the file system. This means applications with higher throughput requirements can use this mode to achieve higher performance.</p>\r\n\r\n\t\t\t<p>Keep in mind that Provisioned Throughput is billed separately from the data storage depending on the capacity.&nbsp;</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34817,
          "question_id": 44806,
          "answers": [
            {
              "choice": "<p>EFS is not highly-available and will require periodic backup to ensure no data is at a loss.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The throughput of EFS increases with storage capacity, so the download is always faster with more data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The EFS is mounted in the local file system of EC2 instances and your application needs to handle all the upload/download processing.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Encryption in transit and at the storage level is not available. So in the future, if your application needs encryption, EFS will not be the right choice.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>EFS performance is dependent on storage size. Under heavy load such as when the throughput limit exceeds 1024 MiB/s, EFS may start to throttle unexpectedly.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 44807,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>Your company runs a popular map service as a SaaS platform. Your dynamic multi-page application users are spread across the world, but not all of them heavily use the system.&nbsp;So the load is high in some of the regions but not all. The application uses the NoSQL database and runs it on a cluster of EC2 machines and uses the custom tools to replicate the data across different regions. The current database size is around 10PB. As the popularity of the application grows, the database is also growing rapidly. Now the application is serving millions of requests from your SaaS platform. The management has decided to develop a plan to re-design the architecture dynamically, both from the application availability and infrastructure cost perspective.<br />\nPlease suggest the necessary changes. (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A, C, D</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT </strong>because the AWS Route53 Latency-based routing will redirect the lowest latency region&#39;s request to help serve the application faster.</li>\n\t<li><strong>Option B is INCORRECT</strong> because the AWS S3 can only be used for Static Website Hosting or Single Page Applications. However, in the current case, the application is a SaaS platform and the question mentions that the multi-page application is dynamic. CloudFront is suitable to serve requests from different regions. But as S3 is incorrect, this option is wrong.</li>\n\t<li><strong>Option C is CORRECT</strong> because the DynamoDB global tables provide replication capabilities. With global tables, you can have a fully managed, multi-region, and multi-master database that provides fast, local, read and write performance for massively scaled, global applications.</li>\n\t<li><strong>Option D is CORRECT</strong> because&nbsp;DAX is tightly integrated with DynamoDB. As&nbsp;the retrieval of cached data reduces the read load on existing DynamoDB tables, you also be able to reduce their provisioned read capacity and lower overall operational costs.</li>\n\t<li><strong>Option E is INCORRECT</strong> because AWS RDS is a relational database service, and the application in the context is using the NoSQL database. It would require a significant engineering effort to re-design the application to fit the relational database and scale for such a huge amount of data.</li>\n</ul>\n\n<p><strong>Sample architecture:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/blogs/database/how-to-increase-performance-while-reducing-costs-by-using-amazon-dynamodb-accelerator-dax-and-aws-lambda/\">https://aws.amazon.com/blogs/database/how-to-increase-performance-while-reducing-costs-by-using-amazon-dynamodb-accelerator-dax-and-aws-lambda/</a></li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/dynamodb/dax/\">https://aws.amazon.com/dynamodb/dax/</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84584,
          "question_id": 44807,
          "answers": [
            {
              "question_id": "44807",
              "choice": "<p>Route53 with Latency-based routing policy to redirect to the lowest latency region and deploy the application into regions from where the heavy load is generating.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44807",
              "choice": "<p>Migrate the application on S3 and use CloudFront edge locations to serve the requests.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44807",
              "choice": "<p>Migrate the database to DynamoB and use DynamoDB global tables to replicate the data into multiple regions.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44807",
              "choice": "<p>Use Amazon DynamoDB Accelerator (DAX)&nbsp;to cache DynamoDB table requests.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44807",
              "choice": "<p>Use RDS with the Read Replicas into multiple regions, application servers will use the read replicas to serve the traffic.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44808,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have developed a web application to collect monthly expense reports. As the nature of the application and looking at the usage statistics, it is mostly used around the last week of the month and the first week of the month. To increase the application performance, you added a caching layer in front of the application servers.&nbsp;So the reports are cached and served immediately. You started off with Elasticache Redis with a &quot;cache.t2.small&quot; node type. The application has been running fine. When looking at the performance activity into the CloudWatch, hardly 50% of the requests are served by the cache, and the cache cannot cope with additional content requirements. You want to improve the application with minimal changes and&nbsp;resources. Please select a valid option.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because we can modify the cache node type from &quot;cache.t2.small&quot; to &quot;cache.t2.medium&quot; in the console. We must increase the size of the Redis instance for the server to serve more requests from the cache.</li>\r\n\t<li>Option B is INCORRECT because creating a new Elasticache instance with a &quot;cache.t2.micro&quot; node type is not needed here.</li>\r\n\t<li>Option C is INCORRECT because migrating to Beanstalk will simply not save the cost. Also, Beanstalk has an RDS layer but no caching layer.</li>\r\n\t<li>Option D is INCORRECT because S3 and CloudFront will incur additional costs for such a minimal use case.</li>\r\n</ul>\r\n\r\n<p>There are two things here.<br />\r\n<br />\r\nElastic Cache Instance -&gt; this supports the underlying Elasticache engine. This is similar to our ec2 instance like &quot;t2.micro&quot; , &quot;t2.mall&quot; etc. This instance type can be modified either through the AWS console or through the CLI.<br />\r\n<br />\r\nRedis -&gt; This is the engine that runs the elasticache cluster. This engine can only be &quot;upgraded&quot; and cannot be &quot;downgraded&quot;.<br />\r\n<br />\r\nPlease refer to page 99&nbsp;of the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-ug.pdf</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34819,
          "question_id": 44808,
          "answers": [
            {
              "choice": "<p>Modify the ElastiCache instance from t2 small to t2 medium, as t2 medium&nbsp;is more suitable for the given requirement.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new ElastiCache instance with t2 micro, and terminate the t2 small instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the application to Elastic Beanstalk to use auto-scaling and set the desired and min capacity to 1, use the RDS and Cache layer of Beanstalk to save the cost.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the web application from S3 and serve with CloudFront.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44838,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are an IT administrator, and you are responsible for managing several on-premises databases in VMware vSphere environments. The R&amp;D team has just created several RDS instances on VMware to utilize the latest AWS RDS on VMware features. Then, those new databases can be managed by using the RDS console, API, and CLI. Which activities does the Amazon RDS on VMware manage on your behalf? (Select FOUR)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; </strong>A,B,C ,D</p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Amazon Relational Database Service (RDS) on VMware lets you deploy managed databases in on-premises VMware environments using the Amazon RDS technology. For what Amazon RDS on VMware manages on your behalf, refer to <a href=\"https://aws.amazon.com/rds/vmware/faqs/\" target=\"_blank\">https://aws.amazon.com/rds/vmware/faqs/</a>&nbsp;and https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-feature-support.html</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT: Because RDS on VMware takes care of the patching for databases.</li>\r\n\t<li>Option B is CORRECT: Because RDS on VMWare has instance health monitoring&nbsp;and failover capabilities.</li>\r\n\t<li>Option C is CORRECT: Because after being configured, RDS on VMware takes care of the backup and retention just like what it does in AWS RDS.</li>\r\n\t<li>Option D is CORRECT: For&nbsp;a similar reason&nbsp;as&nbsp;Option C.</li>\r\n\t<li>Option E is incorrect: Because RDS on VMware communicates with AWS RDS using a dedicated VPN channel. There is no public IP allocated by AWS VPC.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34849,
          "question_id": 44838,
          "answers": [
            {
              "choice": "<p>The patching of the RDS on-premises operating systems and database engines.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Instance health monitoring&nbsp;and failover capabilities of the on-premises instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Automated backups based on retention policies of databases in RDS VMware.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Point-in-time restore from on-premises instances and cloud backups when needed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>IP management such as a dedicated public IP has been allocated by AWS VPC.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44839,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are an AWS solutions architect and are in charge of maintaining an RDS on VMware database that is deployed on-premises. You have created a read replica in the ap-south-1 region to share some read traffic. The system has run smoothly for a while. Then the company decides to migrate all the products to AWS, including the on-premises RDS instance. Other than that, the instance needs to have another replica in another region ap-southeast-1. The migration process should be straightforward. What actions should you take to fulfill this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer -&nbsp;D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Amazon RDS on VMware database instances can be easily migrated to Amazon RDS database instances in AWS with no impact on uptime, giving you the ability to rapidly deploy databases in all AWS regions without interrupting your customer experience. The process is as below.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/25/ckeditor_aws6-2.jpg\" style=\"height:215px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because the Data Migration Service is not needed. You need to promote the read-replica to be the new RDS instance.</li>\r\n\t<li>Option B is incorrect: Same reason as Option A. Also, &ldquo;migrating the instance&rdquo; is incorrect.</li>\r\n\t<li>Option C is incorrect: Because the read replica in ap-southeast-1 is still syncing with the original on-premise RDS instance. A new read replica should be created from the instance in ap-south-1.</li>\r\n\t<li>Option D is CORRECT: Because the database can be easily migrated by promoting the read replica in ap-south-1. Please note that during migration, the performance may be impacted. In the question, it asks for a straightforward method so this option is appropriate.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34850,
          "question_id": 44839,
          "answers": [
            {
              "choice": "<p>Use Data Migration Service to migrate the on-premises database to an RDS instance in AWS. Create a read replica in the ap-southeast-1 region afterward.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In RDS console, click &ldquo;migrating the instance&rdquo; to create a new RDS instance. Then create a new read replica in the ap-southeast-1 region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create another read replica in the ap-southeast-1 region to share the read traffic for the RDS instance on VMware. Promote the RDS read replica in ap-south-1 to be the new RDS instance so that the original on-premise database is migrated in AWS with a replica in ap-southeast-1.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Promote the RDS read replica in ap-south-1 to be the new RDS instance. Create another read replica in ap-southeast-1 for this new instance.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 44840,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are a development lead, and your team has maintained an emailing service for the company&rsquo;s major applications. The emailing service is deployed on-premises with several RDS on VMware databases to store users&rsquo; metadata. There is no plan to migrate the on-premises RDS databases to AWS RDS. However, you need an appropriate approach to backup the databases to AWS so that the database can be quickly restored. Which steps should you take to fulfill this requirement? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A, D, E</strong></p>\n\n<p>When using Amazon RDS on VMware, it also makes it very easy to take advantage of the AWS scale for disaster recovery, cloud backups, and read replica scaling. The same RDS console, APIs, or CLI can be used to manage RDS databases running on VMware or RDS databases running on AWS. Refer to <a href=\"https://aws.amazon.com/rds/vmware/\" target=\"_blank\">https://aws.amazon.com/rds/vmware/</a> on how to do the hybrid cloud backups and scaling.</p>\n\n<ul>\n\t<li>Option A is CORRECT: Because the Amazon RDS on VMware backup/restore system enables point-in-time restore for all supported engines and allows you to specify an automated backup retention period of up to 35 days.</li>\n\t<li>Option B is incorrect: Because for Amazon RDS on VMware, you can only create a read replica in the same region as the source DB instance. Details please check <a href=\"https://aws.amazon.com/rds/vmware/faqs/\">https://aws.amazon.com/rds/vmware/faqs/</a>.</li>\n\t<li>Option&nbsp;C is&nbsp;incorrect: Because AWS Glacier is unsuitable for a quick restore.</li>\n\t<li>Option&nbsp;D is&nbsp;CORRECT: Because the read replica can be created in the same region. RDS on VMware is available in AWS US East (Northern Virginia) Region. References can be found in <a href=\"https://aws.amazon.com/rds/vmware/faqs/\">https://aws.amazon.com/rds/vmware/faqs/</a>. Please note that a Read Replica can be promoted if the database needs to be restored in AWS RDS.&nbsp;</li>\n\t<li>Option&nbsp;E is&nbsp;CORRECT: Because this method can create a manual snapshot in AWS,&nbsp;if needed.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34851,
          "question_id": 44840,
          "answers": [
            {
              "choice": "<p>Specify an automated backup every day to store the snapshot to the S3 bucket so that the backup has high availability and durability.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a read-replica in a different region from the one that the RDS on VMware instance connects to.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an automated backup schedule in RDS and save the daily snapshots to AWS Glacier for long-term backup.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read-replica in the same region&nbsp;for disaster recovery as long as the region supports RDS.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a manual backup of the on-premise database if needed.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 58122,
      "topic_id": 364,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are working in a big organization as an AWS Solutions Architect. At the moment, the company is managing AWS AMIs in different ways without a common pattern. Different teams follow their own processes to create AMIs based on various pipelines. You plan to standardize the creation and management of AMIs through EC2 Image Builder. Which of the following benefits can you achieve with EC2 Image Builder? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer​s:​ B and&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect</strong> because the operating system versions can be customized. Users can choose a particular OS version based on their needs.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because users can customize components to build their desired output AMIs. Take the following as an example:<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/cs1.png\" style=\"height:182px; width:750px\" /></li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because AMIs cannot be automatically deployed on EC2 instances. The image pipeline provides an automation framework for building secure AMIs and container images on AWS.</li>\r\n\t<li><strong>Option​ ​D ​is​ CORRECT </strong>because EC2 Image Builder supports this. The generated AMIs can be distributed through an AMI pipeline.</li>\r\n\t<li><strong>Option​ ​E ​is​ ​incorrect </strong>because EC2 Image Builder utilizes image recipes, and Packer templates cannot be used by EC2 Image Builder.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/imagebuilder/latest/userguide/how-image-builder-works.html\">https://docs.aws.amazon.com/imagebuilder/latest/userguide/how-image-builder-works.html</a>&nbsp;</li>\r\n\t<li><a href=\"https://www.packer.io/docs/templates\">https://www.packer.io/docs/templates</a>&nbsp;</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59871,
          "question_id": 58122,
          "answers": [
            {
              "question_id": "58122",
              "choice": "<p>EC2 Image Builder pipelines always use the latest operating system in which the latest security patches are installed.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58122",
              "choice": "<p>In an EC2 Image Builder pipeline, users can choose to install Amazon managed components such as the CloudWatch agent and the CodeDeploy agent.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58122",
              "choice": "<p>With an EC2 Image Builder pipeline, users can automatically deploy the AMIs in EC2 instances or Auto Scaling groups in different AWS Regions.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58122",
              "choice": "<p>In an EC2 Image Builder pipeline, the generated AMIs can be automatically distributed to multiple AWS Regions or shared with other AWS accounts.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58122",
              "choice": "<p>EC2 Image Builder pipelines are based on Packer so that Packer templates can be reused.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44841,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your team is building up a smart home iOS APP. The end users have used your company&rsquo;s camera-equipped home devices such as baby monitors, webcams, and home surveillance systems. Then the videos are uploaded to AWS. Afterward, through the mobile APP, users can play the on-demand or live videos using the format of HTTP Live Streaming (HLS). Which combinations of steps should you use to accomplish this task? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answers&nbsp;&ndash;&nbsp;B, D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>AWS provides a live streaming solution that combines AWS Elemental MediaLive and AWS Elemental MediaPackage with Amazon CloudFront to build a highly resilient and scalable architecture that delivers your live content worldwide. The diagram below presents the live streaming video architecture you can automatically deploy using the solution&#39;s implementation guide and accompanying AWS CloudFormation template.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/07/03/ckeditor_aws_csap_pt2-q13.png\" style=\"height:400px; width:879px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because Kinesis Data Firehose is not used for live streaming; instead, it is used for streaming data delivery.</li>\r\n\t<li>Option B is CORRECT because AWS provides a live streaming solution that combines AWS Elemental MediaLive and AWS Elemental MediaPackage with Amazon CloudFront to build a highly resilient and scalable architecture that delivers your live content worldwide.&nbsp;</li>\r\n\t<li>AWS Elemental MediaStore is a video origination and storage service that offers the high performance and immediate consistency required for live and on-demand media. You can use AWS Elemental MediaStore to store assets that MediaLive retrieves and uses when transcoding, and as a destination for output from MediaLive.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect because transforming the stream data to HLS compatible data using Kinesis Data Analytics or customer code in EC2/Lambda is not needed or irrelevant here.</li>\r\n\t<li>Option&nbsp;D is&nbsp;CORRECT because the GetHLSStreamingSessionURL API is called to retrieve the HLS streaming session URL. When you have the HLS streaming session URL, provide it to the video player, which will be able to play the video.</li>\r\n</ul>\r\n\r\n<p>AWS Docs for reference:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/solutions/live-streaming-on-aws/\" target=\"_blank\">https://aws.amazon.com/solutions/live-streaming-on-aws/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/medialive/latest/ug/medialive-ug.pdf#what-is\">https://docs.aws.amazon.com/medialive/latest/ug/medialive-ug.pdf#what-is</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34852,
          "question_id": 44841,
          "answers": [
            {
              "choice": "<p>Create a Kinesis Data Firehose to ingest, durably store, and encrypt the live videos from the users&rsquo; home devices.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Elemental MediaLive and AWS Elemental MediaPackage with Amazon CloudFront.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Transform the stream data to HLS compatible data by using Kinesis Data Analytics or customer code in EC2/Lambda. Then in the mobile application, use HLS protocol to display the video stream by using the converted HLS streaming data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the mobile application, use HLS to display the video stream by using the HLS streaming session URL.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44842,
      "topic_id": 364,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>An IoT company has a new product which is a camera device. The device has installed several sensors and can record video as required. The device has AWS Kinesis Video Streams SDK in the software and can transmit recorded video in real-time to AWS Kinesis. Then the end-users can use a desktop or web client to view, download, or share the video stream. The client app should be simple and use a third-party player such as Google Shaka Player to display the video stream from Kinesis. How should the client app be designed?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>The most straightforward way to view or live playback the video in Kinesis Video Streams is by using HLS. HTTP Live Streaming (HLS) is an industry-standard HTTP-based media streaming communications protocol.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because although GetMedia API may work, it is not as simple as HLS. You may have to create a player that uses GetMedia and build it yourself. However, in this case, a third-party player is needed. Reference is in <a href=\"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-hls.html#how-hls-ex1-session\" target=\"_blank\">https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-hls.html#how-hls-ex1-session</a>.</li>\r\n\t<li>Option B is CORRECT: Because GetHLSStreamingSessionURL API is required for third-party players to play the HLS streams.</li>\r\n\t<li>Option C is incorrect: Because HTTP Live Streaming (HLS) should be used to playback the Kinesis Video Streams.</li>\r\n\t<li>Option D is incorrect: Same reason as Option C.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34853,
          "question_id": 44842,
          "answers": [
            {
              "choice": "<p>The client can use HTTP Live Streaming (HLS) for live playback. Use GetMedia API to process and play Kinesis video streams.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use HLS for live playback. Use GetHLSStreamingSessionURL API to retrieve the HLS streaming session URL, then provide the URL to the video player.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use Adobe HTTP Dynamic Streaming (HDS) for live playback. Use GetHDSStreamingSessionURL API to retrieve the HDS streaming session URL, then provide the URL to the video player.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The client can use Microsoft Smooth Streaming (MSS) for live playback. Use GetMSSStreaming API to retrieve the MSS streaming to the video player.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44843,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your company is a media company. You need a fully managed AWS service that can stream live video from smartphones to AWS and help you build applications for real-time video processing. Which of the following services is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<ul>\r\n\t<li>Options A, B and C are incorrect because all these services are not dedicated AWS services for streaming live videos to AWS.</li>\r\n\t<li>Option D is CORRECT because Amazon Kinesis Video Streams can capture massive amounts of live video from millions of sources, including smartphones to AWS. It is the most appropriate service to achieve the requirement of the question.</li>\r\n</ul>\r\n\r\n<p>For the introduction of Kinesis Video Streams, please check <a href=\"https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html\">https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html</a>.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34854,
          "question_id": 44843,
          "answers": [
            {
              "choice": "<p>Amazon Kinesis Data Streams</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Kinesis Delivery Streams</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Interactive Video Service</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Kinesis Video Streams</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28667,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>When a user creates an encrypted EBS volume and attaches it to a supported instance type, which of the following data types are encrypted?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; A, C, and D</strong></p>\r\n\r\n<p>Amazon EBS encryption offers a simple encryption solution for your EBS volumes without the need to build, maintain, and secure your own key management infrastructure. When you create an encrypted EBS volume and attach it to a supported instance type, the following types of data are encrypted:</p>\r\n\r\n<p>(i) Data at rest inside the volume</p>\r\n\r\n<p>(ii) All data moving between the volume and the instance</p>\r\n\r\n<p>(iii) All snapshots created from the volume</p>\r\n\r\n<p>(iv) All volumes created from those snapshots</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Based on this, options A, C, and D are all CORRECT.</li>\r\n\t<li>Option B is incorrect since the data that is copied to S3 is not encrypted.</li>\r\n</ul>\r\n\r\n<p>For more information on this, please visit the link below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18784,
          "question_id": 28667,
          "answers": [
            {
              "choice": "<p>Data at rest inside the volume</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>All data copied from the EBS volume to S3</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All data moving between the volume and the instance</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>All snapshots created from the volume</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44844,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are hired as an AWS solutions architect in a startup company. You notice some issues with the backup strategy of EC2 instances, and there is no snapshot lifecycle management. Users just create snapshots manually without a routine policy to control. You want to suggest using a proper EBS Snapshot Lifecycle policy. How would you persuade your team lead to approve this suggestion?&nbsp; (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A, B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>EBS Snapshot Lifecycle policy, as a backup strategy, can bring lots of benefits for EC2 users. About the details, please refer to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT: Because EC2 EBS volumes can have a routine backup which helps on the quality audit.</li>\r\n\t<li>Option B is CORRECT: Because this is the major benefit of the life cycle policy, preserving important data and EBS volumes can be easily restored via the snapshots.</li>\r\n\t<li>Option C is incorrect: The snapshot lifecycle policy can reduce storage costs by deleting outdated backups. However, the snapshots themselves still have costs.</li>\r\n\t<li>Option D is incorrect: Because you can create up to 100 lifecycle policies per Region.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34855,
          "question_id": 44844,
          "answers": [
            {
              "choice": "<p>A snapshot lifecycle policy helps to retain backups as required by auditors or internal compliance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An EBS Snapshot Lifecycle helps to protect valuable data by enforcing a regular backup schedule.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A proper snapshot lifecycle policy is able to reduce storage costs as the snapshots taken by the schedule policy are free.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You can create an unlimited number of lifecycle policies.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
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
      "question_id": 44846,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>An IT company has a big data analytics application that is deployed in EC2 in multiple availability zones. These EC2 instances simultaneously access a shared Amazon EFS file system using a traditional file permissions model. A recent internal security audit has found a potential security risk, as the EFS file system is not encrypted for either at rest or in transit. What actions could be taken to address the potential security threat posed by the non-encryption of the EFS volume?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Both encryption of data in transit and at rest are supported for EFS. Due to&nbsp;this, Amazon EFS now offers a comprehensive encryption solution. Blog <a href=\"https://aws.amazon.com/blogs/aws/new-encryption-of-data-in-transit-for-amazon-efs/\">https://aws.amazon.com/blogs/aws/new-encryption-of-data-in-transit-for-amazon-efs/</a> has an introduction to this.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT: For the encryption at rest, it can be enabled as an option when the EFS file system is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/25/ckeditor_aws6-9.jpg\" style=\"height:156px; width:750px\" /></p>\r\n\r\n<p>For the encryption in transit, it can be enabled when the EFS file system is mounted:</p>\r\n\r\n<p><em>sudo mount -t efs&nbsp; -o tls fs-12345678:/ /mnt/efs</em></p>\r\n\r\n<p>Reference is in <a href=\"https://docs.aws.amazon.com/efs/latest/ug/encryption.html\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/encryption.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option B is incorrect: Because the encryption of data in transit is enabled when the EFS file system is mounted.</li>\r\n\t<li>Option C is incorrect: Because the encryption of data at rest is enabled when the EFS file system is created.</li>\r\n\t<li>Option D is incorrect: Same reason as Option B &amp; C.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34857,
          "question_id": 44846,
          "answers": [
            {
              "choice": "<p>The encryption of data at rest has to be enabled when the Amazon EFS file system is created. The encryption of data in transit can be enabled when the file system is mounted in the EC2 instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest and in transit can be enabled when the Amazon EFS file system is created.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest and in transit can only be enabled when the Amazon EFS file system is mounted in the EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The encryption of data at rest can be enabled when the Amazon EFS file system is mounted in the EC2 instance. The encryption of data in transit is enabled when the EFS file system is created using the AWS console or CLI.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28671,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An International company has deployed a multi-tier web application with DynamoDB in a single region. For regulatory reasons, they need disaster recovery capabilities in a separate region with a Recovery Time Objective of 5 hours and a Recovery Point Objective 24 hours. They should synchronize their data regularly and be able to provision the web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application and&nbsp;replicate data for the DynamoDB table efficiently between two regions.</p>\r\n\r\n<p>Which of the following designs can&nbsp;replicate the DynamoDB data between two regions in the most efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - C</strong></p>\r\n\r\n<p>Option A is INCORRECT because you need to&nbsp;use AWS Data Pipeline to export data from&nbsp;DynamoDB table to a file in an Amazon S3 bucket and then&nbsp;import data from Amazon S3 into another DynamoDB table in the second region. However, DynamoDB global tables can automatically synchronize data between two regions.</p>\r\n\r\n<p>Option B is INCORRECT because you have to build your own logic to replicate data. This is not the most efficient way.</p>\r\n\r\n<p>Option C is CORRECT because DynamoDB global tables provide a fully managed solution to synchronize data for DynamoDB. Users do not need to build their own replication solution. This is the most efficient method.</p>\r\n\r\n<p>Option D is INCORRECT because this method does not explain how to replicate data for the DynamoDB table.</p>\r\n\r\n<p>Please check the below link to know more about DynamoDB Global Tables.</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18788,
          "question_id": 28671,
          "answers": [
            {
              "choice": "<p>Use AWS Data Pipeline to schedule a DynamoDB Cross-Region copy once a day and create a &ldquo;Last updated&rdquo; attribute in your DynamoDB table representing the timestamp of the last update and use it as a filter.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure DynamoDB global tables for deploying the multi-active database in two AWS Regions.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Send each item into an SQS queue in the second region; use an auto-scaling group behind the SQS queue to replay the write in the second region.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 44847,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>For application development and testing purposes, your team has created several EFS volumes. As&nbsp;the AWS operation engineer, you have been tasked with&nbsp;mounting some EFS file systems on&nbsp;EC2 Linux instances with encryption enabled in-transit. You have already installed the EFS mount helper on&nbsp;the instances. To use the mount helper properly when mounting the EFS volumes, which actions should you perform? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A, C, E</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Encryption of data in transit is enabled by connecting to Amazon EFS using TLS. AWS recommends using the mount helper because it&#39;s the simplest option. The helper is in the amazon-efs-utils package which is an open-source collection of Amazon EFS tools. This link <a href=\"https://docs.aws.amazon.com/efs/latest/ug/using-amazon-efs-utils.html#efs-mount-helper\" target=\"_blank\">https://docs.aws.amazon.com/efs/latest/ug/using-amazon-efs-utils.html#efs-mount-helper</a> is the user guide for the helper.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT: Because the command is&nbsp;&ldquo;sudo mount -t efs fs-92758f7b -o tls /mnt/efs&rdquo;. The &ldquo;fs-92758f7b&rdquo; is the EFS file system ID.</li>\r\n\t<li>Option B is incorrect: Because EFS encryption does not need the rule from the security group. For more on&nbsp;how to use&nbsp;mounting with the EFS mount helper, refer to <a href=\"https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html#mounting-fs-mount-helper\">https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html#mounting-fs-mount-helper</a>.</li>\r\n\t<li>Option C is CORRECT: Because mount targets are needed for the VPC&rsquo;s availability zones when the EFS file system is created.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/25/ckeditor_aws6-10.jpg\" style=\"height:429px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option D is incorrect: Similar to Option B, there is no specific network ACL rule needed for EFS encryption in transit.</li>\r\n\t<li>Option E is CORRECT: Because the &ldquo;-o tls&rdquo; option is needed to enable the encryption in transit.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34858,
          "question_id": 44847,
          "answers": [
            {
              "choice": "<p>Get the&nbsp;EFS file system&#39;s ID from the console or programmatically through the Amazon EFS API.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Make sure that the security group of EC2 instances has opened the port 443 for SSL traffic.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create mount targets for your EC2 instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the subnets of your EC2 Instances, create a&nbsp;network ACL rule to allow HTTPS traffic so that encryption in transit between EC2 and EFS file system is allowed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>When the mount helper utility is used, add the encryption option:&nbsp;&ldquo;-o tls&rdquo;.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45068,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are an AWS consultant in an IT company. Your development manager just assigned you a task to evaluate if the EBS volume types of the EC2 instances were properly configured in all regions. The major concern that you have found is that almost all EBS volumes are using the Provisioned IOPS SSD (io1) volume type which costs the company a lot. You plan to change the volume type from io1 to other types. However, for which scenarios should you still use the EBS volume type of io1?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer:&nbsp;&nbsp;B</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Refer to <a href=\"https://aws.amazon.com/ebs/features/\" target=\"_blank\">https://aws.amazon.com/ebs/features/</a> for the use cases of different EBS volume types:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<table cellspacing=\"0\" style=\"width:752px\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:48.0pt; width:103.65pt\">\r\n\t\t\t<p>Volume Type</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:48.0pt; width:94.6pt\">\r\n\t\t\t<p>EBS Provisioned IOPS SSD (io1)</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:48.0pt; width:94.6pt\">\r\n\t\t\t<p>EBS General Purpose SSD (gp2)*</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:48.0pt; width:85.55pt\">\r\n\t\t\t<p>Throughput Optimized HDD (st1)</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:48.0pt; width:73.0pt\">\r\n\t\t\t<p>Cold HDD (sc1)</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"height:96.0pt; vertical-align:top; width:103.65pt\">\r\n\t\t\t<p>Short Description</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"height:96.0pt; vertical-align:top; width:94.6pt\">\r\n\t\t\t<p>Highest performance SSD volume designed for latency-sensitive transactional workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"height:96.0pt; vertical-align:top; width:94.6pt\">\r\n\t\t\t<p>General Purpose SSD volume that balances price performance for a wide variety of transactional workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"height:96.0pt; vertical-align:top; width:85.55pt\">\r\n\t\t\t<p>Low-cost HDD volume designed for frequently accessed, throughput intensive workloads</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"height:96.0pt; vertical-align:top; width:73.0pt\">\r\n\t\t\t<p>Lowest cost HDD volume designed for less frequently accessed workloads</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:60.0pt; width:103.65pt\">\r\n\t\t\t<p>Use Cases</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:60.0pt; width:94.6pt\">\r\n\t\t\t<p>I/O-intensive NoSQL and relational databases</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:60.0pt; width:94.6pt\">\r\n\t\t\t<p>Boot volumes, low-latency interactive apps, dev &amp; test</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:60.0pt; width:85.55pt\">\r\n\t\t\t<p>Big data, data warehouses, log processing</p>\r\n\t\t\t</td>\r\n\t\t\t<td style=\"background-color:#f7f7f7; height:60.0pt; width:73.0pt\">\r\n\t\t\t<p>Colder data requiring fewer scans per day</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;incorrect:&nbsp;Because according to the above introductions, this should be a gp2 for a boot volume.</li>\r\n\t<li>Option&nbsp;B is&nbsp;CORRECT:&nbsp;Because this is ideal for io1 as it needs the highest performance and lowest latency.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because this should be an st1, it could lower the cost and meet the performance need.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because sc1 is suitable for this as it is not frequently used. Moreover, because it contains a large amount of data, using io1 is not cost-efficient.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35075,
          "question_id": 45068,
          "answers": [
            {
              "choice": "<p>A boot volume of a test server that&nbsp;is frequently used by the Quality Assurance team.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A Cassandra database that needs extremely low latency and high performance when being processed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A data warehouse server that contains a huge amount of customer data. The data needs to be accessed and analyzed by a monitor process frequently.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Some large and legacy cold data that&nbsp;is stored to trace customers&rsquo; activities in the past. The database requires fewer scans per day.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 45071,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An AWS Solution architect who uses&nbsp;EBS General Purpose SSD (gp2) volume type&nbsp;for his&nbsp;EBS volumes now wants to modify some of these volumes. What options would you suggest?&nbsp;(Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;&nbsp;A, D</strong></p>\r\n\r\n<p>The EBS volume types can be modified in flight without the volume being detached or the instance being restarted. However, some limitations need to be noticed. The details are in&nbsp;<a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html</a></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because the root volume can be changed to io1 such as:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/02/09/ckeditor_64981.png\" style=\"height:651px; width:1053px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because a gp2 volume that is attached to an instance as a root volume cannot be modified to an st1 or sc1 volume. Check&nbsp;<a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html</a>.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because there is no gp4 type of volume available.</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;D is&nbsp;CORRECT:&nbsp;Because the volume size 1TB is suitable for Throughput Optimized HDD (st1):</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/11/ckeditor_2.3.png\" style=\"height:200px; width:1000px\" /></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35078,
          "question_id": 45071,
          "answers": [
            {
              "choice": "<p>A 50GB gp2 root volume<strong> </strong>can be modified to an EBS Provisioned IOPS SSD (io1) after&nbsp;stopping the instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A gp2 volume attached to an instance as a root volume can be modified to a Throughput Optimized HDD (st1) volume.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A 1GB gp2 volume attached to an instance as a non-root volume can be modified to a gp4&nbsp;volume.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A 1TB gp2 volume attached to an instance as a non-root volume can be modified to a Throughput Optimized HDD (st1) volume without stopping the instance or detaching the volume.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45073,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your team is working on a plant recognition application. After users upload photos of plants, the application can provide their names and properties.</p>\n\n<p>A MySQL database is deployed in EC2 using an instance store, as instance store-backed storage is very fast in terms of reads and writes, which makes it optimal for running MySQL. However, as the instance store is an ephemeral volume, the database will be lost when the instance&nbsp;stops&nbsp;or is terminated. How should the team plan to back up and migrate the MySQL database? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;A, B</strong></p>\n\n<ul>\n\t<li>About how to back up the instance store volume, refer to the document in\n\t<ul>\n\t\t<li><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/</a>.</li>\n\t</ul>\n\t</li>\n</ul>\n\n<p>You can back up data stored on an instance store volume in one of the two ways mentioned in options A &amp; B.</p>\n\n<ul>\n\t<li>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because it is useful to back up the database filestore to S3.</li>\n\t<li>Option&nbsp;B is&nbsp;CORRECT:&nbsp;This is recommended as the above link. For example, tools such as sync for Linux or robocopy for Windows can be used to backup data.</li>\n\t<li>Option&nbsp;C is&nbsp;incorrect: There is no way to create an AMI from instance store volume using the console. To do so, you must use&nbsp;AMI Tools from the command line.</li>\n\t<li>Option&nbsp;D is&nbsp;incorrect: Snapshots cannot create, for instance, store volumes. Only EBS volumes can.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35080,
          "question_id": 45073,
          "answers": [
            {
              "choice": "<p>Back up the database filestore&nbsp;to S3.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new EBS volume and attach the volume to EC2. Export&nbsp;the MySQL database to the EBS volume using disk management&nbsp;or migration&nbsp;tool.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the EC2 AWS console, select the instance -&gt; Actions -&gt; Image -&gt; Create Image. Then the created AMI is able to backup the MySQL data in the instance store.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create snapshots for the instance store volume where the MySQL database resides. Copy the snapshots to other regions for further backup.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45075,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A video provider has a big proportion of EC2 instance store volumes as many of their workloads require very quick&nbsp;disk IO. Compared with EBS counterparts, instance store volumes are physically attached to the host and have better performance. However, they still need to work out a suitable method to&nbsp;create an AMI for the instance store volume. How can you do it?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;D</strong></p>\r\n\r\n<p>The following diagram summarizes the process of creating an AMI from an instance store-backed instance.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/11/ckeditor_4_15_23.png\" style=\"height:473px; width:900px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;incorrect: Because an AMI can be created&nbsp;to store volume according to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-instance-store.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-instance-store.html</a>.</li>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect: Because AWS EC2 CLI can only be used to generate AMI for EBS volumes.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect: Because the AMI creation process for instance store volumes is different from Amazon EBS-backed AMIs. AMI tools such as ec2-bundle-vol and ec2-upload-bundle are required.</li>\r\n\t<li>Option&nbsp;D is&nbsp;CORRECT: Because this has used the correct procedures described in <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html#amazon_linux_instructions\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html#amazon_linux_instructions</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35082,
          "question_id": 45075,
          "answers": [
            {
              "choice": "<p>Instance store volume cannot have AMI images that are only available for EBS volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>They can only create an AMI using AWS EC2 CLI command for instance store volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The AMI can be created by using AWS EC2 console, CLI or SDK for instance store volumes.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The AWS&nbsp;CLI tools can be used to create a bundle for the volume and upload it to S3. Then register the AMI to the file in the S3 bucket.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 58125,
      "topic_id": 367,
      "course_id": null,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>AWS Lambda functions are widely used in your company by different teams. There is a requirement to extend the Lambda functions to integrate with other tools for monitoring, observability and security such as AppDynamics, HashiCorp, Splunk, etc. With the integration, some additional code needs to be run during function initialization, invocation or shut down. Which of the following options can achieve the requirement by extending Lambda&rsquo;s execution environment?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct​ ​Answer:​ A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is CORRECT</strong> because Lambda Extensions provides an easy way to integrate Lambda with other tools. The Lambda Extensions can be deployed through Lambda Layers that are generated by the .zip archive files. Lambda service extracts the extension files from the Lambda layers and manages the lifecycle of extensions.</li>\r\n\t<li><strong>Option​ B is​ ​incorrect </strong>because there is no need to create other Lambda functions. The existing Lambda functions should be extended by Lambda Extensions.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because CloudWatch event rules cannot trigger additional code during function initialization or shut down. Creating extra Lambda functions is not necessary.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because Lambda extensions cannot be used to process SQS messages from Lambda functions. SQS queues are not required for building extensions for AWS Lambda.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/building-extensions-for-aws-lambda-in-preview/\">https://aws.amazon.com/blogs/compute/building-extensions-for-aws-lambda-in-preview/</a>,</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html\">https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59187,
          "question_id": 58125,
          "answers": [
            {
              "question_id": "58125",
              "choice": "<p>Deploy Lambda extensions through Lambda layers by adding the extensions in the Lambda .zip archives.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "58125",
              "choice": "<p>Deploy the required tools in other dedicated Lambda functions and integrate existing Lambda functions with these dedicated Lambda functions.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58125",
              "choice": "<p>Extend Lambda function with CloudWatch event rules by configuring third-party Lambda functions to process events.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "58125",
              "choice": "<p>Integrate the Lambda function with Amazon SQS and process the queue messages by Lambda extensions.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45081,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are hired as an AWS engineer. Your major responsibility is to migrate existing services to the AWS platform. The company&rsquo;s on-premises main page is made of Node.js and PostgreSQL database. You just migrated the frontend and backend to an EC2 instance. Also, you created a PostgreSQL instance in RDS.</p>\r\n\r\n<p>However, you found that the EC2 instance cannot talk with the RDS instance with the exception &ldquo;could not connect to server: Connection timed out&rdquo;. How should you check the configurations and fix this problem? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;A, D</strong></p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.SQLServer.Connect\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Troubleshooting.html#CHAP_Troubleshooting.SQLServer.Connect</a> is a user guide on how to troubleshoot the RDS issues.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because if the used endpoint or port is incorrect, the error would be &ldquo;Connection timed out&rdquo;.</li>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because the AWS SDK version does not cause the issue to communicate with the RDS instance.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because the low configured capacity does not lead to a &ldquo;Connection timed out&rdquo; issue.</li>\r\n\t<li>Option&nbsp;D is&nbsp;CORRECT:&nbsp;Because the most common problem when attempting to connect to a PostgreSQL DB instance is that the security group assigned to the DB instance has incorrect access rules.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35088,
          "question_id": 45081,
          "answers": [
            {
              "choice": "<p>Check that if the hostname is the DB instance endpoint and the port number is correct.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the AWS SDK version is correct as there are issues for certain versions to communicate with RDS instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the RDS instance has configured enough read and write capacity. If not, the &ldquo;Connection timed out&rdquo; issue may appear.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check that the security group assigned to the DB instance has the necessary rules to allow access through the EC2 instance.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 45082,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A company has several departments, and its AWS specialist created an AWS organization in its master account that is owned by the operation team. Then he invited other departments such as Development, QA, and HR to join the organization. After all the invitations were accepted, the payer account and linked accounts have been set up successfully. What are some of the features of consolidated billing? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;B, C</strong></p>\r\n\r\n<p>The consolidated billing feature in AWS Organizations is used to consolidate billing and payment for multiple AWS accounts. It means that in the organization, the master pays the charges of all the member accounts.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect:&nbsp;Because although the owners of the linked accounts aren&#39;t charged, they can still see their usage and charges by going to their AWS Bills pages.</li>\r\n\t<li>Option B is&nbsp;CORRECT:&nbsp;Because the usage is combined in AWS Organization so that the discount is possible.</li>\r\n\t<li>Option C is&nbsp;CORRECT:&nbsp;This is clearly stated in <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a>.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because member accounts that you invited to join your organization did not automatically get an administrator role created. An OrganizationAccountAccessRole is needed at first in linked accounts. The&nbsp;related document is in <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35089,
          "question_id": 45082,
          "answers": [
            {
              "choice": "<p>It becomes more secure as only the payer account can see the usage and charges across all the accounts.&nbsp;Owners of the linked accounts cannot&nbsp;see their usage and charges.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The usage across all accounts can share the volume pricing discounts and Reserved Instance discounts.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The consolidated billing feature does not bring additional costs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Organizations automatically creates a root user and an IAM role for all linked accounts so that the master account can access&nbsp;and administer&nbsp;the member accounts.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 45083,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Two departments A and B have been added into a consolidated billing organization. Department A has 5 reserved RDS instances with DB Engine as MySQL. During one particular hour, department A used three DB Instances, and department B used two RDS instances for a total of 5 DB Instances on the consolidated bill. How should the RDS instances in department B be configured so that all five instances are charged as Reserved DB Instances?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct</strong>&nbsp;<strong>Answer E</strong></p>\r\n\r\n<p>In order to receive the cost-benefit from Reserved DB Instances, all the attributes of DB Instances (DB Engine, DB Instance class, Deployment type, and License Model) in another account should match the attributes of the Reserved DB Instances.</p>\r\n\r\n<ul>\r\n\t<li>Option A &amp; D are all required, and do find the reference in the following link.</li>\r\n\t<li>Option E is&nbsp;CORRECT:&nbsp;Because all of the other options are needed. The reference is in <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35090,
          "question_id": 45083,
          "answers": [
            {
              "choice": "<p>Department B should launch DB instances in the same region as Reserved Instance in department A.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The DB engine in Department B should be MySQL.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The DB Instance Class should be the same in both departments such as m1.large.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The deployment type such as Multi-AZ should be the same in both department A and department B.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All the above are needed.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28680,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your company&rsquo;s on-premises content management system has the following architecture:</p>\r\n\r\n<p>Application Tier &ndash; Java code on a JBoss application server<br />\r\nDatabase Tier &ndash; Oracle database regularly backed up to Amazon Simple Storage Service (S3) using the Oracle RMAN backup utility<br />\r\nStatic Content &ndash; stored on a 512GB gateway stored Storage Gateway volume attached to the application server via the iSCSI interface</p>\r\n\r\n<p>Which AWS-based disaster recovery strategy will give you the best RTO?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - A</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is CORRECT because (i) it deploys the Oracle database on EC2 instance by restoring the backups from S3 which is quick, and (ii) it generates the EBS volume of static content from Storage Gateway. Due to these points, option A meets the best RTO compared to all the remaining options.&nbsp;</p>\r\n\r\n<p>Option B is incorrect because restoring the backups from the Amazon Glacier will be slow and will not meet the RTO.</p>\r\n\r\n<p>Option C is incorrect because there is no need to attach the Storage Gateway as an iSCSI volume.&nbsp;You can just easily and quickly create an EBS volume from the Storage Gateway. Then you can generate snapshots from the EBS volumes for better recovery time.</p>\r\n\r\n<p>Option D is incorrect as restoring the content from Virtual Tape Library will not fit into the RTO.</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18797,
          "question_id": 28680,
          "answers": [
            {
              "choice": "<p>Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Generate an&nbsp; EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the Oracle database on RDS. Deploy the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon Glacier. Generate an EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content by attaching an AWS Storage Gateway running on Amazon EC2 as an iSCSI volume to the JBoss EC2 server.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content from an AWS Storage Gateway-VTL running on Amazon EC2</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28681,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>An ERP application is deployed in multiple Availability Zones in a single region. The application uses a MySQL database deployed in EC2. In the event of failure, the RTO must be less than 3 hours, and the RPO is 15 minutes. The customer realizes that data corruption occurred roughly 10 Mins ago. Which DR strategy can be used to achieve this RTO and RPO in the event of this kind of failure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - C</strong></p>\n\n<ul>\n\t<li><strong>Option A is incorrect </strong>because restoring the backups from Amazon Glacier would be slow and will definitely not meet the RTO and RPO.&nbsp;</li>\n\t<li><strong>Option B is incorrect </strong>because you cannot go back to the point in time recovery with the synchronous replication. You will always have the latest data.&nbsp;</li>\n\t<li><strong>Option C is CORRECT</strong> because it takes hourly backups to Amazon S3, restoring the backups quickly. Since the transaction logs are stored in S3 every 5 minutes, it will help restore the application to a state within the RPO of 15 minutes.&nbsp;</li>\n\t<li><strong>Option D is incorrect </strong>because instance&nbsp;store volume is ephemeral. i.e. the data can get lost when the instance is terminated.</li>\n</ul>\n\n<p><strong>Note:</strong></p>\n\n<p>Although Glacier supports expedited retrieval (On-Demand and Provisioned), it is an expensive option and is recommended only for the occasional urgent request for a small number of archives. Having said this (and even if we go with the Glacier as a solution), the option also mentions taking database snapshots every 15 minutes. Now, if you keep taking backups every 15 mins, the database users will face a lot of outages during the backup (due to I/O suspension especially in non-AZ deployment). Also, within 15 minutes, the backup process may not even finish!</p>\n\n<p>As an architect, you need to use the database change (transaction) logs along with the backups to restore your database to a point in time. Since option (c) stores the transaction details up to the last 5 minutes, you can easily restore your database and meet the RPO of 15 minutes. Hence, C is the best choice.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 63464,
          "question_id": 28681,
          "answers": [
            {
              "question_id": "28681",
              "choice": "<p>Take 15-minute DB backups stored in Amazon Glacier, with transaction logs stored in Amazon S3 every 5 minutes.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28681",
              "choice": "<p>Use synchronous database master-standby&nbsp;replication between two Availability Zones.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28681",
              "choice": "<p>Take hourly DB backups to Amazon S3, with transaction logs stored in S3 every 5 minutes.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28681",
              "choice": "<p>Take hourly DB backups to an Amazon EC2 instance store volume, with transaction logs stored in Amazon S3 every 5 minutes.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28682,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>The Marketing Director in your company asked you to create an app that lets users post sightings of good deeds known as random acts of kindness in 80-character summaries. You decided to write the application in JavaScript to run on the broadest range of phones, browsers, and tablets. Your application should provide access to Amazon DynamoDB to store the good deed summaries. Initial testing of a prototype shows that there aren&rsquo;t large spikes in usage. Which option provides the most cost-effective and scalable architecture for this application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>This scenario asks to design a cost-effective and scalable solution where a multi-platform application needs to communicate with DynamoDB. For such scenarios, federated access to the application is the most likely solution.</p>\r\n\r\n<p>Option A is incorrect because the Token Vending Machine (STS Service) is implemented on a single EC2 instance which is a single point of failure. This is not a scalable solution either, as the instance can become the performance bottleneck.</p>\r\n\r\n<p>Option B is CORRECT because, (i) it authenticates the application via federated identity provider such as Amazon, Google, Facebook, etc, (ii) it sets up the proper permission for DynamoDB access, and (iii) S3 website which supports Javascript - is a highly scalable and cost-effective solution. The application is authenticated through the&nbsp;&quot;assumeRolewithWebIdenity&quot; API via the federated identity provider.</p>\r\n\r\n<p>Option C is incorrect because deploying EC2 instances in the Auto Scaled environment is not as cost-effective solution as the S3 website, even though it is scalable.</p>\r\n\r\n<p>Option D is incorrect because it suggests running the website on an Auto Scaling group of EC2 instances with an ELB in the front end. This option is not the most cost-effective solution provided. Hence this is invalid.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18799,
          "question_id": 28682,
          "answers": [
            {
              "choice": "<p>Provide the JavaScript client with temporary credentials from the Security Token Service using a Token Vending Machine (TVM) on an EC2 instance to provide signed credentials mapped to an Amazon Identity and Access Management (IAM) user allowing DynamoDB puts and S3 gets. You serve your mobile application out of an S3 bucket enabled as a website. Your client updates DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Register the application with a Web Identity Provider like Amazon, Google, or Facebook, create an IAM role for that provider, and set up permissions for the IAM role to allow S3 gets and DynamoDB puts. You serve your application out of an S3 bucket enabled as a website. Your client updates DynamoDB.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provide the JavaScript client with temporary credentials from the Security Token Service using a Token Vending Machine (TVM) to provide signed credentials mapped to an IAM user allowing DynamoDB puts. You serve your mobile application out of Apache EC2 instances that are load-balanced and autoscaled. Your EC2 instances are configured with an IAM role that allows DynamoDB&nbsp;puts. Your server updates DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Register the JavaScript application with a Web Identity Provider like Amazon, Google, or Facebook, create an IAM role for that provider, and set up permissions for the IAM role to allow DynamoDB puts. You serve your mobile application out of Apache EC2 instances that are load-balanced and autoscaled. Your EC2 instances are configured with an IAM role that allows DynamoDB puts. Your server updates DynamoDB.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 28683,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are building a website that will retrieve and display highly sensitive information to users. The amount of traffic the site will receive is known and not expected to fluctuate. The site will leverage SSL to protect the communication between the clients and the web servers. Due to the nature of the site, you are very concerned about the security of your SSL private key. You want to ensure that the key cannot be accidentally or intentionally moved outside your environment. Additionally, while the data the site will display is stored on an encrypted EBS volume, you are also concerned that the web servers&rsquo; logs might contain sensitive information. Therefore, the logs must persist&nbsp;so that employees of your company can only decrypt them. Which of these architectures meets all of the requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Options A and D are both incorrect because the logs containing sensitive information are written to ephemeral volume. So there are chances that the data can get lost upon termination of the EC2 instance.</p>\r\n\r\n<p>Option B is incorrect because it does not use a secure way of managing the SSL private key for SSL transactions.</p>\r\n\r\n<p>Option C is CORRECT because it uses CloudHSM for performing the SSL transaction without requiring any additional way of storing or managing the SSL private key. This is the most secure way of ensuring that the key will not be moved outside of the AWS environment. Also, it uses the highly available and durable S3 service for storing the logs.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on AWS CloudHSM:</strong></p>\r\n\r\n<p>The AWS CloudHSM service helps you meet corporate, contractual, and regulatory compliance requirements for data security by using&nbsp;dedicated Hardware Security Module (HSM) appliances within the AWS cloud. With CloudHSM, you control the encryption keys and cryptographic operations performed by the HSM.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on AWS CloudHSM, please refer to the link.</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/cloudhsm/\" target=\"_blank\">https://aws.amazon.com/cloudhsm/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18800,
          "question_id": 28683,
          "answers": [
            {
              "choice": "<p>Use Elastic Load Balancing to distribute traffic to a set of web servers. To protect the SSL private key, upload the key to the load balancer, and configure the load balancer to offload the SSL traffic. Write your web server logs to an ephemeral volume that has been encrypted using a randomly generated AES key.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Load Balancing to distribute traffic to a set of web servers. Use TCP load balancing on the load balancer and configure your web servers to retrieve the private key from a private Amazon S3 bucket on boot. Write your web server logs to a private Amazon S3 bucket using Amazon S3 server-side encryption.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Load Balancing to distribute traffic to a set of web servers, configure the load balancer to perform TCP load balancing, use an AWS CloudHSM to perform the SSL transactions, and write your web server logs to a private Amazon S3 bucket using Amazon S3 server-side encryption.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Load Balancing to distribute traffic to a set of web servers. Configure the load balancer to perform TCP load balancing, use an AWS CloudHSM to perform the SSL transactions, and write your web server logs to an ephemeral volume that has been encrypted using a randomly generated AES key.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
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
      "question_id": 28684,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You are designing network connectivity for your thick client application. The application is designed for business travellers who must be able to connect to it from their hotel rooms, cafes, public Wi-Fi hotspots, and elsewhere on the Internet. But you do not want to publish the application on the Internet.</p>\r\n\r\n<p>Which network design meets the above requirements while minimizing deployment and operational costs? Choose the correct answer from the options below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect </strong>because AWS Direct Connect is not a cost-effective solution compared to using a VPN solution.</li>\r\n\t<li><strong>Option B is incorrect </strong>because it does not mention how the application would be accessible only to business travellers and not to the public.</li>\r\n\t<li><strong>Option C is incorrect </strong>because&nbsp;IPsec&nbsp;requires third-party client software, so it is&nbsp;more&nbsp;expensive to set up and maintain. And it would be better to move the instances to a private subnet.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because configuring the SSL VPN solution is cost-effective and allows access only to business travelers. Since the application servers are in a private subnet, the application is not accessible via the internet.\r\n\t<ul>\r\n\t\t<li>For more details, please refer to section &quot;AWS Client VPN Categories&quot; in the below link-\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"https://docs.aws.amazon.com/vpn/latest/clientvpn-user/client-vpn-user-what-is.html\" target=\"_blank\">https://docs.aws.amazon.com/vpn/latest/clientvpn-user/client-vpn-user-what-is.html</a></li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18801,
          "question_id": 28684,
          "answers": [
            {
              "choice": "<p>Implement AWS Direct Connect, and create a private interface to your VPC. Create a public subnet and place your application servers in it.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement Elastic Load Balancing with an SSL listener that terminates the back-end connection to the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an IPsec VPN connection, and provide the users with the configuration details. Create a public subnet in your VPC, and place your application servers in it.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an SSL VPN solution in a public subnet of your VPC, then install and configure SSL VPN client software on all user computers. Create a private subnet in your VPC and place your application servers in it.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 44762,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>There are two departments in a company. Both departments own&nbsp;several EC2 instances.</p>\r\n\r\n<p>Department A has a requirement to backup EBS volumes every 12 hours. So an administrator sets up a lifecycle policy in AWS DLM (Data Lifecycle Manager).</p>\r\n\r\n<p>Department B requires a similar lifecycle policy. However, they prefer to schedule it every 24 hours.&nbsp;The administrator has also noticed that two&nbsp;different-sized EBS volumes have been created but&nbsp;cannot tell which team owns them. What should Department B do to claim their EBS volume(s)&nbsp;and set up a correct&nbsp;lifecycle policy?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A</strong></p>\r\n\r\n<p>Multiple policies can be created to take snapshots for an EBS volume, as long as each policy targets a unique tag on the volume. In this case, the EBS volumes owned by two departments should have two tags:&nbsp;tag A is the target for policy A to create a snapshot every 12 hours for Department A, and tag B is the target for policy B to create a snapshot every 24 hours for Department B.&nbsp;Amazon DLM creates snapshots according to the schedules for both policies.</p>\r\n\r\n<p>Details refer to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html</a>.</p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because when an EBS volume has two tags, multiple policies can run simultaneously.</li>\r\n\t<li>Option B is incorrect because there is no schedule conflict for this scenario.</li>\r\n\t<li>Option C is incorrect because 12 hours schedule does not take priority over 24 hours, and&nbsp;both schedules can run in parallel.</li>\r\n\t<li>Option D is incorrect because the EBS volumes owned by two departments can add another tag and be included in the policy for Department B.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34773,
          "question_id": 44762,
          "answers": [
            {
              "choice": "<p>Each Department adds tags on its EBS volume(s). Set up lifecycle policies based on the tags. For EBS volumes owned by two departments, snapshots will be taken every 12 hours and every 24 hours.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Each Department adds tags on its EBS volume(s). Set up lifecycle policies based on the tags. For EBS volumes owned by two departments, snapshots will not be taken as there is a schedule conflict between the two policies. Other EBS volumes are not affected.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Each Department adds tags on its EBS volume(s). Set up a lifecycle policy based on the tag. For EBS volumes owned by two departments, snapshots will be taken every 12 hours since the 12-hour schedule takes priority.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a tag on the EBS volume(s)&nbsp;that Department B owns outright (not including the tag on any shared volumes). Set up a&nbsp;lifecycle policy based on the tag. For the EBS volumes owned by two departments, snapshots are taken every 12 hours due to the policy of Department A.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45085,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>As an AWS specialist, you are in charge of configuring consolidated billing in a multinational IT company. In the linked accounts, users have set up AWS resources using a tag called Department, which is used to differentiate resources. There are some other user-created tags such as Phase, CICD, Trial, etc.</p>\r\n\r\n<p>In the cost allocation report, you only want to filter it using the tag of Department, and other tags are excluded in the report. How should you implement this so that the cost report is properly set up?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer&nbsp;- A</strong></p>\r\n\r\n<p>User-Defined Cost Allocation Tags can be selected and activated in the Cost Allocation Tags.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/06/23/ckeditor_zmam_23_11.png\" style=\"height:250px; width:782px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is&nbsp;CORRECT&nbsp;because using this method&nbsp;only, the user-defined tag Department will appear in the cost allocation report.</li>\r\n\t<li>Option&nbsp;B is&nbsp;incorrect&nbsp;because it should be the Cost Allocation Tags&nbsp;rather than the Cost Explorer console. Moreover, by default, all user-defined tags are deactivated.</li>\r\n\t<li>Option C is&nbsp;incorrect&nbsp;because it should be the Cost Allocation Tags&nbsp;rather than the Cost Explorer console.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect&nbsp;because only a management&nbsp;account can activate or deactivate the user-defined tags. Besides, the tag does not appear on earlier reports before it is activated.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35092,
          "question_id": 45085,
          "answers": [
            {
              "choice": "<p>In the Billing and Management console of the management&nbsp;account, select Cost allocation tags and then select the Department tag in the User-Defined Cost Allocation Tags area and activate it. The tag starts appearing on the cost allocation report after it is applied but does not appear on earlier reports.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>In the Cost Explorer console of the management&nbsp;account, deactivate all the other tags except the Department tag in the User-Defined Cost Allocation Tags area. By default, all user-defined tags are activated.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the Cost Explorer console of the management&nbsp;account, select the Department tag in the User-Defined Cost Allocation Tags area and activate it. Make sure that other tags are inactive at the same time.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the Billing and Management console of the management&nbsp;account and member accounts, select Cost allocation tags and then select the Department tag in the User-Defined Cost Allocation Tags area and activate it. The tag starts appearing on the cost allocation report after it is applied and also appears on earlier reports after 1 hour.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28686,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>An organization has created multiple components of a single application. Currently, all the components are hosted on a single EC2 instance. Due to security reasons, the organization wants to implement 2 separate SSL certificates for the separate modules.</p>\n\n<p>How can the organization achieve this with a single instance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\n\n<p>It can be useful to assign multiple IP addresses to an instance in your VPC to do the following.</p>\n\n<p>(1) Host multiple websites on a single server by using multiple SSL certificates on a single server and associating each certificate with a specific IP address.</p>\n\n<p>(2) Operate network appliances, such as firewalls or load balancers, that have multiple IP addresses for each network interface.</p>\n\n<p>(3) Redirect internal traffic to a standby instance if your instance fails by reassigning the secondary IP address to the standby instance.</p>\n\n<p><strong>Option A is CORRECT</strong> because, as mentioned above, if you have multiple elastic network interfaces (ENIs) attached to the EC2 instance, each network IP can have a component running with a separate SSL certificate.</p>\n\n<p><strong>Option B is incorrect</strong> because having separate rules in the security group as well as NACL does not mean that the instance supports multiple SSLs.</p>\n\n<p><strong>Option C is incorrect</strong> because an EC2 instance cannot have multiple subnets.</p>\n\n<p><strong>Option D is incorrect </strong>because the NAT address is not related to supporting multiple SSLs.</p>\n\n<p>For more information on Multiple IP Addresses, please refer to the link below.</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84518,
          "question_id": 28686,
          "answers": [
            {
              "question_id": "28686",
              "choice": "<p>Create an EC2 instance that has multiple network interfaces with multiple IP addresses.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28686",
              "choice": "<p>Create an EC2 instance that has both an ACL and the security group attached to it and have separate rules for each IP address.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28686",
              "choice": "<p>Create an EC2 instance that has multiple subnets attached to it and each will have a separate IP address.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28686",
              "choice": "<p>Create an EC2 instance with a NAT address.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28688,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company produces customer commissioned one-of-a-kind skiing helmets combining high fashion with custom technical enhancements. Customers can show off their individuality on the ski slopes and have access to head-up-displays. GPS rear-view cams and any other technical innovation they wish to embed in the helmet. The current manufacturing process is data-rich and complex, including assessments to ensure that the custom electronics and materials used to assemble the helmets are the highest standards. Assessments are a mixture of human and automated assessments. You need to add a new set of assessments to model the electronics&#39; failure modes using GPUs with CUDA across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - B</p>\r\n\r\n<p>The main point to consider in this question is that the assessments include human interaction as well. In most such cases, always look for AWS Step Functions in the options.</p>\r\n\r\n<p>Option A is incorrect because this will be useful during the batch jobs, which deal with the automated assessments. For the human assessment, this will not be a useful option.</p>\r\n\r\n<p>Option B is CORRECT because (a) &nbsp;it enables assessment via human interaction, (b) uses Auto Scaled G2 instances that are efficient in automated assessments due to their GPU and low latency networking.</p>\r\n\r\n<p>Please refer the below link for AWS Step Functions</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html\">https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html</a></p>\r\n\r\n<p>Option C is incorrect because although SWF can be used for human tasks, C3 instances and SR-IOV will not provide the required GPU.</p>\r\n\r\n<p>Option D is incorrect because (a) this will be useful during the batch jobs, which deal with the automated assessments. This will not be a useful option for the human assessment, and (b) C3 instances and SR-IOV will not provide the required GPU.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18805,
          "question_id": 28688,
          "answers": [
            {
              "choice": "<p>Use AWS Data Pipeline to manage the movement of data &amp; meta-data and assessments. Use an Auto Scaling&nbsp;group of G2 instances in a placement group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions&nbsp;to manage assessments, movement of data, &amp; meta-data. Use an Auto Scaling group of G2 instances in a placement group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Simple Workflow (SWF) to manage&nbsp;assessments movement of data &amp; meta-data. Use an Auto Scaling group of C3 instances with SR-IOV (Single Root I/O Virtualization).</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS data Pipeline to manage the movement of data &amp; meta-data and assessments. Use an Auto Scaling group of C3 with SR-IOV (Single Root I/O virtualization).</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28689,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A web company is looking to implement an external payment service into their highly available application deployed in a VPC. Their application EC2 instances are behind a public-facing ELB with NAT instances and Public IP s in place. Auto Scaling is used to add additional instances as traffic increases under normal load. The application runs 2 instances in the Auto Scaling group, but it can scale 3x in size at the peak. The application instances need to communicate with the payment service over the Internet, which requires whitelisting all public IP addresses to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because (a) the requests originated from the instances in the subnet would be routed through the NAT, so they would have the NAT&rsquo;s IP address (which is whitelisted), and (b) two NAT instances would provide high availability.</li>\r\n\t<li>Option B is incorrect because (a) Internet Gateway (IGW) can only route the traffic.&nbsp;It cannot whitelist any particular IP and payment requests, and (b) EC2 instances with public IP addresses in a public subnet are routed through the gateway. Still, they will keep their own IP address.&nbsp;So they will not get whitelisted.</li>\r\n\t<li>Option C is incorrect because the outbound traffic cannot be routed through an ELB.</li>\r\n\t<li>Option D is incorrect because the ASG will have 6 servers during the peak load, and the payment service only allows 4 to be whitelisted.&nbsp;So, it will exceed the allowed 4 IP addresses.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18806,
          "question_id": 28689,
          "answers": [
            {
              "choice": "<p>Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instance&#39;s public IP address to the payment validation whitelist API.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44764,
      "topic_id": 364,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are an AWS Cloud Architect in a big company. Your company is under a planning phase for a fresh project. The project needs to be developed and deployed completely in AWS and various deployment services are now considered. Your team members are debating on which service should be used between OpsWorks and CloudFormation. For the below options, which ones should you consider helping to choose the most appropriate service? Select 3.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A, C, D</strong></p>\r\n\r\n<p>The question asks for the items that help with choosing the service of OpsWorks or CloudFormation. One major feature of OpsWorks is that it has used Chef. For OpsWorks, it is very common that a custom recipe is needed. That might be a simple task if the team has a Chef expert.&nbsp;But if there is not, there is a pretty steep learning curve. No matter in which way, the project&rsquo;s schedule should be always considered.</p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because the experience of Chef and Recipes is a key factor to choose OpsWorks or not.</li>\r\n\t<li>Option B is incorrect because the OpsWorks ( except Opsworks-chef automate ) and CloudFormation templates and stacks themselves do not bring cost. You only need to pay for the resources that are set up in stacks.</li>\r\n\t<li>Option C is CORRECT because the project&rsquo;s schedule is also a key factor to consider.</li>\r\n\t<li>Option D is CORRECT because CloudFormation is better at a lower level scripting if the team prefers to have a deeper infrastructure control with code.</li>\r\n\t<li>Option E&nbsp;is incorrect: OpsWorks supports spot EC2 instances too. Refer to&nbsp; <a href=\"https://aws.amazon.com/blogs/devops/registering-spot-instances-with-aws-opsworks-stacks/\" target=\"_blank\">https://aws.amazon.com/blogs/devops/registering-spot-instances-with-aws-opsworks-stacks/</a>.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34775,
          "question_id": 44764,
          "answers": [
            {
              "choice": "<p>The experiences of Chef and Recipe. If the team lacks Chef knowledge, OpsWorks may not be considered as the learning curve would be steep.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The budget of the whole project. Except for the resources such as EC2, the OpsWorks ( except Opsworks-chef automate )&nbsp;and CloudFormation templates and stacks are charged differently.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The schedule of the project. If the timeline is not under pressure, the team can still choose to learn new skills such as Chef for OpsWorks or JSON scripting for CloudFormation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Understand if the team prefers to have deeper control of infrastructure setup. If yes, CloudFormation may be a better choice. Otherwise, OpsWorks can take care of some basic configurations automatically.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>If spot EC2 instances are required, only CloudFormation should be used as OpsWorks does not support spot instances.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28691,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO strongly agrees to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to deploy the application, post its AMI creation, and help to improve Business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size, and you have a 20Mbps Internet connection. Which of the following solutions is the most suitable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because (a) with AMIs, the newly created EC2 instances will be ready with the pre-installed application.&nbsp;Thus, reducing the RTO,&nbsp;(b) with CloudFormation, the entire stack can be automatically provisioned, and (c) since there are no additional services used, the cost will stay low.</li>\r\n\t<li>Option B is incorrect because although this could work, (a) deploying EC2 instances for this scenario will be expensive, and (b) in case of disaster, the recovery will potentially be slower since the new EC2 need to be manually updated with the application software and patches, especially since it does not use the AMIs.</li>\r\n\t<li>Option C is incorrect because it has a low-performance issue. (a) Backing up a local DB of 200GB on a 20Mbps connection every hour will be very slow, and (b) even with the incremental backup, recovering from the incremental backup take time and might not satisfy the given RTO.</li>\r\n\t<li>Option D is incorrect because (a) the EC2 instance is a single point of failure, which needs to be made highly available via Auto Scaling, and (b) it can only handle the average load of the application.&nbsp;So, in case of peak load, it may fail, and (c) AWS Direct Connection will be an expensive solution compared to the setup of option A.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18808,
          "question_id": 28691,
          "answers": [
            {
              "choice": "<p>Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template that includes your AMI and the required Auto Scaling group, and ELB resources to support deploying the application across Multiple&nbsp;Availability Zones. Asynchronously replicate the transactions from your on-premises database to a database instance in AWS across a secure VPN connection.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy your application on EC2 instances within an Auto Scaling Group across multiple Availability Zones. Asynchronously replicate the transactions from your on-premises database to a database instance in AWS across a secure VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to back up the local database every 1 hour and encrypt and copy the resulting file to an S3 bucket using multi-part upload.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install your application on a compute-optimized EC2 instance capable of supporting the application&rsquo;s average load. Synchronously replicate the transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28692,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>An organization is planning to set up a management network on the AWS VPC. The organization is trying to secure the web server on a single EC2 instance such that it allows the internet traffic and back-end management traffic. The organization wants to ensure that the back-end management network interface can only receive SSH traffic from a selected IP range. At the same time, the Internet-facing web server will have an IP address that can receive traffic from all the internet IPs.</p>\r\n\r\n<p>How can the organization achieve this by running the web server on a single instance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - B</p>\r\n\r\n<p>An Elastic Network Interface (ENI) is a virtual network interface that you can attach to an instance in a VPC. Network interfaces are available only for instances running in a VPC.</p>\r\n\r\n<p>A network interface can include the following attributes.</p>\r\n\r\n<ul>\r\n\t<li>A primary private IPv4 address</li>\r\n\t<li>One or more secondary private IPv4 addresses</li>\r\n\t<li>One Elastic IP address (IPv4) per private IPv4 address</li>\r\n\t<li>One public IPv4 address</li>\r\n\t<li>One or more IPv6 addresses</li>\r\n\t<li>One or more security groups</li>\r\n\t<li>A MAC address</li>\r\n\t<li>A source/destination check flag</li>\r\n\t<li>A description</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>See an example below how the route table can be configured to allow the IP based access via multiple ENIs.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_ymzouq.png\" style=\"height:576px; width:600px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on ENI, please refer to the below link.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18809,
          "question_id": 28692,
          "answers": [
            {
              "choice": "<p>It is not possible to have 2 IP addresses for a single instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The organization should create 2 network interfaces, one for the internet traffic and the other for the backend traffic.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The organization should create 2 EC2 instances as this is not possible with one EC2 instance.</p>",
              "correct": false,
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
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28693,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>A web design company currently runs several FTP servers for their 20 customers to upload and download large graphic files. They want&nbsp;to move this system to AWS. They however want to continue using Microsoft AD as their identity provider. They also want to maintain customer privacy and keep the costs incurred on AWS side to a minimum.</p>\n\n<p>Which of the following options is the most appropriate?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer - A</strong></p>\n\n<p><strong>Option A is correct </strong>because (a) having the S3 quota of maximum 1000 buckets, this is a good enough condition to avoid mapping a sort of one-to-one relationship with customers, hence, it is correct to architect based on only one bucket, and (b) AWS Transfer for SFTP is a service that allows to create a server and associate it with one or more buckets while supporting Microsoft AD as their identity provider.</p>\n\n<p><strong>Option B is incorrect</strong> because it does not make sense. Anyway, creating one bucket per user is not a scalable architecture e.g. they have more than 1000 customers. One S3 bucket is enough for this scenario.</p>\n\n<p><strong>Option C is incorrect</strong> because creating an Auto Scaling group of FTP servers is a costly solution compared to creating buckets on S3 and appropriate IAM policies.</p>\n\n<p><strong>Option D is incorrect </strong>because (a) creating one bucket per user is not a scalable architecture. Currently, the number of customers is 20.&nbsp;But in the future, the number can grow. If it does, it will put limits on the number of buckets, and (b) you configure buckets to be Requester Pays when you want to share the data but not incur charges associated with others accessing the data. This will keep the cost down for the company but will increase the cost for the customer who will access the buckets.</p>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/aws-transfer-family/faqs/\">aws-transfer-family-faqs</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html\">AmazonS3-BucketRestrictions</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 95805,
          "question_id": 28693,
          "answers": [
            {
              "question_id": "28693",
              "choice": "<p>Ask their customers to use the S3 service instead of an FTP client. Create a single S3 bucket and&nbsp;a server with AWS Transfer for SFTP.&nbsp; Associate the bucket with the server.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28693",
              "choice": "<p>Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28693",
              "choice": "<p>Create an Auto Scaling Group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of FTP users from S3 as part of the user data startup script on each Instance.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28693",
              "choice": "<p>Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a bucket policy that permits access only to that one customer.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 45122,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>Your company has a logging microservice used to generate logs when users have entered certain commands in another application. This logging service is implemented via an SQS standard queue that an EC2 instance is listening to. However, you have found that on some occasions, the order of the logs is not maintained. As a result, it becomes harder to use this service to trace users&rsquo; activities. How should you simply fix this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; B</strong></p>\n\n<p>The FIFO queue improves upon and complements the standard queue. The most important features of this queue type are FIFO (First-In-First-Out) delivery and exactly-once processing. The FIFO queue is mainly used to process the messages in the queue that needs to be guaranteed without any items being out of order or duplicated.</p>\n\n<ul>\n\t<li><strong>Option A is incorrect </strong>because you can&#39;t convert an existing standard queue into a FIFO queue. This is clarified in&nbsp;<a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html\">FIFO-queues</a>.</li>\n\t<li><strong>Option B is CORRECT</strong> because in this context the FIFO queue can guarantee the sequence for users&#39; operations so that the issue of the logging system is fixed. Note that according to the question description the DelaySeconds parameter is assumed as per-queue delay, there is a message group ID per message, logs message bodies must be considered by SQS as different e.g. timestamp, application, command, user. Otherwise, scenarios when additional logic applies to uniqueness or duplicates should be dealt with by the producer providing a message deduplication ID value.</li>\n\t<li><strong>Option C is incorrect</strong> because this is not a straightforward method by changing the whole microservice to SWF. Option B is much simpler than this option.</li>\n\t<li><strong>Option D is incorrect.</strong>&nbsp;Refer to the explanations in Option B.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-message-order.html\">FIFO-queues-message-order</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html\">sqs-best-practices</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 85080,
          "question_id": 45122,
          "answers": [
            {
              "question_id": "45122",
              "choice": "<p>Convert the existing standard queue into a FIFO queue. Add a deduplication ID for the messages that are sent to the queue.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45122",
              "choice": "<p>Delete the existing standard queue and recreate it as a FIFO queue. As a result, the order for the messages to be received is ensured.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45122",
              "choice": "<p>Migrate the whole microservice application to SWF so that the operation sequence is guaranteed.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45122",
              "choice": "<p>The wrong order of timestamps is a limitation of SQS, which does not have a fix.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28694,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>In Amazon Cognito, your mobile app authenticates with the Identity Provider (IdP) using the provider&rsquo;s SDK. Once the end-user is authenticated with the IdP, the OAuth or OpenID Connect token returned from the IdP is passed by your app to Amazon Cognito. In addition to the access token, which of the following is returned for the user to provide a set of temporary, limited-privilege AWS credentials?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>If you&#39;re allowing unauthenticated users, you can retrieve a unique Amazon Cognito identifier (identity ID) for your end-user immediately. If you&#39;re authenticating users, you can retrieve the identity ID after setting the login tokens in the credentials provider.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_oz809g.png\" style=\"height:393px; width:700px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Cognito ID, please refer to the below link.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html\" target=\"_blank\">http://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18811,
          "question_id": 28694,
          "answers": [
            {
              "choice": "<p>Cognito SDK</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito Key Pair</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito Identity ID</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Cognito API</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28695,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have been asked to design network connectivity between your existing data centers and AWS. Your application&#39;s EC2 instances must be able to connect to existing backend resources located in your data center. Network traffic between AWS and your data centers will start small, but ramp up to 10s of GB per second over the course of several months. The success of your application is dependent upon getting to market quickly. Which of the following design options will allow you to meet your objectives?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - C</p>\r\n\r\n<p>The most important considerations in this scenario are: (1) the network traffic would be initially small, and will increase in the future, and (2) the application should be up quickly.&nbsp;So time is crucial. One thing should be noted that it takes time initially to set up the AWS Direct Connect (See the link below for the latest information).</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/getting_started.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/getting_started.html</a></p>\r\n\r\n<p>Option A is incorrect because setting up Direct Connect will take time.&nbsp;So, the backend servers will not be connected&nbsp;quickly.</p>\r\n\r\n<p>Option B is incorrect because provisioning VPN is not a long-term solution since the traffic would increase to over 10Gbps.</p>\r\n\r\n<p>Option C is CORRECT because (a) it provides a quick connection between the on-premise data center and AWS via VPN, and (b) it also initiates the provision of a Direct Connect solution to tackle the requirement of higher bandwidth (for 10Gbps network) for later.</p>\r\n\r\n<p>Option D is incorrect because setting up Direct Connect will take time, and the application will not be up within time as it is time-critical. It needs to establish a VPN connection firstly.</p>\r\n\r\n<p>For more information on VPN and Direct Connect, please visit the link below.</p>\r\n\r\n<p><a href=\"https://datapath.io/resources/blog/aws-direct-connect-vs-vpn-vs-direct-connect-gateway/\" target=\"_blank\">https://datapath.io/resources/blog/aws-direct-connect-vs-vpn-vs-direct-connect-gateway/</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18812,
          "question_id": 28695,
          "answers": [
            {
              "choice": "<p>Quickly create an internal ELB for your backend applications, submit a Direct Connect request to provision a 1 Gbps cross-connect between your data center and VPC, then increase the number or size of your Direct Connect connections as needed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Allocate EIPs and an Internet Gateway for your VPC instances to use for quick, temporary access to your backend applications, then provision a VPN connection between a VPC and existing on-premises equipment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a VPN connection between a VPC and existing on-premises equipment, submit a Direct Connect partner request to provision cross-connects between your data center and the Direct Connect location, then cut over from the VPN connection one or more Direct Connect connections as needed.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Quickly submit a Direct Connect request to provision a 1 Gbps cross-connect between your data center and VPC, then increase the number or size of your Direct Connect connections as needed.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 45468,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your company has developed an operations system for an e-commerce organization having multiple offices across the country. The operations team pushes the new changes to the production frequently. The product uses AWS RDS Multi-AZ MySQL with read-replicas. The web application is running on EC2 with ELB in front. The last feature update created an issue with the database, and part of the system is down due to that. The development team has rolled out a couple of more patches to fix the issue. But some users are still facing the outages. The management has finally decided to roll back the update to the last known stable version until all the issues are resolved in the QA environment. Which of the following options is the most suitable to perform the rollback cost-efficiently?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT</strong> because point-in-time recovery helps to recover the database to a certain point in time. The EC2 servers can be recovered with the previous AMI.</li>\n\t<li><strong>Option B is INCORRECT</strong> because this method is not cost-efficient as a new set of resources need to be configured.</li>\n\t<li><strong>Option C is INCORRECT</strong> because it does not mention how to roll back the application.</li>\n\t<li><strong>Option D is INCORRECT</strong> because the database problem is still there, and the traffic still goes to the existing problematic database.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35475,
          "question_id": 45468,
          "answers": [
            {
              "choice": "<p>Use the DB snapshot with Point-in-time recovery to rollback the database, and rollback the EC2 servers with a previously working AMI.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a totally new environment with the last known stable build. Use the Route53 Weighted policy to redirect the traffic to the new environment. Delete the old environment.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the DB snapshot with Point-in-time recovery and restore on top of the original database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CloudFormation template with RollingUpdate policy to create a new frontend and change the Route53 record to redirect traffic to the new frontend with the existing database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28697,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security keys are allowed to be stored on the EC2 instance.</p>\r\n\r\n<p>Choose 2&nbsp;options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; A&nbsp;and E.</strong></p>\r\n\r\n<p>To enable an AWS service to access another one, the most important requirement is to create an appropriate IAM Role and attach&nbsp;that role to the service that needs access.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because it creates the appropriate IAM Role for accessing the DynamoDB table.</li>\r\n\t<li>Option B is INCORRECT because this is not a best practice, and we need to use IAM Role.</li>\r\n\t<li>Options C and D are incorrect because IAM Role is preferred and more secure way than IAM User.</li>\r\n\t<li>Option E is CORRECT because it launches the EC2 instance after attaching the required role.</li>\r\n</ul>\r\n\r\n<p>See the steps below.</p>\r\n\r\n<p><strong>1. Create the IAM Role with appropriate permissions</strong></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_pqlkyr.png\" style=\"height:557px; width:1027px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_icdqbu.png\" style=\"height:557px; width:1030px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_fscxa7.png\" style=\"height:557px; width:1003px\" /></p>\r\n\r\n<p><strong>2. Launch an EC2 instance with this role</strong></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_kfgzsw.png\" style=\"height:510px; width:1016px\" /></p>\r\n\r\n<p><strong>3. Attach the role to a running EC2</strong></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_jqxsnr.png\" style=\"height:430px; width:716px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_znjt6u.png\" style=\"height:284px; width:914px\" /></p>\r\n\r\n<p>Reference Link:&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html</a></li>\r\n\t<li><a href=\"https://aws.amazon.com/about-aws/whats-new/2017/02/new-attach-an-iam-role-to-your-existing-amazon-ec2-instance/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2017/02/new-attach-an-iam-role-to-your-existing-amazon-ec2-instance/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18814,
          "question_id": 28697,
          "answers": [
            {
              "choice": "<p>Create an IAM Role that allows write access to the DynamoDB table.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Encode the IAM User credentials into the application.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM User that allows write access to the DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an IAM User to a running EC2 instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an EC2 Instance with the IAM Role included in the launch configuration.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28698,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your customer wishes to deploy an enterprise application on AWS, consisting of several web servers, several application servers, and a small (50GB) Oracle database. The information is stored both in the database and the file systems of the various servers. The backup system must support database recovery, whole server, and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database.</p>\r\n\r\n<p>Which backup architecture will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because (a) it uses automated daily backups&nbsp;from which the recovery can be made quickly, (b) the file-level backup to S3 will ensure that the recovery can be made at the individual file level - which satisfies the requirements.</li>\r\n\t<li><strong>Option B is incorrect </strong>because Multi-AZ deployment is for High availability, not for data backup.</li>\r\n\t<li><strong>Option C is incorrect</strong> because Glacier is an archival solution and most certainly will not meet the criteria of RTO of 2 hours.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because just backing up the EC2 instances alone would not suffice. Here the RDS database would also need to be backed up to S3.</li>\r\n</ul>\r\n\r\n<p>For more information on this topic, please visit the links below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/backup/\">https://aws.amazon.com/rds/details/backup/</a></li>\r\n\t<li><a href=\"https://d0.awsstatic.com/whitepapers/Backup_and_Recovery_Approaches_Using_AWS.pdf\">https://d0.awsstatic.com/whitepapers/Backup_and_Recovery_Approaches_Using_AWS.pdf</a></li>\r\n\t<li><a href=\"https://blogs.oracle.com/pshuff/amazon-rds\" target=\"_blank\">https://blogs.oracle.com/pshuff/amazon-rds</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84454,
          "question_id": 28698,
          "answers": [
            {
              "question_id": "28698",
              "choice": "<p>Backup RDS using automated daily DB backups. Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file-level restore.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28698",
              "choice": "<p>Backup RDS using a Multi-AZ Deployment. Backup the EC2 instances using AMIs and supplement by copying file system data to S3 to provide file-level restore.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28698",
              "choice": "<p>Backup RDS using automated daily DB backups. Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file-level restore.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28698",
              "choice": "<p>Backup the EC2 instances using AMIs and supplement with EBS snapshots for individual volume restore.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44765,
      "topic_id": 364,
      "course_id": 0,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>API gateway and Lambda&nbsp;integration&nbsp;have been chosen to implement an application by a software engineer. The application is a data analysis tool that returns some statistical results when the HTTP endpoint is called. The Lambda needs to communicate with some back-end data services such as Keen.io. However, there are chances that error happens, such as wrong data requested, bad communications, etc. The Lambda is written using Java. Two exceptions may&nbsp;return&nbsp;which are BadRequestException and InternalErrorException. What should the software engineer do to map these two exceptions in the API gateway with proper HTTP return codes? (Select TWO)<br />\nFor example, BadRequestException and InternalErrorException are mapped to HTTP return codes 400 and 500 respectively.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; B, D </strong></p>\n\n<p>When an API gateway is established, there are four parts.</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-7.jpg\" style=\"height:427px; width:650px\" /></p>\n\n<p>Method Request/Method Response&nbsp;mainly deals with API gateways. They are the API&#39;s interface with the API&#39;s frontend (a client), whereas Integration Request and Integration Response are the API&#39;s interface with the backend. In this case, the backend is a Lambda.</p>\n\n<p>For the mapping of exceptions that come from Lambda, Integration Response is the correct place to configure. However, the corresponding error code (400) on the method response should be created first. Otherwise, API Gateway throws an invalid configuration error response at runtime. Below is an example of mapping BadRequestException to HTTP return code 400:</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-7.1.jpg\" style=\"height:351px; width:650px\" /></p>\n\n<ul>\n\t<li><strong>Option A is incorrect</strong>: Because HTTP error codes are defined as firstly in Method Response instead of Integration Response.</li>\n\t<li><strong>Option B is CORRECT</strong>: &nbsp; Because HTTP error codes are defined as firstly in Method Response instead of Integration Response. (Same reason as A).</li>\n\t<li><strong>Option C is incorrect</strong>: Because Integration Response in API gateway should be used. Refer to <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html</a> on &ldquo;how to Handle Lambda Errors in API Gateway&rdquo;.</li>\n\t<li><strong>Option D is CORRECT</strong>: Because BadRequest or InternalError should be mapped to 400 and 500 in Integration Response settings.</li>\n\t<li><strong>Option E is incorrect</strong>: Because Method Response is the interface with the frontend. It does not deal with how to map the response from Lambda/backend.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html\">https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84389,
          "question_id": 44765,
          "answers": [
            {
              "question_id": "44765",
              "choice": "<p>Add the corresponding error codes (400 and 500) on the Integration Response in the API gateway.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44765",
              "choice": "<p>Add the corresponding error codes (400 and 500) on the Method Response in the API gateway.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44765",
              "choice": "<p>Put the mapping logic into Lambda itself so that when an exception happens, error codes are returned at the same time in a JSON body.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44765",
              "choice": "<p>Add Integration Responses where regular expression patterns are set, such as BadRequest or InternalError. Associate them with HTTP status codes.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44765",
              "choice": "<p>Add Method Responses where regular expression patterns are set, such as BadRequest or InternalError. Associate them with HTTP status codes 400 and 500.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28700,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this?</p>\r\n\r\n<p>Choose 2 options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B and E.</p>\r\n\r\n<p>Option A is incorrect as SNS would be a better choice for sending real-time notifications compared to SES.</p>\r\n\r\n<p>Option B is CORRECT because CloudWatch is used for monitoring the metrics pertaining to the AWS resources.</p>\r\n\r\n<p>Option C is incorrect because SQS can neither monitor any metrics nor send out any real-time notifications.</p>\r\n\r\n<p>Option D is incorrect because Route 53 cannot monitor any metrics.</p>\r\n\r\n<p>Option E is CORRECT because SNS is used for sending the real-time notifications based on the thresholds set in CloudWatch.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on CloudWatch metrics, please refer to the link-</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18817,
          "question_id": 28700,
          "answers": [
            {
              "choice": "<p>Amazon Simple Email Service</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon CloudWatch</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Simple Queue Service</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Route 53</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Simple Notification Service</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44766,
      "topic_id": 364,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>John is a software contractor and is working on a web application. Since the budget is limited and the schedule is tight, he decides to implement it using API gateway and Lambda so that he does not need to consider the server management, scalability, etc. The customer has raised concerns that the APIs should be kept secure and there should be mechanisms to control the access to API endpoints. Which below method can be used to help secure the API?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; E</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Multiple mechanisms can be used to control access to the API in the API gateway. And several methods can be used together to implement a very granular and secure application. <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html\" target=\"_blank\">https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html</a> is an introduction to the methods.</p>\r\n\r\n<p>The below mechanisms can be chosen.</p>\r\n\r\n<ul>\r\n\t<li>Resource policies let you create resource-based policies to allow or deny access to your APIs and methods from the specified source IP addresses or VPC endpoints. It can be configured in the API Gateway console:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.jpg\" style=\"height:222px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Standard AWS IAM roles and policies offer flexible and robust access controls that can be applied to an entire API or individual methods.</li>\r\n</ul>\r\n\r\n<p>The below is an IAM policy example of calling the Lambda function:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.1.jpg\" style=\"height:270px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Lambda authorizers are Lambda functions that control access to REST API methods using bearer token authentication and information described by headers, paths, query strings, stage variables, or context variables request parameters.</li>\r\n</ul>\r\n\r\n<p>In the API Gateway console, lambda authorizers can be created in the below place.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-8.2.jpg\" style=\"height:385px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Amazon Cognito user pools let you create customizable authentication and authorization solutions for your REST APIs.</li>\r\n</ul>\r\n\r\n<p>As a result, option E is correct.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34777,
          "question_id": 44766,
          "answers": [
            {
              "choice": "<p>Attach a resource policy to the API Gateway API, which controls access to the API Gateway resources. Access can be controlled by IAM condition elements, including conditions on AWS account, source VPC, etc.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use IAM permissions to control access to the API Gateway component. For example, in order to call a deployed API, the API caller must be granted permission to perform required IAM actions supported by the API execution component of API Gateway.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a Lambda function as the authorizer. When a client calls the API, the API Gateway either supplies the authorization token that is extracted from a specified request header for the token-based authorizer or it passes in the incoming request parameters as the input to the request parameters-based authorizer Lambda function.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Cognito user pool to control who can access the API in Amazon API Gateway. You need to use the Amazon Cognito console, CLI/SDK, or API to create a user pool. Then, in the API Gateway, create an API Gateway authorizer with the chosen user pool.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All the above options are correct.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28702,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You have multiple Amazon EC2 instances running in various clusters within the same region. How will you ensure that the EC2 instances will communicate&nbsp;without any bandwidth restrictions and also perform with the highest network performance, low latency, and low jitter? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A, B, and&nbsp;D</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because&nbsp;Cluster placement groups&nbsp;are recommended for applications that benefit from low network latency, high network throughput, or both.&nbsp;The majority of the network traffic is between the instances in the&nbsp;<strong>group</strong>.</li>\r\n\t<li><strong>Option B is CORRECT </strong>because Enhanced networking uses single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities on supported instance types.</li>\r\n\t<li><strong>Option C is incorrect</strong> because it is recommended to use HVM AMIs for better performance than PV AMIs.</li>\r\n\t<li><strong>Option D is CORRECT</strong> because HVM AMIs are presented with a fully virtualized set of hardware and boot by executing the master boot record of the root block device of your image. This virtualization type provides the ability to run an operating system directly on top of a virtual machine without any modification as if it were run on bare-metal hardware. The Amazon EC2 host system emulates some or all of the underlying hardware presented to the guest. HVM guests can take advantage of hardware extensions that provide fast access to the underlying hardware on the host system.</li>\r\n\t<li><strong>Option E&nbsp;is incorrect </strong>because if we enable a VPC Endpoint connection from a VPC EC2 instance to other AWS services, then the users experience slowness.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Linux Amazon Machine Images use one of two types of virtualization: paravirtual (PV) or hardware virtual machine (HVM). The main difference between PV and HVM AMIs is the way in which they boot and whether they can take advantage of special hardware extensions (CPU, network, and storage) for better performance. We recommend that you use current generation instance types and HVM AMIs when you launch your instances for the best performance.&nbsp;</p>\r\n\r\n<p>For more information on Enhanced Networking, please visit the URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html</a></li>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 93032,
          "question_id": 28702,
          "answers": [
            {
              "question_id": "28702",
              "choice": "<p>Cluster placement group</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28702",
              "choice": "<p>Enhanced networking</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28702",
              "choice": "<p>Amazon PV AMI</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28702",
              "choice": "<p>Amazon HVM AMI</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28702",
              "choice": "<p>Amazon VPC Endpoints</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28703,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have a video transcoding application running on Amazon EC2. Each instance polls a queue to find out which video should be transcoded and then runs a transcoding process. If this process is interrupted, the videos will be transcoded by another instance based on the queuing system. You have a large backlog of videos that need to be transcoded and reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost-efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>Since this is like a batch processing job, the best type of instance to use is a Spot instance. Since these jobs don&rsquo;t last for the entire duration of the year, they can bid upon and be allocated and deallocated as requested.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Options A and C are incorrect because the application needs the instances only until the backlog is reduced. With reserved/dedicated instances, there is a possibility that the instances might get idle after the backlog reduction. So, this is a costly solution.</p>\r\n\r\n<p>Option B is CORRECT because (i) they are less expensive than reserved instances, (ii) interruption in the transcoding process is affordable since another instance will transcode the videos based on the queuing system.</p>\r\n\r\n<p>Option D is incorrect because (i) on-demand instances are most expensive, (ii) you can afford an interruption in the transcoding process, and (iii) on-demand instances would have been suited if there was no alternate way of transcoding the videos and interruption was not affordable.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Spot Instances, please visit the URL &ndash;</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/ec2/spot/\" target=\"_blank\">https://aws.amazon.com/ec2/spot/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18820,
          "question_id": 28703,
          "answers": [
            {
              "choice": "<p>Reserved instances</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Spot instances</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Dedicated instances</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>On-demand instances</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
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
      "question_id": 28704,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You deployed your company website using Elastic Beanstalk, and you enabled log file rotation to S3. An Elastic MapReduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved the website&#39;s overall performance using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by order of magnitude. How do you fix your usage dashboard?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is CORRECT because the website is now only accessible via CloudFront. So, for the dashboard to have the up-to-date information via EMR, the logs from the CloudFront must be stored on S3 (to be analyzed by the EMR). Once these logs are delivered to S3, the dashboard should show the correct traffic information.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Option B is incorrect </strong>because the CloudTrail log will not show the required information. It will only show the insights of the AWS services and APIs accessed by the application.</p>\r\n\r\n<p><strong>Option C is incorrect</strong> because the dashboard must be showing the information about the traffic pertaining to the website. CloudWatch will show the information based on the metrics related to AWS resources (not the website).</p>\r\n\r\n<p><strong>Option D is incorrect</strong> because the configuration of the Elastic Beanstalk environment is independent of the CloudFront setting. In order to have the information related to the dynamic content, the logs created by CloudFront must be delivered to S3. &ldquo;Rebuild Environment&rdquo; of Elastic Beanstalk will not be of any use.</p>\r\n\r\n<p><strong>Option E is incorrect </strong>because &ldquo;Restart App Server(s)&rdquo; causes the environment to restart the application container server running on each Amazon EC2 instance. It is totally unrelated to the information that is shown by the dashboard.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18821,
          "question_id": 28704,
          "answers": [
            {
              "choice": "<p>Allow CloudFront logs to be delivered to S3 and use them as input of the Elastic MapReduce job.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on CloudTrail and use trail log tiles on S3 as input of the Elastic MapReduce job.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change your log collection process to use CloudWatch ELB metrics as input of the Elastic MapReduce job.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Beanstalk &quot;Rebuild Environment&quot; option to update log delivery to the Elastic MapReduce job.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Beanstalk &#39;Restart App Server(s)&quot; option to update log delivery to the Elastic MapReduce job.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28705,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You decide to configure a bucket for static website hosting. As per the AWS documentation, you create a bucket named &#39;mybucket.com&#39;. You also enable website hosting with an index document of &#39;index.html&#39; and leave the error document as blank. You then upload a file named &#39;index.html&#39; to the bucket. After clicking on the endpoint of mybucket.com.s3-website-us-east-1.amazonaws.com you receive 403 Forbidden error. You then change the CORS configuration on the bucket so that everyone has access.&nbsp;However, you still receive the 403 Forbidden error. What additional step do you need to do so that the endpoint is accessible to everyone?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>You are receiving the 403 Forbidden Error because you do not have the permissions to view the index.html file.</p>\r\n\r\n<p>Option A is incorrect because this is an S3 hosted website. Route 53 does not come into the picture.</p>\r\n\r\n<p>Option B is incorrect because it is a static website hosted on S3. This issue is not related to DNS resolution.</p>\r\n\r\n<p>Option C is incorrect. Even if you add the error document, you will get the error because you need to set the proper permissions.</p>\r\n\r\n<p>Option D is CORRECT because it sets the appropriate permissions so that the user has access to the index.html.</p>\r\n\r\n<p>For more information on web site hosting in S3, please visit the below link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>The question is referring to Configuring a bucket for&nbsp;Website Hosting. In this scenario, Route53 is not required.&nbsp;However, extra configuration in S3 is needed other than making it public.<br />\r\n<br />\r\nFor more information, please refer to:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/IndexDocumentSupport.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonS3/latest/dev/IndexDocumentSupport.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18822,
          "question_id": 28705,
          "answers": [
            {
              "choice": "<p>Register mybucket.com on Route53</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Wait for the DNS change to propagate</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You need to add a name for the error document, because it is a required field</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the permissions on the index.html file also, so that everyone has access</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
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
      "question_id": 45469,
      "topic_id": 365,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company is running a high-volume online e-commerce site. The main database is deployed in RDS MySQL configured with Multi-AZ and few read replicas. The main website runs on EC2 instances behind a load balancer, and the setup also includes a cluster of Redis to offload repeated queries from the main database. The backup window is set in the early morning when the traffic is usually very low. Due to the holiday season, the site is receiving a huge amount of traffic during the daytime. The development team has recently finished a critical feature and delivered it to the QA team for the final testing. The management has decided to perform the full-scale DR exercise around midnight before rolling out new features. The resources in one Availability Zone will be taken down during the test. Select the option which would restore the RDS database to the latest point.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT</strong> because restoring from the last automated snapshot will not be the latest data. As per the timeline mentioned,&nbsp;the backup window is around early morning, and the exercise time is around midnight.&nbsp;So the automated snapshot will be nearly a day old.</li>\r\n\t<li><strong>Option B is INCORRECT </strong>because it does not restore the database to the latest point.</li>\r\n\t<li><strong>Option C is CORRECT.</strong> Because as Multi-AZ is enabled, when the primary DB instance has an issue, it will automatically switch to the standby replica in another AZ.</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because there is no Copy Database option available in the RDS.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35476,
          "question_id": 45469,
          "answers": [
            {
              "choice": "<p>Restore the database from the last automated snapshot onto the new database.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Restore the database by promoting the read-replica and modify the application to use the new DB instance as the database master.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon RDS automatically switches to the standby replica in another Availability Zone.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the RDS Copy Database option to create a new database from an existing database.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28708,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. You need to restore the Storage Gateway data in AWS. How would you implement this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answers - D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because&nbsp;all gateway-cached volume data and snapshot data are stored in Amazon S3 encrypted at rest using server-side encryption (SSE) and&nbsp;cannot be visible or accessed with S3 API or any other tools. (Ref: https://forums.aws.amazon.com/thread.jspa?threadID=109748)</li>\r\n\t<li>Option B is incorrect because the lifecycle policy does not help to restore the data.</li>\r\n\t<li>Option C is incorrect because the cached volumes are never stored in Glacier.</li>\r\n\t<li>Option D is CORRECT because you can take point-in-time snapshots of gateway volumes made available in the form of Amazon EBS snapshots. A new EBS volume can be created from the snapshot which can be mounted to an existing EC2 instance.</li>\r\n</ul>\r\n\r\n<p>For more information on this topic, please refer to the AWS FAQs.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/storagegateway/faqs/\" target=\"_blank\">https://aws.amazon.com/storagegateway/faqs/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18825,
          "question_id": 28708,
          "answers": [
            {
              "choice": "<p>Use an HTTPS GET to the Amazon S3 bucket where the files are located.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Restore by implementing a lifecycle policy on the Amazon S3 bucket.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Make an Amazon Glacier Restore API call to load the files into another Amazon S3 bucket within four to six hours.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EBS volume from a gateway snapshot and mount it to an Amazon EC2 instance.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28709,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You created three S3 buckets &ndash; &ldquo;mydomain.com&rdquo;&nbsp;( root domain ),&nbsp;&ldquo;downloads.mydomain.com&rdquo; ( subdomain ), and &ldquo;www.mydomain.com&rdquo; ( subdomain ). You uploaded your files ( including the &quot;index.html&quot; and &quot;error.html&quot; files ), enabled static website hosting, specified both of the default documents under the &ldquo;enable static website hosting&rdquo; header, and set the &ldquo;Make Public&rdquo; permission for the objects in each of the three buckets. After creating Route 53 Aliases for the three buckets, you will have your end-users test your websites by browsing to http://mydomain.com/error.html, http://downloads.mydomain.com/index.html, and http://www.mydomain.com. What problems will your testers encounter?</p>\r\n\r\n<p>Choose an option from the below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>Previously we are only allowed domain prefix, when creating AWS Route53 aliases for AWS S3 static websites was the &ldquo;www&rdquo;.</p>\r\n\r\n<p>However, this is no longer the case. You can now use other sub-domains.</p>\r\n\r\n<ul>\r\n\t<li>For more information on S3 web site hosting, please visit the below link-\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18826,
          "question_id": 28709,
          "answers": [
            {
              "choice": "<p>http://mydomain.com/error.html will not work because you did not set a value for the error.html file.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>http://www.mydomain.com will not work because the URL does not include a file name at the end of it.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>There will be no problems, all three sites should work.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>http://downloads.mydomain.com/index.html will not work because the &ldquo;downloads&rdquo; prefix is not a supported prefix for S3 websites using Route 53 aliases.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28710,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your supervisor is upset about the fact that SNS topics that he subscribed are now cluttering up his email inbox. How can he stop receiving the email from SNS without disrupting other users&rsquo; ability to receive the email from SNS?</p>\r\n\r\n<p>Choose 2 options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; A and D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Every request has a unsubscribe URL that can be used. Also, from the AWS console, one can just delete the subscription.</p>\r\n\r\n<p>Option A is CORRECT because deleting the user&#39;s subscription from the SNS topic will ensure that he will not receive any notifications (basically just unsubscribing&nbsp;him).</p>\r\n\r\n<p>Option B is incorrect because you cannot delete the endpoint from the SNS subscription.</p>\r\n\r\n<p>Option C is incorrect because if you delete the topic, none of the subscribers will get any notifications.&nbsp;</p>\r\n\r\n<p>Option D is CORRECT because the notifications have an option to unsubscribe which the user can avail to stop receiving the notifications.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on SNS subscription, please visit the below link.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html\" target=\"_blank\">http://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18827,
          "question_id": 28710,
          "answers": [
            {
              "choice": "<p>He can delete the subscription from the SNS topic responsible for the emails.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>He can delete the endpoint from the SNS subscription responsible for the emails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>He can delete the SNS topic responsible for the emails.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>He can use the unsubscribe information provided in the emails.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28711,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have created an Elastic Load Balancer with Duration-Based sticky sessions enabled in front of your six EC2 web application instances in US-West-2. For High Availability, there are three web application instances in Availability Zone 1 and three web application instances in Availability Zone 2. To load test, you set up a software-based load tester in Availability Zone 2 to send traffic to the Elastic Load Balancer, as well as letting several hundred users browse to the ELB&rsquo;s hostname.</p>\r\n\r\n<p>After a while, you notice that the users&rsquo; sessions are spread evenly across the EC2 instances in both AZ&rsquo;s. Still, the software-based load tester&rsquo;s traffic is hitting only the instances in Availability Zone 2. What steps can you take to resolve this problem?</p>\r\n\r\n<p>Choose 2 correct options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B and C</p>\r\n\r\n<p>When you create an elastic load balancer, a default level of capacity is allocated and configured. As Elastic Load Balancing sees changes in the traffic profile, it will scale up or down. The time required for Elastic Load Balancing to scale can range from 1 to 7 minutes, depending on the changes in the traffic profile. When Elastic Load Balancing scales, it updates the DNS record with the new list of IP addresses. To ensure that clients are taking advantage of the increased capacity, Elastic Load Balancing uses a TTL setting on the DNS record of 60 seconds. It is critical that you factor this changing DNS record into your tests. If you do not ensure that DNS is re-resolved or use multiple test clients to simulate increased load, the test may continue to hit a single IP address when Elastic Load Balancing has actually allocated many more IP addresses. Because your end-users will not all be resolving to that single IP address, your test will not be a realistic sampling of real-world behavior.</p>\r\n\r\n<p>Option A is incorrect because creating a load tester in US-East-1 is inconsequential since it is in a different region.</p>\r\n\r\n<p>Option B is CORRECT because if you do not ensure that DNS is re-resolved, the test may continue to hit the single IP address.</p>\r\n\r\n<p>Option C is CORRECT because if the requests come from globally distributed users, the DNS will not be resolved to a single IP address. The traffic would be distributed evenly across multiple instances.</p>\r\n\r\n<p>Option D is incorrect because the traffic will be routed to the same back-end instances as the users continue to access your application. The load will not be evenly distributed across the AZs.</p>\r\n\r\n<p>Please refer to the below article for more information.</p>\r\n\r\n<p><a href=\"http://aws.amazon.com/articles/1636185810492479\" target=\"_blank\">http://aws.amazon.com/articles/1636185810492479</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18828,
          "question_id": 28711,
          "answers": [
            {
              "choice": "<p>Create a software-based load tester in US-East-1 and test from there.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Force the software-based load tester to re-resolve DNS before every request.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a third party load-testing service to send requests from globally distributed clients.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Switch to application-controlled sticky sessions.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44767,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A Fintech company has its major applications deployed in AWS US East (N. Virginia) region. Since the applications need extremely fast processing, stable and high speed of network broadband is required. A Direct Connect has been set up in the region which connects its on-premises network with the Virtual Private Gateway in AWS VPC. Direct Connect has already run for two months smoothly. Now, as the business grows, new applications have been deployed in AWS US West region VPC recently. They also need to communicate with the on-premises datacenter which is located in Virginia using a high-speed network. Can the existing Direct Connect be reused for the VPC in the AWS US West region?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; C</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Direct Connect Gateway is a service that helps on connecting AWS Direct Connect connection over a private virtual interface to one or more VPCs in the same account that are located in the same or different Regions. The reinvent session <a href=\"https://www.youtube.com/watch?v=Pj11NFXDbLY\" target=\"_blank\">https://www.youtube.com/watch?v=Pj11NFXDbLY</a> has very good introductions of this feature. As below picture, the Direct Connect gateway enables you to use the AWS Direct Connect connection in the US East (N. Virginia) Region to access VPCs in your account in both the US East (N. Virginia) and US West (N. California) Regions.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq3-9.jpg\" style=\"height:314px; width:850px\" /></p>\r\n\r\n<p>For the documentation of Direct Connect Gateway, check the below link in <a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways.html\" target=\"_blank\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because by using Direct Connect Gateway, the existing Direct Connect can be reused. It does not need to create another new one which is time-consuming.</li>\r\n\t<li>Option B is incorrect because, via Direct Connect Gateway, VPCs in different regions can use the same AWS Direct Connect connection.</li>\r\n\t<li>Option C is CORRECT because to use Direct Connect Gateway, a private virtual interface is needed for the AWS Direct Connect connection to communicate with the Direct Connect gateway. In the meantime, attach a private virtual interface in VPC to the Direct Connect gateway.</li>\r\n\t<li>Option D is incorrect because a private virtual interface instead of a private VPN IPsec tunnel is needed between the AWS Direct Connect connection and the Direct Connect gateway.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34778,
          "question_id": 44767,
          "answers": [
            {
              "choice": "<p>No. Direct Connect cannot be reused. For this scenario, another new Direct Connect is required. Order a Direct Connect as soon as possible in the new region to save time.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>No. Direct Connect can only be reused if both AWS VPCs are located in the same region. Since the second AWS VPC is in another region, it is impossible to reuse the same Direct Connect.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Yes. A Direct Connect Gateway is required to associate with the virtual private gateway for the VPC. Then create a private virtual interface for the AWS Direct Connect connection to the Direct Connect gateway.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Yes. A Direct Connect Gateway is required to associate with the virtual private gateway for the VPC. Then create a private VPN IPsec tunnel between the AWS Direct Connect connection and the Direct Connect gateway.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28713,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>You are using DynamoDB to store data in your application. You create a table named &quot;Users&quot; with &quot;UserID&quot; as the Primary Key. However, you envision that, in some cases, you might need to query the table by &quot;UserName&quot; which cannot be set as the primary key. What changes would you make to this table to be able to query using UserName?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<p>Some applications might need to perform many kinds of queries, using a variety of different attributes as query criteria. To support these requirements, you can create one or more<em>&nbsp;global secondary indexes</em>&nbsp;and issue&nbsp;<code>Query</code>&nbsp;requests against these indexes in Amazon DynamoDB.<br />\r\n<br />\r\nTo speed up queries on non-key attributes, you can create a global secondary index. A global secondary index contains a selection of attributes from the base table, but they are organized by a primary key that is different from that of the table. The index key does not need to have any of the key attributes from the table. It doesn&#39;t even need to have the same key schema as a table.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> because creating another table is costly and unnecessary.</li>\r\n\t<li><strong>Option B is incorrect</strong> because UserName cannot be the primary key.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because, as mentioned above, creating a global secondary index on UserName would allow the user to efficiently access the table via querying on this attribute rather than UserID which is the primary key.</li>\r\n\t<li><strong>Option D is incorrect</strong> because DynamoDB tables are partitioned based on the primary key, and you cannot make UserName as the primary key.</li>\r\n</ul>\r\n\r\n<p>AWS Reference Docs:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html\" target=\"_blank\">http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 58977,
          "question_id": 28713,
          "answers": [
            {
              "question_id": "28713",
              "choice": "<p>Create a second table that contains all the information, but make UserName the primary key.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28713",
              "choice": "<p>Create a hash and change the primary key.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28713",
              "choice": "<p>Create a Global secondary index.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28713",
              "choice": "<p>Partition the table using UserName rather than UserID.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45124,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A large trading company is using an on-premise system to analyze the trade data. After the trading day closes, the data, including the day&rsquo;s transaction costs, execution reporting, and market performance, is sent to a Redhat server that runs big data analytics tools for next-day trading predictions. A bash script is used to configure resources and schedule when to run the data analytics workloads. How should the on-premise system be migrated to AWS with appropriate tools? (Select THREE)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer &ndash;&nbsp;A, C and&nbsp;E</strong></p>\n\n<p>There are several parts of the on-premise system. The first is the place to store the data from several sources. The second is the bash script that is used to schedule the data to analyze the task. And the third part is the big data analysis. All of these three parts need to be considered when being migrated. Refer to the below chart as a reference.</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/14/ckeditor_3.png\" style=\"height:266px; width:1000px\" /></p>\n\n<ul>\n\t<li>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because S3 is an ideal place to store trade data as it is highly available, durable, and cost-efficient.</li>\n\t<li>Option&nbsp;B is&nbsp;incorrect:&nbsp;Because the SQS queue is inappropriate to store source data. The trade data is very large&nbsp;which needs a durable store such as S3.</li>\n\t<li>Option C is&nbsp;CORRECT:&nbsp;Because AWS Batch is suitable to run a bash script using a job. The AWS Batch scheduler evaluates when, where, and how to run jobs.</li>\n\t<li>Option D is&nbsp;incorrect:&nbsp;Because you should set up compute resources through AWS Batch instead of ECS. ECS is not supported by AWS Batch.</li>\n\t<li>Option E is&nbsp;CORRECT:&nbsp;Because&nbsp;CloudWatch Events can be used to schedule and trigger AWS Batch jobs to perform data analytics.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35131,
          "question_id": 45124,
          "answers": [
            {
              "choice": "<p>Create an S3 bucket to store the trade data that is used for post-processing.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Send the trade data from various sources to a dedicated SQS queue.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Batch to execute the bash script using a proper job definition.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS ECS to handle the big data analytics workloads.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>&nbsp;</p>\n\n<p>Use CloudWatch Events to schedule data analytics jobs.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28714,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>In your CloudFormation template, you have an &quot;EnvironmentType&quot; input parameter (Dev/Staging/Production). AWS CloudFormation creates an Amazon EC2 instance for a production environment and attaches a volume to the instance. For other environments, AWS CloudFormation creates only the Amazon EC2 instance. Which section in your CloudFormation template would you add to implement this logic?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>The optional&nbsp;Conditions&nbsp;section includes statements that define when a resource is created or when a property is defined. For example, you can compare whether a value is equal to another value. Based on the result of that condition, you can conditionally create resources. If you have multiple conditions, separate them with commas.</p>\r\n\r\n<p>For more information on Cloudformation conditions, please visit the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html</a><br />\r\n<br />\r\n<strong>Note:</strong><br />\r\nAs per AWS documentation,<br />\r\n<br />\r\nYou might use conditions when you want to reuse a template that can create resources in different contexts, such as a test environment versus a production environment. In your template, you can add an <strong><em>EnvironmentType&nbsp;</em></strong>input parameter, which accepts either <strong><em>prod</em></strong>&nbsp;or <strong><em>test</em></strong>&nbsp;as inputs. For the production environment, you might include Amazon EC2 instances with certain capabilities.&nbsp;However, for the test environment, you want to use reduced capabilities to save money.&nbsp;<strong>With conditions, you can define which resources are created and how they&#39;re configured for each environment type.</strong></p>\r\n\r\n<p>Refer to page 276 on the link:&nbsp;<a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-ug.pdf\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-ug.pdf</a><br />\r\n<br />\r\nConditions are evaluated based on input parameter values that you specify when you create or update a stack. Within each condition, you can reference another condition, a parameter value, or a mapping. After you define all your conditions, you can associate them with resources and resource properties in the <strong><em>Resources</em></strong>&nbsp;and <strong><em>outputs</em></strong>&nbsp;sections of a template.</p>\r\n\r\n<p>Options A, B, C are incorrect because they cannot define the circumstances under which entities are created or configured or not.</p>\r\n\r\n<p>For more details, please check the below AWS Docs.<br />\r\n<a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html</a></p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18831,
          "question_id": 28714,
          "answers": [
            {
              "choice": "<p>Outputs</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Resources</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Mappings</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Conditions</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28715,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>There are currently multiple applications hosted in a VPC. During monitoring, it has been noticed that multiple port scans are coming in from a specific IP Address block. The internal security team has requested that all offending IP Addresses be denied for the next 24 hours. Which of the following is the best method to quickly and temporarily deny access from the specified IP Addresses?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>A network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.</p>\r\n\r\n<p>Options A and D are incorrect because (a) it will only work for Windows-based instances, and (b) a better approach is to block the traffic at the subnet layer via NACL rather than instance layer (windows firewall).</p>\r\n\r\n<p>Option B is CORRECT because the best way to allow or deny IP address-based access to the resources in the VPC is to configure rules in the Network access control list (NACL), which are applied at the subnet level.</p>\r\n\r\n<p>Option C is incorrect because (a) you cannot explicitly deny access to particular IP addresses via security group, and (b) a better approach is to block the traffic at the subnet layer via NACL rather than instance layer (security group).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on network ACL&rsquo;s, please refer to the below link-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html</a></p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18832,
          "question_id": 28715,
          "answers": [
            {
              "choice": "<p>Create an AD policy to modify the Windows Firewall settings on all hosts in the VPC to deny access from the IP Address block.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP Address block.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add a rule to all of the VPC Security Groups to deny access from the IP Address block.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Windows Firewall settings on all AMI&#39;s that your organization uses in that VPC to deny access from the IP address block.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28716,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have an Auto Scaling group associated with an Elastic Load Balancer (ELB). You have noticed that instances launched via the Auto Scaling group are being marked unhealthy due to an ELB health check, but these unhealthy instances are not terminated. What do you need to do to ensure that the instances marked unhealthy by the ELB will be terminated and replaced?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p>To discover the availability of your EC2 instances, an&nbsp;ELB periodically sends pings, attempts connections, or sends requests to test the EC2 instances. These tests are called&nbsp;health checks. The status of the instances that are healthy at the time of the health check is&nbsp;InService. The status of any instances that are unhealthy at the time of the health check is&nbsp;OutOfService.</p>\r\n\r\n<p>When you allow the Auto Scaling group (ASG) to receive the traffic from the ELB, it gets notified when the instance becomes unhealthy, and then it terminates it. See the images in the &quot;More information...&quot; section for more details.</p>\r\n\r\n<p>Option A is incorrect because changing the threshold will not enable ASG to know about the unhealthy instances.</p>\r\n\r\n<p>Option B is CORRECT because when you associate the ELB with ASG, you allow the ASG to receive the traffic from that ELB. When the health check type is ELB, the ASG will get aware of the unhealthy instances and terminate them.</p>\r\n\r\n<p>Option C is incorrect because increasing the interval will still not communicate the information about the unhealthy instances to the ASG.</p>\r\n\r\n<p>Option D is incorrect because this setting will not communicate the information about the unhealthy instances to the ASG either.</p>\r\n\r\n<p>More information on ELB with Auto Scaling Group:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_myagrl.png\" style=\"height:482px; width:612px\" /></p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_qy2joi.png\" style=\"height:792px; width:1097px\" /></p>\r\n\r\n<p>For more information on ELB, please visit the below URL-</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\" target=\"_blank\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18833,
          "question_id": 28716,
          "answers": [
            {
              "choice": "<p>Change the thresholds set on the Auto Scaling group health check.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the type of the health check to &quot;Elastic Load Balancing&quot; in your Auto Scaling group.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the value for the Health check interval set on the Elastic Load Balancer.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Change the health check on the Elastic Load Balancer to use TCP rather than HTTP checks.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28717,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have two Elastic Compute Cloud (EC2) instances inside a Virtual Private Cloud (VPC) in the same Availability Zone (AZ) but in different subnets. One instance is running a database, and the other instance an application that will interface with the database.</p>\r\n\r\n<p>You want to confirm that they can talk to each other for your application to work properly. Which two things do we need to confirm in the VPC settings so that these EC2 instances can communicate inside the VPC?</p>\r\n\r\n<p>Choose 2 correct options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - A and D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>In order to have the instances communicate with each other, you need to properly configure both Security Group and Network access control lists (NACLs). For the exam, remember that the Security Group operates at the instance level,&nbsp;whereas the NACL operates at the subnet level.</p>\r\n\r\n<p>Option A is CORRECT because the security groups must be defined to allow the webserver to communicate with the database server. An example image from the AWS documentation is given below:</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_h67mjo.png\" style=\"height:513px; width:500px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option B is incorrect because it is not necessary to have the two instances of the same type or&nbsp;the same key-pair.</p>\r\n\r\n<p>Option C is incorrect because configuring NAT instance or NAT gateway will not enable the two servers to communicate with each other. NAT instance/NAT gateway is used to enable the communication between instances in the private subnets and the Internet.</p>\r\n\r\n<p>Option D is CORRECT because the two servers are in two separate subnets. In order for them to communicate with each other, you need to configure the NACL&nbsp;&nbsp;as shown below:</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_eikwcn.png\" style=\"height:817px; width:700px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on VPC and Subnets, please visit the below URL-</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18834,
          "question_id": 28717,
          "answers": [
            {
              "choice": "<p>Security groups are set to allow the application host to talk to the database on the right port/protocol.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Both instances are the same instance class and using the same key-pair.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The default route is set to a NAT instance or Internet Gateway (IGW) for them to communicate.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A network ACL that allows communication between the two subnets.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28718,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are managing a legacy application inside VPC with hard-coded IP addresses in its configuration. Which mechanisms will allow the application to failover to new instances without much reconfiguration?</p>\r\n\r\n<p>Choose 2 options from the below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - B and D</p>\r\n\r\n<p>Option A is incorrect because rerouting to a failover instance cannot be done through a Traffic Manager.</p>\r\n\r\n<p>Option B is CORRECT because the attributes of a network interface follow it as it&#39;s attached or detached from an instance and reattached to another instance. When you move a network interface from one instance to another, network traffic is redirected to the new instance.</p>\r\n\r\n<p>Option C is incorrect because Route 53 cannot reroute the traffic to&nbsp;the failover instance with the same IP address.</p>\r\n\r\n<p>Option D is CORRECT because you can have a secondary IP address that can be configured on the primary ENI of the failover instance.</p>\r\n\r\n<p><strong>Best Practices for Configuring Network Interfaces</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>You can attach a network interface to an instance when it&#39;s running (hot attach), when it&#39;s stopped (warm attach), or when the instance is being launched (cold attach).</li>\r\n\t<li>You can detach secondary (eth<em>N</em>) network interfaces when the instance is running or stopped. However, you can&#39;t detach the primary (eth0) interface.</li>\r\n\t<li>You can attach a network interface in one subnet to an instance in another subnet in the same VPC; however, both the network interface and the instance must reside in the same Availability Zone.</li>\r\n\t<li>When launching an instance from the CLI or API, you can specify the network interfaces to attach to the instance for both the primary (eth0) and additional network interfaces.</li>\r\n\t<li>Launching an Amazon Linux or Windows Server instance with multiple network interfaces automatically configures interfaces, private IPv4 addresses, and route tables on the operating system of the instance.</li>\r\n\t<li>A warm or hot attach of an additional network interface may require you to manually bring up the second interface, configure the private IPv4 address, and modify the route table accordingly. Instances running Amazon Linux or Windows Server automatically recognize the warm or hot attach and configure themselves.</li>\r\n\t<li>Attaching another network interface to an instance (for example, a NIC teaming configuration) cannot be used as a method to increase or double the network bandwidth to or from the dual-homed instance.</li>\r\n\t<li>If you attach two or more network interfaces from the same subnet to an instance, you may encounter networking issues such as asymmetric routing. If possible, use a secondary private IPv4 address on the primary network interface instead. For more information, see&nbsp;<a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html#ManageMultipleIP\">Assigning a Secondary Private IPv4 Address</a>.</li>\r\n</ul>\r\n\r\n<p>For more information on Network Interfaces, please visit the below URL-</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18835,
          "question_id": 28718,
          "answers": [
            {
              "choice": "<p>Use the traffic manager to route the traffic to the failover instances.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a secondary ENI that can be moved to the failover instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Route53 health checks to reroute the traffic to the failover instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Assign a secondary private IP address to the primary ENI of the failover instance.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28719,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>A media company produces new video files on-premises every day with a total size of around 100GB after compression. All files have a size of 1-2 GB and need to be uploaded to Amazon S3 every night in a fixed time window between 3 AM and 5 AM. The current upload takes almost 3 hours, although less than half of the available bandwidth is used. What step(s) would ensure that the file uploads can complete in the allotted time window?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<p>When uploading large videos, it&rsquo;s always better to use AWS multipart file upload, especially when the bandwidth is not fully utilized.</p>\r\n\r\n<p><strong>Option A is incorrect</strong> because the existing bandwidth itself is not fully utilized. Increasing the bandwidth is not going to help; in fact, it will add to the cost.</p>\r\n\r\n<p><strong>Option B is CORRECT</strong> because&nbsp;Multipart Upload will fully utilize the available bandwidth and increase the throughput. It also has additional benefits, as mentioned below in the &quot;More Information&quot; section.</p>\r\n\r\n<p><strong>Option C is incorrect</strong> because there is a restriction on the size of upload in a single PUT operation. You cannot upload a file of size more than 5GB in a single upload. So this option is not going to help at all. You need to use multipart upload.</p>\r\n\r\n<p><strong>Option D is incorrect</strong> because this option requires you to put all the files daily on a storage drive and send it to AWS. Since the data has to be uploaded in a certain time frame and there is sufficient bandwidth already available, multipart upload is the best option compared to AWS Import/Export.</p>\r\n\r\n<p><strong>&nbsp;Advantages of Multipart Upload</strong></p>\r\n\r\n<ul>\r\n\t<li>Improved throughput&mdash;you can upload parts in parallel to improve throughput.</li>\r\n\t<li>Quick recovery from any network issues&mdash;smaller part size minimizes the impact of restarting a failed upload due to a network error.</li>\r\n\t<li>Pause and resume object uploads&mdash;you can upload object parts over time. Once you initiate a multipart upload, there is no expiry; you must explicitly complete or abort the multipart upload.</li>\r\n\t<li>Begin an upload before you know the final object size&mdash;you can upload an object as you are creating it.</li>\r\n</ul>\r\n\r\n<p><br />\r\nFor more information on Multi-part file upload for S3, please visit the URL -<br />\r\n<br />\r\n<a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/qfacts.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/qfacts.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 58349,
          "question_id": 28719,
          "answers": [
            {
              "question_id": "28719",
              "choice": "<p>Increase your network bandwidth to provide faster throughput to S3.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28719",
              "choice": "<p>Use Multipart upload to upload the data to s3.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28719",
              "choice": "<p>Pack all files into a single archive, upload it to S3, and then extract the files in AWS.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28719",
              "choice": "<p>Use AWS Import/Export to transfer the video files.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28720,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your team is excited about using AWS because now they have access to &quot;programmable Infrastructure&rdquo;. You have been asked to manage your AWS infrastructure in a manner similar to the way you might manage application code. You want to be able to deploy exact copies of different versions of your infrastructure, stage changes into different environments, revert to previous versions, and identify what versions are running at any particular time (development, test, QA, and production). Which approach addresses this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>You can use AWS Cloud Formation&rsquo;s sample templates or create your own templates to describe the AWS resources, and any associated dependencies or runtime parameters required to run your application. You don&rsquo;t need to figure out the order for provisioning AWS services or the subtleties of making those dependencies work. CloudFormation takes care of this for you. After the AWS resources are deployed, you can modify and update them in a controlled and predictable way, in effect applying version control to your AWS infrastructure the same way you do with your software. You can also visualize your templates as diagrams and edit them using a drag-and-drop interface with the AWS CloudFormation Designer.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because Cost Allocation Reports are not helpful for the purpose of the question.</p>\r\n\r\n<p>Option B is incorrect because CloudWatch is used for monitoring the metrics about different AWS resources.</p>\r\n\r\n<p>Option C is incorrect because it does not have the concept of programmable Infrastructure.</p>\r\n\r\n<p>Option D is CORRECT because&nbsp;AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on CloudFormation, please visit the link-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/cloudformation/\" target=\"_blank\">https://aws.amazon.com/cloudformation/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18837,
          "question_id": 28720,
          "answers": [
            {
              "choice": "<p>Use cost allocation reports and AWS Opsworks to deploy and manage your infrastructure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudWatch metrics and alerts along with resource tagging to deploy and manage your infrastructure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Beanstalk and a version control system like GIT to deploy and manage your infrastructure.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation and a version control system like GIT to deploy and manage your infrastructure.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28721,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>What would happen to an RDS (Relational Database Service) Multi-Availability Zone deployment if the primary DB instance fails?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because the IP address of the primary and standby instances remain the same and are not changed.</p>\r\n\r\n<p>Option B is incorrect because the CNAME record of the primary DB instance changes to the standby instance.</p>\r\n\r\n<p>Option C is incorrect because there is no new instance created in the standby AZ.</p>\r\n\r\n<p>Option D is CORRECT because the CNAME of the primary DB instance changes to the standby instance so that there is no impact on the application setting or any reference to the primary instance.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Amazon RDS Multi-AZ deployment:</strong></p>\r\n\r\n<p>Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure (for example, instance hardware failure, storage failure, or network disruption), Amazon RDS performs an automatic failover to the standby so that you can resume database operations as soon as the failover is complete.&nbsp;</p>\r\n\r\n<p>And as per the AWS documentation, the CNAME is changed to the standby DB when the primary one fails.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_wgn6rf.png\" style=\"height:334px; width:1040px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/faqs/\" target=\"_blank\">https://aws.amazon.com/rds/faqs/</a></li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_chafyc.png\" style=\"height:419px; width:700px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Multi-AZ RDS, please visit the link-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/rds/details/multi-az/\" target=\"_blank\">https://aws.amazon.com/rds/details/multi-az/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18838,
          "question_id": 28721,
          "answers": [
            {
              "choice": "<p>The IP address of the primary DB instance is switched to the standby DB instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The primary RDS (Relational Database Service) DB instance reboots and remains as primary.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A new DB instance is created in the standby availability zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The canonical name record (CNAME) is re-pointed from the primary to the secondary instance (standby).</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28722,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A user is trying to save some cost on the AWS services. Which of the below mentioned options will not help him to save cost?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; B</p>\r\n\r\n<p><br />\r\nOption A is incorrect because EBS volumes have a costing aspect,&nbsp;hence deleting the unutilized volumes will save some cost.</p>\r\n\r\n<p>Option B is CORRECT because an unused Auto Scaling launch configuration will not cost anything.</p>\r\n\r\n<p>Option C is incorrect because non-associated Elastic IP will cost you if not released.</p>\r\n\r\n<p>Option D is incorrect because an ELB without any instances behind it incurs costs.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on AWS Pricing, please visit the link-</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/pricing/services/\" target=\"_blank\">https://aws.amazon.com/pricing/services/</a></p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18839,
          "question_id": 28722,
          "answers": [
            {
              "choice": "<p>Delete the unutilized EBS volumes once the instance is terminated.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete the Auto Scaling launch configuration after the instances are terminated.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Release the elastic IP if not required once the instance is terminated.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete the AWS ELB after all the instances behind it are terminated.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 28723,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>An organization is planning to use AWS for its production rollout. The organization wants to implement automation for deployment such that it will automatically create a LAMP stack, download the latest PHP installable from S3, and set up the ELB. Which of the below mentioned AWS services meets the requirement for making an easy and orderly deployment of the software?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p>The Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.</p>\r\n\r\n<p>We can simply upload the code. Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, Auto Scaling to application health monitoring. Meanwhile, we can retain full control over the AWS resources used in the application and can access the underlying resources at any time.</p>\r\n\r\n<p>Hence, A is the CORRECT answer.</p>\r\n\r\n<p>For more information on launching a LAMP stack with Elastic Beanstalk ( click on &quot;Getting started with the Implementation Guide&quot; at the bottom of the page ):</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/getting-started/projects/launch-lamp-web-app/faq/\">https://aws.amazon.com/getting-started/projects/launch-lamp-web-app/faq/</a></li>\r\n</ul>\r\n\r\n<p>We can do it on&nbsp;AWS&nbsp;CloudFormation as well in a harder way, and it will be less Native.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html</a></li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18840,
          "question_id": 28723,
          "answers": [
            {
              "choice": "<p>AWS Elastic Beanstalk</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Cloudfront</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Cloudformation</p>",
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
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 45125,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A media and entertainment company utilizes several scripts to schedule daily tasks that drive lots of EC2 instances to enable accelerated and automated processing of data. This mainly aims for the compilation and processing of files, graphics, and visual effects. However, the operation manager is unsatisfied with the way that the tasks are scheduled and assigned you a task to choose AWS Batch instead. Which components of AWS Batch do you need to create? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;B, C</strong></p>\r\n\r\n<p>As a fully managed service, AWS Batch enables you to run batch computing workloads of any scale. The key components of AWS Batch are as below.</p>\r\n\r\n<p>1, Jobs: A unit of work (such as a shell script, a Linux executable, or a Docker container image) that you submit to AWS Batch.</p>\r\n\r\n<p>2, Job Definitions: A job definition specifies how jobs are to be run; you can think of it as a blueprint for the resources in your job.</p>\r\n\r\n<p>3, Job Queues: When you submit an AWS Batch job, you submit it to a particular job queue, where it resides until it is scheduled onto a compute environment.</p>\r\n\r\n<p>4, Compute Environment: A compute environment is a set of managed or unmanaged compute resources used to run jobs.</p>\r\n\r\n<ul>\r\n\t<li>Option A is&nbsp;incorrect:&nbsp;Because in AWS Batch, you do not need to configure the Auto Scaling settings that AWS Batch takes care of.</li>\r\n\t<li>Option&nbsp;B is&nbsp;CORRECT:&nbsp;Because a job is required for AWS Batch to understand&nbsp;the task.</li>\r\n\t<li>Option C is&nbsp;CORRECT:&nbsp;Because the compute&nbsp;environment is where AWS Batch executes the specific tasks.</li>\r\n\t<li>Option D is&nbsp;incorrect:&nbsp;Because AWS Batch uses a job queue rather than an SQS queue where you submit the AWS Batch job.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35132,
          "question_id": 45125,
          "answers": [
            {
              "choice": "<p>An Auto Scaling configuration for the AWS Batch computer resources to use.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A job that runs as a containerized application on an Amazon EC2 instance, using parameters that you specify in a job definition.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A compute&nbsp;environment that is a set of compute&nbsp;resources for running jobs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An SQS queue that AWS Batch uses to execute tasks. When there is a message in the queue, it is scheduled onto an AWS Batch compute environment.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 44768,
      "topic_id": 367,
      "course_id": 0,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>An IT company owns a web product in AWS that provides discount restaurant information to customers. It has used one S3 Bucket (my-bucket) to store restaurant data such as pictures, menus, etc. The product is deployed in VPC subnets. The company&rsquo;s Cloud Architect decides to configure a VPC endpoint for this S3 bucket to enhance the performance. To be compliant with security rules, it is required that the new VPC endpoint is only used to communicate with this specific S3 Bucket. On the other hand, the S3 bucket allows the read/write operations to come from this VPC endpoint. Which two options should the Cloud Architect choose to meet the security needs?</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A, D</strong></p>\n\n<p>In this case, two restrictions are required.</p>\n\n<p>1, For the VPC endpoint, restricting access to the specific S3 Bucket &ldquo;my-bucket&rdquo;. A VPC Endpoint policy is needed.</p>\n\n<p>{<br />\n&nbsp; &quot;Statement&quot;: [<br />\n&nbsp;&nbsp;&nbsp; {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;Access-to-my-bucket-only&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: &quot;*&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;s3:GetObject&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;s3:PutObject&quot;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3:::my-bucket&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;arn:aws:s3:::my-bucket/*&quot;]<br />\n&nbsp;&nbsp;&nbsp; }<br />\n&nbsp; ]<br />\n}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n<p>2, For the S3 bucket &ldquo;my-bucket&rdquo;, restricting access to the new VPC Endpoint. S3 Bucket policy is required.</p>\n\n<p>{<br />\n&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,<br />\n&nbsp; &quot;Id&quot;: &quot;Policy1415115909152&quot;,<br />\n&nbsp; &quot;Statement&quot;: [<br />\n&nbsp;&nbsp;&nbsp; {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;Access-to-specific-VPCE-only&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: &quot;*&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;s3:*&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: [&quot;arn:aws:s3:::my-bucket&quot;,<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:s3:::my-bucket/*&quot;],<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;StringNotEquals&quot;: {<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;aws:sourceVpce&quot;: &quot;vpce-1a2b3c4d&quot;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br />\n&nbsp;&nbsp;&nbsp; }<br />\n&nbsp; ]<br />\n}</p>\n\n<p>In terms of the S3 bucket policy for VPC Endpoint, the aws:SourceIp condition can not be used as for either NotIpAddress or IpAddress, the condition fails to match any specified IP address or IP address range. Instead, the specific endpoint ID should be used for the S3 bucket policy.</p>\n\n<p><strong>Explanation:</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT</strong> because the VPC Endpoint policy helps to restrict&nbsp;which entity can use the VPC Endpoint. It is an IAM resource policy that you attach to an endpoint when you create or modify the endpoint.</li>\n\t<li><strong>Option B is incorrect </strong>because users cannot configure a &quot;deny&quot; for the outbound traffic in a security group.</li>\n\t<li><strong>Option C is incorrect </strong>because, for the S3 bucket policy, the NotIpAddress condition is always met for the VPC endpoint so that it cannot help restrict the traffic from the VPC endpoint.</li>\n\t<li><strong>Option D is CORRECT</strong> because, in the S3 bucket policy, a rule can be set up to deny all actions if the incoming traffic is not from the VPC Endpoint ID.</li>\n\t<li><strong>Option E is incorrect</strong>: Same reason as option C.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 63597,
          "question_id": 44768,
          "answers": [
            {
              "question_id": "44768",
              "choice": "<p>Use a VPC Endpoint policy for Amazon S3 to restrict access to the S3 Bucket &ldquo;my-bucket&rdquo; so that the VPC Endpoint is only allowed to perform S3 actions on &ldquo;my-bucket&rdquo;.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44768",
              "choice": "<p>Modify the security group of the EC2 instance to limit the outbound actions to the VPC Endpoint by denying the outgoing traffic to the destination&nbsp;S3 bucket &ldquo;my-bucket&rdquo;.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44768",
              "choice": "<p>In the S3 bucket &ldquo;my-bucket&rdquo;, add an S3 bucket policy in which all actions are denied if the source IP address is not equal to the EC2 public IP (use &ldquo;NotIpAddress&rdquo; condition).</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "44768",
              "choice": "<p>For the S3 bucket &ldquo;my-bucket&rdquo;, use an S3 bucket policy that denies all actions if the source VPC Endpoint is not equal to the endpoint ID that is created.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "44768",
              "choice": "<p>Create an S3 bucket policy in the S3 bucket &ldquo;my-bucket&rdquo; which denies all actions unless the source IP address is equal to the EC2 public IP (use &ldquo;IpAddress&rdquo; condition).</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28589,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have large EC2 instances in your AWS infrastructure which you have recently set up. These instances carry out the task of creating JPEG files and store them on an S3 bucket and occasionally need to perform high computational tasks. After close monitoring, you see that the CPUs of these instances remain idle most of the time.&nbsp;</p>\r\n\r\n<p>Which of the below solutions will ensure better utilization of resources?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>In this scenario, the problem is that the large EC2 instances are mostly remaining unused. Hence, the solution should be to use instances that can cost less but still be able to carry out occasional high computational tasks.&nbsp;</p>\r\n\r\n<p>T2 instances are Burstable Performance Instances that provide a baseline level of CPU performance with the ability to burst above the baseline. The baseline performance and ability to burst are governed by CPU Credits. T2 instances accumulate CPU Credits when they are idle and consume CPU Credits when they are active. T2 instances are the lowest-cost Amazon EC2 instance option designed to dramatically reduce costs for applications that benefit from the ability to burst to full core performance whenever required.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because there is no issue with the current use of S3.</p>\r\n\r\n<p>Option B is incorrect because adding another large instance is, on the contrary, an expensive solution and would add to the existing cost.</p>\r\n\r\n<p>Option C is CORRECT because T2 instances are cost-effective and also provide a baseline level of CPU performance with the ability to burst above the baseline whenever required.</p>\r\n\r\n<p>Option D is incorrect because this option is not going to make efficient use of the current instances. It will not lower the cost of the architecture.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Instance types, please visit the below URL-</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/ec2/instance-types/t2/\" target=\"_blank\">https://aws.amazon.com/ec2/instance-types/t2/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18706,
          "question_id": 28589,
          "answers": [
            {
              "choice": "<p>Use Amazon glacier instead of S3.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add additional large instances by introducing a task group.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use T2 instances if possible.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure the application hosted on the EC2 instances uses larger files on S3 to handle more load.</p>",
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